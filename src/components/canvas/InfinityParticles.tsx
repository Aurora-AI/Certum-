'use client';

import React, { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

/**
 * FX-08: Infinity Particles (The Event Horizon)
 * 
 * **Gamma Engineer**: Ported from Legacy "Premium Particle System".
 * **Alpha Visionary**: Tuned for "Sovereign" aesthetics (Gold/Deep Void).
 * **Beta Physicist**: Simplex noise turbulence for organic flow.
 */

// Shaders (Ported from particle-shaders.glsl)
const vertexShader = `
  attribute float size;
  attribute float alpha;
  attribute vec3 color;
  varying vec3 vColor;
  varying float vAlpha;

  void main() {
    vColor = color;
    vAlpha = alpha;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = size * (300.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const fragmentShader = `
  varying vec3 vColor;
  varying float vAlpha;

  void main() {
    // Soft Circle Calculation
    vec2 center = gl_PointCoord - 0.5;
    float dist = length(center);
    if (dist > 0.5) discard;

    // Sovereign Glow (Exponential Decay)
    float glow = exp(-dist * 3.0);
    
    gl_FragColor = vec4(vColor, vAlpha * glow);
  }
`;

interface InfinityParticlesProps {
  count?: number;
  color?: string;
  size?: number;
  speed?: number;
}

export default function InfinityParticles({ 
  count = 3000, 
  color = '#FFD700', // Aurora Gold
  size = 2.0,
  speed = 0.2 
}: InfinityParticlesProps) {
  const mesh = useRef<THREE.Points>(null);
  
  // Deterministic Random (Alpha Visionary: "Chaos must be ordered")
  const seededRandom = (s: number) => {
    return function() {
      s = Math.sin(s) * 10000;
      return s - Math.floor(s);
    };
  };

  // Data Arrays (useMemo for performance)
  const particles = useMemo(() => {
    const rng = seededRandom(12345); // Constant seed for hydration match
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const alphas = new Float32Array(count);
    const velocities = new Float32Array(count * 3);

    const colorObj = new THREE.Color(color);

    for (let i = 0; i < count; i++) {
        // Sphere Distribution
        const r = 20 * Math.cbrt(rng()); 
        const theta = rng() * 2 * Math.PI;
        const phi = Math.acos(2 * rng() - 1);
  
        positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = r * Math.cos(phi);
  
        // Random sizes variations
        sizes[i] = size * (0.5 + rng());
        
        // Color
        colors[i * 3] = colorObj.r;
        colors[i * 3 + 1] = colorObj.g;
        colors[i * 3 + 2] = colorObj.b;
  
        // Initial Alpha
        alphas[i] = 0.1 + rng() * 0.5;
        
        // Random Velocities
        velocities[i * 3] = (rng() - 0.5) * 0.02;
        velocities[i * 3 + 1] = (rng() - 0.5) * 0.02;
        velocities[i * 3 + 2] = (rng() - 0.5) * 0.02;
    }

    return { positions, colors, sizes, alphas, velocities };
  }, [count, color, size]);

  // Animation Loop (Gamma Engine)
  useFrame((state) => {
    if (!mesh.current || !particles) return;

    const positions = mesh.current.geometry.attributes.position.array as Float32Array;
    const time = state.clock.getElapsedTime();

    for (let i = 0; i < count; i++) {
        const x = positions[i * 3];
        const z = positions[i * 3 + 2];
        
        // Whirlpool effect
        positions[i * 3] = x * Math.cos(speed * 0.01) - z * Math.sin(speed * 0.01);
        positions[i * 3 + 2] = x * Math.sin(speed * 0.01) + z * Math.cos(speed * 0.01);
        
        // Gentle vertical breathing
        positions[i * 3 + 1] += Math.sin(time + x * 0.5) * 0.002;
    }

    mesh.current.geometry.attributes.position.needsUpdate = true;
  });

  if (!particles) return null;

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          args={[particles.positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          args={[particles.colors, 3]}
        />
        <bufferAttribute
          attach="attributes-size"
          count={count}
          args={[particles.sizes, 1]}
        />
        <bufferAttribute
          attach="attributes-alpha"
          count={count}
          args={[particles.alphas, 1]}
        />
      </bufferGeometry>
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
