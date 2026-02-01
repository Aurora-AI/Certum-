"use client";

import { useRef, useState, FormEvent } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";

gsap.registerPlugin(useGSAP);

export function HeroGenUI() {
  const containerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const thinkingRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  // Entrance Animation
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
    
    tl.from(".hero-title span", {
      y: 120,
      opacity: 0,
      duration: 1.4,
      stagger: 0.1,
    })
    .from(".hero-input-container", {
      y: 60,
      opacity: 0,
      duration: 1,
    }, "-=0.8")
    .from(".hero-status", {
      opacity: 0,
      duration: 0.6,
    }, "-=0.5");
  }, { scope: containerRef });

  const activateGenUI = (e: FormEvent) => {
    e.preventDefault();
    
    if (!inputRef.current?.value || isProcessing) return;
    setIsProcessing(true);

    // Disney Principle: Anticipation (UI recua)
    const container = formRef.current?.parentElement;
    if (container) {
      gsap.to(container, { 
        scale: 0.98, 
        duration: 0.2, 
        ease: "power2.in" 
      });
    }

    // Simulated AI Response (Gen-UI)
    setTimeout(() => {
      // Disney Principle: Squash & Stretch (Elastic recovery)
      const containerEl = formRef.current?.parentElement;
      if (containerEl) {
        gsap.to(containerEl, { 
          scale: 1, 
          duration: 0.5, 
          ease: "elastic.out(1, 0.5)",
        });
      }
      
      // Update thinking state
      if (thinkingRef.current) {
        thinkingRef.current.innerHTML = `<span class="text-white">Asset Detected. Rendering Interface...</span>`;
      }
      
      // TODO: Integrate with Vercel AI SDK / Server Action
      // window.location.href = '/simulation/result';
      
      setTimeout(() => setIsProcessing(false), 1500);
    }, 1500);
  };

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden flex flex-col justify-end pb-24 px-6 lg:px-12 bg-[#0d0b07] text-white"
    >
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-10" />
        <Image
          src="/assets/nano-banana/1.png"
          alt="Void Architecture"
          fill
          className="object-cover scale-110 opacity-60 grayscale-[0.3]"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#0d0b07] via-[#0d0b07]/50 to-transparent z-0" />
      </div>

      {/* Content Layer */}
      <div className="relative z-20 w-full max-w-[1800px] mx-auto flex flex-col lg:flex-row items-end justify-between gap-16">
        
        {/* Title Block */}
        <div className="max-w-4xl pointer-events-none">
          <div className="overflow-hidden mb-6 hero-status">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[#ecb613] rounded-full animate-pulse" />
              <span className="text-[#ecb613] text-xs font-mono uppercase tracking-[0.3em]">
                System Online
              </span>
            </div>
          </div>
          
          <h1 className="hero-title text-6xl md:text-8xl lg:text-9xl font-light leading-[0.9] tracking-tighter mix-blend-exclusion overflow-hidden">
            <span className="inline-block">Forging</span> <br /> 
            <span className="inline-block font-bold italic text-transparent bg-clip-text bg-linear-to-r from-white to-gray-500">
              Reality.
            </span>
          </h1>
        </div>

        {/* Command Input (Summoning Gate) */}
        <div className="w-full max-w-xl pointer-events-auto hero-input-container">
          
          {/* Thinking State */}
          <div 
            ref={thinkingRef}
            className={`mb-4 flex items-center gap-3 text-xs font-mono text-[#ecb613] uppercase tracking-widest transition-opacity duration-300 ${isProcessing ? 'opacity-100' : 'opacity-0'}`}
          >
            <span className="w-4 h-4 border-2 border-[#ecb613] border-t-transparent rounded-full animate-spin" />
            <span>Antigravity Processing...</span>
          </div>

          {/* Input Container */}
          <div className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-1 transition-all duration-500 hover:border-[#ecb613]/50 focus-within:border-[#ecb613] focus-within:bg-black/80">
            
            <form ref={formRef} onSubmit={activateGenUI} className="relative flex items-center">
              <input 
                ref={inputRef}
                type="text" 
                placeholder="Diga ao sistema: 'Simular casa de 800k em Curitiba...'" 
                disabled={isProcessing}
                className="w-full bg-transparent border-none py-6 pl-6 pr-16 text-white placeholder-white/30 text-lg font-light focus:ring-0 focus:outline-none disabled:opacity-50"
              />
              
              <button 
                type="submit" 
                disabled={isProcessing}
                className="absolute right-2 w-12 h-12 bg-[#ecb613] text-black rounded flex items-center justify-center hover:scale-105 active:scale-95 transition-transform duration-300 disabled:opacity-50"
              >
                {isProcessing ? (
                  <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 19V5M5 12l7-7 7 7" />
                  </svg>
                )}
              </button>
            </form>

            {/* Hint Text */}
            <div className="absolute -bottom-8 left-0 flex gap-4 text-[10px] uppercase tracking-widest text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              <span>Press Enter to Summon</span>
              <span>•</span>
              <span>AI Powered</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
