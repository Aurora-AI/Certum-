# **A Superfície Etérea: Engenharia de Simulação Cinética de Alta Fidelidade e Renderização Cinematográfica em WebGL para Interfaces "Hero"**

## **1\. Introdução: A Fenomenologia do Invisível e a Estética do "Branco sobre Branco"**

A solicitação apresentada descreve um desafio técnico e artístico de elevada complexidade: a construção de uma interface "Hero" que opera no limiar da percepção visual, onde a presença de um objeto é inferida exclusivamente através da deformação de um meio. O conceito de "um ponto de luz que passa debaixo de um pano", num ambiente "branco puro", exige um domínio absoluto sobre as técnicas de **Transporte de Luz** e **Manipulação de Vértices** em tempo real. Não se trata apenas de renderizar uma geometria, mas de simular a *consequência* de uma força invisível, criando o que a literatura técnica denomina de "cinética fantasma".  
Para atingir o critério de "cinematograficamente PERFEITO" e a ambição de "quebrar as leis da física", a implementação deve transcender os pipelines de renderização padrão do WebGL. O efeito exige uma síntese rigorosa entre a álgebra linear (para o cálculo de normais em superfícies deformadas analiticamente), a física óptica (para a simulação de Espalhamento de Subsuperfície \- SSS \- em materiais dielétricos de alto albedo) e a psicologia da percepção (para o design de interação de paralaxe reverso).  
A estética "branco sobre branco" é historicamente considerada o "teste de stress" final para qualquer motor de renderização. Sem o contraste de cor (albedo) para definir a forma, a legibilidade volumétrica depende inteiramente de três fatores críticos: a Oclusão de Ambiente (AO) nas micro-fendas, o efeito Fresnel nas arestas tangenciais e a suavidade do decaimento das sombras (Shadow Falloff). No contexto de um tecido digital, se o sombreamento for demasiado plano, a deformação parecerá uma distorção 2D; se for demasiado contrastado, perde-se a elegância do "branco puro". A solução reside num sistema de sombreamento (shading) customizado que prioriza o *brilho* (sheen) e a *translucidez* sobre a difusão Lambertiana tradicional.  
Este relatório disseca a arquitetura necessária para construir este sistema, integrando a deformação procedimental baseada em Matrizes Jacobianas, a simulação de luz reativa em fragment shaders e uma pilha de pós-processamento que emula as imperfeições de lentes de cinema analógicas.

## **2\. Dinâmica de Deformação de Vértices: A Matemática da Manipulação de Superfícies**

A base do efeito solicitado é a interação entre uma esfera invisível (o ponto de luz) e uma malha de tecido. Para garantir uma performance de 60 FPS (quadros por segundo) e uma suavidade "revolucionária", a simulação não deve depender de motores de física baseados na CPU (como Ammo.js ou Cannon.js), mas sim de **Deslocamento de Vértices Procedimental** (Procedural Vertex Displacement) executado diretamente na GPU.

### **2.1 A Função de Deslocamento: Além da Geometria Euclidiana**

A interação física padrão criaria rugas e colisões rígidas. Para "quebrar as leis da física" e criar um tecido hiper-elástico e perfeito, a deformação deve ser modelada por funções matemáticas contínuas. A simples verificação de distância euclidiana (d) entre o vértice e a bola cria uma interseção dura (max(0, R \- d)). Para o efeito de "pano sob tensão", a literatura sugere o uso de funções de distribuição como a **Gaussiana** ou a **Lorentziana**.  
A função de deslocamento H(p) para um vértice na posição p, influenciada por uma "bola" na posição c, pode ser descrita como:  
Onde A é a amplitude (altura da deformação) e k é o coeficiente de tensão do tecido. Ao contrário de uma colisão física, esta função cria um "levantamento" suave que começa antes mesmo de a bola tocar o tecido, sugerindo um material com uma tensão interna sobrenatural e uma elasticidade perfeita. A animação do vetor c da direita para a esquerda (modulada por uma variável uniforme uTime e interpolada por uma curva de Bézier suave) gera o movimento fluido e contínuo exigido.

