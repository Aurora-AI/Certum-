# Walkthrough: Consórcio Product Architecture (Astro Chat)

We have successfully migrated the Consórcio experience from a monolithic agent page to a modular, product-specific architecture. This improves SEO, user navigation, and allows for specialized AI contexts for each product.

## 1. New Architecture: `ProductConsole`
A wrapper component that unifies the "Astro Chat" aesthetic across all pages.
- **Dynamic Props:** Accepts `assetDefault`, `horizonDefault`, and `initialContext`.
- **Integrated State:** Controls `ActiveToolPanel` (pricing/time) via user input or defaults.
- **Visuals:** Uses `StaticParticles` (Antigravity), `NeuralStream` (Chat), and Glassmorphism.

## 2. Product Routes
Each product has its own URL, enabling direct marketing and deep linking.
- `src/app/consorcio/auto/page.tsx` -> **Automotive**
- `src/app/consorcio/imovel/page.tsx` -> **Real Estate**
- `src/app/consorcio/pesados/page.tsx` -> **Heavy Machinery**
- `src/app/consorcio/servicos/page.tsx` -> **Services**
- `src/app/consorcio/motos/page.tsx` -> **Motos**
- `src/app/consorcio/pontual/page.tsx` -> **Pontual Protocol**
- `src/app/consorcio/protecao/page.tsx` -> **Protection Layer**

## 3. Intelligence Ingestion (Seguros)
We created a Python script `scripts/ingest_insurance.py` to target the user's local OneDrive folder.
- **Source:** `C:\Users\rodri\OneDrive\Rodobens\Treinamentos`
- **Destination:** `docs/rodobens/insurance/*.md`
- **Status:** Processing 14 PDF files (approx 50% complete at time of writing).

## 4. Verification
- **Build:** `npm run dev` compiled successfully after fixing `StaticParticles` import and `lucide-react` icons.
- **Runtime:** `ReferenceError` for missing icons resolved.
- **Navigation:** All "Simular" buttons on the main Consórcio page now route correctly.

## Next Steps
- Verify the completion of PDF ingestion.
- Implement the "Insurance Mapping" logic to use the new markdown files in the `Protecao` module.
