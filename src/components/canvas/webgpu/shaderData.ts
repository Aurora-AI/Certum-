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
    target_shape: f32,    // Changed to f32 to match JS Float32Array
    padding: f32          
};

@group(0) @binding(0) var<storage, read_write> particlesA : array<Particle>;
@group(0) @binding(1) var<storage, read_write> particlesB : array<Particle>; // Ping-pong
@group(0) @binding(2) var<uniform> params : SimParams;
@group(0) @binding(3) var<storage, read> target_positions : array<vec4<f32>>; // xyz = target, w = ignored

// --- Hash Function (Pseudo-Random) ---
fn hash3(p: vec3<f32>) -> vec3<f32> {
    var p3 = fract(p * vec3<f32>(.1031, .1030, .0973));
    p3 += dot(p3, p3.yxz + 33.33);
    return fract((p3.xxy + p3.yxx) * p3.zyx);
}

fn hash1(n: f32) -> f32 {
    return fract(sin(n) * 43758.5453123);
}

// --- Shape Generators (Target Pos) ---
// Returns the target position for a particle based on its ID and the shape

fn get_sphere_target(id: u32, total: u32) -> vec3<f32> {
    // Fibonacci Sphere Distribution
    let i = f32(id);
    let n = f32(total);
    let phi = acos(1.0 - 2.0 * i / n);
    let theta = 3.14159 * (1.0 + 2.23606) * i; // Golden Angle
    
    let radius = 8.0;
    let x = radius * sin(phi) * cos(theta);
    let y = radius * sin(phi) * sin(theta);
    let z = radius * cos(phi);
    
    // Slow Y-axis rotation — keeps the orb alive
    let rot_speed = params.time * 0.15;
    let rx = x * cos(rot_speed) + z * sin(rot_speed);
    let rz = -x * sin(rot_speed) + z * cos(rot_speed);
    
    return vec3<f32>(rx, y, rz);
}

fn get_shield_target(id: u32, total: u32) -> vec3<f32> {
    // Curved Shield (Parametric Surface)
    let i = f32(id);
    let n = f32(total);
    let grid_side = sqrt(n);
    let u = (i % grid_side) / grid_side;     // 0..1 (Horizontal)
    let v = floor(i / grid_side) / grid_side; // 0..1 (Vertical)
    
    // Map to Surface: X (-10..10), Y (-10..10), Z (Curvature)
    let x = (u - 0.5) * 20.0;
    let y = (v - 0.5) * 20.0;
    let z = cos(u * 3.14159) * 5.0; // Arch effect
    
    // Tilt to face camera/diagonal
    let tilted_y = y * cos(0.5) - z * sin(0.5);
    let tilted_z = y * sin(0.5) + z * cos(0.5);
    
    return vec3<f32>(x, tilted_y, tilted_z);
}

fn get_stream_target(id: u32, total: u32) -> vec3<f32> {
    // Spiral Stream / Tornado
    let i = f32(id);
    let n = f32(total);
    let t = params.time * 0.5;
    
    let angle = i * 0.1 + t;
    let radius = 2.0 + (i / n) * 8.0;
    let height = (i / n) * 20.0 - 10.0;
    
    let x = radius * cos(angle);
    let z = radius * sin(angle);
    
    return vec3<f32>(x, height, z);
}

@compute @workgroup_size(64)
fn simulate(@builtin(global_invocation_id) global_id: vec3<u32>) {
    let index = global_id.x;
    let total = arrayLength(&particlesA);
    if (index >= total) { return; }

    var p = particlesA[index];
    
    // 1. Determine Target Shape
    var target_pos = vec3<f32>(0.0);
    let shape_id = u32(params.target_shape + 0.1); // Safely cast float to uint
    
    if (shape_id == 0u) {
        target_pos = get_sphere_target(index, total);
    } else if (shape_id == 1u) {
        target_pos = get_shield_target(index, total);
    } else if (shape_id == 2u) {
        target_pos = get_stream_target(index, total);
    } else {
        // Arbitrary Target Buffer (Shape 3)
        // Ensure we don't read out of bounds if targets buffer is smaller
        let t_total = arrayLength(&target_positions);
        if (index < t_total) {
             target_pos = target_positions[index].xyz;
        } else {
             target_pos = get_sphere_target(index, total); // Fallback
        }
    }
    
    // 2. Physics & Forces
    
    // A. Seek Force (Attraction to Target)
    // Spring-like behavior: F = k * (target - pos)
    let to_target = target_pos - p.pos.xyz;
    let dist_target = length(to_target);
    var seek_force = vec3<f32>(0.0);
    
    if (dist_target > 0.01) {
        seek_force = normalize(to_target) * dist_target * 2.0; // Spring strength
    }
    
    // B. Curl Noise (Fluidity)
    // Add turbulence so they don't move in straight lines
    let noise = (hash3(p.pos.xyz * 0.2 + params.time * 0.5) - 0.5) * 4.0;
    
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
    let total_force = seek_force + noise + mouse_force;
    
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
    
    // Color: Black Piano — Pure black with micro-variation on velocity
    let speed = length(velocity) / params.delta_time;
    let t = smoothstep(0.0, 5.0, speed * 100.0);
    let color_slow = vec3<f32>(0.0, 0.0, 0.0);       // Pure Black
    let color_fast = vec3<f32>(0.06, 0.06, 0.06);     // Near-Black (Piano key sheen)
    particlesB[index].color = vec4<f32>(mix(color_slow, color_fast, t), 0.9);
    
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
    
    // 5. Final Alpha
    let final_alpha = input.color.a * texColor.a * (0.3 + 0.7 * dof_alpha);
    
    if (final_alpha < 0.01) { discard; }

    return vec4<f32>(mapped_color, final_alpha);
}
`;
