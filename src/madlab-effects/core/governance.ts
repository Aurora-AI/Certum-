// src/madlab-effects/core/governance.ts

export type QualityTier = 'HIGH' | 'MEDIUM' | 'LOW';

export const InteractionThresholds = {
    HOVER_DELAY_MS: 200, // Ignore quick pass-overs
    SCROLL_DELTA_PX: 3,  // Ignore micro-jitters
    IDLE_TIMEOUT_MS: 2000 // Return to baseline after 2s
};

export const AmplitudeCaps = {
    WELL_STRENGTH: 0.8, // Never 1.0 (too aggressive)
    SHADOW_PRESSURE: 1.5, // Max multiplier
    WARP_INTENSITY: 0.1 // Max vertex displacement
};

class PerformanceGovernor {
    private fpsHistory: number[] = [];
    private historySize = 60;
    currentTier: QualityTier = 'HIGH';
    private lastFrameTime = 0;
    
    // Thresholds
    private readonly DOWNGRADE_THRESHOLD = 45;

    constructor() {
        if (typeof window !== 'undefined') {
            this.detectHardware();
        }
    }

    private detectHardware() {
        const cores = navigator.hardwareConcurrency || 4;
        // @ts-ignore
        const memory = navigator.deviceMemory || 4;
        if (cores < 4 || memory < 4) {
            this.currentTier = 'MEDIUM';
        }
    }

    public update(time: number) {
        const delta = time - this.lastFrameTime;
        this.lastFrameTime = time;
        const fps = 1000 / delta;
        
        if (isFinite(fps)) {
             this.fpsHistory.push(fps);
             if (this.fpsHistory.length > this.historySize) {
                 this.fpsHistory.shift();
                 this.evaluateTier();
             }
        }
    }

    private evaluateTier() {
        const avgFps = this.fpsHistory.reduce((a, b) => a + b, 0) / this.fpsHistory.length;

        if (this.currentTier === 'HIGH' && avgFps < this.DOWNGRADE_THRESHOLD) {
            this.currentTier = 'MEDIUM';
            console.warn('[MadLab Governor] Downgrading to MEDIUM tier due to low FPS:', avgFps.toFixed(1));
        } else if (this.currentTier === 'MEDIUM' && avgFps < 30) {
            this.currentTier = 'LOW';
            console.warn('[MadLab Governor] Downgrading to LOW tier due to critical FPS:', avgFps.toFixed(1));
        }
    }

    public shouldSimulatePhysics(): boolean {
        return this.currentTier !== 'LOW';
    }
}

export const performanceGovernor = new PerformanceGovernor();

import { useState, useEffect } from 'react';

export const useReducedMotion = (): boolean => {
    const [matches, setMatches] = useState(false);
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        setMatches(mediaQuery.matches);
        const handleChange = (e: MediaQueryListEvent) => setMatches(e.matches);
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);
    return matches;
};
