'use client';

import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const COUNT = 15000;

// --- Geometry Generators ---

function getRandomPointInSphere(r: number) {
  const u = Math.random();
  const v = Math.random();
  const theta = 2 * Math.PI * u;
  const phi = Math.acos(2 * v - 1);
  const rad = Math.cbrt(Math.random()) * r;
  return new THREE.Vector3(
    rad * Math.sin(phi) * Math.cos(theta),
    rad * Math.sin(phi) * Math.sin(theta),
    rad * Math.cos(phi)
  );
}

// 1. AquaGard: Droplet (Tapered Sphere)
function generateDroplet() {
    const vertices = [];
    for (let i = 0; i < COUNT; i++) {
        const p = getRandomPointInSphere(2.5);
        // Taper top
        if (p.y > 0) {
            p.x *= (1 - p.y * 0.3);
            p.z *= (1 - p.y * 0.3);
            p.y *= 1.2; 
        }
        vertices.push(p.x, p.y, p.z);
    }
    return new Float32Array(vertices);
}

// 2. ThermoShield: Shield (Curved Plate)
function generateShield() {
    const vertices = [];
    for (let i = 0; i < COUNT; i++) {
        // Shield shape: Part of a sphere surface with thickness
        const u = Math.random();
        const v = Math.random();
        
        // Semi-sphere-ish patch
        const theta = (u - 0.5) * Math.PI * 0.8; // Width angle
        const phi = (v - 0.5) * Math.PI * 1.2;   // Height angle
        
        const r = 3.0 + (Math.random() - 0.5) * 0.2; // Thickness
        
        const x = r * Math.sin(theta);
        const y = r * Math.sin(phi);
        const z = r * Math.cos(theta) * Math.cos(phi) * 0.2; // Flatten z
        
        vertices.push(x, y, z);
    }
    return new Float32Array(vertices);
}

// 3. OxyBlock: Volumetric Ring (Toriverse)
function generateRing() {
    const vertices = [];
    for (let i = 0; i < COUNT; i++) {
        const u = Math.random() * Math.PI * 2; // Angle around major axis
        
        // Volumetric tube distribution
        const tubeRadius = 0.8;
        const r = tubeRadius * Math.sqrt(Math.random()); // Uniform distribution inside tube
        const theta = Math.random() * Math.PI * 2;       // Angle inside tube
        
        const ringRadius = 3.0;
        
        // Torus parametric equation with volumetric offset
        const x = (ringRadius + r * Math.cos(theta)) * Math.cos(u);
        const y = (ringRadius + r * Math.cos(theta)) * Math.sin(u);
        const z = r * Math.sin(theta);
        
        vertices.push(x, y, z);
    }
    return new Float32Array(vertices);
}

// --- Shader ---

