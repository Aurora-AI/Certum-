'use client';

import dynamic from 'next/dynamic';

const WebGPUBarrierParticles = dynamic(
    () => import('@/components/canvas/WebGPUBarrierParticles'), 
    { ssr: false }
);

export default function WebGPUTestPage() {
    return (
        <main className="w-full h-screen bg-black relative overflow-hidden">
            <div className="absolute top-4 left-4 z-10 text-white font-mono pointer-events-none">
                <h1 className="text-xl font-bold">WebGPU Infrastructure Test</h1>
                <p className="text-sm opacity-70">
                    Verlet Integration + Vertex Pulling + Compute Shaders
                </p>
                <p className="text-xs text-blue-400 mt-2">
                    Requirements: Chrome 113+ / Edge / Firefox Nightly (with flag)
                </p>
            </div>
            <WebGPUBarrierParticles />
        </main>
    );
}
