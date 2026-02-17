'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import FinancialParticles from './FinancialParticles';

export default function HeroPhase03() {
  return (
    <section className="relative w-full h-screen bg-cosmic-cream overflow-hidden flex flex-col items-center justify-center">
      
      {/* 0. Background Watermark */}
      <div className="absolute top-0 w-full flex justify-center pt-[10vh] pointer-events-none z-10 opacity-[0.05] mix-blend-multiply">
        <h1 className="text-[20vw] font-display font-bold text-carbon-black leading-none tracking-tighter select-none">
            CERTUM
        </h1>
      </div>

      {/* 1. 3D Scene */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
          {/* <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} /> */}
          <group rotation={[0, 0, 0]}> 
             <FinancialParticles />
          </group>
        </Canvas>
      </div>

      {/* 2. Overlay Text */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
         <div className="relative">
             <span className="block font-mono text-xs md:text-sm tracking-[0.4em] text-absolute-white/90 text-center uppercase bg-carbon-black/10 backdrop-blur-sm px-4 py-2 rounded-sm mix-blend-multiply">
                Sovereign Asset<br/>Management
             </span>
         </div>
      </div>

      {/* 3. Decorative Frame */}
      <div className="absolute inset-0 z-20 pointer-events-none">
          <div className="absolute top-[20%] right-[20%] w-32 h-32 border-t border-r border-certum-blue/30" />
          <div className="absolute bottom-[20%] left-[20%] w-32 h-32 border-b border-l border-certum-blue/30" />
      </div>

      {/* 4. Bottom Logo */}
      <div className="absolute bottom-[10vh] z-30 flex flex-col items-center">
        <h2 className="text-h2 font-display font-bold tracking-tight leading-none text-carbon-black">
            CERTUM <span className="text-certum-blue">PRIME</span>
        </h2>
        <div className="h-1 w-12 bg-certum-blue mt-4 rounded-full" />
      </div>

    </section>
  );
}
