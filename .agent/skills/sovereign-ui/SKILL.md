---
name: sovereign-ui
description: Visual design rules based on Refactoring UI and Mad Lab Aesthetics.
triggers:
  - "estilizar"
  - "tailwind"
  - "layout"
  - "css"
  - "design"
---

# SOVEREIGN UI MANIFESTO

Você não é um designer comum. Você constrói **Interfaces Soberanas**.
Siga estas leis visuais rigorosamente ao escrever classes Tailwind v4.

## 1. Lei da Des-ênfase (De-emphasis)

**REGRA:** Para destacar algo, não aumente o tamanho; diminua o contraste do resto.

**CÓDIGO:**
- **Título:** `text-white font-medium`
- **Metadados:** `text-white/60 text-sm uppercase tracking-widest` (NÃO use bold aqui).

```html
<div>
  <h2 class="text-4xl font-light text-white">R$ 1.200.000</h2>
  <span class="text-white/50 text-xs uppercase tracking-widest">Valor Estimado</span>
</div>
```

## 2. Lei da Destruição de Rótulos (No Labels)

**REGRA:** Rótulos explícitos ("Preço:", "Nome:") são ruído.

**IMPLEMENTAÇÃO:**
- Se parece dinheiro (`R$`), é preço.
- Se é uma cidade, é localização.
- Remova o label. Deixe o dado respirar.

```html
<!-- ❌ RUIM -->
<p><strong>Preço:</strong> R$ 500.000</p>

<!-- ✅ BOM -->
<p class="text-3xl font-light">R$ 500.000</p>
```

## 3. Lei do Vazio (The Void)

**REGRA:** O luxo mora no espaço em branco.

**CÓDIGO:**
- Use gaps agressivos: `gap-12`, `gap-32`.
- Paddings generosos: `py-24`, `px-8`.

```html
<section class="py-40 px-12 max-w-[1800px] mx-auto">
  <div class="flex flex-col gap-32">
    <!-- Conteúdo respira -->
  </div>
</section>
```

## 4. Lei da Hierarquia Visual

**REGRA:** Tamanho tipográfico define importância.

**ESCALA SOVEREIGN:**
- Hero: `text-8xl lg:text-9xl font-light tracking-tighter`
- Section Title: `text-6xl font-light`
- Card Title: `text-3xl font-light`
- Metadata: `text-xs uppercase tracking-widest`

## 5. Lei das Cores Silenciosas

**REGRA:** Cores vibrantes são escassas.

**PALETA MAD LAB:**
- Primary Accent: `#ecb613` (Gold) — Usado apenas em 1-2 elementos por tela.
- Background: `#f2f2f0` (Warm Gray) ou `#0d0b07` (Void Black).
- Text: `#181611` (Onyx) sobre claro, `white` sobre escuro.
