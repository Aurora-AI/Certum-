# **Arquitetura de Sistemas Multi-Agente para Geração Autônoma de Computação Gráfica de Alta Fidelidade: Manual Técnico e Estudo de Caso Aplicado**

## **1\. Introdução: A Mudança de Paradigma na Engenharia Gráfica**

A interseção entre Grandes Modelos de Linguagem (LLMs) e a renderização em tempo real (Real-Time Rendering) precipitou uma mudança fundamental na engenharia de software voltada para gráficos computacionais. Tradicionalmente, a criação de efeitos visuais de alta fidelidade para a web — como simulações de tecidos, iluminação volumétrica e materiais fisicamente baseados (PBR) — exigia um domínio vertical profundo, abrangendo desde a álgebra linear até a gestão de memória de GPU via APIs como WebGL e WebGPU. No entanto, a complexidade inerente a essas tarefas frequentemente excede a capacidade de raciocínio de um único modelo de IA ou de um engenheiro júnior operando isoladamente. A demanda atual não é apenas por assistentes de código, mas por sistemas autônomos capazes de orquestrar a criação completa de pipelines gráficos, desde a concepção matemática até a implementação otimizada no navegador.  
Este estudo técnico estabelece um novo padrão de engenharia sênior para o desenvolvimento de Sistemas Multi-Agente (MAS \- Multi-Agent Systems) dedicados à geração de shaders e efeitos visuais. O objetivo central é capacitar uma equipe de agentes artificiais a replicar e inovar sobre estéticas complexas, utilizando como caso de estudo a "hero section" do site *ArtPrize Shadows* ([https://artprize-shadows.com/](https://artprize-shadows.com/)), que exemplifica uma interação sofisticada entre física simulada (tecido), geometria dinâmica (esfera oculta) e sombreamento avançado.  
A premissa arquitetural deste manual é que a "criatividade técnica" pode ser decomposta em processos cognitivos discretos: interpretação semântica, derivação matemática, implementação sintática e validação estética. Ao distribuir essas funções entre agentes especializados — um Arquiteto de Soluções, um Físico Computacional, um Engenheiro de Shaders e um Diretor de Arte Técnico — superamos as limitações de janela de contexto e alucinação técnica comuns em modelos monolíticos. Este documento detalha a teoria, a prática aplicada e os padrões de design necessários para construir tal sistema, garantindo que o código gerado seja modular, performático e visualmente correto.

## **2\. Desconstrução Técnica do Artefato Alvo: O Estudo de Caso "ArtPrize Shadows"**

Para que agentes autônomos possam replicar um efeito, eles devem primeiro possuir a capacidade de "ver" e desconstruir a renderização alvo em primitivas técnicas. A análise do site de referência revela um sistema complexo que simula uma superfície tátil e interativa.

### **2.1 Análise da Fenomenologia Visual**

A experiência visual do *ArtPrize Shadows* não é estática; é uma simulação procedural contínua. Um agente "Crítico Visual" ou "Analista Técnico" deve identificar os seguintes componentes:

* **Geometria Base:** Uma malha densa (grid) que atua como um tecido ou superfície elástica.  
* **Dinâmica de Interação:** Um objeto invisível (provavelmente uma esfera ou um campo de força associado ao cursor do mouse) move-se sob essa superfície, causando deformação vertical e lateral.  
* **Materialidade:** A superfície exibe propriedades de reflexão especular que variam com o ângulo de incidência (Efeito Fresnel), sugerindo um material como seda, veludo ou um polímero acetinado.  
* **Iluminação:** O sombreamento responde dinamicamente à deformação, com realces (specular highlights) e sombras próprias que indicam um modelo de iluminação PBR (Physically Based Rendering) ou, no mínimo, um Blinn-Phong modificado.  
* **Pós-Processamento:** Presença sutil de granulação (film grain) e aberração cromática nas bordas, conferindo uma qualidade cinematográfica e orgânica.

### **2.2 Requisitos de Engenharia Reversa para Agentes**

Para um sistema multi-agente recriar isso, o problema deve ser decomposto em vetores de implementação claros:

1. **Vetor de Simulação:** Implementação de um sistema de massa-mola (Mass-Spring System) ou integração de Verlet para calcular a física do tecido em tempo real no Vertex Shader ou Compute Shader.  
2. **Vetor de Interação:** Mapeamento das coordenadas 2D do mouse para o espaço 3D do mundo (Raycasting), atualizando a posição da "esfera fantasma" uniformizada para o shader.  
3. **Vetor de Sombreamento:** Construção de um Fragment Shader que calcule normais perturbadas em tempo real (recalculadas baseadas na nova posição dos vértices) para aplicar corretamente a iluminação.

Esta desconstrução serve como o "Gabarito de Verdade" contra o qual os agentes validarão suas gerações subsequentes.

## **3\. Arquitetura do Sistema Multi-Agente (MAS) para Gráficos**

A arquitetura proposta adota o padrão **Orquestrador-Trabalhador (Orchestrator-Workers)**, evoluído para incluir loops de feedback autônomos e injeção de conhecimento via RAG (Retrieval-Augmented Generation). Diferente de pipelines lineares, esta arquitetura é cíclica e auto-corretiva.

### **3.1 A Topologia da Equipe de Agentes**

Para atingir o padrão de engenharia sênior, definimos quatro personas de agentes principais, cada uma com responsabilidades estritas e ferramentas dedicadas.

#### **3.1.1 O Arquiteto de Soluções (Lead Agent)**

* **Função Cognitiva:** Planejamento estratégico, decomposição de tarefas e gestão de estado.  
* **Responsabilidade:** Recebe o prompt do usuário ("Crie um efeito de tecido interativo como o ArtPrize"), analisa a viabilidade técnica e gera um arquivo de especificação (JSON Spec) que dita a estrutura do projeto.  
* **Ferramentas:** Acesso à árvore de arquivos, gestão de memória de longo prazo e autoridade para rejeitar entregas de sub-agentes.  
* **Comportamento:** O Arquiteto não escreve código shader. Ele define *interfaces*. Ele decide, por exemplo, que a comunicação entre a física (CPU) e o render (GPU) será feita via *Floating Point Textures* ou *Uniform Arrays*, dependendo das restrições de compatibilidade (WebGL 1.0 vs 2.0).

#### **3.1.2 O Físico Computacional (Math Specialist)**

* **Função Cognitiva:** Derivação matemática e modelagem algorítmica.  
* **Responsabilidade:** Traduz comportamentos físicos ("elástico", "viscoso", "colisão") em equações puras. Para o efeito de tecido, este agente seleciona a Integração de Verlet em vez de Euler explícito devido à sua estabilidade numérica em simulações visuais.  
* **Saída:** Blocos de lógica matemática (frequentemente em pseudocódigo ou LaTeX) e constantes físicas (coeficiente de arrasto, tensão da mola) otimizados para execução em paralelo.

#### **3.1.3 O Engenheiro de Shaders (GLSL/WebGPU Expert)**

* **Função Cognitiva:** Tradução sintática, otimização de memória e implementação de baixo nível.  
* **Responsabilidade:** Converte as equações do Físico em código GLSL ou WGSL válido. Este agente é especialista em idiossincrasias de GPUs: sabe evitar condicionais (if/else) dentro de loops de renderização, utiliza mix() e step() para ramificações, e empacota dados em canais RGBA para economizar largura de banda.  
* **Saída:** Arquivos .vert, .frag ou .wgsl modulares e compiláveis.

#### **3.1.4 O Diretor de Arte Técnico (Visual Critic)**

* **Função Cognitiva:** Avaliação estética e verificação de conformidade visual.  
* **Responsabilidade:** Utiliza Modelos de Visão-Linguagem (VLMs) para analisar frames renderizados. Ele compara o resultado gerado com a descrição inicial ou imagens de referência. Se o tecido parecer "rígido demais", ele emite um feedback técnico: "Aumentar o amortecimento (damping) na simulação física e reduzir o coeficiente especular no shader".

### **3.2 Protocolos de Comunicação e Memória Compartilhada**

A eficácia do MAS depende de como o contexto é compartilhado. Utilizamos um padrão de **Blackboard (Quadro Negro)** digital.

* **Memória Compartilhada:** Um objeto JSON vivo que contém o estado atual da simulação, definições de uniformes, e logs de erro.  
  * Exemplo: global\_state \= { "u\_time": 0.0, "u\_mouse": , "physics\_model": "verlet", "error\_log": }.  
* **Protocolo A2A (Agent-to-Agent):** As mensagens entre agentes devem ser tipadas. O Arquiteto não diz "faça a física"; ele envia uma payload: {"action": "generate\_physics", "constraints": {"max\_vertices": 10000, "integrator": "verlet"}}. Isso elimina a ambiguidade da linguagem natural na camada de execução.

## **4\. Fundamentação Teórica Aplicada: Física e Matemática Procedural**

Para que os agentes criem o efeito do *ArtPrize Shadows*, eles devem "conhecer" a matemática subjacente. O sistema RAG deve injetar este conhecimento no contexto do Agente Físico.

### **4.1 Simulação de Tecidos (Mass-Spring Systems)**

O modelo matemático padrão para tecidos em tempo real é o sistema massa-mola. O tecido é discretizado em uma grade de partículas P(i,j). As forças atuantes que o agente deve codificar são:

1. **Molas Estruturais (Structural Springs):** Conectam vizinhos imediatos (i, j) com (i+1, j) e (i, j+1). Resistem ao estiramento.  
2. **Molas de Cisalhamento (Shear Springs):** Conectam diagonais (i, j) com (i+1, j+1). Resistem à distorção angular.  
3. **Molas de Flexão (Bend Springs):** Conectam vizinhos alternados (i, j) com (i+2, j). Resistem ao dobramento excessivo.

A equação de movimento para uma partícula p que o agente deve implementar é: $$F\_{total} \= F\_{gravidade} \+ F\_{mola} \+ F\_{amortecimento} \+ F\_{vento}$$Onde a força da mola segue a Lei de Hooke generalizada para 3D:

### **4.2 Integração Numérica: Verlet**

Para estabilidade em ambientes web (onde o delta de tempo \\Delta t pode flutuar), o Agente Físico deve optar pela Integração de Verlet, que calcula a nova posição baseada na posição atual e na anterior, eliminando a necessidade de armazenar a velocidade explicitamente:  
Este método é computacionalmente barato e conservativo, ideal para simulações de tecidos estáveis no navegador.

### **4.3 Detecção e Resposta a Colisões (Esfera sob Tecido)**

A interação chave do *ArtPrize Shadows* é a esfera movendo-se sob o tecido. O agente deve gerar a lógica de colisão esfera-vértice. Para cada vértice v do tecido:

1. Calcular o vetor distância \\vec{d} \= \\vec{P}\_v \- \\vec{P}\_{esfera}.  
2. Se |\\vec{d}| \< (R\_{esfera} \+ \\epsilon), onde \\epsilon é uma margem de segurança (thickness).  
3. Projetar o vértice para a superfície da esfera: \\vec{P}\_{novo} \= \\vec{P}\_{esfera} \+ \\text{normalize}(\\vec{d}) \\cdot (R\_{esfera} \+ \\epsilon). Esta lógica deve ser traduzida pelo Engenheiro de Shaders para execução paralela na GPU, garantindo performance mesmo com milhares de vértices.

### **4.4 Funções de Distância com Sinal (SDFs) e Raymarching**

Embora o efeito principal seja massa-mola, elementos secundários ou variantes podem exigir Raymarching. O Agente Matemático deve ter acesso a bibliotecas de SDFs (como as de Inigo Quilez) via RAG. A função de uma esfera em SDF é simples:  
Porém, para criar efeitos de "metaballs" ou fusão líquida, o agente deve implementar a união suave (Smooth Minimum):  
O conhecimento dessas funções permite aos agentes criar formas orgânicas que não são possíveis com geometria poligonal tradicional.

## **5\. Teoria de Renderização: Materiais e Óptica**

A fidelidade visual exige que os agentes abandonem modelos de iluminação simplistas (como Lambert ou Phong) em favor do PBR (Physically Based Rendering).

### **5.1 O Modelo de Reflectância Bidirecional (BRDF)**

O Engenheiro de Shaders deve implementar a equação de renderização focada na conservação de energia. O modelo Cook-Torrance é o padrão da indústria e deve ser a "escolha default" do agente para superfícies realistas.  
Onde os componentes devem ser gerados como funções modulares:

* **D (Distribuição Normal):** GGX (Trowbridge-Reitz) é essencial para modelar a rugosidade da superfície e o formato do reflexo especular.  
* **F (Fresnel):** Aproximação de Schlick. O agente deve saber que materiais dielétricos (tecido) têm um F\_0 baixo (0.04), enquanto metais têm F\_0 alto e coloridos.  
* **G (Geometria):** Smith-Schlick GGX, para simular o auto-sombreamento das micro-facetas.

### **5.2 Mapeamento Semântico para Parâmetros PBR**

Um dos maiores desafios é traduzir adjetivos humanos para float values. O sistema deve possuir uma camada de **Mapeamento Semântico** baseada em vetores latentes ou tabelas de consulta (Look-Up Tables) calibradas por pesquisa psicofísica.  
**Tabela de Conversão Semântica (Exemplo de Implementação do Agente):**

| Adjetivo do Usuário | Roughness (Rugosidade) | Metallic (Metalicidade) | Albedo (Cor Base) | Transmission | IOR (Índice de Refração) |
| :---- | :---- | :---- | :---- | :---- | :---- |
| "Aveludado" | 0.7 \- 0.9 | 0.0 | Cor Profunda | 0.0 | N/A (Usar Sheen) |
| "Molhado" | 0.05 \- 0.15 | 0.0 | Escurecido (0.5x) | 0.0 | 1.33 |
| "Cromado" | 0.0 \- 0.1 | 1.0 | Branco/Cinza | 0.0 | N/A |
| "Fantasmagórico" | 0.4 | 0.0 | Pálido | 0.8 | 1.1 |

O agente "Arquiteto" consulta essa tabela. Se o prompt for "tecido de seda vermelha sob a luz do luar", ele define: Albedo \= vec3(0.8, 0.1, 0.1), Roughness \= 0.3 (seda é lisa mas não espelho), Sheen \= 1.0 (para simular fibras de tecido tangentes), e a iluminação ambiental para tons frios (azulados).

## **6\. Engenharia de Software Aplicada: O Pipeline de Geração**

A implementação prática do sistema segue um pipeline rigoroso de engenharia de software, garantindo que o código não seja apenas "funcional", mas também manutenível e robusto.

### **6.1 Padrões de Modularidade de Shaders (glslify)**

Escrever shaders monolíticos (um único arquivo de 2000 linhas) é uma prática ruim que os LLMs tendem a reproduzir. O padrão de engenharia sênior exige **Modularidade**. O Agente de Shaders deve ser instruído a utilizar (ou simular) um sistema de importação como o glslify (uma ferramenta baseada em Node.js para GLSL).  
Em vez de escrever a função de ruído de Perlin do zero em cada shader (arriscando erros de digitação), o agente deve gerar código que invoca bibliotecas confiáveis:  
`#pragma glslify: snoise3 = require(glsl-noise/simplex/3d)`  
`#pragma glslify: rotation = require(./math/rotation.glsl)`

`void main() {`  
  `float n = snoise3(vUv * 5.0 + u_time);`  
  `//...`  
`}`

Isso exige que o ambiente de execução do agente tenha acesso a um repositório de "snippets" de shader verificados (Math Lib, Noise Lib, PBR Lib) indexados no sistema RAG.

### **6.2 Estratégias de Recuperação RAG para Código Gráfico**

A estratégia de RAG para gráficos deve ser estratificada. Consultas genéricas falham em detalhes técnicos específicos.

* **Camada 1 (Sintaxe e API):** Documentação oficial do WebGL2 e WGSL.  
* **Camada 2 (Algoritmos):** Snippets de código otimizados (e.g., "fast inverse square root", "optimized gaussian blur").  
* **Camada 3 (Conceitos):** Papers acadêmicos (SIGGRAPH) para entender *por que* usar uma técnica (e.g., "Por que usar *Tone Mapping* ACES em vez de Reinhard?"). O agente usa a Camada 3 para tomar decisões de design e a Camada 2 para implementação.

### **6.3 Tratamento de Erros e Loops de Auto-Cura (Self-Healing)**

Em gráficos, um erro de sintaxe tela preta ou crash do contexto WebGL. O sistema deve implementar um loop de auto-cura robusto.

1. **Tentativa de Compilação:** O Agente Integrador tenta compilar o shader gerado em um contexto WebGL "headless" ou de teste.  
2. **Captura de Log:** Se falhar, o log de erro do driver (e.g., ERROR: 0:12: 'assign' : cannot convert from 'const int' to 'float') é capturado.  
3. **Análise do Crítico:** O Agente Crítico (Compiler Critic) analisa o log. Ele não apenas diz "falhou", mas localiza a linha e a natureza do erro (neste caso, tipagem estrita do GLSL).  
4. **Prompt de Correção:** O erro e o trecho de código são enviados de volta ao Agente de Shaders com a instrução: "Corrija a conversão implícita de int para float na linha 12\. Use float(variável) ou adicione.0 aos literais." Este ciclo se repete até a compilação ser bem-sucedida ou atingir um limite de tentativas.

## **7\. Estudo de Caso Simulado: Recriando o "Hero" do ArtPrize**

Vamos simular a execução deste sistema para atender ao pedido original: criar o design system do hero do site *ArtPrize Shadows*.

### **7.1 Fase 1: Planejamento (Arquiteto)**

O Arquiteto analisa o site e gera o plano:

* **Objetivo:** Simulação interativa de tecido sobre esfera.  
* **Stack:** Three.js (para abstração de boilerplate), ShaderMaterial customizado.  
* **Geometria:** PlaneGeometry com alta segmentação (e.g., 512x512 segmentos) para suportar detalhes finos de dobra.  
* **Shaders:**  
  * *Vertex Shader:* Calculará a deformação da malha baseada na distância do mouse (raycasting). Usará uma função de decaimento suave (Smoothstep ou Exponencial) para criar o "morro" onde a esfera estaria.  
  * *Fragment Shader:* Implementará PBR com suporte a sombras suaves e cor dinâmica baseada na altura da deformação.

### **7.2 Fase 2: Implementação Matemática (Físico e Engenheiro)**

O Físico define a função de deformação para o Vertex Shader. Em vez de uma simulação física completa (que pode ser pesada), ele opta por uma abordagem procedural baseada em SDF para garantir performance de 60fps na web, simulando a física visualmente. **Lógica Gerada:** "A altura y de cada vértice é elevada se a distância d até o cursor for menor que o raio R. A transição deve ser suave para simular a tensão do tecido." **Código Gerado (Engenheiro):**  
`uniform vec3 u_mouse;`  
`uniform float u_radius;`  
`varying vec3 vNormal;`

`void main() {`  
    `vec3 pos = position;`  
    `float dist = distance(pos.xz, u_mouse.xz);`  
    `float falloff = smoothstep(u_radius, u_radius * 0.5, dist);`  
      
    `// Deformação procedural`  
    `pos.y += falloff * 2.0;`   
      
    `// Recalculo de normais (Crítico para a iluminação!)`  
    `// O agente sabe que ao deformar, a normal original (0,1,0) é inválida.`  
    `// Ele gera código para calcular derivadas parciais ou vizinhos.`  
    `vec3 neighborX = pos + vec3(0.1, 0.0, 0.0); // Aproximação`  
    `//... lógica de recálculo de normal...`  
      
    `gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);`  
`}`

Aqui, o sistema demonstra "senioridade" ao lembrar de recalcular as normais; um erro comum de juniores é deformar a malha mas manter as normais estáticas, resultando em iluminação plana ("look" de plástico incorreto).

### **7.3 Fase 3: Refinamento Visual (Crítico e Diretor de Arte)**

O shader inicial é renderizado. O Diretor de Arte (VLM) analisa:

* *Feedback:* "O efeito parece muito geométrico e perfeito. Falta a textura orgânica do site de referência. A luz está estourando."  
* *Ação:* O Orquestrador instrui o Engenheiro a adicionar um mapa de ruído (Noise Texture) para perturbar as normais (Bump Mapping) e simular a trama do tecido. Instruí também a aplicação de um *Tone Mapping* (Filmic) para controlar a exposição da luz.  
* *Pós-Processamento:* O Agente de Integração adiciona um passo de composição (EffectComposer) com um shader de granulação (Film Grain) para unificar a estética, conforme detectado na análise original.

## **8\. Padrões de Otimização WebGL/WebGPU para 2025/2026**

Para garantir que o código gerado seja viável em produção, o sistema aplica regras estritas de otimização.

### **8.1 Performance e Gestão de Memória**

* **Orçamento de Vértices:** O Agente de Geometria calcula o número de vértices baseado no dispositivo do usuário (detectado via navigator.hardwareConcurrency ou APIs de GPU). Para mobile, reduz a segmentação da malha.  
* **Prevenção de Uploads de Dados:** O Agente Integrador é programado para evitar fazer upload de dados para a GPU a cada quadro (ex: gl.bufferData). Variáveis uniformes são preferidas a atributos dinâmicos sempre que possível.  
* **Batching:** Se houver múltiplos objetos (ex: várias esferas fantasmas), o sistema utiliza *Geometry Instancing* para desenhá-los em uma única chamada de desenho (draw call).

### **8.2 Transição para WebGPU e WGSL**

Com a maturidade do WebGPU em 2025, o sistema deve ser capaz de gerar código WGSL. A arquitetura modular facilita isso: o Agente Físico mantém a lógica matemática (universal), enquanto o Agente de Shaders troca o módulo de "Tradução GLSL" por "Tradução WGSL". O uso de **Compute Shaders** no WebGPU permite simulações de tecido muito mais complexas e estáveis do que as possíveis no Vertex Shader do WebGL, permitindo interações de auto-colisão do tecido que seriam proibitivas anteriormente.

## **9\. Garantia de Qualidade e Métricas de Sucesso**

A validação final não é apenas "compila?"; é "funciona como esperado?".

* **Métricas Técnicas:** O sistema monitora o FPS (Frames Per Second) da simulação gerada em um ambiente de teste. Se cair abaixo de 30fps, o ciclo de otimização é acionado (ex: reduzir resolução do shadow map).  
* **Métricas Estéticas (CLIP Score):** Utiliza-se métricas de similaridade semântica (CLIP Score ou VQAScore) para comparar o frame renderizado com o prompt original. Se o prompt era "sombrio e misterioso" e a imagem é brilhante e saturada, o score baixo aciona uma reiteração dos parâmetros de iluminação.

## **10\. Conclusão**

A criação de agentes capazes de gerar efeitos visuais no nível do *ArtPrize Shadows* não é futurologia; é um problema de integração de sistemas complexos. Este estudo demonstra que o sucesso não reside na "inteligência" bruta do modelo de linguagem, mas na **arquitetura do sistema que o envolve**. Ao segregar responsabilidades, injetar conhecimento matemático verificado via RAG, implementar loops de validação visual e técnica, e aderir a padrões rigorosos de engenharia gráfica (PBR, Modularidade, Otimização), é possível construir uma força de trabalho sintética que opera com a competência de uma equipe de engenharia sênior.  
O futuro da computação gráfica na web será menos sobre escrever triângulos e pixels manualmente e mais sobre orquestrar esses sistemas inteligentes para manifestar intenções artísticas complexas instantaneamente.

### **Recomendações para Implementação Imediata**

1. **Construa o Glossário Semântico:** Inicie criando a base de dados que mapeia termos artísticos para parâmetros físicos.  
2. **Indexe a Matemática:** Crie o banco de dados RAG com funções de SDF, Ruído e PBR verificadas.  
3. **Desenvolva o Crítico Primeiro:** Antes de gerar código complexo, tenha um agente capaz de dizer se um código simples está correto. O feedback é o motor da qualidade.  
4. **Foque na Interatividade:** Priorize a lógica de u\_mouse e uniformes interativos, pois é isso que diferencia uma experiência web viva de uma imagem estática gerada por IA.

#### **Referências citadas**

1\. Mastering Multi-Agent Systems and Architecture Patterns | by Eshetieyabibal | Medium, https://medium.com/@eshetieyabibal/mastering-multi-agent-systems-and-architecture-patterns-0441e2b0e364 2\. Choosing the Right Multi-Agent Architecture \- LangChain Blog, https://www.blog.langchain.com/choosing-the-right-multi-agent-architecture/ 3\. GeoColab: an LLM-based multi-agent collaborative framework for ..., https://www.tandfonline.com/doi/full/10.1080/17538947.2025.2569405 4\. How we built our multi-agent research system \- Anthropic, https://www.anthropic.com/engineering/multi-agent-research-system 5\. Developer's guide to multi-agent patterns in ADK, https://developers.googleblog.com/developers-guide-to-multi-agent-patterns-in-adk/ 6\. Matt's Webcorner \- Cloth \- Stanford Computer Graphics Laboratory, https://graphics.stanford.edu/\~mdfisher/cloth.html 7\. WebGPU Shading Language \- W3C, https://www.w3.org/TR/WGSL/ 8\. Metal Shading Language Specification \- Apple Developer, https://developer.apple.com/metal/Metal-Shading-Language-Specification.pdf 9\. WebGL Shaders and GLSL, https://webglfundamentals.org/webgl/lessons/webgl-shaders-and-glsl.html 10\. From Idea to Co-Creation: A Planner–Actor–Critic Framework for Agent Augmented 3D Modeling \- arXiv, https://arxiv.org/html/2601.05016v1 11\. EdiVal-Agent: An Object-Centric Framework for Automated, Fine-Grained Evaluation of Multi-Turn Editing | OpenReview, https://openreview.net/forum?id=YkV0fnXgJA 12\. VQAScore: Evaluating and Improving Vision-Language Generative Models, https://blog.ml.cmu.edu/2024/10/07/vqascore-evaluating-and-improving-vision-language-generative-models/ 13\. Architecting multi-agent systems \- YouTube, https://www.youtube.com/watch?v=j\_l-9uNX2SA 14\. Vertex shader attribute mapping in GLSL \- opengl \- Stack Overflow, https://stackoverflow.com/questions/4873631/vertex-shader-attribute-mapping-in-glsl 15\. Project 4: Cloth Simulation \- Andrew Campbell, https://andrewdcampbell.github.io/clothsim/ 16\. Mosegaards Cloth Simulation Coding Tutorial \- Visual Computing Lab, https://viscomp.alexandra.dk/index2fa7.html?p=147 17\. Assignment 5 \- Cloth Simulation, https://people.engr.tamu.edu/sueda/courses/CSCE489/2021F/assignments/A5/index.html 18\. Simple cloth simulation with a verlet system running in compute shaders. ( based on the official ThreeJs example ) \- GitHub Gist, https://gist.github.com/bandinopla/0ff5e437fb1a6a3dce5d355b93e22b68 19\. Live coding a realtime raytracing shader \- YouTube, https://www.youtube.com/watch?v=9g8CdctxmeU 20\. Unwrapping Signed Distance Functions / Owen Moore \- Observable Notebooks, https://observablehq.com/@owenmoore/unwrapping-signed-distance-functions 21\. Theory \- LearnOpenGL, https://learnopengl.com/PBR/Theory 22\. Physically Based Rendering // OpenGL Tutorial \#43 \- YouTube, https://www.youtube.com/watch?v=XK\_p2MxGBQs 23\. An Introduction to Physically Based Rendering \- Maxime Garcia, https://typhomnt.github.io/teaching/ray\_tracing/pbr\_intro/ 24\. \[2512.08951\] AI Co-Artist: A LLM-Powered Framework for Interactive GLSL Shader Animation Evolution \- arXiv, https://www.arxiv.org/abs/2512.08951 25\. Visual Perception of Procedural Textures: Identifying Perceptual Dimensions and Predicting Generation Models | PLOS One, https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0130335 26\. Learn Substance 3D Designer The PBR Guide \- Part 1 \- Adobe Learn, https://www.adobe.com/learn/substance-3d-designer/web/the-pbr-guide-part-1 27\. PBR Rendering \- WayneChoi.Dev, https://waynechoi.dev/post/pbr-rendering/ 28\. PBR shader parameters Tutorial \- sky engine ai, https://www.skyengine.ai/tutorials/pbr-shader-parameters 29\. mikolalysenko/gl-modules: A modular approach to WebGL programming \- GitHub, https://github.com/mikolalysenko/gl-modules 30\. stack.gl, https://stack.gl/ 31\. modular and versioned GLSL \- Matt DesLauriers \- Svbtle, https://mattdesl.svbtle.com/glslify 32\. Advanced RAG Techniques for High-Performance LLM Applications \- Graph Database & Analytics \- Neo4j, https://neo4j.com/blog/genai/advanced-rag-techniques/ 33\. Beyond Vector Search: 5 Next-Gen RAG Retrieval Strategies \- Machine Learning Mastery, https://machinelearningmastery.com/beyond-vector-search-5-next-gen-rag-retrieval-strategies/ 34\. Injecting Knowledge Graphs in different RAG stages | by Chia Jeng Yang \- Medium, https://medium.com/enterprise-rag/injecting-knowledge-graphs-in-different-rag-stages-a3cd1221f57b 35\. \[2508.05266\] Understanding and Mitigating Errors of LLM-Generated RTL Code \- arXiv, https://arxiv.org/abs/2508.05266 36\. Parsing GLSL error messages \- opengl \- Stack Overflow, https://stackoverflow.com/questions/25043861/parsing-glsl-error-messages 37\. Adaptive: Building Self-Healing AI Agents — A Multi-Agent System for Continuous Optimization | by Madhur Prashant | Medium, https://medium.com/@madhur.prashant7/evolve-building-self-healing-ai-agents-a-multi-agent-system-for-continuous-optimization-0d711ead090c 38\. image imperfections and Film Grain post process FX \- //game dev log of martins upitis, http://devlog-martinsh.blogspot.com/2013/05/image-imperfections-and-film-grain-post.html 39\. Post-Process and Camera FX \- VFXDoc, https://vfxdoc.readthedocs.io/en/latest/vfx/postprocessing/ 40\. OpenGL ES Programming Tips — NVIDIA Jetson Linux Developer Guide, https://docs.nvidia.com/jetson/archives/r38.4/DeveloperGuide/SD/Graphics/GraphicsProgramming/OpenglEsProgrammingTips.html 41\. Optimizing WebGL — Emscripten 5.0.1-git (dev) documentation, https://emscripten.org/docs/optimizing/Optimizing-WebGL.html 42\. The Structure of a WebGPU Renderer \- The Blog and Portfolio of Ryosuke, https://whoisryosuke.com/blog/2025/structure-of-a-webgpu-renderer 43\. What Are Vision Language Models (VLMs)? \- IBM, https://www.ibm.com/think/topics/vision-language-models