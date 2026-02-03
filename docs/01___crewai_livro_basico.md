# 01___crewai_livro_basico.pdf

## Page 1

Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 2

CAPA E ILUSTRAÇÕES:
Autor: Janderson de Sales
Janderson de Sales é formado em Física pela Universidade Federal de Rondônia e Técnico em
Informática pelo Instituto Federal de Rondônia. Residente em Ji-Paraná/RO, ele possui uma trajetória
profissional diversificada. Trabalhou como professor na Rede Pública Estadual por seis anos,
lecionando Física e Matemática para turmas do ensino médio. Sempre buscou incorporar meios
tecnológicos de ensino para enriquecer a experiência de seus alunos. Atualmente, ele atua como
Bombeiro Militar. Janderson tem um grande entusiasmo por tecnologia, especialmente nas áreas
relacionadas à inteligência artificial. Atualmente, atua como bombeiro militar, desenvolvedor web e
empreendedor digital
E-mail: sales.fisico@gmail.com
Instagram: @janderson_de_sales
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 3

Dedico este livro ao meu filho Pedro. Você é minha alegria diária!
Copyright © 2024
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 4

AGENTES INTELIGENTES
Prefácio
É com imenso prazer que apresento "Agentes Inteligentes", uma obra essencial escrita
pelo renomado Professor Sandeco Macedo. Como fundador da CrewAI, tive a honra de
colaborar e ver de perto a paixão do professor pelo poder transformador da inteligência
artificial na educação e além.
Minha jornada com a CrewAI tem sido uma aventura incrível, marcada por encontros
com pessoas extraordinárias ao redor do mundo e a execução de mais de 10 milhões de
agentes em apenas um mês. Essas experiências reforçam a visão compartilhada neste livro:
que os agentes inteligentes são fundamentais para o futuro da tecnologia.
A CrewAI, utilizada como estudo de caso neste livro, exemplifica como os conceitos
de agentes inteligentes podem ser aplicados na prática. Desde automações complexas
até interações intuitivas, os exemplos práticos apresentados por Sandeco demonstram a
versatilidade e a capacidade de inovação que esses sistemas oferecem.
Além de explorar os fundamentos teóricos, ’Agentes Inteligentes’ prepara os estudantes
para aplicar o conhecimento adquirido de maneira prática e inovadora. A capacidade
de adaptar e aplicar esses princípios em diversas indústrias é o que tornará os futuros
profissionais não apenas competentes, mas revolucionários.
Ao concluir este prefácio, reitero meu respeito e admiração pelo Professor Sandeco e
pela profundidade de sua obra. ’Agentes Inteligentes’ não é apenas um livro técnico; é uma
ponte para o futuro, uma ferramenta que empodera estudantes e profissionais a moldar a
próxima geração de tecnologia.
Convido cada um de vocês a mergulhar nesta leitura enriquecedora e a explorar como
os agentes inteligentes podem transformar não apenas suas carreiras, mas o mundo ao
nosso redor.
João Moura
Fundador da CrewAI
3
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 5

Sumário
Prefácio
3
I
O mundo dos Agentes
7
1
Agentes Inteligentes
8
1.1
Conceito de Agentes Inteligentes
9
1.2
Agentes Baseados em LLM
11
1.3
Enxame de Agentes e o Futuro do Trabalho
13
1.4
Arquitetura de Agentes
14
1.5
Comunicação entre Agentes
17
1.6
Aplicações Práticas
19
2
O Framework CrewAI
23
2.1
O que é o CrewAI
24
2.2
Os componentes do CrewAI
26
2.3
Ambiente Gratuito para nossos agentes
28
2.4
Centro para treinamento de Agentes
29
2.5
Instalando o CrewAI
31
2.6
Criando a API Key da OpenAI
32
2.7
Star Wars e Agentes
33
2.8
Guia Rápido para Criar Agentes
46
3
Criando Agentes no CrewAI
49
3.1
Seu agente como um ator renomado
51
3.2
O histórico do agente
53
3.3
Seu agente tem metas
56
3.4
Um agente ’falastrão’
58
3.5
A mente do agente
60
3.6
A LLM padrão do CrewAI
61
3.7
Por que usar várias LLMs
61
3.8
Preparando as mentes
62
3.9
O chefe delega tarefas
64
4
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 6

AGENTES INTELIGENTES
3.10 Controlando as interações do agente
65
3.11 Limitando a taxa de solicitações do agente
66
3.12 Relembrar é viver. Agente com memória
67
3.13 Agente com ’córtex organizacional’
68
3.14 Limitando as tentativas do agente
69
3.15 Limitando o tempo de execução do agente
70
3.16 O agente pode executar código?
71
3.17 Configurando o agente com um dicionário
72
3.18 Registrando o processo do agente
73
3.19 Usando ferramentas nativas
74
3.20 A ferramenta de pesquisa na web
76
3.21 Agentes prontos, vamos em frente
77
4
Tarefas: Dividir para conquistar
79
4.1
Task + Agents
80
4.2
Descrevendo a tarefa
81
4.3
Atendendo as expectativas
81
4.4
Ferramentas nas tarefas? Por quê?
82
4.5
Em paralelo. Mais rápido
86
4.6
Ação Pós-Tarefa: Callback
88
4.7
Contexto da Tarefa: Context
89
4.8
Armazenamento de Saída: Output_File
90
4.9
Formatando a saída com Pydantic
92
4.10 Estruturação de Saída: Output_Json
95
4.11 Configurando Tarefas
97
4.12 Finalizando as tarefas
98
5
Nossa tripulação em processo de criação
100
5.1
Revisando componentes
101
5.2
Importância da Sequência Correta
103
5.3
Instanciando a Crew
104
5.4
Como vamos processar?
105
5.5
Velocidade Máxima
108
5.6
O Chefão
109
5.7
O cérebro do Chefão
110
5.8
Registro do trabalho
110
5.9
Camada extra de controle na Crew
112
5.10 Quero ouvir tudo da tripulação
113
5.11 Monitorando Tarefas e Etapas da Crew
114
5.12 Arquivo de Prompt
116
SUMÁRIO
5
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 7

AGENTES INTELIGENTES
5.13 Cache e Modelo de Linguagem para Chamadas de Função
117
5.14 Compartilhamento de Informações e Planejamento
120
5.15 Inputs
122
II
Agentes em Projetos Reais
124
6
Agentes implantadores de IA
125
6.1
Preparação do Ambiente de Trabalho
127
6.2
Desvendando Dados de Websites
128
6.3
Explorando Soluções Inteligentes
130
6.4
Eles fazem Matriz SWOT
132
6.5
Agente para encontrar Financiamento para Empresa
134
6.6
Consolidação e Análise de Dados de IA
136
6.7
Formando a Tripulação
139
6.8
O produto final dos agentes
140
7
Os agentes da Liga da Justiça
145
7.1
Agentes Legais
146
7.2
Escrevendo Petições
147
7.3
O que vamos pedir
148
7.4
Preparando o escritório de advocacia
151
7.5
Criando os ’Advogados’ virtuais
152
7.6
Prontos para o trabalho
157
7.7
A petição pronta
158
8
Enxame de Agentes
161
8.1
Aplicação do Enxame de Agentes
162
8.2
Preparando a colmeia
163
8.3
Distribuidor de tarefas
164
8.4
O enxame
167
8.5
Enxame em ação
171
8.6
A produção do enxame
172
SUMÁRIO
6
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 8

Parte I
O mundo dos Agentes
7
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 9

AGENTES INTELIGENTES
CAPÍTULO 1
Agentes Inteligentes
Imagine um enxame de abelhas trabalhando em uma colmeia. Cada abelha tem uma
função específica: algumas coletam néctar, outras cuidam das larvas, enquanto algumas guar-
dam a entrada. Nenhuma abelha possui o controle total, mas juntas, elas conseguem manter
a colmeia funcionando de forma eficiente e harmoniosa. Este comportamento colaborativo e
descentralizado é a essência do que entendemos por sistemas de agentes inteligentes.
Da mesma forma que as abelhas, agentes inteligentes são unidades autônomas que
percebem seu ambiente, tomam decisões e agem para atingir objetivos específicos. Eles
podem ser softwares, como assistentes virtuais que ajudam a organizar sua agenda, ou robôs
físicos que trabalham em uma linha de montagem. O ponto crucial é que, apesar de operarem
de forma independente, eles são projetados para cooperar e coordenar suas ações com outros
agentes, muitas vezes alcançando resultados que seriam impossíveis para um único agente
isolado.
Figura 1.1: Abelhas e Agentes - por Janderson de Sales
Um exemplo moderno deste conceito pode ser visto em veículos autônomos. Imagine
uma cidade onde todos os carros são autônomos e se comunicam entre si. Esses veículos
CAPÍTULO 1. AGENTES INTELIGENTES
8
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 10

AGENTES INTELIGENTES
não apenas dirigem de forma segura e eficiente, mas também colaboram para otimizar o fluxo
de tráfego, evitar acidentes e reduzir congestionamentos. Cada carro é um agente inteligente
que contribui para um sistema de transporte mais inteligente e adaptativo.
Assim como as abelhas e os carros autônomos, a pesquisa e o desenvolvimento de
agentes inteligentes visam criar sistemas capazes de enfrentar desafios complexos por meio
da cooperação e coordenação. Neste capítulo, vamos explorar os fundamentos dos agentes
inteligentes, sua arquitetura, métodos de comunicação e as diversas aplicações que tornam
essa área tão fascinante e promissora.
1.1
CONCEITO DE AGENTES INTELIGENTES
Os agentes inteligentes são entidades autônomas que percebem seu ambiente, tomam
decisões e executam ações com o objetivo de atingir metas específicas. Eles são projetados
para atuar de forma independente, mas muitas vezes são capazes de se comunicar e colaborar
com outros agentes para realizar tarefas complexas de maneira mais eficiente.
Como mostra a Figura 1.2 um agente inteligente é caracterizado por sua capacidade
de autonomia, percepção, aprendizado e adaptação. A autonomia permite que o agente
opere sem intervenção humana contínua, tomando decisões com base em suas percepções e
objetivos. A percepção refere-se à capacidade do agente de coletar informações sobre seu
ambiente, seja por meio de sensores físicos, no caso de robôs, ou por meio da coleta de
dados em sistemas de software.
Figura 1.2: Agente autônomo
O aprendizado é uma característica essencial dos agentes inteligentes, permitindo que
eles melhorem seu desempenho ao longo do tempo com base na experiência. A adaptação,
por sua vez, é a capacidade do agente de ajustar seu comportamento em resposta a mudanças
no ambiente ou na tarefa que está executando.
Agentes inteligentes podem ser classificados em diferentes tipos, dependendo de sua
CAPÍTULO 1. AGENTES INTELIGENTES
9
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 11

AGENTES INTELIGENTES
complexidade e funcionalidade. Agentes reativos são os mais simples, respondendo direta-
mente a estímulos do ambiente sem a necessidade de um modelo interno do mundo. Agentes
deliberativos, por outro lado, utilizam modelos internos para planejar e raciocinar sobre suas
ações antes de executá-las. Agentes híbridos combinam aspectos de ambas as abordagens,
oferecendo uma maior flexibilidade e capacidade de resposta.
A comunicação entre agentes é um aspecto vital dos sistemas multiagentes. Para co-
ordenar suas ações e cooperar de forma eficiente, os agentes precisam trocar informações
sobre seus estados, intenções e percepções. Isso pode ser feito por meio de várias formas de
comunicação, incluindo troca de mensagens explícitas e inferências baseadas em observações
das ações dos outros agentes.
A cooperação entre agentes permite a resolução de problemas que seriam inatingíveis
para um único agente. Por exemplo, em uma equipe de robôs de resgate, diferentes agentes
podem ser responsáveis por mapear áreas, procurar vítimas e transportar suprimentos. Por
meio da cooperação, a equipe pode cobrir uma área maior e realizar a tarefa de forma mais
rápida e eficaz do que um único robô poderia.
Em sistemas de negociação automatizados, agentes inteligentes são usados para tomar
decisões de compra e venda em mercados financeiros. Eles analisam grandes volumes de
dados, identificam padrões e fazem previsões sobre tendências futuras. Baseando-se nessas
análises, os agentes tomam decisões informadas para maximizar lucros ou minimizar riscos.
No domínio da automação industrial, agentes inteligentes são usados para monitorar e
controlar processos de manufatura. Eles podem detectar anomalias em linhas de produção,
ajustar parâmetros de operação em tempo real e coordenar a interação entre diferentes
máquinas e sistemas. Isso resulta em maior eficiência, qualidade e flexibilidade na produção.
Outra aplicação relevante é no gerenciamento de redes de comunicação. Agentes inteli-
gentes podem ser usados para otimizar a distribuição de recursos, monitorar a qualidade do
serviço e ajustar dinamicamente as configurações de rede para atender à demanda variável.
Eles ajudam a garantir que os serviços de comunicação sejam fornecidos de forma eficiente e
confiável.
Os agentes inteligentes também desempenham um papel importante na personalização
de serviços. Em sistemas de recomendação, por exemplo, agentes analisam as preferências
e comportamentos dos usuários para oferecer sugestões personalizadas de produtos, filmes,
músicas e outros conteúdos. Isso melhora a experiência do usuário e aumenta a satisfação
com o serviço.
A segurança cibernética é outro campo onde os agentes inteligentes estão sendo apli-
cados. Eles podem monitorar atividades de rede em tempo real, detectar comportamentos
suspeitos e responder a ameaças de forma rápida e eficiente. A utilização de agentes permite
uma defesa mais proativa e adaptativa contra ataques cibernéticos.
CAPÍTULO 1. AGENTES INTELIGENTES
10
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 12

AGENTES INTELIGENTES
Finalmente, no contexto de cidades inteligentes, agentes inteligentes são utilizados para
gerenciar o tráfego, otimizar o uso de energia, monitorar a qualidade do ar e coordenar serviços
públicos. Eles coletam e analisam dados de diversas fontes para melhorar a eficiência e a
sustentabilidade dos serviços urbanos.
1.2
AGENTES BASEADOS EM LLM
Agentes baseados em Modelos de Linguagem de Grande Escala (LLM) representam uma
evolução significativa na inteligência artificial, combinando a capacidade de compreensão
e geração de linguagem natural dos LLMs com a autonomia e adaptabilidade dos agentes
inteligentes. Esses agentes utilizam modelos de linguagem como GPT-4 para executar uma
ampla variedade de tarefas de forma autônoma e eficiente. Para os agentes baseados a LLM
será a sua mente que processa entradas e retorna infomações ou ações. A Figura 1.3 mostra
a relação entre o agente e a LLM.
Uma das principais características dos agentes baseados em LLM é sua capacidade de
planejamento e tomada de decisão. Esses agentes podem gerar planos complexos, analisar
diferentes opções e escolher a melhor estratégia para atingir seus objetivos. Eles utilizam
mecanismos internos de feedback, como os métodos ReAct e Reflexion, que permitem
ajustar suas estratégias com base nas observações e resultados obtidos em tempo real.
Esses métodos ajudam os agentes a refinar suas abordagens e melhorar continuamente seu
desempenho.
Figura 1.3: LLM - A mente do agente
A memória desempenha um papel crucial na arquitetura dos agentes baseados em
LLM. Inspirados nos processos cognitivos humanos, esses agentes incorporam estruturas de
memória de curto e longo prazo. A memória de curto prazo armazena informações contextuais
imediatas, enquanto a memória de longo prazo retém conhecimentos acumulados ao longo do
CAPÍTULO 1. AGENTES INTELIGENTES
11
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 13

AGENTES INTELIGENTES
tempo. Essa combinação permite que os agentes ajam de maneira consistente e adaptável,
utilizando experiências passadas para informar decisões futuras.
A comunicação entre agentes em sistemas multiagentes baseados em LLM é estruturada
para suportar inteligência coletiva. Existem diferentes paradigmas de comunicação, como
cooperação, debate e competição. Na comunicação cooperativa, os agentes trabalham juntos
para alcançar um objetivo comum, trocando informações e coordenando suas ações. No
paradigma de debate, os agentes apresentam e defendem suas próprias soluções, criticando
as dos outros, o que pode levar a uma solução mais refinada e consensual. Na comunicação
competitiva, os agentes buscam atingir seus próprios objetivos, que podem estar em conflito
com os de outros agentes.
Os agentes baseados em LLM também são capazes de usar ferramentas e recursos
externos para executar tarefas específicas. Por exemplo, um agente pode usar APIs finan-
ceiras para analisar tendências de mercado ou utilizar ferramentas de consulta para extrair
informações de bases de dados. Isso permite que os agentes realizem tarefas complexas que
exigem conhecimentos especializados e acesso a recursos externos.
A personalização e o ajuste fino são aspectos importantes no desenvolvimento de agentes
baseados em LLM. Esses agentes podem ser ajustados para tarefas específicas por meio de
processos de fine-tuning, onde são treinados com grandes conjuntos de dados que demons-
tram claramente as habilidades necessárias. Isso melhora significativamente o desempenho
dos agentes em tarefas específicas e os capacita a aprender novas habilidades.
A avaliação do desempenho dos agentes baseados em LLM é um desafio crítico. É
essencial testar esses agentes em dados não vistos anteriormente para garantir que eles
possam generalizar seu aprendizado para novos cenários. Ferramentas e plataformas, como
as oferecidas pela SuperAnnotate, ajudam a gerenciar a criação e avaliação de conjuntos de
dados, garantindo que os agentes sejam treinados e testados de maneira eficiente e eficaz.
Os agentes baseados em LLM têm uma ampla gama de aplicações práticas. Eles são
utilizados em automação de tarefas complexas, como geração de planos de projeto, escrita
de código, execução de benchmarks e criação de resumos. Essas capacidades mostram o
potencial desses agentes para executar tarefas que requerem um alto nível de engajamento
cognitivo e planejamento detalhado.
A capacidade de autorreflexão e melhoria contínua é outra característica destacada
desses agentes. Eles podem analisar suas próprias saídas, identificar problemas e fazer as
correções necessárias, engajando-se em um ciclo contínuo de crítica e reescrita. Isso permite
que os agentes aprimorem seu desempenho em diversas tarefas, como programação, análise
de dados e geração de conteúdo.
Os agentes baseados em LLM também são valiosos na colaboração com outros agentes.
Eles podem interagir e coordenar suas ações para melhorar o desempenho coletivo, seja em
CAPÍTULO 1. AGENTES INTELIGENTES
12
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 14

AGENTES INTELIGENTES
sistemas multiagentes ou em colaboração com humanos. Essa capacidade de colaboração e
coordenação é fundamental para resolver problemas complexos em ambientes dinâmicos e
incertos.
1.3
ENXAME DE AGENTES E O FUTURO DO TRABALHO
Enxame de agentes, ou inteligência de enxame, é um campo da inteligência artificial que
se inspira no comportamento coletivo de sistemas naturais, como colônias de formigas, enxa-
mes de abelhas e bandos de pássaros. Esses sistemas naturais demonstram como indivíduos
simples, seguindo regras locais e sem controle centralizado, podem gerar comportamentos
complexos e eficientes. Aplicando esses princípios, a inteligência de enxame em sistemas
de IA permite que agentes individuais cooperem e se auto-organizem para realizar tarefas
complexas.
Um exemplo marcante da aplicação de enxame de agentes é na área de robótica e
veículos autônomos. Em um enxame de drones, cada drone atua de forma autônoma, mas
comunica-se com os demais para evitar colisões e cumprir objetivos de missão, como mapear
áreas ou realizar entregas. Esse tipo de sistema é altamente adaptável e resiliente, pois a
falha de um drone não compromete a missão do enxame como um todo.
Na indústria de logística, a inteligência de enxame pode otimizar rotas de entrega. Algo-
ritmos baseados em enxame analisam dados de tráfego em tempo real para determinar as
melhores rotas, adaptando-se dinamicamente a condições de tráfego em constante mudança.
Isso não só melhora a eficiência das entregas, mas também reduz custos operacionais e o
impacto ambiental.
O futuro do trabalho será profundamente impactado por sistemas de enxame de agentes.
Em ambientes de manufatura, robôs enxame podem colaborar para montar produtos com-
plexos de maneira mais eficiente do que robôs individuais. Esses sistemas podem ajustar
suas operações em resposta a mudanças na linha de produção, tornando a manufatura mais
flexível e responsiva a demandas variáveis do mercado.
Em escritórios e espaços de trabalho do conhecimento, agentes de enxame podem
gerenciar fluxos de trabalho e recursos humanos. Por exemplo, um sistema de inteligência de
enxame pode alocar tarefas de projeto para diferentes equipes com base nas habilidades e
cargas de trabalho atuais dos funcionários. Isso assegura que os recursos sejam utilizados de
forma otimizada e que os prazos sejam cumpridos de maneira eficiente.
A inteligência de enxame também tem aplicações promissoras em ciência de dados
e aprendizado de máquina. Algoritmos de enxame podem ser utilizados para otimizar o
processo de seleção de hiperparâmetros em modelos de aprendizado profundo, melhorando o
CAPÍTULO 1. AGENTES INTELIGENTES
13
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 15

AGENTES INTELIGENTES
desempenho desses modelos em tarefas como classificação de imagens e reconhecimento
de padrões. Ao explorar coletivamente diferentes configurações, os agentes de enxame
conseguem identificar rapidamente as melhores combinações para maximizar a precisão do
modelo.
1.4
ARQUITETURA DE AGENTES
Nesta seção, abordaremos as diferentes arquiteturas de agentes, incluindo arquiteturas
reativas, deliberativas e híbridas, detalhando como cada uma funciona e em que contextos
são mais eficazes.
Arquitetura Reativa
A arquitetura reativa é uma das abordagens mais simples para a construção de agentes
inteligentes. Agentes reativos respondem diretamente aos estímulos do ambiente sem a
necessidade de um modelo interno do mundo. Eles são projetados com um conjunto de regras
ou comportamentos predefinidos que determinam suas ações com base nas percepções
imediatas. Por exemplo, em um robô móvel, um comportamento reativo poderia ser ’se
detectar um obstáculo, virar à direita’.
Os agentes reativos são eficazes em ambientes onde as tarefas são bem definidas e
as respostas podem ser programadas de antemão. Eles são rápidos e eficientes, pois não
precisam realizar processamento complexo ou planejamento de longo prazo. No entanto, sua
simplicidade também é uma limitação, pois eles podem falhar em situações onde a resposta
adequada não está coberta pelas regras predefinidas.
Arquitetura Deliberativa
Diferente dos agentes reativos, os agentes deliberativos utilizam modelos internos do
mundo para tomar decisões informadas. Eles são capazes de planejar suas ações com base
em representações internas do ambiente e dos objetivos a serem alcançados. Um agente
deliberativo pode construir um plano de ação sequencial para atingir uma meta específica,
considerando possíveis obstáculos e alternativas.
A arquitetura deliberativa é eficaz em ambientes complexos e dinâmicos onde é necessário
raciocínio e planejamento. Esses agentes podem adaptar suas estratégias com base em
mudanças no ambiente e são capazes de resolver problemas que requerem pensamento crítico
CAPÍTULO 1. AGENTES INTELIGENTES
14
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 16

AGENTES INTELIGENTES
e análise de múltiplos fatores. No entanto, essa complexidade torna os agentes deliberativos
mais lentos e exigentes em termos de recursos computacionais.
Arquitetura Híbrida
As arquiteturas híbridas combinam elementos das abordagens reativa e deliberativa
para aproveitar os pontos fortes de ambos os métodos. Um agente híbrido pode operar
em diferentes níveis de comportamento, alternando entre respostas rápidas e reativas para
situações imediatas e planejamento deliberativo para objetivos de longo prazo.
Por exemplo, em um sistema de robótica móvel, um agente híbrido pode usar compor-
tamentos reativos para evitar obstáculos em tempo real, enquanto emprega planejamento
deliberativo para navegar até um destino específico. Essa flexibilidade permite que os agentes
híbridos sejam eficazes em uma ampla gama de contextos, combinando a rapidez dos agentes
reativos com a capacidade de raciocínio dos agentes deliberativos.
Agentes Baseados em Lógica
Outra abordagem na arquitetura de agentes é o uso de agentes baseados em lógica, que
tomam decisões com base em inferências lógicas derivadas de um conjunto de regras e fatos.
Esses agentes utilizam motores de inferência para deduzir novas informações e determinar a
melhor ação a ser tomada. Eles são frequentemente usados em sistemas especialistas e em
domínios onde o conhecimento pode ser formalizado de forma clara.
Agentes baseados em lógica são eficazes em ambientes onde é necessário um alto grau
de precisão e consistência nas decisões. No entanto, eles podem ser limitados pela dificuldade
de capturar todo o conhecimento necessário em um conjunto de regras e pela complexidade
do processo de inferência.
Agentes de Enxame
A inteligência de enxame é uma abordagem que se inspira no comportamento coletivo de
sistemas naturais, como colônias de formigas e enxames de abelhas. Agentes de enxame
operam de forma descentralizada, seguindo regras simples que levam a comportamentos
emergentes complexos. Eles são eficazes em tarefas como otimização, busca e exploração.
Por exemplo, algoritmos de otimização por enxame de partículas (PSO) utilizam uma
população de soluções candidatas (partículas) que se movem no espaço de soluções guiadas
por suas melhores posições e pelas melhores posições de seus vizinhos. Essa abordagem
tem sido aplicada com sucesso em problemas de otimização global.
CAPÍTULO 1. AGENTES INTELIGENTES
15
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 17

AGENTES INTELIGENTES
Impacto das Arquiteturas de Agentes no Futuro do Trabalho
A evolução das arquiteturas de agentes está transformando a maneira como tarefas
complexas são realizadas em diversos setores. Em manufatura, agentes híbridos e de enxame
podem colaborar para aumentar a eficiência e a flexibilidade das linhas de produção. Na
logística, agentes reativos e deliberativos otimizam rotas e reduzem custos operacionais. Em
escritórios, agentes baseados em lógica e deliberativos melhoram a gestão de projetos e
recursos humanos.
Além disso, agentes inteligentes são fundamentais para a personalização de serviços e
a segurança cibernética, adaptando-se continuamente às necessidades dos usuários e às
ameaças emergentes. Com a integração de modelos de linguagem de grande escala, agentes
deliberativos e híbridos podem melhorar ainda mais a automação e a tomada de decisões,
impactando positivamente o futuro do trabalho e a eficiência organizacional.
Métodos de Comunicação
A comunicação entre agentes é um aspecto vital para o funcionamento eficiente dos
sistemas multiagentes. Existem vários métodos de comunicação que os agentes podem
usar para trocar informações e coordenar suas ações. Esses métodos incluem a troca de
mensagens explícitas, a comunicação por meio de sinais de ambiente e a inferência baseada
na observação do comportamento de outros agentes.
A troca de mensagens explícitas é um método direto onde os agentes enviam e rece-
bem mensagens contendo informações específicas. Este método é altamente estruturado e
permite a transmissão clara de dados e intenções. Protocolos como o FIPA (Foundation for
Intelligent Physical Agents) ACL (Agent Communication Language) são comumente usados
para padronizar essa comunicação.
Outro método é a comunicação por meio de sinais de ambiente, onde os agentes modifi-
cam o ambiente de alguma forma para transmitir informações. Por exemplo, em um sistema
de robôs de limpeza, um robô pode deixar uma marca em uma área limpa para informar aos
outros que essa área já foi tratada. Esse método é menos direto, mas pode ser eficaz em
certos contextos onde a comunicação direta não é possível ou prática.
A inferência baseada na observação do comportamento de outros agentes é um método
onde os agentes deduzem informações observando as ações dos outros. Este método requer
um alto nível de sofisticação, pois os agentes devem ser capazes de interpretar corretamente
as intenções por trás das ações observadas. Este tipo de comunicação é frequentemente
usado em sistemas onde a cooperação implícita é necessária.
CAPÍTULO 1. AGENTES INTELIGENTES
16
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 18

AGENTES INTELIGENTES
1.5
COMUNICAÇÃO ENTRE AGENTES
Exploraremos os métodos e protocolos de comunicação entre agentes baseados em
LLM (Large Language Models), enfatizando a importância da cooperação e coordenação em
sistemas multiagentes.
A comunicação entre agentes baseados em LLM utiliza principalmente a linguagem natural
para trocar informações e coordenar ações. Isso se deve à capacidade desses modelos de
processar e gerar texto de maneira semelhante ao humano, facilitando a interação entre
agentes e entre agentes e humanos.
Figura 1.4: Comunicação entre agentes
A troca de mensagens explícitas em agentes baseados em LLM envolve o envio e
recebimento de mensagens textuais que contêm instruções, informações de estado, ou
solicitações de ação. Essas mensagens são formuladas em linguagem natural, o que permite
uma flexibilidade significativa na comunicação. Por exemplo, um agente pode enviar uma
mensagem a outro solicitando a atualização de um banco de dados ou fornecendo dados de
sensores para análise. Esse método aproveita a capacidade dos LLMs de compreender e
gerar texto complexo, facilitando uma comunicação rica e contextual. A Figura 1.4 mostra um
tipo de comunicação entre agentes, a delegação de tarefas.
CAPÍTULO 1. AGENTES INTELIGENTES
17
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 19

AGENTES INTELIGENTES
Além das mensagens explícitas, agentes baseados em LLM frequentemente utilizam
a comunicação contextual e implícita. Isso significa que eles podem inferir intenções e
necessidades baseando-se no contexto das interações. Por exemplo, ao observar uma série
de ações de outro agente, um LLM pode inferir que há um problema a ser resolvido e tomar
medidas proativas para ajudar. Esta capacidade de inferência é fortalecida pela robustez dos
LLMs em compreender nuances e contextos mais amplos nas interações textuais.
Os agentes baseados em LLM também utilizam inferência e aprendizado contínuo para
aprimorar sua comunicação. Eles são capazes de aprender a partir de interações passadas
e ajustar suas respostas e comportamentos futuros. Por exemplo, se um agente percebe
que uma certa abordagem de comunicação não foi eficaz em uma tarefa anterior, ele pode
modificar sua estratégia em interações futuras. Esse aprendizado é crucial para melhorar a
eficiência da comunicação e a coordenação entre agentes ao longo do tempo.
Os protocolos de comunicação para agentes baseados em LLM são frequentemente
adaptados para maximizar a eficiência e a clareza na troca de informações. Esses protocolos
incluem regras para formatação de mensagens, padrões de interação e mecanismos de
confirmação de recebimento e entendimento de mensagens.
O FIPA-ACL, amplamente utilizado em sistemas multiagentes tradicionais, pode ser adap-
tado para agentes baseados em LLM. As mensagens são estruturadas em atos comunicativos
como pedidos, informativos e consultas, mas são formuladas em linguagem natural. Isso
permite que os agentes utilizem suas capacidades linguísticas avançadas para entender e
gerar respostas apropriadas, mantendo a estrutura e a previsibilidade do protocolo original.
Para garantir a interoperabilidade entre diferentes sistemas e plataformas, protocolos
baseados em XML podem ser utilizados. Esses protocolos permitem a comunicação estrutu-
rada e extensível, facilitando a integração de agentes baseados em LLM com outros sistemas
de software. O uso de XML permite que os agentes troquem dados de forma consistente e
validada, assegurando a correta interpretação das mensagens.
A cooperação entre agentes baseados em LLM é facilitada pela capacidade desses
agentes de compreender e gerar linguagem natural de forma sofisticada. Isso permite uma
coordenação mais intuitiva e eficiente em tarefas complexas. Agentes baseados em LLM
podem formar coalizões dinâmicas para atingir objetivos comuns. A formação dessas coalizões
é baseada na troca contínua de informações e na negociação de papéis e responsabilidades.
Por exemplo, em um ambiente de desenvolvimento de software, diferentes agentes podem
assumir papéis como programador, testador e gerente de projeto, coordenando suas ações
por meio de comunicação textual rica.
A negociação é essencial em sistemas multiagentes, e agentes baseados em LLM são
especialmente adequados para essa tarefa devido à sua habilidade de processar linguagem
natural. Eles podem negociar alocação de recursos, prioridades de tarefas e resolução de
conflitos, utilizando linguagem natural para formular e responder a propostas. Isso torna o
CAPÍTULO 1. AGENTES INTELIGENTES
18
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 20

AGENTES INTELIGENTES
processo de negociação mais fluido e adaptável a diferentes contextos e necessidades.
A coordenação de planos em agentes baseados em LLM envolve a sincronização de
ações para evitar conflitos e maximizar a eficiência. Esses agentes podem compartilhar e
ajustar planos em tempo real, utilizando sua capacidade de entender e gerar descrições
detalhadas de tarefas e objetivos. Ferramentas como planejadores distribuídos e algoritmos
de consenso são frequentemente utilizados para facilitar essa coordenação, garantindo que
todos os agentes estejam alinhados em suas metas e ações.
Embora a comunicação entre agentes baseados em LLM ofereça muitas vantagens,
também apresenta desafios significativos. A escalabilidade é uma preocupação, pois a
complexidade da comunicação pode aumentar exponencialmente com o número de agentes.
Além disso, a segurança e a privacidade das comunicações são críticas, especialmente em
aplicações sensíveis. A padronização de protocolos e a garantia de interoperabilidade entre
diferentes sistemas também são desafios que precisam ser abordados para maximizar a
eficácia desses agentes.
1.6
APLICAÇÕES PRÁTICAS
Os agentes baseados em LLM (Large Language Models) estão revolucionando diversas
áreas ao automatizar processos, mitigar trabalhos manuais e proporcionar novas formas de
interação e eficiência. A seguir, discutiremos como esses agentes podem ser aplicados em
diferentes setores, como Direito e Justiça, Marketing, Vendas, Educação, Saúde e Medicina,
Interação Social e Redes Sociais, além de outras áreas relevantes.
Direito e Justiça
No campo do Direito e Justiça, agentes baseados em LLM podem ajudar na análise e
redação de documentos legais, automatizar a pesquisa jurisprudencial e fornecer assistência
em tempo real para advogados e juízes. Eles podem processar grandes volumes de dados
legais, identificar precedentes relevantes e sugerir estratégias jurídicas, reduzindo significativa-
mente o tempo gasto em tarefas rotineiras e permitindo que os profissionais se concentrem em
aspectos mais críticos dos casos. Além disso, esses agentes podem auxiliar na elaboração de
contratos e na verificação de conformidade legal, garantindo precisão e eficiência.
CAPÍTULO 1. AGENTES INTELIGENTES
19
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 21

AGENTES INTELIGENTES
Marketing
Em Marketing, agentes baseados em LLM podem personalizar campanhas publicitárias,
analisar o comportamento do consumidor e gerar conteúdo de marketing sob medida. Eles
podem segmentar audiências com base em dados comportamentais e demográficos, criando
mensagens altamente personalizadas que aumentam a eficácia das campanhas. Além disso,
esses agentes podem monitorar tendências de mercado e feedback dos clientes em tempo real,
ajustando estratégias de marketing de acordo com as mudanças no mercado, aumentando
assim a relevância e o impacto das campanhas.
Vendas
No setor de Vendas, agentes LLM podem automatizar a geração de leads, personalizar
comunicações com clientes e fornecer suporte ao cliente 24/7. Eles podem analisar dados de
clientes para identificar oportunidades de vendas cruzadas e upselling, além de automatizar
respostas a consultas comuns, liberando os vendedores para focarem em negociações mais
complexas. Esses agentes também podem analisar o desempenho das vendas, oferecendo
insights acionáveis para otimizar estratégias de vendas e melhorar os resultados.
Educação
Na Educação, agentes baseados em LLM podem oferecer tutoria personalizada, res-
ponder a perguntas de alunos e criar materiais educativos adaptativos. Eles podem ajudar
professores a desenvolver currículos personalizados e fornecer feedback imediato sobre o
desempenho dos alunos. Além disso, esses agentes podem facilitar o aprendizado autodiri-
gido, oferecendo recursos de estudo personalizados e simulando discussões interativas para
melhorar a compreensão dos alunos sobre os tópicos estudados.
Saúde e Medicina
No setor de Saúde e Medicina, agentes LLM podem apoiar diagnósticos médicos, geren-
ciar registros de pacientes e automatizar a administração de hospitais. Eles podem analisar
sintomas e históricos médicos para fornecer diagnósticos preliminares e recomendar trata-
mentos. Além disso, esses agentes podem ajudar a gerenciar agendamentos de consultas,
monitorar a adesão dos pacientes a tratamentos e fornecer lembretes automáticos para a
administração de medicamentos, melhorando a eficiência dos serviços de saúde e a qualidade
do atendimento ao paciente.
CAPÍTULO 1. AGENTES INTELIGENTES
20
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 22

AGENTES INTELIGENTES
Interação Social e Redes Sociais
Em Interação Social e Redes Sociais, agentes baseados em LLM podem moderar con-
teúdo, personalizar feeds de notícias e facilitar a interação entre usuários. Eles podem detectar
e remover automaticamente conteúdo inadequado ou prejudicial, além de personalizar a
experiência dos usuários com base em suas preferências e comportamentos. Esses agentes
também podem simular interações sociais, oferecendo companhia virtual e suporte emocional,
especialmente para indivíduos que podem se sentir isolados ou solitários.
Outras Aplicações Relevantes
Além das áreas mencionadas, agentes baseados em LLM têm aplicações promissoras
em outros setores como finanças, onde podem analisar mercados e auxiliar na tomada de
decisões de investimento; e no gerenciamento de projetos, onde podem coordenar equipes,
rastrear o progresso e automatizar tarefas administrativas. Em ambientes industriais, esses
agentes podem monitorar e otimizar operações, detectar falhas em equipamentos e prever
necessidades de manutenção, aumentando a eficiência operacional e reduzindo custos.
Os agentes baseados em LLM oferecem uma ampla gama de aplicações práticas que po-
dem transformar diversos setores ao automatizar processos, aumentar a eficiência e melhorar
a interação humano-máquina. Com a contínua evolução dessas tecnologias, espera-se que
seu impacto continue a crescer, oferecendo soluções inovadoras e eficientes para desafios
complexos em várias áreas.
Próximos Passos
Neste capítulo, exploramos o fascinante mundo dos agentes inteligentes, destacando sua
capacidade de perceber o ambiente, tomar decisões e agir de forma autônoma para alcançar
objetivos específicos. Desde as arquiteturas reativas e deliberativas até as híbridas, vimos
como diferentes abordagens podem ser aplicadas em variados contextos para maximizar a
eficiência e a eficácia das tarefas. A comunicação e a cooperação entre agentes, especial-
mente com a introdução de Modelos de Linguagem de Grande Escala (LLM), abrem novas
possibilidades para a interação sofisticada e adaptável em sistemas multiagentes.
As aplicações práticas desses agentes são vastas e abrangem setores como Direito e
Justiça, Marketing, Vendas, Educação, Saúde e Medicina, Interação Social e Redes Sociais,
entre outros. Em cada um desses campos, os agentes baseados em LLM estão revolucionando
a maneira como as tarefas são realizadas, automatizando processos, mitigando o trabalho
manual e proporcionando novas formas de interação e eficiência. Esses avanços não apenas
CAPÍTULO 1. AGENTES INTELIGENTES
21
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 23

AGENTES INTELIGENTES
aumentam a produtividade, mas também melhoram a qualidade dos serviços e a satisfação
dos usuários.
Agora que compreendemos os fundamentos e as aplicações dos agentes inteligentes,
estamos prontos para dar o próximo passo: a criação de nossos próprios agentes inteligentes.
Para isso, apresentamos o framework CrewAI, uma plataforma poderosa e flexível projetada
para facilitar o desenvolvimento e a implementação de agentes baseados em LLM.
CrewAI oferece um ambiente integrado para a construção de agentes, fornecendo ferra-
mentas para a definição de modelos, configuração de protocolos de comunicação e gerencia-
mento de memória. Com CrewAI, você pode facilmente treinar e personalizar seus agentes
para tarefas específicas, aproveitando as capacidades avançadas de modelos de linguagem
de grande escala.
Vamos mergulhar nas possibilidades empolgantes que CrewAI oferece e explorar como
podemos utilizar esta plataforma para criar agentes inteligentes que não apenas entendam
e respondam em linguagem natural, mas também colaborem e se adaptem em ambientes
complexos. Prepare-se para desbloquear um novo nível de inovação e eficiência com CrewAI!
CAPÍTULO 1. AGENTES INTELIGENTES
22
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 24

AGENTES INTELIGENTES
CAPÍTULO 2
O Framework CrewAI
Um framework de inteligência artificial para a criação de agentes é como uma caixa de
ferramentas super equipada para desenvolvedores que querem construir agentes autônomos.
Esses agentes são programas ’espertos’ que tomam decisões e executam tarefas sozinhos,
imitando comportamentos humanos ou realizando operações complexas de maneira auto-
matizada. Com um framework, você tem à disposição uma estrutura organizada e vários
recursos que facilitam a integração de algoritmos de aprendizado de máquina, processamento
de linguagem natural e outras técnicas de IA.
Figura 2.1: CrewAI e suas ferramentas poderosas
A grande sacada de usar um framework de IA é que ele deixa tudo mais rápido e
menos complicado. Criar agentes do zero pode ser uma missão impossível, exigindo um
profundo conhecimento em várias áreas da inteligência artificial. Mas, com um framework, os
CAPÍTULO 2. O FRAMEWORK CREWAI
23
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 25

AGENTES INTELIGENTES
desenvolvedores podem pegar componentes prontos e testados, focando no que realmente
importa: as particularidades e melhorias do projeto. Isso economiza um tempão, reduz a
chance de erros e melhora a qualidade do produto final.
Além disso, os frameworks trazem uma bagagem de boas práticas e padrões de codifica-
ção que são essenciais para manter tudo nos trilhos. Eles garantem que os desenvolvedores
sigam uma abordagem organizada e coerente ao criar agentes. Isso é super importante para
a manutenção e escalabilidade dos projetos, porque facilita a vida de quem vai ler e entender
o código depois, promove a reutilização de componentes e garante que os agentes possam
evoluir conforme o sistema cresce.
E, claro, a segurança e a robustez dos agentes são muito melhores com um framework.
Muitos frameworks já vêm com mecanismos de segurança e proteções contra vulnerabilidades
comuns, o que é fundamental quando se lida com dados sensíveis e operações críticas. Usar
um framework confiável garante que os agentes não só funcionem bem, mas também estejam
protegidos contra ameaças, contribuindo para a estabilidade e confiabilidade do sistema de IA.
2.1
O QUE É O CREWAI
O CrewAI é um framework super inovador que facilita a construção de agentes inteligentes
que trabalham em equipe, como uma verdadeira tripulação. Essa obra-prima foi criada pelo
talentoso brasileiro João Moura, conhecido no Twitter como @joaomdmoura. O CrewAI permite
que múltiplos agentes assumam papéis específicos, compartilhem objetivos e colaborem de
forma eficiente para resolver problemas complexos, praticamente uma dança sincronizada de
IA.
João Moura, meu amigo e gênio da inteligência artificial, teve a visão de criar um framework
que simplificasse a integração e a gestão de agentes autônomos. O CrewAI rapidamente
ganhou fama nos Estados Unidos e na Europa, graças à sua abordagem inovadora para a
colaboração entre agentes. Tornou-se uma ferramenta indispensável para desenvolvedores e
pesquisadores que precisam de um exército de agentes trabalhando juntos.
A fama do CrewAI foi tanta que João foi convidado pelo renomado professor Andrew
Ng, um dos maiores especialistas em IA e meu mentor, para ministrar um curso na empresa
de Andrew, a deeplearning.ai. Imagine só, duas mentes brilhantes unidas para compartilhar
conhecimento! Esse curso fantástico está disponível em https://learn.crewai.com, permitindo
que pessoas do mundo todo aprendam a usar o CrewAI em seus próprios projetos. Além
disso, fazendo esse curso gratuito você ganhará um certificado da CrewAI e do Deep Learning
AI o que é traz grande valor ao seu currículo.
O CrewAI oferece uma estrutura robusta e flexível para o desenvolvimento de agentes
CAPÍTULO 2. O FRAMEWORK CREWAI
24
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 26

AGENTES INTELIGENTES
autônomos. Ele facilita a criação, configuração e gestão desses agentes, proporcionando
um ambiente onde eles podem operar de maneira coordenada e eficiente. Com o CrewAI,
é possível definir papéis específicos para cada agente, configurar suas metas e fornecer as
ferramentas necessárias para que eles realizem suas tarefas com sucesso.
Uma das grandes vantagens do CrewAI é a sua capacidade de integração com diversas
ferramentas e bibliotecas de IA, como o LangChain e o LlamaIndex. Isso significa que os
desenvolvedores podem aproveitar uma vasta gama de recursos para equipar seus agentes,
desde motores de busca e APIs externas até algoritmos avançados de aprendizado de
máquina. Essa flexibilidade torna o CrewAI uma escolha ideal para projetos de todos os
tamanhos e complexidades.
Além de suas capacidades técnicas, o CrewAI é conhecido por sua abordagem prática
e amigável para o desenvolvimento de agentes. João Moura projetou o framework com a
intenção de tornar o processo de criação de agentes o mais intuitivo e direto possível. A
documentação clara e detalhada do CrewAI, juntamente com inúmeros exemplos e tutoriais,
ajuda os desenvolvedores a começarem rapidamente e sem dores de cabeça. O CrewAI foi
desenvolvido em Python e é necessário utilizar o Python para utilizá-lo. Porém, João deixou a
codificação tão simples que nem parece que você está programando, e isso é um dos grandes
motivos do porquê o CrewAI cresceu tanto em popularidade.
O impacto do CrewAI no campo da inteligência artificial é inegável. Ele não só simplifica o
desenvolvimento de agentes autônomos, mas também promove a inovação ao permitir que
esses agentes colaborem de maneiras novas e empolgantes. Projetos que antes pareciam
complexos e difíceis de gerenciar agora podem ser abordados com confiança, graças às
capacidades de orquestração do CrewAI.
João continua a expandir e aprimorar o CrewAI, trabalhando incansavelmente para adicio-
nar novas funcionalidades e melhorar a usabilidade do framework. Sua dedicação e paixão
pela IA são refletidas na qualidade do CrewAI e na crescente comunidade de desenvolvedores
CAPÍTULO 2. O FRAMEWORK CREWAI
25
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 27

AGENTES INTELIGENTES
que confiam nessa ferramenta para seus projetos de agentes inteligentes.
O curso oferecido em parceria com Andrew Ng é uma excelente oportunidade para
qualquer pessoa interessada em inteligência artificial aprender com um dos melhores. Ele
cobre desde os conceitos básicos até as aplicações avançadas do CrewAI, fornecendo uma
base sólida para o desenvolvimento de agentes autônomos eficientes e colaborativos. Ao
acessar https://learn.crewai.com, você pode se inscrever e começar a explorar todo o potencial
do CrewAI sob a orientação de João Moura. Eu fiz e digo que vale muito a pena.
2.2
OS COMPONENTES DO CREWAI
O CrewAI é composto por diversos componentes que trabalham juntos para facilitar a cria-
ção e gestão de agentes autônomos. Cada componente desempenha um papel fundamental
na estrutura do framework, garantindo que os agentes possam colaborar eficientemente para
alcançar seus objetivos. Neste capítulo, faremos uma introdução aos principais componentes
do CrewAI, preparando o terreno para uma exploração mais detalhada nos próximos capítulos.
O primeiro componente essencial do CrewAI é o Agente. Agentes são entidades autôno-
mas programadas para executar tarefas específicas. Eles têm papéis definidos, metas claras e
podem utilizar diversas ferramentas para atingir seus objetivos. A flexibilidade e a capacidade
de personalização dos agentes permitem que eles sejam adaptados para uma ampla gama de
aplicações, desde pesquisa e análise até geração de conteúdo e suporte ao cliente.
Outro componente vital é a Tarefa. As tarefas no CrewAI são descrições de atividades
que os agentes devem realizar. Cada tarefa possui uma descrição detalhada, objetivos
específicos e resultados esperados. As tarefas são a principal forma de comunicação entre o
desenvolvedor e os agentes, fornecendo a eles as instruções necessárias para realizar seu
trabalho de maneira eficaz.
O Processo é o componente que define como as tarefas são executadas e coordenadas
entre os agentes. No CrewAI, os processos podem ser sequenciais, onde as tarefas são
realizadas uma após a outra, ou paralelos, onde múltiplas tarefas são executadas simulta-
neamente. A escolha do tipo de processo depende da natureza do projeto e dos requisitos
específicos das tarefas.
Um dos aspectos mais interessantes do CrewAI é a capacidade de integrar Ferramentas.
Ferramentas são recursos externos que os agentes podem usar para cumprir suas tarefas.
Isso inclui APIs, motores de busca, bases de dados e outras bibliotecas de IA. A integração
de ferramentas permite que os agentes ampliem suas capacidades e realizem tarefas mais
complexas de maneira eficiente.
A Crew, ou equipe, é um componente que agrupa vários agentes e tarefas em uma
CAPÍTULO 2. O FRAMEWORK CREWAI
26
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 28

AGENTES INTELIGENTES
unidade coesa. Cada equipe é configurada para trabalhar de forma colaborativa, com agentes
especializados em diferentes áreas, mas todos focados em um objetivo comum. A formação
de equipes bem equilibradas é crucial para o sucesso de projetos complexos no CrewAI.
A Memória é outro componente importante do CrewAI. Ela permite que os agentes
retenham informações ao longo do tempo, melhorando sua capacidade de tomar decisões ba-
seadas em contexto e histórico. Com memória, os agentes podem aprender com experiências
passadas, tornando-se mais eficientes e eficazes em suas tarefas.
A Configuração é o componente que define as propriedades e comportamentos dos
agentes e tarefas. Configurações podem ser feitas por meio de arquivos YAML, que espe-
cificam detalhes como papéis, metas, ferramentas e processos. A configuração flexível do
CrewAI permite que os desenvolvedores adaptem facilmente o comportamento dos agentes
às necessidades específicas de seus projetos.
O Ambiente no CrewAI refere-se ao contexto no qual os agentes operam. Ele inclui
todas as variáveis externas e condições que podem influenciar o desempenho dos agentes. A
definição clara do ambiente é crucial para garantir que os agentes tenham todas as informações
necessárias para realizar suas tarefas com precisão.
Um componente crucial para a eficiência do CrewAI é a Comunicação. Os agentes
precisam se comunicar de forma eficaz para coordenar suas ações e compartilhar informações.
O CrewAI oferece mecanismos robustos de comunicação, permitindo que os agentes troquem
dados e resultados de maneira rápida e segura.
A Delegação é uma característica que permite aos agentes atribuir tarefas uns aos outros.
Isso é especialmente útil em projetos complexos onde diferentes agentes têm especializações
distintas. A capacidade de delegação garante que as tarefas sejam realizadas pelo agente
mais qualificado, otimizando o processo de execução.
O Monitoramento é um componente essencial para acompanhar o desempenho dos
agentes e tarefas. Ele permite que os desenvolvedores verifiquem o progresso, identifiquem
possíveis problemas e façam ajustes em tempo real. O monitoramento eficaz é fundamental
para garantir que os projetos do CrewAI sejam concluídos com sucesso.
A Segurança é uma prioridade no CrewAI. Com agentes interagindo com diversas
ferramentas e dados, é crucial garantir que todas as operações sejam seguras. O CrewAI
incorpora medidas de segurança robustas para proteger contra vulnerabilidades e garantir a
integridade dos dados e processos.
O Relatório é um componente que documenta as atividades e resultados dos agentes.
Ele fornece uma visão detalhada do que foi realizado, facilitando a análise de desempenho e a
tomada de decisões informadas. Relatórios claros e precisos são essenciais para avaliar o
sucesso dos projetos e identificar áreas de melhoria.
A Interface de Usuário do CrewAI é projetada para ser intuitiva e amigável. Ela oferece
CAPÍTULO 2. O FRAMEWORK CREWAI
27
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 29

AGENTES INTELIGENTES
aos desenvolvedores uma maneira fácil de configurar, monitorar e gerenciar agentes e tarefas.
A interface simplificada do CrewAI ajuda a reduzir a curva de aprendizado e aumenta a
produtividade dos desenvolvedores.
Por fim, o componente Atualização garante que o CrewAI esteja sempre em constante
evolução. Ele permite a adição de novas funcionalidades, melhorias e correções de bugs,
mantendo o framework atualizado com as últimas tendências e tecnologias em inteligência
artificial. A capacidade de atualização contínua é vital para a longevidade e relevância do
CrewAI no dinâmico campo da IA.
A tabela 2.1 resume os componentes do framework CrewAI para a criação de agentes
inteligentes.
Componente
Descrição
Agente
Entidade autônoma que executa tarefas específicas com um papel
definido e metas claras.
Tarefa
Descrição de atividades que os agentes devem realizar, com objeti-
vos e resultados esperados.
Processo
Define como as tarefas são executadas e coordenadas entre os
agentes, podendo ser sequencial ou paralelo.
Ferramentas
Recursos externos que os agentes utilizam para cumprir suas tarefas,
como APIs e bibliotecas de IA.
Crew (Equipe)
Agrupamento de vários agentes e tarefas em uma unidade coesa
para trabalho colaborativo.
Memória
Permite que os agentes retenham informações ao longo do tempo
para melhorar decisões baseadas em contexto.
Configuração
Define as propriedades e comportamentos dos agentes e tarefas por
meio de arquivos YAML.
Ambiente
Contexto no qual os agentes operam, incluindo variáveis externas e
condições influentes.
Comunicação
Mecanismos para os agentes trocarem dados e resultados de ma-
neira rápida e segura.
Delegação
Permite que os agentes atribuam tarefas uns aos outros, garantindo
que sejam realizadas pelo agente mais qualificado.
Monitoramento
Acompanhamento do desempenho dos agentes e tarefas, permitindo
ajustes em tempo real.
Tabela 2.1: Componentes do CrewAI
2.3
AMBIENTE GRATUITO PARA NOSSOS AGENTES
O Google Colab, também conhecido como Google Colaboratory, é uma plataforma gratuita
fornecida pelo Google que permite a execução de código Python diretamente no navegador.
Uma de suas maiores vantagens é o acesso gratuito a GPUs, facilitando o desenvolvimento e a
CAPÍTULO 2. O FRAMEWORK CREWAI
28
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 30

AGENTES INTELIGENTES
experimentação com modelos de deep learning sem a necessidade de hardware local potente.
O Colab é particularmente útil para pesquisadores, estudantes e profissionais que desejam
treinar modelos complexos de IA, mas não possuem acesso a recursos computacionais
avançados.
Uma das características mais legais do Google Colab é sua integração com o Google
Drive, permitindo fácil armazenamento e compartilhamento de notebooks. Usuários podem
importar e exportar notebooks em formato Jupyter, executar códigos em tempo real e colaborar
com outros de forma síncrona, semelhante ao funcionamento de outros serviços do Google,
como Google Docs. Essa funcionalidade colaborativa é especialmente útil para projetos de
equipe e para o compartilhamento de resultados de pesquisa.
Além de suportar a execução de código em CPUs, o Google Colab oferece suporte a GPUs
NVIDIA e TPUs (Tensor Processing Units) para acelerar o treinamento de modelos de deep
learning. A plataforma vem equipada com as bibliotecas mais populares de aprendizado de
máquina e deep learning, como TensorFlow, Keras e PyTorch, prontas para uso imediato. Isso
permite que os usuários iniciem seus projetos sem a necessidade de configurar o ambiente,
economizando tempo e esforço.
Com o Google Colab, você pode facilmente desenvolver e testar seus agentes inteligentes,
aproveitando todo o poder computacional oferecido pela plataforma. Seja treinando modelos
complexos ou executando tarefas de IA mais simples, o Colab torna tudo mais acessível e
prático, especialmente para quem não tem um supercomputador em casa. E o melhor de tudo
é que você pode colaborar com outras pessoas em tempo real, tornando o desenvolvimento
de agentes inteligentes uma experiência mais integrada e eficiente.
Outra vantagem significativa do Google Colab é sua comunidade ativa e extensa base de
recursos e tutoriais. Desde documentações detalhadas a notebooks de exemplo e fóruns de
discussão, os usuários têm acesso a uma vasta gama de materiais de apoio. Esses recursos
tornam o Colab uma ferramenta educativa poderosa, permitindo que iniciantes aprendam e
experimentem a criação de agentes inteligentes de forma prática e interativa. Para usuários
avançados, o Colab oferece um ambiente flexível para prototipagem rápida e experimentação
com novos algoritmos e arquiteturas.
2.4
CENTRO PARA TREINAMENTO DE AGENTES
Vamos então criar um Colab diretamente a partir do Google Drive. Esse método é prático
e eficiente para organizar e acessar seus projetos de deep learning. A imagem abaixo mostra
o processo de criação de um novo notebook do Google Colab dentro do Google Drive.
Primeiro, acesse seu Google Drive e certifique-se de que está logado na conta correta.
CAPÍTULO 2. O FRAMEWORK CREWAI
29
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 31

AGENTES INTELIGENTES
No canto superior esquerdo, clique no botão ’Novo’, destacado em verde na imagem. Isso
abrirá um menu suspenso com várias opções de criação de arquivos. Em seguida, passe o
cursor sobre a opção ’Mais’ na parte inferior desse menu, que também está destacada em
verde. Isso abrirá um novo submenu com opções adicionais.
No submenu, você verá a opção ’Google Colaboratory’. Clique nessa opção e um novo
notebook do Google Colab será criado e aberto em uma nova aba do seu navegador. Agora
você está pronto para começar a escrever e executar seu código Python diretamente no Colab,
aproveitando todos os recursos e facilidades que a plataforma oferece para o desenvolvimento
de agentes inteligentes.
Essa integração com o Google Drive torna muito fácil organizar e acessar seus notebooks
a qualquer momento. Você pode armazenar todos os seus projetos de agentes inteligentes
em um único lugar, compartilhar com colegas e colaboradores, e garantir que seus dados e
resultados estejam sempre disponíveis, independentemente de onde você esteja trabalhando.
Dentro desse submenu, você verá várias ferramentas adicionais que podem ser integradas
ao Google Drive. Clique na opção ’Google Colaboratory’, destacada em verde na imagem. Ao
fazer isso, um novo notebook Colab será criado e aberto em uma nova aba do seu navegador,
permitindo que você comece a escrever e executar seu código Python imediatamente.
O uso do Google Drive para criar e armazenar seus notebooks do Colab oferece benefícios
significativos, incluindo salvamento automático, fácil acesso e compartilhamento colaborativo.
Cada notebook criado desta forma estará automaticamente salvo no seu Drive, permitindo que
você continue seu trabalho de onde parou e compartilhe facilmente com outros colaboradores.
Quando você abrir seu Colab, comece renomeando seu notebook para algo que descreva
claramente o projeto de agentes inteligentes em que você está trabalhando. Isso ajudará a
manter seus arquivos organizados e facilmente identificáveis no futuro. Na imagem abaixo,
você pode ver a interface do Google Colab logo após a criação de um novo notebook.
Para renomear o notebook, clique no nome padrão do arquivo, que inicialmente será algo
como ’Untitled0.ipynb’, destacado em verde na imagem. Ao clicar no nome, uma caixa de texto
editável aparecerá, permitindo que você digite um novo nome para o seu notebook. Digite um
nome descritivo que reflete o conteúdo ou o objetivo do projeto, como ’Análise de Agentes
Inteligentes’ ou ’Treinamento de Modelos de IA’.
Renomear seus notebooks é uma prática recomendada, especialmente quando você
trabalha com múltiplos projetos ou colabora com outros profissionais. Isso facilita a localização
e a identificação rápida dos arquivos relevantes, além de ajudar a manter seu Google Drive
organizado.
Lembre-se de que as alterações no nome do arquivo são salvas automaticamente no
Google Drive, portanto, não há necessidade de se preocupar em salvar manualmente. Este é
mais um benefício de utilizar o Google Colab integrado com o Google Drive, garantindo que
CAPÍTULO 2. O FRAMEWORK CREWAI
30
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 32

AGENTES INTELIGENTES
Figura 2.2: Criando um novo notebook Colab a partir do Google Drive
todas as suas modificações sejam registradas em tempo real e estejam sempre acessíveis.
2.5
INSTALANDO O CREWAI
Para configurar um ambiente para rodar o CrewAI, você precisa garantir que tudo esteja
devidamente preparado. A versão atual do CrewAI é 0.35.0 no momento da escrita deste livro,
e você vai precisar do Python 3.8 ou superior. Uma excelente opção para começar é usar o
Google Colab, uma plataforma online gratuita que permite escrever e executar código Python
diretamente no navegador, sem necessidade de configuração local.
O Google Colab é uma ferramenta incrível oferecida pelo Google que facilita a vida dos
desenvolvedores e pesquisadores. Ele fornece um ambiente de Jupyter Notebook baseado
na nuvem, perfeito para testes rápidos, desenvolvimento de projetos e até mesmo para
aprendizado de programação. Com o Colab, você pode acessar poderosos recursos de
computação sem precisar se preocupar com a instalação e configuração de softwares no seu
próprio computador.
Para começar a usar o Google Colab, siga estes passos simples:
• Abra o seu navegador e acesse Google Colab.
CAPÍTULO 2. O FRAMEWORK CREWAI
31
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 33

AGENTES INTELIGENTES
Figura 2.3: Renomeando um notebook no Google Colab
• Se você não estiver logado, faça login com sua conta do Google.
• Clique em ’Novo Notebook’ para criar um novo ambiente de trabalho.
Agora que você está no Google Colab, vamos instalar o CrewAI. Siga os passos abaixo
para fazer a instalação. No notebook do Colab, você verá uma célula de código vazia. Nessa
célula, digite o seguinte comando para instalar o CrewAI:
!pip
install
crewai
Pressione Shift+Enter para executar o comando. O Colab começará a baixar e instalar
o CrewAI e todas as suas dependências. Dependendo da sua conexão com a internet, isso
pode levar alguns minutos. Uma vez concluída a instalação, você estará pronto para começar
a usar o CrewAI no Google Colab.
A comunidade do CrewAI é muito ativa e, com o crescimento dessa comunidade, novas
versões estão saindo muito rapidamente. Portanto, é sempre bom verificar a documentação
oficial e a comunidade para se manter atualizado com as últimas melhorias e funcionalidades.
E é isso! Você configurou com sucesso o ambiente para rodar o CrewAI usando o Google
Colab. Agora você pode começar a criar seus agentes inteligentes e ver toda a magia do
CrewAI em ação, aproveitando a facilidade e o poder de processamento que o Colab oferece.
2.6
CRIANDO A API KEY DA OPENAI
Para usar o CrewAI com modelos de linguagem da OpenAI, você precisa de uma API Key
da OpenAI. A API Key é uma chave de acesso que permite que seu código se comunique com
CAPÍTULO 2. O FRAMEWORK CREWAI
32
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 34

AGENTES INTELIGENTES
os serviços da OpenAI. Obter essa chave é um processo simples e direto. Vamos mostrar
como você pode fazer isso.
Primeiro, você precisa ter uma conta na OpenAI. Se você ainda não tem, pode criar uma
facilmente no site oficial da OpenAI. Aqui estão os passos para criar sua API Key:
1. Acesse o site da OpenAI: Abra seu navegador e vá para https://www.openai.com.
2. Crie uma conta ou faça login: Se você já tem uma conta, faça login. Caso contrário,
clique em ’Sign Up’ para criar uma nova conta.
3. Acesse o painel de controle: Uma vez logado, você será direcionado para o painel de
controle da OpenAI.
4. Navegue até a seção de API Keys: No painel de controle, procure pela seção de API
Keys. Normalmente, você pode encontrar isso no menu de configurações ou na seção
de gerenciamento de contas.
5. Gere uma nova API Key: Clique no botão para gerar uma nova API Key. Dê um nome
para sua chave, algo que você possa lembrar facilmente, como ’Minha Chave CrewAI’.
6. Copie a API Key: Após gerar a chave, você verá uma string longa de caracteres. Esta é
sua API Key. Copie essa chave e guarde em um lugar seguro, pois você precisará dela
para configurar o CrewAI.
Depois de obter sua API KEY, você pode configurá-la no seu ambiente de desenvolvimento.
No Google Colab, por exemplo, você pode definir sua API KEY da seguinte maneira:
import os
os.environ["OPENAI_API_KEY "] = "sua -api -key -aqui"
Substitua ’sua-api-key-aqui’ pela string da sua API KEY copiada do site da OpenAI. Agora,
você está pronto para usar os serviços da OpenAI em seus projetos com o CrewAI.
Lembre-se de nunca compartilhar sua API KEY publicamente ou com pessoas não
autorizadas, pois ela dá acesso aos serviços pagos da OpenAI. Se você suspeitar que sua
chave foi comprometida, gere uma nova chave imediatamente no painel de controle da OpenAI.
Pronto! Agora você está com tudo preparado para usar a OpenAI junto com o CrewAI e
criar agentes inteligentes ainda mais poderosos.
2.7
STAR WARS E AGENTES
Para ilustrar como o CrewAI funciona na prática, vamos criar um exemplo bem simples.
Esse exemplo mostrará como configurar um ambiente básico, definir agentes e tarefas, e
CAPÍTULO 2. O FRAMEWORK CREWAI
33
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 35

AGENTES INTELIGENTES
finalmente executar o processo para ver os agentes em ação. Este exemplo é ideal para
iniciantes que querem entender os conceitos fundamentais do CrewAI sem se aprofundar em
detalhes complexos.
Vamos dividir este exemplo em algumas etapas fáceis de seguir: configurar o ambiente,
definir os agentes e tarefas, e executar o processo. Com isso, você terá uma visão clara de
como o CrewAI pode ser utilizado para criar soluções práticas e eficientes em um contexto de
inteligência artificial.
Se tem uma coisa que eu adoro, é ensinar algo complexo de um jeito bem simples e
divertido. E como sou fã de Star Wars, nada melhor do que usar essa saga épica para
ilustrar as coisas. Imagine poder aprender sobre agentes inteligentes e frameworks de IA
enquanto viajamos pelo universo de Luke, Leia e Han Solo. Vou te mostrar como conceitos
complicados podem ser desvendados com a ajuda de algumas naves espaciais e heróis
intergalácticos. Prepare-se para embarcar nessa aventura de conhecimento com uma pitada
de diversão e muito aprendizado. Para facilitar o entendimento eu vou explicar as definições
dos componentes do CrewAI por partes, porém você pode acessar todo o código pelo link
abaixo:
Clique no link para acessar: https://bit.ly/sandeco-crewai01-starwars
Para acessar o código através do link, clique em ’Arquivo’ e selecione ’Salvar uma cópia
no Drive’. Como o Colab está armazenado no meu Drive, você precisará fazer uma cópia para
poder executá-lo diretamente.
Star Wars: A nova esperança
Agora somos o George Lucas e vamos recriar uma cena icônica de Star Wars: A nova
esperança, a destruição da Estrela da Morte. Para isso, precisamos criar uma equipe de
agentes inteligentes para cumprir a missão de destruir a Estrela da Morte. Vamos utilizar
o CrewAI para modelar essa missão. Com o CrewAI, podemos definir agentes, tarefas e
ferramentas de forma estruturada e eficiente. Eu realmente espero que com esse exemplo
você possa entender os componentes básicos do framework e a relação entre eles.
Primeiro, visualizamos nossos agentes como personagens icônicos do universo de Star
Wars. Luke Skywalker será nosso piloto heróico, cuja missão é destruir a Estrela da Morte.
Han Solo, o contrabandista audaz, terá a tarefa de proteger Luke durante sua missão perigosa.
E, por último, mas não menos importante, a Princesa Leia será a estrategista e coordenadora
da missão, responsável por garantir que todas as partes do plano sejam executadas com
CAPÍTULO 2. O FRAMEWORK CREWAI
34
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 36

AGENTES INTELIGENTES
precisão. Cada agente terá um papel bem definido, uma meta clara e uma história de fundo
que ajuda a contextualizar suas ações e motivações dentro da missão.
A seguir, precisamos definir as tarefas que esses agentes irão realizar. Leia coordenará o
ataque à Estrela da Morte, garantindo que Han Solo possa proteger Luke de naves inimigas,
permitindo que Luke possa se concentrar em atingir o ponto fraco da Estrela da Morte. Cada
tarefa será detalhadamente descrita, incluindo a descrição da atividade, os objetivos a serem
alcançados e os resultados esperados. Esta abordagem não só organiza o trabalho dos
agentes, mas também assegura que cada um saiba exatamente o que precisa fazer para
contribuir para o sucesso da missão.
Para que os agentes possam realizar suas tarefas, precisamos equipá-los com as fer-
ramentas adequadas. Luke utilizará sua confiável X-Wing para atacar a Estrela da Morte,
enquanto Han Solo pilotará a Millennium Falcon para proteger Luke. Estas ferramentas são
definidas de forma que simulem as ações reais dos agentes, retornando feedback sobre o pro-
gresso da missão. A flexibilidade do CrewAI permite que essas ferramentas sejam facilmente
compartilhadas entre os agentes, aumentando a eficiência e a adaptabilidade da equipe.
Depois de configurar os agentes, tarefas e ferramentas, é hora de formar a equipe, ou
’crew’. No nosso caso, a Aliança Rebelde será criada como uma equipe no CrewAI, incluindo os
agentes Leia, Luke e Han Solo, e as tarefas específicas que cada um deve cumprir. O processo
de execução das tarefas será definido como hierárquico, com Leia no comando, delegando
ações aos outros agentes conforme necessário. Esta estrutura hierárquica garante que as
tarefas sejam realizadas de forma coordenada e eficiente, com cada agente desempenhando
seu papel específico.
Uma vez que a equipe está configurada, utilizamos o comando ’kickoff’ para iniciar a
missão. Este comando ativa a execução das tarefas pelos agentes, que então comunicam
entre si e utilizam as ferramentas definidas para alcançar seus objetivos. A hierarquia e a
delegação de tarefas são gerenciadas automaticamente pelo CrewAI, assegurando que cada
agente realize suas ações de acordo com o plano estabelecido. Durante a execução, os
agentes fornecem feedback contínuo sobre o progresso da missão, permitindo ajustes em
tempo real e garantindo que a missão seja concluída com sucesso.
Antes de começar a criar seus agentes inteligentes com o CrewAI, é essencial garantir que
seu ambiente de desenvolvimento esteja devidamente configurado. O Google Colab é uma
CAPÍTULO 2. O FRAMEWORK CREWAI
35
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 37

AGENTES INTELIGENTES
excelente opção para isso, pois permite executar código Python diretamente no navegador
sem a necessidade de configurar nada localmente. Além disso, ele oferece acesso gratuito a
GPUs, facilitando o processamento de tarefas mais intensivas.
Para instalar o CrewAI no Google Colab, siga os passos abaixo. Esses comandos
irão instalar o CrewAI, além das ferramentas adicionais necessárias para maximizar suas
capacidades:
!pip
install
--q crewai
!pip
install
--q ’crewai[tools]’
O primeiro comando instala o CrewAI, que é o núcleo do nosso framework para criar e
gerenciar agentes inteligentes. O segundo comando instala ferramentas adicionais do CrewAI,
expandindo suas funcionalidades e permitindo que você utilize uma variedade de ferramentas
já existentes para facilitar o desenvolvimento dos seus agentes.
Certifique-se de executar esses comandos em uma célula do Google Colab. Após a
instalação, você estará pronto para começar a criar e gerenciar seus agentes de maneira
eficiente. Essa configuração inicial é crucial para garantir que todas as dependências e
integrações necessárias estejam disponíveis, permitindo um fluxo de trabalho mais suave e
produtivo.
Depois que instalamos as bibliotecas, vamos importá-las no nosso ambiente.
from
crewai_tools
import
tool
from
crewai
import Agent , Task , Crew , Process
Vamos entender o que cada uma dessas importações faz:
1. from crewai_tools import tool: Esta linha importa a função tool do módulo crewai_tools.
• Propósito: tool é utilizada para criar ferramentas personalizadas que os agentes
do CrewAI podem usar para executar tarefas específicas. Essas ferramentas
podem incluir APIs externas, scripts de automação, ou qualquer recurso necessário
para auxiliar os agentes em suas atividades.
2. from crewai import Agent, Task, Crew, Process: Esta linha importa as classes principais
do CrewAI:
CAPÍTULO 2. O FRAMEWORK CREWAI
36
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 38

AGENTES INTELIGENTES
• Agent: Representa um agente autônomo com um papel (role), meta (goal),
e história de fundo (backstory) definidos. Os agentes são como "funcionários
virtuais"que executam tarefas específicas no sistema.
• Task: Define uma tarefa específica que um agente deve completar. Inclui uma
descrição da tarefa, os resultados esperados, e qual agente é responsável por sua
execução.
• Crew: Representa um grupo ou equipe de agentes e tarefas. O Crew coordena a
execução das tarefas para atingir um objetivo comum.
• Process: Define como as tarefas dentro de um Crew serão executadas, podendo
ser de forma sequencial, paralela, ou hierárquica.
Estas importações configuram o ambiente para criar e gerenciar agentes inteligentes com
o CrewAI, permitindo uma orquestração eficiente de tarefas e colaboração entre os agentes.
Ativando o GPT
Neste exemplo, o código demonstra como definir a chave de API da OpenAI diretamente
no ambiente do sistema antes de instanciar o modelo ChatOpenAI. Este método garante que
a chave de API seja utilizada de forma segura em ambientes que requerem autenticação.
Primeiramente, importe o módulo os, que é utilizado para interagir com as variáveis
de ambiente do sistema operacional. Utilize o método os.environ para definir a variável
de ambiente OPENAI_API_KEY. Atribua à variável de ambiente o valor de sua chave de API,
substituindo o texto "sua_chave_openai" pela sua chave real.
Em seguida, crie uma instância do modelo ChatOpenAI especificando o modelo gpt-4o
através do parâmetro model_name. Neste caso, não é necessário passar explicitamente a
chave de API no momento da criação da instância, pois a chave já está definida no ambiente
do sistema.
CAPÍTULO 2. O FRAMEWORK CREWAI
37
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 39

AGENTES INTELIGENTES
Abaixo está o código em Python que ilustra essas etapas:
import os
os.environ["OPENAI_API_KEY "] = " sua_chave_openai "
gpt4o = ChatOpenAI(model_name=’gpt -4o’)
Ao seguir essas instruções, você configurará sua aplicação para autenticar corretamente
as requisições à API da OpenAI utilizando o modelo gpt-4o. Essa abordagem é particular-
mente útil em ambientes onde o gerenciamento de variáveis de ambiente é necessário para
garantir a segurança das credenciais de acesso.
Criando as entidades
No CrewAI é muito importante a ordem de criação dos componentes que vamos utilizar.
Definir nossas ferramentas antes dos agentes é crucial porque as ferramentas são os recursos
que nossos agentes vão utilizar para realizar suas tarefas. Imagine tentar montar um móvel
sem saber quais ferramentas você tem à disposição – seria uma bagunça! Da mesma forma,
ao sabermos quais ferramentas temos, podemos escolher os agentes certos que sabem usar
essas ferramentas de maneira eficaz. Depois de definir os agentes, é importante determinar
suas tarefas, pois isso garante que cada agente tenha uma função clara e específica. É como
num time de futebol: você precisa saber quem são seus jogadores (agentes) e suas posições
(tarefas) para que eles possam trabalhar juntos e marcar gols. Definindo as ferramentas e os
agentes primeiro, você cria uma base sólida para que todos saibam exatamente o que fazer e
como fazer, resultando em um trabalho mais coordenado e eficiente.
Para o nosso exemplo de Star Wars, vamos primeiro definir todas as nossas ferramentas X-
Wing e Millennium Falcon, depois os agentes Luke, Han e Leia, e por fim as tarefas específicas
de cada agente.
Nave de ataque
Então vamos criar a X-Wing. Primeiro, vamos definir uma ferramenta personalizada
usando o CrewAI. Neste exemplo, estamos criando uma função que simula as funcionalidades
de uma X-Wing, a icônica nave de combate de Star Wars. Esta função, quando chamada,
retornará uma string indicando que a X-Wing está pronta para o ataque final, com sistemas de
mira ativados e, claro, que a Estrela da Morte foi destruída com sucesso.
CAPÍTULO 2. O FRAMEWORK CREWAI
38
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 40

AGENTES INTELIGENTES
Para definir esta ferramenta, use o decorador @tool que indica ao CrewAI que estamos
criando uma nova ferramenta. Dentro da função x_wing, você pode ver uma docstring (aquelas
três aspas duplas " no início e no fim do comentário) que descreve o que a função faz. Esta
prática é muito útil para documentar seu código e explicar para outros desenvolvedores (ou
para você mesmo no futuro) o propósito da função.
A função x_wing não recebe nenhum parâmetro e simplesmente retorna uma string com
a mensagem de que a X-Wing está pronta e atacando. Note que usamos f"...
" para
permitir a interpolação de strings, mas neste caso específico, não estamos inserindo nenhuma
variável dentro da string.
Vamos ver como isso fica em código:
@tool("x_wing")
def x_wing ():
"""
Simulação das
funcionalidades de uma X-Wing para a missão.
Retorna
uma string que indica que a X-Wing está pronta
para o ataque
final com
sistemas de mira
ativados.
"""
return f"""X-Wing
pronto
para o ataque final ,
sistemas de mira
ativados. Atacando!
Estrela da Morte
destruída com
sucesso!"""
Nave de defesa
Agora vamos criar a Millennium Falcon. Neste exemplo, estamos definindo uma ferramenta
que simula as funcionalidades da Millennium Falcon, a famosa nave de Han Solo em Star
Wars. A função, quando chamada, retornará uma string indicando que a Millennium Falcon
está atacando o inimigo e protegendo a rota de Luke na X-Wing.
Para definir esta ferramenta, use o decorador @tool que indica ao CrewAI que estamos
criando uma nova ferramenta. Dentro da função millennium_falcon, você verá uma docstring
(aquelas três aspas duplas " no início e no fim do comentário) que descreve o que a função faz.
Esta prática é essencial para documentar seu código e explicar para outros desenvolvedores
(ou para você mesmo no futuro) o propósito da função.
A função millennium_falcon não recebe nenhum parâmetro e simplesmente retorna uma
string com a mensagem de que a Millennium Falcon está atacando o inimigo e protegendo
Luke. Não utilizamos interpolação de strings aqui, apenas uma simples string literal.
CAPÍTULO 2. O FRAMEWORK CREWAI
39
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 41

AGENTES INTELIGENTES
Vamos ver como isso fica em código:
@tool(" millennium_falcon ")
def
millennium_falcon ():
"""
Simulação das
funcionalidades da Millennium
Falcon
para
proteger
Luke.
Retorna
uma string que indica que a
Millennium
Falcon está atacando o inimigo
e protegendo a rota de Luke.
"""
return "Millennium
Falcon
atacando o inimigo ,
protegendo a rota de Luke na X-Wing."
Agora vamos criar nossos agentes do CrewAI: Luke, Leia e Han Solo. Esses agentes
serão responsáveis por executar as tarefas na nossa missão de destruir a Estrela da Morte.
Cada agente terá um papel específico e utilizará as ferramentas que definimos anteriormente
para realizar suas funções de maneira eficiente. A criação dos agentes é um passo crucial,
pois define quem fará o quê e como.
Preste atenção especial ao agente Luke, para quem vamos passar a ferramenta x_wing, e
ao agente Han Solo, que utilizará a ferramenta millennium_falcon. Foi exatamente por isso
que criamos as ferramentas antes dos agentes – para garantir que cada agente tenha à sua
disposição as ferramentas necessárias para cumprir suas tarefas. Assim, quando definirmos
os agentes, já sabemos quais recursos eles poderão utilizar, facilitando a coordenação e a
execução das tarefas.
Luke Skywalker
Agora vamos definir o agente Luke. A função Agent cria um agente com um papel, um
objetivo, ferramentas e um histórico. No caso de Luke, ele será o Piloto Heróico com a missão
de Destruir a Estrela da Morte.
Observe que passamos a ferramenta x_wing para o Luke por meio do parâmetro tools.
Isto é crucial, pois Luke precisará da X-Wing para realizar seu ataque. O histórico de Luke
CAPÍTULO 2. O FRAMEWORK CREWAI
40
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 42

AGENTES INTELIGENTES
reforça sua motivação e papel na missão, descrevendo-o como O jovem piloto destinado a
ser um Jedi, liderando o ataque crítico. Esta narrativa não só dá contexto ao agente como
também pode ser utilizada para gerar respostas mais coerentes e alinhadas ao seu papel.
Veja também que o agente Luke utiliza o ’llm=gtp4o’ como sua ’mente’. Vou explicar mais a
frente o que isso realmente significa. Também não se preocupe agora com os parâmetros:
allow_delegation, memory e verbose, eu explicarei bem detalhadamente no próximo capítulo,
Vamos ver como isso fica em código:
luke = Agent(
role=’Piloto Heróico’,
goal=’Destruir a Estrela da Morte ’,
tools =[ x_wing],
memory=True ,
verbose=True ,
allow_delegation =False ,
backstory="O jovem
piloto
destinado a ser um Jedi , "
"liderando o ataque crítico.",
llm=gpt4o
)
Princesa Leia
Agora vamos definir a agente Leia. A função Agent é mais uma vez utilizada para criar
um agente com um papel, um objetivo e um histórico do agente. No caso de Leia, ela será a
Estrategista e Coordenadora com a missão de Coordenar o ataque à Estrela da Morte.
Seu histórico descreve-a como A princesa líder da Rebelião, essencial para a es-
tratégia e comunicação. Essa descrição reforça a importância de seu papel na missão,
destacando suas habilidades em estratégia e comunicação, que são cruciais para o sucesso
do ataque. Lembre-se de que a definição clara dos papéis e objetivos de cada agente ajuda a
manter a missão organizada e eficiente. A agente Leia também usa o ’gtp4o’ como ’mente’.
allow_delegation=True faz a Leia delegar para o Luke e Han a missão de destruir a estrela da
morte. Legal né?
Vamos ver como isso fica em código:
CAPÍTULO 2. O FRAMEWORK CREWAI
41
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 43

AGENTES INTELIGENTES
leia = Agent(
role=’Estrategista e Coordenadora ’,
goal=’Coordenar o ataque à Estrela da Morte ’,
backstory="A princesa líder da Rebelião, essencial
para a
estratégia e comunicação.",
tool =[],
memory=True ,
verbose=True ,
allow_delegation =True ,
llm=gpt4o
)
Han Solo
Agora vamos definir o agente Han. A função Agent é utilizada para criar um agente com
um papel, um objetivo, ferramentas e um histórico do agente. No caso de Han, ele será o
Protetor Audaz com a missão de Proteger Luke durante a missão.
Note que passamos a ferramenta millennium_falcon para Han por meio do parâmetro
tools. Isso é essencial, pois Han usará a Millennium Falcon para proteger Luke. O histórico
do agente de Han descreve-o como O contrabandista ousado que se torna um herói,
protegendo seu amigo. Esta descrição reforça a importância de seu papel na missão e
destaca suas habilidades de proteção e coragem. Han também usa o ’gtp4o’ como ’mente’.
Vamos ver como isso fica em código:
han = Agent(
role=’Protetor
Audaz ’,
goal=’Proteger
Luke
durante a missão’,
tools =[ millennium_falcon ],
memory=True ,
verbose=True ,
allow_delegation =False ,
backstory="O contrabandista
ousado que se torna um herói,
protegendo
seu amigo.",
llm=gpt4o
)
Agora vamos definir as tarefas dos nossos agentes. As tarefas são um dos três compo-
nentes fundamentais do CrewAI, junto com os agentes e as ferramentas. Cada tarefa define
claramente o que precisa ser feito, por quem e com quais ferramentas. No nosso exemplo, te-
mos três tarefas principais: destruir_estrela_morte para Luke Skywalker, coordenar_ataque
CAPÍTULO 2. O FRAMEWORK CREWAI
42
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 44

AGENTES INTELIGENTES
para a Princesa Leia, e proteger_luke para Han Solo. Estas tarefas garantem que cada
agente saiba exatamente o que precisa fazer para contribuir para o sucesso da missão.
Coordenação e gerenciamento
A importância de termos um agente de coordenação no CrewAI é fundamental para o
sucesso de qualquer missão complexa. Este agente atua como o ponto central de comando,
garantindo que todas as tarefas sejam realizadas de forma harmoniosa e eficiente. No nosso
exemplo, a Princesa Leia desempenha esse papel crucial, coordenando as ações dos outros
agentes, como Luke e Han Solo, e assegurando que todos estejam alinhados com o objetivo
final. A presença de um agente de coordenação permite uma comunicação clara, uma
delegação eficaz e a capacidade de ajustar estratégias conforme necessário, o que é vital
para lidar com situações imprevistas e garantir que a missão seja bem-sucedida.
A função Task cria uma tarefa com uma descrição, um resultado esperado, o agente
responsável. No caso de Leia, sua tarefa é coordenar_ataque, onde ela deve coordenar a
missão, manter a comunicação e fornecer suporte estratégico. A descrição detalha que Leia
deve primeiro ordenar que Han defenda Luke, possibilitando um caminho seguro para ele.
O parâmetro expected_output especifica o resultado esperado: ’Estrela da Morte des-
truída, missão bem-sucedida’. Isso ajuda a garantir que todos saibam o objetivo final da tarefa.
O parâmetro agent define Leia como a agente responsável por essa tarefa.
coordenar_ataque = Task(
description=f""" Leia deve
coordenar a missão, mantendo
comunicação e fornecendo
suporte
estratégico.
Leia deve
ordenar
primeiro
que Han
defenda o Luke
possibilitando um
caminho
seguro
para Luke
""",
expected_output ="Estrela da Morte
destruída ,
missão bem -sucedida.",
agent=leia
)
CAPÍTULO 2. O FRAMEWORK CREWAI
43
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 45

AGENTES INTELIGENTES
A função Task cria uma tarefa com uma descrição, um resultado esperado e o agente
responsável. No caso de Luke, sua tarefa é destruir_estrela_morte, onde ele deve pilotar
sua X-Wing e atirar no ponto fraco da Estrela da Morte para destruí-la.
O parâmetro description fornece uma descrição clara e específica do que Luke deve
fazer. O expected_output especifica o resultado esperado: ’Estrela da Morte destruída,
missão bem-sucedida’. Isso ajuda a garantir que todos saibam o objetivo final da tarefa. O
parâmetro agent define Luke como o agente responsável por essa tarefa, garantindo que ele
sabe que precisa pilotar a X-Wing para cumprir a missão.
Vamos ver como isso fica em código:
destruir_estrela_morte = Task(
description="Luke deve
pilotar
sua X-Wing e atirar
no ponto
fraco da Estrela da Morte
para
destruí-la.",
expected_output ="Estrela da Morte
destruída ,
missão bem -sucedida.",
agent=luke
)
Vamos definir a tarefa de proteger Luke. A função Task cria uma tarefa com uma descrição,
um resultado esperado e o agente responsável. No caso de Han, sua tarefa é proteger_luke,
onde ele deve atacar naves inimigas e proteger Luke de ser atacado durante a missão.
O parâmetro description fornece uma descrição clara e específica do que Han deve
fazer. O expected_output especifica o resultado esperado: ’Luke protegido, caminho livre
para o ataque final’. Isso ajuda a garantir que todos saibam o objetivo final da tarefa. O
parâmetro agent define Han como o agente responsável por essa tarefa, garantindo que ele
sabe que precisa utilizar a Millennium Falcon para proteger Luke e assegurar o sucesso da
missão.
O código:
proteger_luke = Task(
description="Han deve
atacar
naves
inimigas e
proteger
Luke de ser
atacado
durante a missão.",
expected_output ="Luke protegido , caminho
livre
para o ataque
final.",
agent=han
)
Hora de juntar tudo o que fizemos até agora e inicializar a nossa equipe. Vamos utilizar a
função Crew para agrupar nossos agentes e tarefas, definindo o processo como hierárquico.
No código abaixo, criamos a equipe alianca_rebelde com os agentes Leia, Han e Luke,
CAPÍTULO 2. O FRAMEWORK CREWAI
44
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 46

AGENTES INTELIGENTES
e as tarefas coordenar_ataque, proteger_luke e destruir_estrela_morte. O parâmetro
process é definido como Process.hierarchical para garantir que as tarefas sejam realiza-
das de forma organizada e coordenada, com Leia no papel de estrategista e coordenadora. O
’gpt-4o’ será o ’manager’ do processo ’hierarchical’. Também vamos ativar a memória da Crew.
Veja nossa Crew:
# Inicialização da equipe
alianca_rebelde = Crew(
agents =[leia , han , luke],
tasks =[ coordenar_ataque , proteger_luke , destruir_estrela_morte ],
process=Process.hierarchical ,
manager_llm=gpt4o ,
memory=True
)
Primeiro, chamamos o método ‘kickoff()‘ da crew ‘alianca_rebelde‘ que nós criamos
anteriormente. Este comando (método) é responsável por iniciar a execução das tarefas
atribuídas aos agentes dentro da equipe. A função ‘kickoff‘ coordena a interação entre os
agentes e garante que as tarefas sejam realizadas conforme definido.
Em seguida, utilizamos ‘print(result)‘ para exibir o resultado da execução. O valor de
‘result‘ contém os resultados agregados das tarefas executadas pela equipe.
Neste trecho de código, estamos utilizando a classe ‘Crew‘ do CrewAI para iniciar um
processo com os agentes e tarefas previamente definidos. Aqui está o código:
result = alianca_rebelde .kickoff ()
print(result)
CAPÍTULO 2. O FRAMEWORK CREWAI
45
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 47

AGENTES INTELIGENTES
O resultado esperado seria:
Missão concluída! Estrela da morte
destruída com
sucesso!
Mas se você observar a execução, verá a interação entre os agentes para atingir esse
objetivo maior. Cada agente desempenha um papel específico e colabora com os outros para
alcançar a meta comum. Essa colaboração e divisão de tarefas é o que torna o processo
eficiente e eficaz. Ao acompanhar a execução, você poderá ver como cada agente contribui
com suas habilidades únicas para o sucesso da missão. Essa dinâmica é essencial para
entender como os agentes operam em conjunto, simulando um cenário real de cooperação e
resolução de problemas.
Você pode pensar: ’Na verdade, esses agentes não fazem nada de útil no mundo real’,
e você está correto! Porém, quero chamar a atenção para o fato de que o objetivo aqui é
totalmente pedagógico. Mais para frente, quando eu ensinar sobre projetos reais, teremos a
analogia de Star Wars como referência de conhecimento. Isso facilitará muito a compreensão
da complexidade dos exemplos posteriores.
2.8
GUIA RÁPIDO PARA CRIAR AGENTES
Montar equipes de agentes pode ser simples se você souber como fazer. Aqui estão
algumas dicas super úteis para você criar suas equipes de agentes de forma eficiente,
garantindo que todos saibam exatamente o que fazer e como contribuir para alcançar o
objetivo final e vamos usar o exemplo de Star Wars para mostrar como isso pode ser feito de
maneira prática.
Pense como um chefe
Trabalhe de trás para frente a partir do objetivo e pense em quais ’funcionários’ você
precisa contratar para realizar o trabalho.
No exemplo de Star Wars, começamos com o objetivo final de destruir a Estrela da Morte.
Trabalhando de trás para frente, identificamos que precisamos de Luke Skywalker para pilotar
a X-Wing e lançar o ataque final. Para proteger Luke durante essa missão, Han Solo é
essencial com sua Millennium Falcon. E, para coordenar toda a operação, a Princesa Leia é
crucial. Cada personagem (ou agente) tem um papel específico e habilidades que contribuem
diretamente para alcançar o objetivo final.
Essa abordagem pode ser aplicada a diversos tipos de problemas no mundo real e nos
CAPÍTULO 2. O FRAMEWORK CREWAI
46
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 48

AGENTES INTELIGENTES
negócios. Por exemplo, se o objetivo é lançar uma nova campanha de marketing digital,
você deve começar pensando nos resultados desejados. Pode ser necessário contratar
um especialista em SEO para otimizar o conteúdo, um designer gráfico para criar imagens
atraentes e um gerente de projeto para coordenar todas as atividades. Cada ’funcionário’ ou
agente terá um papel claro e contribuirá com suas habilidades específicas para o sucesso da
campanha.
Em projetos de desenvolvimento de software, a mesma lógica se aplica. Se o objetivo
é criar um aplicativo móvel, comece definindo as funcionalidades principais e, em seguida,
identifique os profissionais necessários: um desenvolvedor front-end para a interface do
usuário, um desenvolvedor back-end para a lógica do servidor e um testador de software para
garantir a qualidade do produto final. Trabalhar de trás para frente ajuda a garantir que todas
as partes essenciais sejam cobertas e que o projeto avance de maneira estruturada.
No contexto de um projeto de pesquisa científica, esse método também é valioso. Se o
objetivo é publicar um artigo em uma revista de alto impacto, você precisará de um pesquisador
principal para conduzir o estudo, um analista de dados para interpretar os resultados e um
redator científico para ajudar na elaboração do manuscrito. Cada membro da equipe terá um
papel vital na conquista do objetivo final. Ao identificar e organizar esses papéis desde o início,
a equipe pode trabalhar de forma mais coesa e eficiente.
Independentemente do campo ou do tipo de projeto, começar pelo objetivo final e trabalhar
de trás para frente na definição dos papéis e habilidades necessários é uma estratégia
poderosa. Isso não apenas clareia o caminho a seguir, mas também assegura que todos os
aspectos críticos do projeto sejam abordados, aumentando significativamente as chances de
sucesso.
Defina o Capitão da equipe que orientará os outros agentes em
direção ao objetivo
A Princesa Leia, no nosso exemplo, assume o papel de capitã da equipe. Ela é responsável
por orientar os outros agentes, garantindo que todos estejam alinhados com o objetivo de
destruir a Estrela da Morte. Como capitã, Leia mantém a visão global da missão e ajusta as
estratégias conforme necessário. Sua função é essencial para garantir que todos os agentes
saibam suas tarefas e trabalhem de forma coordenada.
Essa abordagem é igualmente aplicável em ambientes corporativos e de negócios. Por
exemplo, em uma startup de tecnologia, o CTO (Chief Technology Officer) pode ser o ca-
pitão, responsável por orientar os desenvolvedores de software, engenheiros de dados e
especialistas em segurança cibernética. Esse líder ajusta as estratégias de desenvolvimento
conforme necessário, assegurando que todos os membros da equipe estejam cientes de suas
CAPÍTULO 2. O FRAMEWORK CREWAI
47
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 49

AGENTES INTELIGENTES
responsabilidades e saibam como contribuir para o lançamento bem-sucedido de um produto.
Ele coordena a equipe, garantindo que todos trabalhem de forma harmoniosa e focada nos
objetivos comuns.
Defina quais especialistas o capitão precisa para se comunicar
e delegar tarefas
Leia, como capitã, precisa se comunicar e delegar tarefas a especialistas como Luke
Skywalker e Han Solo. Luke é o piloto que executará o ataque final à Estrela da Morte,
enquanto Han Solo é o defensor que garante a segurança de Luke durante a missão. Leia
passa as instruções para Han proteger Luke e para Luke focar no ponto fraco da Estrela
da Morte. Esta estrutura de comunicação e delegação assegura que cada agente saiba
exatamente o que fazer em cada etapa da missão.
Assim como em uma equipe de marketing digital, o gerente de campanha atua como
capitão, delegando tarefas a especialistas em SEO, criadores de conteúdo e analistas de dados.
O gerente de campanha coordena a criação e implementação de estratégias de marketing,
comunicando-se constantemente com os membros da equipe para garantir que cada etapa
da campanha seja realizada conforme planejado. Esta estrutura clara de comunicação e
delegação é fundamental para o sucesso da campanha de marketing.
Independentemente do campo de atuação, definir um capitão que possa orientar, comuni-
car e delegar tarefas de maneira eficaz é crucial para o sucesso da equipe. Essa abordagem
garante que todos os membros estejam alinhados com o objetivo final e saibam exatamente o
que fazer, como fazer e quando fazer, resultando em uma execução coordenada e eficiente.
Construa uma estrutura hierárquica da equipe
A estrutura hierárquica da equipe é fundamental para o sucesso da missão. No exemplo
de Star Wars, Leia está no topo como a comandante, com Han Solo e Luke Skywalker abaixo
dela, cada um com suas responsabilidades específicas. Essa abordagem top-down garante
que cada agente entenda seu papel específico e como ele contribui para o objetivo final. Com
uma estrutura hierárquica clara, a coordenação e a execução das tarefas tornam-se mais
eficientes, assegurando que a missão seja cumprida com sucesso.
Esses passos permitem criar uma equipe de agentes inteligentes bem estruturada e
orientada para atingir seus objetivos, assim como a Aliança Rebelde em sua missão para
destruir a Estrela da Morte. Com esses agentes sabendo exatamente o que fazer, como fazer
e quando fazer, a execução da missão é realizada de maneira eficiente e eficaz.
CAPÍTULO 2. O FRAMEWORK CREWAI
48
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 50

AGENTES INTELIGENTES
CAPÍTULO 3
Criando Agentes no CrewAI
Imagine um barco navegando por um vasto oceano, com um grupo de robôs trabalhando
juntos para mantê-lo no curso certo. Um deles está no leme, outro está monitorando o clima,
e alguns estão remando com força total. Cada robô tem um papel específico, mas todos
compartilham um objetivo comum: levar o barco ao seu destino. Esse barco representa um
sistema complexo, e os robôs são os agentes inteligentes que trabalham em conjunto para
realizar tarefas específicas. Bem-vindo ao fascinante universo dos agentes no CrewAI.
Para entender como os agentes funcionam no CrewAI, precisamos explorar a classe
Agent. Pense na classe Agent como o molde a partir do qual todos os agentes são criados.
Este molde define as características e habilidades de cada agente, permitindo que você
configure suas funções, objetivos, memórias e ferramentas de maneira personalizada. Por
meio da classe Agent, você pode criar agentes que se comportam exatamente como você
deseja, executando tarefas complexas de forma autônoma.
Vamos começar analisando os atributos essenciais da classe Agent. A classe Agent
faz parte do núcleo principal do CrewAI juntamente com Task, Tool e Crew. Os atributos da
Figura 3.1: Agentes em navegação por Janderson de Sales
CAPÍTULO 3. CRIANDO AGENTES NO CREWAI
49
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 51

AGENTES INTELIGENTES
classe Agent são como as peças de um quebra-cabeça que, quando montadas, formam um
agente completo e funcional. A compreensão desses atributos permitirá que você crie agentes
eficazes e personalizados, capazes de realizar uma variedade de tarefas no mundo digital.
Depois, explicaremos sobre técnicas de interações entre agentes, como multi-agentes,
onde vários agentes colaboram para resolver problemas complexos, e agentes em paralelo,
que operam simultaneamente para aumentar a eficiência das tarefas. Também exploraremos
o debate de agentes, uma técnica onde diferentes agentes discutem e avaliam abordagens
diversas para encontrar soluções ótimas.
Além disso, abordaremos o enxame de agentes, onde um grande número de agentes tra-
balha em conjunto, inspirado no comportamento de enxames na natureza. A criação recursiva
de agentes permite que agentes criem novos agentes conforme necessário, aumentando a
adaptabilidade e escalabilidade. Por fim, a técnica de MapReduce com agentes no CrewAI
será discutida, mostrando como dividir e conquistar grandes tarefas pode ser eficientemente
gerenciado por uma rede de agentes.
Entretanto, por agora, vamos focar em compreender todos os atributos de criação dos
agentes na classe Agent que é fundamental para maximizar o potencial e a eficiência do
CrewAI. Pense nesses atributos como os controles de um avião: cada um desempenha um
papel crucial na definição de como o agente se comporta, interage e executa suas tarefas.
Assim como um piloto precisa entender cada controle para operar o avião de forma segura
e eficiente, você precisa dominar esses atributos para criar agentes altamente personaliza-
dos e adaptados às necessidades específicas de suas aplicações. Isso garante que eles
desempenhem suas funções de maneira otimizada. Além disso, essa compreensão profunda
permite que você aproveite ao máximo as técnicas avançadas de interações entre agentes,
promovendo uma colaboração mais eficaz e soluções mais inovadoras. Ao conhecer todos os
atributos da classe Agent, você estará preparado para explorar todo o potencial do CrewAI
e resolver problemas complexos de forma autônoma e eficiente, levando suas aplicações a
novos patamares de desempenho e inovação.
Agora vamos mergulhar fundo em cada detalhe dos agentes no CrewAI. Os atributos
básicos são a base para a criação dos agentes, definindo suas funções e capacidades essen-
ciais. Esses atributos são obrigatórios porque determinam as características fundamentais e o
comportamento de cada agente.
CAPÍTULO 3. CRIANDO AGENTES NO CREWAI
50
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 52

AGENTES INTELIGENTES
Figura 3.2: seu agente é um ator. Por sandeco Macedo
3.1
SEU AGENTE COMO UM ATOR RENOMADO
Vamos começar pelo atributo role (’papel’). Imagine que você está montando um time de
super-heróis para salvar o mundo. Cada herói tem um papel específico, seja o líder estratégico,
o gênio da tecnologia, ou o mestre das artes marciais. No CrewAI, o role de um agente
funciona da mesma maneira: ele define qual é o ’superpoder’ daquele agente, ou seja, sua
função principal dentro da equipe.
O role é fundamental porque ele dá identidade ao agente. Sem um papel bem definido,
o agente seria como um jogador de futebol que não sabe em qual posição deve jogar. É o
role que orienta o agente sobre suas responsabilidades e o que se espera dele. Por exemplo,
se o agente tem o papel de ’Pesquisador’, ele sabe que deve focar em coletar informações e
analisar dados.
Além disso, o role ajuda na coordenação entre os agentes. Quando cada agente tem
um papel claro, fica mais fácil para eles trabalharem juntos, assim como numa banda de rock
onde cada membro conhece seu instrumento e sua parte na música. Um agente com o papel
de ’Coordenador’ pode supervisionar e integrar as atividades dos outros agentes, garantindo
que tudo funcione em harmonia.
Por fim, definir o role corretamente é essencial para a eficiência do sistema. Pense no
role como a descrição de um cargo em uma empresa. Com uma boa descrição, cada agente
CAPÍTULO 3. CRIANDO AGENTES NO CREWAI
51
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 53

AGENTES INTELIGENTES
sabe exatamente o que fazer, evitando confusões e sobreposições de tarefas. Isso não só
melhora a produtividade, mas também permite que você aproveite ao máximo as capacidades
de cada agente, otimizando o desempenho geral da equipe no CrewAI. Alguns exemplos de
papéis que seu agente pode assumir incluem:
• Pesquisador: Foca em coletar e analisar informações.
• Coordenador: Supervisiona e integra as atividades de outros agentes.
• Desenvolvedor: Cria e mantém código e sistemas.
• Analista de Dados: Processa e interpreta grandes volumes de dados.
• Gerente de Projetos: Planeja e gerencia projetos para garantir que os objetivos sejam
alcançados.
• Especialista em Marketing: Desenvolve e implementa estratégias de marketing.
• Suporte Técnico: Fornece assistência técnica e resolve problemas.
• Escritor: Cria conteúdo escrito de alta qualidade.
• Futurista: Explora e prevê tendências tecnológicas e de mercado para orientar a inova-
ção.
• Embaixador Intergaláctico: Representa a organização em negociações e colaborações
com entidades de fora do planeta. (kkk)
• Seu personagem: Escrevi isso deixar a sua imaginação voar e te dar a liberdade para
criar qualquer papel.
Como você viu, qualquer tipo de papel os agentes podem assumir e aqui estão alguns
exemplos básicos de agentes com diferentes papéis definidos usando a classe Agent:
Agente Pesquisador
pesquisador = Agent(
role=’Pesquisador ’
)
Agente Coordenador
coordenador = Agent(
role=’Coordenador ’
)
Agente Escritor
escritor = Agent(
role=’Escritor ’
)
CAPÍTULO 3. CRIANDO AGENTES NO CREWAI
52
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 54

AGENTES INTELIGENTES
Muito simples, não é? Muito bem, o nosso ator - quer dizer, agente - já está com o seu
papel definido. Obviamente, o próximo passo é falar sobre as características do papel que o
agente vai assumir.
3.2
O HISTÓRICO DO AGENTE
Quando um ator é chamado para interpretar um papel em um filme, a preparação inicial
envolve o recebimento de um contexto ou histórico detalhado do personagem. Esses detalhes
é o que chamamos de persona. Este contexto inclui informações sobre o passado, os
relacionamentos, as motivações e os desafios do personagem. Ao compreender esses
elementos, o ator é capaz de se conectar profundamente com o papel, trazendo autenticidade
e nuances à interpretação. Essa compreensão permite que o ator explore as complexidades e
a evolução do personagem ao longo da trama, garantindo uma performance convincente e
envolvente para o público.
Além do histórico do personagem, o ator também recebe orientações sobre o ambiente e
a época em que a história se passa. Isso pode incluir detalhes sobre a cultura, os costumes
e o estilo de vida que influenciam o comportamento e as atitudes do personagem. Com
essas informações, o ator pode construir uma representação mais rica e realista, imergindo-
se completamente no universo da narrativa. Essa abordagem holística não só melhora a
qualidade da atuação, mas também enriquece a experiência cinematográfica, proporcionando
ao público uma imersão total na história e nos mundos retratados. Assim também acontece
com os agentes do CrewAI.
Depois que definimos o papel do agente, vamos dar a ele um script das qualidades que
o personagem (agente) tem. Esse é o backstory. Este atributo é como o histórico de um
personagem em um filme ou livro. Ele fornece contexto e profundidade ao agente, moldando
suas ações e decisões de maneira que façam sentido dentro do seu "universo". No CrewAI, o
backstory de um agente é fundamental para criar agentes que não apenas realizam tarefas,
mas que também possuem uma lógica interna consistente para suas ações.
O backstory é crucial porque ele influencia diretamente como o agente se comporta e
responde a diferentes situações. Por exemplo, um agente com um histórico de ’Pesquisador
Acadêmico’ abordará um problema de maneira muito diferente de um agente com um histórico
de ’Empreendedor’. O primeiro pode ser mais meticuloso e detalhista, enquanto o segundo
pode ser mais inovador e orientado a riscos. Esse contexto adicional ajuda a definir as
expectativas e a prever o comportamento do agente, tornando suas ações mais coerentes e
previsíveis.
Além disso, o backstory facilita a colaboração entre agentes e com os usuários. Quando
CAPÍTULO 3. CRIANDO AGENTES NO CREWAI
53
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 55

AGENTES INTELIGENTES
conhecemos o histórico de um agente, podemos entender melhor suas motivações e capaci-
dades. Isso é especialmente útil em equipes multidisciplinares onde agentes com diferentes
históricos podem trazer perspectivas únicas e complementares para resolver problemas com-
plexos. Um agente com um histórico de "Gerente de Projetos", por exemplo, pode coordenar
melhor uma equipe diversificada do que um agente com um histórico puramente técnico.
Por fim, definir um backstory rico e detalhado para seus agentes pode melhorar sig-
nificativamente a interação humano-agente. Quando os agentes possuem históricos bem
definidos, eles se tornam mais do que simples executores de tarefas; eles se tornam parceiros
colaborativos que podem se adaptar e evoluir com base em suas experiências passadas. Isso
não só aumenta a eficiência e a eficácia dos agentes, mas também enriquece a experiência
geral de uso do sistema CrewAI, tornando-o mais intuitivo e envolvente.
Eu sei que às vezes definir em detalhes uma ’persona’ usando backstory pode ser
desafiador. Mas por sorte, criei uma técnica chamada ’técnica da segunda pessoa’. Os LLM’s
como o ChatGPT são muito bons em descrever profissionais e personas. Porém, normalmente,
tais descrições são feitas na terceira pessoa do singular ou do plural. Por exemplo, vamos
pedir ao ChatGPT para definir o profissional ’Pesquisador’:
PROMPT: Defina em um parágrafo um profissional ’pesquisador’ de conteúdo na web
Ele respondeu o seguinte:
ChatGPT:
Um pesquisador de conteúdo na web é um profissional especializado em bus-
car, analisar e sintetizar informações disponíveis online. Ele utiliza diversas ferramentas
e técnicas para encontrar dados relevantes, avaliar a credibilidade das fontes e compilar
conteúdo preciso e atualizado para diversas finalidades, como marketing, jornalismo,
educação ou desenvolvimento de projetos. Esse profissional deve ter habilidades em
pesquisa, pensamento crítico e discernimento para filtrar informações confiáveis e
relevantes em meio à vasta quantidade de dados disponíveis na internet.
Agora vamos aplicar a ’técnica da segunda pessoa’, pedindo ao ChatGPT para reescrever
tudo na segunda pessoa do singular:
PROMPT: Reescreva a definição desse profissional na segunda pessoa do singular
Agora a definição reescrita com a técnica:
CAPÍTULO 3. CRIANDO AGENTES NO CREWAI
54
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 56

AGENTES INTELIGENTES
ChatGPT:
Você, como pesquisador de conteúdo na web, é especializado em buscar, anali-
sar e sintetizar informações disponíveis online. Utiliza diversas ferramentas e técnicas
para encontrar dados relevantes, avaliar a credibilidade das fontes e compilar conteúdo
preciso e atualizado para finalidades como marketing, jornalismo, educação ou
desenvolvimento de projetos. Deve ter habilidades em pesquisa, pensamento crítico
e discernimento para filtrar informações confiáveis e relevantes em meio à vasta
quantidade de dados disponíveis na internet.
Viu como ficou bom? Agora vamos aplicar esse backstory à configuração do nosso
agente.
Só mais um pequeno detalhe. Quando a gente for aplicar esse texto ao backstory, vamos
usar uma formatação usando um ’f’ antes do texto. Isso possibilitará o uso de placeholders no
texto. Não se preocupe, vou explicar placeholders mais à frente, é bem tranquilo.
Agente Pesquisador
pesquisador = Agent(
role=’Pesquisador ’,
backstory=f""" Você, como
pesquisador de conteúdo na web ,
é especializado em buscar , analisar e sintetizar
informações
disponíveis
online. Utiliza
diversas
ferramentas e técnicas
para
encontrar
dados
relevantes , avaliar a credibilidade
das
fontes e compilar
conteúdo preciso e atualizado
para
finalidades
como
marketing , jornalismo , educação ou
desenvolvimento de projetos. Deve ter
habilidades em pesquisa ,
pensamento crítico e discernimento
para
filtrar
informações
confiáveis e relevantes em meio à vasta
quantidade de dados
disponíveis na internet."""
)
Agente Coordenador
coordenador = Agent(
role=’Coordenador ’,
backstory=f""" Você é um coordenador
experiente , especializado
em garantir
que todas as peças se encaixem
perfeitamente e que
a equipe
trabalhe de forma
harmoniosa e eficiente. Coordena as
atividades de outros
agentes e garante
que os objetivos do
projeto
sejam
alcançados de maneira
eficaz."""
CAPÍTULO 3. CRIANDO AGENTES NO CREWAI
55
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 57

AGENTES INTELIGENTES
Agente Escritor
escritor = Agent(
role=’Escritor ’,
backstory=f""" Você é um escritor
talentoso , capaz de
transformar
informações complexas em conteúdo envolvente e acessível ,
capturando a essência de qualquer
tema que
abordar.
Cria
textos que informam , educam e entretêm o público ,
utilizando
uma
linguagem
clara e envolvente."""
)
3.3
SEU AGENTE TEM METAS
Obviamente, estamos criando um agente inteligente baseado em LLM para que ele faça
alguma coisa interessante e importante para nós. O atributo goal define exatamente o que
queremos que o agente realize, a meta principal. Pense no goal como a missão do agente,
o objetivo final que ele deve atingir. Sem uma meta clara, o agente pode ficar perdido ou se
desviar de suas tarefas principais, então é essencial definir isso com precisão.
O goal é como o norte de uma bússola para o agente. Ele orienta todas as ações e
decisões do agente, garantindo que ele esteja sempre trabalhando em direção ao objetivo
desejado. Por exemplo, um agente com o goal de ’coletar dados de mercado’ vai focar
todas as suas atividades em encontrar, analisar e compilar informações relevantes sobre o
mercado. Esse foco permite que o agente trabalhe de forma eficiente e eficaz, direcionando
seus recursos e esforços para alcançar o melhor resultado possível.
Figura 3.3: Todo agente tem meta. Por Janderson de Sales
Definir um goal claro também facilita a avaliação do desempenho do agente. Com um
CAPÍTULO 3. CRIANDO AGENTES NO CREWAI
56
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 58

AGENTES INTELIGENTES
objetivo bem delineado, fica mais fácil medir se o agente está conseguindo atingir suas metas
ou se precisa de ajustes em suas funções ou estratégias. Isso é fundamental para garantir que
o agente esteja agregando valor ao seu projeto e contribuindo para o sucesso geral da equipe.
Além disso, o goal pode ajudar na integração do agente com outros membros da equipe,
sejam eles humanos ou outros agentes. Quando todos os membros da equipe têm objetivos
claros e alinhados, a colaboração flui de maneira mais harmoniosa e eficiente. Cada agente
entende seu papel dentro do quadro geral e pode trabalhar de forma coordenada com os
outros para alcançar o objetivo comum. Isso não só melhora a produtividade, mas também
cria um ambiente de trabalho mais coeso e cooperativo. Lembre-se você é o chefe dessa
equipe, seja claro o que espera dos seus funcionários (agentes).
Agora vamos adicionar um objetivo claro para cada agente:
Agente Pesquisador
pesquisador = Agent(
role=’Pesquisador ’,
backstory=f""" Você, como
pesquisador de conteúdo na web ,
é especializado em buscar , analisar e sintetizar
informações
disponíveis
online. Utiliza
diversas
ferramentas e técnicas
para
encontrar
dados
relevantes , avaliar a credibilidade
das
fontes e compilar
conteúdo preciso e atualizado
para
finalidades
como
marketing , jornalismo , educação ou
desenvolvimento de projetos. Deve ter
habilidades em pesquisa ,
pensamento crítico e discernimento
para
filtrar
informações
confiáveis e relevantes em meio à vasta
quantidade de dados
disponíveis na internet.""",
goal=’Coletar e analisar
informações relevantes
sobre o
mercado e fornecer
relatórios
detalhados.’
)
Agente Coordenador
coordenador = Agent(
role=’Coordenador ’,
backstory=f’Você é um coordenador
experiente , especializado em
garantir
que todas as peças se encaixem
perfeitamente e que a
equipe
trabalhe de forma
harmoniosa e eficiente. Coordena as
atividades de outros
agentes e garante
que os objetivos do
projeto
sejam
alcançados de maneira
eficaz.’,
goal=’Supervisionar e integrar as atividades
dos outros
agentes
para
garantir a realização eficaz dos
objetivos
do projeto.’
)
CAPÍTULO 3. CRIANDO AGENTES NO CREWAI
57
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 59

AGENTES INTELIGENTES
Agente Escritor
escritor = Agent(
role=’Escritor ’,
backstory=f""" Você é um escritor
talentoso , capaz de
transformar
informações complexas em conteúdo envolvente e acessível ,
capturando a essência de qualquer
tema que
abordar.
Cria
textos que informam , educam e entretêm o público ,
utilizando
uma
linguagem
clara e envolvente."""
goal=’Criar
conteúdo escrito de alta
qualidade
que
informe , eduque e entretenha o público.’
)
3.4
UM AGENTE ’FALASTRÃO’
Vamos falar sobre um parâmetro divertido e útil para os nossos agentes: o verbose.
Imagine que você tem um colega de trabalho que adora falar sobre tudo o que está fazendo.
Desde as pequenas tarefas até os grandes projetos, ele te mantém informado sobre cada
passo que dá. Às vezes, ele pode ser um pouco tagarela demais, mas não há como negar
que ele deixa todo mundo a par do que está acontecendo. Esse é o nosso agente quando
configuramos o verbose como True.
Figura 3.4: Agente falastrão, por Janderson de Sales
O verbose transforma o agente em um verdadeiro falastrão digital. Ele vai fornecer um
fluxo constante de atualizações sobre suas ações, detalhando cada movimento e decisão que
toma. Isso pode ser extremamente útil durante o desenvolvimento e teste, pois oferece uma
visão clara do que o agente está fazendo e permite identificar rapidamente qualquer problema
CAPÍTULO 3. CRIANDO AGENTES NO CREWAI
58
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 60

AGENTES INTELIGENTES
ou comportamento inesperado. No entanto, em um ambiente de produção, quando os agentes
já passaram pela fase dos testes e agora é um software ativo pra valer, pode ser necessário
silenciar um pouco esse falatório para evitar sobrecarga de informações, porque ninguém vai
estar vendo o que o agente está fazendo e só teremos contato com a produção final que os
agentes realizarão para nós. Ajustar o verbose para False permite que o agente execute
suas tarefas de maneira mais silenciosa, falando apenas quando necessário.
A configuração básica é True ou False, onde True faz com que o agente forneça muitas
informações sobre suas ações, enquanto False faz com que ele opere de maneira silenciosa.
Para definir isso, basta incluir verbose=True ou verbose=False na definição do agente. É
importante lembrar que essas opções devem ser escritas com a primeira letra em maiúscula e
sem aspas, pois são valores booleanos (liga/desliga).
Só para economizar espaço no livro eu vou omitir por enquanto os atributos ’backstory’ e
’goal:
Agente Pesquisador
pesquisador = Agent(
role=’Pesquisador ’,
backstory=f’Você ...’,
goal=’Coletar e analisar ...’,
verbose=True
)
Agente Coordenador
coordenador = Agent(
role=’Coordenador ’,
backstory=f’Você é um...’,
goal=’Supervisionar e ...’,
verbose=False
)
Agente Escritor
escritor = Agent(
role=’Escritor ’,
backstory=f’Você é um escritor ...’,
goal=’Criar
conteúdo...’
verbose=True
)
Veja que, em nossos agentes, apenas o coordenador não fornecerá atualizações enquanto
trabalha. Um detalhe importante é que ele não deixará de se comunicar internamente com
CAPÍTULO 3. CRIANDO AGENTES NO CREWAI
59
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 61

AGENTES INTELIGENTES
os outros agentes, garantindo a coordenação e a eficiência das tarefas. Embora não forneça
feedback contínuo para nós, ele continua a interagir bastante com os colegas, garantindo que
tudo funcione perfeitamente.
3.5
A MENTE DO AGENTE
Todo automóvel precisa de um motor para funcionar, e no caso dos nossos agentes, esse
motor é a LLM (Large Language Model). O parâmetro llm define qual modelo de linguagem
será usado pelo agente para processar informações e executar suas tarefas. Pense na LLM
como a mente do agente, responsável por interpretar comandos, gerar respostas e tomar
decisões com base nos dados que recebe.
Figura 3.5: LLM, a mente do agente. Por Janderson de Sales
As coisas só acontecem porque é a LLM que vai interpretar o papel definido em role,
backstory, goal e verbose. Esses atributos fornecem o contexto e as diretrizes que a LLM
usa para guiar o comportamento do agente, garantindo que ele possa desempenhar suas
funções de forma eficaz e coerente. Sem uma LLM adequada, todos esses atributos seriam
apenas palavras sem ação.
O uso de uma LLM adequada é crucial para o desempenho do agente. Dependendo do
objetivo e das tarefas específicas que o agente deve realizar, você pode escolher diferentes
modelos de linguagem que variam em capacidade, velocidade e especialização. Por exemplo,
modelos maiores e mais complexos como o GPT-4o (O modelo mais potente quando esse livro
foi escrito) podem ser usados para tarefas que exigem compreensão profunda e respostas
detalhadas, enquanto modelos menores como ’GPT-4o mini’ ou ’Llama-3.1 70B’ podem ser
mais eficientes para tarefas mais simples e repetitivas.
Configurar o parâmetro llm corretamente é essencial para garantir que o agente funcione
conforme esperado. Você pode especificar o modelo de linguagem que o agente deve usar,
CAPÍTULO 3. CRIANDO AGENTES NO CREWAI
60
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 62

AGENTES INTELIGENTES
ajustando parâmetros como o tamanho do modelo e os recursos disponíveis. Além disso,
é importante manter o modelo atualizado e treinado com dados relevantes para melhorar
continuamente o desempenho do agente.
3.6
A LLM PADRÃO DO CREWAI
Quando a LLM (Large Language Model) não é explicitamente configurada no agente, o
CrewAI utiliza o modelo especificado na variável de ambiente OPENAI_MODEL_NAME. Caso essa
variável não esteja definida, o modelo padrão utilizado é o gpt-4o. Este modelo é altamente
eficiente e é selecionado por sua capacidade de lidar com uma vasta gama de tarefas com
precisão e velocidade.
O gpt-4o é conhecido por seu desempenho robusto e por fornecer respostas de alta
qualidade. Ele é capaz de processar grandes volumes de dados e interpretar comandos
complexos, tornando-o ideal para a maioria das aplicações do CrewAI. Utilizar este modelo
padrão garante que seus agentes tenham uma base sólida para executar tarefas de maneira
eficaz, sem a necessidade de configurações adicionais.
Com o gpt-4o, os agentes do CrewAI são capazes de interpretar o papel definido em
role, backstory, goal e verbose, proporcionando um funcionamento harmonioso e coerente.
Isso permite que os agentes realizem suas funções com inteligência, adaptabilidade e precisão,
garantindo que o sistema opere de maneira otimizada e eficiente.
É importante que os criadores de agentes estejam cientes dessa informação, pois o
gpt-4o tem um custo alto. Ao entenderem isso, eles podem tomar decisões mais informa-
das sobre quando e como configurar a LLM para balancear entre desempenho e custos
operacionais.
3.7
POR QUE USAR VÁRIAS LLMS
O uso de LLMs como o GPT-4 implica em custos significativos devido ao poder compu-
tacional necessário para seu treinamento e execução. Modelos maiores e mais complexos
consomem mais recursos de processamento e energia, o que aumenta os custos operacionais.
Além disso, há despesas associadas ao uso de APIs de terceiros, que frequentemente cobram
por quantidade de tokens processados. Portanto, é importante balancear o uso de diferentes
modelos para otimizar tanto o desempenho quanto os custos.
No desenvolvimento de agentes inteligentes no CrewAI, usar múltiplas LLMs (Large
Language Models) pode ser uma jogada esperta. Imagine ter um super-herói para cada
CAPÍTULO 3. CRIANDO AGENTES NO CREWAI
61
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 63

AGENTES INTELIGENTES
situação: um Hulk para tarefas pesadas e um Flash para aquelas que precisam de rapidez.
Da mesma forma, modelos maiores como o GPT-4o são perfeitos para tarefas complexas
que exigem muita compreensão e respostas detalhadas, enquanto modelos mais leves como
GPT-4o mini são ideais para trabalhos repetitivos e simples. Essa flexibilidade não só otimiza
o desempenho, mas também economiza recursos.
Além disso, a diversidade de LLMs permite uma adaptação mais precisa às diferentes
demandas de cada tarefa. Por exemplo, enquanto o GPT-4o, Claude ou Gemini podem ser
usados para gerar conteúdos detalhados e analisar dados complexos, um modelo menor como
GPT-4o mini ou Llama3.1 70B pode ser ideal para realizar tarefas de suporte, como responder
perguntas frequentes ou realizar buscas rápidas. Isso não apenas melhora a eficiência, mas
também garante que os agentes possam operar de maneira mais sustentável e econômica.
Diversificar as LLMs permite que seus agentes sejam mais versáteis, eficientes e econômicos,
prontos para qualquer desafio.
3.8
PREPARANDO AS MENTES
Agora que entendemos a importância de definir os atributos essenciais dos nossos
agentes, é hora de focar na parte mais crítica: preparar as mentes dos nossos agentes. No
contexto do CrewAI, isso significa escolher e configurar as LLMs (Large Language Models)
que darão vida a esses agentes, permitindo que eles compreendam e processem informações,
tomem decisões e realizem tarefas de forma inteligente.
Escolher a LLM certa é como escolher o motor certo para um carro. Assim como diferen-
tes motores oferecem diferentes níveis de potência e eficiência, diferentes LLMs oferecem
diferentes capacidades de compreensão e geração de linguagem.
O GPT-4o é um modelo mais ’intelectual’, perfeito para o Escritor. Entretanto, para tarefas
que exigem uma resposta mais rápida e menos detalhada, o GPT-4o-mini pode ser mais
adequado, como no caso do Agente Coordenador e Agente Pesquisador.
# Instanciando GPT -4o e GPT -4o-mini
gpt_4 = "gpt -4o"
gpt_4_mini = "gpt -4o-mini"
Veja que a ’mente’ de cada LLM está contida nas variáveis gpt_4 e gpt_4_mini e essas
’mentes’ serão atribuídas aos agentes por meio do atributo llm.
Definir a LLM correta para cada agente é crucial para otimizar o desempenho e a eficiência.
Vamos definir qual LLM cada agente usará com base em suas necessidades específicas.
Ainda vou reduzir o texto de backstory e goal para economizar espaço no livro
CAPÍTULO 3. CRIANDO AGENTES NO CREWAI
62
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 64

AGENTES INTELIGENTES
Agente Pesquisador
pesquisador = Agent(
role=’Pesquisador ’,
backstory=f’Você, como
pesquisador de conteúdo na web ...’,
goal=’Coletar e analisar ...’,
verbose=True ,
llm=gpt_4
)
Agente Coordenador
coordenador = Agent(
role=’Coordenador ’,
backstory=f’Você é um coordenador
experiente ...’,
goal=’Supervisionar e integrar ...’,
verbose=False ,
llm=gpt_4_mini
)
Agente Escritor
escritor = Agent(
role=’Escritor ’,
backstory=f’Você é um escritor
talentoso ...’,
goal=’Criar
conteúdo escrito ...’,
verbose=True ,
llm=gpt_4
)
CAPÍTULO 3. CRIANDO AGENTES NO CREWAI
63
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 65

AGENTES INTELIGENTES
Com os atributos criados até agora, já temos o básico para que o nosso agente CrewAI
comece a trabalhar. Com papéis definidos, contexto ou histórico detalhado dos agentes que
são interessantes, objetivos claros e o ’falatório’ ajustado, nossos agentes estão prontos
para mergulhar nas tarefas. Eles sabem o que fazer, como se comportar e o quanto falar
enquanto realizam suas funções, garantindo uma operação suave e eficiente. Além disso, as
mentes que criamos, representadas pelas LLMs específicas, já foram implantadas nos nossos
agentes, proporcionando a inteligência necessária para que eles desempenhem suas funções
de maneira eficaz.
Mas, claro, sempre há espaço para melhorias e ajustes finos. Existem muitas outras
configurações e técnicas que podemos explorar para turbinar ainda mais o desempenho dos
nossos agentes. Vamos mergulhar nessas configurações avançadas e ver como podemos
personalizar nossos agentes de forma a torná-los ainda mais versáteis, adaptáveis e prontos
para qualquer desafio que apareça no horizonte. Afinal, quanto mais otimizados e bem
ajustados forem nossos agentes, melhor será o resultado de suas ações no CrewAI.
3.9
O CHEFE DELEGA TAREFAS
O parâmetro allow_delegation define se os agentes podem delegar tarefas ou per-
guntas uns aos outros, garantindo que cada tarefa seja tratada pelo agente mais adequado.
Permitir delegação é uma funcionalidade opcional, mas extremamente poderosa, que melhora
a eficiência e a cooperação entre os agentes. Quando a delegação está ativada, os agentes
podem identificar qual membro da equipe possui as melhores habilidades ou informações para
resolver uma tarefa específica e, em seguida, transferir essa tarefa para ele.
Figura 3.6: O chefe delega tarefas
Por padrão, o allow_delegation é configurado como True, o que significa que os
agentes têm a liberdade de delegar tarefas automaticamente. Isso promove uma abordagem
mais dinâmica e colaborativa, onde os agentes trabalham juntos para alcançar o objetivo
CAPÍTULO 3. CRIANDO AGENTES NO CREWAI
64
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 66

AGENTES INTELIGENTES
comum de forma mais eficaz. No entanto, em alguns cenários específicos, pode ser desejável
desativar essa funcionalidade, configurando allow_delegation como False, para que cada
agente se concentre exclusivamente em suas próprias tarefas sem transferi-las para outros
agentes.
Essa funcionalidade é especialmente importante para o agente Coordenador. Como o
responsável por supervisionar e integrar as atividades dos outros agentes, a capacidade de
delegar tarefas permite ao Coordenador otimizar a distribuição de trabalho e garantir que cada
tarefa seja atribuída ao agente mais qualificado. Isso não apenas melhora a eficiência do
trabalho em equipe, mas também garante que os recursos sejam utilizados da melhor maneira
possível, evitando sobrecarga em um único agente e promovendo um ambiente de trabalho
mais equilibrado e produtivo.
Agente Coordenador
coordenador = Agent(
role=’Coordenador ’,
backstory=f’Você é um coordenador
experiente ...’,
goal=’Supervisionar e integrar ...’,
verbose=False ,
llm=gpt_4_mini ,
allow_delegation =True
)
3.10
CONTROLANDO AS INTERAÇÕES DO AGENTE
O parâmetro max_iter define o número máximo de iterações que um agente pode realizar
antes de ser forçado a fornecer sua melhor resposta. Essa funcionalidade opcional é crucial
para garantir que os agentes não fiquem presos em loops intermináveis de processamento, o
que poderia consumir recursos excessivos e atrasar a obtenção de resultados. O valor padrão
para max_iter é 25, o que significa que, após 25 iterações, o agente deve parar e apresentar
sua resposta final com base nas informações e processamento realizados até aquele ponto.
Definir o max_iter é especialmente importante em cenários onde o tempo de resposta é
crítico. Por exemplo, em uma aplicação de atendimento ao cliente, um agente que leva muito
tempo para fornecer uma resposta pode resultar em uma experiência ruim para o usuário. Ao
limitar o número de iterações, garantimos que o agente opere dentro de um tempo razoável,
balanceando a necessidade de processar informações adequadas com a necessidade de
fornecer respostas rápidas.
Além disso, o max_iter ajuda a controlar o uso de recursos computacionais. Agentes
CAPÍTULO 3. CRIANDO AGENTES NO CREWAI
65
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 67

AGENTES INTELIGENTES
que executam muitas iterações podem consumir grandes quantidades de CPU e memória,
o que pode afetar o desempenho geral do sistema, especialmente quando vários agentes
estão operando simultaneamente. Ao impor um limite de iterações, podemos gerenciar melhor
esses recursos, garantindo que o sistema permaneça responsivo e eficiente.
Essa funcionalidade é particularmente importante para o agente Pesquisador. Como
o responsável por coletar e analisar grandes volumes de informações, o Pesquisador pode
facilmente se envolver em processos longos e complexos. O max_iter assegura que o agente
forneça resultados em um tempo razoável, evitando que ele gaste tempo excessivo em uma
única tarefa. Isso é crucial para manter um fluxo constante de informações e garantir que os
dados mais relevantes e recentes sejam entregues de forma eficiente.
Agente Pesquisador
pesquisador = Agent(
role=’Pesquisador ’,
backstory=f’Você, como
pesquisador de conteúdo na web ...’,
goal=’Coletar e analisar ...’,
verbose=True ,
llm=gpt_4 ,
max_iter =15
)
3.11
LIMITANDO A TAXA DE SOLICITAÇÕES DO AGENTE
O parâmetro max_rpm define o número máximo de solicitações por minuto que um agente
pode fazer para evitar estourar os limites de taxa de requisição. Essa funcionalidade opcional é
super importante para garantir que seus agentes não sejam bloqueados temporariamente (ou
até permanentemente) por fazerem muitas requisições de uma vez. Se você não definir esse
parâmetro, o valor padrão é None, o que significa que o agente pode fazer quantas solicitações
quiser, desde que o serviço aguente o tranco.
Configurar o max_rpm é especialmente útil quando seus agentes interagem com APIs que
possuem limites de taxa bem definidos. Pense em serviços de dados, plataformas de redes
sociais e outros provedores de API que não querem ser sobrecarregados. Ao definir um limite
de solicitações por minuto, você garante que seus agentes respeitem essas regras, operando
de forma mais sustentável e sem causar interrupções.
Além disso, o max_rpm ajuda a distribuir melhor as requisições ao longo do tempo. Em
vez de mandar um monte de solicitações de uma vez só, o agente espaça as requisições de
acordo com o limite configurado. Isso melhora a eficiência e a estabilidade da comunicação
CAPÍTULO 3. CRIANDO AGENTES NO CREWAI
66
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 68

AGENTES INTELIGENTES
com os serviços externos, especialmente quando muitos agentes estão acessando os mesmos
recursos ao mesmo tempo.
Agente Pesquisador
pesquisador = Agent(
role=’Pesquisador ’,
backstory=f’Você, como
pesquisador de conteúdo na web ...’,
goal=’Coletar e analisar ...’,
verbose=True ,
llm=gpt_4 ,
max_iter =15,
max_rpm =30
)
3.12
RELEMBRAR É VIVER. AGENTE COM MEMÓRIA
O parâmetro memory define se o agente deve reter informações durante a execução. O
valor padrão é False. Essa funcionalidade é super útil para agentes que precisam lembrar e
usar informações contextuais enquanto trabalham. Quando a memória está ativada, o agente
pode armazenar dados importantes e recuperá-los conforme necessário, melhorando sua
capacidade de tomar decisões acertadas e fornecer respostas mais precisas.
Figura 3.7: Agente e suas lembranças. Por Janderson de Sales
A memory é especialmente valiosa em situações onde manter o contexto é fundamental.
Por exemplo, em um bate-papo prolongado com um usuário, um agente com memória pode
lembrar informações previamente fornecidas, evitando aquela chatice de ter que repetir tudo e
proporcionando uma experiência mais fluida e natural. Da mesma forma, em tarefas complexas
CAPÍTULO 3. CRIANDO AGENTES NO CREWAI
67
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 69

AGENTES INTELIGENTES
que envolvem várias etapas, a memória permite que o agente retenha detalhes importantes
de cada fase e os use nas etapas seguintes.
No caso do agente Coordenador, usar a memory é crucial. Como o coordenador é
responsável por supervisionar e integrar as atividades dos outros agentes, ele precisa lembrar
dos detalhes e do progresso de cada tarefa. Com a memória ativada, o Coordenador pode
armazenar informações sobre o status de diferentes tarefas, as interações entre os agentes e
qualquer problema ou sucesso ocorrido. Isso permite que ele tome decisões mais informadas e
ajuste o planejamento conforme necessário para garantir que tudo corra de forma harmoniosa
e eficiente.
Além disso, a memory no Coordenador permite personalizar a interação com diferentes
agentes, lembrando preferências e históricos de interação. Isso cria uma experiência de
trabalho mais coesa e eficiente, onde o Coordenador pode rapidamente acessar informações
relevantes sem precisar consultar os agentes repetidamente.
Aqui está um exemplo de como configurar um agente coordenador com memória ativada:
Agente Coordenador
coordenador = Agent(
role=’Coordenador ’,
backstory=f’Você é um coordenador
experiente ...’,
goal=’Supervisionar e integrar ...’,
verbose=False ,
llm=gpt_4_mini ,
allow_delegation =True ,
memory=True
)
3.13
AGENTE COM ’CÓRTEX ORGANIZACIONAL’
O parâmetro function_calling_llm define o modelo de linguagem que será responsável
por gerenciar as chamadas de ferramentas para este agente, substituindo o function_calling_llm
padrão da crew. Em outras palavras, essa é a ’mente’ do agente quando ele precisa chamar
e usar ferramentas específicas durante suas operações. O valor padrão para este atributo é
None.
É importante entender a diferença entre os atributos llm e function_calling_llm.
O llm é o cérebro geral do agente, responsável por processar informações e tomar
decisões. Para tarefas complexas que exigem alta precisão e compreensão, como análise de
dados detalhada ou interações sofisticadas com o usuário, o GPT-4o seria a melhor escolha,
CAPÍTULO 3. CRIANDO AGENTES NO CREWAI
68
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 70

AGENTES INTELIGENTES
apesar do custo mais alto. Isso garantirá que o agente tenha a capacidade necessária para
fornecer respostas precisas e eficazes.
Já o function_calling_llm é especificamente para lidar com as chamadas de ferra-
mentas que o agente precisa usar durante suas operações. Se as ferramentas são complexas
e as chamadas exigem alta precisão e entendimento contextual, o GPT-4o seria novamente
a melhor escolha, assegurando que cada interação seja gerida com a máxima eficácia. No
entanto, se as ferramentas são relativamente simples e as interações não exigem o mais alto
nível de processamento, o GPT-4o mini pode ser suficiente, oferecendo um bom equilíbrio
entre desempenho e custo.
Eu gosto de pensar que llm como o cérebro geral do agente, enquanto o function
calling llm é como uma área especializada do cérebro focada apenas em utilizar ferra-
mentas da maneira mais eficaz principalmente quando o agente vai manipular múltiplas
ferramentas.
Entretanto, se você não atribuir nada ao function_calling_llm, o agente usará o
modelo de linguagem definido no atributo llm para gerenciar as chamadas de ferramentas.
Isso significa que, na ausência de um function_calling_llm específico, o agente continuará
a operar de forma eficiente utilizando o modelo geral definido.
Aqui está um exemplo de como configurar um agente pesquisador com um function_calling_llm
personalizado:
Agente Pesquisador
pesquisador = Agent(
role=’Pesquisador ’,
backstory=f’Você, como
pesquisador de conteúdo na web ...’,
goal=’Coletar e analisar ...’,
verbose=True ,
llm=gpt_4_mini ,
max_iter =15,
max_rpm =30,
memory=True ,
function_calling_llm =gpt_4
)
3.14
LIMITANDO AS TENTATIVAS DO AGENTE
Erros sempre acontecem, né? O parâmetro max_retry_limit define quantas vezes
o agente pode tentar realizar uma tarefa quando algo dá errado. Imagine que seu agente
CAPÍTULO 3. CRIANDO AGENTES NO CREWAI
69
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 71

AGENTES INTELIGENTES
está tentando completar uma missão e encontra um obstáculo - ele não vai desistir na
primeira tentativa. Esse atributo garante que ele vai tentar novamente, até o número de vezes
especificado, antes de jogar a toalha.
Por padrão, o max_retry_limit é 2, o que significa que o agente vai tentar a tarefa
até três vezes (a tentativa inicial mais duas tentativas extras). Isso é super útil para manter
as coisas funcionando sem problemas, especialmente em ambientes onde a continuidade é
essencial. Ajustar esse parâmetro permite que você controle o quão persistente seu agente
deve ser diante de falhas temporárias ou problemas inesperados.
Aqui está um exemplo de como configurar um agente coordenador com um max_retry_limit
personalizado:
Agente Coordenador
coordenador = Agent(
role=’Coordenador ’,
backstory=f’Você é um coordenador
experiente ...’,
goal=’Supervisionar e integrar ...’,
verbose=False ,
llm=gpt_4_mini ,
allow_delegation =True ,
memory=True ,
max_retry_limit =3
)
3.15
LIMITANDO O TEMPO DE EXECUÇÃO DO AGENTE
O parâmetro max_execution_time define o tempo máximo que um agente pode gastar
executando uma tarefa. Este atributo é essencial para garantir que as tarefas não demorem
mais do que o necessário, ajudando a manter a eficiência e a pontualidade das operações.
Imagine que seu agente está em uma missão complexa; o max_execution_time garante que
ele não fique preso em loops intermináveis, forçando-o a concluir a tarefa ou passar para a
próxima após um certo período.
Definir um max_execution_time adequado é crucial para ambientes onde o tempo de
resposta é crítico. Por exemplo, em um cenário de pesquisa, um agente que leva muito
tempo para concluir uma análise pode atrasar projetos ou decisões importantes. Ajustar esse
parâmetro permite que você mantenha as operações ágeis e responsivas, garantindo que o
agente opere dentro dos limites de tempo especificados.
Aqui está um exemplo de como configurar um agente pesquisador com um max_execution_time
CAPÍTULO 3. CRIANDO AGENTES NO CREWAI
70
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 72

AGENTES INTELIGENTES
personalizado:
Agente Pesquisador
pesquisador = Agent(
role=’Pesquisador ’,
backstory=f’Você, como
pesquisador de conteúdo na web ...’,
goal=’Coletar e analisar ...’,
verbose=True ,
llm=gpt_4_mini ,
max_iter =15,
max_rpm =30,
memory=True ,
function_calling_llm =gpt_4 ,
max_execution_time =120
# tempo máximo em segundos
)
3.16
O AGENTE PODE EXECUTAR CÓDIGO?
O parâmetro allow_code_execution define se o agente tem permissão para executar
código. Isso é super útil quando o agente precisa fazer cálculos, processar dados ou até
interagir com sistemas que exigem scripts personalizados. Permitir a execução de código
transforma o agente em um verdadeiro canivete suíço digital, capaz de lidar com uma variedade
enorme de desafios programáticos.
Para um agente pesquisador, a capacidade de executar código é especialmente valiosa.
Imagine que o agente precise coletar e analisar grandes volumes de dados da web. Com a
execução de código permitida, ele pode automatizar processos complexos, como a extração e
transformação de dados, análises estatísticas ou até mesmo a criação de gráficos bacanas.
Isso não só aumenta a eficiência, mas também a precisão das suas pesquisas.
Aqui está um exemplo de como configurar um agente pesquisador com allow_code_execution:
Agente Pesquisador
pesquisador = Agent(
role=’Pesquisador ’,
backstory=f’Você, como
pesquisador de conteúdo na web ...’,
goal=’Coletar e analisar ...’,
verbose=True ,
llm=gpt_4_mini ,
max_iter =15,
max_rpm =30,
memory=True ,
CAPÍTULO 3. CRIANDO AGENTES NO CREWAI
71
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 73

AGENTES INTELIGENTES
function_calling_llm =gpt_4 ,
max_execution_time =120 ,
# tempo máximo em segundos
allow_code_execution =True
)
Com a execução de código permitida, o agente pesquisador se torna uma ferramenta
ainda mais poderosa, capaz de realizar tarefas complexas de maneira autônoma e eficiente,
ampliando significativamente suas capacidades de pesquisa e análise.
3.17
CONFIGURANDO O AGENTE COM UM DICIONÁRIO
O parâmetro config é uma representação em dicionário da configuração do agente.
Este atributo é super útil para definir todas as configurações do agente de uma só vez,
especialmente se você tiver várias configurações avançadas que deseja aplicar. Em vez
de especificar cada atributo individualmente na criação do agente, você pode simplesmente
passar um dicionário contendo todas as configurações desejadas.
Uma grande vantagem de usar config é a flexibilidade e organização que ele oferece.
Por exemplo, se você está configurando agentes dinamicamente a partir de uma base de
dados ou um arquivo de configuração, pode simplesmente carregar essas configurações no
formato de um dicionário e aplicá-las ao agente. Isso não só torna o código mais limpo, mas
também facilita a manutenção e a reutilização das configurações em diferentes contextos.
Vamos ver como configurar um agente escritor usando o config:
Agente Escritor
config = {
"role": "Escritor",
"backstory": "Você é um escritor
talentoso ...",
"goal": "Criar
conteúdo escrito ...",
"verbose": True ,
"llm": gpt_4 ,
"memory": True
}
escritor = Agent(config=config)
Veja que é só mais uma forma de criar o agente.
CAPÍTULO 3. CRIANDO AGENTES NO CREWAI
72
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 74

AGENTES INTELIGENTES
3.18
REGISTRANDO O PROCESSO DO AGENTE
Imagine que você está dirigindo em uma longa viagem e, a cada parada, você anota o que
aconteceu até aquele ponto - a paisagem que viu, a música que estava tocando, e qualquer
outro detalhe importante. O parâmetro step_callback funciona de maneira semelhante para
os agentes. Ele permite definir uma função de retorno de chamada que será executada
após cada etapa da execução do agente, registrando o que aconteceu em cada ’parada’ do
processo.
Isso é super útil para monitorar e registrar o progresso do agente em tempo real, forne-
cendo insights detalhados sobre o que está acontecendo durante o processo de execução.
Para o agente pesquisador, podemos definir uma função de callback para registrar cada etapa
do processo de pesquisa. A função de callback pode receber várias informações sobre a
etapa atual, permitindo um monitoramento detalhado.
Vamos ver como configurar um agente pesquisador com uma função de callback persona-
lizada:
# Definindo a função de callback
def
registrar_processo (step_info):
print(step_info)
Agente Pesquisador
pesquisador = Agent(
role=’Pesquisador ’,
backstory=f’Você, como
pesquisador de conteúdo na web ...’,
goal=’Coletar e analisar ...’,
verbose=True ,
llm=gpt_4_mini ,
max_iter =15,
max_rpm =30,
memory=True ,
function_calling_llm =gpt_4 ,
max_execution_time =120 ,
allow_code_execution =True ,
step_callback= registrar_processo # basta
colocar o nome
#da função que o agente vai chamar
automaticamente
)
Isso é fantástico! Controle total na execução do agente. Com o step_callback, você
CAPÍTULO 3. CRIANDO AGENTES NO CREWAI
73
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 75

AGENTES INTELIGENTES
pode acompanhar o progresso do agente em tempo real, registrando informações valiosas
sobre cada etapa do processo de pesquisa. Isso é especialmente útil para depuração, auditoria
e otimização das operações do agente.
3.19
USANDO FERRAMENTAS NATIVAS
Seus agentes, super-heróis em uma missão, e as tools (ferramentas) são como e dispositi-
vos que dão a eles habilidades especiais. Assim como o Batman não seria tão eficaz sem seu
cinto de utilidades ou o Homem de Ferro sem sua armadura, os agentes no CrewAI também
precisam de ferramentas específicas para realizar suas tarefas com precisão e eficiência. As
tools capacitam os agentes a executar funções que vão além de suas capacidades inatas, for-
necendo os recursos necessários para enfrentar desafios complexos e adaptar-se a diferentes
situações.
Figura 3.8: Agentes em ação. Por Janderson de Sales
Sem dúvida, as tools são a funcionalidade opcional mais importante da classe Agent. Elas
ampliam significativamente o escopo do que um agente pode fazer, permitindo integrações
com APIs externas, acessos a bancos de dados, execução de cálculos avançados e muito
mais. Ao equipar seus agentes com as ferramentas certas, você não só melhora sua eficiência,
mas também aumenta a versatilidade e o impacto geral de suas operações. Vamos explorar
como essas ferramentas podem ser configuradas e utilizadas para transformar seus agentes
em verdadeiros especialistas multifuncionais.
Por sorte, o CrewAI já vem com uma série de ferramentas prontas para uso, cobrindo uma
ampla gama de funcionalidades essenciais. Essas ferramentas integradas são projetadas para
serem fáceis de configurar e usar, permitindo que seus agentes aproveitem rapidamente suas
capacidades avançadas. Além das ferramentas padrão, você também pode criar ferramentas
personalizadas para atender necessidades específicas, garantindo que seus agentes estejam
CAPÍTULO 3. CRIANDO AGENTES NO CREWAI
74
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 76

AGENTES INTELIGENTES
sempre equipados com os recursos ideais para qualquer tarefa.
Neste livro, vamos focar nas ferramentas mais importantes que já vêm com o CrewAI.
No entanto, em nosso próximo livro, vamos explorar as infinitas possibilidades de criação
de ferramentas personalizadas, elevando você a um novo patamar na criação de agentes.
Essas ferramentas personalizadas permitirão que você adapte os agentes de forma única
às necessidades específicas do seu projeto, abrindo um mundo de novas oportunidades e
capacidades.
Para que possamos atribuir uma ferramenta a um agente, primeiro precisamos criá-la.
Não faz sentido pedir a um pesquisador para usar uma ferramenta de acesso à internet sem
antes prepará-la adequadamente. É essencial garantir que cada ferramenta esteja configurada
corretamente para que os agentes possam utilizá-las de maneira eficaz e eficiente em suas
tarefas.
Para aproveitar ao máximo as ferramentas nativas do CrewAI, você precisa instalá-las
usando o comando abaixo. Isso garantirá que seus agentes estejam equipados com todas as
ferramentas necessárias para executar suas tarefas de maneira eficiente e eficaz.
pip
install ’crewai[tools]’
As ferramentas disponíveis pelo CrewAI cobrem uma ampla gama de funcionalidades,
permitindo que seus agentes realizem diversas tarefas com eficiência. Aqui está a lista
completa das ferramentas nativas do CrewAI, com uma breve explicação de cada uma:
• CodeDocsSearchTool: Ferramenta para buscar e analisar documentação de código.
• CSVSearchTool: Permite pesquisar e manipular dados em arquivos CSV.
• DirectorySearchTool: Ferramenta para buscar e analisar conteúdo de diretórios.
• DOCXSearchTool: Utilizada para ler e buscar informações em documentos DOCX.
• DirectoryReadTool: Ferramenta para ler o conteúdo de diretórios.
• FileReadTool: Permite ler o conteúdo de arquivos diversos.
• GithubSearchTool: Ferramenta para buscar e analisar repositórios no GitHub.
• SerperDevTool: Utilizada para realizar pesquisas na web.
• TXTSearchTool: Permite buscar e manipular dados em arquivos TXT.
• JSONSearchTool: Ferramenta para ler e buscar informações em arquivos JSON.
• MDXSearchTool: Utilizada para buscar e analisar arquivos MDX.
• PDFSearchTool: Ferramenta para ler e buscar informações em arquivos PDF.
• PGSearchTool: Utilizada para realizar buscas em bancos de dados PostgreSQL.
• RagTool: Ferramenta para recuperação e análise de dados.
CAPÍTULO 3. CRIANDO AGENTES NO CREWAI
75
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 77

AGENTES INTELIGENTES
• ScrapeElementFromWebsiteTool: Utilizada para extrair elementos específicos de web-
sites.
• ScrapeWebsiteTool: Ferramenta para realizar scraping de websites.
• SeleniumScrapingTool: Utilizada para scraping de websites com Selenium.
• WebsiteSearchTool: Ferramenta para realizar buscas em websites.
• XMLSearchTool: Permite ler e buscar informações em arquivos XML.
• YoutubeChannelSearchTool: Ferramenta para buscar e analisar canais do YouTube.
• YoutubeVideoSearchTool: Utilizada para buscar e analisar vídeos do YouTube.
Estas ferramentas permitem que os agentes acessem, leiam e processem diversos tipos
de dados e documentos, além de interagir com diferentes plataformas e serviços online,
ampliando significativamente suas capacidades e eficiência.
3.20
A FERRAMENTA DE PESQUISA NA WEB
Para mostrar um exemplo de como é fácil utilizar as ferramentas nativas do CrewAI, vamos
configurar o SerperDevTool, provavelmente a ferramenta mais utilizada no CrewAI. Essa
ferramenta é uma verdadeira mão na roda para realizar pesquisas na web, permitindo que
seus agentes acessem e processem informações online de forma eficiente.
Primeiro, vamos ver como configurar essa ferramenta. Para começar, você precisará obter
uma API_KEY. A chave de API é essencial para autenticar suas solicitações e garantir que
você tenha acesso aos serviços de pesquisa da Serper. Aqui estão os passos para conseguir
sua API_KEY:
1. **Cadastre-se no Serper**: Vá para o site oficial do Serper e crie uma conta. Se você
já tiver uma, faça login. 2. **Obtenha a API Key**: Após fazer login, navegue até a seção de
API Keys no seu painel de controle. Lá, você encontrará a opção para gerar uma nova chave
de API. Copie essa chave, pois você precisará dela para configurar a ferramenta no CrewAI.
CAPÍTULO 3. CRIANDO AGENTES NO CREWAI
76
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 78

AGENTES INTELIGENTES
Agora que você tem a API_KEY, vamos configurar o SerperDevTool no seu agente. Aqui
está um exemplo de como fazer isso:
from
crewai_tools
import
SerperDevTool
# Instanciando a ferramenta de pesquisa na web
ferramenta_pesquisa = SerperDevTool (api_key=’SUA_API_KEY_AQUI ’)
# Configurando o agente
para usar a ferramenta
pesquisador = Agent(
role=’Pesquisador ’,
backstory=f’Você, como
pesquisador de conteúdo na web ...’,
goal=’Coletar e analisar ...’,
verbose=True ,
llm=gpt_4_mini ,
max_iter =15,
max_rpm =30,
memory=True ,
function_calling_llm =gpt_4 ,
max_execution_time =120 ,
# tempo máximo em segundos
allow_code_execution =True ,
tools =[ ferramenta_pesquisa ]
)
E pronto! Com esses passos simples, você configurou o SerperDevTool para que seu
agente pesquisador possa realizar buscas na web. Agora seu agente está pronto para buscar
e analisar informações online de forma eficiente. Fácil, não é?
No segundo volume dos livros de agentes, falaremos mais sobre tools personalizadas.
Vamos explorar as infinitas possibilidades de criação de ferramentas customizadas, elevando
você a um novo patamar na criação de agentes. Essas ferramentas personalizadas permitirão
que você adapte os agentes de forma única às necessidades específicas do seu projeto,
abrindo um mundo de novas oportunidades e capacidades. Fique ligado!
3.21
AGENTES PRONTOS, VAMOS EM FRENTE
Com papéis definidos, contexto ou histórico detalhado dos agentes que são interessantes,
objetivos claros e o ’falatório’ ajustado, nossos agentes estão prontos para mergulhar nas
tarefas. Eles sabem o que fazer, como se comportar e o quanto falar enquanto realizam
suas funções, garantindo uma operação suave e eficiente. Além disso, as mentes que
criamos, representadas pelas LLMs específicas, já foram implantadas nos nossos agentes,
proporcionando a inteligência necessária para que eles desempenhem suas funções de
CAPÍTULO 3. CRIANDO AGENTES NO CREWAI
77
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 79

AGENTES INTELIGENTES
maneira eficaz.
Mas, claro, sempre há espaço para melhorias e ajustes finos. Existem muitas outras
configurações e técnicas que podemos explorar para turbinar ainda mais o desempenho dos
nossos agentes. Vamos mergulhar nessas configurações avançadas e ver como podemos
personalizar nossos agentes de forma a torná-los ainda mais versáteis, adaptáveis e prontos
para qualquer desafio que apareça no horizonte. Afinal, quanto mais otimizados e bem
ajustados forem nossos agentes, melhor será o resultado de suas ações no CrewAI.
No próximo capítulo, vamos nos aprofundar nas tarefas. Entenderemos como configurar e
gerenciar as tarefas que nossos agentes realizarão, garantindo que cada tarefa seja executada
com precisão e eficiência. Prepare-se para descobrir como maximizar a produtividade dos
seus agentes definindo tarefas claras e objetivas.
CAPÍTULO 3. CRIANDO AGENTES NO CREWAI
78
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 80

AGENTES INTELIGENTES
CAPÍTULO 4
Tarefas: Dividir para conquistar
Imagine que você está encarregado de gerenciar a reforma de uma casa. Seria impossível
realizar essa tarefa sem dividir o projeto em partes menores, certo? Alguém precisa cuidar
da pintura, outro vai se encarregar das instalações elétricas, e uma terceira equipe pode
focar na reforma da cozinha. Essa divisão em tarefas é essencial para que todos saibam o
que fazer e possam colaborar de forma eficiente. Da mesma forma, no CrewAI, as tarefas
são fundamentais para organizar e coordenar as ações dos agentes, transformando metas
complexas em atividades gerenciáveis e bem definidas.
As tarefas no CrewAI funcionam como pequenos blocos de construção que, quando
combinados, permitem alcançar objetivos maiores. Cada tarefa é uma peça do quebra-cabeça
que, ao ser completada, contribui para o avanço do projeto como um todo. Ao dividir metas
complexas em tarefas menores, garantimos que cada agente saiba exatamente o que fazer,
otimizando o tempo e os recursos disponíveis. Além disso, isso facilita a identificação e a
correção de possíveis problemas, já que cada parte do processo é monitorada e ajustada
individualmente.
Outro ponto importante é que as tarefas proporcionam um nível de clareza e especificidade
que ajuda a evitar ambiguidades. Em vez de dar uma instrução vaga, como ’melhorar o site’,
podemos definir tarefas detalhadas como ’melhorar o tempo de carregamento da página inicial’
ou ’implementar um novo sistema de navegação’. Isso não só orienta melhor os agentes sobre
o que precisa ser feito, mas também facilita a medição do progresso e do sucesso de cada
atividade.
Além disso, as tarefas no CrewAI são configuradas com expectativas claras de saída e
critérios de sucesso. Isso significa que cada tarefa tem um resultado esperado bem definido, o
que ajuda a garantir que os agentes estão entregando exatamente o que foi solicitado. Por
exemplo, uma tarefa pode especificar que o resultado final deve ser um relatório de 10 páginas
ou uma lista de 20 candidatos qualificados. Essa clareza ajuda a alinhar as expectativas e a
garantir que o trabalho realizado esteja de acordo com os objetivos do projeto.
Uma tarefa no CrewAI é como um roteiro que o agente deve seguir. Ela define claramente
CAPÍTULO 4. TAREFAS: DIVIDIR PARA CONQUISTAR
79
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 81

AGENTES INTELIGENTES
o que o agente deve fazer e o que é esperado como resultado. Por fim, a flexibilidade das
tarefas no CrewAI permite que elas sejam adaptadas conforme necessário. À medida que o
projeto avança e novas informações surgem, as tarefas podem ser ajustadas para refletir as
mudanças nas prioridades ou nas condições do projeto. Essa capacidade de adaptação é
crucial para garantir que a equipe de agentes possa responder rapidamente a novos desafios
e oportunidades, mantendo-se sempre alinhada com os objetivos principais do projeto.
4.1
TASK + AGENTS
No CrewAI, todo agente é designado para uma task. Isso significa que, antes de criar
uma tarefa no CrewAI, você deve criar o agente. Isso ocorre porque, na declaração da task,
espera-se a especificação de um agente. Vamos relembrar o agente ’Pesquisador’:
Agente Pesquisador
# Configurando o agente
para usar a ferramenta
pesquisador = Agent(
role=’Pesquisador ’,
backstory=f’Você, como
pesquisador de conteúdo na web ...’,
goal=’Coletar e analisar ...’,
verbose=True ,
llm=gpt_4_mini ,
max_iter =15,
max_rpm =30,
memory=True ,
function_calling_llm =gpt_4 ,
max_execution_time =120 ,
# tempo máximo em segundos
allow_code_execution =True ,
tools =[ ferramenta_pesquisa ]
)
Agora, vamos criar uma task específica para este agente:
pesquisa_tendencias_task = Task(
agent=pesquisador
)
Claro, a task ‘pesquisa_tendencias_task‘ ainda não tem descrições detalhadas sobre o
que a tarefa realmente trata, para que o agente tenha um roteiro claro a seguir. Detalharemos
a tarefa mais adiante, mas uma coisa é muito importante você ter em mente.
Você pode se perguntar por que não criar a definição da tarefa dentro do agente. Embora
CAPÍTULO 4. TAREFAS: DIVIDIR PARA CONQUISTAR
80
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 82

AGENTES INTELIGENTES
a codificação das tasks pudesse ser construída diretamente dentro da codificação do agente,
isso aniquilaria a possibilidade de outro agente desempenhar a task especificada. Portanto, é
importante transformar o agente e a task em módulos separados. Essa abordagem modular
permite que diferentes agentes sejam designados para a mesma task, promovendo flexibilidade
e reutilização no sistema.
4.2
DESCREVENDO A TAREFA
No CrewAI, a ’description’ é o coração de uma task. Ela diz exatamente o que precisa ser
feito, como e por quê. Pensar em uma ’description’ é como escrever o roteiro de um filme -
você precisa ser claro, conciso e detalhado o suficiente para que ninguém se perca no meio
do caminho.
Uma ’description’ bem escrita garante que o agente entenda perfeitamente os objetivos
principais, os passos a seguir e qualquer requisito ou condição especial. Isso evita confusões
e facilita medir o progresso e o sucesso da tarefa. Vamos ver como isso fica na prática
adicionando uma descrição à nossa task ‘pesquisa_tendencias_task‘:
pesquisa_tendencias_task = Task(
agent=pesquisador ,
description=’Pesquise as tendências
mais
recentes em tecnologia da informação.
Utilize
fontes
como blogs , artigos
científicos ,
sites de notícias e redes
sociais
para
compilar um relatório
detalhado
que
descreva as
principais
inovações e discussões na área.’
)
Neste exemplo, a ‘description‘ da tarefa ‘pesquisa_tendencias_task‘ especifica claramente
o que o agente deve fazer: pesquisar as tendências mais recentes em tecnologia da informação
utilizando várias fontes online. A descrição detalhada fornece ao agente todas as informações
necessárias para executar a tarefa de maneira eficaz e eficiente, garantindo que ele saiba
exatamente o que fazer e como proceder.
4.3
ATENDENDO AS EXPECTATIVAS
Vamos falar de uma parte super importante das tasks no CrewAI: o expected_output.
Esse parâmetro é essencial porque define exatamente o que precisa ser entregue no final da
CAPÍTULO 4. TAREFAS: DIVIDIR PARA CONQUISTAR
81
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 83

AGENTES INTELIGENTES
tarefa. É como um objetivo claro para o agente saber se está no caminho certo.
O expected_output funciona como um acordo entre você e o agente. Ele especifica
exatamente o que deve ser entregue ao final da execução da tarefa. Isso é crucial para garantir
que os agentes estejam alinhados com os objetivos do projeto e que o resultado final esteja
de acordo com o que foi solicitado.
Vamos dizer ao nosso agente ’Pesquisador’ que compile um relatório detalhado sobre as
tendências mais recentes em tecnologia da informação. Podemos definir o expected_output
dessa task assim:
pesquisa_tendencias_task = Task(
agent=pesquisador ,
description=’Pesquise as tendências
mais
recentes em tecnologia da informação.
Utilize
fontes
como blogs , artigos
científicos ,
sites de notícias e redes
sociais
para
compilar um relatório
detalhado
que
descreva as
principais
inovações e discussões na área.’,
expected_output =’Um relatório de 10 páginas que
destaca as principais
tendências em tecnologia da informação,
incluindo
pelo
menos 3 inovações emergentes e 5 referências
de fontes
variadas.’
)
Nesse exemplo, o expected_output está claramente definido como um relatório de 10
páginas, com requisitos específicos sobre o conteúdo e as fontes. Isso ajuda o agente a
entender exatamente o que precisa ser feito e fornece um critério claro para você avaliar o
trabalho realizado.
Além de trazer clareza, o expected_output também facilita a medição do progresso e do
sucesso da tarefa. Com critérios bem definidos, fica mais fácil identificar se a tarefa está no
caminho certo e se os resultados estão alinhados com os objetivos do projeto.
Outra vantagem de definir um expected_output claro é que ele pode ajudar a identificar
problemas antecipadamente. Se o agente não está conseguindo atingir o resultado esperado,
você pode intervir e ajustar a tarefa ou fornecer suporte adicional. Isso garante que o projeto
continue avançando de maneira eficiente.
4.4
FERRAMENTAS NAS TAREFAS? POR QUÊ?
Pode parecer contraditório usar uma ferramenta diretamente na tarefa, mas na verdade,
isso garante alguns pontos cruciais:
CAPÍTULO 4. TAREFAS: DIVIDIR PARA CONQUISTAR
82
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 84

AGENTES INTELIGENTES
1. Qualquer agente designado para a tarefa deve obrigatoriamente usar a ferramenta
especificada.
2. Generaliza o uso da ferramenta, permitindo que a tarefa seja desempenhada por qual-
quer agente, desde que utilize a ferramenta determinada.
Ferramentas no agente, por outro lado, são aquelas que ele pode utilizar para cumprir
qualquer tarefa atribuída. Estas ferramentas são configuradas com o próprio agente e refletem
suas habilidades e capacidades gerais.
Ordem de Prioridade
• Ferramenta na Tarefa: Tem prioridade quando definida diretamente na tarefa, pois pode
exigir ferramentas especializadas ou configurações específicas para ser completada
adequadamente.
• Ferramenta no Agente: Usada de forma mais genérica, se aplica a múltiplas tarefas
que o agente pode realizar. Se a tarefa não especificar uma ferramenta, o agente
utilizará suas ferramentas gerais.
Fluxo de Execução
Quando um agente é instruído a executar uma tarefa, o fluxo típico de verificação de
ferramentas é:
1. Verificar Ferramentas da Tarefa: Primeiro, verifica se a tarefa tem ferramentas especí-
ficas atribuídas a ela.
2. Verificar Ferramentas do Agente: Se a tarefa não especificar nenhuma ferramenta,
então o agente usará suas ferramentas predefinidas.
Vamos ver como isso funciona na prática com um exemplo:
pesquisa_tendencias_task = Task(
agent=pesquisador ,
description=’Pesquise as tendências
mais
recentes em tecnologia da informação.
Utilize
fontes
como blogs , artigos
científicos ,
sites de notícias e redes
sociais
para
compilar um relatório
detalhado
que
descreva as
principais
inovações e discussões na área.’,
expected_output =’Um relatório de 10 páginas que
destaca as principais
tendências em tecnologia da informação,
incluindo
pelo
menos 3 inovações emergentes e 5 referências
de fontes
variadas.’,
CAPÍTULO 4. TAREFAS: DIVIDIR PARA CONQUISTAR
83
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 85

AGENTES INTELIGENTES
tools =[ ferramenta_pesquisa ]
)
Neste exemplo, a tool ferramenta_pesquisa é especificada diretamente na tarefa. Isso
significa que, ao executar esta tarefa, o agente ’Pesquisador’ usará ferramenta_pesquisa
para coletar as informações necessárias.
Agora, vamos ilustrar um cenário onde tanto a tarefa quanto o agente têm ferramentas
definidas. Imagine que nosso agente ’Pesquisador’ tem uma ferramenta padrão de pesquisa
na web, mas uma tarefa específica requer uma ferramenta para acessar uma base de dados
acadêmica:
# Ferramenta
padrão do agente
pesquisador = Agent(
role=’Pesquisador ’,
backstory=f’Você, como
pesquisador de conteúdo na web ...’,
goal=’Coletar e analisar ...’,
verbose=True ,
llm=gpt_4_mini ,
max_iter =15,
max_rpm =30,
memory=True ,
function_calling_llm =gpt_4 ,
max_execution_time =120 ,
# tempo máximo em segundos
allow_code_execution =True ,
tools =[ ferramenta_pesquisa_web ]
)
CAPÍTULO 4. TAREFAS: DIVIDIR PARA CONQUISTAR
84
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 86

AGENTES INTELIGENTES
# Ferramenta
específica da tarefa
pesquisa_academica_task = Task(
agent=pesquisador ,
description=’Pesquise
artigos
acadêmicos
recentes
sobre IA.’,
expected_output =’Uma lista de 10 artigos
acadêmicos
sobre IA publicados
nos últimos 2 anos.’,
tools =[ ferramenta_pesquisa_academica ]
)
Neste cenário, ao executar a tarefa pesquisa_academica_task,
o agente usará ferramenta_pesquisa_academica em vez de sua ferramenta padrão
ferramenta_pesquisa_web, pois a ferramenta especificada na tarefa tem prioridade.
O parâmetro tools nas tarefas permite especificar exatamente quais ferramentas o agente
deve usar, garantindo que ele tenha os recursos necessários para completar a tarefa de ma-
neira eficaz. Quando tanto a tarefa quanto o agente têm ferramentas definidas, as ferramentas
da tarefa têm prioridade, proporcionando flexibilidade e precisão na execução das tarefas.
O uso de ferramentas específicas diretamente nas tarefas é incrivelmente poderoso
porque permite uma adaptação precisa às necessidades de cada tarefa individual. Isso
significa que podemos equipar nossos agentes com as melhores ferramentas disponíveis para
um trabalho específico, sem depender exclusivamente das capacidades gerais do agente.
Essa abordagem aumenta significativamente a eficiência e a eficácia das operações, pois
garante que cada tarefa seja realizada com os recursos mais adequados. Além disso, ao
forçar o uso de ferramentas específicas nas tarefas, asseguramos que os resultados sejam
consistentes e de alta qualidade, independentemente de qual agente esteja executando a
tarefa.
Outro aspecto poderoso dessa flexibilidade é a capacidade de generalização. Ao definir
ferramentas diretamente nas tarefas, permitimos que qualquer agente possa executar a tarefa
desde que siga as especificações da ferramenta requerida. Isso não só promove a reutilização
de tarefas bem definidas, mas também facilita a escalabilidade do sistema, permitindo que
novos agentes sejam rapidamente integrados ao fluxo de trabalho sem necessidade de
reconfiguração extensa. Em suma, essa abordagem modular e específica melhora tanto a
qualidade do trabalho quanto a adaptabilidade do sistema às mudanças e expansões.
CAPÍTULO 4. TAREFAS: DIVIDIR PARA CONQUISTAR
85
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 87

AGENTES INTELIGENTES
4.5
EM PARALELO. MAIS RÁPIDO
Em sistemas de multiagentes, a execução assíncrona é de extrema importância, pois
permite que tarefas sejam realizadas de maneira mais eficiente e responsiva. Imagine um
cenário em que múltiplos agentes trabalham em um projeto de desenvolvimento de software.
Enquanto um agente Programador está ocupado escrevendo e testando código para um
novo recurso, outro agente Designer cria interfaces gráficas baseadas nos requisitos do
projeto. Com a execução assíncrona, esses agentes podem operar simultaneamente, sem a
necessidade de esperar que um termine sua tarefa antes de iniciar a próxima. Isso resulta em
um ciclo de desenvolvimento mais rápido e produtivo.
Considere, por exemplo, um projeto onde o agente Pesquisador é responsável por identifi-
car as últimas tendências em uma área tecnológica específica, enquanto o agente Analista
de Mercado compila essas tendências em relatórios detalhados para apresentação à equipe
de marketing. Se esses agentes operarem de forma síncrona, o tempo de espera acumulado
para cada tarefa pode levar a atrasos significativos na entrega dos relatórios. No entanto, com
a execução assíncrona, o Pesquisador pode continuar a coletar e analisar dados enquanto o
Analista de Mercado começa a elaborar os relatórios baseados nas informações preliminares.
Isso melhora a eficiência do projeto, permitindo uma entrega contínua de insights estratégicos.
Outro exemplo pode ser encontrado em um projeto de gerenciamento de redes sociais.
Enquanto um agente Pesquisador de Tendências identifica os tópicos mais discutidos e
relevantes nas redes, um agente Criador de Conteúdo desenvolve postagens e campanhas
baseadas nesses tópicos. Com a execução assíncrona, o Criador de Conteúdo começa a
preparar o material assim que as primeiras tendências são identificadas, sem esperar pela
conclusão total da pesquisa. Isso resulta em uma presença online mais dinâmica e adaptável,
mantendo a relevância e o engajamento do público.
CAPÍTULO 4. TAREFAS: DIVIDIR PARA CONQUISTAR
86
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 88

AGENTES INTELIGENTES
Figura 4.1: Agentes trabalhando em paralelo
Aqui está um exemplo de código que demonstra o uso do parâmetro async_execution:
pesquisa_tendencias_task = Task(
agent=pesquisador ,
description=’Pesquise as tendências
mais
recentes em tecnologia da informação.
Utilize
fontes
como blogs , artigos
científicos ,
sites de notícias e redes
sociais
para
compilar um relatório
detalhado
que
descreva as
principais
inovações e discussões na área.’,
expected_output =’Um relatório de 10 páginas que
destaca as principais
tendências em tecnologia da informação,
incluindo
pelo
menos 3 inovações emergentes e 5 referências
de fontes
variadas.’,
tools =[ ferramenta_pesquisa ],
async_execution =True
)
Neste exemplo, a tarefa pesquisa_tendencias_task está configurada para execução as-
síncrona. Isso significa que o agente ’Pesquisador’ pode executar essa tarefa simultaneamente
com outras tarefas, melhorando a eficiência e a velocidade de produção de resultados.
CAPÍTULO 4. TAREFAS: DIVIDIR PARA CONQUISTAR
87
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 89

AGENTES INTELIGENTES
4.6
AÇÃO PÓS-TAREFA: CALLBACK
Assim como o callback no agente, o parâmetro callback desempenha um papel crucial ao
permitir que ações adicionais sejam executadas após a conclusão de uma tarefa. O callback é
uma função ou objeto que é executado assim que a tarefa é finalizada, permitindo que você
implemente lógica adicional, como manipulação de resultados, notificações ou até mesmo o
início de novas tarefas.
Imagine que você tem uma tarefa em que um agente Pesquisador coleta dados e gera
um relatório. Após a conclusão desta tarefa, você pode querer que um agente Escritor
seja notificado para que ele possa começar a redigir um artigo baseado nesse relatório. O
parâmetro callback torna isso possível, automatizando o fluxo de trabalho e garantindo uma
transição suave entre tarefas consecutivas.
Vamos considerar um exemplo onde usamos o callback para notificar um agente Escritor
após a conclusão de uma tarefa de pesquisa:
# Função de callback
para
notificar o Escritor
def
notificar_escritor (result):
print(f"Tarefa de pesquisa
concluída. Resultados: {result}")
# Aqui
podemos
iniciar
uma nova
tarefa ou
# executar
outra lógica
pesquisa_tendencias_task = Task(
agent=pesquisador ,
description=’Pesquise as tendências
mais
recentes em tecnologia da informação.
Utilize
fontes
como blogs , artigos
científicos ,
sites de notícias e redes
sociais
para
compilar um relatório
detalhado
que
descreva as
principais
inovações e discussões na área.’,
expected_output =’Um relatório de 10 páginas que
destaca as principais
tendências em tecnologia da informação,
incluindo
pelo
menos 3 inovações emergentes e 5 referências
de fontes
variadas.’,
tools =[ ferramenta_pesquisa ],
async_execution =True ,
callback= notificar_escritor
)
Neste exemplo, a função notificar_escritor é chamada assim que a tarefa
pesquisa_tendencias_task é concluída. A função de callback recebe o resultado da tarefa
como parâmetro, permitindo que você manipule esses dados ou execute ações adicionais,
CAPÍTULO 4. TAREFAS: DIVIDIR PARA CONQUISTAR
88
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 90

AGENTES INTELIGENTES
como iniciar novas tarefas ou enviar notificações.
O uso de callback é poderoso porque adiciona uma camada de flexibilidade e controle ao
seu sistema de multiagentes. Você pode facilmente orquestrar fluxos de trabalho complexos,
garantir que os dados sejam processados de forma adequada e automatizar a sequência de
tarefas sem intervenção manual. Isso não só melhora a eficiência, mas também permite que
você crie sistemas mais robustos e adaptáveis.
4.7
CONTEXTO DA TAREFA: CONTEXT
O parâmetro context no CrewAI é fundamental para fornecer o contexto necessário ou os
dados de entrada para a execução de uma tarefa. Este parâmetro é uma lista de instâncias de
Task que fornecem informações adicionais ou resultados prévios que podem ser essenciais
para a realização da tarefa atual. Isso permite que as tarefas sejam executadas com base em
dados ou resultados obtidos de outras tarefas, criando um fluxo de trabalho interdependente e
coordenado.
Imagine um cenário onde um agente Pesquisador coleta dados iniciais sobre tendências
tecnológicas, e outro agente Analista deve utilizar esses dados para aprofundar a análise e
gerar insights mais detalhados. O parâmetro context permite que a tarefa do Analista receba
como entrada os dados coletados pelo Pesquisador, garantindo que a análise seja baseada
nas informações mais recentes e relevantes.
Vamos considerar um exemplo onde usamos o parâmetro context para fornecer dados de
uma tarefa de pesquisa para uma tarefa de análise:
# Tarefa de pesquisa
inicial
pesquisa_tendencias_task = Task(
agent=pesquisador ,
description=’Pesquise as tendências
mais
recentes em tecnologia da informação.
Utilize
fontes
como blogs , artigos
científicos ,
sites de notícias e redes
sociais
para
compilar um relatório
detalhado
que
descreva as
principais
inovações e discussões na área.’,
expected_output =’Um relatório de 10 páginas que
destaca as principais
tendências em tecnologia da informação,
incluindo
pelo
menos 3 inovações emergentes e 5 referências
de fontes
variadas.’,
tools =[ ferramenta_pesquisa ],
async_execution =True
)
CAPÍTULO 4. TAREFAS: DIVIDIR PARA CONQUISTAR
89
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 91

AGENTES INTELIGENTES
# Função de callback
para
notificar o Analista
def
notificar_analista (result):
print(f"Tarefa de pesquisa
concluída. Resultados: {result}")
# Aqui
podemos
iniciar
uma nova
tarefa ou
executar
outra lógica
# Tarefa de análise que usa o contexto da tarefa de pesquisa
analise_tendencias_task = Task(
agent=analista ,
description=’Analise os dados
coletados
sobre
as tendências
mais
recentes
em tecnologia da informação. Gere
insights
detalhados e recomendações
estratégicas
baseadas
nos dados
fornecidos.’,
expected_output =’Um relatório de análise de 15 páginas
com
insights
detalhados e recomendações estratégicas.’,
tools =[ ferramenta_analise ],
async_execution =True ,
context =[ pesquisa_tendencias_task ],
callback= notificar_analista
)
Neste exemplo, a tarefa analise_tendencias_task recebe o contexto da tarefa
pesquisa_tendencias_task, permitindo que o agente ’Analista’ utilize os dados coleta-
dos pelo agente ’Pesquisador’ para realizar uma análise detalhada. A função de callback
notificar_analista é chamada após a conclusão da tarefa, possibilitando a execução de
ações adicionais com base nos resultados da análise.
Ao fornecer tarefas de contexto ou dados de entrada para a execução de uma tarefa, você
garante que cada etapa do processo esteja informada pelos resultados das etapas anteriores,
melhorando a qualidade e a relevância das saídas finais. Isso torna o sistema de multiagentes
mais eficiente e capaz de lidar com tarefas complexas de maneira estruturada e integrada.
4.8
ARMAZENAMENTO DE SAÍDA: OUTPUT_FILE
Imagine um cenário onde um agente Pesquisador gera relatórios detalhados de tendências
tecnológicas. Esses relatórios precisam ser armazenados para serem revisados posterior-
mente ou utilizados por outros agentes em tarefas subsequentes. O parâmetro output_file
permite que esses relatórios sejam salvos em um local específico, garantindo que o fluxo de
trabalho continue de maneira eficiente e que os dados estejam sempre disponíveis quando
necessários.
CAPÍTULO 4. TAREFAS: DIVIDIR PARA CONQUISTAR
90
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 92

AGENTES INTELIGENTES
O parâmetro output_file no CrewAI permite especificar um caminho de arquivo onde
a saída da tarefa será armazenada. Este parâmetro é crucial quando é necessário salvar
os resultados da tarefa em um formato persistente e acessível para futuras referências ou
análises. A definição do output_file garante que os dados gerados pela tarefa não sejam
apenas temporários, mas fiquem armazenados de maneira organizada e facilmente acessível.
Vamos considerar um exemplo onde usamos o parâmetro output_file para armazenar o
resultado de uma tarefa de geração de relatório:
# Tarefa de geração de relatório com
armazenamento de saída
gerar_relatorio_task = Task(
agent=pesquisador ,
description=’Gere um relatório
detalhado
sobre as
últimas
tendências em tecnologia da informação.
O relatório deve
incluir análises e previsões baseadas
nos dados
coletados de várias
fontes.’,
expected_output =’Um relatório de 20 páginas com análises
detalhadas e previsões.’,
tools =[ ferramenta_relatorio ],
async_execution =True ,
output_file=’relatorios/ tendencias_tecnologicas_2024 .txt’
)
Neste exemplo, a tarefa gerar_relatorio_task utiliza o parâmetro output_file para
especificar que o relatório gerado será salvo no caminho
’relatorios/tendencias_tecnologicas_2024.txt’. Isso assegura que o resultado da
tarefa seja armazenado de maneira organizada, facilitando o acesso e a utilização futura dos
dados.
O uso do parâmetro output_file é essencial para garantir que os resultados das tarefas
sejam preservados e possam ser utilizados de maneira eficaz em etapas posteriores do projeto.
Ao especificar um caminho de arquivo, você assegura que os dados não se percam e que todo
o esforço realizado na execução da tarefa resulte em uma saída tangível e acessível. Isso
melhora a gestão de dados e a continuidade do fluxo de trabalho no sistema de multiagentes.
Agora vamos entrar em um tema um pouco mais avançado, especialmente para quem já
está familiarizado com desenvolvimento usando Orientação a Objetos. Se esse não é o seu
caso, relaxa! Sinta-se à vontade para pular esta seção se achar necessário. Vamos nessa!
CAPÍTULO 4. TAREFAS: DIVIDIR PARA CONQUISTAR
91
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 93

AGENTES INTELIGENTES
4.9
FORMATANDO A SAÍDA COM PYDANTIC
Imagine que você está organizando uma grande conferência e precisa garantir que cada
palestrante tenha a sala certa, os equipamentos adequados e que todos os detalhes estejam
no lugar. Pydantic é como aquele organizador meticuloso que verifica cada detalhe para
garantir que tudo esteja correto e que nada dê errado.
Pydantic é uma biblioteca poderosa no Python que facilita a validação e a conversão de
dados entre diferentes tipos. No mundo do desenvolvimento de software, especialmente em
APIs, a precisão dos dados é crucial. Precisamos garantir que os dados que recebemos e
enviamos estejam no formato esperado e sigam as regras estabelecidas, e é aqui que Pydantic
brilha.
Principais Características do Pydantic
• Modelos Baseados em Tipos: Pydantic utiliza a tipagem do Python (type hints) para
definir a estrutura dos dados. Isso permite que o Pydantic valide os dados automatica-
mente, garantindo que estejam no formato correto.
• Validação Automática: Quando você cria uma instância de um modelo Pydantic, ele
valida automaticamente os dados recebidos. Se os dados não estiverem corretos, uma
exceção será levantada, indicando exatamente o que está errado.
• Conversão de Dados: Pydantic pode converter automaticamente os tipos de dados.
Por exemplo, se você definir um campo como int e passar uma string que pode ser
convertida para int, Pydantic fará essa conversão para você.
• Suporte a Campos Opcionais: É possível definir campos opcionais e fornecer valores
padrão para esses campos, permitindo maior flexibilidade na modelagem dos dados.
• Desempenho: Pydantic é muito rápido, uma vez que é escrito em Python puro e usa
validação baseada em tipagem, garantindo eficiência na validação e conversão de
dados.
Utilizando Pydantic para Modelar Saídas
Agora que sabemos das principais características do Pydantic, vamos ver como podemos
utilizá-lo para formatar a saída das tarefas dos nossos agentes no CrewAI. A ideia é garantir
que a saída da tarefa siga um formato consistente e válido, facilitando a integração com outros
sistemas e a análise dos resultados.
CAPÍTULO 4. TAREFAS: DIVIDIR PARA CONQUISTAR
92
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 94

AGENTES INTELIGENTES
Vamos começar criando um modelo Pydantic para a saída de uma tarefa de pesquisa de
mercado realizada pelo nosso agente Pesquisador.
from
pydantic
import
BaseModel , Field
from
typing
import
List
class
MarketResearchOutput (BaseModel):
title: str
summary: str
insights: List[str] = Field (... , example =["Insight 1",
"Insight 2"])
recommendations : List[str] = Field (... , example=
["Recommendation 1", " Recommendation 2"])
data_source: str
# Exemplo de uso do modelo
Pydantic
output_data = {
"title": "Análise de Mercado de IA",
"summary": "Uma visão geral do mercado de IA em 2024.",
"insights": ["Crescimento
significativo em saúde", "Aumento no
uso de IA em finanças"],
" recommendations ": ["Investir em IA para saúde", "Monitorar IA
em finanças"],
"data_source": "Pesquisa
online"
}
output = MarketResearchOutput (** output_data)
print(output.json(indent =2))
Neste exemplo, criamos um modelo chamado MarketResearchOutput que define a
estrutura dos dados de saída da tarefa de pesquisa de mercado. Cada campo tem um tipo
específico e algumas validações adicionais para garantir que os dados estejam no formato
correto. O uso de ’**’ (dois asteriscos) em Python serve para desempacotar dicionários. Ele
permite passar o conteúdo de um dicionário como argumentos nomeados para uma função.
Isso pode ser útil em diversas situações, como quando você tem um dicionário de argumentos
e deseja passá-los para uma função de forma conveniente.
CAPÍTULO 4. TAREFAS: DIVIDIR PARA CONQUISTAR
93
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 95

AGENTES INTELIGENTES
Integrando o Modelo Pydantic com o CrewAI
Vamos agora integrar esse modelo de saída com nosso agente Pesquisador no CrewAI.
Isso garantirá que toda saída gerada pelo agente siga o formato definido pelo modelo Pydantic.
from
crewai
import Agent , Task
from
crewai_tools
import
SerperDevTool
from
pydantic
import
BaseModel , Field
from
typing
import
List
# Instanciando a ferramenta de pesquisa na web
ferramenta_pesquisa = SerperDevTool (api_key=’SUA_API_KEY_AQUI ’)
class
MarketResearchOutput (BaseModel):
title: str
summary: str
insights: List[str] = Field (... , example =["Insight 1",
"Insight 2"])
recommendations : List[str] = Field (... , example=
["Recommendation 1", " Recommendation 2"])
data_source: str
# Definindo o agente
Pesquisador
com a ferramenta de pesquisa
pesquisador = Agent(
role=’Pesquisador ’,
backstory=’Você, como
pesquisador de conteúdo na web ...’,
goal=’Coletar e analisar
informações relevantes
sobre
o mercado e fornecer
relatórios
detalhados.’,
verbose=True ,
llm=gpt_4_mini ,
max_iter =15,
max_rpm =30,
memory=True ,
function_calling_llm =gpt_4 ,
tools =[ ferramenta_pesquisa ],
allow_code_execution =True
)
CAPÍTULO 4. TAREFAS: DIVIDIR PARA CONQUISTAR
94
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 96

AGENTES INTELIGENTES
# Definindo a tarefa de pesquisa de mercado
pesquisa_mercado_task = Task(
description="Realizar
uma análise
detalhada do mercado
de IA em 2024.",
expected_output =MarketResearchOutput ,
agent=pesquisador
)
# Simulando a execução da tarefa
output_data = {
"title": "Análise de Mercado de IA",
"summary": "Uma visão geral do mercado de IA em 2024.",
"insights": ["Crescimento
significativo em saúde", "Aumento no
uso de IA em finanças"],
" recommendations ": ["Investir em IA para saúde", "Monitorar IA
em finanças"],
"data_source": "Pesquisa
online"
}
Ao definir a saída esperada da tarefa como MarketResearchOutput, garantimos que a
saída gerada pelo agente seja validada automaticamente pelo Pydantic. Isso não só melhora a
consistência dos dados, mas também facilita a integração com outros sistemas que dependem
desses dados para tomar decisões.
E é isso aí! Com Pydantic, você pode garantir que a saída dos seus agentes no CrewAI es-
teja sempre no formato correto, validada e pronta para ser usada. No próximo capítulo, vamos
explorar como configurar e gerenciar as tarefas que nossos agentes realizarão, garantindo
que cada tarefa seja executada com precisão e eficiência. Isso é muito bacana!
4.10
ESTRUTURAÇÃO DE SAÍDA: OUTPUT_JSON
O parâmetro output_json no CrewAI é vital para garantir que a saída das tarefas seja
estruturada e validada de maneira consistente. Utilizando um modelo Pydantic, este parâmetro
permite que você defina exatamente como os dados de saída devem ser formatados em
JSON, assegurando que todos os resultados sigam um padrão pré-estabelecido. Isso é
particularmente útil em sistemas onde a integridade dos dados e a compatibilidade com outros
componentes são essenciais.
Vamos imaginar um projeto onde múltiplos agentes geram relatórios que precisam ser
combinados e analisados em conjunto. Sem uma estrutura de saída consistente, essa tarefa
CAPÍTULO 4. TAREFAS: DIVIDIR PARA CONQUISTAR
95
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 97

AGENTES INTELIGENTES
pode se tornar caótica e suscetível a erros. O output_json resolve esse problema ao garantir
que cada pedaço de saída esteja conformemente estruturado, permitindo que os dados sejam
facilmente manipulados e integrados.
Aqui está um exemplo prático de como usar o parâmetro output_json para uma tarefa que
analisa tendências de mercado e gera uma saída JSON estruturada:
from
pydantic
import
BaseModel
from
typing
import
List
# Definindo o modelo
Pydantic
para a saída JSON
class
AnaliseMercadoOutput (BaseModel):
principais_tendencias : List[str]
analise_detalhada : str
recomendacoes: List[str]
# Tarefa de análise de mercado
com saída JSON
estruturada
analise_mercado_task = Task(
agent=analista ,
description=’Analise os dados
coletados
sobre as
tendências
mais
recentes
no mercado e forneça uma análise
detalhada
com
recomendações estratégicas.’,
expected_output =’Um relatório JSON com as principais
tendências , análise
detalhada e recomendações.’,
tools =[ ferramenta_analise ],
async_execution =True ,
output_json= AnaliseMercadoOutput
)
Neste exemplo, a tarefa analise_mercado_task usa o parâmetro output_json para ga-
rantir que a saída siga a estrutura definida pelo modelo AnaliseMercadoOutput. Isso garante
que os dados estejam sempre formatados corretamente e possam ser facilmente processados
por outros sistemas ou agentes.
A vantagem de usar o output_json é que ele oferece uma maneira robusta de validar e
padronizar os resultados das tarefas. Isso não só melhora a integridade dos dados, mas tam-
bém facilita a integração com outros componentes do sistema, sejam eles agentes adicionais,
sistemas de armazenamento de dados ou ferramentas de análise. Com uma estrutura de saída
bem definida, você pode garantir que os dados sejam úteis e utilizáveis, independentemente
de como e onde eles são gerados.
CAPÍTULO 4. TAREFAS: DIVIDIR PARA CONQUISTAR
96
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 98

AGENTES INTELIGENTES
4.11
CONFIGURANDO TAREFAS
Assim como a classe Agent, a classe Task tem o atributo config que é um dicionário que
contém parâmetros específicos de configuração para uma tarefa. Ele permite que você defina
várias configurações de uma só vez, organizando todas as especificações necessárias de
forma clara e concisa. Utilizar o config facilita a manutenção e a reutilização das configurações
em diferentes tarefas, tornando seu código mais limpo e gerenciável.
Por que usar config?
Usar o config tem várias vantagens:
• Organização: Agrupar todas as configurações de uma tarefa em um único dicionário
facilita a leitura e a manutenção do código.
• Reutilização: Você pode facilmente reutilizar as mesmas configurações em diferentes
tarefas, copiando e modificando o dicionário config conforme necessário.
• Flexibilidade: Adicionar ou modificar configurações é simples, permitindo ajustes
rápidos e eficientes nas tarefas sem precisar alterar várias linhas de código.
Como usar config?
Vamos ver como definir e usar o config para uma tarefa. Suponha que temos uma tarefa
que envolve uma análise detalhada de mercado. Podemos definir várias configurações, como
a descrição da tarefa, a saída esperada, o agente responsável e outros parâmetros relevantes.
# Configurando a tarefa
usando o dicionário config
task_config = {
"description": "Realizar
uma análise
detalhada do
mercado de IA em 2024.",
" expected_output ": MarketResearchOutput ,
"agent": pesquisador ,
" async_execution ": False ,
"output_file": " market_research_report .json"
}
CAPÍTULO 4. TAREFAS: DIVIDIR PARA CONQUISTAR
97
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 99

AGENTES INTELIGENTES
# Definindo a tarefa de pesquisa de mercado
com config
pesquisa_mercado_task = Task(config=task_config)
Neste exemplo, usamos o dicionário task_config para definir todas as configurações
da tarefa de uma só vez. Isso inclui a descrição da tarefa, o modelo Pydantic para a saída
esperada, o agente responsável, a execução síncrona ou assíncrona, e o arquivo de saída.
Uma grande vantagem quando as opções de criação das tarefas vem de base de dados ou de
requisições externas.
Utilizar o config para configurar tarefas no CrewAI não só torna seu código mais organi-
zado, mas também aumenta a eficiência no desenvolvimento e manutenção das tarefas. No
próximo capítulo, vamos explorar como definir e gerenciar as interações entre os agentes para
garantir que eles trabalhem juntos de maneira eficiente e colaborativa.
4.12
FINALIZANDO AS TAREFAS
Falamos muito da tarefa do agente ’pesquisador’. Aqui agora vai para registro como
ficariam as tarefas dos agentes ’coordenador’ e ’escritor’:
# Definindo a tarefa do Coordenador
coordenar_projeto_task = Task(
agent=coordenador ,
description=’Supervisione o andamento do projeto , integrando
os resultados
das
tarefas
realizadas
pelos
diferentes
agentes. Certifique -se de que todas as partes do projeto
estejam
alinhadas e funcionando de forma
coesa.
Relate
qualquer
problema
encontrado e proponha
soluções para
melhorar a eficiência do projeto.’,
expected_output =’Um relatório
detalhado
sobre o progresso do
projeto , incluindo
problemas
identificados e soluções
propostas.’,
)
# Definindo a tarefa do Escritor
criar_conteudo_task = Task(
agent=escritor ,
description=’Crie
conteúdo escrito
baseado
nos dados e análises
fornecidas
pelo
Coordenador
e outros
agentes. O conteúdo deve ser claro ,
envolvente e informativo , abordando os principais
CAPÍTULO 4. TAREFAS: DIVIDIR PARA CONQUISTAR
98
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 100

AGENTES INTELIGENTES
pontos e conclusões do projeto.’,
expected_output =’Um artigo de 1500
palavras
sobre os
resultados e conclusões do projeto , pronto
para
publicação.’,
tools =[ ferramenta_pesquisa ],
async_execution =True
)
Próximos passos
Neste capítulo, exploramos em profundidade como configurar e personalizar tarefas no
CrewAI, utilizando uma variedade de atributos e configurações para garantir que nossos
agentes realizem suas atividades de maneira eficiente e precisa. Vimos como o uso de
atributos como description, expected_output, agent, e especialmente o config, pode
transformar a maneira como definimos e gerenciamos nossas tarefas, proporcionando clareza,
flexibilidade e organização ao nosso código.
Através de exemplos práticos, demonstramos como a integração de modelos Pydantic
pode garantir que a saída das tarefas esteja sempre no formato correto e validada automati-
camente. Esta abordagem não só melhora a confiabilidade dos dados que nossos agentes
produzem, mas também facilita a integração com outros sistemas e a análise posterior dos
resultados. A capacidade de validar e converter dados automaticamente é uma poderosa
adição ao arsenal de qualquer desenvolvedor, especialmente em projetos complexos onde a
precisão é crucial.
Agora que temos uma compreensão sólida de como configurar e gerenciar agentes e
tarefas no CrewAI, estamos prontos para avançar para o próximo nível: entender como os
processos e as equipes (crews) são criados e funcionam. No próximo capítulo, vamos explorar
como orquestrar múltiplos agentes trabalhando juntos de maneira coordenada e eficiente,
utilizando processos e equipes bem definidos. Isso nos permitirá criar sistemas ainda mais
robustos e capazes de resolver problemas complexos de forma colaborativa.
CAPÍTULO 4. TAREFAS: DIVIDIR PARA CONQUISTAR
99
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 101

AGENTES INTELIGENTES
CAPÍTULO 5
Nossa tripulação em processo de
criação
Pense em um navio navegando pelos vastos oceanos. Ele não é conduzido apenas
pelo capitão, mas sim por uma tripulação inteira, onde cada membro desempenha um papel
crucial para garantir que o navio chegue ao seu destino. Do marinheiro que cuida das velas ao
cozinheiro que alimenta a tripulação, todos têm uma função específica que, quando combinada,
mantém o navio em movimento. No CrewAI, a classe Crew desempenha um papel semelhante,
coordenando a interação entre diversos agentes para alcançar objetivos complexos.
Figura 5.1: Tripulação, por Janderson de Sales
Criar uma Crew eficaz no CrewAI é mais do que apenas reunir alguns agentes e atribuir
tarefas. É sobre orquestrar um conjunto de habilidades e ferramentas de maneira que cada
agente possa contribuir de forma otimizada para o objetivo final. Assim como em uma
tripulação de navio, onde a sinergia entre os membros é essencial, no CrewAI a colaboração e
a coordenação entre os agentes são fundamentais para o sucesso da missão.
A classe Crew é a classe com mais opções de configurações do conjunto de configurações
básicas do CrewAI. Por isso, respire fundo e vamos mergulhar fundo nela, onde eu me
comprometo a descomplicar todos os detalhes importantes dela. Cada configuração da Crew
oferece uma maneira de afinar a colaboração entre os agentes, garantindo que cada um possa
CAPÍTULO 5. NOSSA TRIPULAÇÃO EM PROCESSO DE CRIAÇÃO
100
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 102

AGENTES INTELIGENTES
contribuir de maneira otimizada para o objetivo comum.
Ao explorar a classe Crew, descobriremos como personalizar a interação entre os agen-
tes, configurar processos de execução, e ajustar parâmetros que influenciam diretamente a
eficiência e a eficácia da equipe. Este capítulo será dedicado a desvendar cada aspecto dessa
classe, tornando-a acessível e compreensível, para que você possa aproveitar ao máximo
suas capacidades em seus projetos de inteligência artificial. Prepare-se para transformar a
maneira como suas equipes de agentes trabalham em conjunto!
Por fim, a flexibilidade proporcionada pela classe Crew é um dos seus maiores trunfos.
Ela permite a adaptação dinâmica a novos desafios e mudanças de escopo ao longo do
projeto. Assim como uma tripulação pode ajustar suas velas para se adaptar aos ventos em
mudança, uma Crew pode reconfigurar seus agentes e tarefas para enfrentar novos obstáculos
ou aproveitar novas oportunidades. Essa capacidade de adaptação é crucial para manter a
eficiência e a eficácia em um ambiente de trabalho em constante evolução.
5.1
REVISANDO COMPONENTES
Para criar uma Crew eficaz no CrewAI, é essencial entender a configuração dos atributos
tasks e agents. Esses dois elementos são os pilares que sustentam a estrutura de qualquer
Crew, determinando as tarefas a serem realizadas e os agentes responsáveis por executá-las.
Agentes: agents
O atributo agents é uma lista que inclui todos os agentes que fazem parte da Crew. Cada
agente traz consigo um conjunto único de habilidades e ferramentas, que são essenciais para
a execução das tarefas. É importante selecionar os agentes certos para cada tarefa, levando
em consideração suas competências e especializações. Assim como nas tarefas, a ordem
dos agentes na lista pode impactar a eficiência da Crew. Garantir que os agentes estejam
organizados de acordo com suas prioridades e capacidades pode fazer a diferença entre um
projeto bem-sucedido e um fracasso.
CAPÍTULO 5. NOSSA TRIPULAÇÃO EM PROCESSO DE CRIAÇÃO
101
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 103

AGENTES INTELIGENTES
Relembremos nossos agentes que criamos no Capítulo 3. Reduzi o texto dos agentes
para economizar espaço no nosso livro.
pesquisador = Agent(
role=’Pesquisador ’,
backstory=f’Você, como
pesquisador de conteúdo na web ...’,
goal=’Coletar e analisar ...’,
# e todas
outras
configurações ...
)
coordenador = Agent(
role=’Coordenador ’,
backstory=f’Você é um coordenador
experiente ...’,
goal=’Supervisionar e integrar ...’,
# e todas
outras
configurações ...
)
escritor = Agent(
role=’Escritor ’,
backstory=f’Você é um escritor
talentoso ...’,
goal=’Criar
conteúdo escrito ...’,
# e todas
outras
configurações ...
)
Tarefas: tasks
O atributo tasks é uma lista que contém todas as tarefas atribuídas à Crew. Cada tarefa é
definida de maneira específica e detalhada, garantindo que os agentes saibam exatamente o
que precisa ser feito. A clareza na definição das tarefas é crucial para evitar ambiguidades e
garantir que todos os agentes estejam alinhados com os objetivos do projeto. Além disso, a
ordem das tarefas na lista é importante, pois ela determina a sequência de execução. Uma
sequência bem planejada pode otimizar o fluxo de trabalho, minimizar o tempo de espera
entre tarefas e assegurar que os resultados de uma tarefa estejam disponíveis para a próxima.
CAPÍTULO 5. NOSSA TRIPULAÇÃO EM PROCESSO DE CRIAÇÃO
102
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 104

AGENTES INTELIGENTES
Relembremos as tarefas que criamos no Capítulo 4. Reduzi o texto dos agentes para
economizar espaço no nosso livro.
# Tarefa de análise de mercado
com saída JSON
estruturada
pesquisa_conteudo_task = Task(
agent=pesquisador ,
description=’Analise os dados
coletados
sobre as...’
# e todas
outras
configurações ...
)
# Definindo a tarefa do Coordenador
coordenar_projeto_task = Task(
agent=coordenador ,
description=’Supervisione o andamento do projeto , integrando
os resultados
das
tarefas
...’
# e todas
outras
configurações ...
)
# Definindo a tarefa do Escritor
criar_conteudo_task = Task(
agent=escritor ,
description=’Crie
conteúdo escrito
baseado
nos dados e análises ...’
# e todas
outras
configurações ...
)
5.2
IMPORTÂNCIA DA SEQUÊNCIA CORRETA
A sequência correta de execução das tarefas e a organização apropriada dos agentes
são fundamentais para o sucesso da Crew. Imagine um projeto onde os dados precisam ser
coletados, analisados e, finalmente, apresentados em um relatório. Se a tarefa de análise for
iniciada antes que os dados sejam completamente coletados, o processo será interrompido,
causando atrasos e retrabalho. Da mesma forma, se os agentes não estiverem organizados
de acordo com suas especialidades, pode haver uma alocação ineficiente de recursos, com
agentes altamente qualificados executando tarefas que não maximizam suas habilidades.
Vamos pensar um pouco na sequência dos nossos agentes. Primeiro, devemos criar
o coordenador. Este agente tem a função vital de dirigir toda a execução do processo,
supervisionando as atividades e integrando os resultados das diversas tarefas. Ele atua como
o capitão do navio, garantindo que cada etapa do projeto siga conforme planejado e que os
CAPÍTULO 5. NOSSA TRIPULAÇÃO EM PROCESSO DE CRIAÇÃO
103
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 105

AGENTES INTELIGENTES
recursos sejam utilizados de maneira eficiente.
Em seguida, vem o pesquisador. Este agente é responsável por coletar e analisar
dados, utilizando suas habilidades para fornecer informações precisas e detalhadas que serão
fundamentais para as etapas subsequentes. O pesquisador deve trabalhar após o coordenador
delegar as funções, garantindo que a base de dados necessária para a análise esteja completa
e confiável. Essa pesquisa será a base para o escritor.
Por último, temos o escritor. O papel do escritor é compilar e apresentar as informações
de maneira clara e atraente. Ele transforma os dados e análises em conteúdo escrito de alta
qualidade, que pode ser utilizado para relatórios, artigos ou qualquer outro tipo de documen-
tação necessária. A sequência correta garante que o escritor tenha todas as informações
necessárias para criar um conteúdo coeso e informativo.
Portanto, ao montar sua Crew, dedique tempo para planejar a sequência de tarefas e a
organização dos agentes. Isso não só otimizará a utilização dos recursos disponíveis, mas
também garantirá que cada etapa do projeto seja concluída de forma eficiente e eficaz. A
coordenação adequada entre tarefas e agentes é a chave para transformar um conjunto de
ações isoladas em um fluxo de trabalho harmonioso e produtivo.
Com os atributos tasks e agents devidamente configurados e organizados, sua Crew
estará pronta para enfrentar qualquer desafio e alcançar os objetivos propostos com sucesso.
5.3
INSTANCIANDO A CREW
Com nossos agentes e tarefas devidamente configurados, é hora de criar nossa Crew. A
Crew será composta pelos agentes coordenador, pesquisador e escritor, seguindo a sequência
que garante uma execução eficiente das tarefas. O coordenador dirigirá todo o processo, o
pesquisador coletará e analisará os dados, e o escritor transformará essas informações em
conteúdo escrito.
Para instanciar a Crew, utilizamos a seguinte configuração:
crew = Crew(
agents =[ coordenador , pesquisador , escritor],
tasks =[ coordenar_projeto_task , pesquisa_conteudo_task ,
criar_conteudo_task ]
)
Essa configuração garante que a sequência de execução e a organização dos agentes
estejam alinhadas com nossos objetivos, permitindo uma colaboração eficiente e eficaz entre
os membros da Crew. Com isso, nossa Crew está pronta para enfrentar os desafios e alcançar
CAPÍTULO 5. NOSSA TRIPULAÇÃO EM PROCESSO DE CRIAÇÃO
104
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 106

AGENTES INTELIGENTES
os objetivos propostos.
5.4
COMO VAMOS PROCESSAR?
Imagine uma fábrica onde cada trabalhador tem uma função específica na linha de
produção. Em uma linha de produção tradicional, cada trabalhador espera que o anterior
termine sua parte para começar a sua. Por outro lado, em um ambiente de trabalho mais
dinâmico, diferentes trabalhadores podem estar ocupados ao mesmo tempo em tarefas que
eventualmente se unem para formar o produto final. No CrewAI, o process determina como
nossa Crew vai operar: de forma sequencial ou hierárquica.
A definição do process é fundamental para determinar o fluxo de trabalho que a Crew
seguirá. No CrewAI, temos algumas opções de processos que podem ser configurados, sendo
os mais comuns o sequential e o hierarchical. Cada um desses processos oferece uma
maneira distinta de organizar a execução das tarefas e a interação entre os agentes.
Processo Sequencial
No processo sequencial, as tarefas são executadas uma após a outra, seguindo a ordem
definida na configuração da Crew. Esse tipo de processo é ideal para projetos onde a saída
de uma tarefa é a entrada para a próxima. Por exemplo, primeiro o coordenador supervisiona
a coleta de dados, depois o pesquisador analisa esses dados, e finalmente o escritor cria o
conteúdo baseado na análise.
Na Figura 5.2, vemos uma representação clara desse fluxo de trabalho. A solicitação
inicial é feita pelo usuário, que envia um pedido ao coordenador. O coordenador, então, delega
a tarefa ao pesquisador, que coleta e analisa as informações necessárias. Após a análise, o
pesquisador passa as informações ao escritor, que finalmente cria o conteúdo solicitado e o
retorna ao usuário. Esse fluxo sequencial garante que cada tarefa seja concluída antes que a
próxima comece, minimizando erros e retrabalhos.
Observe a imagem e note como cada agente é responsável por uma parte específica
do processo. O coordenador inicia o fluxo de trabalho, assegurando que a solicitação do
usuário seja corretamente interpretada e delegada. Em seguida, o pesquisador assume a
tarefa de encontrar e analisar os dados relevantes. Por último, o escritor utiliza as informações
analisadas para compor um texto coerente e informativo, que é então devolvido ao usuário.
CAPÍTULO 5. NOSSA TRIPULAÇÃO EM PROCESSO DE CRIAÇÃO
105
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 107

AGENTES INTELIGENTES
Figura 5.2: Processo sequencial de execução de tarefas no CrewAI.
A configuração de um processo sequencial é bastante direta e garante que cada etapa
seja concluída antes de iniciar a próxima.
from
crewai
import
Process
crew = Crew(
agents =[ coordenador , pesquisador , escritor],
tasks =[ coordenar_projeto_task , pesquisa_conteudo_task ,
criar_conteudo_task ],
process=Process.sequential
)
Processo Hierárquico
O processo hierárquico, por outro lado, permite uma maior flexibilidade na execução das
tarefas. Nesse tipo de processo, as tarefas podem ser organizadas de forma hierárquica, onde
algumas tarefas podem ser divididas em subtarefas, e diferentes agentes podem trabalhar
simultaneamente em partes distintas do projeto. Isso é útil em projetos mais complexos, onde
múltiplas atividades precisam ser realizadas em paralelo ou onde existe uma estrutura de
dependências entre as tarefas.
Na Figura 5.3, vemos uma representação do processo hierárquico. A solicitação inicial é
feita pelo usuário, que envia um pedido ao coordenador. O coordenador, então, delega a tarefa
de pesquisa ao pesquisador. O pesquisador coleta e analisa as informações necessárias e
retorna a análise ao coordenador. Em seguida, o coordenador delega a tarefa de escrita ao
CAPÍTULO 5. NOSSA TRIPULAÇÃO EM PROCESSO DE CRIAÇÃO
106
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 108

AGENTES INTELIGENTES
escritor, que cria o conteúdo baseado na análise recebida e retorna o texto ao coordenador.
Finalmente, o coordenador entrega a escrita solicitada de volta ao usuário. Esse fluxo permite
que as tarefas sejam realizadas de forma mais flexível e eficiente, com diferentes agentes
trabalhando em paralelo ou em etapas que dependem umas das outras.
Note como cada agente é responsável por uma parte específica do processo, mas a
comunicação entre os agentes é mediada pelo coordenador. Isso garante que cada tarefa
seja supervisionada e integrada de maneira eficiente, permitindo um fluxo de trabalho mais
dinâmico e adaptável a mudanças. O pesquisador e o escritor não precisam esperar um pelo
outro diretamente, mas sim coordenar suas atividades através do coordenador, que mantém o
controle geral do processo.
Figura 5.3: Modelo hierárquico de execução de tarefas no CrewAI.
crew = Crew(
agents =[ coordenador , pesquisador , escritor],
tasks =[ coordenar_projeto_task , pesquisa_conteudo_task ,
criar_conteudo_task ],
process=Process.hierarchical
)
Escolhendo o Processo Adequado
A escolha do processo adequado depende da natureza do seu projeto e da maneira como
as tarefas e os agentes estão organizados. Para projetos lineares com uma clara sequência de
etapas, o processo sequencial é a escolha ideal. Já para projetos mais dinâmicos e complexos,
onde diferentes tarefas precisam ser realizadas simultaneamente, o processo hierárquico
CAPÍTULO 5. NOSSA TRIPULAÇÃO EM PROCESSO DE CRIAÇÃO
107
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 109

AGENTES INTELIGENTES
oferece a flexibilidade necessária.
Ao configurar o process da sua Crew, leve em consideração as necessidades específicas
do seu projeto e a melhor forma de otimizar a colaboração entre os agentes. A escolha correta
do processo garantirá um fluxo de trabalho eficiente e permitirá que sua Crew alcance os
objetivos de maneira eficaz.
5.5
VELOCIDADE MÁXIMA
No CrewAI, a configuração max_rpm é crucial para controlar a taxa máxima de solicitações
por minuto que a Crew pode processar. Essa limitação é importante para garantir que a
execução do processo respeite os limites de taxa de APIs externas, evite sobrecarga do
sistema e mantenha um desempenho estável.
A configuração de max_rpm, onde rpm significa requests per minute (solicitações por
minuto), permite que você defina um limite superior para a quantidade de solicitações que a
Crew pode fazer em um minuto. Isso é especialmente útil em cenários onde múltiplos agentes
estão fazendo requisições a serviços externos que possuem restrições de taxa. Ao definir
esse limite, você assegura que a Crew opera dentro dos parâmetros permitidos, evitando
possíveis bloqueios ou penalidades impostas por esses serviços.
Por exemplo, se você estiver utilizando uma API que permite no máximo 10 requisições
por minuto, você deve configurar o max_rpm da Crew para 10 ou menos. Isso garantirá que
suas requisições sejam distribuídas uniformemente ao longo do tempo, sem exceder os limites
estabelecidos.
crew = Crew(
agents =[ coordenador , pesquisador , escritor],
tasks =[ coordenar_projeto_task , pesquisa_conteudo_task ,
criar_conteudo_task ],
process=Process.hierarchical ,
max_rpm =10
)
No exemplo acima, configuramos o max_rpm para 10, garantindo que a Crew não fará
mais de 10 solicitações por minuto. Esse tipo de controle é vital para manter a eficiência e a
eficácia da operação, prevenindo sobrecargas e mantendo um fluxo de trabalho contínuo e
estável.
Portanto, ao planejar a configuração da sua Crew, não se esqueça de definir o max_rpm
de acordo com as necessidades do seu projeto e as restrições das APIs externas que você
está utilizando. Essa configuração ajudará a manter o sistema operando dentro dos limites
CAPÍTULO 5. NOSSA TRIPULAÇÃO EM PROCESSO DE CRIAÇÃO
108
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 110

AGENTES INTELIGENTES
seguros e eficientes.
5.6
O CHEFÃO
No CrewAI, a configuração manager_agent permite que você defina um agente perso-
nalizado que atuará como gerenciador da Crew. Este agente gerenciador é responsável
por coordenar todas as atividades, delegar tarefas e garantir que o fluxo de trabalho seja
executado de maneira eficiente e eficaz.
Um agente gerenciador é especialmente útil em cenários onde é necessário um controle
mais rigoroso sobre a execução das tarefas e a coordenação entre os diferentes agentes.
Ao definir um manager_agent, você assegura que há um ponto central de controle que pode
tomar decisões, ajustar prioridades e resolver conflitos que possam surgir durante a execução
das tarefas.
Obviamente, o agente coordenador será responsável por supervisionar todas as atividades
da Crew.
crew = Crew(
agents =[ coordenador , pesquisador , escritor],
tasks =[ coordenar_projeto_task , pesquisa_conteudo_task ,
criar_conteudo_task ],
process=Process.hierarchical ,
max_rpm =10,
manager_agent=coordenador
)
No exemplo acima, configuramos o manager_agent como supervisor. Este agente super-
visionará a execução das tarefas, garantindo que cada agente esteja trabalhando de acordo
com o plano e que as tarefas sejam concluídas dentro do prazo e com a qualidade esperada.
Ao definir um agente gerenciador, você está centralizando a coordenação e a supervisão,
o que pode melhorar significativamente a eficiência e a eficácia da sua Crew. Certifique-se de
escolher um agente com as habilidades e a experiência necessárias para desempenhar esse
papel crucial, garantindo que todas as operações ocorram de forma suave e ordenada.
CAPÍTULO 5. NOSSA TRIPULAÇÃO EM PROCESSO DE CRIAÇÃO
109
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 111

AGENTES INTELIGENTES
5.7
O CÉREBRO DO CHEFÃO
No CrewAI, a configuração manager_llm especifica qual modelo de linguagem será
utilizado pelo agente gerenciador. O modelo de linguagem é crucial para a capacidade do
agente gerenciador de interpretar comandos, tomar decisões e coordenar efetivamente a
Crew.
Ao escolher um manager_llm, você deve considerar a complexidade das tarefas que o
agente coordenador irá enfrentar e o nível de entendimento e processamento de linguagem
natural necessário. Modelos de linguagem avançados podem oferecer melhores resultados
em termos de compreensão contextual e capacidade de tomada de decisão.
Vamos configurar a Crew com um agente coordenador que utiliza um modelo de linguagem
específico, como o GPT-4o mini da OpenAI:
crew = Crew(
agents =[ coordenador , pesquisador , escritor],
tasks =[ coordenar_projeto_task , pesquisa_conteudo_task ,
criar_conteudo_task ],
process=Process.hierarchical ,
max_rpm =10,
manager_agent=coordenador ,
manager_llm=gtp_4o_mini
)
No exemplo acima, configuramos o manager_llm como GPT-4o-mini, um modelo de
linguagem leve e poderoso que permitirá ao agente coordenador interpretar e coordenar
efetivamente todas as atividades da Crew.
A escolha do modelo de linguagem para o agente gerenciador é uma decisão crítica que
pode impactar diretamente a eficiência e a eficácia da sua Crew. Certifique-se de selecionar
um modelo que atenda às necessidades do seu projeto, proporcionando o nível necessário de
compreensão e processamento de linguagem natural para gerenciar as tarefas e agentes de
forma eficaz.
5.8
REGISTRO DO TRABALHO
Imagine uma equipe de construção que, ao iniciar um novo projeto, pudesse acessar todas
as experiências e aprendizados de projetos anteriores. Cada erro, cada solução inovadora,
CAPÍTULO 5. NOSSA TRIPULAÇÃO EM PROCESSO DE CRIAÇÃO
110
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 112

AGENTES INTELIGENTES
cada detalhe importante estaria registrado, disponível para ser consultado e evitar que os
mesmos problemas surgissem novamente. No CrewAI, a configuração memory proporciona
essa capacidade, permitindo que a Crew armazene e utilize informações sobre suas execuções
passadas.
No CrewAI, a configuração memory determina se a Crew deve utilizar memória para
armazenar informações sobre suas execuções. Ativar a memória é essencial para projetos
onde o histórico das operações e o contexto contínuo são cruciais para o sucesso das tarefas.
Quando a memory está configurada como True, a Crew será capaz de lembrar detalhes
de execuções passadas, armazenar resultados intermediários e utilizar essas informações
para melhorar a precisão e a eficiência em futuras execuções. Isso é particularmente útil em
tarefas que exigem análise de dados históricos, aprendizado contínuo ou acompanhamento
de longo prazo.
Por exemplo, em um projeto de pesquisa, a memória permite que o pesquisador lembre-se
das fontes de dados anteriormente consultadas, evitando duplicação de esforços e melhorando
a eficiência. No caso do escritor, a memória pode ser usada para manter um estilo consistente
de escrita ou para referenciar informações utilizadas em textos anteriores.
Vamos configurar a Crew para utilizar a memória:
crew = Crew(
agents =[ coordenador , pesquisador , escritor],
tasks =[ coordenar_projeto_task , pesquisa_conteudo_task ,
criar_conteudo_task ],
process=Process.hierarchical ,
max_rpm =10,
manager_agent=coordenador ,
memory=True
)
No exemplo acima, configuramos a memory como True, permitindo que a Crew armazene
e utilize memórias de suas execuções passadas. Essa configuração é vital para projetos que
dependem de um entendimento contínuo e contextual das atividades realizadas.
Ao decidir se deve ou não ativar a memória, considere as necessidades específicas do
seu projeto. Se o histórico e o contexto são importantes para a eficiência e a precisão das
tarefas, ativar a memória é a melhor escolha. Isso ajudará sua Crew a operar de forma mais
inteligente e adaptável, aprendendo com cada execução e melhorando continuamente.
CAPÍTULO 5. NOSSA TRIPULAÇÃO EM PROCESSO DE CRIAÇÃO
111
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 113

AGENTES INTELIGENTES
5.9
CAMADA EXTRA DE CONTROLE NA CREW
Assim como em uma orquestra onde o maestro sinaliza quando cada músico deve começar
ou parar de tocar, no CrewAI, a configuração manager_callbacks permite que você defina
manipuladores de callbacks que serão executados pelo agente gerenciador quando o processo
hierárquico é utilizado. Esses callbacks são funções específicas que serão chamadas em
determinados pontos da execução das tarefas, permitindo um controle refinado sobre o fluxo
de trabalho.
Os manager_callbacks são essenciais para cenários onde é necessário monitorar o pro-
gresso, realizar ações intermediárias ou responder a eventos específicos durante a execução
das tarefas. Com esses callbacks, o agente gerenciador pode, por exemplo, verificar o anda-
mento de uma tarefa, registrar logs, ou mesmo ajustar parâmetros de execução com base em
certos critérios.
Quando você configura manager_callbacks, está adicionando uma camada extra de
controle e flexibilidade ao seu processo, permitindo que o agente gerenciador tome decisões
mais inteligentes e reaja a eventos em tempo real. Isso é particularmente útil em processos
hierárquicos onde as tarefas são interdependentes e uma coordenação precisa é crucial para
o sucesso.
Vamos configurar a Crew com um agente gerenciador que utiliza callbacks específicos
para monitorar e ajustar o fluxo de trabalho:
def
on_task_start(task):
print(f’Task {task} has
started.’)
def
on_task_end(task):
print(f’Task {task} has ended.’)
callbacks = {
’on_start ’: on_task_start ,
’on_end ’: on_task_end
}
CAPÍTULO 5. NOSSA TRIPULAÇÃO EM PROCESSO DE CRIAÇÃO
112
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 114

AGENTES INTELIGENTES
crew = Crew(
agents =[ coordenador , pesquisador , escritor],
tasks =[ coordenar_projeto_task , pesquisa_conteudo_task ,
criar_conteudo_task ],
process=Process.hierarchical ,
max_rpm =10,
manager_agent=coordenador ,
memory=True ,
manager_callbacks =callbacks
)
No exemplo acima, configuramos os manager_callbacks com duas funções: on_task_start
e on_task_end. A função on_task_start é chamada no início de cada tarefa, enquanto a função
on_task_end é chamada no final de cada tarefa. Esses callbacks permitem que o agente
gerenciador monitore o progresso das tarefas e tome ações específicas conforme necessário.
Ao decidir configurar manager_callbacks, você está aprimorando a capacidade de sua
Crew de responder dinamicamente às necessidades do projeto, garantindo uma execução
mais fluida e eficiente das tarefas. Utilize essa configuração para obter um controle mais
refinado e uma maior adaptabilidade no gerenciamento das atividades da sua Crew.
5.10
QUERO OUVIR TUDO DA TRIPULAÇÃO
Assim como um líder que deseja estar a par de cada detalhe das operações de sua
equipe, no CrewAI, a configuração verbose permite ajustar o nível de verbosidade para o
registro de logs durante a execução. Ativar o modo verboso pode ser extremamente útil para
monitorar de perto o progresso, identificar problemas e entender o comportamento de cada
agente em tempo real.
A configuração verbose pode ser configurada como True ou False. Quando configurada
como True, a Crew fornecerá logs detalhados de suas atividades, incluindo mensagens
sobre o início e o término das tarefas, decisões tomadas pelos agentes e quaisquer eventos
importantes que ocorram durante a execução. Isso proporciona uma visão completa do que
está acontecendo, permitindo uma supervisão rigorosa e facilitando a resolução de problemas.
Por outro lado, quando configurada como False, a quantidade de logs gerados será
mínima, mostrando apenas informações essenciais. Isso pode ser útil em situações onde o de-
sempenho é uma prioridade e o excesso de logs pode causar uma sobrecarga desnecessária.
CAPÍTULO 5. NOSSA TRIPULAÇÃO EM PROCESSO DE CRIAÇÃO
113
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 115

AGENTES INTELIGENTES
Vamos configurar a Crew para operar no modo verboso:
crew = Crew(
agents =[ coordenador , pesquisador , escritor],
tasks =[ coordenar_projeto_task , pesquisa_conteudo_task ,
criar_conteudo_task ],
process=Process.hierarchical ,
max_rpm =10,
manager_agent=coordenador ,
memory=True ,
manager_callbacks =callbacks ,
verbose=True
)
No exemplo acima, configuramos o verbose como True, permitindo que a Crew registre
logs detalhados durante a execução. Isso ajudará a monitorar o progresso e a entender melhor
como cada agente está contribuindo para o sucesso do projeto.
5.11
MONITORANDO TAREFAS E ETAPAS DA CREW
Pense em um chefe de cozinha que deseja monitorar cada etapa da preparação de um
prato e cada prato finalizado. Ele quer ser notificado quando um cozinheiro termina de cortar
os legumes ou quando a sopa está pronta para ser servida. No CrewAI, as configurações
task_callback e step_callback funcionam de maneira semelhante, permitindo que você defina
ações específicas que serão executadas após cada tarefa e após cada etapa da execução
dos agentes, respectivamente. Essas ações, conhecidas como callbacks, ajudam a monitorar
e controlar o processo de execução de forma detalhada.
Callback de Tarefas: task_callback
A configuração task_callback define uma função que será executada após a conclusão de
cada tarefa por qualquer agente. Isso permite a execução de ações específicas após cada
tarefa, como registrar logs, atualizar métricas ou realizar verificações adicionais. Por exemplo,
você pode usar task_callback para coletar dados sobre o desempenho das tarefas ou para
enviar notificações quando uma tarefa é concluída.
CAPÍTULO 5. NOSSA TRIPULAÇÃO EM PROCESSO DE CRIAÇÃO
114
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 116

AGENTES INTELIGENTES
def
ao_concluir_tarefa (info):
print(f’info ’)
crew = Crew(
agents =[ coordenador , pesquisador , escritor],
tasks =[ coordenar_projeto_task , pesquisa_conteudo_task ,
criar_conteudo_task ],
process=Process.hierarchical ,
max_rpm =10,
manager_agent=coordenador ,
memory=True ,
manager_callbacks =callbacks ,
verbose=True ,
task_callback= ao_concluir_tarefa
)
No exemplo acima, configuramos task_callback com a função ao_concluir_tarefa, que
imprime uma mensagem sempre que um agente conclui uma tarefa. Isso ajuda a monitorar o
progresso e a obter feedback imediato sobre a conclusão das tarefas.
Callback de Etapas: step_callback
A configuração step_callback define uma função que será executada após cada etapa
da execução de um agente. Uma etapa pode ser qualquer unidade de trabalho ou operação
realizada por um agente dentro de uma tarefa. Usar step_callback permite um controle ainda
mais detalhado, proporcionando a capacidade de inserir lógica personalizada e monitoramento
em cada pequena parte do processo.
CAPÍTULO 5. NOSSA TRIPULAÇÃO EM PROCESSO DE CRIAÇÃO
115
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 117

AGENTES INTELIGENTES
def
ao_concluir_etapa (info):
print(f’info ’)
crew = Crew(
agents =[ coordenador , pesquisador , escritor],
tasks =[ coordenar_projeto_task , pesquisa_conteudo_task ,
criar_conteudo_task ],
process=Process.hierarchical ,
max_rpm =10,
manager_agent=coordenador ,
memory=True ,
manager_callbacks =callbacks ,
verbose=True ,
task_callback=ao_concluir_tarefa ,
step_callback= ao_concluir_etapa
)
No exemplo acima, configuramos step_callback com a função ao_concluir_etapa, que
imprime uma mensagem sempre que um agente conclui uma etapa. Isso permite um monitora-
mento detalhado do progresso e ajuda a identificar possíveis problemas ou áreas de melhoria
em tempo real.
Ao utilizar task_callback e step_callback, você pode adicionar uma camada extra de
controle e visibilidade ao processo de execução da sua Crew. Essas ações, ou callbacks,
fornecem a flexibilidade necessária para adaptar e otimizar o comportamento dos agentes
conforme necessário, garantindo que o projeto seja concluído de maneira eficiente e eficaz.
5.12
ARQUIVO DE PROMPT
Nosso capitão de navio precisa de um mapa detalhado para guiar sua tripulação por meio
dos mares desconhecidos, no CrewAI, a configuração prompt_file serve como o roteiro que
direciona os agentes em suas tarefas. O prompt_file é um caminho para um arquivo JSON
que contém todos os prompts necessários para a execução da Crew. Este arquivo funciona
como um guia estruturado, fornecendo instruções específicas que os agentes seguirão para
realizar suas atividades.
Ter um prompt_file bem definido é crucial para garantir que cada agente tenha as informa-
ções corretas e detalhadas sobre o que precisa ser feito. Isso evita ambiguidades e garante
que todos os membros da Crew estejam alinhados com os objetivos do projeto. Além disso,
facilita a reutilização de prompts e a manutenção de um padrão de qualidade na execução das
tarefas.
CAPÍTULO 5. NOSSA TRIPULAÇÃO EM PROCESSO DE CRIAÇÃO
116
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 118

AGENTES INTELIGENTES
Vamos configurar a Crew com um caminho para o arquivo de prompt:
crew = Crew(
agents =[ coordenador , pesquisador , escritor],
tasks =[ coordenar_projeto_task , pesquisa_conteudo_task ,
criar_conteudo_task ],
process=Process.hierarchical ,
max_rpm =10,
manager_agent=coordenador ,
memory=True ,
manager_callbacks =callbacks ,
verbose=True ,
task_callback=ao_concluir_tarefa ,
step_callback=ao_concluir_etapa ,
prompt_file=’path/para/o/ arquivo_de_prompt .json ’
)
No exemplo acima, configuramos o prompt_file com o caminho para um arquivo JSON
que contém os prompts que serão utilizados pelos agentes da Crew. Este arquivo deve ser
cuidadosamente preparado para incluir todas as instruções necessárias, garantindo que os
agentes possam executar suas tarefas de forma eficiente e precisa.
Utilizar um prompt_file bem estruturado é uma prática recomendada, pois centraliza todas
as instruções em um único local, facilitando a gestão e a atualização dos prompts conforme
necessário. Isso contribui para um fluxo de trabalho mais organizado e coerente, ajudando
sua Crew a navegar pelos desafios do projeto com clareza e direção.
5.13
CACHE E MODELO DE LINGUAGEM PARA CHAMADAS DE FUNÇÃO
Assim como um navio pode ter um armazém para guardar suprimentos essenciais e
ferramentas de navegação para garantir uma viagem tranquila, no CrewAI, as configurações
cache e function_calling_llm desempenham papéis fundamentais para otimizar a execução
das tarefas e o desempenho dos agentes.
Cache: cache
A configuração cache determina se a Crew deve utilizar um cache para armazenar os
resultados das execuções das ferramentas. Quando ativada (True), o cache permite que os
resultados de tarefas anteriores sejam armazenados e reutilizados, evitando a necessidade
de repetir operações custosas ou demoradas. Isso é particularmente útil para projetos que
CAPÍTULO 5. NOSSA TRIPULAÇÃO EM PROCESSO DE CRIAÇÃO
117
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 119

AGENTES INTELIGENTES
exigem múltiplas execuções de ferramentas com os mesmos dados, pois reduz o tempo de
processamento e melhora a eficiência geral.
Vamos configurar a Crew para usar o cache:
crew = Crew(
agents =[ coordenador , pesquisador , escritor],
tasks =[ coordenar_projeto_task , pesquisa_conteudo_task ,
criar_conteudo_task ],
process=Process.hierarchical ,
max_rpm =10,
manager_agent=coordenador ,
memory=True ,
manager_callbacks =callbacks ,
verbose=True ,
task_callback=ao_concluir_tarefa ,
step_callback=ao_concluir_etapa ,
prompt_file=’path/para/o/ arquivo_de_prompt .json ’,
cache=True
)
No exemplo acima, configuramos o cache como True, permitindo que a Crew armazene
os resultados das execuções das ferramentas e os reutilize conforme necessário. Isso ajuda a
economizar recursos e a acelerar o processo de execução.
Modelo de Linguagem para Chamadas de Função
A configuração function_calling_llm especifica qual modelo de linguagem será utilizado
para executar as chamadas de função de todas as ferramentas pelos agentes. Este modelo de
linguagem é crucial para a capacidade dos agentes de interpretar comandos, fazer chamadas
de função corretas e integrar os resultados nas suas tarefas. Escolher o modelo adequado
garante que as ferramentas sejam usadas de maneira eficiente e que os resultados sejam
precisos e relevantes.
Vamos configurar a Crew com um modelo de linguagem específico, como o gtp-4o-mini,
para chamadas de função:
CAPÍTULO 5. NOSSA TRIPULAÇÃO EM PROCESSO DE CRIAÇÃO
118
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 120

AGENTES INTELIGENTES
gpt_4_mini = "gpt -4o-mini"
crew = Crew(
agents =[ coordenador , pesquisador , escritor],
tasks =[ coordenar_projeto_task , pesquisa_conteudo_task ,
criar_conteudo_task ],
process=Process.hierarchical ,
max_rpm =10,
manager_agent=coordenador ,
memory=True ,
manager_callbacks =callbacks ,
verbose=True ,
task_callback=ao_concluir_tarefa ,
step_callback=ao_concluir_etapa ,
prompt_file=’path/para/o/ arquivo_de_prompt .json ’,
cache=True ,
function_calling_llm =gpt_4_mini
)
No exemplo acima, configuramos o function_calling_llm como GPT-3, um modelo de
linguagem poderoso que permitirá aos agentes realizar chamadas de função de forma eficiente
e precisa.
Ao utilizar cache e function_calling_llm, você otimiza a performance e a eficácia da sua
Crew, garantindo que os agentes possam executar suas tarefas com rapidez e precisão,
reutilizando resultados quando necessário e utilizando um modelo de linguagem robusto para
a execução de funções.
CAPÍTULO 5. NOSSA TRIPULAÇÃO EM PROCESSO DE CRIAÇÃO
119
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 121

AGENTES INTELIGENTES
5.14
COMPARTILHAMENTO DE INFORMAÇÕES E PLANEJAMENTO
No CrewAI, as configurações share_crew e planning desempenham papéis diferenciados
para melhorar a eficiência da Crew e contribuir para o desenvolvimento da biblioteca.
Compartilhamento de Informações: share_crew
A configuração share_crew determina se você deseja compartilhar todas as informações
e execuções da Crew com o CrewAI para melhorar a biblioteca e permitir o treinamento de
modelos. Quando ativada (True), essa configuração permite que os dados de execução da
sua Crew sejam utilizados para aprimorar o CrewAI, contribuindo para a evolução e melhoria
contínua da biblioteca.
Vamos configurar a Crew para compartilhar informações:
crew = Crew(
agents =[ coordenador , pesquisador , escritor],
tasks =[ coordenar_projeto_task , pesquisa_conteudo_task ,
criar_conteudo_task ],
process=Process.hierarchical ,
max_rpm =10,
manager_agent=coordenador ,
memory=True ,
manager_callbacks =callbacks ,
verbose=True ,
task_callback=ao_concluir_tarefa ,
step_callback=ao_concluir_etapa ,
prompt_file=’path/para/o/ arquivo_de_prompt .json ’,
cache=True ,
function_calling_llm =gtp_4o_mini ,
share_crew=True
)
No exemplo acima, configuramos o share_crew como True, permitindo que as informações
da Crew sejam compartilhadas para melhorar a biblioteca CrewAI e treinar novos modelos.
Planejamento: planning
A configuração planning permite que você planeje a execução da Crew e adicione o plano
à Crew. O planejamento envolve a definição de uma estratégia clara e detalhada para a
CAPÍTULO 5. NOSSA TRIPULAÇÃO EM PROCESSO DE CRIAÇÃO
120
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 122

AGENTES INTELIGENTES
execução das tarefas, assegurando que todos os agentes saibam exatamente o que fazer,
quando fazer e como fazer. Um bom plano de execução pode aumentar significativamente a
eficiência e a eficácia da Crew.
Vamos configurar a Crew com um plano de execução:
def
plano_execucao ():
return {
’estrategia ’: ’execucao_sequencial ’,
’detalhes ’: {
’coordenador ’: ’Iniciar
projeto e delegar
tarefas ’,
’pesquisador ’: ’Coletar e analisar
dados ’,
’escritor ’: ’Criar
conteúdo baseado
nos dados
analisados ’
}
}
crew = Crew(
agents =[ coordenador , pesquisador , escritor],
tasks =[ coordenar_projeto_task , pesquisa_conteudo_task ,
criar_conteudo_task ],
process=Process.hierarchical ,
max_rpm =10,
manager_agent=coordenador ,
memory=True ,
manager_callbacks =callbacks ,
verbose=True ,
task_callback=ao_concluir_tarefa ,
step_callback=ao_concluir_etapa ,
prompt_file=’path/para/o/ arquivo_de_prompt .json ’,
cache=True ,
function_calling_llm =gtp_4o_mini ,
share_crew=True ,
planning=plano_execucao ()
)
No exemplo acima, configuramos o planning com uma função que retorna um plano
detalhado de execução. Este plano inclui a estratégia de execução e detalhes específicos para
cada agente, garantindo que todos saibam exatamente o que fazer em cada etapa do projeto.
Ao utilizar share_crew e planning, você contribui para o desenvolvimento contínuo do
CrewAI e assegura uma execução eficiente e organizada das tarefas, maximizando as chances
de sucesso do seu projeto.
CAPÍTULO 5. NOSSA TRIPULAÇÃO EM PROCESSO DE CRIAÇÃO
121
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 123

AGENTES INTELIGENTES
5.15
INPUTS
Para que uma Crew no CrewAI possa executar suas tarefas de forma eficiente, é essencial
fornecer os dados de entrada (inputs) adequados. Os inputs são usados para personalizar
e direcionar as ações dos agentes, garantindo que eles busquem informações relevantes e
atinjam os objetivos definidos.
Ao configurar uma Crew, você deve especificar os inputs no momento de iniciar a execução
com o método kickoff. Esses inputs são passados como um dicionário, onde as chaves
representam os parâmetros esperados pelos agentes e tarefas, e os valores são os dados
específicos que serão utilizados.
# Exemplo de dicionário de inputs
input = {’info ’: ’sua info que você quer
passar
para sua crew ’}
# Executar a crew
inicial
output = crew_inicial.kickoff(inputs=input)
Os inputs podem variar de acordo com a natureza da tarefa e os objetivos dos agentes. Por
exemplo, ao buscar preços de produtos em diferentes sites, você pode fornecer um parâmetro
product para especificar o item a ser pesquisado. Da mesma forma, ao coletar dados de redes
sociais, pode ser necessário fornecer um parâmetro hashtag para direcionar a busca.
É importante garantir que os inputs sejam claros e específicos, pois isso afeta diretamente
a eficácia dos agentes em realizar suas tarefas. Além disso, ao utilizar dados dinâmicos, como
a data atual, você pode assegurar que as informações coletadas estejam sempre atualizadas.
Utilizar inputs adequados é crucial para o sucesso das operações de uma Crew. Eles
garantem que os agentes atuem de forma direcionada e eficiente, coletando dados precisos e
relevantes para a análise.
Com a configuração completa da nossa Crew, desde a definição dos agentes e tarefas
até a escolha do processo de execução e a implementação de funções específicas para
monitorar e controlar o fluxo de trabalho, estamos prontos para enfrentar qualquer desafio
que o projeto possa apresentar. A flexibilidade e a precisão proporcionadas pelas diversas
opções de configuração, como uso de memória, callbacks e modelos de linguagem avançados,
garantem que nossa Crew possa operar de maneira eficiente e adaptável. Essa abordagem
estruturada não só maximiza a eficácia dos agentes, mas também assegura um processo de
execução harmonioso e produtivo, essencial para o sucesso de qualquer empreendimento.
No próximo capítulo, avançaremos para a segunda parte do livro, onde exploraremos
CAPÍTULO 5. NOSSA TRIPULAÇÃO EM PROCESSO DE CRIAÇÃO
122
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 124

AGENTES INTELIGENTES
aplicações práticas do CrewAI. Vamos aplicar os conceitos e técnicas discutidos até agora em
cenários reais, demonstrando como construir e gerenciar equipes de agentes para resolver
problemas complexos. Prepare-se para ver a teoria em ação, enquanto mergulhamos em
exemplos concretos que ilustram o poder e a versatilidade do CrewAI na criação de soluções
inteligentes e colaborativas.
CAPÍTULO 5. NOSSA TRIPULAÇÃO EM PROCESSO DE CRIAÇÃO
123
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 125

Parte II
Agentes em Projetos Reais
124
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 126

AGENTES INTELIGENTES
CAPÍTULO 6
Agentes implantadores de IA
Agora vamos para o mundo real. Aplicações práticas são essenciais para solidificar o
conhecimento adquirido e demonstrar a eficácia dos agentes autônomos em cenários reais. Ao
implementar soluções de IA em projetos concretos, não só validamos as teorias e metodologias
estudadas, mas também descobrimos novas oportunidades e desafios que podem surgir no
processo. É nesse contexto que a prática se torna um laboratório vivo, permitindo a inovação
contínua e a adaptação das tecnologias às necessidades específicas de cada empresa.
A importância das aplicações práticas vai além da simples validação técnica. Elas for-
necem insights valiosos sobre a interação entre a tecnologia e os processos empresariais,
revelando como a IA pode ser integrada de forma harmoniosa e eficaz. Através de experimen-
tações reais, podemos identificar melhores práticas, ajustar estratégias e desenvolver soluções
mais robustas e adaptáveis. Assim, ao mergulharmos no mundo real, estamos não apenas
aplicando o que aprendemos, mas também expandindo nosso entendimento e capacidade de
inovação.
Para nosso primeiro exemplo, vamos desenvolver agentes que, a partir do endereço de
um site, possam realizar uma avaliação completa de como a empresa pode adotar IA em seus
processos. Esses agentes serão capazes de analisar diferentes aspectos do site, identificar
oportunidades de melhoria e sugerir soluções de IA específicas, tornando a integração da
tecnologia mais eficiente e eficaz.
Imagine que você trabalha em uma empresa de consultoria em tecnologia de ponta. Cada
membro da equipe é um especialista em uma área específica, e juntos vocês formam um time
imbatível, capaz de resolver qualquer desafio tecnológico que apareça. O CrewAI funciona
como essa equipe de especialistas autônomos, onde cada agente tem uma função bem
definida para alcançar um objetivo comum. Neste capítulo, vamos explorar como utilizar esses
agentes para integrar soluções de IA de forma econômica e eficiente em uma empresa real.
Nos próximos parágrafos, vamos detalhar como configurar e operar uma equipe de agentes
especializados que colaboram para extrair informações de um site, pesquisar soluções de IA,
realizar análises estratégicas e propor opções de financiamento. Tudo isso de maneira direta
CAPÍTULO 6. AGENTES IMPLANTADORES DE IA
125
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 127

AGENTES INTELIGENTES
e prática, para que você possa aplicar esses conhecimentos imediatamente.
A adoção da Inteligência Artificial pode revolucionar a forma como as empresas operam,
tornando-as mais eficientes, competitivas e inovadoras. Com o CrewAI, empresas podem
automatizar tarefas complexas de coleta e análise de dados, permitindo que os funcionários
se concentrem em atividades mais estratégicas. Através da extração de informações e análise
detalhada, as empresas obtêm insights valiosos que facilitam a tomada de decisões.
Além disso, os agentes especializados em pesquisa de soluções de IA garantem que
as empresas encontrem as ferramentas e tecnologias mais adequadas para suas necessi-
dades, otimizando investimentos e maximizando o retorno. A análise SWOT oferecida pelo
CrewAI proporciona uma visão clara das forças e fraquezas da empresa, além de identificar
oportunidades de mercado e prever ameaças, essenciais para o planejamento estratégico.
Outro benefício é a capacidade de encontrar opções de financiamento específicas para a
adoção de IA, algo que muitas empresas podem não ter recursos internos para realizar. Com
recomendações detalhadas e personalizadas, o CrewAI assegura que a implementação da IA
seja tecnicamente viável e financeiramente sustentável.
Os leitores podem aplicar essa estrutura em suas próprias empresas ou utilizá-la como
parte de um conjunto de soluções para seus clientes. Ao configurar uma equipe de agentes do
CrewAI, você pode criar aplicações personalizadas que atendam às necessidades específicas
do seu negócio ou dos seus clientes, tornando a adoção da IA mais acessível e eficiente para
todos os envolvidos.
Objetivo Geral
Criar uma equipe para analisar a adoção de soluções de Inteligência Artificial de forma
econômica e eficiente em empresas, automatizando tarefas complexas e facilitando a tomada
de decisões estratégicas com base apenas no link do site da empresa.
Objetivos Específicos
• Configurar uma equipe de agentes especializados do CrewAI para realizar tarefas
específicas em um projeto real.
• Demonstrar a extração de informações detalhadas de um site corporativo usando
agentes autônomos.
• Pesquisar e identificar soluções de IA econômicas que possam ser integradas nos
processos da empresa.
• Realizar uma análise SWOT detalhada para fornecer insights estratégicos sobre a
CAPÍTULO 6. AGENTES IMPLANTADORES DE IA
126
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 128

AGENTES INTELIGENTES
empresa.
• Investigar e recomendar opções de financiamento para a adoção de IA, garantindo
viabilidade financeira.
• Consolidar todas as informações coletadas e gerar um relatório detalhado com recomen-
dações específicas de integração de IA.
Muito bem, com os objetivos definidos vamos montar nossa equipe!
6.1
PREPARAÇÃO DO AMBIENTE DE TRABALHO
Vamos preparar o ambiente do nosso escritório de agentes. A primeira coisa que faze-
mos é carregar as variáveis de ambiente do arquivo ’.env’. Para isso, utilizamos a função
‘load_dotenv()‘. Isso garante que todas as credenciais e configurações necessárias estejam
disponíveis para o nosso script.
Para criar o arquivo ’.env’, basta abrir o seu editor de texto favorito e adicionar as suas
variáveis de ambiente no formato chave=valor. Aqui está um exemplo de como ele pode ser:
SERPER_API_KEY = your_serper_api_key
OPENAI_API_KEY = your_openai_api_key
Salve esse arquivo como ’.env’ no mesmo diretório do seu script Python. Assim, quando
chamamos ‘load_dotenv()‘, ele vai carregar essas variáveis e deixá-las disponíveis para uso
no código.
Depois disso, importamos as classes e ferramentas necessárias para criar e gerenciar
nossos agentes e tarefas. Instanciamos as ferramentas de pesquisa e scraping, ‘Serper-
DevTool‘ e ‘ScrapeWebsiteTool‘. Essas ferramentas permitem que nossos agentes realizem
buscas na web e extraíam informações de sites, respectivamente.
Em seguida, inicializamos dois modelos do OpenAI: ‘gpt_mini‘ e ‘gpt4o‘. O ‘gpt_mini‘ utiliza
o modelo ’gpt-4o-mini’, enquanto o ‘gpt4o‘ utiliza o modelo ’gpt-4o’. Esses modelos serão
usados pelos agentes para gerar respostas e realizar outras tarefas baseadas em linguagem
natural.
CAPÍTULO 6. AGENTES IMPLANTADORES DE IA
127
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 129

AGENTES INTELIGENTES
from
dotenv
import
load_dotenv
from
crewai
import Agent , Task , Crew , Process
from
crewai_tools
import
SerperDevTool , ScrapeWebsiteTool
# Carregar
variáveis de ambiente do arquivo .env
load_dotenv ()
# Ferramentas de pesquisa e scraping
search_tool = SerperDevTool ()
scrape_tool = ScrapeWebsiteTool ()
# Inicializar o modelo
OpenAI
gpt_mini = ’gpt -4o-mini ’
gpt4o = ’gpt -4o’
6.2
DESVENDANDO DADOS DE WEBSITES
Vamos criar nossos agentes. O primeiro agente será aquele que buscará os dados brutos
da sua empresa ou da empresa do seu cliente baseado no endereço (URL) de um site.
Primeiro, criamos um agente chamado ‘agente_extracao‘. Este agente tem o papel de
’Extrator de Informações de Site’ e seu objetivo é coletar informações detalhadas sobre os
serviços, produtos e operações da empresa a partir do site especificado pela URL. Note
que usamos o placeholder ‘site_url‘ no objetivo do agente. Um placeholder é um marcador
que será substituído por um valor específico durante a execução. Nesse caso, ‘site_url‘ será
substituído pela URL do site da empresa que estamos analisando.
Configuramos o agente para ser verbose=True, o que significa que ele fornecerá saídas
detalhadas durante a execução, e memory=True, permitindo que ele mantenha informações em
memória ao longo do processo. O agente usa o modelo ‘gpt_mini‘ para processar linguagem
natural e possui uma história de fundo que o caracteriza como um especialista em scraping de
sites e coleta de informações relevantes. Finalmente, adicionamos a ferramenta ‘scrape_tool‘
ao agente, que será utilizada para realizar a coleta de dados do site.
CAPÍTULO 6. AGENTES IMPLANTADORES DE IA
128
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 130

AGENTES INTELIGENTES
# Agente de Extração
agente_extracao = Agent(
role=’Extrator de Informações de Site ’,
backstory=f""" Você é um especialista em scraping de sites
e coleta de informações relevantes.""",
goal=f""" Coletar
informações detalhadas
sobre
os serviços , produtos e operações da empresa a partir
do site {site_url }. As informações extraídas serão a
base para que o agente de soluções de IA avalie os
dados do site. Identifique o ’core
business ’ ou
’core
product ’ da empresa. Isso é muito
importante
para
realizar
uma análise
personalizada
em outras
etapas.""",
verbose=True ,
memory=True ,
llm=gpt_mini ,
tools =[ scrape_tool]
)
A importância desse agente não pode ser subestimada.
Ele é a base para outros
agentes que dependerão das informações coletadas para realizar análises mais avançadas
e personalizadas. Sem os dados brutos coletados pelo ‘agente_extracao‘, seria impossível
para os outros agentes, como aqueles que geram soluções de IA, realizarem suas tarefas de
forma eficaz. Em essência, ele é o pilar fundamental que sustenta todo o processo de análise
e tomada de decisão.
Tarefa de Extração de Informações
Agora, vamos definir a tarefa que será executada pelo ‘agente_extracao‘. Esta tarefa
envolve a extração de informações detalhadas sobre os serviços, produtos e operações da
empresa a partir do site fornecido.
A tarefa é chamada ‘extrair_informacoes_site‘ e inclui uma descrição clara do que deve
ser feito, além de um resultado esperado específico. A ferramenta ‘scrape_tool‘ será usada
para realizar a coleta de dados, e a tarefa será atribuída ao ‘agente_extracao‘.
CAPÍTULO 6. AGENTES IMPLANTADORES DE IA
129
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 131

AGENTES INTELIGENTES
# Tarefa de extração de informações
extrair_informacoes_site = Task(
description=’Extrair
informações detalhadas
sobre os serviços ,
produtos e operações da empresa a partir do site {site_url }.’,
expected_output =’Um relatório
detalhado
contendo as
informações sobre
serviços , produtos e operações da empresa.’,
tools =[ scrape_tool],
agent= agente_extracao
)
Essa tarefa é essencial para garantir que tenhamos uma base de dados sólida e detalhada
sobre a empresa, permitindo análises e decisões mais informadas nas etapas seguintes. O
relatório gerado pelo ‘extrair_informacoes_site‘ servirá como um recurso valioso para outros
agentes que realizam análises mais profundas ou geram soluções de IA personalizadas.
6.3
EXPLORANDO SOLUÇÕES INTELIGENTES
Agora que temos o ‘agente_extracao‘ coletando dados detalhados, precisamos de um
agente que possa analisar esses dados e encontrar soluções de Inteligência Artificial adequa-
das para a empresa.
Criamos o ‘agente_solucoes_ia‘, cujo papel é ’Pesquisador de Soluções de IA’. O ob-
jetivo desse agente é receber os dados do site ‘site_url‘ e o "core business"ou "core pro-
duct"identificado pelo ‘agente_extracao‘. Baseado na extração, ele deve encontrar soluções de
Inteligência Artificial que sejam econômicas e que possam ser integradas nos processos da
empresa. Soluções econômicas também incluem aquelas que reduzem o custo da empresa,
sempre considerando o "core business"ou "core product".
Configuramos o agente para ser verbose=True, para fornecer saídas detalhadas durante
a execução, e memory=True, permitindo que ele mantenha informações em memória ao
longo do processo. O agente usa o modelo ‘gpt_mini‘ e possui uma história de fundo que
o caracteriza como um especialista em tecnologias de IA, capaz de encontrar as melhores
soluções para diferentes tipos de empresas. A ferramenta ‘search_tool‘ é adicionada ao agente
para ajudá-lo a pesquisar soluções de IA.
CAPÍTULO 6. AGENTES IMPLANTADORES DE IA
130
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 132

AGENTES INTELIGENTES
# Agente de Soluções de IA
agente_solucoes_ia = Agent(
role=’Pesquisador de Soluções de IA’,
backstory=f""" Você tem amplo
conhecimento em tecnologias de IA
e é capaz de encontrar as melhores
soluções para
diferentes
tipos de empresas.""",
goal=f""" Você receberá dados do site {site_url} e o "core
business" ou "core
product" identificado . Baseado na extração,
você deve
encontrar
soluções de Inteligência
Artificial
que
sejam
econômicas e que possam ser
integradas
nos
processos
da empresa. Soluções econômicas
também são aquelas
que
reduzem o custo da empresa. Leve
sempre em consideração
o "core
business" ou "core
product" da empresa.""",
verbose=True ,
memory=True ,
llm=gpt_mini ,
tools =[ search_tool]
)
Esse agente é crucial para garantir que as soluções de IA propostas sejam adequadas e
econômicas, contribuindo para a eficiência operacional da empresa.
Tarefa de Pesquisa de Soluções de IA
Vamos definir a tarefa que será executada pelo ‘agente_solucoes_ia‘. Esta tarefa en-
volve a pesquisa de soluções de IA que podem ser integradas nos processos da empresa,
considerando ferramentas e tecnologias que sejam acessíveis e eficientes.
A tarefa é chamada ‘pesquisar_solucoes_ia‘ e inclui uma descrição clara do que deve ser
feito, além de um resultado esperado específico. A ferramenta ‘search_tool‘ será usada para
realizar a pesquisa, e a tarefa será atribuída ao ‘agente_solucoes_ia‘.
CAPÍTULO 6. AGENTES IMPLANTADORES DE IA
131
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 133

AGENTES INTELIGENTES
# Tarefa de pesquisa de soluções de IA
pesquisar_solucoes_ia = Task(
description=’Pesquisar
soluções de IA econômicas que podem
ser
integradas
nos
processos da empresa. Considerar
ferramentas e tecnologias
que sejam
acessíveis e eficientes.’,
expected_output =’Uma lista de soluções de IA com
detalhes
sobre custos , benefícios e possíveis
aplicações.’,
tools =[ search_tool],
agent= agente_solucoes_ia
)
Essa tarefa é essencial para identificar as melhores soluções de IA disponíveis, garantindo
que a empresa possa implementar tecnologias avançadas de forma econômica e eficiente.
O relatório gerado pelo ‘pesquisar_solucoes_ia‘ fornecerá uma lista detalhada de opções,
permitindo uma escolha informada das tecnologias a serem adotadas.
6.4
ELES FAZEM MATRIZ SWOT
Para complementar nosso conjunto de agentes, vamos criar um agente especializado
em análise estratégica usando a matriz SWOT. Este agente ajudará a empresa a identificar
e alavancar suas forças, mitigar fraquezas, explorar oportunidades de mercado e prever
ameaças externas.
Criamos o ‘analista_swot‘, cujo papel é ’Analista e Consultor SWOT’. O objetivo desse
agente é analisar as informações coletadas e fornecer análises estratégicas detalhadas e
precisas, auxiliando a empresa na identificação e alavancagem de suas forças, mitigação de
fraquezas, exploração de oportunidades de mercado e previsão de ameaças externas.
Configuramos o agente para ser verbose=True, para fornecer saídas detalhadas durante
a execução, e memory=True, permitindo que ele mantenha informações em memória ao
longo do processo. O agente usa o modelo ‘gpt_mini‘ e possui uma história de fundo que
o caracteriza como um especialista em análise estratégica, utilizando a matriz SWOT para
fornecer uma avaliação abrangente das forças, fraquezas, oportunidades e ameaças de uma
organização. A abordagem detalhada e orientada por dados garante que cada análise seja
adaptada às necessidades específicas do cliente, resultando em planos de ação precisos e
impactantes.
CAPÍTULO 6. AGENTES IMPLANTADORES DE IA
132
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 134

AGENTES INTELIGENTES
# Agente de Análise SWOT
analista_swot = Agent(
role=’Analista e Consultor
SWOT ’,
backstory=f""" Você é um especialista em análise
estratégica ,
utilizando a matriz
SWOT para
fornecer
uma avaliação abrangente
das forças , fraquezas , oportunidades e ameaças de uma
organização. Este método analítico
permite
identificar e
alavancar
pontos
fortes
internos , mitigar
fraquezas , explorar
oportunidades de mercado e prever
ameaças externas.
Ao aplicar a matriz SWOT , você ajuda
empresas a desenvolver
estratégias
eficazes
que
maximizam
seu
potencial
competitivo ,
aprimoram a tomada de decisões e promovem um crescimento
sustentável. Sua
abordagem
detalhada e orientada
por dados
garante
que cada análise seja
adaptada às necessidades
específicas do cliente , resultando em planos de ação precisos
e impactantes.""",
goal=f""" Analisar as informações coletadas e fornecer análises
estratégicas
detalhadas e precisas
para
ajudar a empresa a
identificar e alavancar
suas forças , mitigar
fraquezas , explorar
oportunidades de mercado e prever
ameaças externas.""",
verbose=True ,
memory=True ,
llm=gpt_mini ,
tools =[ search_tool]
)
Esse agente é crucial para fornecer uma visão estratégica detalhada e precisa da empresa,
permitindo que ela tome decisões informadas e desenvolva estratégias eficazes.
Tarefa de Análise SWOT
Vamos definir a tarefa que será executada pelo ‘analista_swot‘. Esta tarefa envolve a
análise das informações coletadas e a geração de uma análise SWOT detalhada da empresa,
identificando forças, fraquezas, oportunidades e ameaças.
A tarefa é chamada ‘analise_swot‘ e inclui uma descrição clara do que deve ser feito, além
de um resultado esperado específico. A ferramenta ‘search_tool‘ será usada para auxiliar na
coleta de dados necessários para a análise, e a tarefa será atribuída ao ‘analista_swot‘.
CAPÍTULO 6. AGENTES IMPLANTADORES DE IA
133
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 135

AGENTES INTELIGENTES
# Tarefa de análise SWOT
analise_swot = Task(
description=’Analisar as informações coletadas e fornecer
análises
estratégicas
detalhadas e precisas
utilizando a
matriz
SWOT. Identificar
forças , fraquezas , oportunidades
e ameaças da empresa
com base nas
informações coletadas.’,
expected_output =’Um relatório
detalhado
com a análise SWOT
da empresa , incluindo
forças , fraquezas , oportunidades
e ameaças.’,
tools =[ search_tool],
agent=analista_swot
)
Essa tarefa é essencial para garantir que a empresa tenha uma visão clara de seus pontos
fortes e fracos, bem como das oportunidades e ameaças no mercado. O relatório gerado
pelo ‘analise_swot‘ fornecerá uma base sólida para a tomada de decisões estratégicas e o
desenvolvimento de planos de ação eficazes.
6.5
AGENTE PARA ENCONTRAR FINANCIAMENTO PARA EMPRESA
Vamos criar um agente especializado em financiamento empresarial. Este agente buscará
oportunidades reais de financiamento para a adoção de IA pela empresa, identificando e
alavancando a implantação de inteligência artificial de forma personalizada e real.
Criamos o ‘analista_financiamento‘, cujo papel é ’Analista de Financiamento Empresarial’.
O objetivo desse agente é procurar na web por oportunidades reais de financiamento da
adoção de IA pela empresa. Ele deve identificar e alavancar a implantação de inteligência
artificial na empresa, oferecendo uma análise personalizada e real, com possíveis valores e
instituições de financiamento.
Configuramos o agente para ser verbose=True, para fornecer saídas detalhadas durante
a execução, e memory=True, permitindo que ele mantenha informações em memória ao longo
do processo. O agente usa o modelo ‘gpt_mini‘ e possui uma história de fundo que o caracte-
riza como um especialista em financiamento empresarial, encontrando formas inovadoras e
eficazes de captar recursos para empresas.
CAPÍTULO 6. AGENTES IMPLANTADORES DE IA
134
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 136

AGENTES INTELIGENTES
# Agente de Financiamento
analista_financiamento = Agent(
role=’Analista de Financiamento
Empresarial ’,
backstory=f""" Você é um especialista em financiamento
empresarial ,
encontrando
formas
inovadoras e eficazes de captar
recursos
para
empresas. Com um profundo
conhecimento
das opções de financiamento
disponíveis (privados ou governamentais ), desde
empréstimos
tradicionais até investimentos de capital de risco e crowdfunding ,
você ajuda as empresas a identificar e acessar as melhores
fontes
de capital
para suas
necessidades
específicas.
Sua
habilidade em negociar
termos
favoráveis e sua
perspicácia
em elaborar
propostas
atraentes
garantem
que os negócios
obtenham
o financiamento
necessário para
crescer e prosperar.
Com sua
orientação, as empresas
conseguem não apenas
assegurar
recursos
financeiros , mas também fortalecer
sua posição no mercado
e atingir
seus
objetivos
estratégicos.""",
goal=f""" Procurar na web por
oportunidades
reais de financiamento
da adoção de IA pela
empresa. Identificar e alavancar a implantação
de inteligência
artificial na empresa. Não seja genérico nas
sugestões , quero uma análise
personalizada e real , com possíveis
valores e instituições de financiamento .""",
verbose=True ,
memory=True ,
llm=gpt_mini ,
tools =[ search_tool]
)
Esse agente é crucial para garantir que a empresa encontre as melhores oportunidades
de financiamento disponíveis, permitindo a implantação de soluções de IA de forma eficiente e
econômica.
Tarefa de Financiamento Estratégico
Vamos definir a tarefa que será executada pelo ‘analista_financiamento‘. Esta tarefa
envolve a realização de uma análise detalhada das opções de financiamento disponíveis para
a empresa.
A tarefa é chamada ‘financiamento_estrategico‘ e inclui uma descrição clara do que
deve ser feito, além de um resultado esperado específico. A ferramenta ‘search_tool‘ será
usada para auxiliar na pesquisa de opções de financiamento, e a tarefa será atribuída ao
CAPÍTULO 6. AGENTES IMPLANTADORES DE IA
135
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 137

AGENTES INTELIGENTES
‘analista_financiamento‘.
# Tarefa de financiamento
estratégico
financiamento_estrategico = Task(
description=f""" Realizar
uma análise
detalhada
das opções de
financiamento
disponíveis para a empresa. Investigar
diversas
fontes de capital
possíveis na web para a empresa
financiar a
adoção de inteligencia
artificial em seus
processos.
Analisar os termos , benefícios e riscos
associados
a cada opção e recomendar as melhores
estratégias para
captar
recursos.""",
expected_output =f""" Uma análise
detalhada
com uma
comparação
das opções de financiamento
destacando as melhores
estratégias
para a empresa
captar
recursos. A análise deve
conter
listas
e tabelas
comparativas
que sirva de base para a escrita do
relatório final.""",
agent= analista_financiamento
)
Essa tarefa é essencial para identificar as melhores opções de financiamento disponíveis,
garantindo que a empresa possa captar os recursos necessários de forma eficiente. O
relatório gerado pelo ‘financiamento_estrategico‘ fornecerá uma análise detalhada das opções,
permitindo uma escolha informada das estratégias de captação de recursos.
6.6
CONSOLIDAÇÃO E ANÁLISE DE DADOS DE IA
Para finalizar nosso conjunto de agentes, vamos criar um agente que será responsável por
consolidar todas as informações extraídas, pesquisadas e analisadas pelos agentes anteriores.
Este agente terá a capacidade de criar um relatório final detalhado sobre como integrar IA de
maneira eficiente e econômica na empresa, considerando sempre o "core business"ou "core
product"identificado.
Criamos o ‘agente_analise_recomendacao‘, cujo papel é ’Consolidar e Analisar Dados
de IA’. O objetivo desse agente é consolidar todas as informações extraídas, pesquisadas e
analisadas pelos agentes anteriores. Ele deve criar um relatório final detalhado em formato
markdown sobre como integrar IA de maneira eficiente e econômica na empresa. A análise
deve ser personalizada, baseada em todas as informações disponíveis.
Configuramos o agente para ser verbose=True, para fornecer saídas detalhadas durante
CAPÍTULO 6. AGENTES IMPLANTADORES DE IA
136
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 138

AGENTES INTELIGENTES
a execução, e memory=True, permitindo que ele mantenha informações em memória ao longo
do processo. O agente usa o modelo ‘gpt4o‘ devido à sua capacidade cognitiva avançada,
necessária para gerar o relatório final. Ele possui uma história de fundo que o caracteriza como
um consultor experiente em tecnologias de IA, com habilidade em consolidar informações de
múltiplas fontes para fornecer uma visão abrangente e detalhada.
# Agente de Análise e Recomendação
agente_analise_recomendacao = Agent(
role=’Consolidar e Analisar
Dados de IA’,
goal=f""" Consolidar
todas as informações extraídas ,
pesquisadas e analisadas
pelos
agentes
anteriores.
Crie um relatório final
detalhado em formato
markdown
sobre
como
integrar IA de maneira
eficiente e econômica
na empresa em questão.
Leve
sempre em consideração o "core
business"
ou "core
product" identificado
para
gerar uma análise
personalizada
para a empresa. ’Não seja genérico!
Especialize o texto da análise com base em todas as
informações disponíveis
anteriormente . Gere um texto
com uma
combinação equilibrada de parágrafos
contínuos ,
subtópicos e listas (quando
necessário) e não se
preocupe
com o consumo
dos tokens de saída.
Quero uma análise
detalhada.""",
backstory=f""" Você é um consultor
experiente em
tecnologias de IA e tem um histórico
comprovado de
ajudar
empresas a implementar
soluções tecnológicas.
Sua
habilidade em consolidar
informações de múltiplas
fontes
garante
que você possa
fornecer
uma visão
abrangente e detalhada.""",
verbose=True ,
memory=True ,
llm=gpt4o ,
)
Esse agente é essencial para consolidar todas as informações e gerar um relatório final
detalhado, garantindo que a empresa possa integrar IA de forma eficiente e personalizada.
CAPÍTULO 6. AGENTES IMPLANTADORES DE IA
137
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 139

AGENTES INTELIGENTES
Tarefa de Análise e Recomendação
Vamos definir a tarefa que será executada pelo ‘agente_analise_recomendacao‘. Esta
tarefa envolve a consolidação de todas as informações extraídas, pesquisadas e analisadas
pelos agentes anteriores e a criação de um relatório final com recomendações detalhadas.
A tarefa é chamada ‘analisar_recomendar‘ e inclui uma descrição clara do que deve ser
feito, além de um resultado esperado específico. A ferramenta ‘search_tool‘ será usada para
auxiliar na consolidação de dados, e a tarefa será atribuída ao ‘agente_analise_recomendacao‘.
# Tarefa de análise e recomendação
analisar_recomendar = Task(
description=f""" Gerar um relatório final e consolidar
todas as informações extraídas , pesquisadas e analisadas
pelos
agentes
anteriores. Fornecer
recomendações
detalhadas
sobre
como
integrar IA de maneira
econômica
na empresa. O relatório deve
incluir um plano de ação e
sugestões específicas.""",
expected_output =f"""Um relatório
detalhado
com
recomendações sobre:
1 - Soluções de integração de IA na empresa;
2 - Análise Swot;
3 - Plano de ação;
4 - Possibilidades de financiamento ;
Não seja genérico. Quero números e reais
possibilidades .
5 - Sugestões específicas.
A saída deve ser em Markdown. É muito
importante
que
o texto não contenha
coisas
como "‘‘‘markdown" e "‘‘‘".""",
output_file=’analise.md’,
tools =[ search_tool],
agent= agente_analise_recomendacao
)
Essa tarefa é crucial para garantir que a empresa receba uma análise detalhada e
personalizada sobre a integração de IA, permitindo que ela tome decisões informadas e
desenvolva estratégias eficazes.
CAPÍTULO 6. AGENTES IMPLANTADORES DE IA
138
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 140

AGENTES INTELIGENTES
6.7
FORMANDO A TRIPULAÇÃO
Após definirmos todos os agentes e suas respectivas tarefas, o próximo passo é formar a
tripulação que irá executar o processo de integração de IA na empresa. Para isso, utilizamos a
classe ‘Crew‘, que permite a organização e coordenação dos agentes e tarefas de maneira
sequencial.
Primeiro, listamos todos os agentes que criamos: ‘agente_extracao‘, ‘agente_solucoes_ia‘,
‘analista_swot‘, ‘analista_financiamento‘ e ‘agente_analise_recomendacao‘. Cada um desses
agentes tem um papel específico no processo, garantindo que todas as etapas necessárias
para a implementação de IA sejam cobertas.
Em seguida, listamos as tarefas associadas a cada agente: ‘extrair_informacoes_site‘,
‘pesquisar_solucoes_ia‘, ‘analise_swot‘, ‘financiamento_estrategico‘ e ‘analisar_recomendar‘.
Essas tarefas definem as ações que cada agente deve realizar para atingir os objetivos do
processo.
Configuramos a tripulação para seguir um processo sequencial utilizando Process.sequential,
o que significa que cada tarefa será executada na ordem em que foi definida, garantindo uma
progressão lógica e organizada do trabalho.
# Formando a tripulação
crew = Crew(
agents =[ agente_extracao ,
agente_solucoes_ia ,
analista_swot ,
analista_financiamento , agente_analise_recomendacao ],
tasks =[ extrair_informacoes_site ,
pesquisar_solucoes_ia ,
analise_swot ,
financiamento_estrategico , analisar_recomendar ],
process=Process.sequential
)
Formar uma tripulação com agentes especializados e tarefas bem definidas é essencial
para garantir a eficiência e eficácia do processo de integração de IA na empresa. É importante
lembrar de colocar os agentes e tarefas na sequência de execução correta para que cada
etapa do processo seja realizada de forma ordenada e lógica. Cada agente desempenha um
papel crucial e cada tarefa é uma peça fundamental para alcançar o objetivo final. Com essa
CAPÍTULO 6. AGENTES IMPLANTADORES DE IA
139
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 141

AGENTES INTELIGENTES
abordagem, conseguimos uma coordenação precisa e uma execução organizada de todas as
etapas necessárias para a implementação bem-sucedida de soluções de IA.
Agora vamos colocar nossos agentes em ação:
# Executando a tripulação
# vou
simplesmente
passar o site de um conhecido
# e os agentes vão gerar
toda a análise
site = ’https :// www. sapatariaecostura .com.br/’
result = crew.kickoff(inputs ={’site_url ’: site })
print(result)
6.8
O PRODUTO FINAL DOS AGENTES
# Relatório Final: Integração Eficiente de IA na Empresa
## Introdução
Este
relatório
detalha um plano de ação para a integração eficiente
e econômica de inteligência
artificial (IA) na empresa , considerando
seu core
business e as informações previamente
coletadas. A análise
inclui a identificação de soluções de IA aplicáveis , uma análise
SWOT , um plano de ação detalhado e possibilidades de financiamento
específicas
para o contexto da empresa.
## 1. Soluções de Integração de IA na Empresa
### Identificação do Core
Business
Para
integrar IA de maneira
eficiente , é fundamental
alinhar as
soluções tecnológicas ao core
business da empresa. Suponhamos
que a empresa
opere no setor de e-commerce , onde os principais
desafios
incluem a personalização da experiência do usuário , a
gestão de estoque e a otimização logística.
CAPÍTULO 6. AGENTES IMPLANTADORES DE IA
140
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 142

AGENTES INTELIGENTES
### Soluções de IA
1. ** Personalização da Experiência do Usuário**
- ** Recomendação de Produtos **:
Utilização de algoritmos de machine
learning
para
recomendar
produtos
com base no histórico de compras e
navegação dos usuários.
- ** Chatbots e Assistentes
Virtuais **:
Implementação de chatbots
para
atendimento ao cliente , utilizando
processamento de linguagem
natural (NLP) para
interações mais
eficientes e personalizadas .
2. ** Gestão de Estoque **
- ** Previsão de Demanda **:
Modelos
preditivos
para
antecipar a
demanda
por produtos , otimizando o estoque e reduzindo
custos de
armazenamento.
- ** Automação de Reabastecimento **:
Sistemas
automatizados
que
acionam
pedidos de reabastecimento
baseados em níveis críticos de
estoque.
3. ** Otimização Logística **
- ** Roteirização Inteligente **:
Algoritmos de otimização de rotas
para
entregas
mais rápidas e econômicas.
- **Análise de Dados em Tempo
Real **:
Monitoramento em tempo
real
para
ajustar
operações logísticas
conforme
necessário.
## 2. Análise SWOT
### Forças
- ** Capacidade de Personalização**: IA permite
uma
personalização
significativa da experiência do cliente , aumentando a satisfação e
fidelização.
- ** Eficiência
Operacional **: Automação de processos e otimização logí
stica
reduzem
custos
operacionais e melhoram a eficiência.
CAPÍTULO 6. AGENTES IMPLANTADORES DE IA
141
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 143

AGENTES INTELIGENTES
### Fraquezas
- ** Custo
Inicial **:
Implementar
soluções de IA pode
demandar um
investimento
inicial
significativo em infraestrutura e
desenvolvimento.
- ** Complexidade Técnica **: A integração de IA requer
habilidades té
cnicas
avançadas , que podem não estar
disponíveis
internamente .
### Oportunidades
- ** Crescimento do E-commerce **: O aumento
contínuo das vendas
online
oferece um mercado
crescente
para soluções de IA.
- ** Financiamento e Incentivos **:
Existem
diversas opções de
financiamento e incentivos
governamentais
para
projetos de IA.
### Ameaças
- ** Concorrência **:
Empresas
concorrentes
também estão investindo em IA
, o que pode
aumentar a competitividade do mercado.
- ** Regulamentação**: Mudanças regulatórias
podem
impactar o uso de
dados e a implementação de soluções de IA.
## 3. Plano de Ação
### Fase 1: Planejamento e Avaliação
1. ** Mapeamento de Necessidades **:
Identificar as áreas da empresa
que
mais se beneficiariam da IA.
2. ** Avaliação de Fornecedores **:
Pesquisar e avaliar
fornecedores de
soluções de IA que melhor
atendam às necessidades
identificadas .
### Fase 2: Desenvolvimento e Implementação
1. ** Prova de Conceito (PoC)**:
Realizar
uma PoC para
validar a
viabilidade
das soluções de IA.
2. ** Desenvolvimento **:
Desenvolver e customizar as soluções de IA
conforme as especificações da empresa.
3. ** Integração**:
Integrar as soluções de IA aos
sistemas
existentes ,
garantindo a interoperabilidade .
### Fase 3: Treinamento e Capacitação
1. ** Capacitação de Equipe **:
Treinar a equipe
interna
para
operar e
manter as soluções de IA.
2. ** Criação de Protocolos **:
Estabelecer
protocolos e melhores prá
ticas
para o uso contínuo das
tecnologias de IA.
CAPÍTULO 6. AGENTES IMPLANTADORES DE IA
142
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 144

AGENTES INTELIGENTES
### Fase 4: Monitoramento e Otimização
1. ** Monitoramento
Contínuo **:
Implementar
sistemas de monitoramento
para
avaliar o desempenho
das soluções de IA em tempo
real.
2. ** Ajustes e Melhorias **:
Realizar
ajustes
contínuos e melhorias
com
base no feedback e nas métricas de desempenho.
## 4. Possibilidades de Financiamento
### Chamada Pública da Finep
- ** Montante
Total **: R$ 170 milhões em subvenção econômica não
reembolsável.
- **Público -Alvo **:
Empresas
que
desenvolvem
soluções de IA aplicáveis
ao setor público e privado.
- ** Benefícios **: Subvenção não reembolsável , suporte
adicional em
termos de consultoria e acompanhamento do projeto.
- ** Riscos **:
Burocracia e alta
competitividade .
### Empréstimos
Tradicionais
- ** Taxa de Juros **: Variável , dependendo do banco e
do perfil de crédito da empresa.
- ** Prazos de Pagamento **: Entre 1 a 10 anos.
- ** Benefícios **:
Flexibilidade de uso e rapidez na aprovação.
- ** Riscos **:
Aumento do endividamento e custo
elevado de juros.
### Crowdfunding
- ** Plataformas **: Kickstarter , Indiegogo e Catarse.
- ** Modelo **:
Baseado em doações , recompensas ou equity.
- ** Benefícios **: Validação de mercado e aumento de visibilidade .
- ** Riscos **:
Incerteza na arrecadação e demanda de tempo e esforço.
## 5. Sugestões Específicas
1. ** Participação na Chamada Pública da Finep **:
Preparar um projeto
detalhado e submetê-lo à Finep
para
obter
subvenção não reembolsável. Este
financiamento
pode
cobrir
grande
parte dos custos
iniciais de implementação de IA.
2. ** Empregando
Crowdfunding
para
Validação de Mercado **:
Lançar uma
campanha de crowdfunding
para
arrecadar
fundos e
validar a aceitação do mercado
para as novas
soluções de IA.
3. ** Aproveitamento de Linhas de Crédito
Específicas **:
Explorar
linhas
de crédito
oferecidas
por bancos que
possuem
programas
específicos
para
inovação e tecnologia , como o BNDES.
CAPÍTULO 6. AGENTES IMPLANTADORES DE IA
143
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 145

AGENTES INTELIGENTES
## Conclusão
A integração de IA na empresa
deve ser
planejada de forma
estratégica , considerando o core
business e as necessidades
específicas. A escolha
das opções de financiamento
deve ser
baseada em uma análise
detalhada
dos benefícios e riscos de cada
alternativa. Com um plano de ação bem
estruturado e o
aproveitamento
das
oportunidades de financiamento , a empresa
poderá implementar
soluções de IA de maneira
eficiente e
econômica , garantindo
vantagem
competitiva e crescimento
sustentável.
Neste capítulo, exploramos a implementação prática de agentes autônomos para a
integração de Inteligência Artificial (IA) em projetos reais. Abordamos desde a preparação do
ambiente de trabalho até a criação e coordenação de agentes especializados, culminando
na geração de um relatório final detalhado sobre como integrar IA de maneira eficiente e
econômica na empresa. Cada etapa foi cuidadosamente planejada e executada, demonstrando
como os agentes autônomos podem colaborar para resolver problemas complexos e fornecer
insights valiosos para a tomada de decisões estratégicas.
Os exemplos práticos mostraram a importância de cada agente e tarefa no processo de
integração de IA, destacando a necessidade de uma abordagem coordenada e sequencial.
Desde a extração de informações detalhadas de um site até a análise SWOT e a busca por
opções de financiamento, cada agente desempenhou um papel crucial para alcançar o objetivo
final. A formação de uma Crew bem estruturada garantiu a eficiência e eficácia do processo,
permitindo uma implementação bem-sucedida de soluções de IA.
Próximo Capítulo
No próximo capítulo, vamos nos aprofundar na automação na área jurídica, especifi-
camente na automação de petições. Exploraremos como a Inteligência Artificial pode ser
utilizada para otimizar a criação e gestão de documentos legais, reduzindo o tempo e o esforço
necessários para a preparação de petições e outros documentos jurídicos. Esta abordagem
promete trazer grandes benefícios para profissionais do direito, aumentando a produtividade e
a precisão na elaboração de documentos legais.
CAPÍTULO 6. AGENTES IMPLANTADORES DE IA
144
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 146

AGENTES INTELIGENTES
CAPÍTULO 7
Os agentes da Liga da Justiça
Imagine um cenário onde advogados e juízes têm superpoderes tecnológicos à sua
disposição. Não estamos falando de capas e máscaras, mas sim de agentes inteligentes
que transformam a prática jurídica e os processos judiciais. Esses ’heróis’ tecnológicos,
alimentados pelo CrewAI, podem ser assistentes indispensáveis em escritórios de advocacia
e tribunais, tornando o sistema judicial mais eficiente, preciso e acessível.
Os assistentes de advocacia são como escudeiros digitais, sempre prontos para ajudar
na pesquisa jurídica automatizada. Esses agentes podem buscar jurisprudências, doutrinas
e legislação relevante para casos específicos em tempo recorde. Imagine a economia de
tempo e o aumento de precisão ao receber resultados detalhados e atualizados com apenas
alguns cliques. Isso permite aos advogados focarem em estratégias e argumentos, enquanto
a máquina cuida do trabalho pesado.
Quando se trata de redação e análise de documentos, os agentes inteligentes são
verdadeiros mestres das palavras. Eles podem auxiliar na criação de contratos, petições e
outros documentos legais, garantindo que tudo esteja em conformidade com as normas. Isso
não só reduz os erros humanos, mas também aumenta a eficiência, especialmente ao lidar
com grandes volumes de documentos. A meta desses agentes é clara: aumentar a precisão e
a eficiência do trabalho jurídico.
Além disso, a consultoria automatizada para clientes pode ser uma revolução no aten-
dimento dos escritórios. Bots de IA podem fornecer respostas preliminares para perguntas
comuns, triando questões antes de envolver advogados humanos. Isso significa atendimento
24/7, melhorando a experiência do cliente e liberando os advogados para casos mais comple-
xos.
Nos tribunais, os assistentes são igualmente poderosos. O gerenciamento de processos
é simplificado com agentes inteligentes que automatizam a entrada e o rastreamento de
informações dos casos, facilitando o fluxo de trabalho administrativo. Isso aumenta a eficiência
e reduz o tempo de processamento, essencial para um sistema judicial mais ágil.
CAPÍTULO 7. OS AGENTES DA LIGA DA JUSTIÇA
145
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 147

AGENTES INTELIGENTES
A assistência em audiências virtuais é um campo emergente onde os agentes inteligentes
fazem a diferença. Eles podem gerenciar audiências online, coordenar agendas e transcrever
diálogos em tempo real. Isso facilita o acesso à justiça, especialmente em áreas remotas ou
durante crises que limitam interações presenciais. Digo isso porque estou mentorando um
processo de adoção de agentes inteligentes na Justiça exatamente com esse intuito.
Por fim, a análise de sentenças e recomendações é crucial para garantir a equidade. Sis-
temas de IA podem analisar sentenças passadas para oferecer recomendações consistentes
e justas, promovendo decisões informadas por precedentes e padrões estabelecidos.
Os desafios são inevitáveis, mas não intransponíveis. Privacidade e segurança devem
ser garantidas para proteger dados confidenciais. A ética e a transparência são fundamentais
para que a IA opere de maneira justa e compreensível. E, claro, a integração e aceitação por
advogados e funcionários de tribunais são essenciais para o sucesso.
A implementação bem-sucedida de agentes inteligentes na advocacia e nos tribunais,
através do CrewAI, pode transformar a justiça. Com precauções adequadas, esses sistemas
podem ser utilizados de maneira responsável e equitativa, trazendo um novo nível de eficiência
e acessibilidade ao sistema jurídico.
7.1
AGENTES LEGAIS
Antes de começarmos a criar os agentes deste exemplo prático, é importante ressaltar que
todos os dados expostos nos exemplos são fictícios. O uso de dados reais em exemplos pode
causar problemas, especialmente em relação à privacidade e segurança das informações. A
Lei Geral de Proteção de Dados (LGPD) no Brasil, por exemplo, estabelece diretrizes rigorosas
sobre como os dados pessoais devem ser tratados, protegendo os direitos de privacidade
dos indivíduos. É fundamental respeitar essas leis para evitar penalidades legais e proteger a
integridade dos dados das pessoas envolvidas.
Além disso, o uso de dados fictícios em exemplos práticos é uma prática recomendada
para fins educacionais e de desenvolvimento. Isso garante que não haja riscos de exposição de
informações sensíveis ou pessoais, cumprindo as normas de conformidade com as legislações
de proteção de dados. Assim, podemos focar no aprendizado e na aplicação das tecnologias
sem comprometer a privacidade e a segurança dos dados.
Os dados utilizados em nossos agentes são enviados para o servidor da OpenAI. É
essencial que, ao realizar qualquer tipo de envio de dados privados para esses servidores,
sejam tomadas todas as precauções necessárias para garantir a proteção e a confidencialidade
das informações. A OpenAI tem políticas de segurança robustas, mas a responsabilidade pelo
cuidado com os dados começa com o usuário. Evite enviar informações pessoais sensíveis ou
CAPÍTULO 7. OS AGENTES DA LIGA DA JUSTIÇA
146
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 148

AGENTES INTELIGENTES
confidenciais sem a devida análise e segurança.
É recomendável que se faça uma avaliação de riscos e se estabeleçam protocolos de
segurança para a transferência de dados. Isso pode incluir a anonimização de dados, o uso
de criptografia durante a transmissão e o armazenamento seguro das informações. Esses
passos são cruciais para garantir que os dados permaneçam protegidos contra acessos não
autorizados e possíveis violações.
Para garantir ainda mais a segurança, recomenda-se o uso de Modelos de Linguagem
Natural (LLM) locais. Utilizar LLMs locais permite que dados protegidos possam ser acessados
e processados de forma segura, sem a necessidade de envio para servidores externos. No
terceiro livro da série CrewAI - Avançado, mostrarei como executar LLMs locais e como
retreinar um LLM para atender a necessidades específicas.
Além disso, explicarei como criar um sistema de Recuperação de Informação com Ge-
ração de Respostas (RAG), que permite realizar consultas semânticas de texto de maneira
eficiente. O RAG combina o poder de recuperação de informação com a geração de respostas,
permitindo que consultas complexas sejam respondidas de forma precisa e contextualizada,
utilizando bases de dados locais e protegidas. Isso garante um nível adicional de segurança e
conformidade com as regulamentações de proteção de dados.
7.2
ESCREVENDO PETIÇÕES
O dia-a-dia de um escritório de advocacia é bem corrido, com advogados frequentemente
lidando com prazos apertados e uma montanha de documentos para revisar e redigir. A escrita
de petições é uma tarefa fundamental, mas que pode consumir muito tempo e energia. Feliz-
mente, com a ajuda do CrewAI, podemos automatizar boa parte desse processo, permitindo
que os advogados se concentrem em atividades mais estratégicas e complexas.
Neste exemplo prático, configuramos um sistema de agentes inteligentes para ajudar
na criação de petições jurídicas. Utilizamos ferramentas específicas para leitura de arquivos
YAML e templates em Markdown, permitindo a extração de dados e a estruturação automática
dos documentos. Esse processo não só acelera a produção de petições, mas também melhora
a precisão e consistência, garantindo que todos os documentos estejam em conformidade
com as normas legais e formatados corretamente. Vamos detalhar cada etapa e componente
dessa configuração para que você possa replicar e adaptar essa solução conforme necessário
em seu próprio ambiente de trabalho.
CAPÍTULO 7. OS AGENTES DA LIGA DA JUSTIÇA
147
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 149

AGENTES INTELIGENTES
7.3
O QUE VAMOS PEDIR
As petições jurídicas não seguem um formato único, variando de acordo com o tipo de
ação, o tribunal e a jurisdição. No entanto, podemos identificar certos dados que são cruciais
para a elaboração de qualquer petição. Informações como os dados das partes envolvidas, a
descrição dos fatos, a fundamentação jurídica e os pedidos são elementos essenciais que
precisam ser claramente apresentados. Garantir a correta inclusão e organização desses
dados é fundamental para a eficácia da petição.
Vamos utilizar um arquivo YAML como fonte de dados para nossa petição. Este arquivo
contém várias seções essenciais, começando pelo enderecamento, onde especificamos o
tribunal, vara, comarca, número do processo e o nome do juiz. Na seção partes, temos
as informações detalhadas do autor e do réu, incluindo nome, nacionalidade, estado civil,
profissão, RG, CPF e endereço. A seção advogado inclui os dados do advogado responsável,
como nome, OAB, endereço, telefone e e-mail, bem como sua área de atuação.
Os fatos descrevem o evento que levou à ação judicial, com detalhes como data, lo-
cal e uma descrição detalhada do incidente, além dos impactos sofridos pelo autor.
A
fundamentacao_juridica fornece os artigos de lei relevantes, jurisprudência e princípios
jurídicos aplicáveis ao caso. Na seção pedidos, especificamos as solicitações ao tribunal,
como a citação do réu, a procedência da ação e o valor da indenização. As provas incluem
documentos, testemunhas e perícia necessários para comprovar os fatos alegados. Por fim,
a seção de medidas_antecipatorias detalha qualquer pedido liminar para proteger o autor
enquanto o processo está em andamento, e a assinatura finaliza o documento com a data,
local e assinatura do advogado responsável.
Claro que você pode mudar a estrutura do YAML como quiser, adaptando-o às necessida-
des específicas de cada caso. Além disso, é importante vislumbrar que esses dados podem
vir diretamente de um banco de dados, eliminando completamente a necessidade do arquivo
YAML. No entanto, para fins educacionais, vamos utilizar o YAML como nossa fonte de dados,
demonstrando como podemos automatizar e estruturar a criação de petições jurídicas de
maneira eficiente.
CAPÍTULO 7. OS AGENTES DA LIGA DA JUSTIÇA
148
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 150

AGENTES INTELIGENTES
Abaixo está nosso YAML que você pode alterar com os dados da petição:
peticao:
enderecamento:
tribunal: "Tribunal de Justiça do Estado de Goiás"
vara: "1a Vara Cível"
comarca: "Goiânia"
processo: "04458320853480 "
juiz: José Justo
partes:
autor:
nome: "João do Pé de Feijão"
nacionalidade: "Brasileiro"
estado_civil: "Solteiro"
profissao: "Pedreiro"
rg: "MG -12.345.678"
cpf: "123.456.789 -00"
endereco: "Rua das sentido , 123, Centro , Goiânia ,
GO , 74000 -000"
reu:
nome: "Maria de Blablabla"
nacionalidade: "Brasileira"
estado_civil: "Casada"
profissao: "Advogada"
rg: "GO -98.765.432"
cpf: "987.654.321 -00"
endereco: "Avenida do Chão de Ouro , 456, Setor
Oeste , Goiânia , GO , 74000 -001"
advogado:
nome: "Dr. Sandeco
Macedo"
oab: "OAB/GO 12345"
endereco: "Alameda
dos Anjos , 789, Setor Sul ,
Goiânia , GO , 74000 -002"
telefone: "(62)
1234 -5678"
email: " sandeco@advocacia_doidera .com.br"
area_de_atuação: "Direito
Civil"
CAPÍTULO 7. OS AGENTES DA LIGA DA JUSTIÇA
149
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 151

AGENTES INTELIGENTES
Observe como elaborei os fatos, a fundamentação jurídica, os pedidos, as provas e as
medidas antecipatórias em tópicos concisos. É responsabilidade do agente transformá-los em
um texto jurídico fluido e coeso. Não se preocupe com a ausência de acentos nos campos do
YAML, pois isso é comum na computação.
fatos:
data_evento: "2023 -05 -20"
local_evento: "Praça Central , Goiânia"
descricao: >
- Autor foi vítima de ofensas
verbais
proferidas
pelo Réu
- Aconteceu em plena Praça Central de Goiânia
- Chamou o autor de mizeravi
- Grande
constrangimento e humilhação
impacto: >
- O Autor
sofreu
abalo
emocional
significativo
- Prejuizo de suas relações pessoais e profissionais
- Ele
necessitou de acompanhamento
psicológico.
fundamentacao_juridica :
artigos:
- codigo_civil: "Art. 186"
- codigo_civil: "Art. 927"
jurisprudencia : >
- direito à indenização por danos
morais
comprovado
principios_juridicos : "Princípio da Dignidade da
Pessoa
Humana"
pedidos:
citacao_reu: "Réu seja
formalmente
notificado."
procedencia_acao : "Pagamento de indenização por danos
morais."
valor_indenizacao : "R$ 50.000 ,00"
juros_correcao : True
custas_honorarios : True
provas:
documental:
- "Boletim de Ocorrência"
- "Relatórios médicos"
testemunhal:
- nome: "Ana Aninha Ana"
endereco: "Rua das Pal Meiras , 321, Centro ,
Goiânia , GO"
- nome: "Pedro
Pedreira
Noventa"
endereco: "Avenida
das Américas , 654, Setor
Bueno , Goiânia , GO"
pericial: "Perícia psicológica para
avaliação dos
CAPÍTULO 7. OS AGENTES DA LIGA DA JUSTIÇA
150
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 152

AGENTES INTELIGENTES
danos
emocionais."
medidas_antecipatorias :
pedido_liminar : "Proibição de contato do Réu com o
Autor"
justificativa: "Evitar
novas
ofensas e
constrangimentos "
urgencia: "Risco de dano
irreparável ao Autor"
assinatura:
local: "Goiânia"
data: "2024 -07 -30"
advogado:
nome: "Dr. Sandeco
Macedo"
oab: "OAB/GO 12345"
7.4
PREPARANDO O ESCRITÓRIO DE ADVOCACIA
Preparando o escritório para nossa equipe de agentes. Primeiro, carregue as variáveis
de ambiente necessárias usando a função load_dotenv() da biblioteca dotenv. Isso garantirá
que todas as chaves e configurações sensíveis estejam disponíveis para o nosso código. Em
seguida, importe as classes Agent, Task, Crew e Process do CrewAI.
Para que nossos agentes possam ler arquivos YAML e templates markdown, utilize a
ferramenta FileReadTool do crewai_tools. Defina uma instância dessa ferramenta: reader_tool,
apontando para os arquivos necessários.
Finalmente, inicialize o modelo OpenAI que nossos agentes usarão para processar
linguagem natural. Aqui, utilize o ChatOpenAI com o modelo ’gpt-4o-mini’. Essa configuração
permite que nossos agentes realizem tarefas complexas de leitura e escrita, utilizando um
modelo poderoso de IA.
Agora, veja o código completo abaixo:
CAPÍTULO 7. OS AGENTES DA LIGA DA JUSTIÇA
151
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 153

AGENTES INTELIGENTES
from
dotenv
import
load_dotenv
from
crewai
import Agent , Task , Crew , Process
from
crewai_tools
import
FileReadTool
# Ferramenta
para
leitura de arquivos
YAML
reader_tool = FileReadTool ()
# Carregar
variáveis de ambiente do arquivo .env
load_dotenv ()
# Inicializar o modelo
OpenAI
gpt_mini = ’gpt -4o-mini ’
7.5
CRIANDO OS ’ADVOGADOS’ VIRTUAIS
Vamos começando a ler o nosso arquivo dos dados da petição. Primeiro, definimos nosso
agente leitor_yaml. Este agente tem o papel de Leitor de Dados e seu objetivo é ler os dados
do arquivo YAML de uma petição. Esses dados são essenciais para que o agente escritor
possa redigir a petição com as informações corretas e apropriadas. Defina a role como ’Leitor
de Dados’ e o goal como ’Ler os dados do arquivo yaml de uma petição’.
Habilite o modo verboso (verbose) definindo-o como True para que possamos acompanhar
as ações do agente durante a execução. Também definimos a memória (memory) como True
para que o agente possa lembrar dos dados lidos ao longo do processo.
O backstory fornece uma narrativa ao agente, explicando que ele é um especialista em
leitura e interpretação de dados legais, com vasta experiência em processar informações de
documentos legais. Isso ajuda a contextualizar as habilidades do agente.
A ferramenta FileReadTool é atribuída ao agente através do parâmetro tools, permitindo
que ele leia os dados do arquivo YAML. Definimos allow_delegation como False, o que
significa que este agente não pode delegar tarefas a outros agentes. Finalmente, o modelo de
linguagem (llm) usado pelo agente é o gpt_mini.
Em seguida, criamos a tarefa leitura_dados. A description descreve que a tarefa é usar a
ferramenta de leitura para extrair os dados necessários do arquivo YAML para a petição. O
expected_output define que o resultado esperado são dados estruturados da petição prontos
para uso. Esta tarefa é atribuída ao agente leitor_yaml.
CAPÍTULO 7. OS AGENTES DA LIGA DA JUSTIÇA
152
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 154

AGENTES INTELIGENTES
Veja o código completo abaixo:
#Definindo
agente
leitor
leitor_yaml = Agent(
role=’Leitor de Dados ’,
goal=""" Ler os dados do arquivo {yaml} de uma
petição. Esses
dados
servirão de apoio
para
o escritor
redigir a petição apropriadamente
e com os dados
corretos.
Crie uma lista de seções que devem ser usadas
na petição e passe
para o escritor.""",
verbose=True ,
memory=True ,
backstory =(
"Você é um especialista em leitura e
interpretação de dados legais , "
"com vasta
experiência em processar
informações
de documentos
legais."
),
tools =[ reader_tool],
allow_delegation =False ,
llm=gpt_mini
)
# Definindo as tarefa do leitor
leitura_dados = Task(
description =(
"Use a ferramenta de leitura
para ler o arquivo
{yaml} e extrair os dados
necessários para a
petição."
),
expected_output =’Dados
estruturados da petição
prontos
para uso.’,
agent=leitor_yaml ,
)
Perceba que existe um placeholder yaml no texto de goal do agente. A referência do
arquivo YAML é usada como um marcador de posição que será substituído pelo caminho real
do arquivo durante a execução. Isso permite que o agente seja configurado de forma genérica,
podendo processar diferentes arquivos YAML conforme necessário sem a necessidade de
alterar o código base.
Além disso, esse placeholder facilita a reutilização do agente em diferentes contextos,
garantindo flexibilidade e eficiência na leitura dos dados. Quando o agente é instanciado e a
tarefa é executada, o valor de yaml é substituído pelo caminho específico do arquivo YAML a
CAPÍTULO 7. OS AGENTES DA LIGA DA JUSTIÇA
153
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 155

AGENTES INTELIGENTES
ser lido.
O agente escritor
Agora vamos criar o escritor. Este agente, denominado escritor, será responsável por
elaborar as petições com base nos dados fornecidos pelo agente leitor de YAML. Defina a
role como ’Escritor de Petições’. A backstory fornece uma narrativa ao agente, destacando
sua qualificação e experiência na elaboração de peças jurídicas precisas e persuasivas. Isso
ajuda a contextualizar as habilidades do agente, tornando-o apto a transformar dados brutos
em documentos jurídicos bem elaborados.
O goal do agente é claro: utilizar os dados fornecidos pelo agente leitor de YAML como
insumo para a escrita de uma nova petição. É crucial que todas as informações provenientes
do YAML estejam presentes no texto final. As seções como partes, fatos, fundamentação
jurídica, pedido, provas ou qualquer outra seção devem conter o título apropriado e o texto
deve ser escrito em parágrafos corridos, sem o uso de listas ou pontos numerados.
Habilite o modo verboso (verbose) definindo-o como True para acompanhar as ações
do agente durante a execução. Também defina a memória (memory) como True para que o
agente possa lembrar dos dados lidos ao longo do processo. O modelo de linguagem (llm)
usado pelo agente é o gpt_4o. Defina allow_delegation como False, indicando que este agente
não pode delegar tarefas a outros agentes.
Se em algum momento você sentir que a qualidade do texto gerado pelo agente escritor
não está satisfatória, considere trocar a mente do agente para um modelo mais potente, como
o GPT-4o. Isso pode melhorar significativamente a clareza e a persuasão dos argumentos
apresentados na petição.
Veja o código completo abaixo:
CAPÍTULO 7. OS AGENTES DA LIGA DA JUSTIÇA
154
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 156

AGENTES INTELIGENTES
escritor = Agent(
role=’Escritor de Petições’,
backstory=
""" Você é um advogado
altamente
qualificado
e experiente na elaboração de peças jurídicas
precisas e persuasivas. É reconhecido
por
sua
capacidade de articular
argumentos
convincentes
que
evidenciam os méritos
de cada caso , garantindo
que os interesses
de seus
clientes
sejam
representados
de forma
eficaz e justa. Você tem a grande
habilidade de transformar
dados
brutos em
belíssimas peças jurídicas.""",
goal=""" Você receberá os dados do agente
leitor de YAML ,
que devem ser usados
como
insumo
para a escrita
de uma nova petição. Todos os dados do YAML
devem
estar no texto. Não deixe
faltar
nenhuma
informação
proveniente do YAML na petição. Os textos de todas
as informações das seções , como partes , fatos ,
fundamentação jurídica , pedido , provas ou
qualquer
outra seção que venha do YAML ,
devem
conter o título da seção e o texto da seção
deve ser
escrito em parágrafos
corridos ,
sem pontos (1. 2. 3.) ou listas.""",
verbose=True ,
memory=True ,
llm=gpt_4o ,
allow_delegation =False
)
# Definindo a tarefa
escrita_peticao = Task(
description=
""" Escreva em Markdown
uma petição baseada
nos
dados do YAML. Crie a estrutura da petição de
acordo com os dados
fornecidos."""
,
expected_output =
’Uma petição bem
escrita e estruturada em
Markdown.’,
agent=escritor ,
)
CAPÍTULO 7. OS AGENTES DA LIGA DA JUSTIÇA
155
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 157

AGENTES INTELIGENTES
Agente revisor
O revisor é o agente encarregado de assegurar que a petição esteja livre de erros e com
a melhor qualidade possível antes de ser submetida. Vamos criar este agente, chamado
revisor. Defina a role como ’Revisor de Petições’. A backstory fornece um histórico detalhado,
enfatizando a meticulosidade e a precisão, habilidades essenciais para garantir a integridade
do documento final.
O goal do agente é revisar a petição, corrigir qualquer erro presente e assegurar que
o documento seja claro e preciso. Após revisar, o agente deve salvar a versão corrigida da
petição.
Ative o modo verboso (verbose) definindo-o como True para acompanhar as ações do
agente durante a execução. Defina a memória (memory) como True para que o agente possa
reter informações ao longo do processo. O modelo de linguagem (llm) usado pelo agente
é o gpt_mini. Configure allow_delegation como False, indicando que este agente não pode
repassar tarefas a outros agentes.
A tarefa revisao_peticao descreve que o agente deve revisar a petição escrita em Mark-
down, corrigir qualquer erro e garantir a precisão e clareza do texto. Após a revisão, o texto
deve ser salvo, assegurando que não contenha elementos indesejados como “‘markdown e
“‘.
Aqui está o código completo:
revisor = Agent(
role=’Revisor de Petições’,
goal=
""" Você revisará a petição escrita
para
garantir
precisão e clareza. Estando
tudo correto ,
salve
todo o texto
revisado da petição.""",
verbose=True ,
memory=True ,
backstory=
""" Você é um revisor
meticuloso
com um olhar
aguçado para detalhes , garantindo
que cada
petição esteja
livre de erros e bem
formulada."""
),
llm=gpt_mini ,
allow_delegation =False
)
CAPÍTULO 7. OS AGENTES DA LIGA DA JUSTIÇA
156
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 158

AGENTES INTELIGENTES
revisao_peticao = Task(
description=
""" Revise a petição escrita em Markdown
para
garantir
precisão e clareza. Estando
tudo
correto , salve
todo o texto
revisado da petição.
Retire
‘‘‘markdown.""",
expected_output =
"""Um arquivo de texto em Markdown
com a
petição revisada e pronta
para ser
submetida.
É muito
importante
que o texto não contenha
coisas
como "‘‘‘markdown" e "‘‘‘".""",
agent=revisor ,
output_file=’peticao.md’,
)
Com isso, configuramos o agente revisor para que ele possa garantir que a petição final
esteja impecável antes de ser submetida, corrigindo quaisquer erros e melhorando a clareza
do documento.
7.6
PRONTOS PARA O TRABALHO
Vamos configurar nossa Crew. A classe Crew é usada para agrupar nossos agentes e
tarefas, coordenando suas atividades para alcançar um objetivo comum. No código a seguir,
configuramos a Crew com os agentes leitor_yaml, escritor e revisor, e as tarefas leitura_dados,
escrita_peticao e revisao_peticao.
A configuração do process como Process.sequential indica que as tarefas serão execu-
tadas de forma sequencial, uma após a outra. Ativamos a memory definindo-a como True
para que a Crew possa lembrar dos dados e do progresso durante a execução. Da mesma
forma, ativamos o cache definindo-o como True para armazenar resultados intermediários,
melhorando a eficiência.
Veja o código completo abaixo:
CAPÍTULO 7. OS AGENTES DA LIGA DA JUSTIÇA
157
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 159

AGENTES INTELIGENTES
# Configurando o Crew
crew = Crew(
agents =[ leitor_yaml , escritor , revisor],
tasks =[ leitura_dados , escrita_peticao , revisao_peticao ],
process=Process.sequential ,
memory=True ,
cache=True
)
Com essa configuração, nossa Crew está pronta para operar de maneira coordenada,
garantindo que cada agente desempenhe seu papel e que as tarefas sejam executadas na
ordem correta.
Inputs
Um passo importante é a definição dos inputs que serão utilizados pelo Crew durante a
execução das tarefas. No nosso caso, definimos os inputs como um dicionário que inclui o
caminho do arquivo YAML, ’peticao.yaml’, que contém os dados da petição.
Em seguida, usamos o método kickoff da Crew para iniciar o processo. O método kickoff
coordena a execução das tarefas definidas, utilizando os agentes configurados. Ao chamar
kickoff, passamos os inputs previamente definidos, permitindo que o Crew leia e processe o
arquivo YAML, escreva a petição e revise o documento final.
Veja o código completo abaixo:
inputs = {’yaml ’:’peticao.yaml ’}
result = crew.kickoff(inputs=inputs)
7.7
A PETIÇÃO PRONTA
Nossa petição está pronta e segue a estrutura adequada para uma apresentação clara e
concisa ao juiz. A seguir, veja o conteúdo completo da petição:
CAPÍTULO 7. OS AGENTES DA LIGA DA JUSTIÇA
158
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 160

AGENTES INTELIGENTES
Ao MM Juízo da 1ª Vara Cível
da Comarca de Goiânia, Estado de Goiás
Processo nº 04458320853480
João do Pé de Feijão, brasileiro, solteiro, pedreiro, portador do RG nº MG-12.345.678
e do CPF nº 123.456.789-00, residente e domiciliado na Rua das Sentido, 123, Centro,
Goiânia, GO, 74000-000, por seu advogado que esta subscreve, Dr. Sandeco Macedo,
OAB/GO 12345, com escritório na Alameda dos Anjos, 789, Setor Sul, Goiânia, GO,
74000-002, onde recebe notificações e intimações, vem respeitosamente à presença de
Vossa Excelência propor a presente.
I. Ação de Indenização por Danos Morais
em face de Maria de Blablabla, brasileira, casada, advogada, portadora do RG nº
GO-98.765.432 e do CPF nº 987.654.321-00, residente e domiciliada na Avenida do
Chão de Ouro, 456, Setor Oeste, Goiânia, GO, 74000-001, pelos fatos e fundamentos
que passa a expor:
II. Dos Fatos
No dia 20 de maio de 2023, na Praça Central de Goiânia, o Autor foi vítima de ofensas
verbais proferidas pela Réu. Em plena praça pública, o Autor foi chamado de ’mizeravi’,
o que lhe causou grande constrangimento e humilhação. Como consequência desse
evento, o Autor sofreu abalo emocional significativo, prejuízo de suas relações pessoais
e profissionais, necessitando inclusive de acompanhamento psicológico.
III. Da Fundamentação Jurídica
A presente demanda encontra amparo nos artigos 186 e 927 do Código Civil, que
garantem o direito à indenização por danos morais comprovados. Ademais, invoca-se
o Princípio da Dignidade da Pessoa Humana, que resguarda a integridade moral do
indivíduo.
IV. Dos Pedidos
Diante do exposto, requer:
1. A citação do Réu para que, querendo, apresente resposta aos termos da presente
ação.
2. A procedência da ação, condenando o Réu ao pagamento de indenização por
danos morais no valor de R$ 50.000,00.
3. A incidência de juros e correção monetária sobre o valor da indenização.
4. A condenação do Réu ao pagamento das custas processuais e honorários advo-
catícios.
CAPÍTULO 7. OS AGENTES DA LIGA DA JUSTIÇA
159
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 161

AGENTES INTELIGENTES
V. Das Provas
Pretende o Autor provar o alegado por todos os meios de prova em direito admitidos,
especialmente pela seguinte prova documental:
• Boletim de Ocorrência
• Relatórios médicos
Prova testemunhal:
• Ana Aninha Ana, residente na Rua das Pal Meiras, 321, Centro, Goiânia, GO.
• Pedro Pedreira Noventa, residente na Avenida das Américas, 654, Setor Bueno,
Goiânia, GO.
Prova pericial:
• Perícia psicológica para avaliação dos danos emocionais sofridos pelo Autor.
VI. Das Medidas Antecipatórias
Requer-se, liminarmente, a proibição de contato do Réu com o Autor, justificando-se tal
medida para evitar novas ofensas e constrangimentos, ante o risco de dano irreparável
ao Autor.
Local e Data
Goiânia, 30 de julho de 2024.
Dr. Sandeco Macedo
OAB/GO 12345
CAPÍTULO 7. OS AGENTES DA LIGA DA JUSTIÇA
160
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 162

AGENTES INTELIGENTES
CAPÍTULO 8
Enxame de Agentes
Imagine um enxame de abelhas trabalhando de forma coordenada para coletar néctar e
construir sua colmeia. Cada abelha tem uma tarefa específica, e juntas, elas alcançam um
objetivo comum. No CrewAI, a lógica não é muito diferente. Cada agente possui um objetivo
claro e trabalha em conjunto com outros agentes para alcançar uma meta compartilhada. Essa
analogia ajuda a entender como a cooperação e coordenação são fundamentais em sistemas
multiagentes.
Figura 8.1: Enxame de agentes por Janderson de Sales - Midjourney
A ideia de um enxame de agentes no CrewAI é crucial para resolver problemas complexos
que são difíceis de serem resolvidos por um único agente. Ao distribuir tarefas entre vários
agentes, o sistema pode explorar diferentes abordagens e soluções simultaneamente, aumen-
tando a eficiência e a eficácia na resolução de problemas. Isso é particularmente importante
em cenários onde a quantidade de dados ou a complexidade da tarefa é alta.
Além disso, o uso de um enxame de agentes permite uma maior robustez e adaptabilidade.
Se um agente falhar ou encontrar um obstáculo, outros agentes podem assumir a tarefa e
CAPÍTULO 8. ENXAME DE AGENTES
161
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 163

AGENTES INTELIGENTES
continuar o trabalho sem interrupções significativas. Essa resiliência é um dos principais
benefícios dos sistemas multiagentes, permitindo que o CrewAI mantenha um alto nível de
desempenho mesmo em situações adversas.
8.1
APLICAÇÃO DO ENXAME DE AGENTES
Vamos então aplicar o conceito de enxame de agentes em um problema real, onde
diferentes agentes colaboram para coletar informações descentralizadas sobre um tópico
específico. Imaginemos algumas situações práticas:
• Obter as últimas notícias sobre o Brasil nas Olimpíadas.
• Vasculhar a internet por preço de determinado produto ou serviço, como Preço de óculos
de sol masculinos em sites do Brasil.
• Buscar menções sobre uma empresa e classificar o sentimento das informações, por
exemplo, ’Sentimento das menções sobre a Apple nas redes sociais’.
• Pesquisar tendências em tecnologia, como novidades sobre inteligência artificial publica-
das nas últimas semanas.
• Coletar dados sobre lançamentos imobiliários, como novos empreendimentos imobiliá-
rios em São Paulo.
• Identificar mudanças na legislação, por exemplo, alterações recentes nas leis trabalhistas
no Brasil.
• Explorar eventos culturais, como eventos culturais e artísticos em Nova Iorque nesta
semana’.
Os agentes sempre buscarão informações sobre o tópico na data corrente, garantindo
que os dados estejam atualizados. Isso é crucial, pois em muitos casos, a relevância da
informação está diretamente ligada à sua atualidade.
Os agentes no CrewAI têm a capacidade de utilizar dados externos diferentes, mesmo
quando configurados de forma semelhante. Isso é análogo a abelhas do mesmo enxame que,
embora sejam iguais, buscam pólen em diferentes flores. Assim, cada agente pode trazer
informações únicas e valiosas, desempenhando o mesmo papel em diversas áreas.
Os agentes também são capazes de integrar e sintetizar informações de várias fontes
para aumentar a eficiência através da execução simultânea de tarefas. Isso permite que o
CrewAI funcione como uma entidade coesa, onde cada agente contribui para um objetivo
maior, assim como as abelhas trabalham juntas para construir e manter sua colmeia.
CAPÍTULO 8. ENXAME DE AGENTES
162
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 164

AGENTES INTELIGENTES
8.2
PREPARANDO A COLMEIA
Agora vamos criar nossa ’colméia’ preparando o ambiente dos nossos agentes com
as importações das bibliotecas. Primeiro, importe as bibliotecas necessárias, como yaml,
datetime, locale, dotenv, e os módulos do CrewAI, incluindo Agent, Task, Crew, Process e
as ferramentas WebsiteSearchTool e SerperDevTool. Em seguida, configure a localização
para português do Brasil usando locale.setlocale(locale.LC_TIME, ’pt_BR.utf8’). Isso garantirá
que as datas e horas sejam formatadas corretamente em português. Carregue as variáveis
de ambiente do arquivo .env com load_dotenv(), que pode conter chaves de API e outras
configurações importantes.
A seguir, inicialize a ferramenta SerperDevTool para restringir a pesquisa ao conteúdo
de um site específico e crie uma instância do modelo ChatOpenAI com o nome do modelo
gpt-4o-mini. Defina o tamanho do enxame como 5, indicando o número de agentes que serão
utilizados na execução das tarefas. Você pode ajustar esse valor conforme necessário para
aumentar ou diminuir o número de agentes.
import
yaml
import
datetime
import
locale
from
dotenv
import
load_dotenv
from
crewai
import Agent , Task , Crew , Process
from
crewai_tools
import
WebsiteSearchTool , SerperDevTool
# Configurar a localização para
português do Brasil
locale.setlocale(locale.LC_TIME , ’pt_BR.utf8 ’)
# Carregar
variáveis de ambiente do arquivo .env
load_dotenv ()
# Ferramenta de busca do pesquisador
search_tool = SerperDevTool ()
# Inicializar o modelo
OpenAI
gpt_mini = ’gpt -4o-mini ’
# Tamanho do enxame
enxame = 5 #Você pode
aumentar
esse
valor
CAPÍTULO 8. ENXAME DE AGENTES
163
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 165

AGENTES INTELIGENTES
8.3
DISTRIBUIDOR DE TAREFAS
Vamos agora configurar nossa primeira Crew para obter uma lista de sites relevantes
sobre um determinado tema. Comece definindo o agente inicial, chamado ’pesquisador_web’.
Esse agente terá o papel de ’Pesquisador Web’ e seu objetivo será encontrar sites relevantes
para o tema especificado pelo usuário. O objetivo do agente é produzir uma saída em formato
YAML com um template específico. A backstory do agente descreve sua especialização em
encontrar fontes online confiáveis para vários tópicos. Este agente utilizará a ferramenta
’search_tool’ e será configurado com o modelo ’gpt_mini’ para realizar suas tarefas.
Em seguida, defina a tarefa inicial chamada ’tarefa_encontrar_sites’. A descrição da tarefa
instrui o agente a realizar uma pesquisa na web para identificar e compilar uma lista de sites
relevantes para o tema fornecido. O agente deve certificar-se de que os sites são confiáveis
e fornecem insights valiosos sobre o tema. A saída final deve ser formatada como YAML. É
importante remover marcações como “‘yaml e “‘ da saída final. O agente ’pesquisador_web’
será responsável por executar essa tarefa.
# ------------------------------
# Primeira
Crew: Obter
Lista de Sites
# ------------------------------
# Definir o agente
inicial
para
buscar
sites
pesquisador_web = Agent(
role=’Pesquisador
Web’,
goal=’Encontrar
sites
relevantes
para o tema = {topic} ’
’produzir
uma saída yaml com o seguinte
template
{template}’,
backstory =(
"Você é um especialista em encontrar
fontes
online "
"confiáveis para vários tópicos. Sua missão é "
"fornecer
uma lista de sites "
"que os usuários
podem
explorar
para
obter "
"mais
informações sobre
seus
interesses "
"especificados."
),
tools =[ search_tool],
verbose=True ,
llm=gpt_mini
)
CAPÍTULO 8. ENXAME DE AGENTES
164
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 166

AGENTES INTELIGENTES
# Definir a tarefa
inicial
tarefa_encontrar_sites = Task(
description =(
"Realize
uma
pesquisa na web para
identificar e "
"compilar
uma lista de sites
relevantes
para "
"o tema
fornecido. Certifique -se de que os "
"sites são confiáveis e fornecem "
"insights
valiosos
sobre o tema."
" A saída final
deve ser
formatada
como YAML. "
" Produza
uma saída yaml no seguinte
template "
"template}"
),
expected_output =’Uma YAML de 5 a 10 sites ’
’relacionados ao tema {topic }.’
’Muito
importante , retire
coisas ’
’como
‘‘‘yaml e ‘‘‘ ’
’da saída’,
agent= pesquisador_web
)
Criando a Crew
Agora vamos formar a crew inicial. Para isso, utilize a classe Crew do CrewAI. No
código, a crew é formada com um único agente, o pesquisador_web, e uma única tarefa, a
tarefa_encontrar_sites. A crew é configurada para seguir um processo sequencial, utilizando o
parâmetro process=Process.sequential.
# Formar a crew
inicial
crew_inicial = Crew(
agents =[ pesquisador_web ],
tasks =[ tarefa_encontrar_sites ],
process=Process.sequential
)
Dia de hoje
Vamos agora obter e formatar a data atual para incluir em nosso tópico de pesquisa.
Primeiro, utilize a função datetime.datetime.now() para obter a data e hora atuais. Em seguida,
CAPÍTULO 8. ENXAME DE AGENTES
165
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 167

AGENTES INTELIGENTES
formate essa data no formato desejado utilizando o método strftime(’%A, %d de %B de %Y’).
Isso garantirá que a data seja apresentada de maneira legível e apropriada para o contexto
em português do Brasil.
# Obter a data
atual
data_atual = datetime.datetime.now()
# Formatar a data no formato
desejado
data_hoje = data_atual.strftime(’%A, %d de %B de %Y’)
O Template
Vamos definir o formato da saída em YAML. Aqui, estamos criando um template que os
agentes utilizarão para formatar a saída de suas pesquisas. O template é uma string multilinha
que define a estrutura do YAML, onde cada site encontrado será listado com seu respectivo
link. Isso garante que a saída do agente pesquisador seja padronizada e facilmente utilizável
em etapas posteriores do processo.
template = """
<template >
site:
- link: "url da notícia"
</template >"""
O Tópico
Agora vamos definir um tópico. Como estou prestes a viajar para a praia, decidi buscar
informações sobre o preço de óculos de sol masculinos em sites do Brasil. Para isso, defina a
variável topic com a string que descreve o tema da pesquisa, incluindo a data atual formatada
que foi obtida anteriormente. Em seguida, crie um dicionário chamado input contendo o topic,
o template e o tamanho do enxame (sites). Este dicionário será utilizado como entrada para a
execução da crew.
CAPÍTULO 8. ENXAME DE AGENTES
166
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 168

AGENTES INTELIGENTES
topic = "Preço de óculos de sol
masculinos em sites do Brasil " \
"atualizado
para " + data_hoje
input = {’topic ’: topic ,
’template ’: template ,
’sites ’:enxame}
Executando o pesquisador, iniciamos a execução da crew inicial com a função kickoff,
passando o dicionário input como parâmetro. O resultado da execução é armazenado na
variável output. A saída bruta do output é então processada para remover as marcações
indesejadas “‘yaml e “‘, resultando em uma string YAML limpa que é armazenada na variável
yaml_string.
Em seguida, carregue essa string YAML em um dicionário Python usando a função
yaml.safe_load. O dicionário resultante é armazenado na variável data_dict. Para acessar a
lista de sites contida no dicionário, utilize o método get para obter a chave ’site’, armazenando
o resultado na variável sites_list.
# Executar a crew
inicial
output = crew_inicial.kickoff(inputs=input)
yaml_string = output.raw.strip("‘‘‘yaml").strip("‘‘‘")
# Carregar a string
YAML em um dicionário Python
data_dict = yaml.safe_load(yaml_string)
# Acessar a lista de sites do dicionário
sites_list = data_dict.get(’site ’, [])
A sites_list será o insumo para o enxame de agentes, que utilizará esses sites para buscar
informações detalhadas sobre o tópico especificado.
8.4
O ENXAME
Chegou a hora de criar o enxame de agentes. Para isso, primeiro inicialize duas listas
vazias: agentes e tarefas. Essas listas serão preenchidas com os agentes e tarefas que irão
compor a segunda crew. A sites_list, obtida na execução da primeira crew, será o insumo para
o enxame de agentes, que utilizará esses sites para buscar informações detalhadas sobre o
tópico especificado.
CAPÍTULO 8. ENXAME DE AGENTES
167
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 169

AGENTES INTELIGENTES
# ------------------------------
# Segunda
Crew: O enxame de agentes
# ------------------------------
agentes = []
tarefas = []
Vamos criar cada membro do enxame de forma dinâmica. Veja que eles fazem a mesma
coisa, porém cada um busca informações em um site diferente. Utilize um loop for para
iterar sobre a lista de sites sites_list. Para cada site, inicialize uma ferramenta de busca
WebsiteSearchTool configurada para o link específico do site.
Crie um agente, atribuindo a ele um papel ’Pesquisador Web’ seguido pelo índice do loop
idx. Defina o objetivo do agente como buscar informações sobre o tópico no site específico, e
forneça uma backstory que descreve sua especialização em recuperar informações detalhadas
de sites específicos. Configure o agente com a ferramenta de busca, verbose True, memory
True e allow_delegation False. Além disso, associe o modelo de linguagem gpt_mini ao
agente.
Para cada agente, crie uma tarefa com uma descrição que instrui o agente a usar o site
especificado para encontrar informações detalhadas sobre o tópico. A descrição deve enfatizar
a importância de incluir o link de onde a informação foi encontrada. Defina a saída esperada e
o arquivo de saída correspondente. Adicione o agente e a tarefa às listas agentes e tarefas.
Use o comando try: exception: do Python para evitar erros caso algum site tenha
problemas, como links quebrados ou CAPTCHAs. O bloco try executa o código que pode
gerar uma exceção, e o bloco except captura e trata qualquer exceção que ocorra, imprimindo
uma mensagem de erro.
CAPÍTULO 8. ENXAME DE AGENTES
168
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 170

AGENTES INTELIGENTES
# Iterar
sobre a lista e imprimir
apenas os links
for idx , site in enumerate(sites_list):
try:
#Ferramenta de busca com site
específico
busca = WebsiteSearchTool (website=site[’link ’])
agente = Agent(
role=f"Pesquisador
Web {idx}",
goal=f"Buscar
informações sobre {topic} no "
"{site[’link ’]}",
backstory=
f""" Especializado em recuperar
informações
detalhadas de sites
específicos , você se
concentrará em explorar o conteúdo
disponível no site {site[’link ’]}
relacionado a {topic}""",
tools =[ busca],
verbose=True ,
memory=True ,
allow_delegation =False ,
llm=gpt_mini
)
# Criar uma tarefa
para cada site
tarefa = Task(
description=
f""" Use o site
especificado
{site[’link ’]}
para
encontrar
informações detalhadas
sobre {topic }.
É muito
importante
que o link de onde foi
encontrado a informação esteja
junto da
informação"""
,
expected_output =f""" Retornar
informações sobre
{topic} a partir do site {site }.""",
agent=agente ,
output_file=f’partial{idx}.md’
)
agentes.append(agente)
tarefas.append(tarefa)
except:
print(F"erro ao acessar
site: {site[’link ’]}")
CAPÍTULO 8. ENXAME DE AGENTES
169
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 171

AGENTES INTELIGENTES
Para cada site na lista, inicialize uma ferramenta de busca específica utilizando a classe
WebsiteSearchTool. A variável busca é configurada com o parâmetro website definido para o
link específico do site atual na iteração. Isso permite que o agente utilize essa ferramenta para
realizar buscas e coletar informações diretamente do site especificado.
O código abaixo mostra como isso é feito:
# Ferramenta de busca com site
específico
busca = WebsiteSearchTool (website=site[’link ’])
A ferramenta WebsiteSearchTool é projetada para permitir que o agente execute pesquisas
dentro do conteúdo do site especificado pelo link fornecido. Ao passar o link do site como
argumento, a ferramenta é configurada para focar suas operações de busca nesse site,
garantindo que as informações coletadas sejam relevantes e específicas ao contexto desejado.
Essa abordagem é essencial para garantir que cada agente no enxame possa acessar e
coletar informações de diferentes fontes, utilizando uma ferramenta especializada para realizar
buscas de maneira eficiente e direcionada.
Criando o agente agregador, definimos um agente cuja função é consolidar as informações
coletadas por todos os agentes do enxame em um único documento Markdown. Primeiro,
crie uma instância da classe Agent chamada agente_agregador. Atribua a ele o papel de
’Agregador’, com o objetivo de consolidar informações de todos os agentes em um documento
Markdown. Na backstory, descreva sua especialização em sintetizar informações de várias
fontes em um formato coeso. Este agente não precisa de ferramentas específicas, por isso
a lista de ferramentas é deixada vazia. Configure o agente para ser verboso (verbose=True)
para obter detalhes sobre suas ações durante a execução.
Em seguida, crie uma tarefa associada ao agente_agregador, chamada tarefa_agregador.
A descrição da tarefa instrui o agente a consolidar os resultados dos agentes dinâmicos em
um documento Markdown, incluindo todas as informações relevantes coletadas. Defina a
saída esperada como um documento Markdown que resume as informações coletadas de
todos os sites, e especifique o arquivo de saída como ’output.md’.
Por fim, adicione o agente_agregador e a tarefa_agregador às listas agentes e tarefas,
respectivamente, para que possam ser executados como parte do processo.
CAPÍTULO 8. ENXAME DE AGENTES
170
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 172

AGENTES INTELIGENTES
# Criar o agente
agregador
agente_agregador = Agent(
role=’Agregador ’,
goal=’Consolidar
informações de todos os agentes ’
’em um documento
Markdown ’,
backstory=
"Você é um especialista em sintetizar
informações "
"de várias
fontes em um formato
coeso. "
"Sua tarefa é compilar os insights
coletados e "
"apresentá-los em um documento
Markdown."
,
verbose=True
)
# Criar a tarefa
para o agente
agregador
tarefa_agregador = Task(
description =(
"Consolide os resultados
dos
agentes
dinâmicos "
"em um documento
Markdown. "
"Certifique -se de incluir
todas as informações "
"relevantes
coletadas."
),
expected_output =(
"Um documento
Markdown
que resume as informações
coletadas de todos os sites."
),
agent=agente_agregador ,
output_file=’output.md’,
)
# Adicionar o agente e a tarefa
agregadora ao final das listas
agentes.append( agente_agregador )
tarefas.append( tarefa_agregador )
8.5
ENXAME EM AÇÃO
Agora vamos formar a crew para execução utilizando os agentes e tarefas definidos
anteriormente. Crie uma instância da classe Crew chamada crew_assincrona. Esta crew
será formada pelos agentes contidos na lista agentes e pelas tarefas contidas na lista tarefas.
Configure o processo de execução como sequencial (process=Process.sequential), indicando
que as tarefas serão executadas uma após a outra na ordem definida.
CAPÍTULO 8. ENXAME DE AGENTES
171
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 173

AGENTES INTELIGENTES
Para iniciar a execução da crew, utilize o método kickoff e passe um dicionário vazio como
entrada (inputs={}). O resultado da execução será armazenado na variável result.
# Formar a crew para
execução
crew_assincrona = Crew(
agents=agentes ,
tasks=tarefas ,
process=Process.sequential
)
result = crew_assincrona .kickoff(inputs ={})
8.6
A PRODUÇÃO DO ENXAME
Nesta seção, abordaremos a criação e a execução de um enxame de agentes utilizando o
CrewAI. Vamos detalhar como configurar e iniciar um grupo de agentes especializados em
coletar informações de diversas fontes na web. O objetivo é demonstrar a eficácia do CrewAI
na obtenção de dados atualizados e consolidados sobre um tópico específico.
Abaixo, apresentamos um exemplo prático de aplicação, onde o enxame de agentes é
utilizado para buscar preços de óculos de sol masculinos em diferentes sites. Os agentes
coletam as informações e as consolidam em um formato padrão, facilitando a análise e a
comparação dos dados.
CAPÍTULO 8. ENXAME DE AGENTES
172
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 174

AGENTES INTELIGENTES
Preços de Óculos de Sol Masculinos Disponíveis no Brasil
Atualizado em: Sexta-feira, 05 de julho de 2024
Ótica Nidiz
1. Ray-Ban RB2140 Original Wayfarer - R$ 984,00
2. Carrera 8035/S - R$ 439,00 (Desconto de 64%)
3. Ray-Ban RB3016/S Clubmaster - R$ 984,00
4. Ray-Ban RB4165 Justin - R$ 887,00
5. Ray-Ban RB2132 New Wayfarer - R$ 705,00 (Desconto de 12%)
6. Carrera 1030/S - R$ 344,00 (Desconto de 64%)
7. Carrera CHAMPION65/NR - R$ 343,00 (Desconto de 64%)
8. Tom Ford FT0862 GARRET - R$ 2075,00
9. Carrera 1019/S - R$ 372,00 (Desconto de 66%)
10. Gucci GG0748S - R$ 1273,00
11. Tommy Hilfiger TH 1972/S - R$ 319,00 (Desconto de 69%)
12. SmartBuy Collection Sandy/S - R$ 195,00 (Desconto de 50%)
Esses preços foram extraídos do site da Óticas Nidiz.
Magazine Maisa e Outras Fontes
1. Óculos Sol Masculino Preto Polarizado Emborrachado Barato - R$ 159,90
(Promoção: R$ 124,72, 22% OFF)
2. Óculos De Sol Masculino Camaro E Corvette C1 Marrom - R$ 349,98 (10x R$
35, sem juros)
3. Óculos De Sol Masculino Camaro E Corvette Fibra De Carbono - R$ 399,98
(10x R$ 40, sem juros)
4. Óculos De Sol Mercedes-Benz Proteção UV400 Cor Preto e Prateado - R$
79,00 (12x R$ 7,68, frete grátis)
5. Óculos De Sol Hype Retro Vintage Retangular Preto Unissex - R$ 13,98
6. Óculos De Sol Redondo Milhawk Moscot Vintage Old School Transparente -
R$ 37,18 (12x R$ 3,60)
7. Óculos de sol Ultra Hexagonal One size, cor Preto - R$ 17,88 (5% OFF)
8. Óculos De Sol Bambu Quadrado Masculino Clássico Praia - R$ 19,17
9. Óculos Masculino Preto Proteção UV Emborrachado Verão Praia Quadrado
Escuro Esportivo - R$ 39,59
CAPÍTULO 8. ENXAME DE AGENTES
173
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 175

AGENTES INTELIGENTES
OculosWorld
1. Ray-Ban RB2140 Original Wayfarer - R$ 984,00
2. Carrera 8035/S - R$ 439,00 (Outlet)
3. Ray-Ban RB3016/S Clubmaster - R$ 984,00
4. Carrera CHAMPION65/NR - R$ 343,00 (Outlet)
5. Tommy Hilfiger TH 1972/S - R$ 319,00
Esses preços refletem as informações disponíveis até a data solicitada, 05 de julho
de 2024. Para compras, verifique as condições de pagamento e a disponibilidade dos
produtos diretamente no site correspondente.
Neste capítulo, exploramos a criação e execução de um enxame de agentes utilizando o
CrewAI para coletar informações detalhadas de diversas fontes na web. Através de um exemplo
prático, demonstramos como configurar agentes e tarefas de maneira eficaz, permitindo a
obtenção de dados atualizados sobre um tópico específico, como preços de óculos de sol
masculinos.
A abordagem descentralizada e coordenada do enxame de agentes mostrou-se eficiente
na coleta de informações, garantindo que os dados sejam precisos e relevantes. Além disso, o
uso de um agente agregador para consolidar as informações coletadas em um formato coeso,
como um documento Markdown, facilita a análise e a comparação dos dados.
A flexibilidade e a robustez proporcionadas pelo CrewAI permitem a adaptação a diferentes
cenários e requisitos, tornando-o uma ferramenta poderosa para resolver problemas complexos.
A capacidade de distribuir tarefas entre vários agentes, utilizar ferramentas especializadas e
integrar dados de diversas fontes são características que destacam o potencial do CrewAI em
aplicações práticas.
Encerramos este capítulo e esse livro com a certeza de que o entendimento e a aplicação
dos conceitos abordados proporcionam uma base sólida para o desenvolvimento de soluções
eficientes e inovadoras utilizando o CrewAI. Até o Volume 2.
CAPÍTULO 8. ENXAME DE AGENTES
174
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


