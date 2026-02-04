
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function SovereignStory() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[80vh] bg-[#0a0a0a] text-white py-40 px-12 flex items-center">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div ref={contentRef} className="flex flex-col gap-8">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500">The Story</span>
          <h2 className="text-5xl md:text-7xl font-light leading-[1.1]">
            A história por trás da Certum é de arquitetura, proteção e soberania.
          </h2>
          <div>
            <a href="#" className="inline-block border-b border-white/30 pb-1 text-lg hover:border-white transition-colors">
              Browse all protocols
            </a>
          </div>
        </div>

        {/* Visual / Planet Graphic Placeholder */}
        <div className="flex items-center justify-center">
           <div className="w-64 h-64 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-[#222] to-[#000] shadow-2xl border border-white/5 flex items-center justify-center">
              <div className="w-[90%] h-[90%] rounded-full bg-black/80 backdrop-blur-xl border border-white/10" />
           </div>
        </div>
      </div>
    </section>
  );
}
