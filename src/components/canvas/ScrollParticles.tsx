'use client';

import React, { useRef, useEffect } from 'react';

// Fast Hex to RGB parser for solid colors
const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : { r: 0, g: 0, b: 0 };
};

interface Particle {
    x: number;
    y: number;
    r: number;
    color: string;
    parallax: number;
    phase: number;
    speed: number;
    drift: number;
}

export default function ScrollParticles() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d', { alpha: true });
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        // Vivid colors aligned with cognitive requirements
        // Precious Metals & Ink Palette (Michelin Refinement)
        const cloudColors = ['#C8A985', '#E4E0DB', '#3b82f6', '#1a1b23'];
        
        // Increased count slightly since we are wrapping them infinitely
        const particleCount = 200; 
        const particles: Particle[] = [];
        const virtualHeight = height * 2.5; // Domain area for particles to exist before wrapping
        
        for (let i = 0; i < particleCount; i++) {
            const colorHex = cloudColors[Math.floor(Math.random() * cloudColors.length)];
            const rgb = hexToRgb(colorHex);

            particles.push({
                x: Math.random() * width,
                y: Math.random() * virtualHeight, // Spread uniformly across the virtual domain
                r: Math.random() * 1.0 + 0.5, // Adjusted for better visibility (was 0.4-1.2)
                color: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.5)`, // Increased alpha (was 0.3)
                parallax: Math.random() * 0.6 + 0.1, // Variation in scroll speed
                phase: Math.random() * Math.PI * 2,
                speed: Math.random() * 0.02 + 0.01,
                drift: Math.random() * 40 + 10,
            });
        }

        let scrollY = window.scrollY;
        let targetScrollY = window.scrollY;
        let opacity = 0; 

        const onScroll = () => {
            targetScrollY = window.scrollY;
        };

        window.addEventListener('scroll', onScroll, { passive: true });

        let animationFrame: number;
        let time = 0;

        const render = () => {
            time += 1;
            
            // Premium smooth scrolling interpolation
            scrollY += (targetScrollY - scrollY) * 0.1;

            // Kill Switch: Fade in only AFTER scrolling past the Hero
            // This protects the WebGPU Hero performance entirely!
            const targetOpacity = scrollY > 500 ? 1 : 0;
            opacity += (targetOpacity - opacity) * 0.05;
            
            if (opacity < 0.01) {
                // If totally invisible, don't draw anything to save 100% CPU
                ctx.clearRect(0, 0, width, height);
                animationFrame = requestAnimationFrame(render);
                return;
            }
            
            ctx.clearRect(0, 0, width, height);

            particles.forEach((p) => {
                // Horizontal drift (floatiness)
                const currentX = p.x + Math.sin(time * p.speed + p.phase) * p.drift;
                
                // Vertical Parallax with Mathematical Wrapping (The Infinite Fill)
                let currentY = p.y - (scrollY * p.parallax);
                
                // Wrap-around logic: When they go too high, they loop to the bottom.
                // This ensures spaces are ALWAYS filled constantly, no matter how much you scroll.
                currentY = ((currentY % virtualHeight) + virtualHeight) % virtualHeight;
                currentY -= (virtualHeight - height) / 2; // Keep them centered around viewport bounds

                // Culling: Only draw if inside screen bounds
                if (currentY > -20 && currentY < height + 20 && currentX > -20 && currentX < width + 20) {
                    ctx.beginPath();
                    ctx.arc(currentX, currentY, p.r, 0, Math.PI * 2);
                    ctx.fillStyle = p.color;
                    ctx.globalAlpha = opacity * 0.45; // Increased master opacity (was 0.25)
                    ctx.fill();
                }
            });

            animationFrame = requestAnimationFrame(render);
        };

        render();

        const onResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };
        
        window.addEventListener('resize', onResize);

        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onResize);
            cancelAnimationFrame(animationFrame);
        };
    }, []);

    return (
        <canvas 
            ref={canvasRef} 
            className="fixed inset-0 pointer-events-none"
            style={{ 
                zIndex: 20, // Render over white sections
                mixBlendMode: 'normal' 
            }} 
        />
    );
}
