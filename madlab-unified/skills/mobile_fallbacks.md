---
name: Graceful Degradation Patterns (Mobile Fallbacks)
description: Regras para Fallbacks quando R3F / WebGPU falham ou em dispositivos móveis.
---

# Mobile Fallbacks e Degradação Elegante

O *Sovereign Director* repudia telas pretas ou em branco. O *Gamma Engineer* deve garantir o Fallback.

## 1. Tratamento Visual (O Canvas Oculto)

Se o componente for WebGL pesado (`<Canvas>`), ele deve ser condicionado ao Device Type ou possuir um CSS sob ele.

```tsx
// Pattern: CSS Sob o Canvas
<div className="relative w-full h-full bg-void-gradient">
    {/* O background de fallback fica fixo e leve atrás. 
        Se o Canvas crashar ou não carregar, o Hero não fica preto. */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#0d0e13] to-[#1a1b26]" />
    
    <Canvas className="absolute inset-0 z-10 pointer-events-none">
        <VolumetricDust />
    </Canvas>
</div>
```

## 2. Touch vs Hover (A Armadilha do Mouse)

Dispositivos Mobile (Touch) ativam o estado `:hover` e o congelam, quebrando interfaces GSAP baseadas em `onMouseEnter`/`onMouseLeave`.

- **Regra Mad Lab:** Verifique se o dispositivo possui cursor fino (Mouse) via media query antes de ativar animações de Hover baseadas em CSS genérico.

```css
@media (hover: hover) and (pointer: fine) {
    .magnetic-item:hover {
        /* Seguramos o hover CSS genérico aqui. GSAP lida com o resto via JS. */
    }
}
```

## 3. Removendo Cursors e RAF Inúteis

Em telas menores que `768px` ou dispositivos `Touch`, `requestAnimationFrame` que seguem o ponteiro (Ex: `SovereignCursor`) devem abortar imediatamente, devolvendo 100% do CPU para rolagem.
