'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Preloader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setComplete(true);
        }
      });

      // 1. Initial State
      gsap.set(containerRef.current, { autoAlpha: 1 });
      gsap.set(logoRef.current, { scale: 0.9, opacity: 0 });

      // 2. Logo Pulse in
      tl.to(logoRef.current, {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: 'power3.out',
      })
      .to(logoRef.current, {
        opacity: 0,
        scale: 1.1,
        duration: 0.8,
        ease: 'power2.in',
        delay: 0.3,
      })
      
      // 3. Curtain Reveal
      .to(containerRef.current, {
        height: 0,
        duration: 1.2,
        ease: 'expo.inOut',
      }, '-=0.4')
      
      // 4. Cleanup opacity to prevent clicks
      .set(containerRef.current, { autoAlpha: 0 });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  if (complete) return null;

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050505] text-white overflow-hidden origin-top"
    >
      <div ref={logoRef} className="flex flex-col items-center gap-4">
        <div className="text-sm tracking-[0.5em] uppercase font-light text-white/40">
          Mad Lab
        </div>
        <h1 className="text-4xl md:text-6xl font-display font-medium tracking-tight text-white">
          AURORA
        </h1>
        <div className="h-[1px] w-12 bg-white/20 mt-4" />
      </div>
    </div>
  );
}
