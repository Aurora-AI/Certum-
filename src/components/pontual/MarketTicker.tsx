'use client';

import React, { useEffect, useState } from 'react';

interface MarketData {
    timestamp: string;
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
    status?: string;
}

export default function MarketTicker() {
    const [data, setData] = useState<MarketData | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchMarketData = async () => {
            try {
                const res = await fetch('/api/finance');
                if (!res.ok) throw new Error('Network response was not ok');
                const marketData = await res.json();
                setData(marketData);
            } catch (error) {
                console.error("Market Ticker Sync Failed", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchMarketData();
        // Sync every 5 minutes on the client side (Backend handles 1hr caching)
        const interval = setInterval(fetchMarketData, 5 * 60 * 1000); 
        return () => clearInterval(interval);
    }, []);

    if (isLoading || !data) {
        return (
            <div className="w-full bg-[#111] text-[#F2F0ED] py-2 px-4 flex items-center justify-center border-b border-[#F2F0ED]/10 overflow-hidden h-[36px]">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#F2F0ED]/40 animate-pulse">Syncing Hub...</span>
            </div>
        );
    }

    const VariationIndicator = ({ variation }: { variation: number }) => {
        if (variation > 0) return <span className="text-green-500 text-[10px] ml-1">▲</span>;
        if (variation < 0) return <span className="text-red-500 text-[10px] ml-1">▼</span>;
        return <span className="text-gray-500 text-[10px] ml-1">-</span>;
    };

    return (
        <div className="w-full bg-[#111] text-[#F2F0ED] py-2 px-[page-margin] flex items-center overflow-hidden border-b border-[#F2F0ED]/10 h-[36px] relative z-50">
            {/* Ticker Animation Wrapper */}
            <div className="w-full flex justify-between items-center text-[10px] uppercase font-mono tracking-widest whitespace-nowrap">
                
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full ${data.status === 'failsafe' ? 'bg-amber-500' : 'bg-accent animate-pulse'}`} />
                        <span className="text-[#F2F0ED]/40 font-bold">SOVEREIGN HUB</span>
                    </div>

                    <div className="hidden md:flex gap-8">
                        <div className="flex items-center">
                            <span className="text-[#F2F0ED]/60 mr-2">IBOV:</span>
                            <span className="font-bold">{data.indices.ibovespa.points.toLocaleString('pt-BR')} PTS</span>
                            <VariationIndicator variation={data.indices.ibovespa.variation} />
                        </div>
                        <div className="flex items-center">
                            <span className="text-[#F2F0ED]/60 mr-2">USD:</span>
                            <span className="font-bold">R$ {data.currencies.usd.buy.toFixed(2)}</span>
                            <VariationIndicator variation={data.currencies.usd.variation} />
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-6 lg:gap-12">
                     <div className="flex items-center">
                        <span className="text-[#F2F0ED]/60 mr-2">SELIC:</span>
                        <span className="font-bold text-accent">{data.rates.selic}%</span>
                    </div>
                    <div className="flex items-center">
                        <span className="text-[#F2F0ED]/60 mr-2">IPCA (12M):</span>
                        <span className="font-bold">{data.rates.ipca_12m}%</span>
                    </div>
                </div>

            </div>
        </div>
    );
}
