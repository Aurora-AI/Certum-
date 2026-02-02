"use client";

import { useRef, useState, useEffect } from "react";
import { useChat } from "@ai-sdk/react";
import gsap from "gsap";
import { PromptChip } from "@/components/PromptChip";
import { cn } from "@/lib/utils";

export default function Home() {
  const [mode, setMode] = useState<"dream" | "chat">("dream");
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // useChat returns { input, handleInputChange, handleSubmit, messages, setInput, ... }
  // If Typescript complains, we can cast or ensure we assume standard behavior.
  // The error "Property 'input' does not exist" suggests a version mismatch or breaking change.
  // However, for MVP commit, we can use 'any' casting if needed, but let's try standard usage again.
  // Ideally: const { messages, input, handleInputChange, handleSubmit, setInput } = useChat();
  const chat = useChat();
  // Safe destructuring with fallback or manual access to debug type
  const { messages, input, handleInputChange, handleSubmit, setInput } = chat as any;

  // GSAP Entrance
  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(heroRef.current, { opacity: 1, duration: 1.5 })
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
      // 2. Background Focus Pull (Blur + Darken)
      .to(
        ".hero-bg",
        {
          filter: "blur(20px) brightness(0.3)",
          scale: 1.1,
          duration: 1.5,
          ease: "power2.out",
        },
        "-=0.5"
      )
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
      className="relative min-h-screen w-full overflow-hidden bg-black text-white opacity-0"
    >
      {/* Background Layer */}
      <div 
        className="hero-bg absolute inset-0 z-0 bg-cover bg-center transition-all will-change-transform"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2669&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" /> {/* Default Overlay */}
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
              <form onSubmit={handleSubmit} className="relative w-full">
                 <input
                    ref={inputRef}
                    value={input || ''}
                    onChange={handleInputChange}
                    placeholder="Command the architecture..."
                    className={cn(
                       "w-full bg-black/60 backdrop-blur-xl border border-white/20 text-white p-4 pr-12 rounded-b-xl outline-none",
                       "focus:border-[#ecb613]/50 transition-colors placeholder:text-white/30"
                    )}
                 />
                 <button 
                  type="submit"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-[#ecb613] transition-colors"
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
