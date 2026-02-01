'use client';

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function Preloader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const brandRef = useRef<HTMLDivElement>(null);
  
  // O estado controla se o preloader ainda existe no DOM
  const [isActive, setIsActive] = useState(true);

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => setIsActive(false) // Remove do DOM ao fim
    });

    // 1. CICLO DE PALAVRAS (Narrativa)
    const words = ["Consórcio", "Seguros", "Sovereign Legacy"];
    
    words.forEach((word, index) => {
      // Entrada da palavra
      tl.to(textRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.2, // Quick exit of previous word (or initial state)
        onComplete: () => {
             // For the first word, this clears any initial text. For subsequent, creates the swap.
        }
      })
      .set(textRef.current, { 
          innerText: word,
          color: index === 2 ? "#ecb613" : "#ffffff" // Sovereign Legacy is Gold
      }) 
      .to(textRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power3.out"
      })
      .to(textRef.current, {
        opacity: 0,
        y: -20,
        duration: index === 2 ? 0.2 : 0.2, // Last word also fades out before brand reveal
        delay: index === 2 ? 0.8 : 0.3 // Last word stays longer (Reading time)
      });
    });

    // 2. REVELAÇÃO DA MARCA (O Clímax)
    tl.set(textRef.current, { display: "none" }) // Remove o texto anterior
      .to(brandRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "elastic.out(1, 0.5)", // Disney: Squash & Stretch
        startAt: { opacity: 0, scale: 0.8 }
      })
      
    // 3. A CORTINA SOBE (Exit)
    .to(containerRef.current, {
      yPercent: -100,
      duration: 1,
      ease: "power4.inOut",
      delay: 0.5
    });

  }, { scope: containerRef });

  if (!isActive) return null;

  return (
    <div 
        ref={containerRef} 
        className="fixed inset-0 z-[9999] bg-[#0d0b07] flex flex-col items-center justify-center pointer-events-auto"
    >
        {/* TEXTO MUTÁVEL (Consórcio -> Seguros -> Legado) */}
        <h2 
            ref={textRef} 
            className="text-2xl md:text-4xl font-light tracking-[0.3em] uppercase text-white absolute"
        >
            {/* Initial text empty, set by GSAP */}
        </h2>

        {/* CONTAINER DA MARCA FINAL (Logo + Nome) */}
        <div ref={brandRef} className="flex flex-col items-center gap-6 opacity-0">
            {/* LOGO */}
            <div className="w-24 h-24 md:w-32 md:h-32 relative overflow-hidden">
                 <img 
                    ref={logoRef}
                    src="/assets/logo.svg" 
                    alt="Aurora Asset Logo" 
                    className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(236,182,19,0.3)]"
                 />
            </div>

            {/* NOME DA EMPRESA */}
            <div className="text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tighter mix-blend-exclusion">
                    AURORA ASSET
                </h1>
                <div className="w-full h-[1px] bg-[#ecb613] mt-2 scale-x-0 animate-[grow_1s_ease-out_forwards]"></div>
            </div>
        </div>

        {/* LOADING BAR (Secondary Action - Disney) */}
        <div className="absolute bottom-12 w-64 h-[2px] bg-white/10 overflow-hidden">
            <div className="h-full bg-[#ecb613] animate-[loading_3.5s_ease-in-out_forwards]"></div>
        </div>

        <style jsx>{`
            @keyframes grow { to { transform: scaleX(1); } }
            @keyframes loading { 0% { width: 0% } 100% { width: 100% } }
        `}</style>
    </div>
  );
}
