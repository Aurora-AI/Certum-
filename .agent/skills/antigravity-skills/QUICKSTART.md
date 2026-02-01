# 🚀 Quick Start - Antigravity Skills

## Instalação em 2 Minutos

### Opção 1: Claude Code (Recomendado)

```bash
# Copie a pasta antigravity-skills para a pasta de skills do Claude
cp -r antigravity-skills /mnt/skills/user/
```

Pronto! O Claude agora reconhecerá o skill automaticamente.

### Opção 2: Manual

1. Abra seu projeto no Claude Code
2. Diga: "Leia o arquivo SKILL.md em [caminho] e use como referência"

---

## Primeiro Projeto em 5 Minutos

### Passo 1: Inicie o Claude Code

```bash
# Crie um novo projeto Next.js
npx create-next-app@latest meu-site-premium
cd meu-site-premium

# Instale as dependências
npm install gsap lenis
```

### Passo 2: Abra o Claude Code e cole:

```
Quero criar um site usando as Antigravity Skills.

Projeto: Landing page para [descreva seu projeto]
Estilo: Swiss Private Banking
Seções: Hero, Features (3), CTA

Use GSAP + ScrollTrigger + Lenis.
Comece criando a estrutura e o Hero.
```

### Passo 3: Itere

```
A animação do hero está muito lenta. Reduza para 0.6s.
```

```
Adicione um efeito de parallax na seção de features.
```

```
O CTA precisa de um hover magnético.
```

---

## Comandos Úteis

### Ver animações disponíveis
```
Mostre a biblioteca de animações do Antigravity Skills
```

### Mudar estilo
```
Mude o estilo para Tech Brutal mantendo a estrutura
```

### Adicionar efeitos
```
Adicione grain overlay e gradient mesh ao background
```

### Otimizar mobile
```
Simplifique as animações para mobile
```

---

## Troubleshooting

### GSAP não está funcionando
```bash
# Verifique se está registrado
npm install gsap
```

```javascript
// No topo do componente
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
```

### Lenis não está suave
```javascript
// Conecte com GSAP ScrollTrigger
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);
```

### Animações não limpam (React)
```javascript
useEffect(() => {
  const ctx = gsap.context(() => {
    // suas animações aqui
  }, containerRef);

  return () => ctx.revert(); // IMPORTANTE!
}, []);
```

---

## Links Rápidos

- [SKILL.md](./SKILL.md) - Documento principal
- [PROMPTS.md](./templates/PROMPTS.md) - Templates prontos
- [ANIMATIONS.md](./docs/ANIMATIONS.md) - Biblioteca de efeitos
- [COMPONENTS.md](./components/COMPONENTS.md) - Componentes React

---

## Estrutura de Pastas do Projeto Final

```
meu-site/
├── public/
│   ├── fonts/          # Fontes .woff2
│   ├── images/         # Imagens otimizadas
│   └── textures/       # Grain, noise
├── src/
│   ├── app/            # Next.js App Router
│   ├── components/     # Componentes reutilizáveis
│   ├── sections/       # Hero, Features, CTA...
│   ├── animations/     # Config GSAP
│   └── hooks/          # useLenis, useInView
└── package.json
```

---

*Antigravity Skills v1.0 - Quick Start Guide*
