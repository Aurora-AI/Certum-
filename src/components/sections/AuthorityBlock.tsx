"use client";

import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AuthorityBlock = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // 1. MONUMENTAL PARALLAX (The Background Numbers)
            // Eles movem-se mais lentamente que o scroll (Profundidade Z negativa)
            gsap.to(".monumental-number", {
                yPercent: 30, // Move para baixo suavemente enquanto scrolla
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom", // Quando o topo da seção entra em baixo da tela
                    end: "bottom top",   // Quando o fundo da seção sai por cima
                    scrub: 1
                }
            });

            // 2. THE TRUTH REVEAL (Foreground Content)
            // Aparece com dignidade e precisão
            gsap.fromTo(contentRef.current, 
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.5,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 60%", // Mais cedo para dar tempo de ler
                        toggleActions: "play none none reverse"
                    }
                }
            );

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="authority-section w-full relative h-[60vw] min-h-[800px] flex items-center justify-center bg-[#0d0e13] text-light overflow-hidden">
            
            {/* --- LAYER 0: THE VOID (Ambient) --- */}
            {/* Uma luz volumétrica central para dar "chão" à autoridade */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-white opacity-[0.02] blur-[150px] rounded-full pointer-events-none"></div>


            {/* --- LAYER 1: MONUMENTAL SCALE (Architecture) --- */}
            {/* Os números são a estrutura do prédio, não o conteúdo. */}
            <div className="absolute inset-0 flex justify-between items-center px-[5vw] pointer-events-none select-none z-0">
                
                {/* 70 Years Monument */}
                <div className="monumental-number relative text-[25vw] leading-none font-bold text-white opacity-[0.03] mix-blend-overlay transform -translate-x-[5vw]">
                    70
                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] animate-[shimmer_8s_infinite] pointer-events-none"></div>
                </div>

                {/* 18 Bi Monument */}
                <div className="monumental-number relative text-[35vw] lg:text-[25vw] leading-none font-bold text-white opacity-[0.03] mix-blend-overlay transform translate-x-[5vw]">
                    18
                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] animate-[shimmer_8s_infinite_2s] pointer-events-none"></div>
                </div>
            </div>


            {/* --- LAYER 2: THE TRUTH (Content) --- */}
            {/* O foco cognitivo. Nítido. Central. Inquestionável. */}
            <div ref={contentRef} className="relative z-10 text-center flex flex-col items-center gap-[3vw]">
                
                {/* 2.1 The Label */}
                <span className="text-label text-accent tracking-[0.2vw] opacity-80">
                    {/* /// LASTRO INSTITUCIONAL */}
                    /// LASTRO INSTITUCIONAL
                </span>

                {/* 2.2 The Partnership (Centerpiece) */}
                <div className="flex items-center gap-[4vw] mb-[2vw]">
                    {/* CERTUM */}
                    <h2 className="text-[10vw] lg:text-[5vw] font-bold tracking-tighter text-white">
                        CERTUM
                    </h2>
                    
                    {/* The Divider (Binding) */}
                    <div className="h-[4vw] w-px bg-linear-to-b from-transparent via-accent to-transparent opacity-50"></div>

                    {/* RODOBENS */}
                    <h2 className="text-[10vw] lg:text-[5vw] font-bold tracking-tighter text-white">
                        RODOBENS
                    </h2>
                </div>

                {/* 2.3 The Explanation (Subtitle) */}
                <p className="text-[3.5vw] lg:text-[1.2vw] font-light max-w-[85vw] lg:max-w-[40vw] leading-relaxed text-white/50">
                    A solidez de <strong className="text-white">70 anos de história</strong> e <strong className="text-white">18 bilhões</strong> em ativos sob gestão. 
                    <br/>Uma aliança forjada em performance absoluta.
                </p>

                {/* 2.4 The Decoration (Minimal) */}
                <div className="w-px h-[6vw] bg-linear-to-b from-accent to-transparent mt-[4vw] opacity-30"></div>

            </div>

        </section>
    );
};

export default AuthorityBlock;
