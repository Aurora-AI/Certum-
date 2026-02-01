# 🌌 Antigravity Skills

> Transform Claude into an expert at building award-winning, cinematographic websites.

Inspirado pelo [Remotion Skills](https://remotion.dev), o Antigravity Skills é um conjunto de instruções e playbooks que capacitam o Claude a criar websites com qualidade de Awwwards usando GSAP, ScrollTrigger e Lenis.

---

## ✨ O Que É Isso?

Antigravity Skills é um **"skill file"** - um documento estruturado que ensina Claude a:

- Pensar em **Sections** (cenas) e **Components** (elementos)
- Criar animações cinematográficas com GSAP
- Implementar scroll storytelling profissional
- Seguir padrões de design de sites premiados
- Iterar de forma eficiente até a perfeição

### Antes vs Depois

| Sem Antigravity Skills | Com Antigravity Skills |
|------------------------|------------------------|
| "Crie um site bonito" → resultado genérico | Prompt estruturado → resultado cinematográfico |
| Animações básicas | Scroll choreography profissional |
| Layout funcional | Experiência imersiva |
| CSS transitions | GSAP + ScrollTrigger + Lenis |

---

## 📁 Estrutura do Projeto

```
antigravity-skills/
│
├── SKILL.md                    # 📖 Documento principal (leia primeiro!)
│
├── docs/
│   ├── ARCHITECTURE.md         # Estrutura de composições e sections
│   ├── ANIMATIONS.md           # Biblioteca completa de animações
│   └── WORKFLOW.md             # Guia passo-a-passo do processo
│
├── templates/
│   └── PROMPTS.md              # Templates de prompts prontos para usar
│
├── components/
│   └── COMPONENTS.md           # Componentes React com animações
│
└── examples/
    └── (projetos de exemplo)
```

---

## 🚀 Como Usar

### 1. Instale no Claude Code

```bash
# Clone ou copie a pasta para seu ambiente Claude Code
claude install /path/to/antigravity-skills
```

Ou adicione manualmente à pasta `/mnt/skills/user/`.

### 2. Inicie um Novo Projeto

Diga ao Claude:

```
Quero criar um site usando as Antigravity Skills.
Leia o SKILL.md primeiro e me ajude a estruturar o projeto.
```

### 3. Use o Template de Prompt

Copie o template de `/templates/PROMPTS.md` e preencha:

```markdown
# ANTIGRAVITY PROJECT: Meu Projeto

## PROJECT SPECS
- Framework: Next.js 14
- Style: Swiss Private Banking
- ...

## SECTION 1: HERO
...
```

### 4. Itere Section por Section

Após a V1, refine cada section:

```
A Section 2 precisa de mais impacto.
Aumente o stagger dos cards para 0.2s
e adicione um efeito de blur-to-sharp no título.
```

---

## 📚 Documentação

| Documento | Descrição |
|-----------|-----------|
| [SKILL.md](./SKILL.md) | Documento principal - filosofia, mental model, quick start |
| [ARCHITECTURE.md](./docs/ARCHITECTURE.md) | Como estruturar sections, components, layers |
| [ANIMATIONS.md](./docs/ANIMATIONS.md) | Biblioteca de animações com código |
| [WORKFLOW.md](./docs/WORKFLOW.md) | Processo completo do briefing ao deploy |
| [PROMPTS.md](./templates/PROMPTS.md) | Templates prontos para copiar e usar |
| [COMPONENTS.md](./components/COMPONENTS.md) | Componentes React reutilizáveis |

---

## 🎨 Style Presets

O skill inclui 4 presets visuais prontos:

### Swiss Private Banking
- Luxo discreto, serif headlines, muito whitespace
- Cores: cream, charcoal, gold
- Animações: lentas, confiantes, sutis

### Tech Brutal
- High contrast, bold sans-serif, grids visíveis
- Cores: black, white, neon accents
- Animações: rápidas, glitch effects, hard cuts

### Organic Luxury
- Formas orgânicas, earth tones, texturas naturais
- Cores: cream, terracotta, olive
- Animações: fluidas, morphing, parallax suave

### Minimal Editorial
- Magazine-like, tipografia gigante, black & white
- Cores: white, black, editorial red
- Animações: elegantes, line-by-line, crossfades

---

## 🛠 Tech Stack

### Obrigatório
```json
{
  "gsap": "^3.12.0",
  "lenis": "^1.0.0"
}
```

### GSAP Plugins (recomendados)
- ScrollTrigger (essencial)
- SplitText (text animations)
- ScrollSmoother (smooth scroll avançado)

### Frameworks Suportados
- Next.js 13/14 (App Router)
- Astro
- HTML + Vite
- React (standalone)

---

## 🎬 Filosofia

> "A website is a composition. Each section is a scene. Each component tells part of the story. Animations are the emotion."

O Antigravity Skills é baseado na ideia de que criar um website cinematográfico é como editar um vídeo:

1. **Composition** = Website completo
2. **Scene** = Section da página
3. **Component** = Elemento individual
4. **Animation** = Movimento e emoção
5. **Transition** = Conexão entre scenes

Quando você pensa assim, o design e as animações se tornam inseparáveis.

---

## 📋 Checklist de Qualidade

Antes de entregar:

### Visual
- [ ] Tipografia distintiva (não Inter/Roboto)
- [ ] Palette cohesiva e intencional
- [ ] Hierarquia visual clara
- [ ] Nada genérico ou "AI slop"

### Animação
- [ ] Load sequence cronometrada
- [ ] Scroll animations suaves
- [ ] Stagger timing natural
- [ ] Easing consistente
- [ ] 60fps em todas as animações

### Técnico
- [ ] GSAP registrado corretamente
- [ ] ScrollTrigger cleanup (React)
- [ ] Lenis integrado
- [ ] Mobile otimizado
- [ ] Reduced motion suportado

---

## 🔗 Referências

Sites para estudar:

- [Studio Dialect](https://dialect.studio) - Typography mastery
- [Exoape](https://exoape.com) - Scroll choreography
- [Fantasy.co](https://fantasy.co) - Minimal elegance
- [Locomotive](https://locomotive.ca) - Technical excellence
- [Aristide Benoist](https://aristidebenoist.com) - Creative interaction
- [Basement Studio](https://basement.studio) - Bold experimentation

---

## 🤝 Integração com Aurora Pipeline

Este skill é parte do Aurora Gold Pipeline:

```
┌─────────────┐     ┌─────────────┐     ┌─────────────────────┐
│  Architect  │────►│  Designer   │────►│  Cinematographer    │
│    Agent    │     │    Agent    │     │  (ANTIGRAVITY)      │
└─────────────┘     └─────────────┘     └─────────────────────┘
                                                  │
                                                  ▼
                    ┌─────────────┐     ┌─────────────────────┐
                    │     QA      │◄────│     Engineer        │
                    │    Agent    │     │       Agent         │
                    └─────────────┘     └─────────────────────┘
```

O **Cinematographer Agent** usa este skill para adicionar animações SEM modificar o design existente - apenas aprimorando com movimento.

---

## 📄 License

Proprietary - Aurora Gold Pipeline by Rodrigo

---

## 🚧 Roadmap

- [ ] Mais components prontos
- [ ] Exemplos completos de projetos
- [ ] Integração com Framer Motion
- [ ] Suporte a Three.js / WebGL
- [ ] Visual Editor (futuro)

---

*"Make websites that move people."*

**Antigravity Skills v1.0**
