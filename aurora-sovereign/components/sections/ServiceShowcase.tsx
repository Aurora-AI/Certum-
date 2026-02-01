"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MouseEvent, useEffect, useRef, useState } from "react";

import { NumberTicker } from "@/components/ui/NumberTicker";
import { ScrambleText } from "@/components/ui/ScrambleText";

// ═══════════════════════════════════════════════════════════════════════════
// CINEMATIC SERVICE SHOWCASE V2 — "Gravity Blocks" with LIFE & COLOR
// Skills: gsap-expert + framer-motion-expert + tailwindcss-expert
// ═══════════════════════════════════════════════════════════════════════════

gsap.registerPlugin(ScrollTrigger);

// ─────────────────────────────────────────────────────────────────────────────
// TYPE DEFINITIONS
// ─────────────────────────────────────────────────────────────────────────────

interface ServiceBlock {
  id: string;
  verb: string;
  title: string;
  eyebrow: string;
  description: string;
  stat: {
    value: number;
    decimals: number;
    prefix?: string;
    suffix?: string;
    label: string;
  };
  color: {
    primary: string;
    secondary: string;
    gradient: string;
    glow: string;
    glowStrong: string;
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// DATA — CORES MAIS VIBRANTES
// ─────────────────────────────────────────────────────────────────────────────

const SERVICES: ServiceBlock[] = [
  {
    id: "realize",
    verb: "REALIZE",
    title: "Consórcio & Alavancagem",
    eyebrow: "// PLANEJAMENTO INTELIGENTE",
    description:
      "Alavancagem patrimonial sem juros. Construa seu patrimônio com a engenharia financeira mais eficiente do mercado.",
    stat: {
      value: 32.4,
      decimals: 1,
      suffix: "%",
      label: "economia em juros",
    },
    color: {
      primary: "#F59E0B", // Amber-500 (mais vibrante)
      secondary: "#FCD34D", // Amber-300
      gradient: "from-amber-500/30 via-yellow-400/20 to-orange-500/10",
      glow: "rgba(245, 158, 11, 0.25)",
      glowStrong: "rgba(245, 158, 11, 0.5)",
    },
  },
  {
    id: "proteja",
    verb: "PROTEJA",
    title: "Seguros & Blindagem",
    eyebrow: "// SEGURANÇA GARANTIDA",
    description:
      "Proteção de ativos e sucessão. Estruturas que blindam seu patrimônio contra riscos e garantem a transferência eficiente.",
    stat: {
      value: 4.1,
      decimals: 1,
      prefix: "R$ ",
      suffix: "Bi",
      label: "em ativos protegidos",
    },
    color: {
      primary: "#10B981", // Emerald-500
      secondary: "#34D399", // Emerald-400
      gradient: "from-emerald-500/30 via-teal-400/20 to-cyan-500/10",
      glow: "rgba(16, 185, 129, 0.25)",
      glowStrong: "rgba(16, 185, 129, 0.5)",
    },
  },
  {
    id: "multiplique",
    verb: "MULTIPLIQUE",
    title: "Wealth & Sucessão",
    eyebrow: "// FUTURO & LEGADO",
    description:
      "Advisory e multiplicação. Estratégias personalizadas para crescer e perpetuar seu patrimônio através de gerações.",
    stat: {
      value: 1.9,
      decimals: 1,
      prefix: "R$ ",
      suffix: "Bi",
      label: "sob gestão experiente",
    },
    color: {
      primary: "#8B5CF6", // Violet-500
      secondary: "#A78BFA", // Violet-400
      gradient: "from-violet-500/30 via-purple-400/20 to-indigo-500/10",
      glow: "rgba(139, 92, 246, 0.25)",
      glowStrong: "rgba(139, 92, 246, 0.5)",
    },
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// ANIMATED GRADIENT BACKGROUND
// ─────────────────────────────────────────────────────────────────────────────

function AnimatedGradient({
  color,
  isActive,
}: {
  color: ServiceBlock["color"];
  isActive: boolean;
}) {
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {/* Gradient de base */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 100% 70% at 50% 100%, ${color.glow}, transparent),
            radial-gradient(ellipse 80% 50% at 80% 20%, ${color.glow}, transparent)
          `,
        }}
      />

      {/* Animated orbs */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-[100px]"
        style={{
          background: color.glowStrong,
          left: "10%",
          bottom: "-20%",
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full blur-[80px]"
        style={{
          background: color.glow,
          right: "5%",
          top: "10%",
        }}
        animate={{
          x: [0, -30, 0],
          y: [0, 20, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// GLOWING BORDER
// ─────────────────────────────────────────────────────────────────────────────

function GlowingBorder({
  color,
  isHovered,
}: {
  color: string;
  isHovered: boolean;
}) {
  return (
    <motion.div
      className="absolute inset-0 rounded-sm pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{
        opacity: isHovered ? 1 : 0,
        boxShadow: isHovered
          ? `0 0 40px ${color}, inset 0 0 20px ${color}`
          : "none",
      }}
      transition={{ duration: 0.4 }}
      style={{
        border: `1px solid ${color}`,
      }}
    />
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PULSE STAT BLOCK
// ─────────────────────────────────────────────────────────────────────────────

function PulseStatBlock({
  stat,
  color,
  isActive,
}: {
  stat: ServiceBlock["stat"];
  color: ServiceBlock["color"];
  isActive: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="stat-block relative p-8 md:p-12 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 40 }}
      animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{
        background: `linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)`,
        backdropFilter: "blur(12px)",
        border: `1px solid ${isHovered ? color.primary : "rgba(0,0,0,0.05)"}`,
        boxShadow: isHovered
          ? `0 20px 60px ${color.glow}, 0 0 30px ${color.glow}`
          : "0 10px 40px rgba(0,0,0,0.05)",
        transition: "border 0.3s, box-shadow 0.4s",
      }}
    >
      {/* Animated accent line */}
      <motion.div
        className="absolute top-0 left-0 h-1 w-full origin-left"
        style={{
          background: `linear-gradient(90deg, ${color.primary}, ${color.secondary})`,
        }}
        initial={{ scaleX: 0 }}
        animate={isActive ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Currency Symbol */}
      <div className="flex items-start gap-2">
        {stat.prefix && (
          <span className="text-2xl md:text-3xl font-serif text-[#8A8A8A] mt-2">
            {stat.prefix}
          </span>
        )}

        {/* Animated Number */}
        <div className="flex items-baseline">
          <NumberTicker
            value={stat.value}
            decimals={stat.decimals}
            active={isActive}
            className="text-6xl md:text-7xl lg:text-8xl"
          />
          {stat.suffix && (
            <motion.span
              className="text-3xl md:text-4xl font-serif ml-1"
              style={{ color: color.primary }}
              animate={
                isActive
                  ? {
                      textShadow: [
                        `0 0 0px ${color.primary}`,
                        `0 0 20px ${color.primary}`,
                        `0 0 0px ${color.primary}`,
                      ],
                    }
                  : {}
              }
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              {stat.suffix}
            </motion.span>
          )}
        </div>
      </div>

      {/* Stat Label */}
      <p className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-[#8A8A8A]">
        {stat.label}
      </p>

      {/* Decorative Corner with animation */}
      <motion.div
        className="absolute bottom-0 right-0 w-20 h-20"
        style={{
          background: `linear-gradient(135deg, transparent 50%, ${color.primary} 50%)`,
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={
          isActive ? { opacity: 0.2, scale: 1 } : { opacity: 0, scale: 0.5 }
        }
        transition={{ duration: 0.6, delay: 1 }}
      />
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CINEMATIC SERVICE BLOCK COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

function CinematicServiceBlock({
  service,
  index,
}: {
  service: ServiceBlock;
  index: number;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // TRIGGER WHEN IN VIEW (fixed!)
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.3, // Triggers when 30% of the section is visible
  });

  const [hasTriggered, setHasTriggered] = useState(false);

  // Ensure animation only triggers once when in view
  useEffect(() => {
    if (isInView && !hasTriggered) {
      setHasTriggered(true);
    }
  }, [isInView, hasTriggered]);

  // Mouse tracking for spotlight and tilt
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [isHovering, setIsHovering] = useState(false);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  // Spring physics for smooth tilt (heavy + smooth per rules.md)
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [4, -4]), {
    stiffness: 40,
    damping: 25,
    mass: 1.2,
  });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-4, 4]), {
    stiffness: 40,
    damping: 25,
    mass: 1.2,
  });

  // Mouse move handler for spotlight + tilt
  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    mouseX.set(x);
    mouseY.set(y);
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => {
    setIsHovering(false);
    mouseX.set(0.5);
    mouseY.set(0.5);
    setMousePosition({ x: 0.5, y: 0.5 });
  };

  return (
    <motion.section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex items-center justify-center py-32 px-6 md:px-12 overflow-hidden gpu-promote"
      style={{
        perspective: "1200px",
      }}
    >
      {/* ═══ LAYER 1: Animated Gradient Background ═══ */}
      <AnimatedGradient color={service.color} isActive={hasTriggered} />

      {/* ═══ LAYER 2: Cursor Spotlight ═══ */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, ${service.color.glowStrong}, transparent 40%)`,
        }}
        animate={{
          opacity: isHovering ? 0.7 : 0,
        }}
        transition={{ duration: 0.4 }}
      />

      {/* ═══ LAYER 3: Content with 3D Tilt ═══ */}
      <motion.div
        ref={contentRef}
        className="relative z-10 w-full max-w-[1400px] mx-auto"
        style={{
          rotateX: isHovering ? rotateX : 0,
          rotateY: isHovering ? rotateY : 0,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left Column: Labels & Title */}
          <div className="lg:col-span-7 space-y-6">
            {/* Eyebrow with animated line */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: -30 }}
              animate={
                hasTriggered ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
              }
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.div
                className="h-px w-12 origin-left"
                style={{ backgroundColor: service.color.primary }}
                initial={{ scaleX: 0 }}
                animate={hasTriggered ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              />
              <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-[#8A8A8A]">
                {service.eyebrow}
              </span>
            </motion.div>

            {/* READY Badge with pulse */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                hasTriggered
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.span
                className="inline-block px-4 py-2 font-mono text-[10px] uppercase tracking-[0.3em]"
                style={{
                  color: service.color.primary,
                  border: `1px solid ${service.color.primary}`,
                  background: `linear-gradient(135deg, ${service.color.glow}, transparent)`,
                }}
                animate={{
                  boxShadow: [
                    `0 0 0px ${service.color.primary}`,
                    `0 0 20px ${service.color.primary}`,
                    `0 0 0px ${service.color.primary}`,
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                READY
              </motion.span>
            </motion.div>

            {/* Verb Title with Scramble Effect */}
            <motion.h2
              initial={{ opacity: 0, y: 80 }}
              animate={
                hasTriggered ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }
              }
              transition={{
                duration: 0.9,
                delay: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <span
                className="block text-[15vw] md:text-[10vw] lg:text-[8vw] font-serif font-bold leading-[0.85] tracking-tight"
                style={{
                  color: service.color.primary,
                  textShadow: `0 0 60px ${service.color.glow}`,
                }}
              >
                {hasTriggered ? (
                  <ScrambleText text={service.verb} delay={500} />
                ) : (
                  <span style={{ opacity: 0 }}>{service.verb}</span>
                )}
              </span>
            </motion.h2>

            {/* Service Title */}
            <motion.h3
              className="text-2xl md:text-3xl lg:text-4xl font-serif text-[#1A1A1A] leading-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={
                hasTriggered ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
              }
              transition={{
                duration: 0.7,
                delay: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {service.title}
            </motion.h3>

            {/* Description */}
            <motion.p
              className="max-w-xl text-base md:text-lg text-[#666] leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={
                hasTriggered ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            >
              {service.description}
            </motion.p>
          </div>

          {/* Right Column: Stats */}
          <div className="lg:col-span-5">
            <PulseStatBlock
              stat={service.stat}
              color={service.color}
              isActive={hasTriggered}
            />
          </div>
        </div>

        {/* Decorative Progress Line */}
        <motion.div
          className="absolute -bottom-16 left-0 right-0 h-px origin-left"
          style={{
            background: `linear-gradient(90deg, ${service.color.primary}, transparent)`,
          }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={
            hasTriggered
              ? { scaleX: 1, opacity: 0.5 }
              : { scaleX: 0, opacity: 0 }
          }
          transition={{ duration: 1.5, delay: 1, ease: [0.16, 1, 0.3, 1] }}
        />
      </motion.div>

      {/* ═══ LAYER 4: Floating Particles (more life!) ═══ */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              backgroundColor: service.color.primary,
              width: 4 + i * 2,
              height: 4 + i * 2,
              left: `${15 + i * 18}%`,
              top: `${25 + (i % 3) * 25}%`,
              filter: "blur(1px)",
            }}
            animate={
              hasTriggered
                ? {
                    y: [0, -40 - i * 10, 0],
                    x: [0, i % 2 === 0 ? 20 : -20, 0],
                    opacity: [0.3, 0.7, 0.3],
                    scale: [1, 1.2, 1],
                  }
                : { opacity: 0 }
            }
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>
    </motion.section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN EXPORT
// ─────────────────────────────────────────────────────────────────────────────

export default function ServiceShowcase() {
  return (
    <div className="relative bg-white">
      {SERVICES.map((service, index) => (
        <CinematicServiceBlock
          key={service.id}
          service={service}
          index={index}
        />
      ))}
    </div>
  );
}
