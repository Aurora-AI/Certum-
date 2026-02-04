"use client";

import { useRef, useState } from "react";
import { useChat } from "@ai-sdk/react";
import gsap from "gsap";
import { HeroSection } from "@/components/mad-lab/HeroSection";
import { VaultSection } from "@/components/mad-lab/VaultSection";
import { ConsortiumSection } from "@/components/mad-lab/ConsortiumSection";
import { cn } from "@/lib/utils";

export default function Home() {
  const [mode, setMode] = useState<"dream" | "chat">("dream");
  const chatRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // useChat returns { input, handleInputChange, handleSubmit, messages, setInput, ... }
  const chat = useChat();
  const { messages, input, handleInputChange, handleSubmit, setInput } = chat as any;

  // Transition Logic: Focus Pull
  const activateChat = (initialPrompt?: string) => {
    if (mode === "chat") return;
    setMode("chat");
    if (initialPrompt && setInput) setInput(initialPrompt);

    const tl = gsap.timeline();

    // 1. Title Exit is handled by HeroSection reactive prop now.
    
    // 2. Chat Interface Entrance
    tl.fromTo(
        chatRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          onComplete: () => {
             inputRef.current?.focus();
          }
        },
        "+=0.2" // Slight delay to sync with Hero exit
      );
  };

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-black text-white scroll-smooth">
      
      {/* 1. Hero Module (Dream State) */}
      <HeroSection mode={mode} onActivate={activateChat} />

      {/* 2. Vault Module (Assets) */}
      <VaultSection />

      {/* 3. Consortium Module (Logic) */}
      <ConsortiumSection />

      {/* State: CHAT (Hidden initially) */}
      <div 
        ref={chatRef} 
        className={cn(
          "absolute inset-0 flex flex-col items-center justify-center pointer-events-none opacity-0 z-50",
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

    </main>
  );
}
