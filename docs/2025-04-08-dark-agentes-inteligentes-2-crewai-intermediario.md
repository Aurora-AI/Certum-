# 2025-04-08-dark-agentes-inteligentes-2-crewai-intermediario.pdf

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

A minha querida mãe Emília. Minha mainha, te amo de todo coração!
Copyright © 2024
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 4

AGENTES INTELIGENTES 2
Prefácio
É com grande satisfação que apresento "Agentes Inteligentes", uma obra imprescindível
escrita pelo renomado Professor Sandeco Macedo. Como criador da Evolution API, tive o
privilégio de colaborar e testemunhar de perto a paixão e dedicação do professor pelo poder
transformador da inteligência artificial, que transcende a educação e alcança diversas áreas
da sociedade.
Minha jornada com a Evolution API tem sido marcada por desafios estimulantes e um
crescimento impressionante, culminando no envio de mais de 70 milhões de mensagens
em um único mês com a versão 2 da nossa plataforma, que se integra às mais importantes
ferramentas de inteligência artificial do mercado. Essas experiências não só reafirmam,
como ilustram perfeitamente a visão defendida neste livro: os agentes inteligentes são
fundamentais para moldar o futuro da tecnologia e da comunicação.
A Evolution API, utilizada como estudo de caso neste livro, exemplifica como a inteligên-
cia artificial pode ser facilmente incorporada aos negócios por meio de uma estrutura robusta
de múltiplas conexões, incluindo plataformas como WhatsApp, Facebook e Instagram. Desde
automações sofisticadas até interações intuitivas, os exemplos práticos apresentados pelo
Professor Sandeco evidenciam a versatilidade e o potencial inovador que esses sistemas
oferecem.
Além de explorar os fundamentos teóricos, "Agentes Inteligentes"prepara os leitores
para aplicar o conhecimento de forma prática e inovadora. A capacidade de adaptar e
implementar esses conceitos em diversas indústrias é o que diferencia os profissionais do
futuro — não apenas como competentes, mas como agentes de transformação.
Ao encerrar este prefácio, reforço minha admiração e respeito pelo Professor Sandeco
e pela profundidade de sua obra. "Agentes Inteligentes"vai além de um livro técnico; é uma
ponte para o futuro, uma ferramenta poderosa que capacita estudantes e profissionais a
liderarem a próxima geração de avanços tecnológicos.
Convido todos vocês a se aprofundarem nesta leitura rica e inspiradora, e a explorarem
como os agentes inteligentes podem revolucionar não apenas suas carreiras, mas também
impactar positivamente o mundo ao nosso redor.
Davidson Gomes
Criador da Evolution API
3
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 5

AGENTES INTELIGENTES 2
4
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 6

Sumário
Prefácio
3
1
Introdução
9
1.1
O Poder das Tools no CrewAI
9
1.2
Como Escolher as Tools Certas para Cada Agente
12
1.3
Agentes para Whatsapp com Evolution API
14
1.4
Agentes para Postagens no Instagram
15
1.5
Telegram e CrewAI
15
1.6
youtube
16
1.7
Web Scraping com Selenuim
17
1.8
CrewAI e o Banco de dados Postgres
18
1.9
Seus agentes na web com Streamlit
18
1.10 Criando Custom Tools para o CrewAI
19
1.11 Seguindo em Frente
20
2
Criando Ferramentas Customizadas no CrewAI
23
2.1
Expandindo as Capacidades dos Agentes
24
2.2
Criando com BaseTool: Subclassing
25
2.3
Um exemplo muito infantil
28
2.4
Custom GraphTool com Matplotlib
35
2.5
Definindo Ferramentas com @tool
42
2.6
Cache: Otimizando Desempenho
44
2.7
Cotação do Dólar com Cache
46
2.8
Aplicando Cache em Ferramentas Existentes no CrewAI
48
2.9
Usando o ChatGPT para Criar Tools
50
2.10 Exercícios
54
3
Dominando o Uso de Flows no CrewAI
56
3.1
Flows Simples com @start e @listen
58
3.2
Plotando seu Fluxo
63
3.3
Estados dos fluxos
64
3.4
Estado Não-Estruturado
68
5
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 7

AGENTES INTELIGENTES 2
3.5
Estado Estruturado
71
3.6
Lógica Condicional no Fluxo
73
3.7
Flows com Roteamento
81
3.8
Adicionando Crews aos Flows
84
3.9
Reflexion com Loops
89
3.10 Exercícios
100
4
Construindo Interfaces Web para Agentes com Streamlit
101
4.1
Por Que Usar Streamlit?
102
4.2
Hello World Streamlit
103
4.3
Integrando CrewAI e Streamlit
105
4.4
Agentic Platform
113
4.5
Explicando app.py
116
4.6
Adicionando Menu
117
4.7
Criando as páginas dos agentes
120
4.8
O fluxo da Plataforma
124
4.9
Agora sim, tudo pronto!
126
4.10 Exercícios
128
5
Agentes Inteligentes para WhatsApp com Evolution API
130
5.1
EvolutionAPI na Web
131
5.2
Pré-requisitos
131
5.3
Utilizando o Docker para Simplificar a Instalação
132
5.4
O que é o Git?
135
5.5
Baixando a EvolutionAPI com o Git
136
5.6
O que é Docker Compose e seus Benefícios?
137
5.7
Clonar o Repositório e Composer da EvolutionAPI
138
5.8
Instalando o EvolutionAPI: Preparando a Atmosfera
139
5.9
Alterando o docker-compose.yaml
144
5.10 Executando o Docker Compose
146
5.11 Verificando Contêineres no Docker Desktop
146
5.12 Logando no Evolution Manager
148
5.13 Adicionando uma Nova Instância
149
5.14 Conexão Finalizada com Sucesso
152
5.15 Enviando mensagem pela EvolutionAPI
153
5.16 Criando uma tela de envio com Streamlit
158
5.17 Enviando PDF, Imagem, Som e Vídeo
163
5.18 Recebendo mensagens com a EvoAPI
168
5.19 Criando um Webhook
170
5.20 Exercícios
174
SUMÁRIO
6
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 8

AGENTES INTELIGENTES 2
6
Gestão de Grupos com Evo e CrewAI
175
6.1
Resumos Diários com Evo e CrewAI
176
6.2
Codificação do Resumo Streamlit
177
6.3
Dividindo o layout em colunas
179
6.4
Agendamento de Tarefa
184
6.5
Criando resumos diários
186
6.6
Exercícios
190
7
Agentes para Postagens no Instagram
191
7.1
Facebook Developer
192
7.2
Obtendo o Token de acesso
197
7.3
Obtendo o Instagram Account ID
199
7.4
Projeto de Posts para o Instagram
200
7.5
Criando o Agente de Postagem
201
7.6
Sua imagem na Cloud Imgur
203
7.7
Combinando o Upload e a Postagem no Instagram
206
7.8
Postagem Profissional Automatizada
207
7.9
Combinando tudo com a EvoAPI
211
7.10 Exercícios
213
8
Agentes CrewAI no Telegram
214
8.1
Criando um Bot no Telegram
215
8.2
Telegram, Instagram e CrewAI
218
8.3
A classe Telegram Bot Sandeco
219
8.4
Interagindo com seu Bot
222
8.5
Enviando Imagens
222
8.6
Conversando com seu Agente
224
8.7
Telegram Post
226
8.8
Enviando Post ao Instagram
227
8.9
Exercícios
229
9
Intefaces Conversacionais e Agentes de Código Dinâmico
230
9.1
O impacto real dos agentes conversacionais
232
9.2
Disrupção Agêntica Nível Hard
234
9.3
Código Dinâmico
235
9.4
Agentes de Consulta Dinâmica
237
9.5
Agente Facade
239
9.6
Agente de Assuntos Gerais
242
9.7
Crew de Agentes de Vendas
244
9.8
Transcrevendo um Áudio
248
SUMÁRIO
7
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 9

AGENTES INTELIGENTES 2
9.9
Gerando Resposta em Áudio
251
10
O Poder do Postgres com CrewAI
254
10.1 Explorando o Postgres - pgAdmin
255
10.2 Conectando o Python com o Postgres
258
10.3 Gerando Esquemas
259
10.4 Agente AI-Query
262
10.5 Crew AI-Query
262
10.6 Criando um Chat com o banco de dados
267
10.7 Exercícios Práticos
272
SUMÁRIO
8
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 10

AGENTES INTELIGENTES 2
CAPÍTULO 1
Introdução
Sejam bem-vindos de volta! É muito bom ter você aqui novamente para seguirmos
nessa jornada! No nosso livro anterior, Agentes Inteligentes: CrewAI para Iniciantes,
exploramos o fascinante mundo dos agentes inteligentes. Falamos sobre o que são agentes,
como funcionam, e destrinchamos conceitos fundamentais para criar esses agentes, além de
mostrar exemplos práticos de tarefas e até de enxames de agentes. Tudo isso em um tom
bem introdutório, perfeito para quem estava começando a explorar essa tecnologia incrível.
Agora, chegou a hora de elevarmos o nível. Neste novo livro, vamos nos aprofundar nas
ferramentas (tools em inglês, um termo que vamos usar direto). Se antes você aprendeu a
pensar e agir como um criador de agentes, agora é o momento de transformar esses agentes
em verdadeiros faz-tudo, prontos para encarar desafios mais complexos. Prepare-se, porque
tem muita coisa legal pra gente explorar juntos!
1.1
O PODER DAS TOOLS NO CREWAI
Pense na construção de um barco. Você pode ter uma ideia brilhante, ser um arquiteto
naval talentoso, com um projeto cheio de estilo e soluções inovadoras, mas sem as ferramentas
certas, o barco nunca sairá do papel. Ferramentas como serras, lixas, prensas e martelos são
o que transformam o projeto em realidade, criando desde o casco até os detalhes do convés.
No CrewAI, as tools têm exatamente essa função: elas são as ferramentas que permitem
que os agentes se conectem com o mundo, executem ações e busquem informações cruciais
para navegar com precisão. Sem as tools, o CrewAI é como um grupo de agentes com um
plano incrível para cruzar oceanos, mas sem os meios para construírem seu próprio barco e
colocá-lo em ação.
CAPÍTULO 1. INTRODUÇÃO
9
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 11

AGENTES INTELIGENTES 2
As tools expandem as capacidades dos agentes, permitindo que eles executem tarefas
que não conseguem realizar sozinhos. Um agente pode ser ótimo em analisar dados, por
exemplo, mas ele precisa de uma tool para buscar essas informações numa API ou banco de
dados. Da mesma forma que um martelo sem carpinteiro não constrói um barco, um agente
sem uma tool não consegue ser útil no mundo real. Ah! API é como uma porta que conecta o
agente ao mundo externo, permitindo que ele busque dados, informações ou funcionalidades
que, de outra forma, estariam fora de seu alcance. E já aviso: se acostume com esse termo,
porque usaremos muitas APIs ao longo deste livro, além da API da OpenAI. APIs serão nossas
aliadas para expandir o poder dos agentes e integrar funcionalidades que vão muito além
do que qualquer agente poderia fazer sozinho. Mas eu prometo, o acesso as APIs são bem
tranquilos de serem realizados. Por isso, relaxa com esse ponto.
Outro ponto essencial é que as tools permitem que o CrewAI se adapte a vários cenários e
necessidades. Cada aplicação pode exigir uma tool específica, seja para conectar a uma rede
social como o Instagram, fazer scraping em sites, ou integrar uma API para que seus agentes
possam realizar o envio de mensagens no Whatsappp. Sem tools flexíveis, os agentes ficariam
presos a um conjunto fixo de capacidades, o que limitaria o potencial de personalização que o
CrewAI oferece.
Além disso, as tools garantem que o CrewAI funcione bem com outras tecnologias. Hoje
em dia, estamos em um mundo digital interligado, e qualquer solução de IA que não se integre
bem a outras ferramentas ou sistemas acaba ficando pra trás. As tools fazem com que o
CrewAI funcione como um verdadeiro time polivalente, acessando dados e fazendo ações que
vão além das suas capacidades internas.
A flexibilidade para criar tools personalizadas é um diferencial enorme. Muitas vezes,
uma empresa precisa de algo bem específico, e a possibilidade de desenvolver tools sob
medida é o que transforma o CrewAI em uma solução capaz de resolver problemas complexos
e personalizados. E isso é um divisor de águas. Integrar tools com APIs externas ou com
bibliotecas Python específicas é o que torna o CrewAI tão adaptável e valioso para vários tipos
CAPÍTULO 1. INTRODUÇÃO
10
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 12

AGENTES INTELIGENTES 2
de projetos.
As tools também fazem uma baita diferença na eficiência. Em vez de reinventar a roda
a cada novo desafio, os agentes podem simplesmente usar tools já existentes que realizam
funções específicas de forma otimizada. Isso libera o CrewAI para focar na inteligência da
solução dos problemas, deixando as questões operacionais para as tools especializadas.
Outro grande benefício é a modularidade das tools. No CrewAI, podemos facilmente
trocar uma tool por outra, dependendo da tarefa ou dos recursos disponíveis. Isso torna a
criação de agentes extremamente dinâmica. Se o ambiente muda, basta trocar a tool, sem ter
que mexer no agente inteiro. Essa flexibilidade facilita muito a manutenção e atualização dos
sistemas, especialmente em ambientes corporativos onde as mudanças são frequentes.
As tools também facilitam a colaboração entre agentes. Muitas vezes, diferentes agentes
precisam compartilhar informações ou resultados entre si, e as tools são o caminho para que
esses dados fluam de um agente para outro. Elas garantem que o CrewAI funcione como um
time sincronizado, com cada membro usando as ferramentas necessárias para contribuir da
melhor forma para o resultado final.
Agentes usam múltiplas tools
Por fim um único agentes podem usar múltiplas tools, dando um poder incrível a inteligên-
cia artificial. Pense no seguinte, você está na cozinha preparando um jantar daqueles. Não
dá pra usar só uma faca, certo? Você vai precisar da faca para cortar, mas também de uma
frigideira para grelhar, de uma colher para mexer e, claro, de uma taça para o vinho — porque
cozinhar com estilo é outro nível! Com os agentes do CrewAI, é a mesma coisa: uma única
tool raramente resolve tudo. Eles combinam várias tools para alcançar o resultado desejado,
como um chef que domina todos os utensílios da cozinha ao mesmo tempo. E vários agentes
CAPÍTULO 1. INTRODUÇÃO
11
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 13

AGENTES INTELIGENTES 2
onde cada um usa múltiplas tools é semelhante exatamente a uma cozinha de restaurante
viva e produtiva em nível máximo.
E a parte mais legal? Dá pra ser super criativo com as combinações de tools. Por
exemplo, imagine um agente que usa uma API de tradução junto com uma ferramenta de
geração de imagem. Ele consegue entender um texto em chinês e, logo em seguida, criar uma
ilustração baseada nesse texto, tudo num fluxo só. É como se o chef da cozinha estivesse
cantando um jazz enquanto mexe o risoto e acerta o ponto do filé. A sinergia entre as tools é
poderosa, permitindo que os agentes do CrewAI façam tarefas que, de outra forma, pareceriam
impossíveis.
1.2
COMO ESCOLHER AS TOOLS CERTAS PARA CADA AGENTE
Escolher as tools certas para cada agente no CrewAI é uma etapa importante para garantir
que o time funcione de maneira eficiente e ágil. Assim como numa equipe humana, onde cada
membro tem habilidades e responsabilidades específicas, os agentes do CrewAI também
precisam de tools que alinhem com seus objetivos e fortaleçam suas áreas de atuação. Com
as ferramentas certas, cada agente consegue atuar na sua máxima capacidade, resolvendo
problemas de maneira mais rápida e prática.
O primeiro passo é entender bem o papel e o goal de cada agente. Se um agente foi
feito para buscar dados na web, ele vai precisar de tools que o conectem a fontes externas,
como APIs de busca ou ferramentas de scraping. Por outro lado, um agente focado em
analisar grandes volumes de dados vai precisar de tools que ajudem no processamento e
visualização dessas informações. Entender o role de cada agente facilita bastante a escolha
das ferramentas que vão realmente ajudar no trabalho.
Outro ponto importante é o ambiente em que cada agente vai atuar. Se ele precisa
interagir com sistemas específicos, como bancos de dados ou plataformas de terceiros, é
essencial escolher tools que sejam compatíveis com essas tecnologias. Por exemplo, para um
agente que precisa se comunicar com um sistema de gerenciamento de clientes (CRM), uma
tool que integre com o CRM é essencial. Escolher ferramentas que encaixem bem no contexto
do agente evita problemas de compatibilidade e garante uma operação mais tranquila.
Também vale considerar a complexidade das tarefas do agente. Tarefas mais complexas
podem pedir tools mais avançadas, que ofereçam funcionalidades específicas ou que sejam
mais especializadas. Nesse caso, é bom pensar em ferramentas que não só façam o básico,
mas que ofereçam uma estrutura robusta para lidar com operações mais exigentes. Um agente
que gera relatórios avançados, por exemplo, vai precisar de tools que não só coletem dados,
mas que processem e formatem esses dados de maneira adequada.
CAPÍTULO 1. INTRODUÇÃO
12
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 14

AGENTES INTELIGENTES 2
A frequência das tasks também conta muito. Se o agente faz uma tarefa com frequência,
é melhor escolher tools otimizadas para desempenho, que diminuam o tempo de execução e
aumentem a eficiência. Para tarefas mais esporádicas, dá para optar por ferramentas mais
simples e fáceis de configurar. Esse equilíbrio entre complexidade e frequência ajuda a evitar
o uso desnecessário de ferramentas pesadas e aproveita melhor os recursos do sistema.
Outro critério prático é a escalabilidade. Em projetos onde os agentes vão trabalhar
com volumes crescentes de dados ou enfrentarão mais tarefas ao longo do tempo, é bom
optar por tools que possam escalar conforme a demanda. Ferramentas que permitem ajustes
na configuração ou que possuem versões mais robustas são ideais para ambientes onde o
crescimento é previsto.
O grau de autonomia do agente também importa na escolha das tools. Agentes que
tomam decisões mais complexas, sem intervenção humana, precisam de tools que forneçam
dados confiáveis e em tempo real. Por exemplo, se um agente monitora o mercado e sugere
ações, ele precisa de tools que ofereçam dados sempre atualizados e precisos. Isso permite
que ele trabalhe com autonomia e segurança.
Outro ponto interessante é a integração entre diferentes tools. Muitos agentes precisam
combinar várias ferramentas para completar uma tarefa, então é bom escolher tools que se
conectem bem. Se uma tool não conversa direito com outra, o agente pode ter problemas para
completar a tarefa. Portanto, escolher tools que possuam APIs ou que permitam integrações
simples faz uma diferença enorme.
A simplicidade de uso e configuração da ferramenta também é relevante. Muitas vezes, é
melhor escolher uma tool mais direta, que ofereça só o necessário, do que uma ferramenta
complexa com funções que o agente não vai usar. Ferramentas mais intuitivas facilitam o
processo de configuração e reduzem a necessidade de ajustes constantes. E claro, elas
ajudam o agente a começar a trabalhar mais rapidamente, sem complicações.
Finalmente, é importante pensar na segurança da tool. Se o agente lida com dados
CAPÍTULO 1. INTRODUÇÃO
13
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 15

AGENTES INTELIGENTES 2
confidenciais, escolher ferramentas com criptografia e controle de acesso é essencial. A
segurança das tools protege tanto o agente quanto o sistema como um todo, garantindo que
tudo funcione de acordo com as normas de privacidade e proteção de dados.
Então, escolher as tools certas para cada agente é uma questão de planejar bem e prestar
atenção aos detalhes. Pensar no papel do agente, no ambiente, na complexidade das tasks,
na frequência, escalabilidade, autonomia, integração, simplicidade e segurança são fatores
fundamentais para construir uma equipe de agentes eficiente. Com as tools adequadas, o
CrewAI se torna uma plataforma poderosa e pronta para qualquer desafio. Agora quero discutir
casos de usos o que vamos aprender do descorrer desse livro.
1.3
AGENTES PARA WHATSAPP COM EVOLUTION API
Imagine o seguinte: sua empresa está bombando no WhatsApp, os clientes estão engaja-
dos e mandando mensagens o dia inteiro, mas o fluxo é tão intenso que fica difícil acompanhar
tudo! Perguntas repetitivas, como ’Qual o horário de funcionamento?’, ’Como faço para trocar
um produto?’ ou ’Meu pedido já chegou?’ acabam ocupando um tempo precioso. Mas calma,
porque o CrewAI está aqui para ajudar!
Com o CrewAI e a Evolution API, você tem um agente inteligente atuando como seu
melhor atendente virtual, disponível 24/7, sempre pronto para responder essas perguntas de
forma rápida e precisa. Ele recebe as mensagens, identifica o tipo de dúvida, e dispara uma
resposta automática personalizada, deixando o cliente feliz e o time mais livre para focar no
que realmente importa.
E o melhor? Esse agente inteligente não para por aí. Ele é esperto o suficiente para
monitorar o teor das conversas em tempo real! Se algo mais delicado surgir, como uma
reclamação ou um caso mais complicado, ele sabe exatamente quando passar a bola para um
atendente humano, garantindo que cada cliente tenha um atendimento sob medida.
No final de cada conversa, ele registra tudo no histórico, criando uma base de dados
CAPÍTULO 1. INTRODUÇÃO
14
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 16

AGENTES INTELIGENTES 2
poderosa que permite que a empresa analise o atendimento e melhore a experiência cada vez
mais. Com o CrewAI no comando, seu suporte via WhatsApp nunca foi tão eficiente, rápido e,
claro, amigável! E adivinha? É exatamente isso que eu vou ensinar a você neste livro!
1.4
AGENTES PARA POSTAGENS NO INSTAGRAM
Imagine o seguinte: você é um influencer super ocupado, sempre em eventos, viagens e
compromissos. Para manter seu Instagram ativo sem se preocupar com cada detalhe, você
conta com o CrewAI, que age como aquele estagiário eficiente que entende perfeitamente o
seu estilo e tom de voz. Usando a Evolution API, você envia uma foto pelo WhatsApp direto
para o CrewAI — seja uma paisagem deslumbrante, um prato de comida incrível ou aquele
look do dia no evento mais badalado.
Assim que a imagem chega, o CrewAI analisa o contexto — o local, o clima, a atmosfera
da foto — e cria uma legenda que não só descreve a cena, mas que captura exatamente o jeito
que você escreve. Ele usa o seu tom, suas expressões e até o humor que seus seguidores
conhecem, de forma que a postagem parece ter sido feita por você mesmo. É como se o
CrewAI fosse uma extensão do seu estilo, escrevendo de um jeito tão autêntico que ninguém
vai perceber que é automatizado.
Mas não para por aí. Antes de postar, o CrewAI faz uma busca inteligente por hashtags
que estão em alta no momento e que têm tudo a ver com o seu conteúdo e seu público. Ele
seleciona aquelas hashtags que vão maximizar o alcance do post, atraindo novos seguidores
e aumentando o engajamento com sua base atual.
No final das contas, o CrewAI garante que seu Instagram esteja sempre atualizado e em
sintonia com as tendências e o seu estilo, sem que você precise fazer tudo manualmente. E
quer saber a melhor parte? Tudo isso você vai aprender a fazer comigo ao longo deste livro!
1.5
TELEGRAM E CREWAI
Imagine que você gerencia uma comunidade ativa no Telegram ou utiliza a plataforma para
manter sua equipe ou clientes sempre informados. A quantidade de mensagens e atualizações
CAPÍTULO 1. INTRODUÇÃO
15
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 17

AGENTES INTELIGENTES 2
pode ser difícil de acompanhar, e é aí que entra o CrewAI, integrando-se ao Telegram para
automatizar e otimizar a comunicação.
Com o CrewAI, você pode criar um agente inteligente que não só envia notificações e
atualizações de maneira programada, mas também interage com os membros do grupo em
tempo real. Por exemplo, o agente pode responder automaticamente a perguntas frequentes,
compartilhar links úteis ou documentos, e até oferecer suporte básico para dúvidas comuns.
Isso mantém o fluxo de informações dinâmico e ajuda a sua comunidade a se sentir mais
conectada.
Além disso, o CrewAI pode monitorar a atividade do grupo, detectando perguntas ou
interações específicas que precisam de uma resposta mais detalhada. Ele consegue identificar
mensagens que precisam ser escaladas para um atendente humano, garantindo que nenhuma
questão importante passe despercebida. E se houver uma necessidade de análise de dados,
o CrewAI pode gerar relatórios sobre o nível de engajamento dos membros, horários de maior
atividade e tópicos mais discutidos, proporcionando insights valiosos para melhorar a gestão
da comunidade.
1.6
YOUTUBE
Imagine uma empresa que utiliza o YouTube como uma de suas principais plataformas
de comunicação, seja para compartilhar conteúdo informativo, tutoriais ou atualizações de
produtos. Para acompanhar de perto o desempenho do canal e manter um contato mais
próximo com o público, ela decide integrar o CrewAI com a API do YouTube, possibilitando o
monitoramento constante e análise de dados do canal.
Com essa integração, o agente inteligente do CrewAI é capaz de monitorar os comen-
tários dos vídeos em tempo real, identificando perguntas ou interações que merecem uma
resposta. O agente pode, então, responder automaticamente a perguntas comuns ou sinalizar
comentários relevantes para que um humano responda posteriormente. Além disso, o CrewAI
pode detectar comentários com palavras-chave específicas, como reclamações ou elogios,
permitindo que a equipe de atendimento tome ações mais direcionadas e rápidas.
O agente também monitora métricas como visualizações, curtidas, e taxa de retenção
dos vídeos, gerando relatórios periódicos que ajudam a entender o que está funcionando
CAPÍTULO 1. INTRODUÇÃO
16
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 18

AGENTES INTELIGENTES 2
no conteúdo e o que pode ser melhorado. Ao identificar vídeos com maior engajamento ou
tendências de visualização, o CrewAI pode sugerir novos tópicos para produção de conteúdo,
ajudando a equipe a alinhar suas estratégias com o interesse do público.
Com essa integração ao YouTube, o CrewAI se torna um assistente completo para a
gestão do canal, automatizando respostas, monitorando engajamento e fornecendo insights
valiosos para o crescimento da presença digital da empresa na plataforma.
1.7
WEB SCRAPING COM SELENUIM
Imagine uma empresa que precisa extrair informações de sites que não oferecem APIs
diretas para acessar os dados. Para resolver esse problema, a equipe decide integrar o
CrewAI com o Selenium, uma ferramenta poderosa para automação de navegação web e web
scraping.
Com essa integração, o agente do CrewAI pode navegar em sites como um usuário real
faria, coletando dados específicos diretamente das páginas. Por exemplo, o agente pode visitar
uma loja online concorrente e monitorar os preços dos produtos, registrando as alterações ao
longo do tempo para que a empresa ajuste sua própria estratégia de preços. Ele também pode
capturar informações de disponibilidade de estoque ou acompanhar tendências de produtos
populares, coletando dados que podem ser valiosos para decisões de negócio.
Outro caso de uso interessante é para monitoramento de conteúdo em portais de notícias
ou redes sociais. O agente pode acessar páginas de notícias específicas, extrair manchetes e
resumos de artigos, e organizar essas informações para análise posterior. Isso permite que
a empresa se mantenha informada sobre tendências do mercado, concorrência, e temas de
interesse de seu público-alvo, tudo de maneira automatizada.
Com o Selenium, o CrewAI se torna capaz de acessar dados em praticamente qualquer
CAPÍTULO 1. INTRODUÇÃO
17
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 19

AGENTES INTELIGENTES 2
site, mesmo sem APIs, automatizando tarefas de coleta e análise de informações de forma
eficiente e inteligente.
1.8
CREWAI E O BANCO DE DADOS POSTGRES
Olha só que coisa bacana você vai aprender! Imagine que sua empresa precisa gerenciar
e acessar uma grande quantidade de informações — dados de clientes, transações, inventário,
histórico de vendas e muito mais. Para organizar tudo isso de forma eficiente, você decide
integrar o CrewAI ao Postgres, o banco de dados open source mais poderoso e confiável do
mercado.
Com o CrewAI conectado ao Postgres, seu agente inteligente é capaz de consultar,
atualizar e gerenciar dados em tempo real, transformando operações complexas em respostas
instantâneas. Por exemplo, quando um cliente solicita o status de um pedido, o CrewAI acessa
o Postgres, verifica as informações atualizadas e responde de imediato, sem necessidade de
intervenção humana. Isso aumenta a agilidade do atendimento e oferece uma experiência
mais satisfatória para o cliente.
O CrewAI também pode realizar análises mais sofisticadas, aproveitando a robustez do
Postgres para lidar com grandes volumes de dados. Ele é capaz de identificar padrões, gerar
relatórios detalhados e até realizar projeções com base nos dados históricos. Dessa forma,
sua empresa ganha insights estratégicos diretamente da base de dados, ajudando na tomada
de decisões com uma precisão e rapidez incomparáveis.
1.9
SEUS AGENTES NA WEB COM STREAMLIT
Imagine que você queira criar algumas telas web para se comunicar com seus agentes
inteligentes e visualizar dados importantes de forma prática. Com o CrewAI integrado ao
Streamlit, você consegue montar interfaces simples e interativas, perfeitas para acompanhar
o desempenho dos seus agentes ou até mesmo para monitorar informações em tempo real.
O Streamlit é como aquele amigo que deixa tudo organizado e bonito, sem precisar de
complicações ou códigos avançados.
CAPÍTULO 1. INTRODUÇÃO
18
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 20

AGENTES INTELIGENTES 2
Com essa integração, você pode criar telas que exibem os dados dos seus agentes de
maneira visual, como gráficos, tabelas e outros componentes, facilitando a interpretação e a
tomada de decisões. Imagine poder acessar, de forma intuitiva, informações sobre o status
das tarefas dos agentes, atualizações de relatórios ou até visualizar métricas em tempo real
que mostram como os agentes estão se saindo em suas funções.
O Streamlit permite uma personalização leve e prática, então você pode ajustar cada tela
para que os dados fiquem dispostos do jeito que faz mais sentido para o seu trabalho. Assim,
você cria uma interface sob medida, alinhada ao que você precisa acompanhar com seus
agentes, sem complicação.
Outro ponto interessante é que o Streamlit torna os dados acessíveis para qualquer
pessoa, mesmo que não tenha experiência técnica. Com gráficos simplificados e informa-
ções organizadas visualmente, qualquer membro da equipe consegue entender o que está
acontecendo, facilitando a comunicação e o compartilhamento de insights importantes.
E quer saber a melhor parte? Neste livro, vou ensinar o básico do Streamlit para você
começar a criar essas telas e interações de forma descomplicada, colocando você no controle
dos dados e das informações que precisa para trabalhar com seus agentes inteligentes de
maneira eficiente e visual!
1.10
CRIANDO CUSTOM TOOLS PARA O CREWAI
Uma das maiores vantagens do CrewAI é a flexibilidade para desenvolver tools persona-
lizadas, conhecidas como Custom Tools. Essas ferramentas permitem que você adapte a
funcionalidade dos agentes para atender a necessidades específicas, que muitas vezes vão
além das capacidades das tools convencionais. Imagine que uma empresa precisa de um
agente capaz de acessar um sistema interno ou realizar uma análise de dados proprietária —
é aí que as Custom Tools entram em cena, permitindo a criação de soluções sob medida que
tornam o CrewAI ainda mais versátil.
O primeiro passo na criação de uma Custom Tool é identificar a necessidade exata que
ela vai suprir. Isso envolve entender as tarefas que o agente precisa executar e as informações
ou ações que ele deve acessar. Se o agente precisa se conectar a uma base de dados
específica, por exemplo, a Custom Tool deve ter funcionalidades de integração para realizar
CAPÍTULO 1. INTRODUÇÃO
19
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 21

AGENTES INTELIGENTES 2
essa conexão de maneira segura e eficiente. Esse processo é essencial para que a ferramenta
seja realmente útil e não apenas uma adição superficial.
Outro aspecto importante na criação de Custom Tools é o desenvolvimento técnico da
ferramenta. Muitas vezes, isso envolve escrever código que faça chamadas para APIs externas,
manipule dados ou acesse plataformas específicas. A escolha de bibliotecas e métodos de
integração deve ser feita de forma estratégica, considerando tanto a compatibilidade com
o CrewAI quanto a eficiência da solução. Ferramentas personalizadas geralmente exigem
conhecimento em Python e em tecnologias específicas, como RESTful APIs, para criar
conexões robustas e seguras.
Uma vez criada, a Custom Tool precisa ser configurada para funcionar corretamente no
sistema do CrewAI. Isso pode incluir ajustes de permissões, definições de parâmetros e até
mesmo a criação de testes para garantir que a tool funcione conforme esperado. Configurar a
tool de forma detalhada e assegurar que ela é fácil de integrar com os agentes do CrewAI
são passos fundamentais para que ela se encaixe no fluxo de trabalho de maneira natural e
eficiente.
Por fim, uma vantagem interessante das Custom Tools é a capacidade de evoluir junto com
as necessidades do projeto. Conforme os requisitos mudam, a Custom Tool pode ser ajustada,
atualizada ou até mesmo expandida para oferecer novas funcionalidades. Essa capacidade
de adaptação garante que o CrewAI possa acompanhar as transformações do mercado e
do ambiente corporativo, mantendo-se sempre atualizado e preparado para enfrentar novos
desafios.
1.11
SEGUINDO EM FRENTE
Agora que você viu as possibilidades das tools no CrewAI, estamos prontos para dar o
próximo passo e explorar ainda mais o que essa tecnologia incrível tem a oferecer. Neste
capítulo, abrimos as portas para entender o papel essencial das tools na transformação dos
agentes em solucionadores de problemas de verdade. Mas isso é só o começo. A partir daqui,
vamos explorar cada aspecto das ferramentas do CrewAI de forma profunda e prática.
Nos próximos capítulos, começaremos analisando em detalhes as ferramentas nativas do
CrewAI. Essas tools vêm prontas para usar e possuem funcionalidades que facilitam bastante
o trabalho dos agentes, permitindo que eles realizem ações e tomem decisões sem precisar
reinventar a roda. Vamos explorar cada uma delas e entender como elas podem ser aplicadas
para resolver problemas complexos de forma eficiente.
Depois disso, vamos entrar em um território empolgante: a criação das suas próprias
Custom Tools. Aqui, você aprenderá a desenvolver soluções sob medida, adaptadas às
CAPÍTULO 1. INTRODUÇÃO
20
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 22

AGENTES INTELIGENTES 2
necessidades específicas do seu projeto ou negócio. Imagine poder construir ferramentas
personalizadas que se encaixem perfeitamente nas demandas dos agentes, transformando o
CrewAI em uma plataforma ajustada às suas metas e objetivos. Este será um grande passo
para quem quer criar soluções exclusivas e inovadoras.
Em seguida, mergulharemos no uso de Flows dentro do CrewAI. Você aprenderá a
orquestrar tarefas de IA, criando workflows personalizados e ajustados às necessidades
dos seus agentes. Vamos ver como estruturar entradas de dados e gerenciar o estado de
execução dos flows, além de aplicar lógica condicional e integrar múltiplas crews. Com esses
conhecimentos, você poderá criar processos de trabalho eficientes e dinâmicos.
Outro tema importante que vamos abordar é a criação de interfaces web para os agentes
usando o Streamlit. Vamos configurar o ambiente e construir interfaces interativas, como
gráficos e tabelas, que tornam os dados mais acessíveis e intuitivos. Isso permitirá que você
tenha uma visualização detalhada dos dados, facilitando a interpretação e o acompanhamento
das ações dos agentes.
A exploração de dados na web será outro ponto central, onde usaremos o Selenium
para realizar web scraping e extrair informações valiosas diretamente de sites. Com essa
integração, você será capaz de monitorar concorrentes, coletar dados de portais de notícias e
obter insights de mercado em tempo real, ampliando as capacidades de seus agentes.
A integração com o banco de dados Postgres também será fundamental. Veremos como
conectar o CrewAI ao Postgres para realizar consultas e atualizações de dados em tempo real,
além de gerar relatórios e análises estratégicas. A possibilidade de projetar dados históricos
permitirá aos seus agentes fazer previsões e tomar decisões embasadas.
Além disso, dedicaremos uma seção especial para mostrar como usar o CrewAI para
automatizar postagens no Instagram. Você aprenderá a conectar o CrewAI à API do Instagram,
capturar o estilo do influenciador, escolher hashtags de forma inteligente e manter o perfil
atualizado de forma contínua. Com isso, o CrewAI se torna uma ferramenta essencial para
gerenciar perfis com eficiência e autenticidade.
Outro destaque será a integração com o Telegram, onde você verá como o CrewAI pode
potencializar a comunicação em grupos, enviando notificações, respondendo em tempo real e
priorizando mensagens importantes. Vamos explorar como escalar o atendimento humano
quando necessário e gerar relatórios de engajamento para entender melhor a interação na
comunidade.
Falaremos também sobre o uso do CrewAI com a Evolution API no WhatsApp. Com
essa integração, você poderá automatizar respostas, gerenciar grupos e registrar históricos de
conversas, permitindo que o CrewAI ofereça suporte em tempo real de forma ágil e eficiente.
Esse recurso é essencial para empresas que buscam otimizar o atendimento e organizar a
comunicação via WhatsApp.
CAPÍTULO 1. INTRODUÇÃO
21
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 23

AGENTES INTELIGENTES 2
Para completar, exploraremos a integração com o YouTube, onde o CrewAI pode monitorar
e responder comentários, além de analisar métricas de engajamento. Dessa forma, você terá
uma visão completa sobre o desempenho do seu canal e poderá adaptar as estratégias de
conteúdo conforme o comportamento do público.
Com esses próximos passos, vamos juntos transformar o CrewAI em uma plataforma
realmente completa e adaptável. Cada capítulo trará novas ferramentas, ideias e estratégias
para que você possa construir agentes mais inteligentes e conectados. Então, prepare-se,
porque o que vem por aí vai elevar seu conhecimento de CrewAI e abrir portas para aplicações
inovadoras. Nos vemos no próximo capítulo!
CAPÍTULO 1. INTRODUÇÃO
22
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 24

AGENTES INTELIGENTES 2
CAPÍTULO 2
Criando Ferramentas
Customizadas no CrewAI
Imagine que você está em uma oficina cheia de ferramentas, onde cada uma tem uma
função específica: martelos para pregar, chaves para apertar e serras para cortar. No entanto,
de vez em quando, você se depara com um trabalho único, que exige uma ferramenta que não
existe ainda. É nesse momento que você decide criar um novo utensílio, feito sob medida, que
atende exatamente à necessidade daquele trabalho específico. No CrewAI, as ferramentas
personalizadas (ou Custom Tools) funcionam exatamente dessa forma, permitindo que você
projete e configure funções exclusivas para os agentes realizarem tarefas além das ferramentas
padrões oferecidas pelo sistema.
As Tools são componentes que ampliam as habilidades dos agentes ao possibilitar
interações com sistemas externos, bancos de dados, APIs, e até buscas online. Porém, no
contexto de problemas reais e complexos, frequentemente surge a necessidade de desenvolver
funcionalidades personalizadas, que são adaptadas para resolver desafios muito específicos.
A criação de Custom Tools dá a você essa flexibilidade e controle, permitindo que cada agente
opere com uma precisão incomparável, exatamente como um artesão com sua ferramenta
personalizada.
Outro ponto crucial para entender as Custom Tools é que elas permitem um nível mais
alto de autonomia e independência para os agentes. Em vez de depender de recursos
padronizados que podem limitar as respostas e as interações, uma ferramenta personalizada
garante que o agente execute exatamente o que é necessário para atingir o objetivo final.
Essa capacidade de adaptação faz com que o CrewAI seja extremamente flexível para atender
as necessidades de empresas que lidam com dados e processos complexos, onde a precisão
e a especialização são fundamentais.
Além disso, com as Custom Tools, o processo de personalização também se torna uma
oportunidade para inovar. Ao criar essas ferramentas, você está ajustando cada parte da
interação com o ambiente, projetando métodos e lógicas que se alinham totalmente ao fluxo
CAPÍTULO 2. CRIANDO FERRAMENTAS CUSTOMIZADAS NO CREWAI
23
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 25

AGENTES INTELIGENTES 2
de trabalho do agente. Esse processo traz um diferencial competitivo, pois cada ferramenta
nova que você desenvolve reflete o conhecimento profundo sobre as particularidades da tarefa
e do domínio onde o agente está operando.
Por fim, a criação de uma Custom Tool no CrewAI não exige um grande esforço técnico.
Com uma estrutura bem organizada, o sistema permite que você configure rapidamente o
comportamento da ferramenta, definindo parâmetros e funções para que o agente consiga
acessá-la e utilizá-la sem dificuldades. Neste capítulo, vamos explorar em detalhes como
estruturar e configurar essas ferramentas, desde o planejamento até a integração com os
agentes.
Vamos agora colocar as mãos na massa e aprender como transformar necessidades
complexas em ferramentas sob medida, que ajudarão seus agentes a se destacarem em
qualquer tarefa.
2.1
EXPANDINDO AS CAPACIDADES DOS AGENTES
No CrewAI, as ferramentas (Tools) são essenciais para que os agentes colaborem de
forma eficiente e realizem tarefas de maneira eficaz. Com essas Tools, os agentes adquirem
capacidades que vão desde buscas na web e análises de dados até colaboração e delega-
ção de tarefas entre colegas. Este capítulo aborda como criar, integrar e aproveitar essas
ferramentas dentro do CrewAI, com um foco especial em ferramentas de colaboração que
impulsionam o trabalho em equipe entre os agentes.
Uma ferramenta, ou Tool, no CrewAI, é uma habilidade ou função que os agentes podem
utilizar para executar diversas ações. Isso inclui desde ferramentas nativas do CrewAI Toolkit
até as ferramentas da LangChain, possibilitando aos agentes realizar desde buscas simples
até interações complexas, promovendo uma colaboração eficaz entre si. As Tools tornam-se,
assim, as habilidades concretas que cada agente possui, expandindo seu leque de ações de
acordo com as necessidades da equipe.
As Tools no CrewAI apresentam características chave que as tornam fundamentais. Elas
são projetadas para utilidades específicas como busca na web, análise de dados, geração
de conteúdo e colaboração entre agentes. Além disso, essas ferramentas potencializam as
capacidades dos agentes ao serem integradas de forma fluida ao fluxo de trabalho. Com a
possibilidade de customização, o CrewAI permite que você desenvolva suas próprias Custom
Tools ou utilize ferramentas existentes para atender as necessidades específicas dos agentes.
Um ponto importante das Tools é a presença de mecanismos robustos de tratamento de
erros, que garantem uma operação sem interrupções. Quando uma ferramenta falha em sua
execução, o CrewAI possui sistemas de recuperação que ajudam os agentes a continuar com
CAPÍTULO 2. CRIANDO FERRAMENTAS CUSTOMIZADAS NO CREWAI
24
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 26

AGENTES INTELIGENTES 2
suas tarefas sem prejudicar o desempenho geral da equipe. Além disso, existe um mecanismo
inteligente de caching, que otimiza o desempenho e reduz operações redundantes, tornando
o uso das ferramentas mais eficiente e ágil.
Para começar a explorar as capacidades das Tools do CrewAI e enriquecer a performance
dos seus agentes, basta instalar o pacote de ferramentas extra. Isso permite que você amplie
o alcance de suas interações e tenha à disposição uma variedade de ferramentas integradas.
Assim, os agentes estarão prontos para executar operações complexas e colaborar entre si
com agilidade.
Instale o pacote extra de ferramentas do CrewAI usando o seguinte comando:
pip
install ’crewai[tools]’
Com essa instalação, você estará pronto para criar agentes altamente capacitados e
aptos a colaborar com eficácia nas tarefas mais desafiadoras.
2.2
CRIANDO COM BASETOOL: SUBCLASSING
Já pensou se você tivesse uma loja inteira de ferramentas à sua disposição? Esse é
o poder que o CrewAI oferece com as Custom Tools, aproveitando o vasto ecossistema
do Python, que possui mais de 350 mil bibliotecas. Com isso, o CrewAI permite que você
crie ferramentas feitas sob medida para cada agente, adaptando-se a qualquer necessidade
específica. Seja para análises de dados, integrações com APIs ou automações avançadas,
você pode construir a ferramenta ideal para resolver problemas únicos e complexos, e isso é
uma das maiores vantagens do CrewAI.
Ao criar uma Custom Tool, o desenvolvedor configura uma funcionalidade que atende
diretamente aos requisitos da tarefa, transformando o agente em um especialista em seu
domínio. Com o acesso à ‘loja’ do Python, que inclui bibliotecas para cálculos avançados,
manipulação de dados, inteligência artificial e muito mais, é possível desenvolver uma ferra-
menta para praticamente qualquer situação. Isso significa que, se o agente precisa acessar
um sistema financeiro, processar grandes volumes de dados ou interagir com redes neurais
específicas, você pode implementar uma solução que garanta o desempenho ideal para aquela
necessidade.
Além disso, as Custom Tools são otimizadas para performance e precisão, pois cada
ferramenta pode ser configurada com tratamento de erros e caching inteligente. Esses recursos
garantem que os agentes operem com alta eficiência, prontos para responder a demandas
complexas com agilidade. Com a criação de Custom Tools, o CrewAI não só expande as
habilidades dos agentes, mas também proporciona uma flexibilidade essencial para ambientes
CAPÍTULO 2. CRIANDO FERRAMENTAS CUSTOMIZADAS NO CREWAI
25
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 27

AGENTES INTELIGENTES 2
de negócios que exigem soluções personalizadas e responsivas.
João, o criador do CrewAI, criou uma classe chamada BaseTool. Nessa classe, existe um
método abstrato chamado _run(self, argument:
str) -> str:, que deve ser implemen-
tado quando você estende a classe do João para criar uma ferramenta personalizada. Vamos
ver um exemplo de como fazer isso com a classe MyCustomTool, que herda de BaseTool e
define um comportamento específico no método _run.
Para começar, observe a importação from crewai.tools import BaseTool.
Esse
comando importa a classe base que permite criar a estrutura da ferramenta. Em seguida,
declaramos a classe MyCustomTool, que herda de BaseTool. Ao herdar de BaseTool, você
precisa implementar o método _run, garantindo que ele esteja de acordo com as expectativas
da classe original.
Na classe MyCustomTool, declaramos dois atributos: name e description. O atributo
name é uma string que identifica a ferramenta — você deve escolher um nome claro, já que ele
será utilizado para referenciar a ferramenta no código e para facilitar o entendimento de seu
propósito. O segundo atributo, description, fornece uma descrição detalhada sobre o uso
da ferramenta. Esse campo é importante porque os agentes dependem dessas informações
para saber como utilizar a ferramenta corretamente. Mantenha a descrição direta e explicativa,
informando o que a ferramenta faz e quais tipos de argumentos ela espera.
O método _run é onde a lógica principal da sua ferramenta é implementada. Esse método
recebe um argumento, argument, que é uma string e deve ser processado de acordo com
a lógica específica da sua ferramenta. No exemplo, a função _run está implementada para
simplesmente retornar a string "Result from custom tool". Em uma aplicação real, você
substituiria essa linha pelo código que executa a funcionalidade específica da ferramenta,
usando argument como entrada para produzir um resultado útil.
Esse template mostra a estrutura básica de criação de uma ferramenta personalizada
com o CrewAI. Depois de definir o name, description e implementar o método _run, você
terá uma ferramenta pronta para uso pelos agentes.
CAPÍTULO 2. CRIANDO FERRAMENTAS CUSTOMIZADAS NO CREWAI
26
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 28

AGENTES INTELIGENTES 2
from
crewai.tools
import
BaseTool
class
MyCustomTool(BaseTool):
name: str = """ Nome da minha
ferramenta"
description: str = "Descrição clara
sobre
para que essa
ferramenta é útil; seu agente
precisará dessas
informações para usá-la."""
def _run(self , argument: str) -> str:
# Implementação vai aqui
return "Resultado da ferramenta
personalizada "
A linha onde está o comentário # Implementação vai aqui é o ponto exato em que
você pode personalizar o comportamento da sua ferramenta de acordo com as necessidades
do seu projeto. Aqui, qualquer operação pode ser realizada: desde cálculos matemáticos
complexos até integrações com sistemas externos, passando pela manipulação e análise de
dados em tempo real.
Uma das possibilidades mais poderosas é a integração com APIs. Ao adicionar código
nesta linha, você pode conectar a ferramenta a qualquer API pública ou privada, como sistemas
de pagamento, plataformas de redes sociais, serviços de dados em nuvem ou qualquer outro
serviço disponível. Dessa forma, o agente pode buscar informações atualizadas e realizar
operações interativas com sistemas externos, tudo de forma automatizada.
Outra aplicação interessante é a manipulação de dados. Você pode utilizar essa linha
para transformar, organizar e interpretar dados complexos antes de entregá-los ao agente.
Seja para organizar grandes conjuntos de dados, aplicar algoritmos de machine learning, ou
realizar análises estatísticas, essa área do código permite implementar funções específicas
que entreguem resultados precisos e prontos para o uso.
Além disso, você pode usar esta linha para criar simulações e modelos preditivos. Ao
adicionar algoritmos que utilizam técnicas de IA, como redes neurais ou aprendizado supervi-
sionado, o agente pode realizar previsões e tomar decisões mais informadas. Em projetos de
análise de risco, por exemplo, essa flexibilidade é essencial para adaptar o comportamento do
agente ao ambiente em que ele opera.
Por fim, você pode aplicar verificações de segurança e controle de qualidade nessa
parte do código. Essa linha pode incluir procedimentos de validação dos dados recebidos ou
gerados, assegurando que os resultados finais estejam em conformidade com padrões de
segurança e precisão necessários para seu projeto. Em ambientes onde a confiabilidade dos
dados é crucial, essa prática garante a consistência dos resultados da ferramenta.
CAPÍTULO 2. CRIANDO FERRAMENTAS CUSTOMIZADAS NO CREWAI
27
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 29

AGENTES INTELIGENTES 2
Código completo:
Faça download do código completo do que trataremos nas seções abaixo:
https://bit.ly/crewai2-custom-tools
2.3
UM EXEMPLO MUITO INFANTIL
Como eu sempre digo, "coisas complexas podem ser decompostas em coisas muito
simples", e esse exemplo é absurdamente simples. Neste exemplo, usaremos agentes para
criar um conteúdo educacional simples e divertido que ensina multiplicação para crianças.
Aqui, temos um agente responsável por gerar números aleatórios que servirão como exemplo
de uma operação de multiplicação e outro agente que calcula o produto desses números e
transforma o resultado em uma explicação visual amigável. Cada agente é programado para
focar em uma tarefa específica, garantindo um processo organizado e eficiente.
O propósito principal dos agentes neste cenário é transformar um conceito matemático
abstrato, como a multiplicação, em algo concreto e fácil de entender para crianças. Com uma
narrativa lúdica, o agente escritor explica a multiplicação com o exemplo de sacolas cheias
de maçãs, o que facilita o entendimento. Esse método de ensino permite que as crianças
visualizem o problema e se envolvam emocionalmente com ele, usando imagens mentais e
associações que tornam o aprendizado mais prazeroso. A função do agente aqui é utilizar as
ferramentas e conhecimentos que lhe foram atribuídos para transformar um simples cálculo
em uma lição envolvente.
A abordagem de múltiplos agentes é ideal para esse tipo de tarefa educacional, pois cada
agente pode ser projetado com habilidades complementares. O agente que gera os números
cria o contexto numérico, enquanto o agente multiplicador aplica a operação matemática e,
por fim, formata o conteúdo em um texto narrativo amigável. Esse sistema de colaboração
entre agentes permite criar materiais didáticos personalizados e adaptáveis, promovendo uma
forma interativa e eficiente de aprender, onde cada passo é cuidadosamente orquestrado para
tornar a experiência de aprendizado divertida e eficaz para o público infantil.
Aqui está a nossa ferramenta multiplicadora que ajudará o escritor que não sabe nada de
matemática a escrever sobre multiplicação em seu livro infantil. Nesse código, implementamos
uma classe chamada MultiplicationTool que herda a estrutura da classe BaseTool, criada
pelo CrewAI. A classe BaseTool exige que implementemos o método _run, que define o que
a ferramenta deve fazer ao ser chamada. Aqui, vamos configurar esse método para realizar
uma multiplicação entre dois números e retornar o resultado em formato de texto.
Para começar, observe o atributo name. Ele está definido como ‘Ferramenta de Multi-
CAPÍTULO 2. CRIANDO FERRAMENTAS CUSTOMIZADAS NO CREWAI
28
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 30

AGENTES INTELIGENTES 2
plicação’, identificando claramente a função dessa ferramenta para o CrewAI. Outro ponto
importante é o atributo description, que descreve para o CrewAI o contexto em que essa
ferramenta é útil: ‘Útil para quando você precisa multiplicar dois números’. Essa descrição
permite que o CrewAI identifique em que situações deve utilizar a MultiplicationTool.
Dentro da classe, implementamos o método _run, onde ocorre a lógica principal da
multiplicação. Esse método recebe dois parâmetros, primeiro_numero e segundo_numero,
ambos do tipo int. Ao multiplicar esses números, salvamos o resultado na variável resultado.
Em seguida, a função retorna uma string formatada com o resultado da multiplicação, de forma
clara e amigável para o usuário. Essa string contém a frase ‘O resultado da multiplicação
de {primeiro_numero} e {segundo_numero} é {resultado}’, facilitando a comunicação entre a
ferramenta e o agente.
Com esse código, configuramos uma ferramenta essencial para permitir que o agente
escritor, mesmo sem conhecimento de matemática, seja capaz de fornecer resultados precisos
e bem estruturados para o público infantil.
from
crewai.tools
import
BaseTool
# Definindo a classe
MultiplicationTool
sem o uso de decoradores
class
MultiplicationTool (BaseTool):
name: str = ’Ferramenta de Multiplicação’
description: str = ’Útil para
quando você precisa
multiplicar
dois números.’
def _run(self , primeiro_numero : int , segundo_numero : int) -> str:
resultado = primeiro_numero * segundo_numero
return f"""O resultado da multiplicação de
{ primeiro_numero } e { segundo_numero } é {resultado }."""
Observe que, apesar de João ter definido a entrada do método _run na BaseTool como
String, o CrewAI permite que você personalize essa entrada para atender às necessidades
da sua ferramenta específica. Neste código, adaptamos a entrada para receber dois intei-
ros, primeiro_numero e segundo_numero, necessários para realizar a multiplicação. Essa
flexibilidade é valiosa para configurar ferramentas mais complexas.
No entanto, é fundamental que você siga uma regra importante: a saída do método _run
precisa ser obrigatoriamente uma String. Esse retorno textual é crucial para que o agente
consiga interpretar e transmitir o resultado de forma compreensível, independentemente
do tipo de entrada utilizado. Portanto, mesmo que seu método processe dados numéricos,
objetos ou estruturas mais complexas, lembre-se de sempre transformar o resultado final em
uma String antes de retorná-lo. No exemplo, garantimos essa conformidade formatando a
saída com a frase ‘O resultado da multiplicação de {primeiro_numero} e {segundo_numero} é
CAPÍTULO 2. CRIANDO FERRAMENTAS CUSTOMIZADAS NO CREWAI
29
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 31

AGENTES INTELIGENTES 2
{resultado}’.
Dessa forma, você tem liberdade na configuração da entrada para adaptar a ferramenta a
diferentes tipos de dados, mas deve manter o retorno em formato de texto para assegurar a
integração correta com o CrewAI.
Agora vamos para o código todo. MyLLM é uma classe criada para abstrair a instanciação
de modelos de linguagem (LLMs), facilitando a configuração do CrewAI com diferentes modelos
sem precisar ajustar manualmente cada detalhe. Com isso, você pode selecionar o modelo de
linguagem adequado, armazenando-o na variável llm. O código começa com a importação de
módulos essenciais: trazemos Agent, Task, Crew e Process do CrewAI, além de importar a
MultiplicationTool, nossa ferramenta de multiplicação, da biblioteca math_tool. Também
carregamos o módulo dotenv para gerenciar variáveis de ambiente, útil para configurações
externas, e finalmente importamos MyLLM para lidar com o modelo de linguagem.
O próximo passo é chamar load_dotenv(), que carrega as configurações do ambiente a
partir de um arquivo de ambiente. Esse comando garante que qualquer informação sensível
ou específica do ambiente de execução seja carregada sem estar diretamente codificada, o
que promove segurança e flexibilidade.
Após configurar o ambiente, definimos a variável llm para utilizar MyLLM.GPT4o_mini.
Essa instância do modelo de linguagem será atribuída aos agentes, permitindo que eles
acessem o poder do modelo GPT-4 Mini para suas tarefas. A seguir, criamos a instância de
nossa ferramenta de multiplicação chamada multiplication_tool, que possibilitará ao agente
realizar operações de multiplicação. Com essa configuração, o CrewAI está pronto para usar
a ferramenta e o modelo de linguagem para os próximos passos.
from
crewai
import Agent , Task , Crew , Process
from
math_tool
import
MultiplicationTool #nossa
ferramenta
from
dotenv
import
load_dotenv
from
MyLLM
import
MyLLM
# Carregar
variáveis de ambiente
load_dotenv ()
# Definir o modelo de linguagem
llm = MyLLM.GTP4o_mini
# Criando a instância da ferramenta
multiplication_tool = MultiplicationTool ()
Agora os agentes. Um agente gerará dois números aleatórios e outro usará a ferramenta
e escreverá o texto para a criançada. Para isso, definimos dois agentes com papéis e objetivos
distintos, configurados para trabalhar juntos no CrewAI.
CAPÍTULO 2. CRIANDO FERRAMENTAS CUSTOMIZADAS NO CREWAI
30
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 32

AGENTES INTELIGENTES 2
Primeiro, criamos o agente generator_agent, responsável por gerar dois números alea-
tórios que serão multiplicados. Esse agente tem o role ‘Gerador de Números’, o que identifica
claramente seu papel. No goal, indicamos que sua função é criar dois números aleatórios.
Com isso, deixamos claro que o agente não realiza nenhuma operação matemática direta-
mente; ele apenas fornece os números para outro agente. A backstory ‘Você é especialista
em gerar números aleatórios’ serve como contexto adicional para que o agente atue de forma
adequada. Definimos ainda allow_delegation como False para impedir que o agente delegue
suas tarefas a outros e verbose como True, para que ele forneça informações detalhadas
durante a execução. A variável llm é configurada para conectar o agente ao modelo de
linguagem especificado anteriormente.
Em seguida, configuramos o agente writer_agent, cujo papel é ‘Escritor’. Esse agente
é encarregado de transformar o cálculo em uma lição de matemática para crianças. No goal,
estabelecemos que sua tarefa é ‘Escrever lições de matemática para crianças’. Ele possui uma
backstory que explica seu perfil: ‘Você é um especialista em redação e adora ensinar crianças,
mas não sabe nada de matemática’. Esse contexto torna claro que o agente dependerá de
ferramentas externas para lidar com operações matemáticas. Portanto, incluímos a tools
[multiplication_tool] para permitir que ele utilize a ferramenta de multiplicação quando
necessário. Assim como no agente gerador, configuramos allow_delegation como False e
verbose como True para garantir uma execução detalhada.
Essas configurações permitem que cada agente realize seu papel de forma indepen-
dente, mas com possibilidades de cooperação, criando uma experiência de aprendizado de
matemática envolvente e interativa para crianças.
# Definindo o agente que gera números
aleatórios
solicitando à LLM
generator_agent = Agent(
role="Gerador de Números",
goal="Você cria dois números
aleatórios para
serem
multiplicados .",
backstory="Você é especialista em gerar números
aleatórios.",
allow_delegation =False ,
llm=llm ,
verbose=True
)
# Definindo o agente que
realiza a multiplicação
writer_agent = Agent(
role="Escritor",
goal="Você escreve lições de matemática para
crianças.",
backstory=""" Você é um especialista em redação e adora
ensinar
crianças , mas não sabe nada de matemática.""",
tools =[ multiplication_tool ],
# Integrando a ferramenta ao agente
allow_delegation =False ,
llm=llm ,
CAPÍTULO 2. CRIANDO FERRAMENTAS CUSTOMIZADAS NO CREWAI
31
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 33

AGENTES INTELIGENTES 2
verbose=True
)
Agora vamos definir as tarefas que cada agente executará. Neste código, configuramos
duas Tasks: uma para o generator_agent e outra para o writer_agent, detalhando as
ações específicas que cada um deve realizar dentro do CrewAI.
Primeiro, observe a tarefa generate_numbers_task. Ela é atribuída ao agente gerador
de números (generator_agent) e instrui esse agente a solicitar à LLM que gere dois números
aleatórios entre 1 e 10. Esses números serão usados posteriormente pelo agente escritor.
No parâmetro description, o enunciado descreve a ação esperada para o agente, enquanto
o expected_output define claramente que a saída deverá ser ‘Dois números aleatórios para
serem multiplicados’. Com essa configuração, o agente é capaz de entender o que deve fazer
e qual tipo de resposta fornecer.
A seguir, temos a multiplication_task, designada ao writer_agent. Esta tarefa re-
quer que o agente utilize os números fornecidos pelo agente gerador para ensinar multiplicação
a crianças de forma visual e acessível. No description, a instrução especifica que o agente
deve ‘Multiplicar os dois números fornecidos pelo agente Gerador de Números’ e que ele deve
explicar o conceito usando maçãs representadas por emojis, de forma divertida e acessível.
Em expected_output, detalhamos a estrutura do texto esperado, onde o primeiro número
representa a quantidade de sacolas e o segundo representa a quantidade de maçãs em cada
sacola.
# Task para o agente
Gerador de Números
solicitar à LLM dois números
aleatórios
generate_numbers_task = Task(
description="""Peça à LLM para
gerar
dois
números
aleatórios
entre 1 e 10. """,
expected_output="Dois números
aleatórios para
serem
multiplicados.",
agent= generator_agent # Associando o
agente de geração de números à tarefa
)
CAPÍTULO 2. CRIANDO FERRAMENTAS CUSTOMIZADAS NO CREWAI
32
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 34

AGENTES INTELIGENTES 2
# Task para o agente
Multiplicador
multiplicar os números
fornecidos
multiplication_task = Task(
description="""
Ensine a multiplicação para
crianças.
Multiplique os dois números
fornecidos
pelo
agente
Gerador de Números. Quando você for
ensinar
use
maçãs (emojs) para
explicar em um texto
como
funciona a multiplicação na linguagem
para
crianças""",
expected_output=""" Uma
explicação para
crianças sobre
multilicação. O primeiro número
aleatório
representa a quantidade de sacolas e o segundo
número
aleatório
representa a quantidade de maçãs
como
mostra o exemplo
delimitado
por <exemplo >
<exemplo >
sacolas de maçãs:
sacola 1: coloque
aqui 3 emojs de maçãs
sacola 2: coloque
aqui 3 emojs de maçãs
sacola 3: coloque
aqui 3 emojs de maçãs
Portanto: 3 x 4 = 12 maçãs
</exemplo >
""",
tools =[ multiplication_tool ],
# Ferramenta
usada na tarefa
agent=writer_agent
# Associando o agente de multiplicação à tarefa
)
Para concluir nosso código, configuramos a Crew math_crew para orquestrar o trabalho
entre os agentes generator_agent e writer_agent, com tarefas definidas de maneira se-
quencial. Ao inicializar math_crew com Process.sequential, garantimos que a geração de
números ocorra primeiro, seguida pela multiplicação e explicação em linguagem acessível
para crianças. A execução é disparada pelo método kickoff(), e a imagem 2.1 mostra o
resultado final, exibido pelo print(), apresenta a explicação detalhada do agente escritor
sobre a operação de multiplicação. Olha como ficou bacana!
CAPÍTULO 2. CRIANDO FERRAMENTAS CUSTOMIZADAS NO CREWAI
33
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 35

AGENTES INTELIGENTES 2
# Criando a crew que
organiza o processo
com os dois
agentes e suas
tasks
math_crew = Crew(
agents =[ generator_agent , writer_agent ],
tasks =[ generate_numbers_task , multiplication_task ],
process=Process.sequential
# Processo
sequencial de execução
)
# Iniciando a crew para
realizar a tarefa
completa
result = math_crew.kickoff(inputs ={})
print(f"Resultado
final da Crew: {result}")
Figura 2.1: Saída dos nossos agentes
CAPÍTULO 2. CRIANDO FERRAMENTAS CUSTOMIZADAS NO CREWAI
34
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 36

AGENTES INTELIGENTES 2
2.4
CUSTOM GRAPHTOOL COM MATPLOTLIB
A visualização de dados é uma ferramenta poderosa para análise e compreensão de infor-
mações, especialmente em contextos onde padrões e tendências precisam ser identificados
de forma rápida e clara. A biblioteca Matplotlib em Python é uma das mais populares e
versáteis para criação de gráficos e visualizações. Ela oferece uma gama de possibilidades,
desde gráficos de linha e barras até gráficos de pizza e histogramas, o que a torna altamente
flexível para diferentes tipos de dados e necessidades.
Eu escolhi fazer esse exemplo porque não existe uma ferramenta de geração de gráficos
nas ferramentas do CrewAI-Tools. Com a ferramenta CustomGraphTool que vamos imple-
mentar, o agente poderá gerar gráficos em diferentes formatos (linha, barras, pizza), com
base em um parâmetro fornecido. Essa flexibilidade permite que o próprio agente decida qual
visualização faz mais sentido para o conjunto de dados recebido, aprimorando a clareza e a
relevância da apresentação final. Essa escolha não só otimiza a experiência do usuário, mas
também melhora a eficácia da análise, pois o tipo de gráfico pode variar conforme o contexto
e o objetivo da tarefa.
Vamos agora à implementação da ferramenta CustomGraphTool. Neste código, imple-
mentamos a classe CustomGraphTool, que é uma ferramenta de criação de gráficos flexível.
Esta ferramenta permite que um agente do CrewAI gere gráficos em diferentes formatos (linha,
barras ou pizza) e os salve como arquivos PNG. A classe herda de BaseTool e implementa o
método _run, que é configurado para aceitar uma lista de valores (values), uma lista opci-
onal de rótulos (labels), o tipo de gráfico desejado (chart_type), e um título (title) para
personalizar o nome do gráfico.
Primeiro, o método _run verifica o valor de chart_type para definir qual tipo de gráfico
será gerado. Se chart_type for "linha", o método cria um gráfico de linha usando os
valores fornecidos e aplica o título. Se chart_type for "barras", ele gera um gráfico de
barras, usando os rótulos em labels (se forem fornecidos) para identificar cada barra. Se
chart_type for "pizza", ele cria um gráfico de pizza, com cada fatia representando um item
na lista de valores. Aqui, o parâmetro autopct=’%1.1f%%’ é usado para exibir o percentual
de cada fatia diretamente no gráfico, facilitando a visualização das proporções relativas de
cada item.
Após criar o gráfico, a ferramenta salva a imagem como um arquivo PNG, cujo nome
é baseado no título fornecido, com espaços substituídos por underscores. Esse arquivo é
fechado após a criação para evitar conflitos de recursos, e a função retorna uma mensagem
confirmando o nome do arquivo salvo. Assim, o agente pode acessar o gráfico gerado e utilizá-
lo em relatórios ou exibi-lo para o usuário. Salve o código abaixo no arquivo ’graph_tool.py’
CAPÍTULO 2. CRIANDO FERRAMENTAS CUSTOMIZADAS NO CREWAI
35
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 37

AGENTES INTELIGENTES 2
from
crewai.tools
import
BaseTool
import
matplotlib.pyplot as plt
class
CustomGraphTool (BaseTool):
name: str = "Ferramenta de Criação de Gráficos"
description: str = """ Gera um gráfico com base em uma lista
de valores e um tipo de gráfico
especificado (linha , barras
ou pizza) e salva o gráfico como um arquivo
PNG."""
def _run(self , values:
list , labels:
list = None ,
chart_type: str = "linha",
title: str = "Gráfico") -> str:
# Escolhe o tipo de gráfico com base no parâmetro
’chart_type ’
plt.figure ()
if chart_type == "linha":
plt.plot(values)
plt.title(title)
elif
chart_type == "barras":
plt.bar(range(len(values)), values , tick_label=labels)
plt.title(title)
elif
chart_type == "pizza":
if not labels:
labels = [f"Item {i+1}" for i in range(len(values))]
plt.pie(values , labels=labels , autopct=’%1.1f%%’)
plt.title(title)
else:
return """ Tipo de gráfico inválido.
Escolha
entre ’linha ’, ’barras ’ ou ’pizza ’."""
# Salva o gráfico como PNG
file_name = f"{title.lower ().replace(’ ’, ’_ ’)}.png"
plt.savefig(file_name)
plt.close ()
return f"Gráfico
salvo
como {file_name}"
Agora crie um novo arquivo no mesmo diretório de graph_tool.py com o nome de
app.py e comece importando as classes e ferramentas necessárias para criar e executar uma
Crew que realizará uma pesquisa e visualizará a matriz energética global. No exemplo abaixo,
CAPÍTULO 2. CRIANDO FERRAMENTAS CUSTOMIZADAS NO CREWAI
36
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 38

AGENTES INTELIGENTES 2
configuramos o ambiente, carregando variáveis com load_dotenv() para facilitar o acesso
a chaves e configurações externas, especialmente úteis para acessar APIs. Em seguida,
definimos o modelo de linguagem com a variável llm, que usará MyLLM.GTP4o_mini como
referência para processamento de linguagem.
Para pesquisa, utilizamos a ferramenta SerperDevTool, configurada com n_results =
50, o que amplia a quantidade de resultados obtidos, permitindo uma busca mais completa de
informações sobre a matriz energética mundial. Essa configuração garantirá que nosso agente
de pesquisa tenha uma gama mais ampla de dados para compilar e, em seguida, passar ao
agente de gráficos, que usará o CustomGraphTool para criar visualizações detalhadas da
matriz energética.
Este arquivo app.py será o ponto de entrada para configurar e iniciar o processo do
CrewAI, combinando agentes para coletar e visualizar os dados da matriz energética. Execute
o script para inicializar a Crew e acompanhar as tarefas de pesquisa e visualização conforme
descrito nas configurações do seu projeto.
from
crewai
import Agent , Task , Crew , Process
from
crewai_tools
import
SerperDevTool
from
graph_tool
import
CustomGraphTool #nossa
tool
from
dotenv
import
load_dotenv
from
MyLLM
import
MyLLM
# Carregar
variáveis de ambiente
load_dotenv ()
# Definir o modelo de linguagem
llm = MyLLM.GTP4o_mini
# Ferramenta
para
pesquisa
serper_tool = SerperDevTool ()
serper_tool.n_results = 50
Criando os agentes para realizar a pesquisa e visualização da matriz energética. Neste
trecho, definimos dois agentes: research_agent e graph_agent. Cada um possui um papel
específico no processo de análise de dados energéticos.
Primeiro, criamos o research_agent, que é configurado para buscar previsões sobre
o consumo energético global, especificamente para o ano de 2025. No parâmetro goal,
definimos que este agente deve focar nas porcentagens de uso de diferentes fontes de
energia, como Petróleo, Carvão, Gás Natural, entre outros. A backstory do agente indica
sua especialização em pesquisa de dados energéticos e sustentabilidade, ajudando o CrewAI
a interpretar o contexto do agente. A ferramenta utilizada para a busca é o serper_tool,
CAPÍTULO 2. CRIANDO FERRAMENTAS CUSTOMIZADAS NO CREWAI
37
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 39

AGENTES INTELIGENTES 2
configurado previamente, que permite ao agente acessar informações detalhadas da web.
Em seguida, temos o graph_agent, cuja função é transformar os dados obtidos em uma
representação visual. No goal, definimos que ele deve gerar um gráfico de pizza com base nos
dados de matriz energética. Sua backstory o caracteriza como especialista em visualização
de dados, indicando que ele sabe organizar dados de forma intuitiva. Para isso, ele utiliza
a CustomGraphTool, que permite criar gráficos no formato especificado e salvá-los como
arquivos PNG, prontos para serem utilizados em relatórios ou apresentações.
Esses dois agentes formam a base da nossa Crew, onde cada um realiza tarefas com-
plementares para, juntos, fornecerem uma visão completa e informativa sobre o consumo de
energia global.
research_agent = Agent(
role="Pesquisador de Matriz
Energética",
goal=""" Pesquisar a previsão de consumo
energético
global por
tipo de fonte
para o ano de 2025 , incluindo
porcentagens
de uso para as seguintes
fontes: Petróleo e derivados ,
Carvão, Gás natural , Hidráulica , Nuclear , Biomassa
e Outras
renováveis.""",
backstory=""" Especialista em pesquisa de dados
energéticos
e fontes de energia
sustentáveis.""",
tools =[ serper_tool],
allow_delegation =False ,
verbose=True
)
# Agente
responsável por criar o gráfico com base nos dados
fornecidos
graph_agent = Agent(
role="Criador de Gráficos",
goal=""" Gerar um gráfico de pizza
visual com base nos dados
de matriz
energética
fornecidos.""",
backstory=""" Você é especialista em visualização de
dados e transforma
dados
numéricos em gráficos
claros e informativos.""",
tools =[ CustomGraphTool ()],
#Ferramenta de criação de gráficos
allow_delegation =False ,
verbose=True
)
Criando as tarefas para o processo de pesquisa e visualização da matriz energética global.
Aqui, definimos duas Tasks que serão atribuídas aos agentes previamente configurados,
especificando exatamente o que cada agente deve realizar.
Primeiro, temos a tarefa energy_research_task, designada ao agente research_agent.
CAPÍTULO 2. CRIANDO FERRAMENTAS CUSTOMIZADAS NO CREWAI
38
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 40

AGENTES INTELIGENTES 2
No parâmetro description, a tarefa instrui o agente a utilizar o SerperDevTool para buscar
previsões de consumo energético global para o ano de 2025, detalhadas por tipo de fonte de
energia, incluindo Petróleo, Carvão, Gás Natural, entre outros. Esse tipo de pesquisa requer
fontes renomadas, garantindo a confiabilidade dos dados. O parâmetro expected_output
define o formato de saída esperado: um dicionário contendo as porcentagens de consumo
energético previstas para cada fonte. Esse formato padronizado ajuda a organizar os dados
para o próximo agente, que criará o gráfico.
A segunda tarefa, graph_creation_task, é atribuída ao graph_agent e utiliza a
CustomGraphTool para criar uma visualização gráfica dos dados de consumo energético. No
description, orientamos o agente a gerar um gráfico de pizza que mostre a distribuição percen-
tual de cada fonte de energia, conforme detalhado na previsão para 2025. O expected_output
aqui é um gráfico de pizza salvo como arquivo PNG, exibindo visualmente a matriz energética.
Essas tarefas formam um fluxo de trabalho organizado, onde o agente pesquisador coleta
e estrutura as informações, e o agente de gráficos as transforma em uma representação visual
clara e acessível.
# Task para o agente
Pesquisador de Matriz
# Energética usar o SerperDevTool
para
buscar
dados
# de consumo de energia
energy_research_task = Task(
description=""" Use o SerperDevTool
para
pesquisar a
previsão de consumo
energético
global por tipo de fonte
para o ano de 2025. As fontes de energia
devem
incluir:
Petróleo e derivados , Carvão, Gás natural , Hidráulica ,
Nuclear , Biomassa e Outras
renováveis (incluindo solar ,
eólica e geotérmica). As pesquisas na web devem ser feitas
em fontes
renomadas e retornar
porcentagens
para cada
tipo de fonte.""",
expected_output="""Um dicionário com as porcentagens
de consumo
energético
previstas
para cada
fonte em 2025:
{
"Petróleo e Derivados ": <valor >%,
"Carvão": <valor >%,
"Gás Natural ": <valor >%,
"Hidráulica ": <valor >%,
"Nuclear ": <valor >%,
"Biomassa ": <valor >%,
"Outras
Renováveis ": <valor >%
}""",
tools =[ serper_tool], # Ferramenta de pesquisa
agent=research_agent # Agente de pesquisa
)
CAPÍTULO 2. CRIANDO FERRAMENTAS CUSTOMIZADAS NO CREWAI
39
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 41

AGENTES INTELIGENTES 2
# Task para o agente
Criador de Gráficos
usar a
# CustomGraphTool e gerar um gráfico de pizza
graph_creation_task = Task(
description=""" Utilize os dados de consumo
energético
previstos
para 2025 para
criar um gráfico de pizza
que
ilustre a distribuição percentual de cada tipo
de fonte de energia: Petróleo e derivados , Carvão, Gás natural ,
Hidráulica , Nuclear , Biomassa e Outras
renováveis.""",
expected_output="Um gráfico de pizza
salvo
como
arquivo
PNG que mostra a distribuição percentual
da matriz
energética em 2025.",
tools =[ CustomGraphTool ()],
# Nossa
Ferramenta de gráficos
context =[ energy_research_task ],
agent=graph_agent
# Agente de criação de gráficos
)
Executando tudo, criamos a Crew chamada energy_crew para coordenar o trabalho
dos agentes research_agent e graph_agent em um processo sequencial.
Primeiro, o
research_agent realiza a pesquisa sobre a matriz energética para obter as porcentagens
de consumo de diferentes fontes de energia, usando o energy_research_task. Em seguida,
o graph_agent utiliza esses dados para gerar um gráfico de pizza que ilustra visualmente a
distribuição percentual da matriz energética, executando a graph_creation_task. Ao final, o
método kickoff() inicia o processo completo, e a saída final da Crew é exibida, apresentando
o caminho do gráfico gerado em PNG. Você pode ver o gráfico gerando na Figura 2.2.
# Criando a crew que
organiza o processo
# com os dois
agentes e suas
tarefas
energy_crew = Crew(
agents =[ research_agent , graph_agent],
tasks =[ energy_research_task , graph_creation_task ],
process=Process.sequential
)
# Iniciando a crew para
pesquisa e visualização
result = energy_crew.kickoff(inputs ={})
print(f"Resultado
final da Crew: {result}")
CAPÍTULO 2. CRIANDO FERRAMENTAS CUSTOMIZADAS NO CREWAI
40
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 42

AGENTES INTELIGENTES 2
Figura 2.2: Imagem gerada pela nossa ferramenta
Você aqui pode ser tentado a pensar: "Que bobagem, escrever esses códigos para gerar
um simples gráfico..."Mas é importante lembrar que o resultado final – um gráfico informativo –
é apenas a ponta do iceberg em um processo automatizado complexo, onde cada agente do
CrewAI desempenha um papel especializado. O agente research_agent simula o trabalho
de um pesquisador ao buscar dados detalhados e confiáveis sobre o consumo energético
global. Em seguida, o graph_agent age como um especialista em visualização de dados,
transformando esses dados em um gráfico de pizza que ilustra as proporções de cada fonte
de energia de forma clara e intuitiva.
Esse nível de automação elimina a necessidade de intervenção humana em cada etapa do
processo, desde a coleta de dados até a criação do gráfico, funcionando como se uma equipe
de especialistas humanos estivesse realizando o trabalho de forma integrada e eficiente. Com
o CrewAI organizando tudo, você obtém um gráfico final preciso e visualmente profissional,
economizando tempo e garantindo consistência e qualidade nos resultados. Lembre-se, este é
apenas um exemplo simples. Imagine o potencial explosivo de combinar múltiplas ferramentas
e agentes, cada um executando tarefas específicas de forma integrada e automática. Com o
CrewAI, podemos criar sistemas que automatizam processos de forma incrivelmente complexa
e eficiente, até mesmo automatizar o mundo!
CAPÍTULO 2. CRIANDO FERRAMENTAS CUSTOMIZADAS NO CREWAI
41
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 43

AGENTES INTELIGENTES 2
2.5
DEFININDO FERRAMENTAS COM @TOOL
Imagine que você é um chef em um restaurante movimentado. Para cada prato, você
precisa de diferentes ingredientes e métodos de preparo. Em alguns pratos, adiciona-se
um toque de ervas especiais ou uma apresentação visual que realça o sabor antes mesmo
da primeira mordida. O decorador @decorator no Python funciona exatamente como esses
toques finais de um chef. Ele permite "adicionar temperos"específicos e transformar uma
função comum em uma ferramenta pronta para ser usada pelos agentes, aumentando suas
capacidades de forma personalizada, exatamente como um chef realça cada prato com um
toque especial.
No CrewAI, o decorador @tool é aplicado sobre uma função para decorá-la e transformá-la
em uma ferramenta acessível para os agentes sem precisar criar uma classe para isso. As
vezes a codificação de uma ferramenta é simples demais. Com o @tool, você essencialmente
"envelopa"uma função com propriedades e comportamentos adicionais, definindo-a para ser
chamada pelos agentes em tarefas específicas. Como no restaurante, onde o chef escolhe
quais pratos recebem um tempero exclusivo, o decorador @tool permite selecionar quais
funções do código devem ganhar status de ferramenta. Esse processo torna cada ferramenta
disponível para os agentes com configurações consistentes e prontas para o uso, garantindo
que eles saibam exatamente o que podem fazer com ela.
Ao aplicar o @tool em uma função, você também configura automaticamente o compor-
tamento dessa ferramenta, facilitando o uso por diferentes agentes e tarefas sem precisar
reconfigurar o código. Assim como o toque final do chef em cada prato proporciona uma
experiência única ao cliente, o decorador @tool dá uma "personalidade"a cada ferramenta,
padronizando seu comportamento e integrando-a ao fluxo do CrewAI. Isso otimiza o processo
de criação e uso de ferramentas, garantindo que cada agente tenha uma "receita"clara para
utilizar a funcionalidade sem dificuldades.
Outro aspecto poderoso do @tool é a possibilidade de personalizar regras de acesso
e uso. Assim como o chef decide quem na cozinha pode manusear certos ingredientes ou
usar técnicas especiais, o @tool permite que você controle quais agentes podem acessar
determinadas ferramentas. Esse controle torna o CrewAI ainda mais seguro e eficaz, pois cada
agente usará apenas as ferramentas permitidas para sua tarefa, garantindo uma execução
organizada e precisa, como um chef que orquestra cada prato com maestria.
CAPÍTULO 2. CRIANDO FERRAMENTAS CUSTOMIZADAS NO CREWAI
42
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 44

AGENTES INTELIGENTES 2
Decorando MultiplicationTool
Sabe a classe MultiplicationTool? Ela é tão pequena e tão pontual que na verdade
não necessitava de uma classe inteira para sua implementação. Em vez disso, podemos
resolver o problema da multiplicação com uma função Python simples, decorada com @tool
do CrewAI Tools.
Veja como o código é estruturado: primeiro, importamos o decorador tool do módulo
crewai.tools. Esse decorador @tool é o que transforma a função em uma ferramenta que
os agentes do CrewAI podem usar diretamente. Ao decorarmos uma função com @tool,
permitimos que ela seja reconhecida como uma ferramenta disponível para os agentes do
sistema, eliminando a necessidade de criar uma classe completa para tarefas mais simples.
Na função multiplicationTool, temos dois parâmetros inteiros: primeiro_numero e
segundo_numero. O corpo da função calcula o produto desses dois números e armazena o
resultado na variável resultado. Em seguida, a função retorna uma string formatada que
apresenta o cálculo realizado e o resultado final. Essa resposta em texto é essencial para que
os agentes possam comunicar os resultados de forma mais natural e compreensível.
No decorador @tool, passamos uma string "Multiplication Tool" como argumento.
Esse nome é a identificação que o CrewAI usará para referenciar a ferramenta. O nome é útil
para que os agentes saibam o propósito da ferramenta e possam utilizá-la corretamente em
seus processos, especialmente quando há múltiplas ferramentas disponíveis.
Com essa abordagem, o código se torna mais conciso e direto. Em vez de definir
uma classe inteira apenas para a multiplicação, resolvemos o problema com uma função
que mantém a clareza e simplicidade, ideal para tarefas pequenas e bem definidas. Agora,
basta chamar a função multiplicationTool() diretamente no agente ou na tarefa onde for
necessário realizar a multiplicação, e a função será executada como esperado.
from
crewai.tools
import
tool
@tool("Multiplication
Tool")
def
multiplicationTool (primeiro_numero : int ,
segundo_numero : int) -> str:
resultado = primeiro_numero * segundo_numero
return f"""O resultado da multiplicação de
{ primeiro_numero } e {segundo_numero } é {resultado }."""
CAPÍTULO 2. CRIANDO FERRAMENTAS CUSTOMIZADAS NO CREWAI
43
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 45

AGENTES INTELIGENTES 2
2.6
CACHE: OTIMIZANDO DESEMPENHO
Imagine que você é um bibliotecário em uma grande biblioteca. Diariamente, pessoas
vêm buscar livros, e alguns títulos são muito mais populares que outros. Para agilizar o
atendimento, você decide manter uma pilha dos livros mais emprestados em uma prateleira
especial, ao alcance da sua mão. Em vez de buscar o livro em meio a milhares de outros nas
estantes, você o encontra facilmente nessa prateleira especial, pronta para atender o próximo
visitante. Esse é o conceito básico de cache: uma forma de armazenar temporariamente
dados que são acessados com frequência, para que possam ser recuperados rapidamente,
economizando tempo e recursos.
O cache é uma técnica amplamente utilizada em computação para otimizar a velocidade
e o desempenho de sistemas. Em navegadores de internet, por exemplo, o cache armazena
imagens, arquivos de estilo e outros recursos das páginas que você visita. Na próxima vez
que você acessar o mesmo site, o navegador recupera esses elementos do cache, em vez
de baixá-los novamente da internet. Isso torna a navegação mais rápida e economiza dados.
O cache é encontrado em muitos outros contextos: processadores de computadores usam
cache para armazenar dados temporários e acelerar cálculos, sistemas de armazenamento
usam cache para melhorar o acesso a discos, e até mesmo redes sociais utilizam cache para
exibir rapidamente postagens e fotos.
No CrewAI, o cache desempenha um papel semelhante. Ele permite que o sistema
armazene temporariamente os resultados de operações realizadas por ferramentas, de modo
que essas operações não precisem ser repetidas desnecessariamente. Pense em um agente
que precisa fazer a mesma multiplicação várias vezes. Sem o cache, ele teria que recalcular o
resultado a cada vez, desperdiçando tempo e recursos. Com o cache, o CrewAI armazena o
resultado e pode recuperá-lo imediatamente, agilizando o trabalho do agente.
Para tornar o mecanismo de cache mais eficiente e flexível, o CrewAI permite que os
desenvolvedores personalizem o comportamento do cache através de uma cache_function.
Essa função opcional possibilita definir regras específicas sobre quais resultados devem ser
armazenados em cache e quais não. Assim, é possível configurar o sistema para que apenas
determinados tipos de resultados sejam guardados temporariamente, oferecendo um controle
granular sobre o armazenamento.
Veja o exemplo a seguir: ainda com a nossa ferramenta multiplicationTool, que
multiplica dois números inteiros. Queremos otimizar seu desempenho utilizando o cache, mas
apenas para os casos em que o resultado da multiplicação é um número par. Nesse caso,
criamos uma cache_function que verifica se o resultado é par e, somente se essa condição
for atendida, ele é armazenado em cache. Essa lógica de cache personalizada permite que a
CAPÍTULO 2. CRIANDO FERRAMENTAS CUSTOMIZADAS NO CREWAI
44
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 46

AGENTES INTELIGENTES 2
ferramenta seja ainda mais eficiente, armazenando apenas os resultados mais relevantes e
evitando o desperdício de recursos com valores que não precisam ser guardados.
No código, a função de cache personalizada é chamada de cache_func. Ela recebe
como parâmetros os argumentos e o resultado da operação realizada pela ferramenta. Na
implementação, a função simplesmente verifica se o resultado é um múltiplo de 2. Se for,
a função retorna True, indicando que o resultado deve ser armazenado em cache; caso
contrário, ela retorna False. Esse controle ajuda a manter o cache organizado e focado nos
dados mais úteis.
A função de cache personalizada é então associada à ferramenta multiplicationTool
por meio do comando multiplicationTool.cache_function = cache_func. Dessa forma,
o CrewAI aplicará essa lógica de cache toda vez que a ferramenta for utilizada. Isso significa
que, em vez de armazenar todos os resultados, o cache só guardará aqueles que atendem à
condição estabelecida, otimizando a memória e garantindo uma execução mais rápida.
Para demonstrar essa funcionalidade, configuramos um agente chamado writer que
utiliza a multiplicationTool. Esse agente, especializado em ensinar matemática para
crianças, se beneficia da lógica de cache, pois evita recalcular a multiplicação de números
pares repetidamente. Assim, o cache melhora o desempenho do agente ao permitir que ele
se concentre em tarefas mais relevantes e execute suas operações com maior eficiência.
Com o uso do cache personalizado, o CrewAI consegue equilibrar o armazenamento
temporário de resultados e o desempenho dos agentes. Essa estratégia é especialmente útil
em sistemas complexos, onde o uso de recursos precisa ser gerido com precisão. Em resumo,
o cache é um aliado poderoso para otimizar a execução de tarefas no CrewAI, garantindo que
os agentes trabalhem de forma rápida e eficaz, sem desperdício de tempo ou recursos.
from
crewai.tools
import
tool
@tool
def
multiplicationTool (primeiro_numero : int , segundo_numero : int) -> str
:
"""Útil para
quando você precisa
multiplicar
dois números."""
return
primeiro_numero * segundo_numero
def
cache_func(args , result):
# Nesse caso , só armazenamos o resultado em cache se for múltiplo de
2
cache = result % 2 == 0
return
cache
multiplicationTool . cache_function = cache_func
writer = Agent(
CAPÍTULO 2. CRIANDO FERRAMENTAS CUSTOMIZADAS NO CREWAI
45
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 47

AGENTES INTELIGENTES 2
role="Escritor",
goal="Você escreve lições de matemática para
crianças.",
backstory="Você é um especialista em redação e adora
ensinar
crianças , mas não sabe nada de matemática.",
tools =[ multiplicationTool ],
allow_delegation =False ,
)
2.7
COTAÇÃO DO DÓLAR COM CACHE
Neste exemplo, vamos criar uma ferramenta chamada dollar_exchange_tool para
consultar a cotação atual do dólar em relação ao real (USD-BRL). Utilizaremos a API gratuita
AwesomeAPI, que fornece dados de câmbio em tempo real. Como a cotação do dólar tende a
se manter estável ao longo do dia, adicionaremos uma lógica de cache que armazena a última
cotação obtida e só realiza uma nova consulta à API se a última consulta tiver sido feita há
mais de uma hora.
A lógica de cache personalizada é implementada com uma função chamada cache_func.
Essa função verifica o tempo da última consulta e decide se o valor deve ser armazenado
em cache ou se uma nova consulta é necessária. Ao otimizar o uso de cache dessa forma,
evitamos o desperdício de recursos ao consultar a API desnecessariamente.
No código a seguir, a função dollar_exchange_tool consulta a API da AwesomeAPI para
obter a cotação do dólar em reais. A função cache_func armazena o resultado em cache se a
última consulta foi realizada há menos de uma hora. Com isso, o CrewAI consegue recuperar
a cotação do dólar diretamente do cache em consultas repetidas, tornando o processo mais
eficiente.
O agente exchange_agent é configurado para utilizar a ferramenta de cotação do dólar e
pode monitorar o valor do câmbio ao longo do dia. Com a lógica de cache, o exchange_agent
evita consultas desnecessárias, mantendo o desempenho e a eficiência do sistema.
CAPÍTULO 2. CRIANDO FERRAMENTAS CUSTOMIZADAS NO CREWAI
46
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 48

AGENTES INTELIGENTES 2
from
crewai.tools
import
tool
from
datetime
import
datetime , timedelta
import
requests
# Armazena a última
consulta
last_checked = None
@tool
def
ferramenta_cotacao_dolar () -> str:
""" Consulta a cotação do dólar em relação ao real (USD -BRL)."""
url_cotacao = "https :// economia.awesomeapi.com.br/json/last/USD -BRL"
resposta = requests.get(url_cotacao)
if resposta.status_code == 200:
dados = resposta.json ()
cotacao_dolar = dados["USDBRL"]["bid"]
return f"A cotação atual do dólar é R$ { cotacao_dolar }."
else:
return "Erro ao consultar a cotação do dólar."
def
funcao_cache(argumentos , resultado):
global
ultima_consulta
agora = datetime.now()
# Verifica se a última
consulta
foi há menos de 1 hora
if ultima_consulta
and
(agora - ultima_consulta < timedelta(hours =1)):
return
True
# Usa o cache
ultima_consulta = agora
# Atualiza
horário da última
consulta
return
False
# Não usa cache
dollar_exchange_tool .cache_function = cache_func
exchange_agent = Agent(
role="Agente de Câmbio",
goal="Monitorar a cotação do dólar ao longo do dia.",
backstory=""" Você é responsável por
consultar e reportar a
cotação atual do dólar em relação ao real.""",
tools =[ dollar_exchange_tool ],
allow_delegation =False ,
)
... # defina task , crew e kickoff ()
CAPÍTULO 2. CRIANDO FERRAMENTAS CUSTOMIZADAS NO CREWAI
47
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 49

AGENTES INTELIGENTES 2
2.8
APLICANDO CACHE EM FERRAMENTAS EXISTENTES NO CREWAI
Sim, é possível aplicar um mecanismo de cache personalizado em ferramentas já existen-
tes no CrewAI, como a ferramenta de busca SerperDevTool. A ferramenta SerperDevTool
é útil para realizar buscas na web e retornar resultados em tempo real. No entanto, para
otimizar seu uso e reduzir consultas repetitivas, podemos configurar uma cache_function
personalizada, que determina quando os resultados devem ser armazenados em cache e por
quanto tempo.
Vamos imaginar que queremos utilizar o cache para armazenar os resultados de uma
consulta específica por um período determinado (por exemplo, uma hora). Isso pode ser útil
quando o agente consulta um tópico cujos resultados não mudam com frequência, como uma
busca sobre fatos históricos ou informações sobre uma tecnologia estabelecida.
No exemplo a seguir, aplicaremos um cache à ferramenta SerperDevTool. A cache_function
será configurada para verificar se uma busca por um termo específico já foi realizada na última
hora. Se a consulta já foi feita recentemente, o CrewAI utilizará o valor armazenado em
cache, evitando uma nova busca e economizando recursos. A função de cache personalizada
receberá o termo de busca e o resultado, e armazenará o resultado apenas se a consulta foi
realizada há mais de uma hora.
Aqui está o código completo para configurar o cache em uma ferramenta existente, usando
o SerperDevTool como exemplo:
CAPÍTULO 2. CRIANDO FERRAMENTAS CUSTOMIZADAS NO CREWAI
48
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 50

AGENTES INTELIGENTES 2
from
crewai_tools
import
SerperDevTool
from
datetime
import
datetime , timedelta
# Instância da ferramenta de busca
SerperDevTool
ferramenta_busca = SerperDevTool ()
# Dicionário para
rastrear as últimas
consultas de cada
termo
ultima_consulta_busca = {}
# Função de cache
personalizada
def
funcao_cache(args , resultado):
termo = args [0]
# Primeiro
argumento é o termo de busca
agora = datetime.now()
# Verifica se o termo foi
consultado
nos últimos 60 minutos
if termo in
ultima_consulta_busca :
ultima_hora_consulta = ultima_consulta_busca [termo]
if agora - ultima_hora_consulta
< timedelta(hours =1):
return
True
# cache se a última
consulta
foi menos de 1h
ultima_consulta_busca [termo] = agora
# última
consulta
return
False
# Não armazena em cache se passou
mais de 1 hora
# Associa a função de cache à ferramenta
SerperDevTool
ferramenta_busca .cache_function = funcao_cache
# Exemplo de agente que
utiliza a ferramenta
Serper com cache
agente_busca = Agent(
role="Agente de Busca",
goal=""" Realizar
buscas na web de maneira
eficiente ,
com cache
para
otimização.""",
backstory=""" Você é um especialista em buscar
informações
na internet de maneira rápida e eficaz.""",
tools =[ ferramenta_busca ],
allow_delegation =False ,
)
... # defina task , crew e kickoff ()
CAPÍTULO 2. CRIANDO FERRAMENTAS CUSTOMIZADAS NO CREWAI
49
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 51

AGENTES INTELIGENTES 2
Explicação do Código
1.
Instância da Ferramenta SerperDevTool: Primeiro, criamos uma instância de
SerperDevTool, que permite ao agente realizar buscas na web.
2. Dicionário ultima_consulta_busca: Utilizamos um dicionário para armazenar a
última vez em que cada termo foi consultado. A chave é o termo de busca, e o valor é a data e
hora da última consulta.
3. Função de Cache Personalizada: A função funcao_cache verifica se o termo foi
consultado nos últimos 60 minutos. Se a consulta foi feita recentemente, a função retorna
True, o que indica que o resultado deve ser armazenado em cache. Caso contrário, o cache
não é utilizado e uma nova consulta é realizada.
4. Associação da Função de Cache: A função de cache é associada à ferramenta
SerperDevTool através do comando ferramenta_busca.cache_function = funcao_cache.
Isso faz com que o CrewAI utilize a lógica de cache definida sempre que a ferramenta_busca
for usada para realizar uma busca.
5. Configuração do Agente: Criamos um agente chamado agente_busca que usa a
ferramenta SerperDevTool com a lógica de cache. Esse agente pode realizar buscas na web
de maneira mais eficiente, evitando consultas repetitivas para os mesmos termos em curtos
períodos de tempo.
Com essa abordagem, você pode aplicar uma lógica de cache personalizada a pratica-
mente qualquer ferramenta no CrewAI, incluindo as ferramentas já existentes, para otimizar o
uso de recursos e melhorar o desempenho do sistema.
2.9
USANDO O CHATGPT PARA CRIAR TOOLS
João Moura, o criador do CrewAI, deu um passo além ao disponibilizar um modelo
ChatGPT especialmente voltado para ajudar na criação de ferramentas personalizadas dentro
do CrewAI. Esse GPT especializado é uma poderosa ferramenta que permite aos desenvolve-
dores gerar códigos de forma rápida e precisa para implementar funcionalidades específicas.
Com ele, é possível criar ferramentas sob medida para atender a uma ampla gama de necessi-
dades, sem que o desenvolvedor precise escrever tudo manualmente. Essa solução agiliza o
processo de desenvolvimento e expande ainda mais o potencial de customização do CrewAI.
Usar o ChatGPT para criar ferramentas no CrewAI é como ter um assistente de programa-
ção sempre à disposição, pronto para gerar código estruturado e alinhado com as melhores
práticas da plataforma. Com poucos comandos, o desenvolvedor pode solicitar a criação
de funções específicas, ferramentas que interajam com APIs externas, ou mesmo resolver
CAPÍTULO 2. CRIANDO FERRAMENTAS CUSTOMIZADAS NO CREWAI
50
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 52

AGENTES INTELIGENTES 2
problemas complexos que demandariam muito tempo de desenvolvimento manual. Esse GPT
já compreende os conceitos centrais do CrewAI e está preparado para gerar código que se
integra perfeitamente ao ambiente, o que representa um enorme ganho de eficiência.
Além disso, essa abordagem é particularmente útil para desenvolvedores que desejam
explorar a criação de ferramentas personalizadas sem ter um conhecimento aprofundado de
todas as classes e métodos do CrewAI. O ChatGPT oferece uma camada de abstração, trans-
formando ideias em código funcional, sempre com foco na compatibilidade com o CrewAI. Isso
permite que desenvolvedores concentrem seus esforços na lógica das tarefas que os agentes
precisam executar, enquanto o ChatGPT cuida dos detalhes técnicos da implementação,
gerando ferramentas de forma prática e intuitiva.
Com o ChatGPT especializado, o processo de criação de ferramentas personalizadas
se torna acessível, até mesmo para iniciantes na plataforma. João Moura transformou o
CrewAI em um ambiente colaborativo, onde os desenvolvedores podem contar com a ajuda
da inteligência artificial para expandir as capacidades dos agentes. Essa integração entre o
CrewAI e o ChatGPT proporciona um fluxo de trabalho mais dinâmico e produtivo, abrindo
portas para inovações e soluções únicas que podem ser facilmente implementadas.
PROMPT
Crie uma
ferramenta
personalizada em uma classe
como no modelo
delimitado
por <my\_tool >. O método \_run deve
receber um titulo ,
texto , o caminho (path) de uma imagem de um gráfico e gera um arquivo
PDF com esses
elementos
incorporados . Inclua o texto no PDF como uma
descrição ou título do gráfico , seguido
pela
imagem. Informe
também
quais
bibliotecas em Python
devem ser
instaladas no projeto
para
garantir o funcionamento
correto da ferramenta.
<my\_tool >
from
crewai.tools
import
BaseTool
class
MyCustomTool(BaseTool):
name: str = "Name of my tool"
description: str = """ Clear
description
for
what this tool is useful for , your
agent
will
need this
information to use it."""
def \_run(self , argument: str) -> str:
# Implementation
goes here
return "Result
from
custom
tool"
</my\_tool >
CAPÍTULO 2. CRIANDO FERRAMENTAS CUSTOMIZADAS NO CREWAI
51
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 53

AGENTES INTELIGENTES 2
Resposta do ChatGPT
Aqui está a implementação da ferramenta
personalizada
conforme o modelo
solicitado. Esta classe , chamada
PDFCreationTool , utiliza as
bibliotecas
ReportLab e Pillow (PIL) para
gerar um arquivo
PDF que
inclui um título , uma descrição e uma imagem de um gráfico. Para
garantir o funcionamento
correto , instale
essas
bibliotecas
com o
comando:
pip
install
reportlab
pillow
Código da Tool
from
crewai.tools
import
BaseTool
from
reportlab.pdfgen
import
canvas
from
reportlab.lib.pagesizes
import A4
from
reportlab.lib.utils
import
ImageReader
import os
class
PDFCreationTool (BaseTool):
name: str = "PDF
Creation
Tool"
description: str = """ Esta
ferramenta
gera um arquivo
PDF que inclui
um título , uma descrição e uma imagem. É útil para
criar
relatórios
com
elementos
visuais
incorporados ."""
def _run(self , title: str , text: str ,
image_path: str , output_path: str = "output.pdf") -> str:
"""
Gera um PDF
contendo o título , texto e uma imagem
especificada.
Args:
title (str): O título a ser
exibido no PDF.
text (str): O texto a ser incluído.
image_path (str): O caminho
para a imagem .
output_path (str): O caminho
onde o PDF "output.pdf".
Returns:
str: nome do arquivo
gerado.
"""
CAPÍTULO 2. CRIANDO FERRAMENTAS CUSTOMIZADAS NO CREWAI
52
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 54

AGENTES INTELIGENTES 2
# Verifica se o arquivo de imagem
existe
if not os.path.exists(image_path):
return f""" Erro: o arquivo de imagem em
’{image_path}’"""
# Criação do PDF usando
ReportLab
c = canvas.Canvas(output_path , pagesize=A4)
width , height = A4
# Adiciona o título ao PDF
c.setFont("Helvetica -Bold", 16)
c.drawString(margin , height - 50, title)
# Adiciona o texto
como
descrição no PDF
c.setFont("Helvetica", 12)
y_position = height - 80
y_position = draw_wrapped_text (c, text ,
margin ,
y_position , width - 2 * margin)
# Adiciona a imagem no PDF
try:
image = ImageReader(image_path)
c.drawImage(image , 50,
height - 350,
width =500 ,
height =250,
preserveAspectRatio =True)
except
Exception as e:
return f"Erro ao inserir a imagem no PDF: {e}"
# Finaliza o PDF
c.showPage ()
c.save ()
return f"PDF criado com
sucesso em
’{output_path}’"
Pronto, agora basta nós criarmos um agente para chamar a ferramenta PDFCreationTool
para criar o PDF. Essa tarefa eu deixo para você fazer na nossa lista de exercícios que segue.
CAPÍTULO 2. CRIANDO FERRAMENTAS CUSTOMIZADAS NO CREWAI
53
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 55

AGENTES INTELIGENTES 2
2.10
EXERCÍCIOS
1. Explique a importância das ferramentas personalizadas no CrewAI. Por que as
ferramentas customizadas são essenciais para expandir as capacidades dos agentes?
Em que casos elas são preferíveis em relação às ferramentas padrão?
2. Quais são os principais elementos de uma ferramenta personalizada? Descreva a
estrutura básica de uma ferramenta personalizada no CrewAI e explique a função de
cada um dos principais componentes, como name, description e o método _run.
3. Como o decorator @tool simplifica a criação de ferramentas no CrewAI? Explique
o papel do @tool em transformar uma função simples em uma ferramenta para agentes.
Em que cenários seria mais vantajoso usá-lo ao invés de uma classe?
4. Qual é a função de uma cache_function em uma ferramenta do CrewAI? Explique o
conceito de cache no CrewAI e como ele pode ser utilizado para melhorar o desempenho
de uma ferramenta. Dê um exemplo de quando o cache pode ser útil em uma aplicação
prática.
5. Como o uso do ChatGPT para criação de ferramentas customizadas pode ajudar
desenvolvedores? Explique as vantagens de utilizar o ChatGPT para gerar códigos de
ferramentas personalizadas. Como isso facilita o trabalho dos desenvolvedores e ajuda
a expandir as funcionalidades dos agentes?
6. Criação de uma Ferramenta de Contagem de Palavras Implemente uma ferramenta
chamada WordCountTool que receba um texto como entrada e retorne o número de
palavras no texto. Certifique-se de que a saída seja uma string descrevendo o total de
palavras encontradas.
7. Implementação do Cache na WordCountTool Configure uma cache_function para a
WordCountTool criada anteriormente, que armazene o resultado em cache se o número
de palavras for maior que 50. Teste a ferramenta com e sem cache para verificar o
desempenho.
8. Ferramenta de Consulta de Clima Crie uma ferramenta personalizada chamada
WeatherTool que, usando a API de clima de sua escolha, retorna a temperatura atual de
uma cidade especificada. Informe também as bibliotecas necessárias para a integração
e teste a ferramenta.
9. Ferramenta de Geração de Gráficos Utilizando Matplotlib, crie uma ferramenta
chamada SimpleLineChartTool que receba uma lista de valores numéricos e gere
um gráfico de linha, salvando-o como um arquivo PNG. A ferramenta deve retornar o
caminho para o arquivo gerado.
CAPÍTULO 2. CRIANDO FERRAMENTAS CUSTOMIZADAS NO CREWAI
54
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 56

AGENTES INTELIGENTES 2
10. Criação e Execução de um Agente com a PDFCreationTool Crie um agente que
utiliza a PDFCreationTool para gerar um relatório em PDF. O agente deve receber um
título, um texto descritivo e o caminho de uma imagem de gráfico, e salvar o PDF com
essas informações incorporadas.
CAPÍTULO 2. CRIANDO FERRAMENTAS CUSTOMIZADAS NO CREWAI
55
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 57

AGENTES INTELIGENTES 2
CAPÍTULO 3
Dominando o Uso de Flows no
CrewAI
Imagine que você está conduzindo uma orquestra. Cada músico representa um elemento
essencial, desde o violino tocando uma melodia suave até os tambores que adicionam ritmo
e intensidade. Como maestro, sua missão é coordenar cada músico para que a sinfonia se
desenrole com precisão. No mundo da programação, os Flows do CrewAI assumem o papel
de maestro, sincronizando agentes, tarefas e eventos para criar verdadeiras obras-primas
automatizadas.
Os Flows permitem que você organize e controle múltiplos processos de forma dinâmica
e eficiente. Assim como em uma orquestra, onde diferentes instrumentos entram em ação
em momentos específicos, os Flows usam ferramentas como os decoradores @start e
@listen para iniciar e reagir a eventos ao longo de um fluxo de execução. Esse sistema cria
uma harmonia entre código e automação, permitindo que processos complexos fluam com
naturalidade.
Uma das grandes vantagens dos Flows está na simplicidade de implementação. Não
importa se você é iniciante ou um desenvolvedor experiente; o CrewAI reduz a complexidade,
permitindo que você se concentre mais na lógica e menos na configuração. Essa acessibilidade
é um dos motivos pelos quais o CrewAI tem se destacado como uma solução poderosa e
acessível para automações baseadas em IA.
No coração dos Flows estão seus três pilares fundamentais: o Flow em si, os decoradores
@start e @listen. Enquanto o Flow define a estrutura geral do processo, os decoradores
atuam como os gatilhos que iniciam e coordenam os eventos. É como dar uma batida de
maestro para que o próximo instrumento entre em cena na hora certa.
Por exemplo, imagine criar um Flow simples que gera o nome de uma cidade aleatória e
depois busca um fato curioso sobre ela. Com apenas alguns comandos, o CrewAI permite que
você construa essa automação. O processo se inicia com um método decorado por @start,
CAPÍTULO 3. DOMINANDO O USO DE FLOWS NO CREWAI
56
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 58

AGENTES INTELIGENTES 2
que gera o nome da cidade. Em seguida, o decorador @listen detecta quando o nome foi
gerado e ativa o próximo passo automaticamente.
A simplicidade, no entanto, não limita a complexidade das soluções possíveis. Assim
como uma orquestra pode tocar tanto uma melodia básica quanto uma sinfonia completa, os
Flows permitem que você amplie suas automações, combinando múltiplos agentes e tarefas.
Você pode criar desde respostas automáticas de e-mail até livros inteiros com milhares de
palavras, dependendo apenas da sua criatividade.
Flows
Figura 3.1: Representação visual dos principais tipos de Flow no CrewAI.
Os Flows do CrewAI são representados por diferentes arquiteturas para coordenar agentes
e tarefas de maneira eficiente e dinâmica. A Figura 3.1 ilustra quatro tipos principais de fluxo:
o Sequential Flow, o Logic Flow (AND/OR), o Conditional Flow e o Loop Flow.
No Sequential Flow, as tarefas são executadas de maneira linear, com cada agente
esperando a conclusão do anterior antes de iniciar sua própria execução. Esse é o tipo mais
simples de fluxo e ideal para processos que exigem uma ordem rígida de execução.
O Logic Flow (AND/OR) introduz paralelismo no fluxo.
Aqui, um agente ou grupo
de agentes pode ativar várias ramificações simultaneamente, dependendo de condições
específicas. As conexões marcadas com AND indicam que todas as ramificações devem
ser concluídas antes de prosseguir, enquanto as marcadas com OR permitem que qualquer
ramificação ativada seja suficiente para desencadear os próximos passos.
No Conditional Flow, um elemento central, chamado Roteador, atua como um ponto de
CAPÍTULO 3. DOMINANDO O USO DE FLOWS NO CREWAI
57
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 59

AGENTES INTELIGENTES 2
decisão, enviando a execução para diferentes caminhos baseados em condições lógicas ou
no resultado de uma tarefa anterior. Isso é essencial em fluxos onde a tomada de decisão
dinâmica determina o próximo conjunto de tarefas ou agentes a serem ativados.
Por fim, o Loop Flow demonstra a capacidade dos Flows de repetir um conjunto de tarefas
enquanto uma condição específica for verdadeira. Esse fluxo é representado pelas setas
circulares que retornam ao agente anterior, permitindo execuções iterativas sem comprometer
a lógica geral.
Cada uma dessas arquiteturas ilustra o poder e a flexibilidade dos Flows do CrewAI,
possibilitando tanto automações simples quanto configurações mais complexas e dinâmicas.
3.1
FLOWS SIMPLES COM @START E @LISTEN
Imagine que você está ensinando uma criança a fazer uma tarefa rotineira, como preparar
um lanche. Primeiro, você explica a importância de lavar as mãos, depois pede que ela escolha
os ingredientes, e por fim, orienta na montagem do lanche. Cada etapa depende da anterior,
formando uma sequência clara e lógica. Esse é o conceito central de um workflow simples
no CrewAI: dividir um processo em passos bem definidos e organizados de forma sequencial.
Os workflows simples são como trilhos de trem: há um ponto de partida, várias paradas
intermediárias, e um destino final. Cada ’estação’ representa um estágio no fluxo, onde
algo novo é executado ou uma decisão é tomada com base no resultado da etapa anterior.
Essa estrutura é especialmente útil para tarefas lineares, como cálculos básicos, verificações
sequenciais ou pequenas interações.
No CrewAI, um fluxo básico consiste em etapas conectadas por eventos. Assim como
em uma trilha musical, onde cada nota é tocada no momento certo para criar uma melodia,
os passos do fluxo são acionados no momento exato em que suas condições são atendidas.
Essa sincronia garante a fluidez e clareza do processo, evitando confusões e falhas.
Outra vantagem dessa abordagem é a simplicidade. Flows básicos permitem que usuários
iniciantes ou com pouca experiência em programação criem soluções úteis e práticas sem se
perderem na complexidade. Por exemplo, um fluxo básico pode ser configurado para pedir
dados ao usuário, processá-los e retornar um resultado final, tudo de maneira elegante e
intuitiva.
Além disso, os workflows básicos servem como uma fundação sólida para construções
mais complexas. Assim como aprender a somar e subtrair é essencial antes de abordar
álgebra avançada, entender e dominar os fluxos simples no CrewAI prepara você para criar
arquiteturas mais robustas e dinâmicas no futuro.
Por fim, criar workflows simples é como estabelecer uma conversa organizada entre você
CAPÍTULO 3. DOMINANDO O USO DE FLOWS NO CREWAI
58
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 60

AGENTES INTELIGENTES 2
e o sistema. Cada etapa representa uma troca de informações, uma interação que avança
o objetivo geral do processo. Com isso, o CrewAI se torna uma ferramenta poderosa para
automatizar tarefas repetitivas, permitindo que você concentre seus esforços em problemas
mais desafiadores e criativos.
Entendendo o Decorador @start
O decorador @start é o ponto de partida de qualquer fluxo no CrewAI. Ele define a etapa
inicial do workflow, onde o processo começa a ser executado. Pense no @start como o
momento em que você aciona o interruptor para ligar uma máquina. Sem essa etapa inicial,
o fluxo simplesmente não tem como saber por onde começar ou qual será o seu ponto de
partida lógico.
Esse decorador é fundamental para estabelecer um ponto de entrada claro e objetivo
no fluxo. Em um workflow, o @start sinaliza o início de toda a execução, garantindo que
os passos subsequentes só sejam acionados depois que esta etapa inicial for concluída. É
como alinhar os primeiros dominós antes de iniciar uma sequência: sem o primeiro dominó, a
sequência simplesmente não pode começar.
Além disso, o @start é responsável por definir qual função será executada logo no início
do processo. Em um fluxo de cálculo, por exemplo, essa etapa inicial pode ser usada para
exibir uma mensagem de boas-vindas ou solicitar informações básicas do usuário. Ele prepara
o terreno para que as etapas seguintes possam ser ativadas de maneira organizada e eficiente.
Outro ponto importante sobre o @start é que ele também encapsula a lógica de inicializa-
ção, promovendo clareza e modularidade no código. Ao marcar uma função com @start, você
deixa claro para outros desenvolvedores (ou para si mesmo, no futuro) que aquela função
desempenha o papel central de iniciar o fluxo. Essa organização é crucial em projetos maiores,
onde a legibilidade do código faz toda a diferença.
Por fim, o @start destaca-se por sua simplicidade e objetividade. Ele elimina a neces-
sidade de código redundante para identificar qual etapa iniciar no fluxo, permitindo que o
foco permaneça na implementação das etapas do workflow. Isso reflete a filosofia do CrewAI:
facilitar o desenvolvimento de workflows ao encapsular a lógica repetitiva em componentes
reutilizáveis e bem definidos.
Entendendo o Decorador @listen
Imagine uma câmera de segurança instalada em um museu. Ela não faz nada ativamente
até que algo aconteça em sua área de observação, como alguém entrando em uma sala
ou interagindo com uma obra de arte. Assim que detecta algo relevante, a câmera reage,
CAPÍTULO 3. DOMINANDO O USO DE FLOWS NO CREWAI
59
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 61

AGENTES INTELIGENTES 2
registrando ou acionando alarmes. O decorador @listen no CrewAI funciona de maneira
semelhante, observando cuidadosamente a execução de uma etapa do fluxo e respondendo
assim que ela é concluída.
O papel fundamental do @listen é conectar funções dentro de um workflow, permitindo
que elas interajam de forma sequencial e organizada. Quando uma função observada termina
sua execução, o decorador @listen detecta esse evento e dispara a próxima função, passando
os resultados como entrada. Essa característica permite a criação de fluxos dinâmicos e
reativos, onde cada etapa está naturalmente alinhada à anterior.
Em termos de design de software, o @listen se assemelha ao padrão Observer, em que
objetos dependentes reagem automaticamente às mudanças no estado de outro objeto. No
contexto do CrewAI, a função decorada com @listen é como um observador que monitora
um evento específico, aguardando pacientemente sua conclusão para entrar em ação. Isso
garante que o fluxo siga de forma sincronizada e previsível.
A versatilidade do @listen é uma de suas maiores vantagens. Ele não apenas permite a
construção de fluxos lineares, mas também pode ser usado para criar ramificações ou executar
várias funções em paralelo, dependendo do design escolhido. Por exemplo, múltiplas funções
podem ’observar’ uma única etapa e iniciar diferentes caminhos do workflow a partir de um
único ponto.
Finalmente, o uso do @listen promove modularidade e clareza no código. Cada etapa
do fluxo é isolada, mas conectada de forma lógica e intuitiva. Isso não apenas facilita a
manutenção e a leitura do código, mas também permite a reutilização de partes do workflow
em outros contextos, reduzindo o esforço de desenvolvimento e aumentando a eficiência geral.
Facilitando para você: Nesse momento, não utilizaremos nenhuma Crew para que
possamos focar no entendimento inicial sobre como os fluxos funcionam no CrewAI. Em
etapas futuras, depois que você compreender bem os flows, incorporaremos as Crews
aos flows, demonstrando na prática essa poderosa funcionalidade do CrewAI.
CAPÍTULO 3. DOMINANDO O USO DE FLOWS NO CREWAI
60
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 62

AGENTES INTELIGENTES 2
Código completo:
Faça download do código completo do que trataremos nas seções abaixo:
hhttps://bit.ly/crewai2-flows
Criando o Fluxo
Vamos agora criar efetivamente o fluxo. O código apresentado demonstra a criação de
um fluxo simples utilizando o CrewAI-Flow, estruturado em três etapas principais, cada uma
representada por um método decorado por @start e @listen.
A função inicial, marcada pelo decorador @start, representa o ponto de partida do fluxo,
onde uma mensagem de boas-vindas é exibida e retornada. Em seguida, o decorador @listen
é utilizado para conectar as etapas subsequentes, permitindo que a próxima função observe
a saída da anterior. Por exemplo, a função obter_numeros aguarda a mensagem retornada
pela saudação e solicita dois números ao usuário, enquanto a última etapa, calcular_soma,
recebe os números fornecidos, calcula sua soma e exibe o resultado. Essa organização reflete
a modularidade e a eficiência do CrewAI ao encadear ações de forma sequencial e lógica.
from
crewai.flow.flow
import Flow , listen , start
class
FluxoSimples(Flow):
@start ()
def
saudacao(self):
#Aqui pode ser uma Crew
Inteira
print(’Iniciando o fluxo ’)
mensagem = ’Olá! Bem -vindo ao fluxo
matemático
simples.’
print(mensagem)
return
mensagem
@listen(saudacao)
def
obter_numeros(self , mensagem):
#Aqui uma
segunda
Crew que espera a saída da primeira
print(f’Mensagem
para o usuário: {mensagem}’)
# Solicita
dois números
para o usuário
num1 = int(input(’Digite o primeiro número: ’))
num2 = int(input(’Digite o segundo número: ’))
print(f’Números
recebidos: {num1} e {num2}’)
return num1 , num2
CAPÍTULO 3. DOMINANDO O USO DE FLOWS NO CREWAI
61
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 63

AGENTES INTELIGENTES 2
@listen(obter_numeros)
def
calcular_soma(self , numeros):
#Aqui uma
terceira
Crew que
termina os processos
num1 , num2 = numeros
soma = num1 + num2
print(f’A soma de {num1} e {num2} é {soma}’)
return
soma
# Criar e iniciar o fluxo
fluxo = FluxoSimples ()
resultado = fluxo.kickoff ()
print(f’Resultado
final: {resultado}’)
O código apresentado ilustra um exemplo de como fluxos podem ser estruturados utili-
zando o CrewAI. Ele organiza tarefas de forma sequencial, lembrando a execução de Crews
conectadas em um fluxo. Vamos explorar como cada parte do código se relaciona com o
conceito de Crews e os papéis que elas desempenham.
O decorador @start, aplicado ao método saudacao, marca o início do fluxo. Se esti-
véssemos utilizando Crews, seria aqui que a Crew inicial seria alocada, responsável por
preparar o terreno para o restante do fluxo. Essa Crew inicial seria o ponto de partida lógico,
desempenhando a função de alinhar as etapas que seguirão, assim como o método saudacao
que exibe a mensagem de boas-vindas e retorna um valor inicial.
Já o decorador @listen, aplicado ao método obter_numeros, espera a saída da etapa
anterior para ativar a próxima. Se estivéssemos em um contexto de Crews, essa etapa poderia
ser comparada à Crew intermediária, que observa o resultado da Crew inicial (a mensagem
retornada pelo método saudacao) e realiza a próxima tarefa: coletar dois números do usuário.
Esse tipo de comportamento reflete o padrão de comunicação entre Crews, onde cada uma
depende do resultado da anterior para avançar no fluxo.
O último método, calcular_soma, também decorado com @listen, seria equivalente à
Crew final no contexto de Crews. Ele recebe os números processados pela Crew intermediária
e executa a tarefa de somar esses números. Assim como em fluxos reais de Crews, esta etapa
consolidaria os resultados obtidos ao longo do fluxo, finalizando o processo e retornando o
resultado final ao usuário.
Podemos traçar um paralelo entre as tarefas descritas no código e a execução de Crews.
Cada método desempenha o papel de uma tarefa individual, enquanto os decoradores @start
e @listen estabelecem as conexões lógicas entre elas. Essa organização reflete a estrutura
CAPÍTULO 3. DOMINANDO O USO DE FLOWS NO CREWAI
62
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 64

AGENTES INTELIGENTES 2
de um fluxo típico no CrewAI, onde Crews interagem e colaboram para alcançar o objetivo
definido.
Ao observar o fluxo como um todo, é possível identificar claramente as etapas equivalentes
às Crews inicial, intermediária e final. Essa analogia ajuda a compreender como fluxos mais
complexos podem ser organizados utilizando a mesma abordagem, com cada tarefa conectada
logicamente à próxima, garantindo um fluxo ordenado e eficiente.
3.2
PLOTANDO SEU FLUXO
Vamos adicionar o comando fluxo.plot() ao final do fluxo, logo após o print(f’Resultado
final:
{resultado}’), permite a geração de uma visualização gráfica do fluxo em formato
HTML. Esse gráfico é uma representação clara e interativa das conexões entre os diferentes
métodos do fluxo, destacando o ponto de partida (@start) e as transições para as etapas
subsequentes (@listen). Essa visualização é extremamente útil para validar se a lógica do
fluxo está sendo executada como planejado e para identificar quaisquer ajustes necessários.
Com o gráfico gerado, você consegue observar como cada etapa do fluxo está encade-
ada, tornando tangível o comportamento do código. A conexão entre os métodos, indicada
pelas setas no diagrama, reflete o encadeamento lógico definido pelos decoradores. Isso é
especialmente útil quando fluxos mais complexos forem criados, permitindo que você analise
as ramificações e transições de maneira visual e intuitiva.
...
print (f’Resultado
final : {resultado}’)
fluxo.plot ()
Após executar o código, o CrewAI gerou uma representação visual do fluxo descrito, con-
forme mostrado na Figura 3.2. Essa visualização é baseada na estrutura lógica implementada
no código e ilustra de forma clara como os métodos se conectam e como o fluxo progride.
Cada elemento no gráfico tem um papel bem definido, reforçando o encadeamento das etapas.
No topo do fluxo, o método saudacao, destacado em vermelho, indica que este é o ponto
de partida do fluxo, configurado pelo decorador @start. Este método inicializa o processo
com uma mensagem de boas-vindas, preparando o terreno para as etapas seguintes. A partir
dele, temos uma seta que conecta o método inicial ao próximo, Obter Numeros, simbolizando
a transição lógica. Esse método recebe os dados do usuário, marcando a segunda etapa. Por
fim, o fluxo culmina no método Calcular Soma, que realiza a soma dos números fornecidos,
CAPÍTULO 3. DOMINANDO O USO DE FLOWS NO CREWAI
63
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 65

AGENTES INTELIGENTES 2
Figura 3.2: Representação visual de um fluxo simples gerado pelo CrewAI.
concluindo o fluxo. Essa estrutura hierárquica reflete o encadeamento linear entre as etapas
do código.
A Figura 3.2 é uma ferramenta essencial para compreender os fluxos no CrewAI. Ela
destaca os métodos iniciais e intermediários, identificados por suas cores e tipos específicos,
permitindo um entendimento visual da execução do fluxo descrito.
3.3
ESTADOS DOS FLUXOS
Imagine que um fluxo do CrewAI é como uma grande cozinha de restaurante, onde
diferentes chefs (as etapas do fluxo) trabalham em conjunto para preparar um prato elaborado.
O estado do fluxo seria como uma mesa central onde todos os ingredientes e informações
sobre os pedidos estão disponíveis para os chefs consultarem e atualizarem. Antes de
iniciar o trabalho, o gerente da cozinha coloca na mesa central os ingredientes básicos,
como vegetais, proteínas e especiarias (os inputs gerais do estado). À medida que os chefs
executam suas tarefas, eles podem adicionar novos ingredientes à mesa, modificar o preparo
dos já existentes ou até mesmo reorganizar as etapas do processo, tudo isso consultando e
atualizando constantemente a mesa central.
Nesse cenário, cada chef ainda tem seus próprios utensílios e ingredientes específicos que
CAPÍTULO 3. DOMINANDO O USO DE FLOWS NO CREWAI
64
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 66

AGENTES INTELIGENTES 2
precisa para executar sua parte do trabalho, assim como as Crews têm seus próprios inputs.
No entanto, a mesa central permite que todos trabalhem de forma integrada, compartilhando
o progresso e garantindo que o prato final seja o resultado de um esforço coordenado. Se o
estado não existisse, os chefs teriam que passar informações verbalmente uns para os outros,
o que seria confuso e ineficiente. O estado, portanto, é a estrutura que organiza e conecta
todas as etapas, garantindo que o fluxo funcione como um verdadeiro time em sinergia.
Os estados em fluxos do CrewAI desempenham um papel central na execução dos
workflows, funcionando como uma espécie de input geral compartilhado entre as etapas do
fluxo. Enquanto cada etapa pode, em teoria, manipular diretamente suas próprias entradas
e saídas, o estado permite centralizar e unificar essas informações, garantindo que o fluxo
tenha uma visão global e consistente sobre o que está acontecendo em cada etapa. É como
se o estado fosse uma base de dados temporária compartilhada, que as etapas consultam e
atualizam conforme o fluxo avança.
Diferentemente dos inputs específicos de uma Crew, que geralmente são altamente
especializados e ajustados para a execução de uma tarefa específica, o estado é pensado
como o contexto global do fluxo. Ele pode conter informações como parâmetros iniciais,
resultados intermediários, contadores de progresso ou mesmo mensagens informativas. Isso
é especialmente útil em cenários onde várias etapas dependem de um histórico compartilhado
ou precisam acessar dados gerados por etapas anteriores. Assim, o estado se torna um
recurso fundamental para conectar as etapas de maneira fluida e sem ambiguidades.
Além disso, o estado desempenha um papel importante na flexibilidade e reutilização dos
fluxos. Imagine um fluxo em que você deseja modificar apenas um parâmetro de entrada inicial,
como o valor de um contador ou uma mensagem padrão. Com o uso de estados, você pode
alterar esses inputs gerais sem a necessidade de ajustar diretamente as etapas individuais
do fluxo. Isso simplifica a manutenção e a escalabilidade, pois você consegue controlar o
comportamento geral de um fluxo a partir de um único ponto de entrada, economizando tempo
e reduzindo a complexidade de ajustes em larga escala.
Por fim, o estado também contribui para a integração entre Crews e fluxos. Enquanto
uma Crew pode ter seus próprios inputs específicos para executar suas funções, o estado
do fluxo atua como um ponto de integração, fornecendo dados consistentes que podem ser
utilizados ou atualizados por múltiplas Crews ao longo do workflow. Isso reflete uma arquitetura
inteligente e colaborativa, onde fluxos e Crews trabalham em harmonia, unificando dados e
objetivos para garantir que os processos sejam executados de forma coesa e eficiente.
Outra analogia útil é pensar no estado como a memória de um videogame. Imagine jogar
um jogo onde você não pode salvar seu progresso. Cada vez que você joga, começa do início.
O estado, nesse caso, é o sistema de salvamento que lembra onde você parou, o que você já
conquistou e quais são seus próximos passos. Ele garante continuidade e evita retrabalho.
Por fim, o estado também é crucial para garantir a modularidade e reutilização dos fluxos.
CAPÍTULO 3. DOMINANDO O USO DE FLOWS NO CREWAI
65
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 67

AGENTES INTELIGENTES 2
Cada método pode se concentrar em sua função específica sem precisar se preocupar com
o que já foi feito ou o que virá depois. Isso reflete a filosofia do CrewAI: permitir que cada
parte do fluxo opere de forma independente, enquanto o estado atua como o fio condutor que
conecta todas as partes em uma execução coesa e eficiente.
Lembra lá no livro CrewAI - Básico, onde enviávamos dados para todos os agentes via
’inputs’? Aqui no fluxo do CrewAI, temos algo semelhante, mas em uma escala mais ampla
e compartilhada. O estado global (state) atua como uma memória unificada que conecta as
Crews dentro do fluxo, permitindo que elas compartilhem informações de maneira coordenada
e eficiente. Na Figura 3.3, podemos observar como as Crews, representadas pelas caixas
vermelhas, utilizam o estado global, ilustrado pelo ícone azul no topo. Cada Crew pode ter
seus próprios inputs, indicados pelos ícones amarelos, mas também acessam o estado global
para informações que precisam ser persistidas ou compartilhadas entre diferentes etapas
do fluxo. Essa integração é essencial para que as Crews não apenas realizem suas tarefas
isoladamente, mas também contribuam para o progresso contínuo do fluxo como um todo.
Figura 3.3: Interação entre as Crews e o estado global em um fluxo do CrewAI.
Os acessos ao estado global são indicados pelas setas vermelhas que conectam o ícone
azul às Crews. Esses acessos garantem que as Crews possam ler dados globais, como o
progresso geral ou informações compartilhadas, e também atualizar esse estado com novos
dados gerados durante suas operações. Por exemplo, uma Crew pode registrar no estado
que concluiu sua tarefa, permitindo que as próximas Crews saibam exatamente em que ponto
continuar.
Assim como os inputs são fundamentais para a execução de cada Crew, o estado global
é indispensável para o fluxo. Ele permite que todas as partes do fluxo estejam sincronizadas e
operem de maneira coesa, garantindo que as informações importantes sejam persistidas e
utilizadas ao longo das etapas. Essa organização centralizada do estado é o que possibilita a
CAPÍTULO 3. DOMINANDO O USO DE FLOWS NO CREWAI
66
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 68

AGENTES INTELIGENTES 2
complexidade e a escalabilidade dos fluxos no CrewAI.
No meu entendimento, um flow é como se fosse uma Crew de Crews (kkkk). Pense bem:
assim como uma Crew reúne agentes para trabalhar juntos em tarefas específicas, um flow
conecta várias Crews, coordenando suas atividades para atingir um objetivo maior. É como
se o flow fosse o maestro de uma orquestra onde cada Crew é uma seção da banda — os
violinos, os sopros, as percussões — e o estado global (state) é a partitura que todos precisam
acompanhar para garantir a harmonia do conjunto. Fantástico! Não é?
self.state
O estado está sempre armazenado no atributo self.state, que foi herdado diretamente
da classe Flow do CrewAI. Esse atributo é o coração do gerenciamento de informações no
fluxo, permitindo que dados sejam compartilhados e atualizados de maneira consistente entre
as Crews. Cada método dentro do flow tem acesso a esse self.state, o que possibilita que
informações sejam acumuladas e transferidas ao longo das etapas do processo, garantindo a
continuidade e integridade dos dados durante a execução do flow.
Quando trabalhamos com fluxos no CrewAI, o gerenciamento do estado é uma parte
central para assegurar que todas as etapas do processo funcionem de maneira coesa. Existem
dois tipos principais de gerenciamento de estado: o não estruturado e o estruturado. Ambos
têm como objetivo manter e manipular as informações compartilhadas ao longo do fluxo, mas
diferem fundamentalmente na forma como organizam e acessam esses dados.
O estado não estruturado é mais flexível, permitindo que informações sejam adicionadas
e modificadas sem uma estrutura rígida. Ele funciona como um bloco de notas onde você pode
anotar qualquer coisa, de qualquer maneira, conforme o fluxo avança. Essa abordagem é útil
para fluxos mais simples ou dinâmicos, onde não é necessário um controle rigoroso sobre a
forma como os dados são armazenados ou acessados. No entanto, essa flexibilidade também
pode trazer desafios, especialmente em fluxos mais complexos, onde a falta de estrutura pode
dificultar o rastreamento das informações.
Por outro lado, o estado estruturado utiliza uma organização definida e pré-determinada
para armazenar os dados do fluxo. Pense nele como um formulário cuidadosamente projetado,
onde cada campo tem seu lugar e propósito. Essa abordagem é ideal para fluxos que requerem
uma maior previsibilidade e padronização, garantindo que as informações sejam armazenadas
de forma consistente e que erros sejam minimizados. Embora o estado estruturado ofereça
menos flexibilidade, ele compensa ao proporcionar maior clareza e controle.
A escolha entre estado estruturado e não estruturado depende muito da natureza do
fluxo e das necessidades do desenvolvedor. Para tarefas rápidas e simples, o estado não
estruturado pode ser suficiente, enquanto fluxos complexos, que envolvem várias etapas
CAPÍTULO 3. DOMINANDO O USO DE FLOWS NO CREWAI
67
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 69

AGENTES INTELIGENTES 2
interdependentes, podem se beneficiar de uma abordagem estruturada. O importante é
compreender as vantagens e limitações de cada abordagem para decidir qual delas melhor
atende ao caso de uso específico.
Independentemente do tipo escolhido, ambos os métodos de gerenciamento de estado
compartilham o mesmo objetivo: garantir que o fluxo funcione de forma eficiente e que os
dados necessários estejam sempre disponíveis para cada etapa. Em seções posteriores,
exploraremos em detalhes cada uma dessas abordagens, mostrando suas características,
usos práticos e como implementá-las de maneira eficaz no CrewAI.
3.4
ESTADO NÃO-ESTRUTURADO
O estado não estruturado em fluxos do CrewAI é uma abordagem que oferece flexibilidade
e simplicidade ao lidar com os dados que transitam entre os métodos de um fluxo. Ele é
como uma página em branco, onde você pode anotar informações conforme necessário, sem
a preocupação com regras ou formatos rígidos. Essa liberdade permite que cada método
contribua com novos dados ou modifique os existentes de maneira fluida e adaptável. É
ideal para fluxos rápidos ou experimentais, onde a necessidade de organização detalhada do
estado é secundária.
Essa abordagem é frequentemente utilizada em cenários onde a quantidade de dados
compartilhados entre os métodos é limitada ou quando não há um padrão fixo para as
informações que serão manipuladas. Por exemplo, em um fluxo simples de cálculos ou coleta
de dados, o estado não estruturado pode ser suficiente para armazenar valores intermediários
e resultados sem exigir uma estrutura formal. Essa simplicidade permite que o desenvolvedor
foque na lógica do fluxo, em vez de investir tempo organizando o estado.
No entanto, o estado não estruturado também traz alguns desafios. A falta de uma
estrutura definida pode se tornar um obstáculo em fluxos mais complexos, onde vários
métodos precisam acessar ou modificar os mesmos dados. Sem uma organização clara, é
fácil perder o controle sobre quais informações estão disponíveis e onde elas foram alteradas.
Isso pode levar a erros difíceis de identificar, especialmente em fluxos que envolvem muitas
interdependências.
Apesar dessas limitações, o estado não estruturado continua sendo uma ferramenta
poderosa quando usado no contexto certo. Sua flexibilidade permite que fluxos simples sejam
desenvolvidos rapidamente, sem a necessidade de configurações adicionais. À medida que
avançamos na compreensão dessa abordagem, veremos exemplos práticos de como ela pode
ser implementada e como aproveitar sua simplicidade para criar fluxos eficientes e adaptáveis
no CrewAI.
CAPÍTULO 3. DOMINANDO O USO DE FLOWS NO CREWAI
68
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 70

AGENTES INTELIGENTES 2
Vejamos um exemplo prático de estado não estruturado no CrewAI. Aqui, o código
demonstra como o atributo self.state é usado para armazenar informações que percorrem
todas as etapas de um fluxo. Começamos com a definição de um estado inicial, no qual uma
informação base é gerada com base em um tema fornecido como input. Essa informação é
então passada adiante e enriquecida em cada etapa subsequente.
Observe que cada método marcado com @start ou @listen adiciona novas informações
ou atualiza o estado existente. Isso simula a colaboração entre diferentes Crews em um fluxo,
onde cada uma contribui para um objetivo comum. No exemplo, a etapa_inicial gera uma
introdução com o tema ’IA na Saúde’, enquanto as etapas intermediárias e finais enriquecem
essa mensagem, simulando o trabalho coletivo de múltiplas equipes. Ao final do processo, o
estado consolidado reflete todas as contribuições feitas ao longo do fluxo.
from
crewai.flow.flow
import Flow , listen , start
class
UnstructuredStateFlow (Flow):
@start ()
def
etapa_inicial(self):
#info é um estado
qualquer
#criado
para
armazenar
uma
#informação ao longo do fluxo
self.state[’info ’] = ’Vamos
falar
sobre : ’+ self.state[’tema ’]
self.state[’info ’] += ’\nInformação gerada
pela
PRIMEIRA
Crew ’
self.state[’etapas_concluidas ’] = 1
@listen(etapa_inicial)
def
etapa_intermediaria (self):
self.state[’info ’] += ’\nInformação gerada
pela
SEGUNDA
Crew ’
self.state[’etapas_concluidas ’] += 1
@listen( etapa_intermediaria )
def
etapa_final(self):
self.state[’info ’] += ’\nInformação gerada
pela
TERCERIA
Crew ’
self.state[’etapas_concluidas ’] += 1
return
self.state
CAPÍTULO 3. DOMINANDO O USO DE FLOWS NO CREWAI
69
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 71

AGENTES INTELIGENTES 2
processo = UnstructuredStateFlow ()
state = processo.kickoff(inputs ={’tema ’:’IA na Saúde’})
print(f’Estado do processo ao final :\n{state[’info ’]}’)
processo.plot ()
Assim como os inputs das Crews permitem fornecer dados para agentes individuais, os
fluxos no CrewAI também aceitam inputs globais no momento de sua inicialização. Isso é
realizado no comando processo.kickoff(inputs={’tema’:
’IA na Saúde’}), onde o
inputs fornece dados iniciais que podem ser acessados por todas as etapas do fluxo através
do atributo self.state. Esses inputs não apenas configuram o ponto de partida do fluxo, mas
também permitem um grau elevado de personalização para diferentes contextos de execução.
No exemplo acima, o input ’tema’:
’IA na Saúde’ é passado ao fluxo, e a primeira
etapa, etapa_inicial, utiliza essa informação para criar uma mensagem inicial.
Essa
mensagem é armazenada no estado com a variável info, demonstrando como podemos
dinamicamente criar variáveis no self.state para guardar informações que serão propagadas
ao longo do fluxo. O estado funciona como uma memória global do fluxo, acessível e atualizável
em qualquer etapa.
Além disso, o código exemplifica o uso de outra variável dinâmica no estado, chamada
etapas_concluidas, que rastreia o progresso do fluxo. Na etapa_inicial, essa variável é
inicializada com o valor 1. À medida que o fluxo avança, cada etapa subsequente incrementa
essa variável, indicando que mais uma etapa foi concluída. Isso demonstra como variáveis
podem ser criadas e manipuladas no estado para gerenciar informações de controle ou dados
complexos.
As etapas intermediária e final, marcadas respectivamente pelos decoradores
@listen(etapa_inicial) e @listen(etapa_intermediaria), não recebem inputs direta-
mente. Em vez disso, utilizam e enriquecem os dados armazenados no estado, adicionando
informações adicionais à variável info e atualizando a contagem de etapas concluídas. Isso
ilustra como o estado global do fluxo centraliza o gerenciamento de dados, permitindo que as
etapas colaborem de forma eficaz.
Por fim, o fluxo é concluído na etapa_final, onde o estado consolidado é retornado e
exibido. A mensagem armazenada em info reflete as contribuições de todas as etapas, desde
a inicial até a final. O código ainda utiliza processo.plot() para gerar um gráfico visual que
mapeia as etapas do fluxo e sua progressão, oferecendo uma maneira clara de compreender
a execução geral do processo. Essa integração entre inputs, estados dinâmicos e etapas
sequenciais torna o CrewAI uma ferramenta poderosa para modelar workflows complexos.
Agora que compreendemos como o estado não estruturado permite flexibilidade e simpli-
cidade na gestão de dados ao longo do fluxo, é hora de explorarmos uma abordagem mais
CAPÍTULO 3. DOMINANDO O USO DE FLOWS NO CREWAI
70
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 72

AGENTES INTELIGENTES 2
robusta e padronizada: o estado estruturado. Enquanto o estado não estruturado oferece
liberdade para criar variáveis dinamicamente e armazenar informações conforme necessário,
o estado estruturado traz organização e consistência ao processo, garantindo maior controle e
previsibilidade sobre os dados que trafegam entre as etapas. Vamos adentrar essa abordagem
para entender como ela se diferencia e quais benefícios pode oferecer na construção de fluxos
mais complexos e organizados.
3.5
ESTADO ESTRUTURADO
Imagine que você está organizando uma grande festa e decide utilizar uma planilha para
gerenciar tudo: convidados, comidas, bebidas e até o cronograma do evento. Cada coluna da
planilha representa um tipo específico de dado, e cada linha contém informações detalhadas
e organizadas. Esse é o princípio do estado estruturado no CrewAI: tudo está devidamente
planejado e organizado em um formato padronizado, como se fosse uma planilha digital para o
fluxo. Diferente de anotar informações em folhas soltas, onde cada anotação segue um estilo
próprio (como no estado não estruturado), aqui tudo é claramente definido e registrado.
No CrewAI, o estado estruturado permite que os dados trafeguem entre as etapas do fluxo
de forma consistente e padronizada. Cada variável que será manipulada no estado é definida
previamente, garantindo que não haja surpresas ou erros inesperados durante a execução.
É como ter uma lista detalhada de tudo o que precisa ser feito na festa, de modo que todos
os organizadores saibam exatamente onde encontrar as informações necessárias e como
atualizá-las.
Além disso, o estado estruturado promove previsibilidade e controle. Assim como em uma
planilha onde você pode visualizar facilmente todos os dados, o estado estruturado fornece
uma visão clara de todas as informações disponíveis no fluxo. Isso facilita a colaboração entre
agentes e etapas, pois todos compartilham uma estrutura de dados comum e confiável. Essa
padronização é essencial para fluxos mais complexos, onde múltiplas etapas dependem de
informações precisas e bem organizadas.
Por fim, o estado estruturado também atua como uma espécie de contrato para os
dados. Assim como uma planilha evita que informações erradas ou fora do contexto sejam
registradas, o estado estruturado no CrewAI garante que apenas os dados esperados e
definidos previamente sejam manipulados no fluxo. Isso não apenas aumenta a confiabilidade
do processo, mas também reduz significativamente os erros e facilita a manutenção do sistema
ao longo do tempo.
Vejamos um exemplo prático de estado estruturado, onde utilizamos o Pydantic para definir
uma classe de estado estruturado. Isso permite um controle mais rigoroso sobre as variáveis
CAPÍTULO 3. DOMINANDO O USO DE FLOWS NO CREWAI
71
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 73

AGENTES INTELIGENTES 2
que serão manipuladas no fluxo. Aqui, o estado é definido como um objeto da classe State,
herdada de BaseModel do Pydantic, garantindo que os atributos estejam sempre inicializados
e com tipos consistentes.
No início, a classe State define os atributos tema, info e etapas_concluidas. O atributo
tema é inicializado com o valor ’IA na Saúde’, funcionando como um tema principal do fluxo.
O atributo info é uma string utilizada para armazenar as informações geradas ao longo das
etapas, enquanto etapas_concluidas mantém um contador das etapas concluídas.
No fluxo StructuredStateFlow, associado à classe de estado State, as etapas são
definidas utilizando os decoradores @start e @listen. A primeira etapa, etapa_inicial,
inicia o estado preenchendo o campo info com informações relevantes e ajustando o conta-
dor etapas_concluidas. Cada etapa subsequente, etapa_intermediaria e etapa_final,
acessa e modifica os mesmos atributos do estado, adicionando novas informações ao info e
incrementando o contador.
Essa estrutura assegura que o estado seja consistente e previsível em todas as etapas
do fluxo. A principal vantagem aqui é a clareza e a segurança proporcionadas pelo estado
estruturado, eliminando o risco de acessos a atributos não inicializados ou mal definidos. Ao
final, o estado é retornado e exibido, com todo o fluxo documentado.
from
crewai.flow.flow
import Flow , listen , start
from
pydantic
import
BaseModel
# Definindo o estado
estruturado
com
Pydantic
class
State(BaseModel):
tema: str = ’IA na Saúde’ # Tema
principal do fluxo
info: str = ’’
# Informações geradas ao longo do fluxo
etapas_concluidas : int = 0
# Contador de etapas
concluídas
class
StructuredStateFlow (Flow[State ]):
state_class = State
# Associando o estado
estruturado ao fluxo
@start ()
def
etapa_inicial(self):
# O estado
estruturado já garante
que as
variáveis estão previamente
definidas
self.state.info = f’Vamos
falar
sobre: {self.state.tema}’
self.state.info += ’\nInformação gerada
pela
PRIMEIRA
Crew ’
self.state. etapas_concluidas = 1
@listen(etapa_inicial)
def
etapa_intermediaria (self):
self.state.info += ’\nInformação gerada
pela
SEGUNDA
Crew ’
self.state. etapas_concluidas += 1
CAPÍTULO 3. DOMINANDO O USO DE FLOWS NO CREWAI
72
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 74

AGENTES INTELIGENTES 2
@listen( etapa_intermediaria )
def
etapa_final(self):
self.state.info += ’\nInformação gerada
pela
TERCERIA
Crew ’
self.state. etapas_concluidas += 1
return
self.state
# Inicializando o fluxo com estado
estruturado
processo = StructuredStateFlow ()
state = processo.kickoff ()
print(f’Estado do processo ao final :\n{state.info}’)
processo.plot ()
3.6
LÓGICA CONDICIONAL NO FLUXO
Imagine que você está dirigindo por uma estrada e chega a um cruzamento. Nesse
momento, você deve tomar uma decisão: virar à esquerda, à direita, ou seguir em frente. Cada
escolha leva a um destino diferente, e sua decisão depende das condições ao seu redor, como
o trânsito ou o objetivo da viagem. Essa é a essência da lógica condicional nos flows do
CrewAI: permitir que decisões sejam tomadas dinamicamente, com base em informações
disponíveis, para determinar o próximo caminho no fluxo.
No contexto do CrewAI, um flow com lógica condicional é como um mapa interativo onde
as rotas se ajustam de acordo com os dados que chegam durante a execução. Assim como no
exemplo do cruzamento, as condições guiam a execução para diferentes caminhos, garantindo
flexibilidade e adaptabilidade nos processos. Esse tipo de controle é fundamental para casos
em que as ações dependem de resultados anteriores ou de entradas específicas do usuário.
A lógica condicional nos flows permite criar processos altamente personalizados e
inteligentes. Imagine, por exemplo, um fluxo que organiza reuniões. Dependendo do número
de participantes disponíveis, ele pode decidir entre organizar uma reunião virtual, presencial,
ou até mesmo enviar um aviso de reagendamento. Essa capacidade de ’raciocinar’ com base
em condições faz com que os flows do CrewAI sejam comparáveis a sistemas de tomada de
decisão em tempo real.
Outro aspecto interessante dessa abordagem é como ela simplifica processos complexos.
Pense em um sistema de atendimento ao cliente. Em vez de criar múltiplos flows separados
para cada tipo de consulta, a lógica condicional permite que um único flow redirecione automa-
ticamente o cliente para o suporte técnico, financeiro, ou geral, dependendo da pergunta inicial.
Essa centralização aumenta a eficiência e reduz a redundância no design dos processos.
CAPÍTULO 3. DOMINANDO O USO DE FLOWS NO CREWAI
73
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 75

AGENTES INTELIGENTES 2
É importante notar que a lógica condicional em flows não substitui a necessidade de
planejamento; pelo contrário, ela exige um desenho cuidadoso dos caminhos e das condições
que os definem. Tal como em um cruzamento bem sinalizado, o sucesso da lógica condicional
depende da clareza das condições e dos resultados esperados. Felizmente, o CrewAI oferece
ferramentas poderosas para estruturar e gerenciar esses caminhos com simplicidade.
Exploraremos como implementar flows com lógica condicional no CrewAI. Você aprenderá
a usar decoradores e estruturas específicas para criar fluxos que reagem de forma inteligente
às condições definidas. Com isso, será possível criar processos mais flexíveis e robustos,
capazes de se adaptar a diferentes cenários e demandas.
Condição OR
Imagine um fluxo onde várias rotas podem ser seguidas simultaneamente, mas apenas
uma precisa ser concluída para que o processo avance. Esse é o conceito por trás da
Condição OR no CrewAI. Pense nisso como uma corrida de revezamento onde vários atletas
estão correndo em direções diferentes, mas o progresso geral do time só depende de um
único corredor chegar ao ponto final.
No contexto dos flows, a Condição OR permite que múltiplas tarefas sejam disparadas
em paralelo ou de forma independente, mas o fluxo avança assim que uma dessas tarefas é
concluída. Isso é especialmente útil em situações onde queremos validar diferentes condições
ou registrar ações paralelas sem esperar que todas elas sejam finalizadas. Por exemplo, você
pode querer verificar o status de diferentes sistemas e registrar no log assim que qualquer um
deles retornar uma resposta válida.
Ao utilizar a Condição OR, podemos criar fluxos dinâmicos que não apenas otimizam o
tempo de execução, mas também geram registros detalhados do progresso. Imagine um fluxo
que realiza testes em três servidores. Assim que o primeiro servidor responde com sucesso,
o fluxo pode avançar, mas os outros testes ainda podem continuar sendo registrados para
análises futuras. Esse log detalhado é possível porque a Condição OR permite que cada rota
continue ativa mesmo depois que o critério mínimo de avanço do fluxo seja alcançado.
Outra aplicação prática é na coleta de informações distribuídas. Suponha que você tenha
três fontes diferentes para buscar dados de uma API e quer garantir que o fluxo avance assim
que qualquer uma delas retorne um resultado. Com a Condição OR, o fluxo não apenas
avança, mas também registra qual das fontes forneceu a informação primeiro, enquanto
continua tentando as demais para ter um histórico completo.
Essa abordagem não apenas aumenta a eficiência do fluxo, mas também promove a
transparência e auditabilidade. Com o log de execução, é possível entender o que aconteceu
em cada rota, qual delas contribuiu para o avanço do fluxo e quais tarefas ainda estavam
CAPÍTULO 3. DOMINANDO O USO DE FLOWS NO CREWAI
74
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 76

AGENTES INTELIGENTES 2
sendo processadas. Esse nível de controle é particularmente valioso em fluxos complexos,
onde decisões dependem de múltiplas condições independentes. Ao dominar a Condição OR,
você será capaz de projetar fluxos mais inteligentes, que não apenas respondem rapidamente
às condições mais urgentes, mas também mantêm um registro completo de suas operações.
Vamos tomar o código do Flow estruturado e vamos adicionar um método especial
chamado registrar_log, que utiliza o decorador @listen em combinação com a função or_.
Essa funcionalidade permite que o método seja executado ao final de qualquer uma das etapas
especificadas no or_, ou seja, etapa_inicial, etapa_intermediaria, ou etapa_final. O
objetivo principal desse método é registrar um log da execução, capturando informações
relevantes do estado em cada etapa do fluxo.
O atributo log, adicionado ao estado estruturado, atua como uma memória onde cada atu-
alização do fluxo é armazenada de forma sequencial. No método registrar_log, o número
da etapa concluída e o estado atual (info) são concatenados à variável log, permitindo um
acompanhamento detalhado do progresso do fluxo. Isso é particularmente útil em fluxos com-
plexos, pois fornece uma visão clara de como o fluxo evoluiu e quais dados foram processados
em cada etapa.
O uso da função or_ no decorador @listen é um ponto de destaque. Essa função permite
que múltiplas etapas sejam observadas ao mesmo tempo, simplificando o monitoramento e
reduzindo a necessidade de criar métodos separados para cada etapa. Aqui, todas as três
etapas principais (etapa_inicial, etapa_intermediaria, e etapa_final) são conectadas
ao método de log, que registra automaticamente cada conclusão.
Por fim, o processo.plot() é utilizado para gerar uma representação gráfica do fluxo,
que agora inclui o método registrar_log. Essa visualização ajuda a compreender a estrutura
do fluxo e a relação entre as etapas principais e o log. O log final é impresso no console,
fornecendo um resumo textual do progresso do fluxo e das informações geradas em cada
etapa.
Abaixo está o código completo que implementa essas funcionalidades:
from
crewai.flow.flow
import Flow , listen , start , or_
from
pydantic
import
BaseModel
# Definindo o estado
estruturado
com
Pydantic
class
State(BaseModel):
tema: str = ’IA na Saúde’
# Tema
principal do fluxo
info: str = ’’
# Informações geradas ao longo do fluxo
etapas_concluidas : int = 0 # Contador de etapas
concluídas
log: str = ’’
# Registro de log das etapas
class
FlowWithOR(Flow[State ]):
state_class = State
# Associando o estado
estruturado ao fluxo
CAPÍTULO 3. DOMINANDO O USO DE FLOWS NO CREWAI
75
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 77

AGENTES INTELIGENTES 2
@start ()
def
etapa_inicial(self):
self.state.info = f’Vamos
falar
sobre: {self.state.tema}’
self.state.info += ’\nInformação gerada
pela
PRIMEIRA
Crew ’
self.state. etapas_concluidas = 1
@listen(etapa_inicial)
def
etapa_intermediaria (self):
self.state.info += ’\nInformação gerada
pela
SEGUNDA
Crew ’
self.state. etapas_concluidas += 1
@listen( etapa_intermediaria )
def
etapa_final(self):
self.state.info += ’\nInformação gerada
pela
TERCEIRA
Crew ’
self.state. etapas_concluidas += 1
# Método de log que escuta
todas as etapas
utilizando
or_
@listen(or_(etapa_inicial , etapa_intermediaria , etapa_final))
def
registrar_log(self):
etapa_atual = self.state. etapas_concluidas
self.state.log += f’Etapa {etapa_atual} concluída. Estado: {self
.state.info }\n’
return
self.state
# Inicializando o fluxo com estado
estruturado
processo = FlowWithOR ()
state = processo.kickoff ()
print(f’Estado do processo ao final :\n{state.info}’)
print(f’Log de execução:\n{state.log}’)
processo.plot ()
Esse exemplo demonstra como a combinação de @listen com or_ e um método dedicado
ao registro de logs pode ser usada para rastrear e documentar a execução de um fluxo. Essa
prática é especialmente relevante em contextos onde a rastreabilidade e a transparência dos
processos são cruciais.
Veja como ficou o Fluxo e a saída do fluxo ’OR’. Na Figura 3.4, temos a visualização gráfica
gerada pelo CrewAI que mostra como as etapas do fluxo estão organizadas. O destaque
principal está na utilização do decorador or_(), que permite que múltiplas condições sejam
monitoradas simultaneamente. O fluxo é iniciado na etapa Etapa Inicial, representada pela
caixa vermelha no topo. Essa etapa configura o estado inicial e gera informações que serão
utilizadas nas próximas etapas.
Logo após a etapa inicial, duas ramificações independentes são criadas: Etapa Intermediária
e Registrar Log. Ambas são executadas em paralelo, com a etapa Registrar Log sendo
CAPÍTULO 3. DOMINANDO O USO DE FLOWS NO CREWAI
76
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 78

AGENTES INTELIGENTES 2
configurada para ’escutar’ qualquer uma das etapas anteriores utilizando a condição OR. Isso é
indicado pelas setas que partem tanto da Etapa Inicial quanto da Etapa Intermediária
em direção à etapa de log.
O comportamento do OR é claro na saída do fluxo apresentada ao lado direito da imagem.
O log captura e registra cada execução de uma etapa à medida que elas são concluídas,
independentemente de qual delas seja finalizada primeiro. Isso demonstra como o uso do OR
permite maior flexibilidade e rastreabilidade dentro do fluxo, especialmente em cenários onde
o monitoramento e a captura de eventos são necessários para validação ou auditoria.
Por fim, o fluxo converge na Etapa Final, que combina os dados processados nas
etapas anteriores e gera o estado final do fluxo. A saída exibida no lado direito também
confirma o progresso das etapas e o estado consolidado do fluxo. Essa abordagem, que
combina paralelismo e registro em tempo real, ilustra a capacidade do CrewAI de modelar
fluxos complexos de forma clara e eficiente.
Figura 3.4: Representação gráfica de um fluxo com condição OR no CrewAI.
Condição AND
Imagine que você está organizando uma expedição para escalar uma montanha. Antes
de iniciar a subida, todos os membros da equipe precisam completar tarefas específicas: um
verifica o equipamento, outro prepara o mapa, e um terceiro consulta as condições climáticas.
Apenas quando todas essas tarefas estiverem concluídas, a equipe poderá dar o próximo
passo e começar a escalada. No contexto do CrewAI, a condição AND desempenha um
papel semelhante: ela garante que múltiplas condições sejam atendidas antes que a próxima
etapa do fluxo seja acionada.
No CrewAI, a condição AND é utilizada para sincronizar a execução de diferentes etapas
CAPÍTULO 3. DOMINANDO O USO DE FLOWS NO CREWAI
77
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 79

AGENTES INTELIGENTES 2
do fluxo, assegurando que todas as etapas definidas sejam concluídas antes que a próxima
seja executada. Isso é particularmente útil em cenários onde múltiplos agentes ou tarefas
precisam trabalhar de forma independente, mas seus resultados devem convergir para dar
continuidade ao processo. Assim como na analogia da expedição, o AND funciona como um
ponto de verificação que une diferentes caminhos em um único objetivo.
Um exemplo clássico de uso da condição AND é em processos de validação. Imagine um
sistema de cadastro onde é necessário validar as informações de um usuário em três bases
de dados diferentes. Somente quando todas as validações forem concluídas, o fluxo pode
avançar para a etapa final de aprovação do cadastro. Esse comportamento é perfeitamente
implementado utilizando o AND no CrewAI, garantindo que nenhuma etapa seja ignorada ou
avançada prematuramente.
Além disso, a condição AND ajuda a organizar fluxos complexos, promovendo modulari-
dade e clareza no design do processo. Cada etapa do fluxo é tratada de forma independente,
mas conectada logicamente às demais. Isso não apenas facilita a manutenção do código,
mas também aumenta a previsibilidade do fluxo, uma vez que é possível garantir que todas as
condições necessárias foram satisfeitas antes de avançar.
Nos fluxos do CrewAI, o AND é implementado utilizando o decorador @listen em combi-
nação com a função and_. Essa abordagem permite que múltiplas etapas sejam monitoradas
simultaneamente e que o próximo passo do fluxo seja acionado apenas quando todas forem
concluídas. Nas seções seguintes, veremos como aplicar essa funcionalidade na prática para
criar fluxos robustos e inteligentes.
Imagine um fluxo onde diversas tarefas precisam ser executadas simultaneamente, mas
o avanço só ocorre quando todas essas tarefas forem concluídas. Essa é a essência da
condição AND no CrewAI. A lógica implementada nesse código utiliza o decorador @listen
combinado com o operador and_ para garantir que etapas intermediárias, como validações
independentes, sejam completadas antes que o fluxo possa avançar para sua próxima fase.
No início, a função etapa_inicial, marcada com o decorador @start, prepara o estado
inicial do fluxo, estabelecendo as variáveis principais, como tema e info. Em seguida, o fluxo
divide-se em duas etapas paralelas: validar_dados_1 e validar_dados_2, que simulam
dois processos independentes de validação. Cada uma dessas etapas atualiza o estado com
mensagens de validação armazenadas no atributo validacao.
O ponto central do fluxo é o método consolidar_validacao, decorado com
@listen(and_(validar_dados_1, validar_dados_2)). Isso significa que ele só será exe-
cutado após ambas as validações serem concluídas. Essa abordagem demonstra o poder
da condição AND, sincronizando as etapas para garantir que todas as condições necessárias
sejam satisfeitas antes de avançar.
Após a consolidação das validações, a etapa etapa_final é acionada para concluir o
CAPÍTULO 3. DOMINANDO O USO DE FLOWS NO CREWAI
78
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 80

AGENTES INTELIGENTES 2
fluxo. Essa etapa adiciona informações finais ao estado e retorna os resultados acumulados.
O estado do fluxo e o log das validações são exibidos ao final, demonstrando o progresso
detalhado do processo.
Abaixo está o código implementado:
from
crewai.flow.flow
import Flow , listen , start , and_
from
pydantic
import
BaseModel
# Definindo o estado
estruturado
com
Pydantic
class
State(BaseModel):
tema: str = ’IA na Saúde’
# Tema
principal do fluxo
info: str = ’’
# Informações geradas ao longo do fluxo
etapas_concluidas : int = 0 # Contador de etapas
concluídas
validacao: str = ’’
# Registro de validações
class
FlowWithAND(Flow[State ]):
state_class = State
# Associando o estado
estruturado ao fluxo
@start ()
def
etapa_inicial(self):
self.state.info = f’Vamos
falar
sobre: {self.state.tema}’
self.state.info += ’\nInformação gerada
pela
PRIMEIRA
Crew ’
self.state. etapas_concluidas = 1
@listen(etapa_inicial)
def
validar_dados_1 (self):
self.state.validacao += ’Validação 1 concluída.\n’
@listen(etapa_inicial)
def
validar_dados_2 (self):
self.state.validacao += ’Validação 2 concluída.\n’
@listen(and_(validar_dados_1 , validar_dados_2 ))
def
consolidar_validacao (self):
self.state.info += ’\nTodas as validações foram
concluídas.’
self.state. etapas_concluidas += 1
@listen( consolidar_validacao )
def
etapa_final(self):
self.state.info += ’\nInformação gerada
pela
etapa
final.’
self.state. etapas_concluidas += 1
return
self.state
# Inicializando o fluxo com condição AND
processo = FlowWithAND ()
state = processo.kickoff ()
CAPÍTULO 3. DOMINANDO O USO DE FLOWS NO CREWAI
79
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 81

AGENTES INTELIGENTES 2
print(f’Estado do processo ao final :\n{state.info}’)
print(f’Log de validações:\n{state.validacao}’)
processo.plot ()
Esse exemplo destaca a capacidade do CrewAI de modelar fluxos complexos com de-
pendências entre tarefas. O uso do operador and_ é essencial para sincronizar múltiplas
condições antes de avançar, tornando os fluxos mais robustos e previsíveis.
Agora imagine se essas etapas forem executadas de forma assíncrona, permitindo que as
validações ocorram simultaneamente em vez de serem processadas sequencialmente. Nesse
caso, o fluxo poderia alavancar a condição AND para coordenar a execução e garantir que todas
as validações sejam concluídas antes de prosseguir para a próxima etapa. Essa abordagem
não apenas acelera o processo, mas também maximiza a eficiência, já que diferentes tarefas
podem ser realizadas em paralelo, independentemente umas das outras. Assim que ambas
as validações terminam, o fluxo sincroniza automaticamente as informações, consolidando os
resultados e avançando para a etapa final de forma integrada e coesa. Isso demonstra como o
CrewAI é projetado para lidar com fluxos altamente dinâmicos e adaptáveis, otimizando tanto
o tempo quanto os recursos disponíveis.
Figura 3.5: Representação gráfica de um fluxo com condição AND no CrewAI.
Olha que interessante como ficou o Fluxo e a saída. Na Figura 3.5, temos uma representa-
ção gráfica gerada pelo CrewAI para um fluxo utilizando a lógica condicional AND. O destaque
do fluxo está nas validações paralelas que convergem em uma etapa de consolidação antes
de prosseguir para a etapa final. Essa estrutura demonstra como as dependências entre as
etapas podem ser coordenadas para garantir a execução correta e sincronizada.
A etapa inicial, destacada em vermelho no topo, inicia o fluxo com a mensagem definida
e outras informações configuradas no estado. A partir dela, duas ramificações são ativadas:
CAPÍTULO 3. DOMINANDO O USO DE FLOWS NO CREWAI
80
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 82

AGENTES INTELIGENTES 2
Validar Dados 1 e Validar Dados 2. Essas validações ocorrem em paralelo, represen-
tadas pelas setas saindo da etapa inicial, mas a execução não avança até que ambas as
validações sejam concluídas. Essa dependência é indicada pelas setas pontilhadas que
convergem na etapa Consolidar Validacao.
A etapa Consolidar Validacao só é ativada quando as duas validações anteriores são
finalizadas, evidenciando o comportamento da lógica AND. Uma vez consolidada a validação, o
fluxo avança para a etapa final, que conclui o processo adicionando informações adicionais ao
estado.
No lado direito, a saída textual do fluxo mostra o estado final e o log das validações.
A mensagem ’Todas as validações foram concluídas’ confirma que a lógica AND funcionou
corretamente, permitindo que a etapa final fosse executada apenas após a conclusão das vali-
dações paralelas. O log detalhado das validações garante a rastreabilidade e a transparência
do processo, facilitando a análise e depuração do fluxo.
3.7
FLOWS COM ROTEAMENTO
Imagine que você está gerenciando uma central de triagem de encomendas. Cada
encomenda possui características específicas que determinam para qual setor ela será
enviada: itens frágeis vão para o setor de embalagens especiais, itens de alto valor seguem
para o setor de segurança reforçada, enquanto os itens comuns vão diretamente para a
expedição. No CrewAI, a técnica @router() desempenha um papel semelhante, funcionando
como um ponto de decisão que redireciona a execução de um fluxo para diferentes caminhos,
dependendo de condições lógicas ou do estado atual.
O @router() é uma funcionalidade poderosa no CrewAI que permite criar fluxos dinâmicos
e adaptativos. Ele age como um roteador lógico, analisando informações disponíveis no estado
do fluxo ou resultados intermediários para determinar qual rota seguir. Essa abordagem é es-
pecialmente útil em cenários onde a execução do fluxo precisa reagir a condições específicas,
como verificar se os dados fornecidos estão completos, validar credenciais ou redirecionar
solicitações para diferentes sistemas.
Além de sua flexibilidade, o @router() promove eficiência ao evitar a execução de etapas
desnecessárias. Imagine um fluxo de suporte técnico onde o primeiro passo é determinar
o tipo de problema enfrentado pelo cliente. Com o @router(), o fluxo pode redirecionar
imediatamente para a equipe de suporte adequada, como hardware, software ou financeiro,
eliminando etapas intermediárias e reduzindo o tempo de resolução. Isso torna os fluxos não
apenas mais rápidos, mas também mais precisos.
Outro ponto interessante do @router() é sua modularidade. Ele permite que diferentes
CAPÍTULO 3. DOMINANDO O USO DE FLOWS NO CREWAI
81
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 83

AGENTES INTELIGENTES 2
rotas sejam tratadas como subfluxos independentes, cada um com suas próprias regras
e agentes. Isso facilita a manutenção e a expansão do sistema, já que novos caminhos
podem ser adicionados sem alterar a lógica geral do fluxo principal. Assim, o @router() se
torna essencial para sistemas que precisam escalar ou lidar com mudanças frequentes nas
condições de execução.
Por fim, o uso do @router() reflete a filosofia do CrewAI de criar fluxos que são tanto
robustos quanto flexíveis. Ele permite que os fluxos sejam desenhados para se adaptar a uma
variedade de cenários, garantindo que as decisões sejam tomadas de forma lógica e eficiente.
Com isso, o @router() não apenas direciona os fluxos, mas também contribui para uma
execução mais inteligente e organizada, promovendo a integração entre lógica condicional e
modularidade no design de processos complexos.
O código apresentado ilustra o uso do decorador @router() no CrewAI, uma técnica
poderosa para criar bifurcações em um fluxo com base em condições lógicas. Ele demonstra
como redirecionar a execução para diferentes caminhos dependendo do estado atual. Vamos
analisar e entender cada parte desse código, destacando os elementos principais.
No início do fluxo, o método decorado com @start(), chamado metodo_inicial, é
responsável por inicializar o processo.
Aqui, utilizamos a linha booleano_aleatorio =
random.choice([True, False]) para gerar um valor aleatório que será armazenado no
estado do fluxo, especificamente na variável indicador_sucesso. Esse valor é um simples
True ou False, que determina a direção que o fluxo tomará mais adiante. Execute essa etapa
para observar como o fluxo começa a construir suas condições de decisão.
O coração do fluxo está no método segundo_metodo, decorado com @router(metodo_inicial).
Essa linha de código vincula o método de roteamento diretamente à etapa inicial, indicando que
ele será acionado assim que o metodo_inicial for concluído. Dentro do segundo_metodo,
há uma condição que verifica o valor da variável indicador_sucesso no estado. Se for True,
o método retorna a string ’sucesso’. Caso contrário, retorna a string ’falha’. Esse retorno
atua como um sinal para determinar qual das próximas etapas do fluxo será executada.
A lógica do roteamento é implementada de forma elegante e eficiente. Os decoradores
@listen(’sucesso’) e @listen(’falha’) são responsáveis por definir os métodos que devem
ser executados dependendo do valor retornado pelo @router(). Se o roteador retornar
’sucesso’, o fluxo ativa o método terceiro_metodo. Por outro lado, se o retorno for ’falha’,
o método quarto_metodo será ativado. Essa abordagem garante que apenas o caminho
relevante seja percorrido no fluxo.
O método terceiro_metodo, decorado com @listen(’sucesso’), é acionado quando o
fluxo determina que o estado atual é de sucesso. Ele simplesmente imprime a mensagem
’Terceiro método em execução’, representando a execução de uma etapa específica as-
sociada a um resultado bem-sucedido. A simplicidade desse método destaca como o CrewAI
pode ser utilizado para organizar diferentes ações com base no estado do fluxo.
CAPÍTULO 3. DOMINANDO O USO DE FLOWS NO CREWAI
82
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 84

AGENTES INTELIGENTES 2
De forma semelhante, o método quarto_metodo, decorado com @listen(’falha’), é
acionado quando o estado é identificado como uma falha. Assim como o método anterior, ele
imprime uma mensagem, ’Quarto método em execução’. Isso demonstra a modularidade
do fluxo, onde diferentes caminhos podem ser tratados de forma independente, dependendo
das condições previamente definidas.
Por fim, o código chama fluxo.kickoff() para iniciar a execução do fluxo. Essa linha
ativa o @start e, consequentemente, o @router, que decide qual caminho será seguido com
base no valor aleatório gerado. O fluxo bifurca-se em caminhos distintos, demonstrando como
o CrewAI permite lidar com diferentes cenários de forma clara, modular e adaptável. Execute
este exemplo para observar como as bifurcações ocorrem na prática e como o CrewAI toma
decisões automaticamente com base no estado do fluxo.
import
random
from
crewai.flow.flow
import Flow , listen , router , start
from
pydantic
import
BaseModel
class
EstadoExemplo(BaseModel):
indicador_sucesso : bool = False
class
FluxoRoteador(Flow[EstadoExemplo ]):
@start ()
def
metodo_inicial (self):
print(’Iniciando o fluxo
estruturado ’)
booleano_aleatorio = random.choice ([True , False ])
self.state. indicador_sucesso = booleano_aleatorio
@router( metodo_inicial )
def
segundo_metodo (self):
if self.state. indicador_sucesso :
return ’sucesso ’
else:
return ’falha ’
@listen(’sucesso ’)
def
terceiro_metodo (self):
print(’Terceiro método em execução’)
@listen(’falha ’)
def
quarto_metodo(self):
print(’Quarto método em execução’)
fluxo = FluxoRoteador ()
fluxo.kickoff ()
CAPÍTULO 3. DOMINANDO O USO DE FLOWS NO CREWAI
83
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 85

AGENTES INTELIGENTES 2
Execute o código várias vezes e observe atentamente os resultados. Como o valor de
booleano_aleatorio é gerado de forma aleatória usando random.choice([True, False]),
o fluxo seguirá caminhos diferentes a cada execução. Em algumas execuções, o método
terceiro_metodo será chamado, representando o cenário de ’sucesso’, enquanto em outras,
o método quarto_metodo será acionado, indicando ’falha’. Essa variabilidade demonstra
como o CrewAI pode lidar com decisões dinâmicas em tempo de execução, tornando os fluxos
adaptáveis e imprevisíveis, exatamente como em situações reais.
3.8
ADICIONANDO CREWS AOS FLOWS
Eu aposto que você já sacou que vamos integrar as Crews dentro do Flow, e que montar
um exemplo completo, com agentes, tarefas, Crews e Flows, vai me dar um trabalhão. Mas
relaxa, porque o João já deixou tudo pronto com um exemplo incrível e um comando que
automatiza toda essa criação. Valeu, João! Minha preguiça eterna agradece de coração
(kkkk).
A criação de um projeto com Crews integrado aos Flows começa de maneira simples e
eficiente com o comando
crewai
create
flow
name_of_flow
Esse comando gera automaticamente a estrutura necessária para começar a trabalhar
com um fluxo que incorpora Crews, incluindo diretórios para configurações, agentes e tarefas.
A simplicidade desse processo permite que você se concentre no design e na lógica do fluxo,
enquanto o CrewAI cuida da organização inicial do projeto. Ao longo desta seção, mostraremos
como configurar e personalizar essa estrutura para atender às necessidades do seu fluxo.
Nesse exemplo, as Crews do projeto são responsáveis por colaborar na criação de um
poema. Cada Crew desempenha um papel específico, desde a geração de ideias iniciais, até
a escrita e revisão do texto final. O arquivo agents.yaml define os agentes envolvidos no
processo, especificando seus papéis e objetivos, enquanto o arquivo tasks.yaml detalha as
tarefas que cada agente deve realizar para alcançar os resultados esperados. A poem_crew
exemplifica como as Crews podem ser configuradas para trabalhar de forma coordenada,
utilizando lógica programada no arquivo poem_crew.py e integrando ferramentas adicionais,
quando necessário, por meio de arquivos personalizados no diretório tools/. Essa abordagem
modular destaca a flexibilidade e eficiência do CrewAI ao modelar fluxos criativos ou altamente
customizados.
Depois que executamos o comando crewai create flow name_of_flow, a estrutura
exibida na Figura 3.6 é criada. Essa organização é essencial para começar a desenvolver
CAPÍTULO 3. DOMINANDO O USO DE FLOWS NO CREWAI
84
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 86

AGENTES INTELIGENTES 2
um fluxo com o CrewAI de forma estruturada e eficiente. O diretório raiz, representado
por name_of_flow/, contém subdiretórios e arquivos que separam claramente as diferentes
funcionalidades e componentes do projeto. Entre eles, destacam-se os diretórios crews/ e
tools/, que centralizam as configurações e ferramentas adicionais necessárias para o fluxo.
Dentro do diretório crews/, encontramos pastas específicas para as Crews do projeto,
como poem_crew/. Nessa pasta, há um subdiretório config/ que armazena arquivos YAML,
como agents.yaml e tasks.yaml, responsáveis por definir os agentes e as tarefas associadas
à Crew. Também está presente um arquivo Python, poem_crew.py, que implementa a lógica
e a funcionalidade específica dessa Crew. Por sua vez, o diretório tools/ é reservado para
ferramentas personalizadas, como custom_tool.py, que podem ser usadas para ampliar as
capacidades do fluxo. Essa estrutura modular promove organização e facilita a manutenção
do projeto ao longo do tempo.
Figura 3.6: Estrutura criada automaticamente pelo CrewAI ao usar o comando crewai create
flow name_of_flow.
A integração de Crews permite que cada etapa do fluxo seja enriquecida com agentes
especializados, que trazem habilidades específicas para a execução das tarefas. Imagine um
fluxo que organiza um evento, onde diferentes Crews cuidam da logística, do marketing e da
comunicação com os participantes. Ao adicionar essas Crews ao fluxo, você pode delegar
responsabilidades de forma inteligente, garantindo que cada aspecto do projeto seja tratado
por agentes com as habilidades e objetivos certos.
Outro benefício fundamental de adicionar Crews aos Flows é a modularidade que isso
proporciona. Cada Crew pode ser projetada e ajustada de forma independente, tornando
mais fácil gerenciar fluxos grandes e complexos. Além disso, essa abordagem modular
permite que você reutilize Crews em diferentes projetos, economizando tempo e esforço no
desenvolvimento de novos fluxos. A estrutura gerada pelo comando crewai create flow
name_of_flow é especialmente útil para organizar essas Crews e garantir que todos os
CAPÍTULO 3. DOMINANDO O USO DE FLOWS NO CREWAI
85
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 87

AGENTES INTELIGENTES 2
componentes do fluxo estejam conectados de maneira lógica e eficiente.
Nesta seção, exploraremos passo a passo como adicionar Crews aos Flows e personalizá-
los para atender a diferentes cenários. Desde a configuração inicial até a criação de tarefas e
agentes específicos, você aprenderá a aproveitar ao máximo as funcionalidades do CrewAI.
Vamos começar entendendo a estrutura gerada pelo comando de criação de fluxo e, em
seguida, avançar para a implementação prática de Crews em um exemplo real.
No diretório crews, você pode definir várias Crews, onde cada uma possui seu próprio
diretório contendo arquivos de configuração e o arquivo de definição da Crew. Por exemplo, a
pasta poem_crew contém os seguintes elementos:
• config/agents.yaml: Define os agentes da Crew.
• config/tasks.yaml: Define as tarefas da Crew.
• poem_crew.py: Contém a definição da Crew, incluindo agentes, tarefas e a própria
Crew.
Essa estrutura modular permite que você copie, cole e edite o diretório poem_crew para
criar outras Crews com diferentes propósitos ou configurações. Isso facilita a reutilização e a
personalização de Crews dentro do mesmo projeto.
Conectando Crews no arquivo main.py
O arquivo main.py é onde você cria o seu fluxo e conecta as Crews entre si. Você
pode definir o seu fluxo utilizando a classe Flow e os decoradores @start e @listen para
especificar o fluxo de execução.
Aqui está um exemplo de como você pode conectar a poem_crew no arquivo main.py:
Bom, como você já é versado em agents, tasks e crew, não mostrarei a codificação dos
mesmos. Neste código, nosso foco é o PoemFlow, que utiliza um fluxo simples para criar,
salvar e potencialmente visualizar um poema gerado dinamicamente. Abaixo, explico cada
trecho do código para que você possa entender e implementar algo semelhante no seu projeto.
Primeiro, observe a classe PoemState, que herda de BaseModel. Essa classe é usada
para armazenar o estado do fluxo. Inicializamos dois atributos: sentence_count, que deter-
mina a quantidade de frases no poema, e poem, que armazenará o poema gerado. Ambos
começam com valores padrão: sentence_count como 1 e poem como uma string vazia.
O núcleo do código é a classe PoemFlow, que herda de Flow[PoemState]. Nela, defini-
mos as etapas do fluxo usando os decoradores @start e @listen. O método
generate_sentence_count é marcado como o ponto de partida do fluxo com o decorador
@start. Ele usa a função randint(1, 5) para gerar aleatoriamente um número entre 1 e 5,
armazenando esse valor no atributo sentence_count do estado.
CAPÍTULO 3. DOMINANDO O USO DE FLOWS NO CREWAI
86
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 88

AGENTES INTELIGENTES 2
A etapa seguinte, generate_poem, é conectada ao término da etapa inicial através do
decorador @listen(generate_sentence_count). Este método instancia a Crew PoemCrew
e executa sua lógica com o método kickoff, passando como entrada o sentence_count
gerado anteriormente. O resultado do poema gerado é armazenado no atributo poem do
estado e também exibido no console para verificação.
Por fim, o método save_poem, decorado com @listen(generate_poem), é responsável
por salvar o poema em um arquivo chamado poem.txt. Ele utiliza a função open para abrir (ou
criar) o arquivo em modo de escrita e grava o conteúdo armazenado em self.state.poem.
Além disso, o código fornece duas funções utilitárias: kickoff, que inicializa o fluxo
executando todas as etapas, e plot, que gera uma visualização gráfica do fluxo, exibindo as
conexões entre as etapas.
Para rodar o fluxo, basta executar o script diretamente, pois ele define __main__ para
chamar a função kickoff. Cada execução gerará um poema diferente, demonstrando a
variabilidade do workflow.
from
random
import
randint
from
pydantic
import
BaseModel
from
crewai.flow.flow
import Flow , listen , start
from .crews.poem_crew.poem_crew
import
PoemCrew
class
PoemState(BaseModel):
sentence_count : int = 1
poem: str = ’’
class
PoemFlow(Flow[PoemState ]):
@start ()
def
generate_sentence_count (self):
print(’Generating
sentence
count ’)
self.state.sentence_count = randint (1, 5)
@listen( generate_sentence_count )
def
generate_poem(self):
print(’Generating
poem ’)
result = (
PoemCrew ()
.crew ()
.kickoff(inputs ={’sentence_count ’: self.state. sentence_count
})
)
print(’Poem
generated ’, result.raw)
self.state.poem = result.raw
CAPÍTULO 3. DOMINANDO O USO DE FLOWS NO CREWAI
87
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 89

AGENTES INTELIGENTES 2
@listen(generate_poem)
def
save_poem(self):
print(’Saving
poem ’)
with open(’poem.txt’, ’w’) as f:
f.write(self.state.poem)
def
kickoff ():
poem_flow = PoemFlow ()
poem_flow.kickoff ()
def plot ():
poem_flow = PoemFlow ()
poem_flow.plot ()
if __name__ == ’__main__ ’:
kickoff ()
Ao executar este código, você verá uma sequência de mensagens no console que ilustram
o progresso do fluxo. A saída esperada segue o comportamento definido pelas etapas do
PoemFlow, que gera um número de frases, cria um poema e o salva em um arquivo. Vamos
detalhar o que acontece em cada etapa:
Mensagem Inicial da Geração do Número de Frases: A primeira etapa do fluxo
(generate_sentence_count) será iniciada, exibindo a mensagem ’Generating sentence
count’ no console. Isso indica que o fluxo começou e que o número de frases para o poema
está sendo gerado aleatoriamente entre 1 e 5.
Mensagem de Geração do Poema: Após a geração do número de frases, a etapa
generate_poem será ativada. O console exibirá ’Generating poem’, e a Crew PoemCrew
será instanciada. Essa etapa usa a sentence_count gerada para criar um poema. Assim que
o poema for gerado, será exibida uma mensagem no formato ’Poem generated {poema}’,
onde {poema} é o texto gerado.
Mensagem de Salvamento do Poema: Por fim, a etapa save_poem será iniciada. O
console exibirá ’Saving poem’, indicando que o fluxo está salvando o poema em um arquivo
chamado poem.txt. Após essa etapa, o fluxo estará concluído.
Arquivo Gerado: O arquivo poem.txt conterá o poema gerado. O conteúdo do arquivo
será o texto gerado pela Crew PoemCrew, refletindo o número de frases definido na primeira
etapa.
Cada execução do código produzirá um resultado diferente devido à aleatoriedade na
geração de sentence_count e à lógica da PoemCrew. Isso significa que tanto o console quanto
CAPÍTULO 3. DOMINANDO O USO DE FLOWS NO CREWAI
88
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 90

AGENTES INTELIGENTES 2
o arquivo poem.txt terão saídas únicas a cada rodada.
Exemplos de poema no console (em inglês):
Generating sentence count
Generating poem
Poem generated Roses are red,
Violets are blue,
CrewAI is great, And so are you!
Exemplo do conteúdo do arquivo poem.txt:
Roses are red,
Violets are blue,
CrewAI is great,
And so are you!
Essa saída mostra claramente como o fluxo avança pelas etapas e como os dados
gerados em uma etapa alimentam a próxima. Isso reflete a natureza sequencial e lógica do
PoemFlow.
3.9
REFLEXION COM LOOPS
Imagine criar um sistema onde cada ideia é aprimorada iterativamente até atingir excelên-
cia - é exatamente o que a técnica de Reflexion propõe. Inspirada em pesquisas acadêmicas
que demonstram até 97% de melhoria na qualidade de saídas de LLMs, essa abordagem
revolucionária transforma o CrewAI em uma máquina de refinamento contínuo. O segredo?
Uma dança coreografada entre agentes geradores e críticos, onde cada passo no fluxo é uma
oportunidade para evolução.
No coração dessa técnica está a implementação de Loops inteligentes. Um agente
Idealista produz soluções iniciais, enquanto um agente Analisador atua como crítico im-
placável, identificando falhas e sugerindo melhorias. Esse pingue-pongue criativo repete-se
automaticamente até que o resultado atinja um ponto de parada. Cada iteração no Flow
atualiza o self.state, criando um histórico evolutivo completo.
A força do Relfexion é tão impressionante que a OpenAI adotou princípios similares na
versão ’o1’ do GPT, usando reflexion para reduzir alucinações e aumentar a precisão. No
CrewAI, potencializamos isso com arquiteturas flexíveis que permitem desde loops simples
até sistemas complexos com múltiplos validadores paralelos. O resultado? Soluções que
não apenas atendem, mas superam expectativas, transformando protótipos iniciais em obras-
primas tecnológicas através da iteração sistemática.
Essa é a estrutura básica do Reflexion. Na imagem, você observa duas partes principais
CAPÍTULO 3. DOMINANDO O USO DE FLOWS NO CREWAI
89
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 91

AGENTES INTELIGENTES 2
Figura 3.7: Estrutura do processo de autorreflexão com destaque no Idealizador e na Ideia.
em destaque: o Idealizador, representado pelo retângulo verde à esquerda, e a Ideia, ilustrada
pelo documento verde à direita. O processo começa com o Idealizador, que recebe uma
solicitação do usuário, representado pelo ícone laranja. O Idealizador é responsável por gerar
uma ideia inicial, que será submetida ao Crítico (mostrado em cinza no topo direito) para
avaliação. A partir dessa interação, o Crítico retorna uma Crítica, indicando os pontos que
precisam de refinamento. Essa crítica retroalimenta o Idealizador, permitindo ajustes na ideia
original, criando um ciclo de aperfeiçoamento contínuo entre o Idealizador e a Ideia. O foco
desta etapa está em entender como o Idealizador refina a Ideia com base nos comentários
recebidos, antes de enviar novamente ao Crítico, formando um loop até que a ideia esteja
pronta para finalização.
Reflexion usando Flow
Agora vamos expressar a imagem da Figura 3.7 em código Python usando um Flow em
loop. O código implementa o fluxo de autorreflexão, no qual um Idealizador e um Crítico
interagem para gerar e refinar ideias até que o resultado seja satisfatório ou o número máximo
de tentativas seja atingido. O Idealizador é responsável por criar ideias iniciais com base em
um tópico definido, enquanto o Crítico avalia essas ideias, fornecendo feedback que orienta
os ajustes subsequentes. Esse processo iterativo reflete o ciclo de retroalimentação mostrado
na figura, garantindo uma melhoria contínua das ideias geradas.
A estrutura do código começa com a definição da classe ReflexionState, que utiliza
BaseModel para gerenciar o estado do fluxo. Os atributos definidos, como topico, ideia,
critica e tentativas, armazenam o contexto atual do processo, garantindo que o histórico
de interações seja preservado e acessível a cada etapa do fluxo. O decorador @start()
marca o método inicio(), que inicializa o estado com valores padrão e imprime o tópico
CAPÍTULO 3. DOMINANDO O USO DE FLOWS NO CREWAI
90
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 92

AGENTES INTELIGENTES 2
escolhido pelo usuário. É aqui que o loop se inicia, criando a base para as iterações entre os
agentes.
A função idealista(), decorada com @listen("inicio"), é responsável por acionar o
agente CrewPostagem, que cria uma nova ideia com base no topico e nos feedbacks armaze-
nados nos atributos ideia e critica. A ideia gerada é armazenada em self.state.ideia,
permitindo que o fluxo progrida.
Em seguida, o método analisador(), decorado com
@router(idealista), utiliza o agente CrewAnalyzer para avaliar a ideia criada. Ele re-
cebe os mesmos parâmetros, com a adição de um objetivo específico, "Texto para shorts
youtube", o que direciona a análise para o formato desejado. Após a avaliação, o feedback ge-
rado pelo CrewAnalyzer é armazenado em self.state.critica, e o número de tentativas
é incrementado.
A decisão de continuar o fluxo ou encerrá-lo está implementada dentro do método
analisador(). Caso o número de tentativas ultrapasse três ou a crítica contenha a pa-
lavra "perfeito", o fluxo é encerrado e direcionado ao método sucesso(), decorado com
@listen("completed"). Nesse ponto, o fluxo imprime a ideia final e a crítica final, forne-
cendo uma visão clara dos resultados do processo. Caso contrário, o fluxo retorna ao início,
iniciando outra iteração para refinar a ideia gerada. Por fim, o método kickoff() é utilizado
para executar o fluxo, recebendo como entrada o tópico inicial fornecido pelo usuário. Isso
dispara o ciclo iterativo, garantindo que o processo de reflexão siga conforme o planejado.
from
crewai.flow.flow
import Flow , listen , start , router
from
post_crew
import
CrewPostagem
from
analyzers_crew
import
CrewAnalyzer
from
pydantic
import
BaseModel
class
ReflexionState(BaseModel):
topico: str = ’’
ideia: str = ’’
critica: str = ’’
tentativas: int = 0
class
ReflexionFlow(Flow[ReflexionState ]):
@start ()
def inicio(self):
# Inicializa os valores do estado
print(f’Iniciando
fluxo de reflexão com o tópico: "{ self.state.
topico }"... ’)
self.state.ideia = ’’
CAPÍTULO 3. DOMINANDO O USO DE FLOWS NO CREWAI
91
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 93

AGENTES INTELIGENTES 2
self.state.critica = ’’
self.state.tentativas = 0
@listen("inicio")
def
idealista(self):
# Cria uma ideia
inicial
baseada no tópico
crew = CrewPostagem ()
ideia = crew.kickoff(inputs ={
’topic ’: self.state.topico ,
’ideia ’: self.state.ideia ,
’critica ’: self.state.critica
})
self.state.ideia = ideia
@router(idealista)
def
analisador(self):
# Analisa a ideia e decide o próximo
passo
crew = CrewAnalyzer ()
critica = crew.kickoff(inputs ={
’topic ’: self.state.topico ,
’ideia ’: self.state.ideia ,
’critica ’: self.state.critica ,
’objetivo ’: ’Texto
para
shorts
youtube ’
})
self.state.critica = critica
# Verifica se o fluxo
deve
continuar ou encerrar
self.state.tentativas += 1
if self.state.tentativas > 3 or ’perfeito ’ in self.state.critica
.lower ():
return "completed"
else:
return "inicio"
@listen("completed")
def
sucesso(self):
# Finaliza o fluxo com a ideia
refinada
print("Reflexão finalizada
com
sucesso!")
print(f"Ideia
final: {self.state.ideia}")
print(f"Crítica
final: {self.state.critica}")
# Inicializa e executa o fluxo de reflexão
reflexion = ReflexionFlow ()
ret = reflexion.kickoff(inputs ={’topico ’: ’IA generativa no agronegócio’
})
CAPÍTULO 3. DOMINANDO O USO DE FLOWS NO CREWAI
92
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 94

AGENTES INTELIGENTES 2
3.9
ADAPTAÇÕES NO IDEALIZADOR
Inspirado na Crew de postagem de textos do capítulo 2, este código define uma estrutura
para criação, refinamento e revisão de textos curtos, com o objetivo de serem lidos em 1 minuto.
O processo é orquestrado pela classe CrewPostagem, que utiliza três agentes: Pesquisador,
Escritor e Revisor. Cada agente possui um papel bem definido e é configurado para lidar
com diferentes cenários, como aprimorar um texto existente baseado em feedbacks (critica)
ou iniciar um novo texto quando nenhum contexto anterior é fornecido.
O agente Pesquisador utiliza a ferramenta SerperDevTool para buscar informações
relevantes sobre o tópico topic. Ele ajusta sua pesquisa dependendo se há ou não um
texto pré-existente (ideia) e críticas (critica), permitindo que os dados coletados sejam
contextualizados ou iniciados do zero. O agente Escritor, por sua vez, é responsável por
criar ou melhorar um texto curto com base nas informações fornecidas pelo pesquisador e
nas críticas recebidas. Ele é configurado para produzir textos claros, diretos e envolventes,
otimizados para leitura em 1 minuto. Finalmente, o agente Revisor ajusta e refina o texto final,
garantindo clareza, impacto e adequação ao formato.
As tarefas seguem uma sequência lógica, sendo coordenadas por um Process.sequential.
A pesquisa_tarefa é responsável por buscar dados concisos e impactantes, enquanto
a escrita_tarefa utiliza essas informações para gerar ou refinar o texto. Por último, a
revisao_tarefa avalia o resultado, corrigindo eventuais problemas e garantindo que o texto
final esteja alinhado com o objetivo proposto. A execução é iniciada pelo método kickoff(),
que aceita parâmetros como topic, ideia e critica, tornando o fluxo altamente dinâmico e
adaptável às necessidades do usuário.
import os
from
crewai
import Agent , Task , Crew , Process
from
crewai_tools
import
SerperDevTool
from
dotenv
import
load_dotenv
load_dotenv ()
class
CrewPostagem:
def
__init__(self):
self.search_tool = SerperDevTool ()
self.llm = "deepseek/deepseek -reasoner"
self.crew = self._criar_crew ()
CAPÍTULO 3. DOMINANDO O USO DE FLOWS NO CREWAI
93
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 95

AGENTES INTELIGENTES 2
def
_criar_crew(self):
# Definindo os agentes
pesquisador = Agent(
role=’Pesquisador ’,
goal =(
""" Encontrar
informações relevantes
sobre {topic }.
Se já existir um texto
anterior em <text > e críticas em
<critic >,
use essas
informações para
guiar a pesquisa , buscando
dados que
melhorem o conteúdo de <text >.
Caso
contrário , inicie do zero com as informações mais
relevantes e impactantes
sobre {topic }.
<text >
{ideia}
</text >
<critic >
{critica}
</critic >
"""
),
verbose=True ,
memory=True ,
backstory =(
’Você é um pesquisador
especializado em buscar
informaçõ
es objetivas e diretas. ’
’Quando
houver
contexto prévio , você foca em enriquecer
e melhorar o conteúdo com base nas críticas. ’
’Se não houver
contexto , você inicia do zero ,
identificando os principais
pontos
sobre {topic }.’
),
tools =[ self.search_tool]
)
escritor = Agent(
role=’Escritor ’,
goal =(
""" Criar um texto
envolvente
sobre {topic }.
Se já existir um texto
anterior , melhore -o com base na
crítica.
Caso
contrário , inicie do zero
criando um texto curto ,
direto e otimizado
para
leitura em 1 minuto.
"""
),
verbose=True ,
memory=True ,
CAPÍTULO 3. DOMINANDO O USO DE FLOWS NO CREWAI
94
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 96

AGENTES INTELIGENTES 2
backstory =(
’Você é um redator
focado em criar
textos
curtos e
impactantes , perfeitos
para o formato de Shorts. ’
’Sua
habilidade
está em aprimorar
conteúdos
existentes
ou começar do zero
quando
necessário.’
),
llm=self.llm
)
revisor = Agent(
role=’Revisor ’,
goal=’Revisar e otimizar o texto
curto
sobre {topic} para
garantir
clareza , concisão e impacto.’,
verbose=True ,
memory=True ,
backstory =(
’Você é um revisor
especializado em ajustar
textos
curtos , garantindo
que eles
sejam diretos , ’
’impactantes e perfeitos
para
formatos rápidos
como
Shorts.’
),
llm=self.llm
)
# Tarefas
pesquisa_tarefa = Task(
description =(
""" Pesquise
informações relevantes
sobre o tópico "{
topic }".
Se já houver um texto
anterior em <text > e críticas
recebidas em <critic >, use essas
informações
para
guiar sua
pesquisa e buscar
dados que
complementem
ou melhorem o conteúdo. Caso
contrário ,
inicie do zero e encontre os principais
pontos
sobre o t
ópico.
Seu
objetivo é fornecer
informações concisas e
impactantes
para criação ou aprimoramento do texto.
<text >
{ideia}
</text >
<critic >
{critica}
</critic >
"""
),
expected_output =(
’Um resumo
curto e direto
sobre {topic}, contendo
CAPÍTULO 3. DOMINANDO O USO DE FLOWS NO CREWAI
95
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 97

AGENTES INTELIGENTES 2
informações relevantes e, se necessário , ’
’endereçando as críticas.’
),
tools =[ self.search_tool],
agent=pesquisador ,
)
escrita_tarefa = Task(
description =(
""" Com base nas
informações pesquisadas , você escreverá
um texto
curto
sobre "{ topic }". Se já houver
algum
conteúdo em <text > é
um texto
que você já escreveu
anteriormente e que
recebeu um
feedback
meu <critic >.
Por isso , melhore o texto com base no feedback. Caso
contrário (<text > = vazio),
inicie do zero e encontre os principais
pontos
sobre o t
ópico.
Seu
objetivo é fornecer
informações concisas e
impactantes
para criação ou aprimoramento do texto.
Otimize o texto
para
leitura em 1 minuto. O texto
deve
ser claro ,
envolvente e direto , com no máximo 200
palavras.’’
<text >
{ideia}
</text >
<critic >
{critica}
</critic >"""
),
expected_output=’Um texto
curto de até 200 palavras , criado
ou aprimorado
com base nas críticas e no contexto.’,
agent=escritor ,
context =[ pesquisa_tarefa ]
)
revisao_tarefa = Task(
description =(...)
)
return
Crew(
agents =[ pesquisador , escritor , revisor],
tasks =[ pesquisa_tarefa , escrita_tarefa , revisao_tarefa ],
process=Process.sequential
)
CAPÍTULO 3. DOMINANDO O USO DE FLOWS NO CREWAI
96
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 98

AGENTES INTELIGENTES 2
def
kickoff(self , inputs):
"""
Executa o Crew com os parâmetros
fornecidos.
inputs:
- topic: str , o tópico
principal da postagem.
- ideia: str , o texto
anterior ou ponto de partida (opcional).
- critica: str , a última crítica
feita ao texto (opcional).
Returns:
- Um texto curto , criado ou aprimorado , otimizado
para
leitura
em 1 minuto.
"""
resposta = self.crew.kickoff(inputs=inputs)
return
resposta.raw
Agora nosso analisador crítico é implementado com a classe CrewAnalyzer, que organiza
e gerencia o processo de avaliação e refinamento de textos de maneira automatizada. O
código utiliza a infraestrutura do CrewAI, composta por agentes e tarefas, para garantir um
fluxo estruturado. O agente Analisador, definido no método _criar_crew(), desempenha
o papel central, avaliando o texto com base em parâmetros como topic, ideia, critica
e objetivo. A análise leva em consideração o histórico do texto e suas críticas anteriores,
permitindo identificar pontos de melhoria ou simplesmente declarar o texto como "perfeito"caso
não sejam necessárias alterações.
A classe começa definindo o modelo de linguagem (llm) a ser usado pelo agente no
método __init__. O método _criar_crew() é responsável por configurar o agente e a tarefa
associada. O agente Analisador tem um goal claro: fornecer críticas construtivas e sugerir
melhorias. Ele é configurado para ser verbose, o que garante registros detalhados, e memory,
permitindo que ele mantenha o contexto durante o processamento. A tarefa analise_tarefa
detalha o que o agente deve fazer, com uma description que inclui informações sobre o
tópico, a ideia atual, as críticas anteriores e o objetivo do texto. O expected_output espera
uma crítica detalhada ou a resposta "perfeito".
Finalmente, o método kickoff() executa o fluxo de análise. Ele recebe os parâmetros
como inputs, representando o contexto e o histórico do texto a ser avaliado, e retorna o
resultado da análise. O uso do Process.sequential assegura que as tarefas sejam executadas
em ordem. Esse design modular torna o CrewAnalyzer altamente adaptável para diferentes
tipos de análises e formatos de texto.
CAPÍTULO 3. DOMINANDO O USO DE FLOWS NO CREWAI
97
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 99

AGENTES INTELIGENTES 2
from
crewai
import Agent , Task , Crew , Process
from
dotenv
import
load_dotenv
load_dotenv ()
class
CrewAnalyzer:
def
__init__(self):
self.llm = "deepseek/deepseek -reasoner"
self.crew = self._criar_crew ()
def
_criar_crew(self):
# Definindo o agente
analisador = Agent(
role=’Analisador ’,
goal=’Criticar e sugerir
melhorias em um texto
proposto.’,
verbose=True ,
memory=True ,
llm=self.llm ,
backstory =(
’Você é um analisador
experiente , especializado em
identificar
pontos
fracos em textos ’
’e sugerir
melhorias
para torná-los mais claros ,
envolventes e impactantes. Caso o texto já ’
’esteja ótimo , você deve
responder
com "perfeito ".’
),
)
# Definindo a tarefa
analise_tarefa = Task(
description =(
’Avalie o seguinte
texto com base nos parâmetros
fornecidos :\n\n’
’- **Tópico **: "{ topic }"\n’
’- ** Texto
atual **: "{ ideia }"\n’
’- **Crítica
anterior **: "{ critica }"\n\n’
’- ** Objetivo do texto **: "{ objetivo }"\n\n’
’Forneça críticas
construtivas
para
melhorar o texto
considerando o tópico e o histórico ’
’das críticas. Se o texto já está ótimo , diga
apenas "
perfeito ".’
),
CAPÍTULO 3. DOMINANDO O USO DE FLOWS NO CREWAI
98
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 100

AGENTES INTELIGENTES 2
expected_output=’Uma crítica
detalhada do texto , com sugestõ
es de melhoria , ou "perfeito ".’,
agent=analisador
)
# Criando o Crew com
processo
simples
return
Crew(
agents =[ analisador],
tasks =[ analise_tarefa ],
process=Process.sequential
)
def
kickoff(self , inputs):
"""
Executa o Crew com os parâmetros
fornecidos.
inputs:
- topic: str , o tópico
principal do texto.
- ideia: str , a ideia ou versão atual do texto.
- critica: str , a última crítica
feita ao texto.
Returns:
- A crítica
detalhada ou "perfeito" se o texto já está excelente
.
"""
resposta = self.crew.kickoff(inputs=inputs)
return
resposta.raw
CAPÍTULO 3. DOMINANDO O USO DE FLOWS NO CREWAI
99
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 101

AGENTES INTELIGENTES 2
3.10
EXERCÍCIOS
Agora que você já aprendeu sobre os conceitos fundamentais do PoemFlow e suas
implementações práticas, chegou a hora de consolidar seus conhecimentos por meio de
exercícios. Abaixo, apresentamos uma série de desafios para que você aplique os conceitos
apresentados neste capítulo.
1. Crie uma nova classe de estado chamada ExtendedPoemState, que, além de
sentence_count e poem, inclua um atributo theme para armazenar o tema do poema.
Modifique o fluxo para aceitar um tema como entrada e utilizá-lo na geração do poema.
2. Altere o método save_poem para que, além de salvar o poema em poem.txt, ele
também salve o número de frases e o tema (se implementado no exercício anterior) em
um arquivo chamado poem_details.txt.
3. Utilize o método plot() para gerar uma visualização do fluxo e explique o que cada
conexão entre os métodos representa, usando suas próprias palavras.
4. Modifique o fluxo para incluir uma etapa adicional chamada analyze_poem, que analisa
a complexidade do poema com base no número de frases. Faça com que o resultado
dessa análise seja armazenado no estado e exibido no console.
5. Adicione uma nova Crew, chamada EditorCrew, que seja responsável por revisar o
poema gerado e sugerir melhorias. Integre essa Crew ao fluxo como uma nova etapa
antes de salvar o poema.
6. Implemente um sistema de log para registrar cada etapa do fluxo, incluindo mensagens
de erro caso alguma etapa falhe. Os logs devem ser armazenados em um arquivo
chamado flow_log.txt.
7. Modifique o fluxo para que ele aceite uma lista de temas como entrada e gere um poema
para cada tema. Salve cada poema em um arquivo separado, nomeado com o respectivo
tema.
8. Altere o método generate_sentence_count para que ele permita ao usuário definir
manualmente o número de frases do poema, além da opção de geração automática.
9. Desenvolva um novo fluxo chamado HaikuFlow, que siga a estrutura de um haikai
tradicional (5-7-5 sílabas) em vez de gerar frases aleatórias. Utilize uma nova Crew,
chamada HaikuCrew, para implementar a lógica específica do haikai.
10. Crie um teste automatizado para validar o funcionamento correto do PoemFlow, verifi-
cando se o arquivo poem.txt é gerado com o número correto de frases e se o conteúdo
está alinhado ao esperado.
CAPÍTULO 3. DOMINANDO O USO DE FLOWS NO CREWAI
100
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 102

AGENTES INTELIGENTES 2
CAPÍTULO 4
Construindo Interfaces Web para
Agentes com Streamlit
Você está em um restaurante sofisticado. Os agentes de inteligência artificial são como
chefs altamente especializados, cada um dominando uma técnica ou estilo culinário único. No
entanto, para que o cliente (o usuário) receba o prato perfeito, é essencial que exista um menu
claro e um maître eficiente para comunicar os pedidos aos chefs e servir os pratos de forma
impecável. No mundo do CrewAI, esse papel de ’maître’ é desempenhado pelas interfaces, e
o Streamlit é a ferramenta que nos permite criar menus e processos de interação simples e
elegantes.
As interfaces web são a ponte que conecta os usuários às capacidades dos agentes.
Sem uma interface bem projetada, os agentes podem ser tão confusos quanto uma cozinha
caótica sem organização. Por outro lado, uma interface clara e interativa permite que os
agentes compreendam as necessidades do usuário e apresentem os resultados de forma
compreensível e eficiente.
O Streamlit se destaca por ser uma solução prática e poderosa para construir essas
interfaces. Assim como um bom menu em um restaurante, o Streamlit organiza as opções,
simplifica a experiência e dá acesso direto às funcionalidades dos agentes. Ele permite que o
usuário faça solicitações de maneira intuitiva, enquanto os resultados são servidos em tempo
real, com clareza e estilo.
Neste capítulo, exploraremos como usar o Streamlit para transformar agentes CrewAI em
assistentes altamente acessíveis e interativos. Você aprenderá a construir interfaces que não
apenas facilitam a interação, mas também aprimoram a experiência do usuário. Uma interface
bem elaborada faz mais do que simplesmente conectar o usuário ao agente; ela estabelece
um diálogo dinâmico, permitindo ajustes e feedback em tempo real.
Nosso objetivo é fornecer não apenas as ferramentas técnicas, mas também a visão de
como construir experiências que encantem e empoderem os usuários. O Streamlit, em combi-
nação com o CrewAI, transforma interações complexas em processos simples, aproximando o
CAPÍTULO 4. CONSTRUINDO INTERFACES WEB PARA AGENTES COM STREAMLIT
101
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 103

AGENTES INTELIGENTES 2
usuário das capacidades extraordinárias dos agentes.
Prepare-se para explorar este universo onde tecnologia e design convergem para criar
algo especial. Ao final deste capítulo, você estará pronto para desenvolver interfaces que
maximizem o potencial de seus agentes, criando experiências de uso tão satisfatórias quanto
um jantar bem servido em um restaurante de alta gastronomia.
4.1
POR QUE USAR STREAMLIT?
A escolha do Streamlit como ferramenta para construir interfaces para o CrewAI vai muito
além da simplicidade. Ele é projetado para criar aplicações interativas de forma rápida, permi-
tindo que você se concentre no fluxo de interação em vez de perder tempo com configurações
complexas. Com uma sintaxe intuitiva, o Streamlit transforma a interação com agentes em algo
fluido e descomplicado. Você pode literalmente desenhar uma interface básica em minutos e
expandi-la conforme as necessidades do seu projeto.
Uma das grandes vantagens do Streamlit é sua capacidade de atualizar dinamicamente os
resultados na tela. Imagine que você precisa que um agente processe uma grande quantidade
de dados e retorne insights em tempo real. Com o Streamlit, você pode criar componentes
como barras de progresso, gráficos interativos e áreas de texto que mostram atualizações
instantâneas enquanto o agente realiza a tarefa. Esse dinamismo é essencial para manter os
usuários engajados e confiantes no processo.
Outro ponto forte do Streamlit é sua integração com o ecossistema Python. Ferramentas
como pandas, matplotlib e outras bibliotecas populares podem ser usadas diretamente nas
interfaces, sem necessidade de adaptações complexas. Isso significa que, se o seu agente
estiver gerando uma análise de dados ou uma visualização gráfica, você pode integrar essas
saídas de maneira simples e elegante, proporcionando uma experiência visual incrível.
Além disso, o Streamlit facilita a personalização de interfaces para atender a diferentes
públicos. Você pode, por exemplo, criar múltiplas abas para organizar funções, painéis com
sliders e seletores, ou até mesmo permitir que os usuários façam upload de arquivos para
que os agentes os processem. Tudo isso sem comprometer a performance ou a facilidade de
uso. É como ter uma caixa de ferramentas completa, mas com a simplicidade de um único
comando.
Por fim, para equipes de desenvolvimento, o Streamlit também oferece um grande be-
nefício: colaboração em tempo real. Com a possibilidade de compartilhar aplicações na
nuvem rapidamente, diferentes membros da equipe podem testar, ajustar e comentar sobre as
funcionalidades criadas. Isso reduz o tempo de desenvolvimento e garante que o produto final
esteja alinhado com as expectativas do usuário.
CAPÍTULO 4. CONSTRUINDO INTERFACES WEB PARA AGENTES COM STREAMLIT
102
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 104

AGENTES INTELIGENTES 2
4.2
HELLO WORLD STREAMLIT
Antes de começar a criar interfaces web com Streamlit para o CrewAI, é importante
garantir que você tenha todas as ferramentas e configurações necessárias. Aqui estão os
passos básicos para preparar seu ambiente de desenvolvimento de forma eficiente.
O primeiro passo é instalar o Streamlit, caso ainda não esteja no seu ambiente Python.
Execute o seguinte comando no terminal para instalar a biblioteca:
pip
install
streamlit
O código a seguir é um exemplo básico de uma aplicação utilizando Streamlit. Vamos
examinar o funcionamento de cada linha. Primeiramente, importamos o módulo streamlit
utilizando o alias st. Esse alias funciona como um apelido que damos para o Streamlit,
tornando mais fácil e rápido chamar suas funções ao longo do código.
Na linha seguinte, utilizamos o comando st.write para exibir uma mensagem na interface
do aplicativo. Esse método é usado para renderizar textos, números, tabelas, gráficos ou
outros elementos diretamente na interface. No exemplo, o texto passado para st.write é
uma string simples: ’Olá, mundo!
Este é o meu primeiro aplicativo Streamlit.’.
Ao executar o código, essa mensagem será exibida na interface web.
import
streamlit as st
# Exibe uma
mensagem na aplicação
st.write(’Olá, mundo! Este é o meu
primeiro
aplicativo
Streamlit.’)
Como executar o código no VSCode:
1. Certifique-se de que o Python está instalado e configurado corretamente no seu ambi-
ente.
2. Abra o VSCode e crie um arquivo chamado app.py.
3. Copie o código abaixo para o arquivo app.py.
4. No VSCode, abra o terminal integrado pressionando Ctrl+\ .
5. Navegue até o diretório do arquivo (se necessário) usando comandos como cd.
6. Execute o comando streamlit run app.py.
7. Caso seja a primeira vez que você executa o Streamlit, será solicitado um e-mail para
configuração inicial. Você pode fornecer um e-mail ou pressionar Enter para pular essa
etapa.
CAPÍTULO 4. CONSTRUINDO INTERFACES WEB PARA AGENTES COM STREAMLIT
103
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 105

AGENTES INTELIGENTES 2
8. O navegador será aberto automaticamente, exibindo a mensagem configurada.
Figura 4.1: Duas formas de acessar sua aplicação Streamlit: via Local URL ou Network URL.
Olha que bacana! A Figura 4.1 mostra como o terminal informa as duas maneiras de
acessar o site gerado pelo seu aplicativo Streamlit assim que ele começa a rodar. Dá até
vontade de testar na hora! Você tem duas opções de acesso destacadas em vermelho: o
Local URL (http://localhost:8501) e o Network URL (http://192.168.1.9:8501).
O Local URL é o caminho que você usa no navegador do próprio computador onde
o código está sendo executado. Agora, se você quiser impressionar alguém ou testar sua
aplicação no celular ou outro dispositivo, use o Network URL. Basta estar conectado à mesma
rede Wi-Fi do computador e digitar esse endereço no navegador do dispositivo. Pronto! Sua
aplicação Streamlit estará rodando no celular ou em qualquer outro lugar dentro da sua rede.
Essa é uma maneira super prática de validar como sua aplicação funciona em diferentes
telas ou mostrar para um amigo como o projeto ficou incrível. Lembre-se: o endereço Network
URL é seu passaporte para acessar de outros dispositivos conectados na mesma rede. Faça
esse teste e veja que o Streamlit já é responsivo, abstraindo toda complexidade de criação de
front-end para nossos agentes CrewAI.
Olha só que incrível! A Figura 4.2 mostra como sua aplicação Streamlit está pronta para
brilhar em qualquer dispositivo, seja no computador ou no celular. Basta inserir o Network URL
(192.168.1.9:8501) no navegador e, voilà, seu aplicativo aparece com um layout responsivo,
como indicado pela seta vermelha. Isso significa que o design se ajusta automaticamente
para telas menores, mantendo tudo bonito e legível. Que tal impressionar seus amigos? Abra
o endereço no seu celular, mostre a eles e diga: ’Olha só o que eu criei!’ — diversão garantida
enquanto testa a funcionalidade e a responsividade do seu aplicativo.
Se você quiser parar o Straemlit basta fechar a janela onde está sendo executado ou
teclar ’ctrl+c’.
CAPÍTULO 4. CONSTRUINDO INTERFACES WEB PARA AGENTES COM STREAMLIT
104
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 106

AGENTES INTELIGENTES 2
Figura 4.2: Visualização do aplicativo Streamlit em dispositivos diferentes, demonstrando a
responsividade.
4.3
INTEGRANDO CREWAI E STREAMLIT
Código completo:
Faça download do código completo do que trataremos nas seções abaixo:
https://bit.ly/agentic-platform
Imagine que você está gerenciando uma redação com uma equipe de especialistas: um
pesquisador para encontrar informações precisas e confiáveis, um escritor para transformar
esses dados em uma narrativa interessante e um revisor para garantir que o texto final seja
impecável. Essa é a essência do que faremos aqui, mas com um detalhe especial: essa
equipe não é formada por pessoas, mas por agentes de IA trabalhando em conjunto para criar
postagens de alta qualidade.
Nesse contexto, a integração dos agentes com ferramentas especializadas, como o
SerperDevTool para busca na web, transforma a maneira como abordamos o processo
criativo. Cada agente assume um papel claramente definido e colabora com os demais para
cumprir um objetivo comum: criar uma postagem coesa e envolvente com base em um tópico
fornecido. Esse modelo de colaboração exemplifica a força do CrewAI em orquestrar múltiplas
inteligências artificiais.
O trabalho dos agentes é estruturado em etapas que refletem um fluxo de trabalho
natural: pesquisa, escrita e revisão. Essa abordagem, além de imitar o funcionamento de
uma equipe editorial tradicional, garante que cada fase seja tratada com o nível de atenção e
especialização necessários. No final, o resultado não é apenas um texto bem escrito, mas
CAPÍTULO 4. CONSTRUINDO INTERFACES WEB PARA AGENTES COM STREAMLIT
105
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 107

AGENTES INTELIGENTES 2
também um exemplo prático de como a IA pode revolucionar tarefas complexas e criativas.
Neste capítulo, vamos explorar como configurar e operar essa equipe de agentes para criar
postagens incríveis. Vamos ver como configurar as ferramentas certas, definir papéis e tarefas
para os agentes e integrar todo o sistema em uma interface simples usando Streamlit. Prepare-
se para uma jornada que combina criatividade, tecnologia e automação, transformando ideias
em conteúdos de impacto.
Esses agente já são conhecidos do nosso primeiro livro de CrewAI Básico.
Coloquei o código dos agentes em uma classe python, o deixa os códigos dos agentes e
do Streamlit desacoplados. Por isso implementamos a classe CrewPostagem, que organiza
um grupo de agentes do CrewAI para realizar tarefas sequenciais de criação de postagens,
como pesquisa, escrita e revisão. Essa classe encapsula toda a lógica de definição dos
agentes, suas ferramentas e a execução das tarefas em ordem lógica.
Logo na inicialização, o método __init__ configura o ambiente carregando variáveis com
load_dotenv(), define a ferramenta de pesquisa SerperDevTool() e o modelo de linguagem
(’gpt-4o-mini’). Ele, então, chama o método interno _criar_crew(), que estrutura os agentes
e suas responsabilidades.
O método _criar_crew() define três agentes: o Pesquisador, responsável por buscar
informações relevantes, o Escritor, que transforma essas informações em uma narrativa
interessante, e o Revisor, que ajusta e finaliza o texto. Cada agente tem propriedades
como verbose=True e memory=True, indicando que eles fornecem saídas detalhadas e têm
memória habilitada. Além disso, o pesquisador utiliza a ferramenta SerperDevTool para
realizar buscas na web.
As tarefas são organizadas sequencialmente. A tarefa de pesquisa coleta informações
sobre um tópico, seguida pela tarefa de escrita, que usa os resultados da pesquisa para
gerar uma postagem. Finalmente, a tarefa de revisão refina o texto produzido. Cada tarefa
possui uma description, um expected_output e um agente responsável.
O método kickoff executa o processo com o tópico fornecido como entrada (inputs).
Ele coordena as tarefas sequenciais definidas no Process.sequential e retorna o resultado
final bruto. Essa estrutura modular permite gerenciar facilmente a colaboração entre agentes
e tarefas. Salve o arquivo como ’post_crew.py’.
import os
from
crewai
import Agent , Task , Crew , Process
from
crewai_tools
import
SerperDevTool
from
dotenv
import
load_dotenv
load_dotenv ()
CAPÍTULO 4. CONSTRUINDO INTERFACES WEB PARA AGENTES COM STREAMLIT
106
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 108

AGENTES INTELIGENTES 2
class
CrewPostagem:
def
__init__(self):
self.search_tool = SerperDevTool ()
self.llm = ’gpt -4o-mini ’
self.crew = self._criar_crew ()
def
_criar_crew(self):
# Definindo os agentes
pesquisador = Agent(
role=’Pesquisador ’,
goal=’Encontrar
informações relevantes
sobre {topic}’,
verbose=True ,
memory=True ,
backstory=
’’’Você é um pesquisador
especializado em
descobrir
informações úteis e relevantes
para
escrever
sobre {topic }. ’’’
,
tools =[ self.search_tool]
)
escritor = Agent(
role=’Escritor ’,
goal=’Criar uma
postagem
convincente
sobre {topic}’,
verbose=True ,
memory=True ,
backstory=
’’’Você é um redator
experiente
que
transforma
informações em conteúdos
interessantes e
informativos.’’’
)
revisor = Agent(
role=’Revisor ’,
goal=’Revisar e melhorar a postagem
sobre {topic}’,
verbose=True ,
memory=True ,
backstory=
’’’Você é um revisor
detalhista ,
especializado em ajustar o tom ,
a clareza e a gramática de textos.’’’
CAPÍTULO 4. CONSTRUINDO INTERFACES WEB PARA AGENTES COM STREAMLIT
107
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 109

AGENTES INTELIGENTES 2
)
# Tarefas
pesquisa_tarefa = Task(
description=
’’’Pesquise
informações detalhadas
sobre
{topic }. Foque em identificar
pontos
importantes e um resumo
geral.’’’
,
expected_output=’Um resumo
detalhado
sobre {topic }.’,
tools =[ self.search_tool],
agent=pesquisador ,
)
escrita_tarefa = Task(
description=
’’’Escreva
uma
postagem
com base no
conteúdo pesquisado. A postagem
deve
ser clara , interessante e envolvente.’’’
,
expected_output=’’’Uma
postagem
completa
sobre
{topic} com 3 parágrafos.’’’,
agent=escritor ,
context =[ pesquisa_tarefa ]
)
revisao_tarefa = Task(
description=
’’’Reveja a postagem
criada , ajustando a
clareza e corrigindo
possíveis
erros.’’’
),
expected_output=’Uma
postagem
revisada e otimizada.’,
agent=revisor ,
context =[ escrita_tarefa ]
)
# Criando o Crew
return
Crew(
agents =[ pesquisador , escritor , revisor],
tasks =[ pesquisa_tarefa , escrita_tarefa , revisao_tarefa ],
process=Process.sequential
)
def
kickoff(self , inputs):
# Executa o Crew com o tópico
fornecido
CAPÍTULO 4. CONSTRUINDO INTERFACES WEB PARA AGENTES COM STREAMLIT
108
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 110

AGENTES INTELIGENTES 2
resposta = self.crew.kickoff(inputs=inputs)
return
resposta.raw
Integração
Agora vamos começar a integração do Streamlit com os Agentes do CrewAI, criando a
interface inicial que permitirá a interação do usuário com o sistema de geração de postagens.
Este código configura o ambiente básico do Streamlit, enquanto conecta a lógica dos agentes
definida na classe CrewPostagem.
Primeiramente, importamos os módulos necessários. O streamlit será usado para cons-
truir a interface gráfica, enquanto a classe CrewPostagem, importada do módulo post_crew,
encapsula a criação e execução dos agentes e suas respectivas tarefas.
A linha crew_postagem = CrewPostagem() cria uma instância dessa classe, inicializando
todos os agentes e tarefas previamente configurados. Em seguida, o método st.title() é
utilizado para adicionar o título ’Sistema de Postagem com CrewAI’ no topo da interface.
Esse título introduz a funcionalidade do sistema e fornece um ponto de partida claro para o
usuário.
Com esta configuração inicial, estamos prontos para expandir a interface, adicionando
elementos interativos como caixas de texto para entrada de dados e botões para iniciar o
processo dos agentes.
import
streamlit as st
from
post_crew
import
CrewPostagem
crew_postagem = CrewPostagem ()
# Configuração do Streamlit
st.title(’Sistema de Postagem
com CrewAI ’)
Agora vamos adicionar um campo de entrada de texto à interface do Streamlit, permitindo
ao usuário inserir o tema ou tópico para a postagem que será gerada pelos agentes do CrewAI.
O método st.text_input() exibe uma caixa de texto com o rótulo ’Digite o tópico para a
postagem’ e define um valor padrão, neste caso ’IA na saúde’. O valor inserido pelo usuário
será armazenado na variável tema, que posteriormente será usada como entrada para a
execução do processo de geração.
tema = st.text_input(’Digite o tópico para a postagem ’, ’IA na saúde’)
CAPÍTULO 4. CONSTRUINDO INTERFACES WEB PARA AGENTES COM STREAMLIT
109
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 111

AGENTES INTELIGENTES 2
Adicionando ações
Agora adicionando ações. O trecho apresentado adiciona um botão interativo e controla o
fluxo de execução das tarefas do CrewAI quando o botão é clicado. Este botão, criado pelo
método st.button(), é rotulado como ’Iniciar Processo’. Ao ser pressionado, desencadeia
o seguinte fluxo de ações:
Primeiramente, a condição if st.button(’Iniciar Processo’) verifica se o botão foi
clicado. Caso positivo, o programa entra no bloco de execução associado. Dentro deste bloco,
é utilizado o st.spinner(), que exibe um indicador visual de carregamento com a mensagem
’Executando tarefas do Crew...’. Este recurso melhora a experiência do usuário ao indicar
que o sistema está processando as informações.
Durante o processamento, o método crew_postagem.kickoff() é chamado com os
dados necessários para a execução do processo. A entrada, aqui, é um dicionário onde a
chave ’topic’ está associada ao valor da variável tema, que contém o tópico fornecido pelo
usuário. O resultado da execução do CrewAI é armazenado na variável result.
Após a conclusão das tarefas, o método st.success() exibe uma mensagem de con-
firmação ao usuário, indicando que o processo foi concluído com sucesso. Em seguida, o
subtítulo ’Postagem Gerada’ é adicionado à interface utilizando st.subheader(), e o resul-
tado final da execução do CrewAI, armazenado em result, é exibido na interface por meio do
método st.write().
Este trecho é responsável por integrar a entrada do usuário, a execução das tarefas pelos
agentes do CrewAI e a apresentação do resultado em uma interface amigável e intuitiva.
# Botão para
iniciar o processo
if st.button(’Iniciar
Processo ’):
#Quanto
clicar no botão carrega um loader
with st.spinner(’Executando
tarefas do Crew ...’):
result = crew_postagem .kickoff(inputs ={’topic ’: tema })
st.success(’Processo
concluído!’)
# Exibindo
resultados
st.subheader(’Postagem
Gerada ’)
st.write(result)
Junte todos os techos em um único arquivo, salve como app.py e depois execute com o
Streamlit.
streamlit
run app.py
CAPÍTULO 4. CONSTRUINDO INTERFACES WEB PARA AGENTES COM STREAMLIT
110
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 112

AGENTES INTELIGENTES 2
Aqui está o código completo da integração entre o Streamlit e CrewAI para os agentes de
postagens.
import
streamlit as st
from
post_crew
import
CrewPostagem
crew_postagem = CrewPostagem ()
# Configuração do Streamlit
st.title(’Sistema de Postagem
com CrewAI ’)
tema = st.text_input(’Digite o tópico para a postagem ’, ’IA na saúde’)
# Botão para
iniciar o processo
if st.button(’Iniciar
Processo ’):
#Quanto
clicar no botão carrega um loader
with st.spinner(’Executando
tarefas do Crew ...’):
result = crew_postagem .kickoff(inputs ={’topic ’: tema })
st.success(’Processo
concluído!’)
# Exibindo
resultados
st.subheader(’Postagem
Gerada ’)
st.write(result)
A Figura 7.3 apresenta a interface inicial do sistema de postagens desenvolvido com
o CrewAI e integrado ao Streamlit. Nesta tela, o usuário pode interagir diretamente com o
sistema inserindo um tema para a postagem e iniciando o processo. O campo de entrada de
texto destacado na parte superior permite que o usuário digite o tópico desejado, enquanto o
botão rotulado como ’Iniciar Processo’, localizado logo abaixo, inicia a execução dos agentes
definidos.
Para começar, clique no campo de texto e insira o tema que será utilizado pelos agentes
do CrewAI para criar a postagem. Um exemplo de valor pré-definido é ’IA na saúde’. Em
seguida, clique no botão ’Iniciar Processo’ para que o sistema processe as informações e
inicie o fluxo de tarefas do CrewAI. A interação é intuitiva e fornece ao usuário controle direto
sobre o tema que será explorado e desenvolvido pelos agentes.
Este é o ponto de partida essencial para o sistema, onde as decisões do usuário se
transformam em entradas para os agentes configurados, preparando o sistema para executar
a pesquisa, escrita e revisão do conteúdo solicitado.
A Figura 7.4 demonstra o comportamento do sistema ao clicar no botão ’Iniciar Processo’.
Neste momento, o sistema entra em estado de processamento, exibindo um indicador de
CAPÍTULO 4. CONSTRUINDO INTERFACES WEB PARA AGENTES COM STREAMLIT
111
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 113

AGENTES INTELIGENTES 2
Figura 4.3: Interface inicial do sistema de postagens com CrewAI.
carregamento, destacado na parte inferior da tela, com a mensagem ’Executando tarefas do
Crew...’. Este comportamento sinaliza que os agentes do CrewAI estão sendo acionados e
executando as tarefas sequenciais definidas. Durante esse processo, o usuário é informado
de que o sistema está ativo e processando o tema inserido anteriormente. Esse feedback
visual é essencial para garantir uma experiência fluida e intuitiva, permitindo que o usuário
aguarde o resultado com clareza sobre o status da execução.
Figura 4.4: Estado de processamento após clicar no botão de iniciar o processo.
Após o clique no botão ’Iniciar Processo’ e o período de carregamento representado
pelo spinner, o sistema sinaliza ao usuário que as tarefas foram finalizadas com sucesso com
a mensagem ’Processo concluído!’, destacada em verde, que fornece um feedback claro e
direto, garantindo que o usuário saiba que os agentes completaram as tarefas.
Logo abaixo da mensagem de sucesso, o sistema apresenta o subtítulo ’Postagem
Gerada’, seguido pelo texto completo criado pelos agentes do CrewAI. Esse conteúdo, gerado
CAPÍTULO 4. CONSTRUINDO INTERFACES WEB PARA AGENTES COM STREAMLIT
112
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 114

AGENTES INTELIGENTES 2
com base no tema fornecido, é exibido de forma clara e organizada, demonstrando o resultado
final do trabalho colaborativo entre os agentes.
Figura 4.5: Exibição do resultado após a conclusão do processo.
4.4
AGENTIC PLATFORM
Imagine construir uma casa incrível, com todos os detalhes que você sempre sonhou:
quartos espaçosos, um jardim florido e uma cozinha moderna. Agora, imagine descobrir,
depois de todo esse trabalho, que a casa não está em um terreno seu, mas no quintal do
vizinho. Ele pode decidir mudar as regras a qualquer momento, ou até te expulsar. No mundo
digital, isso é exatamente o que acontece quando dependemos de plataformas de terceiros
para construir nossas soluções. É por isso que eu sempre digo: ’Plataforma? Crie a sua.
Venda a sua.’
Agora, imagine você colocando em uma plataforma externa o sustento da sua família.
Parece exagero? Pense de novo. Muitas vezes, construímos sistemas inteiros em ferramentas
populares como N8N, Flowise ou outras plataformas NoCode, que prometem facilidade e
rapidez na criação de aplicações. E, de fato, elas entregam essas vantagens. O problema
é que, junto com essa praticidade, vêm riscos que não podemos ignorar. Como professor
com mais de 34 anos de experiência em computação, me sinto na obrigação de destacar:
a qualquer momento, uma mudança nas políticas, um aumento repentino no preço, ou até
mesmo o encerramento do serviço, pode colocar em risco todo o seu trabalho e, em casos
mais críticos, sua própria fonte de renda.
Quando você confia inteiramente em plataformas externas para hospedar ou operar seus
sistemas, está assumindo um risco oculto, mas real. Elas podem cair, mudar suas regras,
encarecer seus planos ou até mesmo desaparecer da noite para o dia. Você lembra quando
CAPÍTULO 4. CONSTRUINDO INTERFACES WEB PARA AGENTES COM STREAMLIT
113
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 115

AGENTES INTELIGENTES 2
o Twitter foi temporariamente bloqueado no Brasil? Imagine ter toda sua aplicação baseada
nele. Perder o acesso seria um desastre. Depender dessas plataformas é como construir sua
casa no terreno do vizinho: bonito, mas perigoso. A solução? Criar sua própria plataforma,
onde você tem controle total.
E é aqui que o Streamlit entra como o protagonista da história. Ele te dá as ferramentas
necessárias para construir aplicações web completas e interativas, sem depender de estruturas
complexas ou terceiros. Com apenas algumas linhas de código, você pode criar interfaces
poderosas para seus agentes inteligentes do CrewAI. Melhor ainda: a aplicação roda no seu
ambiente, no seu terreno, sob suas regras.
Ao criar sua própria plataforma, você não apenas elimina riscos, mas também ganha
flexibilidade, e além disso é muito, mas muito fácil. Quer mudar o visual? Adicione um logotipo.
Precisa de uma nova funcionalidade? Implemente no mesmo dia. Tudo isso sem depender
de permissões ou restrições impostas por terceiros. A sua plataforma é sua ferramenta, sua
vitrine e, se você quiser, o seu produto.
Além disso, a independência tecnológica é uma vantagem competitiva. Quando você cria
algo único, pode moldá-lo para atender exatamente às suas necessidades ou às de seus
clientes. E mais: pode até monetizar sua solução, vendendo-a como um serviço ou produto.
Afinal, a regra aqui é clara: ’Plataforma? Crie a sua. Venda a sua.’ Isso não é apenas
empoderador, mas também uma forma de proteger seu trabalho e suas ideias no longo prazo.
Nos próximos trechos, você verá como unir o Streamlit e o CrewAI para construir interfaces
personalizadas, funcionais e com controle total. Nada de terrenos emprestados: você estará
criando seu próprio espaço digital. Vamos explorar juntos como transformar essas ferramentas
em uma plataforma que é 100% sua, com poder, liberdade e segurança na medida certa.
Vamos começar
Figura 4.6 apresenta a estrutura de diretórios e arquivos do projeto Agentic Platform.
Essa organização é fundamental para manter o código limpo, modular e fácil de manter.
Vou explicar as partes destacadas, que correspondem aos principais componentes que
trabalharemos nesta seção.
No diretório crews, encontram-se os agentes inteligentes que foram criados nos exemplos
anteriores desse capítulo. Esses agentes são encapsulados em classes específicas, como
pdf_resumo_crew.py e post_crew.py. Cada arquivo aqui define a lógica para tarefas espe-
cíficas, como gerar resumos de PDFs e criar postagens. Esses agentes serão importados e
utilizados nas páginas da plataforma para realizar suas funções.
O diretório images contém os arquivos necessários para a parte visual da aplicação, como
os logotipos e elementos gráficos exibidos na interface. Por exemplo, o arquivo logo.png pode
CAPÍTULO 4. CONSTRUINDO INTERFACES WEB PARA AGENTES COM STREAMLIT
114
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 116

AGENTES INTELIGENTES 2
Figura 4.6: Estrutura de diretórios e arquivos do projeto Agentic Platform.
ser utilizado como o logotipo principal no menu lateral, enquanto o powered.png é usado para
mostrar que a aplicação é alimentada pelo CrewAI e Streamlit. Você pode substituir esses
arquivos por suas próprias imagens, caso esteja personalizando a plataforma. Nesse diretório
ainda contém uma classe Python que facilitará o acesso as imagens pelo Streamlit.
O diretório paginas concentra a lógica de cada página da aplicação. Cada arquivo aqui,
como post.py, upload_pdf.py e welcome.py, é responsável por renderizar uma página
específica da interface. Por exemplo, o post.py cuida da página onde é possível criar
postagens utilizando agentes do CrewAI, enquanto o upload_pdf.py gerencia o envio de
PDFs para sumarização. Essas páginas são conectadas através de um menu lateral no
Streamlit, que veremos no arquivo principal.
Finalmente, o arquivo app.py, localizado no nível superior, é o ponto de entrada principal
da aplicação. Ele configura o Streamlit, carrega os módulos e define o comportamento do
menu lateral. É nesse arquivo que você chamará as funções das páginas e integrará os
componentes de agentes e imagens.
Com essa estrutura bem definida, fica fácil organizar e expandir a plataforma conforme
novas funcionalidades são adicionadas. A separação em diretórios distintos, como crews,
images e paginas, garante que cada parte do sistema seja independente e facilmente acessí-
vel.
Para o gerenciamento do menu lateral no Streamlit, faz-se necessário instalar a biblioteca
streamlit_option_menu. Essa biblioteca permite criar menus personalizáveis e estilizados,
facilitando a navegação entre as páginas da aplicação de forma intuitiva. Essa dependência
será essencial para implementar o menu lateral que conecta as funcionalidades, como as
páginas de postagem e de resumo de PDFs. Para instalá-la, utilize o comando no terminal:
pip
install
streamlit_option_menu
CAPÍTULO 4. CONSTRUINDO INTERFACES WEB PARA AGENTES COM STREAMLIT
115
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 117

AGENTES INTELIGENTES 2
4.5
EXPLICANDO APP.PY
Vamos começar por partes. Inicialmente, o código realiza uma série de importações, que
são essenciais para o funcionamento do projeto no Streamlit. Essas importações conectam os
diferentes módulos e bibliotecas utilizados na aplicação, garantindo que cada funcionalidade
necessária esteja disponível e integrada.
A linha import streamlit as st importa a biblioteca principal, Streamlit, que será
usada para criar a interface da aplicação web. O alias st permite chamar os métodos do
Streamlit de forma mais concisa ao longo do código.
Na sequência, from streamlit_option_menu import option_menu importa a funcio-
nalidade de menu lateral personalizável, oferecida pela biblioteca streamlit_option_menu.
Essa biblioteca será usada para gerenciar a navegação entre as diferentes páginas da aplica-
ção, permitindo criar um menu estilizado e funcional.
O trecho from images._my_images import Image carrega o módulo responsável pelas
imagens utilizadas no projeto. Aqui, as imagens são encapsuladas na classe Image, que
organiza os recursos visuais, como logotipos e elementos gráficos exibidos na interface.
import
streamlit as st
from
streamlit_option_menu
import
option_menu
from
images._my_images
import
Image
from
paginas.welcome
import
render_welcome
from
paginas.post
import
render_post_page
from
paginas.upload_pdf
import
render_upload_page
As três últimas importações, conectam as funções que renderizam as páginas especí-
ficas da aplicação. Cada uma dessas funções define o conteúdo de uma página do menu
lateral, como a página de boas-vindas (render_welcome), a página de criação de postagens
(render_post_page) e a página de upload de PDFs (render_upload_page).
Essas importações organizam e modularizam o projeto, garantindo que cada funcionali-
dade esteja separada em arquivos diferentes e acessível quando necessário. Isso facilita tanto
a manutenção quanto a expansão futura do código.
Imagens
Na pasta images, temos uma classe gerenciadora de imagens (_my_images.py), res-
ponsável por organizar e facilitar o acesso a imagens estáticas usadas no projeto, como
logomarcas ou outros elementos gráficos. Essa classe, chamada Image, encapsula as refe-
CAPÍTULO 4. CONSTRUINDO INTERFACES WEB PARA AGENTES COM STREAMLIT
116
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 118

AGENTES INTELIGENTES 2
rências aos arquivos de imagem, garantindo que estejam centralizadas e sejam acessíveis de
forma clara em qualquer parte do código.
Primeiramente, o código importa o módulo os, que fornece funcionalidades para manipu-
lação de caminhos de arquivos de forma compatível com diferentes sistemas operacionais.
Isso é essencial para garantir que as imagens possam ser carregadas independentemente do
ambiente onde o código está sendo executado.
Dentro da classe Image, temos dois atributos de classe: LOGO e POWERED. Ambos utilizam
o método os.path.abspath() para criar o caminho absoluto das imagens, combinando-o
com a função os.path.join() para construir o caminho correto até os arquivos. Por exemplo,
o atributo LOGO aponta para o arquivo logo.png, localizado na subpasta images do projeto
agentic_platform, enquanto o atributo POWERED faz o mesmo para o arquivo powered.png.
O objetivo dessa abordagem é simples: garantir que, sempre que precisar usar uma
imagem estática na aplicação, você a registre aqui, centralizando seu acesso. Dessa forma,
caso o nome ou o caminho do arquivo mude, basta atualizar a referência na classe Image,
sem necessidade de buscar e substituir em vários lugares do código.
import os
class
Image:
LOGO = os.path.abspath(os.path.join(’agentic_platform ’, ’images ’, ’
logo.png’))
POWERED = os.path.abspath(os.path.join(’agentic_platform ’, ’images ’,
’powered.png’))
4.6
ADICIONANDO MENU
Agora vamos criar um menu lateral esquerdo para nossa ’Agentic Platform’.
Voltando ao código do app.py, este trecho configura a exibição de uma imagem no
menu lateral da aplicação, utilizando a funcionalidade st.sidebar.image() do Streamlit.
Essa imagem é carregada a partir do atributo LOGO da classe Image, previamente definida, e
aparece como uma logomarca no menu lateral da interface.
A função st.sidebar.image() adiciona a imagem diretamente na barra lateral do
Streamlit.
O argumento Image.LOGO especifica o caminho da imagem, que foi centra-
lizado na classe gerenciadora de imagens para facilitar o gerenciamento.
O parâmetro
use_container_width=True ajusta automaticamente a largura da imagem para preencher o
espaço disponível no contêiner da barra lateral, garantindo que ela se adapte ao layout sem
CAPÍTULO 4. CONSTRUINDO INTERFACES WEB PARA AGENTES COM STREAMLIT
117
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 119

AGENTES INTELIGENTES 2
deformações.
Esse trecho é ideal para exibir logotipos ou qualquer outro elemento gráfico que identifique
ou personalize a aplicação, contribuindo para uma experiência mais profissional e atraente.
st.sidebar.image(
Image.LOGO ,
use_container_width =True
)
O menu
Adicionando um belíssimo menu, este trecho de código cria um menu lateral utilizando
o option_menu da biblioteca streamlit_option_menu. O menu lateral é configurado dentro
de um bloco with st.sidebar, garantindo que todo o conteúdo especificado seja exibido
exclusivamente na barra lateral da interface.
# Sidebar
menu
with st.sidebar:
selected = option_menu(
menu_title=’Agentic
Platform ’,
# Título do menu
options =[’Home ’, ’Post
Agent ’, ’Summary
PDF’],
# Opções do menu
icons =[’house ’,’file -earmark -text ’,’cloud -upload ’],
menu_icon=’robot ’,
default_index =0,
orientation=’vertical ’ #teste com ’horizontal ’
)
A função option_menu() é responsável por renderizar o menu com as opções e ícones
definidos. O parâmetro menu_title=’Agentic Platform’ define o título exibido no topo do
menu, enquanto o argumento options=[’Home’, ’Post Agent’, ’Summary PDF’] espe-
cifica as três opções de navegação disponíveis. Cada uma dessas opções será utilizada
posteriormente para renderizar páginas diferentes da aplicação.
Os ícones associados a cada opção são definidos pelo parâmetro icons=[’house’,
’file-earmark-text’, ’cloud-upload’], utilizando nomes de ícones suportados pelo fra-
mework Streamlit. Esses ícones são exibidos ao lado de cada item, melhorando a experiên-
cia visual e funcional.
O parâmetro menu_icon=’robot’ define o ícone exibido ao lado do título do menu,
enquanto default_index=0 indica que a primeira opção (’Home’) será selecionada por
padrão quando a aplicação for carregada. Por fim, o argumento orientation=’vertical’
define a orientação do menu como vertical, garantindo que os itens sejam organizados em uma
CAPÍTULO 4. CONSTRUINDO INTERFACES WEB PARA AGENTES COM STREAMLIT
118
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 120

AGENTES INTELIGENTES 2
coluna na barra lateral. Você pode experimentar alterar esse parâmetro para ’horizontal’ e
ver como o menu é reorganizado em uma linha.
Este menu será usado para navegar entre as diferentes páginas da aplicação, tornando a
interface mais organizada e fácil de utilizar.
powered by
Agora vamos adicionar as logos do CrewAI e do Streamlit na área de ’powered by’. Este
trecho utiliza o método st.sidebar.image() para exibir a imagem combinada das marcas na
barra lateral da aplicação. Essa abordagem é especialmente útil para destacar as tecnologias
que dão suporte ao projeto, oferecendo um toque visual profissional.
A função st.sidebar.image() utiliza o atributo Image.POWERED, previamente configu-
rado na classe Image, para referenciar o caminho absoluto da imagem. Isso garante que,
mesmo que o arquivo seja movido ou renomeado, a mudança possa ser facilmente refletida
atualizando a classe central de gerenciamento de imagens.
O parâmetro use_container_width=False indica que a largura da imagem não será
automaticamente ajustada ao contêiner da barra lateral. Em vez disso, o tamanho da imagem
será controlado explicitamente pelo parâmetro width=400, que define a largura da imagem
em 400 pixels. Esse ajuste manual permite maior controle sobre a aparência visual, garantindo
que a imagem tenha um impacto mais destacado, mas sem ultrapassar os limites do design
da interface.
Esse elemento finaliza o layout da barra lateral, reforçando a identidade visual do sistema
e destacando as ferramentas que tornam sua funcionalidade possível.
CAPÍTULO 4. CONSTRUINDO INTERFACES WEB PARA AGENTES COM STREAMLIT
119
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 121

AGENTES INTELIGENTES 2
st.sidebar.image(
Image.POWERED ,
use_container_width =False ,
width =400
)
Agora execute o Streamlit com o comando
streamlit
run
agentic_platform \app.py
Olha como ficou lindo! A Figura 4.7 apresenta o resultado final do menu lateral implemen-
tado com o Streamlit, destacando como ele organiza a navegação da Agentic Platform. Note
que as opções ’Home’, ’Post Agent’ e ’Summary PDF’ estão claramente dispostas em uma
lista vertical, cada uma acompanhada por ícones intuitivos, como uma casa para a página
inicial. A barra lateral também inclui o logotipo personalizado no topo e, na parte inferior, a
área ’powered by’, exibindo as logos do CrewAI e do Streamlit. Esses elementos visuais
não apenas reforçam a identidade da aplicação, mas também tornam a navegação clara e
funcional, garantindo uma experiência profissional e coesa ao usuário.
Figura 4.7: Resultado do menu lateral gerado pelo Streamlit.
4.7
CRIANDO AS PÁGINAS DOS AGENTES
Vamos começar as páginas da plataforma pela página de ’welcome’. Ela será carregada
automaticamente quando a plataforma for acessada e serve como a introdução principal para o
usuário. Este código define a função render_welcome(), que organiza o conteúdo da página
CAPÍTULO 4. CONSTRUINDO INTERFACES WEB PARA AGENTES COM STREAMLIT
120
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 122

AGENTES INTELIGENTES 2
inicial utilizando os recursos do Streamlit.
A função st.write() é utilizada inicialmente para exibir uma mensagem simples na
interface: ’Este é o conteúdo da Home.’. Logo em seguida, o título principal da página é
configurado com st.title().
Depois, st.write() exibe um texto introdutório em formato de Markdown, descrevendo o
propósito da aplicação e fornecendo instruções para navegação. O texto explica as funcio-
nalidades das páginas acessíveis pelo menu lateral, como ’Post Agent’ e ’Summary PDF’,
incentivando o usuário a explorar a plataforma.
Para finalizar, a função st.markdown() insere uma linha horizontal (–-) como separador
e exibe o rodapé da página com um link para o desenvolvedor, Sandeco Macedo, cujo nome
é clicável ao meu github, graças ao formato de link Markdown.
Este código organiza o conteúdo inicial da plataforma de forma clara e intuitiva, garantindo
que o usuário compreenda rapidamente as funcionalidades disponíveis.
import
streamlit as st
def
render_welcome ():
st.write(’Este é o conteúdo da Home.’)
st.title(’Bem -vindo à nossa
Agentic
Plataform!’)
st.write(’’’
Esta é uma aplicação de demonstração criada
com ** Streamlit ** combinada
com o ** CrewAI **.
Utilize o menu
lateral
para
navegar
entre as
páginas
disponíveis:
- ** Post
Agent :** Crie e gerencie
suas
postagens
com
Agentes de IA.
- ** Summary
PDF :** Faça upload de arquivos
PDF para os agentes
resumirem.
Sinta -se à vontade
para
explorar!
’’’)
st.markdown(’’’
---
Desenvolvido
por [Sandeco
Macedo ]( https :// github.com/sandeco).
’’’)
Esse arquivo deve ser salvo em welcome.py na pasta ’paginas’ (sem acento mesmo).
CAPÍTULO 4. CONSTRUINDO INTERFACES WEB PARA AGENTES COM STREAMLIT
121
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 123

AGENTES INTELIGENTES 2
Página Post
O código da página de post, que chama o agente para postagem, é igual à página do
Streamlit que criamos nas seções anteriores. Porém, aqui, toda a lógica foi encapsulada na
função def render_post_page():, garantindo que ela possa ser chamada diretamente a
partir do arquivo principal app.py. Essa abordagem modular facilita a organização do projeto,
separando o código de cada página em arquivos específicos.
Dentro dessa função, a lógica de interação com o usuário, como o campo de entrada para
o tópico e o botão para iniciar o processo, permanece inalterada e foi explicada detalhadamente
nas seções anteriores. O que muda aqui é que a função será importada e chamada no app.py,
garantindo que a navegação entre as páginas seja simples e funcional.
import
streamlit as st
from
crews.post_crew
import
CrewPostagem
def
render_post_page ():
# Configuração do Streamlit
st.title(’Sistema de Postagem
com CrewAI ’)
tema = st.text_input(’Digite o tópico para a postagem ’,
’IA na saúde’)
# Botão para
iniciar o processo
if st.button(’Iniciar
Processo ’):
#Quanto
clicar no botão carrega um loader
with st.spinner(’Executando
tarefas do Crew ...’):
crew_postagem = CrewPostagem ()
result = crew_postagem .kickoff(inputs ={’topic ’: tema })
st.success(’Processo
concluído!’)
# Exibindo
resultados
st.subheader(’Postagem
Gerada ’)
st.write(result)
Página de resumo
O código da página de Summary PDF, que chama o agente para resumir um PDF, é igual
à página do Streamlit que criamos nas seções anteriores. Porém, aqui, encapsulamos toda a
CAPÍTULO 4. CONSTRUINDO INTERFACES WEB PARA AGENTES COM STREAMLIT
122
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 124

AGENTES INTELIGENTES 2
lógica na função def render_upload_page():, para facilitar sua reutilização e manutenção.
Essa função organiza toda a interação do usuário com o sistema de upload e processamento
de PDFs, incluindo o carregamento do arquivo e a execução dos agentes para gerar o resumo.
Essa função será chamada no app.py, permitindo que ela seja integrada de forma modular
à aplicação principal. Toda a lógica interna, como exibição de mensagens, manipulação de
arquivos e execução dos agentes, já foi detalhada anteriormente e segue o mesmo fluxo
apresentado, com ajustes específicos para a tarefa de resumo de PDF.
import os
import
time
# Adicionado
para
simular um tempo de processamento
import
streamlit as st
from
crews. pdf_resumo_crew
import
CrewPDFResumo
# Configuração do diretório temporário
TEMP_DIR = ’temp ’
os.makedirs(TEMP_DIR , exist_ok=True)
def
render_upload_page ():
# Título da aplicação
st.title(’Resumidor de PDF’)
# Instruções para o usuário
st.write(’Faça upload de um arquivo
PDF para
resumir
seu conteúdo.’)
# Elemento de upload de arquivo
uploaded_file = st.file_uploader (’Escolha um arquivo
PDF’,
type=’pdf’)
if uploaded_file is not None:
try:
# Salvando o arquivo no diretório temporário
temp_file_path = os.path.join(TEMP_DIR , uploaded_file .name)
with open(temp_file_path , ’wb’) as f:
f.write(uploaded_file .getbuffer ())
st.success(f’Upload
Realizado
com
sucesso:
{uploaded_file .name}’)
st.info(’Resumindo
PDF com
agentes ’)
# Loader
durante a execução da tarefa
with st.spinner(’Executando
tarefas do Crew ...’):
crew = CrewPDFResumo ( temp_file_path )
CAPÍTULO 4. CONSTRUINDO INTERFACES WEB PARA AGENTES COM STREAMLIT
123
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 125

AGENTES INTELIGENTES 2
time.sleep (1)
# Simulando um pequeno
atraso (remova na
produção)
resultado = crew.kickoff ()
# Certifique -se de que esta
é a tarefa
demorada
st.text_area(’Resumo via
agentes:’, resultado , height =300)
except
Exception as e:
st.error(f’Erro ao processar o arquivo: {e}’)
4.8
O FLUXO DA PLATAFORMA
A Figura 4.8 descreve o fluxo de interação entre o usuário, o menu da Agentic Platform,
as páginas e os agentes do CrewAI. Esse fluxo foi projetado para ser intuitivo, permitindo que
o usuário acesse rapidamente as funcionalidades específicas da aplicação com apenas um
clique. O menu lateral atua como o ponto central de navegação, conectando as diferentes
páginas da plataforma e garantindo que cada uma delas chame os agentes necessários para
realizar as tarefas desejadas.
Ao interagir com o menu lateral, o usuário escolhe uma das opções disponíveis, como
Post ou Resumo PDF. Essa ação desencadeia a chamada de uma página correspondente no
sistema. Por exemplo, ao clicar na opção Post, a plataforma exibe a página que permite criar
postagens usando os agentes do Crew New Post. Essa página gerencia toda a interação com
o usuário, desde a entrada do tópico até a exibição do resultado gerado pelos agentes. Esse
fluxo garante que a interface permaneça organizada e funcional.
No caso da opção Resumo PDF, o fluxo é semelhante. O clique do usuário no menu
chama a página responsável por gerenciar o upload de arquivos PDF. Uma vez na página,
o usuário pode fazer o upload de um documento, que será processado pelos agentes do
Crew Summary. Esses agentes são encarregados de analisar o conteúdo do PDF e gerar um
resumo, que é então exibido diretamente na interface. Todo esse processo ocorre de maneira
transparente para o usuário, que apenas precisa interagir com a interface simplificada.
Esse fluxo modular e bem definido é uma das principais vantagens da Agentic Platform.
Ele separa claramente a lógica de navegação, as funcionalidades específicas de cada página
e a execução dos agentes do CrewAI. Isso não apenas facilita a manutenção do código, mas
também permite adicionar novas funcionalidades no futuro de maneira rápida e organizada.
Com um menu lateral funcional e páginas independentes, o sistema oferece uma experiência
fluida e profissional para o usuário final.
Voltando ao app.py, o fluxo será tratado com base na opção selecionada no menu lateral,
CAPÍTULO 4. CONSTRUINDO INTERFACES WEB PARA AGENTES COM STREAMLIT
124
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 126

AGENTES INTELIGENTES 2
Figura 4.8: Fluxo de interação entre o menu, as páginas e os agentes do CrewAI na Agentic
Platform.
e este trecho de código é o responsável por vincular as páginas às respectivas funcionalidades.
A variável selected contém a opção escolhida pelo usuário no menu, e, utilizando uma
estrutura condicional if-elif, a página correspondente é chamada.
Se a opção selecionada for ’Home’, a função render_welcome() será executada, car-
regando a página de boas-vindas da plataforma. Caso o usuário escolha ’Post Agent’,
o sistema chama a função render_post_page(), que encapsula a lógica para criação de
postagens com os agentes do CrewAI. Por último, se a escolha for ’Summary PDF’, a fun-
ção render_upload_page() será executada, exibindo a interface para upload e resumo de
arquivos PDF.
Esse controle condicional garante que cada página seja carregada dinamicamente com
base na interação do usuário, promovendo uma navegação fluida e organizada dentro da
Agentic Platform.
# Conteúdo baseado na opção selecionada
if selected == ’Home ’:
render_welcome ()
elif
selected == ’Post
Agent ’:
render_post_page ()
elif
selected == ’Summary
PDF’:
render_upload_page ()
CAPÍTULO 4. CONSTRUINDO INTERFACES WEB PARA AGENTES COM STREAMLIT
125
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 127

AGENTES INTELIGENTES 2
4.9
AGORA SIM, TUDO PRONTO!
Agora sim veja todo o código de app.py. Veja quem com somente 40 linhas estamos
colocando uma plataforma responsiva de agentes inteligentes para rodar. Claro, até agora
ela só tem duas Crews. Porém, você percebe que pode ampliar facilmente para outras Crews
e até integrar com outras tecnologias como: Banco de dados, acesso ao instagram API,
EvolutionAPI, Telegram API e YouTube API, o que possibilita a criação de uma ferramenta
integrada de diversos serviços para seus clientes. Não é bacana?
Abaixo o código completo:
import
streamlit as st
from
streamlit_option_menu
import
option_menu
from
images._my_images
import
Image
from
paginas.welcome
import
render_welcome
from
paginas.post
import
render_post_page
from
paginas.upload_pdf
import
render_upload_page
st.sidebar.image(
Image.LOGO ,
use_container_width =True
)
# Sidebar
menu
with st.sidebar:
selected = option_menu(
menu_title=’Agentic
Platform ’,
# Título do menu
options =[’Home ’, ’Post
Agent ’, ’Summary
PDF’],
# Opções do menu
icons =[’house ’,’file -earmark -text ’,’cloud -upload ’],
menu_icon=’robot ’,
default_index =0,
orientation=’vertical ’ #teste com ’horizontal ’
)
st.sidebar.image(
Image.POWERED ,
use_container_width =False ,
width =400
)
# Conteúdo baseado na opção selecionada
CAPÍTULO 4. CONSTRUINDO INTERFACES WEB PARA AGENTES COM STREAMLIT
126
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 128

AGENTES INTELIGENTES 2
if selected == ’Home ’:
render_welcome ()
elif
selected == ’Post
Agent ’:
render_post_page ()
elif
selected == ’Summary
PDF’:
render_upload_page ()
Agora execute o Streamlit com o app.py
streamlit
run
agentic_platform \app.py
Figura 4.9: Página inicial da Agentic Platform, destacando o menu lateral e as instruções de
navegação.
Essas são as telas da nossa Agentic Platform, apresentadas nas Figuras 4.9 e 4.10.
Na Figura 4.9, vemos a página inicial da plataforma, acessada ao selecionar a opção Home
no menu lateral. Essa tela fornece uma introdução ao propósito da plataforma, explicando
como navegar entre as funcionalidades disponíveis: Post Agent, para criação de postagens,
e Summary PDF, para upload e resumo de arquivos PDF. O menu lateral, destacado à
esquerda, organiza a navegação e realça a página ativa com um marcador vermelho, tornando
a experiência visualmente clara e objetiva.
A Figura 4.10 apresenta as funcionalidades principais da plataforma. À esquerda, está
a funcionalidade de Post Agent, que permite ao usuário criar postagens com a ajuda dos
agentes do CrewAI. Após inserir um tópico, como IA na saúde, e clicar no botão Iniciar
Processo, os agentes geram uma postagem, exibida diretamente na interface. Todo o
CAPÍTULO 4. CONSTRUINDO INTERFACES WEB PARA AGENTES COM STREAMLIT
127
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 129

AGENTES INTELIGENTES 2
processo é dinâmico, com um spinner que informa o usuário sobre o status das tarefas em
execução.
À direita da Figura 4.10, temos a funcionalidade de Summary PDF, onde o usuário pode
carregar arquivos PDF para serem resumidos pelos agentes. Após o upload do arquivo, o
sistema exibe uma mensagem de sucesso e inicia o processamento, com um indicador visual
de progresso. O resultado do resumo é exibido em uma caixa de texto, proporcionando ao
usuário uma leitura direta e prática.
Essas imagens demonstram a integração bem estruturada entre as funcionalidades e a
interface intuitiva da Agentic Platform, evidenciando como ela utiliza os agentes do CrewAI
para oferecer soluções interativas e eficientes ao usuário.
Figura 4.10: Funcionalidades principais da Agentic Platform, incluindo Post Agent e Summary
PDF.
4.10
EXERCÍCIOS
1. Criando uma página de boas-vindas Baseando-se no exemplo da página welcome.py,
crie uma função chamada render_about_page() que exiba o título ’Sobre a Agentic
Platform’ e uma descrição detalhada sobre o objetivo da plataforma. Adicione uma linha
horizontal ao final e um link para um site fictício da plataforma.
2. Adicionando mais opções ao menu Modifique o código do menu lateral para adicionar
uma nova opção chamada ’Settings’. Crie uma função chamada render_settings_page()
que exiba uma mensagem informando que esta será a página de configurações futuras.
3. Gerenciamento de múltiplos agentes Imagine que você precisa adicionar um novo
agente chamado ’CrewTranslate’, que realiza traduções de textos. Crie um esboço de
CAPÍTULO 4. CONSTRUINDO INTERFACES WEB PARA AGENTES COM STREAMLIT
128
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 130

AGENTES INTELIGENTES 2
uma página no Streamlit que permita ao usuário inserir um texto e selecione um idioma
para tradução (usando um selectbox). Exiba o texto traduzido como saída.
4. Melhorando o upload de arquivos Na página de resumo de PDF (Summary PDF),
adicione um controle que permita o usuário limitar o número máximo de caracteres do
resumo gerado. Use um slider para selecionar o limite e ajuste o texto de saída com
base na configuração.
5. Adicionando validação no menu Atualize o menu para exibir um alerta com st.warning()
caso o usuário escolha uma página não implementada ainda, como ’Settings’. Garanta
que as páginas implementadas continuem funcionando normalmente.
6. Estilizando mensagens no Streamlit Crie uma página chamada render_feedback_page()
que exiba três mensagens diferentes: uma de sucesso (st.success()), uma de erro
(st.error()), e uma de informação (st.info()). Adicione um título e uma breve
descrição para cada tipo de mensagem.
7. Simulando carregamento Modifique a página Post Agent para adicionar um time.sleep(2)
após a exibição do spinner, simulando um tempo de carregamento mais realista antes
de exibir o resultado gerado pelos agentes.
8. Expandindo o fluxo da plataforma Baseando-se na Figura 4.8, adicione ao fluxo uma
nova página chamada Analytics, que simula a exibição de dados estatísticos fictícios
sobre o uso da plataforma. Crie uma tabela com dados simples usando st.table().
9. Personalizando a barra lateral Modifique o código da barra lateral para que o logotipo
exibido mude dinamicamente de acordo com a opção selecionada no menu. Por exemplo,
exiba um logotipo diferente se o usuário estiver na página Post Agent ou Summary PDF.
10. Simulando mensagens personalizadas Adicione uma funcionalidade na página de
boas-vindas para exibir mensagens diferentes para o usuário, dependendo do horário do
dia (exemplo: ’Bom dia!’ ou ’Boa tarde!’). Use o módulo datetime para obter o horário
atual.
CAPÍTULO 4. CONSTRUINDO INTERFACES WEB PARA AGENTES COM STREAMLIT
129
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 131

AGENTES INTELIGENTES 2
CAPÍTULO 5
Agentes Inteligentes para
WhatsApp com Evolution API
Imagine um call center tradicional com várias equipes atendendo clientes, cada uma
usando sistemas diferentes que não se comunicam entre si. Esse cenário não só cria confusão
como também desperdiça tempo e recursos. A EvolutionAPI é como o sistema que centraliza
e organiza tudo, integrando ferramentas e canais em um único ambiente, transformando o
caos em eficiência.
A EvolutionAPI não é apenas uma API de mensagens; ela é uma plataforma completa
criada para empoderar empreendedores, freelancers e pequenas empresas. Com ela, qualquer
pessoa pode conectar seus negócios a múltiplos serviços e plataformas, como WhatsApp,
Typebot, Chatwoot, Dify e OpenAI, facilitando a comunicação e o gerenciamento de interações
com os clientes.
Inicialmente desenvolvida como uma API simples para controle do WhatsApp baseada
na biblioteca Baileys, a EvolutionAPI cresceu para oferecer suporte tanto à API oficial do
WhatsApp Business quanto à solução baseada em Baileys. E ela não para por aí: com planos
de expansão para o Instagram e o Messenger, a plataforma se posiciona como uma solução
robusta para quem busca excelência em comunicação digital.
Com sua filosofia de acessibilidade, a EvolutionAPI é oferecida de forma gratuita, ajudando
aqueles que enfrentam desafios no mercado a se destacarem. Sua missão é garantir que
mesmo negócios com recursos limitados tenham acesso a ferramentas de alto nível, permitindo
que ampliem seu alcance e otimizem sua operação.
A EvolutionAPI é fruto do talento e da visão de Davidson Gomes, um brasileiro do Nordeste
que colocou toda sua paixão e dedicação no desenvolvimento dessa ferramenta. Com um
trabalho impecável, Davidson criou uma API que vai além de suas funções técnicas, sendo
uma verdadeira aliada para pequenos empreendedores e empresas. Sua contribuição não
apenas destacou a força da tecnologia brasileira no cenário global, mas também mostrou como
CAPÍTULO 5. AGENTES INTELIGENTES PARA WHATSAPP COM EVOLUTION API
130
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 132

AGENTES INTELIGENTES 2
é possível combinar simplicidade, eficiência e acessibilidade em uma solução que transforma
negócios.
Neste capítulo, exploraremos como a EvolutionAPI transforma as complexidades da
integração digital em um processo simples e poderoso.
Veremos suas funcionalidades,
integrações e como ela pode ser a peça-chave para impulsionar pequenas empresas no
mercado digital.
5.1
EVOLUTIONAPI NA WEB
Para complementar sua jornada com a EvolutionAPI, disponibilizamos dois recursos
essenciais para consulta e aprofundamento.
Documentação oficial: Documentação oficial da EvolutionAPI disponível em:
https://doc.evolution-api.com/
A documentação oficial e o repositório no GitHub são ferramentas indispensáveis para
entender e explorar todas as funcionalidades que a EvolutionAPI tem a oferecer.
GitHub: Confira o código-fonte oficial da EvolutionAPI disponível em:
https://github.com/EvolutionAPI/evolution-api.
A documentação é um guia completo para entender como integrar e utilizar a EvolutionAPI
de maneira eficiente. Já o repositório no GitHub permite que você explore o código-fonte,
colabore com a comunidade e fique por dentro das atualizações mais recentes. Ambas as
fontes são essenciais para aproveitar todo o potencial da EvolutionAPI em seus projetos.
5.2
PRÉ-REQUISITOS
Antes de mergulharmos na instalação da EvolutionAPI, é essencial garantir que todos os
pré-requisitos estejam atendidos. Esses pré-requisitos são o alicerce para que a API funcione
corretamente, incluindo a configuração do banco de dados e o ambiente de desenvolvimento
necessário. Mas calma, não precisa se preocupar com processos longos e complicados!
Vamos configurar tudo de maneira prática e direta, com apenas um único comando.
O banco de dados é a espinha dorsal da EvolutionAPI, armazenando todas as informações
críticas que a aplicação precisa para operar. A API é compatível com PostgreSQL e MySQL, e
CAPÍTULO 5. AGENTES INTELIGENTES PARA WHATSAPP COM EVOLUTION API
131
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 133

AGENTES INTELIGENTES 2
utiliza o Prisma como ORM (Object-Relational Mapping) para simplificar as interações com
esses bancos de dados. Essa flexibilidade permite que você escolha o banco de dados mais
adequado ao seu ambiente e preferências, configurando tudo de maneira centralizada através
da variável de ambiente DATABASE_PROVIDER.
Para tornar essa configuração ainda mais simples, utilizaremos o Docker, uma ferramenta
poderosa que facilita a instalação e gerenciamento de ambientes. Seja optando por Post-
greSQL ou MySQL, o Docker Compose permite criar e gerenciar o banco de dados com
rapidez e eficiência. E o melhor de tudo: você não precisa memorizar uma lista de comandos
ou configurações complexas, personalizaremos alguns parâmetros como senha e usuário
e faremos todo o trabalho pesado de instalação com um único comando, que veremos nas
próximas seções.
5.3
UTILIZANDO O DOCKER PARA SIMPLIFICAR A INSTALAÇÃO
O Docker é uma ferramenta indispensável quando falamos de facilidade e padronização
na instalação de aplicações como a EvolutionAPI. Ele permite que você crie um ambiente
isolado para rodar a API, sem se preocupar com as configurações específicas do sistema
operacional ou conflitos entre dependências. Com o Docker, tudo o que você precisa está
encapsulado em um contêiner, garantindo que o ambiente de execução seja idêntico ao
utilizado em produção. Essa abordagem elimina a famosa frase ’na minha máquina funciona’,
proporcionando consistência desde o desenvolvimento até o deploy.
Para os usuários do Windows, utilizaremos o Docker Desktop, uma interface amigável que
facilita o gerenciamento dos contêineres e imagens necessários para rodar a EvolutionAPI
localmente. Esse processo não apenas agiliza a configuração do ambiente, mas também cria
um espaço seguro para você desenvolver e testar a API antes de implantá-la em uma VPS ou
outro servidor remoto. O Docker Desktop transforma sua máquina local em uma plataforma
robusta para experimentação, garantindo que você esteja pronto para levar seu projeto ao
próximo nível com confiança.
Instalando o Docker Desktop para Windows
Vamos nessa, vamos instalar o Docker Desktop, que é a maneira mais fácil de gerenciar
contêineres no Windows. Siga os passos abaixo para realizar a instalação de forma rápida e
sem complicações:
CAPÍTULO 5. AGENTES INTELIGENTES PARA WHATSAPP COM EVOLUTION API
132
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 134

AGENTES INTELIGENTES 2
Passo 1: Baixar o Docker Desktop
Acesse o site oficial do Docker através do link https://www.docker.com/products/
docker-desktop e baixe a versão do Docker Desktop compatível com o seu sistema opera-
cional. Certifique-se de que está utilizando o Windows 10 ou superior, com suporte para o
WSL2 (Windows Subsystem for Linux), que é um requisito para rodar o Docker Desktop.
Passo 2: Instalar o Docker Desktop
Após o download, execute o instalador e siga as instruções na tela. Finalize o processo e
reinicie o computador.
CAPÍTULO 5. AGENTES INTELIGENTES PARA WHATSAPP COM EVOLUTION API
133
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 135

AGENTES INTELIGENTES 2
Passo 3: Iniciar o Docker Desktop
Com tudo configurado, abra o Docker Desktop. Na primeira execução, ele pode solicitar
permissões administrativas para configurar o ambiente. Após a inicialização, verifique se o
Docker está rodando corretamente observando o ícone na barra de tarefas.
Passo 5: Testar a Instalação
Para garantir que o Docker está funcionando, abra o terminal ou o PowerShell e execute:
docker --version
Se o comando retornar a versão do Docker 27.3.1 ou superior instalada, tudo está pronto
para usarmos o Docker no nosso projeto EvolutionAPI!
CAPÍTULO 5. AGENTES INTELIGENTES PARA WHATSAPP COM EVOLUTION API
134
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 136

AGENTES INTELIGENTES 2
5.4
O QUE É O GIT?
Já aconteceu com você de, no final de um dia inteiro de trabalho, algo dar errado e você
perder todos os dados que produziu? Talvez um arquivo tenha sido corrompido, você esqueceu
de salvar uma versão anterior, ou até apagou sem querer aquele código ou documento
importante? Pois é, esse tipo de situação é desesperador! E é exatamente aí que o Git entra
como seu grande aliado.
O Git funciona como um "salva-vidas digital". Ele guarda todas as versões do seu trabalho,
permitindo que você volte para qualquer ponto do passado caso algo dê errado. É como se
você tivesse uma máquina do tempo para seus arquivos e códigos. Além disso, ele organiza
tudo de forma inteligente, ajudando você a evitar confusões e permitindo que várias pessoas
trabalhem juntas no mesmo projeto, sem medo de estragar nada.
Com o Git, você não precisa mais se preocupar com perda de dados ou caos em projetos
colaborativos. Agora vamos ver como instalar essa ferramenta incrível e começar a usá-la
com a EvolutionAPI!
CAPÍTULO 5. AGENTES INTELIGENTES PARA WHATSAPP COM EVOLUTION API
135
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 137

AGENTES INTELIGENTES 2
O Git e o GitHub: Salvando Seus Arquivos na Nuvem
Além de proteger seus arquivos localmente, o Git oferece a possibilidade de salvar tudo
na nuvem usando o GitHub. Imagine que, além de ter sua "máquina do tempo digital", você
também tem um cofre seguro online, onde pode guardar todas as versões do seu projeto. Isso
não só protege seu trabalho contra problemas no computador, como também permite acessar
seus arquivos de qualquer lugar do mundo.
O GitHub é essencial para colaboração, especialmente em projetos em equipe. Ele
permite que várias pessoas trabalhem no mesmo código ao mesmo tempo, sem confusão ou
perda de dados. Mais do que isso, ele registra quem fez cada mudança, quando e por quê,
garantindo transparência e organização no desenvolvimento.
Ter seus arquivos no GitHub também facilita muito na hora de compartilhar seu trabalho.
Você pode mostrar seus projetos para o mundo, contribuir com outros desenvolvedores e até
receber ajuda e feedback. Quando usamos o Git em conjunto com o GitHub, estamos criando
uma base sólida para o desenvolvimento profissional e seguro, essencial para qualquer projeto,
como a EvolutionAPI.
5.5
BAIXANDO A EVOLUTIONAPI COM O GIT
Agora que entendemos a importância do Git, vamos utilizá-lo para baixar a EvolutionAPI
diretamente do repositório oficial no GitHub. Isso garantirá que você tenha todos os arquivos
necessários de forma organizada e sempre na versão mais recente. Siga os passos abaixo
para configurar e usar o Git corretamente:
Passo 1: Baixar e Instalar o Git
Antes de tudo, precisamos garantir que o Git esteja instalado no seu computador. Para
isso, acesse o site oficial https://git-scm.com/downloads e faça o download da versão
compatível com o seu sistema operacional (Windows, macOS ou Linux). Após baixar, siga
o instalador, mantendo as opções padrão recomendadas. Finalize a instalação e reinicie o
computador, se necessário.
Passo 2: Abrir o Terminal ou Prompt de Comando
Com o Git instalado, abra o terminal (ou Prompt de Comando, no Windows) e verifique se
ele está funcionando corretamente. Para isso, execute o comando:
CAPÍTULO 5. AGENTES INTELIGENTES PARA WHATSAPP COM EVOLUTION API
136
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 138

AGENTES INTELIGENTES 2
git --version
Se o comando exibir a versão do Git, tudo está configurado corretamente e podemos avançar.
5.6
O QUE É DOCKER COMPOSE E SEUS BENEFÍCIOS?
Se o Docker é como uma caixa que guarda tudo o que um programa precisa para funcionar,
o Docker Compose é como um gerente de várias caixas que sabe exatamente onde colocar
cada uma e como conectá-las entre si. Ele é uma ferramenta que permite definir e gerenciar
múltiplos contêineres Docker, simplificando o processo de execução de aplicações mais
complexas.
Imagine que você está configurando a EvolutionAPI, que precisa de um banco de dados,
uma aplicação principal e talvez outros serviços de suporte. Cada um desses componentes
pode estar em um contêiner separado. O Docker Compose permite que você descreva todos
esses serviços em um único arquivo chamado docker-compose.yml. Nesse arquivo, você
define quais contêineres precisa, como eles se conectam e quais configurações devem ser
aplicadas. Com apenas um comando, você inicializa tudo de uma vez!
Os benefícios do Docker Compose incluem:
• Automação Simplificada: Com um único comando, você inicia, para ou reinicia todos
os serviços necessários para sua aplicação.
• Consistência: O mesmo arquivo docker-compose.yml pode ser usado no seu ambi-
CAPÍTULO 5. AGENTES INTELIGENTES PARA WHATSAPP COM EVOLUTION API
137
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 139

AGENTES INTELIGENTES 2
ente local, em um servidor ou até na nuvem, garantindo que tudo funcione da mesma
forma em qualquer lugar.
• Facilidade de Configuração: Não é preciso configurar manualmente cada serviço; tudo
está descrito de maneira clara e organizada no arquivo.
• Escalabilidade: Se precisar adicionar novos serviços ou ajustar configurações, basta
editar o arquivo docker-compose.yml.
Com o Docker Compose, o trabalho de configurar e gerenciar a EvolutionAPI e seus
serviços se torna rápido, eficiente e livre de complicações. Nos próximos passos, veremos
como utilizá-lo na prática para preparar o ambiente local.
5.7
CLONAR O REPOSITÓRIO E COMPOSER DA EVOLUTIONAPI
Agora, vamos baixar a EvolutionAPI. Eu gosto de salvar os meus "Docker Composes"em
uma pasta especial chamada "docker_composes"no Windows. Por recomendação crie essa
pasta na raiz do seu HD.
No terminal, navegue até a pasta onde deseja salvar os arquivos do projeto. Para clonar o
repositório oficial, execute o seguinte comando:
git clone https://github.com/EvolutionAPI/evolution-api.git
Esse comando cria uma cópia local de todos os arquivos do repositório diretamente no seu
computador.
Passo 4: Navegar até a Pasta do Projeto
Depois que o download estiver concluído, entre na pasta do projeto utilizando o comando:
CAPÍTULO 5. AGENTES INTELIGENTES PARA WHATSAPP COM EVOLUTION API
138
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 140

AGENTES INTELIGENTES 2
cd evolution-api
Passo 5: Verificar os Arquivos Baixados
Para confirmar que tudo foi baixado corretamente, liste os arquivos do projeto com o
comando dir.
Pronto para Configuração!
Com a EvolutionAPI baixada, você está pronto para configurar o ambiente e iniciar a
aplicação. Nos próximos passos, veremos como usar o Docker e outras ferramentas para
rodar o projeto localmente.
5.8
INSTALANDO O EVOLUTIONAPI: PREPARANDO A ATMOSFERA
Com o repositório da EvolutionAPI baixado, é hora de preparar o ambiente para começar
a trabalhar. Neste momento, vamos organizar os arquivos e abrir o projeto no VS Code, que
será nossa ferramenta principal para explorar e editar o código. Além disso, configuraremos o
ambiente inicial para garantir que tudo esteja pronto para rodar.
CAPÍTULO 5. AGENTES INTELIGENTES PARA WHATSAPP COM EVOLUTION API
139
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 141

AGENTES INTELIGENTES 2
Abrir o Projeto no VS Code
Abra o Visual Studio Code (VS Code) no seu computador. Clique em File > Open Folder e
navegue até a pasta onde você salvou os arquivos do projeto EvolutionAPI, que provavelmente
será algo como docker_composes/evolution-api. Selecione essa pasta e clique em Open.
Agora, você verá todos os arquivos e diretórios do projeto organizados no explorador de
arquivos do VS Code, à esquerda.
Abrir o projeto no VS Code é essencial para facilitar a edição dos arquivos de configuração,
como o docker-compose.yml, e para visualizar o código-fonte da EvolutionAPI. O VS Code
oferece ferramentas integradas, como destaque de sintaxe, terminal embutido e plugins que
tornam o trabalho mais produtivo.
Renomeando o Arquivo .env
Vamos começar editando o nome do arquivo .env.example para .env. No explorador de
arquivos exibido na interface, localize o arquivo .env.example destacado na lista à esquerda.
Clique com o botão direito sobre ele e escolha a opção Renomear ou pressione F2, caso
esteja utilizando o Windows. Apague o sufixo .example, deixando apenas .env como o nome
final do arquivo. Essa etapa é essencial para que as configurações de ambiente do projeto
sejam reconhecidas corretamente durante a execução. O resultado esperado será exatamente
como mostrado à direita na Figura 5.1.
Alterando o SERVER_URL no .env
Nesta etapa, vamos ajustar a porta do servidor no arquivo .env para garantir que a aplica-
ção seja executada corretamente. Localize a linha contendo a variável SERVER_URL no ar-
CAPÍTULO 5. AGENTES INTELIGENTES PARA WHATSAPP COM EVOLUTION API
140
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 142

AGENTES INTELIGENTES 2
Figura 5.1: Renomeando o arquivo .env.example para .env.
quivo .env. Atualmente, ela está configurada para http://localhost:8080. Substitua o valor
da porta 8080 por 8081, resultando na seguinte configuração: SERVER_URL=http://localhost:8081.
Salve as alterações no arquivo antes de continuar. Essa mudança é importante para evitar
conflitos com outros serviços que possam estar utilizando a porta 8080. O processo está
ilustrado na Figura 5.2.
Figura 5.2: Alteração da porta no arquivo .env.
Configurando o Banco de Dados no .env
Nesta etapa, ajustaremos as configurações de conexão com o banco de dados no arquivo
.env. Localize as variáveis DATABASE_PROVIDER e DATABASE_CONNECTION_URI.
Por padrão, elas vêm configuradas com valores genéricos. Substitua user pelo nome de
usuário do banco de dados, pass pela senha (escolha uma senha melhor que a do exemplo,
CAPÍTULO 5. AGENTES INTELIGENTES PARA WHATSAPP COM EVOLUTION API
141
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 143

AGENTES INTELIGENTES 2
hein! kkk), e certifique-se de que o restante da URL, como localhost, a porta 5432, e o
nome do banco de dados evolution, esteja correto. Após a alteração, o valor da variável
DATABASE_CONNECTION_URI ficará parecido com este:
postgresql://postgres:12345678@ localhost:5432/evolution?schema=public.
Essa configuração é essencial para que a aplicação consiga se conectar ao banco de dados
corretamente. Veja o exemplo na Figura 5.3.
Figura 5.3: Configuração do banco de dados no arquivo .env.
Configurando o Chatwoot no .env
Agora, vamos configurar a conexão do Chatwoot no arquivo .env. Localize a variável
CHATWOOT_IMPORT_DATABASE_CONNECTION_URI, que define a conexão com o banco
de dados utilizado para importar mensagens. Substitua os valores genéricos user e passwd
pelo nome de usuário e a senha configurados anteriormente para o banco de dados (exemplo:
postgres e 12345678). Certifique-se de manter o restante da URL, como o host, porta
(5432), e nome do banco de dados (chatwoot), conforme mostrado na configuração alterada.
A variável resultante ficará assim:
postgresql://postgres:12345678@localhost:5432/chatwoot?sslmode=disable.
Essa configuração é fundamental para que o Chatwoot funcione corretamente. Veja o processo
na Figura 5.4.
Configurando o Redis no .env
Nesta etapa, ajustaremos a configuração do Redis no arquivo .env. Localize a variável
CACHE_REDIS_URI, que define a conexão com o serviço de cache Redis. Por padrão, a
configuração usa localhost como host. Substitua localhost por /redis, garantindo que
CAPÍTULO 5. AGENTES INTELIGENTES PARA WHATSAPP COM EVOLUTION API
142
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 144

AGENTES INTELIGENTES 2
Figura 5.4: Configuração da conexão com o banco de dados do Chatwoot no arquivo .env.
o Redis será acessado corretamente pelo contêiner Docker. O restante da configuração,
incluindo a porta 6379 e o índice do banco /6, permanece inalterado. O valor final da variável
será redis://redis:6379/6. Certifique-se de salvar o arquivo após a modificação. Essa
alteração é crucial para que o serviço de cache seja integrado corretamente à aplicação. O
processo está detalhado na Figura 5.5.
Figura 5.5: Configuração do Redis no arquivo .env.
Criando sua API_KEY no .env
Agora, vamos configurar a variável AUTHENTICATION_API_KEY no arquivo .env. Essa
chave é necessária para autenticar solicitações feitas à aplicação. Substitua o valor padrão da
chave (um conjunto genérico de caracteres) por uma sequência personalizada. Você pode
criar qualquer valor único, mas evite mentir como no exemplo (kkk). Por exemplo, defina
CAPÍTULO 5. AGENTES INTELIGENTES PARA WHATSAPP COM EVOLUTION API
143
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 145

AGENTES INTELIGENTES 2
algo como MINHA_CHAVE_SUPER_SECRETA. O restante das configurações pode permanecer
inalterado. Salve o arquivo após a edição para garantir que a nova API_KEY seja reconhecida
corretamente pela aplicação. Veja o processo detalhado na Figura 5.6.
Figura 5.6: Definindo uma nova API_KEY no arquivo .env.
5.9
ALTERANDO O DOCKER-COMPOSE.YAML
Na configuração do docker-compose.yaml, é importante utilizar a tag latest para garantir
que a aplicação esteja sempre utilizando a versão mais atualizada da imagem da EvolutionAPI.
Na Figura 5.7, vemos que o valor da imagem foi alterado de atendai/evolution-api:homolog
para atendai/evolution-api:latest. Essa modificação é recomendada para ambientes de
produção, pois garante que o contêiner estará rodando a versão mais recente com correções
de bugs e melhorias. No entanto, em ambientes de homologação, a tag específica homolog
pode ser mantida para maior controle sobre as versões.
Nesta etapa, também ajustaremos a porta configurada no arquivo docker-compose.yaml
para evitar conflitos com outras aplicações que possam estar utilizando a porta padrão 8080.
Localize a seção ports dentro do serviço api. Substitua a configuração 8080:8080 por
8081:8081, garantindo que a aplicação será exposta na nova porta. Além disso, ajuste a
porta na seção expose, substituindo 8080 por 8081. Essa mudança assegura que a aplicação
estará disponível na porta correta durante a execução.
Após realizar essas alterações, o arquivo docker-compose.yaml deverá refletir a nova
configuração, conforme mostrado na Figura 5.8. Essa modificação é crucial para evitar conflitos
de porta, especialmente em ambientes onde a porta 8080 é amplamente utilizada por outras
aplicações.
CAPÍTULO 5. AGENTES INTELIGENTES PARA WHATSAPP COM EVOLUTION API
144
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 146

AGENTES INTELIGENTES 2
Figura 5.7: Alteração para utilizar a imagem mais recente da EvolutionAPI.
Figura 5.8: Alteração da porta no arquivo docker-compose.yaml.
Alterando a Senha do PostgreSQL no docker-compose.yaml
Para garantir que o serviço do PostgreSQL funcione corretamente e esteja alinhado com
as configurações do arquivo .env, devemos alterar a variável POSTGRES_PASSWORD no
arquivo docker-compose.yaml. Localize o bloco referente ao serviço postgres e substi-
tua o valor padrão da senha (PASSWORD) pelo mesmo valor configurado anteriormente no
arquivo .env. Por exemplo, se você definiu a senha como 12345678 no .env, o campo
POSTGRES_PASSWORD no docker-compose.yaml deve ser alterado para 12345678.
Essa etapa é fundamental para assegurar a consistência entre os dois arquivos e evitar
erros de autenticação entre os serviços. Após realizar a alteração, salve o arquivo e certifique-
se de que os demais parâmetros, como a porta 5432, permanecem inalterados. O exemplo
atualizado está ilustrado na Figura 5.9.
CAPÍTULO 5. AGENTES INTELIGENTES PARA WHATSAPP COM EVOLUTION API
145
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 147

AGENTES INTELIGENTES 2
Figura 5.9: Alteração da senha do PostgreSQL no arquivo docker-compose.yaml.
5.10
EXECUTANDO O DOCKER COMPOSE
Com todas as configurações ajustadas, estamos prontos para iniciar a aplicação utili-
zando o Docker Compose. Navegue até o diretório onde está localizado o arquivo docker-
compose.yaml, utilizando o terminal. Certifique-se de estar na pasta correta, que pode ser
algo como docker_composes/evolution-api.
Para executar os serviços definidos no docker-compose.yaml, utilize o comando:
docker compose up -d
Esse comando inicializa todos os contêineres em segundo plano, o que significa que a
aplicação será executada sem travar o terminal. Durante a execução, você verá o progresso
de download e criação dos contêineres para os serviços, como redis, postgres e a api.
Após a finalização, os contêineres estarão rodando e prontos para uso, conforme ilustrado na
Figura 5.10.
Certifique-se de que o comando seja executado sem erros. Caso contrário, revise os
passos anteriores para garantir que todas as dependências e configurações estejam corretas.
5.11
VERIFICANDO CONTÊINERES NO DOCKER DESKTOP
Após executar o comando docker compose up -d, você pode verificar se todos os
contêineres estão rodando corretamente através da interface do Docker Desktop. Na seção
Containers, como mostrado na Figura 5.11, todos os serviços estão indicados com círculos
CAPÍTULO 5. AGENTES INTELIGENTES PARA WHATSAPP COM EVOLUTION API
146
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 148

AGENTES INTELIGENTES 2
Figura 5.10: Execução do docker compose up -d.
verdes, o que significa que estão funcionando conforme o esperado. Esses serviços incluem:
• evolution-api: A aplicação principal rodando na porta 8081.
• postgres: O banco de dados PostgreSQL rodando na porta 5432.
• redis: O serviço de cache Redis rodando na porta 6379.
Para acessar a aplicação, clique no ícone de link correspondente à evolution-api, des-
tacado na figura com um círculo verde. Isso abrirá o navegador no endereço configurado
(http://localhost:8081), permitindo verificar se a aplicação está acessível.
Figura 5.11: Status dos contêineres no Docker Desktop.
CAPÍTULO 5. AGENTES INTELIGENTES PARA WHATSAPP COM EVOLUTION API
147
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 149

AGENTES INTELIGENTES 2
Verificando o Status da API
Após iniciar a aplicação, você pode verificar se a EvolutionAPI está funcionando correta-
mente acessando o endereço base no navegador ou através de ferramentas como o curl. O
retorno esperado é um JSON contendo informações sobre o status da API, conforme ilustrado
na Figura 5.12. O campo status deve exibir o valor 200, indicando que a API está ativa e
respondendo às requisições. Além disso, a resposta inclui informações úteis, como a versão
da API e o link para o gerenciador em http://localhost:8081/manager. Copie e cole o link
fornecido no campo manager no navegador para acessar a interface de gerenciamento. Esse
passo confirma que a aplicação está configurada corretamente e pronta para uso.
Figura 5.12: Retorno esperado ao verificar o status da EvolutionAPI.
5.12
LOGANDO NO EVOLUTION MANAGER
Após verificar o status da API, o próximo passo é acessar o Evolution Manager, a
interface gráfica para gerenciar sua instância da EvolutionAPI. Abra o navegador e acesse a
URL fornecida, que normalmente será http://localhost:8081/manager. Na tela de login,
como mostrado na Figura 5.13, insira os seguintes dados:
• Server URL: http://localhost:8081.
• API Key Global: Insira a chave definida no seu arquivo .env. No exemplo, utilizamos
VASCO_DA_GAMA_EH_O_MELHOR_TIME_DO_MUNDO.
Após preencher os campos, clique no botão Login. Se tudo estiver configurado correta-
mente, você será redirecionado para o painel principal do Evolution Manager, onde poderá
gerenciar sua aplicação de forma intuitiva e eficiente.
CAPÍTULO 5. AGENTES INTELIGENTES PARA WHATSAPP COM EVOLUTION API
148
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 150

AGENTES INTELIGENTES 2
Figura 5.13: Tela de login do Evolution Manager.
5.13
ADICIONANDO UMA NOVA INSTÂNCIA
Após acessar o Evolution Manager, o próximo passo é adicionar um novo número de
celular para integrar ao WhatsApp. Na interface principal, como mostrado na Figura 5.14,
localize o botão Instance + e clique nele. Esse botão permite criar uma nova instância para
gerenciar conexões com diferentes números.
Ao clicar, será aberta uma tela para configurar os detalhes da nova instância, como
nome e credenciais do WhatsApp. Este é um passo essencial para habilitar a comunicação e
gerenciar múltiplos números dentro da aplicação.
Figura 5.14: Adicionando uma nova instância no Evolution Manager.
CAPÍTULO 5. AGENTES INTELIGENTES PARA WHATSAPP COM EVOLUTION API
149
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 151

AGENTES INTELIGENTES 2
Criando uma Nova Instância
Após clicar no botão Instance +, uma janela de configuração será exibida, conforme
mostrado na Figura ??. Neste formulário, você deve preencher os seguintes campos:
• Name: Insira um nome para identificar sua instância.
Escolha algo que facilite a
organização, como o nome do cliente ou do projeto.
• Channel: Selecione o canal Baileys, que é a configuração recomendada.
• Token: Um token único será gerado automaticamente para autenticar a instância.
• Number: Insira o número de telefone que será vinculado a esta instância.
Após preencher os campos necessários, clique no botão Save para criar a nova instância.
Com isso, a instância será adicionada ao sistema e es
Abrindo a Instância Criada
Após salvar a sua instância, ela será exibida na tela principal do Evolution Manager,
conforme apresentado na Figura 5.15. Para iniciar a configuração ou visualizar os detalhes da
instância criada, basta clicar no ícone destacado ao lado do nome da instância.
Esse botão é a porta de entrada para acessar as configurações específicas e estabelecer
a conexão com o número de WhatsApp associado. Certifique-se de que o status da instância
esteja como Disconnected, indicando que ainda não foi estabelecida uma conexão. Em
seguida, clique no botão indicado para prosseguir.
CAPÍTULO 5. AGENTES INTELIGENTES PARA WHATSAPP COM EVOLUTION API
150
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 152

AGENTES INTELIGENTES 2
Figura 5.15: Tela principal exibindo a instância criada. Clique para abrir os detalhes.
Logando no WhatsApp pelo Evolution Manager
Para conectar o seu número de WhatsApp ao Evolution Manager, navegue até a tela da
instância, conforme ilustrado na Figura 5.16. Na seção central, você verá a mensagem To
connect, scan the QR code with your WhatsApp Web, indicando que a conexão será feita
por meio de um código QR.
Clique no botão Get QR Code para gerar o código QR necessário para a conexão. Em
seguida, abra o aplicativo do WhatsApp no seu celular, acesse o menu Configurações ou
Aparelhos conectados e escaneie o código exibido. Após a leitura bem-sucedida, o status
da instância mudará automaticamente para Connected, confirmando que a conexão foi
estabelecida com sucesso.
Figura 5.16: Gerando o QR Code para conectar o WhatsApp ao Evolution Manager.
CAPÍTULO 5. AGENTES INTELIGENTES PARA WHATSAPP COM EVOLUTION API
151
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 153

AGENTES INTELIGENTES 2
Escaneando o QR Code
Para finalizar a conexão do WhatsApp ao Evolution Manager, abra o aplicativo do What-
sApp no seu celular e navegue até a seção Dispositivos conectados. Toque em Conectar
dispositivo para abrir a câmera do celular. Em seguida, posicione a câmera em frente ao
QR Code exibido no Evolution Manager (Figura 5.17). Assim que o código for escaneado, o
dispositivo será vinculado, e a instância será ativada automaticamente, permitindo o uso do
número de WhatsApp pelo Evolution Manager.
Figura 5.17: Escaneando o QR Code para conectar o WhatsApp ao Evolution Manager.
5.14
CONEXÃO FINALIZADA COM SUCESSO
Com o processo concluído, seu agente agora está conectado ao Evolution Manager,
conforme ilustrado na Figura 5.18.
O agente, identificado como Agente Sandeco, está
associado ao número de telefone próprio configurado para esta instância do WhatsApp.
Utilizar um número exclusivo traz várias vantagens, incluindo maior controle, segurança e
personalização no gerenciamento de mensagens e contatos.
Recomendo fortemente que você utilize um número próprio dedicado ao seu agente no
Evolution Manager. Essa abordagem não só garante maior profissionalismo, mas também
evita potenciais interrupções ou confusões ao separar claramente as operações comerciais do
uso pessoal do WhatsApp.
CAPÍTULO 5. AGENTES INTELIGENTES PARA WHATSAPP COM EVOLUTION API
152
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 154

AGENTES INTELIGENTES 2
Figura 5.18: Agente conectado ao Evolution Manager, pronto para gerenciar mensagens,
contatos e chats.
5.15
ENVIANDO MENSAGEM PELA EVOLUTIONAPI
Chegou o grande momento desse livro: agora vamos explorar como enviar mensagens
diretamente pelo EvolutionAPI e colocar nossos Agentes de CrewAI no comando! Aqui, você
verá a teoria ganhando vida em interações práticas. Preparado para transformar tudo isso em
um jogo de comunicação de alto nível? Vamos lá!
Para começar, você precisa enviar uma mensagem simples via EvolutionAPI. O processo
é direto: fazemos uma requisição HTTP POST para a rota correta e utilizamos os parâmetros
necessários. Por exemplo, o parâmetro phone será usado para especificar o número de
telefone do destinatário, e o message para definir o conteúdo que será enviado. Com isso,
você terá controle total sobre cada interação.
Introduzindo o UV: Um Gerenciador de Bibliotecas Moderno
Nesta etapa, vamos conhecer o UV, um gerenciador de dependências Python que traz
simplicidade e eficiência ao desenvolvimento de projetos. O UV combina velocidade impres-
sionante com uma abordagem prática para criar e gerenciar projetos Python, eliminando a
necessidade de lidar com ferramentas como pip, poetry e outras. Com ele, você terá um
ambiente organizado e altamente funcional em questão de segundos.
Para instalar o UV no Python global, basta executar o comando a seguir no terminal:
pip
install uv
Uma vez instalado, o UV estará pronto para ser usado em seus projetos, trazendo um
CAPÍTULO 5. AGENTES INTELIGENTES PARA WHATSAPP COM EVOLUTION API
153
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 155

AGENTES INTELIGENTES 2
gerenciamento de bibliotecas simplificado e eficiente.
Configurando o Projeto com o UV
Crie um novo projeto:
Crie uma nova pasta e um novo projeto python usando o Vscode. Deixe o projeto do
EvolutionAPI quieto.
Agora que o UV está instalado, vamos configurá-lo para gerenciar o nosso novo projeto
Python. Para isso, abra o VS Code e, no terminal integrado, execute o comando abaixo:
uv init
O comando uv init cria um arquivo pyproject.toml no diretório atual, que serve como o
coração do gerenciamento de dependências do seu projeto. Esse arquivo centraliza todas as
informações essenciais, como as versões de dependências, o Python utilizado, e configurações
adicionais para scripts e ambientes. Com o UV, você pode organizar e automatizar tarefas do
projeto, mantendo tudo claro e eficiente. É a base para o próximo nível de organização em
Python!
Projeto do seu EvolutionAPI
Do novo projeto que estamos criando, crie um novo .env e insira as definições da sua
instância do EvolutionAPI. A imagem mostra três parâmetros importantes que devem ser
configurados corretamente. Primeiro, copie e cole o EVO_API_TOKEN, que é a chave
de autenticação global exibida na interface gráfica do Evolution Manager, destacada em
verde. Esse token garante que as requisições sejam autenticadas. Em seguida, utilize o
EVO_INSTANCE_TOKEN, que identifica a instância criada e está associado ao número de
CAPÍTULO 5. AGENTES INTELIGENTES PARA WHATSAPP COM EVOLUTION API
154
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 156

AGENTES INTELIGENTES 2
telefone vinculado à aplicação. Por fim, defina o EVO_INSTANCE_NAME com o mesmo
nome atribuído à instância na interface gráfica, no caso ’agente’. Esses três parâmetros são
fundamentais para estabelecer a comunicação entre o seu projeto e o Evolution Manager.
Verifique atentamente os valores para evitar erros ao inicializar a aplicação.
Figura 5.19: Configuração da instância no arquivo .env.
Instalando o EvolutionAPI-Client e Dotenv
Agora que o projeto foi inicializado com o UV, vamos instalar as dependências essenciais
para o nosso projeto. Para isso, utilizaremos o comando uv add, que adiciona bibliotecas
ao arquivo pyproject.toml e gerencia automaticamente suas versões e dependências. No
terminal do VS Code, execute o comando abaixo:
uv add
evolutionapi
python -dotenv
Esse comando instalará a biblioteca evolutionapi, necessária para integrar nosso projeto
à API, e o python-dotenv, que nos ajudará a gerenciar variáveis de ambiente de forma
prática e segura. O UV cuidará de resolver as dependências e atualizará o pyproject.toml
automaticamente, deixando seu projeto organizado e pronto para o próximo passo.
Começando com as Importações
Agora que as bibliotecas estão instaladas, vamos iniciar nosso script. É um script só, mas
eu vou fatiar para explicar com calma cada parte. Para ver o código completo desse projeto,
você pode baixar todo o código aqui:
CAPÍTULO 5. AGENTES INTELIGENTES PARA WHATSAPP COM EVOLUTION API
155
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 157

AGENTES INTELIGENTES 2
Código completo: https://bit.ly/sandeco-minha-evolution
Com as importações necessárias. Essas bibliotecas configuram o ambiente e fornecem as
ferramentas para enviar mensagens usando o EvolutionAPI. No início do código, utilizamos o
os e o load_dotenv para gerenciar variáveis de ambiente, enquanto as classes importadas
do evolutionapi.client e evolutionapi.models.message são fundamentais para estabelecer
a conexão com o servidor da API e enviar diferentes tipos de mensagens. Certifique-se de
que as dependências foram corretamente instaladas antes de seguir para o próximo passo.
import os
from
dotenv
import
load_dotenv
from
evolutionapi.client
import
EvolutionClient
from
evolutionapi.models.message
import
TextMessage , MediaMessage
Carregando Variáveis de Ambiente
Neste trecho de código, utilizamos o load_dotenv() para carregar as variáveis de am-
biente do arquivo .env presente no diretório do projeto. Isso garante que as configurações
sensíveis, como tokens e IDs, sejam mantidas fora do código-fonte e protegidas. As variáveis
evo_api_token, evo_instance_id e evo_instance_token são extraídas usando o método
os.getenv(), que lê os valores dessas variáveis diretamente do arquivo .env. Cada uma
dessas variáveis é crucial para autenticar e identificar sua instância ao se comunicar com o
EvolutionAPI. Certifique-se de que o arquivo .env esteja configurado corretamente com os
valores necessários antes de executar este código.
load_dotenv ()
evo_api_token = os.getenv("EVO_API_TOKEN")
evo_instance_id = os.getenv(" EVO_INSTANCE_NAME ")
evo_instance_token = os.getenv(" EVO_INSTANCE_TOKEN ")
Inicializando o EvolutionClient
Neste trecho de código, criamos uma instância do EvolutionClient, que será responsável
por gerenciar todas as interações com o EvolutionAPI. O parâmetro base_url define o
endereço do servidor onde a API está rodando. Aqui, usamos ’http://localhost:8081’, que
indica que o servidor está sendo executado localmente na porta 8081.
CAPÍTULO 5. AGENTES INTELIGENTES PARA WHATSAPP COM EVOLUTION API
156
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 158

AGENTES INTELIGENTES 2
Além disso, passamos o api_token, armazenado na variável evo_api_token, para auten-
ticar as requisições. Este token é essencial para garantir que apenas usuários autorizados
possam acessar a API. Certifique-se de que o valor do token foi corretamente carregado a
partir do arquivo .env no passo anterior. Essa configuração é a base para realizar qualquer
operação com o EvolutionAPI, como envio de mensagens ou consultas de dados.
client = EvolutionClient (
base_url=’http :// localhost :8081 ’,
api_token=evo_api_token
)
Criando uma Mensagem de Texto
Vamos criar uma instância de TextMessage para enviar uma mensagem de texto através
do EvolutionAPI. Defina o número de telefone do destinatário no parâmetro number, lem-
brando de incluir o código do país (por exemplo, "5562981..."). No parâmetro text, escreva o
conteúdo da mensagem que deseja enviar. Isso configura a mensagem que será enviada pelo
cliente da API.
text_message = TextMessage(
number="5562981...", # O telefone de destino da mensagem
text="olá, estou
mandando
uma
mensagem
via
Evolution
API"
)
Enviando a Mensagem de Texto
Agora que configuramos o objeto TextMessage, é hora de enviá-lo utilizando o método
send_text do EvolutionClient. Neste caso, o primeiro argumento é o evo_instance_id, que
identifica a instância do EvolutionAPI utilizada. O segundo argumento é o text_message, que
contém a mensagem que será enviada, enquanto o terceiro argumento é o evo_instance_token,
necessário para autenticar a solicitação. O método retorna uma resposta que pode ser exibida
no console para confirmar o envio ou para realizar uma análise do resultado.
response = client.messages.send_text(evo_instance_id ,
text_message ,
evo_instance_token )
print(response)
CAPÍTULO 5. AGENTES INTELIGENTES PARA WHATSAPP COM EVOLUTION API
157
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 159

AGENTES INTELIGENTES 2
Mensagem Enviada com Sucesso!
É isso aí, missão cumprida! Após configurarmos cuidadosamente os parâmetros e
utilizarmos o poder do EvolutionAPI, a mensagem foi enviada com sucesso. Agora podemos
ver o nosso agente em ação, entregando a mensagem direto no WhatsApp, como mostrado
na Figura 5.20. Esse é o marco inicial para implementar soluções robustas e inteligentes em
comunicação. Com apenas algumas linhas de código, conectamos tecnologia e automação de
uma forma prática e eficiente. Parabéns por alcançar este marco no projeto!
Figura 5.20: Mensagem enviada com sucesso via EvolutionAPI.
5.16
CRIANDO UMA TELA DE ENVIO COM STREAMLIT
Para tornar o nosso código de envio de mensagens mais organizado e facilitar sua
integração com outras ferramentas, como o Streamlit, vamos encapsular toda a lógica em uma
classe Python. Essa abordagem modular melhora a reutilização do código e torna o processo
de envio de mensagens mais intuitivo e escalável. Abaixo está o código completo da classe
Send no arquivo "send_sandeco.py"que criei para você:
import os
from
dotenv
import
load_dotenv
from
evolutionapi.client
import
EvolutionClient
from
evolutionapi.models.message
import
TextMessage , MediaMessage
class
SendSandeco:
def
__init__(self) -> None:
# Carregar
variáveis de ambiente
load_dotenv ()
self.evo_api_token = os.getenv(" EVO_API_TOKEN ")
self. evo_instance_id = os.getenv(" EVO_INSTANCE_NAME ")
CAPÍTULO 5. AGENTES INTELIGENTES PARA WHATSAPP COM EVOLUTION API
158
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 160

AGENTES INTELIGENTES 2
self. evo_instance_token = os.getenv(" EVO_INSTANCE_TOKEN ")
self.evo_base_url = os.getenv("EVO_BASE_URL")
# Inicializar o cliente
Evolution
self.client = EvolutionClient (
base_url=self.evo_base_url ,
api_token=self.evo_api_token
)
def
textMessage(self , number , msg , mentions =[]):
# Enviar
mensagem de texto
text_message = TextMessage(
number=str(number),
text=msg ,
mentioned=mentions
)
response = self.client.messages.send_text(
self.evo_instance_id ,
text_message ,
self. evo_instance_token
)
return
response
def PDF(self , number , pdf_file , caption=""):
# Enviar PDF
if not os.path.exists(pdf_file):
raise
FileNotFoundError (f"Arquivo
’{pdf_file}’ não
encontrado.")
media_message = MediaMessage(
number=number ,
mediatype="document",
mimetype="application/pdf",
caption=caption ,
fileName=os.path.basename(pdf_file),
media=""
)
self.client.messages.send_media(
self.evo_instance_id ,
media_message ,
self.evo_instance_token ,
pdf_file
)
def audio(self , number , audio_file):
# Enviar áudio
CAPÍTULO 5. AGENTES INTELIGENTES PARA WHATSAPP COM EVOLUTION API
159
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 161

AGENTES INTELIGENTES 2
if not os.path.exists(audio_file):
raise
FileNotFoundError (f"Arquivo
’{audio_file}’ não
encontrado.")
audio_message = {
"number": number ,
"mediatype": "audio",
"mimetype": "audio/mpeg",
"caption": ""
}
self.client.messages. send_whatsapp_audio (
self.evo_instance_id ,
audio_message ,
self.evo_instance_token ,
audio_file
)
return "Áudio
enviado"
def image(self , number , image_file , caption=""):
# Enviar
imagem
if not os.path.exists(image_file):
raise
FileNotFoundError (f"Arquivo
’{image_file}’ não
encontrado.")
media_message = MediaMessage(
number=number ,
mediatype="image",
mimetype="image/jpeg",
caption=caption ,
fileName=os.path.basename(image_file),
media=""
)
self.client.messages.send_media(
self.evo_instance_id ,
media_message ,
self.evo_instance_token ,
image_file
)
return "Imagem
enviada"
def video(self , number , video_file , caption=""):
# Enviar vídeo
if not os.path.exists(video_file):
raise
FileNotFoundError (f"Arquivo
’{video_file}’ não
CAPÍTULO 5. AGENTES INTELIGENTES PARA WHATSAPP COM EVOLUTION API
160
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 162

AGENTES INTELIGENTES 2
encontrado.")
media_message = MediaMessage(
number=number ,
mediatype="video",
mimetype="video/mp4",
caption=caption ,
fileName=os.path.basename(video_file),
media=""
)
self.client.messages.send_media(
self.evo_instance_id ,
media_message ,
self.evo_instance_token ,
video_file
)
return "Vídeo
enviado"
def
document(self , number , document_file , caption=""):
# Enviar
documento
if not os.path.exists( document_file ):
raise
FileNotFoundError (f"Arquivo
’{ document_file}’ não
encontrado.")
media_message = MediaMessage(
number=number ,
mediatype="document",
mimetype="application/vnd.openxmlformats - officedocument .
wordprocessingml .document",
caption=caption ,
fileName=os.path.basename( document_file ),
media=""
)
self.client.messages.send_media(
self.evo_instance_id ,
media_message ,
self.evo_instance_token ,
document_file
)
return "Documento
enviado"
CAPÍTULO 5. AGENTES INTELIGENTES PARA WHATSAPP COM EVOLUTION API
161
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 163

AGENTES INTELIGENTES 2
Integrando o Envio de Mensagens com Streamlit
Agora vamos criar uma aplicação usando o Streamlit para enviar mensagens utilizando
a classe Send que criamos anteriormente. Esse código cria uma interface simples onde o
usuário pode inserir o número de telefone e a mensagem a ser enviada. O Streamlit facilita a
criação dessa interface de maneira rápida e interativa. Abaixo está o código completo:
import
streamlit as st
from
send_sandeco
import
SendSandeco
# Instancia a classe
Send
sender = SendSandeco ()
# Configuração da interface do Streamlit
st.title("Envio de Mensagens
com
EvolutionAPI")
st.subheader("Preencha os campos
abaixo
para
enviar sua
mensagem")
# Campos
para
entrada de dados
number = st.text_input("Número de telefone (com DDI e DDD , exemplo:
5562981...):")
message = st.text_area("Mensagem:")
send_button = st.button("Enviar
Mensagem")
# Lógica de envio
simplificada
if send_button:
if number and
message:
try:
# Chama o método
textMessage da classe
Send
response = sender.textMessage(number , message)
st.success(f"Mensagem
enviada
com
sucesso! Resposta: {
response}")
except
Exception as e:
st.error(f"Erro ao enviar
mensagem: {e}")
else:
st.warning("Por favor , preencha
todos os campos
antes de enviar.
")
Uau! O que vemos na Figura 5.21 é a prova viva de que conseguimos! A integração entre o
Streamlit e o EvolutionAPI está funcionando como um relógio suíço. Ao preencher os campos
com o número de telefone e a mensagem desejada, bastou clicar no botão Enviar Mensagem,
e pronto: uma mensagem foi enviada com sucesso. O aviso verde ao final, ’Mensagem
enviada com sucesso!’, confirma que tudo está perfeitamente integrado e operacional. Esse
resultado empolgante demonstra como conseguimos transformar a interface do Streamlit
em uma ferramenta funcional e robusta para comunicação via WhatsApp. Vamos continuar
CAPÍTULO 5. AGENTES INTELIGENTES PARA WHATSAPP COM EVOLUTION API
162
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 164

AGENTES INTELIGENTES 2
Figura 5.21: Streamlit enviando mensagens usando a EvoAPI
aprimorando e expandindo esse projeto!
5.17
ENVIANDO PDF, IMAGEM, SOM E VÍDEO
Para tornar sua experiência com a EvolutionAPI ainda mais prática, os arquivos incluídos
no projeto minha_evolution.zip foram cuidadosamente organizados para facilitar a interação
com a API. Dentro desse pacote, você encontrará exemplos prontos para o envio de diferentes
tipos de mídia, incluindo PDFs, imagens, áudios e vídeos. Esses arquivos servem como
base para que você possa rapidamente integrar e testar o envio de conteúdos multimídia sem
complicações.
A Classe SendSandeco
Crei uma classe chamada SendSandeco oferece métodos para o envio de diferentes
tipos de mensagens através da EvolutionAPI. Abaixo estão os métodos disponíveis e suas
funcionalidades:
• textMessage(number, msg, mentions=[]) – Envia uma mensagem de texto para um
número específico, com suporte a menções.
• PDF(number, pdf_file, caption=) – Envia um arquivo PDF para um número especificado.
• audio(number, audio_file) – Envia um arquivo de áudio no formato MP3 para um
destinatário.
• image(number, image_file, caption=) – Envia uma imagem no formato JPEG para um
CAPÍTULO 5. AGENTES INTELIGENTES PARA WHATSAPP COM EVOLUTION API
163
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 165

AGENTES INTELIGENTES 2
número informado.
• video(number, video_file, caption=) – Envia um vídeo no formato MP4 para um
contato.
• document(number, document_file, caption=) – Envia um documento no formato
DOCX para um número específico.
Cada um desses métodos permite automatizar o envio de mensagens e arquivos multimí-
dia utilizando a EvolutionAPI de forma prática e eficiente.
Enviando PDF
Hora de enviar um arquivo PDF pelo WhatsApp utilizando a EvolutionAPI. Primeiro,
importe os módulos necessários. O módulo os é utilizado para manipular caminhos de
arquivos no sistema operacional, garantindo compatibilidade entre diferentes ambientes. Em
seguida, importe a classe SendSandeco, que encapsula os métodos responsáveis pelo envio
de mensagens e arquivos via EvolutionAPI.
Após as importações, instancie a classe SendSandeco() e armazene-a na variável
sender. Essa instância permitirá que você utilize os métodos da API para enviar mensagens e
arquivos.
Defina o número de telefone do destinatário na variável celular. É obrigatório inserir o DDI
do Brasil (+55) antes do número para garantir que o envio ocorra corretamente. Certifique-se
de que o número esteja no formato adequado, sem espaços ou caracteres especiais.
Agora, defina o caminho do arquivo PDF que será enviado. Utilize a função os.path.join()
para criar um caminho compatível com diferentes sistemas operacionais. O arquivo Attention
Is All You Need.pdf está localizado dentro da pasta temp, e sua localização será armaze-
nada na variável pdf_file.
Por fim, utilize o método PDF() da classe SendSandeco para enviar o arquivo. Esse
método recebe três parâmetros: o número do destinatário, o caminho do arquivo PDF e uma
legenda opcional que será anexada à mensagem. Neste caso, a legenda é definida como o
nome do arquivo enviado.
Ao executar esse código, a EvolutionAPI enviará o arquivo PDF diretamente para o
WhatsApp do destinatário, acompanhado da legenda definida.
CAPÍTULO 5. AGENTES INTELIGENTES PARA WHATSAPP COM EVOLUTION API
164
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 166

AGENTES INTELIGENTES 2
import os
from
send_sandeco
import
SendSandeco
sender = SendSandeco ()
# Número de telefone
para
enviar a mensagem
# Não esqueça de adicionar o DDI do Brasil
(+55)
celular = "55119999..."
pdf_file = os.path.join(’temp ’,’Attention Is All You Need.pdf’)
sender.PDF(number=celular ,
pdf_file=pdf_file ,
caption="Attention Is All You Need")
Enviando Imagem
Para enviar uma imagem pelo WhatsApp utilizando a EvolutionAPI, comece importando
os módulos necessários. O módulo os será utilizado para manipular caminhos de arquivos
de forma compatível com diferentes sistemas operacionais. Em seguida, importe a classe
SendSandeco, que contém os métodos responsáveis pelo envio de mensagens e mídias
através da API.
Após as importações, instancie a classe SendSandeco() e armazene a instância na
variável sender. Essa instância permitirá a utilização dos métodos de envio da API.
Defina o número do destinatário na variável celular. É essencial incluir o DDI do Brasil
(+55) antes do número para garantir que o envio seja realizado corretamente. Certifique-se de
que o número esteja formatado corretamente, sem espaços ou caracteres especiais.
Agora, defina o caminho do arquivo da imagem que será enviada. Utilize a função
os.path.join() para criar um caminho compatível com qualquer sistema operacional. Neste
caso, o arquivo de imagem mafalda.png está armazenado na pasta temp, e seu caminho
será armazenado na variável image.
Por fim, utilize o método image() da classe SendSandeco para enviar a imagem via
EvolutionAPI. Esse método recebe três parâmetros: o número do destinatário, o caminho do
arquivo da imagem e uma legenda opcional que será anexada à mensagem. Aqui, a legenda
foi definida como "Mafalda a cadela mais linda!".
Ao executar este código, a imagem será enviada diretamente para o WhatsApp do
destinatário, acompanhada da legenda configurada.
CAPÍTULO 5. AGENTES INTELIGENTES PARA WHATSAPP COM EVOLUTION API
165
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 167

AGENTES INTELIGENTES 2
import os
from
send_sandeco
import
SendSandeco
sender = SendSandeco ()
# Número de telefone
para
enviar a mensagem
# Não esqueça de adicionar o DDI do Brasil
(+55)
celular = "55119999..."
image = os.path.join(’temp ’,’mafalda.png’)
sender.image(number=celular ,
image_file=image ,
caption="Mafalda a cadela
mais
linda!")
Enviando Vídeo
Assim como no envio de PDFs e imagens, aqui também é necessário definir o número do
destinatário corretamente, garantir que o caminho do arquivo seja compatível com diferentes
sistemas operacionais e verificar se o vídeo realmente existe antes de enviá-lo.
Antes de prosseguir com o envio, utilize os.path.exists() para garantir que o arquivo de
vídeo está disponível. Caso o arquivo não seja encontrado, um erro do tipo FileNotFoundError
será levantado, informando que o vídeo não foi localizado dentro da pasta temp.
Essa
verificação evita que a API tente processar um arquivo inexistente.
Após a verificação, a variável video_path é sobrescrita para apontar corretamente para o
vídeo sandeco.mp4. Por fim, utilize o método video() da classe SendSandeco para enviar o
arquivo. Esse método recebe três parâmetros: o número do destinatário, o caminho do arquivo
do vídeo e uma legenda opcional. Aqui, a legenda foi definida como "Sandeco".
Ao executar este código, o vídeo será enviado diretamente para o WhatsApp do destinatá-
rio, acompanhado da legenda configurada.
import os
from
send_sandeco
import
SendSandeco
sender = SendSandeco ()
# Número de telefone
para
enviar a mensagem
# Não esqueça de adicionar o DDI do Brasil
(+55)
celular = "55119999..."
CAPÍTULO 5. AGENTES INTELIGENTES PARA WHATSAPP COM EVOLUTION API
166
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 168

AGENTES INTELIGENTES 2
# Certifique -se de que o arquivo
realmente
existe
video_path = os.path.join(’temp ’,’meu_vídeo.png’)
if not os.path.exists(video_path):
raise
FileNotFoundError (f"Arquivo
’{video_path}’ não encontrado
dentro de ’temp ’.")
# Enviar o vídeo
video_path = os.path.join(’temp ’, ’sandeco.mp4’)
resposta = sender.video(
number=celular ,
video_file=video_path ,
# Arquivo
aberto
caption="Sandeco"
# Legenda do vídeo
)
Enviando Áudio
Assim como no envio de PDFs, imagens e vídeos, aqui também é necessário importar
as bibliotecas e definir o número do destinatário corretamente, garantir que o caminho do
arquivo seja compatível com diferentes sistemas operacionais e verificar se o arquivo de áudio
realmente existe antes de enviá-lo. As importações seguem o mesmo padrão, utilizando a
classe SendSandeco e a manipulação de caminhos com o módulo os.
Antes de prosseguir com o envio, utilize os.path.exists() para garantir que o arquivo de
áudio está disponível. Caso o arquivo não seja encontrado, um erro do tipo FileNotFoundError
será levantado, informando que o áudio não foi localizado dentro da pasta temp.
Essa
verificação evita que a API tente processar um arquivo inexistente.
Após a verificação, a variável audio_path é sobrescrita para apontar corretamente para
o arquivo de áudio sandeco.mp3. Por fim, utilize o método audio() da classe SendSandeco
para enviar o arquivo. Esse método recebe dois parâmetros: o número do destinatário e o
caminho do arquivo do áudio. Diferente do envio de imagens e vídeos, aqui não há suporte
para legenda.
Ao executar este código, o áudio será enviado diretamente para o WhatsApp do destinatá-
rio.
import os
from
send_sandeco
import
SendSandeco
sender = SendSandeco ()
# Número de telefone
para
enviar a mensagem
CAPÍTULO 5. AGENTES INTELIGENTES PARA WHATSAPP COM EVOLUTION API
167
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 169

AGENTES INTELIGENTES 2
# Não esqueça de adicionar o DDI do Brasil
(+55)
celular = "55119999..."
# Certifique -se de que o arquivo
realmente
existe
audio_path = os.path.join(’temp ’,’meu_vídeo.png’)
if not os.path.exists(audio_path):
raise
FileNotFoundError (f"Arquivo
’{audio_path}’ não encontrado
dentro de ’temp ’.")
# Enviar o áudio
audio_path = os.path.join(’temp ’, ’sandeco.mp3’)
resposta = sender.audio(
number=celular ,
video_file=audio_path ,
# Arquivo
aberto
caption="Sandeco"
# Legenda do áudio
)
5.18
RECEBENDO MENSAGENS COM A EVOAPI
Imagine que você é um operador de uma central de atendimento, onde diversas linhas
telefônicas estão conectadas a um único sistema que permite gerenciar todas as chamadas
recebidas de maneira organizada e eficiente. Da mesma forma, ao integrar a EvolutionAPI
em suas aplicações, você cria um ponto centralizado para receber e gerenciar mensagens
provenientes de diferentes canais de comunicação, como o WhatsApp.
A EvolutionAPI oferece recursos robustos para o recebimento de mensagens, permitindo
que sua aplicação não apenas envie, mas também receba e processe mensagens de forma
dinâmica. Isso é fundamental para criar interações bidirecionais, possibilitando respostas
automáticas, armazenamento de conversas e análises de dados. Com a capacidade de
receber mensagens, sua aplicação pode monitorar continuamente as interações dos usuários,
garantindo que nenhuma comunicação seja perdida e que todas as mensagens sejam tratadas
conforme as necessidades do seu negócio.
A classe MessageSandeco
A classe MessageSandeco foi criada para extrair e organizar as informações de mensagens
recebidas via EvolutionAPI. Ela oferece métodos que permitem interpretar diferentes tipos de
mensagens e retornar seus conteúdos estruturados. A seguir, listamos os principais métodos
CAPÍTULO 5. AGENTES INTELIGENTES PARA WHATSAPP COM EVOLUTION API
168
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 170

AGENTES INTELIGENTES 2
da classe e suas funcionalidades:
• __init__(data): Inicializa a classe com os dados recebidos e executa a extração das
informações relevantes.
• extract_common_data(): Coleta os dados gerais da mensagem, como remetente,
destinatário, identificadores e status.
• determine_scope(): Identifica se a mensagem foi enviada em um grupo ou em uma
conversa privada.
• extract_specific_data(): Identifica o tipo de mensagem e chama o método correspon-
dente para extrair detalhes específicos.
• extract_text_message(): Obtém o conteúdo de mensagens de texto.
• extract_audio_message(): Processa mensagens de áudio e extrai informações como
URL, duração e formato.
• extract_image_message(): Extrai dados de mensagens de imagem, incluindo URL,
legenda e dimensões.
• extract_document_message(): Obtém informações sobre documentos recebidos,
como nome do arquivo, formato e URL de download.
• decode_base64(base64_string): Converte strings base64 para bytes, permitindo mani-
pular arquivos de mídia.
• get(): Retorna todos os atributos da mensagem como um dicionário.
• get_text(): Obtém o texto associado à mensagem, seja de uma mensagem de texto ou
da legenda de uma imagem.
• get_messages(messages): Converte uma lista de mensagens recebidas em objetos
da classe MessageSandeco.
Com esses métodos, a MessageSandeco facilita a extração e a manipulação das mensa-
gens recebidas, tornando a comunicação via EvolutionAPI mais eficiente e organizada.
Para utilizar a classe MessageSandeco, basta importá-la e instanciá-la passando um JSON
enviado pela EvolutionAPI. O exemplo abaixo demonstra como fazer isso ao receber uma
requisição contendo os dados da mensagem:
from
message_sandeco
import
MessageSandeco
data = request.get_json ()
msg = MessageSandeco (data)
Com essa instância, é possível acessar todos os atributos e métodos da classe para
extrair informações detalhadas sobre a mensagem recebida.
CAPÍTULO 5. AGENTES INTELIGENTES PARA WHATSAPP COM EVOLUTION API
169
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 171

AGENTES INTELIGENTES 2
5.19
CRIANDO UM WEBHOOK
Imagine que você está esperando uma entrega importante em casa. Em vez de ficar
checando o portão a cada minuto para ver se o entregador chegou, ele simplesmente toca a
campainha quando chega, te avisando que o pacote está ali. Esse é exatamente o conceito
de um webhook. Em vez de um sistema precisar perguntar constantemente se há algo novo, o
próprio servidor envia um aviso sempre que um evento acontece. Isso torna a comunicação
entre sistemas muito mais eficiente e rápida, reduzindo o consumo desnecessário de recursos.
Na prática, um webhook é um mecanismo de notificação que permite que um sistema
envie dados automaticamente para outro sistema sempre que um evento específico ocorre.
Ele funciona como uma conexão em tempo real, disparando requisições HTTP para um
endpoint configurado sempre que há algo relevante a ser comunicado. Essa abordagem é
amplamente utilizada em integrações de APIs, permitindo que sistemas diferentes interajam
sem que seja necessário verificar manualmente se há novas informações. No contexto da
EvolutionAPI, o webhook será a ponte que permitirá o recebimento e processamento das
mensagens automaticamente assim que forem enviadas pelo WhatsApp.
Criando um Webhook com Flask
Agora que entendemos o conceito de webhooks, vamos construir um utilizando Flask,
um dos microframeworks mais populares para desenvolvimento de APIs em Python. O
Flask permitirá que criemos um servidor leve e eficiente, capaz de receber notificações da
EvolutionAPI sempre que uma nova mensagem for enviada para o WhatsApp. Assim, em vez
de precisarmos consultar a API a todo momento, a própria EvolutionAPI nos avisará quando
uma mensagem chegar.
Para isso, vamos definir uma rota HTTP que ficará escutando os eventos enviados pela
EvolutionAPI. Sempre que uma nova mensagem for recebida no WhatsApp, a API enviará um
JSON contendo os detalhes da mensagem para essa rota. Nosso código precisará interpretar
esses dados, extrair as informações relevantes e, se necessário, responder automaticamente
ao remetente. Dessa forma, conseguimos processar as mensagens em tempo real sem
desperdício de recursos.
No código abaixo, criamos um servidor Flask que recebe os dados da EvolutionAPI na rota
/messages-upsert. Utilizamos a classe MessageSandeco para interpretar a mensagem e a
classe SendSandeco para responder ao remetente com o mesmo conteúdo recebido. Diferente
da versão anterior, agora utilizamos o método get_text() da MessageSandeco, que extrai o
texto da mensagem considerando diferentes tipos de mídia, como imagens e documentos.
CAPÍTULO 5. AGENTES INTELIGENTES PARA WHATSAPP COM EVOLUTION API
170
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 172

AGENTES INTELIGENTES 2
Isso melhora a flexibilidade do código ao lidar com mensagens multimídia.
Para rodar o servidor, basta executar o script Python e garantir que a porta 5000 esteja
acessível. No ambiente de produção, será necessário expor essa rota publicamente, utilizando
ferramentas como ngrok ou configurando um servidor na nuvem. Dessa forma, a EvolutionAPI
poderá enviar notificações para nosso webhook sempre que um evento ocorrer no WhatsApp.
from
flask
import Flask , request
from
message_sandeco
import
MessageSandeco
from
send_sandeco
import
SendSandeco
app = Flask(__name__)
@app.route("/messages -upsert", methods =[’POST ’])
def eco():
data = request.get_json ()
msg = MessageSandeco (data)
sender = SendSandeco ()
sender.textMessage(number=msg.phone , msg=msg.get_text ())
return ""
if __name__ == "__main__":
app.run(host="0.0.0.0", port="5000", debug=True)
Executando o Flask
Vamos executar nosso servidor Flask e identificar o endereço IP local onde ele está
rodando. Assim que o Flask iniciar, ele exibirá algumas mensagens no terminal, incluindo os
endereços em que o servidor está disponível. O endereço que nos interessa está destacado
em verde, pois ele representa o IP da sua máquina dentro da rede local. Esse é o endereço
que utilizaremos para configurar o nosso webhook.
Ao observar o terminal, perceba que o servidor está rodando em dois endereços:
http://127.0.0.1:5000 e http://192.168.1.9:5000. O primeiro é um IP local que fun-
ciona apenas dentro da própria máquina. Já o segundo, 192.168.1.9, é o endereço que
sua máquina recebeu dentro da rede interna e pode ser acessado por outros dispositivos
conectados à mesma rede. É esse endereço que precisamos utilizar ao configurar nosso
webhook na EvolutionAPI.
CAPÍTULO 5. AGENTES INTELIGENTES PARA WHATSAPP COM EVOLUTION API
171
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 173

AGENTES INTELIGENTES 2
Figura 5.22: Identificando o endereço IP do servidor Flask
Configurando o Webhook na EvoAPI
Agora que nosso servidor Flask está rodando, precisamos configurar a EvoAPI para enviar
notificações de eventos para o nosso Webhook. Para isso, acessamos o painel da EvoAPI e
seguimos alguns passos para garantir que o sistema envie as mensagens corretamente.
O primeiro passo é acessar a EvoAPI e navegar até a seção de eventos. No painel, clique
no agente desejado e vá até a opção Events -> Webhook. Essa configuração permitirá
que o sistema encaminhe os eventos recebidos diretamente para o nosso servidor. Veja a
Figura 5.23.
Figura 5.23: Acessando a configuração de Webhooks na EvoAPI.
Com a tela de Webhooks aberta, o próximo passo é inserir o endereço do nosso servidor
Flask. O endereço IP que obtivemos na execução do servidor deve ser inserido no campo
de URL. Nesse caso, utilizamos http://192.168.1.9:5000, que corresponde ao servidor
CAPÍTULO 5. AGENTES INTELIGENTES PARA WHATSAPP COM EVOLUTION API
172
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 174

AGENTES INTELIGENTES 2
rodando na nossa máquina local. Confirme que a opção Enabled está ativada para garantir
que os eventos sejam enviados corretamente. Essa etapa pode ser vista na Figura 5.24.
Figura 5.24: Definição da URL do Webhook na EvoAPI.
Por fim, precisamos ativar os eventos que queremos monitorar. Para este exemplo,
habilitamos o evento MESSAGES_UPSERT, que permite receber mensagens enviadas para
o WhatsApp vinculado à nossa instância. Após ativar essa opção, basta clicar no botão Save
para salvar as alterações e concluir a configuração. A Figura 5.25 ilustra esse processo.
Figura 5.25: Ativando o evento MESSAGES_UPSERT e salvando as configurações.
Com isso, a EvoAPI está configurada para enviar mensagens automaticamente ao nosso
Webhook sempre que um novo evento ocorrer. Agora, podemos processar essas mensagens
dentro do nosso servidor Flask e executar ações baseadas nos dados recebidos.
CAPÍTULO 5. AGENTES INTELIGENTES PARA WHATSAPP COM EVOLUTION API
173
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 175

AGENTES INTELIGENTES 2
5.20
EXERCÍCIOS
Agora que exploramos os conceitos e implementações essenciais da EvolutionAPI, vamos
consolidar nosso aprendizado com alguns exercícios práticos.
1. Explique o que é a EvolutionAPI e qual seu principal objetivo. Compare com outras
soluções de integração de mensagens e destaque seus diferenciais.
2. No capítulo, falamos sobre o uso do Docker para instalar a EvolutionAPI. Explique como
o Docker facilita esse processo e descreva os passos principais para instalar e executar
a EvolutionAPI utilizando Docker Compose.
3. Qual a importância do arquivo .env na configuração da EvolutionAPI? Liste pelo menos
três variáveis de ambiente importantes e explique sua função dentro do sistema.
4. O que é um Webhook e por que ele é essencial para a comunicação entre a EvolutionAPI
e um servidor externo? Explique seu funcionamento e forneça um exemplo prático de
sua utilização.
5. No capítulo, foi demonstrado como enviar mensagens de texto pelo EvolutionAPI. Mo-
difique o código apresentado para enviar mensagens formatadas em negrito e itálico
usando a sintaxe do WhatsApp. Pesquise na web
6. Além de mensagens de texto, a EvolutionAPI suporta o envio de arquivos como PDFs,
imagens, vídeos e áudios. Escreva um código para enviar um documento PDF e
descreva como a API processa esse tipo de arquivo.
7. O EvolutionAPI permite a integração com múltiplos serviços. Suponha que você deseja
conectar o EvolutionAPI ao Chatwoot para centralizar mensagens de atendimento.
Explique como essa integração pode ser feita e quais benefícios ela traria para um time
de suporte ao cliente.
8. No código de recebimento de mensagens utilizando Webhook, um dos principais desafios
é filtrar mensagens relevantes para automação. Modifique o código apresentado para
responder automaticamente apenas a mensagens contendo a palavra-chave help.
9. Suponha que você precise monitorar o status dos contêineres Docker da EvolutionAPI e
reiniciá-los automaticamente caso parem de funcionar. Escreva um script Python que
utilize a biblioteca docker-py para verificar se os contêineres estão ativos e reiniciá-los
se necessário.
10. Para um cenário de uso real da EvolutionAPI, imagine que você deseja criar um bot que
responda perguntas frequentes de clientes sobre um produto. Esboce uma arquitetura
de solução que combine EvolutionAPI, Flask e uma IA para processar mensagens e
fornecer respostas automáticas.
CAPÍTULO 5. AGENTES INTELIGENTES PARA WHATSAPP COM EVOLUTION API
174
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 176

AGENTES INTELIGENTES 2
CAPÍTULO 6
Gestão de Grupos com Evo e
CrewAI
Imagine poder administrar seus grupos de WhatsApp de forma totalmente automatizada,
deixando de lado o trabalho repetitivo e focando no que realmente importa. A combinação
poderosa da EvolutionAPI (Evo) e do CrewAI abre portas para uma gestão inovadora,
onde tarefas diárias, como moderação de mensagens e organização de informações, são
executadas com precisão e inteligência.
A EvolutionAPI, uma plataforma versátil e robusta, permite o controle direto de grupos no
WhatsApp, oferecendo funcionalidades como envio de mensagens automatizadas, gerencia-
mento de membros e integração com outras ferramentas digitais. Esse nível de automação não
só economiza tempo, mas também garante que seus grupos sejam organizados e produtivos,
mesmo em contextos de alta atividade.
Já o CrewAI, por sua vez, adiciona uma camada de inteligência estratégica a esse
processo. Com a capacidade de processar grandes volumes de dados e gerar insights úteis,
ele se torna o parceiro ideal para tarefas como a geração de resumos diários, identificação
de tópicos relevantes e até mesmo sugestões baseadas nas discussões do grupo. Essa
combinação de automação e inteligência artificial redefine o que significa gerenciar grupos de
forma eficiente.
Ao longo deste capítulo, vamos explorar como essas ferramentas podem ser utilizadas
juntas para transformar grupos simples de WhatsApp em ambientes colaborativos e dinâmicos.
Desde as operações mais básicas até soluções complexas, você verá como a Evo e o CrewAI
podem trabalhar lado a lado, trazendo mais organização e produtividade para suas interações
digitais.
CAPÍTULO 6. GESTÃO DE GRUPOS COM EVO E CREWAI
175
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 177

AGENTES INTELIGENTES 2
6.1
RESUMOS DIÁRIOS COM EVO E CREWAI
Manter-se atualizado em grupos de WhatsApp com grande volume de mensagens pode ser
desafiador, especialmente quando informações importantes se perdem em meio a conversas
extensas. A integração entre a EvolutionAPI (Evo) e o CrewAI oferece uma solução prática:
a criação de resumos diários automatizados. Com essa abordagem, é possível consolidar as
mensagens mais relevantes do dia, organizando as informações de forma clara e eficiente
para todos os participantes.
Utilizando a Evo, as mensagens trocadas ao longo do dia são capturadas e organizadas
em um formato adequado para análise. O CrewAI, por sua vez, aplica inteligência artificial
para identificar os principais tópicos e gerar um resumo objetivo que destaca as informações
essenciais. Essa solução não apenas economiza tempo, mas também garante que ninguém
perca o que realmente importa, transformando o excesso de mensagens em conteúdo valioso
e acessível.
CÓDIGOS DISPONÍVEIS: Acesse os códigos Python deste capítulo em:
https://bit.ly/sandeco-crewai2-groups-evo
A Figura 6.1 apresenta uma tela detalhada para configurar a geração de resumos diários
de grupos do WhatsApp. No painel central, encontra-se a seção Selecione um Grupo,
onde você deve escolher o grupo que deseja configurar. No exemplo, o grupo selecionado é
Instagram Sandeco, cuja identificação é destacada logo abaixo. Essa seleção é essencial,
pois as configurações aplicadas a seguir serão específicas para o grupo escolhido. Após a
escolha do grupo, as Informações Gerais são exibidas no painel à esquerda, fornecendo
detalhes importantes sobre o grupo. Essas informações incluem o Criador, o Tamanho do
Grupo, e a Data de Criação, além de informações sobre restrições e permissões, como se o
grupo é restrito, apenas para administradores ou se é uma comunidade de anúncios.
No painel esquerdo, as Informações Gerais também indicam de forma visual e direta
as características principais do grupo. Por exemplo, se o grupo é restrito ou se apenas
administradores podem enviar mensagens, isso é representado com um ícone vermelho,
sinalizando que tais opções não estão habilitadas. Essa apresentação facilita a visualização
rápida das configurações do grupo, sem a necessidade de acessar informações adicionais.
Tais características são cruciais para definir como o grupo será gerenciado e se o resumo
diário atenderá às regras específicas do grupo.
O painel à direita é onde você configura as preferências de geração de resumos. Ative a
opção Habilitar Geração do Resumo para permitir que o resumo diário seja criado automati-
CAPÍTULO 6. GESTÃO DE GRUPOS COM EVO E CREWAI
176
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 178

AGENTES INTELIGENTES 2
camente. Em seguida, ajuste o Horário de Execução do Resumo para definir o momento
exato em que o sistema deve gerar e enviar o resumo. Além disso, é possível personalizar o
conteúdo do resumo marcando as caixas de seleção para Incluir Links no Resumo e Incluir
Nomes no Resumo. Essas opções permitem maior flexibilidade, garantindo que o resumo
contenha apenas os elementos mais relevantes para os membros do grupo.
Após configurar todas as opções no painel direito, clique no botão Salvar Configurações
para armazenar as definições e garantir que o sistema respeite as preferências definidas para
o grupo. Essa etapa final é fundamental, pois sem salvar as configurações, o resumo não será
gerado automaticamente ou poderá não conter as informações desejadas. Com essa interface,
é possível gerenciar os grupos com precisão, otimizando a comunicação e facilitando o acesso
às informações mais importantes por meio de resumos personalizados.
Figura 6.1: Tela de configuração para resumos diários de grupos.
6.2
CODIFICAÇÃO DO RESUMO STREAMLIT
Vamos começar configurando os elementos essenciais para o funcionamento da aplicação
app.py. Primeiro, importamos a biblioteca os, que será usada para manipular aspectos do
sistema operacional, como gerenciamento de arquivos ou variáveis de ambiente. Em seguida,
utilizamos a biblioteca streamlit, importada como st, para criar a interface gráfica interativa
da aplicação, que será apresentada ao usuário. A função time, da biblioteca datetime,
também é carregada, permitindo o controle de horários, uma funcionalidade importante para
tarefas relacionadas a agendamentos.
Além disso, importamos dois módulos do nosso projeto: GroupController e GroupUtils.
O GroupController, como o próprio nome indica, é o controlador responsável pelas opera-
ções nos grupos, gerenciando a lógica principal, como a manipulação de dados e integração
CAPÍTULO 6. GESTÃO DE GRUPOS COM EVO E CREWAI
177
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 179

AGENTES INTELIGENTES 2
com outras partes do sistema. Já o GroupUtils fornece funções utilitárias específicas para
dar suporte à interface, como o Streamlit, garantindo que os dados dos grupos sejam exibi-
dos corretamente e de forma otimizada. Essas importações são fundamentais para que os
elementos principais do sistema estejam prontos para uso.
app.py explicado por partes
#arquivo
app.py
import os
import
streamlit as st
from
datetime
import
time
from
group_controller
import
GroupController
from
groups_util
import
GroupUtils
Neste trecho de código, iniciamos instanciando a classe GroupController, que é res-
ponsável por gerenciar as operações relacionadas aos grupos do WhatsApp. A partir dessa
instância, chamamos o método fetch_groups(), que recupera todos os grupos associados
e retorna uma lista contendo as informações necessárias para manipulação e configuração.
Essa etapa inicial é crucial para obter os dados dos grupos que servirão de base para as
próximas ações.
Em seguida, criamos uma instância da classe GroupUtils, que fornece funções auxiliares
para manipular e organizar as informações dos grupos. Utilizando a instância ut, chamamos
o método map(), que recebe a lista de grupos retornada anteriormente. Esse método cria
um mapeamento entre os nomes dos grupos e seus respectivos group_id, facilitando a
identificação e manipulação dos grupos em futuras etapas. Além disso, o método também
retorna uma estrutura chamada options, que será utilizada para exibir as opções de grupos
em uma interface interativa ou realizar seleções específicas.
# Instância do controlador de grupos
control = GroupController ()
groups = control.fetch_groups ()
# Instância da classe de utilitários
ut = GroupUtils ()
# Mapeia os grupos
entre
seus
nomes e group_id
group_map , options = ut.map(groups)
CAPÍTULO 6. GESTÃO DE GRUPOS COM EVO E CREWAI
178
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 180

AGENTES INTELIGENTES 2
6.3
DIVIDINDO O LAYOUT EM COLUNAS
Neste trecho de código, utilizamos o método st.columns da biblioteca streamlit para
criar uma configuração de layout em colunas na interface. O método divide a área da página
em duas colunas de tamanhos iguais, conforme especificado pela lista [1, 1]. As colunas
geradas, col1 e col2, podem ser usadas para adicionar elementos da interface de forma
organizada, permitindo exibir componentes lado a lado e melhorando a experiência do usuário
com um design mais limpo e intuitivo.
# Configurações de layout em colunas
col1 , col2 = st.columns ([1, 1])
O trecho de código organiza o conteúdo da coluna 1 para permitir a seleção de um
grupo pelo usuário. Utilizamos o bloco with col1, que garante que todos os componentes
adicionados sejam exibidos exclusivamente nesta coluna. O cabeçalho "Selecione um
Grupo" é adicionado com o método st.header, destacando a funcionalidade principal da
seção. A seguir, verificamos se a variável group_map contém informações sobre os grupos
carregados previamente. Caso haja grupos disponíveis, um menu suspenso (selectbox) é
criado com o método st.selectbox, permitindo que o usuário escolha um grupo entre as
opções disponíveis.
O selectbox exibe os nomes dos grupos ao usuário, mas retorna o group_id correspon-
dente à seleção. Isso é feito com a ajuda do argumento format_func, que formata cada item
da lista options para exibir apenas o nome do grupo (x[0]), enquanto o valor retornado pelo
selectbox é o identificador do grupo (x[1]). A escolha do grupo pelo usuário é armazenada
na variável selected_group_id, que é então utilizada para acessar os dados completos do
grupo por meio do mapeamento group_map. Dessa forma, os detalhes do grupo selecionado
são atribuídos à variável selected_group.
Para enriquecer a interface, o método ut.head_group é chamado com os argumentos
selected_group.name e selected_group.picture_url. Esse método gera um conteúdo
em HTML que inclui o nome do grupo e, se disponível, a URL de uma imagem associada a ele.
O resultado é renderizado na interface com o método st.markdown, utilizando o parâmetro
unsafe_allow_html=True para habilitar a exibição de HTML personalizado. Essa abordagem
permite apresentar uma visualização mais rica do grupo escolhido, como um título estilizado e
uma imagem representativa.
Finalmente, o método ut.group_details é invocado, recebendo como argumento o
selected_group. Esse método é responsável por exibir as informações gerais do grupo,
como o criador, data de criação, quantidade de membros e configurações específicas (por
CAPÍTULO 6. GESTÃO DE GRUPOS COM EVO E CREWAI
179
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 181

AGENTES INTELIGENTES 2
exemplo, se o grupo é restrito ou apenas para administradores). Essas informações são
apresentadas de forma estruturada, como demonstrado na Figura 6.2, garantindo ao usuário
uma visão completa do grupo selecionado antes de realizar qualquer ação adicional.
# Coluna 1: Seletor de grupo
with col1:
st.header("Selecione um Grupo")
if group_map:
selected_group_id = st.selectbox(
"Escolha um grupo:",
options ,
format_func=lambda x: x[0]
)[1]
selected_group = group_map[ selected_group_id ]
head_group = ut.head_group( selected_group .name , selected_group .
picture_url)
st.markdown(head_group , unsafe_allow_html =True)
ut.group_details(selected_group )
executando esse trecho temos:
Vamos começar a segunda coluna do layout, que é responsável por exibir as confi-
gurações do grupo selecionado. Dentro do bloco with col2, que assegura que todos os
elementos adicionados sejam exibidos exclusivamente nessa coluna, verificamos inicialmente
se o group_map contém informações carregadas. Caso positivo, adicionamos o cabeçalho
"Configurações" com o método st.header, sinalizando que esta seção será dedicada à
personalização das opções relacionadas ao grupo.
Na sequência, utilizamos o st.expander para criar uma seção expansível com o título
"Configurações do Resumo", que por padrão é exibida expandida (expanded=True). Dentro
dela, oferecemos ao usuário várias opções para ajustar as configurações de geração de
resumos. A primeira delas é um checkbox denominado "Habilitar Geração do Resumo".
Essa caixa de seleção, criada com o método st.checkbox, utiliza o valor inicial do atributo
enabled do grupo selecionado, garantindo que as configurações previamente salvas sejam
exibidas corretamente na interface.
Em seguida, adicionamos um seletor de horário com o método st.time_input, identifi-
cado pelo texto "Horário de Execução do Resumo". O valor inicial desse campo é definido
com base no horário configurado no objeto do grupo (selected_group.horario), convertido
para o formato apropriado com time.fromisoformat. Após isso, duas novas opções são con-
figuradas utilizando checkboxes: "Incluir Links no Resumo" e "Incluir Nomes no Resumo".
Ambas utilizam os valores correspondentes dos atributos is_links e is_names do grupo
CAPÍTULO 6. GESTÃO DE GRUPOS COM EVO E CREWAI
180
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 182

AGENTES INTELIGENTES 2
Figura 6.2: Exemplo de saída do código da Coluna 1: Seletor de grupo.
selecionado, respectivamente, permitindo ao usuário personalizar ainda mais o conteúdo do
resumo que será gerado.
# Coluna 2: Detalhes do grupo e configurações
with col2:
if group_map:
st.header("Configurações")
with st.expander("Configurações do Resumo", expanded=True):
enabled = st.checkbox(
"Habilitar
Geração do Resumo",
value=selected_group .enabled
# Valor
carregado do objeto
)
horario = st.time_input(
"Horário de Execução do Resumo:",
value=time.fromisoformat (selected_group .horario)
# Valor
carregado do objeto
)
CAPÍTULO 6. GESTÃO DE GRUPOS COM EVO E CREWAI
181
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 183

AGENTES INTELIGENTES 2
is_links = st.checkbox(
"Incluir
Links no Resumo",
value=selected_group .is_links
# Valor
carregado do
objeto
)
is_names = st.checkbox(
"Incluir
Nomes no Resumo",
value=selected_group .is_names
# Valor
carregado do
objeto
)
Continuando a segunda coluna do layout, este trecho de código é responsável por salvar
as configurações definidas para o resumo do grupo, além de configurar o script Python que
será utilizado pelo agendador. Inicialmente, o caminho do script de geração de resumos
é armazenado na variável python_script, utilizando o método os.path.join. O caminho
absoluto especificado combina o diretório base com o arquivo summary.py, que será executado
no agendador para criar os resumos.
Em seguida, utilizamos o botão "Salvar Configurações" por meio do método st.button.
Quando o usuário clica nesse botão, o método control.update_summary é invocado para
salvar as configurações do grupo no sistema. Os parâmetros fornecidos incluem o group_id,
identificado pelo grupo selecionado, o horário formatado com horario.strftime("%H:%M"),
e as opções booleanas enabled, is_links e is_names. Por fim, o caminho do script de
geração de resumos também é passado como argumento para garantir que o agendador
execute o arquivo correto.
Após a tentativa de salvar as configurações, a interface exibe uma mensagem de sucesso
ou erro, dependendo do resultado do método update_summary. Caso as configurações sejam
salvas com sucesso, o método st.success exibe uma mensagem indicando que tudo ocorreu
conforme esperado. Caso contrário, o método st.error informa ao usuário que houve um
problema e sugere tentar novamente. Essa interação garante que o usuário tenha um feedback
claro sobre o status da operação, como demonstrado na Figura 6.3.
CAPÍTULO 6. GESTÃO DE GRUPOS COM EVO E CREWAI
182
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 184

AGENTES INTELIGENTES 2
# Arquivo
python que gerará o resumo com CrewAI no agendador
python_script = os.path.join("F:\\ python -projects -
test \\ groups_evo_crewai \\","summary.py")
# Salvar
configurações atualizadas
if st.button("Salvar
Configurações"):
if control.update_summary (
group_id=selected_group .group_id ,
horario= horario.strftime("%H:%M"),
enabled=enabled ,
is_links=is_links ,
is_names=is_names ,
script=python_script
):
st.success("Configurações salvas com
sucesso!")
else:
st.error("Erro ao salvar as configurações. Tente
novamente!")
Com a execução de todo o código da coluna 2 temos:
Figura 6.3: Exemplo de saída da Coluna 2: Configurações do resumo.
CAPÍTULO 6. GESTÃO DE GRUPOS COM EVO E CREWAI
183
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 185

AGENTES INTELIGENTES 2
6.4
AGENDAMENTO DE TAREFA
Nesta seção, exploraremos como o agendamento de tarefas é configurado e gerenciado
para a geração automática de resumos de grupos no sistema. Todo o processo de agenda-
mento é controlado pela classe GroupController, que centraliza a lógica necessária para
definir, salvar e atualizar as configurações de agendamento. A interface desenvolvida em
Streamlit interage diretamente com essa classe, utilizando o método update_summary para
salvar as informações configuradas pelos usuários e criar as tarefas programadas.
O objetivo do agendamento é garantir que os resumos sejam gerados e enviados au-
tomaticamente em horários pré-definidos, sem a necessidade de intervenção manual. Por
meio do método update_summary, o sistema atualiza as preferências no arquivo CSV que
armazena as configurações de cada grupo, além de configurar uma tarefa agendada que utiliza
o script summary.py para processar as mensagens e criar o resumo. Essa abordagem permite
automatizar completamente a geração de resumos, assegurando consistência e eficiência no
envio das informações.
Nesta seção, detalharemos como o agendamento é realizado internamente, explicando a
interação entre a interface do Streamlit e os métodos fornecidos pela GroupController. Além
disso, abordaremos a integração com o gerenciador de tarefas TaskScheduled, utilizado para
criar, atualizar ou remover tarefas de forma dinâmica, dependendo das preferências definidas
pelos usuários. Essa configuração robusta é o núcleo da funcionalidade de automação do
sistema.
A classe TaskScheduled, presente no projeto disponibilizado neste capítulo, será utili-
zada para auxiliar no agendamento de agentes. Ela fornece métodos para criar, remover e
listar tarefas agendadas em diferentes sistemas operacionais. A seguir, estão os métodos
disponíveis:
1. validate_python_script(python_script_path) Valida se o caminho do script Python
fornecido existe.
2. get_python_executable() Obtém o caminho do executável Python no sistema operacio-
nal atual.
3. create_task(task_name, python_script_path, schedule_type=’DAILY’, time=’22:00’)
Cria uma tarefa agendada no sistema operacional, executando um script Python no
horário definido.
4. delete_task(task_name) Remove uma tarefa agendada do sistema operacional.
5. list_tasks() Lista todas as tarefas agendadas no sistema operacional.
Esses métodos garantem um gerenciamento eficiente das tarefas, permitindo automatizar
CAPÍTULO 6. GESTÃO DE GRUPOS COM EVO E CREWAI
184
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 186

AGENTES INTELIGENTES 2
a execução de scripts no sistema.
Enviando Vídeo
Agora vamos agendar uma Crew do CrewAI no agendador de tarefas utilizando a classe
TaskScheduled. Primeiro, defina o nome da tarefa armazenando-a na variável task_name. O
nome escolhido será utilizado para referenciar a tarefa no sistema operacional. Em seguida,
crie o caminho completo do script Python que será executado pela tarefa. Para isso, utilize
a função os.path.join, garantindo que o caminho seja formatado corretamente para o
sistema operacional em uso. No exemplo, o script post_crew.py está localizado na pasta
F:\python_projects_test\groups_evo_crewai\summary.py.
Agora, utilize o método create_task da classe TaskScheduled para criar a tarefa agen-
dada. Passe como argumentos o nome da tarefa, o caminho do script e as configurações do
agendamento. O parâmetro schedule_type define a frequência de execução da tarefa, que
no exemplo foi configurada como "DAILY", garantindo sua execução diária. Já o parâmetro
time especifica o horário da execução, definido para "11:13".
Como qualquer operação envolvendo o sistema pode gerar exceções, encapsule a criação
da tarefa em um bloco try-except. Caso ocorra algum erro ao criar a tarefa, o código exibirá
uma mensagem informando o problema.
Após agendar a execução do script, utilize o método list_tasks para listar todas as
tarefas agendadas no sistema operacional. Novamente, envolva essa operação em um bloco
try-except para capturar possíveis falhas na listagem.
Agora veja o código que implementa essas ações:
task_name = " MinhaTarefaAgente "
python_script = os.path.join("F:\\ python -projects -
test \\ groups_evo_crewai \\","summary.py")
# Cria a tarefa
agendada
try:
TaskScheduled.create_task(task_name , python_script ,
schedule_type=’DAILY ’, time=’11:13 ’)
except
Exception as e:
print(f"Erro ao criar a tarefa: {e}")
# Lista as tarefas
agendadas
try:
TaskScheduled.list_tasks ()
except
Exception as e:
CAPÍTULO 6. GESTÃO DE GRUPOS COM EVO E CREWAI
185
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 187

AGENTES INTELIGENTES 2
print(f"Erro ao listar as tarefas: {e}")
veja que a tarefa foi agendada corretamente
6.5
CRIANDO RESUMOS DIÁRIOS
No projeto que você baixou, há um arquivo chamado summary.py. Esse script será
configurado no agendador de tarefas do seu sistema operacional para, automaticamente, gerar
e enviar um resumo diário das mensagens trocadas no grupo nas últimas 24 horas. Com essa
automação, você garante que ninguém perca informações importantes, mantendo o grupo
sempre organizado e produtivo.
Vamos explicar o sumarizador diário por partes. O código inicia com algumas configura-
ções fundamentais para garantir que os módulos corretos sejam carregados. Primeiro, ele
adiciona ao sys.path o diretório pai do script, garantindo que as importações personalizadas
funcionem corretamente. Em seguida, exibe mensagens na tela informando que o script está
iniciando, facilitando a depuração caso algo dê errado.
# app.py
import sys
import os
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__),
"..")))
print("COMEÇANDO A EXECUTAR O SCRIPT\n")
print("AGUARDE ...\n")
Após essas configurações iniciais, o código importa as bibliotecas necessárias. A os lida
com operações no sistema operacional, time permite pausas no fluxo do código, argparse ge-
rencia argumentos passados via linha de comando, e as classes GroupController, Summary-
CAPÍTULO 6. GESTÃO DE GRUPOS COM EVO E CREWAI
186
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 188

AGENTES INTELIGENTES 2
Crew e SendSandeco são importadas para realizar o controle do grupo, resumir mensagens
e enviá-las ao WhatsApp.
import os
import
time
import
argparse
from
datetime
import
datetime , timedelta
from
group_controller
import
GroupController
from
summary_crew
import
SummaryCrew
from
send_sandeco
import
SendSandeco
Agora, o código define um argumento de linha de comando chamado task_name, que
será usado para identificar o grupo ao qual o resumo pertence. O valor passado para esse
argumento será processado e dividido, extraindo a parte relevante do identificador do grupo.
Esse identificador será utilizado em diversas partes do script para recuperar dados e enviar
mensagens.
parser = argparse. ArgumentParser ()
parser.add_argument("--task_name", required=True ,
help="Nome da tarefa
agendada")
args = parser.parse_args ()
group_id = args.task_name.split("_")[1]
Com o group_id em mãos, criamos uma instância de GroupController, responsável por
gerenciar os dados do grupo. Em seguida, carregamos as mensagens armazenadas no banco
de dados utilizando load_data_by_group() e extraímos o nome do grupo para exibição no
log. Isso garante que o script tenha acesso a todas as mensagens relevantes antes de gerar o
resumo.
control = GroupController ()
df = control. load_data_by_group (group_id)
nome = control. find_group_by_id (group_id).name
print(" ----------------------\n")
print("EXECUTANDO
TAREFA
AGENDADA\n")
print(f"Resumo do grupo : {nome }\n")
A próxima parte do código verifica se o resumo diário está ativado para o grupo. Caso
esteja, ele calcula o intervalo de tempo das últimas 24 horas e formata as datas para serem uti-
lizadas na busca de mensagens. O script exibe essas datas no console para acompanhamento
da execução.
CAPÍTULO 6. GESTÃO DE GRUPOS COM EVO E CREWAI
187
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 189

AGENTES INTELIGENTES 2
if df[’enabled ’] == True:
data_atual = datetime.now()
data_anterior = data_atual - timedelta(days =1)
formato = "%Y-%m-%d %H:%M:%S"
data_atual_formatada = data_atual.strftime(formato)
data_anterior_formatada = data_anterior .strftime(formato)
print(f"Data
atual: { data_atual_formatada }")
print(f"Data de 1 dia
anterior: { data_anterior_formatada }")
Agora que as datas foram definidas, buscamos as mensagens do grupo dentro desse
período. O código utiliza o método get_messages() do GroupController para recuperar
todas as mensagens enviadas no último dia. Depois, calcula a quantidade total de mensagens
e exibe essa informação no console.
msgs = control.get_messages(group_id , data_anterior_formatada ,
data_atual_formatada )
cont = len(msgs)
print(f"Total de mensagens: {cont}")
time.sleep (20)
Em seguida, o script constrói um texto formatado contendo todas as mensagens captura-
das. Ele percorre a lista de mensagens em ordem reversa e adiciona ao pull_msg informações
sobre o nome do autor, o conteúdo da mensagem e a data de envio. Esse bloco cria o texto
que será passado para o CrewAI gerar o resumo.
pull_msg = f"""
Dados
sobre as mensagens do grupo
Data
Inicial: { data_anterior_formatada }
Data
Final: { data_atual_formatada }
MENSAGENS
DOS USUÁRIOS PARA O RESUMO:
--------------------------
"""
for msg in reversed(msgs):
CAPÍTULO 6. GESTÃO DE GRUPOS COM EVO E CREWAI
188
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 190

AGENTES INTELIGENTES 2
pull_msg = pull_msg + f"""
Nome: *{msg.get_name ()}*
Postagem: "{msg.get_text ()}"
data: {time.strftime ("%d/%m %H:%M",
time.localtime(msg. message_timestamp ))}’
"""
Depois de construir a string com todas as mensagens, o script prepara um dicionário cha-
mado inputs que será passado ao CrewAI. A classe SummaryCrew recebe esse dicionário
e gera o resumo, que será armazenado na variável resposta.
inputs = {
"msgs": pull_msg
}
summary_crew = SummaryCrew ()
resposta = summary_crew.kickoff(inputs=inputs)
Com o resumo gerado, é hora de enviá-lo para o grupo no WhatsApp. A classe Send-
Sandeco é utilizada para isso. Criamos uma instância dessa classe e chamamos o método
textMessage(), enviando o resumo diretamente ao grupo correspondente.
evo_send = SendSandeco ()
evo_send.textMessage(group_id , resposta)
Por fim, o código registra no log o envio do resumo. Ele abre um arquivo log_summary.txt
no modo de adição (a) e escreve a mensagem confirmando que o resumo foi gerado e enviado
com sucesso. Essa etapa garante que todas as execuções fiquem documentadas.
log_path = os.path.dirname(__file__)
nome_arquivo = os.path.join(log_path , "log_summary.txt")
with open(nome_arquivo , "a", encoding="utf -8") as arquivo:
log = f"""[{ data_atual }] [INFO] [GRUPO: {nome }] [GROUP_ID: {group_id
}] - Mensagem: Resumo
gerado e enviado
com
sucesso!"""
arquivo.write(log)
Tudo configurado! Agora é só deixar o tempo correr e acompanhar as interações no grupo.
Diariamente, seu agente entrará em ação, compilando um resumo de todas as conversas do
dia e garantindo que ninguém perca as informações mais relevantes.
CAPÍTULO 6. GESTÃO DE GRUPOS COM EVO E CREWAI
189
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 191

AGENTES INTELIGENTES 2
6.6
EXERCÍCIOS
A seguir, apresentamos uma lista de exercícios para reforçar os conceitos abordados neste
capítulo. Resolva cada questão utilizando os conhecimentos adquiridos sobre a EvolutionAPI
(Evo) e o CrewAI na gestão de grupos do WhatsApp.
1. Explique o papel da EvolutionAPI na automação da gestão de grupos do WhatsApp e
como ela se integra ao CrewAI.
2. Descreva o processo de criação de resumos diários utilizando a combinação da Evoluti-
onAPI e do CrewAI. Quais são os principais passos envolvidos?
3. Analise o código responsável por capturar mensagens dentro de um intervalo de tempo
no grupo. Como as datas são manipuladas e formatadas para essa operação?
4. O que acontece se um grupo não tiver mensagens enviadas no período configurado
para a geração do resumo diário? Como o código tratado no capítulo lida com essa
situação?
5. No código apresentado, a classe GroupController desempenha um papel essencial na
manipulação dos dados do grupo. Explique suas funções e como ela interage com o
restante do sistema.
6. Modifique o código de geração de resumos para incluir um contador de palavras e exibir
a quantidade total de palavras no resumo gerado.
7. Como a classe TaskScheduled permite o agendamento da geração de resumos?
Qual a diferença na forma como esse agendamento é tratado em diferentes sistemas
operacionais?
8. Explique o propósito da função summary_crew.kickoff(inputs=inputs) no código
apresentado. Como o CrewAI utiliza esse input para gerar um resumo?
9. Adapte o código para permitir que o usuário escolha se deseja receber o resumo diário
no WhatsApp ou em um arquivo de texto salvo no servidor. Explique as mudanças
necessárias para essa modificação.
10. Suponha que você precise configurar resumos semanais ao invés de diários. Como
você modificaria a configuração do agendamento de tarefas para essa nova frequência?
CAPÍTULO 6. GESTÃO DE GRUPOS COM EVO E CREWAI
190
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 192

AGENTES INTELIGENTES 2
CAPÍTULO 7
Agentes para Postagens no
Instagram
Sabe aqueles profissionais que vivem de gerenciar perfis no Instagram? Você manda uma
foto da festa, da praia ou de um evento importante, e eles fazem mágica. Identificam o local,
analisam o contexto da imagem, criam uma legenda envolvente como se fossem o próprio
dono do perfil, adicionam hashtags estratégicas e, antes de postar, ainda aplicam um filtro
para deixar tudo mais atraente. Esse profissional, conhecido como social media, é essencial
para manter a presença digital afiada e engajada.
Agora, imagine que esse trabalho não precise mais ser feito por um humano. Em vez disso,
um agente inteligente entra em cena, analisando automaticamente as imagens recebidas,
gerando legendas cativantes e otimizando a postagem com as hashtags mais quentes do
momento. Ele não só entende o conteúdo da imagem, mas também aprende o estilo de
comunicação do dono do perfil, garantindo que cada post pareça natural e autêntico.
Essa é exatamente a proposta que vamos explorar neste capítulo: a criação de um agente
capaz de assumir o papel de um social media automatizado. Utilizando inteligência artificial,
processamento de imagens e geração de texto, esse agente será capaz de transformar
qualquer foto em um post profissional, sem intervenção manual. Desde o reconhecimento
do cenário até a publicação otimizada, tudo será conduzido por um sistema inteligente que
trabalha 24 horas por dia, sem descanso.
Ao longo deste capítulo, vamos entender cada peça desse quebra-cabeça e construir,
passo a passo, um agente que pode revolucionar a forma como gerenciamos conteúdos
digitais. Prepare-se para mergulhar em um dos usos mais práticos e poderosos da IA no
marketing digital e automação de redes sociais. O futuro da criação de conteúdo está aqui – e
ele é totalmente automatizado.
Vamos começar configurando nossa conta de desenvolvedor no Facebook para obter
um token de acesso ao Instagram, permitindo a conexão e a automação das postagens via
Python.
CAPÍTULO 7. AGENTES PARA POSTAGENS NO INSTAGRAM
191
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 193

AGENTES INTELIGENTES 2
7.1
FACEBOOK DEVELOPER
O primeiro passo para criar um agente automatizado para postagens no Instagram é
configurar nossa conta de desenvolvedor no Facebook. A plataforma Meta for Developers
permite a criação e gestão de aplicativos que interagem com as APIs do Instagram e do
Facebook. Com isso, podemos obter as credenciais necessárias para autenticação e envio de
conteúdos de forma automatizada. Vamos acessar o painel do Facebook Developer, registrar
um novo aplicativo e gerar um token de acesso para estabelecer a conexão entre nosso código
e a plataforma. Clique em login ou "Get Started". Entre com sua conta do Facebook.
Facebook Developer: Para configurar e obter as credenciais do Facebook acesse:
https://developers.facebook.com/
Para começar a integrar nosso agente ao Instagram, precisamos criar um novo aplicativo
na plataforma Meta for Developers. Acesse o painel de aplicativos e clique no botão verde
Criar aplicativo, conforme destacado na Figura 7.1. Esse passo é essencial para obter as
credenciais que permitirão a autenticação e a comunicação entre nosso código e a API do
Instagram.
Escolha um nome para o app. Eu escolhi aqui agente_feed, mas você pode definir
qualquer nome que faça sentido para o seu projeto. Esse nome será exibido na sua lista de
aplicativos dentro do painel do Meta for Developers e servirá como um identificador para
futuras configurações. Além disso, informe um e-mail de contato válido, pois ele será utilizado
para comunicações sobre a conta e eventuais notificações do Facebook. Após preencher os
CAPÍTULO 7. AGENTES PARA POSTAGENS NO INSTAGRAM
192
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 194

AGENTES INTELIGENTES 2
Figura 7.1: Criando um novo aplicativo no Meta for Developers.
campos, clique no botão Avançar, conforme destacado na Figura 7.2, para prosseguir com a
criação do aplicativo.
Figura 7.2: Definindo o nome do aplicativo e o e-mail de contato.
Nesta etapa, é necessário definir o caso de uso do aplicativo. Como nosso objetivo
é integrar a API do Instagram para automação de postagens, devemos selecionar a opção
Outro, conforme indicado na Figura 7.3. Essa escolha permite que o aplicativo tenha acesso
a permissões específicas, como publicação de conteúdos e gerenciamento de contas. Após
marcar a opção correta, clique no botão Avançar para continuar com a configuração.
CAPÍTULO 7. AGENTES PARA POSTAGENS NO INSTAGRAM
193
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 195

AGENTES INTELIGENTES 2
Figura 7.3: Selecionando o caso de uso do aplicativo.
Agora, escolha o tipo do aplicativo. Para permitir a automação das postagens no Instagram,
selecione a opção Empresa, conforme destacado na Figura 7.4. Esse tipo de aplicativo oferece
acesso a permissões avançadas, como gerenciamento de contas comerciais, publicação de
conteúdos e integração com APIs empresariais. Após selecionar Empresa, clique no botão
Avançar para prosseguir com a configuração.
Figura 7.4: Selecionando o tipo de aplicativo como Empresa.
Por fim, confirme os detalhes do aplicativo e finalize a criação. O nome agente_feed já foi
definido anteriormente, assim como o e-mail de contato associado ao aplicativo. Caso não
esteja criando um aplicativo vinculado a um portfólio empresarial, mantenha essa opção
desmarcada. Agora, clique no botão verde Criar aplicativo, conforme mostrado na Figura
7.5, para concluir essa etapa e prosseguir para a configuração das permissões e credenciais
necessárias.
CAPÍTULO 7. AGENTES PARA POSTAGENS NO INSTAGRAM
194
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 196

AGENTES INTELIGENTES 2
Figura 7.5: Finalizando a criação do aplicativo.
Confirmando a criação do aplicativo, você receberá a tela da Figura abaixo.
Muito
importante, não clique em configurar o Instagram ao seu aplicativo do agente ainda, vamos
primeiro adicionar o login do Facebook.
Login do Facebook
Vamos configurar primeiro o Login para o Facebook, permitindo que o aplicativo tenha
acesso autenticado às contas empresariais vinculadas. Para isso, clique no botão Configurar
CAPÍTULO 7. AGENTES PARA POSTAGENS NO INSTAGRAM
195
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 197

AGENTES INTELIGENTES 2
dentro da seção Login do Facebook para Empresas, conforme mostrado na Figura 7.6.
Após acessar a configuração, mantenha as opções no estado padrão e não altere os campos
de OAuth. Isso garante que o fluxo de autenticação funcione corretamente sem exigir ajustes
manuais. Por fim, clique no botão Salvar alterações para confirmar as configurações.
Figura 7.6: Configurando o Login do Facebook para Empresas.
clique na aba Permissões e recursos, conforme indicado na Figura 7.7. Veja que aqui
existe uma série de permissões já ativas para o Instagram. Essas permissões permitem
que o aplicativo gerencie eventos e publique conteúdos em nome da conta conectada. Para
acessar essa configuração, Caso precise de acesso avançado a mais permissões, clique no
botão Avançar para prosseguir com a solicitação de análise do aplicativo.
Figura 7.7: Gerenciando permissões e recursos do aplicativo.
CAPÍTULO 7. AGENTES PARA POSTAGENS NO INSTAGRAM
196
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 198

AGENTES INTELIGENTES 2
7.2
OBTENDO O TOKEN DE ACESSO
Vamos agora acessar o Explorador da Graph API, uma ferramenta essencial para testar
e autenticar chamadas à API do Instagram. No menu superior, clique na aba Ferramentas e
selecione a opção Explorador da Graph API, conforme indicado na Figura 7.8. Essa interface
permitirá que você gere tokens de acesso temporários, teste requisições à API e depure
respostas, garantindo que seu agente esteja configurado corretamente antes da automação
definitiva.
Figura 7.8: Acessando o Explorador da Graph API.
Aqui é preciso ativar duas permissões no passo (1) e (2) e depois gerar o token de
acesso no passo (3). Primeiro, selecione a opção instagram_basic, que concede acesso
às informações básicas da conta do Instagram. Em seguida, adicione a permissão insta-
gram_content_publish, que permitirá ao agente publicar conteúdos automaticamente. Após
selecionar as permissões corretas, clique no botão azul Generate Access Token para gerar o
token de acesso, conforme mostrado na Figura 7.9. Esse token será utilizado para autenticar
as requisições da API e garantir que o agente tenha os acessos necessários para operar
corretamente.
Nesta etapa, selecione a opção Aceitar todos(as) Contas do Instagram atuais e no
futuro, conforme indicado na Figura 7.10. Isso garante que o agente terá acesso contínuo às
contas do Instagram associadas ao aplicativo, permitindo a automação das postagens sem
necessidade de reautorização para contas futuras. Após selecionar essa opção, clique em
Salvar para confirmar as permissões e finalizar o processo de integração.
Com as permissões concedidas, o próximo passo é copiar o token de acesso gerado.
Localize o campo Token de acesso, clique no botão de cópia e armazene-o com segurança.
CAPÍTULO 7. AGENTES PARA POSTAGENS NO INSTAGRAM
197
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 199

AGENTES INTELIGENTES 2
Figura 7.9: Ativando permissões e gerando o token de acesso.
Esse token será necessário para autenticar as requisições na API do Instagram. Caso o token
expire, será preciso repetir esse processo para obter um novo. A Figura 7.10 ilustra essa
sequência de passos essenciais para garantir a comunicação do agente com a plataforma.
Figura 7.10: Concedendo permissões e copiando o token de acesso.
Quando copiar o token de acesso no seu arquivo .env para que ele possa ser utilizado
na autenticação das requisições da API do Instagram. No exemplo da Figura 7.11, a variável
INSTAGRAM_API_KEY armazena o token de acesso gerado anteriormente, garantindo que
o agente consiga se conectar e executar ações como publicação de posts e gerenciamento
de conteúdos. Daqui a pouco vamos preencher o INSTAGRAM_ACCOUNT_ID com o ID
da conta do Instagram associada, permitindo que as interações ocorram de forma correta e
segura. (Não se preocupe esse não é mais o meu Token de acesso. kkk)
CAPÍTULO 7. AGENTES PARA POSTAGENS NO INSTAGRAM
198
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 200

AGENTES INTELIGENTES 2
Figura 7.11: Armazenando o token de acesso e o ID da conta do Instagram.
7.3
OBTENDO O INSTAGRAM ACCOUNT ID
Para que o agente consiga postar no Instagram de forma automatizada, é necessário
obter o Instagram_Account_ID, que identifica a conta vinculada à API. Para isso, acesse o
Accounts Center da Meta e localize o ID associado ao seu perfil empresarial.
Accounts Center: Acesse o accounts center da meta para obter o ID do seu Instagram:
https://accountscenter.meta.com/profiles
Figura 7.12: Enter Caption
Após selecionar o perfil do Instagram, observe a URL no topo do navegador. O número
CAPÍTULO 7. AGENTES PARA POSTAGENS NO INSTAGRAM
199
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 201

AGENTES INTELIGENTES 2
destacado, como mostrado na Figura 7.13, é o Instagram_Account_ID. Copie esse número,
pois ele será essencial para autenticar as requisições da API e permitir que o agente publique
postagens automaticamente.
Agora, abra o arquivo .env e adicione esse ID à variável INSTAGRAM_ACCOUNT_ID,
garantindo que o sistema saiba exatamente em qual conta do Instagram as postagens devem
ser feitas. Seu arquivo .env deve conter algo como:
INSTAGRAM_API_KEY="SEU_TOKEN_DE_ACESSO"
INSTAGRAM_ACCOUNT_ID="SEU_ID_COPIADO"
Com essas credenciais configuradas, seu agente está pronto para começar a enviar
postagens ao Instagram via Python, automatizando completamente o processo e eliminando a
necessidade de interações manuais.
Figura 7.13: Copie o Instagram_Account_ID da URL e adicione ao arquivo .env.
7.4
PROJETO DE POSTS PARA O INSTAGRAM
Para facilitar a implementação dos conceitos abordados neste capítulo, disponibilizamos o
código completo do projeto Python para os agentes de postagem. Faça o download do arquivo
no link abaixo e explore todas as funcionalidades discutidas ao longo do texto.
CÓDIGO DISPONÍVEL: Acesse o projeto completo em:
https://bit.ly/sandeco-instagram-post
CAPÍTULO 7. AGENTES PARA POSTAGENS NO INSTAGRAM
200
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 202

AGENTES INTELIGENTES 2
7.5
CRIANDO O AGENTE DE POSTAGEM
Imagine que você contratou um social media para gerenciar suas postagens no Instagram.
Esse profissional recebe suas fotos, pensa em uma legenda criativa, adiciona hashtags
estratégicas e publica no momento certo para maximizar o engajamento. Agora, substitua
esse profissional por um agente de IA que faz exatamente o mesmo trabalho, mas de forma
automatizada e instantânea.
Nos bastidores, esse agente analisa a imagem, interpreta o contexto, e escreve uma
legenda com o tom desejado. Se você quiser algo mais divertido e sarcástico, ele adapta o texto,
incluindo gírias e até zoeiras. Além disso, ele pesquisa e seleciona hashtags relevantes para
aumentar o alcance da postagem. Tudo isso acontece sem intervenção manual, funcionando
como um social media incansável, disponível 24/7 para gerenciar seu conteúdo digital.
Com essa automação, você elimina o trabalho repetitivo e garante que suas postagens
sempre tenham um toque profissional e envolvente, sem precisar de um humano por trás do
processo.
O projeto que você baixou já vem com a classe InstagramPostCrew, responsável por criar
postagens automáticas para o Instagram usando CrewAI. O agente tem uma personalidade
brincalhona, cheia de zoeiras comigo (Sandeco), mas você pode personalizar e dar a sua
própria identidade às postagens.
Aqui estão os métodos públicos disponíveis e o que cada um deles faz:
- kickoff(inputs): Inicia o processo de criação da postagem. Você fornece os insumos,
como descrição da imagem e preferências de escrita, e o agente gera uma legenda completa
com hashtags.
Com essa classe, basta chamar o método kickoff e deixar o agente transformar qualquer
ideia em uma postagem pronta para o Instagram.
Para instanciar a InstagramPostCrew e gerar uma legenda personalizada para o Ins-
tagram, primeiro criamos um objeto da classe e depois chamamos o método kickoff. Esse
método recebe um dicionário com os insumos necessários para a geração do texto, como a
descrição da imagem, o estilo desejado e o tom da legenda.
No código abaixo, os parâmetros definem que a legenda será divertida, sarcástica e
descontraída, escrita na terceira pessoa do singular e com um tom positivo. Além disso, o
tamanho é ajustado para cerca de 200 palavras, o gênero do texto é masculino, e o uso de
emojis e gírias está ativado. Com isso, o agente de IA criará uma legenda espontânea e cheia
de zoeiras, adaptada ao contexto da imagem fornecida.
CAPÍTULO 7. AGENTES PARA POSTAGENS NO INSTAGRAM
201
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 203

AGENTES INTELIGENTES 2
crew = InstagramPostCrew ()
post_caption = crew.kickoff(inputs ={"caption": evocaption ,
"describe": "Uma descrição da imagem",
"estilo": "Divertido , Alegre , Sarcástico e descontraído",
"pessoa": "Terceira
pessoa do singular",
"sentimento": "Positivo",
"tamanho":"200
palavras",
"genero":"Masculino",
"emojs":"sim",
"girias":"sim"
})
"""
IMPORTANTE
evocaption: texto que o usuário enviou
junto com a imagem
describe: descrição que vamos
gerar
usando o GPT
para
descrever a imagem
mais pra frente
"""
InstagramPostService
Para facilitar a sua vida, eu criei a classe InstagramPostService, que já está dentro do
projeto que você baixou. Ela cuida automaticamente da publicação de imagens no Instagram
usando a API oficial. Abaixo estão os métodos públicos disponíveis e o que cada um deles faz:
- post_image(image_url, caption): Faz todo o processo de postagem no Instagram.
Primeiro, cria um contêiner de mídia com a imagem e a legenda, depois publica o post na
conta vinculada. Retorna o ID do post publicado ou None se algo der errado.
Com essa classe, você não precisa se preocupar com as chamadas diretas à API, basta
chamar o método certo e deixar o código fazer o trabalho pesado.
Veja que para postar você precisa passar a URL. Isso porque O Instagram só permite
postar uma imagem pela API se a imagem estiver com um endereço web válido na internet.
Para isso, você precisa hospedar a imagem em um serviço de armazenamento em nuvem,
como o Imgur.
CAPÍTULO 7. AGENTES PARA POSTAGENS NO INSTAGRAM
202
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 204

AGENTES INTELIGENTES 2
Figura 7.14: Enter Caption
7.6
SUA IMAGEM NA CLOUD IMGUR
O Imgur é uma plataforma online para hospedagem e compartilhamento de imagens na
nuvem. Ele permite que você faça o upload de fotos e obtenha um link direto, tornando-se uma
solução prática para armazenar e compartilhar imagens sem precisar de um servidor próprio.
Além disso, o Imgur é amplamente utilizado para integrar imagens em sites, fóruns e redes
sociais, garantindo que as imagens estejam sempre acessíveis a partir de um URL válido, algo
essencial para automações como a publicação de postagens via API do Instagram.
Figura 7.15: Hospedando uma imagem no Imgur para obter um link válido.
CAPÍTULO 7. AGENTES PARA POSTAGENS NO INSTAGRAM
203
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 205

AGENTES INTELIGENTES 2
Imgur:
https://www.imgur.com
Para integrar o Imgur ao projeto e permitir o upload de imagens via API, você precisa
obter as credenciais da sua conta. A Figura 7.16 mostra o passo a passo para acessar o
Client ID e o Client Secret, que serão usados para autenticação no sistema.
Primeiro, logue com sua conta Google, clique em Settings no menu lateral para acessar
as configurações da conta. Em seguida, selecione a opção Applications para visualizar os
aplicativos criados. Localize seu aplicativo na lista e copie o valor do Client ID. Caso precise
de uma nova chave secreta, clique em generate new secret para gerar um novo Client Secret.
Copie ambos os valores e cole no arquivo .env, utilizando as variáveis IMGUR_CLIENT_ID e
IMGUR_CLIENT_SECRET. Essas credenciais são essenciais para autenticar as requisições
e permitir o envio de imagens ao Imgur diretamente pelo código.
Figura 7.16: Obtendo as credenciais da API do Imgur e adicionando ao .env.
A Classe ImageUploader
A classe ImageUploader já está incluída no projeto que você baixou e é responsável por
enviar imagens ao Imgur. Abaixo estão os métodos públicos disponíveis e suas funções:
• upload_from_path(image_path): Envia uma imagem a partir de um arquivo local e
retorna um dicionário contendo o ID, a URL e o deletehash da imagem enviada.
• upload_from_base64(image_base64): Converte uma imagem codificada em Base64
para um arquivo temporário e faz o upload, retornando os mesmos dados da função
anterior.
• delete_image(deletehash): Remove uma imagem do Imgur usando o deletehash
CAPÍTULO 7. AGENTES PARA POSTAGENS NO INSTAGRAM
204
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 206

AGENTES INTELIGENTES 2
gerado no upload. Retorna True se a exclusão for bem-sucedida e False em caso de
erro.
Essa classe encapsula toda a comunicação com a API do Imgur, tornando o processo de
upload e exclusão de imagens simples e eficiente.
Para fazer o upload de uma imagem local para o Imgur, primeiro defina o caminho da
imagem que deseja enviar. No exemplo abaixo, o arquivo sandeco.png está na mesma pasta
do código, então usamos os.path.join para garantir a compatibilidade do caminho.
Em seguida, instancie a classe ImageUploader, que gerencia o envio de imagens para a
nuvem. Com o método upload_from_path, a imagem é carregada e o retorno contém um
dicionário com informações sobre o arquivo enviado. Para obter a URL pública da imagem e
usá-la posteriormente, basta acessar a chave "url" do dicionário retornado.
Por fim, a URL gerada é exibida no terminal com o print(url), permitindo que você a
utilize na publicação do post no Instagram.
import os
from
image_uploader
import
ImageUploader
image = os.path.join(’sandeco.png’)
upload = ImageUploader ()
image_cloud = upload. upload_from_path (image)
url = image_cloud[’url’]
print(url)
Veja que minha imagem está no link https://i.imgur.com/QZXVhun.jpeg
Excluindo a imagem do Imgur
Para excluir uma imagem enviada ao Imgur, utilize o método delete_image da classe
ImageUploader. Esse método requer o deletehash, que é retornado no momento do upload
da imagem e serve como uma chave de autenticação para remoção do arquivo.
No código abaixo, utilizamos um dicionário contendo as informações da imagem enviada,
incluindo seu deletehash. Passamos essa chave para o método delete_image, que retorna
True se a exclusão for bem-sucedida ou False em caso de erro. Se a remoção for concluída
com sucesso, exibimos uma mensagem confirmando a exclusão da imagem.
from
image_uploader
import
ImageUploader
# Informações da imagem
enviada
anteriormente
# Exclui a imagem
usando o deletehash
if upload.delete_image(image_cloud[’deletehash ’]):
CAPÍTULO 7. AGENTES PARA POSTAGENS NO INSTAGRAM
205
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 207

AGENTES INTELIGENTES 2
print("Imagem
excluída com
sucesso!")
else:
print("Falha ao excluir a imagem.")
7.7
COMBINANDO O UPLOAD E A POSTAGEM NO INSTAGRAM
Agora vamos juntar tudo com as classes ImageUploader e InstagramPostService para
enviar uma imagem ao Imgur, obter sua URL e publicá-la no Instagram. O código a seguir
executa todo esse processo automaticamente.
Primeiro, carregamos a imagem sandeco.png e utilizamos o ImageUploader para fazer
o upload ao Imgur. O retorno inclui a URL da imagem, que será usada para publicação. Em
seguida, instanciamos a classe InstagramPostService e definimos a legenda da postagem.
Ao chamar o método post_image, a imagem é enviada ao Instagram.
Após a publicação, o código remove a imagem do Imgur usando o deletehash obtido no
upload. O sucesso ou falha de cada etapa é indicado por mensagens no terminal.
import os
from
image_uploader
import
ImageUploader
from
instagram_post_service
import
InstagramPostService
# Upload da imagem
para o Imgur
image = os.path.join(’sandeco.png’)
upload = ImageUploader ()
image_cloud = upload. upload_from_path (image)
url = image_cloud[’url’]
# Publicação da imagem no Instagram
instagram = InstagramPostService ()
caption = """Olá, eu sou o Sandeco. Essa foto foi
postada
pela API do Instagram
com minhas
classes:
InstagramPostService e ImageUploader .
"""
if instagram.post_image(url , caption):
print("Imagem
postada
com
sucesso no Instagram!")
else:
print("Falha ao postar a imagem no Instagram.")
# Exclui a imagem do Imgur após a postagem
if upload.delete_image(image_cloud["deletehash"]):
print("Imagem
excluída com
sucesso!")
CAPÍTULO 7. AGENTES PARA POSTAGENS NO INSTAGRAM
206
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 208

AGENTES INTELIGENTES 2
else:
print("Falha ao excluir a imagem.")
Veja a postagem
Olha só a postagem como ficou e como é fácil postar uma imagem via API com as classes
InstagramPostService e ImageUploader. Clique aqui para conferir
https://www.instagram.com/p/DF01_ioJr09/ e aproveita para me seguir. :)
7.8
POSTAGEM PROFISSIONAL AUTOMATIZADA
Nesta seção, vamos explorar em detalhes o fluxo do código que automatiza a postagem
profissional no Instagram. No projeto, a classe InstagramSend centraliza esse processo, e
seu método send_instagram executa uma sequência de etapas essenciais para transformar
a imagem original em uma postagem visualmente aprimorada, estilizada com moldura e
acompanhada de uma legenda gerada automaticamente antes de ser publicada.
CAPÍTULO 7. AGENTES PARA POSTAGENS NO INSTAGRAM
207
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 209

AGENTES INTELIGENTES 2
O fluxo do código inicia com a aplicação de um filtro na imagem original para realçar
cores, contrastes e detalhes visuais. Em seguida, a imagem é enviada para o Imgur, onde é
hospedada temporariamente para que o sistema possa acessá-la via URL. Após o upload, um
agente inteligente analisa a imagem e gera uma descrição detalhada do conteúdo, permitindo
que a legenda seja construída com base no contexto visual da foto.
Como a imagem original ainda não contém a moldura desejada, ela é removida do Imgur
e processada novamente, dessa vez com a adição de uma borda estilizada. Com a moldura
aplicada, a nova versão da imagem é reenviada para o Imgur, garantindo que a postagem
final tenha um aspecto mais profissional.
A próxima etapa envolve a geração da legenda. Para isso, um agente baseado no CrewAI
cria um texto único e personalizado, levando em conta não apenas a descrição da imagem,
mas também um estilo de comunicação divertido, sarcástico e envolvente. Esse agente
combina diferentes insumos, como a análise visual da foto e preferências de estilo, para
construir uma legenda que se alinha ao tom da conta no Instagram.
Antes da publicação, um bloco de informações é anexado à legenda, explicando que todo
o processo foi conduzido por um agente inteligente. Esse bloco destaca as principais ações
realizadas, desde a análise da imagem até a postagem final.
Por fim, a imagem é publicada no Instagram por meio da API, garantindo que a postagem
esteja pronta para engajamento. Após a publicação, a versão final da imagem é excluída
do Imgur e o arquivo local é removido, evitando o acúmulo desnecessário de arquivos
temporários.
Agora que entendemos o fluxo geral, vamos analisar o código em detalhes, explicando
cada uma dessas etapas e como elas se conectam para tornar a postagem automatizada e
profissional.
import os
from
crew_post_instagram
import
InstagramPostCrew
from
instagram_post_service
import
InstagramPostService
from
image_uploader
import
ImageUploader
from
describe_image_tool
import
ImageDescriber
from
border
import
ImageWithBorder
from
filter
import
FilterImage
Agora definimos a classe InstagramSend, que contém o método estático send_instagram.
Esse método recebe o caminho da imagem e a legenda inicial como parâmetros e executa
todas as etapas necessárias para processar e postar a imagem.
CAPÍTULO 7. AGENTES PARA POSTAGENS NO INSTAGRAM
208
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 210

AGENTES INTELIGENTES 2
class
InstagramSend:
@staticmethod
def
send_instagram (image_path , caption):
border_image = "moldura.png"
O primeiro processamento na imagem ocorre com a aplicação de um filtro. A classe
FilterImage ajusta contraste, brilho e outras melhorias visuais para deixar a imagem mais
atraente antes do upload.
# Aplica o filtro na imagem
image_path = FilterImage.process(image_path)
Depois que a imagem foi ajustada, precisamos enviá-la para um serviço de hospedagem
de imagens, no caso, o Imgur. A classe ImageUploader faz esse envio e retorna um dicionário
com informações sobre a imagem, como URL e um código de exclusão (deletehash).
# Envia a imagem
para o Imgur
image = ImageUploader (). upload_from_path (image_path)
Agora, utilizamos um agente inteligente para descrever a imagem automaticamente. A
classe ImageDescriber analisa o conteúdo visual da imagem e gera uma descrição textual,
que servirá como insumo para a criação da legenda.
# Descreve a imagem
usando GPT -4o-mini
describe = ImageDescriber .describe(image[’url’])
Como essa imagem ainda não contém a moldura azul específica do projeto, removemos
a versão enviada e aplicamos a borda antes de enviá-la novamente ao Imgur.
# Apaga a imagem
original do Imgur
ImageUploader ().delete_image (image["deletehash"])
# Aplica a borda na imagem
image = ImageWithBorder . create_bordered_image (
border_path=border_image ,
image_path=image_path ,
output_path=image_path
)
# Envia a nova
imagem com borda
para o Imgur
image = ImageUploader (). upload_from_path (image_path)
CAPÍTULO 7. AGENTES PARA POSTAGENS NO INSTAGRAM
209
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 211

AGENTES INTELIGENTES 2
Agora que temos a imagem final pronta para postagem, precisamos criar uma legenda
envolvente. Para isso, usamos a classe InstagramPostCrew, que executa um agente baseado
no CrewAI para gerar legendas engraçadas e interativas.
# Cria a legenda do post com
agentes do CrewAI
crew = InstagramPostCrew ()
caption = crew.kickoff(inputs ={"caption": caption ,
"describe": describe ,
"estilo": "Divertido , Alegre , Sarcástico e descontraído",
"pessoa": "Terceira
pessoa do singular",
"sentimento": "Positivo",
"tamanho":"200
palavras",
"genero":"Masculino",
"emojs":"sim",
"girias":"sim"
})
Depois que a legenda é gerada, adicionamos um bloco de informações ao final, explicando
que todo o processo foi automatizado e destacando as ações realizadas pelo agente.
# Adicionando
informações ao final da legenda
gerada
pelo
CrewAI
caption = caption + "\n\n-------------------"
caption = caption + "\n\n Essa
postagem
foi toda
realizada
por
um agente
inteligente"
caption = caption + "\n O agente
desempenhou as seguintes ações:
"
caption = caption + "\n 1 - Identificação e reconhecimento do
ambiente da fotografia"
caption = caption + "\n 2 - Aplicação de filtros de contraste e
autocorreção da imagem"
caption = caption + "\n 3 - Aplicação de moldura
azul
específica
"
caption = caption + "\n 4 - Definição de uma
persona
divertida ,
Alegre , Sarcástica e descontraída"
caption = caption + "\n 5 - Criação da legenda
com base na
imagem e na persona"
caption = caption + "\n 6 - Postagem no feed do Instagram"
caption = caption + "\n 7 - Técnica
ensinada no livro
Agentes
Inteligentes 2 - CrewAI
Intermediário"
Por fim, a imagem com a moldura é postada no Instagram usando a classe Instagram-
PostService. Depois da postagem, removemos a imagem do Imgur e apagamos o arquivo
localmente para evitar acúmulo desnecessário de imagens no sistema.
CAPÍTULO 7. AGENTES PARA POSTAGENS NO INSTAGRAM
210
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 212

AGENTES INTELIGENTES 2
# Postando a imagem no Instagram
insta_post = InstagramPostService ()
insta_post.post_image(image[’url’], caption)
# Apaga a imagem com
moldura do Imgur
ImageUploader ().delete_image (image["deletehash"])
# Verifica se o arquivo
existe e apaga
localmente
if os.path.exists(image[’image_path ’]):
os.remove(image[’image_path ’])
print(f"A imagem {image[’image_path ’]} foi
apagada
com
sucesso.")
Com isso, o agente realiza todo o fluxo automaticamente: aplica filtros, gera descrições,
cria uma legenda personalizada e publica a imagem no Instagram. Esse processo elimina a
necessidade de intervenção manual, tornando a automação completa e eficiente.
7.9
COMBINANDO TUDO COM A EVOAPI
Agora vamos integrar o EvolutionAPI com o Instagram. Crie um grupo no qual apenas
você e seu agente estarão presentes. Esse será o ambiente onde você enviará uma imagem
acompanhada de uma legenda simples, e o agente cuidará do restante do processo de
postagem.
O código abaixo implementa um servidor Flask para capturar as mensagens enviadas ao
grupo. A API recebe os dados em formato JSON e processa a mensagem utilizando a classe
MessageSandeco, que extrai o conteúdo e o tipo da mensagem recebida. Caso a mensagem
contenha uma imagem, o código converte o arquivo Base64 para um formato utilizável por
meio da classe ImageDecodeSaver.
Se a mensagem for enviada dentro do grupo correto (identificado pelo group_id), a
imagem é processada e enviada ao Instagram usando a classe InstagramSend. Essa classe
executa todo o fluxo de filtragem, bordas, geração de legenda e publicação da imagem.
Por fim, o servidor Flask roda na porta 5000, ouvindo conexões e processando mensagens
recebidas para garantir que o agente funcione em tempo real.
CAPÍTULO 7. AGENTES PARA POSTAGENS NO INSTAGRAM
211
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 213

AGENTES INTELIGENTES 2
# app.py
from
message_sandeco
import
MessageSandeco
from
image_decode_save
import
ImageDecodeSaver
from
instagram_send
import
InstagramSend
from
flask
import Flask , request
app = Flask(__name__)
@app.route("/messages -upsert", methods =[’POST ’])
def
webhook ():
data = request.get_json ()
print(data)
msg = MessageSandeco (data)
texto = msg.get_text ()
if msg.scope == MessageSandeco .SCOPE_GROUP:
print(f"Grupo: {msg.group_id}")
if str(msg.group_id) == " 120337....54391 ":
if msg.message_type == msg.TYPE_IMAGE:
image_path = ImageDecodeSaver .process(msg.image_base64)
InstagramSend . send_instagram (image_path , texto)
return ""
if __name__ == "__main__":
app.run(host="0.0.0.0", port =5000 , debug=True)
CAPÍTULO 7. AGENTES PARA POSTAGENS NO INSTAGRAM
212
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 214

AGENTES INTELIGENTES 2
7.10
EXERCÍCIOS
1. Explique, com suas próprias palavras, qual o papel da API do Instagram dentro do
processo de automação de postagens e por que é necessário obter um Token de
Acesso.
2. No código apresentado, utilizamos o Imgur para armazenar imagens antes de publicá-
las no Instagram. Explique por que essa etapa é necessária e como o agente recupera
a URL da imagem para postagem.
3. O que acontece se o deletehash de uma imagem não for utilizado para excluir a imagem
do Imgur após a postagem? Qual seria o impacto disso em longo prazo?
4. Modifique o código da classe InstagramPostCrew para que o agente possa gerar
legendas com um estilo mais formal e profissional, removendo o tom sarcástico e
descontraído. Teste a geração de uma nova legenda e compare os resultados.
5. A API do Instagram impõe algumas restrições de taxa de requisição. Pesquise e explique
quais são essas restrições e como elas podem impactar um sistema de postagens
automatizadas.
6. No código, a classe ImageWithBorder é responsável por adicionar uma moldura à
imagem antes da postagem. Implemente uma modificação que permita escolher entre
diferentes estilos de moldura no momento da postagem.
7. No fluxo atual, a imagem é enviada ao Imgur duas vezes: uma sem moldura e outra
com moldura. Como esse processo poderia ser otimizado para reduzir o número de
uploads sem comprometer a funcionalidade?
8. Adapte o código para que o agente permita o envio de vídeos curtos ao Instagram, em
vez de apenas imagens. Quais modificações seriam necessárias na classe Instagram-
PostService para suportar esse novo formato de mídia?
9. Explique como funciona o uso de CrewAI para gerar legendas personalizadas para cada
postagem. Como o agente aprende e se adapta ao estilo desejado para as legendas?
10. Crie um novo método na classe InstagramSend que permita programar postagens
futuras. O método deve receber um horário e agendar a publicação da imagem automa-
ticamente nesse horário. Teste sua implementação e discuta os desafios encontrados.
CAPÍTULO 7. AGENTES PARA POSTAGENS NO INSTAGRAM
213
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 215

AGENTES INTELIGENTES 2
CAPÍTULO 8
Agentes CrewAI no Telegram
O Telegram é uma das plataformas de mensagens mais versáteis e poderosas disponíveis
atualmente, oferecendo uma API robusta que permite a criação de bots inteligentes para
diversas finalidades. Desde assistentes virtuais até sistemas automatizados de atendimento,
a possibilidade de integrar agentes do CrewAI ao Telegram abre um leque de oportunidades
para automação e interação inteligente. Com essa abordagem, é possível desenvolver bots
capazes de entender comandos, processar informações e gerar respostas dinâmicas de forma
eficiente.
Ao longo deste capítulo, exploraremos como criar um agente utilizando CrewAI para
atuar dentro do Telegram, seja para responder perguntas, fornecer informações ou até mesmo
executar tarefas automatizadas com base nos comandos recebidos. Vamos entender como
conectar um bot à API do Telegram, estruturar fluxos de conversa e integrar o processamento
de linguagem natural para tornar as interações mais naturais e contextuais. Além disso,
veremos como configurar o ambiente necessário para que o agente funcione de maneira
autônoma e escalável.
O objetivo principal deste capítulo é fornecer uma base sólida para a criação de agentes
inteligentes no Telegram, permitindo que você implemente soluções personalizadas para
diferentes necessidades. Ao final, você será capaz de estruturar um agente que interage
com os usuários, responde de forma dinâmica e pode ser adaptado para diversas aplicações,
desde atendimento automatizado até suporte técnico ou interações criativas e personalizadas.
CAPÍTULO 8. AGENTES CREWAI NO TELEGRAM
214
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 216

AGENTES INTELIGENTES 2
8.1
CRIANDO UM BOT NO TELEGRAM
O BotFather é a ferramenta oficial do Telegram para a criação e gerenciamento de bots na
plataforma. Ele funciona como um assistente centralizado, permitindo que os desenvolvedores
registrem novos bots, obtenham tokens de autenticação e configurem diversas opções, como
nome, descrição e comandos personalizados. Para criar um bot, basta iniciar uma conversa
com o BotFather, enviar o comando /newbot e seguir as instruções fornecidas. Ao final do
processo, o bot estará registrado e pronto para ser integrado a aplicações externas utilizando
a API do Telegram.
BotFather
Vamos chamar o BotFather, que é por onde criamos e gerenciamos bots no Telegram.
Para isso, acesse web.telegram.org e faça login na sua conta. Em seguida, use a barra de
pesquisa no topo da tela para buscar por BotFather, conforme mostrado na Figura 8.1. O
BotFather oficial possui um selo de verificação azul ao lado do nome, garantindo que você
está acessando o bot correto. Ao encontrá-lo, clique sobre o chat para iniciar a configuração
do seu bot.
Figura 8.1: Acessando o BotFather no Telegram Web.
Para criar um bot no Telegram, é necessário interagir com o BotFather, que gerencia a
criação e configuração de bots na plataforma. Primeiro, abra uma conversa com o BotFather
no Telegram e digite o comando /help, conforme mostrado na Figura 8.2. Esse comando
exibe a lista de comandos disponíveis para gerenciar bots. Em seguida, envie o comando
/newbot para iniciar o processo de criação de um novo bot. O BotFather guiará você pelos
CAPÍTULO 8. AGENTES CREWAI NO TELEGRAM
215
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 217

AGENTES INTELIGENTES 2
próximos passos, solicitando um nome e um nome de usuário único para o bot. Após concluir
essa etapa, um token de autenticação será gerado, permitindo a integração do bot com APIs
externas.
Figura 8.2: Usando o BotFather para criar um novo bot no Telegram.
Após enviar o comando /newbot no BotFather, o próximo passo é escolher um nome
para o seu bot. O BotFather solicitará que você defina um nome amigável, que será exibido
para os usuários nas conversas, conforme mostrado na Figura 8.3. Esse nome pode ser
qualquer um de sua preferência, sem necessidade de ser único. No exemplo da imagem,
escolhemos MeuCrewAIBot. Após digitar o nome desejado, pressione Enter ou toque no
botão de envio para confirmar. Em seguida, o BotFather pedirá que você defina um nome de
usuário único para o bot, que precisa terminar com "_bot".
Figura 8.3: Definindo um nome para o bot no BotFather.
Depois de definir o nome do bot, o BotFather solicitará a criação de um username único
para ele. Esse nome de usuário é essencial para identificar o bot dentro do Telegram e deve
CAPÍTULO 8. AGENTES CREWAI NO TELEGRAM
216
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 218

AGENTES INTELIGENTES 2
terminar obrigatoriamente com "_bot". Como mostrado na Figura 8.4, um exemplo válido seria
meu_crewai_bot.
O nome de usuário deve ser único na plataforma, ou seja, se o nome escolhido já estiver
em uso, o BotFather pedirá que você tente outro. Para garantir a disponibilidade, escolha um
nome criativo que represente bem a função do seu bot. Após digitar o username desejado,
pressione Enter ou toque no botão de envio para confirmar.
Se o nome for aceito, o BotFather seguirá para a próxima etapa e fornecerá o token de
autenticação, que será usado para conectar seu bot ao código do CrewAI.
Figura 8.4: Escolhendo o nome de usuário único para o bot.
Com o bot criado, o BotFather gera um token de autenticação, que é essencial para
que seu código consiga interagir com a API do Telegram. Esse token é uma chave única que
permite o envio e recebimento de mensagens pelo bot, funcionando como uma credencial de
acesso. A Figura 8.5 mostra o processo de obtenção do token.
Copie esse token imediatamente e armazene-o em um local seguro. No projeto, ele deve
ser salvo no arquivo .env, atribuído à variável TELEGRAM_API_TOKEN. Isso garante que o
código possa acessá-lo sem a necessidade de expô-lo diretamente no script.
Se você perder esse token ou suspeitar que ele foi comprometido, pode gerá-lo novamente.
Para isso, volte ao BotFather e utilize o comando /token para gerar um novo. Caso precise
invalidar o token atual e impedir qualquer acesso não autorizado ao seu bot, utilize o comando
/revoke, que cancela a chave existente e impede que ela seja utilizada no futuro. Por isso não
se preocupe com o meu token exposto aqui, ele já foi revogado.
No próximo passo, vamos configurar o código para utilizar essa chave e conectar nosso
bot ao Telegram.
CAPÍTULO 8. AGENTES CREWAI NO TELEGRAM
217
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 219

AGENTES INTELIGENTES 2
Figura 8.5: Token de autenticação gerado pelo BotFather. Copie e cole no arquivo .env. do
projeto
8.2
TELEGRAM, INSTAGRAM E CREWAI
Para tornar a implementação dos conceitos abordados neste capítulo mais prática, dis-
ponibilizamos o código completo do projeto Python para os agentes de postagem. Assim
como no capítulo anterior, os agentes interagem pelo Telegram para automatizar a criação e
publicação de posts no Instagram. Faça o download do arquivo no link abaixo e explore todas
as funcionalidades discutidas ao longo do texto.
CÓDIGO DISPONÍVEL: Acesse o projeto completo em:
https://bit.ly/sandeco-telegram-instagram-crewai
A primeira etapa para configurar seu agente no Telegram é definir corretamente o token
de autenticação. Esse token, gerado pelo BotFather no momento da criação do bot, deve
ser copiado e colado no arquivo .env na variável TELEGRAM_API_TOKEN, garantindo que
o código possa se conectar à API do Telegram e processar mensagens automaticamente;
lembre-se de manter esse token seguro, pois ele dá acesso total ao bot, e caso precise
regenerá-lo, utilize o comando /revoke no BotFather para obter um novo.
Para iniciar o projeto, você precisa instalar todas as dependências necessárias utilizando
o gerenciador de pacotes uv. Esse comando garante que todas as bibliotecas essenciais para
CAPÍTULO 8. AGENTES CREWAI NO TELEGRAM
218
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 220

AGENTES INTELIGENTES 2
a execução do bot no Telegram, interação com a API do Instagram e uso do CrewAI estejam
corretamente instaladas no ambiente virtual.
Primeiro, inicialize o ambiente com o comando abaixo, que cria a estrutura necessária
para gerenciar pacotes com uv:
uv init
Em seguida, adicione todas as dependências do projeto de uma só vez executando:
uv add python -telegram -bot crewai python -dotenv
openai
imgurpython
requests
Esse comando instala a biblioteca python-telegram-bot, que permite a comunicação
com o Telegram, o crewai para a gestão dos agentes inteligentes, o python-dotenv para
carregar variáveis de ambiente, o openai para interagir com modelos de IA, o imgurpython
para upload de imagens no Imgur e o requests para fazer requisições HTTP.
Após a instalação, seu ambiente está pronto para rodar os scripts do projeto com todas
as dependências configuradas corretamente.
8.3
A CLASSE TELEGRAM BOT SANDECO
Para facilitar a interação com o Telegram, eu criei a classe TelegramBotSandeco, que
encapsula toda a complexidade do processamento de mensagens, imagens e comandos,
permitindo que você foque apenas na lógica do seu bot. Abaixo estão os métodos públicos
disponíveis e o que cada um deles faz:
- start(update, context): Responde ao comando /start com uma mensagem de boas-
vindas personalizada para o usuário.
- get_message(update, context): Captura mensagens de texto enviadas pelo usuário e
encaminha o conteúdo para um callback que processa a resposta.
- get_photo(update, context): Recebe imagens enviadas ao bot, salva temporariamente
o arquivo e encaminha para um callback opcional junto com a legenda, caso exista.
- get_file(update, context): Estrutura inicial para capturar arquivos do tipo Document
enviados para o bot. Pode ser expandida para manipular diferentes formatos.
- run(): Inicia o bot no modo polling, mantendo-o ativo e pronto para processar mensagens
e comandos dos usuários.
Com essa classe, basta instanciar um objeto e chamar o método run() para que o bot
CAPÍTULO 8. AGENTES CREWAI NO TELEGRAM
219
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 221

AGENTES INTELIGENTES 2
comece a funcionar imediatamente.
Instanciando o Bot
A classe TelegramBotSandeco foi projetada para simplificar a interação com o Telegram,
permitindo que o comportamento do bot seja definido dinamicamente através de funções
passadas como argumento para o construtor. Essa abordagem torna o código mais modular e
flexível, pois permite que diferentes bots sejam criados sem modificar a implementação da
classe. No momento da instanciação, o construtor recebe três parâmetros principais: callback,
que é a função responsável por processar mensagens de texto, callback_foto, que trata
imagens recebidas pelo bot, e saudacao, que define a mensagem de boas-vindas enviada ao
usuário quando o comando /start é acionado. Caso o parâmetro callback_foto não seja
fornecido, o bot ainda funcionará normalmente, mas não responderá a imagens.
A razão para passar funções como argumentos para o construtor está na necessidade de
desacoplar a lógica de processamento da estrutura do bot. Em vez de ter um código fixo que
determina como as mensagens devem ser tratadas, a classe TelegramBotSandeco apenas
fornece um mecanismo para capturar e processar interações do usuário, delegando a lógica
para funções externas definidas pelo programador. Isso facilita a reutilização do código e
permite que o mesmo bot possa ser utilizado para diferentes finalidades, apenas alterando as
funções passadas no momento da instância. Além disso, essa abordagem permite que as
funções de callback sejam adaptadas para integração com bancos de dados, APIs externas
ou outros serviços, sem a necessidade de modificar a classe principal.
Outro ponto fundamental dessa implementação é o uso de funções assíncronas (async)
para lidar com as interações do Telegram. O protocolo HTTP, utilizado para a comunicação
entre o bot e a API do Telegram, opera de forma assíncrona, o que significa que cada requisição
pode levar algum tempo para ser processada. O uso de async e await evita que o programa
fique bloqueado esperando uma resposta da API, permitindo que o bot continue executando
outras tarefas enquanto aguarda a finalização de uma requisição. Isso melhora a performance
e garante que múltiplos usuários possam interagir com o bot simultaneamente sem que uma
requisição atrase a outra.
Quando um dos métodos da classe, como get_message ou get_photo, recebe uma
mensagem, ele chama a função de callback correspondente e espera o retorno. Se essa
função retornar uma string, o bot automaticamente envia essa string como resposta ao usuário,
garantindo um fluxo contínuo de interação. Esse comportamento é particularmente útil, pois
permite que toda a lógica de resposta seja definida fora da classe, mantendo a estrutura do bot
limpa e organizada. No caso de get_photo, por exemplo, a imagem é baixada para um diretório
temporário, e a função de callback pode realizar qualquer tipo de processamento adicional
antes de gerar a resposta. Essa estrutura modular garante que a classe TelegramBotSandeco
CAPÍTULO 8. AGENTES CREWAI NO TELEGRAM
220
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 222

AGENTES INTELIGENTES 2
possa ser utilizada para diferentes aplicações sem a necessidade de modificações internas,
bastando apenas alterar os callbacks fornecidos.
A seguir, um exemplo prático de como instanciar e utilizar a classe:
from
telegram_bot_sandeco
import
TelegramBotSandeco
async def
process_text(text):
return f"Você disse: {text}"
async def
process_image(image_path , caption):
return f"Imagem
recebida: {image_path }\ nLegenda: {caption}"
bot = TelegramBotSandeco (
callback=process_text ,
callback_foto=process_image ,
saudacao="Olá! Eu sou o bot do Sandeco. Como
posso te ajudar?"
)
bot.run()
Nesse código, o bot responde automaticamente a mensagens de texto com a função
process_text, e ao receber uma imagem, ele processa o arquivo localmente e responde com
a função process_image. Além disso, a mensagem de boas-vindas definida no parâmetro
saudacao será enviada sempre que um usuário iniciar uma conversa com o bot através do
comando /start.
Vamos executar o código. No Telegram chame seu Bot. O meu aqui foi o
t.me/meu_crewai_bot. Infelizmente não dá para você acessar meu Bot diretamente por causa
do consumo de tokens da LLM. Mas acredito que você curtirá muito mais acessando o seu e
vê-lo funcionando.
CAPÍTULO 8. AGENTES CREWAI NO TELEGRAM
221
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 223

AGENTES INTELIGENTES 2
8.4
INTERAGINDO COM SEU BOT
Vamos interagir com nosso bot para verificar se ele está processando corretamente as
mensagens de texto recebidas. Na Figura ??, observamos que o usuário enviou a mensagem
"Olá Bot, como você vai?" e o bot respondeu automaticamente com "Você disse: Olá Bot,
como você vai?". Esse comportamento confirma que a função de callback para mensagens
de texto foi corretamente implementada e está retornando uma resposta formatada com o
mesmo conteúdo recebido. Esse fluxo acontece porque o método get_message captura a
entrada do usuário, envia para a função assíncrona de processamento de texto e aguarda
um retorno, que neste caso é simplesmente a repetição da mensagem original. Esse tipo de
teste inicial é essencial para garantir que o bot esteja recebendo, interpretando e respondendo
corretamente às interações antes de avançarmos para funções mais complexas, como o
processamento de imagens ou integração com IA.
8.5
ENVIANDO IMAGENS
Nesta etapa, vamos enviar uma imagem para o bot do Telegram, garantindo que ele
consiga processar corretamente arquivos enviados pelos usuários. Na Figura 8.6, vemos a
interface do Telegram permitindo que um arquivo seja arrastado e solto na área destacada para
envio rápido. O usuário selecionou uma imagem e, antes de enviá-la, pode visualizar a prévia
ao lado esquerdo da tela. Esse processo é essencial para testar se o bot está capturando
corretamente o arquivo e processando-o conforme esperado. Quando a imagem for enviada,
o bot acionará o método get_photo, que fará o download do arquivo temporariamente e o
encaminhará para a função de callback configurada no código. Esse fluxo garante que o bot
possa receber e manipular imagens, permitindo futuras integrações como análise de imagem,
legendas automáticas ou mesmo o envio direto para o Instagram.
A tela apresentada na Figura 8.7 exibe a imagem pronta para ser enviada ao bot do
Telegram. O usuário tem a opção de adicionar um texto descritivo na área de legenda antes
CAPÍTULO 8. AGENTES CREWAI NO TELEGRAM
222
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 224

AGENTES INTELIGENTES 2
Figura 8.6: Enviando uma imagem para o bot do Telegram via upload.
de pressionar o botão SEND. Esse texto, conhecido como caption, será enviado junto com
a imagem e capturado pelo método get_photo da classe TelegramBotSandeco. O bot
utilizará tanto a imagem quanto a legenda para processamento posterior, podendo interpretar
o contexto da mensagem ou repassar essa informação para outras funções do sistema. Esse
fluxo de envio de imagens com caption é essencial para a interação estruturada entre o
usuário e o agente, permitindo maior contexto nas respostas automáticas.
Figura 8.7: Confirmação do envio da imagem com legenda no Telegram.
CAPÍTULO 8. AGENTES CREWAI NO TELEGRAM
223
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 225

AGENTES INTELIGENTES 2
A Figura 8.8 mostra que a imagem enviada pelo usuário foi processada com sucesso
pelo bot. O arquivo foi salvo no diretório temporário do sistema, e a legenda associada
à imagem foi capturada corretamente. O método process_image foi executado conforme
esperado, retornando uma mensagem formatada contendo o caminho do arquivo e a legenda
enviada. Esse retorno confirma que a integração entre o bot e o processamento de mídia
está funcionando adequadamente, garantindo que a imagem possa ser utilizada nas etapas
seguintes do fluxo automatizado.
async def
process_image(image_path , caption):
return f"Imagem
recebida: {image_path }\ nLegenda: {caption}"
Figura 8.8: Imagem processada e armazenada com sucesso.
8.6
CONVERSANDO COM SEU AGENTE
A classe ChatAgent é um código que criei para simplificar a interação com o Telegram e
com o CrewAI. Ela encapsula toda a configuração de um agente virtual capaz de responder
perguntas de forma educada, útil e com um toque de humor. Abaixo estão os métodos públicos
disponíveis e suas respectivas funções:
- __init__(): Inicializa o agente definindo o modelo de linguagem utilizado e chamando o
método que configura a equipe de agentes.
- create_crew(): Configura o agente e a tarefa associada. O agente é responsável
por responder às mensagens de forma educada e informativa, enquanto a tarefa define o
comportamento esperado das respostas.
CAPÍTULO 8. AGENTES CREWAI NO TELEGRAM
224
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 226

AGENTES INTELIGENTES 2
- kickoff(inputs): Recebe uma mensagem do usuário, processa a entrada e retorna a
resposta gerada pelo agente de conversação.
Com essa classe, a comunicação entre um bot do Telegram e um agente do CrewAI se
torna mais simples e eficiente, permitindo a criação de assistentes virtuais inteligentes de
forma rápida e intuitiva.
Integrando com o Telegram
Agora estamos modificando o método que processa as mensagens de texto recebidas
pelo bot do Telegram, garantindo que elas sejam analisadas pelo agente inteligente con-
figurado no CrewAI. Vamos modificar a função process_text que agora vai receber dois
parâmetros: message, contendo o texto enviado pelo usuário, e user, que identifica quem
enviou a mensagem. Essa adição permite que o agente adapte a resposta de acordo com o
remetente, abrindo possibilidades para interações mais contextuais e personalizadas.
Dentro da função, a primeira ação é instanciar um objeto da classe ChatAgent, que
encapsula toda a configuração do agente conversacional. Esse agente é responsável por
interpretar a mensagem e gerar uma resposta coerente de acordo com as diretrizes pré-
configuradas. Em seguida, tanto o texto recebido quanto o identificador do usuário são
armazenados no dicionário inputs, utilizando as chaves "message" e "user". Essa estrutura
fornece ao agente informações adicionais, permitindo que ele personalize a resposta com
base no remetente da mensagem.
Após preparar os dados, o método kickoff do ChatAgent é acionado. Esse método
executa as tarefas definidas no agente do CrewAI, garantindo que a resposta gerada esteja
alinhada ao tom esperado, que é educado, útil e levemente engraçado. O retorno dessa
interação é armazenado na variável agent_text, que conterá o texto final gerado pelo modelo
de IA.
Por fim, o valor contido em agent_text é retornado pela função, tornando-se a resposta que
será enviada ao usuário no Telegram. Esse fluxo permite que o bot interaja de forma autônoma
e dinâmica, utilizando IA para aprimorar a comunicação e proporcionar uma experiência mais
natural e envolvente ao usuário.
from
crew_conversa
import
ChatAgent
async def
process_text(message: str , user: str) -> str:
""" Função que será registrada no bot para
processar
mensagens."""
agent = ChatAgent ()
inputs = {"user": user , "message": message}
agent_text = agent.kickoff(inputs=inputs)
return
agent_text
CAPÍTULO 8. AGENTES CREWAI NO TELEGRAM
225
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 227

AGENTES INTELIGENTES 2
Execute o código e escreva qualquer coisa para o agente. Aqui que pedi para ele me
explicar o que são agentes inteligentes. Veja que ele já reconhece meu nome e explica de
uma forma interessante usando a LLM "DeepSeek", que foi configurada dentro do agente.
Confira no agente o código
self.llm = "deepseek/deepseek -chat"
A Figura abaixo mostra minha interação com o meu agente via Telegram.
8.7
TELEGRAM POST
Você não ideia de como será fácil integrar o Telegram com o Instagram. Isso porque
vamos escrever somente duas linhas de comando usando a mesma classe de envio para o
Instagram que criamos no capitulo anterior. Segura firme ai que você vai ficar chocado com
isso.
Agora estamos modificando a função responsável pelo processamento de imagens rece-
bidas pelo bot do Telegram, garantindo que elas sejam encaminhadas automaticamente para
publicação no Instagram. O método process_image recebe dois parâmetros: image_path,
que contém o caminho do arquivo salvo temporariamente, e caption, que armazena a legenda
enviada para o Instagram.
Dentro da função, a primeira ação é chamar o método send_instagram da classe
InstagramSend, que já foi implementada anteriormente e encapsula toda a lógica de envio de
imagens para o Instagram. Esse método cuida de aplicar filtros, adicionar molduras, gerar uma
legenda automática e publicar a imagem na conta vinculada. Como estamos integrando esse
CAPÍTULO 8. AGENTES CREWAI NO TELEGRAM
226
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 228

AGENTES INTELIGENTES 2
processo ao bot do Telegram, agora qualquer imagem enviada ao bot será automaticamente
processada e postada no Instagram.
Por fim, a função retorna uma string confirmando que a foto foi salva e publicada com
sucesso. Esse retorno é importante porque será enviado de volta ao usuário no Telegram,
informando que a imagem foi processada corretamente. A mensagem formatada inclui um
ícone de câmera para tornar a resposta mais intuitiva e destacar a legenda usada na postagem.
from
instagram_send
import
InstagramSend
async def
process_image(image_path , caption):
InstagramSend. send_instagram (image_path , caption)
return
f"Foto
enviada
para o Instagram
com a legenda: \n {caption }.
"
8.8
ENVIANDO POST AO INSTAGRAM
Agora chegou o momento de testar a integração entre o Telegram e o Instagram. Acesse o
bot no Telegram e envie uma imagem acompanhada de uma breve descrição. Essa descrição
ajudará o agente a contextualizar melhor o conteúdo antes de gerar a legenda final para a
postagem. No entanto, se preferir não escrever nada, não se preocupe! O modelo da OpenAI
analisará automaticamente a imagem e criará uma descrição precisa para fornecer os insumos
necessários ao agente do CrewAI. Esse processo garante que cada postagem tenha um texto
coerente e envolvente, independentemente da interação do usuário.
No Telegram vou enviar uma imagem de propaganda desse livro e pedir para o agente
escrever um texto para postagem e postar no Instagram, melhorando a imagem, aplicando
uma moldura e adicionando hashtags. Essa é a imagem que vou postar e algumas diretrizes
para o agente CrewAI.
E o resultado da postagem você pode ver link https://www.instagram.com/p/DF3IO9GgO1k
CAPÍTULO 8. AGENTES CREWAI NO TELEGRAM
227
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 229

AGENTES INTELIGENTES 2
CAPÍTULO 8. AGENTES CREWAI NO TELEGRAM
228
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 230

AGENTES INTELIGENTES 2
8.9
EXERCÍCIOS
1. Crie um bot no Telegram utilizando o BotFather, registre um nome e um nome de
usuário para ele. Em seguida, obtenha o token de autenticação e salve-o no arquivo
.env do projeto.
2. Modifique a classe TelegramBotSandeco para adicionar um novo comando chamado
/help, que retorna uma lista de comandos disponíveis para o usuário interagir com o
bot.
3. Configure a função process_text para personalizar a resposta do agente, incluindo o
nome do usuário na mensagem. Por exemplo: "Olá, João!
Como posso te ajudar
hoje?".
4. Adapte a classe ChatAgent para que o agente responda perguntas de forma mais
detalhada, utilizando um tom mais formal e explicativo.
5. Altere a função process_image para que, ao receber uma imagem sem legenda, o bot
gere automaticamente uma descrição utilizando a API da OpenAI antes de enviá-la ao
Instagram.
6. Modifique a lógica de postagem no Instagram para que o bot utilize um conjunto de
hashtags pré-definidas em cada publicação, garantindo maior alcance e engajamento
nas postagens.
7. Expanda o bot para permitir que os usuários enviem mensagens de áudio, convertendo-
as em texto antes de repassá-las ao agente do CrewAI para processamento e resposta.
CAPÍTULO 8. AGENTES CREWAI NO TELEGRAM
229
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 231

AGENTES INTELIGENTES 2
CAPÍTULO 9
Intefaces Conversacionais e
Agentes de Código Dinâmico
Imagine que você é um líder empresarial que passa o dia entre aeroportos, reuniões
estratégicas e decisões urgentes. Seu tempo é precioso, e você não pode se dar ao luxo de
parar para abrir sistemas complexos. Então, no meio de uma conexão ou entre um café e
outro no escritório do cliente, você pega o celular e dispara uma mensagem rápida: qual a
média de vendas das lojas em SP? ou me mostra o gráfico de inadimplência no Sul.
Essas perguntas diretas, apesar de simples à primeira vista, acionam uma cadeia de trabalho
que ainda depende fortemente da atuação humana. Tradicionalmente, esse tipo de solicitação
é encaminhado a um auxiliar por WhatsApp ou outro canal informal. A partir desse ponto, o
auxiliar precisa interpretar a mensagem, acessar diferentes sistemas corporativos, consultar
APIs, cruzar informações e formatar uma resposta compreensível. Todo esse processo,
ilustrado na Figura 9.1, evidencia o quanto esse modelo ainda exige cognição, tempo e
atenção de uma pessoa — recursos que também são limitados e variáveis.
O modelo atual tem suas vantagens, como flexibilidade e adaptação ao contexto, mas
carrega limitações claras: interpretações imprecisas, atrasos no retorno e sobrecarga de
tarefas. Mesmo um bom auxiliar precisa de tempo para abrir sistemas, localizar dados, gerar
relatórios e estruturar respostas compreensíveis. Em ambientes corporativos com alto volume
de solicitações, esse processo se torna um gargalo e impacta diretamente na agilidade de
tomada de decisão.
CAPÍTULO 9. INTEFACES CONVERSACIONAIS E AGENTES DE CÓDIGO DINÂMICO
230
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 232

AGENTES INTELIGENTES 2
Figura 9.1: Processo com assistente humano recebendo solicitações e consultando diferentes
fontes de informação.
Agentes Auxiliares
A grande virada vem com o uso de agentes inteligentes, capazes de compreender
linguagem natural e executar ações de forma autônoma. Na Figura 9.2, observamos o mesmo
cenário, porém com uma estrutura automatizada: um agente de IA treinado com um modelo
LLM recebe a solicitação transcrita, interpreta a intenção do comando e aciona os recursos
certos para obter a resposta. Ele pode se conectar a sistemas legados como ERPs, consultar
a web ou acessar APIs em questão de segundos.
Diferente do auxiliar humano, o agente não precisa ser treinado em cada sistema individu-
almente. Ele utiliza sua capacidade de raciocínio dinâmico para planejar uma sequência de
ações e atingir um objetivo específico. E mais: ele pode escrever e executar código quando
necessário, tornando-se um executor de código dinâmico e não apenas um interpretador de
comandos fixos. Isso elimina a rigidez dos fluxos tradicionais e abre espaço para uma nova
geração de sistemas mais inteligentes e responsivos.
O mais interessante nesse novo modelo é que a interface conversacional se torna apenas
a camada de interação — por trás dela, há um agente que entende o contexto, realiza
inferências, decide caminhos e retorna informações prontas para uso. Essa estrutura substitui
boa parte das tarefas operacionais de um auxiliar, com ganho de velocidade, escalabilidade e
redução de erros. Enquanto o auxiliar precisa parar o que está fazendo para atender o chefe,
CAPÍTULO 9. INTEFACES CONVERSACIONAIS E AGENTES DE CÓDIGO DINÂMICO
231
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 233

AGENTES INTELIGENTES 2
Figura 9.2: Agente de IA interpretando comandos de linguagem natural, acessando dados e
executando tarefas automaticamente.
o agente responde a múltiplas pessoas ao mesmo tempo, com consistência e precisão.
Essa comparação evidencia um ponto-chave do nosso capítulo: interfaces conversa-
cionais combinadas com execução de código dinâmica representam mais do que uma
tendência — são o futuro do desenvolvimento de software. Em vez de desenvolvermos siste-
mas com múltiplas telas e cliques, agora estamos construindo plataformas onde se conversa
com o sistema, e ele executa o que for necessário para te entregar a resposta. É o começo de
uma nova era, onde o software deixa de ser um produto engessado e passa a agir como um
parceiro inteligente.
9.1
O IMPACTO REAL DOS AGENTES CONVERSACIONAIS
A grande transformação trazida pelos agentes conversacionais está no fato de que eles
não são apenas uma camada de comunicação elegante, mas uma verdadeira ponte inteligente
entre o humano e qualquer sistema digital. Um único agente pode intermediar uma conversa
e, a partir dela, se conectar com ERPs, CRMs, sistemas de BI, bancos de dados, ferramentas
de automação, plataformas de e-commerce e muito mais. O que antes exigia o conhecimento
técnico de como operar cada uma dessas ferramentas agora pode ser feito com uma simples
frase, como gera o relatório de faturamento mensal ou qual foi o ticket médio das lojas
do nordeste em fevereiro?.
CAPÍTULO 9. INTEFACES CONVERSACIONAIS E AGENTES DE CÓDIGO DINÂMICO
232
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 234

AGENTES INTELIGENTES 2
Essa mudança de paradigma redefine não apenas a forma como interagimos com os
sistemas, mas também quem pode interagir com eles. Profissionais que antes dependiam
de analistas, desenvolvedores ou operadores agora têm autonomia para acessar, cruzar
e analisar dados por meio de linguagem natural. O agente se encarrega de transformar
intenções em ações, consultas em comandos, e resultados em respostas inteligíveis. Isso não
só reduz o tempo de resposta, como também distribui o poder de acesso à informação de
maneira muito mais democrática dentro das organizações.
Mais do que um facilitador, o agente conversacional torna-se um intérprete universal
entre o usuário e o ecossistema digital da empresa. Ele compreende o que o humano deseja,
escolhe a melhor forma de atender à solicitação, interage com os sistemas corretos e entrega
a informação pronta, no formato certo. Isso gera um impacto direto na produtividade, reduz
erros operacionais, acelera a tomada de decisão e libera os profissionais para atuarem onde
são mais valiosos: na estratégia. Em vez de aprender a operar sistemas, agora basta saber o
que perguntar.
Agentes conversacionais em ambientes críticos de saúde
Imagine um médico em meio a uma cirurgia complexa, em um momento crítico onde cada
segundo pode definir o desfecho do procedimento. Suas mãos estão ocupadas, os olhos
estão focados no paciente, e não há espaço para distrações. Ainda assim, ele precisa saber
rapidamente se o paciente tem alergia a algum medicamento ou consultar os resultados da
última tomografia. Nessas horas, um agente conversacional atua como um copiloto invisível.
Por meio de um smartglass, o médico pode falar naturalmente: me diga se o paciente tem
alergia a penicilina ou quais foram os achados da última tomografia, e receber a resposta
em áudio ou como sobreposição visual, sem precisar mover um dedo.
Esse tipo de interação elimina completamente a necessidade de desviar o foco da tarefa
principal para consultar prontuários ou acessar sistemas hospitalares. O agente está conectado
a bancos de dados clínicos, protocolos médicos, APIs especializadas e também ao gêmeo
digital do paciente — um modelo computacional em tempo real que integra histórico clínico,
exames laboratoriais, comorbidades, alergias e parâmetros fisiológicos. O médico pode
perguntar, por exemplo, o gêmeo digital indica alguma contraindicação para anestesia?, e
receber uma resposta fundamentada em evidências, sem interrupção no procedimento.
Mais do que uma interface de acesso a informações, o agente conversacional torna-se
um aliado estratégico da medicina de alta complexidade. Ele pode não apenas responder
perguntas, mas também alertar sobre interações medicamentosas, sugerir condutas clínicas e
até antecipar complicações com base em dados preditivos. Com isso, o profissional ganha
tempo, reduz riscos e atua com mais segurança, transformando a tecnologia em uma extensão
do seu próprio raciocínio clínico.
CAPÍTULO 9. INTEFACES CONVERSACIONAIS E AGENTES DE CÓDIGO DINÂMICO
233
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 235

AGENTES INTELIGENTES 2
Agentes conversacionais como apoio jurídico em tempo real
Imagine que você é um advogado no meio de uma audiência importante, diante do juiz e
da outra parte, em um ambiente onde cada argumento conta e não há margem para pausas
longas. Surge uma dúvida sobre um precedente jurídico, uma cláusula específica de um
contrato ou um artigo do código civil que pode mudar completamente a linha de defesa. Em
vez de abrir o notebook, procurar no sistema ou pedir tempo, você simplesmente aciona seu
agente conversacional por voz ou por meio de um smartglass e diz: existe jurisprudência
sobre rescisão unilateral em contratos com cláusula de exclusividade? ou qual o artigo
que trata da responsabilidade solidária nesse contexto?.
Em segundos, o agente responde com base em um repositório jurídico integrado: ju-
risprudências, códigos, pareceres técnicos e até consultas anteriores feitas por você. Se
necessário, ele pode acessar bases externas, como portais de tribunais superiores, diários
oficiais, APIs de legislações atualizadas e bancos de dados de contratos. E mais: ele também
pode interagir com um modelo contextual que reúne todos os dados do processo, histórico de
movimentações, peças processuais e decisões correlatas, permitindo consultas específicas
como qual foi o entendimento do relator na última manifestação?.
Nesse cenário, o advogado ganha uma vantagem tática imediata. O agente se transforma
em um verdadeiro assistente jurídico proativo, entregando informações no calor do momento,
sem distração ou burocracia. Essa integração entre linguagem natural, dados jurídicos e
contexto de processo eleva a atuação do profissional para outro nível: mais ágil, mais precisa
e com poder argumentativo ampliado. O direito deixa de ser apenas um acervo de normas e
passa a ser um sistema vivo, conversável e acessível sob demanda.
9.2
DISRUPÇÃO AGÊNTICA NÍVEL HARD
Recentemente, estive em conversas e palestras com oficiais da Força Aérea Brasileira,
discutindo como agentes inteligentes podem transformar completamente a relação entre seres
humanos e sistemas críticos. A aviação é um campo onde cada segundo importa, cada
decisão precisa ser precisa, e a margem para erro é mínima. Foi durante essas conversas
que uma analogia poderosa surgiu: um avião é, essencialmente, um ser humano ilhado
por sensores e atuadores. Ele sente o mundo por meio de radares, altímetros, giroscópios e
câmeras — e age por meio de comandos, flaps, propulsores, rotas e protocolos automáticos.
Mas falta algo nessa equação: a linguagem.
Agora imagine o impacto de adicionar um agente conversacional inteligente dentro da
cabine, capaz de compreender em tempo real tudo o que o piloto diz — em linguagem natural
CAPÍTULO 9. INTEFACES CONVERSACIONAIS E AGENTES DE CÓDIGO DINÂMICO
234
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 236

AGENTES INTELIGENTES 2
— e, mais importante ainda, com acesso a todos os sensores da aeronave. O piloto pode
perguntar: qual a tendência de vento cruzado nos próximos 30 segundos?, os dados
dos motores estão dentro do padrão para esse tipo de manobra? ou até tem alguma
anomalia que eu não percebi?, e receber uma resposta clara, contextualizada e proativa.
Não se trata mais de reagir a luzes piscando ou alarmes soando. O piloto começa a conversar
com a própria aeronave.
Esse tipo de agente age como um copiloto cognitivo, que não apenas responde perguntas,
mas também pode gerar alertas personalizados, sugerir estratégias de voo, explicar proce-
dimentos técnicos ou confirmar ações com base no histórico da missão e nos padrões do
modelo da aeronave. Ele pode cruzar parâmetros como velocidade, altitude, consumo de
combustível e condições meteorológicas em tempo real, apresentando insights que vão além
do que qualquer tela pode exibir. Tudo isso, sem tirar os olhos do horizonte ou as mãos dos
controles.
A grande disrupção aqui não é apenas tecnológica, mas cognitiva. Pilotos foram treinados
para interpretar dezenas de instrumentos simultaneamente. Mas com a chegada dos agentes,
o paradigma muda: o piloto não precisa mais interpretar tudo sozinho. Ele pode delegar
parte da sua carga cognitiva a um agente treinado, que sintetiza, interpreta e comunica. É
como dar voz e consciência situacional a uma máquina que antes só obedecia comandos
técnicos.
Esse novo modelo abre caminho para um futuro onde o diálogo com sistemas críticos
será natural, fluido e inteligente. E se isso é possível em uma aeronave de alta complexidade,
com milhares de variáveis em tempo real, imagine o que pode ser feito em outros domínios —
da saúde à indústria pesada, da energia ao transporte urbano. O que estamos presenciando
não é apenas uma evolução da interface, mas o nascimento de um novo tipo de cooperação:
o ser humano conversando com o próprio sistema operacional do mundo.
9.3
CÓDIGO DINÂMICO
Meu pai tem 70 anos e segue firme na labuta como vendedor. Aposentadoria? Nem
pensar. Ele gosta de trabalhar, de conversar com cliente, de negociar no olho a olho e
de fechar pedido na base da confiança. Mas tem um detalhe importante: meu pai é o
verdadeiro embaixador do mundo analógico. Interfaces cheias de botão, sistemas web com
login, senha e autenticação de dois fatores? Um terror. Agora, tem uma tecnologia na qual ele
é absolutamente fluente: o bom e velho WhatsApp. É lá que ele fala com os filhos, manda
áudio pras tias, compartilha figurinha no grupo dos amigos e resolve qualquer coisa com as
empresas que representa.
CAPÍTULO 9. INTEFACES CONVERSACIONAIS E AGENTES DE CÓDIGO DINÂMICO
235
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 237

AGENTES INTELIGENTES 2
Agora imagina se ele pudesse ir além. Em vez de depender de outra pessoa para acessar
o sistema da indústria, ele poderia simplesmente mandar uma mensagem de voz dizendo me
diz aí se tem algum pedido pendente pra o cliente [nome do cliente], ou consigo dar 10%
de desconto nesse lote?, ou ainda quais os produtos que mais venderam esse mês?. E
aí, do outro lado, quem responde não é uma pessoa, nem um atendente robotizado com menu
fixo. É um agente conversacional inteligente, treinado pra interpretar, executar e responder
— com base em dados reais e lógica de negócio dinâmica.
Esse agente, como mostra a Figura 9.3, recebe a solicitação, interpreta a intenção e gera
automaticamente um código dinâmico em Python. Esse código consulta bases de dados,
acessa sistemas internos, gera relatórios ou arquivos CSV, e devolve a resposta certa, no
momento certo. Tudo isso sem que o meu pai precise abrir um aplicativo, navegar por menus
ou preencher filtros complexos. O agente funciona como uma ponte entre o humano que
domina a arte de vender e os sistemas que dominam os dados da operação.
Neste capítulo, vamos construir juntos um exemplo real dessa ideia: um pequeno projeto
que simula esse fluxo completo. Desde a mensagem de voz enviada no WhatsApp até a
execução de um código Python gerado dinamicamente, com consulta a uma base de dados
CSV e entrega de informações personalizadas via áudio. Porque, no fim das contas, a
revolução dos agentes não é sobre substituir pessoas — é sobre dar superpoderes até para
os vendedores mais raiz da equipe.
Figura 9.3: Agente de IA executando código dinâmico com base em solicitações feitas via
WhatsApp por um vendedor experiente.
CAPÍTULO 9. INTEFACES CONVERSACIONAIS E AGENTES DE CÓDIGO DINÂMICO
236
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 238

AGENTES INTELIGENTES 2
Baixe o projeto
Se você curtiu a ideia e quer ver tudo isso funcionando na prática, baixe agora o projeto
completo que criamos especialmente pra este capítulo. Nele, você vai encontrar o fluxo
completo: desde a solicitação do vendedor até a execução de código dinâmico, geração de
arquivos CSV e resposta automática via agente inteligente. E o melhor: eu vou te explicar
tudo passo a passo, para você entender cada detalhe e, depois que você entender tudo, vai
poder adaptar do seu jeito.
Projeto completo: Clique aqui para baixar
todo o projeto que aprenderemos nesse capítulo:
https://bit.ly/sandeco-agentes-busca-dinamica
Base de dados de ven
Antes de começarmos a desenvolver o agente, vamos trabalhar com uma base de dados
simples e direta, chamada vendas_ficticias_brasil.csv. Essa base vai servir como fonte
de informações para as consultas que o agente irá responder ao longo do capítulo. Ela simula
o cenário de uma operação comercial nacional e contém dados bem variados — o suficiente
pra gerar relatórios, buscar tendências e responder perguntas de vendas com inteligência.
O arquivo possui as seguintes colunas: Data da Venda, ID da Venda, ID do Cliente,
Nome do Cliente, Produto, ID do Produto, Categoria, Preço Unitário, Quantidade, Valor
Total, Meio de Pagamento, Vendedor, Região e Status da Venda. É com base nessas
informações que o agente vai gerar o código necessário para filtrar, agrupar, calcular e até
exportar os resultados que o usuário solicitar via linguagem natural.
É com base nessas informações que o agente vai gerar o código necessário para filtrar,
agrupar, calcular e até exportar os resultados que o usuário solicitar via linguagem natural.
9.4
AGENTES DE CONSULTA DINÂMICA
Agora vamos construir um fluxo usando o CrewAI que será capaz de responder dois tipos
de solicitações diferentes: uma de natureza mais geral, chamada de trivialidades, e outra
voltada para questões específicas de vendas, chamada vendas. A ideia é que esse fluxo
consiga identificar automaticamente o tipo da pergunta feita pelo usuário — por exemplo, se a
pessoa perguntar qual o maior planeta do sistema solar?, o fluxo deve entender que isso
CAPÍTULO 9. INTEFACES CONVERSACIONAIS E AGENTES DE CÓDIGO DINÂMICO
237
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 239

AGENTES INTELIGENTES 2
não tem relação com vendas e encaminhar para o caminho de trivialidades. Por outro lado,
se a solicitação for me mostra os 3 produtos mais vendidos em fevereiro, o fluxo deverá
redirecionar para o caminho de vendas, onde o agente especialista vai executar o código
dinâmico necessário para responder.
Esse código define um fluxo chamado FluxoAudio, baseado na classe Flow do CrewAI.
Comece definindo o estado interno com a classe State, que armazena se a mensagem é do
tipo vendas ou trivialidade, além do texto e da linguagem da entrada. Em seguida, o método
anotado com @start() é o ponto inicial do fluxo. Dentro dele, instancie a FacadeCrew, que é
responsável por identificar o tipo da mensagem. Execute o método kickoff() passando o
texto, e armazene o resultado no campo tipo_msg do estado.
Depois disso, crie um método de roteamento com a anotação @router(start). Ele será
responsável por decidir qual caminho seguir com base no valor de tipo_msg. O retorno é
convertido em string minúscula para que corresponda aos nomes definidos nos dois métodos
que escutam caminhos específicos.
No bloco seguinte, defina dois caminhos diferentes usando @listen("vendas") e
@listen("trivialidades"). No primeiro, o fluxo instância a classe SalesReportCrew, que
será responsável por lidar com o texto da solicitação relacionada a vendas. No segundo, o
fluxo usa a classe TalkingCrew, que responde perguntas gerais, como curiosidades ou temas
aleatórios. Em ambos os casos, os agentes executam kickoff() com o texto da solicitação e
retornam a resposta que será entregue ao usuário.
No final do código, temos um exemplo de como executar esse fluxo. Crie uma variável
chamada consulta com a pergunta desejada. Em seguida, instancie FluxoAudio e chame o
método kickoff() passando o texto como entrada. O resultado da resposta será impresso
no terminal.
import
time
from
crewai.flow.flow
import Flow , listen , router , start
from
pydantic
import
BaseModel
from
crew_facade
import
FacadeCrew
from
crew_talking
import
TalkingCrew
from
crew_sales_report
import
SalesReportCrew
class
State(BaseModel):
tipo_msg: bool = False
text: str = ""
language: str = ""
class
FluxoAudio(Flow[State ]):
@start ()
CAPÍTULO 9. INTEFACES CONVERSACIONAIS E AGENTES DE CÓDIGO DINÂMICO
238
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 240

AGENTES INTELIGENTES 2
def start(self):
start_time = time.time ()
avaliador = FacadeCrew ()
self.state.tipo_msg = avaliador.kickoff(self.state.text)
end_time = time.time ()
execution_time = end_time - start_time
print(f"Tempo de execução: { execution_time :.4f} segundos")
@router(start)
def
roteamento(self):
return str(self.state.tipo_msg).lower ()
@listen("vendas")
def
terceiro_metodo (self):
sales = SalesReportCrew ()
resposta = sales.kickoff(self.state.text)
return
resposta
@listen("trivialidades")
def
quarto_metodo(self):
agent = TalkingCrew ()
resposta = agent.kickoff(self.state.text)
return
resposta
# Exemplo de uso
consulta = "Quais os 3 melhores
vendedores de novembro da região
Nordeste?"
fluxo = FluxoAudio ()
resposta = fluxo.kickoff(inputs ={’text ’:consulta })
print(resposta)
9.5
AGENTE FACADE
Agora vamos construir um agente que vai entender a solicitação recebida e direcionar o
fluxo corretamente. Para isso, usamos um padrão clássico da engenharia de software cha-
mado Facade, que tem como principal função esconder a complexidade interna de múltiplos
componentes, oferecendo uma interface simples e direta para quem vai consumir.
Neste código, a classe FacadeCrew funciona como uma fachada que encapsula a criação
de um agente, a definição de uma tarefa e a configuração de um fluxo (Crew) que executa
tudo isso. Ao instanciar FacadeCrew, o método _setup_crew() é automaticamente chamado,
montando todo o pipeline interno. Primeiro, configure o agente usando a classe Agent. Defina
CAPÍTULO 9. INTEFACES CONVERSACIONAIS E AGENTES DE CÓDIGO DINÂMICO
239
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 241

AGENTES INTELIGENTES 2
o papel (role), objetivo (goal), histórico (backstory), se usará memória, nível de verbosidade
e o modelo de linguagem.
Depois, defina a tarefa com Task, que descreve exatamente o que o agente deve fazer:
classificar um texto em vendas ou trivialidades. Use o marcador text para interpolar o con-
teúdo dinâmico que será avaliado. Observe que tanto a descrição quanto o expected_output
deixam claro que o resultado precisa ser apenas uma das palavras, sem aspas, e em minús-
culas.
Por fim, instancie o Crew, passando o agente e a tarefa que ele irá executar. Ao chamar
o método kickoff(), envie o texto de entrada, que será avaliado por esse fluxo interno
encapsulado. O retorno vem por result.raw, que extrai diretamente a saída textual do
modelo. Com isso, qualquer parte do sistema pode usar essa classe FacadeCrew como uma
interface simples para classificar textos — sem precisar saber como o agente, a tarefa ou o
fluxo foram construídos por dentro.
from
crewai
import Agent , Task , Crew , Process , LLM
from
dotenv
import
load_dotenv
# Carregar
variáveis de ambiente
load_dotenv ()
class
FacadeCrew:
def
__init__(self):
# Configuração da chave de API
self.agent = None
self.task = None
self.crew = None
self.llm = "gpt -4o-mini"
self._setup_crew ()
def
_setup_crew(self):
# Configurar o agente
self.agent = Agent(
role="Classificador de Texto",
goal =(
"Classificar um texto em duas
categorias: "
"’Vendas ’ ou ’trivialidades ’"
),
backstory =(
"Você é um especialista em análise de linguagem , capaz
de interpretar
textos "
"e classificá-los de acordo com o contexto: vendas ou
trivialidades. A palavra
deve
estar em minúsculas."
),
CAPÍTULO 9. INTEFACES CONVERSACIONAIS E AGENTES DE CÓDIGO DINÂMICO
240
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 242

AGENTES INTELIGENTES 2
memory=False ,
verbose=True ,
llm=self.llm
)
# Configurar a tarefa
self.task = Task(
description =(
r""" Determine se o texto
delimitado
por <texto > ele fala
sobre:
’vendas ’ (assuntos
relacionados a produtos , clientes ,
etc.),
’trivialidades ’ (qualquer
outro
tema).
Forneça uma
classificação com
somente
uma
palavra: ’
vendas ’ ou ’trivialidades . A palavra
deve
estar em minúsculas .’.
<texto >
{text}
</texto >
"""
),
expected_output =(
"Retorne
somente
uma das
categorias: ’vendas ’ ou ’
trivialidades ’. Não precisa
retornar as aspas."
),
agent=self.agent
)
# Configurar o crew
self.crew = Crew(
agents =[ self.agent],
tasks =[ self.task],
process=Process.sequential
)
def
kickoff(self , text):
"""
Classifica o texto
fornecido em uma das três categorias:
’Vendas ’, ’Base de Dados de Vendas ’, ou ’Outro
Assunto ’.
:param
text: Texto a ser
classificado .
:return: Classificação e justificativa .
"""
result = self.crew.kickoff(inputs ={"text": text })
return
result.raw
CAPÍTULO 9. INTEFACES CONVERSACIONAIS E AGENTES DE CÓDIGO DINÂMICO
241
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 243

AGENTES INTELIGENTES 2
9.6
AGENTE DE ASSUNTOS GERAIS
Agora vamos construir a crew de agentes que responderão trivialidades com base em
transcrições de áudio. Esse código implementa o padrão de projeto Facade, onde encapsula-
mos a complexidade de configuração do agente, da tarefa e do processo de execução dentro
de uma única classe chamada TalkingCrew. Ao fazer isso, simplificamos a interface de uso:
basta instanciar a classe e chamar o método kickoff() com a transcrição que o agente será
acionado automaticamente.
A configuração começa com a carga das variáveis de ambiente usando load_dotenv(),
garantindo que qualquer variável externa, como a chave da API, esteja disponível. Em seguida,
defina o modelo de linguagem a ser utilizado na propriedade self.llm, aqui definido como
"gpt-4o-mini".
Dentro do construtor, instancie o agente usando a classe Agent. Defina o papel do agente
com role, o objetivo com goal e um backstory que contextualiza suas habilidades. Configure
também se ele usará memória (memory) e se exibirá logs detalhados (verbose). Em seguida,
defina a tarefa com a classe Task, fornecendo uma descrição clara de que o agente deve
analisar um texto de transcrição e produzir uma resposta relevante. Use a interpolação com
transcription_text para injetar dinamicamente o conteúdo da transcrição.
A resposta esperada é sempre um texto objetivo, iniciado com expressões pré-definidas
como ’Oi chefe’, ’Fala professor’ ou ’Aqui está chefe’, garantindo padronização na co-
municação. Por fim, monte o processo com a classe Crew, conectando o agente à tarefa
e definindo o processo como sequencial com Process.sequential. O método kickoff()
recebe a transcrição como entrada e retorna a resposta gerada, extraída com result.raw.
Com isso, qualquer parte do sistema pode usar essa fachada para interagir com o agente de
forma simples, sem precisar se preocupar com a lógica interna da Crew.
import os
from
crewai
import Agent , Task , Crew , Process , LLM
from
dotenv
import
load_dotenv
# Carregar
variáveis de ambiente
load_dotenv ()
class
TalkingCrew:
def
__init__(self , verbose=True , memory=True):
"""
Inicializa a configuração do agente de transcrição.
:param
api_key: Chave da API OpenAI.
CAPÍTULO 9. INTEFACES CONVERSACIONAIS E AGENTES DE CÓDIGO DINÂMICO
242
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 244

AGENTES INTELIGENTES 2
:param
verbose: Define se o agente
deve ser
detalhista
nos logs.
:param
memory: Define se o agente
deve ter memória ativa.
"""
self.llm = "gpt -4o-mini"
self.agent = Agent(
role="Processador de transcrições",
goal="Receber
uma
transcrição de áudio como
texto e produzir
uma
resposta
relevante e coerente.",
backstory="Especialista em compreender
contextos e responder
com
clareza.",
memory=memory ,
verbose=verbose ,
llm=self.llm
)
self.task = Task(
description =(
"Analise o seguinte
texto de transcrição e forneça uma
resposta
com base nas
informações apresentadas: "
"{ transcription_text }. A resposta
deve ser clara e
objetiva. Responda
sempre com ’Oi chefe ’ ou ’Fala
professor ’ ou ’Oi
professor ’ ou ’Aqui está chefe ’"
),
expected_output="Um texto com uma
resposta
coerente e
relevante.",
agent=self.agent
)
self.crew = Crew(
agents =[ self.agent],
tasks =[ self.task],
process=Process.sequential
# Processo
sequencial
)
def
kickoff(self , transcription ):
"""
Processa o texto da transcrição e retorna a resposta.
:param
transcription_text : O texto da transcrição de áudio.
:return: Resposta
gerada
pelo
agente.
"""
result = self.crew.kickoff(inputs ={" transcription_text ":
transcription })
return
result.raw
CAPÍTULO 9. INTEFACES CONVERSACIONAIS E AGENTES DE CÓDIGO DINÂMICO
243
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 245

AGENTES INTELIGENTES 2
9.7
CREW DE AGENTES DE VENDAS
Vamos explicar essa crew por partes, começando pela importação de bibliotecas e
inicialização da classe principal. Primeiro, carregue as bibliotecas necessárias: o módulo os
para manipular caminhos de arquivos, os componentes essenciais do CrewAI, e a ferramenta
QueryCSV, que já foi explicada anteriormente. Logo depois, carregue as variáveis de ambiente
com load_dotenv(), garantindo que o ambiente esteja pronto para execução segura. Em
seguida, defina a classe SalesReportCrew, responsável por orquestrar todo o processo de
geração de relatórios com base em consultas em linguagem natural. Dentro do __init__,
configure o caminho para o arquivo CSV e o modelo de linguagem a ser utilizado.
import os
from
crewai
import Agent , Task , Crew , Process
from
custom_tool_vendas
import
QueryCSV
from
dotenv
import
load_dotenv
# Carregar
variáveis de ambiente
load_dotenv ()
class
SalesReportCrew :
def
__init__(self):
"""
Inicializa o Crew
responsável por gerar
relatórios
baseados em
dados de vendas.
"""
self. tool_file_path = os.path.join(’vendas_ficticias_brasil .csv’
)
self.crew = None
self.llm = "gpt -4o-mini"
self._setup_crew ()
Na segunda parte, configure a ferramenta de consulta e defina o primeiro agente. Instancie
a classe QueryCSV com o caminho do arquivo CSV e armazene na variável vendas_tool. Em
seguida, crie o agente analista_dados, que será responsável por gerar o código em Python
que consulta os dados solicitados. Esse agente tem o papel de Analista de Dados e será
configurado com memória e verbosidade ativadas. Ele entende que deve gerar scripts em
pandas, que serão utilizados pela ferramenta para realizar a consulta de forma dinâmica.
def
_setup_crew(self):
# Inicializa a ferramenta de vendas
CAPÍTULO 9. INTEFACES CONVERSACIONAIS E AGENTES DE CÓDIGO DINÂMICO
244
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 246

AGENTES INTELIGENTES 2
vendas_tool = QueryCSV(file_path=self. tool_file_path )
# Define o agente
Analista de Dados
analista_dados = Agent(
role="Analista de Dados",
goal="Criar códigos em Python que
executam
uma
consulta em
um determinado
CSV",
backstory =(
""" Você é um analista de dados
experiente , capaz de
escrever códigos em Python
capazes de extrair
informações solicitadas de conjuntos
de dados
estruturados
como
arquivos
CSV."""
),
memory=True ,
verbose=True ,
llm=self.llm
)
Agora defina o segundo agente da crew, o redator. Esse agente tem como papel
transformar os resultados técnicos do analista em um parágrafo bem escrito. Ele não possui
memória ativa, mas usa o mesmo modelo LLM e está configurado para ser detalhista e
formal. Depois, configure as duas tarefas principais. A primeira é a task_csv, que instrui o
analista_dados a gerar o código Python com base na consulta feita em linguagem natural.
Esse código deve seguir o exemplo fornecido na descrição, começando pela leitura do CSV
e finalizando com a variável resultado. A segunda é a write_task, atribuída ao redator,
que escreve um texto claro com base no contexto da tarefa anterior. A resposta sempre deve
começar com "Oi Chefe" e escrever valores monetários por extenso.
# Define o agente
Redator
redator = Agent(
role="Redator",
goal="Escrever um parágrafo
baseado no contexto
fornecido
pelo
Analista de Dados e pela
solicitação {query }.",
backstory =(
""" Você é um escritor
habilidoso , capaz de transformar
dados técnicos e análises
em textos
claros e cativantes , sempre
mantendo um tom
formal e direcionado ao chefe."""
),
memory=False ,
verbose=True ,
llm=self.llm
)
# Define as tarefas
task_csv = Task(
CAPÍTULO 9. INTEFACES CONVERSACIONAIS E AGENTES DE CÓDIGO DINÂMICO
245
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 247

AGENTES INTELIGENTES 2
description =( """ Dada a solicitação delimitada
por <
query >, crie um código
python que
irá ler o arquivo
exatamente o código
delimitado em <
abertura >. Você
deve
completar o código que começou em abertura de modo
a atender
a <query >. Chame a ferramenta
QueryCSV
para
executar o c
ódigo. Em <exemplo >
tem um exemplo de um código que você deve
gerar. Veja
que o exemplo ja tem <abertura > nele.
...
no código , sempre
atribua o resultado da a variável "
resultado" como
mostra o <exemplo > """ ),
expected_output ="Um texto em um parágrafo
sobre: {query
}.",
agent=analista_dados ,
tools =[ vendas_tool]
)
write_task = Task(
description =( """ Use o contexto
fornecido
pela
pesquisa
do agente ’analista_dados ’ para
escrever um parágrafo
que
responda à solicitação em {query }. O texto
deve
sempre
começar com ’Oi Chefe ’ e explicar
a resposta da maneira
mais
clara e informativa
possí
vel. quando for
escrever
algum número de valores
em reais , escreva
por
extenso. """ ),
expected_output =(
"Um parágrafo
começando com ’Oi Chefe ’, explicando a
resposta à solicitação {query }."
),
agent=redator ,
context =[ task_csv]
)
Por fim, configure o Crew conectando os dois agentes às tarefas correspondentes, e
defina o processo como sequencial, garantindo que a saída do primeiro agente alimente
o segundo. Crie o método kickoff(), que é o ponto de entrada da classe. Esse método
recebe a consulta do usuário, aciona a execução da crew e retorna a resposta final gerada. O
resultado é extraído com result.raw para garantir que o retorno seja apenas o texto limpo
gerado pelos agentes.
# Configura o Crew
self.crew = Crew(
agents =[ analista_dados , redator],
tasks =[ task_csv , write_task],
CAPÍTULO 9. INTEFACES CONVERSACIONAIS E AGENTES DE CÓDIGO DINÂMICO
246
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 248

AGENTES INTELIGENTES 2
process=Process.sequential
)
def
kickoff(self , query):
"""
Executa o Crew para
processar
uma
consulta e gerar um relatório.
"""
result = self.crew.kickoff(inputs ={"query": query })
return
result.raw
Agora vamos criar a ferramenta que será utilizada pelo agente para executar o código
Python criado dinamicamente. Essa ferramenta é fundamental dentro da arquitetura do CrewAI,
pois conecta a geração de código à execução real dos comandos. Crie uma classe chamada
QueryCSV que herda de BaseTool, e defina dois atributos: name e description. O nome
serve como identificador interno para o CrewAI, enquanto a descrição explica de forma breve
o que a ferramenta faz — neste caso, executar um código de consulta sobre um arquivo CSV.
Dentro da classe, implemente o método _run(), que será automaticamente chamado pelo
CrewAI sempre que o agente utilizar a ferramenta. Esse método recebe uma string contendo
o código Python gerado pelo agente. Crie um dicionário vazio chamado contexto e use a
função exec() para executar o código dentro desse dicionário. Isso permite que qualquer
variável definida durante a execução esteja acessível ao final. Por fim, retorne o valor contido
em contexto[’resultado’], que é a saída esperada da execução e deve ter sido definida
no próprio código gerado pelo agente, conforme combinamos anteriormente no capítulo.
from
crewai.tools
import
BaseTool
class
QueryCSV(BaseTool):
name: str = "Ferramenta de execução de código de consulta a um CSV"
description: str = (
""" Executa e retorna
dados de uma
consulta a partir de um CSV """
)
def _run(self , codigo_python : str) -> str:
contexto = {}
exec(codigo_python , contexto)
return
contexto[’resultado ’]
CAPÍTULO 9. INTEFACES CONVERSACIONAIS E AGENTES DE CÓDIGO DINÂMICO
247
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 249

AGENTES INTELIGENTES 2
9.8
TRANSCREVENDO UM ÁUDIO
Antes de usar a transcrição com Whisper, instale a biblioteca com o comando:
uv pip
install
git+https :// github.com/openai/whisper.git
Agora sim, vamos analisar o código. A classe Transcript é responsável por transformar
um áudio enviado pelo usuário em texto, utilizando o modelo Whisper da OpenAI. No método
__init__(), defina o diretório onde os arquivos de áudio temporários serão salvos. Se o diretório
não existir, crie-o com os.makedirs(). Isso garante que o sistema esteja sempre pronto para
armazenar os arquivos temporários recebidos.
import os
import
base64
import
whisper
class
Transcript:
def
__init__(self , save_dir="audio"):
# Diretório para
salvar os áudios
self.save_dir = save_dir
if not os.path.exists(save_dir):
os.makedirs(save_dir)
Em seguida, implemente o método auxiliar fix_base64_padding(), que corrige proble-
mas de padding na string em Base64. Isso é importante porque arquivos codificados em
Base64 nem sempre vêm com o preenchimento correto. Sem essa correção, a decodificação
pode gerar erro. Use esse método sempre antes de fazer o decode().
# Função para
corrigir o padding da string
Base64
def
fix_base64_padding (self , base64_string ):
missing_padding = len( base64_string ) % 4
if missing_padding != 0:
base64_string += "=" * (4 - missing_padding )
return
base64_string
Depois, implemente a função transcribe_audio_with_whisper(), que carrega o mo-
delo base do Whisper e realiza a transcrição do arquivo. O modelo recebe um caminho de
arquivo e retorna um dicionário com a chave text, que é exatamente o conteúdo transcrito.
def
transcribe_audio_with_whisper (self , audio_file):
CAPÍTULO 9. INTEFACES CONVERSACIONAIS E AGENTES DE CÓDIGO DINÂMICO
248
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 250

AGENTES INTELIGENTES 2
"""
Transcreve o áudio
usando
Whisper.
"""
try:
model = whisper.load_model("base")
# Escolha o modelo: tiny
, base , small , medium , large
result = model.transcribe(audio_file)
return
result["text"]
except
Exception as e:
print(f"Erro
durante a transcrição: {e}")
return
None
Por fim, o método principal get_text() orquestra todo o processo. Primeiro, corrija o
padding da string em Base64 usando o método auxiliar. Em seguida, decodifique os dados
de áudio e salve no disco como output_audio.wav. Após salvar, chame a transcrição com
transcribe_audio_with_whisper(). Remova o arquivo temporário para evitar acúmulo de
lixo no sistema. Caso ocorra algum erro, trate as exceções de Base64 ou outros erros gerais e
retorne None.
def
get_text(self , data) -> str:
try:
# Corrigir o padding da string
Base64
code_base64 = self. fix_base64_padding (data.
audio_base64_bytes )
# Decodificar a string
Base64
para
bytes de áudio
audio_data = base64.b64decode(data. audio_base64_bytes )
# Caminho do arquivo de saída
output_file = os.path.join(self.save_dir , "output_audio.wav"
)
# Salvar o arquivo no diretório
especificado
with open(output_file , "wb") as audio_file:
audio_file.write(audio_data)
print(f"Áudio
salvo com
sucesso em {output_file}")
# Transcrever o áudio
transcription = self. transcribe_audio_with_whisper (
output_file)
# (Opcional) Remover o arquivo
temporário
os.remove(output_file)
return
transcription
CAPÍTULO 9. INTEFACES CONVERSACIONAIS E AGENTES DE CÓDIGO DINÂMICO
249
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 251

AGENTES INTELIGENTES 2
except
base64.binascii.Error as e:
print(f"Erro de decodificação Base64: {e}")
return
None
except
Exception as e:
print(f"Erro
geral: {e}")
return
None
Agora vamos construir a classe responsável por transformar texto em áudio, usando a
API da ElevenLabs. Comece importando os pacotes necessários: os para acessar variáveis
de ambiente e lidar com arquivos, requests para fazer chamadas HTTP e load_dotenv()
para carregar variáveis do arquivo .env. Em seguida, crie a classe TextToSpeech. No
construtor, carregue a chave da API (ELEVENLABS_API_KEY) e o ID da voz que você quer usar
(SANDECO_VOICE_ID), ambos vindos do seu arquivo .env. Defina também o endpoint base da
API e o dicionário data_template, que contém as configurações do modelo de voz, como
estabilidade e similaridade.
Além disso, configure o cabeçalho da requisição HTTP com as informações obrigatórias:
tipo do conteúdo, aceitação do retorno como áudio MPEG e a chave da API. Tudo isso já
estará pronto para ser usado quando a função de síntese for chamada.
import os
import
requests
from
dotenv
import
load_dotenv
class
TextToSpeech:
def
__init__(self , chunk_size =1024):
"""
Inicializa a classe
TextToSpeech
com a chave da API e o tamanho
do chunk
para
download.
"""
load_dotenv ()
self.api_key = os.getenv(" ELEVENLABS_API_KEY ")
self.voice_id = os.getenv(" SANDECO_VOICE_ID ")
self.chunk_size = 1024
self.base_url = "https :// api.elevenlabs.io/v1/text -to -speech"
self.data_template = {
"model_id": " eleven_turbo_v2_5 ",
"voice_settings": {
"stability": 0.7,
" similarity_boost ": 1
}
}
self.headers = {
CAPÍTULO 9. INTEFACES CONVERSACIONAIS E AGENTES DE CÓDIGO DINÂMICO
250
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 252

AGENTES INTELIGENTES 2
"Accept": "audio/mpeg",
"Content -Type": "application/json",
"xi -api -key": self.api_key
}
9.9
GERANDO RESPOSTA EM ÁUDIO
Agora implemente o método synthesize_speech(), responsável por transformar o texto
em áudio. Primeiro, monte a URL final da requisição, concatenando o voice_id com a
base_url. Em seguida, faça uma cópia do data_template e adicione o texto a ser sintetizado.
Faça uma chamada POST para a API com requests.post(), passando o corpo JSON e os
cabeçalhos.
Verifique o código de status da resposta. Se a requisição falhar, levante uma exceção com
o código de erro e a mensagem da API. Caso contrário, salve o conteúdo de áudio no arquivo
especificado em output_file, escrevendo os dados em blocos (chunked) com o tamanho
definido no construtor. Ao final, imprima no terminal a confirmação de que o áudio foi salvo
com sucesso.
def
synthesize_speech (self , text , output_file):
"""
Gera um arquivo de áudio a partir de um texto
utilizando a API
ElevenLabs.
"""
url = f"{self.base_url }/{ self.voice_id}"
# Atualizando o template
com o texto
data = self.data_template .copy ()
data["text"] = text
response = requests.post(url , json=data , headers=self.headers)
if response.status_code != 200:
raise
Exception(f"Erro na requisição: {response.status_code}
- {response.text}")
with open(output_file , ’wb’) as f:
for chunk in response. iter_content (chunk_size=self.
chunk_size):
if chunk:
f.write(chunk)
CAPÍTULO 9. INTEFACES CONVERSACIONAIS E AGENTES DE CÓDIGO DINÂMICO
251
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 253

AGENTES INTELIGENTES 2
print(f"Áudio
gerado com
sucesso e salvo em: {output_file}")
Execute o app.py da aplicação e verifique a execução. Lembre-se de que esse projeto
usa EvolutionAPI, por isso você deve configurar o telefone que vai responder às solicitações
do usuário.
CAPÍTULO 9. INTEFACES CONVERSACIONAIS E AGENTES DE CÓDIGO DINÂMICO
252
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 254

AGENTES INTELIGENTES 2
9.9
EXERCÍCIOS
1. Releia a seção Agentes Auxiliares e explique com suas palavras como a execução de
código dinâmico transforma um agente conversacional em algo além de um simples
chatbot. Dê exemplos práticos de situações em que isso faria diferença real no seu
cotidiano profissional.
2. Com base nas seções sobre saúde e direito, crie um novo exemplo de uso de agentes
conversacionais em um ambiente crítico diferente, como logística, construção civil ou
educação. Descreva o contexto, o tipo de agente, os dados acessados e os tipos de
perguntas feitas.
3. Analise o padrão de projeto FacadeCrew apresentado no código. Depois, reescreva um
pseudocódigo (em português ou Python) que represente esse padrão em outro domínio,
como atendimento bancário ou suporte técnico.
4. Modifique a base vendas_ficticias_brasil.csv e adicione uma nova coluna cha-
mada Canal de Venda (Ex: Loja Física, E-commerce, Televendas). Depois, proponha
uma consulta que utilize essa nova coluna e descreva como o agente precisaria adaptar
o código para responder.
5. Escreva um fluxo de diálogo realista entre um usuário e o agente construído com o
CrewAI, simulando a solicitação de um relatório de vendas com base em um critério
qualquer (ex: clientes inadimplentes do último trimestre na região Norte). Inclua tanto a
mensagem do usuário quanto a resposta do agente.
CAPÍTULO 9. INTEFACES CONVERSACIONAIS E AGENTES DE CÓDIGO DINÂMICO
253
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 255

AGENTES INTELIGENTES 2
CAPÍTULO 10
O Poder do Postgres com CrewAI
Antes de tudo, pensa no Postgres como um bibliotecário nerd, organizado ao extremo,
que nunca esquece onde está cada livro — mesmo que a biblioteca tenha milhões de volumes.
Ele não só guarda os dados com carinho, como também responde a perguntas complexas
sobre eles de forma rápida e precisa. E o melhor: ele entende relacionamentos. Tipo, se você
perguntar *quem emprestou um livro de IA na última semana*, ele te entrega na hora. Esse é
o poder de um banco relacional robusto como o PostgreSQL.
Agora imagina o seguinte: você tá treinando uma equipe de agentes inteligentes com o
CrewAI e precisa que eles tenham acesso a uma base de conhecimento que muda o tempo
todo. Planilhas resolvem? Até certo ponto. Mas e quando o volume cresce? Quando você
precisa de relacionamentos complexos entre os dados? Entra o Postgres pra fazer o trabalho
pesado. Ele vira o centro nervoso das decisões do seu Crew.
O Postgres também é tipo aquele colega multitarefa que sabe falar várias línguas. Ele
não serve só pra guardar tabelas. Ele trabalha com JSON, com buscas textuais, com dados
geográficos — tudo isso direto do mesmo lugar. Ou seja, é um banco versátil que combina
perfeitamente com a dinâmica de agentes que precisam de respostas contextuais e rápidas.
Por fim, pense no Postgres como um co-piloto dos seus agentes. Ele não tenta ser o
cérebro da operação, mas é a memória de longo prazo que eles consultam quando precisam
tomar decisões mais inteligentes. Quando integrado ao CrewAI, ele transforma um time de
agentes que "pensam bem"em uma equipe que "decide melhor". É sobre isso: aliar inteligência
com estrutura. E o Postgres entrega essa estrutura como ninguém.
Projeto completo: Clique aqui para baixar
todo o projeto que aprenderemos nesse capítulo:
https://bit.ly/sandeco-crewai2-postgres
CAPÍTULO 10. O PODER DO POSTGRES COM CREWAI
254
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 256

AGENTES INTELIGENTES 2
Instalação do Postgres
Quer saber de uma coisa incrível? A gente já instalou o Postgres sem nem perceber.
Quando você colocou a EvolutionAPI pra rodar, o Docker já trouxe o banco junto, configurado
e funcionando. Ou seja, nada de script de instalação, nada de perder tempo com setup técnico.
Tá tudo no ar, no esquema, esperando seus agentes começarem a consultar, inserir e cruzar
dados de forma inteligente. É como se o CrewAI já tivesse um cofre de dados pronto pra ser
explorado — e o Postgres é a chave pra abrir. Legal, né?
Agora, vamos entrar no banco como verdadeiros exploradores. E pra isso, a gente
tem uma interface amigável chamada pgAdmin. Ela já vem acessível quando você sobe
os containers da EvolutionAPI e permite visualizar, editar e até executar queries direto no
navegador. Nada de terminal raiz ou linha de comando braba — aqui é tudo visual. Você
enxerga as tabelas, os dados, os relacionamentos e ainda pode testar suas queries antes de
colocar na mão dos agentes. É como abrir o mapa do tesouro antes de mandar a tripulação
em missão.
10.1
EXPLORANDO O POSTGRES - PGADMIN
O pgAdmin é uma interface gráfica para gerenciar bancos de dados PostgreSQL.
Ele permite que você visualize tabelas, escreva queries SQL, inspecione relacionamentos e
acompanhe o que está acontecendo no banco em tempo real. Tudo isso sem precisar escrever
comandos no terminal. É uma ferramenta essencial pra quem quer acompanhar e depurar as
interações entre os agentes do CrewAI e o banco com mais clareza.
Pra instalar o pgAdmin, basta acessar o site oficial: https://www.pgadmin.org/download/.
Lá você escolhe a versão de acordo com o seu sistema operacional — seja Windows, macOS
ou Linux. A instalação é tranquila e rápida. Em poucos minutos, você já vai estar com uma
central visual de controle do seu banco pronta pra rodar lado a lado com o CrewAI.
Agora vamos logar no banco de dados que está no docker quando instalamos a EvoAPI,
usando exatamente as mesmas informações que configuramos no arquivo .env, lá na Se-
ção 5.8. Lembra da variável DATABASE_CONNECTION_URI? É com base nela que vamos
preencher os campos de conexão no pgAdmin.
Clique com o botão direito em cima de Servers e selecione Register > Server.... No
campo Name, coloque um nome qualquer, só pra identificar o servidor visualmente na interface.
Depois vá até a aba Connection e preencha os campos da seguinte forma: em Host
name/address, digite localhost; em Port, coloque 5432; no campo Maintenance database,
use postgres; e tanto em Username quanto em Password, insira os mesmos valores definidos
CAPÍTULO 10. O PODER DO POSTGRES COM CREWAI
255
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 257

AGENTES INTELIGENTES 2
Figura 10.1: Abra o pgAdmin
no seu .env. No nosso exemplo, o usuário é postgres e a senha é 12345678. Clique em Save
e pronto! O servidor aparecerá na barra lateral e você poderá expandir o banco evolution,
exatamente como esperado.
Figura 10.2: Conectando ao banco evolution no pgAdmin usando as credenciais do arquivo
.env.
Agora que estamos conectados ao servidor, é hora de criar novos bancos de dados. No
pgAdmin, clique com o botão direito em cima da seção Databases e selecione a opção
Create > Database.... Isso vai abrir uma janela de criação onde você pode definir os detalhes
do novo banco.
No campo Database, escreva o nome desejado — no exemplo da Figura 10.3, usamos
ecommerce. O campo Owner já vem preenchido com o usuário atual, normalmente postgres,
e você pode deixar assim mesmo. Feito isso, clique em Save no canto inferior direito. O
CAPÍTULO 10. O PODER DO POSTGRES COM CREWAI
256
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 258

AGENTES INTELIGENTES 2
novo banco será adicionado imediatamente à lista e estará pronto para ser utilizado em seus
projetos com o CrewAI.
Figura 10.3: Criando um novo banco chamado ecommerce no pgAdmin.
Vamos repetir o mesmo processo da etapa anterior, só que agora criando outro banco
com um nome diferente. Com o pgAdmin aberto, clique com o botão direito sobre a seção
Databases e selecione a opção Create > Database.... Isso vai abrir novamente a janela de
criação de banco.
No campo Database, digite o nome clinica. O campo Owner já vem preenchido com
o usuário atual, normalmente postgres, e pode ser mantido como está. Não é necessário
preencher os outros campos agora. Finalize clicando em Save no canto inferior direito. Esse
novo banco será listado junto aos demais, disponível para ser utilizado por outros agentes no
seu projeto com CrewAI.
Figura 10.4: Criando um banco chamado clinica no pgAdmin.
Vamos começar a estruturar os dados criando as primeiras tabelas e seus relacionamentos.
CAPÍTULO 10. O PODER DO POSTGRES COM CREWAI
257
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 259

AGENTES INTELIGENTES 2
No painel lateral esquerdo do pgAdmin, selecione o banco de dados ecommerce e clique
com o botão direito sobre ele. Depois escolha a opção Query Tool. Isso vai abrir uma nova
aba onde você poderá executar comandos SQL diretamente no banco.
Agora carregue o conteúdo do arquivo ecommerce.sql, que está dentro do projeto, e
cole no editor. Em seguida, clique no botão de execução, localizado no canto superior da aba,
conforme indicado na Figura 10.5. Esse botão executa o script SQL, criando automaticamente
todas as tabelas e seus relacionamentos.
Repita exatamente o mesmo procedimento para o banco clinica, utilizando desta vez
o arquivo clinica.sql, também presente no projeto. Ao executar os dois scripts, os bancos
estarão prontos para serem utilizados pelos agentes do CrewAI.
Figura 10.5: Executando o script SQL para criação de tabelas no banco ecommerce usando
o Query Tool.
10.2
CONECTANDO O PYTHON COM O POSTGRES
Vamos utilizar a classe PostgresDatabases, que já está pronta no projeto. Abaixo estão
listados os métodos públicos disponíveis e o que cada um deles faz:
• get_database_uri(name: str): retorna a URI completa do banco de dados com base
no nome informado. Útil quando queremos trabalhar com nomes dinâmicos.
• __getitem__(name: str): permite acessar a URI do banco de dados usando a sintaxe
de dicionário, como por exemplo PostgresDatabases["clinica"].
• ECOMMERCE, CLINICA, EVOLUTION: propriedades estáticas que retornam direta-
mente a URI completa de cada banco. São práticas quando o nome do banco já é fixo
no código.
CAPÍTULO 10. O PODER DO POSTGRES COM CREWAI
258
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 260

AGENTES INTELIGENTES 2
Esses métodos cobrem os principais cenários de uso com o CrewAI e deixam o código
mais limpo, evitando repetição de strings e erros de digitação.
A classe PostgresConnection
Vamos utilizar a classe PostgresConnection, responsável por gerenciar as conexões
com os bancos de dados. Abaixo estão listados os métodos públicos disponíveis e o que cada
um faz:
• __init__(database_uri): inicializa a instância com a URI do banco de dados a ser
utilizado.
• connect(): estabelece a conexão com o banco de dados PostgreSQL.
• disconnect(): encerra a conexão ativa com o banco de dados e fecha o cursor.
• get_current_database(): retorna o nome do banco de dados atualmente conectado,
usando o comando SQL SELECT current_database().
• __enter__() e __exit__(): permitem utilizar a classe dentro de um bloco with, garantindo
que a conexão seja automaticamente aberta e fechada.
• get_colunas(): retorna os nomes das colunas da última consulta executada, com base
no cursor.description.
Esses métodos cobrem todas as operações básicas de conexão, consulta e controle que
vamos utilizar na integração com o CrewAI.
10.3
GERANDO ESQUEMAS
Antes de seguir, crie uma pasta chamada schemas na raiz do seu projeto. Em seguida,
execute o arquivo schema_generator.py. Esse código vai gerar, automaticamente, os detalhes
do schema de cada banco de dados — incluindo tabelas, colunas, tipos de dados e até valores
categóricos — em arquivos no formato YAML. Esses arquivos são essenciais, pois vão servir
como base para nossos agentes do CrewAI escreverem SQL por conta própria. Isso mesmo:
os agentes vão gerar código SQL pra gente!
A classe utilizada nesse processo é a SchemaTool, que possui os seguintes métodos
públicos:
• __init__(database_uri, categorical_columns): inicializa a instância com a URI do
banco e um dicionário com colunas categóricas opcionais.
• connect(): estabelece a conexão com o banco de dados.
CAPÍTULO 10. O PODER DO POSTGRES COM CREWAI
259
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 261

AGENTES INTELIGENTES 2
• disconnect(): fecha a conexão com o banco de dados.
• list_tables_and_columns(): retorna um dicionário contendo os schemas, tabelas,
colunas e possíveis valores categóricos.
• get_distinct_values(schema, table, column): retorna os valores distintos de uma
coluna categórica.
• get_primary_key(schema, table): obtém o nome da chave primária de uma tabela.
• generate_yaml(): gera um arquivo YAML contendo a estrutura do banco conectado.
• kickoff(): executa o processo completo de conexão, extração das informações e geração
do arquivo YAML.
Antes de rodar o arquivo schema_generator.py, você precisa definir duas coisas impor-
tantes no final do código, dentro do bloco:
if __name__ == "__main__":
A primeira é qual banco de dados será utilizado. Isso é feito ajustando a variável data-
base_uri. Por exemplo, se for gerar o schema do banco clinica, escreva:
database_uri = PostgresDatabases .CLINICA
A segunda definição é o dicionário categorical_columns, onde você especifica quais
tabelas contêm colunas categóricas — aquelas que possuem um número limitado de valores
e são úteis para os agentes entenderem o domínio da informação.
Para o banco ecommerce, você pode usar:
categorical_columns = {
"categorias": ["nome"],
" metodos_pagamento ": ["nome"],
"status" : ["nome"]
}
E para o banco clinica, use:
categorical_columns = {
"convenios": ["nome"],
}
Depois que essas duas partes estiverem ajustadas, é só executar o script e deixar o resto
com a SchemaTool.
Vamos fazer um teste de conexão. Abra o arquivo test_conn.py e execute esse código
CAPÍTULO 10. O PODER DO POSTGRES COM CREWAI
260
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 262

AGENTES INTELIGENTES 2
para garantir que está tudo funcionando corretamente com a conexão ao banco de dados.
Primeiro, importe a classe PostgresConnection, que você já implementou anteriormente,
e também a classe PostgresDatabases, responsável por fornecer as URIs dos bancos que
você configurou. Em seguida, defina a variável ecommerce_database utilizando a constante
PostgresDatabases.ECOMMERCE, que retorna a URI completa do banco ecommerce.
Crie uma instância da classe PostgresConnection passando a URI como argumento.
Em seguida, chame o método connect() para abrir a conexão com o banco. Após a conexão
ser estabelecida, imprima o nome do banco atual com o método get_current_database(),
apenas para confirmar que estamos conectados ao banco correto.
Depois disso, utilize a propriedade cursor para enviar comandos SQL ao banco. Defina
a query como uma string: SELECT * from "categorias"; — repare que o nome da tabela
está entre aspas duplas, pois estamos consultando diretamente o banco ecommerce, e a
tabela categorias existe nele.
Execute a query com cursor.execute(), depois utilize cursor.fetchall() para recuperar os
resultados da consulta. Por fim, imprima esses resultados no console.
from
postgres_connection
import
PostgresConnection
# Certifique -se de
que está importando a conexão corretamente
from
postgres_databases
import
PostgresDatabases
from
psycopg2
import sql
ecommerce_database = PostgresDatabases .ECOMMERCE
conn = PostgresConnection (database_uri= ecommerce_database )
conn.connect ()
print(conn. get_current_database ())
cursor = conn.cursor
sql_query =’SELECT * from "categorias ";’
cursor.execute(sql_query)
# Obtendo os resultados
results = cursor.fetchall ()
print(results)
CAPÍTULO 10. O PODER DO POSTGRES COM CREWAI
261
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 263

AGENTES INTELIGENTES 2
10.4
AGENTE AI-QUERY
O conceito de AI-Query representa uma nova forma de interação com bancos de dados,
onde agentes de inteligência artificial são capazes de compreender a estrutura e o conteúdo
das tabelas, e, com base nisso, escrever consultas SQL de maneira autônoma. Em vez de
exigir que o usuário tenha conhecimento técnico para montar uma query manualmente, o
agente interpreta uma solicitação em linguagem natural e transforma essa intenção em uma
consulta estruturada e precisa.
Esses agentes utilizam como base os arquivos schema yaml que extraímos anteriormente
com o SchemaTool. Esses arquivos contêm uma descrição completa das tabelas, colunas,
tipos de dados e até exemplos de valores categóricos. Com essas informações, o agente é
capaz de entender o contexto do banco e gerar instruções SQL compatíveis com sua estrutura,
mesmo sem nunca ter interagido com aquele banco antes.
O verdadeiro poder do AI-Query aparece quando essas queries geradas são executadas
dinamicamente em tempo de execução dentro de uma aplicação Python. Isso permite automa-
tizar relatórios, gerar visualizações, fazer análises em tempo real e até alimentar dashboards
— tudo isso a partir de comandos simples, como: ’me mostre os produtos mais vendidos no
último mês’ ou ’liste os pacientes com consulta marcada para hoje’. Com essa abordagem, a
barreira técnica entre usuários e dados praticamente desaparece.
10.5
CREW AI-QUERY
Vamos explicar a SQLQueryCrew por partes. Lembre-se: o arquivo completo está no
projeto, localizado em crew_query.py.
Começamos com os imports essenciais para o funcionamento da classe. Importamos o
load_dotenv para garantir que as variáveis de ambiente estejam disponíveis, e em seguida os
principais componentes do CrewAI: Agent, Task, Crew e Process. Também é importada a
ferramenta FileReadTool, que será usada pelo agente para ler o conteúdo do arquivo YAML
contendo a estrutura do banco de dados.
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
Na definição da classe SQLQueryCrew, criamos uma estrutura que centraliza a criação
CAPÍTULO 10. O PODER DO POSTGRES COM CREWAI
262
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 264

AGENTES INTELIGENTES 2
de um agente especializado em SQL e a execução de sua tarefa. O método __init__ é
responsável por carregar as variáveis de ambiente, definir o modelo de linguagem que será
utilizado pelo agente (no caso, "gpt-4o-mini"), e instanciar a ferramenta FileReadTool, que
será utilizada para ler o YAML. Em seguida, o método create_crew() é chamado para montar
toda a estrutura do agente e da tarefa.
class
SQLQueryCrew:
"""
Classe
para
organizar
agentes , tarefas e a execução da geração de
consultas
SQL.
"""
def
__init__(self):
load_dotenv ()
# Carregar
variáveis de ambiente
self.llm = "gpt -4o-mini"
# Definir o modelo de linguagem
usado
pelo
agente
self.schema_tool = FileReadTool ()
self.crew = None
# Será inicializado no create_crew ()
# Criar a Crew no momento da inicialização
self.create_crew ()
No método create_crew(), definimos primeiro o agente com o papel de "Especialista
em SQL". Esse agente tem um objetivo claro: gerar consultas SQL precisas e otimizadas
com base na descrição da tarefa. Sua história de fundo (backstory) reforça sua experiência e
habilidades. Ele tem acesso à ferramenta schema_tool, que será usada para ler a estrutura
do banco de dados diretamente de um arquivo YAML. A execução do agente será detalhada e
com memória ativada.
def
create_crew(self):
""" Cria os agentes , tarefas e a CrewAI."""
# Criando o agente
especialista em SQL
self.sql_agent = Agent(
role="Especialista em SQL",
goal="Gerar
consultas
SQL
precisas e otimizadas
para
diferentes
bancos de dados.",
backstory =(
"Você é um renomado
especialista em SQL , com
conhecimento
avançado em diversas
bases de dados , incluindo
Postgres , MySQL e SQL
Server. "
"Sua missão é interpretar
descrições textuais e transformá-
las em consultas
SQL eficientes , sempre
considerando a estrutura do
banco de dados."
CAPÍTULO 10. O PODER DO POSTGRES COM CREWAI
263
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 265

AGENTES INTELIGENTES 2
),
tools =[ self.schema_tool],
verbose=True ,
memory=True ,
llm=self.llm
)
Em seguida, criamos a tarefa que será atribuída ao agente. A descrição da tarefa é
longa e cuidadosamente estruturada. Ela fornece todas as instruções necessárias para que
o agente gere uma consulta SQL com base na estrutura de um banco de dados fornecida
em um arquivo YAML. A descrição também orienta sobre como lidar com diferentes formatos
de saída (JSON ou tabular), quais funções SQL usar de acordo com o tipo de banco e dicas
de otimização para performance, como o uso de índices, junções otimizadas e filtros bem
estruturados.
# Criando a tarefa que o agente
executará
self.task = Task(
description =(
r"""A partir do meu
gerenciador { database_type },
no banco de dados
’{ database_name }’,
e do esquema
fornecido no arquivo
YAML
localizado em {yaml_path},
gere uma
consulta
SQL
otimizada
para
atender ao seguinte
pedido:
{user_request }.
Certifique -se de usar as tabelas e colunas
corretas
conforme a estrutura do YAML.
O valor
inserido em ‘json_output ‘ é {json_output }.
IMPORTANTE:
- ** Formato de Retorno :**
Se ‘json_output ‘ for ** True**, a consulta
deve
retornar os
dados em formato JSON ,
usando as funções apropriadas
para cada
banco de dados:
- ** Postgres :** ‘row_to_json ()‘ ou ‘json_agg ()‘
- ** MySQL :** ‘JSON_OBJECT ()‘ ou ‘JSON_ARRAYAGG ()‘
- **SQL Server :** ‘FOR JSON AUTO ‘
- ** Oracle :** ‘JSON_OBJECT ()‘
Caso
contrário , a consulta
deve ser
otimizada
para um **
retorno
tabular
tradicional **.
- ** Otimização:**
- Sempre
utilize **índices
disponíveis ** para
melhorar a
CAPÍTULO 10. O PODER DO POSTGRES COM CREWAI
264
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 266

AGENTES INTELIGENTES 2
performance.
- Se houver junções (‘JOINs ‘), prefira ** chaves
indexadas
** para
evitar
scans
desnecessários.
- Ordene os resultados de maneira lógica se necessário (‘
ORDER BY ‘).
- ** Considerações Específicas :**
- Evite
selecionar
colunas
desnecessárias (‘SELECT *‘ não
é recomendado).
- Se a consulta
precisar de filtros (‘WHERE ‘), utilize os
campos de indexação do banco de dados
para
maior
eficiência.
- Para
valores nulos , utilize
funções adequadas
como ‘
COALESCE ()‘ para
garantir
legibilidade no resultado.
"""
),
expected_output="Uma
consulta
SQL válida e otimizada
para o
banco de dados
especificado.",
agent=self.sql_agent
)
Finalizando o método, criamos o Crew propriamente dito, passando a lista de agentes e
de tarefas criadas anteriormente. O process é definido como sequential, o que significa que
as tarefas devem ser executadas uma após a outra.
# Criando a equipe com o agente e a tarefa
self.crew = Crew(
agents =[ self.sql_agent],
tasks =[ self.task],
process=Process.sequential
# A execução será sequencial
)
Por fim, o método kickoff é responsável por executar a tripulação. Ele recebe como
entrada um dicionário com os parâmetros que serão injetados nos placeholders da tarefa:
tipo de banco de dados, nome do banco, caminho do YAML, requisição do usuário e o tipo
de retorno esperado (JSON ou tabular). O resultado final gerado pelo agente é tratado para
remover possíveis crases e retornar somente o SQL puro.
def
kickoff(self , inputs):
"""
Executa o processo de geração de consultas
SQL.
Args:
inputs (dict): Dicionário
contendo os parâmetros de entrada:
- database_type (str): Tipo do banco de dados (Postgres ,
MySQL , etc.).
CAPÍTULO 10. O PODER DO POSTGRES COM CREWAI
265
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 267

AGENTES INTELIGENTES 2
- database_name (str): Nome do banco de dados.
- yaml_path (str): Caminho do arquivo
YAML
contendo a
estrutura do banco.
- user_request (str): Pedido
textual
para
gerar a consulta
SQL.
- json_output (bool): Define se a consulta
deve
retornar um
JSON ou um formato
tabular.
Returns:
str: A consulta
SQL gerada no formato
esperado.
"""
result = self.crew.kickoff(inputs=inputs).raw
result = result.replace("sql","")
# Remover as crases
triplas
para
evitar
problemas
com
formatação de código
result = result.replace("‘‘‘", "")
# Remover as crases
triplas
para
evitar
problemas
com
formatação de código
return
result
Testando a Crew
Para testar se a SQLQueryCrew está funcionando corretamente, execute o arquivo
crew_query_test.py que já está incluído no projeto. Esse arquivo foi criado especialmente
para simular um cenário completo de uso da crew, passando os parâmetros necessários e
exibindo o resultado gerado pela consulta SQL.
Certifique-se de que os arquivos YAML de schema já foram gerados anteriormente com
o schema_generator.py, pois eles são fundamentais para que o agente consiga interpretar
corretamente a estrutura do banco de dados. Depois disso, rode o script e veja a mágica
acontecer.
A classe utilizada neste código é a SQLQueryCrew, e abaixo estão listados os métodos
públicos disponíveis e o que cada um deles faz:
• __init__(): inicializa a classe, carregando variáveis de ambiente, configurando o modelo
de linguagem e criando a estrutura da crew com agentes e tarefas.
• create_crew(): monta a estrutura da crew, criando o agente especialista em SQL, a
tarefa a ser executada, e unindo tudo na classe Crew.
• kickoff(inputs): executa a tarefa da crew com base nos parâmetros passados em
inputs. Retorna uma string contendo a consulta SQL gerada de acordo com o pedido
do usuário.
CAPÍTULO 10. O PODER DO POSTGRES COM CREWAI
266
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 268

AGENTES INTELIGENTES 2
10.6
CRIANDO UM CHAT COM O BANCO DE DADOS
Agora que nossa crew já é capaz de entender a estrutura do banco de dados e gerar
consultas SQL de forma autônoma, chegou a hora de dar um passo além: vamos integrar tudo
isso com uma interface interativa usando o Streamlit. Com essa integração, qualquer pessoa
poderá conversar com o banco de dados em linguagem natural, sem precisar escrever uma
linha de SQL. Basta digitar a pergunta e deixar que os agentes cuidem do resto.
Vamos explicar a integração da nossa crew com o Streamlit por partes. Essa implemen-
tação permitirá que qualquer pessoa envie requisições em linguagem natural e visualize os
resultados da consulta SQL diretamente numa interface web interativa.
Iniciamos com os imports necessários. Aqui importamos o Streamlit, o os para manipular
diretórios, pandas para organizar os resultados em tabelas, e por fim, a SQLQueryCrew, que
é a nossa estrutura de agente que gera a consulta SQL com base na solicitação do usuário.
Também importamos a conexão e o mapeamento dos bancos para realizar a consulta real no
banco de dados.
import
streamlit as st
import os
import
pandas as pd
from
crew_query
import
SQLQueryCrew
from
postgres_connection
import
PostgresConnection
# Certifique -se de
que está importando a conexão corretamente
from
postgres_databases
import
PostgresDatabases
Em seguida, definimos o caminho do arquivo de schema baseado na localização atual do
arquivo e instanciamos a SQLQueryCrew. Depois disso, iniciamos a configuração da interface
usando o st.title() para exibir o título e o st.sidebar para configurar as entradas da consulta.
O usuário pode escolher o tipo de banco de dados, selecionar o nome do banco e preencher
o campo de texto com a solicitação. Há ainda um checkbox para decidir se deseja exibir os
resultados em formato gráfico.
# Configuração do caminho do schema
root = os.path.dirname(os.path.abspath(__file__))
# Instanciando o agente de consulta
SQL
sql_crew = SQLQueryCrew ()
# Configuração da interface do Streamlit
st.title("AI -Query")
CAPÍTULO 10. O PODER DO POSTGRES COM CREWAI
267
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 269

AGENTES INTELIGENTES 2
# Entrada do usuário
st.sidebar.header("Configuração da Consulta")
# Seleção do tipo de banco de dados
database_type = st.sidebar.selectbox("Tipo de Banco de Dados", ["
Postgres", "MySQL", "SQLite"], index =0)
# Seleção do nome do banco de dados
database_name = st.sidebar.selectbox("Nome do Banco", ["ecommerce", "
clinica"], index =0)
# Atualiza o caminho do schema
conforme o banco
selecionado
schema_path = os.path.join(root , "schemas",f"schema_{ database_name }. yaml
")
# Área de texto
para que o usuário insira a consulta
user_request = st.text_area("Digite sua
solicitação:",
"")
# Checkbox
para
exibir gráfico
exibir_grafico = st.checkbox("Exibir
resultados em gráfico")
Agora temos o botão "Executar Consulta" que, ao ser clicado, verifica se o campo de
texto está preenchido. Caso esteja vazio, um aviso é exibido. Caso contrário, montamos o
dicionário de inputs e o enviamos para o método kickoff() da nossa SQLQueryCrew. Em
seguida, o SQL gerado é exibido para o usuário na interface. A partir desse ponto, conectamos
ao banco de dados selecionado, executamos a query e capturamos os resultados.
# Botão para
executar a consulta
if st.button("Executar
Consulta"):
if not
user_request.strip ():
st.warning("A solicitação não pode
estar
vazia. Por favor ,
insira um comando.")
else:
inputs = {
"database_type": database_type ,
"database_name": database_name ,
"yaml_path": schema_path ,
"user_request": user_request ,
"json_output": False
}
sql_query = sql_crew.kickoff(inputs)
# O resultado
vem em JSON
# Exibir a consulta
SQL gerada
st.subheader("Consulta
SQL Gerada:")
CAPÍTULO 10. O PODER DO POSTGRES COM CREWAI
268
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 270

AGENTES INTELIGENTES 2
Com a consulta SQL em mãos, estabelecemos a conexão com o banco usando a URI
correta. Executamos a consulta, coletamos os dados com fetchall() e as colunas com
get_colunas(). Os dados são organizados num DataFrame do pandas e exibidos como
tabela interativa. Se a opção de gráfico estiver habilitada e houver colunas numéricas, um
gráfico de barras será gerado automaticamente com a primeira coluna como índice.
# Verifica se há dados no resultado e converte
para
DataFrame
if sql_query:
ecommerce_database = PostgresDatabases . get_database_uri (
database_name)
conn = PostgresConnection (database_uri= ecommerce_database )
conn.connect ()
cursor = conn.cursor
cursor.execute(sql_query)
# Obtendo os resultados
results = cursor.fetchall ()
colunas = conn.get_colunas ()
df = pd.DataFrame(results , columns=colunas)
st.subheader("Resultado da Consulta:")
if exibir_grafico :
# Se houver
pelo
menos uma coluna numérica , exibir o grá
fico
for col in df.columns:
try:
df[col] = pd.to_numeric(df[col]. astype(str).str.
replace(",", "."))
# Conversão explícita
except
ValueError:
pass
# Se não puder
converter , mantém o valor
original
numeric_columns = df. select_dtypes (include =["number"]).
columns.tolist ()
if len( numeric_columns ) >= 1:
st.bar_chart(df.set_index(df.columns [0]))
#
Primeiro
campo
vira índice no gráfico
else:
st.warning("Os dados
retornados não possuem
colunas
numéricas
para
exibir um gráfico.")
CAPÍTULO 10. O PODER DO POSTGRES COM CREWAI
269
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 271

AGENTES INTELIGENTES 2
st.dataframe(df)
# Exibe os dados
como
tabela
interativa
else:
st.warning("Nenhum
dado
encontrado
para essa
consulta.")
A interface exibida na Figura 10.6 é gerada a partir do arquivo crew_query_streamlit.py.
Para acessar esse chat e interagir com sua crew de forma visual, execute o seguinte comando
no terminal:
streamlit
run
crew_query_streamlit .py
Após executar o comando, o navegador será aberto automaticamente e você verá a tela
interativa onde poderá selecionar o tipo de banco, escolher o nome do banco, digitar sua
solicitação em linguagem natural e clicar em Executar Consulta. Pronto, agora você pode
conversar com seu banco de dados de forma simples e intuitiva.
Figura 10.6: Interface gerada pelo arquivo crew_query_streamlit.py.
Conversando com o Ecommerce
A Figura 10.7 mostra exatamente o momento em que nossa AI-Query, integrada via
Streamlit, é capaz de transformar uma solicitação simples em linguagem natural — "quantos
clientes temos?" — em uma consulta SQL real e executável. A parte da interface à esquerda
continua oferecendo as opções de configuração, como o tipo e o nome do banco de dados. Já
no centro da tela, temos a área principal de interação com o usuário.
CAPÍTULO 10. O PODER DO POSTGRES COM CREWAI
270
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 272

AGENTES INTELIGENTES 2
Logo após o clique no botão Executar Consulta, o agente do CrewAI processa o
pedido textual e retorna uma SQL estruturada: SELECT COUNT(*) AS total_clientes FROM
clientes;. Abaixo dessa consulta, temos o resultado sendo exibido em uma tabela com
apenas uma linha e uma coluna, informando o total de clientes cadastrados no banco: 15. A
interface também exibe de forma destacada a Consulta SQL Gerada, para que o usuário
possa entender exatamente o que foi executado no banco.
Esse é o grande diferencial da abordagem com agentes: ela permite que qualquer
pessoa — mesmo sem conhecimento técnico — consulte dados complexos com naturalidade
e segurança. A AI-Query interpreta a intenção por trás da pergunta e retorna respostas
confiáveis, estruturadas e visuais.
Figura 10.7: Consulta em linguagem natural convertida automaticamente para SQL pela
AI-Query.
CAPÍTULO 10. O PODER DO POSTGRES COM CREWAI
271
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 273

AGENTES INTELIGENTES 2
10.7
EXERCÍCIOS PRÁTICOS
1. Crie um novo banco chamado financeiro no pgAdmin e adicione ao menos duas
tabelas com relacionamento entre elas (ex: transacoes e usuarios). Gere o schema
desse banco utilizando o schema_generator.py.
2. Edite o arquivo schema_generator.py para definir corretamente o dicionário categori-
cal_columns com base nas tabelas do novo banco financeiro. Execute novamente o
script e confirme que o arquivo YAML foi gerado corretamente.
3. Crie uma nova instância da SQLQueryCrew e envie uma requisição simulando um
pedido do usuário: ’Quais usuários fizeram mais de 3 transações no último mês?’
usando o banco financeiro.
4. Integre o novo banco financeiro ao crew_query_streamlit.py. Certifique-se de que
ele apareça como uma das opções no seletor de banco de dados e que a consulta seja
executada corretamente a partir da interface.
5. Modifique o agente da SQLQueryCrew para incluir no backstory que ele também
entende queries financeiras. Isso vai ajudar o modelo a interpretar melhor os context
CAPÍTULO 10. O PODER DO POSTGRES COM CREWAI
272
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


