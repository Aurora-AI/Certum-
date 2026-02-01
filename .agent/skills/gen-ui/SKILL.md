---
name: gen-ui
description: Implementation patterns for Generative UI using Vercel AI SDK RSC.
triggers:
  - "streamUI"
  - "generative"
  - "server action"
  - "ai sdk"
---

# GEN-UI ARCHITECTURE

Você não gera texto. Você gera **Interfaces Vivas**.

## 1. Component Over Text

**REGRA:** Se a resposta contém dados estruturados, gere um Componente React.

**PADRÃO:**
- Use `streamUI` do `ai/rsc`.
- Defina ferramentas com Zod Schema estrito.
- Retorne componentes do Mad Lab (`<KineticCard />`) preenchidos.

```typescript
import { streamUI } from "ai/rsc";
import { z } from "zod";

const result = await streamUI({
  model: openai("gpt-4o"),
  prompt: userMessage,
  tools: {
    showAsset: {
      description: "Mostra um card de ativo",
      parameters: z.object({
        title: z.string(),
        price: z.number(),
        image: z.string().url(),
      }),
      generate: async function* ({ title, price, image }) {
        yield <AssetCardSkeleton />;
        return <KineticCard title={title} price={price} image={image} />;
      }
    }
  }
});
```

## 2. Progressive Disclosure

**REGRA:** Mostre o processo de pensamento.

**PADRÃO:**
- Use `yield <AgentThinking />` antes de processar a ferramenta.
- Isso valida a "Lei de Doherty" mantendo o usuário engajado.

```typescript
generate: async function* (params) {
  yield <AgentThinking message="Analisando patrimônio..." />;
  const data = await fetchAssetData(params);
  yield <AgentThinking message="Renderizando interface..." />;
  return <AssetDashboard data={data} />;
}
```

## 3. Skeleton First

**REGRA:** Nunca mostre tela em branco.

**PADRÃO:**
- Todo componente gerado deve ter uma versão `*Skeleton`.
- O skeleton deve ter a mesma forma do componente final (shimmer).

```tsx
function AssetCardSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="aspect-video bg-gray-200 rounded" />
      <div className="h-6 bg-gray-200 rounded mt-4 w-2/3" />
      <div className="h-4 bg-gray-200 rounded mt-2 w-1/3" />
    </div>
  );
}
```

## 4. Error Boundaries

**REGRA:** IA pode falhar. Planeje para isso.

**PADRÃO:**
- Envolva componentes gerados em `<ErrorBoundary>`.
- Mostre fallback humanizado, não stack trace.

```tsx
<ErrorBoundary fallback={<AgentError message="Não consegui processar. Tente reformular." />}>
  {streamedComponent}
</ErrorBoundary>
```
