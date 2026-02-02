"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

interface PromptChipProps {
  label: string;
  delay?: number;
  onClick?: () => void;
}

export function PromptChip({ label, delay = 0, onClick }: PromptChipProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (buttonRef.current) {
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
        "active:scale-95"
      )}
    >
      {label}
    </button>
  );
}
