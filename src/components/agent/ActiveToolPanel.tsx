"use client";

import { useMemo } from "react";
import { Calculator, CreditCard, Clock } from "lucide-react";

interface ActiveToolPanelProps {
    assetValue?: number;
    timeHorizon?: number;
}

export function ActiveToolPanel({ assetValue = 0, timeHorizon = 0 }: ActiveToolPanelProps) {
    
    // Auto-calculate monthly cost (simplified, no interest)
    const monthlyCost = useMemo(() => {
        if (!assetValue || !timeHorizon) return 0;
        return assetValue / timeHorizon; 
    }, [assetValue, timeHorizon]);

    const formattedAsset = new Intl.NumberFormat("pt-BR", { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(assetValue);
    const formattedMonthly = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(monthlyCost);

    return (
        <div className="flex flex-col h-full justify-between text-charcoal">
             {/* Header */}
            <div className="flex justify-between items-center">
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase opacity-40">Active Protocol</span>
                <div className="flex gap-2 text-charcoal/30">
                     <Calculator className="w-4 h-4" />
                     <CreditCard className="w-4 h-4" />
                </div>
            </div>

             {/* Main Content Space */}
             <div className="space-y-12">
                 
                 {/* Asset Value */}
                <div className="space-y-4">
                    <span className="font-mono text-[10px] tracking-[0.2em] uppercase opacity-40">Asset Value (Credit)</span>
                    <div className="flex items-baseline gap-2">
                        <span className="text-primary font-mono text-xl">R$</span>
                        <span className="font-display text-5xl font-light">{formattedAsset}</span>
                    </div>
                    {/* Progress Bar (Visual Only for now) */}
                    <div className="relative h-1 w-full bg-black/[0.05] rounded-full overflow-hidden">
                        <div className="absolute top-0 left-0 h-full w-1/3 bg-primary/40"></div>
                        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-primary rounded-full ring-4 ring-white"></div>
                    </div>
                </div>

                {/* Grid Stats */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="glass-panel p-6 rounded-2xl border border-black/[0.01]">
                        <span className="text-[10px] font-mono opacity-40 block mb-2">Time Horizon</span>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-primary" />
                            <span className="text-2xl font-display">{timeHorizon}</span>
                        </div>
                        <span className="text-xs font-medium opacity-60">Months</span>
                    </div>
                    <div className="glass-panel p-6 rounded-2xl border border-black/[0.01] ring-1 ring-primary/20">
                         <span className="text-[10px] font-mono text-primary block mb-2">Monthly Cost</span>
                         <div className="text-primary font-mono text-sm">{formattedMonthly}</div>
                    </div>
                </div>

                {/* Footer Stats */}
                <div className="flex justify-between items-center py-4 px-1">
                     <span className="text-xs opacity-40">Total Interest</span>
                     <span className="text-xs font-mono font-medium text-primary">0% (ZERO)</span>
                </div>
             </div>

             {/* Action Button */}
             <button className="w-full py-5 bg-primary text-white font-mono text-xs tracking-[0.3em] uppercase hover:brightness-110 transition-all rounded-xl shadow-lg shadow-primary/20">
                Generate Proposal
            </button>
        </div>
    );
}
