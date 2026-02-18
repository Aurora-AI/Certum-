"use client";

import React, { useRef, useLayoutEffect, useEffect } from 'react';
import { FieldEngine } from '../core/FieldEngine';
import { useReducedMotion } from '../core/governance';

interface VolumetricFieldProps {
    className?: string;
    onEngineReady?: (engine: FieldEngine) => void;
}

export const VolumetricField: React.FC<VolumetricFieldProps> = ({ className = "", onEngineReady }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const engineRef = useRef<FieldEngine | null>(null);
    const reducedMotion = useReducedMotion();

    useLayoutEffect(() => {
        if (!containerRef.current || reducedMotion) return;

        // Initialize Engine
        const engine = new FieldEngine(containerRef.current);
        engineRef.current = engine;
        onEngineReady?.(engine);
        engine.start();

        return () => {
            engine.dispose();
            engineRef.current = null;
        };
    }, [reducedMotion]);

    // Input Handling (Scroll & Cursor)
    useEffect(() => {
        if (reducedMotion) return;

        const handlePointerMove = (e: PointerEvent) => {
            if (!containerRef.current || !engineRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            
            // Normalize to 0-1 within the container
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;
            
            engineRef.current.updateCursor(x, y);
        };
        
        // Use global window scroll for now, or context if provided
        const handleScroll = () => {
            if (!containerRef.current || !engineRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            
            // Calculate how far down the element is from the top of the viewport
            // If negative, it's scrolling up out of view
            const scrollInfluence = Math.max(0, -rect.top); 
            
            engineRef.current.updateScroll(scrollInfluence, window.innerHeight);
        };

        window.addEventListener('pointermove', handlePointerMove);
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('pointermove', handlePointerMove);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [reducedMotion]);

    return (
        <div 
            ref={containerRef} 
            className={`volumetric-field absolute inset-0 w-full h-full pointer-events-none overflow-hidden ${className}`}
            aria-hidden="true"
        />
    );
};
