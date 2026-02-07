"use client";

import { useRef, useMemo, useLayoutEffect, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { generateShapes } from './particles/ShapeGenerator';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const PARTICLE_COUNT = 3000; // Efficient count for "Volumetric Silence"
const DAMPING = 0.08; // How fast particles move to target (lower = slower/heavier)

// ─── SHADER MATERIAL ───
// Simple point shader for performance and "warm gray" aesthetic
const DotMaterial = new THREE.ShaderMaterial({
    uniforms: {
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('#BFB38F') }, // Gold/Warm
        uOpacity: { value: 0.6 },
        uPixelRatio: { value: 1 } // Will update on mount
    },
    vertexShader: `
        uniform float uTime;
        uniform float uPixelRatio;
        attribute float aScale;
        
        void main() {
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            gl_Position = projectionMatrix * mvPosition;
            
            // Size attenuation
            gl_PointSize = 4.0 * aScale * uPixelRatio * (10.0 / -mvPosition.z);
        }
    `,
    fragmentShader: `
        uniform vec3 uColor;
        uniform float uOpacity;
        
        void main() {
            // Circular particle
            vec2 center = gl_PointCoord - 0.5;
            float dist = length(center);
            if (dist > 0.5) discard;
            
            // Soft edge
            float alpha = smoothstep(0.5, 0.4, dist) * uOpacity;
            
            gl_FragColor = vec4(uColor, alpha);
        }
    `,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending
});

const Particles = ({ activeShape }: { activeShape: string }) => {
    const pointsRef = useRef<THREE.Points>(null);
    const { viewport, gl } = useThree();
    
    // Generate all shape positions once
    const { positions, scales, shapes } = useMemo(() => {
        const shapeData = generateShapes(PARTICLE_COUNT);
        const currentPos = new Float32Array(PARTICLE_COUNT * 3);
        const scales = new Float32Array(PARTICLE_COUNT);
        
        // Init with chaos
        currentPos.set(shapeData.chaos);
        
        for (let i = 0; i < PARTICLE_COUNT; i++) {
            scales[i] = Math.random();
        }
        
        return { 
            positions: currentPos, 
            scales,
            shapes: shapeData 
        };
    }, []);

    // Update material pixel ratio
    useLayoutEffect(() => {
        DotMaterial.uniforms.uPixelRatio.value = gl.getPixelRatio();
    }, [gl]);

    // ANIMATION LOOP
    useFrame((state) => {
        if (!pointsRef.current) return;
        
        const geometry = pointsRef.current.geometry;
        const currentPositions = geometry.attributes.position.array as Float32Array;
        const targetPositions = (shapes as any)[activeShape]; // unsafe cast for ease
        
        if (!targetPositions) return;

        // Lerp towards target
        for (let i = 0; i < PARTICLE_COUNT; i++) {
            const ix = i * 3;
            const iy = i * 3 + 1;
            const iz = i * 3 + 2;

            // Simple Lerp
            currentPositions[ix] += (targetPositions[ix] - currentPositions[ix]) * DAMPING;
            currentPositions[iy] += (targetPositions[iy] - currentPositions[iy]) * DAMPING;
            currentPositions[iz] += (targetPositions[iz] - currentPositions[iz]) * DAMPING;
            
            // Add Brownian Motion (Noise)
            const time = state.clock.elapsedTime;
            const noise = 0.02; // Small jitter
            currentPositions[ix] += (Math.sin(time + i) * noise); 
            currentPositions[iy] += (Math.cos(time + i * 0.5) * noise);
        }
        
        geometry.attributes.position.needsUpdate = true;
        
        // Rotate entire cloud slowly
        pointsRef.current.rotation.y += 0.001;
    });

    const finalGeometry = useMemo(() => {
        const geo = new THREE.BufferGeometry();
        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geo.setAttribute('aScale', new THREE.BufferAttribute(scales, 1));
        return geo;
    }, [positions, scales]);

    return (
        <points ref={pointsRef} position={[0, 0, 0]} geometry={finalGeometry}>
            <primitive object={DotMaterial} />
        </points>
    );
};

// ... imports ...

interface EmergentFieldProps {
    overrideShape?: string | null;
}

export const EmergentField = ({ overrideShape }: EmergentFieldProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [localShape, setLocalShape] = React.useState("chaos");

    // Start with chaos
    // Check override
    const activeShape = overrideShape || localShape;

    // ─── SCROLL TRIGGER LOGIC ───
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to({}, {
                scrollTrigger: {
                    trigger: document.body,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1, // Add scrub for smoother transition detection
                    onUpdate: (self) => {
                        // Only update local shape if no override
                        if (overrideShape) return;
                        
                        const p = self.progress;
                        // Cycle through shapes based on scroll depth
                        if (p < 0.1) setLocalShape("chaos");
                        else if (p < 0.25) setLocalShape("abstract");
                        else if (p < 0.45) setLocalShape("car");
                        else if (p < 0.65) setLocalShape("house");
                        else setLocalShape("chaos");
                    }
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, [overrideShape]);

    return (
        <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-1000">
            <Canvas camera={{ position: [0, 0, 14], fov: 35 }} gl={{ antialias: false, alpha: true }}>
                 {/* Fog for depth */}
                <fog attach="fog" args={['#0A0A0A', 10, 25]} />
                <Particles activeShape={activeShape} />
            </Canvas>
        </div>
    );
};

import React from 'react';
