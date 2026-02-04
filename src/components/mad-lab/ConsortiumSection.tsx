"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ConsortiumSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 60%", // Earlier trigger for better flow
                toggleActions: "play none none reverse"
            }
        });

        tl.fromTo(titleRef.current, 
            { y: 50, opacity: 0 },
            { y: 0, opacity: 0.5, duration: 1.5, ease: "power3.out" }
        )
        .fromTo(textRef.current,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 0.3, duration: 1, ease: "power2.out" }, // 0.3 matches white/30
            "-=1"
        );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
        ref={containerRef} 
        className="relative w-full min-h-[50vh] bg-black text-white py-20 border-t border-white/10 z-20"
    >
      <div className="container mx-auto px-12 text-center">
        <h2 
            ref={titleRef}
            className="text-4xl md:text-6xl font-thin tracking-widest uppercase opacity-50"
        >
            Consortium Logic
        </h2>
        <p 
            ref={textRef}
            className="mt-4 text-white/30 font-mono text-sm"
        >
            [ Module Pending Injection ]
        </p>
      </div>
    </section>
  );
}
