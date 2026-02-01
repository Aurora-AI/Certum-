'use client';

import { motion } from "framer-motion";
import { ArrowUpRight, Anchor, Zap, Tractor, Diamond } from "lucide-react";

const ASSETS = [
  {
    id: "03",
    title: "MARINE",
    subtitle: "Blue Water Sovereignty",
    image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=800&auto=format&fit=crop",
    icon: <Anchor size={20} />
  },
  {
    id: "04",
    title: "MOTO",
    subtitle: "Two-Wheel Freedom",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84f3d?q=80&w=800&auto=format&fit=crop",
    icon: <Zap size={20} />
  },
  {
    id: "05",
    title: "AGRO",
    subtitle: "Land & Machinery",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=800&auto=format&fit=crop",
    icon: <Tractor size={20} />
  }
];

const SERVICE_ASSET = {
    id: "06",
    title: "SERVICES",
    subtitle: "Concierge & Surgery",
    icon: <Diamond size={24} />
};

export function ExpansionGrid() {
  return (
    <section className="w-full py-32 bg-white border-t border-gray-100">
      <div className="px-6 lg:px-12 max-w-[1800px] mx-auto">
        
        {/* HEADER (Refactoring UI: De-emphasis) */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ecb613] mb-2 block">
                    Beyond The Pillars
                </span>
                <h2 className="text-3xl md:text-4xl font-light tracking-tight text-[#181611]">
                    Expanded <span className="font-bold">Portfolio</span>
                </h2>
            </div>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400 max-w-xs text-right">
                Assets Class B • Liquid & Solid
            </p>
        </div>

        {/* THE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-[600px] lg:h-[500px]">
            
            {/* STANDARD ASSETS (IMAGE BASED) */}
            {ASSETS.map((asset, index) => (
                <motion.div
                    key={asset.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ 
                        duration: 0.8, 
                        delay: index * 0.1, // Stagger Effect
                        ease: [0.22, 1, 0.36, 1] // Kinetic Curve
                    }}
                    className="group relative h-full bg-gray-100 overflow-hidden cursor-pointer rounded-sm"
                >
                    {/* IMAGE (Grayscale to Color) */}
                    <img 
                        src={asset.image} 
                        alt={asset.title}
                        className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                    />
                    
                    {/* OVERLAY (Noise + Gradient) */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                    
                    {/* CONTENT */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                            <span className="text-white/50 text-xs font-bold tracking-widest border border-white/20 px-2 py-1 rounded-full backdrop-blur-sm">
                                {asset.id}
                            </span>
                            <div className="text-white opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                <ArrowUpRight size={20} />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center gap-2 mb-2 text-[#ecb613]">
                                {asset.icon}
                            </div>
                            <h3 className="text-white text-3xl font-bold tracking-tighter uppercase">
                                {asset.title}
                            </h3>
                            <div className="overflow-hidden h-0 group-hover:h-auto transition-all duration-300">
                                <p className="text-white/70 text-xs mt-2 font-medium tracking-widest uppercase transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                    {asset.subtitle}
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}

            {/* SPECIAL ASSET (SERVICES - SOLID GOLD) */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="group relative h-full bg-[#ecb613] overflow-hidden cursor-pointer rounded-sm flex flex-col justify-between p-8 hover:bg-[#d9a711] transition-colors duration-500"
            >
                <div className="flex justify-between items-start">
                     <span className="text-black/40 text-xs font-bold tracking-widest border border-black/10 px-2 py-1 rounded-full">
                        {SERVICE_ASSET.id}
                    </span>
                    <ArrowUpRight className="text-[#181611] group-hover:rotate-45 transition-transform duration-500" />
                </div>

                <div className="relative z-10">
                    <div className="mb-4 p-3 bg-black/5 w-fit rounded-full">
                        {SERVICE_ASSET.icon}
                    </div>
                    <h3 className="text-[#181611] text-3xl font-bold tracking-tighter uppercase leading-none mb-2">
                        {SERVICE_ASSET.title}
                    </h3>
                    <p className="text-[#181611]/60 text-xs font-bold tracking-widest uppercase">
                        {SERVICE_ASSET.subtitle}
                    </p>
                </div>

                {/* Abstract Pattern Background */}
                <div className="absolute right-[-20%] bottom-[-20%] w-64 h-64 border-[20px] border-white/10 rounded-full group-hover:scale-150 transition-transform duration-1000 ease-in-out" />
            </motion.div>

        </div>
      </div>
    </section>
  );
}
