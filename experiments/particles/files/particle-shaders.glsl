// ============================================
// PARTICLE VERTEX SHADER
// ============================================

attribute vec3 position;
attribute vec3 velocity;
attribute float size;
attribute float alpha;
attribute vec3 color;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform float uTime;
uniform float uPixelRatio;

varying vec3 vColor;
varying float vAlpha;

void main() {
    // Posição com movimento baseado em velocidade
    vec3 pos = position + velocity * uTime;
    
    // Aplicar transformações
    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    
    // Tamanho da partícula com atenuação por distância
    float distanceScale = 300.0 / -mvPosition.z;
    gl_PointSize = size * distanceScale * uPixelRatio;
    
    // Passar variáveis para fragment shader
    vColor = color;
    vAlpha = alpha;
}

// ============================================
// PARTICLE FRAGMENT SHADER
// ============================================

precision highp float;

varying vec3 vColor;
varying float vAlpha;

void main() {
    // Criar círculo suave
    vec2 center = gl_PointCoord - 0.5;
    float dist = length(center);
    
    // Gradiente radial suave
    float circle = 1.0 - smoothstep(0.0, 0.5, dist);
    
    // Glow effect
    float glow = exp(-dist * 4.0);
    
    // Combinar círculo e glow
    float alpha = (circle * 0.7 + glow * 0.3) * vAlpha;
    
    // Cor final com alpha
    gl_FragColor = vec4(vColor, alpha);
}

// ============================================
// ADVANCED PARTICLE VERTEX SHADER (com turbulência)
// ============================================

attribute vec3 position;
attribute vec3 velocity;
attribute float size;
attribute float alpha;
attribute vec3 color;
attribute float lifetime;
attribute float maxLifetime;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform float uTime;
uniform float uPixelRatio;
uniform vec3 uMousePosition;
uniform float uMouseInfluence;

varying vec3 vColor;
varying float vAlpha;
varying float vLifeProgress;

// Simplex noise function
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec3 v) {
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    
    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    
    i = mod289(i);
    vec4 p = permute(permute(permute(
        i.z + vec4(0.0, i1.z, i2.z, 1.0))
        + i.y + vec4(0.0, i1.y, i2.y, 1.0))
        + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    
    float n_ = 0.142857142857;
    vec3 ns = n_ * D.wyz - D.xzx;
    
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    
    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    
    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    
    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
    
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;
    
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
}

void main() {
    // Progresso do tempo de vida
    vLifeProgress = lifetime / maxLifetime;
    
    // Turbulência baseada em noise
    vec3 noisePos = position * 0.1 + uTime * 0.1;
    vec3 turbulence = vec3(
        snoise(noisePos),
        snoise(noisePos + 100.0),
        snoise(noisePos + 200.0)
    ) * 0.5;
    
    // Influência do mouse
    vec3 toMouse = uMousePosition - position;
    float mouseDist = length(toMouse);
    vec3 mouseForce = normalize(toMouse) * (uMouseInfluence / (mouseDist + 1.0));
    
    // Posição final
    vec3 pos = position + velocity * uTime + turbulence + mouseForce;
    
    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    
    // Tamanho com fade baseado em lifetime
    float sizeMultiplier = 1.0 - pow(vLifeProgress, 2.0);
    float distanceScale = 300.0 / -mvPosition.z;
    gl_PointSize = size * sizeMultiplier * distanceScale * uPixelRatio;
    
    vColor = color;
    vAlpha = alpha * (1.0 - vLifeProgress);
}

// ============================================
// ADVANCED PARTICLE FRAGMENT SHADER
// ============================================

precision highp float;

varying vec3 vColor;
varying float vAlpha;
varying float vLifeProgress;

uniform sampler2D uTexture;
uniform bool uUseTexture;

void main() {
    vec2 uv = gl_PointCoord;
    
    if (uUseTexture) {
        // Usar textura para forma da partícula
        vec4 texColor = texture2D(uTexture, uv);
        gl_FragColor = vec4(vColor, vAlpha) * texColor;
    } else {
        // Círculo procedural com glow
        vec2 center = uv - 0.5;
        float dist = length(center);
        
        // Core circle
        float circle = 1.0 - smoothstep(0.0, 0.5, dist);
        
        // Outer glow
        float glow = exp(-dist * 3.0);
        
        // Inner bright core
        float core = exp(-dist * 8.0);
        
        // Combinar elementos
        float alpha = (circle * 0.5 + glow * 0.3 + core * 0.2) * vAlpha;
        
        // Fade nas bordas baseado em lifetime
        alpha *= smoothstep(1.0, 0.8, vLifeProgress);
        
        gl_FragColor = vec4(vColor, alpha);
    }
}
