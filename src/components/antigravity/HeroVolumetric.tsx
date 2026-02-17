'use client';

import React, { useRef, useEffect, useState } from 'react';
import { mat4 } from 'gl-matrix';
import { PHYSICS_WGSL, RENDER_WGSL } from '../canvas/webgpu/shaderData';

// Constants
const PARTICLE_COUNT = 10000; // Start with 10k for verification
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

export default function WebGPUBarrierParticles() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [error, setError] = useState<string | null>(null);
    const isMobile = useIsMobile();

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
            
            // Particle Struct: 4 vec4s = 4 * 4 * 4 bytes = 64 bytes
            const particleSize = 64;
            const totalBufferSize = particleSize * PARTICLE_COUNT;

            // Initial Data
            const initialParticleData = new Float32Array(PARTICLE_COUNT * 16); // 16 floats per particle
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

                // color (rgba) - Pure Black for Maximum Contrast
                initialParticleData[off + 8] = 0.0; // r (Pure Black)
                initialParticleData[off + 9] = 0.0; // g
                initialParticleData[off + 10] = 0.0; // b
                initialParticleData[off + 11] = 0.9 + Math.random() * 0.1; // a (Very High opacity)

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

            // --- 2b. Generate Target Points (Logo with Fallback) ---
            const getLogoPoints = (count: number): Float32Array => {
                const offscreen = document.createElement('canvas');
                offscreen.width = 1000;
                offscreen.height = 300;
                const ctx = offscreen.getContext('2d');
                
                // Fallback (Cube) function
                const getCube = () => {
                    const data = new Float32Array(count * 4);
                    for(let i=0; i<count; i++) {
                        const off = i*4;
                        data[off+0] = (Math.random()-0.5)*15;
                        data[off+1] = (Math.random()-0.5)*15;
                        data[off+2] = (Math.random()-0.5)*15;
                    }
                    return data;
                };

                if (!ctx) return getCube();

                // Draw Text
                ctx.fillStyle = 'black';
                ctx.fillRect(0, 0, 1000, 300);
                
                ctx.fillStyle = 'white';
                ctx.font = '900 200px Arial, sans-serif'; // Ultra-Safe
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText('CERTUM', 500, 150);

                const imageData = ctx.getImageData(0, 0, 1000, 300);
                const data = imageData.data;
                const points: number[] = [];

                // Collect valid pixels
                for (let y = 0; y < 300; y += 2) { // denser scan
                    for (let x = 0; x < 1000; x += 2) {
                        const i = (y * 1000 + x) * 4;
                        if (data[i] > 100) { // If pixel is bright (Red channel)
                            // Map to World Space (-20..20)
                            const wx = (x - 500) / 20; // Scale 20
                            const wy = -(y - 150) / 20; // Flip Y
                            points.push(wx, wy);
                        }
                    }
                }
                
                console.log(`[FlowField] Found ${points.length / 2} text points.`);

                if (points.length < 100) {
                    console.warn("[FlowField] Text generation failed (too few points). Using Cube fallback.");
                    return getCube();
                }

                // Fill buffer
                const targetData = new Float32Array(count * 4);
                for (let i = 0; i < count; i++) {
                    const off = i * 4;
                    // Randomly sample from points
                    const rndIdx = Math.floor(Math.random() * (points.length / 2)) * 2;
                    targetData[off + 0] = points[rndIdx];
                    targetData[off + 1] = points[rndIdx + 1];
                    targetData[off + 2] = (Math.random() - 0.5) * 2.0; // small z depth
                    targetData[off + 3] = 0; // padding
                }
                return targetData;
            };

            const targetPointsData = getLogoPoints(PARTICLE_COUNT);
            const targetBuffer = device.createBuffer({
                size: totalBufferSize, // Same size as particles
                usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
                mappedAtCreation: true,
            });
            new Float32Array(targetBuffer.getMappedRange()).set(targetPointsData);
            targetBuffer.unmap();

            // SimParams Uniform Buffer
            // delta_time(f32), gravity(vec3), mouse_pos(vec3), radius(f32), damping(f32), time(f32)
            // Struct alignment is tricky. Let's assume standard layout.
            // 48 bytes approx.
            const simParamsBufferSize = 64; // Safe size
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

                // 2. Soft Glow Core (Radial Gradient)
                const center = size / 2;
                const grad = ctx.createRadialGradient(center, center, 0, center, center, center);
                grad.addColorStop(0.0, 'rgba(255, 255, 255, 1.0)'); // Hot core
                grad.addColorStop(0.2, 'rgba(255, 255, 255, 0.8)'); // Bright aura
                grad.addColorStop(0.5, 'rgba(255, 255, 255, 0.2)'); // Soft falloff
                grad.addColorStop(1.0, 'rgba(0, 0, 0, 0)');         // Fade to zero
                
                ctx.fillStyle = grad;
                ctx.fillRect(0, 0, size, size);

                // 3. Bokeh / Dust Artifacts (Imperfections)
                // Adds that "lens dirt" look
                for (let i = 0; i < 20; i++) {
                    const x = Math.random() * size;
                    const y = Math.random() * size;
                    const r = Math.random() * 2 + 0.5;
                    ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.3})`; // Subtle specs
                    ctx.beginPath();
                    ctx.arc(x, y, r, 0, Math.PI * 2);
                    ctx.fill();
                }

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

            // --- State Locked to Sphere (No Morph) ---
            // Shape is hardcoded to 0 (Sphere) in render loop

            const render = () => {
                if (canceled) return;

                const time = (performance.now() - startTime) / 1000;
                const dt = 0.016; // Fixed step for now

                // Update SimParams (Mixed Types)
                const simParamsBufferData = new ArrayBuffer(64); // 64 bytes
                const f32 = new Float32Array(simParamsBufferData);
                const u32 = new Uint32Array(simParamsBufferData);

                f32[0] = dt;
                f32[1] = 0.0; // grav x
                f32[2] = -0.5; // grav y
                f32[3] = 0.0; // grav z
                
                // Mouse Interaction (Live)
                // We use a mutable ref outside the useEffect enclosure, 
                // but wait, we need access to it.
                // The init function is inside useEffect, so it captures scope.
                // We need a way to read latest mouse. 
                // Let's use a mutable object defined in useEffect scope?
                // OR better: The ref is defined in component scope. 
                
                f32[4] = mouseRef.current.x; // mouse x
                f32[5] = mouseRef.current.y; // mouse y
                f32[6] = 0.0; // mouse z
                f32[7] = 3.0; // radius (increased for visibility)
                f32[8] = 0.96; // damping (Bit more drag for liquid feel)
                f32[9] = time;
                
                // Index 10 is target_shape (u32) - LOCKED TO SPHERE
                u32[10] = 0; // Always Sphere 
                
                // Index 11 is padding
                f32[11] = 0.0;

                device.queue.writeBuffer(simParamsBuffer, 0, simParamsBufferData);
            
                // Update RenderParams (Camera)
                const aspect = canvas.width / canvas.height;
                const projectionMatrix = mat4.create();
                mat4.perspective(projectionMatrix, Math.PI / 4, aspect, 0.1, 100.0);
                
                const viewMatrix = mat4.create();
                // Static camera with subtle drift, offset to show sphere on RIGHT
                const camX = Math.sin(time * 0.08) * 1.5; // Gentle drift
                const camZ = 22; // Pull back
                // Look at [-6, 0, 0] to shift sphere (at origin) to the RIGHT of viewport
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
            // No interval to clear - shape is locked
        };
    }, []);

    // Mouse Tracking State
    const mouseRef = useRef({ x: 0, y: 0 });

    const handlePointerMove = (e: React.PointerEvent) => {
        // Normalize to -1..1
        const x = (e.clientX / window.innerWidth) * 2 - 1;
        const y = -(e.clientY / window.innerHeight) * 2 + 1;
        
        // Map to World Space (Approximate)
        // Camera is at dist ~20, FOV ~45 deg. Visible range ~+/- 8 at z=0 without rotation
        // But we have rotation. Let's send raw NDC or projected values?
        // Simpler: Map directly to world limits (-20..20) for now to see effect
        mouseRef.current = { x: x * 20, y: y * 10 }; // Scale to match scene bounds
    };

    if (error || isMobile) {
        // Fallback for non-WebGPU devices or mobile
        // Returns a white background with subtle light blue grid
        return (
            <div className="w-full h-full relative overflow-hidden bg-white">
                {/* SVG Grid Pattern */}
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="hero-grid" width="50" height="50" patternUnits="userSpaceOnUse">
                            <path 
                                d="M 50 0 L 0 0 0 50" 
                                fill="none" 
                                stroke="#E0F2FE" 
                                strokeWidth="1"
                                opacity="0.3"
                            />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#hero-grid)" />
                </svg>
                
                {/* Animated gradient orbs for visual interest */}
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-sky-100/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
                <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-blue-50/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
            </div>
        );
    }

    return (
        <div className="w-full h-full relative overflow-hidden bg-white">
            {/* CSS Grid Background (Desktop) */}
            <div 
                className="absolute inset-0 w-full h-full"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, #E0F2FE 1px, transparent 1px),
                        linear-gradient(to bottom, #E0F2FE 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px',
                    opacity: 0.3
                }}
            />
            
            {/* WebGPU Canvas (Particles on top of grid) */}
            <canvas 
                ref={canvasRef} 
                className="absolute inset-0 w-full h-full block touch-none cursor-crosshair"
                width={window.innerWidth} 
                height={window.innerHeight}
                onPointerMove={handlePointerMove}
            />
        </div>
    );
}
