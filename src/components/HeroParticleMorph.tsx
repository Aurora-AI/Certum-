'use client';

/**
 * MAD LAB AURORA — HERO PARTICLE MORPH ENGINE v2.2 (CANON)
 * Next.js / React component (client-only) — Three.js InstancedMesh
 *
 * Goals:
 * - SSR-safe (Next)
 * - Container-resize safe (ResizeObserver)
 * - No memory leaks (full cleanup)
 * - Governable styling (CSS vars/tokens instead of hardcoded)
 *
 * Dependency:
 *   npm i three
 */

import React, { useEffect, useMemo, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';

// ─────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────
export type MorphShape = {
  key: string;
  name: string;
  headline?: string;
  src?: string; // URL or data URI
};

type EngineConfig = {
  PARTICLE_COUNT: number;
  MORPH_SPEED: number;
  NOISE_SCALE: number;
  NOISE_AMPLITUDE: number;
  DAMPING: number;
  MOUSE_RADIUS: number;
  MOUSE_STRENGTH: number;
  GRAVITY_Y: number;
  SAMPLE_RES: number;
  WORLD_SCALE: number;
  MAX_DPR: number;
};

type SampledShape = { positions: Float32Array; colors: Float32Array | null };

type Props = {
  images?: MorphShape[];              // shapes after "cloud"
  particleCount?: number;
  autoAdvance?: boolean;
  cycleDuration?: number;
  dark?: boolean;

  className?: string;

  // Optional hooks
  onShapeChange?: (shapeKey: string, index: number) => void;

  // Optional: allow external control (imperative)
  apiRef?: React.MutableRefObject<null | {
    loadShape: (index: number) => void;
    explode: () => void;
    setMode: (mode: InteractionMode) => void;
    setCohesion: (value01: number) => void;
    addImageShape: (file: File | Blob, name?: string) => Promise<string>;
  }>;
};

type InteractionMode = 'repel' | 'attract' | 'orbit';

// ─────────────────────────────────────────────────────────────
// Canon Config (governable; can be overridden by props)
// ─────────────────────────────────────────────────────────────
const DEFAULT_CONFIG: EngineConfig = {
  PARTICLE_COUNT: 6000,
  MORPH_SPEED: 0.018,
  NOISE_SCALE: 0.003,
  NOISE_AMPLITUDE: 0.12,
  DAMPING: 0.93,
  MOUSE_RADIUS: 2.8,
  MOUSE_STRENGTH: 0.07,
  GRAVITY_Y: -0.0002,
  SAMPLE_RES: 512,

  WORLD_SCALE: 5.5,
  MAX_DPR: 2,
};

// ─────────────────────────────────────────────────────────────
// Simplex Noise (2D) — same as your original, kept deterministic
// ─────────────────────────────────────────────────────────────
const F2 = 0.5 * (Math.sqrt(3) - 1);
const G2 = (3 - Math.sqrt(3)) / 6;
const p = [
  151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,
  190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,
  125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,
  105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,
  135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,
  82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,
  153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,
  251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,
  157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,
  66,215,61,156,180
];
const perm = new Uint8Array(512);
const permMod12 = new Uint8Array(512);
for (let i = 0; i < 512; i++) {
  perm[i] = p[i & 255];
  permMod12[i] = perm[i] % 12;
}
const grad3 = [
  [1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]
];

function noise2D(x: number, y: number) {
  const s = (x + y) * F2;
  const i = Math.floor(x + s);
  const j = Math.floor(y + s);
  const t = (i + j) * G2;
  const x0 = x - (i - t);
  const y0 = y - (j - t);

  let i1 = 0, j1 = 1;
  if (x0 > y0) { i1 = 1; j1 = 0; }

  const x1 = x0 - i1 + G2;
  const y1 = y0 - j1 + G2;
  const x2 = x0 - 1 + 2 * G2;
  const y2 = y0 - 1 + 2 * G2;

  const ii = i & 255;
  const jj = j & 255;

  const gi0 = permMod12[ii + perm[jj]];
  const gi1 = permMod12[ii + i1 + perm[jj + j1]];
  const gi2 = permMod12[ii + 1 + perm[jj + 1]];

  let n0 = 0, n1 = 0, n2 = 0;

  let t0 = 0.5 - x0*x0 - y0*y0;
  if (t0 >= 0) {
    t0 *= t0;
    n0 = t0*t0 * (grad3[gi0][0]*x0 + grad3[gi0][1]*y0);
  }

  let t1 = 0.5 - x1*x1 - y1*y1;
  if (t1 >= 0) {
    t1 *= t1;
    n1 = t1*t1 * (grad3[gi1][0]*x1 + grad3[gi1][1]*y1);
  }

  let t2 = 0.5 - x2*x2 - y2*y2;
  if (t2 >= 0) {
    t2 *= t2;
    n2 = t2*t2 * (grad3[gi2][0]*x2 + grad3[gi2][1]*y2);
  }

  return 70 * (n0 + n1 + n2);
}

// ─────────────────────────────────────────────────────────────
// Sampling
// ─────────────────────────────────────────────────────────────
async function sampleImageToPositions(
  imageSource: string | File | Blob,
  count: number,
  scale: number,
  sampleRes: number
): Promise<SampledShape> {
  return new Promise((resolve) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) {
      const positions = new Float32Array(count * 3);
      resolve({ positions, colors: null });
      return;
    }

    const img = new Image();
    img.crossOrigin = 'anonymous';

    img.onload = () => {
      const aspect = img.width / img.height;
      let w: number, h: number;
      if (aspect > 1) { w = sampleRes; h = Math.round(sampleRes / aspect); }
      else { h = sampleRes; w = Math.round(sampleRes * aspect); }

      canvas.width = w;
      canvas.height = h;

      ctx.clearRect(0, 0, w, h);
      ctx.drawImage(img, 0, 0, w, h);

      const imageData = ctx.getImageData(0, 0, w, h);
      const pixels = imageData.data;

      const validPixels: Array<{ x: number; y: number; r: number; g: number; b: number; a: number }> = [];

      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
          const idx = (y * w + x) * 4;
          const r = pixels[idx], g = pixels[idx + 1], b = pixels[idx + 2], a = pixels[idx + 3];
          if (a > 30) {
            validPixels.push({
              x: (x / w - 0.5) * scale * (aspect > 1 ? 1 : aspect),
              y: -(y / h - 0.5) * scale * (aspect > 1 ? 1 / aspect : 1),
              r, g, b, a,
            });
          }
        }
      }

      const positions = new Float32Array(count * 3);
      const colors = new Float32Array(count * 3);

      if (validPixels.length === 0) {
        for (let i = 0; i < count; i++) {
          positions[i * 3] = (Math.random() - 0.5) * 6;
          positions[i * 3 + 1] = (Math.random() - 0.5) * 4;
          positions[i * 3 + 2] = (Math.random() - 0.5) * 0.5;
          colors[i * 3] = 0.7; colors[i * 3 + 1] = 0.8; colors[i * 3 + 2] = 0.9;
        }
        resolve({ positions, colors });
        return;
      }

      // Weight by darkness (same intent as your code)
      const weighted: typeof validPixels = [];
      for (const px of validPixels) {
        const brightness = (px.r + px.g + px.b) / (3 * 255);
        const weight = Math.max(1, Math.round((1 - brightness * 0.5) * 3));
        for (let k = 0; k < weight; k++) weighted.push(px);
      }
      const pool = weighted.length > 0 ? weighted : validPixels;

      for (let i = 0; i < count; i++) {
        const px = pool[Math.floor(Math.random() * pool.length)];
        positions[i * 3] = px.x + (Math.random() - 0.5) * 0.025;
        positions[i * 3 + 1] = px.y + (Math.random() - 0.5) * 0.025;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 0.35;

        colors[i * 3] = Math.min(1, px.r / 255 + 0.3);
        colors[i * 3 + 1] = Math.min(1, px.g / 255 + 0.3);
        colors[i * 3 + 2] = Math.min(1, px.b / 255 + 0.3);
      }

      resolve({ positions, colors });
    };

    img.onerror = () => {
      const positions = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 6;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 4;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 0.5;
      }
      resolve({ positions, colors: null });
    };

    if (typeof imageSource === 'string') {
      img.src = imageSource;
    } else {
      const reader = new FileReader();
      reader.onload = (e) => { img.src = String(e.target?.result || ''); };
      reader.readAsDataURL(imageSource);
    }
  });
}

