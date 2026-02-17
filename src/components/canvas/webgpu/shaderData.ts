export const PHYSICS_WGSL = `
// physics.wgsl - "Soul Physics" Compute Kernel (Liquid Morph Edition)

struct Particle {
    pos: vec4<f32>,       // xyz = position, w = mass/radius
    pos_old: vec4<f32>,   // xyz = old position (for Verlet), w = life/phase
    color: vec4<f32>,     // rgb = base color, a = opacity
    velocity_field: vec4<f32> // xyz = flow vector, w = turbulence
};

struct SimParams {
    delta_time: f32,
    gravity_x: f32,
    gravity_y: f32,
    gravity_z: f32,
    mouse_pos_x: f32,
    mouse_pos_y: f32,
    mouse_pos_z: f32,
    mouse_radius: f32,    
    damping: f32,         
    time: f32,
    target_shape_a: f32,    // Current shape index
    target_shape_b: f32,    // Next shape index
    target_lerp: f32,      // Morph progress 0..1
    noise_intensity: f32,   // Explosion factor
    explosion_seed: f32,    // Randomness for explosion
    base_color_r: f32,
    base_color_g: f32,
    base_color_b: f32
};

@group(0) @binding(0) var<storage, read_write> particlesA : array<Particle>;
@group(0) @binding(1) var<storage, read_write> particlesB : array<Particle>; // Ping-pong
@group(0) @binding(2) var<uniform> params : SimParams;
@group(0) @binding(3) var<storage, read> target_positions : array<vec4<f32>>; // All shapes concatenated

// --- Hash Function (Pseudo-Random) ---
fn hash3(p: vec3<f32>) -> vec3<f32> {
    var p3 = fract(p * vec3<f32>(.1031, .1030, .0973));
    p3 += dot(p3, p3.yxz + 33.33);
    return fract((p3.xxy + p3.yxx) * p3.zyx);
}

fn hash1(n: f32) -> f32 {
    return fract(sin(n) * 43758.5453123);
}

// --- Multi-Shape Target Resolver ---
fn get_target_for_shape(shape_idx: u32, particle_idx: u32, total_per_shape: u32) -> vec3<f32> {
    // Each shape has 'total_per_shape' points in the target_positions buffer
    let offset = shape_idx * total_per_shape + particle_idx;
    let t_total = arrayLength(&target_positions);
    
    if (offset < t_total) {
        return target_positions[offset].xyz;
    }
    
    // Fallback: Fibonacci Sphere if buffer is missing data
    let i = f32(particle_idx);
    let n = f32(total_per_shape);
    let phi = acos(1.0 - 2.0 * i / n);
    let theta = 3.14159 * (1.0 + 2.23606) * i;
    return vec3<f32>(8.0 * sin(phi) * cos(theta), 8.0 * sin(phi) * sin(theta), 8.0 * cos(phi));
}

@compute @workgroup_size(64)
fn simulate(@builtin(global_invocation_id) global_id: vec3<u32>) {
    let index = global_id.x;
    let total = arrayLength(&particlesA);
    if (index >= total) { return; }

    var p = particlesA[index];
    
    // 1. Determine Target Shape via Interpolation
    let shape_a = u32(params.target_shape_a + 0.1);
    let shape_b = u32(params.target_shape_b + 0.1);
    
    let pos_a = get_target_for_shape(shape_a, index, total);
    let pos_b = get_target_for_shape(shape_b, index, total);
    
    var target_pos = mix(pos_a, pos_b, params.target_lerp);
    
    // 2. Physics & Forces
    
    // A. Seek Force (Attraction to Target)
    let to_target = target_pos - p.pos.xyz;
    let dist_target = length(to_target);
    var seek_force = vec3<f32>(0.0);
    
    if (dist_target > 0.01) {
        seek_force = normalize(to_target) * dist_target * 2.5; // Slightly stronger seek
    }
    
    // B. Noise & Explosion
    // Combine base "soul" noise with explicit explosion intensity
    let noise_coord = p.pos.xyz * 0.15 + params.time * 0.3;
    let base_noise = (hash3(noise_coord) - 0.5) * 2.0;
    
    // Explosion: Dynamic radial force + chaotic noise
    let explosion_dir = normalize(p.pos.xyz + vec3<f32>(0.001));
    let explosion_noise = (hash3(p.pos.xyz * 0.5 + params.explosion_seed) - 0.5) * 20.0;
    let explosion_force = (explosion_dir * 15.0 + explosion_noise) * params.noise_intensity;
    
    // C. Mouse Interaction (Repulsion)
    let mouse_pos = vec3<f32>(params.mouse_pos_x, params.mouse_pos_y, params.mouse_pos_z);
    let to_mouse = p.pos.xyz - mouse_pos;
    let dist_mouse_sq = dot(to_mouse, to_mouse);
    var mouse_force = vec3<f32>(0.0);
    
    if (dist_mouse_sq < params.mouse_radius * params.mouse_radius) {
        let dist = sqrt(dist_mouse_sq);
        let dir = normalize(to_mouse);
        let strength = exp(-dist_mouse_sq / (params.mouse_radius * 5.0)) * 100.0;
        mouse_force = dir * strength;
    }

    // 3. Integration (Verlet with Seek)
    // Modify velocity based on forces
    var velocity = (p.pos.xyz - p.pos_old.xyz) * params.damping;
    
    // Total Force
    let total_force = seek_force + base_noise + mouse_force + explosion_force;
    
    // Apply Force
    velocity += total_force * params.delta_time * params.delta_time;
    
    // Limit max velocity to prevent explosion
    let max_vel = 0.5;
    if (length(velocity) > max_vel) {
        velocity = normalize(velocity) * max_vel;
    }

    let next_pos = p.pos.xyz + velocity;

    // 4. Update
    particlesB[index].pos_old = p.pos; 
    particlesB[index].pos = vec4<f32>(next_pos, p.pos.w);
    
    // Color: Mix Muted Semantic Color with Black Piano
    let speed = length(velocity) / params.delta_time;
    let t = smoothstep(0.0, 5.0, speed * 100.0);
    let base_color = vec3<f32>(params.base_color_r, params.base_color_g, params.base_color_b);
    let color_slow = base_color * 0.05; // Very dim semantic tint
    let color_fast = base_color * 0.4;  // Muted color on move (instead of bright glowing)
    particlesB[index].color = vec4<f32>(mix(color_slow, color_fast, t), 0.95);
    
    particlesB[index].velocity_field = vec4<f32>(velocity, 0.0);
}
`;

