"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registra o plugin (necessário no Next.js)
gsap.registerPlugin(ScrollTrigger, useGSAP);

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Reveal Animation (Entrada)
    const tl = gsap.timeline({ delay: 2.2 }); // Espera o Preloader acabar

    tl.from(".hero-reveal", {
      y: 100,
      opacity: 0,
      duration: 1.5,
      stagger: 0.2,
      ease: "power3.out"
    });

    // 2. Parallax Effect (Scroll)
    gsap.to(bgRef.current, {
      yPercent: 30, // A imagem desce mais devagar que o scroll
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full h-screen overflow-hidden flex items-end pb-24 px-6 lg:px-12 bg-background text-white">
      
      {/* Camada 0: Background Parallax */}
      <div ref={bgRef} className="absolute inset-0 z-0 opacity-60 scale-110">
        {/* Usando Image do Next.js para otimização - substitua pelo vídeo depois se quiser */}
        <Image 
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2500&auto=format&fit=crop"
          alt="Abstract Architecture"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay Gradiente para leitura */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0b07] via-[#0d0b07]/50 to-transparent" />
      </div>

      {/* Camada 1: Conteúdo */}
      <div ref={textRef} className="relative z-10 w-full max-w-[1800px] mx-auto flex flex-col lg:flex-row items-end justify-between gap-12">
        
        {/* TEXTO HERO (Parallax Speed) */}
        <div ref={textRef} className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
            
            <span className="text-[#ecb613] text-xs font-bold tracking-[0.3em] uppercase mb-6 opacity-0 animate-fade-in-up">
                Coleção Brutalista
            </span>

            <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter text-white leading-none mb-8 opacity-0 animate-fade-in-up delay-100 mix-blend-difference">
                Construindo o <br />
                <span className="font-serif italic font-light text-[#f2f2f0]">Invisível.</span>
            </h1>

            <p className="text-gray-400 text-sm md:text-lg max-w-xl leading-relaxed mb-10 opacity-0 animate-fade-in-up delay-200">
                Arquitetura patrimonial para quem já transcendeu a acumulação.
                <br/><span className="text-white">Nós buscamos a permanência.</span>
            </p>

            <button className="px-8 py-3 border border-white/20 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500 opacity-0 animate-fade-in-up delay-300">
                [ Iniciar Protocolo ]
            </button>

        </div>

        {/* Bloco Direito: Manifesto */}
        <div className="flex flex-col items-end text-right gap-8 hero-reveal">
          <p className="max-w-xs text-sm text-text-muted leading-relaxed font-medium">
            Arquitetura financeira curada para o indivíduo soberano. 
            Ativos concretos, liberdade líquida.
          </p>
          
          {/* Scroll Indicator */}
          <div className="flex flex-col items-center gap-4 opacity-50">
            <span className="text-[10px] uppercase tracking-widest writing-vertical-rl">Scroll</span>
            <div className="w-[1px] h-16 bg-white/20 overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-primary animate-bounce-slow" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
