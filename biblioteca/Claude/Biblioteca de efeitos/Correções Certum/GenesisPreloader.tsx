"use client";

import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";

interface GenesisPreloaderProps {
  /** Minimum duration the preloader is shown */
  minDuration?: number;
  /** Callback when preloader finishes */
  onComplete?: () => void;
}

export default function GenesisPreloader({
  minDuration = 2500,
  onComplete,
}: GenesisPreloaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          // Exit animation
          const exitTl = gsap.timeline({
            onComplete: () => {
              setIsComplete(true);
              onComplete?.();
            },
          });

          exitTl
            .to(textRef.current, {
              y: -20,
              opacity: 0,
              duration: 0.4,
              ease: "power2.in",
            })
            .to(progressRef.current, {
              y: 20,
              opacity: 0,
              duration: 0.4,
              ease: "power2.in",
            }, "<")
            .to(logoRef.current, {
              scale: 50,
              opacity: 0,
              duration: 1.2,
              ease: "power4.inOut",
            }, "-=0.2")
            .to(overlayRef.current, {
              yPercent: -100,
              duration: 0.8,
              ease: "power3.inOut",
            }, "-=0.8")
            .to(containerRef.current, {
              yPercent: -100,
              duration: 0.6,
              ease: "power3.inOut",
            }, "-=0.4");
        },
      });

      // Initial states
      gsap.set(logoRef.current, { scale: 0.8, opacity: 0 });
      gsap.set(textRef.current, { y: 20, opacity: 0 });
      gsap.set(progressRef.current, { y: 20, opacity: 0 });
      gsap.set(progressBarRef.current, { scaleX: 0 });

      // Entrance animation
      tl
        .to(logoRef.current, {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
        })
        .to(textRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
        }, "-=0.3")
        .to(progressRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
        }, "-=0.3")
        .to(progressBarRef.current, {
          scaleX: 1,
          duration: minDuration / 1000,
          ease: "power1.inOut",
          onUpdate: function() {
            if (counterRef.current) {
              const progress = Math.round(this.progress() * 100);
              counterRef.current.textContent = progress.toString().padStart(3, '0');
            }
          },
        }, "-=0.3");

      // Floating animation for logo
      gsap.to(logoRef.current, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Pulse animation for rings
      gsap.to(".preloader-ring", {
        scale: 1.1,
        opacity: 0.3,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.3,
      });

    }, containerRef);

    return () => ctx.revert();
  }, [minDuration, onComplete]);

  if (isComplete) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-void overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,53,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(212,175,53,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-50" />
      
      {/* Noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Overlay for exit */}
      <div 
        ref={overlayRef}
        className="absolute inset-0 bg-void z-0"
      />

      {/* Central glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(212,175,53,0.1)_0%,transparent_70%)] pointer-events-none" />

      {/* Logo container */}
      <div ref={logoRef} className="relative z-10 mb-12">
        {/* Event horizon rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="preloader-ring absolute w-[200px] h-[200px] border border-primary/20 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="preloader-ring absolute w-[280px] h-[280px] border border-primary/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="preloader-ring absolute w-[360px] h-[360px] border border-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        </div>

        {/* Rotating dashed ring */}
        <svg 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] animate-[spin_20s_linear_infinite]"
          viewBox="0 0 100 100"
        >
          <circle 
            cx="50" 
            cy="50" 
            r="48" 
            fill="none" 
            stroke="rgba(212,175,53,0.3)" 
            strokeWidth="0.3"
            strokeDasharray="2 6"
          />
        </svg>

        {/* Logo icon */}
        <div className="relative w-24 h-24 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-xl" />
          <span 
            className="material-symbols-outlined text-primary text-6xl relative z-10"
            style={{ fontVariationSettings: "'FILL' 0, 'wght' 200" }}
          >
            token
          </span>
        </div>
      </div>

      {/* Brand text */}
      <div ref={textRef} className="relative z-10 text-center mb-8">
        <h1 className="text-white text-2xl font-bold tracking-[0.3em] uppercase mb-2">
          CERTUM <span className="text-primary">PRIME</span>
        </h1>
        <p className="text-gray-500 text-xs font-mono tracking-[0.2em] uppercase">
          Genesis Protocol Initializing
        </p>
      </div>

      {/* Progress section */}
      <div ref={progressRef} className="relative z-10 w-64">
        {/* Progress bar */}
        <div className="relative h-[2px] bg-gray-800 rounded-full overflow-hidden mb-4">
          <div 
            ref={progressBarRef}
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-white origin-left"
            style={{ width: '100%', transformOrigin: 'left' }}
          />
          {/* Glow effect */}
          <div 
            className="absolute inset-y-0 right-0 w-8 bg-gradient-to-r from-transparent to-primary/50 blur-sm"
          />
        </div>

        {/* Counter and status */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse shadow-[0_0_10px_rgba(212,175,53,0.8)]" />
            <span className="text-gray-500 text-[10px] font-mono uppercase tracking-widest">
              Loading Assets
            </span>
          </div>
          <span 
            ref={counterRef}
            className="text-primary text-xs font-mono tracking-wider"
          >
            000
          </span>
        </div>
      </div>

      {/* Bottom decoration */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
        <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-gray-700" />
        <span className="text-gray-600 text-[10px] font-mono tracking-widest">
          V1.0.0
        </span>
        <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-gray-700" />
      </div>
    </div>
  );
}
