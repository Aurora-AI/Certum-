import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FC, useEffect, useRef } from "react";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    id: "realize",
    title: "REALIZE",
    subtitle: "Consórcio & Alavancagem",
    metaLeft: "Estratégia Patrimonial",
    metaRight: "Crédito Estruturado",
    image: "/assets/mansion-dark.jpeg",
  },
  {
    id: "proteja",
    title: "PROTEJA",
    subtitle: "Seguros & Blindagem",
    metaLeft: "Proteção Familiar",
    metaRight: "Sucessão",
    image: "/assets/truck-noir.jpeg",
  },
  {
    id: "multiplique",
    title: "MULTIPLIQUE",
    subtitle: "Wealth & Sucessão",
    metaLeft: "Gestão Ativa",
    metaRight: "Offshore",
    image: "/assets/yacht-bw.jpeg",
  },
];

export const ServiceReveal: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      panelsRef.current.forEach((panel, index) => {
        if (!panel) return;

        const maskContainer = panel.querySelector(".mask-container");
        const bracketLeft = panel.querySelector(".bracket-left");
        const bracketRight = panel.querySelector(".bracket-right");
        const image = panel.querySelector(".service-image");
        const title = panel.querySelector(".service-title");
        const metaFooter = panel.querySelector(".meta-footer");

        // Main Pinning Timeline
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: panel,
            start: "top top",
            end: "+=150%", // Scroll distance
            pin: true,
            scrub: 1,
            anticipatePin: 1,
          },
        });

        // 1. Mask Expansion (Limited - Not Full Screen)
        // Começa pequeno (inset 35% laterais) -> Termina com margem (inset 5% laterais)
        // Isso mantem o "Frame Branco"
        tl.fromTo(
          maskContainer,
          { clipPath: "inset(20% 35% 20% 35%)" }, // Quadrado central pequeno
          { clipPath: "inset(5% 5% 5% 5%)", ease: "power2.inOut", duration: 1 }, // Margem de 5%
        );

        // 2. Bracket Expansion
        tl.fromTo(
          bracketLeft,
          { x: "5vw" },
          { x: "-18vw", ease: "power2.inOut" },
          0,
        );
        tl.fromTo(
          bracketRight,
          { x: "-5vw" },
          { x: "18vw", ease: "power2.inOut" },
          0,
        );

        // 3. Image Parallax
        tl.fromTo(image, { scale: 1.2 }, { scale: 1.0, ease: "none" }, 0);

        // 4. Footer Metadata Reveal
        tl.fromTo(
          metaFooter,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, ease: "power2.out" },
          0.8,
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative bg-white w-full">
      {services.map((service, index) => (
        <section
          key={service.id}
          ref={(el) => { if (el) panelsRef.current[index] = el; }}
          className="relative h-screen w-full flex flex-col justify-center overflow-hidden border-b border-black/5"
        >
          {/* Metadata Top - Always Visible */}
          <div className="absolute top-8 left-0 right-0 px-8 flex justify-between text-xs md:text-sm font-sans text-[#8A8A8A] uppercase tracking-wider z-40 mix-blend-difference">
            <span>Work, Process, Studio</span>
            <span>0{index + 1} — Certum Wealth</span>
          </div>

          {/* BACKGROUND: Pure White (The "Frame") */}
          <div className="absolute inset-0 z-0 bg-white" />

          {/* MASK CONTAINER: Image inside expanding aperture
              Adjusted to respect margins (It never hits edge of screen)
              Positioned absolute center.
           */}
          <div className="mask-container absolute inset-0 z-10 w-full h-full flex items-center justify-center">
            <div className="relative w-full h-full">
              <img
                src={service.image}
                alt={service.title}
                className="service-image w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
          </div>

          {/* TITLE LAYER: Sits ON TOP (z-20) */}
          <div className="relative z-20 flex flex-col items-center justify-center w-full h-screen pointer-events-none mix-blend-difference text-white">
            <div className="flex items-center justify-center w-full">
              <span className="bracket-left font-sans text-[80px] md:text-[140px] lg:text-[180px] font-thin leading-none select-none">
                [
              </span>

              <div className="service-title px-4 md:px-12 text-center">
                <h2 className="font-serif text-[60px] md:text-[100px] lg:text-[140px] leading-tight tracking-[-0.04em]">
                  {service.title}
                </h2>
              </div>

              <span className="bracket-right font-sans text-[80px] md:text-[140px] lg:text-[180px] font-thin leading-none select-none">
                ]
              </span>
            </div>

            {/* Floating Black Pill (Center Bottom) - Like 'Loller Discover +' */}
            <div className="absolute bottom-24 pointer-events-auto mix-blend-normal">
              <button className="bg-black text-white px-8 py-3 rounded-full flex items-center gap-2 hover:scale-105 transition-transform duration-300">
                <span className="font-serif italic">{service.title}</span>
                <span className="text-xs tracking-widest uppercase">
                  Discover +
                </span>
              </button>
            </div>
          </div>

          {/* FOOTER METADATA: Outside the image (on white frame) */}
          <div className="meta-footer absolute bottom-8 left-0 right-0 px-8 flex justify-between items-end text-black z-30 opacity-0 bg-white/0 pointer-events-none">
            <div className="text-lg md:text-2xl font-sans tracking-tight">
              {service.subtitle}
            </div>
            <div className="text-lg md:text-2xl font-sans tracking-tight">
              2026
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};
