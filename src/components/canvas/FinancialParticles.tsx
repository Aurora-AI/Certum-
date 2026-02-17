'use client';

import { useRef, useMemo, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { createNoise3D } from 'simplex-noise';

// --- Shader Code (Ported from particle-shaders.glsl) ---

const vertexShader = `
  attribute float size;
  attribute float opacity;
  attribute vec3 color;
  attribute float lifetime;
  attribute float maxLifetime;
  
  uniform float uTime;
  uniform float uPixelRatio;
  
  varying vec3 vColor;
  varying float vAlpha;
  varying float vLifeProgress;
  
  void main() {
    vLifeProgress = lifetime / maxLifetime;
    vColor = color;
    vAlpha = opacity * (1.0 - smoothstep(0.8, 1.0, vLifeProgress)); // Fade out at end
    
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    
    // Size attenuation
    float distanceScale = 300.0 / -mvPosition.z;
    
    // Scale based on lifetime (grow in, shrink out slightly)
    float scale = smoothstep(0.0, 0.1, vLifeProgress);
    
    gl_PointSize = size * scale * distanceScale * uPixelRatio;
  }
`;

const fragmentShader = `
  varying vec3 vColor;
  varying float vAlpha;
  varying float vLifeProgress;
  
  void main() {
    vec2 uv = gl_PointCoord;
    vec2 center = uv - 0.5;
    float dist = length(center);
    
    // Soft glow particle
    float circle = 1.0 - smoothstep(0.0, 0.5, dist);
    float glow = exp(-dist * 3.0);
    float core = exp(-dist * 8.0);
    
    float alpha = (circle * 0.5 + glow * 0.3 + core * 0.2) * vAlpha;
    
    gl_FragColor = vec4(vColor, alpha);
  }
`;

// --- Particle Logic ---

const COUNT = 3000; // Max particles
const noise3D = createNoise3D();

export default function FinancialParticles() {
  const { viewport, mouse, camera } = useThree();
  const points = useRef<THREE.Points>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  
  // Physics & State
  const particles = useMemo(() => {
    return new Array(COUNT).fill(0).map(() => ({
      position: new THREE.Vector3(),
      velocity: new THREE.Vector3(),
      size: 0,
      lifetime: 0,
      maxLifetime: 0,
      alive: false,
      color: new THREE.Color(),
      baseOpacity: 0
    }));
  }, []);

  // Geometry Attributes
  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(COUNT * 3), 3));
    geo.setAttribute('size', new THREE.BufferAttribute(new Float32Array(COUNT), 1));
    geo.setAttribute('color', new THREE.BufferAttribute(new Float32Array(COUNT * 3), 3));
    geo.setAttribute('opacity', new THREE.BufferAttribute(new Float32Array(COUNT), 1));
    geo.setAttribute('lifetime', new THREE.BufferAttribute(new Float32Array(COUNT), 1));
    geo.setAttribute('maxLifetime', new THREE.BufferAttribute(new Float32Array(COUNT), 1));
    return geo;
  }, []);

  // Emission State
  const emission = useRef({
    accumulator: 0,
    rate: 60, // particles per second
  });

  // Preset: "Currency Flow" (Gold/Amber, Flowing Up-Right)
  const PRESET = {
    position: new THREE.Vector3(-4, -4, 0), // Start bottom-left
    spawnRadius: 4,
    velocityBase: new THREE.Vector3(1.5, 0.8, 0), // Up and Right flow
    velocitySpread: 0.5,
    colorStart: new THREE.Color('#d4af37'), // Gold
    colorEnd: new THREE.Color('#ffd700'),   // Bright Gold
    size: 0.15,
    sizeVar: 0.5,
    lifetime: 6,
    turbulence: 0.3,
    drag: 0.01
  };

  useFrame((state, delta) => {
    if (!points.current || !materialRef.current) return;

    // Update Uniforms
    materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    
    // --- 1. Emission ---
    emission.current.accumulator += emission.current.rate * delta;
    
    let spawnedCount = 0;
    while (emission.current.accumulator >= 1) {
      emission.current.accumulator--;
      spawnedCount++;
      
      // Find dead particle
      const p = particles.find(p => !p.alive);
      if (p) {
        p.alive = true;
        p.lifetime = 0;
        p.maxLifetime = PRESET.lifetime * (0.8 + Math.random() * 0.4);
        
        // Spawn Position (Box area)
        p.position.set(
            PRESET.position.x + (Math.random() - 0.5) * PRESET.spawnRadius,
            PRESET.position.y + (Math.random() - 0.5) * PRESET.spawnRadius,
            PRESET.position.z + (Math.random() - 0.5) * 2 // Narrow depth
        );
        
        // Velocity (Directional + Randomness)
        p.velocity.copy(PRESET.velocityBase).multiplyScalar(0.8 + Math.random() * 0.4);
        p.velocity.x += (Math.random() - 0.5) * PRESET.velocitySpread;
        p.velocity.y += (Math.random() - 0.5) * PRESET.velocitySpread;
        p.velocity.z += (Math.random() - 0.5) * PRESET.velocitySpread;
        
        // Attributes
        p.size = PRESET.size * (1 + (Math.random() - 0.5) * PRESET.sizeVar);
        p.baseOpacity = 0.6 + Math.random() * 0.4;
        p.color.lerpColors(PRESET.colorStart, PRESET.colorEnd, Math.random());
      }
    }

    // --- 2. Update Particles ---
    const positions = geometry.attributes.position.array as Float32Array;
    const sizes = geometry.attributes.size.array as Float32Array;
    const colors = geometry.attributes.color.array as Float32Array;
    const opacities = geometry.attributes.opacity.array as Float32Array;
    const lifetimes = geometry.attributes.lifetime.array as Float32Array;
    const maxLifetimes = geometry.attributes.maxLifetime.array as Float32Array;

    const time = state.clock.elapsedTime;
    
    // Mouse Interaction
    // Provide a 3D mouse vector approx
    const vec = new THREE.Vector3(mouse.x, mouse.y, 0).unproject(camera);
    const dir = vec.sub(camera.position).normalize();
    const distance = -camera.position.z / dir.z;
    const mousePos = camera.position.clone().add(dir.multiplyScalar(distance));


    particles.forEach((p, i) => {
      if (!p.alive) {
          // Hide dead particles
          sizes[i] = 0;
          return;
      }

      // Update Lifetime
      p.lifetime += delta;
      if (p.lifetime >= p.maxLifetime) {
        p.alive = false;
        return;
      }

      // Physics: Position + Velocity
      p.position.addScaledVector(p.velocity, delta);
      
      // Drag
      p.velocity.multiplyScalar(1 - PRESET.drag);
      
      // Turbulence (Simplex Noise)
      const noiseScale = 0.5;
      const tX = noise3D(p.position.x * noiseScale, p.position.y * noiseScale, time * 0.5);
      const tY = noise3D(p.position.x * noiseScale + 100, p.position.y * noiseScale, time * 0.5);
      const tZ = noise3D(p.position.x * noiseScale + 200, p.position.y * noiseScale, time * 0.5);
      
      p.velocity.x += tX * PRESET.turbulence * delta;
      p.velocity.y += tY * PRESET.turbulence * delta;
      p.velocity.z += tZ * PRESET.turbulence * delta;
      
      // Mouse Repulsion
      const dx = p.position.x - mousePos.x;
      const dy = p.position.y - mousePos.y;
      const d = Math.sqrt(dx*dx + dy*dy);
      if (d < 3) {
          const force = (3 - d) * 2 * delta;
          p.velocity.x += (dx / d) * force;
          p.velocity.y += (dy / d) * force;
      }

      // Update Buffer
      const i3 = i * 3;
      positions[i3] = p.position.x;
      positions[i3 + 1] = p.position.y;
      positions[i3 + 2] = p.position.z;
      
      sizes[i] = p.size;
      opacities[i] = p.baseOpacity;
      colors[i3] = p.color.r;
      colors[i3 + 1] = p.color.g;
      colors[i3 + 2] = p.color.b;
      lifetimes[i] = p.lifetime;
      maxLifetimes[i] = p.maxLifetime;
    });

    // Mark buffers for update
    geometry.attributes.position.needsUpdate = true;
    geometry.attributes.size.needsUpdate = true;
    geometry.attributes.color.needsUpdate = true;
    geometry.attributes.opacity.needsUpdate = true;
    geometry.attributes.lifetime.needsUpdate = true;
    geometry.attributes.maxLifetime.needsUpdate = true;
  });

  return (
    <points ref={points} geometry={geometry}>
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        uniforms={{
            uTime: { value: 0 },
            uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) }
        }}
      />
    </points>
  );
}
