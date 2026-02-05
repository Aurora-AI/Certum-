---
description: The Single Source of Truth for S-Tier Frontend Construction (Vision -> Body -> Soul -> Audit -> Deploy).
---

# 🏆 Zero to Awwwards (Master Workflow)

**Canonical Frontend Protocol**
> "We don't just build websites. We materialize dreams."

This is the **ONLY** workflow for frontend construction in the Aurora Ecosystem. It integrates Art Direction, Stitch Generation, Cinematography, and Sovereign Auditing into a single non-negotiable pipeline.

---

## Phase 1: The Vision & Cultural Calibration
**Goal:** Define the *Soul* of the project before touching code.
**Reference Module:** `modules/autonomous-site-construction.md`

1.  **Director's Brief**:
    *   Analyze the "Sensation Gap" (e.g., "Feels like PowerPoint" -> "Needs to feel like Liquid Marble").
    *   Define the **Atmosphere** (Lighting, Texture, Sound).
2.  **Cultural Calibration**:
    *   Ensure the dream is culturally resonant (e.g., "Mercedes at the Beach" vs "Porsche in Snow").
3.  **OS Generation**:
    *   Generate a Service Order (OS) defining the *Intent* and *Acting*.

## Phase 2: The Body (Structure)
**Goal:** Generate the physical form (HTML/CSS).
**Reference Module:** `modules/aurora-gold-pipeline.md` (Phase 1)
**Tool:** Stitch MCP

1.  **Stitch Generation**:
    *   Execute the OS prompt via Stitch.
    *   **Constraint**: Semantic HTML + Tailwind CSS (v4). NO JS animations yet.
2.  **Static Verification**:
    *   Verify layout, typography, and responsiveness.
    *   If it looks "generic", REJECT and refine the OS.

## Phase 3: The Soul (Cinematography)
**Goal:** Inject life, physics, and emotion.
**Reference Module:** `modules/antigravity-cinematography.md`
**Tools:** GSAP, Lenis, React

1.  **Motion Injection**:
    *   Target elements with `useRef`.
    *   Apply `useGSAP` for entrance and scroll interactions.
2.  **Physics Compliance**:
    *   Ensure motion has weight and inertia (Disney Principles).
    *   **Rule**: Never animate `top/left`, always `transform`.
3.  **Hybrid Loop (Optional)**:
    *   If a specific visual is missing, trigger the `modules/manual-visual-generation.md` loop for that specific component.

## Phase 4: Production Hardening
**Goal:** Prepare for the real world.

1.  **Performance**:
    *   Achieve 60fps+ on critical paths.
    *   Eliminate layout thrashing.
2.  **Telemetry**:
    *   Ensure `empath` and `atmosphere` hooks are active (if applicable).

## Phase 5: Sovereign Awwwards Audit
**Goal:** Certification.
**Reference Module:** `modules/sovereign-awwwards-director.md`

**CRITICAL GATE:** You cannot proceed to deploy without passing these gates.

- [ ] **Gate 0-2 (Compliance)**: Structure and Code Standards.
- [ ] **Gate 3 (Cinematography)**: The "Feel" test.
- [ ] **Gate 4 (Production)**: Performance and Polish.
- [ ] **Gate 5 (5-Star)**: Mobile Perfection & Touch-Detection.

## Phase 6: Deployment
**Goal:** Global Availability.

1.  **Final Container Build**:
    *   `npm run build` (Must be green).
2.  **Cloud Run / Vercel**:
    *   Execute `cloud-run-deploy` (Infra Workflow).
3.  **Live Verification**:
    *   Verify HTTPS and live performance.

---
*Verified by Project Manager (Conductor Mode)*
