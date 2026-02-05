"use client";

import { useEffect, useState } from "react";

export function AntigravityParticles() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    // Create 60 particles as per Astro Chat spec
    const particles = Array.from({ length: 60 }).map((_, i) => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        opacity: Math.random() * 0.2
    }));

    return (
        <div className="particle-field fixed inset-0 w-full h-full pointer-events-none z-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.03)_0%,transparent_70%)]">
            {particles.map((p, i) => (
                <div 
                    key={i}
                    className="dot absolute w-[2px] h-[2px] bg-black/5 rounded-full"
                    style={{
                        left: p.left,
                        top: p.top,
                        opacity: p.opacity
                    }}
                />
            ))}
        </div>
    );
}
