---
name: Semantic HTML & A11y UI Pattern
description: Regras exatas e snippets React para tornar componentes interativos S-Tier acessíveis.
---

# Accessibility Patterns S-Tier (Mad Lab Aurora)

Ao desenhar componentes cinematográficos e intrincados, o *Gamma Engineer* deve utilizar estes métodos como base.

## 1. Botões Iconográficos (SVGs)

Se um botão carrega um SVG complexo animado via GSAP, ele **deve** anunciar-se a leitores de tela e esconder a geometria confusa.

```tsx
export const MagneticButton = ({ onClick, children, ariaLabel }: Props) => {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className="relative flex items-center justify-center p-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A985]"
    >
      <span aria-hidden="true" className="pointer-events-none">
        {/* Geometria complexa GSAP aqui */}
        {children}
      </span>
    </button>
  );
};
```

## 2. Prefers Reduced Motion Hook

Qualquer componente com WebGL (R3F) pesado ou GSAP stagger deve ler essa store global ou hook local e pausar se `true`.

```tsx
import { useReducedMotion } from 'framer-motion'; // Ou hook custom CSS

export const ParticleHero = () => {
    const shouldReduceMotion = useReducedMotion();

    if (shouldReduceMotion) {
        return <StaticHeroFallback />;
    }

    return <WebGLCanvasParticles />;
};
```

## 3. O "Sovereign Focus"
Nunca use o `.focus:` genérico em botões magnéticos (pois ele aciona no clique também e engessa a UI). Use sempre `.focus-visible:` para acionar apenas via Teclado.

```css
/* Globals CSS */
.sovereign-focus:focus-visible {
  outline: 2px solid #C8A985;
  outline-offset: 4px;
  border-radius: var(--radius-md);
  transition: outline-offset 0.2s ease;
}
```
