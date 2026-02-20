# Lighthouse Performance Targets & Core Web Vitals Budget

O Mad Lab produz efeitos visuais de altíssimo impacto (Partículas, Shaders, Kinetic Physics). A fronteira crítica entre um "site pesado e confuso" e um "site Premium Awwwards" é a performance crua.

## 1. O Padrão Ouro Mínimo (Lighthouse Score)
O *Sovereign Director* vetará automaticamente PRs que não atinjam no emulador (Mobile/3G):
*   **Performance:** 90+
*   **Accessibility:** 100
*   **Best Practices:** 100
*   **SEO:** 100

## 2. Metas de Core Web Vitals

*   **LCP (Largest Contentful Paint):** < 2.5s
    *   *Lab Rule:* Backgrounds WebGL ou vídeos devem carregar assets (arquivos `.mp4` minificados, texturas) preemptivamente. Use placeholders leves ou gradientes CSS enquato o shader compila.
*   **INP (Interaction to Next Paint):** < 200ms
    *   *Lab Rule:* O main thread não pode engasgar. Processamento pesado de matemática de layout, arrays de animação com mais de 10.000 partículas devem ser passados via **Web Workers** ou **Compute Shaders** na GPU. O DOM CSS e JavaScript principal deve estar livre para o usuário clicar e receber resposta na hora.
*   **CLS (Cumulative Layout Shift):** 0.0
    *   *Lab Rule:* Imagens com `width`/`height` explícitos. O Canvas R3F deve ter tamanho absoluto. É estritamente proibido conteúdo dinâmico empurrar o layout hero (Zero tolerância).

## 3. Motion Budgeting & FPS Lock
*   **Desktop:** O rate alvo é 60fps (16.6ms per frame de tempo de script/paint máximo combinado). Efeitos premium podem buscar 120fps em monitores de alta taxa caso os shaders permitam.
*   **Mobile:** Dispositivos móveis receberão a Versão Graceful Degradation (Ex: Sem pós-processamento, partículas reduzidas para 2.000, ou desativação global de Blur dinâmico atrelado a mousemovement, que consome extrema bateria).
*   **Custo Cognitivo:** Animações GSAP pesadas (Staggers massivos) devem possuir `will-change: transform` e rodar restritamente no compositor de GPU para não re-pintar os cálculos da página inteira.