// ─────────────────────────────────────────────────────────────
// Procedural Cloud
// ─────────────────────────────────────────────────────────────
function genCloud(count: number): SampledShape {
  const pos = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = 3.5 * Math.pow(Math.random(), 0.4);
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);

    pos[i * 3] = r * Math.sin(phi) * Math.cos(theta) + noise2D(i * 0.1, 0) * 0.5;
    pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.6 + noise2D(0, i * 0.1) * 0.5;
    pos[i * 3 + 2] = r * Math.cos(phi) * 0.3;
  }
  return { positions: pos, colors: null };
}

// ─────────────────────────────────────────────────────────────
// Palette (fallback) — token-driven via CSS vars, not hardcoded hex
// We keep numeric fallback here for safety if tokens are missing.
// ─────────────────────────────────────────────────────────────
const FALLBACK_PALETTE: Array<[number, number, number]> = [
  [0.78, 0.85, 0.91], [0.63, 0.72, 0.82], [0.54, 0.67, 0.78],
  [0.88, 0.91, 0.94], [1, 1, 1], [0.69, 0.77, 0.85],
  [0.47, 0.60, 0.72], [0.82, 0.86, 0.91],
];

function cssVarColor(el: HTMLElement, name: string, fallbackHex: string) {
  const v = getComputedStyle(el).getPropertyValue(name).trim();
  const hex = v || fallbackHex;
  return new THREE.Color(hex);
}

