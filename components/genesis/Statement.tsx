import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Statement: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  const textContent = "We architect legacies for those who own the future. True wealth is not just accumulation; it is the art of sovereign preservation.";

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split text into spans for word animation
      const words = textRef.current?.querySelectorAll('.word');
      
      if (words) {
        gsap.fromTo(words, 
          { opacity: 0.1, color: "#AAAAAA" },
          {
            opacity: 1,
            color: "#1A1A1A",
            duration: 1,
            stagger: 0.1,
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 70%",
              end: "bottom 70%",
              scrub: 1,
            }
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full py-40 px-6 md:px-20 bg-white flex justify-center">
      <div className="max-w-6xl">
        <p ref={textRef} className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.1] text-[#1A1A1A] text-left">
          {textContent.split(' ').map((word, i) => (
            <span key={i} className="word inline-block mr-[0.25em]">{word}</span>
          ))}
        </p>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-12 gap-10 border-t border-gray-200 pt-10 font-['Inter']">
           <div className="md:col-span-4">
              <span className="text-xs uppercase tracking-widest text-[#C9A227]">The Philosophy</span>
           </div>
           <div className="md:col-span-8">
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                In a volatile world, Certum provides the stillness of marble. We combine heritage financial architecture with modern hedging strategies to ensure your capital remains absolute.
              </p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Statement;