'use client';

import React, { useRef, useEffect, useState, useLayoutEffect } from 'react';
import { mat4 } from 'gl-matrix';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { PHYSICS_WGSL, RENDER_WGSL } from '../canvas/webgpu/shaderData';

// Register GSAP Plugins
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

// Constants
const PARTICLE_COUNT = 10000; // Original density for optimal quality
const WORKGROUP_SIZE = 64;

// Mobile Detection Hook
const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);
    
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768 || /iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);
    
    return isMobile;
};

// --- SCRAMBLE TEXT COMPONENT ---
const ScrambleText = ({ text, className, finishedClassName, delay = 0 }: { text: string, className?: string, finishedClassName?: string, delay?: number }) => {
    // 1. Initial State: Start with target text (SSR safe) or empty string to avoid mismatch
    // We use the target text so it's readable if JS fails, but we'll scramble it immediately on mount.
    const [display, setDisplay] = useState(text);
    const [progress, setProgress] = useState(0);
    
    useEffect(() => {
        let frameRequest: number;
        let startTime: number;
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"; // Alphanumeric vault style
        const duration = 1500; 
        
        // Wait for start time


        const animate = (time: number) => {
            if (!startTime) startTime = time;
            const currentProgress = (time - startTime) / duration;
            setProgress(currentProgress); // Store progress for render logic
            
            if (currentProgress >= 1) {
                setDisplay(text);
                return;
            }
            
            // Vault Decryption Logic:
            // 1. Calculate how many characters should be revealed based on progress
            const revealIndex = Math.floor(currentProgress * text.length);
            
            const scrambled = text.split('').map((char, i) => {
                // 2. If index < revealIndex, show real character (Left-to-Right lock)
                if (i < revealIndex) {
                    return char;
                }
                // 3. Otherwise, show random character (shuffling)
                return chars[Math.floor(Math.random() * chars.length)];
            }).join('');
            
            setDisplay(scrambled);
            frameRequest = requestAnimationFrame(animate);
        };

        const timeout = setTimeout(() => {
            frameRequest = requestAnimationFrame(animate);
        }, delay);

        return () => {
            clearTimeout(timeout);
            if (frameRequest) cancelAnimationFrame(frameRequest);
        };
    }, [text, delay]);

    // Added 'inline-block' to prevent layout collapse during render
    // Use 'finishedClassName' when scramble is done, otherwise use 'className'
    return <span className={progress >= 1 && finishedClassName ? finishedClassName : className} style={{ display: 'inline-block', minWidth: '1em' }}>{display}</span>; 
};

interface CinematicProps {
    targetShapeA?: number;
    targetShapeB?: number;
    targetLerp?: number;
    noiseIntensity?: number;
    explosionSeed?: number;
    baseColor?: string;
}

