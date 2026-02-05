"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useNeuroSensor } from "@/hooks/useNeuroSensor";
import { PromptChip } from "@/components/PromptChip";
import { RevealText } from "@/components/ui/RevealText";
import { TelhaImage } from "@/components/ui/TelhaImage";

interface HeroSectionProps {
  mode: "dream" | "chat";
  onActivate: (prompt?: string) => void;
}

export function HeroSection({ onActivate }: HeroSectionProps) {
  const heroRef = useRef<HTMLDivElement>(null);

  // --- NEURO SENSOR INTEGRATION ---
  useNeuroSensor(async (signal) => {
    // Hesitation Check
    if (signal.hoverTarget === 'cta-primary' && signal.dwellTime > 2000) {
        gsap.to(".cta-pulse", { scale: 1.05, duration: 0.5, yoyo: true, repeat: 1 });
    }
  });

  // GSAP Entrance
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(heroRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-between p-6 md:p-12 z-10 bg-[#F4F4F4] text-[#1A1A1A] overflow-hidden"
    >
        {/* Left: Typography (Dream Logic) */}
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center h-full z-20 pt-24 md:pt-0">
            <RevealText delay={0.2}>
                <h1 className="text-[12vw] md:text-[8vw] leading-[0.85] font-bold tracking-tighter uppercase text-[#1A1A1A]">
                    Sovereign<br/>
                    <span className="text-[#BFB38F]">Standard</span>
                </h1>
            </RevealText>
            
            <div className="mt-8 md:mt-12 flex flex-col md:flex-row gap-6 items-start">
                 <p className="max-w-md text-sm md:text-base font-medium uppercase tracking-widest text-[#1A1A1A]/60 leading-relaxed">
                    [ Arquitetura de Riqueza ]<br/>
                    Preservação de Capital & Acesso a Ativos Reais através do Sistema de Consórcio.
                 </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
                 <PromptChip 
                    englishLabel="INITIATE PROTOCOL"
                    label="FALAR COM BANKER" 
                    delay={0.8} 
                    onClick={() => onActivate()}
                    className="cta-pulse border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white" 
                    data-neuro-target="cta-primary" 
                />
                 <PromptChip 
                    englishLabel="EXPLORE ASSETS"
                    label="VER PROJETOS" 
                    delay={1.0} 
                    onClick={() => onActivate("Mostre-me os ativos disponíveis.")}
                    className="text-[#1A1A1A]/60 border-[#1A1A1A]/20 hover:border-[#1A1A1A]"
                />
            </div>
        </div>

        {/* Right: Telha Image (Visual Anchor) */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-screen absolute top-0 right-0 md:relative z-0 md:z-10 opacity-40 md:opacity-100 pointer-events-none md:pointer-events-auto">
             <div className="w-full h-full flex items-center justify-center p-4">
                <TelhaImage 
                    src="/assets/generated/real_estate_villa.png" 
                    alt="Sovereign Villa"
                    className="object-cover"
                    containerClassName="w-full h-full md:h-[80vh] shadow-2xl"
                    aspectRatio="auto"
                />
             </div>
        </div>
    </div>
  );
}
