"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

interface SovereignCardProps {
  title: string;
  subtitle: string;
  gradientFrom: string;
  gradientTo: string;
}

export const SovereignCard = ({ title, subtitle, gradientFrom, gradientTo }: SovereignCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const sheenRef = useRef<HTMLDivElement>(null);

  // Mobile Shimmer (Scroll-based)
  useEffect(() => {
    const card = cardRef.current;
    const sheen = sheenRef.current;
    
    if (!card || !sheen || window.innerWidth > 768) return;

    // Mobile-only shimmer trigger
    const ctx = gsap.context(() => {
        gsap.fromTo(sheen, 
            { x: "-100%", y: "-100%", opacity: 0 },
            {
                x: "100%", 
                y: "100%", 
                opacity: 0.8,
                duration: 1.5,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: card,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    }, cardRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Disable 3D tilt on mobile
    if (window.innerWidth < 768) return;
    
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Position relative to card center
    // -0.5 to 0.5
    const xPct = (e.clientX - rect.left) / width - 0.5;
    const yPct = (e.clientY - rect.top) / height - 0.5;

    // Pitch (rotateX) depends on Y
    // Yaw (rotateY) depends on X
    const tiltX = yPct * -20; // 20 deg tilt
    const tiltY = xPct * 20;

    gsap.to(card, {
      rotateX: tiltX,
      rotateY: tiltY,
      duration: 0.5,
      ease: "power2.out"
    });

    // Sheen Effect
    if (sheenRef.current) {
        gsap.to(sheenRef.current, {
            x: xPct * 100 + "%",
            y: yPct * 100 + "%",
            duration: 0.5,
            ease: "power2.out"
        });
    }
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;

    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 1.0,
      ease: "elastic.out(1, 0.5)"
    });
  };

  return (
    <div 
        className="group relative h-[400px] w-full perspective-[1000px] cursor-pointer"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
    >
      <div 
        ref={cardRef}
        className="relative h-full w-full rounded-2xl bg-[#1A1A1A] overflow-hidden border border-white/5 shadow-2xl transition-all duration-300 transform-style-3d will-change-transform"
        data-magnetic="true"
      >
        {/* Gradient Background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradientFrom} ${gradientTo} opacity-20`} />
        
        {/* Shine/Sheen */}
        <div 
            ref={sheenRef}
            className="absolute -inset-full w-[200%] h-[200%] bg-gradient-to-br from-transparent via-white/10 to-transparent pointer-events-none mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />

        {/* Content Layer (Pops out slightly) */}
        <div className="absolute inset-0 p-8 flex flex-col justify-end translate-z-[30px]">
            <h3 className="text-2xl font-bold text-[#EAEAEA] mb-2 translate-z-[20px]">{title}</h3>
            <p className="text-sm text-[#AAAAAA] translate-z-[10px]">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};
