"use client";

import gsap from "gsap";
import { FC, useEffect, useRef } from "react";

const services = [
  {
    id: "realize",
    title: "REALIZE",
    subtitle: "Consórcio & Alavancagem",
    meta: ["Estratégia Patrimonial", "Crédito Estruturado"],
    image: "/assets/mansion-dark.jpeg",
  },
  {
    id: "proteja",
    title: "PROTEJA",
    subtitle: "Seguros & Blindagem",
    meta: ["Proteção Familiar", "Sucessão"],
    image: "/assets/truck-noir.jpeg",
  },
  {
    id: "multiplique",
    title: "MULTIPLIQUE",
    subtitle: "Wealth & Sucessão",
    meta: ["Gestão Ativa", "Offshore"],
    image: "/assets/yacht-bw.jpeg",
  },
];

const Services: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      panelsRef.current.forEach((panel, index) => {
        if (!panel) return;

        const maskContainer = panel.querySelector(".mask-container");
        const image = panel.querySelector(".service-image");
        const brackets = panel.querySelectorAll(".bracket");
        const meta = panel.querySelector(".service-meta");

        // Main Timeline
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: panel,
            start: "top top",
            end: "+=150%",
            pin: true,
            scrub: 1,
            anticipatePin: 1,
          },
        });

        // 1. Aperture Expansion (35% -> 5% margin)
        tl.fromTo(
          maskContainer,
          { clipPath: "inset(20% 35% 20% 35%)" },
          { clipPath: "inset(5% 5% 5% 5%)", ease: "power2.inOut", duration: 1 },
        );

        // 2. Brackets Expansion
        tl.fromTo(
          brackets[0],
          { x: "2vw" },
          { x: "-12vw", ease: "power2.inOut" },
          0,
        );
        tl.fromTo(
          brackets[1],
          { x: "-2vw" },
          { x: "12vw", ease: "power2.inOut" },
          0,
        );

        // 3. Image Parallax
        tl.fromTo(image, { scale: 1.2 }, { scale: 1.0, ease: "none" }, 0);

        // 4. Footer Reveal
        tl.fromTo(meta, { y: 50, opacity: 0 }, { y: 0, opacity: 1 }, 0.8);
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full bg-white text-[#1A1A1A]">
      {services.map((service, index) => (
        <section
          key={service.id}
          ref={(el) => { if (el) panelsRef.current[index] = el; }}
          className="relative h-screen w-full flex flex-col justify-center overflow-hidden border-b border-black/5"
        >
          {/* Header Meta */}
          <div className="absolute top-8 left-0 right-0 px-8 flex justify-between text-xs font-['Inter'] uppercase tracking-widest z-30 mix-blend-difference text-[#8A8A8A]">
            <span>{service.meta.join(", ")}</span>
            <span>0{index + 1} — Genesis</span>
          </div>

          {/* Aperture Mask */}
          <div className="mask-container absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
            <div className="relative w-full h-full bg-[#f2f2f2]">
              <img
                src={service.image}
                alt={service.title}
                className="service-image w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
          </div>

          {/* Typography Layer */}
          <div className="relative z-20 w-full h-full flex items-center justify-center pointer-events-none mix-blend-difference text-white">
            <span className="bracket text-[10vw] font-light leading-none">
              [
            </span>
            <h2 className="font-display text-[8vw] uppercase tracking-tighter mx-4">
              {service.title}
            </h2>
            <span className="bracket text-[10vw] font-light leading-none">
              ]
            </span>
          </div>

          {/* Floating CTA (Replicated Loller) */}
          <div className="absolute bottom-32 z-30 w-full flex justify-center pointer-events-auto">
            <button className="bg-white text-black px-8 py-3 rounded-full flex items-center gap-3 hover:scale-105 transition-transform">
              <span className="font-display italic">{service.title}</span>
              <span className="text-xs uppercase tracking-widest font-bold">
                Discover +
              </span>
            </button>
          </div>

          {/* Footer Meta */}
          <div className="service-meta absolute bottom-8 w-full px-8 flex justify-between items-end z-20 opacity-0">
            <span className="text-xl font-display italic">
              {service.subtitle}
            </span>
            <span className="text-sm font-['Inter']">2026</span>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Services;
