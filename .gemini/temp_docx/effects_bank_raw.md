MAD LAB AURORA
EFFECTS BANK
25 EFEITOS DISRUPTIVOS
Canon v1.1 Compliance | Z-Axis & 3D Focus
Fevereiro 2026 | Sovereign Edition
O Manifesto
"Nos nao construimos sites. Nos damos a luz a Entidades. Tudo dentro do Mad Lab Aurora deve ser disruptivo, ter movimento, 3D, ter profundidade e principalmente que quebre as leis da fisica."
Este documento contém 25 efeitos disruptivos projetados para o ecossistema Mad Lab Aurora. Cada efeito foi concebido para quebrar pelo menos uma lei da física visual, criando experiencias que transcendem o plano 2D da web convencional.
Todos os efeitos estão em conformidade total com o Aurora Visual Physics Canon v1.1, declarando: fenomeno fisico quebrado, funcao cognitiva, Call & Response (Blues), e Trustware Gate.
Principios Fundamentais
1. PROFUNDIDADE OBRIGATORIA: Todo efeito opera em Z ou simula profundidade. Flat e proibido.
2. CALL & RESPONSE: Toda acao do usuario (scroll, hover, click) recebe resposta espacial proporcional.
3. TRUSTWARE GATE: Se remover o efeito sem alterar funcao cognitiva, o efeito e invalido.
4. FALLBACK MOBILE: Todo efeito declara comportamento degradado para dispositivos moveis.
5. LEI DA PROPORCIONALIDADE: Intensidade da resposta <= intensidade da pergunta.
Indice por Categoria
Z-AXIS DEPTH
Efeitos de profundidade no eixo Z. A tela ganha dimensao.
FX-01  DimensionalRift Scroll  [ALTA]
FX-02  Parallax Volumetric Layers  [MEDIA]
FX-03  Depth-of-Field Focus  [MEDIA]
FX-04  Z-Collapse Card Stack  [MEDIA]
FX-05  Camera Orbit Showcase  [ALTA]
MATERIAL & SHADER
Materiais fisicos e transicoes via shader. A materia digital ganha propriedades.
FX-06  Mesh Distortion Field  [ALTA]
FX-07  Glass Refraction Layer  [MEDIA]
FX-08  Liquid Morph Transition  [ALTA]
TYPOGRAPHY
Texto que transcende o plano. Tipografia com corpo, energia e profundidade.
FX-09  Extrusion Typography  [ALTA]
FX-10  Kinetic Text Scatter  [ALTA]
FX-11  Depth Stagger Reveal  [BAIXA]
SCROLL PHYSICS
O scroll ganha consequencia fisica. Velocidade e direcao alteram a realidade.
FX-12  Scroll Velocity Distortion  [MEDIA]
FX-13  Infinite Depth Canvas  [ALTA]
FX-14  Scroll-Driven Camera Path  [ALTA]
HOVER & INTERACTION
Elementos reagem ao cursor com magnetismo, inclinacao e levitacao.
FX-15  Magnetic Cursor Pull  [BAIXA]
FX-16  3D Card Tilt  [BAIXA]
FX-17  Gravity Shift Hover  [BAIXA]
PARTICLE & GENERATIVE
Sistemas de particulas e geometria generativa que respiram e reagem.
FX-18  Cursor Galaxy Trail  [ALTA]
FX-19  Reactive Particle Field  [MEDIA]
FX-20  Audio-Reactive Mesh  [ALTA]
TRANSITION & NAV
Transicoes e navegacao com continuidade espacial e revelacao cerimonial.
FX-21  Portal Page Transition  [MEDIA]
FX-22  Dimensional Curtain  [MEDIA]
ADVANCED 3D
Simulacao fisica avancada: tecido, fractais e UI espacial.
FX-23  Cloth Physics Text  [ALTA]
FX-24  Fractal Depth Generator  [ALTA]
FX-25  Spatial UI Float  [BAIXA]
FX-01
DimensionalRift Scroll
Z-AXIS DEPTH
Z + Scroll
ALTA
Mad Lab
Three.js + GSAP
"Scroll empurra o usuario PARA DENTRO da tela. A profundidade reage ao gesto vertical."
Descricao
Uma cena Three.js em fullscreen onde a camera se move no eixo Z conforme o scroll. O usuario nao rola uma pagina; ele viaja atraves de camadas de conteudo dispostas em profundidades diferentes. Objetos passam pela camera criando sensacao de tunelamento dimensional. Fog volumetrica aumenta com a profundidade.
User Feeling
Estou entrando no site, nao navegando nele. Sinto velocidade e profundidade.
Funcao Cognitiva
Cria narrativa espacial. O scroll ganha proposito direcional, eliminando a sensacao de lista infinita.
Call & Response
CALL (Pergunta)
RESPONSE (Resposta)
Scroll (velocidade variavel)
Camera Z avanca proporcionalmente + fog intensifica
Pausa no scroll
Camera desacelera com inertia (lerp 0.05) + particulas se acomodam
Scroll reverso
Camera recua + layers re-emergem do fog
Uso
Permitido
Hero sections, storytelling pages, portfolios imersivos, landing pages de produto.
Proibido
Dashboards, formularios, areas de checkout, qualquer UI que exija leitura focada.
Implementacao Tecnica
Three.js PerspectiveCamera | camera.position.z mapeado via Lenis scroll progress | ScrollTrigger pin sections | Fog exponencial (THREE.FogExp2) | Objetos em z: -200 a -2000 | Post-processing: UnrealBloomPass para glow sutil.
Parametros Canonicos
Perspective
1200px
Z Range
-200 a -2000
Lerp
0.05
Fog Density
0.0015
Easing
power3.out
Fallback Mobile
Parallax CSS translateZ + opacity fade
TRUSTWARE GATE: Se remover o efeito e substituir por scroll normal, a narrativa espacial se perde completamente. O conteudo deixa de ter direcao. VALIDO.
FX-02
Parallax Volumetric Layers
Z-AXIS DEPTH
Z + Mouse
MEDIA
Comercial
CSS + GSAP
"O mouse revela que a tela tem CAMADAS. O plano flat se desfaz em volume."
Descricao
Multiplas layers de conteudo (texto, imagens, shapes decorativos) posicionadas em diferentes translateZ via CSS perspective. O movimento do mouse causa parallax sutil entre camadas, revelando profundidade real. Sem Three.js; puro CSS 3D + GSAP quickTo para suavidade.
User Feeling
O site tem profundidade. Parece que posso tocar nas camadas.
Funcao Cognitiva
Cria hierarquia espacial natural. Elementos mais proximos = mais importantes. Depth cue inconsciente.
Call & Response
CALL (Pergunta)
RESPONSE (Resposta)
Mouse move horizontal
Layers deslocam em X proporcionalmente ao seu Z
Mouse move vertical
Layers deslocam em Y
Mouse sai do viewport
Layers retornam ao centro com elastic easing
Uso
Permitido
Todas as paginas. Efeito comercial por excelencia. Hero, cards, sections.
Proibido
Nunca com intensidade que cause motion sickness. Max deslocamento: 20px por layer.
Implementacao Tecnica
Container com perspective: 1200px | Filhos com translateZ(-50px a -300px) | GSAP quickTo para posicao X/Y de cada layer baseado em mouse | Will-change: transform em cada layer.
Parametros Canonicos
Perspective
1200px
Z Range
-50px a -300px
Max Offset
20px por layer
Easing
quickTo duration: 0.6
Fallback Mobile
Desativar parallax mouse, manter Z estatico
TRUSTWARE GATE: Remover o efeito achata a hierarquia visual. Elementos perdem relacao espacial de importancia. VALIDO.
FX-03
Depth-of-Field Focus
Z-AXIS DEPTH
Z + Hover
MEDIA
Comercial
CSS/Three.js
"Apenas o que recebe atencao esta em foco. O resto desfoca como uma camera real."
Descricao
Elementos fora do foco do usuario recebem CSS blur() ou Three.js BokehPass. Ao hover em um card ou section, o elemento entra em sharp focus enquanto adjacentes desfocam. Simula depth-of-field de camera cinematografica.
User Feeling
Meus olhos guiam o foco. O site responde como uma lente viva.
Funcao Cognitiva
Reducao de carga cognitiva. Forca foco no elemento relevante. Hick's Law em acao visual.
Call & Response
CALL (Pergunta)
RESPONSE (Resposta)
Hover em elemento
Elemento ganha focus (blur: 0, scale: 1.02) + adjacentes blur(4px)
Hover sai
Todos retornam a semi-foco (blur: 1px)
Scroll muda secao
Novo conteudo entra em foco automaticamente
Uso
Permitido
Galerias, grids de portfolio, product showcases, cards de equipe.
Proibido
Textos longos, navegacao principal, CTAs criticos (nunca desfocar CTAs).
Implementacao Tecnica
CSS: filter: blur() com transition 0.4s | Ou Three.js BokehPass com focus dinamico | GSAP para animar foco entre elementos | IntersectionObserver para auto-focus em scroll.
Parametros Canonicos
Blur Range
0px (foco) a 6px (fora)
Scale Focused
1.02
Transition
0.4s ease-out
Auto-focus Threshold
IntersectionObserver 0.6
Fallback Mobile
Opacity fade em vez de blur
TRUSTWARE GATE: Remove-lo faz todos os elementos competirem igualmente pela atencao. A hierarquia de foco desaparece. VALIDO.
FX-04
Z-Collapse Card Stack
Z-AXIS DEPTH
Z + Scroll
MEDIA
Comercial
GSAP + CSS
"Cards empilhados em profundidade. Scroll puxa cada um para frente como folhas de um livro."
Descricao
Cards posicionados em Z negativo (translateZ) empilhados um atras do outro. Conforme o scroll avanca, cada card se move para Z:0, scale:1, opacity:1, revelando-se completamente. O card anterior se move para Z positivo e desaparece para cima. Efeito de deck de cartas sendo folheado.
User Feeling
Estou folheando algo precioso. Cada card merece minha atencao.
Funcao Cognitiva
Atencao sequencial forcada. Elimina paradoxo da escolha (Hick's Law). Um item por vez.
Call & Response
CALL (Pergunta)
RESPONSE (Resposta)
Scroll down
Proximo card emerge de Z negativo para Z:0 com scale up
Scroll up
Card retorna para Z negativo, anterior re-emerge
Card ativo
Sombra dinamica proporcional ao Z + iluminacao sutil
Uso
Permitido
Features lists, testimonials, case studies, pricing comparison, storytelling sequencial.
Proibido
Conteudo que precisa ser comparado lado a lado. Nunca para navegacao.
Implementacao Tecnica
GSAP ScrollTrigger com pin | Cards em position absolute | translateZ, scale, opacity animados por progress | Sombra: box-shadow com blur proporcional ao Z | Z-index dinamico.
Parametros Canonicos
Z Stack Depth
-400px entre cards
Scale Range
0.85 a 1.0
Opacity Range
0.3 a 1.0
Shadow
0 20px 60px rgba(0,0,0,0.3) em Z:0
Easing
power3.out
Fallback Mobile
Scroll horizontal com snap
TRUSTWARE GATE: Substituir por lista vertical remove a atencao sequencial. Conteudo perde ritmo narrativo. VALIDO.
FX-05
Camera Orbit Showcase
Z-AXIS DEPTH
Z + Scroll
ALTA
Mad Lab
Three.js + GSAP
"Scroll controla uma orbita 3D ao redor do conteudo. O usuario e a camera."
Descricao
Conteudo central (produto 3D, tipografia extrudida, composicao de elementos) posicionado na origem. A camera orbita ao redor conforme scroll progress. Diferentes angulos revelam diferentes faces do conteudo. Iluminacao reage a posicao da camera.
User Feeling
Estou circulando algo importante. Cada angulo revela algo novo.
Funcao Cognitiva
Exploracao espacial. O usuario descobre informacao pela mudanca de perspectiva, nao por leitura linear.
Call & Response
CALL (Pergunta)
RESPONSE (Resposta)
Scroll
Camera orbita em arco (theta mapeado por progress)
Mouse X
Offset sutil no orbit + spotlight segue
Secao completa
Camera faz settle em angulo final pre-definido
Uso
Permitido
Product showcases, hero sections de marca, portfolios criativos.
Proibido
E-commerce com multiplos produtos, conteudo textual pesado.
Implementacao Tecnica
Three.js OrbitControls desabilitado para interacao manual | camera.position setado via angulo theta/phi calculado por ScrollTrigger progress | THREE.SpotLight segue camera | Post-processing: FXAA + sutil bloom.
Parametros Canonicos
Orbit Radius
5-8 unidades
Theta Range
0 a PI (180 graus)
Phi Range
PI/6 a PI/3
Lerp
0.04
Easing
power2.inOut
Fallback Mobile
Video loop pre-renderizado do orbit
TRUSTWARE GATE: Imagem estatica substitui toda a exploracao espacial. Informacao angular se perde. VALIDO.
FX-06
Mesh Distortion Field
MATERIAL & SHADER
XY + Cursor
ALTA
Mad Lab
Three.js Shader
"Imagens e superficies se deformam como tecido elastico ao toque do cursor."
Descricao
Vertex shader que desloca vertices de um plano baseado na distancia ao cursor. A imagem/textura mapeada no plano ondula e se deforma organicamente. Intensidade decai com a distancia (gaussian falloff). Ao afastar o cursor, a malha retorna a forma original com efeito de spring.
User Feeling
A tela e feita de materia maleavel. Meu cursor tem peso e influencia.
Funcao Cognitiva
Feedback tatil digital. O cursor ganha presenca fisica, aumentando sensacao de controle.
Call & Response
CALL (Pergunta)
RESPONSE (Resposta)
Cursor sobre mesh
Vertices se deslocam radialmente a partir do ponto de contato
Cursor se move rapido
Trail de deformacao (vertices retornam com delay)
Cursor sai
Spring back para forma original (damping 0.92)
Uso
Permitido
Portfolios, hero images, backgrounds interativos, galerias artisticas.
Proibido
Imagens de produto que precisam de fidelidade visual, UI funcional.
Implementacao Tecnica
Three.js PlaneGeometry (64x64 segments) | Custom vertex shader com uniform uMouse | Displacement = gaussian(distance) * amplitude | Fragment shader passa UV sem distorcao para textura | GSAP para animar uniforms.
Parametros Canonicos
Segments
64x64 minimo
Amplitude
0.3-0.8
Radius
0.15-0.3 (normalized)
Damping
0.92
Fallback Mobile
CSS scale hover simples
TRUSTWARE GATE: Remove-lo transforma imagem interativa em imagem estatica. O dialogo tacito cursor-conteudo desaparece. VALIDO.
FX-07
Glass Refraction Layer
MATERIAL & SHADER
Z + Light
MEDIA
Comercial
Three.js + CSS
"Elementos flutuam atras de vidro real. Luz refrata e distorce o conteudo por tras."
Descricao
Layer translucida com MeshPhysicalMaterial (IOR, transmission, roughness) posicionada entre camera e conteudo. A luz ambiente refrata atraves do vidro, criando distorcao optica sutil. Chromatic aberration nos edges. Alternativa CSS: backdrop-filter: blur() + background com gradiente.
User Feeling
Ha uma superficie fisica entre mim e o conteudo. O site tem profundidade material.
Funcao Cognitiva
Separacao de camadas de informacao. O vidro cria hierarquia de profundidade sem esconder conteudo.
Call & Response
CALL (Pergunta)
RESPONSE (Resposta)
Mouse move
Refraction shift sutil (normal map reage a posicao do cursor)
Scroll
Layer de vidro se move em parallax diferente do conteudo
Hover em area de vidro
IOR intensifica sutilmente, revelando mais detalhes
Uso
Permitido
Overlays, modais premium, headers com profundidade, separadores de secao.
Proibido
Sobre texto critico de leitura, areas de input, CTAs.
Implementacao Tecnica
Three.js: MeshPhysicalMaterial com transmission: 0.95, roughness: 0.05, ior: 1.5 | CSS fallback: backdrop-filter: blur(10px) saturate(1.2) | Chromatic aberration via post-processing ou CSS text-shadow trick.
Parametros Canonicos
IOR
1.3-1.6
Transmission
0.9-0.98
Roughness
0.02-0.1
Chromatic Offset
1-3px
Fallback Mobile
backdrop-filter: blur(8px) opacity(0.9)
TRUSTWARE GATE: Remove-lo elimina a sensacao de material fisico. Interface volta a ser plana e sem profundidade perceptivel. VALIDO.
FX-08
Liquid Morph Transition
MATERIAL & SHADER
XY + Temporal
ALTA
Mad Lab
GLSL + GSAP
"Conteudo liquefaz durante transicoes. A materia digital derrete e re-solidifica."
Descricao
Shader de transicao que usa noise (Simplex/Perlin) para dissolver o conteudo atual em padrao liquido e re-materializar o proximo. O noise evolui no tempo, criando efeito de fluido viscoso. Usado em page transitions, image carousels, tab switches.
User Feeling
O conteudo e feito de materia viva. Nada simplesmente aparece ou desaparece.
Funcao Cognitiva
Continuidade temporal. O cerebro nao perde contexto porque ve a transformacao, nao o corte.
Call & Response
CALL (Pergunta)
RESPONSE (Resposta)
Click em nav/link
Conteudo atual liquefaz (noise dissolve) por 0.6s
Transicao 50%
Novo conteudo comeca a solidificar de within the noise
Transicao completa
Novo conteudo totalmente solido, noise dissipa
Uso
Permitido
Page transitions, hero image carousels, tab/accordion transitions, modal open/close.
Proibido
Micro-interacoes rapidas, tooltips, dropdowns (muito lento).
Implementacao Tecnica
Dois framebuffers (cena A e cena B) | Fragment shader mistura com noise threshold | GSAP anima uniform uProgress de 0 a 1 | Noise: Simplex 3D com z = time para evolucao | View Transitions API como wrapper.
Parametros Canonicos
Duration
0.6-1.0s
Noise Scale
3.0-6.0
Noise Speed
0.5-1.5
Easing
power2.inOut
Fallback Mobile
CSS clip-path reveal ou crossfade
TRUSTWARE GATE: Substituir por fade simples perde a sensacao de transformacao material. A transicao vira corte. VALIDO.
FX-09
Extrusion Typography
TYPOGRAPHY
Z + Light
ALTA
Mad Lab
Three.js
"Texto ganha corpo fisico. Letras tem espessura, sombra real e reagem a luz."
Descricao
Three.js TextGeometry com extrude depth. Cada letra e um solido 3D com material PBR. Iluminacao dinamica segue o mouse (SpotLight/PointLight). Texto projeta sombras reais sobre um plano de fundo. Scroll pode rotacionar sutilmente o texto.
User Feeling
O titulo e um monumento. Tem presenca fisica imponente.
Funcao Cognitiva
Peso visual extremo. O titulo ganha autoridade e memorabilidade pelo volume.
Call & Response
CALL (Pergunta)
RESPONSE (Resposta)
Mouse move
Luz reposiciona, sombras mudam em tempo real
Scroll
Texto rotaciona sutilmente (max 5 graus em Y)
Hover
Material muda (roughness diminui, mais reflexo)
Uso
Permitido
Hero titles, brand statements, loading screens, 404 pages.
Proibido
Body text, paragrafos, qualquer texto que precise ser lido linearmente.
Implementacao Tecnica
Three.js FontLoader + TextGeometry | ExtrudeGeometry com depth: 0.5-2.0 | MeshStandardMaterial com metalness/roughness | THREE.DirectionalLight + shadows | GSAP para rotacao e light position.
Parametros Canonicos
Extrude Depth
0.5-2.0 unidades
Material
MeshStandardMaterial metalness: 0.1, roughness: 0.6
Shadow
PCFSoftShadowMap
Max Rotation
5 graus
Fallback Mobile
CSS text-shadow multicamada + perspective
TRUSTWARE GATE: Texto flat 2D perde toda a presenca monumentale. A autoridade visual do titulo desaparece. VALIDO.
FX-10
Kinetic Text Scatter
TYPOGRAPHY
XYZ + Trigger
ALTA
Mad Lab
SplitType + GSAP
"Caracteres explodem em 3D e recompoem com precisao coreografada."
Descricao
SplitType divide texto em caracteres individuais. Ao trigger (scroll enter, click, hover), cada caractere se dispersa em direcoes aleatorias (translateX/Y/Z + rotateX/Y/Z) e retorna a posicao original com stagger e elastic easing. O texto literalmente se desmonta e remonta.
User Feeling
As palavras tem energia cinetica. O texto esta vivo.
Funcao Cognitiva
Atencao total capturada pela desordem controlada. Impossivel ignorar.
Call & Response
CALL (Pergunta)
RESPONSE (Resposta)
Scroll entra na viewport
Caracteres convergem de posicoes dispersas para formar texto
Hover no texto
Caracteres tremem sutilmente (wiggle 2px)
Click
Scatter explosivo e reconvergencia rapida
Uso
Permitido
Titulos de secao, CTAs textuais, headings de paginas criativas.
Proibido
Body text, textos informativos, qualquer coisa que precise de leitura continua.
Implementacao Tecnica
SplitType split em chars | GSAP from() com translateX/Y/Z random(-200,200), rotateX/Y/Z random(-90,90), opacity:0 | Stagger: 0.02-0.04s | Easing: elastic.out(1, 0.5) | ScrollTrigger para auto-play.
Parametros Canonicos
Scatter Range
200px XY, 100px Z
Rotation Range
90 graus max
Stagger
0.02-0.04s
Easing
elastic.out(1, 0.5)
Duration
1.0-1.5s
Fallback Mobile
Stagger opacity + translateY simples
TRUSTWARE GATE: Texto aparecendo estaticamente perde toda a energia cinetica e atencao magnetical. VALIDO.
FX-11
Depth Stagger Reveal
TYPOGRAPHY
Z + Scroll
BAIXA
Comercial
GSAP + CSS
"Texto emerge de profundidade Z negativa. Cada linha/palavra sobe de um abismo."
Descricao
Linhas de texto comecam em translateZ negativo (invisivel/desfocado) e emergem para Z:0 com stagger progressivo conforme scroll. Combina translateZ + opacity + sutil blur. Efeito suave e elegante, adequado para uso comercial.
User Feeling
O texto se materializa suavemente. Parece surgir de um lugar profundo.
Funcao Cognitiva
Atencao guiada sequencialmente. O leitor acompanha a ordem de aparicao.
Call & Response
CALL (Pergunta)
RESPONSE (Resposta)
Scroll revela secao
Linhas emergem uma a uma de Z:-50px com stagger
Velocidade de scroll
Stagger acompanha (mais rapido = reveal mais fluido)
Scroll reverso
Linhas retornam para Z negativo em ordem inversa
Uso
Permitido
Todas as paginas. Texto hero, subtitulos, paragrafos de destaque, about sections.
Proibido
Nenhuma restricao forte. Evitar em conteudo que ja e visivel e esta sendo relido.
Implementacao Tecnica
SplitType split em lines | CSS perspective: 1000px no container | GSAP from() translateZ:-50, opacity:0, filter:'blur(4px)' | Stagger: 0.08s | ScrollTrigger start: 'top 80%'.
Parametros Canonicos
Z Start
-50px
Blur Start
4px
Stagger
0.08s
Easing
power3.out
Duration
0.8s
Fallback Mobile
Mesmo efeito, Z reduzido para -20px
TRUSTWARE GATE: Texto aparecendo de uma vez perde a revelacao sequencial e a profundidade. A experiencia de leitura se achata. VALIDO.
FX-12
Scroll Velocity Distortion
SCROLL PHYSICS
Y + Velocity
MEDIA
Mad Lab
Lenis + GSAP
"A velocidade do scroll deforma a realidade. Scrollar rapido distorce, parar estabiliza."
Descricao
A velocidade do scroll (Lenis velocity) controla distorcoes visuais: scaleY dos elementos se estica, blur direcional aumenta, tipografia se comprime. Ao parar, tudo retorna ao normal com inertia. O scroll ganha consequencia visual.
User Feeling
Minha velocidade tem peso. Scrollar rapido tem preco visual.
Funcao Cognitiva
Feedback proprioceptivo. O usuario sente a velocidade e naturalmente desacelera para absorver conteudo.
Call & Response
CALL (Pergunta)
RESPONSE (Resposta)
Scroll rapido (velocity > 2)
Elementos esticam (scaleY: 1.05-1.15), blur(2-4px)
Scroll medio
Distorcao sutil (scaleY: 1.02)
Scroll para
Tudo retorna com inertia (lerp 0.06)
Uso
Permitido
Paginas longas de conteudo, storytelling, portfolios, blogs.
Proibido
Interfaces de dados, tabelas, formularios, checkout.
Implementacao Tecnica
Lenis onScroll callback fornece velocity | GSAP quickTo para scaleY e filter:blur baseado em abs(velocity) | Clamp velocity entre 0 e 5 | Mapear: velocity 0-5 para scaleY 1.0-1.15 e blur 0-4px.
Parametros Canonicos
Velocity Clamp
0-5
ScaleY Range
1.0-1.15
Blur Range
0-4px
Lerp Recovery
0.06
Easing
power2.out
Fallback Mobile
Desativar distorcao, manter Lenis smooth only
TRUSTWARE GATE: Sem distorcao, o scroll e inerte e sem consequencia. O feedback de velocidade desaparece. VALIDO.
FX-13
Infinite Depth Canvas
SCROLL PHYSICS
Z + Scroll
ALTA
Mad Lab
Three.js + GSAP
"O scroll revela camadas infinitas. Nao ha fundo; ha sempre mais profundidade."
Descricao
Canvas Three.js fullscreen com camadas de conteudo (planos, particulas, geometrias) geradas proceduralmente em Z negativo. Conforme scroll avanca, camera penetra mais fundo. Novas camadas aparecem via fog + LOD. A sensacao e de profundidade sem fim.
User Feeling
Nao ha fundo. Posso scrollar para sempre e sempre ha mais.
Funcao Cognitiva
Curiosidade e exploracao. O usuario e incentivado a continuar descobrindo.
Call & Response
CALL (Pergunta)
RESPONSE (Resposta)
Scroll continuo
Camera avanca em Z, novas camadas emergem do fog
Velocidade alta
Particulas streak (motion blur manual)
Pausa
Camadas proximas ganham foco, distantes desfocam
Uso
Permitido
Pages experimentais, showcases criativos, timelines infinitas.
Proibido
Qualquer pagina com objetivo claro de conversao ou tarefa.
Implementacao Tecnica
Three.js camera.position.z mapeado por scroll total | Object pooling para performance | LOD: objetos distantes sao low-poly ou sprites | FogExp2 com density crescente | Particulas via InstancedMesh.
Parametros Canonicos
Z Generation Range
-500 a -5000
Object Pool Size
50-100 objetos
Fog Density
0.001-0.003
LOD Distances
near:500, mid:1500, far:3000
Fallback Mobile
Video loop ou parallax simplificado
TRUSTWARE GATE: Limitar a profundidade cria um fundo. A sensacao de infinito desaparece. VALIDO.
FX-14
Scroll-Driven Camera Path
SCROLL PHYSICS
XYZ + Scroll
ALTA
Mad Lab
Three.js + GSAP
"O scroll nao rola a pagina; ele move a camera por um caminho 3D coreografado."
Descricao
Uma CatmullRomCurve3 define um caminho 3D na cena. O scroll progress mapeia a posicao da camera nessa curva. Conteudo esta distribuido ao longo do caminho. A camera pode subir, descer, girar, aproximar. Cada trecho do scroll revela um cenario diferente.
User Feeling
Estou em um passeio guiado. O scroll e meu veiculo.
Funcao Cognitiva
Narrativa guiada. O designer controla exatamente o que o usuario ve e quando.
Call & Response
CALL (Pergunta)
RESPONSE (Resposta)
Scroll progress 0-1
Camera percorre CatmullRomCurve3, lookAt segue ponto adiante na curva
Scroll rapido
Camera acelera com inertia (lerp)
Mouse lateral
Camera offset sutil (parallax do caminho)
Uso
Permitido
Storytelling imersivo, tours virtuais, apresentacoes de produto, onboarding.
Proibido
Qualquer pagina que precise de navegacao livre.
Implementacao Tecnica
THREE.CatmullRomCurve3 com pontos 3D | camera.position = curve.getPointAt(progress) | camera.lookAt(curve.getPointAt(progress + 0.01)) | ScrollTrigger mapeia scroll total para progress 0-1.
Parametros Canonicos
Curve Points
8-20 pontos 3D
Lerp
0.04
LookAt Offset
0.01-0.05 adiante na curva
Easing
none (linear mapping, inertia via lerp)
Fallback Mobile
Slideshow com transicoes animadas
TRUSTWARE GATE: Scroll linear desfaz toda a coreografia espacial. A narrativa guiada vira lista. VALIDO.
FX-15
Magnetic Cursor Pull
HOVER & INTERACTION
XY + Proximity
BAIXA
Comercial
GSAP
"Elementos sentem a presenca do cursor e se inclinam em direcao a ele. Magnetismo digital."
Descricao
Quando o cursor se aproxima de um elemento interativo (botao, link, card), o elemento se desloca sutilmente em direcao ao cursor (translateX/Y). Ao entrar no elemento, a atracao se intensifica. Ao sair do raio, o elemento retorna com elastic. Simula campo magnetico.
User Feeling
Os botoes me querem. O site responde a minha presenca.
Funcao Cognitiva
Affordance amplificada. Elementos interativos se declaram antes do hover explicito.
Call & Response
CALL (Pergunta)
RESPONSE (Resposta)
Cursor se aproxima (raio 100px)
Elemento se desloca 5-15px em direcao ao cursor
Cursor entra no elemento
Deslocamento intensifica (20-30px) + scale:1.05
Cursor sai do raio
Retorno com elastic easing
Uso
Permitido
Botoes, CTAs, links, cards interativos, menus.
Proibido
Elementos de conteudo estatico, texto, imagens decorativas.
Implementacao Tecnica
Event listener mousemove no container pai | Calcular distancia cursor-centro do elemento | Se distancia < raio: gsap.quickTo(x, y) baseado em angulo | Se hover: intensificar | onMouseLeave: gsap.to com elastic.out.
Parametros Canonicos
Magnetic Radius
100px
Max Displacement
30px
Scale on Hover
1.05
Easing In
quickTo duration: 0.3
Easing Out
elastic.out(1, 0.4)
Fallback Mobile
Scale + shadow on touch
TRUSTWARE GATE: Sem magnetismo, os botoes sao inertes. A affordance de proximidade desaparece. VALIDO.
FX-16
3D Card Tilt
HOVER & INTERACTION
XYZ + Mouse
BAIXA
Comercial
CSS + GSAP
"Cards inclinam em 3D seguindo a posicao do mouse. Luz especular se move na superficie."
Descricao
Ao hover, o card recebe rotateX/Y baseado na posicao do mouse dentro do card (mapeamento normalizado -1 a 1). Um highlight gradient (simulando luz especular) se move inversamente. Camadas internas do card fazem parallax em Z. O card ganha volume e tangibilidade.
User Feeling
Posso quase pegar o card. Ele responde ao meu toque como objeto fisico.
Funcao Cognitiva
Engajamento tactil. O card comunica que e interativo e importante.
Call & Response
CALL (Pergunta)
RESPONSE (Resposta)
Mouse move dentro do card
RotateX/Y proporcionais a posicao + specular highlight move
Mouse no centro
Card em posicao neutra, luz centralizada
Mouse sai
Card retorna a flat com spring easing
Uso
Permitido
Product cards, portfolio items, team members, feature cards.
Proibido
Cards com muita informacao textual, formularios em cards, tabelas.
Implementacao Tecnica
onMouseMove: calcular mouseX/Y normalizado no card | rotateY = mouseX * maxRotation | rotateX = -mouseY * maxRotation | CSS perspective no parent | Gradient radial segue mouse position invertido | Inner elements com translateZ para parallax.
Parametros Canonicos
Max Rotation
12 graus
Perspective
1000px
Specular
radial-gradient white 10% opacity
Inner Parallax Z
20-50px
Easing
quickTo duration: 0.4
Fallback Mobile
Scale + shadow simples
TRUSTWARE GATE: Card flat sem tilt perde toda a tangibilidade. A informacao de volume e interatividade some. VALIDO.
FX-17
Gravity Shift Hover
HOVER & INTERACTION
Y + Z
BAIXA
Comercial
GSAP + CSS
"Hover faz elementos levitarem. Anti-gravidade local."
Descricao
Ao hover, o elemento sobe (translateY negativo), sombra se expande e desfoca (indicando distancia do plano), e o elemento ganha sutil scale up. Ao sair do hover, o elemento 'cai' de volta com bounce sutil. A sombra se comporta como fonte de luz fixa acima.
User Feeling
O card flutua quando eu olho para ele. Tem leveza e magia.
Funcao Cognitiva
Destaque por levitacao. O elemento que flutua e automaticamente mais importante que os que nao flutuam.
Call & Response
CALL (Pergunta)
RESPONSE (Resposta)
Hover enter
translateY: -12px, shadow expande (blur +20px, spread +5px), scale: 1.03
Hover exit
translateY: 0, shadow contrai, scale: 1.0 com bounce
Active/Press
translateY: -4px (desce um pouco como se pressionado)
Uso
Permitido
Cards, botoes, thumbnails, qualquer elemento interativo de grid.
Proibido
Elementos fixos como nav, footer, ou elementos ja flutuantes.
Implementacao Tecnica
CSS transition 0.3s ease-out ou GSAP to() | translateY, box-shadow, scale | Shadow formula: 0 (4+lift)px (20+lift*2)px rgba(0,0,0,0.1+lift*0.01) | Bounce on leave: elastic.out(1, 0.7).
Parametros Canonicos
Lift
-12px
Shadow Base
0 4px 20px rgba(0,0,0,0.1)
Shadow Lifted
0 16px 40px rgba(0,0,0,0.15)
Scale
1.03
Easing In
power2.out 0.3s
Easing Out
elastic.out(1, 0.7) 0.5s
Fallback Mobile
Mesmo efeito com touch
TRUSTWARE GATE: Sem levitacao, todos os cards ficam no mesmo plano. A hierarquia de hover desaparece. VALIDO.
FX-18
Cursor Galaxy Trail
PARTICLE & GENERATIVE
XYZ + Cursor
ALTA
Mad Lab
Three.js
"O cursor deixa um rastro de particulas que orbitam e decaem. Mini-galaxia pessoal."
Descricao
InstancedMesh com particulas (100-300) que seguem o cursor com delay variavel. Cada particula tem profundidade Z aleatoria, criando volume. Particulas decaem em opacity e scale ao longo do tempo. O trail forma uma cauda cometaria 3D.
User Feeling
Meu cursor e magico. Eu deixo rastros no espaco digital.
Funcao Cognitiva
Presenca do usuario. O cursor vira ferramenta expressiva, nao apenas funcional.
Call & Response
CALL (Pergunta)
RESPONSE (Resposta)
Cursor move
Particulas emitidas na posicao com velocidade herdada + Z aleatorio
Cursor rapido
Trail mais longo e esparado
Cursor parado
Particulas orbitam posicao final e dissipam
Uso
Permitido
Paginas criativas, portfolios artisticos, landing pages especiais, showcases.
Proibido
Qualquer UI funcional, e-commerce, dashboards, formularios.
Implementacao Tecnica
Three.js InstancedMesh com BufferGeometry (circle) | Pool de 300 instancias | Cada tick: novas particulas emitidas, existentes atualizam posicao (lerp para cursor com delay), opacity decai, scale diminui | Depth: Z random(-100, 100).
Parametros Canonicos
Pool Size
100-300
Lifetime
60-120 frames
Z Range
-100 a 100
Decay Rate
opacity -= 0.015/frame
Scale Decay
scale *= 0.98/frame
Fallback Mobile
Desativar completamente
TRUSTWARE GATE: Cursor padrao sem trail remove toda a expressividade e presenca pessoal. VALIDO.
FX-19
Reactive Particle Field
PARTICLE & GENERATIVE
XYZ + Multi
MEDIA
Comercial
Three.js/Canvas
"Background vivo canonico. Milhares de pontos respiram, reagem ao scroll/hover/pausa."
Descricao
Campo de particulas (1000-5000) com posicoes baseadas em Simplex noise 3D. Particulas oscilam sutilmente (breathing). Ao scroll, se deslocam na direcao do scroll. Ao hover proximo, se afastam do cursor (repulsao). Em idle, voltam a posicao base com spring. Este e o BACKGROUND PADRAO do Aurora Canon.
User Feeling
O fundo esta vivo. O site respira comigo.
Funcao Cognitiva
Contexto ambiental vivo. Elimina a sensacao de pagina estatica sem distrair do conteudo.
Call & Response
CALL (Pergunta)
RESPONSE (Resposta)
Idle
Particulas oscilam via Simplex noise (amplitude: 2px, frequencia: 0.001)
Scroll
Particulas se deslocam na direcao do scroll (parallax Z)
Hover proximo
Repulsao: particulas no raio de 150px se afastam
Pausa longa (>3s)
Particulas desaceleram, campo 'adormece'
Uso
Permitido
Background de TODAS as paginas Aurora. Elemento canonico obrigatorio.
Proibido
Nunca como foreground. Nunca com intensidade que distraia do conteudo.
Implementacao Tecnica
Canvas 2D ou Three.js Points | InstancedBufferGeometry para performance | Simplex noise para posicao base + oscilacao | Lenis velocity para scroll reaction | Mouse repulsion com falloff quadratico | requestAnimationFrame com delta time.
Parametros Canonicos
Count
1000-5000
Size
1-3px
Opacity
0.15-0.4
Noise Scale
0.001
Noise Amplitude
2px
Repulsion Radius
150px
Repulsion Force
50px max
Fallback Mobile
500 particulas, sem repulsao
TRUSTWARE GATE: Background estatico e PROIBIDO pelo Canon. Este efeito e obrigatorio. Sem ele, a pagina morre visualmente. VALIDO.
FX-20
Audio-Reactive Mesh
PARTICLE & GENERATIVE
XYZ + Audio
ALTA
Mad Lab
Three.js + Web Audio
"A geometria 3D pulsa e deforma conforme audio. Som vira forma."
Descricao
Web Audio API AnalyserNode fornece dados FFT. Frequencias sao mapeadas para displacement de vertices de uma geometria 3D (esfera, torus, icosahedro). Baixas frequencias deformam volume, altas frequencias criam spikes. A geometria danca com a musica.
User Feeling
Estou vendo o som. A musica tem forma e cor.
Funcao Cognitiva
Sinestesia digital. Combina sentidos (audio+visual), criando experiencia multi-sensorial.
Call & Response
CALL (Pergunta)
RESPONSE (Resposta)
Bass hit
Geometria expande (scale pulse)
Mid frequencies
Vertices ondulam (wave displacement)
High frequencies
Spikes nos vertices (sharp displacement)
Silencio
Geometria retorna a forma base, respirando
Uso
Permitido
Landing pages de musica, eventos, experiencias interativas, pages experimentais.
Proibido
Qualquer pagina comercial padrao. Requer opt-in do usuario para audio.
Implementacao Tecnica
Web Audio API: AudioContext + AnalyserNode + getByteFrequencyData | Three.js geometry com vertices acessiveis | Mapear FFT bins para vertex displacement | GSAP para suavizar transicoes | Geometry: IcosahedronGeometry(detail: 4) para vertices suficientes.
Parametros Canonicos
FFT Size
256 ou 512
Frequency Bins
Low: 0-10, Mid: 11-50, High: 51+
Displacement Scale
0.5-2.0 por bin
Smoothing
analyser.smoothingTimeConstant = 0.8
Geometry Detail
4 (2562 vertices)
Fallback Mobile
Visualizacao 2D com barras ou circulos
TRUSTWARE GATE: Visualizacao estatica perde toda a relacao audio-visual. A sinestesia digital desaparece. VALIDO.
FX-21
Portal Page Transition
TRANSITION & NAV
Z + Click
MEDIA
Comercial
View Transitions + GSAP
"O elemento clicado se expande ate preencher a viewport. Voce entra NELE."
Descricao
Ao clicar em um card/link, o elemento se expande (scale) da sua posicao original ate cobrir toda a viewport, servindo como transicao para a proxima pagina. A View Transitions API mantem a continuidade visual. O conteudo da nova pagina emerge de dentro do elemento expandido.
User Feeling
Eu entrei no card. A navegacao e espacial, nao um corte.
Funcao Cognitiva
Continuidade espacial. O cerebro nao registra 'mudanca de pagina', mas 'entrada em um espaco'.
Call & Response
CALL (Pergunta)
RESPONSE (Resposta)
Click em card/elemento
Elemento escala ate fill viewport (0.4s)
Transicao 50%
Background da nova pagina comeca a aparecer sob o elemento
Transicao completa
Nova pagina totalmente visivel, elemento se dissolve
Uso
Permitido
Navegacao entre paginas, cards que levam a detalhes, portfolio items.
Proibido
Links externos, acoes de voltar (usar transicao reversa), formularios.
Implementacao Tecnica
View Transitions API: document.startViewTransition() | GSAP FLIP plugin para animar de posicao/tamanho original para fullscreen | getBoundingClientRect() para posicao inicial | scale + clipPath para expansao.
Parametros Canonicos
Duration
0.4-0.6s
Easing
power3.inOut
Scale Strategy
FLIP (First, Last, Invert, Play)
ClipPath
inset(0) to inset(0) via intermediario
Fallback
CSS crossfade se View Transitions indisponivel
TRUSTWARE GATE: Page transition com fade generico perde toda a continuidade espacial. A navegacao vira corte. VALIDO.
FX-22
Dimensional Curtain
TRANSITION & NAV
Z + Scroll
MEDIA
Comercial
GSAP + CSS
"Secoes empilhadas em Z. Scroll abre cortinas revelando profundidade."
Descricao
Secoes full-viewport empilhadas via position:sticky ou ScrollTrigger pin. Cada secao tem clip-path que se abre (de inset fechado para aberto) revelando a proxima secao por baixo. O efeito e de cortinas sendo abertas para revelar camadas de profundidade. Cada revelacao e uma descoberta.
User Feeling
Estou abrindo camadas. Cada secao e um presente sendo desembrulhado.
Funcao Cognitiva
Revelacao progressiva. Conteudo nao e despejado; e apresentado com cerimonia.
Call & Response
CALL (Pergunta)
RESPONSE (Resposta)
Scroll progress
clip-path da secao atual se abre gradualmente
Secao totalmente aberta
Proxima secao revela e pin ativa
Scroll reverso
Clip-path fecha, secao anterior re-cobre
Uso
Permitido
Landing pages, storytelling, apresentacoes de features, onboarding.
Proibido
Paginas com conteudo que precisa ser acessado aleatoriamente.
Implementacao Tecnica
position: sticky + overflow: hidden | clip-path: inset() animado via ScrollTrigger | Cada secao em z-index decrescente | GSAP ScrollTrigger scrub: true para sincronizar com scroll.
Parametros Canonicos
Clip-path Start
inset(0 0 0 0) (fechado)
Clip-path End
inset(0 0 100% 0) ou reveal pattern
Scrub
true (sincronizado)
Easing
none (scrub direto)
Snap
Opcional: snap a cada secao completa
Fallback Mobile
Mesmo efeito, simplificado
TRUSTWARE GATE: Secoes aparecendo sem revelacao perdem a cerimonia de descoberta. Conteudo vira lista. VALIDO.
FX-23
Cloth Physics Text
ADVANCED 3D
XYZ + Physics
ALTA
Mad Lab
Three.js + Verlet/Rapier
"Texto se comporta como tecido. Vento sopra, mouse empurra, gravidade puxa."
Descricao
Texto renderizado em um plano subdivido que simula fisica de tecido (verlet integration ou Rapier.js). Vento constante faz o texto ondular. Mouse proximity empurra o tecido. Pontos superiores fixos (pinned), resto livre para balanccar. O texto literalmente balanca como bandeira.
User Feeling
O texto e feito de tecido. Posso quase sentir o vento.
Funcao Cognitiva
Materialidade digital. Texto ganha propriedade fisica, aumentando memorabilidade.
Call & Response
CALL (Pergunta)
RESPONSE (Resposta)
Vento constante
Texto ondula continuamente como bandeira
Mouse se aproxima
Tecido e empurrado pelo cursor (forca radial)
Click/drag
Ponto mais proximo se fixa ao cursor temporariamente
Uso
Permitido
Titulos hero experimentais, 404 pages, loading states criativos, brand pages.
Proibido
Texto legivel critico, CTAs, qualquer texto que precise de estabilidade para leitura.
Implementacao Tecnica
Three.js PlaneGeometry (alta subdivisao) com textura de texto (canvas 2D para textura) | Verlet integration: cada vertice e uma particula com posicao e posicao anterior | Constraints entre vertices adjacentes | Forca de vento: sin(time) * windStrength | Mouse: forca radial em vertices proximos.
Parametros Canonicos
Subdivisions
50x25 minimo
Wind Strength
0.5-1.5
Wind Direction
sin(time * 0.5) para variacao
Mouse Force
2.0 radial, falloff quadratico
Damping
0.98
Pin Points
Top row fixo
Fallback Mobile
CSS animation ondulante simples
TRUSTWARE GATE: Texto estatico perde toda a fisicalidade e materialidade. A bandeira vira placa. VALIDO.
FX-24
Fractal Depth Generator
ADVANCED 3D
Z + Scroll
ALTA
Mad Lab
GLSL Shader
"Scroll e zoom infinito em fractal. A profundidade e matematicamente infinita."
Descricao
Fragment shader que renderiza um fractal (Mandelbrot, Julia set) onde o scroll mapeia o zoom level. Cada scroll revela mais detalhes, infinitamente. Cores mapeadas por iteracao count. O usuario pode scrollar para sempre e sempre ha mais profundidade matematica.
User Feeling
A profundidade nao tem fim. Estou explorando o infinito.
Funcao Cognitiva
Fascinacao hipnotica. O padrao infinito captura a atencao por curiosidade pura.
Call & Response
CALL (Pergunta)
RESPONSE (Resposta)
Scroll
Zoom level aumenta exponencialmente, revelando detalhes
Mouse position
Centro do zoom se desloca para posicao do cursor
Idle longo
Zoom automatico lento (modo screensaver)
Uso
Permitido
Backgrounds experimentais, loading screens longos, paginas artisticas, demos.
Proibido
Qualquer pagina com conteudo funcional ou objetivo de conversao.
Implementacao Tecnica
WebGL fragment shader | Mandelbrot: para cada pixel, iterar z = z^2 + c | Cor = paleta mapeada por iteracao count | Uniform uZoom controlado por scroll (exponencial) | Uniform uCenter controlado por mouse | Double precision para zoom profundo.
Parametros Canonicos
Max Iterations
200-500
Zoom Rate
exponencial (zoom *= 1.05 por scroll unit)
Color Palette
HSL cycle baseado em iteracao
Precision
float64 para zoom > 10^6
Center Default
(-0.7435, 0.1314) Mandelbrot detail zone
Fallback Mobile
Imagem estatica do fractal ou video loop
TRUSTWARE GATE: Imagem estatica perde a exploracao infinita. A matematica do infinito vira poster. VALIDO.
FX-25
Spatial UI Float
ADVANCED 3D
Z + Interaction
BAIXA
Comercial
CSS + GSAP
"UI elements existem em camadas Z fisicas. Modais flutuam ACIMA, tooltips estao mais perto."
Descricao
Todos os elementos UI tem posicao Z explicita via CSS translateZ dentro de container com perspective. Modais estao em Z: +100px (acima do conteudo), tooltips em Z: +50px, conteudo em Z: 0. Sombras sao proporcionais ao Z (mais alto = sombra maior e mais difusa). Cria hierarquia espacial real na UI.
User Feeling
A interface tem profundidade real. Os modais flutuam fisicamente acima.
Funcao Cognitiva
Hierarquia Z natural. O cerebro entende que elementos mais proximos/acima sao mais prioritarios.
Call & Response
CALL (Pergunta)
RESPONSE (Resposta)
Modal abre
Emerge de Z:0 para Z:+100px com scale de 0.95 a 1.0 + sombra expande
Tooltip aparece
Pop de Z:0 para Z:+50px com bounce sutil
Dismiss
Retrai para Z:0, sombra contrai, opacity fade
Uso
Permitido
Modais, tooltips, dropdowns, popovers, notificacoes, overlays.
Proibido
Conteudo principal da pagina (deve permanecer em Z:0).
Implementacao Tecnica
Container com perspective: 1600px | Modais: translateZ(100px) scale(1.0) | Tooltips: translateZ(50px) | Shadow formula: 0 (Z/5)px (Z/2)px rgba(0,0,0, 0.05 + Z/2000) | GSAP para transicoes de Z.
Parametros Canonicos
Perspective
1600px
Modal Z
+100px
Tooltip Z
+50px
Notification Z
+75px
Shadow Formula
blur = Z/2, spread = Z/10, opacity = 0.05+Z/2000
Easing
spring(300, 30)
Fallback Mobile
Mesmo efeito, Z values reduzidos 50%
TRUSTWARE GATE: UI flat sem Z perde a hierarquia espacial. Modais e tooltips ficam no mesmo plano que o conteudo. VALIDO.
Protocolo de Implementacao
Ordem recomendada para implementacao progressiva dos efeitos no ecossistema Aurora:
FASE 1: BASE
FX-19 Reactive Particle Field + FX-11 Depth Stagger Reveal + FX-17 Gravity Shift Hover
Estabelece o background vivo canonico, reveal de texto, e hover basico. Fundacao de toda pagina Aurora.
FASE 2: PROFUNDIDADE
FX-02 Parallax Volumetric + FX-16 3D Card Tilt + FX-15 Magnetic Cursor
Adiciona profundidade volumetrica, interatividade tactil em cards, e affordance de proximidade.
FASE 3: SCROLL
FX-12 Velocity Distortion + FX-01 Dimensional Rift + FX-22 Dimensional Curtain
O scroll ganha consequencia fisica, profundidade narrativa, e revelacao cerimonial.
FASE 4: AVANCADO
FX-06 Mesh Distortion + FX-08 Liquid Morph + FX-21 Portal Transition
Materiais reativos, transicoes liquidas, e navegacao espacial.
FASE 5: SHOWCASE
FX-09 Extrusion Typo + FX-10 Kinetic Scatter + FX-23 Cloth Physics + FX-24 Fractal
Efeitos de demonstracao maxima de capacidade. Para projetos Mad Lab de alto impacto.
"A web flat morreu. O futuro e dimensional, cinetico e soberano. Cada pixel tem proposito. Cada movimento tem peso. Cada interacao tem consequencia."
MAD LAB AURORA // EFFECTS BANK v1.0 // SOVEREIGN EDITION

