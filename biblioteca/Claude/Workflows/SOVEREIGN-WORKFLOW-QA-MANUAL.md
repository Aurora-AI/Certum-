# 🎯 SOVEREIGN WORKFLOW Q&A MANUAL v1.0
## Regras & Gates para Construção de Sites S-Tier

**Propósito:** Este documento codifica as regras e perguntas de validação que garantem que TODA entrega do Sovereign Workflow atinja o nível Awwwards/S-Tier.

**Como usar:** Em cada fase do workflow, o agente DEVE responder às perguntas. Respostas "NÃO" bloqueiam o avanço até correção.

---

## 📚 ÍNDICE

1. [Fase 0: Referência & DNA](#fase-0-referência--dna)
2. [Fase 1: Arquitetura & Setup](#fase-1-arquitetura--setup)
3. [Fase 2: Construção Tátil](#fase-2-construção-tátil)
4. [Fase 3: Cinematografia](#fase-3-cinematografia)
5. [Fase 4: Polish & QA](#fase-4-polish--qa)
6. [Biblioteca Aurora: Catálogo de Efeitos](#biblioteca-aurora-catálogo-de-efeitos)
7. [Regras de Ouro](#regras-de-ouro)

---

# 🔍 FASE 0: REFERÊNCIA & DNA

## Q0.1: O arquétipo está definido?

**Pergunta:** O site segue um arquétipo claro (Sovereign, Cyber, Editorial)?

| Arquétipo | Paleta | Tipografia | Mood |
|-----------|--------|------------|------|
| **Sovereign** | Void/Gold/Platinum | Serif + Sans | Luxury, Finance |
| **Cyber** | Neon/Black | Mono + Sans | Tech, SaaS |
| **Editorial** | White/Black/Accent | Serif dominant | Media, Publishing |

**Gate:** Se não conseguir definir em uma palavra, PARAR e refinar o briefing.

---

## Q0.2: As referências foram analisadas tecnicamente?

**Checklist de Análise de Referência:**

```
□ Identificou a stack técnica? (GSAP, Three.js, Lenis, etc.)
□ Documentou os efeitos visuais principais?
□ Mapeou a estrutura de scroll (fixed layers, sticky, parallax)?
□ Anotou os tempos de animação (durations, easings)?
□ Capturou screenshots das transições-chave?
```

**Regra:** Mínimo 3 referências analisadas antes de iniciar qualquer código.

---

## Q0.3: O Visual Hook está definido?

**Pergunta:** Qual é o "momento WOW" que faz o usuário querer continuar?

**Exemplos válidos:**
- Black Hole que suga o hero (Certum Prime)
- Spiral Vortex Menu (Aurora Library)
- Parallax 3D com profundidade extrema
- Cursor que transforma elementos

**Gate:** Se não conseguir descrever o Visual Hook em uma frase, o site vai parecer template.

---

# 🏗️ FASE 1: ARQUITETURA & SETUP

## Q1.1: A arquitetura híbrida está configurada?

**Estrutura Mandatória:**

```
┌─────────────────────────────────────────────────────────────┐
│  Layer 1: HERO (position: fixed, z-index: 100)              │
│  - Alta computação (WebGL/Canvas/GSAP complexo)             │
│  - "O Punch" - primeira impressão                           │
├─────────────────────────────────────────────────────────────┤
│  Layer 2: CONTENT (position: relative, z-index: 1)          │
│  - Baixa computação (HTML/Tailwind)                         │
│  - "A Leitura" - conteúdo scrollável                        │
├─────────────────────────────────────────────────────────────┤
│  Layer 3: OVERLAY (position: fixed, z-index: 1000)          │
│  - Cursor, Menu, Modals                                     │
│  - Sempre acessível                                         │
└─────────────────────────────────────────────────────────────┘
```

**Perguntas de Validação:**

```
□ O hero está em position: fixed com z-index adequado?
□ O content tem scroll-spacer para permitir scroll sobre o hero?
□ Existe layer de overlay para cursor/menu?
□ O Lenis está interceptando o scroll corretamente?
```

---

## Q1.2: O sistema de cores está semântico?

**Variáveis CSS Obrigatórias:**

```css
:root {
  /* Core */
  --color-void: #050505;        /* Background principal */
  --color-primary: #D4AF37;     /* Accent (gold/neon/brand) */
  --color-light: #F5F5F5;       /* Texto em dark mode */
  --color-dark: #0A0A0A;        /* Texto em light mode */
  
  /* Borders & Subtle */
  --color-border: rgba(255, 255, 255, 0.1);
  --color-border-hover: rgba(212, 175, 55, 0.3);
  
  /* Glass */
  --glass-bg: rgba(255, 255, 255, 0.02);
  --glass-border: rgba(255, 255, 255, 0.05);
}
```

**Gate:** Se usar cores hardcoded (ex: `#D4AF37` direto no componente), REJEITAR.

---

## Q1.3: A tipografia é fluida?

**Regra:** ZERO breakpoints para font-size. Usar `clamp()` SEMPRE.

```css
/* Escala Tipográfica Fluida */
--font-hero: clamp(3rem, 10vw, 8rem);      /* Hero headlines */
--font-display: clamp(2rem, 6vw, 5rem);    /* Section titles */
--font-heading: clamp(1.5rem, 4vw, 3rem);  /* Subtitles */
--font-body: clamp(1rem, 1.2vw, 1.25rem);  /* Body text */
--font-small: clamp(0.75rem, 1vw, 0.875rem); /* Captions */
```

**Teste:** Redimensionar browser de 320px a 2560px. Texto deve escalar SEM pulos.

---

# 🔧 FASE 2: CONSTRUÇÃO TÁTIL

## Q2.1: Os primitivos de interação existem?

**Componentes Obrigatórios (verificar existência):**

| Componente | Arquivo | Função | Status |
|------------|---------|--------|--------|
| Smooth Scroll | `SmoothScroller.tsx` | Lenis wrapper | □ |
| Custom Cursor | `SovereignCursor.tsx` | Cursor premium | □ |
| Magnetic Button | `MagneticButton.tsx` ou integrado | Hover magnético | □ |
| Preloader | `GenesisPreloader.tsx` | Loading cinematográfico | □ |

**Gate:** Se qualquer primitivo estiver faltando, o site NÃO é S-Tier.

---

## Q2.2: O cursor está implementado corretamente?

**Checklist do Cursor:**

```
□ Cursor nativo está oculto? (cursor: none)
□ Dot + Ring follower com lag diferenciado?
□ Estado "hover" expande em elementos interativos?
□ Estado "magnetic" em botões puxa o elemento?
□ Estado "text" muda forma em headlines?
□ Estado "hidden" em vídeos/canvas?
□ Mix-blend-mode diferencia em fundos claros/escuros?
□ Desabilitado em touch devices?
```

**Configuração Recomendada:**
```tsx
<SovereignCursor 
  color="var(--color-primary)"
  dotSize={8}
  circleSize={40}
  magnetic={true}
  blend={true}
/>
```

---

## Q2.3: O preloader cria antecipação?

**Elementos Obrigatórios do Preloader:**

```
□ Logo ou elemento visual central?
□ Animação de progresso (barra, counter, ou visual)?
□ Duração mínima de 2-3 segundos (mesmo se carregar antes)?
□ Transição de saída épica (scale, fade, reveal)?
□ Não bloqueia interação depois de completo?
```

**Anti-pattern:** Preloader que simplesmente some. DEVE haver transição cinematográfica.

---

## Q2.4: Data-attributes estão aplicados?

**Verificar nos elementos:**

```html
<!-- Cursor states -->
<button data-cursor="magnetic">CTA</button>
<div data-cursor="expand">Card</div>
<h1 data-cursor="text">Headline</h1>
<video data-cursor="hidden">...</video>

<!-- Parallax -->
<div data-speed="0.2">Background lento</div>
<div data-speed="0.5">Conteúdo médio</div>
<div data-speed="0.8">Foreground rápido</div>

<!-- Animações -->
<div data-animate="fade">Fade in on scroll</div>
<div data-animate="slide-up">Slide up on scroll</div>
```

**Gate:** Se elementos interativos não têm data-cursor, a experiência está incompleta.

---

# 🎬 FASE 3: CINEMATOGRAFIA

## Q3.1: O Hero tem "O Punch"?

**Perguntas de Validação do Hero:**

```
1. O hero ocupa 100vh inicialmente?                          □ SIM / □ NÃO
2. Existe uma animação de entrada épica?                     □ SIM / □ NÃO
3. O mouse cria algum efeito (parallax, follow, distortion)? □ SIM / □ NÃO
4. O scroll dispara uma transformação (não apenas move)?     □ SIM / □ NÃO
5. Existe um elemento visual hipnótico (orb, particles)?     □ SIM / □ NÃO
```

**Opções de Hero da Aurora Library:**

| Efeito | Arquivo | Impacto | Uso |
|--------|---------|---------|-----|
| Black Hole Reveal | `black-hole-reveal.html` | ⭐⭐⭐⭐⭐ | Sovereign/Luxury |
| Spiral Vortex | `spiral-vortex-hero.html` | ⭐⭐⭐⭐⭐ | Cyber/Tech |
| Parallax Depth Stack | `parallax-depth-stack.html` | ⭐⭐⭐⭐ | Universal |
| Text Mask Video | (a implementar) | ⭐⭐⭐⭐ | Editorial |

---

## Q3.2: As transições entre seções são cinematográficas?

**Regra Exo Ape:** Nunca transicionar bloco-a-bloco sem um "respiro visual".

**Checklist de Transição:**

```
□ Existe parallax entre seções (elementos em velocidades diferentes)?
□ Elementos entram com timing escalonado (stagger)?
□ Há contraste de ritmo (seção dark → light ou vice-versa)?
□ Animações têm "peso" (ease: power4.out, elastic, expo)?
□ Nada é linear (ease: "none" só para scrub contínuo)?
```

**Easings Recomendados:**
```javascript
// Entrada dramática
ease: "power4.out"

// Saída suave  
ease: "power2.in"

// Bounce sutil
ease: "back.out(1.7)"

// Elástico (botões)
ease: "elastic.out(1, 0.3)"
```

---

## Q3.3: Qual efeito Aurora está sendo usado?

**Catálogo de Efeitos Disponíveis:**

### Heroes
| Efeito | Quando Usar | Complexidade |
|--------|-------------|--------------|
| Black Hole Reveal | Hero com transição épica | ⭐⭐⭐ |
| Spiral Vortex Hero | Hero tech/futurista | ⭐⭐⭐⭐ |
| Parallax Depth Stack | Hero com profundidade | ⭐⭐ |

### Interações
| Efeito | Quando Usar | Complexidade |
|--------|-------------|--------------|
| Magnetic Interactions | Botões, links, cards | ⭐⭐ |
| Custom Cursor + Trail | Global | ⭐⭐ |
| 3D Tilt Cards | Cards de produto/serviço | ⭐⭐ |

### Menus
| Efeito | Quando Usar | Complexidade |
|--------|-------------|--------------|
| Spiral Vortex Menu | Menu alternativo/mobile | ⭐⭐⭐⭐⭐ |
| Fullscreen Stagger | Menu fullscreen padrão | ⭐⭐ |

### Animações de Texto
| Efeito | Quando Usar | Complexidade |
|--------|-------------|--------------|
| Text Split Reveal | Headlines de seção | ⭐⭐ |
| Scramble/Decode | Hero title | ⭐⭐⭐ |

**Regra:** Todo site S-Tier deve usar NO MÍNIMO 3 efeitos Aurora.

---

## Q3.4: O scroll parallax está em múltiplas camadas?

**Sistema de Profundidade:**

```
┌─────────────────────────────────────────────────────────────┐
│  Camada         │ data-speed │ Movimento │ Exemplo          │
├─────────────────────────────────────────────────────────────┤
│  Deep BG        │ 0.1 - 0.2  │ Muito lento │ Gradient, glow │
│  Background     │ 0.2 - 0.3  │ Lento       │ Grid, texture  │
│  Midground      │ 0.4 - 0.5  │ Médio       │ Cards laterais │
│  Content        │ 0.5 - 0.6  │ Normal      │ Texto, CTAs    │
│  Foreground     │ 0.7 - 0.8  │ Rápido      │ Decorações     │
│  Near           │ 0.9        │ Muito rápido│ Partículas     │
└─────────────────────────────────────────────────────────────┘
```

**Gate:** Se todas as camadas movem na mesma velocidade, NÃO é parallax.

---

# ✅ FASE 4: POLISH & QA

## Q4.1: O site passa no "Transformation Test"?

**Pergunta Crítica:** "O site parece estar ROLANDO ou TRANSFORMANDO?"

```
Se a resposta for "rolando"     → REPROVAR, refinar animações
Se a resposta for "transformando" → APROVAR, prosseguir
```

**Sintomas de "Rolando" (problemas):**
- Elementos simplesmente sobem/descem
- Transições abruptas entre seções
- Falta de parallax
- Animações lineares

**Sintomas de "Transformando" (correto):**
- Sensação de viajar/atravessar
- Elementos aparecem com intenção
- Profundidade visual clara
- Ritmo cinematográfico

---

## Q4.2: Checklist de Elementos Obrigatórios

### Interatividade Global
```
□ Cursor customizado funcionando em TODA página?
□ Smooth scroll (Lenis) interceptando?
□ Preloader com transição de saída?
□ Menu acessível (keyboard navigation)?
```

### Hero Section
```
□ 100vh inicial?
□ Animação de entrada?
□ Mouse parallax ou follow?
□ Scroll-triggered transformation?
□ Elemento visual hipnótico?
```

### Cards/Produtos
```
□ 3D Tilt no hover?
□ Magnetic pull?
□ Cursor expande?
□ Transição de entrada staggered?
```

### Tipografia
```
□ Headlines com text-reveal animation?
□ Fluid typography (clamp)?
□ Cursor "text" em headlines grandes?
```

### Backgrounds
```
□ Noise/grain texture overlay?
□ Parallax em múltiplas camadas?
□ Gradients sutis (não chapados)?
```

### Footer
```
□ Peso visual ("heavy closure")?
□ Contraste com seção anterior?
□ Links com hover state?
```

---

## Q4.3: Performance Targets

**Métricas Obrigatórias:**

| Métrica | Target | Crítico |
|---------|--------|---------|
| Lighthouse Performance | > 85 | > 70 |
| First Contentful Paint | < 1.8s | < 2.5s |
| Largest Contentful Paint | < 2.5s | < 4s |
| Cumulative Layout Shift | < 0.1 | < 0.25 |
| Time to Interactive | < 3.5s | < 5s |
| FPS durante animações | 60fps | > 45fps |

**Regra:** WebGL/Canvas NÃO é desculpa para má performance. Otimizar.

---

## Q4.4: Mobile Validation

```
□ Cursor desabilitado em touch?
□ Animações simplificadas (reduce motion)?
□ Typography não quebra em 320px?
□ Botões têm área de toque adequada (44px)?
□ Menu funciona em touch?
□ Performance mantida em mobile?
```

**Anti-pattern:** Site que só funciona bem em desktop. Mobile é OBRIGATÓRIO.

---

## Q4.5: O "Fifty K Test"

**Pergunta Final:** "Este site parece custar mais de $50.000?"

```
□ SIM → Pronto para deploy
□ NÃO → Identificar o que está "template-like" e corrigir
```

**Sinais de "Template" (reprovar):**
- Animações genéricas (fade simples)
- Cursor padrão do browser
- Sem preloader ou preloader básico
- Parallax inexistente
- Cores sem intenção semântica
- Typography com breakpoints fixos

**Sinais de "$50k+" (aprovar):**
- Cursor customizado com estados
- Preloader cinematográfico
- Hero com "wow factor"
- Parallax em múltiplas camadas
- Microinterações magnéticas
- Typography fluida e arquitetural
- Ritmo dark/light intencional
- Transições que "transportam"

---

# 📚 BIBLIOTECA AURORA: CATÁLOGO COMPLETO

## Componentes Disponíveis (v1.0)

### 🖱️ Cursor & Interactions
| Componente | Arquivo | Dependências |
|------------|---------|--------------|
| Sovereign Cursor | `SovereignCursor.tsx` | GSAP |
| Magnetic Button | Integrado no Cursor | GSAP |
| 3D Tilt Card | `Tilt3DCard.tsx` | GSAP |

### 🎬 Preloader & Transitions
| Componente | Arquivo | Dependências |
|------------|---------|--------------|
| Genesis Preloader | `GenesisPreloader.tsx` | GSAP |
| Black Hole Reveal | `black-hole-reveal.html` | GSAP, ScrollTrigger |
| Spiral Vortex | `spiral-vortex-menu.html` | GSAP |

### 📜 Scroll & Parallax
| Componente | Arquivo | Dependências |
|------------|---------|--------------|
| Smooth Scroller | `SmoothScroller.tsx` | Lenis |
| Parallax Layer | `ParallaxLayer.tsx` | GSAP, ScrollTrigger |
| Scroll Velocity | `ScrollVelocity.tsx` | GSAP |

### ✨ Typography & Text
| Componente | Arquivo | Dependências |
|------------|---------|--------------|
| Text Split Reveal | `TextSplitReveal.tsx` | GSAP, ScrollTrigger |
| Text Scramble | Integrado em hooks | Vanilla JS |

### 🍔 Menus
| Componente | Arquivo | Dependências |
|------------|---------|--------------|
| Spiral Vortex Menu | `SpiralVortexMenu.tsx` | GSAP |

### 🌌 Backgrounds
| Componente | Arquivo | Dependências |
|------------|---------|--------------|
| Starfield | `SovereignStarfield.tsx` | Canvas |
| Noise Grain | CSS only | - |
| Gradient Mesh | CSS only | - |

---

## Matriz de Decisão: Qual Efeito Usar?

### Por Tipo de Seção

| Seção | Efeitos Recomendados |
|-------|---------------------|
| **Hero** | Black Hole + Parallax + Text Scramble |
| **Sobre/Story** | Parallax Layers + Text Reveal |
| **Serviços/Cards** | 3D Tilt + Magnetic + Stagger |
| **Produtos** | 3D Tilt + Parallax Images |
| **CTA/Interstitial** | Text Reveal + Gradient |
| **Footer** | Magnetic Links + Subtle Parallax |

### Por Arquétipo

| Arquétipo | Efeitos Primários |
|-----------|------------------|
| **Sovereign** | Black Hole, Gold Glow, Serif Reveals |
| **Cyber** | Spiral Vortex, Neon Trails, Glitch |
| **Editorial** | Parallax Type, Clean Reveals |

---

# 📜 REGRAS DE OURO

## 1. Cursor é Obrigatório
Sites sem cursor customizado NÃO são S-Tier. Período.

## 2. Preloader Cria Antecipação
Não é sobre "esconder o loading". É sobre criar expectativa.

## 3. Transformação > Scroll
O usuário deve sentir que está VIAJANDO, não rolando uma página.

## 4. Parallax em Camadas
Mínimo 3 velocidades diferentes. Uma velocidade = sem profundidade.

## 5. Peso nas Animações
Nada linear. Tudo tem ease com "peso" (power4, expo, elastic).

## 6. Typography é Arquitetural
Hero text deve ter escala de 10vw+. Deve "ocupar espaço".

## 7. Silence is Luxury
Menos elementos, mais impacto. Remover o desnecessário.

## 8. Ritmo Dark/Light
Alternar seções com contraste cria ritmo visual.

## 9. O Respiro Visual
Nunca bloco-a-bloco sem transição. Sempre há um "breath".

## 10. Mobile Não é Afterthought
Performance e funcionalidade em mobile são obrigatórias.

---

# 🚦 GATES DE APROVAÇÃO

## Gate 1: Setup (Fase 1)
```
□ Arquitetura híbrida configurada (Fixed Hero + Scroll Content)
□ Sistema de cores semântico (CSS variables)
□ Typography fluida (clamp, zero breakpoints)
□ Lenis smooth scroll funcionando
```
**Se qualquer item = NÃO → Não avançar**

## Gate 2: Primitivos (Fase 2)
```
□ Cursor customizado implementado
□ Preloader com transição
□ Data-attributes aplicados
□ Magnetic em elementos interativos
```
**Se qualquer item = NÃO → Não avançar**

## Gate 3: Cinematografia (Fase 3)
```
□ Hero tem "O Punch" (wow factor)
□ Mínimo 3 efeitos Aurora aplicados
□ Parallax em múltiplas camadas
□ Transições com "peso" (easings corretos)
```
**Se qualquer item = NÃO → Não avançar**

## Gate 4: QA Final (Fase 4)
```
□ Transformation Test: "Transformando" não "Rolando"
□ Fifty K Test: Parece premium, não template
□ Performance: Lighthouse > 85, 60fps
□ Mobile: Funcional e performático
```
**Se qualquer item = NÃO → Não fazer deploy**

---

# 📋 TEMPLATE DE CHECKLIST RÁPIDO

Copie este checklist para cada projeto:

```markdown
# [NOME DO PROJETO] - Sovereign Checklist

## Setup
- [ ] Arquétipo definido: _______________
- [ ] Paleta semântica configurada
- [ ] Typography fluida
- [ ] Lenis smooth scroll

## Primitivos
- [ ] SovereignCursor implementado
- [ ] GenesisPreloader implementado
- [ ] Data-cursor em elementos interativos
- [ ] Data-speed em parallax layers

## Cinematografia
- [ ] Hero com wow factor: _______________
- [ ] Efeito Aurora 1: _______________
- [ ] Efeito Aurora 2: _______________
- [ ] Efeito Aurora 3: _______________
- [ ] Parallax 3+ camadas

## QA
- [ ] Transformation Test: PASS
- [ ] Fifty K Test: PASS
- [ ] Lighthouse: ___/100
- [ ] Mobile: PASS

## Assinatura
Data: ___/___/___
Aprovador: _______________
```

---

**Documento criado por Claude | Sovereign Workflow v3.0**
**Versão: 1.0 | Última atualização: Janeiro 2025**
