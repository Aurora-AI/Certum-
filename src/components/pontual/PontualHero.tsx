'use client';

import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export default function PontualHero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ 
                defaults: { ease: "cubic-bezier(1, 0, 0, 1)", duration: 2.5 } 
            });

            // Parallax scale on background
            tl.fromTo(bgRef.current,
                { scale: 1.1, opacity: 0 },
                { scale: 1, opacity: 0.4, duration: 4 },
                0
            );

            // Text reveal
            tl.fromTo(".fade-up", 
                { opacity: 0, y: "5vw" },
                { opacity: 1, y: 0, stagger: 0.15 },
                0.5
            );
            
            // Separator line expand
            tl.fromTo(".expand-line",
                { scaleX: 0 },
                { scaleX: 1, duration: 2 },
                1
            );

            // Halo Effect: Exit Transition (Peak-End Rule)
            gsap.to(containerRef.current, {
                scale: 0.95,
                opacity: 0.2,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom center",
                    scrub: true
                }
            });
        }, containerRef);
        
        return () => ctx.revert();
    }, []);

    return (
        <section 
            ref={containerRef} 
            className="relative w-full h-screen flex flex-col justify-end pb-[10vh] bg-[#0d0e13] text-light overflow-hidden px-[4vw] md:px-[6vw]"
        >
            {/* Nav Back */}
            <div className="absolute top-[5vh] left-[4vw] md:left-[6vw] z-20">
                <Link 
                    href="/" 
                    className="group flex items-center gap-2 text-[3.5vw] md:text-[0.9vw] text-zinc-400 hover:text-white transition-colors duration-300"
                >
                    <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" strokeWidth={1.5} />
                    <span className="font-body uppercase tracking-widest">Início</span>
                </Link>
            </div>

            {/* Cinematic Background */}
            <div 
                ref={bgRef}
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{ backgroundImage: 'url(/assets/pontual_imoveis.png)' }}
            />
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 z-1 bg-linear-to-t from-[#0d0e13] via-[#0d0e13]/80 to-transparent" />

            <div className="relative z-10 w-full flex flex-col items-start max-w-[1400px] mx-auto">
                <span className="fade-up text-[3vw] md:text-[0.9vw] uppercase tracking-[0.3em] text-accent font-body mb-[2vw]">
                    Acelerador de Patrimônio Físico
                </span>
                
                <h1 className="text-[12vw] md:text-[8vw] font-display font-light leading-[0.9] tracking-[-0.02em] mb-[4vw] md:mb-[2vw]">
                    <div className="overflow-hidden"><div className="fade-up">Arquitetura</div></div>
                    <div className="overflow-hidden"><div className="fade-up">de <span className="text-accent italic">Alavancagem.</span></div></div>
                </h1>

                <div className="expand-line w-full md:w-[40vw] h-px bg-[rgba(255,255,255,0.1)] origin-left mb-[4vw] md:mb-[2vw]" />

                <p className="fade-up text-[4.5vw] md:text-[1.2vw] font-body text-zinc-400 font-light max-w-lg leading-relaxed">
                    Não é sobre poupar. É sobre engenharia financeira para ancorar liquidez em ativos reais de forma impositiva.
                </p>
            </div>
        </section>
    );
}
