"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// Utilitário para explodir o texto em spans (simula SplitText do GSAP pago)
const SplitTitle = ({ children, className }: { children: string, className?: string }) => {
  return (
    <span className={`inline-block overflow-hidden ${className}`}>
      <span className="inline-block translate-y-full reveal-text">
        {children}
      </span>
    </span>
  );
};

export default function ConsorcioHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  
  // Mouse Parallax State
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    // Normaliza de -1 a 1
    const x = (e.clientX / window.innerWidth) * 2 - 1;
    const y = (e.clientY / window.innerHeight) * 2 - 1;
    setMousePos({ x, y });
    
    // Animação leve do background baseada no mouse (Magnetic Feel)
    gsap.to(".hero-bg-layer", {
      x: x * 20, // Move 20px
      y: y * 20,
      duration: 1.5,
      ease: "power2.out"
    });
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      const tl = gsap.timeline({ delay: 0.2 });

      // 1. Setup inicial
      gsap.set(".reveal-text", { y: "110%", rotateX: -20, opacity: 0 });
      gsap.set(".hero-line", { scaleX: 0, transformOrigin: "center" });
      gsap.set(".hero-meta", { opacity: 0, y: 20 });

      // 2. A Sequência "Antigravity"
      tl.to(".hero-line", { 
        scaleX: 1, 
        duration: 1.2, 
        ease: "expo.inOut" 
      })
      .to(".reveal-text", {
        y: "0%",
        rotateX: 0,
        opacity: 1,
        duration: 1.8,
        ease: "power4.out", // A curva "Antigravity" (rápida no início, elástica no fim)
        stagger: 0.15 // Atraso entre linhas
      }, "-=0.8")
      .to(".hero-meta", {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.1
      }, "-=1.0");

      // 3. Scroll Parallax (O Texto sobe mais rápido que o fundo)
      gsap.to(heroContentRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        },
        y: 150, // Parallax distance
        opacity: 0,
        scale: 0.95
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#1A1A1A] text-white selection:bg-[#BFB38F] selection:text-[#1A1A1A]"
    >
      {/* ATMOSPHERE LAYERS */}
      {/* 1. Grain (Noise) - Mantendo sua textura global */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* 2. Dynamic Background (Reage ao Mouse) */}
      <div className="hero-bg-layer absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-[#BFB38F]/10 blur-[120px] rounded-full mix-blend-screen animate-pulse-slow" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-[#BFB38F]/5 blur-[150px] rounded-full mix-blend-screen" />
      </div>

      {/* 3. Grid Sutileza (Traz estrutura técnica) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] z-0 pointer-events-none" />

      {/* CONTENT CORE */}
      <div ref={heroContentRef} className="relative z-10 flex flex-col items-center text-center px-4 w-full max-w-[90vw]">
        
        {/* Top Label (Architecture) */}
        <div className="hero-meta flex items-center gap-3 mb-8 tracking-[0.3em] uppercase text-[9px] md:text-[11px] text-[#BFB38F]/80 font-medium">
          <span className="w-2 h-2 rounded-full bg-[#BFB38F] animate-pulse" />
          Certum Private Logic
        </div>

        {/* The Divider (Horizon Line) */}
        <div className="hero-line w-[1px] h-[60px] md:h-[100px] bg-gradient-to-b from-transparent via-[#BFB38F] to-transparent mb-6 opacity-50" />

        {/* Main Typography - Sovereign Scale */}
        <h1 className="flex flex-col items-center leading-[0.9] tracking-tighter font-bold uppercase text-[clamp(3.5rem,12vw,11rem)] mix-blend-lighten">
          {/* Quebrando em blocos para animação individual */}
          <SplitTitle className="text-white">Seu Novo</SplitTitle>
          <SplitTitle className="text-[#BFB38F]">Patrimônio</SplitTitle>
        </h1>

        {/* Subtitle / Description */}
        <div className="hero-meta mt-10 max-w-lg text-center">
          <p className="text-sm md:text-base font-light text-white/50 leading-relaxed">
            A arquitetura financeira para materializar sonhos. 
            <span className="text-white/80 font-medium"> Sem sorteio. Apenas estratégia.</span>
          </p>
        </div>

      </div>

      {/* Footer / Scroll Cue */}
      <div className="absolute bottom-10 left-0 w-full flex justify-between items-end px-[5vw] z-20 pointer-events-none mix-blend-difference text-[#BFB38F]">
        <div className="hero-meta text-[10px] tracking-widest uppercase opacity-60">
          Scroll para Decolar
        </div>
        <div className="hero-meta animate-bounce">
            <ArrowDown className="w-5 h-5 opacity-80" />
        </div>
        <div className="hero-meta text-[10px] tracking-widest uppercase opacity-60">
          Lat: -23.5505°
        </div>
      </div>

    </section>
  );
}
