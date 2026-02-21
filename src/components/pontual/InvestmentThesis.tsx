'use client';

import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MagneticButton from '@/components/ui/MagneticButton';

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
                        O protocolo não é sobre &quot;guardar dinheiro para comprar uma casa&quot;. É sobre acessar linhas de crédito com custo fracionário (zero juros compostos) para arrematar ativos reais estressados, expandir parques logísticos ou injetar liquidez num patrimônio que já cresce. A matemática brutal prova que pagar 15% de taxa administrativa diluída em 200 meses supera qualquer financiamento ou rendimento conservador na mesma janela de tempo quando aplicado na economia real.
                    </p>

                    <div className="grid grid-cols-2 gap-[4vw] md:gap-[2vw] mb-[6vw]">
                        <div>
                            <div className="thesis-hairline w-full h-[1px] bg-[rgba(13,14,19,0.2)] origin-left mb-[1vw]" />
                            <span className="thesis-line text-[8vw] md:text-[3vw] font-display block">0%</span>
                            <span className="thesis-line text-[3vw] md:text-[0.9vw] uppercase tracking-widest text-[#0d0e13]/50 mb-[1vw] block">Juros Compostos</span>
                            {/* Visual Asset: Flat line vs exponential debt */}
                            <div className="thesis-line relative w-[80%] md:w-[60%] h-[30px] mt-[1.5vw] opacity-50">
                                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#0d0e13]"></div>
                                <div className="absolute bottom-0 left-0 w-[80%] h-full border-b-[1px] border-[rgba(200,169,133,0.8)] rounded-br-[100%] origin-bottom-left transform -scale-x-100"></div>
                            </div>
                        </div>
                        <div>
                            <div className="thesis-hairline w-full h-[1px] bg-[rgba(13,14,19,0.2)] origin-left mb-[1vw]" />
                            <span className="thesis-line text-[8vw] md:text-[3vw] font-display block">10x</span>
                            <span className="thesis-line text-[3vw] md:text-[0.9vw] uppercase tracking-widest text-[#0d0e13]/50 mb-[1vw] block">Poder de Alavancagem</span>
                            {/* Visual Asset: Exponential Growth */}
                            <div className="thesis-line relative w-[80%] md:w-[60%] h-[30px] mt-[1.5vw]">
                                <div className="absolute bottom-0 left-0 w-full h-full border-t-[1px] border-[#0d0e13] rounded-tl-[100%]"></div>
                            </div>
                        </div>
                    </div>

                    <div className="thesis-line mt-[2vw]">
                        <MagneticButton href="#contact">
                            <span className="text-[14px] tracking-[0.15em] uppercase text-[#0d0e13] font-bold group-hover:text-amber-700 transition-colors">
                                Iniciar Estruturação
                            </span>
                        </MagneticButton>
                    </div>
                </div>

            </div>
        </section>
    );
}
