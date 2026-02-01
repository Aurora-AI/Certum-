import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface LoaderProps {
  onComplete: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: onComplete,
      });

      // 1. Logo (Icon) Fades In & Scales
      tl.to(logoRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.2
      })
      // 2. Text (Wordmark) Fades In & Moves Up
      .to(textRef.current, {
         opacity: 1,
         y: 0,
         duration: 1,
         ease: "power3.out"
      }, "-=0.8")
      // 3. Hold for user to perceive brand
      .to({}, { duration: 1.0 })
      // 4. Elements Fade Out
      .to([logoRef.current, textRef.current], {
        opacity: 0,
        y: -30,
        duration: 0.8,
        ease: "power2.in",
        stagger: 0.1
      })
      // 5. Curtains Split
      .to([leftPanelRef.current, rightPanelRef.current], {
        width: "0%",
        duration: 1.5,
        ease: "power4.inOut",
        stagger: 0.1
      })
      // 6. Hide Container
      .set(containerRef.current, { display: "none" });

    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
    >
      {/* Left Curtain Panel */}
      <div 
        ref={leftPanelRef} 
        className="absolute left-0 top-0 h-full w-[51%] bg-[#0a0a0a] z-10" 
      ></div>

      {/* Right Curtain Panel */}
      <div 
        ref={rightPanelRef} 
        className="absolute right-0 top-0 h-full w-[51%] bg-[#0a0a0a] z-10"
      ></div>

      {/* Content Container */}
      <div className="relative z-20 flex flex-col items-center justify-center gap-4">
        {/* Logo Image */}
        <img 
          ref={logoRef} 
          src="logo.png" 
          alt="CERTUM Symbol"
          className="w-24 md:w-32 opacity-0 translate-y-8 object-contain invert" 
        />
        
        {/* Brand Name */}
        <h1 
          ref={textRef}
          className="font-display text-4xl md:text-6xl text-white tracking-[0.25em] opacity-0 translate-y-8"
        >
          CERTUM
        </h1>
      </div>
    </div>
  );
};

export default Loader;