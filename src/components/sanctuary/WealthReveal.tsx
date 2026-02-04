"use client";

import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, TrendingUp, Activity } from 'lucide-react';

interface InsightProps {
    totalValue?: string;
    sentiment?: string;
    growth?: string;
}

export const WealthReveal = ({ 
    totalValue = "R$ 4.500.000,00", 
    sentiment = "Fluxo Soberano",
    growth = "+12% a.a."
}: InsightProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [reveal, setReveal] = useState(false);

    // --- Kinetic Particle System (Chaos to Clarity) ---
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Resize
        const resize = () => {
            if (!canvas) return;
            canvas.width = canvas.offsetWidth * window.devicePixelRatio;
            canvas.height = canvas.offsetHeight * window.devicePixelRatio;
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        };
        resize();
        window.addEventListener('resize', resize);

        // Particle Class
        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            targetX: number;
            targetY: number;
            friction: number = 0.94;
            spring: number = 0.05;

            constructor(w: number, h: number) {
                this.x = Math.random() * w;
                this.y = Math.random() * h;
                // Target is a grid pattern
                this.targetX = Math.random() * w; 
                this.targetY = h / 2 + (Math.random() - 0.5) * 50; // Central line
                this.vx = (Math.random() - 0.5) * 10;
                this.vy = (Math.random() - 0.5) * 10;
            }

            update(organized: boolean) {
                if (organized) {
                    // Move to target (Spring physics)
                    const dx = this.targetX - this.x;
                    const dy = this.targetY - this.y;
                    this.vx += dx * this.spring;
                    this.vy += dy * this.spring;
                    this.vx *= this.friction;
                    this.vy *= this.friction;
                } else {
                    // Brownian Motion (Chaos)
                    this.vx += (Math.random() - 0.5) * 0.5;
                    this.vy += (Math.random() - 0.5) * 0.5;
                    // Bounding box
                    if(this.x < 0 || this.x > canvas!.width/devicePixelRatio) this.vx *= -1;
                    if(this.y < 0 || this.y > canvas!.height/devicePixelRatio) this.vy *= -1;
                }

                this.x += this.vx;
                this.y += this.vy;
            }

            draw() {
                if(!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, 1.5, 0, Math.PI * 2);
                ctx.fillStyle = "rgba(10, 26, 47, 0.4)";
                ctx.fill();
            }
        }

        const particles: Particle[] = [];
        const w = canvas.width / window.devicePixelRatio;
        const h = canvas.height / window.devicePixelRatio;
        
        // Create 200 particles
        for(let i=0; i<150; i++) particles.push(new Particle(w, h));

        // Interaction: Hover triggers order
        // For now, auto-trigger after delay
        setTimeout(() => setReveal(true), 1500);

        // Animation Loop
        let animationFrameId: number;
        const animate = () => {
            if (!canvas || !ctx) return;
            const currentW = canvas.width / window.devicePixelRatio;
            const currentH = canvas.height / window.devicePixelRatio;
            
            ctx.clearRect(0, 0, currentW, currentH);
            
            // Draw Connecting Lines
            ctx.beginPath();
            particles.forEach((p, i) => {
                p.update(reveal);
                p.draw();
                
                // Connect neighbors
                particles.forEach((p2, j) => {
                    if (i === j) return;
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx*dx + dy*dy);
                    if (dist < 60) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = `rgba(10, 26, 47, ${0.1 - dist/600})`;
                        ctx.stroke();
                    }
                });
            });

            animationFrameId = requestAnimationFrame(animate);
        };
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [reveal]);


    return (
        <div ref={containerRef} className="col-span-12 md:col-span-8 bg-white/40 backdrop-blur-md border border-[#0A1A2F]/5 rounded-3xl overflow-hidden relative group h-[500px] reveal-element shadow-2xl shadow-[#E3DAC9]/30 transition-all duration-700 hover:shadow-xl">
            {/* CANVAS LAYER (The Chaos) */}
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0 opacity-50" />

            {/* CONTENT LAYER (The Clarity) */}
            <div className={`relative z-10 w-full h-full flex flex-col justify-between p-12 transition-all duration-1000 ${reveal ? 'opacity-100 blur-0' : 'opacity-0 blur-xl'}`}>
                
                {/* Header */}
                <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3 text-[#0A1A2F]/60">
                        <Activity className="w-5 h-5" />
                        <span className="text-xs font-bold uppercase tracking-[0.2em]">Live Sentinel</span>
                    </div>
                    <div className="px-4 py-2 bg-[#0A1A2F] text-[#FAF7F2] text-xs font-bold uppercase tracking-widest rounded-full">
                        {sentiment}
                    </div>
                </div>

                {/* The Big Number (Sculpted in Light) */}
                <div className="relative">
                    <span className="block text-xl text-[#0A1A2F]/40 font-serif italic mb-2">Total Managed Assets</span>
                    <h2 className="text-7xl md:text-9xl font-light tracking-tighter text-[#0A1A2F] mix-blend-darken">
                        {totalValue}
                    </h2>
                    <div className="mt-8 flex items-center gap-4 text-[#0A1A2F]">
                        <div className="w-12 h-12 rounded-full border border-[#0A1A2F]/20 flex items-center justify-center">
                            <TrendingUp className="w-5 h-5" />
                        </div>
                        <span className="text-lg font-bold">{growth}</span>
                        <span className="text-sm text-[#0A1A2F]/50 uppercase tracking-widest">Performance Year-to-Date</span>
                    </div>
                </div>

                {/* Footer */}
                <div className="flex justify-between items-end border-t border-[#0A1A2F]/10 pt-8">
                    <div className="flex gap-2">
                        {[1,2,3].map(i => (
                            <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#0A1A2F]/20" />
                        ))}
                    </div>
                    <div className="flex items-center gap-2 text-[#0A1A2F] group-hover:translate-x-2 transition-transform cursor-pointer">
                        <span className="text-xs font-bold uppercase tracking-widest">Deep Audit</span>
                        <ArrowUpRight className="w-4 h-4" />
                    </div>
                </div>

            </div>
        </div>
    );
};