export default function HeroVolumetric({ 
    targetShapeA = 0, 
    targetShapeB = 0, 
    targetLerp = 0, 
    noiseIntensity = 0,
    explosionSeed = 0,
    baseColor = '#FFFFFF' // Force White Default
}: CinematicProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [error, setError] = useState<string | null>(null);
    const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 }); // Default
    const isMobile = useIsMobile();

    // Cinematic Props Refs to avoid useEffect re-init
    const propsRef = useRef({ targetShapeA, targetShapeB, targetLerp, noiseIntensity, explosionSeed, baseColor });
    useEffect(() => {
        propsRef.current = { targetShapeA, targetShapeB, targetLerp, noiseIntensity, explosionSeed, baseColor };
    }, [targetShapeA, targetShapeB, targetLerp, noiseIntensity, explosionSeed, baseColor]);

    // --- S-TIER: LENIS INIT ---
    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.08, // Inertia Engine
            duration: 1.2,
            smoothWheel: true,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    // --- S-TIER: GSAP RITUAL INIT ---
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const S_TIER_EASE = "cubic-bezier(0.16, 1, 0.3, 1)"; // ExoApe Signature

            const runHeroSequence = () => {
                const tl = gsap.timeline({ defaults: { ease: S_TIER_EASE, duration: 1.8 } });

                // 1. Reveal Canvas (Atmosphere)
                tl.fromTo("#canvas-container", 
                    { opacity: 0, scale: 0.9 }, 
                    { opacity: 1, scale: 1, duration: 2.0, ease: "power2.out" }
                )
                // 2. The Label (Context)
                .to(".text-label .u-clip-child", {
                    y: "0%",
                    duration: 1.4,
                }, "-=1.5")
                // 3. The Title (Subject)
                .to(".text-hero .u-clip-child", {
                    y: "0%",
                    stagger: 0.1,
                    rotateX: 0,
                }, "-=1.2")
                // 4. The Body/CTA (Detail)
                .to(".text-hero-desc .u-clip-child", {
                    y: "0%",
                    opacity: 1
                }, "-=1.0");

                // 5. THE SCALE-OUT (Transition Outro)
                // Prevents the "cut-off" feel by shrinking and fading slightly as we scroll away
                gsap.to(containerRef.current, {
                    scale: 0.95,
                    opacity: 0.2,
                    ease: "none",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top top",
                        end: "bottom center",
                        scrub: true
                    }
                });
            };

            // Check if preloader is already done (fallback) or wait for event
            // For now, simpler: Just listen for event. 
            // In a real app, strict mode might mess this up, so we'd check global flag.
            // Let's assume Preloader always runs on mount if present.
            
            const handlePreloaderComplete = () => {
                runHeroSequence();
            };

            window.addEventListener('preloader-complete', handlePreloaderComplete);
            
            // Failsafe: If no preloader event after 3s, force start
            const failsafe = setTimeout(runHeroSequence, 3500);

            return () => {
                window.removeEventListener('preloader-complete', handlePreloaderComplete);
                clearTimeout(failsafe);
            };

        }, containerRef);

        return () => ctx.revert();
    }, []);


    useEffect(() => {
        const updateDimensions = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };
        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    useEffect(() => {
        // Skip WebGPU on mobile - use CSS fallback
        if (isMobile) {
            setError("Mobile device detected - using CSS fallback");
            return;
        }
        
        if (!navigator.gpu) {
            setError("WebGPU not supported.");
            return;
        }

        let canceled = false;
        let animationFrameId: number;

        const init = async () => {
            const adapter = await navigator.gpu.requestAdapter();
            if (!adapter) throw new Error("No GPUAdapter found.");

            const device = await adapter.requestDevice();
            const canvas = canvasRef.current;
            if (!canvas) return;

            const context = canvas.getContext('webgpu');
            if (!context) throw new Error("No WebGPU context.");

            const presentationFormat = navigator.gpu.getPreferredCanvasFormat();
            context.configure({
                device,
                format: presentationFormat,
                alphaMode: 'premultiplied',
            });

            // --- 1. Create Shaders ---
            const physicsModule = device.createShaderModule({
                label: 'Physics Module',
                code: PHYSICS_WGSL,
            });

            const renderModule = device.createShaderModule({
                label: 'Render Module',
                code: RENDER_WGSL,
            });

            // --- 2. Create Buffers ---
            
            // Particle Struct: 64 bytes
            const particleSize = 64;
            const totalBufferSize = particleSize * PARTICLE_COUNT;

            // Initial Data
            const initialParticleData = new Float32Array(PARTICLE_COUNT * 16); 
            for (let i = 0; i < PARTICLE_COUNT; i++) {
                const off = i * 16;
                // pos (xyz, w=radius)
                initialParticleData[off + 0] = (Math.random() - 0.5) * 10;
                initialParticleData[off + 1] = (Math.random() - 0.5) * 10;
                initialParticleData[off + 2] = (Math.random() - 0.5) * 10;
                initialParticleData[off + 3] = Math.random() * 0.5 + 0.1; 

                // pos_old (xyz, w=life)
                initialParticleData[off + 4] = initialParticleData[off + 0];
                initialParticleData[off + 5] = initialParticleData[off + 1];
                initialParticleData[off + 6] = initialParticleData[off + 2];
                initialParticleData[off + 7] = 1.0;

                // color (rgba) - S-Tier Platinum (#e4e0db -> 0.894, 0.878, 0.859)
                initialParticleData[off + 8] = 0.894; // r
                initialParticleData[off + 9] = 0.878; // g
                initialParticleData[off + 10] = 0.859; // b (Platinum Warmth)
                initialParticleData[off + 11] = 0.6; // a (Translucent "Dust")

                // velocity_field (flow, w=turb)
                initialParticleData[off + 12] = 0;
                initialParticleData[off + 13] = 0;
                initialParticleData[off + 14] = 0;
                initialParticleData[off + 15] = Math.random();
            }

            const particleBufferA = device.createBuffer({
                size: totalBufferSize,
                usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
                mappedAtCreation: true,
            });
            new Float32Array(particleBufferA.getMappedRange()).set(initialParticleData);
            particleBufferA.unmap();

            const particleBufferB = device.createBuffer({
                size: totalBufferSize,
                usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
            });

            // --- 2b. Generate Target Points ---
            const getMultiTargetPoints = (count: number): Float32Array => {
                const offscreen = document.createElement('canvas');
                offscreen.width = 1000;
                offscreen.height = 300;
                const ctx = offscreen.getContext('2d');
                
                const labels = [
                    'SPHERE', // Shape 0 (Original)
                    'IMOVEL', 
                    'AUTO', 
                    'PESADOS', 
                    'MOTOS', 
                    'SERVICOS', 
                    'CORP'
                ];

                const totalData = new Float32Array(count * 4 * labels.length);

                labels.forEach((label, labelIdx) => {
                    if (!ctx) return;
                    
                    // Clear and Draw
                    ctx.fillStyle = 'black';
                    ctx.fillRect(0, 0, 1000, 300);

                    if (label === 'SPHERE') {
                        // For Sphere, we keep it empty to trigger the fallback logic below
                    } else {
                        ctx.fillStyle = 'white';
                        ctx.font = '900 160px Arial, sans-serif'; 
                        ctx.textAlign = 'center';
                        ctx.textBaseline = 'middle';
                        ctx.fillText(label, 500, 150);
                    }

                    const imageData = ctx.getImageData(0, 0, 1000, 300);
                    const data = imageData.data;
                    const points: number[] = [];

                    for (let y = 0; y < 300; y += 4) { 
                        for (let x = 0; x < 1000; x += 4) {
                            const i = (y * 1000 + x) * 4;
                            if (data[i] > 100) {
                                points.push((x - 500) / 20, -(y - 150) / 20);
                            }
                        }
                    }

                    // Fill segments of the total buffer
                    const shapeOffset = labelIdx * count * 4;
                    for (let i = 0; i < count; i++) {
                        const off = shapeOffset + (i * 4);
                        if (points.length > 0) {
                            const rndIdx = Math.floor(Math.random() * (points.length / 2)) * 2;
                            totalData[off + 0] = points[rndIdx];
                            totalData[off + 1] = points[rndIdx + 1];
                            totalData[off + 2] = (Math.random() - 0.5) * 4.0;
                        } else {
                            // Perfect Sphere Logic
                            const phi = Math.acos(1 - 2 * Math.random());
                            const theta = 2 * Math.PI * Math.random();
                            const r = 8 + (Math.random() - 0.5) * 1.5; 
                            totalData[off + 0] = r * Math.sin(phi) * Math.cos(theta);
                            totalData[off + 1] = r * Math.sin(phi) * Math.sin(theta);
                            totalData[off + 2] = r * Math.cos(phi);
                        }
                        totalData[off + 3] = 0;
                    }
                });

                return totalData;
            };

            const targetPointsData = getMultiTargetPoints(PARTICLE_COUNT);
            const targetBuffer = device.createBuffer({
                size: targetPointsData.byteLength,
                usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
                mappedAtCreation: true,
            });
            new Float32Array(targetBuffer.getMappedRange()).set(targetPointsData);
            targetBuffer.unmap();

            // SimParams
            const simParamsBufferSize = 80; 
            const simParamsBuffer = device.createBuffer({
                size: simParamsBufferSize,
                usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
            });

            // Render Uniforms
            const renderUniformsBufferSize = 64 + 16 + 16; // Mat4 + Vec3 + Pad
            const renderUniformsBuffer = device.createBuffer({
                size: renderUniformsBufferSize,
                usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
            });

            // --- 2c. Generate Dust Texture (Procedural) ---
            const getDustTexture = (): Uint8ClampedArray | Uint8Array => {
                const size = 128; // Power of 2
                const canvas = document.createElement('canvas');
                canvas.width = size;
                canvas.height = size;
                const ctx = canvas.getContext('2d');
                if (!ctx) return new Uint8ClampedArray(size * size * 4);

                // 1. Clear with transparent
                ctx.clearRect(0, 0, size, size);

                // 2. DIAMOND CLEANSE: Pure Soft Light (No Dust Artifacts)
                const center = size / 2;
                const grad = ctx.createRadialGradient(center, center, 0, center, center, center);
                grad.addColorStop(0.0, 'rgba(255, 255, 255, 1.0)'); // Pure Hot Core
                grad.addColorStop(0.15, 'rgba(255, 255, 255, 0.9)'); // High brightness area
                grad.addColorStop(0.4, 'rgba(255, 255, 255, 0.3)'); // Soft aura
                grad.addColorStop(1.0, 'rgba(0, 0, 0, 0)');         // Smooth falloff

                ctx.fillStyle = grad;
                ctx.globalCompositeOperation = 'source-over';
                ctx.beginPath();
                ctx.arc(center, center, center, 0, Math.PI * 2);
                ctx.fill();

                // REMOVED: Dust Artifacts Loop (The "Dirty" Look source)
                // We want pure light, not dirt.

                return ctx.getImageData(0, 0, size, size).data;
            };

            const dustData = getDustTexture();
            
            const spriteTexture = device.createTexture({
                size: [128, 128],
                format: 'rgba8unorm',
                usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT,
            });
            
            device.queue.writeTexture(
                { texture: spriteTexture },
                dustData.buffer,
                { bytesPerRow: 128 * 4 },
                [128, 128]
            );

            const spriteSampler = device.createSampler({
                magFilter: 'linear',
                minFilter: 'linear',
            });


            // --- 3. Compute Pipeline ---
            const computeBindGroupLayout = device.createBindGroupLayout({
                entries: [
                    { binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },
                    { binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },
                    { binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' } },
                    { binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'read-only-storage' } },
                ],
            });

            const computePipeline = device.createComputePipeline({
                layout: device.createPipelineLayout({ bindGroupLayouts: [computeBindGroupLayout] }),
                compute: {
                    module: physicsModule,
                    entryPoint: 'simulate',
                },
            });

            // --- 4. Render Pipeline ---
            const renderBindGroupLayout = device.createBindGroupLayout({
                entries: [
                    { binding: 0, visibility: GPUShaderStage.VERTEX, buffer: { type: 'read-only-storage' } },
                    { binding: 1, visibility: GPUShaderStage.VERTEX, buffer: { type: 'uniform' } },
                    { binding: 2, visibility: GPUShaderStage.FRAGMENT, sampler: {} },
                    { binding: 3, visibility: GPUShaderStage.FRAGMENT, texture: {} },
                ],
            });

            const renderPipeline = device.createRenderPipeline({
                layout: device.createPipelineLayout({ bindGroupLayouts: [renderBindGroupLayout] }),
                vertex: {
                    module: renderModule,
                    entryPoint: 'vs_main',
                },
                fragment: {
                    module: renderModule,
                    entryPoint: 'fs_main',
                    targets: [{
                        format: presentationFormat,
                        blend: { // Alpha Blending (Dark on Light)
                            color: {
                                srcFactor: 'src-alpha',
                                dstFactor: 'one-minus-src-alpha',
                                operation: 'add',
                            },
                            alpha: {
                                srcFactor: 'one',
                                dstFactor: 'one-minus-src-alpha',
                                operation: 'add',
                            },
                        }
                    }],
                },
                primitive: {
                    topology: 'triangle-strip',
                },
            });

            // --- 5. Bind Groups (Ping Pong) ---
            const bindGroups = [
                device.createBindGroup({
                    layout: computeBindGroupLayout,
                    entries: [
                        { binding: 0, resource: { buffer: particleBufferA } },
                        { binding: 1, resource: { buffer: particleBufferB } },
                        { binding: 2, resource: { buffer: simParamsBuffer } },
                        { binding: 3, resource: { buffer: targetBuffer } },
                    ],
                }),
                device.createBindGroup({
                    layout: computeBindGroupLayout,
                    entries: [
                        { binding: 0, resource: { buffer: particleBufferB } },
                        { binding: 1, resource: { buffer: particleBufferA } },
                        { binding: 2, resource: { buffer: simParamsBuffer } },
                        { binding: 3, resource: { buffer: targetBuffer } },
                    ],
                }),
            ];

            const renderBindGroups = [
                device.createBindGroup({
                    layout: renderBindGroupLayout,
                    entries: [
                        { binding: 0, resource: { buffer: particleBufferA } },
                        { binding: 1, resource: { buffer: renderUniformsBuffer } },
                        { binding: 2, resource: spriteSampler },
                        { binding: 3, resource: spriteTexture.createView() },
                    ],
                }),
                device.createBindGroup({
                    layout: renderBindGroupLayout,
                    entries: [
                        { binding: 0, resource: { buffer: particleBufferB } },
                        { binding: 1, resource: { buffer: renderUniformsBuffer } },
                        { binding: 2, resource: spriteSampler },
                        { binding: 3, resource: spriteTexture.createView() },
                    ],
                }),
            ];


            // --- 6. Loop ---
            let frame = 0;
            const startTime = performance.now();

            const render = () => {
                if (canceled) return;

                const time = (performance.now() - startTime) / 1000;
                const dt = 0.016; // Fixed step for now

                const parseColor = (hex: string) => {
                    const r = parseInt(hex.slice(1, 3), 16) / 255;
                    const g = parseInt(hex.slice(3, 5), 16) / 255;
                    const b = parseInt(hex.slice(5, 7), 16) / 255;
                    return [r, g, b];
                };

                // Update SimParams (Mixed Types)
                const simParamsBufferData = new ArrayBuffer(80); // 20 floats (80 bytes)
                const f32 = new Float32Array(simParamsBufferData);

                f32[0] = dt;
                f32[1] = 0.0; // grav x
                f32[2] = -0.5; // grav y
                f32[3] = 0.0; // grav z
                
                // Mouse Interaction (Live)
                f32[4] = mouseRef.current.x; // mouse x
                f32[5] = mouseRef.current.y; // mouse y
                f32[6] = 0.0; // mouse z
                f32[7] = 3.0; // radius
                f32[8] = 0.96; // damping
                f32[9] = time;
                
                f32[10] = propsRef.current.targetShapeA;
                f32[11] = propsRef.current.targetShapeB;
                f32[12] = propsRef.current.targetLerp;
                f32[13] = propsRef.current.noiseIntensity;
                f32[14] = propsRef.current.explosionSeed;
                const [cr, cg, cb] = parseColor(propsRef.current.baseColor || '#e4e0db'); // Default to Platinum
                f32[15] = cr;
                f32[16] = cg;
                f32[17] = cb;
                f32[18] = 0.6; // Alpha (Opacity) - Boosted to 0.6 for "Diamond" Brightness (Clean White)

                device.queue.writeBuffer(simParamsBuffer, 0, simParamsBufferData);
            
                // Update RenderParams (Camera)
                const aspect = canvas.width / canvas.height;
                const projectionMatrix = mat4.create();
                mat4.perspective(projectionMatrix, Math.PI / 4, aspect, 0.1, 100.0);
                
                const viewMatrix = mat4.create();
                
                // --- S-TIER: ROTATION (CLOCKWISE) ---
                const rotationSpeed = 0.2;
                const radius = 22;
                // Clockwise: +sin for X, +cos for Z (Orbit)
                const camX = Math.sin(time * rotationSpeed) * radius + (Math.sin(time * 0.08) * 1.5); // Rotation + Drift
                const camZ = Math.cos(time * rotationSpeed) * radius; 
                
                // Look at origin (Sphere center)
                mat4.lookAt(viewMatrix, [camX, 2, camZ], [-6, 0, 0], [0, 1, 0]);
                
                const viewProj = mat4.create();
                mat4.multiply(viewProj, projectionMatrix, viewMatrix);

                const renderUniforms = new Float32Array(16 + 4);
                renderUniforms.set(viewProj as Float32Array);
                device.queue.writeBuffer(renderUniformsBuffer, 0, renderUniforms);


                // Encode
                const commandEncoder = device.createCommandEncoder();

                // 1. Compute Pass
                const computePass = commandEncoder.beginComputePass();
                computePass.setPipeline(computePipeline);
                computePass.setBindGroup(0, bindGroups[frame % 2]); // Read A, Write B (even)
                computePass.dispatchWorkgroups(Math.ceil(PARTICLE_COUNT / WORKGROUP_SIZE));
                computePass.end();

                // 2. Render Pass
                const renderPass = commandEncoder.beginRenderPass({
                    colorAttachments: [{
                        view: context.getCurrentTexture().createView(),
                        clearValue: { r: 0.0, g: 0.0, b: 0.0, a: 0.0 }, // Transparent (let CSS background show)
                        loadOp: 'clear',
                        storeOp: 'store',
                    }],
                });
                renderPass.setPipeline(renderPipeline);
                renderPass.setBindGroup(0, renderBindGroups[(frame + 1) % 2]); 
                renderPass.draw(4, PARTICLE_COUNT); // 4 verts per instance
                renderPass.end();

                device.queue.submit([commandEncoder.finish()]);

                frame++;
                animationFrameId = requestAnimationFrame(render);
            };

            animationFrameId = requestAnimationFrame(render);

        };

        init().catch(err => {
            console.error(err);
            setError(err.message);
        });

        return () => {
            canceled = true;
            cancelAnimationFrame(animationFrameId);
        };
    }, [isMobile]);

    // Mouse Tracking State
    const mouseRef = useRef({ x: 0, y: 0 });

    const handlePointerMove = (e: React.PointerEvent) => {
        // Normalize to -1..1
        const x = (e.clientX / window.innerWidth) * 2 - 1;
        const y = -(e.clientY / window.innerHeight) * 2 + 1;
        
        // Map to World Space (Approximate)
        mouseRef.current = { x: x * 20, y: y * 10 }; // Scale to match scene bounds
    };

    if (error || isMobile) {
        // Fallback for non-WebGPU devices or mobile
        return (
            <div className="w-full h-screen relative overflow-hidden bg-[#0d0e13]">
                 {/* Volumetric Gradient Simulation */}
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,_rgba(228,224,219,0.15)_0%,_rgba(13,14,19,1)_70%)]" />
                 
                 <div className="s-grid relative z-10 h-full content-center px-[5vw]">
                    <div className="col-span-12">
                         <span className="text-label block mb-[4vw] opacity-60 tracking-widest uppercase text-xs">
                            <div className="u-clip-parent"><span className="u-clip-child">Wealth Management</span></div>
                        </span>
                        <h1 className="text-hero leading-[0.9]">
                            <div className="u-clip-parent mb-[1vw]"><span className="u-clip-child text-white text-[15vw] font-light tracking-[-0.03em]">Certum</span></div>
                            <div className="u-clip-parent"><span className="u-clip-child text-accent text-[15vw] font-light tracking-[-0.03em]">Prime</span></div>
                        </h1>
                        <div className="mt-[6vw] max-w-[80vw] text-white/60">
                             <div className="u-clip-parent"><span className="u-clip-child text-[1.1rem] leading-[1.4]">
                                Não preservamos patrimônio.<br />Criamos.
                            </span></div>
                        </div>
                    </div>
                 </div>
            </div>
        );
    }

    return (
        <div ref={containerRef} className="w-full h-screen relative overflow-hidden bg-background">
            
            {/* CSS Grid Background (Desktop) - Enhanced Visibility & Neutrality */}
            <div 
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, #ffffff 1px, transparent 1px),
                        linear-gradient(to bottom, #ffffff 1px, transparent 1px)
                    `,
                    backgroundSize: '80px 80px',
                    opacity: 0.05 // Subtle grid
                }}
            />

            {/* LAYER 1: CANVAS (THE SPHERE) */}
            <div id="canvas-container" className="absolute inset-0 w-full h-full z-(--z-canvas) opacity-0">
                <canvas 
                    ref={canvasRef} 
                    className="absolute inset-0 w-full h-full block touch-none cursor-crosshair"
                    width={dimensions.width} 
                    height={dimensions.height}
                    onPointerMove={handlePointerMove}
                />
            </div>

            <div className="s-grid relative z-(--z-content) h-full content-center pointer-events-none px-[5vw]">
                <div className="col-span-12 md:col-span-9 pointer-events-auto">
                    
                    <span className="text-label">
                        <div className="u-clip-parent"><span className="u-clip-child">Wealth Management</span></div>
                    </span>

                    <h1 className="text-hero">
                        <div className="u-clip-parent"><span className="u-clip-child text-(--color-light)">
                            {/* Force Platinum Color for Certum */}
                            <ScrambleText text="Certum" delay={600} />
                        </span></div>
                        <div className="u-clip-parent"><span className="u-clip-child text-(--color-light)">
                            {/* Prime starts Platinum, resolves to White */}
                            <ScrambleText text="Prime" finishedClassName="text-[var(--color-white)]" delay={800} />
                        </span></div>
                    </h1>

                    <div className="text-hero-desc text-[var(--font-s-p)] max-w-[80vw] md:max-w-[24vw] mt-[4vw] md:mt-[2vw] text-white/80">
                        <div className="u-clip-parent"><span className="u-clip-child">
                            Não preservamos patrimônio. Criamos.
                        </span></div>
                    </div>

                </div>
            </div>

        </div>
    );
}
