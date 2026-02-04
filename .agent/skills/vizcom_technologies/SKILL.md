---
name: Vizcom Technical Mastery
description: Expert knowledge of Vizcom.ai's architecture, including Client-Side Rendering, Generative AI integration, and Real-Time Collaboration patterns.
---

# Vizcom Technical Mastery

## 1. Core Philosophy: The Zero Latency Creative Loop
- **Problem:** Cognitive disconnect between intent (drawing) and result (render).
- **Solution:** Hybrid architecture. 
    - **Local:** Low-latency Vector/Raster sketching via Canvas API (60fps).
    - **Cloud:** Asynchronous AI Inference (Stable Diffusion/TC6) via GPU Clusters.

## 2. Frontend Engineering (The Workbench)
- **Framework:** React + TypeScript (Strict Typing mandatory for 4x4 Matrices/Coordinates).
- **Render Loop:** Uses "Ref Escape Hatches". Draw logic runs outside React render cycle (Direct DOM manipulation via `useRef`), syncing state only on `pointerup`.
- **Canvas Optimization:**
    - **Smoothing:** Catmull-Rom Splines for organic strokes.
    - **Dirty Rects:** Only redraw changed areas.
    - **Off-screen Canvas:** Double buffering for layer composition.
- **3D Engine:** React Three Fiber (R3F) for scene graph management + GLSL Shaders for depth/normal maps needed by ControlNet.

## 3. The AI Pipeline (Generative Core)
- **Model:** Stable Diffusion + ControlNet (Canny, Depth, Scribble).
- **Proprietary Tech:** **Technicolor 6 (TC6)** - Fine-tuned on high-end industrial design (cars, products).
- **Speed:** Distillation (LCM/SDXL Turbo) allows sub-second inference ("Live Render").
- **Flow:** 
    1. Snapshot Canvas (Blob).
    2. Upload to S3 -> Queue Redis.
    3. Python GPU Worker Inference.
    4. WebSocket Notification -> Client Download.

## 4. Infrastructure (The Maestro)
- **Backbone:** Node.js + PostGraphile (Auto-GraphQL from Postgres).
- **Real-time:** WebSockets + Yjs (CRDTs) for conflict-free multiplayer collaboration.
- **Scaling:** Kubernetes (K8s) with separate Node Pools (CPU for API, GPU Spot for Inference).
- **IaC:** Pulumi (Infrastructure as Code in TypeScript).

## 5. Implementation Directives for Agents
- When designing **Interactive Canvas**: Prioritize "Optimistic UI". Show user action *immediately*, fix conflict later via CRDT.
- When implementing **AI Hooks**: Use a queue pattern. Don't `await` the render in the main thread. 
- **Visual Style**: Glassmorphism (Backdrop Filter) is functional, not just aesthetic—it allows seeing the canvas *under* the tools.
