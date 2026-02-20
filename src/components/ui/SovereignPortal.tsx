'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function SovereignPortal() {
    const svgRef = useRef<SVGSVGElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!svgRef.current) return;

        // PHYSICAL AXIOM: S-Tier Motion Easing
        const sTierEase = "cubic-bezier(0.16, 1, 0.3, 1)";

        const ctx = gsap.context(() => {
            // Floating animation (Physical Axiom: Gravity without mass)
            gsap.to(svgRef.current, {
                y: '-2vw',
                duration: 4,
                ease: sTierEase,
                repeat: -1,
                yoyo: true
            });

            // Rotational breathing for inner rings - slow and steady
            gsap.to(".portal-ring-inner", {
                rotation: 360,
                duration: 25,
                ease: "none",
                repeat: -1,
                transformOrigin: "center center"
            });

            gsap.to(".portal-ring-outer", {
                rotation: -360,
                duration: 45,
                ease: "none",
                repeat: -1,
                transformOrigin: "center center"
            });

            // Pulse effect (Breathing)
            gsap.to(".portal-core", {
                scale: 1.15,
                opacity: 0.8,
                duration: 3,
                ease: sTierEase,
                repeat: -1,
                yoyo: true
            });
        });

        return () => ctx.revert();
    }, []);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current || !svgRef.current) return;
        
        const { clientX, clientY } = e;
        const { left, top, width, height } = containerRef.current.getBoundingClientRect();
        
        // Dynamic response calculation
        const x = (clientX - left - width / 2) / 30;
        const y = (clientY - top - height / 2) / 30;

        gsap.to(svgRef.current, {
            x: x + 'vw',
            y: y + 'vw',
            duration: 1.2,
            ease: "cubic-bezier(0.16, 1, 0.3, 1)"
        });
    };

    return (
        <div 
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative w-full aspect-square max-w-[clamp(280px,35vw,600px)] flex items-center justify-center pointer-events-auto"
        >
            <svg 
                ref={svgRef}
                viewBox="0 0 200 200" 
                className="w-full h-full drop-shadow-[0_0_5vw_rgba(200,169,133,0.15)] will-change-transform"
            >
                {/* Outer Glow Ring */}
                <circle 
                    cx="100" cy="100" r="90" 
                    fill="none" 
                    stroke="url(#goldGradient)" 
                    strokeWidth="0.5" 
                    strokeDasharray="1, 4"
                    className="portal-ring-outer opacity-30 will-change-transform"
                />
                
                {/* Middle Ring with Architecture markers */}
                <circle 
                    cx="100" cy="100" r="70" 
                    fill="none" 
                    stroke="#C8A985" 
                    strokeWidth="0.2" 
                    className="portal-ring-mid opacity-40"
                />
                
                {/* Inner Complex Ring */}
                <path 
                    d="M 100 40 A 60 60 0 0 1 160 100 A 60 60 0 0 1 100 160 A 60 60 0 0 1 40 100 A 60 60 0 0 1 100 40 Z" 
                    fill="none" 
                    stroke="url(#goldGradient)" 
                    strokeWidth="1" 
                    className="portal-ring-inner opacity-60 will-change-transform"
                />

                {/* Core Wealth Signature */}
                <circle 
                    cx="100" cy="100" r="15" 
                    fill="url(#goldRadial)" 
                    className="portal-core will-change-transform"
                />

                <defs>
                    <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#C8A985" stopOpacity="0.1" />
                        <stop offset="50%" stopColor="#C8A985" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#C8A985" stopOpacity="0.1" />
                    </linearGradient>
                    <radialGradient id="goldRadial" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                        <stop offset="0%" stopColor="#C8A985" stopOpacity="1" />
                        <stop offset="100%" stopColor="#C8A985" stopOpacity="0" />
                    </radialGradient>
                </defs>
            </svg>
        </div>
    );
}
