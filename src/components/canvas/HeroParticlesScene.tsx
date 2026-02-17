'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import InfinityParticles from './InfinityParticles';

export default function HeroParticlesScene() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]} // Optimization for varying pixel densities
      >
        <Suspense fallback={null}>
          <InfinityParticles 
            count={4000} 
            color="#C6A87C" // Softer Gold (Sovereign)
            size={1.5}
            speed={0.15}
          />
        </Suspense>
      </Canvas>
      {/* Vignette Overlay for "Event Horizon" feel */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-background dark:to-background pointer-events-none opacity-80"></div>
    </div>
  );
}
