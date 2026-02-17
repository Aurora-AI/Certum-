'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import IdentitySection from '@/components/sections/IdentitySection';
import ProductShowcase from '@/components/sections/ProductShowcase';
import Preloader from '@/components/ui/Preloader';

// Dynamic import for heavy 3D components
const HeroVolumetric = dynamic(() => import('@/components/antigravity/HeroVolumetric'), { 
  ssr: false,
  loading: () => <div className="h-screen w-full bg-cosmic-cream" /> // White fallback to match theme
});
import BarrierTechnology from '@/components/sections/BarrierTechnology';

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-cosmic-cream text-carbon-black selection:bg-carbon-black selection:text-absolute-white overflow-x-hidden">
      
      {/* Preloader */}
      <Preloader />
      
      {/* 1. HERO — Impacto + Declaração */}
      <Suspense fallback={null}>
        <HeroVolumetric />
      </Suspense>

      {/* Hero Typography Overlay */}
      <div className="absolute top-0 left-0 w-full h-screen z-10 pointer-events-none flex flex-col justify-end pb-24 md:pb-32 px-6 md:px-20">
            
            {/* Tag institucional */}
            <span className="block font-mono text-[10px] md:text-xs tracking-[0.3em] text-gray-400 uppercase mb-6 opacity-0 animate-fade-in"
                  style={{ animationFillMode: 'forwards', animationDelay: '0.3s' }}>
                CERTUM PRIME · REPRESENTANTE AUTORIZADO RODOBENS
            </span>

            <h1 className="text-[12vw] md:text-[10vw] leading-[0.85] font-black tracking-tighter text-[#0A0A0A] mix-blend-multiply opacity-0 animate-fade-in-up"
                style={{ animationFillMode: 'forwards', animationDelay: '0.5s', animationDuration: '1.5s' }}>
                SEU PATRIMÔNIO.<br/>
                NOSSA<br/>
                ARQUITETURA.
            </h1>

            <p className="mt-6 md:mt-8 text-sm md:text-lg font-light text-gray-600 max-w-xl leading-relaxed opacity-0 animate-fade-in"
               style={{ animationFillMode: 'forwards', animationDelay: '1.5s' }}>
                Consórcios e seguros com a precisão que o seu futuro exige. Planejamento financeiro inteligente, sem juros abusivos.
            </p>
      </div>

      {/* 2. RODOBENS AUTHORITY — Credibilidade institucional */}
      <BarrierTechnology />

      {/* 3. PONTUAL SPOTLIGHT — Hooks de aquisição */}
      <IdentitySection />

      {/* 4. PRODUCT PORTALS — 3 Colunas CTA */}
      <ProductShowcase />

    </main>
  );
}