// ─────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────
export default function HeroParticleMorph({
  images = [],
  particleCount = DEFAULT_CONFIG.PARTICLE_COUNT,
  autoAdvance = true,
  cycleDuration = 8000,
  dark = true,
  className = '',
  onShapeChange,
  apiRef,
}: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const roRef = useRef<ResizeObserver | null>(null);

  const [activeShape, setActiveShape] = useState(0);
  const [mode, setMode] = useState<InteractionMode>('repel');

  const shapes = useMemo<MorphShape[]>(() => {
    return [
      { key: 'cloud', name: 'Nuvem', headline: 'Onde matéria encontra ilusão' },
      ...images,
    ];
  }, [images]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Engine config
    const CONFIG: EngineConfig = {
      ...DEFAULT_CONFIG,
      PARTICLE_COUNT: particleCount,
    };

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, CONFIG.MAX_DPR));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    container.appendChild(renderer.domElement);

    // Scene
    const scene = new THREE.Scene();

    // Token-driven colors (fallback-safe)
    const bg = cssVarColor(container, dark ? '--aurora-hero-bg' : '--aurora-hero-bg-light', dark ? '#0a0a0f' : '#f0f0f0');
    const fog = cssVarColor(container, dark ? '--aurora-hero-fog' : '--aurora-hero-fog-light', dark ? '#0a0a0f' : '#f0f0f0');
    scene.background = bg;
    scene.fog = new THREE.FogExp2(fog, 0.06);

    // Camera
    const camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.set(0, 0, 8);

    // Lights (token-driven)
    const ambientColor = cssVarColor(container, '--aurora-hero-ambient', '#b8d0e8');
    const keyColor = cssVarColor(container, '--aurora-hero-key', '#ffffff');
    const fillColor = cssVarColor(container, '--aurora-hero-fill', '#8ab4d6');

    scene.add(new THREE.AmbientLight(ambientColor, 0.5));
    const key = new THREE.DirectionalLight(keyColor, 1.2);
    key.position.set(5, 8, 5);
    scene.add(key);

    const fill = new THREE.DirectionalLight(fillColor, 0.35);
    fill.position.set(-3, 2, -2);
    scene.add(fill);

    // Particles
    const N = CONFIG.PARTICLE_COUNT;
    const geo = new THREE.SphereGeometry(1, 8, 6);

    const particleBaseColor = cssVarColor(container, '--aurora-hero-particle', '#b0c8e0');
    const mat = new THREE.MeshStandardMaterial({
      roughness: 0.4,
      metalness: 0.08,
      color: particleBaseColor,
    });

    const mesh = new THREE.InstancedMesh(geo, mat, N);
    mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    scene.add(mesh);

    // Buffers
    const positions = new Float32Array(N * 3);
    const velocities = new Float32Array(N * 3);
    const targets = new Float32Array(N * 3);
    const sizes = new Float32Array(N);
    const layers = new Uint8Array(N);

    const instanceColors = new Float32Array(N * 3);
    const sourceColors = new Float32Array(N * 3);
    const dummy = new THREE.Object3D();

    // Init (cloud distribution)
    for (let i = 0; i < N; i++) {
      const r = 4.0 * Math.pow(Math.random(), 0.35);
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.6;
      positions[i * 3 + 2] = r * Math.cos(phi) * 0.3;

      targets[i * 3] = positions[i * 3];
      targets[i * 3 + 1] = positions[i * 3 + 1];
      targets[i * 3 + 2] = positions[i * 3 + 2];

      const rng = Math.random();
      if (rng < 0.2) { layers[i] = 0; sizes[i] = 0.035 + Math.random() * 0.02; }
      else if (rng < 0.7) { layers[i] = 1; sizes[i] = 0.02 + Math.random() * 0.015; }
      else { layers[i] = 2; sizes[i] = 0.01 + Math.random() * 0.01; }

      const c = FALLBACK_PALETTE[Math.floor(Math.random() * FALLBACK_PALETTE.length)];
      instanceColors[i * 3] = c[0]; instanceColors[i * 3 + 1] = c[1]; instanceColors[i * 3 + 2] = c[2];
      sourceColors[i * 3] = c[0]; sourceColors[i * 3 + 1] = c[1]; sourceColors[i * 3 + 2] = c[2];
    }

    const colorAttr = new THREE.InstancedBufferAttribute(instanceColors, 3);
    mesh.instanceColor = colorAttr;

    // Mouse interaction (raycast to z=0 plane)
    const mouseNdc = { x: 9999, y: 9999 };
    const mouseWorld = new THREE.Vector3();
    const raycaster = new THREE.Raycaster();
    const planeObj = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);

    // Engine state
    let currentMode: InteractionMode = mode;
    let cohesion = 0.6;          // morphStrength
    let explodeImpulse = 0.0;    // impulse amplitude (0..1)
    let time = 0;
    let lastTs = performance.now();

    // Shape cache
    const shapeCache = new Map<string, SampledShape>();

    function setTargets(data: SampledShape) {
      const pos = data.positions;
      const col = data.colors;

      const srcCount = Math.floor(pos.length / 3);

      for (let i = 0; i < N; i++) {
        if (i < srcCount) {
          targets[i * 3] = pos[i * 3];
          targets[i * 3 + 1] = pos[i * 3 + 1];
          targets[i * 3 + 2] = pos[i * 3 + 2];
        } else {
          const srcIdx = Math.floor(Math.random() * srcCount);
          targets[i * 3] = pos[srcIdx * 3] + (Math.random() - 0.5) * 0.3;
          targets[i * 3 + 1] = pos[srcIdx * 3 + 1] + (Math.random() - 0.5) * 0.3;
          targets[i * 3 + 2] = pos[srcIdx * 3 + 2] + (Math.random() - 0.5) * 0.5;
        }
      }

      if (col && col.length >= 3) {
        const colCount = Math.floor(col.length / 3);
        for (let i = 0; i < N; i++) {
          const ci = (i < colCount) ? i : Math.floor(Math.random() * colCount);
          sourceColors[i * 3] = col[ci * 3];
          sourceColors[i * 3 + 1] = col[ci * 3 + 1];
          sourceColors[i * 3 + 2] = col[ci * 3 + 2];
        }
      } else {
        for (let i = 0; i < N; i++) {
          const c = FALLBACK_PALETTE[Math.floor(Math.random() * FALLBACK_PALETTE.length)];
          sourceColors[i * 3] = c[0]; sourceColors[i * 3 + 1] = c[1]; sourceColors[i * 3 + 2] = c[2];
        }
      }
    }

    async function loadShapeByIndex(index: number) {
      const s = shapes[index];
      if (!s) return;

      if (s.key === 'cloud') {
        setTargets(genCloud(N));
      } else if (shapeCache.has(s.key)) {
        setTargets(shapeCache.get(s.key)!);
      } else if (s.src) {
        const data = await sampleImageToPositions(s.src, N, CONFIG.WORLD_SCALE, CONFIG.SAMPLE_RES);
        shapeCache.set(s.key, data);
        setTargets(data);
      } else {
        setTargets(genCloud(N));
      }

      onShapeChange?.(s.key, index);
    }

    function explode() {
      explodeImpulse = 1.0;
      for (let i = 0; i < N; i++) {
        const dx = positions[i * 3];
        const dy = positions[i * 3 + 1];
        const dist = Math.sqrt(dx * dx + dy * dy) + 0.001;
        const force = (0.5 + Math.random() * 0.5) * 0.3;
        velocities[i * 3] += (dx / dist) * force;
        velocities[i * 3 + 1] += (dy / dist) * force;
        velocities[i * 3 + 2] += (Math.random() - 0.5) * force * 0.5;
      }
    }

    // Event handlers
    const onMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseNdc.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseNdc.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    };

    const onTouch = (e: TouchEvent) => {
      const t = e.touches[0];
      if (!t) return;
      const rect = container.getBoundingClientRect();
      mouseNdc.x = ((t.clientX - rect.left) / rect.width) * 2 - 1;
      mouseNdc.y = -(((t.clientY - rect.top) / rect.height) * 2 - 1);
    };

    const onLeave = () => {
      mouseNdc.x = 9999;
      mouseNdc.y = 9999;
    };

    container.addEventListener('mousemove', onMove);
    container.addEventListener('touchmove', onTouch, { passive: true });
    container.addEventListener('mouseleave', onLeave);
    container.addEventListener('touchend', onLeave);

    // ResizeObserver (container-safe)
    roRef.current = new ResizeObserver(() => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, CONFIG.MAX_DPR));
    });
    roRef.current.observe(container);

    // Imperative API for external control
    if (apiRef) {
      apiRef.current = {
        loadShape: (idx) => void loadShapeByIndex(idx),
        explode,
        setMode: (m) => { currentMode = m; },
        setCohesion: (v01) => { cohesion = Math.max(0, Math.min(1, v01)); },
        addImageShape: async (file) => {
          const key = `custom_${Date.now()}`;
          const data = await sampleImageToPositions(file, N, CONFIG.WORLD_SCALE, CONFIG.SAMPLE_RES);
          shapeCache.set(key, data);
          // NOTE: shapes array is derived from props; we cannot mutate it here.
          // This returns a key for the caller to append to `images` state upstream.
          return key;
        },
      };
    }

    // Animation loop
    const animate = (ts: number) => {
      rafRef.current = requestAnimationFrame(animate);

      const dt = Math.min(0.05, (ts - lastTs) / 1000);
      lastTs = ts;

      time += dt;

      // Camera breathing
      camera.position.x = Math.sin(time * 0.15) * 0.15;
      camera.position.y = Math.cos(time * 0.12) * 0.1;
      camera.lookAt(0, 0, 0);

      // Mouse world
      if (mouseNdc.x < 9000) {
        raycaster.setFromCamera(new THREE.Vector2(mouseNdc.x, mouseNdc.y), camera);
        const intersect = new THREE.Vector3();
        raycaster.ray.intersectPlane(planeObj, intersect);
        mouseWorld.copy(intersect);
      }

      // Explode impulse decay (used to loosen cohesion temporarily)
      if (explodeImpulse > 0.01) explodeImpulse *= 0.96;
      else explodeImpulse = 0;

      const springK = 0.3 + cohesion * 0.7;
      const noiseAmp = CONFIG.NOISE_AMPLITUDE * (1 - cohesion * 0.65) * (1 + explodeImpulse * 0.25);

      for (let i = 0; i < N; i++) {
        const ix = i * 3;
        const iy = ix + 1;
        const iz = ix + 2;

        // Spring towards targets
        velocities[ix] += (targets[ix] - positions[ix]) * CONFIG.MORPH_SPEED * springK;
        velocities[iy] += (targets[iy] - positions[iy]) * CONFIG.MORPH_SPEED * springK;
        velocities[iz] += (targets[iz] - positions[iz]) * CONFIG.MORPH_SPEED * springK;

        // Noise
        const nx = noise2D(positions[ix] * 2 + time * CONFIG.NOISE_SCALE * 60, positions[iy] * 2) * noiseAmp;
        const ny = noise2D(positions[iy] * 2 + 100, positions[ix] * 2 + time * CONFIG.NOISE_SCALE * 60) * noiseAmp;
        velocities[ix] += nx * 0.01;
        velocities[iy] += ny * 0.01;

        // Mouse interaction
        if (mouseNdc.x < 9000) {
          const mdx = positions[ix] - mouseWorld.x;
          const mdy = positions[iy] - mouseWorld.y;
          const mDist = Math.sqrt(mdx * mdx + mdy * mdy) + 0.0001;

          if (mDist < CONFIG.MOUSE_RADIUS) {
            const falloff = 1 - (mDist / CONFIG.MOUSE_RADIUS);
            const str = CONFIG.MOUSE_STRENGTH * falloff * falloff;

            if (currentMode === 'repel') {
              velocities[ix] += (mdx / mDist) * str;
              velocities[iy] += (mdy / mDist) * str;
            } else if (currentMode === 'attract') {
              velocities[ix] -= (mdx / mDist) * str * 0.5;
              velocities[iy] -= (mdy / mDist) * str * 0.5;
            } else {
              velocities[ix] += (-mdy / mDist) * str * 0.3;
              velocities[iy] += (mdx / mDist) * str * 0.3;
            }
          }
        }

        // Gravity
        velocities[iy] += CONFIG.GRAVITY_Y;

        // Damping (dt-aware: preserve feel across refresh rates)
        const damp = Math.pow(CONFIG.DAMPING, dt * 60);
        velocities[ix] *= damp; velocities[iy] *= damp; velocities[iz] *= damp;

        // Integrate
        positions[ix] += velocities[ix];
        positions[iy] += velocities[iy];
        positions[iz] += velocities[iz];

        // Color interpolation
        instanceColors[ix] += (sourceColors[ix] - instanceColors[ix]) * 0.03;
        instanceColors[iy] += (sourceColors[iy] - instanceColors[iy]) * 0.03;
        instanceColors[iz] += (sourceColors[iz] - instanceColors[iz]) * 0.03;

        // Depth layers
        const zOff = layers[i] === 0 ? 0.3 : (layers[i] === 2 ? -0.3 : 0);
        dummy.position.set(positions[ix], positions[iy], positions[iz] + zOff);
        dummy.scale.setScalar(sizes[i]);
        dummy.updateMatrix();
        mesh.setMatrixAt(i, dummy.matrix);
      }

      mesh.instanceMatrix.needsUpdate = true;
      colorAttr.needsUpdate = true;

      renderer.render(scene, camera);
    };

    // Start
    rafRef.current = requestAnimationFrame(animate);

    // Auto cycle (optional)
    let cycleTimer: number | null = null;
    if (autoAdvance && shapes.length > 1) {
      // initial morph after 2s
      window.setTimeout(() => {
        setActiveShape(1);
        void loadShapeByIndex(1);
      }, 2000);

      let idx = 1;
      cycleTimer = window.setInterval(() => {
        idx = (idx + 1) % shapes.length;
        setActiveShape(idx);
        void loadShapeByIndex(idx);
      }, cycleDuration);
    }

    // Cleanup
    return () => {
      if (cycleTimer) window.clearInterval(cycleTimer);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);

      container.removeEventListener('mousemove', onMove);
      container.removeEventListener('touchmove', onTouch);
      container.removeEventListener('mouseleave', onLeave);
      container.removeEventListener('touchend', onLeave);

      roRef.current?.disconnect();
      roRef.current = null;

      renderer.dispose();
      geo.dispose();
      mat.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [particleCount, autoAdvance, cycleDuration, dark, shapes.length]); // shapes content is sampled via loadShapeByIndex

  // UI handlers
  const handleShapeClick = useCallback((index: number) => {
    setActiveShape(index);
    apiRef?.current?.loadShape(index);
  }, [apiRef]);

  const handleModeChange = useCallback((m: InteractionMode) => {
    setMode(m);
    apiRef?.current?.setMode(m);
  }, [apiRef]);

  return (
    <div className={`relative w-full h-screen overflow-hidden ${className}`}>
      {/* Three.js container */}
      <div ref={containerRef} className="absolute inset-0" />

      {/* Overlay UI (kept minimal; you can replace with your layer system) */}
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-8 md:p-16 z-10">
        {/* Top */}
        <div className="flex justify-between items-start">
          <div className="opacity-70 text-xs tracking-[4px] uppercase font-light">
            <span className="block font-semibold text-sm tracking-[6px]">MAD AURORA</span>
            Particle Morph Engine v2.2
          </div>
          <div className="text-xs opacity-40 tabular-nums tracking-wide">
            {particleCount.toLocaleString()} partículas
          </div>
        </div>

        {/* Center */}
        <div className="text-center">
          <h1 className="text-4xl md:text-7xl font-extralight tracking-tight leading-none transition-opacity duration-1000">
            {shapes[activeShape]?.headline || 'Onde matéria encontra ilusão'}
          </h1>
        </div>

        {/* Bottom */}
        <div className="flex justify-between items-end">
          <div className="text-[10px] opacity-30 tracking-wide uppercase">
            Mova o mouse para interagir
          </div>

          <div className="flex gap-2 pointer-events-auto">
            {shapes.map((s, i) => (
              <button
                key={s.key}
                onClick={() => handleShapeClick(i)}
                className={`px-5 py-2.5 rounded-full text-xs tracking-wide uppercase transition-all duration-500 backdrop-blur-xl border ${
                  activeShape === i
                    ? 'bg-white/95 text-black border-transparent font-semibold'
                    : 'bg-white/5 text-white border-white/10 hover:bg-white/10 hover:border-white/25'
                }`}
              >
                {s.name}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-1.5 pointer-events-auto items-end">
            {(['repel', 'attract', 'orbit'] as InteractionMode[]).map(m => (
              <button
                key={m}
                onClick={() => handleModeChange(m)}
                className={`px-3 py-1.5 rounded-xl text-[10px] tracking-wider uppercase transition-all border ${
                  mode === m
                    ? 'text-white border-white/40 bg-white/10'
                    : 'text-white/40 border-white/8 hover:text-white hover:border-white/20'
                }`}
              >
                {m === 'repel' ? 'Repelir' : m === 'attract' ? 'Atrair' : 'Orbitar'}
              </button>
            ))}

            <button
              onClick={() => apiRef?.current?.explode()}
              className="px-3 py-1.5 rounded-xl text-[10px] tracking-wider uppercase text-white/40 border border-white/8 hover:text-white hover:border-white/20 transition-all mt-2"
            >
              ⟐ Explodir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