### **2.2 O Problema da Recálculo de Normais: A Matriz Jacobiana**

O ponto de falha mais comum em shaders de deformação é a iluminação incorreta. Quando um Vertex Shader altera a posição de um vértice, a **Normal** original (o vetor perpendicular à superfície, essencial para o cálculo de luz) não é atualizada automaticamente. Se as normais permanecerem estáticas, o tecido parecerá plano, e o "ponto de luz" será invisível, pois não haverá variação no sombreamento especular.  
Para um resultado "cinematograficamente perfeito", não podemos usar aproximações grosseiras (como dFdx no fragment shader, que cria facetas visíveis em malhas de baixa densidade). Devemos calcular as novas normais analiticamente usando a **Matriz Jacobiana** da função de deformação.  
A Matriz Jacobiana descreve como o espaço local é esticado e rotacionado pela função de deformação. Se a nossa superfície deformada é S(x,z) \= (x, H(x,z), z), os vetores tangentes T\_x e T\_z são as derivadas parciais da função:  
Para a função Gaussiana mencionada, a derivada parcial em x é:  
A nova normal N' é o produto vetorial (cross product) destes tangentes:  
Esta abordagem matemática garante que a iluminação reaja a cada micro-curvatura da deformação com precisão infinita, eliminando artefatos de pixelização e garantindo que o brilho especular "escorra" pela superfície do tecido de forma líquida e orgânica.

### **2.3 Ortogonalização da Matriz TBN**

Para suportar os efeitos de texturização e o "efeito parallax" solicitado, é crucial não apenas recalcular a normal, mas reconstruir toda a base tangente (Matriz TBN \- Tangent, Bitangent, Normal). Após derivar a nova normal N', os vetores Tangente (T) e Bitangente (B) originais devem ser re-ortogonalizados em relação a N' para garantir que o mapeamento de texturas e os reflexos acompanhem a distorção do tecido sem esticar ou distorcer visualmente a micro-superfície.

## **3\. O Vazio Prístino: Shading Avançado para Estética "Branco sobre Branco"**

Renderizar branco sobre branco é um desafio de **Mapeamento de Tons** (Tone Mapping) e conservação de energia. Um branco digital puro (vec3(1.0)) não permite sombreamento, pois não pode ficar "mais branco" na luz. A estética de luxo exige um cinza muito claro (ex: vec3(0.96)) que permita altas luzes (highlights) superiores a 1.0 (HDR) e sombras suaves.

### **3.1 Renderização Baseada em Física (PBR) para Têxteis**

O modelo de iluminação deve ser **PBR (Physically Based Rendering)**, mas adaptado para dielétricos (não-metais) de alta difusão.

* **Albedo:** Deve ser configurado alto (0.95 \- 0.98), mas estritamente abaixo de 1.0 para manter a conservação de energia.  
* **Rugosidade (Roughness):** Para tecido, uma rugosidade entre 0.6 e 0.8 é ideal. No entanto, para criar o efeito "revolucionário", podemos usar um mapa de rugosidade procedural que torna as áreas de tensão (o topo da bola) mais lisas (0.3), simulando o estiramento das fibras e criando um brilho especular mais intenso onde a bola toca o pano.  
* **Sheen (Brilho de Veludo):** Tecidos possuem micro-fibras que capturam a luz em ângulos rasantes. A implementação de um termo de *Sheen* (como no modelo Disney BRDF) é essencial para evitar que o tecido pareça plástico ou gesso. O *sheen* deve ter uma cor ligeiramente quente ou fria (dependendo da direção artística) para separar o volume do fundo branco.

### **3.2 O Efeito Fresnel como Definidor de Silhueta**

Num ambiente branco, a silhueta é definida quase exclusivamente pelo efeito Fresnel — o aumento da refletividade em ângulos rasantes. Para "quebrar a física" e garantir visibilidade, recomenda-se o uso de um **Fresnel Bias** exagerado. Em vez de usar o IOR (Índice de Refração) real do algodão (aprox 1.5), podemos parametrizar o Fresnel para criar uma "aura" nas bordas da deformação.  
A aproximação de Schlick modificada para controle artístico seria:  
Onde uFresnelPower pode ser animado. Quando o mouse se move rapidamente, este poder pode diminuir, fazendo o tecido parecer mais "húmido" ou metálico momentaneamente, reagindo à interação do usuário.

