'use client';

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { AuroraBackground } from "./AuroraBackground";
import { ArrowUp } from "lucide-react"; 

export function HeroGenUI() {
  const containerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const feedbackRef = useRef<HTMLDivElement>(null);
  
  const [isSummoning, setIsSummoning] = useState(false);

  // 1. KINETIC ENTRANCE (Versão Manual & Gratuita)
  useGSAP(() => {
    const tl = gsap.timeline();

    // A mágica acontece aqui: animamos o 'span' dentro da div com overflow-hidden
    tl.from(".hero-line-inner", {
      yPercent: 100, // O texto sobe de "baixo da terra"
      duration: 1.2,
      stagger: 0.1,
      ease: "power4.out",
      delay: 0.2
    })
    // O Input entra suavemente depois do texto
    .from(formRef.current, {
      y: 20,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.8");

  }, { scope: containerRef });

  // 2. THE SUMMONING LOGIC
  const handleSummon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputRef.current?.value || isSummoning) return;

    setIsSummoning(true);

    const tl = gsap.timeline();

    // Feedback Tátil (Squash no Input)
    tl.to(formRef.current, {
      scale: 0.98,
      duration: 0.1,
      ease: "power2.in"
    })
    .to(formRef.current, {
      scale: 1,
      duration: 0.4,
      ease: "elastic.out(1, 0.5)",
      borderColor: "#ecb613",
      boxShadow: "0 0 30px rgba(236,182,19, 0.2)"
    });

    // Estado "Pensando"
    gsap.to(feedbackRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.3
    });

    // Simulação de Resposta (Gen-UI)
    setTimeout(() => {
        if (btnRef.current) btnRef.current.innerHTML = "✓"; 
        
        // Saída Cinematográfica
        gsap.to(containerRef.current, {
            filter: "blur(10px)",
            opacity: 0,
            duration: 1.5,
            delay: 0.5,
            ease: "power2.in"
        });
    }, 2000);
  };

  return (
    <section ref={containerRef} className="relative w-full h-screen overflow-hidden flex flex-col justify-end pb-24 px-6 lg:px-12 bg-[#0d0b07] text-white">
        
        {/* 1. ATMOSFERA (Fundo Absoluto z-0) */}
        <div className="absolute inset-0 z-0">
            <AuroraBackground />
        </div>

        {/* 2. CONTEÚDO (Frente Relativa z-10) */}
        <div className="relative z-10 w-full max-w-[1800px] mx-auto flex flex-col lg:flex-row items-end justify-between gap-16">
            
            {/* Lado Esquerdo: Título Soberano */}
            <div className="max-w-5xl pointer-events-none select-none">
                {/* Status Indicator */}
                <div className="overflow-hidden mb-8">
                    <div className="flex items-center gap-3 hero-line-inner">
                        <div className="w-2 h-2 bg-[#ecb613] rounded-full animate-pulse"></div>
                        <span className="text-[#ecb613] text-xs font-mono uppercase tracking-[0.3em]">
                            System Online
                        </span>
                    </div>
                </div>
                
                {/* Título Principal (Estrutura de Máscara para Animação) */}
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-light leading-[0.9] tracking-tightest mix-blend-exclusion space-y-2">
                    <div className="overflow-hidden">
                        <span className="block hero-line-inner">Forging</span>
                    </div>
                    <div className="overflow-hidden">
                        {/* Gradiente no texto */}
                        <span className="block font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 hero-line-inner pb-2">
                            Legacy.
                        </span>
                    </div>
                </h1>
            </div>

            {/* Lado Direito: Input Gen-UI */}
            <div className="w-full max-w-xl pointer-events-auto">
                
                {/* Feedback "Pensando" */}
                <div ref={feedbackRef} className="opacity-0 translate-y-4 mb-4 flex items-center gap-3 text-xs font-mono text-[#ecb613] uppercase tracking-widest">
                    <span className="w-4 h-4 border-2 border-[#ecb613] border-t-transparent rounded-full animate-spin"></span>
                    <span>Antigravity Processing...</span>
                </div>

                {/* Input Container */}
                <form 
                    ref={formRef}
                    onSubmit={handleSummon}
                    className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg p-1 transition-colors duration-500 hover:border-[#ecb613]/30"
                >
                    <input 
                        ref={inputRef}
                        type="text" 
                        disabled={isSummoning}
                        placeholder="Ex: Simular casa de 800k..." 
                        className="w-full bg-transparent border-none py-6 pl-6 pr-16 text-white placeholder-white/30 text-lg font-light focus:ring-0 focus:outline-none disabled:opacity-50"
                    />
                    
                    {/* Botão Magnético */}
                    <button 
                        ref={btnRef}
                        type="submit" 
                        disabled={isSummoning}
                        className="absolute right-2 top-2 bottom-2 w-14 bg-[#ecb613] text-black rounded flex items-center justify-center hover:scale-105 active:scale-95 transition-transform duration-300 disabled:grayscale disabled:cursor-not-allowed"
                    >
                        {/* Se der erro no ícone, troque por <span className="text-xl">↑</span> */}
                        <ArrowUp size={24} />
                    </button>
                </form>

                <div className="absolute -bottom-8 left-0 flex gap-4 text-[10px] uppercase tracking-widest text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <span>Press Enter to Summon</span>
                </div>
            </div>

        </div>
    </section>
  );
}
