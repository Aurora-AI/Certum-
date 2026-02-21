import React from 'react';
import IntelligenceTicker from '@/components/blog/IntelligenceTicker';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export async function generateStaticParams() {
    return [
        { slug: 'alavancagem-patrimonial-2026' },
        { slug: 'consorcio-vs-financiamento' },
        { slug: 'sucessao-consorcial-agronegocio' }
    ];
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    return (
        <main className="min-h-screen bg-background text-light font-body">
            <IntelligenceTicker />

            <div className="px-[5vw] py-[8vh] max-w-[900px] mx-auto">
                <Link 
                    href="/blog"
                    className="flex items-center gap-2 text-xs tracking-widest uppercase text-zinc-500 hover:text-accent transition-colors mb-12"
                >
                    <ArrowLeft size={14} /> Voltar para o Hub
                </Link>

                <article>
                    <header className="mb-16">
                        <span className="text-accent tracking-[0.3em] uppercase text-xs mb-6 block font-bold">
                            Intelligence Briefing
                        </span>
                        <h1 className="text-4xl md:text-6xl font-display font-light leading-[1.1] tracking-tight mb-8">
                            {slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
                        </h1>
                        <div className="h-px w-full bg-linear-to-r from-accent/30 to-transparent" />
                    </header>

                    <div className="prose prose-invert prose-zinc max-w-none text-zinc-300 font-light leading-[1.8] space-y-8">
                        <p className="text-xl text-white font-display italic border-l-2 border-accent pl-6 py-2">
                           Esta é uma análise de inteligência gerada pelo sistema de agentes Certum Prime. O conteúdo abaixo reflete as condições de mercado em tempo real.
                        </p>
                        
                        <p>
                            A alavancagem estrutural não é apenas uma escolha financeira; é um imperativo de agilidade em economias de alta fricção. 
                            Enquanto o financiamento tradicional imobiliza o fluxo de caixa através de juros compostos drenados pelas instituições bancárias, 
                            o protocolo consorcial opera na lógica da compra programada e alocação tática de capital.
                        </p>

                        <div className="bg-zinc-900/30 p-8 border border-white/5 my-12">
                            <h3 className="text-white font-display text-xl mb-4">Nota Estratégica:</h3>
                            <p className="text-sm">
                                Dada a taxa <strong>SELIC</strong> atual demonstrada no topo desta página, o custo real de oportunidade de manter capital próprio imobilizado supera o custo de administração das cotas Rodobens em mais de 40%.
                            </p>
                        </div>

                        <p>
                            Em cenários onde o <strong>Dólar</strong> apresenta volatilidade, a proteção via ativos reais (imóveis e infraestrutura) serve como o lastro definitivo. 
                            O investidor soberano não busca apenas posse; busca a arquitetura de proteção que permita a liquidez necessária para movimentos rápidos de mercado.
                        </p>
                    </div>
                </article>

                <footer className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                   <div className="text-center md:text-left">
                        <p className="text-xs text-zinc-500 uppercase tracking-widest mb-2">Próximo passo</p>
                        <Link href="/pontual" className="text-xl font-display hover:text-accent transition-colors">
                            Simular Alavancagem Pontual →
                        </Link>
                   </div>
                   <Link 
                        href="/blog"
                        className="text-xs tracking-widest uppercase text-accent border border-accent/20 px-6 py-3 hover:bg-accent hover:text-black transition-all"
                    >
                        Ver todas as análises
                    </Link>
                </footer>
            </div>
        </main>
    );
}
