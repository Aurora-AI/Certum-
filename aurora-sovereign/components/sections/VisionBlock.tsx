import { ScrambleText } from "@/components/ui/ScrambleText";
import { SiteAtmosphere } from "@/components/ui/SiteAtmosphere";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export const VisionBlock: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 }); // Import useInView from framer-motion

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-white py-32 md:py-48 overflow-hidden"
    >
      <SiteAtmosphere />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-6xl">
          <motion.h2
            style={{ opacity, y }}
            viewport={{ once: true }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] text-black tracking-tight mb-12"
          >
            Certum é um ecossistema de{" "}
            <span className="text-[#C9A227] italic">
              Inteligência Patrimonial
            </span>
            , desenhando legados financeiros através de{" "}
            <span className="inline-block min-w-[300px]">
              <ScrambleText
                text="Gerações & Fronteiras."
                trigger={isInView}
                className="text-black"
              />
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-8 md:gap-16 mt-16 border-t border-black/10 pt-8"
          >
            <div className="w-full md:w-1/3">
              <span className="text-sm font-mono text-[#C9A227] tracking-widest uppercase">
                // Sistema.Manifesto
              </span>
            </div>

            <div className="w-full md:w-2/3">
              <p className="text-xl md:text-2xl text-[#8A8A8A] font-light leading-relaxed">
                Com capacidades profundas cobrindo ativos digitais, real estate
                e compliance automatizado. Acreditamos que a{" "}
                <strong className="text-black font-normal">
                  precisão algorítmica
                </strong>{" "}
                deve conduzir a prosperidade, eliminando o atrito entre capital
                e clareza.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
