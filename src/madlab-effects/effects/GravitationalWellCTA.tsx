"use client";

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useReducedMotion } from '../core/governance';

interface GravitationalWellCTAProps {
    children: React.ReactNode;
    className?: string;
    intensity?: number; // 0 to 1
    onWellActive?: (active: boolean) => void;
}

export const GravitationalWellCTA: React.FC<GravitationalWellCTAProps> = ({ 
    children, 
    className = "",
    intensity = 0.5,
    onWellActive 
}) => {
    const elRef = useRef<HTMLDivElement>(null);
    const reducedMotion = useReducedMotion();

    useEffect(() => {
        if (reducedMotion || !elRef.current) return;

        const el = elRef.current;
        
        const handleMouseEnter = () => {
             onWellActive?.(true);
             // Verify if we need local GSAP for the button itself (e.g. slight scale dampening to contrast with the field)
             // But the prompt says "CTA stays stable". OK.
        };

        const handleMouseLeave = () => {
            onWellActive?.(false);
        };

        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            el.removeEventListener('mouseenter', handleMouseEnter);
            el.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [reducedMotion, onWellActive]);

    return (
        <div ref={elRef} className={`gravitational-well-trigger relative inline-block ${className}`}>
            {children}
        </div>
    );
};
