# 🌟 AURORA GOLD PIPELINE v1.0

## Pipeline: Stitch → Cinematographer → Deploy

```
┌─────────────────────────────────────────────────────────────────────┐
│                     AURORA GOLD PIPELINE                            │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│   ┌──────────┐      ┌──────────────────┐      ┌──────────────┐     │
│   │  STITCH  │ ───► │  CINEMATOGRAPHER │ ───► │   DEPLOY     │     │
│   │   MCP    │      │     SKILL        │      │   READY      │     │
│   └──────────┘      └──────────────────┘      └──────────────┘     │
│       │                     │                        │              │
│       ▼                     ▼                        ▼              │
│   HTML/CSS             + Animações              Next.js 15         │
│   Estático             + Scroll Suave          Tailwind v4          │
│   (Design)             + Interações            Production           │
│                        (Vida)                                       │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

---

## FASE 1: GERAÇÃO (Stitch MCP)

### Input para o Stitch

```markdown
## Brief para Stitch

### Projeto: [Nome do Projeto]
### Vibe: Sovereign | Vitality | Kinetic (escolher)

### Seções Necessárias:
1. Hero Section
   - Título principal: [texto]
   - Subtítulo: [texto]
   - CTA: [texto do botão]
   - Visual: [orbe/gradientes/padrões]

2. [Outras seções...]

### Estética:
- Cores: #000000, #D4AF37, #E5E4E2
- Fonts: Space Grotesk, Playfair Display
- Mood: Dark luxury, tech-forward, premium

### Referências:
- https://studiodialect.com/
- https://awwwards.com/websites/[ref]

### NÃO incluir:
- Animações JavaScript (serão adicionadas depois)
- Bibliotecas de animação
- Interações complexas
```

### Output do Stitch

O Stitch retorna HTML/CSS estático com:
- ✅ Design visual completo
- ✅ Estrutura semântica
- ✅ CSS inline ou Tailwind
- ✅ Responsividade básica
- ❌ Sem animações
- ❌ Sem interações

---

## FASE 2: CINEMATOGRAFIA (Antigravity)

### Prompt de Transferência

```markdown
## CINEMATOGRAPHER MODE ATIVADO

### CÓDIGO DO STITCH:
[COLAR HTML COMPLETO]

### INSTRUÇÕES ABSOLUTAS:
1. NÃO modifique o HTML acima - está perfeito
2. Analise todos os elementos visuais
3. Crie um script de animações GSAP
4. Use o skill Cinematographer como referência

### EFEITOS OBRIGATÓRIOS:
- [ ] Lenis smooth scroll
- [ ] Hero entrance timeline
- [ ] Parallax backgrounds
- [ ] Orb/decorative floating
- [ ] Magnetic buttons
- [ ] Text glow animations
- [ ] Side panel reveals
- [ ] Scroll progress indicator

### OUTPUT:
Retorne EXATAMENTE:
1. O HTML original (100% intacto)
2. Um bloco <script> com todas as animações
3. Comentários explicando cada camada

### REFERÊNCIA DE QUALIDADE:
https://studiodialect.com/
```

### Validação do Output

```javascript
// Script de validação (rode no browser)
function validateCinematography(originalHTML, newHTML) {
  // Remove scripts para comparar estrutura
  const cleanOriginal = originalHTML.replace(/<script[\s\S]*?<\/script>/gi, '');
  const cleanNew = newHTML.replace(/<script[\s\S]*?<\/script>/gi, '');
  
  // Estrutura deve ser idêntica
  if (cleanOriginal.trim() !== cleanNew.trim()) {
    console.error('❌ HTML foi modificado!');
    return false;
  }
  
  // Verificar presença de animações
  const hasGSAP = newHTML.includes('gsap.');
  const hasLenis = newHTML.includes('Lenis');
  const hasScrollTrigger = newHTML.includes('ScrollTrigger');
  
  if (!hasGSAP || !hasLenis || !hasScrollTrigger) {
    console.error('❌ Faltam dependências de animação');
    return false;
  }
  
  console.log('✅ Cinematografia válida!');
  return true;
}
```

---

## FASE 3: REFINAMENTO (Opcional)

### Adições Avançadas

Se o projeto necessitar de mais sofisticação:

#### WebGL Background

```javascript
// Canvas 3D como background (não modifica HTML existente)
const canvas = document.createElement('canvas');
canvas.id = 'webgl-bg';
canvas.style.cssText = `
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
`;
document.body.prepend(canvas);

