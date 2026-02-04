"use client";

import { useRef, useState, useEffect } from "react";
import { useChat } from "@ai-sdk/react";
import gsap from "gsap";
import { useNeuroSensor } from "@/hooks/useNeuroSensor";
import { PromptChip } from "@/components/PromptChip";
import { cn } from "@/lib/utils";

export default function Home() {
  const [mode, setMode] = useState<"dream" | "chat">("dream");
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // useChat returns { input, handleInputChange, handleSubmit, messages, setInput, ... }
  const chat = useChat();
  const { messages, input, handleInputChange, handleSubmit, setInput } = chat as any;

  // --- NEURO SENSOR INTEGRATION ---
  useNeuroSensor(async (signal) => {
    // 1. Send telemetry to Cortex (Fire & Forget)
    fetch('/api/cortex', {
        method: 'POST',
        body: JSON.stringify(signal)
    }).then(res => res.json()).then(cmd => {
        // 2. React to Cortex Commands (The "Closer" Logic)
        // 2. React to Cortex Commands (The "Closer" Logic) - DISABLED per Clean Start
        if (cmd.action === 'CALM_DOWN') {
           // No-op
        }
    });

    // 3. Client-Side Immediate Mutations (Latency < 16ms)
    // Hesitation Check: Hovering "Initiate Protocol" (CTA)
    if (signal.hoverTarget === 'cta-primary' && signal.dwellTime > 2000) {
        gsap.to(".cta-pulse", { 
            boxShadow: "0 0 30px rgba(236, 182, 19, 0.6)", 
            scale: 1.05, 
            duration: 0.5, 
            yoyo: true, 
            repeat: 1 
        });
    }
  });

  // GSAP Entrance
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(heroRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5 })
      .fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=1"
      );
  }, []);

  // Transition Logic: Focus Pull
  const activateChat = (initialPrompt?: string) => {
    if (mode === "chat") return;
    setMode("chat");
    if (initialPrompt && setInput) setInput(initialPrompt);

    const tl = gsap.timeline();

    // 1. Title Exit
    tl.to(titleRef.current, {
      y: -50,
      opacity: 0,
      duration: 0.8,
      ease: "power2.in",
    })
      // REMOVED BLUR per Clean Start Request
      /* .to(
        ".hero-bg",
        {
          filter: "blur(20px) brightness(0.3)",
          scale: 1.1,
          duration: 1.5,
          ease: "power2.out",
        },
        "-=0.5"
      ) */
      // 3. Chat Interface Entrance
      .fromTo(
        chatRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          onComplete: () => {
             // Auto-focus input if no prompt was selected, or submit if one was? 
             // For MVP, just focus.
             inputRef.current?.focus();
          }
        },
        "-=0.8"
      );
  };

  return (
    <main
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden bg-black text-white"
    >
      {/* Background Layer */}
      <div className="hero-bg absolute inset-0 z-0 flex items-center justify-center bg-black transition-all overflow-hidden">
        <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
            <source src="/assets/Hero.mp4" type="video/mp4" />
        </video>
        {/* MVP: ultra-leve para deploy hoje (sem assets pesados) */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(236,182,19,0.16),_rgba(0,0,0,0.92)_55%,_#000_100%)] mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80" />

        {/* Cinematic Letterboxing (The 'Film 4' Look) */}
        <div className="absolute top-0 left-0 w-full h-[12vh] bg-black z-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-[12vh] bg-black z-20 pointer-events-none" />
        
        {/* Optional Overlay for Text Readability - Disabled to avoid darkening the video */}
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center p-4">
        
        {/* State: DREAM */}
        <div ref={titleRef} className="text-center">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-4">
            CENTRUM
          </h1>
          <p className="text-xl md:text-2xl font-light text-white/80 tracking-widest uppercase mb-12">
            Architecture of Wealth
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <PromptChip 
              label="Design my Sovereign Vault" 
              delay={1} 
              onClick={() => activateChat("Design a sovereign vault structure for wealth preservation.")}
            />
            <PromptChip 
              label="Analyze Market Entropy" 
              delay={1.2} 
              onClick={() => activateChat("Analyze current market entropy and risk vectors.")}
            />
            <PromptChip 
              label="Initiate Protocol" 
              delay={1.4} 
              onClick={() => activateChat()}
              className="cta-pulse border-[#ecb613]/50 text-[#ecb613]" // Visual distinction
              data-neuro-target="cta-primary" // Sensor Target
            />
          </div>
        </div>

        {/* State: CHAT (Hidden initially) */}
        <div 
          ref={chatRef} 
          className={cn(
            "absolute inset-0 flex flex-col items-center justify-center pointer-events-none opacity-0",
             mode === 'chat' && "pointer-events-auto"
          )}
        >
           <div className="w-full max-w-2xl h-[60vh] flex flex-col">
              {/* Chat Messages Area */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 rounded-t-2xl bg-black/20 backdrop-blur-sm border border-white/10 border-b-0 mask-image-b">
                 {messages?.length === 0 && (
                    <div className="h-full flex items-center justify-center text-white/30 italic">
                       Elysian Intelligence Active. Awaiting Input.
                    </div>
                 )}
                 {messages?.map((m: any) => (
                    <div key={m.id} className={cn("flex", m.role === 'user' ? "justify-end" : "justify-start")}>
                       <div className={cn(
                          "max-w-[80%] p-3 rounded-xl text-sm",
                          m.role === 'user' ? "bg-white/10 text-white" : "text-[#ecb613]"
                       )}>
                          {m.content}
                       </div>
                    </div>
                 ))}
              </div>

              {/* Input Area */}
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit(e);
                }} 
                className="relative w-full z-50 pointer-events-auto"
              >
                 <input
                    ref={inputRef}
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Command the architecture..."
                    className={cn(
                       "w-full bg-black/60 backdrop-blur-xl border border-white/20 text-white p-4 pr-12 rounded-b-xl outline-none",
                       "focus:border-[#ecb613]/50 transition-colors placeholder:text-white/30"
                    )}
                 />
                 <button 
                  type="submit"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-[#ecb613] transition-colors pointer-events-auto cursor-pointer"
                 >
                    Send
                 </button>
              </form>
           </div>
        </div>

      </div>
    </main>
  );
}
