---
name: Lenis & ScrollTrigger Integration
description: Wrapper mestre exato para o Smooth Scroll global sincronizado com timelines GSAP.
---

# Lenis Smooth Scroll Integration

O Cinematographer e o Gamma Engineer exigem este setup base para scroll nativo que sincroniza 1:1 com o ScrollTrigger (Awwwards Canon).

## 1. O Provedor Base (LenisProvider)

```tsx
'use client'

import { ReactLenis } from '@studio-freight/react-lenis'
import { ReactNode } from 'react'

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{
      lerp: 0.05, // Menor = mais flutuante. Cuidado com motion sickness. Padrão Awwwards: 0.1 a 0.05
      duration: 1.2,
      smoothWheel: true,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
    }}>
      {children}
    </ReactLenis>
  )
}
```

## 2. ScrollTrigger Sync Boilerplate

Toda vez que uma section precisar de Parallax ou Pinning, o hook GSAP deve refrescar e sincronizar os ticks do Lenis.

```tsx
import { useLenis } from '@studio-freight/react-lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const CinematicSection = () => {
    // Sincroniza RAF do GSAP com Lenis (Opcional, ReactLenis já costuma fazer, mas bom para WebGL manual)
    useLenis((lenis) => {
        ScrollTrigger.update();
    });

    // ... lógica GSAP
};
```