### **3.3 Espalhamento de Subsuperfície (SSS): A Luz que "Vaza"**

O requisito "um ponto de luz... passando embaixo de um pano" implica que o objeto não é apenas um colisor, mas uma fonte de luz. Como o tecido o cobre, a luz deve ser vista através da **Translucidez**. Oclusão total mataria o efeito; a luz deve "vazar" (light leak) através da trama esticada.  
A implementação eficiente em WebGL envolve um cálculo de SSS simplificado (Fast Subsurface Scattering) no Fragment Shader:

1. Calcular a espessura do tecido (Thickness). Nas áreas onde o deslocamento H(p) é alto (topo da bola), a espessura é considerada menor (tecido esticado).  
2. Calcular o vetor de luz invertido (Backlight Vector): L\_{back} \= \-(L \\cdot V).  
3. Adicionar um termo de emissão baseado na espessura:

Isto cria um "núcleo" de luz quente que brilha através do tecido branco, revelando a posição da bola não apenas pela deformação, mas pela radiância interna, cumprindo a diretiva "sabemos que ela está lá".

## **4\. Coreografia de Interação: Paralaxe Reverso e Dinâmica de Input**

A interatividade transforma o render numa experiência tátil. O pedido de "efeito parallax no sentido contrário do mouse" sugere uma dissociação deliberada entre o observador e a cena, criando uma sensação de flutuação ou vertigem controlada.

### **4.1 A Lógica do Paralaxe Reverso (Reverse Parallax)**

O paralaxe tradicional desloca camadas de fundo na direção oposta ao movimento da câmera. Em interfaces web baseadas no mouse, o movimento do mouse para a direita geralmente move o conteúdo para a esquerda (como se arrastássemos a cena) ou para a direita (como se o mouse fosse uma luz).  
O "sentido contrário" solicitado implica que, ao mover o mouse para a direita, a perspectiva da câmera deve girar ou deslocar-se para a esquerda, revelando o lado direito dos objetos. Para implementar isto de forma "revolucionária", não devemos apenas transladar a textura 2D (o que seria barato e comum), mas sim **cisalhar a Matriz de Visualização (View Matrix)** ou alterar o vetor de incidência da câmera no shader.  
**Implementação no Shader:** Normalizamos a posição do mouse (M) para o intervalo \[-1, 1\]. No Vertex Shader, modificamos a posição da câmera virtual ou o vetor de visão (V) adicionando um offset proporcional a \-M.  
Isso cria uma distorção de perspectiva que faz o tecido parecer um volume profundo e instável, reagindo contra a vontade do usuário, o que gera a sensação de "quebra da física" ou de um material com vontade própria.

### **4.2 Iluminação Radial Reativa (Responsive Radial Lights)**

A solicitação de "radiais de luz nos cantos... respondendo ao movimento" exige um sistema de iluminação dinâmico no Fragment Shader. Estas não devem ser luzes pontuais padrão do Three.js (que são computacionalmente caras), mas sim **Campos de Distância (SDFs)** coloridos e compostos na tela.  
Definimos 4 emissores virtuais nos cantos UV: (0,0), (1,0), (0,1), (1,1). A "resposta ao movimento" é calculada através da **Velocidade do Mouse**.

1. No JavaScript, calculamos mouseVelocity \= (currentPos \- lastPos) / deltaTime.  
2. Passamos uMouseVel para o shader.  
3. A intensidade e o raio das luzes radiais são modulados por esta velocidade.  
   * **Estático:** As luzes são fracas, tons pastéis sutis (azul gelo, rosa pálido).  
   * **Em Movimento:** As luzes "acendem", aumentando a saturação e o alcance.  
   * **Cor:** A cor pode ser calculada misturando dois gradientes baseados na direção do movimento (ex: mover para a esquerda torna as luzes esquerdas mais vermelhas; mover para a direita torna-as mais azuis).

