---
name: creative-tech-stack
description: Documentation and patterns for Creative Coding (GSAP, ThreeJS, Shaders).
---

# Creative Tech Stack

This skill provides access to the documentation for high-end visual implementation libraries.

## 📚 Resources

### 3D & WebGL
- **Poimandres / R3F**: `G:\Meu Drive\Mad Lab Aurora\Documentação de bibliotecas\pmnd_docs`
  - *Focus*: React Three Fiber, Drei, Zustand.
- **Shaders**: `G:\Meu Drive\Mad Lab Aurora\Documentação de bibliotecas\thebookofshaders`
  - *Focus*: GLSL, raw shader programming.

### Animation
- **GSAP**: `G:\Meu Drive\Mad Lab Aurora\Documentação de bibliotecas\gsap_docs`
  - *Focus*: Timelines, ScrollTrigger, Flip plugin.
- **Framer Motion**: `G:\Meu Drive\Mad Lab Aurora\Documentação de bibliotecas\framer`
  - *Focus*: Layout animations, polished UI transitions.

## 🛠️ Best Practices
- **Performance**: Always prefer transforms (`x`, `y`, `scale`) over layout properties (`top`, `width`).
- **Cleanup**: Ensure all GSAP triggers and 3D contexts are disposed of to prevent memory leaks.
