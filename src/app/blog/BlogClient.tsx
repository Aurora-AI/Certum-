'use client';

import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import IntelligenceTicker from '@/components/blog/IntelligenceTicker';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const articles = [
    {
        slug: "alavancagem-patrimonial-2026",
        title: "Arquitetura de Alavancagem em Tempos de Volatilidade",
        excerpt: "Como o protocolo consorcial se torna a ferramenta definitiva para proteção de caixa em cenários de juros flutuantes.",
        category: "Estratégia",
        date: "20 Fev 2026"
    },
    {
        slug: "consorcio-vs-financiamento",
        title: "A Falácia do Custo de Oportunidade",
        excerpt: "Análise quantitativa: Por que o financiamento bancário é a maior drenagem de liquidez do setor imobiliário de luxo.",
        category: "Análise",
        date: "18 Fev 2026"
    },
    {
        slug: "sucessao-consorcial-agronegocio",
        title: "O Legado do Campo: Sucessão via Cotas",
        excerpt: "Utilizando cartas de crédito para estruturar a transição patrimonial no agronegócio de alta tonelagem.",
        category: "Agro",
        date: "15 Fev 2026"
    }
];

export default function BlogClient() {
    const heroRef = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Halo Effect: Exit Transition (Peak-End Rule)
            if (heroRef.current) {
                gsap.to(heroRef.current, {
                    scale: 0.95,
                    opacity: 0.2,
                    ease: "none",
                    scrollTrigger: {
                        trigger: heroRef.current,
                        start: "top top",
                        end: "bottom center",
                        scrub: true
                    }
                });
            }
        }, heroRef);
        
        return () => ctx.revert();
    }, []);

    return (
        <main className="min-h-screen bg-background text-light font-body">
            <IntelligenceTicker />

            <div className="px-[5vw] py-[10vh] max-w-[1400px] mx-auto">
                <header ref={heroRef} className="mb-[10vh]">
                    <span className="text-accent tracking-[0.3em] uppercase text-xs mb-4 block">
                        Intelligence Hub
                    </span>
                    <h1 className="text-[10vw] md:text-[5vw] font-display font-light leading-none tracking-tighter">
                        Sovereign<br />
                        <span className="italic">Perspective.</span>
                    </h1>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[4vw] md:gap-[2vw]">
                    {articles.map((article) => (
                        <Link 
                            key={article.slug}
                            href={`/blog/${article.slug}`}
                            className="group relative flex flex-col bg-zinc-900/10 border border-white/5 p-8 transition-colors hover:bg-zinc-900/30"
                        >
                            <div className="flex justify-between items-start mb-12">
                                <span className="text-[0.65rem] tracking-[0.2em] text-accent font-bold uppercase">
                                    {article.category}
                                </span>
                                <span className="text-[0.65rem] text-zinc-500">
                                    {article.date}
                                </span>
                            </div>

                            <h2 className="text-2xl font-display font-light mb-4 group-hover:text-accent transition-colors leading-tight">
                                {article.title}
                            </h2>

                            <p className="text-sm text-zinc-400 font-light leading-relaxed mb-8 grow">
                                {article.excerpt}
                            </p>

                            <div className="flex items-center gap-2 text-[0.65rem] tracking-widest uppercase text-white font-bold opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
                                Ler análise <span className="text-accent">→</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