Esta reatividade transforma o fundo branco num organismo vivo que pulsa com a energia cinética do usuário.

## **5\. O "Look" Cinematográfico: Stack de Pós-Processamento**

Para atingir a qualidade "cinematograficamente PERFEITA", o render cru do WebGL deve passar por um tratamento de imagem que simule as imperfeições ópticas de uma câmera de cinema. O olho humano e o cinema associam realismo a certas falhas ópticas; a perfeição digital é percebida como "falsa".

### **5.1 Aberração Cromática Dinâmica**

A aberração cromática simula a falha da lente em focar todos os comprimentos de onda no mesmo ponto. Para este projeto, a aberração não deve ser estática. Ela deve estar vinculada à **tensão do tecido**. Nas áreas onde a bola deforma o pano (onde a derivada da superfície é alta), aplicamos uma separação dos canais RGB. Isso cria uma "franja" de arco-íris nas bordas da silhueta da bola invisível, sugerindo que a força da deformação está a dobrar a própria luz.

* **Fator de Dispersão:** vec3(offset, 0, \-offset) aplicado às coordenadas de textura UV durante o post-processing, onde offset é proporcional à proximidade da bola.

### **5.2 Film Grain (Grão de Filme) como Dithering**

Em renderizações "branco sobre branco", o problema técnico mais comum é o **Color Banding** (faixas visíveis nos gradientes suaves de cinza). O Grão de Filme atua como um pontilhismo (dithering) natural, quebrando essas faixas e suavizando os gradientes. Além da função técnica, adiciona uma textura tátil à imagem, impedindo que o branco pareça um "vazio digital" e conferindo-lhe a substância de uma película fotográfica. O grão deve ser aplicado *após* todas as outras etapas para garantir nitidez.

### **5.3 Bloom Volumétrico (Glow)**

Para vender a ideia do "ponto de luz", o Bloom é indispensável. No entanto, não deve ser um brilho global. Deve ser um **Bloom de Limiar (Threshold Bloom)** focado apenas nas áreas onde o SSS (Espalhamento de Subsuperfície) é mais intenso. Isso faz com que a luz pareça emanar de dentro da geometria, criando uma aura suave e etérea em torno da deformação móvel.

### **5.4 Ordem de Operações (Pipeline)**

A ordem correta para maximizar a fidelidade visual é :

1. **Renderização da Cena PBR** (Tecido \+ Bola).  
2. **Bloom** (Simulação de vazamento de luz na lente).  
3. **Tone Mapping** (Essencial: Usar **ACES Filmic** para mapear os valores HDR \> 1.0 de volta para o branco do monitor sem "queimar" os detalhes da textura do tecido).  
4. **Aberração Cromática** (Simulação de lente).  
5. **Film Grain** (Simulação de película).  
6. **Vignette** (Focagem sutil).

## **6\. Arquitetura de Implementação e Otimização**

A implementação recomendada utiliza **Three.js** com **ShaderMaterial** customizado, ou uma abordagem pura via API WebGL se a performance for crítica. No entanto, a complexidade do PBR sugere o uso de Three.js para gestão de assets e texturas.

### **Tabela 1: Estratégia de Componentes do Shader**

| Componente | Técnica | Função no Design |
| :---- | :---- | :---- |
| **Malha (Mesh)** | PlaneGeometry (256x256) | Alta densidade para deformação suave sem facetas. |
| **Vertex Shader** | Deslocamento Gaussiano \+ Jacobiano Analítico | Simula a física da bola e corrige a iluminação 3D. |
| **Fragment Shader** | PBR \+ SSS Aproximado \+ Fresnel Schlick | Cria a materialidade do tecido branco e o brilho interno. |
| **Iluminação** | Radial SDF (Fragment) \+ Point Light (Uniform) | Luzes reativas ao mouse e foco principal da bola. |
| **Interação** | Raycasting / Normalized Mouse Vector | Calcula a posição para o paralaxe reverso. |

### **Integração de Tipografia**

