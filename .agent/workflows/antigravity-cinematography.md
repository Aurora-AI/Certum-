# Antigravity Workflow Guide

Processo completo para criar websites cinematográficos do zero ao deploy.

---

## Overview do Processo

```
┌─────────────────────────────────────────────────────────────────┐
│                    ANTIGRAVITY WORKFLOW                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   ┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐    │
│   │  BRIEF  │───►│ PROMPT  │───►│  BUILD  │───►│ ITERATE │    │
│   └─────────┘    └─────────┘    └─────────┘    └─────────┘    │
│        │              │              │              │          │
│        ▼              ▼              ▼              ▼          │
│   Entender       Estruturar      Gerar V1      Refinar        │
│   o projeto      em scenes       com AI       por scene       │
│                                                                 │
│   ┌─────────────────────────────────────────────────────────┐  │
│   │                      DELIVER                            │  │
│   │         QA → Otimização → Deploy                        │  │
│   └─────────────────────────────────────────────────────────┘  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Fase 1: BRIEFING (30-60 min)

### 1.1 Coleta de Informações

**Perguntas Essenciais:**
- Qual é o objetivo principal do site?
- Quem é o público-alvo?
- Quais ações queremos que o visitante tome?
- Existem referências visuais?
- Qual é o tom de voz da marca?

### 1.2 Documento de Brief

```markdown
# PROJECT BRIEF: [Nome]

## Objetivo
[O que o site precisa fazer]

## Público
[Quem vai acessar]

## Tom Visual
[Exemplos: Sofisticado, Ousado, Minimalista, Tecnológico]

## Referências
- [Link 1] - O que gostei: [aspecto específico]
- [Link 2] - O que gostei: [aspecto específico]
- [Link 3] - O que gostei: [aspecto específico]

## Conteúdo Disponível
- [ ] Textos finais
- [ ] Imagens de alta qualidade
- [ ] Logo em SVG
- [ ] Vídeos (se houver)

## Restrições
- Prazo: [data]
- Budget de animações: [simples / moderado / complexo]
- Precisa funcionar em mobile: [sim / não prioridade]
```

### 1.3 Escolha do Style Preset

Baseado no brief, selecione:
- **Swiss Private Banking** → Sofisticação, luxo discreto
- **Tech Brutal** → Inovação, disrupção, tech
- **Organic Luxury** → Wellness, sustentável, premium natural
- **Minimal Editorial** → Conteúdo-first, publicações, portfolios

---

## Fase 2: ASSETS PREP (1-2 horas)

### 2.1 Organização de Pasta

```
/public
├── /fonts
│   ├── display-font.woff2
│   └── body-font.woff2
├── /images
│   ├── hero-bg.webp (otimizado, max 500kb)
│   ├── logo.svg
│   ├── logo-white.svg
│   └── /projects
│       ├── project-1.webp
│       └── project-2.webp
├── /videos
│   └── showreel.mp4 (compressed, 720p)
└── /textures
    └── grain.png
```

### 2.2 Checklist de Assets

```
IMAGENS
[ ] Todas em WebP (melhor compressão)
[ ] Hero image < 500kb
[ ] Thumbnails < 100kb cada
[ ] Logo em SVG (vetorial)
[ ] Favicon preparado

FONTES
[ ] Display font (.woff2)
[ ] Body font (.woff2)
[ ] Font licenses verificadas

VÍDEOS
[ ] Comprimidos para web
[ ] Fallback image para mobile
[ ] Duração < 30s para autoplay

TEXTURAS
[ ] Grain PNG tileable
[ ] Noise SVG (se necessário)
```

### 2.3 Seleção de Tipografia

**Não usar:**
- Inter, Roboto, Arial, System fonts
- Fontes muito usadas por AI (Space Grotesk)

**Considerar:**
```
DISPLAY (Headlines)
- Serif: Editorial New, Freight Display, Canela, GT Sectra
- Sans: Monument Extended, Neue Machina, ABC Diatype
- Mix: Clash Display, Cabinet Grotesk

BODY (Paragraphs)  
- Sans: Suisse Int'l, Graphik, Untitled Sans
- Serif: Source Serif, Lora, Crimson Text
- Mono: JetBrains Mono, IBM Plex Mono
```

---

## Fase 3: STRUCTURE PROMPT (1-2 horas)

### 3.1 Mapear Sections

Identifique quantas sections o site terá:

```
Típico Landing Page:
1. Hero
2. Features/Services
3. How it Works / Process
4. Testimonials / Social Proof
5. CTA / Contact
6. Footer

Portfolio:
1. Hero (nome grande)
2. Selected Works (scroll horizontal)
3. About
4. Contact
5. Footer

Agency:
1. Hero (vídeo)
2. Services (bento)
3. Case Studies (pinned scroll)
4. Team
5. Contact
6. Footer
```

### 3.2 Detalhar Cada Section

Para cada section, defina:

```markdown
## SECTION [N]: [NOME]

### Layout
[Descreva a disposição visual]

### Elementos
1. [Elemento 1] - descrição
2. [Elemento 2] - descrição
3. [Elemento 3] - descrição

### Animação de Entrada
[Como os elementos aparecem quando a section entra em view]

### Scroll Behavior
[O que acontece durante o scroll]

### Transição para Próxima Section
[Tipo de transição]
```

### 3.3 Montar o Prompt Final

Use o template em `/templates/PROMPTS.md` como base.

**Dicas:**
- Seja específico sobre animações
- Cite os assets que estão em `/public`
- Defina timings aproximados
- Especifique hover states

---

## Fase 4: BUILD V1 (2-4 horas)

### 4.1 Setup do Projeto

```bash
# Next.js
npx create-next-app@latest my-project
cd my-project
npm install gsap lenis

