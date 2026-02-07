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
                        x: -x * 20,
                        y: -y * 20,
                        duration: 1.5,
                        ease: "power2.out"
                    });

                    // Mid (Medium)
                    gsap.to(midRef.current, {
                        x: -x * 40,
                        y: -y * 40,
                        duration: 1.5,
                        ease: "power2.out"
                    });

                    // Front (Opposite/Deep)
                    gsap.to(fgRef.current, {
                        x: x * 15,
                        y: y * 15,
                        duration: 1.5,
                        ease: "power2.out"
                    });
                };

                window.addEventListener("mousemove", handleMouseMove);
                return () => window.removeEventListener("mousemove", handleMouseMove);
            });
            
            // FX-08 Liquid Morph (Subtle breathing/distortion using simple scale/rotate)
            // A true liquid morph needs SVG filters or Canvas, but we can approximate "living air" 
            // with a slow, noise-based movement on the overlays.
            gsap.to(".liquid-overlay", {
                scale: 1.1,
                opacity: 0.15,
                duration: 8,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {/* Layer 1: Deep Background (Abstract/Dark) */}
            <div ref={bgRef} className="absolute inset-[-5%] w-[110%] h-[110%] bg-[#0a0a0a]">
                 <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent z-10" />
                 {/* Placeholder for "Atmosphere" - could be a very dark image or gradient */}
                 <Image 
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1600&q=50" // Abstract fluid dark
                    alt="Atmosphere"
                    fill
                    className="object-cover opacity-60"
                    priority
                 />
            </div>

            {/* FX-08 Liquid Morph Layer (Texture) */}
            <div className="liquid-overlay absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.08] mix-blend-overlay pointer-events-none" />

            {/* Layer 2: Subject/Mid (The Car or Lifestyle Image) */}
            <div ref={midRef} className="absolute inset-[-2%] w-[104%] h-[104%] flex items-center justify-center">
                 {/* Using the image from previous HeroSection but isolated if possible. 
                     Since we don't have a segmented car, we'll use a high-quality lifestyle shot 
                     that works well as a center piece.
                 */}
                 <div className="relative w-full h-full opacity-80 mix-blend-multiply">
                    {/* Placeholder replacement or keeping original one but handled better */}
                 </div>
            </div>

            {/* Layer 3: Foreground (Dust/Light/Fog) */}
            <div ref={fgRef} className="absolute inset-0 z-20 pointer-events-none">
                 {/* Fog elements */}
                 <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-white/5 blur-[100px] rounded-full mix-blend-soft-light" />
                 <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#BFB38F]/10 blur-[120px] rounded-full mix-blend-screen" />
            </div>
            
            {/* Vignette */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/20 to-black/80 z-30 pointer-events-none" />
        </div>
    );
};
