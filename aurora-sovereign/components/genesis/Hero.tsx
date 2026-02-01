import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLHeadingElement>(null);
  const line2Ref = useRef<HTMLHeadingElement>(null);
  const videoOverlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial Entry Animation (Stagger + Skew)
      const tl = gsap.timeline({ delay: 0.5 }); // Short delay to sync with loader finish

      tl.fromTo([line1Ref.current, line2Ref.current], 
        { 
          y: "100%", 
          skewY: 7, 
          opacity: 0 
        },
        {
          y: "0%",
          skewY: 0,
          opacity: 1,
          duration: 1.8,
          stagger: 0.15,
          ease: "power4.out"
        }
      );

      // Scroll Interaction - Parallax / Window Effect
      if (videoOverlayRef.current) {
        gsap.to(videoOverlayRef.current, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
          y: "10%", // Subtle parallax
          opacity: 0, // Fade out on scroll
          ease: "none"
        });
      }

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen flex items-center justify-start overflow-hidden bg-white px-4 md:px-10">
      
      {/* Watermark Image - Positioned Right - Width increased to 50% based on user marking */}
      <div 
        ref={videoOverlayRef}
        className="absolute right-0 top-0 h-full w-[50%] z-0 pointer-events-none opacity-40 mix-blend-multiply"
      >
         <img 
            src="https://images.unsplash.com/photo-1634148483182-3e284a123924?q=80&w=2070&auto=format&fit=crop" 
            alt="Marble Texture" 
            className="w-full h-full object-cover" 
         />
         {/* Gradient to blend with white background on the left */}
         <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-[90vw]">
        {/* Line 1 Wrapper */}
        <div className="overflow-hidden">
          <h1 
            ref={line1Ref}
            className="font-display text-[clamp(60px,12vw,200px)] leading-[0.85] tracking-tight text-[#1A1A1A] uppercase"
          >
            Wealth
          </h1>
        </div>

        {/* Line 2 Wrapper */}
        <div className="overflow-hidden">
          <h1 
            ref={line2Ref}
            // Restored 'clip-text-image' effect as requested ("manter o efeito anterior")
            // Removed text-[#1A1A1A] to allow transparent background-clip to work
            className="font-display text-[clamp(60px,12vw,200px)] leading-[0.85] tracking-tight uppercase ml-[10vw] clip-text-image"
          >
            Sovereignty
          </h1>
        </div>
      </div>

      <div className="absolute bottom-10 right-10 flex flex-col items-end gap-2 font-['Inter'] text-xs font-medium text-[#1A1A1A] tracking-widest uppercase opacity-70">
        <span>Est. 2024</span>
        <span>Scroll for Truth</span>
      </div>
    </section>
  );
};

export default Hero;