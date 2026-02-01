---
name: site_forensics
description: Advanced forensic analysis capabilities for determining the architecture, performance, and implementation details of complex 3D/Interactive websites. Includes protocols for GSAP, Three.js, GLSL, and Memory Leak detection.
---

# Site Forensics & Neuro-Reverse Engineering

This skill provides the technical protocols and JavaScript execution strategies required to reverse-engineer high-end web experiences (e.g., Vizcom, Stripe, Apple). It is designed to be used by agents like the **Site Construction Documenter** and **Neurofront Architect**.

## 🧠 Core Competencies

1. **Universal Analysis**: DOM structure, Asset Cataloging, Design System Extraction.
2. **Interactive Forensics**: GSAP Timeline Reconstruction, Easing Curve Mathematics, Pointer-to-Animation Flow.
3. **3D Pipeline Analysis**: Hybrid Composition (DOM + WebGL), Depth Stacking, Shader Forensics (GLSL).
4. **Performance Forensics**: Memory Leak Detection, Frame Budget Auditing, Resource Lifecycle Tracking.

---

## 🏗️ Module 1: Universal Web Analysis

Standard protocol for extracting the baseline architecture of any website.

### 1.1 Structural & Asset Audit

```javascript
class UniversalSiteAnalyzer {
  constructor() {
    this.metrics = {
      performance: this.capturePerformanceMetrics(),
      designSystem: this.extractDesignSystem(),
      assets: this.catalogAllAssets(),
      dependencies: this.analyzeDependencies(),
      seo: this.extractSEOMetadata()
    };
  }

  capturePerformanceMetrics() {
    const perf = performance.getEntriesByType('navigation')[0];
    return {
      coreWebVitals: {
        LCP: this.estimateLCP(), // Implement LCP observer logic
        CLS: this.calculateCLS(), // Implement CLS observer logic
      },
      loading: {
        domContentLoaded: perf.domContentLoadedEventEnd - perf.domContentLoadedEventStart,
        loadEvent: perf.loadEventEnd - perf.loadEventStart
      }
    };
  }

  // ... implementation details for extractDesignSystem, catalogAllAssets, etc.
}
```

---

## 🎨 Module 2: Interactive 3D Forensics (GSAP & WebGL)

Protocol for analyzing sites that use heavy interactions and 3D rendering.

### 2.1 GSAP Architecture Extraction

Extracts not just *what* animates, but *how* it is architected (ScrollTrigger, Observers, Custom Easing).

```javascript
/* Protocol: GSAP Forensics */
const analyzeGSAPArchitecture = () => {
    // 1. ScrollTrigger Forensics
    const scrollTriggers = window.ScrollTrigger ? window.ScrollTrigger.getAll().map(st => ({
        trigger: st.trigger,
        start: st.start,
        end: st.end,
        scrub: st.scrub,
        pin: st.pin,
        animation: extractAnimationGraph(st.animation) // Recursive timeline extraction
    })) : [];

    // 2. Custom Easing Forensics
    const customEases = []; 
    // Logic to scan gsap.parseEase registry and sample curves for overshoot/undershoot
    
    // 3. Pointer Flow Mapping
    // Logic to detect 'mousemove' -> 'gsap.quickTo' -> 'render' loops
    
    return { scrollTriggers, customEases, pointerFlow: mapPointerFlow() };
};
```

### 2.2 Hybrid Rendering Pipeline (DOM + WebGL)

Determines how the site blends HTML elements with Canvas content to create seamless depth.

```javascript
/* Protocol: Hybrid Pipeline Analysis */
const analyzeHybridPipeline = () => {
    const layers = [];
    
    // 1. Detect CSS 3D "Fake" Layers
    document.querySelectorAll('*').forEach(el => {
        const style = getComputedStyle(el);
        if (style.transform.includes('matrix3d') || style.perspective !== 'none') {
            layers.push({ type: 'dom-3d', depth: calculateZDepth(style), element: el });
        }
    });

    // 2. Detect WebGL Contexts & Overlays
    document.querySelectorAll('canvas').forEach(canvas => {
        layers.push({ type: 'webgl-canvas', context: getContextType(canvas) });
    });

    return sortLayersByComposition(layers); // Returns ordered stack of visual composition
};
```

---

## 🔬 Module 3: Advanced Shader Forensics (GLSL)

Deep inspection of compiled shader programs to understand visual effects (refraction, noise, lighting).

### 3.1 Shader Extraction & Decompilation

```javascript
class ShaderForensicAnalyzer {
  extractCompleteShaderPipeline() {
    const pipeline = { programs: [], materials: [] };
    
    // Hook into WebGL contexts to grab shader sources
    document.querySelectorAll('canvas').forEach(canvas => {
        const gl = canvas.getContext('webgl') || canvas.getContext('webgl2');
        if(gl) {
            pipeline.programs.push(...this.extractShaderPrograms(gl));
        }
    });
    return pipeline;
  }

  extractShaderPrograms(gl) {
     // Iterates over GL programs, decompiles shaders, parses Uniforms/Attributes
     // Identifies techniques via Signature Matching (e.g., regex for "snoise", "ggx", "refract")
  }
  
  initializeSignaturePatterns() {
      return {
          PBR: [/GGX|NDF/gi],
          REFRACTION: [/refract\(|ior/gi],
          NOISE: [/simplex|perlin/gi],
          RAYMARCHING: [/map\(|sdf/gi]
      };
  }
}
```

---

## 🧹 Module 4: Memory & Resource Forensics

Detects potential leaks and mismanagement of GPU resources, critical for high-performance reconstruction.

### 4.1 Memory Leak Detection

```javascript
class MemoryLeakForensicDetector {
  startForensicMonitoring() {
      // Periodic snapshots of:
      // 1. JS Heap size
      // 2. WebGL Texture/Buffer counts (via renderer.info)
      // 3. Three.js Scene Graph Geometry count
      
      // Heuristic analysis:
      // If Heap grows > 30% without GC -> Suspect JS Leak
      // If Texture count grows indefinitely -> Suspect VRAM Leak
  }
  
  investigateGeometryLeaks(scene) {
      // Traverses scene graph to find undisposed geometries
      // Checks for orphan objects removed from parent but retained in memory
  }
}
```

---

## 📋 Neurofront Architect Checklist

Use this checklist when applying this skill to a new target site.

### Phase 1: Surface Analysis

- [ ] Extract Color/Typography System.
- [ ] Catalog Assets (Images, GLBs, Videos).
- [ ] Map DOM Structure & Layout Grids.

### Phase 2: Interaction Forensics

- [ ] Map GSAP ScrollTriggers (Start/End/Scrub).
- [ ] Identify Custom Easings (Physics/Overshoot).
- [ ] Trace Pointer Events -> Animation Frame loop.

### Phase 3: Deep Rendering Analysis

- [ ] Decompile Critical Shaders (Hero, Particles, Glass).
- [ ] Map Z-Index Composition (Canvas vs. DOM).
- [ ] Verify 3D Transforms on DOM elements.

### Phase 4: Integrity Check

- [ ] Monitor Memory Profile for 60s interaction loop.
- [ ] Verify FPS Stability (Frame Budget Analysis).
