'use client';

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

export function Preloader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  
  const [isActive, setIsActive] = useState(true);

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => setIsActive(false)
    });

    // 1. REVELAÇÃO DO LOGO (Suave, Inércia Pura)
    tl.to(logoRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        startAt: { opacity: 0, y: 15, scale: 0.98 } // Começa levemente menor e abaixo
    })

    // 2. A LINHA SOBERANA (Desenha do centro)
    .to(lineRef.current, {
        scaleX: 1,
        opacity: 1,
        duration: 1,
        ease: "expo.out"
    }, "-=0.5") // Começa antes do logo terminar

    // 3. O TEXTO DE LEGADO (Emerge de baixo)
    .to(textRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        startAt: { opacity: 0, y: 10 }
    }, "-=0.8")

    // 4. TEMPO DE LEITURA (Pausa Dramática)
    .to({}, { duration: 1.5 }) 

    // 5. A SAÍDA (A Cortina Sobe)
    .to(containerRef.current, {
        yPercent: -100,
        duration: 1.2,
        ease: "power4.inOut"
    });

  }, { scope: containerRef });

  if (!isActive) return null;

  return (
    <div 
        ref={containerRef} 
        className="fixed inset-0 z-9999 bg-[#0d0b07] flex flex-col items-center justify-center pointer-events-auto select-none"
    >
        {/* CONTAINER CENTRAL */}
        <div className="flex flex-col items-center justify-center w-full max-w-md px-8">
            
            {/* 1. O LOGO (Imagem Real) */}
            <div className="w-48 h-32 mb-8 relative">
                 <Image 
                    ref={logoRef}
                    src="/assets/logo.png" 
                    alt="Prime Logo"
                    fill
                    className="object-contain opacity-0 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
                 />
            </div>

            {/* 2. A LINHA ELEGANTE (Divisor Dourado) */}
            {/* Começa com scale-x-0 para crescer do centro */}
            <div 
                ref={lineRef}
                className="w-32 h-px bg-linear-to-r from-transparent via-[#ecb613] to-transparent mb-6 opacity-0 scale-x-0 origin-center"
            ></div>

            {/* 3. A TRÍADE DE VALOR (Texto Estático e Sólido) */}
            <div 
                ref={textRef}
                className="flex items-center gap-3 text-[10px] md:text-xs font-medium tracking-[0.3em] text-white/80 uppercase opacity-0"
            >
                <span>Consórcio</span>
                <span className="text-[#ecb613] text-[8px]">✦</span> {/* Separador Dourado */}
                <span>Seguros</span>
                <span className="text-[#ecb613] text-[8px]">✦</span>
                <span>Legado</span>
            </div>

        </div>

        {/* BACKGROUND NOISE (Atmosfera Sutil) */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none mix-blend-overlay"></div>
    </div>
  );
}