Conforme o requisito "colocamos os textos depois", a tipografia deve ser tratada como uma camada HTML/CSS acima do Canvas WebGL (z-index: 10). Para uma integração perfeita, recomenda-se o uso de mix-blend-mode: difference ou exclusion no CSS do texto. Isso fará com que o texto inverta a cor quando o "ponto de luz" (a bola) passar por baixo dele, criando uma interação orgânica entre o conteúdo informativo e o fundo animado, reforçando a imersão.

## **7\. Conclusão**

A execução desta Hero Section exige um abandono das técnicas convencionais de design web em favor de uma abordagem de **Engenharia Gráfica**. Ao substituir a física de colisão padrão por funções analíticas de deformação, e ao empregar um modelo de iluminação que prioriza a translucidez e o comportamento espectral da luz em vez da difusão simples, é possível criar uma experiência que não é apenas visual, mas sensorial.  
O resultado final será uma superfície "impossível": um tecido digital que respira com o movimento do mouse, esconde e revela luz através de uma física inexistente, e apresenta uma estética de pureza absoluta. Esta é a definição técnica de "cinematograficamente perfeito" no contexto da web moderna: a suspensão da descrença através da matemática de precisão.

#### **Referências citadas**

1\. Recalculation of normals and ShadowCoords after deformation of a sphere into an oval, https://stackoverflow.com/questions/29769702/recalculation-of-normals-and-shadowcoords-after-deformation-of-a-sphere-into-an 2\. Calculating normals for animated deformation \- OpenGL \- Khronos Forums, https://community.khronos.org/t/calculating-normals-for-animated-deformation/106584 3\. How to achieve this Style of white with shadows and lines sort of look? \- McNeel Forum, https://discourse.mcneel.com/t/how-to-achieve-this-style-of-white-with-shadows-and-lines-sort-of-look/149838 4\. Physically Based Rendering in Filament \- Google, https://google.github.io/filament/Filament.md.html 5\. \[TSC 05.04\] The Fresnel Effect \- YouTube, https://www.youtube.com/watch?v=WmGrbEepFG4 6\. Move, Stretch and Deform Meshes in Oculus Medium | Meta Horizon OS Developers, https://developers.meta.com/horizon/blog/move-stretch-and-deform-meshes-in-oculus-medium/ 7\. TouchDesigner Tutorial: Vertex Shader Deformation in GLSL \- 10 Minutes Guide \- YouTube, https://www.youtube.com/watch?v=lahhQXOAz7k 8\. Deforming 3D shapes in real time, for the algebraically challenged \- Dave Pagurek, https://www.davepagurek.com/blog/realtime-deformation/ 9\. How do I update normals after positioning vertices in vertex shader? \- Stack Overflow, https://stackoverflow.com/questions/21124637/how-do-i-update-normals-after-positioning-vertices-in-vertex-shader 10\. Parallax Mapping \- LearnOpenGL, https://learnopengl.com/Advanced-Lighting/Parallax-Mapping 11\. Learn Substance 3D Designer The PBR Guide \- Part 1 \- Adobe Learn, https://www.adobe.com/learn/substance-3d-designer/web/the-pbr-guide-part-1 12\. Theory \- LearnOpenGL, https://learnopengl.com/PBR/Theory 13\. Physically Based Rendering: PBR in Unity \- Shader tutorial \- Alan Zucconi, https://www.alanzucconi.com/2015/06/24/physically-based-rendering/ 14\. Blender Tutorial \- Principled shader UNLEASHED\! Part 3 \- Cloth and SSS \- YouTube, https://www.youtube.com/watch?v=JgdVO84Ija8 15\. Physically Based Rendering \- Alex Tardif: Graphics Programmer, https://alextardif.com/PhysicallyBasedRendering.html 16\. The Basics of Fresnel Shading \- Kyle Halladay, https://kylehalladay.com/blog/tutorial/2014/02/18/Fresnel-Shaders-From-The-Ground-Up.html 17\. How I make materials with the FRESNEL node in Unreal Engine 5\! \- YouTube, https://www.youtube.com/watch?v=7oQlcDHBOeo 18\. Subsurface scattering explained \- The Chaos Blog, https://blog.chaos.com/subsurface-scattering-explained 19\. Subsurface scattering for realistic fabric? \- Blender Artists Community, https://blenderartists.org/t/subsurface-scattering-for-realistic-fabric/585639 20\. Subsurface Scattering | High Definition RP | 14.0.12 \- Unity \- Manual, https://docs.unity3d.com/Packages/com.unity.render-pipelines.high-definition@14.0/manual/Subsurface-Scattering.html 21\. opengl \- Shader \- Simple SSS lighting issue \- Stack Overflow, https://stackoverflow.com/questions/30119553/shader-simple-sss-lighting-issue 22\. Real-Time Subsurface Scattering / Devon Gadarowski \- Observable, https://observablehq.com/@devon-gadarowski/real-time-subsurface-scattering 23\. 2.6 Implementing Fake 3D \- WebGPU Unleashed: A Practical Tutorial, https://shi-yan.github.io/webgpuunleashed/2D\_Techniques/implementing\_fake\_3d.html 24\. THREE.JS Mouse interaction with shader \- glsl \- Stack Overflow, https://stackoverflow.com/questions/54296904/three-js-mouse-interaction-with-shader 25\. Mouse movement parallax grid interaction \- Webflow tutorial (2021) \- YouTube, https://www.youtube.com/watch?v=f0Jod3Jdapk 26\. Interactive GLSL \- Lighting \- Playdeck Project, https://playdeck.net/blog/interactive-intro-glsl-shaders-p2 27\. Is it possible to make radial light sources like glowing particles or a fireplace? : r/SFM, https://www.reddit.com/r/SFM/comments/22jy31/is\_it\_possible\_to\_make\_radial\_light\_sources\_like/ 28\. Animating a radial gradient with Framer Motion \- YouTube, https://www.youtube.com/watch?v=uWfZ2bZuvpo 29\. Move a radial gradient fragment on mouse move event with continuous easing \- three.js forum, https://discourse.threejs.org/t/move-a-radial-gradient-fragment-on-mouse-move-event-with-continuous-easing/56196 30\. image imperfections and Film Grain post process FX \- //game dev log of martins upitis, http://devlog-martinsh.blogspot.com/2013/05/image-imperfections-and-film-grain-post.html 31\. Unity3d post processing effects \- Grain, Bloom, Ambient Occlusion, and Vignetting, https://www.youtube.com/watch?v=LOtOv-POX0M 32\. Here's a great chromatic aberration GLSL function for post-processing. : r/gamedev \- Reddit, https://www.reddit.com/r/gamedev/comments/20xyn4/heres\_a\_great\_chromatic\_aberration\_glsl\_function/ 33\. Understanding post-processing \- Unity \- Manual, https://docs.unity3d.com/2018.4/Documentation/Manual/BestPracticeMakingBelievableVisuals8.html 34\. In what order do visual artifacts occur starting closest to the camera's sensor : r/vfx \- Reddit, https://www.reddit.com/r/vfx/comments/1276kte/in\_what\_order\_do\_visual\_artifacts\_occur\_starting/ 35\. Using post-processing effects in Unity \- Simple Talk \- Redgate Software, https://www.red-gate.com/simple-talk/development/dotnet-development/post-processing-effects-unity/ 36\. What is the order of postprocessing effects? \- Game Development Stack Exchange, https://gamedev.stackexchange.com/questions/147952/what-is-the-order-of-postprocessing-effects 37\. Interactive 3D Mouse Effect with Three.js | Raycaster, Shaders & Distortion\! \- YouTube, https://www.youtube.com/watch?v=-DJu4FdhmtE 38\. Physically Based Rendering with WebGL2 : r/webgl \- Reddit, https://www.reddit.com/r/webgl/comments/z48t4i/physically\_based\_rendering\_with\_webgl2/ 39\. Awwward-winning animation techniques for websites | by Arjun Kumar | Bootcamp \- Medium, https://medium.com/design-bootcamp/awwward-winning-animation-techniques-for-websites-cb7c6b5a86ff