# Implementation Plan: Consortium Cinematic Injection

**Agent**: Cinematographer
**Manager**: Project Manager
**Target**: `src/components/mad-lab/ConsortiumSection.tsx`

## Goal
Inject "Life" into the static Consortium placeholder using GSAP, complying with the `cinematographer.md` standard (Staggered Entrance, ScrollTrigger).

## Proposed Changes

### `ConsortiumSection.tsx`
- **Logic Injection**:
    - Import `useRef`, `useLayoutEffect`.
    - Create a `gsap.timeline` triggered by `ScrollTrigger`.
    - Target:
        - `h2` (Title): Slide up + Fade In (Stagger 1).
        - `p` (Subtitle): Text Reveal / Typewriter or Fade (Stagger 2).
        - Border/Background: Subtle pulse or shimmer.
- **Constraints**:
    - DO NOT change the HTML structure.
    - DO NOT change Tailwind classes.
    - Use `useRef` for all targeting.

## Verification
- **Visual**: Verify components animate on scroll.
- **Performance**: Ensure animations are disposed (`ctx.revert()`).
