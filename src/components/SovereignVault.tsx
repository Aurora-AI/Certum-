"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { TelhaImage } from "@/components/ui/TelhaImage";
import { RevealText } from "@/components/ui/RevealText";

gsap.registerPlugin(ScrollTrigger);

export function SovereignVault() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%",
            }
        });

        // 1. Line Draws
        tl.fromTo(lineRef.current, { scaleX: 0 }, { scaleX: 1, duration: 1.5, ease: "power4.out", transformOrigin: "left" })
        
        // 2. Text Rises (Masked)
          .fromTo(titleRef.current, 
            { y: "100%" }, 
            { y: "0%", duration: 1.5, ease: "power4.out" }, 
            "-=1.2"
          )
        
        // 3. Metadata Fades
          .from(labelRef.current, { opacity: 0, x: -20, duration: 1 }, "-=1")
          .from(".vault-meta", { opacity: 0, y: 20, duration: 1 }, "-=0.8");

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section 
        ref={containerRef} 
        className="relative w-full bg-[#f0f0f0] text-black py-40 md:py-48 overflow-hidden z-20"
    >
      <div className="container mx-auto px-12">
        {/* SECTION HEADER */}
        <div className="mb-32 relative">
            {/* The Animated Line */}
            <div ref={lineRef} className="absolute bottom-0 left-0 w-full h-[1px] bg-black/10 origin-left" />

            <div className="pb-8">
                <span ref={labelRef} className="block text-xs font-bold uppercase tracking-widest mb-4 text-[#897f61]">
                    Sovereign Assets
                </span>
                
                {/* Mask Container using RevealText */}
                <RevealText 
                    tag="h2"
                    className="text-[12vw] md:text-[8vw] leading-[0.9] font-light tracking-tighter text-black uppercase"
                >
                    The Vault
                </RevealText>

                <div className="vault-meta mt-8 flex justify-end px-4 pt-4">
                    <p className="max-w-md text-sm md:text-base text-gray-400 font-mono uppercase tracking-widest">
                        Protocol 2025 // Available
                    </p>
                </div>
            </div>
        </div>

        {/* LIVING FRAMES GRID (Exo Ape Staggered Z-Pattern) */}
        <div className="flex flex-col gap-24 lg:gap-32 w-full relative max-w-[1600px] mx-auto">
            
            {/* FRAME 1: AUTOMOTIVE - Right Aligned */}
            {/* ITEM 1: AUTOMOTIVE (MACHINE CAPSULE) */}
            <div className="flex flex-col md:flex-row items-center justify-between w-full gap-12 group">
                 {/* Image Container */}
                <div className="w-full md:w-[50%] lg:w-[45%]">
                    <TelhaImage 
                        src="/assets/generated/vault_auto_pov.png"
                        alt="Machine Capsule"
                        aspectRatio="square"
                        containerClassName="shadow-xl"
                    />
                 </div>

                 {/* Text Content (Right) */}
                 <div className="w-full md:w-[40%] flex flex-col gap-6">
                    <div className="flex flex-col">
                        <RevealText tag="span" className="text-primary text-xs font-bold uppercase tracking-widest mb-2" delay={0.1}>
                            Plano Pontual Rodobens
                        </RevealText>
                        <RevealText tag="h3" className="text-4xl md:text-5xl font-light leading-tight uppercase" delay={0.2}>
                            Seu Próximo Carro
                        </RevealText>
                    </div>
                    
                    <RevealText tag="p" className="text-gray-500 text-lg font-light leading-relaxed max-w-sm" delay={0.3}>
                        Previsibilidade contratual. Diferente do consórcio comum, o Plano Pontual permite agendar a entrega do seu carro na 12ª ou 24ª parcela, sem depender da sorte.
                    </RevealText>

                    {/* Metadata Line */}
                    <div className="w-full border-t border-gray-200 mt-4 pt-4 flex justify-between items-center text-xs font-bold uppercase tracking-widest text-[#897f61]">
                        <RevealText tag="span" delay={0.4}>Entrega Garantida</RevealText>
                        <RevealText tag="span" className="text-primary" delay={0.5}>Sem Juros</RevealText>
                    </div>

                    {/* CTA */}
                    <div>
                        <Link href="/consorcio">
                            <button className="px-8 py-3 rounded-full border-2 border-black/10 text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300">
                                Simular Auto
                            </button>
                        </Link>
                    </div>
                 </div>
            </div>

            {/* FRAME 2: REAL ESTATE (LIVING SANCTUARY) */}
            {/* ITEM 2: REAL ESTATE (LIVING SANCTUARY) */}
            <div className="flex flex-col md:flex-row-reverse items-center justify-between w-full gap-12 group">
                 {/* Image Container */}
                 <div className="w-full md:w-[50%] lg:w-[45%]">
                    <TelhaImage 
                        src="/assets/generated/vault_home_pov.png"
                        alt="Real Estate Protocol"
                        aspectRatio="portrait"
                        containerClassName="shadow-xl"
                    />
                 </div>

                 {/* Text Content (Left) */}
                 <div className="w-full md:w-[40%] flex flex-col gap-6 md:text-right">
                    <div className="flex flex-col md:items-end">
                        <RevealText tag="span" className="text-primary text-xs font-bold uppercase tracking-widest mb-2" delay={0.1}>
                            Consórcio Imobiliário
                        </RevealText>
                        <RevealText tag="h3" className="text-4xl md:text-5xl font-light leading-tight uppercase" delay={0.2}>
                            Seu Novo Imóvel
                        </RevealText>
                    </div>
                    
                    <RevealText tag="p" className="text-gray-500 text-lg font-light leading-relaxed max-w-sm md:ml-auto" delay={0.3}>
                        A compra inteligente da casa própria ou investimento. Prazos estendidos de até 216 meses para viabilizar seu sonho com parcelas que cabem no bolso.
                    </RevealText>

                    {/* Metadata Line */}
                    <div className="w-full border-t border-gray-200 mt-4 pt-4 flex justify-between items-center text-xs font-bold uppercase tracking-widest text-[#897f61]">
                        <RevealText tag="span" className="text-primary" delay={0.4}>Crédito até R$ 800K</RevealText>
                        <RevealText tag="span" delay={0.5}>216 Meses</RevealText>
                    </div>

                    {/* CTA */}
                    <div className="flex md:justify-end">
                        <Link href="/consorcio">
                            <button className="px-8 py-3 rounded-full border-2 border-black/10 text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300">
                                Simular Imóvel
                            </button>
                        </Link>
                    </div>
                 </div>
            </div>
            
        </div>
      </div>
    </section>
  );
}
