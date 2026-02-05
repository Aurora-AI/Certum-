"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RevealText } from "@/components/ui/RevealText";

gsap.registerPlugin(ScrollTrigger);

export function ConsortiumSection() {
  return (
    <section 
        className="relative w-full min-h-[50vh] bg-[#F4F4F4] text-[#1A1A1A] py-20 border-t border-[#1A1A1A]/10 z-20"
    >
      <div className="container mx-auto px-12 text-center flex flex-col items-center">
        
        <RevealText tag="h2" className="text-4xl md:text-6xl font-thin tracking-widest uppercase opacity-50 text-[#1A1A1A]">
            Consortium Logic
        </RevealText>
        
        <RevealText delay={0.2} className="mt-4 text-[#1A1A1A]/30 font-mono text-sm">
            [ Module Pending Injection ]
        </RevealText>

      </div>
    </section>
  );
}

