"use client";

import React, { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import MagneticButton from "../ui/MagneticButton";

interface SimulationCTAProps {
  href: string;
  label: string;
}

export function SimulationCTA({ href, label }: SimulationCTAProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<SVGSVGElement>(null);

  useGSAP(() => {
    // 1. Rays Animation
    // Create random rays moving towards the button
    const colors = ["#BFB38F", "#4A90E2", "#FFFFFF"];
    const lines = linesRef.current?.querySelectorAll(".ray-line");

    if (lines) {
        lines.forEach((line) => {
            gsap.set(line, { 
                attr: { x1: 120, x2: 160, y1: "random(0, 40)", y2: "random(0, 40)" },
                opacity: 0,
                stroke: gsap.utils.random(colors)
            });

            gsap.to(line, {
                attr: { x1: -20, x2: 20 }, // Move left across the button area
                opacity: 1,
                duration: "random(1.5, 2.5)",
                repeat: -1,
                ease: "none",
                delay: "random(0, 2)",
                yoyo: false,
                keyframes: {
                    "0%": { opacity: 0 },
                    "20%": { opacity: 0.8 },
                    "80%": { opacity: 0.8 },
                    "100%": { opacity: 0 }
                }
            });
        });
    }

    // 2. Button Glow Pulse
    // Sync roughly with rays
    gsap.to(glowRef.current, {
        opacity: 0.6,
        boxShadow: "0 0 15px rgba(191,179,143, 0.4)",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative inline-block group">
      {/* Light Rays Layer */}
      <div className="absolute top-1/2 right-full -translate-y-1/2 w-[100px] h-[50px] pointer-events-none overflow-hidden origin-right mr-2 transform rotate-180 mix-blend-plus-lighter">
        <svg ref={linesRef} width="100%" height="100%" viewBox="0 0 100 40" className="w-full h-full">
            {[...Array(5)].map((_, i) => (
                <line key={i} className="ray-line" strokeWidth="1.5" strokeLinecap="round" />
            ))}
        </svg>
      </div>

      {/* Glow Effect Layer */}
      <div ref={glowRef} className="absolute inset-0 bg-[#BFB38F]/10 rounded-sm opacity-0 pointer-events-none transition-opacity" />

      {/* Main Button */}
      <MagneticButton strength={0.4} radius={100} className="z-10">
      <Link 
        href={href} 
        className="relative inline-flex items-center gap-[10px] text-[11px] font-medium uppercase tracking-[0.2em] text-[#1A1A1A] py-3 px-4 border-b border-[#1A1A1A]/12 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-[#1A1A1A] hover:tracking-[0.28em] transition-all duration-500"
      >
        {label}
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-500 group-hover:translate-x-1">
            <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Link>
      </MagneticButton>
    </div>
  );
}
