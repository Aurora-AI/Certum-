"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import Image from "next/image";

export const VolumetricBackground = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);
    const midRef = useRef<HTMLDivElement>(null);
    const fgRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            // Desktop Parallax
            mm.add("(min-width: 768px)", () => {
                const handleMouseMove = (e: MouseEvent) => {
                    const x = (e.clientX / window.innerWidth - 0.5) * 2; // -1 to 1
                    const y = (e.clientY / window.innerHeight - 0.5) * 2;

                    // Back (Slower, reverse)
                    gsap.to(bgRef.current, {
                        x: -x * 10, // Reduced from 20
                        y: -y * 10,
                        duration: 1.5,
                        ease: "power2.out",
                        overwrite: true // Important for perf
                    });

                    // Mid (Medium)
                    gsap.to(midRef.current, {
                        x: -x * 20, // Reduced from 40
                        y: -y * 20,
                        duration: 1.5,
                        ease: "power2.out",
                        overwrite: true
                    });

                    // Front (Opposite/Deep)
                    gsap.to(fgRef.current, {
                        x: x * 10, // Reduced from 15
                        y: y * 10,
                        duration: 1.5,
                        ease: "power2.out",
                        overwrite: true
                    });
                };

                window.addEventListener("mousemove", handleMouseMove);
                return () => window.removeEventListener("mousemove", handleMouseMove);
            });
            
            // FX-08 Liquid Morph (Subtle breathing/distortion) - REDUCED/REMOVED for now.
            // Replaced with a simple CSS pulse on the light leak to save FPS.
            
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-[#0F0F0F]">
            {/* Layer 1: Deep Background (Architectural Texture - Dark Stone/Marble) */}
            <div ref={bgRef} className="absolute inset-[-5%] w-[110%] h-[110%]">
                 <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] z-10" />
                 {/* Better Context: A subtle abstract architectural curve or light play */}
                 <Image 
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=60" // Architecture High Rise / Abstract
                    alt="Sovereign Architecture"
                    fill
                    className="object-cover opacity-20 grayscale mix-blend-overlay"
                    priority
                 />
            </div>

            {/* Layer 2: Middle (Light Shafts) */}
            <div ref={midRef} className="absolute inset-[-2%] w-[104%] h-[104%] flex items-center justify-center">
                 {/* A center light source or "Gold" hint */}
                 <div className="absolute top-[20%] right-[30%] w-[40vw] h-[40vw] bg-[#BFB38F] rounded-full blur-[150px] opacity-[0.05]" />
                 <div className="absolute bottom-[10%] left-[20%] w-[30vw] h-[30vw] bg-[#FFFFFF] rounded-full blur-[120px] opacity-[0.03]" />
            </div>

            {/* Layer 3: Foreground (Grain + Vignette) */}
            <div ref={fgRef} className="absolute inset-0 z-20 pointer-events-none">
                 {/* Grain Overlay (CSS based) */}
                 <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] mix-blend-overlay pointer-events-none" />
            </div>
            
            {/* Vignette */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/10 to-black/90 z-30 pointer-events-none" />
        </div>
    );
};
