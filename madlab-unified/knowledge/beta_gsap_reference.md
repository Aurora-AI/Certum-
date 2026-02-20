# Knowledge Reference: GSAP Physics Engine
**Agent Target:** Beta Physicist
**Domain:** Motion, Animation, Timeline Choreography
**Source:** Legacy Documentation (`_BKP_ANTIGO`)

## Core Documentation Map
The following resources define the canonical physics for the Mad Lab. You are to use these references to construct "Ghost Kinetic" animations.

### 1. The Core (GSAP)
- **Path:** `c:\Aurora\Projetos Mad Lab Aurora\Prime\_BKP_ANTIGO\biblioteca\Documentação de bibliotecas\gsap_docs\GSAP.md`
- **Usage:** General syntax, `gsap.to()`, `gsap.from()`, `gsap.set()`.
- **Constraint:** Always prefer `ref`-based selection over query selectors.

### 2. Easing Functions (The Soul of Motion)
- **Path:** `c:\Aurora\Projetos Mad Lab Aurora\Prime\_BKP_ANTIGO\biblioteca\Documentação de bibliotecas\gsap_docs\Eases.md`
- **Path:** `c:\Aurora\Projetos Mad Lab Aurora\Prime\_BKP_ANTIGO\biblioteca\Documentação de bibliotecas\gsap_docs\EasesCustomEase.md`
- **Rule:** Never use linear easing for UI elements. Use `power2.out` for entrances, `power3.in` for exits, and `elastic` only for "alive" micro-interactions.

### 3. Timeline Control (Choreography)
- **Path:** `c:\Aurora\Projetos Mad Lab Aurora\Prime\_BKP_ANTIGO\biblioteca\Documentação de bibliotecas\gsap_docs\Timeline.md`
- **Rule:** All complex sequences must be wrapped in a `gsap.timeline()` context for reversibility and global control.

### 4. Special Plugins
- **ScrollTrigger:** `c:\Aurora\Projetos Mad Lab Aurora\Prime\_BKP_ANTIGO\biblioteca\Documentação de bibliotecas\gsap_docs\PluginsScrollTrigger.md`
- **MorphSVG:** `c:\Aurora\Projetos Mad Lab Aurora\Prime\_BKP_ANTIGO\biblioteca\Documentação de bibliotecas\gsap_docs\PluginsMorphSVGPlugin.md`

## Ingestion Protocol
When asked to "simulate a physical interaction", query these files to find the exact parameter names and method signatures. do not hallucinate API methods.
