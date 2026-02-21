'use client';

import React, { useRef, useEffect, useState, useLayoutEffect } from 'react';
import Link from 'next/link';
import { mat4 } from 'gl-matrix';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PHYSICS_WGSL, RENDER_WGSL } from '../../canvas/webgpu/shaderData';

// Register GSAP Plugins
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

// Constants
const PARTICLE_COUNT = 8000; // Optimal for a dense monolith
const WORKGROUP_SIZE = 64;

// --- SCRAMBLE TEXT COMPONENT ---
const ScrambleText = ({ text, delay = 0 }: { text: string, delay?: number }) => {
    const [display, setDisplay] = useState(text);
    const [progress, setProgress] = useState(0);
    
    useEffect(() => {
        let frameRequest: number;
        let startTime: number;
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        const duration = 1200; 
        
        const animate = (time: number) => {
            if (!startTime) startTime = time;
            const currentProgress = (time - startTime) / duration;
            setProgress(currentProgress);
            
            if (currentProgress >= 1) {
                setDisplay(text);
                return;
            }
            
            const revealIndex = Math.floor(currentProgress * text.length);
            const scrambled = text.split('').map((char, i) => {
                if (i < revealIndex) return char;
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

    return <span className={progress >= 1 ? "text-white" : "text-accent"}>{display}</span>; 
};

export default function ConsortiumHero() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLElement>(null);
    const ctaRefs = useRef<(HTMLButtonElement | HTMLAnchorElement | null)[]>([]);
    const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });

    // --- S-TIER: GSAP SEQUENCE ---
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const S_TIER_EASE = "cubic-bezier(0.16, 1, 0.3, 1)";

            const tl = gsap.timeline({ defaults: { ease: S_TIER_EASE, duration: 1.8 } });

            tl.fromTo("#monolith-canvas", 
                { opacity: 0, scale: 0.8 }, 
                { opacity: 1, scale: 1, duration: 2.2, ease: "power2.out" }
            )
            .fromTo(".text-reveal", { y: "100%", opacity: 0 }, { y: "0%", opacity: 1, stagger: 0.1 }, "-=1.5")
            .fromTo(".cta-reveal", { y: "40px", opacity: 0 }, { y: "0%", opacity: 1 }, "-=1.2");

            // Halo Exit Effect
            gsap.to(containerRef.current, {
                scale: 0.95,
                opacity: 0.1,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom center",
                    scrub: true
                }
            });
        }, containerRef);
        
        return () => ctx.revert();
    }, []);

    // --- WEBGPU ENGINE (MONOLITH SPECIAL) ---
    useEffect(() => {
        if (typeof window === 'undefined' || !navigator.gpu || window.innerWidth < 768) return;
        
        let canceled = false;
        let animationFrameId: number;

        const init = async () => {
            const adapter = await navigator.gpu.requestAdapter();
            const device = await adapter?.requestDevice();
            if (!device || !canvasRef.current) return;

            const context = canvasRef.current.getContext('webgpu');
            const presentationFormat = navigator.gpu.getPreferredCanvasFormat();
            context?.configure({ device, format: presentationFormat, alphaMode: 'premultiplied' });

            const physicsModule = device.createShaderModule({ code: PHYSICS_WGSL });
            const renderModule = device.createShaderModule({ code: RENDER_WGSL });

            // Buffers
            const initialData = new Float32Array(PARTICLE_COUNT * 16);
            for (let i = 0; i < PARTICLE_COUNT; i++) {
                const off = i * 16;
                initialData[off + 0] = (Math.random() - 0.5) * 5;
                initialData[off + 1] = (Math.random() - 0.5) * 10;
                initialData[off + 2] = (Math.random() - 0.5) * 5;
                initialData[off + 3] = Math.random() * 0.4 + 0.1; // size
                initialData[off + 4] = initialData[off + 0];
                initialData[off + 7] = 1.0;
                initialData[off + 8] = 0.78; // gold r
                initialData[off + 9] = 0.66; // gold g
                initialData[off + 10] = 0.52; // gold b
                initialData[off + 11] = 0.7; // a
            }

            const bufA = device.createBuffer({ size: initialData.byteLength, usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST, mappedAtCreation: true });
            new Float32Array(bufA.getMappedRange()).set(initialData);
            bufA.unmap();
            const bufB = device.createBuffer({ size: initialData.byteLength, usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST });

            // Monolith Target (Pillar Shape)
            const targetData = new Float32Array(PARTICLE_COUNT * 4);
            for (let i = 0; i < PARTICLE_COUNT; i++) {
                const theta = Math.random() * Math.PI * 2;
                const r = 2.5 + Math.random() * 0.5;
                const h = (Math.random() - 0.5) * 12;
                targetData[i * 4 + 0] = r * Math.cos(theta);
                targetData[i * 4 + 1] = h;
                targetData[i * 4 + 2] = r * Math.sin(theta);
            }
            const targetBuf = device.createBuffer({ size: targetData.byteLength, usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST, mappedAtCreation: true });
            new Float32Array(targetBuf.getMappedRange()).set(targetData);
            targetBuf.unmap();

            const simParamsBuf = device.createBuffer({ size: 80, usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST });
            const renderUniformsBuf = device.createBuffer({ size: 96, usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST });

            const computeBindLayout = device.createBindGroupLayout({
                entries: [
                    { binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },
                    { binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },
                    { binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' } },
                    { binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'read-only-storage' } }
                ]
            });

            const computePipe = device.createComputePipeline({
                layout: device.createPipelineLayout({ bindGroupLayouts: [computeBindLayout] }),
                compute: { module: physicsModule, entryPoint: 'simulate' }
            });

            const getDustTexture = () => {
                const s = 64;
                const c = document.createElement('canvas');
                c.width = s; c.height = s;
                const ctx = c.getContext('2d');
                if (!ctx) return new Uint8Array(0);
                const g = ctx.createRadialGradient(s/2, s/2, 0, s/2, s/2, s/2);
                g.addColorStop(0, 'white'); g.addColorStop(0.5, 'rgba(255,255,255,0.2)'); g.addColorStop(1, 'transparent');
                ctx.fillStyle = g; ctx.fillRect(0,0,s,s);
                return ctx.getImageData(0,0,s,s).data;
            };
            const spriteTex = device.createTexture({ size: [64,64], format: 'rgba8unorm', usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST });
            device.queue.writeTexture({ texture: spriteTex }, getDustTexture(), { bytesPerRow: 64 * 4 }, [64,64]);
            const sampler = device.createSampler({ magFilter: 'linear', minFilter: 'linear' });

            const computeBindGroups = [
                device.createBindGroup({ layout: computeBindLayout, entries: [{ binding: 0, resource: { buffer: bufA } }, { binding: 1, resource: { buffer: bufB } }, { binding: 2, resource: { buffer: simParamsBuf } }, { binding: 3, resource: { buffer: targetBuf } }] }),
                device.createBindGroup({ layout: computeBindLayout, entries: [{ binding: 0, resource: { buffer: bufB } }, { binding: 1, resource: { buffer: bufA } }, { binding: 2, resource: { buffer: simParamsBuf } }, { binding: 3, resource: { buffer: targetBuf } }] }),
            ];

            const renderBindLayout = device.createBindGroupLayout({
                entries: [
                    { binding: 0, visibility: GPUShaderStage.VERTEX, buffer: { type: 'read-only-storage' } },
                    { binding: 1, visibility: GPUShaderStage.VERTEX, buffer: { type: 'uniform' } },
                    { binding: 2, visibility: GPUShaderStage.FRAGMENT, sampler: {} },
                    { binding: 3, visibility: GPUShaderStage.FRAGMENT, texture: {} }
                ]
            });

            const renderPipe = device.createRenderPipeline({
                layout: device.createPipelineLayout({ bindGroupLayouts: [renderBindLayout] }),
                vertex: { module: renderModule, entryPoint: 'vs_main' },
                fragment: { 
                    module: renderModule, 
                    entryPoint: 'fs_main', 
                    targets: [{ 
                        format: presentationFormat, 
                        blend: { 
                            color: { srcFactor: 'src-alpha', dstFactor: 'one', operation: 'add' }, 
                            alpha: { srcFactor: 'one', dstFactor: 'one', operation: 'add' } 
                        } 
                    }] 
                },
                primitive: { topology: 'triangle-strip' }
            });

            const renderBindGroups = [
                device.createBindGroup({ layout: renderBindLayout, entries: [{ binding: 0, resource: { buffer: bufA } }, { binding: 1, resource: { buffer: renderUniformsBuf } }, { binding: 2, resource: sampler }, { binding: 3, resource: spriteTex.createView() }] }),
                device.createBindGroup({ layout: renderBindLayout, entries: [{ binding: 0, resource: { buffer: bufB } }, { binding: 1, resource: { buffer: renderUniformsBuf } }, { binding: 2, resource: sampler }, { binding: 3, resource: spriteTex.createView() }] }),
            ];

            let frame = 0;
            const renderLoop = () => {
                if (canceled) return;
                const time = performance.now() / 1000;
                
                const params = new Float32Array(20);
                params[0] = 0.016; params[9] = time; params[12] = 1.0;
                params[15] = 0.78; params[16] = 0.66; params[17] = 0.52; 
                device.queue.writeBuffer(simParamsBuf, 0, params);

                const viewProj = mat4.create();
                mat4.perspective(viewProj, Math.PI / 4, dimensions.width / dimensions.height, 0.1, 100);
                const view = mat4.create();
                const camX = Math.sin(time * 0.15) * 22;
                const camZ = Math.cos(time * 0.15) * 22;
                mat4.lookAt(view, [camX, 2, camZ], [0, 0, 0], [0, 1, 0]);
                mat4.multiply(viewProj, viewProj, view);
                device.queue.writeBuffer(renderUniformsBuf, 0, viewProj as Float32Array);

                const commandEncoder = device.createCommandEncoder();
                const computePass = commandEncoder.beginComputePass();
                computePass.setPipeline(computePipe);
                computePass.setBindGroup(0, computeBindGroups[frame % 2]);
                computePass.dispatchWorkgroups(Math.ceil(PARTICLE_COUNT / WORKGROUP_SIZE));
                computePass.end();

                const renderPass = commandEncoder.beginRenderPass({
                    colorAttachments: [{
                        view: context!.getCurrentTexture().createView(),
                        clearValue: { r: 0, g: 0, b: 0, a: 0 },
                        loadOp: 'clear', storeOp: 'store'
                    }]
                });
                renderPass.setPipeline(renderPipe);
                renderPass.setBindGroup(0, renderBindGroups[(frame + 1) % 2]);
                renderPass.draw(4, PARTICLE_COUNT);
                renderPass.end();

                device.queue.submit([commandEncoder.finish()]);
                frame++;
                animationFrameId = requestAnimationFrame(renderLoop);
            };
            renderLoop(); 
        };
        init();
        return () => { canceled = true; cancelAnimationFrame(animationFrameId); };
    }, [dimensions]);


    return (
        <section ref={containerRef} className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-[#0d0e13]">
            
            {/* Liquid Capital Monolith Canvas */}
            <div id="monolith-canvas" className="absolute inset-0 z-0">
                <canvas 
                    ref={canvasRef} 
                    className="w-full h-full block" 
                    width={dimensions.width} 
                    height={dimensions.height} 
                />
            </div>

            {/* Grid Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

            {/* Hero Content */}
            <div className="relative z-10 max-w-5xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-10 bg-white/5 border border-white/10 rounded-full backdrop-blur-xl animate-fade-in">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                    <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-body">Wealth Intelligence</span>
                </div>

                <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-tight mb-8">
                    <div className="overflow-hidden">
                        <div className="text-reveal">
                            <ScrambleText text="Arquitetura de" delay={600} />
                        </div>
                    </div>
                    <div className="overflow-hidden">
                        <div className="text-reveal italic text-accent">
                            <ScrambleText text="Aquisição" delay={1000} />
                        </div>
                    </div>
                </h1>

                <p className="text-reveal text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-16 font-body leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}>
                    Eficiência e alavancagem estruturada para multiplicação patrimonial. 
                    Transformamos capital em herança através de engenharia financeira de precisão.
                </p>

                <div className="cta-reveal flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <button className="group relative px-10 py-4 bg-accent text-dark rounded-full font-serif font-bold overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95">
                        <span className="relative z-10">Explorar Estruturas</span>
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
                    </button>
                    
                    <Link href="#contato" className="text-white/60 hover:text-white transition-colors font-serif italic text-lg tracking-wide border-b border-white/10 pb-1">
                        Consultoria Estratégica
                    </Link>
                </div>
            </div>

            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-20 animate-bounce">
                <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
            </div>
        </section>
    );
}
