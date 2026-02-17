// render.wgsl - Vertex Pulling & PBR-ish Rendering

struct Particle {
    pos: vec4<f32>,
    pos_old: vec4<f32>,
    color: vec4<f32>,
    velocity_field: vec4<f32>
};

struct Uniforms {
    view_projection: mat4x4<f32>,
    camera_pos: vec3<f32>,
};

@group(0) @binding(0) var<storage, read> particles : array<Particle>;
@group(0) @binding(1) var<uniform> uniforms : Uniforms;

struct VertexOutput {
    @builtin(position) position : vec4<f32>,
    @location(0) color : vec4<f32>,
    @location(1) uv : vec2<f32>,
    @location(2) world_pos : vec3<f32>,
};

// Quad vertices for particle billboarding
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
    
    // Billboard calculation (View-aligned)
    // Simplified: Assuming camera looks roughly towards -Z or handling via view matrix normally
    // Ideally we construct the billboard basis vectors from the view matrix.
    
    // Size based on mass (w component)
    let size = p.pos.w * 0.1; 
    
    // Explicit Vertex Pulling: No attributes!
    // We construct the world position directly.
    // NOTE: This basic billboarding needs the view matrix right/up vectors for perfect alignment.
    // For now, we'll do screen-space quad expansion in clip space (Point Sprite style) 
    // OR simple view-plane aligned offset if we had the vectors.
    
    // Let's do simple 3D expansion assuming standard camera for now, 
    // or better: view_projection * center + projection * offset
    
    let center_world = p.pos.xyz;
    let clip_center = uniforms.view_projection * vec4<f32>(center_world, 1.0);
    
    // Perspective division to get screen size
    let screen_size = size * (1.0 / clip_center.w); 
    
    var output : VertexOutput;
    // Simple 2D offset in clip space (keeps them facing camera perfectly)
    output.position = vec4<f32>(
        clip_center.x + quad_v.x * size, // Simplification
        clip_center.y + quad_v.y * size,
        clip_center.z,
        clip_center.w
    );
    // Actually, proper 3D billboarding is safer for depth. 
    // But for "Phantom Weaver" ethereal look, Screen Plane is fine initially.
    
    // Actually, let's try strict view-projection for position:
    // This requires extracting Camera Right/Up from view matrix in CPU or passing them.
    // fallback: just project the center.
    
    output.color = p.color;
    output.uv = quad_v * 0.5 + 0.5; // 0..1
    output.world_pos = center_world;
    
    return output;
}

@fragment
fn fs_main(input : VertexOutput) -> @location(0) vec4<f32> {
    // Circular Alpha Mask
    let dist = length(input.uv - 0.5);
    if (dist > 0.5) {
        discard;
    }
    
    // Soft Particle Edge
    let alpha = (1.0 - smoothstep(0.0, 0.5, dist)) * input.color.a;
    
    // Sheen / Glow (Fake PBR for now)
    let glow = max(0.0, 1.0 - dist * 2.0);
    
    return vec4<f32>(input.color.rgb + vec3<f32>(glow * 0.5), alpha);
}
