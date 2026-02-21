'use client';

import React, { useEffect, useState } from 'react';

interface MarketData {
    rates: {
        selic: number;
        ipca_12m: number;
    };
    currencies: {
        usd: { buy: number; variation: number };
        eur: { buy: number; variation: number };
    };
    indices: {
        ibovespa: { points: number; variation: number };
    };
}

export default function IntelligenceTicker() {
    const [data, setData] = useState<MarketData | null>(null);

    useEffect(() => {
        fetch('/api/finance')
            .then(res => res.json())
            .then(setData)
            .catch(console.error);
    }, []);

    if (!data) return null;

    const renderVariation = (val: number) => {
        const isUp = val >= 0;
        return (
            <span className={`ml-1 text-[0.65rem] ${isUp ? 'text-green-500' : 'text-red-500'}`}>
                {isUp ? '↑' : '↓'} {Math.abs(val).toFixed(2)}%
            </span>
        );
    };

    return (
        <div className="w-full bg-black border-y border-[rgba(255,255,255,0.05)] py-2 overflow-hidden relative z-50">
            <div className="flex whitespace-nowrap animate-marquee items-center justify-around gap-12">
                {/* SELIC */}
                <div className="flex items-center gap-3">
                    <span className="text-zinc-500 uppercase tracking-widest text-[0.65rem]">Selic:</span>
                    <span className="text-white font-mono text-sm">{data.rates.selic.toFixed(2)}%</span>
                </div>

                {/* IPCA */}
                <div className="flex items-center gap-3">
                    <span className="text-zinc-500 uppercase tracking-widest text-[0.65rem]">IPCA (12M):</span>
                    <span className="text-white font-mono text-sm">{data.rates.ipca_12m.toFixed(2)}%</span>
                </div>

                {/* USD */}
                <div className="flex items-center gap-3">
                    <span className="text-zinc-500 uppercase tracking-widest text-[0.65rem]">USD/BRL:</span>
                    <span className="text-white font-mono text-sm">
                        R$ {data.currencies.usd.buy.toFixed(2)}
                        {renderVariation(data.currencies.usd.variation)}
                    </span>
                </div>

                {/* IBOVESPA */}
                <div className="flex items-center gap-3">
                    <span className="text-zinc-500 uppercase tracking-widest text-[0.65rem]">IBOVESPA:</span>
                    <span className="text-white font-mono text-sm">
                        {data.indices.ibovespa.points.toLocaleString('pt-BR')} pts
                        {renderVariation(data.indices.ibovespa.variation)}
                    </span>
                </div>

                {/* Mirroring for seamless loop */}
                <div className="hidden md:flex items-center gap-12">
                    <div className="flex items-center gap-3">
                        <span className="text-zinc-500 uppercase tracking-widest text-[0.65rem]">Selic:</span>
                        <span className="text-white font-mono text-sm">{data.rates.selic.toFixed(2)}%</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-zinc-500 uppercase tracking-widest text-[0.65rem]">IPCA (12M):</span>
                        <span className="text-white font-mono text-sm">{data.rates.ipca_12m.toFixed(2)}%</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
