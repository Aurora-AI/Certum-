# Auditoria de Design S-Tier: Certum Prime vs. Exo Ape Padrão Ouro

Com base no novo ecossistema do *Mad Lab Aurora* (Axiomas e Skills) e parametrizado contra o nível estético do **Exo Ape** (Pico global em tipografia extravagante fluida, animações cinemáticas, e vazio espacial monumental), aqui está a auditoria das páginas `Home` e `Pontual`.

> *Nota: O Exo Ape é focado em agência artística. A adaptação para "Exo Ape Financeiro" significa pegar aquele peso visual (Brutalismo Elegante) e aplicar em gatilhos de Confiança e Venda.*

---

## 🟢 1. O Que Manter (Pontos Fortes - Awwwards Ready)

### 1.1 O Motor WebGL / Volume (Home)
- **`HeroVolumetric.tsx`**: A lógica de Compute Shaders (10k partículas simuladas em GPU) e a cor Platinum/Void são excepcionais. O Exo Ape é mestre em backgrounds fractais/partículas densas e atmosféricas (Como visto nos projetos deles para museus).
- **A Sincronicidade do Preloader**: O fluxo onde o `Hero` aguarda a abertura da porta do Vault (`window.addEventListener('preloader-complete')`) é padrão AAA de coreografia na web.

### 1.2 A Estruturação GSAP (Pontual)
- **`AboutManifesto.tsx` e `PontualMechanics.tsx`**: O uso da curva de easing `cubic-bezier(0.16, 1, 0.3, 1)` revela profundo conhecimento das leis de desaceleração.
- A linha que constrói pelo scroll (`.mechanics-bar-fill`) é perfeita e não deve ser removida. Isso dá o "peso" físico que o Exo Ape usa em suas timelines longas horizontais.

---

## 🛑 2. O Que Melhorar (Fraquezas e GAP para S-Tier Comercial)

### 2.1 Design: Tipografia, Grids e "Ar" (Whitespace)
- **Problema 1: Contraste Excessivo do Modo Claro.** A página Pontual vira de `[#0d0e13]` (Void) para branco absoluto `[#FFFFFF]` de forma brusca no `AboutManifesto.tsx` e no `PontualSimulator.tsx`. O Exo Ape usa tons "Bone", "Alabaster" ou "Ash" suaves, não branco total. A luz deve ser "cara", não ofuscante.
- **Problema 2: Tipografia Acanhada na Copy.** Em `PontualMechanics`, o texto *"A Engenharia da Liquidez Antecipada"* está grande, mas pode faltar *Trackings* massivos em títulos intersecionais. O Exo Ape cria "Arte" com fontes gigantes que saem da tela (`clamp(60px, 15vw, 300px)` com `letter-spacing: -0.05em`).
- **Problema 3: "S-Grid" não respeitado rigorosamente.** Componentes empilhados sem o "suspiro" monumental do Exo Ape. Sessões estão "sujas" (Muitos botões e links adjacentes perdendo o foco do Axioma de Sugarman de leitura contínua).

### 2.2 Acessibilidade Crítica (O Calcanhar de Aquiles)
O `Delta Critic` disparou dezenas de bloqueios lendo estes arquivos.
- **Problema 4: O Simulador está Morto para Teclados.** Em `PontualSimulator.tsx`, os botões de seleção de produto só alteram visuais vagos, o `<input type="range">` não tem `<label>` conectada com id, e nenhum local recebe `aria-[status]` para leitores de tela quando o valor financeiro se atualiza dinamicamente.
- **Problema 5: Ausência da Skill "Prefers-Reduced-Motion".** O `PontualMechanics` injeta um brutal `useLayoutEffect` com *Staggering* de Y. Se um empresário com labirintite entrar no site, os textos pulando farão ele fechar a aba instantaneamente. Todo GSAP deve ser freado se o SO pedir paz.

### 2.3 Performance: "Jank" Oculto
- **Problema 6: Mistura Letal de Filters.** Em `AboutManifesto.tsx`, a combinação monstruosa de `grayscale`, `contrast-110`, `saturate-110`, e opacidades sendo transitadas simultaneamente no hover `<video className="...">` causa picos de repaints na GPU do Mobile. O Exo Ape processa o grayscale num wrapper de SVG feGaussianBlur ou pre-processa o vídeo, nunca força a GPU do celular a renderizar CSS Filters em vídeos rodando 60fps localmente.

---

## 🚀 3. Plano de Ação (Refatoração para "Exo Ape Comercial")

1. **Acessibilidade Tática (Imediata):** 
   - Envolver o `<input type="range">` do simulador com `aria-live="polite"` para anúncio de crédito.
   - Criar o arquivo `hooks/useReducedMotion.ts` e varrer todo o GSAP do `PontualMechanics` com ele.

2. **Tipografia Extrema (Estética Exo Ape):** 
   - Aumentar o impacto do `PontualHero` mudando os limites de tipografia (`clamp(60px,10vw,180px)` para `clamp(80px, 15vw, 300px)`) em conjunto com tracking negativo severo, forçando as palavras *"CERTUM PRIME"* a quase se tocarem no limite da tela. Mudança de branco absoluto de fundo para tons Ouro-Cinza Esgotado (`#F2F0ED`).

3. **Motion Cleanup:** 
   - Remover os CSS Filters do hover de vídeos, delegando transições estritamente para `opacity` e `transform`, travando 60FPS constantes no iOS.

**Sumário:** A base intelectual do código é muito avançada, mas falta a "Polidez Paranoica" e a escalabilidade macrocósmica da interface (que a agência Exo Ape domina). Podemos usar o *Gamma Engineer* para refatorar o `PontualSimulator` blindando sua acessibilidade agora mesmo, ou ir para o impacto visual refatorando a paleta e grid do `PontualHero`.
