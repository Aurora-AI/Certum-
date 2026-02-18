'use client';

import React, { useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import CinematicSlide from '@/components/sections/consorcios/CinematicSlide';
import ConsortiumHero from '@/components/sections/consorcios/ConsortiumHero';

// Register GSAP Plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Dynamic import for the Liquid Glass / Particle effect
const HeroVolumetric = dynamic(() => import('@/components/antigravity/HeroVolumetric'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-[#0A0A0A]" />
});

const CONSORCIO_PRODUCTS = [
  {
    id: 'imovel',
    title: 'ALGORITMO IMOBILIÁRIO',
    subtitle: 'Ativos de Permanência',
    description: 'Engenharia de aquisição para ativos físicos. Barreira contra a inflação com arquitetura de parcelas indexadas à valorização imobiliária.',
    color: '#0F172A', // Deep Navy (Sober)
    shapeId: 1
  },
  {
    id: 'auto',
    title: 'VETOR DE MOBILIDADE AUTO',
    subtitle: 'Frota Pessoal',
    description: 'Soberania na renovação de frota pessoal. Precisão na escolha de novos caminhos com custo zero de capital via alocação inteligente.',
    color: '#450A0A', // Deep Burgundy (Sober Red)
    shapeId: 2
  },
  {
    id: 'pesados',
    title: 'LOGÍSTICA DE PESADOS',
    subtitle: 'Expansão Industrial',
    description: 'Engenharia financeira para frotas e logística. Expansão de capacidade produtiva com previsibilidade absoluta e zero juros.',
    color: '#713F12', // Dark Wood (Sober Gold/Brown)
    shapeId: 3
  },
  {
    id: 'motos',
    title: 'VETOR DE AGILIDADE',
    subtitle: 'Mobilidade Urbana',
    description: 'Agilidade e fluxo para o cotidiano. Acesso facilitado ao movimento com estratégia de aporte reduzido e contemplação acelerada.',
    color: '#1E293B', // Slate Charcoal (Sober Gray)
    shapeId: 4
  },
  {
    id: 'servicos',
    title: 'ALGORITMO DE SERVIÇOS',
    subtitle: 'Infraestrutura Vital',
    description: 'Financiamento de experiências e infraestrutura vital. Da saúde à energia solar, planejamento que antecipa o futuro.',
    color: '#312E81', // Deep Indigo (Sober Blue/Purple)
    shapeId: 5
  },
  {
    id: 'corporativo',
    title: 'SOBERANIA CORPORATIVA',
    subtitle: 'Blindagem CNPJ',
    description: 'Blindagem e crescimento para o CNPJ. Capital de giro via ativos e expansão física sem descapitalização operacional.',
    color: '#854D0E', // Muted Bronze (Sober Gold)
    shapeId: 6
  }
];

export default function ConsorciosPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  
  // Cinematic Engine State
  const [engineState, setEngineState] = useState({
    targetShapeA: 0,
    targetShapeB: 0,
    targetLerp: 0,
    noiseIntensity: 0,
    explosionSeed: 0,
    baseColor: '#000000'
  });

  // State for slides
  const [slideStates, setSlideStates] = useState(
    CONSORCIO_PRODUCTS.map(() => ({ 
      active: false, 
      phase: 'entrance' as 'entrance' | 'depth' | 'morph' | 'explosion' | 'reconstruction'
    }))
  );

  useGSAP(() => {
    if (!containerRef.current) return;

    // Helper to update all slides and engine at once
    const updateSlides = (progress: number) => {
      // User's specific windows (p 0..1)
      const windows = [
        { pStart: 0.00, pEnd: 0.11 }, // Imobiliário
        { pStart: 0.28, pEnd: 0.37 }, // Auto (Bridge)
        { pStart: 0.40, pEnd: 0.54 }, // Pesados
        { pStart: 0.60, pEnd: 0.70 }, // Motos (Subtle)
        { pStart: 0.75, pEnd: 0.80 }, // Serviços (Subtle)
        { pStart: 0.85, pEnd: 0.93 }  // Corporativo
      ];

      // APPLY "IMAGE FIRST, TEXT SECOND" LOGIC
      // Shift text entry by +2% of total progress for significant visual formation first
      const newStates = CONSORCIO_PRODUCTS.map((_, i) => {
        const win = windows[i];
        const textIn = win.pStart + 0.02; // Text lags visual formation
        const textOut = win.pEnd - 0.01; // Fade out slightly earlier
        
        const isActive = progress >= textIn && progress <= textOut;
        return { active: isActive, phase: 'depth' as const };
      });
      
      setSlideStates(newStates);
      
      // Update Engine Props based on global progress p
      let shapeA = 0;
      let shapeB = 0;
      let lerp = 0;
      let noise = 0;
      let color = '#000000';

      // Morphing Logic based on User Segments
      if (progress < 0.11) {
        shapeA = 1; shapeB = 1; lerp = 0; // Starts with Shape 1 (Imovel)
        color = CONSORCIO_PRODUCTS[0].color;
      } else if (progress < 0.28) {
        shapeA = 1; shapeB = 2; 
        const m = (progress - 0.15) / (0.28 - 0.15);
        lerp = Math.max(0, Math.min(1, m));
        color = lerp > 0.5 ? CONSORCIO_PRODUCTS[1].color : CONSORCIO_PRODUCTS[0].color;
      } else if (progress < 0.40) {
        shapeA = 2; shapeB = 3;
        const m = (progress - 0.37) / (0.40 - 0.37);
        lerp = Math.max(0, Math.min(1, m));
        color = lerp > 0.5 ? CONSORCIO_PRODUCTS[2].color : CONSORCIO_PRODUCTS[1].color;
      } else if (progress < 0.54) {
        shapeA = 3; shapeB = 3; lerp = 1;
        color = CONSORCIO_PRODUCTS[2].color;
      } else if (progress < 0.85) {
        if (progress < 0.65) {
          shapeA = 3; shapeB = 4; lerp = (progress - 0.54) / (0.65 - 0.54);
          noise = Math.sin(lerp * Math.PI) * 1.5;
          color = lerp > 0.5 ? CONSORCIO_PRODUCTS[3].color : CONSORCIO_PRODUCTS[2].color;
        } else if (progress < 0.75) {
          shapeA = 4; shapeB = 5; lerp = (progress - 0.65) / (0.75 - 0.65);
          noise = Math.sin(lerp * Math.PI) * 1.0;
          color = lerp > 0.5 ? CONSORCIO_PRODUCTS[4].color : CONSORCIO_PRODUCTS[3].color;
        } else {
          shapeA = 5; shapeB = 6; lerp = (progress - 0.75) / (0.85 - 0.75);
          noise = Math.sin(lerp * Math.PI) * 0.5;
          color = lerp > 0.5 ? CONSORCIO_PRODUCTS[5].color : CONSORCIO_PRODUCTS[4].color;
        }
      } else if (progress < 0.93) {
        shapeA = 6; shapeB = 6; lerp = 1;
        color = CONSORCIO_PRODUCTS[5].color;
      } else {
        shapeA = 6; shapeB = 0; // Morph back to Sphere on exit? Or just explode.
        lerp = 0;
        noise = (progress - 0.93) * 10.0;
        color = '#000000';
      }

      setEngineState({
        targetShapeA: shapeA,
        targetShapeB: shapeB,
        targetLerp: lerp,
        noiseIntensity: noise,
        explosionSeed: Math.floor(progress * 1000),
        baseColor: color
      });

      const currentActive = windows.findIndex(w => progress >= w.pStart && progress <= w.pEnd);
      if (currentActive !== -1) setActiveIdx(currentActive);
    };

    const st = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: `+=${CONSORCIO_PRODUCTS.length * 100}%`,
      pin: true,
      scrub: 1,
      snap: {
        snapTo: [0.05, 0.32, 0.47, 0.89], // Lock centroids
        duration: { min: 0.4, max: 0.8 },
        delay: 0.1,
        ease: 'power1.inOut'
      },
      onUpdate: (self) => {
        updateSlides(self.progress);
      }
    });

    updateSlides(0);
    return () => st.kill();
  }, { scope: containerRef });

  return (
    <main className="relative w-full bg-cosmic-cream text-black selection:bg-black selection:text-white">
      
      {/* S-Tier Hero Section */}
      <ConsortiumHero />
      
      {/* Cinematic Viewport Container */}
      <div 
        ref={containerRef}
        className="relative w-full h-screen overflow-hidden bg-cosmic-cream"
      >
        {/* Background Layer: WebGPU Particles */}
        <div className="absolute inset-0 z-0">
          <HeroVolumetric 
             targetShapeA={engineState.targetShapeA}
             targetShapeB={engineState.targetShapeB}
             targetLerp={engineState.targetLerp}
             noiseIntensity={engineState.noiseIntensity}
             explosionSeed={engineState.explosionSeed}
             baseColor={engineState.baseColor}
          />
        </div>

        {/* Content Layer: Slides */}
        <div className="relative z-10 w-full h-full">
          {CONSORCIO_PRODUCTS.map((product, idx) => (
            <CinematicSlide 
              key={product.id}
              active={slideStates[idx]?.active}
              title={product.title}
              subtitle={product.subtitle}
              description={product.description}
              color={product.color}
              phase={slideStates[idx]?.phase}
            />
          ))}
        </div>

        {/* Progress Bar (Sovereign Style) */}
        <div className="absolute bottom-12 right-12 flex flex-col items-end gap-2">
           <div className="text-[10px] font-mono tracking-[0.2em] text-gray-400 uppercase">
             Matriz Segmentada
           </div>
           <div className="flex gap-1">
             {CONSORCIO_PRODUCTS.map((_, i) => (
               <div 
                 key={i} 
                 className={`h-1 transition-all duration-300 ${i === activeIdx ? 'w-8 bg-black' : 'w-2 bg-black/10'}`} 
               />
             ))}
           </div>
        </div>
      </div>

      {/* Transitional Lead-out to Contact */}
      <div id="contato" className="relative z-20 min-h-screen flex flex-col items-center justify-center p-12 bg-linear-to-b from-transparent to-white border-t border-black/5">
        <div className="max-w-4xl text-center space-y-12">
            <h2 className="text-4xl md:text-7xl font-medium tracking-tighter leading-none text-black">
              PRONTO PARA <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-aquagard to-oxyblock">
                ALAVANCAR?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              Nossos algoritmos de aquisição são moldados para a sua soberania financeira. Inicie a arquitetura do seu próximo ativo agora.
            </p>
            <button className="group relative px-12 py-6 bg-black text-white rounded-full font-medium tracking-tight overflow-hidden transition-all hover:pr-16">
              <span className="relative z-10 transition-colors group-hover:text-white">Solicitar Consultoria</span>
              <div className="absolute inset-0 bg-aquagard translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <svg className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 opacity-0 group-hover:opacity-100 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
        </div>

        {/* Branding Footer */}
        <footer className="absolute bottom-12 w-full px-12 flex justify-between items-end opacity-40">
          <div className="text-[10px] font-mono tracking-widest uppercase text-gray-500">Certum Prime // Rodobens</div>
          <div className="text-[10px] font-mono tracking-widest uppercase text-gray-500">v2026.02.17</div>
        </footer>
      </div>

    </main>
  );
}
