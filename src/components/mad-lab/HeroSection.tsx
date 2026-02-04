"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useNeuroSensor } from "@/hooks/useNeuroSensor";
import { PromptChip } from "@/components/PromptChip";

interface HeroSectionProps {
  mode: "dream" | "chat";
  onActivate: (prompt?: string) => void;
}

export function HeroSection({ mode, onActivate }: HeroSectionProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  // --- NEURO SENSOR INTEGRATION (Hero Specific) ---
  useNeuroSensor(async (signal) => {
    // Client-Side Immediate Mutations (Latency < 16ms)
    // Hesitation Check: Hovering "Initiate Protocol" (CTA)
    if (signal.hoverTarget === 'cta-primary' && signal.dwellTime > 2000) {
        gsap.to(".cta-pulse", { 
            boxShadow: "0 0 30px rgba(236, 182, 19, 0.6)", 
            scale: 1.05, 
            duration: 0.5, 
            yoyo: true, 
            repeat: 1 
        });
    }
  });

  // GSAP Entrance
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(heroRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5 })
      .fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=1"
      );
  }, []);

  // GSAP Exit (Reacting to Mode Change)
  useEffect(() => {
    if (mode === "chat") {
      gsap.to(titleRef.current, {
        y: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.in",
      });
    }
  }, [mode]);

  return (
    <div
      ref={heroRef}
      className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center p-4 z-10 bg-black text-white"
    >
      {/* Background Layer */}
      <div className="hero-bg absolute inset-0 z-0 flex items-center justify-center bg-black transition-all overflow-hidden">
        <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
            <source src="/assets/Hero_Remaster_v3.mp4" type="video/mp4" />
        </video>
        {/* MVP: ultra-leve para deploy hoje (sem assets pesados) */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(236,182,19,0.16),_rgba(0,0,0,0.92)_55%,_#000_100%)] mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80" />

        {/* Cinematic Letterboxing (The 'Film 4' Look) */}
        <div className="absolute top-0 left-0 w-full h-[12vh] bg-black z-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-[12vh] bg-black z-20 pointer-events-none" />
      </div>

        {/* Content Layer */}
        <div ref={titleRef} className="text-center relative z-20">
          {/* <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-4">
            CENTRUM
          </h1> */}
          <p className="text-xl md:text-2xl font-light text-white/80 tracking-widest uppercase mb-12">
            Arquitetura de Riqueza
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <PromptChip 
              englishLabel="DESIGN VAULT"
              label="SIMULAR CONSÓRCIO" 
              delay={1} 
              onClick={() => onActivate("Projete uma estrutura de cofre soberano para preservação de riqueza.")}
            />
            <PromptChip 
              englishLabel="ANALYZE ENTROPY"
              label="COTAR SEGURO" 
              delay={1.2} 
              onClick={() => onActivate("Analise a entropia atual do mercado e vetores de risco.")}
            />
            <PromptChip 
              englishLabel="INITIATE PROTOCOL"
              label="FALAR COM BANKER" 
              delay={1.4} 
              onClick={() => onActivate()}
              className="cta-pulse border-[#ecb613]/50 text-[#ecb613]" 
              data-neuro-target="cta-primary" 
            />
          </div>
        </div>
    </div>
  );
}
