"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import gsap from "gsap";
import { ProductPortfolio } from "./ProductPortfolio";
import { NeuralStream } from "./NeuralStream";
import { ActiveToolPanel } from "./ActiveToolPanel";
import { AntigravityParticles as StaticParticles } from "./AntigravityParticles";
import type { EmergentTarget } from "./AntigravityParticles";

// Type definitions for Message (matching NeuralStream)
type Message = {
    role: 'user' | 'agent';
    text: string;
};

interface ProductConsoleProps {
    initialContext: string;
    assetDefault?: number;
    horizonDefault?: number;
    activeCategory?: string;
}

export function ProductConsole({ 
    initialContext, 
    assetDefault = 50000, 
    horizonDefault = 60,
    activeCategory 
}: ProductConsoleProps) {
    
    // --- STATE ---
    const [messages, setMessages] = useState<Message[]>([
        { role: 'agent', text: initialContext }
    ]);
    const [input, setInput] = useState("");
    const [isProcessing, setIsProcessing] = useState(false);
    const [hoverCategory, setHoverCategory] = useState<string | null>(null);
    const [isExploring, setIsExploring] = useState(false);
    const [isPreClick, setIsPreClick] = useState(false);
    
    // Lifted State for Tool Panel
    const [assetValue] = useState(assetDefault);
    const [timeHorizon] = useState(horizonDefault);

    // --- REFS (Motion) ---
    const mainRef = useRef<HTMLElement>(null);
    const leftSidebarRef = useRef<HTMLElement>(null);
    const rightSidebarRef = useRef<HTMLElement>(null);
    const explorationTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const preClickTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    // --- ENTRANCE ANIMATION (GSAP) ---
    useEffect(() => {
        const tl = gsap.timeline();
        tl.from(leftSidebarRef.current, { x: -50, opacity: 0, duration: 0.8, ease: "power3.out" })
          .from(rightSidebarRef.current, { x: 50, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")
          .from(mainRef.current, { opacity: 0, y: 20, duration: 0.8, ease: "power3.out" }, "-=0.8");
    }, []);

    useEffect(() => {
        return () => {
            if (explorationTimeoutRef.current) clearTimeout(explorationTimeoutRef.current);
            if (preClickTimeoutRef.current) clearTimeout(preClickTimeoutRef.current);
        };
    }, []);

    // --- HANDLERS ---
    
    // Navigation Handler (Simulated for now, could use Next.js router)
    const handleProductSelect = (product: string) => {
        // In a real app, this would route to /consorcio/[product]
        // For now, we simulate a chat response telling user to navigate manually via URL if we want strict page reload, 
        // OR we can just accept that clicking sidebar links updates the view if we were using a single page.
        // Given the architecture is multi-page, this might just update the chat context or do a router.push
        
        // Since we are building separate pages, we will treat this as an "Info Request" within the current stream
        setMessages(prev => [...prev, { role: 'user', text: `Consulting: ${product}` }]);
        setIsProcessing(true);
        setTimeout(() => {
            setIsProcessing(false);
            setMessages(prev => [...prev, { role: 'agent', text: `To access '${product}', please navigate to its dedicated terminal (URL). \n\nI am currently optimized for ${activeCategory}.` }]);
        }, 1000);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;
        setMessages(prev => [...prev, { role: 'user', text: input }]);
        setInput("");
        setIsProcessing(true);
        
        // Simple mock response logic based on context
        setTimeout(() => {
            setIsProcessing(false);
            let response = "Input received. Calibrating calculation...";
            if (input.toLowerCase().includes("valor")) response = `Updating asset value model to align with your input.`;
            else if (input.toLowerCase().includes("prazo")) response = `Adjusting time horizon parameters.`;
            
            setMessages(prev => [...prev, { role: 'agent', text: response }]);
        }, 1500);
    };

    const handleHoverCategory = (category: string | null) => {
        setHoverCategory(category);
    };

    const triggerExploration = () => {
        setIsExploring(true);
        if (explorationTimeoutRef.current) clearTimeout(explorationTimeoutRef.current);
        explorationTimeoutRef.current = setTimeout(() => setIsExploring(false), 900);
    };

    const startPreClick = () => {
        if (preClickTimeoutRef.current) clearTimeout(preClickTimeoutRef.current);
        preClickTimeoutRef.current = setTimeout(() => setIsPreClick(true), 900);
    };

    const endPreClick = () => {
        if (preClickTimeoutRef.current) clearTimeout(preClickTimeoutRef.current);
        setIsPreClick(false);
    };

    const particleTarget = useMemo<EmergentTarget>(() => {
        if (isPreClick) return "abstract";
        if (hoverCategory === "AUTOMOTIVE") return "car";
        if (hoverCategory === "REAL_ESTATE") return "house";
        if (hoverCategory || isExploring) return "abstract";
        return "idle";
    }, [hoverCategory, isExploring, isPreClick]);

    const particleFactor = useMemo(() => {
        if (isPreClick) return 0.82;
        if (particleTarget === "idle") return 0.16;
        if (particleTarget === "abstract" && isExploring) return 0.4;
        return 0.46;
    }, [isPreClick, isExploring, particleTarget]);

    return (
        <>
            <StaticParticles target={particleTarget} factor={particleFactor} />
            
            <main className="relative z-10 h-screen w-full flex overflow-hidden font-sans bg-[#F4F4F4] dark:bg-[#0a0a0a] text-charcoal dark:text-gray-100">
                
                {/* --- LEFT SIDEBAR (The Portfolio) --- */}
                <aside ref={leftSidebarRef} className="w-80 h-full flex flex-col p-12 bg-white/40 backdrop-blur-md border-r border-black/[0.03]">
                    <ProductPortfolio 
                        onSelect={handleProductSelect} 
                        selectedCategory={activeCategory}
                        onHoverCategory={handleHoverCategory}
                    />
                </aside>

                {/* --- CENTER (The Stream) --- */}
                <section ref={mainRef} className="flex-1 h-full flex flex-col relative">
                    <div className="h-20 flex items-center justify-center">
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                            <span className="font-mono text-[10px] tracking-[0.4em] opacity-30 uppercase">Neural_Uplink_Active</span>
                        </div>
                    </div>

                    {/* Stream Content */}
                    <div
                        className="flex-1 px-4 md:px-24 py-12 overflow-y-auto no-scrollbar flex flex-col items-center"
                        onScroll={triggerExploration}
                        onWheel={triggerExploration}
                    >
                        <div className="max-w-2xl w-full h-full relative">
                            <NeuralStream messages={messages} isProcessing={isProcessing} />
                        </div>
                    </div>

                    {/* Input Area (Glass Panel) */}
                    <div className="p-12 pb-16 flex justify-center z-20">
                        <div className="w-full max-w-3xl relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 rounded-2xl blur opacity-30 group-focus-within:opacity-100 transition-opacity"></div>
                            <form onSubmit={handleSubmit} className="relative glass-panel rounded-2xl flex items-center px-6 py-4 border border-black/[0.01] shadow-sm bg-white/40 backdrop-blur-xl">
                                <input 
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    className="flex-1 bg-transparent border-none focus:ring-0 text-lg font-light placeholder:opacity-30 text-charcoal outline-none" 
                                    placeholder={`Command the ${activeCategory || 'System'}...`}
                                    type="text"
                                    autoFocus
                                />
                                <div className="flex items-center gap-4 opacity-40">
                                    <button type="button" className="hover:text-primary transition-colors">
                                        <span className="material-symbols-outlined">mic</span>
                                    </button>
                                    <button
                                        type="submit"
                                        className="hover:text-primary transition-colors"
                                        onPointerDown={startPreClick}
                                        onPointerUp={endPreClick}
                                        onPointerLeave={endPreClick}
                                        onPointerCancel={endPreClick}
                                    >
                                        <span className="material-symbols-outlined">send</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>

                {/* --- RIGHT SIDEBAR (The Tool Panel) --- */}
                <aside ref={rightSidebarRef} className="w-96 h-full flex flex-col p-12 bg-white/40 backdrop-blur-md border-l border-black/[0.03]">
                    <div className="h-full">
                         {/* Here we pass state down to be visualized */}
                         <ActiveToolPanel 
                            assetValue={assetValue}
                            timeHorizon={timeHorizon}
                         />
                         
                         {/* Hidden Slider Logic for Demo Purposes (Optional Overlay?) 
                             For now, ActiveToolPanel just displays the specific defaults 
                             passed from the page props.
                         */}
                    </div>
                </aside>
            </main>
        </>
    );
}