const BarrierShader = {
  uniforms: {
    uTime: { value: 0 },
    uTransition: { value: 0 },
    uColorStart: { value: new THREE.Color('#30D9C4') }, 
    uColorEnd: { value: new THREE.Color('#FF5F6D') },   
    uPixelRatio: { value: 1 },
    uMouse: { value: new THREE.Vector3(0, 0, 0) } // NEW: Mouse Uniform
  },
  vertexShader: `
    uniform float uTime;
    uniform float uTransition;
    uniform float uPixelRatio;
    uniform vec3 uMouse;
    
    attribute vec3 aTarget; 
    
    varying float vAlpha;
    varying float vProgress;
    varying float vSpeed;

    // --- Simplex 3D Noise (Compact) ---
    vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
    vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
    float snoise(vec3 v) {
      const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
      const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
      vec3 i  = floor(v + dot(v, C.yyy) );
      vec3 x0 = v - i + dot(i, C.xxx) ;
      vec3 g = step(x0.yzx, x0.xyz);
      vec3 l = 1.0 - g;
      vec3 i1 = min( g.xyz, l.zxy );
      vec3 i2 = max( g.xyz, l.zxy );
      vec3 x1 = x0 - i1 + C.xxx;
      vec3 x2 = x0 - i2 + C.yyy;
      vec3 x3 = x0 - D.yyy;
      i = mod289(i);
      vec4 p = permute( permute( permute(
                 i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
               + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
               + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
      float n_ = 0.142857142857;
      vec3  ns = n_ * D.wyz - D.xzx;
      vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
      vec4 x_ = floor(j * ns.z);
      vec4 y_ = floor(j - 7.0 * x_ );
      vec4 x = x_ *ns.x + ns.yyyy;
      vec4 y = y_ *ns.x + ns.yyyy;
      vec4 h = 1.0 - abs(x) - abs(y);
      vec4 b0 = vec4( x.xy, y.xy );
      vec4 b1 = vec4( x.zw, y.zw );
      vec4 s0 = floor(b0)*2.0 + 1.0;
      vec4 s1 = floor(b1)*2.0 + 1.0;
      vec4 sh = -step(h, vec4(0.0));
      vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
      vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
      vec3 p0 = vec3(a0.xy,h.x);
      vec3 p1 = vec3(a0.zw,h.y);
      vec3 p2 = vec3(a1.xy,h.z);
      vec3 p3 = vec3(a1.zw,h.w);
      vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
      p0 *= norm.x;
      p1 *= norm.y;
      p2 *= norm.z;
      p3 *= norm.w;
      vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
      m = m * m;
      return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                    dot(p2,x2), dot(p3,x3) ) );
    }

    // --- Curl Noise ---
    vec3 snoiseVec3( vec3 x ){
      float s  = snoise(vec3( x ));
      float s1 = snoise(vec3( x.y - 19.1 , x.z + 33.4 , x.x + 47.2 ));
      float s2 = snoise(vec3( x.z + 74.2 , x.x - 124.5 , x.y + 99.4 ));
      return vec3( s , s1 , s2 );
    }
    vec3 curlNoise( vec3 p ){
      const float e = .1;
      vec3 dx = vec3( e   , 0.0 , 0.0 );
      vec3 dy = vec3( 0.0 , e   , 0.0 );
      vec3 dz = vec3( 0.0 , 0.0 , e   );
      vec3 p_x0 = snoiseVec3( p - dx );
      vec3 p_x1 = snoiseVec3( p + dx );
      vec3 p_y0 = snoiseVec3( p - dy );
      vec3 p_y1 = snoiseVec3( p + dy );
      vec3 p_z0 = snoiseVec3( p - dz );
      vec3 p_z1 = snoiseVec3( p + dz );
      float x = p_y1.z - p_y0.z - p_z1.y + p_z0.y;
      float y = p_z1.x - p_z0.x - p_x1.z + p_x0.z;
      float z = p_x1.y - p_x0.y - p_y1.x + p_y0.x;
      const float divisor = 1.0 / ( 2.0 * e );
      return normalize( vec3( x , y , z ) * divisor );
    }

    void main() {
      // 1. Morph Position
      vec3 pos = mix(position, aTarget, uTransition);
      
      // 2. Heat (Transition Intensity)
      float heat = sin(uTransition * 3.14159);
      
      // 3. Curl Noise Flow (Organism Motion)
      // Slow constant flow + High speed active flow during transition
      vec3 flow = curlNoise(pos * 0.5 + uTime * 0.1); 
      vec3 activeFlow = curlNoise(pos * 1.5 + uTime * 0.5) * heat;
      
      vec3 displacement = (flow * 0.1) + (activeFlow * 0.5);
      
      // 4. Mouse Interaction (Reactive Field)
      float distToMouse = distance(pos, uMouse);
      float mouseInfluence = smoothstep(4.0, 0.0, distToMouse); // 4.0 radius
      vec3 mouseDir = normalize(pos - uMouse);
      vec3 mouseForce = mouseDir * mouseInfluence * 2.0;

      // Apply Forces
      pos += displacement + mouseForce;
      
      vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
      gl_Position = projectionMatrix * mvPosition;
      
      // Size Calculation
      gl_PointSize = (120.0 / -mvPosition.z) * uPixelRatio; // Increased size slightly
      
      // Varyings
      vAlpha = 0.5 + (heat * 0.5) + (mouseInfluence * 0.5); // Brighten on heat or touch
      vProgress = uTransition;
      vSpeed = length(displacement) + mouseInfluence; // For color heat
    }
  `,
  fragmentShader: `
    uniform vec3 uColorStart;
    uniform vec3 uColorEnd;
    
    varying float vAlpha;
    varying float vProgress;
    varying float vSpeed;

    void main() {
      // Circle Shape
      vec2 center = gl_PointCoord - 0.5;
      float dist = length(center);
      if (dist > 0.5) discard;
      
      // Color Mix
      vec3 color = mix(uColorStart, uColorEnd, vProgress);
      
      // Energy Glow (Whiter at high speed)
      color += vec3(0.2) * vSpeed; 
      
      // Alpha Gradient (Soft Particle)
      float alpha = (1.0 - smoothstep(0.0, 0.5, dist)) * vAlpha;
      
      // Final Output
      gl_FragColor = vec4(color, alpha);
    }
  `
};

