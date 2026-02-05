# Implementation Plan - Consórcio Product Architecture

## Goal
Implement dedicated sub-pages for each Consórcio product category (**Auto, Imóvel, Pesados, Serviços, Proteção**) within the `src/app/consorcio/` route. These pages will utilize the **Astro Chat Aesthetic** (Glass Layout, Sovereign Gold) and the modular components (`ProductPortfolio`, `ActiveToolPanel`, `NeuralStream`) to create an immersive, product-specific experience.

## User Review Required
> [!IMPORTANT]
> Since `src/app/agent/page.tsx` was deleted, these new product pages will serve as the primary interactive endpoints.

## Proposed Changes

### 1. Route Structure & Content Source
- **`src/app/consorcio/auto/page.tsx`**
  - Source: `04_consorcio_carros.md`
  - Context: "Bem-vindo ao Consórcio Auto..."
  - Defaults: R$ 50k / 60 months
- **`src/app/consorcio/imovel/page.tsx`**
  - Source: `05_consorcio_imoveis.md`
  - Context: "Bem-vindo ao Consórcio Imóvel..."
  - Defaults: R$ 300k / 180 months
- **`src/app/consorcio/pesados/page.tsx`**
  - Source: `07_consorcio_caminhoes.md`
  - Context: "Bem-vindo ao Consórcio Pesados..."
  - Defaults: R$ 250k / 120 months
- **`src/app/consorcio/servicos/page.tsx`**
  - Source: `08_consorcio_servicos.md`
  - Context: "Bem-vindo ao Consórcio Serviços..."
  - Defaults: R$ 20k / 24 months
- **`src/app/consorcio/protecao/page.tsx`** (Index)
  - Sources: `13_...`, `14_...`, `15_...`, `16_...`
  - Context: "Bem-vindo à Proteção..."
  - Defaults: N/A (Show Premium metrics)
- **`src/app/consorcio/motos/page.tsx`** (NEW)
  - Source: `06_consorcio_motos.md`
  - Context: "Bem-vindo ao Consórcio Motos..."
  - Defaults: R$ 15k / 36 months
- **`src/app/consorcio/pontual/page.tsx`** (NEW)
  - Source: `09_consorcio_pontual.md`
  - Context: "Bem-vindo ao Consórcio Pontual..."
  - Defaults: R$ 40k / 6 months

### 2. Shared Product Layout (`ProductConsole`)
Create **`src/components/agent/ProductConsole.tsx`** as the unified wrapper.
**Props Interface:**
```typescript
interface ProductConsoleProps {
  initialContext: string; // The welcome message
  assetDefault: number;   // e.g. 50000
  horizonDefault: number; // e.g. 60
  activeCategory: string; // e.g. "AUTOMOTIVE"
  children?: React.ReactNode; // Optional additional content
}
```

### 3. Component Updates
#### [MODIFY] `src/components/agent/ProductPortfolio.tsx`
- Add `selectedCategory` prop.
- Add `Motos` and `Pontual` navigation items if missing.

#### [MODIFY] `src/components/agent/ActiveToolPanel.tsx`
- Accept `assetValue` and `timeHorizon` as props (controlled by parent `ProductConsole`).

### 4. Updates to Landing Page
#### [MODIFY] `src/app/consorcio/page.tsx`
- Update `Link` hrefs from `/agent?context=...` to the new routes:
    - `/consorcio/auto`
    - `/consorcio/imovel`
    - etc.

## Verification Plan
- **Build Check:** Ensure all new routes build statically.
- **Navigation Check:** Verify clicking "Simular Agora" on the Consórcio landing page takes the user to the correct styled product page.
- **Context Check:** Verify the endpoint initializes with the correct context (e.g., Auto page says "Welcome to Auto Protocol").
