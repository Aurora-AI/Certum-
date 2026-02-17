'use client';

import { useRef, useMemo } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

/**
 * ParticleHighlight — Rodobens Visual Identity
 * 
 * Renders a scattered particle cloud (SVG dots) behind text,
 * matching the Hero particle sphere aesthetic.
 * Animates in via scroll trigger.
 * 
 * @prop color - Particle color (default: Rodobens green #007C4A)
 * @prop opacity - Overall opacity (default: 0.18)
 * @prop density - Number of particles (default: 40)
 * @prop spread - Vertical spread ratio (default: 1.0)
 * @prop animate - Whether to animate on scroll (default: true)
 * @prop className - Additional classes for the wrapper
 */

interface ParticleHighlightProps {
    children: React.ReactNode;
    color?: string;
    opacity?: number;
    density?: number;
    spread?: number;
    animate?: boolean;
    className?: string;
    as?: 'span' | 'div';
}

// Pure integer-based PRNG (mulberry32) — identical on server and client
// Math.sin()-based PRNGs produce different floats in Node.js vs V8 browser
function mulberry32(seed: number): () => number {
    let t = (seed | 0) + 0x6D2B79F5;
    return () => {
        t = Math.imul(t ^ (t >>> 15), t | 1);
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

// Round to N decimals for SSR/client consistency
const round3 = (n: number) => Math.round(n * 1000) / 1000;

function generateParticles(
    count: number,
    spread: number,
    seed: number = 42
) {
    const rng = mulberry32(seed);
    const particles = [];
    for (let i = 0; i < count; i++) {
        particles.push({
            cx: round3(rng() * 100),                               // 0-100% x
            cy: round3(20 + rng() * 60 * spread),                  // centered vertically  
            r: round3(0.3 + rng() * 0.9),                          // 0.3-1.2 radius
            opacity: round3(0.3 + rng() * 0.7),                    // 0.3-1.0 individual opacity
        });
    }
    return particles;
}

export default function ParticleHighlight({
    children,
    color = '#007C4A',
    opacity = 0.18,
    density = 40,
    spread = 1.0,
    animate = true,
    className = '',
    as: Tag = 'span',
}: ParticleHighlightProps) {
    const containerRef = useRef<HTMLSpanElement | HTMLDivElement>(null);
    const svgRef = useRef<SVGSVGElement>(null);

    const particles = useMemo(
        () => generateParticles(density, spread),
        [density, spread]
    );

    useGSAP(() => {
        if (!animate || !svgRef.current || !containerRef.current) return;

        // Start invisible
        gsap.set(svgRef.current, { opacity: 0, scale: 0.8 });

        gsap.to(svgRef.current, {
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
            },
        });

        // Stagger individual particles for a "materialization" effect
        const circles = svgRef.current.querySelectorAll('circle');
        gsap.from(circles, {
            attr: { r: 0 },
            duration: 0.6,
            ease: 'back.out(2)',
            stagger: { amount: 0.8, from: 'random' },
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
            },
        });
    }, { scope: containerRef });

    return (
        <Tag
            ref={containerRef as any}
            className={`relative inline-block ${className}`}
        >
            {/* Particle Layer */}
            <svg
                ref={svgRef}
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid slice"
                style={{ opacity }}
                aria-hidden="true"
            >
                {particles.map((p, i) => (
                    <circle
                        key={i}
                        cx={p.cx}
                        cy={p.cy}
                        r={p.r}
                        fill={color}
                        opacity={p.opacity}
                    />
                ))}
            </svg>

            {/* Text Layer (always on top) */}
            <span className="relative z-10">{children}</span>
        </Tag>
    );
}
