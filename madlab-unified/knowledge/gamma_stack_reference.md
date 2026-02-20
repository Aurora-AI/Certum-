# Knowledge Reference: Geo-Engineering Stack
**Agent Target:** Gamma Engineer
**Domain:** WebGL, Shaders, React Three Fiber, GEO
**Source:** Legacy Documentation (`_BKP_ANTIGO`)

## Core Documentation Map
The following resources define the engineering standards for the "Digital Twin" architecture.

### 1. The Book of Shaders (Visual Synthesis)
- **Root:** `c:\Aurora\Projetos Mad Lab Aurora\Prime\_BKP_ANTIGO\biblioteca\Documentação de bibliotecas\thebookofshaders`
- **Key Chapters:**
    - `01.md`: Getting Started / Hello World
    - `10.md`: Randomness & Noise (Critical for "Phantom Silk")
    - `11.md`: Noise (Perlin/Simplex)
    - `12.md`: Cellular Noise
    - `13.md`: Fractal Brownian Motion (fBM)
- **Rule:** When creating materials, use raw GLSL or `ShaderMaterial` over pre-built constraints when "Sovereign" aesthetics are required.

### 2. React Three Fiber (The Bridge)
- **Path:** `c:\Aurora\Projetos Mad Lab Aurora\Prime\_BKP_ANTIGO\biblioteca\Documentação de bibliotecas\pmnd_docs\react-three-fiber.md`
- **Key Concepts:**
    - The `Canvas` root
    - `useFrame` loop (performant animation)
    - Event System (onClick, onPointerOver)
- **Rule:** Never block the main thread. Use `useFrame` for loop logic.

### 3. Drei (The Toolkit)
- **Path:** `c:\Aurora\Projetos Mad Lab Aurora\Prime\_BKP_ANTIGO\biblioteca\Documentação de bibliotecas\pmnd_docs\drei.md`
- **Usage:** Use `drei` helpers (OrbitControls, Environment, Float) to accelerate scaffolding, but do not rely on them for core "Signature Effects".

## Ingestion Protocol
When asked to "build a 3D component", verify against the R3F documentation for the latest hook usage (`useThree`, `useLoader`).
When asked to "create a texture", refer to The Book of Shaders for procedural generation techniques.