interface BarrierParticlesProps {
    progress: React.MutableRefObject<number>; // 0.0 to 2.0
}

export default function BarrierParticles({ progress }: BarrierParticlesProps) {
    // Generate Shapes
    const shapeDroplet = useMemo(() => generateDroplet(), []);
    const shapeShield = useMemo(() => generateShield(), []);
    const shapeRing = useMemo(() => generateRing(), []);
    
    // Shapes Array
    const shapes = useMemo(() => [shapeDroplet, shapeShield, shapeRing], [shapeDroplet, shapeShield, shapeRing]);
    
    // Colors Array
    const colors = useMemo(() => [
        new THREE.Color('#30D9C4'), // Aqua
        new THREE.Color('#FF5F6D'), // Thermo
        new THREE.Color('#9D50BB')  // Oxy
    ], []);

    const geoRef = useRef<THREE.BufferGeometry>(null);
    const matRef = useRef<THREE.ShaderMaterial>(null);
    
    // Track indices
    const lastIndices = useRef({ idx1: -1, idx2: -1 });

    useFrame((state) => {
        if (!matRef.current || !geoRef.current) return;
        
        // Time & Pixel Ratio
        matRef.current.uniforms.uTime.value = state.clock.elapsedTime;
        matRef.current.uniforms.uPixelRatio.value = Math.min(window.devicePixelRatio, 2);

        // Mouse Interaction (Project pointer to z=0 or simple screen space mapping)
        // For 3D particles, we ideally unproject. Here we map -1..1 to a rough volume box
        const mx = state.pointer.x * 10; 
        const my = state.pointer.y * 10;
        // Smooth lerp for mouse (optional, but shader handles raw input fine)
        matRef.current.uniforms.uMouse.value.set(mx, my, 0);

        // Clamping progress from REF
        const p = Math.max(0, Math.min(progress.current, 1.999));
        
        const idx1 = Math.floor(p);
        const idx2 = idx1 + 1;
        const transition = p - idx1;
        
        // Update Attributes if indices changed
        if (idx1 !== lastIndices.current.idx1 || idx2 !== lastIndices.current.idx2) {
             geoRef.current.attributes.position.array.set(shapes[idx1]);
             geoRef.current.attributes.position.needsUpdate = true;
             
             // Setup target buffer
             if (!geoRef.current.getAttribute('aTarget')) {
                  geoRef.current.setAttribute('aTarget', new THREE.BufferAttribute(shapes[idx2], 3));
             } else {
                  // BufferAttribute types are tricky with checking existence
                  geoRef.current.attributes.aTarget.array.set(shapes[idx2]);
                  geoRef.current.attributes.aTarget.needsUpdate = true;
             }
             
             // Update Colors
             matRef.current.uniforms.uColorStart.value.copy(colors[idx1]);
             matRef.current.uniforms.uColorEnd.value.copy(colors[idx2]);
             
             lastIndices.current = { idx1, idx2 };
        }
        
        // Update Transition
        matRef.current.uniforms.uTransition.value = transition;
    });

    return (
        <points>
            <bufferGeometry ref={geoRef}>
                <bufferAttribute
                    attach="attributes-position"
                    count={COUNT}
                    array={shapes[0]} 
                    itemSize={3}
                    args={[shapes[0], 3]}
                />
            </bufferGeometry>
            <shaderMaterial
                ref={matRef}
                vertexShader={BarrierShader.vertexShader}
                fragmentShader={BarrierShader.fragmentShader}
                uniforms={BarrierShader.uniforms}
                transparent
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
}
