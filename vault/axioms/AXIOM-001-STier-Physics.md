# AXIOM-001: S-Tier Physics & Aesthetics

## Status
- **Date:** 2026-02-15
- **Source:** Anatomia_Sites_S-Tier_Awwwards.md
- **Context:** Foundation of Visual Physics for Mad Lab Aurora

---

## 1. The Motion Trinity
Every S-Tier interface must implement the following three layers of motion to ensure physical presence and weight.

### Layer 1: Inertia Engine (Lenis)
- **Role:** Decouple native scroll from raw mouse input.
- **Config:** lerp: 0.08 (approx).
- **Effect:** Adds "mass" and friction to the scroll experience, making the content feel substantial.

### Layer 2: Orchestrator (GSAP)
- **Role:** Precise timeline management and scroll triggers.
- **Reveal Pattern:** **Clip Reveal** (overflow: hidden + translateY) instead of opacity fades. Elements must "emerge" from the substrate.
- **Easing Signature:** cubic-bezier(1, 0, 0, 1) (Expo Ease In-Out). Start slow, violent acceleration, abrupt stop. Simulates high-precision mechanical movement.

### Layer 3: GPU Canvas (WebGL/Three.js)
- **Role:** PBR Materials, Fluid Distortion, Particulate Systems.
- **Requirement:** Must be interactive (mouse/scroll reactive). Passive decoration is forbidden.

---

## 2. Self-Healing Typography
Typography must be structural, not cosmetic.

- **Units:** w (viewport width) for all major typographic elements.
- **Scaling:** Linear scaling with viewport. No manual breakpoints for font sizes.
- **Tracking:** Negative letter-spacing for large headings (-0.02em to -0.05em). The larger the type, the tighter the tracking.
- **Rendering:** -webkit-font-smoothing: antialiased mandatory.

---

## 3. Chromatic Economy
Visual richness comes from transparency and depth, not hue saturation.

- **Limit:** Max 4 solid base colors.
- **Depth:** Use alpha-channel tokens (e.g., --color-dark-04 for 40% opacity) to layer elements.
- **Color Space:** Oklch or LAB preferred for perceptual uniformity.

---

## 4. Interaction Physics
- **Squash and Stretch:** Interactive elements should deform subtly under interaction.
- **Latency:** < 50ms response to input.
- **Cursor:** Custom hardware-accelerated cursor with lag/lerp for "fluid" feel.
