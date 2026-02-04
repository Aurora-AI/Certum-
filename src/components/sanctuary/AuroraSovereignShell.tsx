"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { useLenis } from '@studio-freight/react-lenis'; // Keeping clean for now without extra deps unless installed


interface AuroraProps {
  children: React.ReactNode;
  status?: 'claro' | 'complexo';
}

export const AuroraSovereignShell = ({ children, status = 'claro' }: AuroraProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Cinematic Reveal: Stagger de entrada dos cards de patrimônio
    gsap.fromTo(".reveal-element", 
      {
        y: 100,
        opacity: 0,
        clipPath: "inset(100% 0% 0% 0%)"
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.8,
        ease: "power4.out",
        stagger: 0.15,
        clipPath: "inset(0% 0% 0% 0%)",
        scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%"
        }
      }
    );
  }, []);

  return (
    <main 
      ref={containerRef}
      className="relative bg-[#FAF7F2] min-h-screen text-[#0A1A2F] selection:bg-[#E3DAC9] antialiased overflow-hidden py-24 px-6 md:px-[6vw]"
    >
      {/* Texture Layer: Noise Overlay para profundidade tátil */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.4] z-0 mix-blend-multiply" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />
      
      {/* Volumetric Glow */}
      <div className="fixed top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-white opacity-40 blur-[150px] rounded-full z-0 pointer-events-none" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-[#E3DAC9] opacity-20 blur-[120px] rounded-full z-0 pointer-events-none" />

      <section className="relative z-10 max-w-7xl mx-auto">
        <header className="mb-24 md:mb-32 border-l-2 border-[#0A1A2F]/10 pl-8 md:pl-12">
          <span className="block text-[10px] uppercase tracking-[0.3em] font-bold text-[#0A1A2F]/40 mb-4 reveal-element">
             Protocolo Aurora // Wealth Vision
          </span>
          <h1 className="text-5xl md:text-8xl font-light tracking-tighter text-[#0A1A2F] reveal-element">
            {status === 'claro' ? 'Sua Claridade' : 'Aguardando Harmonia'}
          </h1>
          <p className="mt-6 text-lg md:text-xl font-serif text-[#0A1A2F]/60 max-w-xl border-t border-[#0A1A2F]/10 pt-6 reveal-element">
              Os dados não são apenas números; são o reflexo da sua soberania.
              Aqui, o caos se organiza em legado.
          </p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 relative">
          {children}
        </div>
      </section>
    </main>
  );
};
