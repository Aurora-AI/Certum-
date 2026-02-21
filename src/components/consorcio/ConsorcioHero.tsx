'use client';

import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export default function ConsorcioHero() {
    const containerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ 
                defaults: { ease: "cubic-bezier(1, 0, 0, 1)", duration: 2.5 } 
            });

            // Gentle zoom out for the monumental background
            tl.fromTo(".hero-bg",
                { scale: 1.1, opacity: 0 },
                { scale: 1, opacity: 0.5, duration: 4 },
                0
            );

            // Staggered text reveal
            tl.fromTo(".fade-up", 
                { opacity: 0, y: "4vw" },
                { opacity: 1, y: 0, stagger: 0.15 },
                0.5
            );
            
            // Hairline expand
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
            className="relative w-full h-[90vh] md:h-screen flex flex-col justify-center bg-[#0d0e13] text-light overflow-hidden px-[4vw] md:px-[6vw]"
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

            {/* Background Image */}
            <div 
                className="hero-bg absolute inset-0 z-0 bg-cover bg-center"
                style={{ backgroundImage: 'url(/assets/tradicional_imoveis.png)' }}
            />
            {/* Dark overlays */}
            <div className="absolute inset-0 z-1 bg-[#0d0e13]/60 mix-blend-multiply" />
            <div className="absolute inset-0 z-1 bg-linear-to-t from-[#0d0e13] via-[#0d0e13]/80 to-transparent" />
            <div className="absolute inset-0 z-1 bg-linear-to-r from-[#0d0e13] via-transparent to-transparent opacity-80" />

            <div className="relative z-10 w-full flex flex-col items-start max-w-[1400px] mx-auto">
                <span className="fade-up text-[3vw] md:text-[0.9vw] uppercase tracking-[0.3em] text-zinc-400 font-body mb-[2vw]">
                    Consórcio Tradicional
                </span>
                
                <h1 className="text-[11vw] md:text-[7.5vw] font-display font-light leading-[0.9] tracking-[-0.02em] mb-[4vw] md:mb-[3vw]">
                    <div className="overflow-hidden"><div className="fade-up">Acesso Estrutural</div></div>
                    <div className="overflow-hidden"><div className="fade-up">a <span className="text-accent italic">Capital.</span></div></div>
                </h1>

                <div className="expand-line w-full md:w-[35vw] h-px bg-[rgba(255,255,255,0.15)] origin-left mb-[4vw] md:mb-[3vw]" />

                <p className="fade-up text-[4.5vw] md:text-[1.2vw] font-body text-zinc-400 font-light max-w-lg leading-relaxed">
                    A disciplina matemática para aquisição de imóveis, renovação de frotas e expansão de maquinário agrícola sem o peso dos juros compostos.
                </p>
            </div>
        </section>
    );
}
