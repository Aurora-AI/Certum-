"use client";

import { useRef, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { VolumetricBackground } from "./VolumetricBackground";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

interface HeroSectionProps {
  mode: "dream" | "chat";
  onActivate: (prompt?: string) => void;
}

export function HeroSection({ onActivate }: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // ─── GSAP ANIMATION ───
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
        const tl = gsap.timeline({
            defaults: { ease: "power4.out" }
        });

        // 0. Preloader Sequence (Simulated or removed if handled globally)
        // Assuming global preloader handles the initial wait. 
        // We start the Hero Reveal immediately or with slight delay.
        
        const heroTl = gsap.timeline({ defaults: { ease: "power3.out" }, delay: 0.5 });
        
        // 1. FX-11 Depth Stagger Reveal for Text
        // "From the back" (z: -100, blur: 10) to origin
        
        const splitText = document.querySelectorAll('.hero-line span'); // Assuming we wrap text in spans
        
        if (splitText.length > 0) {
             heroTl.from(splitText, {
                z: -150,
                filter: "blur(12px)",
                opacity: 0,
                duration: 2.2,
                stagger: 0.1,
                ease: "power2.out" // Smoother, dream-like
            }, 0);
        } else {
             // Fallback if no spans
             heroTl.from('.hero-line', {
                z: -100,
                filter: "blur(10px)",
                opacity: 0,
                y: 50,
                duration: 2.0,
                stagger: 0.15
            }, 0);
        }

        // 2. Divider & Bottom UI
        heroTl.from('.hero-divider', { scaleX: 0, duration: 1.5, ease: "power3.inOut" }, 1.0);
        
        heroTl.from('.hero-tagline', { 
            y: 20, 
            opacity: 0, 
            filter: "blur(5px)", 
            duration: 1.2 
        }, 1.2);

        heroTl.from('.hero-cta', { 
            y: 30, 
            opacity: 0, 
            duration: 1.0, 
            stagger: 0.1,
            ease: "back.out(1.2)"
        }, 1.4);

        // 3. Corners & Indicators
        heroTl.from('.corner', { opacity: 0, duration: 2 }, 2);
        heroTl.from('.scroll-indicator', { opacity: 0, y: -20, duration: 1.5 }, 2.5);

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-[#1A1A1A] text-[#1A1A1A] font-sans perspective-[1000px]">
        {/* NEW ATMOSPHERE */}
        <VolumetricBackground />

        {/* BOTTOM GRADIENT */}
        <div className="hero-gradient absolute bottom-0 left-0 right-0 h-[40vh] z-10 pointer-events-none bg-gradient-to-t from-[#F4F4F4] via-[#F4F4F4]/80 to-transparent" />

        {/* TEXT CONTENT */}
        <div className="hero-text-content absolute inset-0 z-20 flex flex-col justify-end p-[5vw] pb-[9vh] pointer-events-none">
            <div className="flex flex-col gap-0 pointer-events-auto mix-blend-hard-light text-[#0A0A0A]">
                <div className="overflow-visible">
                    <h1 className="hero-line text-[clamp(3.2rem,12vw,11rem)] font-bold uppercase tracking-tighter leading-[0.85]">
                        Sovereign
                    </h1>
                </div>
                <div className="overflow-visible ml-0 md:ml-[12vw]">
                    <h1 className="hero-line text-[#BFB38F] text-[clamp(3.2rem,12vw,11rem)] font-bold uppercase tracking-tighter leading-[0.85]">
                        Standard
                    </h1>
                </div>
            </div>

            <div className="hero-divider mt-8 w-[400px] max-w-[50vw] h-[1px] bg-[#0A0A0A]/40 origin-left" />

            <div className="hero-bottom mt-[1.8rem] flex flex-wrap items-end justify-between gap-12 pointer-events-auto">
                <div className="hero-tagline max-w-[360px]">
                    <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#0A0A0A]/60 mb-1.5 font-mono">
                        Arquitetura de Riqueza
                    </p>
                    <p className="text-sm leading-relaxed text-[#0A0A0A]/80 font-light font-serif italic">
                        "Preservação de Capital & Acesso a Ativos Reais através do Sistema de Consórcio."
                    </p>
                </div>

                <div className="hero-ctas flex gap-3 flex-wrap">
                    <div className="hero-cta">
                        <button 
                            onClick={() => onActivate()}
                            data-magnetic="true"
                            className="flex items-center gap-2.5 px-8 py-4 text-[11px] font-medium uppercase tracking-[0.25em] bg-[#0A0A0A] text-[#F4F4F4] hover:bg-[#2a2a2a] transition-colors border-none cursor-pointer font-sans"
                        >
                            Falar com Banker
                        </button>
                    </div>
                    <div className="hero-cta">
                        <button 
                            onClick={() => onActivate("Mostre-me os ativos disponíveis.")}
                            data-magnetic="true"
                            className="flex items-center gap-2.5 px-8 py-4 text-[11px] font-medium uppercase tracking-[0.25em] bg-transparent text-[#0A0A0A] border border-[#0A0A0A]/30 hover:border-[#0A0A0A] transition-colors cursor-pointer font-sans"
                        >
                            Ver Projetos
                        </button>
                    </div>
                </div>
            </div>
        </div>

        {/* CORNERS */}
        <div className="corner absolute top-8 left-[5vw] z-30 pointer-events-none text-[10px] font-medium uppercase tracking-[0.35em] text-[#0A0A0A]/50">
            Certum Private
        </div>
        <div className="corner absolute top-8 right-[5vw] z-30 pointer-events-none text-[10px] font-medium uppercase tracking-[0.2em] text-[#0A0A0A]/40 font-mono">
            Protocol 002 — 2026
        </div>
        
        {/* SCROLL INDICATOR */}
        <div className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 z-30 pointer-events-none flex flex-col items-center gap-2">
            <span className="text-[9px] font-medium uppercase tracking-[0.4em] text-[#0A0A0A]/40">Scroll</span>
            <div className="w-[1px] h-[32px] bg-[#0A0A0A]/20 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[8px] bg-[#0A0A0A]/60 animate-bounce" />
            </div>
        </div>
    </div>
  );
}

