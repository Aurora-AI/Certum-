"use client";

import { Car, Truck, Briefcase, Zap, Shield, Bike, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductPortfolioProps {
    onSelect?: (product: string) => void;
    selectedCategory?: string;
    onHoverCategory?: (category: string | null) => void;
}

export function ProductPortfolio({ onSelect, selectedCategory, onHoverCategory }: ProductPortfolioProps) {
    
    // Helper to handle click or link depending on usage
    const handleSelect = (category: string) => {
        if (onSelect) onSelect(category);
    };
    const handleHover = (category: string) => {
        if (onHoverCategory) onHoverCategory(category);
    };
    const handleHoverEnd = () => {
        if (onHoverCategory) onHoverCategory(null);
    };

    const isActive = (cat: string) => selectedCategory === cat;

    return (
        <div className="flex flex-col h-full text-charcoal">
             {/* Header */}
            <div>
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase opacity-40 mb-2 block">Portfolio</span>
                <h1 className="font-display text-4xl font-light tracking-tight text-charcoal">Selected Assets</h1>
            </div>

            {/* Navigation */}
            <nav className="mt-12 space-y-10 no-scrollbar overflow-y-auto pr-4 flex-1">
                
                {/* PONTUAL (Special Highlight) */}
                <div 
                    className={cn(
                        "group cursor-pointer p-4 -ml-4 rounded-2xl transition-all duration-500",
                        isActive("PONTUAL") ? "gold-glow bg-white/60" : "hover:bg-white/40"
                    )}
                    onClick={() => handleSelect("PONTUAL")}
                    onMouseEnter={() => handleHover("PONTUAL")}
                    onMouseLeave={handleHoverEnd}
                >
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                             <Zap className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="text-primary font-mono text-sm tracking-widest font-medium uppercase">PONTUAL PROTOCOL</h3>
                            <p className="text-[11px] opacity-60 font-mono">6 Months / 0% Interest</p>
                        </div>
                    </div>
                </div>

                {/* List Items */}
                <div className="space-y-12 pl-1">
                    
                    {/* AUTOMOTIVE */}
                    <div 
                        className={cn(
                            "asset-hover-trigger relative group cursor-pointer flex items-center gap-5 transition-all duration-500",
                            isActive("AUTOMOTIVE") ? "opacity-100" : "opacity-40 hover:opacity-100"
                        )}
                        onClick={() => handleSelect("AUTOMOTIVE")}
                        onMouseEnter={() => handleHover("AUTOMOTIVE")}
                        onMouseLeave={handleHoverEnd}
                    >
                        {isActive("AUTOMOTIVE") && (
                            <div className="warp-container" style={{opacity: 1, transform: 'scale(1.1)'}}>
                                <div className="particle-cluster">
                                    <div className="cluster-dot" style={{ top: '15%', left: '15%' }}></div>
                                    <div className="cluster-dot" style={{ top: '85%', left: '25%' }}></div>
                                </div>
                            </div>
                        )}
                        <Car className="w-6 h-6 font-extralight" />
                        <div className="relative asset-text-container">
                            <h4 className={cn("text-xs font-mono tracking-widest uppercase font-medium transition-all duration-500", isActive("AUTOMOTIVE") ? "text-charcoal font-bold" : "")}>Automotive</h4>
                            <p className="text-[10px] tracking-tight transition-all duration-500">Cars & Utility</p>
                        </div>
                    </div>

                    {/* REAL ESTATE */}
                     <div 
                        className={cn(
                            "asset-hover-trigger relative group cursor-pointer flex items-center gap-5 transition-all duration-500",
                            isActive("REAL_ESTATE") ? "opacity-100" : "opacity-40 hover:opacity-100"
                        )}
                        onClick={() => handleSelect("REAL_ESTATE")}
                        onMouseEnter={() => handleHover("REAL_ESTATE")}
                        onMouseLeave={handleHoverEnd}
                    >
                         {isActive("REAL_ESTATE") && (
                            <div className="warp-container" style={{opacity: 1, transform: 'scale(1.1)'}}>
                                <div className="particle-cluster">
                                    <div className="cluster-dot" style={{ top: '15%', left: '15%' }}></div>
                                    <div className="cluster-dot" style={{ top: '85%', left: '25%' }}></div>
                                </div>
                            </div>
                        )}
                        <Building2 className="w-6 h-6 font-extralight" />
                         <div className="relative asset-text-container">
                            <h4 className={cn("text-xs font-mono tracking-widest uppercase font-medium transition-all duration-500", isActive("REAL_ESTATE") ? "text-charcoal font-bold" : "")}>Real Estate</h4>
                            <p className="text-[10px] tracking-tight transition-all duration-500">Consórcio Imobiliário</p>
                        </div>
                    </div>

                     {/* HEAVY MACHINERY (PESADOS) */}
                     <div 
                        className={cn(
                            "group cursor-pointer flex items-center gap-5 transition-opacity",
                            isActive("HEAVY_MACHINERY") ? "opacity-100" : "opacity-40 hover:opacity-100"
                        )}
                        onClick={() => handleSelect("HEAVY_MACHINERY")}
                        onMouseEnter={() => handleHover("HEAVY_MACHINERY")}
                        onMouseLeave={handleHoverEnd}
                    >
                        <Truck className="w-6 h-6 font-extralight" />
                         <div>
                            <h4 className="text-xs font-mono tracking-widest uppercase font-medium text-charcoal">Heavy Machinery</h4>
                            <p className="text-[10px] tracking-tight">Trucks & Agro</p>
                        </div>
                    </div>

                     {/* MOTOS (NEW) */}
                     <div 
                        className={cn(
                            "group cursor-pointer flex items-center gap-5 transition-opacity",
                            isActive("MOTOS") ? "opacity-100" : "opacity-40 hover:opacity-100"
                        )}
                        onClick={() => handleSelect("MOTOS")}
                        onMouseEnter={() => handleHover("MOTOS")}
                        onMouseLeave={handleHoverEnd}
                    >
                        <Bike className="w-6 h-6 font-extralight" />
                         <div>
                            <h4 className="text-xs font-mono tracking-widest uppercase font-medium text-charcoal">Motos</h4>
                            <p className="text-[10px] tracking-tight">Two Wheels</p>
                        </div>
                    </div>

                    {/* SERVICES */}
                    <div 
                        className={cn(
                            "group cursor-pointer flex items-center gap-5 transition-opacity",
                            isActive("SERVICES") ? "opacity-100" : "opacity-40 hover:opacity-100"
                        )}
                        onClick={() => handleSelect("SERVICES")}
                        onMouseEnter={() => handleHover("SERVICES")}
                        onMouseLeave={handleHoverEnd}
                    >
                        <Briefcase className="w-6 h-6 font-extralight" />
                         <div>
                            <h4 className="text-xs font-mono tracking-widest uppercase font-medium text-charcoal">Services</h4>
                            <p className="text-[10px] tracking-tight">Wealth Services</p>
                        </div>
                    </div>
                    
                    {/* PROTECTION */}
                    <div 
                        className={cn(
                            "group cursor-pointer flex items-center gap-5 transition-opacity",
                            isActive("PROTECTION") ? "opacity-100" : "opacity-40 hover:opacity-100"
                        )}
                        onClick={() => handleSelect("PROTECTION")}
                        onMouseEnter={() => handleHover("PROTECTION")}
                        onMouseLeave={handleHoverEnd}
                    >
                        <Shield className="w-6 h-6 font-extralight" />
                         <div>
                            <h4 className="text-xs font-mono tracking-widest uppercase font-medium text-charcoal">Protection</h4>
                            <p className="text-[10px] tracking-tight">Insurance Layer</p>
                        </div>
                    </div>

                </div>
            </nav>

            {/* Footer Quote */}
            <div className="mt-auto pt-8 border-t border-black/[0.03]">
                <p className="text-[9px] font-mono tracking-widest opacity-30 italic">&quot;LEVERAGE IS THE TOOL OF KINGS.&quot;</p>
            </div>
        </div>
    );
}
