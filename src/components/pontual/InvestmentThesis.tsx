'use client';

import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function InvestmentThesis() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        
        const ctx = gsap.context(() => {
            // Editorial fade up lines
            gsap.fromTo(".thesis-line", 
                { opacity: 0, y: "2vw" },
                { 
                    opacity: 1, 
                    y: 0, 
                    duration: 1.5, 
                    stagger: 0.1, 
                    ease: "cubic-bezier(0.16, 1, 0.3, 1)",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 70%",
                    }
                }
            );
            
            // Hairlines expansion
            gsap.fromTo(".thesis-hairline",
                { scaleX: 0 },
                {
                    scaleX: 1,
                    duration: 2,
                    ease: "cubic-bezier(1, 0, 0, 1)",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 60%",
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section 
            ref={sectionRef}
            className="w-full bg-[#e4e0db] text-[#0d0e13] py-[15vh] md:py-[20vh] px-[6vw] relative"
        >
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-[4vw]">
                
                {/* Left Column: The Anchor */}
                <div className="md:col-span-5 flex flex-col justify-between">
                    <div>
                        <span className="thesis-line text-[3vw] md:text-[0.8vw] uppercase tracking-[0.2em] text-[#0d0e13]/50 font-body mb-[2vw] block">
                            A Tese (The Thesis)
                        </span>
                        <h2 className="thesis-line text-[8vw] md:text-[4vw] font-display font-light leading-[1.1] mb-[4vw]">
                            O Fim da<br/><span className="italic">Rentabilidade<br/>Passiva.</span>
                        </h2>
                    </div>
                </div>

                {/* Right Column: Editorial Body */}
                <div className="md:col-span-6 md:col-start-7 flex flex-col justify-end">
                    <div className="thesis-hairline w-full h-[1px] bg-[rgba(13,14,19,0.2)] origin-left mb-[4vw] md:mb-[2vw]" />
                    
                    <p className="thesis-line text-[5vw] md:text-[1.5vw] font-body font-light leading-relaxed mb-[4vw] md:mb-[3vw]">
                        Enquanto a maioria se contenta com as migalhas do CDI competindo contra a inflação real, nós utilizamos o mecanismo do consórcio como uma <strong>alavanca de alto torque</strong>.
                    </p>
                    
                    <p className="thesis-line text-[4.5vw] md:text-[1.1vw] font-body text-[rgba(13,14,19,0.6)] font-light leading-relaxed mb-[6vw]">
                        O protocolo não é sobre "guardar dinheiro para comprar uma casa". É sobre acessar linhas de crédito com custo fracionário (zero juros compostos) para arrematar ativos reais estressados, expandir parques logísticos ou injetar liquidez num patrimônio que já cresce. A matemática brutal prova que pagar 15% de taxa administrativa diluída em 200 meses supera qualquer financiamento ou rendimento conservador na mesma janela de tempo quando aplicado na economia real.
                    </p>

                    <div className="grid grid-cols-2 gap-[4vw] md:gap-[2vw]">
                        <div>
                            <div className="thesis-hairline w-full h-[1px] bg-[rgba(13,14,19,0.2)] origin-left mb-[1vw]" />
                            <span className="thesis-line text-[8vw] md:text-[3vw] font-display block">0%</span>
                            <span className="thesis-line text-[3vw] md:text-[0.9vw] uppercase tracking-widest text-[#0d0e13]/50">Juros Compostos</span>
                        </div>
                        <div>
                            <div className="thesis-hairline w-full h-[1px] bg-[rgba(13,14,19,0.2)] origin-left mb-[1vw]" />
                            <span className="thesis-line text-[8vw] md:text-[3vw] font-display block">10x</span>
                            <span className="thesis-line text-[3vw] md:text-[0.9vw] uppercase tracking-widest text-[#0d0e13]/50">Poder de Alavancagem</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
