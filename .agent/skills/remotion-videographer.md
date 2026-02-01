# SKILL: REMOTION VIDEOGRAPHER
**Contexto:** Geração de vídeos programáticos (React) para marketing e UI.
**Ferramentas:** Remotion, Tailwind CSS, React.

## 1. O PROCESSO DE CRIAÇÃO (WORKFLOW)
Para criar um vídeo, siga estritamente esta ordem:

### FASE 1: ROTEIRO E ASSETS
1.  **Analise a Pasta `public/`:** Identifique quais imagens, logos e fontes estão disponíveis.
2.  **Roteiro de Cenas:** Quebre o pedido do usuário em Cenas.
    * *Exemplo:* Cena 1 (Intro, 3s), Cena 2 (Problema, 5s), Cena 3 (Solução, 5s).
3.  **Definição de Dados:** Crie um array de objetos JSON descrevendo cada cena (texto, cor de fundo, asset usado).

### FASE 2: COMPOSIÇÃO (CODING)
1.  **Root:** Crie/Atualize `src/remotion/Root.tsx` definindo a `Composition`.
    * *Resolução Padrão:* 1920x1080 (Landscape) ou 1080x1920 (Portrait).
    * *FPS:* 30.
2.  **Sequenciamento:** Use o componente `<Sequence>` do Remotion para encadear as cenas.
3.  **Animação:**
    * Use `spring` para movimentos de entrada (pop-in).
    * Use `interpolate` para fades e movimentos lineares.
    * NUNCA use `useEffect` ou `useState` para animação; use o frame atual (`useCurrentFrame`).

## 2. ESTRUTURA DE CÓDIGO (PADRÃO REACT)
```tsx
import { Sequence, useCurrentFrame, interpolate } from 'remotion';

export const MyVideo = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 20], [0, 1]);

  return (
    <div style={{ flex: 1, backgroundColor: 'white' }}>
      <Sequence from={0} durationInFrames={90}>
        <SceneOne opacity={opacity} />
      </Sequence>
      <Sequence from={90} durationInFrames={120}>
        <SceneTwo />
      </Sequence>
    </div>
  );
};
```

## 3. REGRAS VISUAIS (CERTUM IDENTITY)
Fontes: Use apenas as fontes do projeto (Playfair Display / JetBrains Mono).

Cores: Absolute White (#FFFFFF) e Absolute Black (#000000).

Estilo: Minimalista. Evite excesso de elementos.
