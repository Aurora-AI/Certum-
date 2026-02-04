"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

import { useScramble } from "@/hooks/useScramble";

interface PromptChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string; // The final Portuguese label
  englishLabel?: string; // The initial English label
  delay?: number;
}

export function PromptChip({ label, englishLabel, delay = 0, className, onClick, ...props }: PromptChipProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  
  // Scramble Effect: Hold English for 500ms (0.5s), then scramble to Portuguese over 1s
  // We add 'delay * 1000' to the startDelay to sync with the GSAP entrance if we want, 
  // OR we can let the scramble happen while it fades in. 
  // User asked: "English for 0.5s".
  const displayText = useScramble(label, englishLabel || label, (delay * 1000) + 800, 800);

  useEffect(() => {
    if (buttonRef.current) {
// ...
      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: delay,
          ease: "power3.out",
        }
      );
    }
  }, [delay]);

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      className={cn(
        "relative px-6 py-2.5 rounded-full",
        "bg-white/5 backdrop-blur-md border border-white/10",
        "text-sm font-medium text-white/80 tracking-wide",
        "transition-all duration-300 ease-out",
        "hover:bg-white/10 hover:border-[#ecb613] hover:text-[#ecb613] hover:scale-105 hover:shadow-[0_0_20px_rgba(236,182,19,0.2)]",
        "active:scale-95",
        className
      )}
      {...props}
    >
      <span className="font-mono">{displayText}</span>
    </button>
  );
}
