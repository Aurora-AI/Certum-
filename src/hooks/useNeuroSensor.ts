import { useEffect, useRef } from 'react';

type NeuroSignal = {
  velocity: number;
  jitter: number;
  dwellTime: number;
  hoverTarget: string | null;
  timestamp: number;
};

export const useNeuroSensor = (onSignal: (data: NeuroSignal) => void) => {
  const lastPos = useRef({ x: 0, y: 0, time: 0 });
  const dwellStart = useRef<number>(0);
  const hoverTarget = useRef<string | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      const dt = now - lastPos.current.time;
      const dx = e.clientX - lastPos.current.x;
      const dy = e.clientY - lastPos.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      const velocity = dt > 0 ? dist / dt : 0; // px/ms

      // Simplified Jitter detection (erratic changes in direction)
      // For MVP, we use velocity variance or rapid small movements
      const jitter = velocity > 0.5 && dist < 5 ? 1 : 0; 

      // Dwell Time Logic
      const target = (e.target as HTMLElement).getAttribute('data-neuro-target');
      if (target !== hoverTarget.current) {
        hoverTarget.current = target;
        dwellStart.current = now;
      }
      const dwellTime = target ? now - dwellStart.current : 0;

      // Telemetry Packet
      const signal: NeuroSignal = {
        velocity,
        jitter,
        dwellTime,
        hoverTarget: hoverTarget.current,
        timestamp: now
      };

      // Throttle signal sending (e.g., only on significant events or intervals)
      // For now, we just pass raw data to the callback which handles batching
      if (Math.random() > 0.95 || dwellTime > 2000) { // Random sampling for MVP to avoid flooding
         onSignal(signal);
      }

      lastPos.current = { x: e.clientX, y: e.clientY, time: now };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [onSignal]);
};
