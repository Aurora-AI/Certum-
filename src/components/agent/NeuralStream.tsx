"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";
import { Bot, User } from "lucide-react";

type Message = {
  role: 'user' | 'agent';
  text: string;
};

interface NeuralStreamProps {
  messages: Message[];
  isProcessing: boolean;
}

export function NeuralStream({ messages, isProcessing }: NeuralStreamProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Auto-scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isProcessing]);

  // Entrance Animation for new messages
  useEffect(() => {
    if (!containerRef.current) return;
    const lastMessage = containerRef.current.lastElementChild?.previousElementSibling; // skip bottomRef
    if (lastMessage) {
       gsap.fromTo(lastMessage, 
         { opacity: 0, y: 20 }, 
         { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
       );
    }
  }, [messages.length]);

  return (
    <div className="flex-1 h-full overflow-hidden flex flex-col relative w-full max-w-4xl mx-auto">
      {/* Stream Header */}
      <div className="h-12 border-b border-sovereign-border flex items-center px-6 bg-sovereign-void/80 backdrop-blur-sm z-10 sticky top-0">
        <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-sovereign-gold animate-pulse" />
            <span className="text-xs font-mono text-sovereign-gold/80 tracking-widest uppercase">
                NEURAL_UPLINK_ESTABLISHED
            </span>
        </div>
      </div>

      {/* Stream Content */}
      <div ref={containerRef} className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">
        {messages.map((msg, i) => (
          <div key={i} className={cn(
            "flex w-full gap-4",
            msg.role === 'user' ? "justify-end" : "justify-start"
          )}>
            
            {/* AGENT AVATAR */}
            {msg.role === 'agent' && (
                <div className="w-8 h-8 rounded-sm bg-sovereign-gold/10 border border-sovereign-gold/30 flex items-center justify-center shrink-0 mt-1">
                    <Bot className="w-4 h-4 text-sovereign-gold" />
                </div>
            )}

            {/* MESSAGE BUBBLE */}
            <div className={cn(
                "relative max-w-[80%] p-4 rounded-sm border backdrop-blur-md",
                msg.role === 'agent' 
                  ? "bg-sovereign-surface/50 border-sovereign-border text-sovereign-text" 
                  : "bg-sovereign-gold/10 border-sovereign-gold/20 text-sovereign-gold"
            )}>
                {/* Tech Deco Corner */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/10" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/10" />
                
                <p className="font-mono text-sm leading-relaxed whitespace-pre-wrap">
                    {msg.text}
                </p>
            </div>

            {/* USER AVATAR */}
            {msg.role === 'user' && (
                <div className="w-8 h-8 rounded-sm bg-sovereign-border flex items-center justify-center shrink-0 mt-1">
                    <User className="w-4 h-4 text-sovereign-muted" />
                </div>
            )}
          </div>
        ))}

        {/* PROCESSING INDICATOR */}
        {isProcessing && (
            <div className="flex w-full gap-4 justify-start">
               <div className="w-8 h-8 rounded-sm bg-sovereign-gold/10 border border-sovereign-gold/30 flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4 text-sovereign-gold" />
                </div>
                <div className="flex items-center gap-1 h-8">
                    <div className="w-1 h-1 bg-sovereign-gold rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <div className="w-1 h-1 bg-sovereign-gold rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <div className="w-1 h-1 bg-sovereign-gold rounded-full animate-bounce" />
                </div>
            </div>
        )}
        
        <div ref={bottomRef} className="h-4" />
      </div>
    </div>
  );
}