export const RENDER_WGSL = `
// render.wgsl - Cinematic PBR "Microscope" (Vertex Pulling + Textures + ACES)

struct Particle {
    pos: vec4<f32>,
    pos_old: vec4<f32>,
    color: vec4<f32>,
    velocity_field: vec4<f32>
};

struct Uniforms {
    view_projection: mat4x4<f32>,
    camera_pos: vec3<f32>, 
    padding: f32
};

@group(0) @binding(0) var<storage, read> particles : array<Particle>;
@group(0) @binding(1) var<uniform> uniforms : Uniforms;
@group(0) @binding(2) var spriteSampler: sampler;
@group(0) @binding(3) var spriteTexture: texture_2d<f32>;

struct VertexOutput {
    @builtin(position) position : vec4<f32>,
    @location(0) color : vec4<f32>,
    @location(1) uv : vec2<f32>,
    @location(2) world_pos : vec3<f32>,
    @location(3) view_depth : f32,
};

var<private> quad_pos : array<vec2<f32>, 4> = array<vec2<f32>, 4>(
    vec2<f32>(-1.0, -1.0),
    vec2<f32>( 1.0, -1.0),
    vec2<f32>(-1.0,  1.0),
    vec2<f32>( 1.0,  1.0)
);

@vertex
fn vs_main(
    @builtin(vertex_index) vertex_index : u32,
    @builtin(instance_index) instance_index : u32
) -> VertexOutput {
    let p = particles[instance_index];
    let quad_v = quad_pos[vertex_index];
    
    // Size with life variation
    let size = p.pos.w * 0.20; 
    
    let center_world = p.pos.xyz;
    let clip_center = uniforms.view_projection * vec4<f32>(center_world, 1.0);
    
    var output : VertexOutput;
    
    // Billboard Expansion (Screen Align)
    // Adding offset before perspective divide creates naturally shrinking particles
    output.position = clip_center + vec4<f32>(quad_v * size, 0.0, 0.0);
    
    output.color = p.color;
    output.uv = quad_v * 0.5 + 0.5;
    output.world_pos = center_world;
    output.view_depth = clip_center.w; // w is roughly linear depth in view space
    
    return output;
}

// ACES Tone Mapping
fn aces_tone_mapping(color: vec3<f32>) -> vec3<f32> {
    let a = 2.51;
    let b = 0.03;
    let c = 2.43;
    let d = 0.59;
    let e = 0.14;
    return clamp((color * (a * color + b)) / (color * (c * color + d) + e), vec3<f32>(0.0), vec3<f32>(1.0));
}

@fragment
fn fs_main(input : VertexOutput) -> @location(0) vec4<f32> {
    // 1. Texture Sample (Dust/Bokeh)
    let texColor = textureSample(spriteTexture, spriteSampler, input.uv);
    
    // 2. Depth of Field (Simulated)
    // Focus plane at ~20 units (camera distance)
    let focal_dist = 20.0;
    let blur_strength = clamp(abs(input.view_depth - focal_dist) * 0.15, 0.0, 1.0);
    
    // Particles out of focus become more transparent (Bokeh fade)
    // And "softer" (simulated by texture alpha channel if we had mips, but here just atomic alpha)
    let dof_alpha = 1.0 - smoothstep(0.2, 0.8, blur_strength);
    
    // 3. Gold/Dust Materiality
    // Boost brightness for HDR effect
    let energy = input.color.a * 3.0; // Overdrive
    let base_color = input.color.rgb * texColor.rgb * energy;
    
    // 4. Tone Mapping
    let mapped_color = aces_tone_mapping(base_color);
    
    // 5. Final Alpha & Texture Presence
    // Increase grain/texture visibility for the background
    let tex_presence = mix(1.0, texColor.a, 0.8);
    let final_alpha = input.color.a * tex_presence * (0.3 + 0.7 * dof_alpha);
    
    if (final_alpha < 0.01) { discard; }

    return vec4<f32>(mapped_color, final_alpha);
}
`;
