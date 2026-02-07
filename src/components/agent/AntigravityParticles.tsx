"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { loadCanvasMaskPlugin } from "@tsparticles/plugin-canvas-mask";
import type { ISourceOptions } from "@tsparticles/engine";
import { cn } from "@/lib/utils";

export type EmergentTarget = "idle" | "car" | "house" | "abstract";

interface AntigravityParticlesProps {
    target?: EmergentTarget;
    factor?: number;
    fixed?: boolean;
    showAura?: boolean;
    className?: string;
    particleCount?: number;
    speed?: number;
    interactive?: boolean;
    maskScaleMultiplier?: number;
    pixelOffset?: number;
    pixelAlphaThreshold?: number;
    particleColor?: string;
}

const TARGET_URLS: Record<Exclude<EmergentTarget, "idle">, string> = {
    car: "/particles/targets/car_soft.png",
    house: "/particles/targets/house_soft.png",
    abstract: "/particles/targets/abstract_soft.png"
};

const TARGET_SCALES: Record<Exclude<EmergentTarget, "idle">, number> = {
    car: 0.58,
    house: 0.56,
    abstract: 0.6
};

const TARGET_POSITIONS: Record<Exclude<EmergentTarget, "idle">, { x: number; y: number }> = {
    car: { x: 48, y: 52 },
    house: { x: 52, y: 51 },
    abstract: { x: 50, y: 49 }
};

const clampFactor = (value: number) => Math.min(0.85, Math.max(0, value));

export function AntigravityParticles({
    target = "idle",
    factor = 0.16,
    fixed = true,
    showAura = true,
    className,
    particleCount = 2500,
    speed = 0.25,
    interactive = true,
    maskScaleMultiplier = 1,
    pixelOffset = 4,
    pixelAlphaThreshold = 0.14,
    particleColor = "#e6e6e6"
}: AntigravityParticlesProps) {
    const [engineReady, setEngineReady] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
            await loadCanvasMaskPlugin(engine);
        }).then(() => setEngineReady(true));
    }, []);

    const options = useMemo<ISourceOptions>(() => {
        const hasTarget = target !== "idle";
        const safeFactor = clampFactor(factor);
        const canvasMaskOptions = hasTarget
            ? {
                enable: true,
                image: {
                    src: TARGET_URLS[target]
                },
                pixels: {
                    // Thinner pixel sampling keeps forms suggestive instead of explicit.
                    offset: pixelOffset,
                    filter: (pixel: { a: number }) => pixel.a >= pixelAlphaThreshold
                },
                position: TARGET_POSITIONS[target],
                scale: TARGET_SCALES[target] * maskScaleMultiplier,
                override: {
                    color: false,
                    opacity: false
                }
            }
            : {
                enable: false
            };

        return {
            fullScreen: { enable: false },
            background: { color: "transparent" },
            fpsLimit: 60,
            particles: {
                number: {
                    value: particleCount,
                    density: { enable: true, area: 1200 }
                },
                color: { value: particleColor },
                shape: { type: "circle" },
                collisions: { enable: false },
                opacity: {
                    value: { min: 0.55, max: 0.9 },
                    animation: { enable: false }
                },
                size: {
                    value: { min: 2, max: 3.5 },
                    animation: { enable: false }
                },
                move: {
                    enable: true,
                    speed,
                    direction: "none",
                    random: true,
                    straight: false,
                    outModes: { default: "out" },
                    noise: {
                        enable: true,
                        delay: { value: 0 },
                        amplitude: 1,
                        frequency: 0.18
                    }
                }
            },
            interactivity: {
                detectsOn: "window",
                events: {
                    onHover: { enable: interactive, mode: ["attract"] },
                    onClick: { enable: false },
                    resize: {
                        enable: true,
                        delay: 0.5
                    }
                },
                modes: {
                    attract: {
                        distance: 120,
                        duration: 0.25,
                        factor: safeFactor,
                        easing: "ease-out"
                    }
                }
            },
            canvasMask: canvasMaskOptions,
            detectRetina: true
        } as ISourceOptions;
    }, [
        factor,
        target,
        particleCount,
        speed,
        interactive,
        maskScaleMultiplier,
        pixelOffset,
        pixelAlphaThreshold,
        particleColor
    ]);

    if (!engineReady) {
        return null;
    }

    return (
        <div
            className={cn(
                "inset-0 w-full h-full pointer-events-none z-0",
                fixed ? "fixed" : "absolute",
                showAura ? "bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.03)_0%,transparent_70%)]" : "bg-transparent",
                className
            )}
        >
            <Particles
                id="antigravity-emergent-form-field"
                className="w-full h-full"
                key={target}
                options={options}
            />
        </div>
    );
}
