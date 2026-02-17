// physics.wgsl - "Soul Physics" Compute Kernel

struct Particle {
    pos: vec4<f32>,       // xyz = position, w = mass/radius
    pos_old: vec4<f32>,   // xyz = old position (for Verlet), w = life/phase
    color: vec4<f32>,     // rgb = base color, a = opacity
    velocity_field: vec4<f32> // xyz = flow vector, w = turbulence
};

struct SimParams {
    delta_time: f32,
    gravity: vec3<f32>,
    mouse_pos: vec3<f32>, // Pointer Disturbance Field
    mouse_radius: f32,    // Radius of emotional influence
    damping: f32,         // Viscosity of the "ether"
    time: f32,            // Global time for noise
};

@group(0) @binding(0) var<storage, read_write> particlesA : array<Particle>;
@group(0) @binding(1) var<storage, read_write> particlesB : array<Particle>; // Ping-pong
@group(0) @binding(2) var<uniform> params : SimParams;

// Simplex Noise (Placeholder for now, or imported if using a preprocessor)
// For simplicity in Phase 1, we use a simple procedural pseudo-random or hash function
fn hash(p: vec3<f32>) -> vec3<f32> {
    var p3 = fract(p * vec3<f32>(.1031, .1030, .0973));
    p3 += dot(p3, p3.yxz + 33.33);
    return fract((p3.xxy + p3.yxx) * p3.zyx);
}

@compute @workgroup_size(64)
fn simulate(@builtin(global_invocation_id) global_id: vec3<u32>) {
    let index = global_id.x;
    if (index >= arrayLength(&particlesA)) { return; }

    var p = particlesA[index];
    
    // 1. Recover implicit velocity (Verlet)
    // v = (pos - pos_old) * damping
    let velocity = (p.pos.xyz - p.pos_old.xyz) * params.damping;
    
    // 2. Apply Forces (Soul Physics)
    var force = params.gravity;
    
    // Curl Noise / Turbulence approximation
    let noise = (hash(p.pos.xyz * 0.1 + params.time) - 0.5) * 2.0;
    force += noise * p.velocity_field.w;

    // Pointer Disturbance (Sentience)
    let to_mouse = p.pos.xyz - params.mouse_pos;
    let dist_sq = dot(to_mouse, to_mouse);
    
    if (dist_sq < params.mouse_radius * params.mouse_radius) {
        let dist = sqrt(dist_sq);
        let dir = normalize(to_mouse);
        // Gaussian repulsion based on "emotion"
        let strength = exp(-dist_sq / (params.mouse_radius * 10.0)) * 50.0;
        force += dir * strength;
    }

    // 3. Verlet Integration
    // next_pos = pos + velocity + force * dt * dt
    let next_pos = p.pos.xyz + velocity + force * params.delta_time * params.delta_time;
    
    // 4. Floor/Boundary Collision (Simple)
    var final_pos = next_pos;
    if (final_pos.y < -10.0) {
        final_pos.y = -10.0;
        // Simple friction/bounce could be added to pos_old here
    }

    // Write to Output Buffer (Ping-Pong)
    particlesB[index].pos_old = p.pos; // Current becomes old
    particlesB[index].pos = vec4<f32>(final_pos, p.pos.w);
    particlesB[index].color = p.color;
    particlesB[index].velocity_field = p.velocity_field;
}
