"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

// ═══════════════════════════════════════════════════════════════════════════
// PRODUCTS DISPERSED — Telha Clarke "All Work" Pattern
// Asymmetric grid with scattered product cards
// ═══════════════════════════════════════════════════════════════════════════

interface Product {
  id: number;
  category: string;
  title: string;
  description: string;
  value: string;
  image: string;
}

const PRODUCTS: Product[] = [
  {
    id: 1,
    category: "FROTA",
    title: "Scania R 540",
    description: "Ativo logístico com 100% LTV",
    value: "R$ 850k - 1.2M",
    image: "/assets/vault/fleet.jpg",
  },
  {
    id: 2,
    category: "IMÓVEIS",
    title: "Reserva de Valor",
    description: "Arbitragem patrimonial",
    value: "R$ 1M - 10M",
    image: "/assets/vault/real-estate.jpg",
  },
  {
    id: 3,
    category: "AGRO",
    title: "Safra Tecnológica",
    description: "Ciclos sazonais estratégicos",
    value: "R$ 500k - 3M",
    image: "/assets/vault/agro.jpg",
  },
  {
    id: 4,
    category: "NÁUTICA",
    title: "Marine Lifestyle",
    description: "Azimut Tax Free",
    value: "R$ 1M - 5M",
    image: "/assets/vault/nautica.jpg",
  },
  {
    id: 5,
    category: "AÉREO",
    title: "Mobilidade Executiva",
    description: "Liquidez e status",
    value: "R$ 2M - 15M",
    image: "/assets/vault/aereo.jpg",
  },
  {
    id: 6,
    category: "IMÓVEIS",
    title: "Alto Padrão",
    description: "Incorporação selecionada",
    value: "R$ 3M - 20M",
    image: "/assets/vault/luxury-real-estate.jpg",
  },
];

// Asymmetric grid positions inspired by Telha Clarke "All Work" pattern
const GRID_POSITIONS = [
  { top: "5%", left: "3%", width: "28%", height: "38%" },
  { top: "12%", left: "35%", width: "22%", height: "32%" },
  { top: "5%", right: "5%", width: "25%", height: "42%" },
  { top: "52%", left: "8%", width: "24%", height: "36%" },
  { top: "55%", left: "38%", width: "20%", height: "38%" },
  { top: "50%", right: "3%", width: "26%", height: "40%" },
];

function ProductItem({
  product,
  position,
  index,
}: {
  product: Product;
  position: (typeof GRID_POSITIONS)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.9,
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={position}
      className="absolute group cursor-pointer"
    >
      <div className="relative w-full h-full overflow-hidden">
        {/* Image Container */}
        <div className="relative w-full h-full bg-[#F5F5F5] overflow-hidden">
          {/* Product Image */}
          <motion.img
            src={product.image}
            alt={product.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Category Badge */}
          <div className="absolute top-4 left-4 z-10">
            <span className="px-3 py-1.5 bg-white/95 backdrop-blur-sm font-mono text-[9px] uppercase tracking-[0.25em] text-[#1A1A1A]">
              {product.category}
            </span>
          </div>

          {/* Hover Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6"
          >
            <span className="text-white/70 font-mono text-[10px] uppercase tracking-[0.2em] mb-2">
              {product.value}
            </span>
            <h3 className="text-white text-xl md:text-2xl font-serif font-medium">
              {product.title}
            </h3>
            <p className="text-white/60 text-sm mt-2">{product.description}</p>
          </motion.div>
        </div>

        {/* Border */}
        <div className="absolute inset-0 border border-black/5 pointer-events-none" />
      </div>
    </motion.div>
  );
}

export default function ProductsDispersed() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative min-h-[140vh] bg-white py-32 px-6 overflow-hidden">
      {/* Section Header */}
      <div className="max-w-[1800px] mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-4"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#1A1A1A]">
            Ativos em Destaque
          </h2>
          <span className="px-3 py-1 bg-[#1A1A1A] text-white font-mono text-xs">
            {PRODUCTS.length}
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-center text-[#8A8A8A] max-w-xl mx-auto"
        >
          Explore o universo de ativos alavancáveis. Cada categoria representa
          uma oportunidade de multiplicar seu patrimônio.
        </motion.p>
      </div>

      {/* Dispersed Grid */}
      <div
        ref={containerRef}
        className="relative w-full max-w-[1600px] mx-auto"
        style={{ height: "100vh" }}
      >
        {PRODUCTS.map((product, index) => (
          <ProductItem
            key={product.id}
            product={product}
            position={GRID_POSITIONS[index]}
            index={index}
          />
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex justify-center mt-20"
      >
        <button className="group flex items-center gap-3 px-8 py-4 border border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all duration-500">
          <span className="font-mono text-xs uppercase tracking-[0.2em]">
            Ver Todos os Ativos
          </span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>
      </motion.div>
    </section>
  );
}
