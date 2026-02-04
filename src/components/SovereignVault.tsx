"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LivingFrame from "./LivingFrame"; // Fixed Default Import

gsap.registerPlugin(ScrollTrigger);

export function SovereignVault() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
        // Title Reveal
        gsap.from(titleRef.current, {
            y: 100,
            opacity: 0,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%",
            }
        });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section 
        ref={containerRef} 
        className="relative w-full bg-[#f0f0f0] text-black py-40 md:py-48 overflow-hidden z-20"
    >
      <div className="container mx-auto px-12">
        {/* SECTION HEADER */}
        <div className="mb-32 border-b border-black/10 pb-8">
            <span className="block text-xs font-bold uppercase tracking-widest mb-4">Work</span>
            <h2 
                ref={titleRef}
                className="text-[12vw] md:text-[8vw] leading-[0.9] font-light tracking-tighter text-black"
            >
                THE VAULT
            </h2>
            <div className="mt-8 flex justify-end px-4 border-t border-black/10 pt-4">
                <p className="max-w-md text-sm md:text-base text-gray-500 font-mono uppercase tracking-widest">
                    Available Assets // Protocol 2025
                </p>
            </div>
        </div>

        {/* LIVING FRAMES GRID (Exo Ape Staggered Z-Pattern) */}
        <div className="flex flex-col gap-24 lg:gap-32 w-full relative max-w-[1600px] mx-auto">
            
            {/* FRAME 1: AUTOMOTIVE - Right Aligned (Text Left in snippet context, but let's follow standard Z: Content Left, Image Right) */}
            {/* Snippet had Image Right for first item? Let's check. 
                Snippet: <div class="flex justify-start"> (Article 1) -> Image Left?
                Snippet: <div class="flex justify-end"> (Article 2) -> Image Right?
                Let's emulate that flow.
            */}

            {/* ITEM 1: AUTOMOTIVE (Left Aligned Image) */}
            <div className="flex flex-col md:flex-row items-center justify-between w-full gap-12 group">
                 {/* Image Container */}
                 <div className="w-full md:w-[50%] lg:w-[45%]">
                    <LivingFrame 
                        videoSrc="/assets/hero.mp4" 
                        imageSrc="/assets/nano-banana/3.png"
                        alt="Automotive Collection"
                    />
                 </div>

                 {/* Text Content (Right) */}
                 <div className="w-full md:w-[40%] flex flex-col gap-6">
                    <div className="flex flex-col">
                        <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2">Current Assets</span>
                        <h3 className="text-4xl md:text-5xl font-light leading-tight">Vintage Engineering</h3>
                    </div>
                    
                    <p className="text-gray-500 text-lg font-light leading-relaxed max-w-sm">
                        Timeless machines preserved in their prime. A collection of accessible legends.
                    </p>

                    {/* Metadata Line */}
                    <div className="w-full border-t border-gray-200 mt-4 pt-4 flex justify-between items-center text-xs font-bold uppercase tracking-widest text-[#897f61]">
                        <span>Stuttgart, DE</span>
                        <span className="text-primary text-base">$125K</span>
                    </div>
                 </div>
            </div>

            {/* ITEM 2: REAL ESTATE (Right Aligned Image) */}
            <div className="flex flex-col md:flex-row-reverse items-center justify-between w-full gap-12 group">
                 {/* Image Container */}
                 <div className="w-full md:w-[50%] lg:w-[45%]">
                    <LivingFrame 
                        videoSrc="/assets/Efeito .mp4" 
                        imageSrc="/assets/House.png"
                        alt="Real Estate Protocol"
                    />
                 </div>

                 {/* Text Content (Left) */}
                 <div className="w-full md:w-[40%] flex flex-col gap-6 md:text-right">
                    <div className="flex flex-col md:items-end">
                        <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2">Sovereign Sanctuaries</span>
                        <h3 className="text-4xl md:text-5xl font-light leading-tight">The Concrete Canopy</h3>
                    </div>
                    
                    <p className="text-gray-500 text-lg font-light leading-relaxed max-w-sm md:ml-auto">
                        A deliberate flow of architectural movement. Video-framed portals into curated sanctuaries.
                    </p>

                    {/* Metadata Line */}
                    <div className="w-full border-t border-gray-200 mt-4 pt-4 flex justify-between items-center text-xs font-bold uppercase tracking-widest text-[#897f61]">
                        <span className="text-primary text-base">$4.2M</span>
                        <span>Bali, Indonesia</span>
                    </div>
                 </div>
            </div>
            
        </div>
      </div>
    </section>
  );
}
