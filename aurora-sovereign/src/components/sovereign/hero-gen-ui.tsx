'use client';

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowUp } from "lucide-react"; // Replaced Material Icon with Lucide

export function HeroGenUI() {
  const containerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const feedbackRef = useRef<HTMLDivElement>(null);
  
  const [isSummoning, setIsSummoning] = useState(false);

  // 1. KINETIC ENTRANCE (Disney: Staging)
  useGSAP(() => {
    const tl = gsap.timeline();

    // The Text "Forging Reality" enters ripping through space
    tl.from(".hero-title-char", {
      y: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.05,
      ease: "power4.out",
      delay: 0.5
    })
    // The Input enters later, floating (Secondary Action)
    .from(formRef.current, {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.8");

  }, { scope: containerRef });

  // 2. THE SUMMONING LOGIC (Gen-UI Trigger)
  const handleSummon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputRef.current?.value || isSummoning) return;

    setIsSummoning(true);

    // DOHERTY THRESHOLD: Feedback <100ms
    // Disney: Anticipation (Form "breathes" before sending)
    const tl = gsap.timeline();

    if (formRef.current) {
        tl.to(formRef.current, {
        scale: 0.97,
        duration: 0.1,
        ease: "power2.in"
        })
        .to(formRef.current, {
        scale: 1,
        duration: 0.4,
        ease: "elastic.out(1, 0.5)", // Squash & Stretch
        borderColor: "#ecb613",
        boxShadow: "0 0 30px rgba(236,182,19, 0.2)"
        });
    }

    // Thinking Visual Feedback
    if (feedbackRef.current) {
        gsap.to(feedbackRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.3
        });
    }

    // Server Action Simulation (Gen-UI)
    setTimeout(() => {
        // Simulated Success
        if (btnRef.current) btnRef.current.innerHTML = "✓";
        if (inputRef.current) inputRef.current.value = "Asset Identified. Loading...";
        
        // Exit Transition
        if (containerRef.current) {
            gsap.to(containerRef.current, {
                filter: "blur(10px)",
                scale: 1.05,
                opacity: 0,
                duration: 1.5,
                delay: 0.5,
                ease: "power2.in"
            });
        }
        
        // window.location.href = '/simulacao'; // Real Action
    }, 2000);
  };

  return (
    <section ref={containerRef} className="relative w-full h-screen overflow-hidden flex flex-col justify-end pb-24 px-6 lg:px-12 bg-[#0d0b07] text-white">
        
        {/* ATMOSPHERE (Background) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-10"></div>
            <img 
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop" 
                className="w-full h-full object-cover scale-110 opacity-60 grayscale-[0.3]" 
                alt="Void Architecture" 
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#0d0b07] via-[#0d0b07]/50 to-transparent z-0"></div>
        </div>

        {/* CONTENT */}
        <div className="relative z-20 w-full max-w-[1800px] mx-auto flex flex-col lg:flex-row items-end justify-between gap-16">
            
            {/* Left Side: The Promise */}
            <div className="max-w-4xl pointer-events-none select-none">
                <div className="overflow-hidden mb-6">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#ecb613] rounded-full animate-pulse"></div>
                        <span className="text-[#ecb613] text-xs font-mono uppercase tracking-[0.3em]">System Online</span>
                    </div>
                </div>
                
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-light leading-[0.9] tracking-tightest mix-blend-exclusion">
                    <span className="block hero-title-char">Forging</span> 
                    <span className="block font-bold italic text-transparent bg-clip-text bg-linear-to-r from-white to-gray-500 hero-title-char">Reality.</span>
                </h1>
            </div>

            {/* Right Side: The Input (Gen-UI) */}
            <div className="w-full max-w-xl pointer-events-auto">
                
                {/* Thinking State Feedback */}
                <div ref={feedbackRef} className="opacity-0 translate-y-4 mb-4 flex items-center gap-3 text-xs font-mono text-[#ecb613] uppercase tracking-widest">
                    <span className="w-4 h-4 border-2 border-[#ecb613] border-t-transparent rounded-full animate-spin"></span>
                    <span>Antigravity Processing...</span>
                </div>

                {/* Input Container */}
                <form 
                    ref={formRef}
                    onSubmit={handleSummon}
                    className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-1 transition-colors duration-500 hover:border-[#ecb613]/30"
                >
                    <input 
                        ref={inputRef}
                        type="text" 
                        disabled={isSummoning}
                        placeholder="Ex: Simular casa de 800k em Curitiba..." 
                        className="w-full bg-transparent border-none py-6 pl-6 pr-16 text-white placeholder-white/30 text-lg font-light focus:ring-0 focus:outline-none disabled:opacity-50"
                    />
                    
                    {/* Magnetic Button */}
                    <button 
                        ref={btnRef}
                        type="submit" 
                        disabled={isSummoning}
                        className="absolute right-2 top-2 bottom-2 w-14 bg-[#ecb613] text-black rounded flex items-center justify-center hover:scale-105 active:scale-95 transition-transform duration-300 disabled:grayscale disabled:cursor-not-allowed"
                    >
                        <ArrowUp size={24} />
                    </button>
                </form>

                <div className="absolute -bottom-8 left-0 flex gap-4 text-[10px] uppercase tracking-widest text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <span>Press Enter to Summon</span>
                    <span>•</span>
                    <span>AI Powered</span>
                </div>
            </div>

        </div>
    </section>
  );
}