// Inicializar Three.js scene
// ... código R3F/Three.js
```

#### Custom Cursor

```javascript
// Cursor customizado (adiciona elemento, não modifica existentes)
const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
cursor.innerHTML = `
  <div class="cursor-dot"></div>
  <div class="cursor-ring"></div>
`;
document.body.appendChild(cursor);

// CSS via JavaScript (não modifica stylesheets existentes)
const style = document.createElement('style');
style.textContent = `
  .custom-cursor {
    position: fixed;
    top: 0;
    left: 0;
    pointer-events: none;
    z-index: 99999;
  }
  .cursor-dot {
    width: 8px;
    height: 8px;
    background: #D4AF37;
    border-radius: 50%;
  }
  .cursor-ring {
    width: 40px;
    height: 40px;
    border: 1px solid #D4AF37;
    border-radius: 50%;
    opacity: 0.5;
  }
`;
document.head.appendChild(style);

// Movimento
document.addEventListener('mousemove', (e) => {
  gsap.to('.cursor-dot', { x: e.clientX - 4, y: e.clientY - 4, duration: 0.1 });
  gsap.to('.cursor-ring', { x: e.clientX - 20, y: e.clientY - 20, duration: 0.3 });
});
```

---

## FASE 4: DEPLOY

### Estrutura Next.js 15

```
project/
├── app/
│   ├── layout.tsx
│   ├── page.tsx          ← HTML do Stitch convertido para JSX
│   └── globals.css       ← CSS do Stitch
├── components/
│   └── Cinematographer.tsx ← Script de animações
├── lib/
│   └── animations.ts     ← Configurações GSAP
└── public/
    └── assets/
```

### Conversão para Next.js

```typescript
// app/page.tsx
import Cinematographer from '@/components/Cinematographer';

export default function HomePage() {
  return (
    <>
      {/* HTML do Stitch convertido para JSX */}
      <div className="relative min-h-screen...">
        {/* ... todo o conteúdo ... */}
      </div>
      
      {/* Script de cinematografia */}
      <Cinematographer />
    </>
  );
}
```

```typescript
// components/Cinematographer.tsx
'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

export default function Cinematographer() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Lenis
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    
    // ... todas as animações do script ...
    
    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);
  
  return null;
}
```

---

## CHECKLIST COMPLETO

### Pré-Produção
- [ ] Brief definido
- [ ] Referências coletadas
- [ ] Vibe selecionado

### Produção (Stitch)
- [ ] Hero section gerada
- [ ] Todas as seções geradas
- [ ] Design validado visualmente

### Pós-Produção (Cinematographer)
- [ ] HTML preservado 100%
- [ ] Lenis smooth scroll
- [ ] Hero entrance animations
- [ ] Parallax layers
- [ ] Microinteractions
- [ ] Mobile optimization
- [ ] Performance verificada

### Deploy
- [ ] Convertido para Next.js 15
- [ ] Build sem erros
- [ ] Lighthouse 90+
- [ ] Mobile testado

---

## MÉTRICAS DE SUCESSO

| Métrica | Target |
|---------|--------|
| Lighthouse Performance | > 90 |
| CLS (Cumulative Layout Shift) | < 0.1 |
| LCP (Largest Contentful Paint) | < 2.5s |
| FID (First Input Delay) | < 100ms |
| Animações | 60fps |
| HTML modificado | 0% |
| Awwwards potential | Gold tier |
