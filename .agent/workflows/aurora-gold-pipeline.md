---
description: Standard Operating Procedure for the Aurora Gold Pipeline (Stitch -> Cinematographer -> Deploy).
---

# 🌟 Aurora Gold Pipeline

## Pipeline Overview
The efficient manufacturing process for S-Tier websites within the Aurora Ecosystem.

`Stitch (Design) -> Cinematographer (Animation) -> Deploy (Production)`

## Phase 1: Generation (Stitch MCP)
The **Design Phase** is handled by the Stitch MCP or strict adherence to a static design mock.
*   **Goal**: Produce the "Body" (Structure & Visuals).
*   **Output**: Semantic HTML + Tailwind CSS (v4).
*   **Constraint**: NO JavaScript animations. Pure layout and typography.

## Phase 2: Cinematography (Antigravity)
The **Animation Phase** adds the "Soul" to the static body.
*   **Action**: Create a `Cinematographer` component or script.
*   **Tools**: GSAP, ScrollTrigger, Lenis.
*   **Rule**: **Non-Destructive**. Do not change the HTML structure.
*   **Checklist**:
    *   [ ] Lenis Smooth Scroll initialized.
    *   [ ] Hero Entrance Timeline.
    *   [ ] Parallax Effects (ScrollTrigger).
    *   [ ] Micro-interactions (hover, cursor).

## Phase 3: Deployment (Production)
The **Engineering Phase** hardens the result for production.
*   **Stack**: Next.js 15, Tailwind v4.
*   **Process**:
    1.  Place HTML structure in `page.tsx`.
    2.  Place Animation logic in `components/Cinematographer.tsx`.
    3.  Import `Cinematographer` dynamic/client-side only.

## Usage
Run this workflow when creating new landing pages or features that require "S-Tier" visual quality.