# OU Astro
npm create astro@latest my-project
cd my-project
npm install gsap lenis
```

### 4.2 Enviar Prompt para Claude

Cole o prompt estruturado e peça:
```
Crie esse projeto seguindo as Antigravity Skills.
Comece pela estrutura de pastas e componentes base,
depois implemente section por section.
```

### 4.3 Primeira Geração

**Expectativa:** A V1 vai ter ~70% do que você quer. Isso é normal.

**O que verificar:**
- [ ] Estrutura de arquivos está correta
- [ ] GSAP está importado e registrado
- [ ] Lenis está configurado
- [ ] Sections estão na ordem certa
- [ ] Layout geral está próximo do desejado

---

## Fase 5: ITERATE (2-4 horas)

### 5.1 Processo de Refinamento

```
PARA CADA SECTION:
│
├── 1. Visualize no browser
├── 2. Anote o que não está bom
├── 3. Formule o pedido de mudança
├── 4. Aplique a mudança
└── 5. Verifique resultado
```

### 5.2 Tipos de Iteração

**Timing:**
```
"A animação do hero está muito lenta. 
Reduza a duração do headline reveal para 0.6s
e o stagger para 0.02s"
```

**Visual:**
```
"O contraste da Section 2 está baixo.
Mude o background para #0A0A0A
e aumente o tamanho dos cards em 10%"
```

**Animação:**
```
"Os cards da Section 3 estão aparecendo de forma simples demais.
Mude para um efeito de reveal com mask horizontal
e adicione um scale de 1.02 no hover"
```

**Transição:**
```
"A transição entre Hero e Section 2 está abrupta.
Adicione um parallax onde o hero faz fade-out
enquanto a section 2 sobe por baixo"
```

### 5.3 Checklist por Section

Antes de passar para a próxima section:

```
[ ] Elementos estão posicionados corretamente
[ ] Cores/fontes estão de acordo com o style
[ ] Animação de entrada está suave
[ ] Scroll behavior funciona
[ ] Transição para próxima section está boa
[ ] Hover states implementados
[ ] Funciona em mobile (básico)
```

---

## Fase 6: POLISH & QA (1-2 horas)

### 6.1 Performance Check

```javascript
// Verificar FPS das animações
gsap.ticker.fps(); // Deve ser ~60

// Verificar ScrollTrigger
ScrollTrigger.getAll().forEach(st => {
  console.log(st.vars.trigger, st.progress);
});
```

### 6.2 Mobile Optimization

```javascript
// Simplificar animações em mobile
ScrollTrigger.matchMedia({
  "(min-width: 769px)": function() {
    // Animações completas desktop
  },
  "(max-width: 768px)": function() {
    // Animações simplificadas mobile
    // - Remover parallax complexo
    // - Reduzir durations
    // - Simplificar stagger
  }
});
```

### 6.3 Checklist Final

```
PERFORMANCE
[ ] Animações rodam a 60fps
[ ] Sem memory leaks (ScrollTrigger cleanup)
[ ] Imagens otimizadas e lazy loaded
[ ] Fontes com font-display: swap

VISUAL
[ ] Consistência de cores
[ ] Tipografia hierárquica
[ ] Espaçamentos consistentes
[ ] Nenhum overflow horizontal

ANIMAÇÃO
[ ] Load sequence está cronometrada
[ ] Scroll triggers funcionam em todas as sections
[ ] Hover states responsivos
[ ] Transições suaves entre sections

RESPONSIVO
[ ] Desktop (1440px+)
[ ] Laptop (1024px)
[ ] Tablet (768px)
[ ] Mobile (375px)

ACESSIBILIDADE
[ ] Reduced motion respeitado
[ ] Contraste de texto adequado
[ ] Focus states visíveis
[ ] Alt text em imagens
```

### 6.4 Reduced Motion Support

```javascript
// Respeitar preferência do usuário
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

if (prefersReducedMotion) {
  // Desabilitar ou simplificar animações
  gsap.globalTimeline.timeScale(0);
  // Ou usar transições CSS simples
}
```

---

## Fase 7: DEPLOY

### 7.1 Build Otimizado

```bash
# Next.js
npm run build
npm run start

# Vercel (recomendado para Next.js)
vercel deploy --prod

# Netlify
netlify deploy --prod
```

### 7.2 Verificações Pós-Deploy

```
[ ] Site carrega sem erros
[ ] Animações funcionam em produção
[ ] HTTPS ativo
[ ] Meta tags corretas
[ ] OG images configuradas
[ ] Analytics instalado
```

---

## Timeline Típica

| Fase | Tempo Estimado |
|------|----------------|
| Briefing | 30-60 min |
| Assets Prep | 1-2 horas |
| Structure Prompt | 1-2 horas |
| Build V1 | 2-4 horas |
| Iterate | 2-4 horas |
| Polish & QA | 1-2 horas |
| Deploy | 30 min |
| **TOTAL** | **8-16 horas** |

---

## Tips & Tricks

### Economizar Tempo
1. Tenha assets prontos ANTES de começar a codar
2. Use o template de prompt - não reinvente a roda
3. Itere section por section, não tudo de uma vez
4. Guarde snippets de animações que funcionaram

### Evitar Problemas
1. Sempre faça cleanup do ScrollTrigger em React
2. Teste em Safari (animações podem quebrar)
3. Não exagere em parallax em mobile
4. Prefira CSS transforms a position/margin

### Melhorar Resultados
1. Estude sites de referência antes de começar
2. Menos animações, mais impacto
3. Consistência > Variedade
4. O que não se move também comunica

---

*Workflow Guide v1.0 - Antigravity Skills*
