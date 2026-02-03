# python-para-inteligencia-artificial.pdf

## Page 1

Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 2

Python se tornou a linguagem essencial para quem deseja criar soluções de Inteligência
Artificial (IA) devido à sua simplicidade, flexibilidade e vasta coleção de bibliotecas especia-
lizadas, como TensorFlow, Keras e PyTorch. Este livro foca no que você realmente precisa
saber de Python para desenvolver IA de forma eficaz, desde os fundamentos da linguagem
até técnicas mais avançadas de manipulação de dados e otimização de código. Em vez de se
aprofundar nas teorias da IA, nossa proposta é preparar você para os desafios práticos de
criar modelos eficientes e escaláveis.
Ao dominar o Python, você vai além do básico; aprender a utilizar estruturas e funções
que permitem otimizar operações complexas e lidar com grandes volumes de dados, o que
é essencial em projetos de IA. Com um entendimento sólido de Python, você será capaz
de integrar diversas ferramentas e bibliotecas de maneira eficiente, criando ambientes de
desenvolvimento robustos, como no caso dos agentes inteligentes, tipo o CrewAI. Dessa
forma, você pode focar em criar soluções inovadoras sem se perder nos detalhes técnicos.
Este livro foi elaborado para guiá-lo por essa jornada, e visa ajudar a compreender as
capacidades das bibliotecas de IA e como utilizá-las ao máximo. Com uma base sólida
de Python, você estará preparado para explorar todo o potencial da linguagem, construirá
soluções inteligentes e impactantes no mundo real, de forma prática e acessível.
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 3

Dedico este livro ao meu pai Josenilson
que fez 70 anos nesse ano de 2024.
Eu te amo painho!
Copyright © 2024
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 4

Sumário
1
A Inteligência Artificial fala Python
6
1.1
Poder e Diversão: Pode isso Arnaldo?
7
1.2
Quase toda IA do mundo fala Python
12
1.3
Os grandes e o Python
13
1.4
Bibliotecas: Máquinas que Simplificam o Trabalho
14
1.5
Instalando o Python
16
1.6
Um editor gratuito e excelente
19
1.7
Divertido, mas sem bagunça
20
2
Começando do Básico Mesmo
24
2.1
Variáveis em Python
25
2.2
Pergunta Vai, Resposta Vem: Input e Output com Python!
27
2.3
Strings em Python
29
2.4
Dados Primitivos - Números Inteiros, Floats e Booleanos
32
2.5
Operadores Aritméticos, Comparativos e Lógicos
34
2.6
Comentários em Python
36
2.7
Por que o Básico é tão Importante para IA?
38
2.8
Se não praticar não vai fixar
41
3
Deixando Você no Controle
43
3.1
Estruturas de Controle de Fluxo
44
3.2
’E se...’, Programa que toma decisões
45
3.3
Repetindo Até Acertar: Dominando os Loops
47
3.4
Parece música: break e continue
50
3.5
Controles Python e a inteligência artificial
52
3.6
A prática leva à excelência
54
4
Funções: Escreva uma vez, use para sempre
55
4.1
Introdução às Funções: O que São e Por Que Usar?
56
4.2
Criando Sua Primeira Função - Sintaxe e Exemplos
57
4.3
Funções que Chamam Funções
62
4.4
Recursão: Função que chama ela mesma
64
3
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 5

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
4.5
Por que funções são importantes para IA
67
4.6
Vamos praticar
69
5
Estruturas de Dados Compostas
70
5.1
Vetores: A Arte de Colocar Tudo no Lugar!
71
5.2
Matrizes: Tabelas Nerds e seus superpoderes!
74
5.3
Listas: o superpoder da simplificação
78
5.4
Dicionários em Python: o pai dos inteligentes
82
5.5
Tuplas: A Lista Casca-Grossa do Python!
84
5.6
Conjuntos: Quem É Quem no Baile dos Dados!
86
5.7
Por que IA Ama Estruturas Compostas?
89
5.8
Vamos exercitar
91
6
Python com Baterias Inclusas
92
6.1
Abastecendo Seu Kit de Ferramentas!
93
6.2
NumPy: Velocidade Supersônica
95
6.3
Pandas, O Kung Fu em Data Science
99
6.4
Pillow, travesseiros? Não, imagens em Python
102
6.5
pypdf: Virando Ninja na Manipulação de PDFs!
105
6.6
OpenCV: Transforme Python em Diretor de Vídeo!
109
6.7
PyAutoGUI: Automação Divertida com Bots!
114
6.8
Pytesseract: Python Decifrando meu Garrancho!
118
6.9
Amor Perfeito: Python, IA e Suas Bibliotecas Fabulosas!
120
6.10 Cai pra dentro
122
7
A Arte de Errar com Elegância!
124
7.1
Tente (try), mas se errar não pare
125
7.2
Bloco Else
127
7.3
Bloco finally
131
7.4
Exceções Personalizadas
133
7.5
Boas Práticas no Tratamento de Exceções
137
7.6
Introdução à Manipulação de Arquivos
139
7.7
Abertura de Arquivos com open
139
7.8
Leitura de Arquivos
141
7.9
Escrita em Arquivos
144
7.10 Uso de Gerenciadores de Contexto with
147
7.11 Fechamento de Arquivos com close
148
7.12 Manipulação Avançada de Arquivos
149
7.13 Boas Práticas na Manipulação de Arquivos
151
7.14 Arquivos e Exceções na IA
152
SUMÁRIO
4
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 6

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
7.15 Praticando e praticando
154
8
Python e o Mundo em Objetos
155
8.1
Definindo Classes e Criando Objetos
156
8.2
Atributos de Instância e Classe
159
8.3
Métodos de Instância, Classe e Estáticos
161
8.4
Encapsulamento
163
8.5
Herança
165
8.6
Polimorfismo
167
8.7
Composição
169
8.8
Interfaces e Classes Abstratas
171
8.9
Boas Práticas na Orientação a Objetos
173
8.10 Orientação a Objetos na Inteligência Artificial
174
8.11 Exercícios
176
SUMÁRIO
5
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 7

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
CAPÍTULO 1
A Inteligência Artificial fala Python
Imagine que você está prestes a aprender uma nova língua. Talvez seja francês, espanhol
ou até japonês. De cara, pode parecer uma tarefa intimidadora: são regras gramaticais,
conjugações, palavras novas... Mas e se eu lhe dissesse que existe uma língua que é fácil de
aprender, prática e que abre portas para um mundo inteiro de possibilidades, principalmente o
mundo da inteligência artificial? Bem, essa é a proposta do Python.
Python é como aprender uma língua humana, mas com uma vantagem: ele foi desenhado
para ser intuitivo. Diferente de outras linguagens de programação, que muitas vezes parecem
falar um dialeto próprio, Python soa como um bom e velho diálogo. Escrever em Python é quase
como escrever uma lista de instruções para um amigo — e esse amigo é seu computador.
Pense em Python como o equivalente ao “Inglês Simplificado” da programação. Enquanto
algumas linguagens se parecem com aqueles idiomas cheios de exceções e regras complexas
(estou olhando para você, C++), Python é mais como aprender italiano: direto ao ponto,
elegante e, o melhor de tudo, fácil de entender.
Assim como as pessoas escolhem aprender uma língua como o inglês porque ela é
amplamente falada e útil em diversos contextos, Python é uma escolha natural para quem
começa a programar. É a linguagem universal que se encaixa em quase qualquer cenário:
seja para desenvolver um site, automatizar tarefas repetitivas, ou até treinar uma inteligência
artificial.
Sou professor e adoro lecionar sobre inteligência artificial. Meus alunos das disciplinas
de Inteligência Artificial e Tópicos Avançados de IA do Instituto Federal de Goiás (IFG), os
da pós-graduação stricto sensu da UFG, e até os seguidores do Canal Sandeco no YouTube
sempre me perguntam: ’Professor, o que eu preciso saber de Python para criar minhas
próprias IAs?’, ’Tenho que saber programar?’, ’É difícil?’. Este livro é a resposta a essas
dúvidas: o que exatamente do Python você precisa dominar para criar uma IA? E saibam. . . é
mais simples do que vocês imaginam!
CAPÍTULO 1. A INTELIGÊNCIA ARTIFICIAL FALA PYTHON
6
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 8

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
A verdade é que, hoje em dia, a Inteligência Artificial praticamente fala Python. Essa
linguagem se tornou a favorita no mundo da IA porque é intuitiva, fácil de aprender e tem uma
comunidade gigantesca sempre pronta para ajudar, como eu converso com você aqui neste
livro. Com Python, você não precisa ser um mestre da programação; basta ter o básico e
já estará a um passo de criar modelos inteligentes que podem fazer coisas incríveis, como
reconhecer imagens, traduzir textos e até criar música! O mais interessante é que, com as
bibliotecas certas, Python simplifica o trabalho pesado, permitindo que você se concentre mais
nas ideias e menos nos detalhes técnicos.
A beleza do Python está na sua simplicidade e na forma como ele se adapta às necessi-
dades de quem o utiliza. É como um idioma em que você pode começar com frases simples e,
conforme se sente mais confortável, aumentar a complexidade e profundidade. Não importa
se você quer apenas pedir um café ou discutir filosofia; Python vai estar ao seu lado, pronto
para acompanhá-lo nessa jornada.
Neste livro, vamos explorar juntos como aprender essa linguagem, um passo de cada vez.
E, quem sabe, ao final, você estará não só falando Python, mas também pensando em Python.
E é aí que a mágica realmente acontece.
1.1
PODER E DIVERSÃO: PODE ISSO ARNALDO?
Claro que pode. A programação era vista como algo sério demais, cheia de códigos
complicados e manuais que pareciam ter sido escritos por escribas antigos. Foi nesse cenário,
lá nos anos oitenta, que um cara chamado Guido van Rossum, um programador holandês,
decidiu que queria mudar o jogo. Guido trabalhava em um centro de pesquisa na Holanda
e queria uma linguagem de programação que fosse simples e intuitiva, algo que as pessoas
pudessem usar sem se sentirem intimidadas. Mas ele também queria que a coisa toda fosse
divertida. Todo mundo acha que o nome da linguagem ’Python’ vem da cobra píton, mas, na
verdade, a origem está na zoeira pura — e é aí que entra o Monty Python’s Flying Circus!
Monty Python’s Flying Circus, para quem não conhece, é um grupo de comédia britânico
que virou um ícone nos anos setenta. Eles eram conhecidos por seu humor absurdo, esquetes
sem sentido e uma maneira única de ver o mundo — tudo muito inesperado e, claro, hilário.
O nome ’Python’ da linguagem de programação é uma homenagem a esse grupo. Guido
van Rossum era fã do Monty Python e queria que sua nova criação tivesse um pouco dessa
irreverência. Ele acreditava que a programação não precisava ser uma coisa enfadonha, e por
que não trazer um pouco de humor para o mundo da codificação?
E foi assim que Python, a linguagem, ganhou seu nome e, de certa forma, sua personali-
dade. Guido queria que a programação fosse como um episódio do Monty Python’s Flying
CAPÍTULO 1. A INTELIGÊNCIA ARTIFICIAL FALA PYTHON
7
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 9

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
Circus: simples de entender, cheia de surpresas e, acima de tudo, divertida. Essa ideia de
criar algo que fosse leve e agradável de usar está no coração da linguagem. É por isso que,
quando você escreve em Python, as coisas parecem fluir; é quase como se a linguagem
estivesse sorrindo para você e dizendo: ’Vamos, isso é mais fácil do que parece, e você pode
se divertir enquanto faz!’
Veja um vídeo de que gosto muito, que é ’O Futebol de Filósofos - Grécia vs Alemanha’,
onde eles passam boa parte da partida pensando kkkk. Veja a ironia fina dos Monty Python
clicando no link abaixo:
Clique no link para acessar: Futebol de Filósofos
E é por isso que a comunidade Python tem essa vibe descontraída, e, como você sabe,
eu também sou assim. Você vai encontrar referências ao Monty Python por toda parte — de
exemplos de código a documentações — e o lema de muitos programadores é: mantenha-o
simples e tenha um pouco de humor! Python não é só uma linguagem de programação; é uma
maneira de mostrar que o trabalho sério também pode ser leve e que a criatividade floresce
melhor quando se está se divertindo. Afinal, se o Monty Python nos ensinou algo, é que rir de
si mesmo é a melhor maneira de lidar com qualquer desafio, até mesmo com um bug no seu
código!
O espírito do Monty Python’s Flying Circus é uma mistura de nonsense, inteligência e
uma pitada de anarquia. E isso reflete muito bem na filosofia do Python como linguagem.
Os Pythons — como são carinhosamente chamados os membros da comunidade de Python
— abraçam essa irreverência e leveza. Eles não estão apenas interessados em resolver
problemas de programação; eles querem fazer isso de um jeito que traga um sorriso ao rosto.
Dentro do universo de Python, você vai encontrar uma série de ’Easter eggs’, que são
CAPÍTULO 1. A INTELIGÊNCIA ARTIFICIAL FALA PYTHON
8
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 10

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
pequenos detalhes escondidos que só aparecem quando você olha de perto, como piadas
internas da comunidade. Um exemplo clássico é o famoso comando “import this” que revela
’O Zen do Python’, um conjunto de princípios escritos por Tim Peters, outro entusiasta da
comunidade.
Quando você aprender a executar um código em Python, volte neste código e tente isto:
import
this
A saída será o seguinte texto traduzido do inglês:
The Zen of Python , by Tim Peters
Bonito é melhor que feio.
Explícito é melhor que implícito.
Simples é melhor que
complexo.
Complexo é melhor que
complicado.
Linear é melhor do que
aninhado.
Esparso é melhor que denso.
Legibilidade
conta.
Casos
especiais não são especiais o bastante
para
quebrar as regras.
Embora a praticidade
vença a pureza.
Erros
nunca
devem
passar
silenciosamente .
A menos que sejam
explicitamente
silenciados.
Diante da ambiguidade , recuse a tentação de adivinhar.
Deve
haver um -- e preferencialmente
apenas um -- modo óbvio para
fazer
algo.
Embora
esse modo
possa não ser óbvio
a princípio a menos que você seja
holandês.
Agora é melhor que nunca.
Apesar de que nunca
normalmente é melhor
do que \textit{exatamente} agora.
Se a implementação é difícil de explicar ,
é uma má ideia.
Se a implementação é fácil de explicar ,
pode ser uma boa ideia.
Namespaces são uma grande
ideia
-- vamos ter mais
dessas!
Este documento contém máximas como ’A simplicidade é melhor que a complexidade’ e
’O explícito é melhor que o implícito’, mas também brinca com a filosofia Python de não levar
as coisas tão a sério. Ele encerra dizendo: ’Embora seja melhor ser explícito, às vezes, ’um
pouco de mistério é bom’.” É um manifesto que mistura o útil ao agradável, a seriedade da boa
prática de programação com o humor típico de Monty Python.
Outra brincadeira interna que vem diretamente dessa veia humorística é o nome dos
CAPÍTULO 1. A INTELIGÊNCIA ARTIFICIAL FALA PYTHON
9
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 11

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
’eggs’ (ovos) do Python. Quando você instala pacotes no Python usando ferramentas como
o pip, você pode pensar nisso como colecionar ovos de Páscoa escondidos. O humor do
Monty Python fica evidente até na maneira como essas ferramentas são desenvolvidas e
nomeadas. Coisas como pip ou setuptools têm descrições que fazem referência direta ao
nonsense Pythonista. Até na documentação, é possível tropeçar em exemplos que te fazem
rir, como referências a spam e eggs, uma piada que remete diretamente a um dos esquetes
mais famosos do grupo Monty Python, o ’Spam Sketch’.
Essa leveza também facilita o aprendizado. Muitos tutoriais, aulas e até documentações
da comunidade são escritos de maneira amigável e engraçada, como se fosse uma conversa
entre amigos. Essa abordagem descontraída quebra a barreira que muitas vezes impede
as pessoas de entrar no mundo da programação. Python acolhe iniciantes e veteranos com
a mesma atitude: vamos resolver problemas, mas também aproveitar o processo. Afinal,
programação é um pouco como uma comédia: há altos e baixos, e às vezes é preciso rir para
não chorar.
E é isso que faz de Python não apenas uma linguagem de programação, mas uma
experiência cultural. Ao adotar o espírito do Monty Python, Python nos lembra que, por mais
complexos que sejam os problemas, sempre há espaço para a simplicidade, a criatividade e,
claro, para uma boa risada. No fim das contas, programar em Python é como assistir a um
episódio do Monty Python: inesperado, divertido e sempre pronto para subverter o que você
acha que sabe.
Eu comecei a programar aos catorze anos (14 anos) e, ao longo da minha vida, já
programei em mais de vinte linguagens. Com mais de trinta e dois anos de experiência na
computação e quinze anos na inteligência artificial, eu conheço bem as complexidades e
formalidades de linguagens como Java, C e C++. Nessas linguagens, para construir algo, você
acaba escrevendo uma quantidade imensa de código. É como um filme francês, cheio de falas
intermináveis. Em contraste, Python é como um filme americano, direto ao ponto, com menos
fala e mais ação — algo como aquelas cenas de slow motion que vão direto ao que interessa.
Não estou dizendo que os filmes americanos são melhores que os franceses, mas que eles
têm essas características, têm sim.
Python me surpreendeu pela sua simplicidade. Você acreditaria que eu aprendi Python
por meio de aulas online enquanto andava na esteira da academia? Nem precisei executar o
código no computador para entender como a linguagem funcionava. Olhar para Python foi
como um sopro de ar fresco depois de anos de experiência com linguagens mais formais. Foi
surpreendente ver como a sintaxe é clara e como ela permite que você escreva menos para
fazer mais. Por isso, acho que ela é perfeita para você.
A facilidade de Python, aliada à sua versatilidade, me mostrou que programar pode ser
uma experiência leve e ainda poderosa. É uma linguagem que se adapta a muitas situações,
desde scripts rápidos até projetos complexos. Para mim, Python é a prova de que você pode
CAPÍTULO 1. A INTELIGÊNCIA ARTIFICIAL FALA PYTHON
10
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 12

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
ser direto e eficiente, sem abrir mão da força e flexibilidade que o desenvolvimento de software
exige.
Eu gosto de pensar que Python é como uma conversa fluida. Com outras linguagens,
parece que estou preenchendo formulários, seguindo regras rígidas e detalhadas, mas com
Python, é como se eu estivesse contando uma história, onde cada linha de código faz sentido
de imediato. É quase como se o código se explicasse sozinho.
A comunidade Python também é algo que merece destaque. É como se todos estivessem
na mesma sintonia: tornar a programação mais acessível, mais divertida e, claro, mais
eficiente. Sempre que preciso de uma solução para um problema, encontro uma biblioteca ou
um snippet de código que alguém já compartilhou. A sensação é de que há uma imensa rede
de programadores prontos para ajudar, como uma grande festa onde todo mundo traz algo
para contribuir.
Python é, para mim, uma linguagem que convida à exploração sem medo. Ela dá a
confiança para experimentar, criar, e até mesmo para errar e aprender com esses erros sem o
peso de uma sintaxe complexa. É isso que torna Python tão especial. Ela é uma ferramenta
poderosa, mas que não esquece que a programação deve ser, acima de tudo, uma jornada
prazerosa.
Certo, Sandeco! Vamos mostrar na prática essa diferença de simplicidade entre Java e
Python.
Código em Java para imprimir ’Hello, World!’ na tela:
Esse é Java:
public
class
HelloWorld {
public
static
void main(String [] args) {
System.out.println(’Hello , World!’);
}
}
Esse é Python:
print(’Hello , World!’)
Simples, direto e sem complicação. Python corta toda a complexidade e vai direto ao ponto.
Um simples comando print faz o trabalho de exibir ’Hello, World!’ na tela, mostrando como a
linguagem é intuitiva e fácil de usar, especialmente para iniciantes ou até para programadores
experientes que querem ser mais produtivos.
CAPÍTULO 1. A INTELIGÊNCIA ARTIFICIAL FALA PYTHON
11
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 13

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
1.2
QUASE TODA IA DO MUNDO FALA PYTHON
Python se tornou a linguagem de programação preferida para quem deseja criar inteligên-
cia artificial (IA) por diversos motivos que vão além de sua simplicidade e facilidade de uso.
Quando falamos de IA, estamos nos referindo a uma área de pesquisa e desenvolvimento que
lida com algoritmos complexos, grandes volumes de dados e cálculos matemáticos intensos.
É aqui que o Python brilha de maneira única.
Primeiramente, Python oferece uma vasta gama de bibliotecas específicas para IA, como
TensorFlow, Keras, PyTorch, scikit-learn, entre muitas outras. Essas bibliotecas são
projetadas para tornar o desenvolvimento de algoritmos de aprendizado de máquina, redes
neurais e processamento de linguagem natural muito mais acessível. Elas encapsulam cálculos
matemáticos complexos em funções e métodos simples, permitindo que os desenvolvedores
foquem em projetar soluções, em vez de perder tempo reinventando a roda.
Outro fator crítico é a grande comunidade de desenvolvedores de Python em IA. Graças
à popularidade da linguagem, há um imenso número de desenvolvedores contribuindo com
tutoriais, códigos de exemplo e soluções para problemas comuns. Isso cria um ecossistema
colaborativo onde o conhecimento é compartilhado de maneira aberta e gratuita. Quem está
começando no mundo da IA tem acesso a uma quantidade enorme de recursos, desde cursos
gratuitos até fóruns de discussão e repositórios de código no GitHub.
Além disso, Python é uma linguagem interpretada, o que significa que o código pode
ser executado linha por linha. Isso facilita o processo de teste e depuração, que são críticos
no desenvolvimento de modelos de IA. Durante a fase de treinamento de um modelo, é
comum ajustar parâmetros e realizar testes constantes. Com Python, essas tarefas podem ser
realizadas de maneira rápida e eficiente, sem a necessidade de longos ciclos de compilação.
Outro ponto forte é a integração fácil de Python com outras linguagens e sistemas. Em
projetos de IA, muitas vezes é necessário lidar com dados em diversos formatos, interagir com
bancos de dados ou integrar módulos escritos em C ou C++ para melhorar a performance.
Python facilita essas integrações, sendo uma espécie de “cola” que conecta diferentes partes
de um sistema de IA.
Por fim, as características de Python, como sua sintaxe limpa e legibilidade, ajudam os
desenvolvedores a se concentrarem na lógica e nos algoritmos de IA, em vez de se distraírem
com complexidades da linguagem. O código Python é geralmente mais curto e direto, o que
facilita o entendimento e a manutenção de projetos a longo prazo.
CAPÍTULO 1. A INTELIGÊNCIA ARTIFICIAL FALA PYTHON
12
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 14

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
Portanto, se você quer se tornar um criador de inteligência artificial, aprender Python é
quase indispensável. Ele é a chave que abre as portas para um mundo onde a programação
se torna uma ferramenta poderosa para criar soluções inteligentes e impactar o futuro da
tecnologia.
1.3
OS GRANDES E O PYTHON
Python não é apenas uma linguagem que traz simplicidade; ela também é extremamente
adotada por algumas das maiores empresas do mundo. Empresas como Google, Facebook,
Netflix e Spotify utilizam Python diariamente em suas operações. Google, por exemplo, tem
Python como uma de suas linguagens principais desde o começo. Python é usado tanto para
desenvolvimento de sistemas internos quanto para soluções de machine learning e inteligência
artificial. Netflix, por sua vez, utiliza Python para quase tudo, desde a análise de dados até
a automação de segurança e controle de tráfego de rede. Já o Spotify aproveita o Python
para gerenciamento de back-end e processamento de dados, mantendo a plataforma rápida e
eficiente para milhões de usuários.
Não é por acaso que Python se tornou uma escolha preferida em empresas de tecnologia.
A linguagem é flexível, fácil de aprender e poderosa o suficiente para lidar com problemas
complexos, desde o desenvolvimento de software até a análise de dados e automação de
processos. A comunidade ativa e o ecossistema maduro de bibliotecas e frameworks como
Django, Flask, TensorFlow e Pandas também tornam Python uma ferramenta indispensável
para qualquer empresa que queira inovar de maneira rápida e eficiente.
E não são só as grandes empresas que abraçaram Python. As principais universidades
do mundo também reconhecem a sua importância e facilidade de aprendizado. Universidades
como MIT, Stanford e Harvard adotaram Python como a primeira linguagem de programação
para seus alunos de Ciência da Computação. O MIT, por exemplo, utiliza Python em seu
famoso curso ’Introduction to Computer Science and Programming’, pois acredita que a
linguagem permite que os alunos se concentrem mais nos conceitos fundamentais de lógica e
algoritmos, sem se perderem em sintaxes complexas. Stanford e Harvard seguem a mesma
linha, utilizando Python para introduzir os conceitos de programação de forma amigável e
acessível.
Python se tornou o novo padrão não só na indústria, mas também na educação. Isso
porque ele prepara os estudantes para o mundo real, onde a eficiência e a produtividade são
tão importantes quanto o conhecimento profundo de algoritmos e estruturas de dados. Python
é a prova de que simplicidade e poder podem caminhar juntos.
No Instituto Federal de Goiás, onde sou professor, a linguagem de programação que
CAPÍTULO 1. A INTELIGÊNCIA ARTIFICIAL FALA PYTHON
13
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 15

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
utilizamos para introduzir os alunos ao mundo da programação é a linguagem C. C é uma lin-
guagem fundamental, especialmente quando falamos de sistemas operacionais e de software
de baixo nível, por sua eficiência e controle sobre o hardware. Ela é essencial para que os
alunos entendam os conceitos básicos de como os computadores funcionam ’por debaixo dos
panos’.
No entanto, quando meus alunos chegam na disciplina de inteligência artificial, percebo
uma preocupação recorrente. Eles se preocupam em ter que aprender uma nova linguagem,
o Python, para poder aplicar os conceitos que estudamos em sala de aula. Eu sempre digo a
eles: ’Não se preocupem em aprender Python’. A verdade é que, à medida que começamos a
usá-lo nas aulas, eles percebem que a sintaxe é tão natural e direta que acabam aprendendo
sem nem sentir. Python é como se fosse uma extensão do pensamento lógico que eles já
possuem, tornando a transição tranquila e até prazerosa.
Em vez de perder tempo tentando memorizar sintaxe ou regras complexas, o foco se torna
diretamente na criação de modelos de inteligência artificial e na resolução dos problemas que
realmente importam. Python permite isso: ele tira o peso da linguagem da jogada e deixa o
programador focar na solução, no problema em si, e não na ferramenta. E essa é uma lição
importante para qualquer desenvolvedor: escolha as ferramentas que permitam pensar mais
no ’o que’ e no ’por que’ do que no ’como’.
1.4
BIBLIOTECAS: MÁQUINAS QUE SIMPLIFICAM O TRABALHO
Imagine que você quer preparar uma refeição, mas, em vez de usar um fogão, você teria
que fazer uma fogueira. Primeiro, seria necessário procurar lenha, montar uma estrutura de
fogo, e depois acender a fogueira com cuidado. Você precisaria se preocupar em manter o
fogo aceso, ventilar corretamente e ainda improvisar uma maneira de ajustar a intensidade
das chamas. Todo esse processo é complexo, demorado e pouco eficiente. O fogão resolve
tudo isso de maneira prática: com um simples girar de botão, você acende uma chama
controlável, ajusta a intensidade do calor de acordo com o que precisa e cozinha sua comida
sem complicação. Alguém pegou o problema de fazer uma fogueira e o transformou em
uma máquina eficiente que resolve tudo com alguns comandos simples. As bibliotecas em
Python funcionam da mesma maneira: elas encapsulam soluções complexas, permitindo
que o programador execute tarefas com poucos comandos, sem precisar reescrever código
complexo.
A máquina de lavar roupas é outro excelente exemplo de como bibliotecas em Python
simplificam processos. Se fôssemos lavar roupas à mão, teríamos que ensaboar, esfregar,
enxaguar e torcer cada peça, o que seria extremamente cansativo e demorado. A máquina
de lavar automatiza todas essas etapas para você. Ela lava, enxágua e centrifuga suas
CAPÍTULO 1. A INTELIGÊNCIA ARTIFICIAL FALA PYTHON
14
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 16

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
roupas com o toque de alguns botões, economizando tempo e esforço. Da mesma forma,
bibliotecas em Python, como scikit-learn para aprendizado de máquina ou BeautifulSoup
para web scraping, já vêm com funções pré-definidas que cuidam das partes difíceis. Elas
permitem que você foque na lógica do seu programa em vez de se perder nas complexidades
de implementar algoritmos do zero.
Assim como o fogão e a máquina de lavar roupas foram criados para resolver problemas
específicos de maneira eficiente, as bibliotecas de Python fazem o mesmo no mundo da
programação. Elas são ’máquinas’ de software, projetadas por especialistas para simplificar o
trabalho, permitindo que você atinja seus objetivos sem precisar reinventar a roda.
Python é uma linguagem poderosa com mais de 300 mil bibliotecas disponíveis, cada
uma como uma máquina específica pronta para ser usada. Assim como o fogão oferece todas
as ferramentas necessárias para cozinhar sem a complexidade de uma fogueira, e a máquina
de lavar simplifica o trabalho manual de lavar roupas, cada biblioteca de Python vem com
funcionalidades prontas para resolver problemas específicos — desde manipulação de dados,
cálculos matemáticos complexos, até visualizações interativas.
O conceito de ’baterias inclusas’ em Python ilustra exatamente isso: o ambiente Python já
vem equipado com um conjunto robusto de bibliotecas padrão que cobrem uma ampla gama
de tarefas. Essas ’baterias’ são como máquinas especializadas que reduzem o trabalho do
programador, permitindo que ele foque na solução criativa do problema, em vez de gastar
tempo resolvendo partes técnicas que já foram resolvidas por outros.
Assim como o fogão te permite cozinhar sem se preocupar em fazer fogo, e a máquina de
lavar te poupa do trabalho de esfregar roupas, as bibliotecas de Python permitem que você
programe sem precisar escrever código extenso e complexo. Em vez disso, você simplesmente
aproveita as funcionalidades que já existem, aumentando sua produtividade e reduzindo a
chance de erros.
Por fim, as bibliotecas de Python são mais do que apenas pedaços de código reutilizáveis.
Elas representam o trabalho acumulado de uma comunidade global, que permite que qualquer
pessoa, de iniciantes a profissionais experientes, programe de forma mais eficiente e inovadora.
É por isso que Python continua a ser uma das linguagens mais populares e poderosas do
mundo da programação.
Portanto, o conceito de ’baterias inclusas’ é mais do que uma metáfora; é a essência do
que torna Python uma linguagem tão prática e poderosa: ela fornece ferramentas que deixam
você focar no que realmente importa, sem perder tempo reinventando o que já está resolvido.
CAPÍTULO 1. A INTELIGÊNCIA ARTIFICIAL FALA PYTHON
15
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 17

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
1.5
INSTALANDO O PYTHON
Vamos parar de conversinha e vamos instalar o Python, que eu quero é ’codar’ (codificar
para os íntimos)! Para começar, acesse o site oficial do Python, que você encontra no link
abaixo:
Clique no link para acessar: https://python.org
Ao abrir o site, você verá um menu superior com várias opções. Dentre elas, localize a
opção ’Downloads’ destacada na cor azul. Clique nessa opção ’Downloads’, como mostrado
na Figura 1.1. Este botão mágico é o caminho para baixar o Python diretamente para o seu
computador. Ao clicar, o site automaticamente detecta o seu sistema operacional (Windows,
macOS, Linux) e sugere a versão mais adequada para você, geralmente a mais recente e
estável do Python.
A beleza deste processo está na simplicidade: você não precisa fazer nada além de
clicar no botão ’Downloads’. O Python faz todo o resto! Prepare-se para entrar no mundo da
programação com a ferramenta mais amigável e poderosa que existe!
Figura 1.1: Página de download do Python no site oficial.
Depois de clicar em ’Downloads’ no site oficial do Python, você verá a opção de baixar a
versão mais recente da linguagem, como mostrado na imagem. Recomendo sempre escolher
a última versão disponível, neste caso, a Python 3.12.6. Clique no botão amarelo ’Download
Python 3.12.6’ (Versão mais recente) para iniciar o download. Esse é o arquivo de instalação
que você precisará para prosseguir com a instalação do Python em seu computador.
CAPÍTULO 1. A INTELIGÊNCIA ARTIFICIAL FALA PYTHON
16
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 18

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
Uma vez que o download estiver concluído, localize o arquivo baixado no seu diretório
de downloads. O ícone do arquivo será similar ao mostrado na imagem. Em seguida, clique
duas vezes no executável (neste caso, python-3.12.6-amd64.exe) para iniciar o processo de
instalação. A partir daqui, o instalador guiará você por algumas etapas simples para concluir a
configuração do Python.
Figura 1.2: Baixando e executando a última versão do instalador do Python.
Depois de clicar em download e executar o instalador do Python, você verá uma tela como
a da Figura 1.3. Para garantir que a instalação ocorra sem problemas e que o Python funcione
corretamente no seu computador, siga estas etapas importantes.
Primeiro, marque a opção ’Add Python 3.12 to PATH’ na parte inferior da tela, destacada
em vermelho. Isso é fundamental para que você possa executar o Python a partir de qualquer
lugar no seu sistema, sem precisar navegar até o diretório onde ele foi instalado. Se a versão
mudar não se preocupe, o procedimento ainda será o mesmo.
Em seguida, clique no botão ’Install Now’, destacado em verde na Figura 1.3. Esta
opção irá instalar o Python com todas as configurações padrão recomendadas, incluindo o
IDLE (ambiente de desenvolvimento), o gerenciador de pacotes pip, e as documentações
necessárias. Esse processo também criará os atalhos e associações de arquivos para facilitar
o uso do Python.
Ao seguir essas instruções, você estará pronto para iniciar sua jornada no mundo da
programação com Python de forma rápida e eficiente!
Agora vamos executar o Python pela primeira vez. Pesquise no Windows pelo terminal de
comando. Não se preocupe e não tenha medo do terminal, é só para verificar se a instalação
ocorreu corretamente. No campo de busca do Windows, digite cmd para abrir o Prompt de
Comando, como mostrado na Figura 1.5.
Com o terminal aberto, digite python e pressione Enter. Se tudo estiver certo, você verá
CAPÍTULO 1. A INTELIGÊNCIA ARTIFICIAL FALA PYTHON
17
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 19

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
Figura 1.3: Marque as opções de path de instalação do Python
uma mensagem indicando a versão do Python instalada, como na Figura 1.5. Agora, vamos
fazer um teste simples para garantir que o Python está funcionando corretamente. Escreva o
comando print(’Hello World’) e pressione Enter.
Se a saída for Hello World, parabéns! Seu Python está instalado e funcionando perfeita-
mente.
Figura 1.4: Executando o Python pela primeira vez no Prompt de Comando do Windows.
CAPÍTULO 1. A INTELIGÊNCIA ARTIFICIAL FALA PYTHON
18
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 20

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
1.6
UM EDITOR GRATUITO E EXCELENTE
Os programas em Python são como cartas que a gente escreve para o computador.
Obviamente, quando você vai escrever uma carta, não quer usar um programa ruim como
o Notepad do Windows. Melhor seria usar um editor de texto como Word ou outro, já que
no Notepad a gente sofre demais com as limitações de recursos. Da mesma forma, usar o
terminal para fazer códigos em Python é semelhante a usar o Notepad. Por isso, precisamos
de um editor específico para nossa super linguagem, e a comunidade elegeu o VSCode da
Microsoft como esse editor.
O VSCode (Visual Studio Code) é um editor de código-fonte poderoso, gratuito e cheio
de recursos que facilitam a vida de qualquer programador. Ele oferece suporte a uma ampla
gama de linguagens, mas é especialmente amigável para Python, com funcionalidades como
autocompletar, depuração, integração com Git, e uma grande variedade de extensões que
ajudam a aumentar sua produtividade.
Para instalar o VSCode, acesse o site oficial por meio do link abaixo:
Clique no link para acessar: https://code.visualstudio.com
Figura 1.5: Download do VSCode
Na página de download, clique no botão de instalação correspondente ao seu sistema
operacional. O instalador será baixado automaticamente. Em seguida, execute o instalador e
siga as instruções na tela para instalar o VSCode no seu computador. Durante a instalação,
você verá algumas opções de configuração. Recomendo marcar todas as opções, especial-
CAPÍTULO 1. A INTELIGÊNCIA ARTIFICIAL FALA PYTHON
19
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 21

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
mente aquelas que dizem respeito à integração com o terminal e à adição do VSCode ao
PATH do sistema, para facilitar o acesso posteriormente.
O VSCode não é apenas um editor de texto; é um verdadeiro ambiente de desenvol-
vimento integrado (IDE), leve e muito fácil de usar, o que o torna perfeito para começar a
programar em Python!
1.7
DIVERTIDO, MAS SEM BAGUNÇA
Por uma questão de organização, eu gosto de deixar todos os meus projetos em uma
pasta base. Por isso, eu recomendo que você crie uma pasta dedicada para armazenar todos
os seus projetos em Python. Na Figura 1.6, você pode ver que criei uma pasta chamada
projetos-python no meu Disco Local (C:). Isso facilita muito na hora de localizar e
gerenciar seus projetos de programação.
Dentro dessa pasta base, crie uma nova pasta para cada projeto específico que você for
desenvolver. Por exemplo, criei uma pasta chamada 01-basico para o meu primeiro projeto
em Python. Manter uma estrutura organizada desde o início é uma prática importante que vai
te ajudar a manter seu ambiente de desenvolvimento limpo e eficiente.
Figura 1.6: Organizando seus projetos Python em uma pasta dedicada.
Quando você abre uma pasta no VSCode pela primeira vez, especialmente uma pasta
onde você armazenará seus projetos em Python, é normal aparecer uma mensagem de
segurança como a mostrada na Figura 1.7. Esta mensagem está perguntando se você confia
nos arquivos contidos na pasta que acabou de abrir.
Para garantir que o VSCode funcione corretamente com todos os recursos habilitados,
marque a opção ’Trust the authors of all files in the parent folder’ (confie nos autores
CAPÍTULO 1. A INTELIGÊNCIA ARTIFICIAL FALA PYTHON
20
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 22

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
de todos os arquivos na pasta superior), que está destacada em verde. Esta ação asse-
gura que o editor possa executar scripts e códigos necessários sem restrições, tornando o
desenvolvimento mais fluido e sem obstáculos.
Depois de marcar a opção, clique em ’Yes, I trust the authors’ para confirmar sua escolha
e liberar todas as funcionalidades do VSCode para o seu projeto.
Figura 1.7: Janela de permissão de segurança no VSCode para confiar nos arquivos da pasta.
Agora vamos criar um arquivo da nossa primeira ’carta’ ao computador usando Python.
No VSCode, clique no menu superior em File e selecione a opção New File..., como mostrado
na Figura 1.8. Você também pode usar o atalho de teclado Ctrl+Alt+Windows+N para criar
rapidamente um novo arquivo.
Depois de criar o novo arquivo, salve-o com o nome main.py. Para isso, clique em File
novamente e selecione Save As.... Na janela que abrir, navegue até a pasta do seu projeto
(por exemplo, 01-basico) e salve o arquivo com a extensão .py, que é a extensão padrão
para arquivos Python.
Com esse novo arquivo criado, estamos prontos para começar a escrever nosso primeiro
código em Python!
Agora que criamos o arquivo main.py, é hora de escrever nosso primeiro programa em
Python! No VSCode, localize o arquivo main.py na barra lateral esquerda, como mostrado na
Figura 1.9. Clique nele para abrir o editor de código.
Com o arquivo aberto, escreva o seguinte código:
print(’Olá mundo , estou
aprendendo
python !!!’)
Esse comando usa a função print() para exibir uma mensagem na tela. É o clássico
’Hello World’ dos programadores, mas aqui estamos dando um toque especial em português!
Depois de escrever o código, salve o arquivo pressionando Ctrl+S ou clicando em File >
CAPÍTULO 1. A INTELIGÊNCIA ARTIFICIAL FALA PYTHON
21
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 23

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
Figura 1.8: Criando um novo arquivo no VSCode para seu primeiro projeto em Python.
Save.
Depois de escrever seu primeiro programa em Python no arquivo main.py, chegou a hora
de executá-lo para ver o resultado! No VSCode, clique no ícone de ’play’ (seta para a direita),
localizado na parte superior direita do editor, conforme destacado na Figura ??. Esse botão,
marcado em vermelho, é o ’Run Python File’, e é responsável por executar o arquivo Python
aberto no editor.
Figura 1.9: Escrevendo e executando o primeiro código em Python no VSCode.
Ao clicar nesse ícone, o VSCode irá executar o script main.py no terminal integrado e
você verá a saída do comando print() diretamente no console. Se tudo estiver certo, a
mensagem ’Olá mundo, estou aprendendo python!!!’ será exibida, confirmando que o seu
primeiro código foi executado com sucesso!
Clique no botão de executar e veja o Python ganhar vida com o seu primeiro programa! A
CAPÍTULO 1. A INTELIGÊNCIA ARTIFICIAL FALA PYTHON
22
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 24

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
Figura 1.10: Saída esperada do main.py
Figura 1.10 mostra a saída esperada quando você executar seu primeiro programa python
dentro do VSCode.
Nesse capítulo, você foi introduzido ao universo do Python, uma linguagem de programa-
ção que se destaca pela simplicidade e acessibilidade. Exploramos como Python, com sua
sintaxe clara e intuitiva, se diferencia de outras linguagens mais complexas e oferece uma
experiência de programação mais leve e produtiva. Você conheceu um pouco da história por
trás da linguagem, incluindo sua ligação com o humor irreverente do Monty Python, o que
ilustra a filosofia de tornar a programação divertida e acessível.
Também aprendemos sobre o poder da comunidade Python, que abraça a colaboração e
a troca de conhecimento, facilitando o desenvolvimento de soluções inovadoras. Por meio do
conceito de ’baterias inclusas’, vimos como as bibliotecas em Python simplificam o trabalho,
proporcionando ferramentas prontas que economizam tempo e esforço, permitindo que você
foque no que realmente importa: resolver problemas de forma criativa e eficiente.
Além disso, você seguiu um passo a passo para instalar Python em seu computador
e configurar um ambiente de desenvolvimento utilizando o Visual Studio Code, um editor
poderoso e gratuito. Com isso, você está preparado para começar a codificar, organizando
seus projetos de maneira estruturada e executando seus primeiros scripts Python.
Espero que você tenha percebido que aprender Python é como aprender uma nova língua:
começa com passos simples, mas com potencial ilimitado de crescimento e aplicação. Python
é mais do que uma ferramenta; é uma porta de entrada para um mundo de possibilidades onde
simplicidade, eficiência e diversão andam lado a lado. Agora, você está pronto para seguir
adiante, explorando cada vez mais as capacidades dessa linguagem fascinante e ampliando
seus horizontes no universo da programação.
CAPÍTULO 1. A INTELIGÊNCIA ARTIFICIAL FALA PYTHON
23
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 25

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
CAPÍTULO 2
Começando do Básico Mesmo
Eu sempre digo na sala de aula que ’coisas complexas são compostas de coisas simples’,
e os átomos estão aí para provar. Na computação, isso significa que, quando entendemos
o básico e vamos compondo e somando ’básico + básico = complexo’, o resultado pode ser
extremamente poderoso. Você só precisa ser paciente e humilde para aprender o básico, e
verá um grande poder em suas mãos.
Até mesmo as maravilhas da inteligência artificial, aquelas que parecem sair de um
filme de ficção científica, começam de um lugar simples e modesto: o básico! Sim, aquelas
coisinhas que parecem até banais são as pedras fundamentais que sustentam os gigantes da
tecnologia.
Assim como uma orquestra começa com notas singelas e depois explora sinfonias grandi-
osas, no mundo da programação, começamos com os conceitos básicos – variáveis, strings,
e operadores – e, antes que perceba, estamos construindo algoritmos que podem prever o
clima ou sugerir sua próxima maratona na Netflix.
Agora, vamos falar sobre variáveis. Ah, as variáveis! Elas são como aquelas caixas
misteriosas de presente que você ganha no final do ano: você não sabe o que tem dentro,
mas sabe que é algo importante! Elas armazenam informações que mudam ao longo do
tempo, assim como sua disposição para fazer dieta em janeiro. Em Python, variáveis são a
chave para armazenar dados e informações que o seu programa vai usar para fazer o que foi
programado para fazer. Pense nelas como suas aliadas, sempre dispostas a guardar tudo o
que você precisa. . . menos a bagunça do seu quarto, essa ainda é por sua conta!
E se variáveis são caixas, as funções de entrada e saída são como mensageiros que
entram e saem do seu castelo de código. Vamos aprender a fazer o Python perguntar e
responder, tornando-se um verdadeiro amigo virtual – daquele que nunca esquece o seu
nome (a menos que você diga a ele para esquecer!). Usaremos o input() para capturar o
que o usuário digita e o print() para dar uma resposta simpática. E não, você não precisa
CAPÍTULO 2. COMEÇANDO DO BÁSICO MESMO
24
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 26

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
usar frases prontas como ’Você gostaria de um café?’ – você pode ser criativo e criar diálogos
engraçados que deixam qualquer chatbot com inveja!
E o que seria de uma conversa sem palavras? Ah, as strings! Elas são como o pão da
programação: versáteis, simples e absolutamente essenciais. Com elas, você cria mensagens,
nomes, frases e até elogios personalizados para quem merece (ou quem precisa). Vamos
aprender a manipulá-las, cortá-las, esticá-las e até gritar com elas (em maiúsculas, claro.
KKK). Porque, afinal, quem nunca quis que seu código fosse um pouquinho mais dramático,
não é mesmo?
Por fim, vamos botar a mão na massa e misturar alguns operadores aritméticos, compara-
tivos e lógicos. Imagine que estamos na cozinha de um mestre chef, onde cada operador é um
ingrediente essencial para preparar a receita do sucesso do seu código. Aprenderemos a usar
a adição, subtração, comparação e muito mais para transformar dados crus em resultados
saborosos. Afinal, como dizem, com grandes responsabilidades vêm grandes... operadores!
Então, vista seu avental de programador, pegue seu teclado e prepare-se para uma
aventura divertida e cheia de descobertas! Afinal, todo grande feito começa com um simples
passo – ou, no nosso caso, com algumas linhas de código Python. Vamos lá?
2.1
VARIÁVEIS EM PYTHON
Imagine que você tem várias caixas em casa, cada uma rotulada com o que contém. Uma
caixa pode conter livros, outra pode ter brinquedos e uma terceira pode ter roupas. Da mesma
forma, em programação, uma variável é como essa caixa: ela armazena informações que
podem ser usadas e modificadas ao longo do tempo. Variáveis são fundamentais em Python,
pois permitem que os programadores armazenem e manipulem dados de maneira eficiente.
Para entender melhor, vamos considerar um problema prático que ajuda a aplicar o
CAPÍTULO 2. COMEÇANDO DO BÁSICO MESMO
25
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 27

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
conceito de variáveis. Suponha que você está criando um programa simples para calcular
a média de notas de uma turma. Para isso, você precisará armazenar as notas dos alunos
em variáveis e depois calcular a média. A partir desse cenário, podemos perceber como as
variáveis são essenciais para organizar e manipular dados em um programa.
Em Python, uma variável é um espaço na memória que armazena um valor. Para declarar
uma variável, você simplesmente precisa escolher um nome e usar o operador de atribuição ’=’
para definir seu valor. Por exemplo, podemos declarar uma variável chamada ’idade’ e atribuir
a ela o valor 25, como no seguinte exemplo:
idade = 25
Ao nomear variáveis, existem algumas regras a serem seguidas. Os nomes das variá-
veis podem conter letras, números e o caractere de sublinhado, mas não podem começar
com números. Além disso, é uma boa prática usar convenções de nomenclatura, como o
snake_case, que utiliza letras minúsculas e sublinhados para separar palavras. Por exemplo,
um nome de variável adequado seria ’nota_final’.
Os tipos de dados também são um aspecto importante das variáveis. Em Python, podemos
armazenar diferentes tipos de dados, como inteiros, números de ponto flutuante (floats), strings
(texto) e booleanos (verdadeiro ou falso). Por exemplo, podemos declarar variáveis para
armazenar um nome, uma altura e um status de estudante da seguinte forma:
nome = ’João’
altura = 1.75
estudante = True
A atribuição de valores a variáveis é uma etapa fundamental na programação. Quando
atribuímos um valor a uma variável, estamos essencialmente dizendo ao programa para
armazenar esse valor em um local específico da memória. É importante lembrar que podemos
mudar o valor de uma variável a qualquer momento. Mas é claro né, senão ela não teria nome
’variável’, como se diz no meu Nordeste: ’Variável é algo que ’Varêia” kkkk. Por exemplo:
idade = 25
print(’Idade
original:’, idade)
idade = 26
print(’Idade
atualizada:’, idade)
CAPÍTULO 2. COMEÇANDO DO BÁSICO MESMO
26
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 28

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
Por fim, é interessante mencionar o conceito de escopo de variáveis, que se refere à
região do código onde uma variável é acessível. As variáveis podem ser globais, acessíveis
em todo o programa, ou locais, acessíveis apenas dentro de uma função ou bloco específico.
Agora, retornando ao problema prático que eu propus, vamos implementar um exemplo
que calcula a média das notas de três alunos. Para isso, primeiro declaramos as variáveis que
armazenarão as notas, e depois calculamos a média:
nota1 = 8.5
nota2 = 7.0
nota3 = 9.0
media = (nota1 + nota2 + nota3) / 3
print(’A média das notas é:’, media)
Tá vendo? Básico mas poderoso e podemos observar como as variáveis desempenham
um papel crucial na organização e manipulação de dados em um programa Python.
2.2
PERGUNTA VAI, RESPOSTA VEM: INPUT E OUTPUT COM PYTHON!
Considere que você está em um café, e um barista se aproxima para anotar seu pedido.
Para isso, ele faz algumas perguntas: ’Qual é o seu nome?’, ’Que tipo de café você gostaria?’
e ’Você prefere com ou sem açúcar?’. Assim como o barista coleta essas informações para
preparar a sua bebida, em programação, precisamos de uma maneira de coletar dados do
usuário. Em Python, podemos fazer isso por meio da função input(). E, para compartilhar
resultados com o usuário, usamos a função print(). Esta seção irá explorar como essas
duas ferramentas básicas permitem que você interaja com seus programas de forma simples
e eficaz.
Vamos supor que você deseja criar um programa simples que pergunte ao usuário seu
nome e sua idade, e então imprima uma mensagem personalizada de saudação. Este exercício
ajuda a entender a interação básica com o usuário e como os dados podem ser manipulados
e apresentados. Afinal, quem não gosta de uma boa conversa, mesmo que seja com um
programa de computador?
Para entender como usar input() e print(), precisamos abordar alguns pontos-chave.
Primeiro, a função input(). Esta função permite que o programa pause e aguarde a entrada
do usuário. O que você digita é retornado como uma string. É importante lembrar que, mesmo
que o usuário digite um número, ele será tratado como texto (string) até que seja convertido.
Portanto, se você digitar ’42’, o programa não vai fazer cálculos com isso sem pedir um pouco
CAPÍTULO 2. COMEÇANDO DO BÁSICO MESMO
27
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 29

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
mais de educação.
Em seguida, temos a função print(). Esta função exibe informações na tela. Você pode
imprimir texto simples, variáveis ou até mesmo expressões. O print() é uma ferramenta
essencial para fornecer feedback ao usuário sobre o que está acontecendo no programa. Se
você não usar print(), como saberá se seu programa está indo bem ou só tomando um café
gelado na pausa?
Outra coisa a se considerar é a conversão de tipos.
Quando usamos input(), os
dados são recebidos como strings. Se quisermos realizar cálculos com números, precisamos
convertê-los usando funções como int() ou float(). Imagine só: você pede a idade do seu
amigo e ele responde ’vinte e cinco’. Você vai precisar transformar isso em um número para
saber se ele pode entrar na festa ou não!
Agora, vamos olhar para alguns exemplos práticos. Primeiro, um simples exemplo de
input():
nome = input(’Qual é o seu nome? ’)
print(’Olá, ’ + nome + ’! Bem -vindo ao nosso
programa.’)
Nesse exemplo, o programa pede ao usuário que insira seu nome. A função input() exibe
a mensagem e aguarda a resposta. Depois, usamos print() para mostrar uma mensagem
de boas-vindas personalizada. Essa interação simples demonstra como coletar e exibir
informações. Quem diria que um simples ’Olá’ poderia fazer você se sentir tão especial?
Agora, vamos ver um exemplo que envolve conversão de tipos:
idade = input(’Quantos
anos você tem? ’)
idade = int(idade)
% Convertendo a entrada
para um número
inteiro
print(’Você tem ’ + str(idade) + ’ anos!’)
Aqui, pedimos ao usuário sua idade. A entrada é inicialmente uma string, então usamos
int() para convertê-la em um número inteiro. Em seguida, print() exibe a idade do usuário.
Este exemplo ilustra a importância da conversão de tipos quando lidamos com números. E se
você não converter, bem, pode acabar achando que seu amigo é mais velho do que realmente
é!
CAPÍTULO 2. COMEÇANDO DO BÁSICO MESMO
28
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 30

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
Por último, vamos combinar os conceitos:
nome = input(’Qual é o seu nome? ’)
idade = input(’Quantos
anos você tem? ’)
idade = int(idade)
print(f’Olá, {nome }! Você tem {idade} anos.’)
Nesse exemplo, combinamos os dois conceitos. O programa coleta o nome e a idade do
usuário e, em seguida, usa uma f-string para imprimir uma mensagem que inclui ambos os
dados. Isso mostra como é possível criar interações mais ricas e personalizadas. Agora você
pode até fazer novos amigos, mesmo que seja na tela do computador!
2.3
STRINGS EM PYTHON
Imagine que você está escrevendo uma carta para um amigo distante. Você quer que a
mensagem seja clara e envolvente, e para isso, escolhe cuidadosamente cada palavra. Da
mesma forma, em programação, as strings são como essas cartas, mas você vai ver como é
simples e poderoso manipular textos com Python.
Vamos explorar o que são strings em Python, como manipulá-las e por que elas são
essenciais para a construção de programas eficazes. Strings são sequências de caracteres
que podem ser usadas para armazenar informações textuais. Como um bom amigo que você
pode contar para guardar seus segredos, essas sequências ajudam a manter suas mensagens
organizadas e acessíveis, extremamente úteis para informar ao usuário do seu programa o
que está acontecendo por dentro do seu software.
CAPÍTULO 2. COMEÇANDO DO BÁSICO MESMO
29
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 31

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
Para ilustrar, pense em uma situação em que você está desenvolvendo um aplicativo de
mensagens que precisa formatar e exibir mensagens de texto. O desafio é criar um recurso
que permita que o usuário insira seu nome e uma mensagem, e o aplicativo deve apresentar
uma saudação personalizada. Como você pode usar strings para tornar essa experiência mais
interativa e amigável? A resposta está na flexibilidade e na diversidade das operações que
podemos realizar com strings em Python.
Para começar, vamos definir o que são strings. Elas são sequências de caracteres
utilizadas para armazenar texto em Python. Por exemplo, a frase ’Olá, Mundo!’ é uma string
que contém uma mensagem simples, mas significativa. Criar strings em Python é bastante
fácil e pode ser feito utilizando aspas simples ou duplas. Por exemplo, podemos ter string1 =
’Texto com aspas simples’ e string2 = ’Texto com aspas duplas’. Ambas as formas
são válidas, então você pode escolher a que mais lhe agrada, como escolher entre café ou
chá.
print(’Olá Mundo!’)
string1 = ’Texto com aspas
simples ’
string2 = ’Texto com aspas
duplas ’
print(string1)
print(string2)
Uma parte divertida de trabalhar com strings é a manipulação. É importante conhecer as
operações básicas que podem ser realizadas, como concatenação, fatiamento e métodos que
retornam informações sobre a string. Por exemplo, se tivermos nome = ’Maria’; saudacao
= ’Olá, ’ + nome, o resultado será ’Olá, Maria’. Veja como é fácil dar vida a suas
mensagens! Além disso, existem alguns métodos comuns de strings que facilitam ainda
mais nossa vida. O método len() retorna o comprimento da string. Se quisermos mudar a
capitalização, podemos usar lower() e upper(). Por exemplo, ’Python’.upper() resultará
em ’PYTHON’. Como se a linguagem estivesse gritando com você!
Fatiamento de strings é outra habilidade poderosa que você pode usar. Isso permite
acessar partes específicas de uma string usando índices. Por exemplo, se tivermos texto =
’Python’; texto[0:2], isso retornará ’Py’. É como ter uma faca mágica que corta strings
na medida certa!
Agora, vamos ver alguns exemplos práticos. Primeiramente, criamos e exibimos uma
string. Aqui está um pequeno código que faz isso:
CAPÍTULO 2. COMEÇANDO DO BÁSICO MESMO
30
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 32

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
mensagem = ’Bem -vindo ao mundo da programação!’
print(mensagem)
Nesse exemplo, criamos uma variável chamada mensagem que armazena um texto. Em
seguida, utilizamos a função print() para exibir a mensagem na tela. Isso demonstra como
podemos criar e trabalhar com strings simples.
Agora, vamos usar a concatenação para criar uma saudação personalizada:
nome = ’Sandeco ’
saudacao = ’Olá, ’ + nome + ’, seu vascaíno sofredor! kkkk ’
print(saudacao)
Aqui, estamos concatenando três strings para formar uma saudação personalizada e
divertida. A variável saudacao combina a string ’Olá, ’, o conteúdo da variável nome, e uma
frase engraçada, resultando em ’Olá, Sandeco, seu vascaíno sofredor! kkkk’ quando impresso.
Isso é o que chamamos de uma saudação inusitada, bem-humorada e Pythoniana! ps.: Eu
queria muito que essa frase fosse mentira, mas é verdade pura! ahhhhh!!!
Enfim, vamos em frente. Vamos agora explorar o fatiamento de strings. O fatiamento é
uma técnica essencial em Python que nos permite acessar partes específicas de uma string,
algo especialmente útil em aplicações de Inteligência Artificial, como o processamento de
linguagem natural (NLP).
Este exemplo ilustra como podemos extrair uma parte de uma string utilizando fatiamento.
O código extrai os primeiros 8 caracteres da string frase, resultando em ’Aprendend’. Essas
operações de fatiamento são fundamentais para lidar com textos de maneira precisa, per-
mitindo a manipulação de palavras, frases ou tokens conforme necessário em tarefas como
análise de sentimentos, classificação de textos ou tradução automática como usadas na IA.
frase = ’Aprendendo
Python ’
parte = frase [0:8]
print(parte)
CAPÍTULO 2. COMEÇANDO DO BÁSICO MESMO
31
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 33

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
Por último, vamos ver alguns métodos de strings em ação:
texto = ’Python é divertido ’
print(texto.lower ())
print(texto.upper ())
Nesse exemplo, utilizamos os métodos lower() e upper() para alterar a capitalização da
string texto. O primeiro imprime ’python é divertido’ e o segundo imprime ’PYTHON É DIVER-
TIDO’. Esses métodos são úteis para formatar strings de acordo com nossas necessidades e,
claro, para garantir que tudo esteja nos conformes. Mas cuidado ao manipular grandes strings,
afinal, como diz o ditado: ’com grandes strings, vêm grandes responsabilidades!’
2.4
DADOS PRIMITIVOS - NÚMEROS INTEIROS, FLOATS E BOOLEANOS
Já vimos um tipo de dado primitivo, as strings. Agora vou te mostrar outros tipos de
dados primitivos, podemos começar com uma analogia relacionada ao cotidiano. Imagine
que estamos organizando uma festa. Para isso, precisamos contar quantas pessoas virão
(números inteiros), saber quanto tempo a festa vai durar em horas (floats) e decidir se vamos
servir bebidas alcoólicas ou não (booleanos). Cada um desses aspectos nos ajuda a planejar
melhor o evento. Assim como na festa, os tipos de dados primitivos são fundamentais na
programação, pois permitem que os programadores manipulem e armazenem informações de
maneira eficaz. Sem eles, seria como tentar organizar uma festa sem saber quem confirmou
presença, ou pior, sem saber se a festa vai ter open bar!
Vamos considerar um cenário onde um aplicativo precisa calcular a média de notas de
alunos em uma turma. Os dados que precisamos manipular incluem as notas (números
inteiros e floats) e uma variável que indica se um aluno foi aprovado (booleano). O desafio
será criar um programa simples que permita ao usuário inserir as notas dos alunos, calcular
a média e determinar se cada aluno foi aprovado ou reprovado. Imagine a confusão se não
soubéssemos se o aluno passou ou não; seria como convidar alguém para a festa e esquecer
de avisar que não tem comida!
Os números inteiros são, como o nome sugere, inteiros, ou seja, não têm parte decimal.
Exemplos incluem -3, 0 e 5. Eles são usados em contagens, como o número de alunos
em uma sala, ou em índices de listas, onde não precisamos de frações. Por exemplo, se
quisermos contar quantos alunos estão presentes, utilizaremos um número inteiro. É curioso
pensar que, sem os números inteiros, a matemática nas festas poderia ficar um pouco confusa,
não é mesmo? Afinal, quem iria querer contar a quantidade de canapés em frações?
CAPÍTULO 2. COMEÇANDO DO BÁSICO MESMO
32
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 34

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
Por outro lado, os números de ponto flutuante, ou floats, são aqueles que têm uma parte
decimal. Exemplos como 3.14, 0.5 e -2.0 nos permitem realizar medições e cálculos que
exigem precisão. Eles são fundamentais em situações que envolvem valores como médias
de notas ou cálculos financeiros. Por exemplo, ao calcular a média das notas de uma turma,
precisamos de floats para garantir que cada ponto conte. Imagine tentar calcular a média
de notas com números inteiros e acabar com uma confusão maior que a de uma festa sem
música!
Por fim, temos os booleanos, que representam valores de verdade: verdadeiro (True) ou
falso (False). Esses tipos de dados são utilizados em condições, permitindo controlar o fluxo
de execução de um programa. Um exemplo prático é verificar se um aluno foi aprovado, onde
a variável pode indicar se a média alcançada é suficiente. Se não tivermos booleanos, seria
como tentar decidir se a festa deve continuar sem saber se ainda há convidados animados ou
se todos já foram embora!
Para ilustrar melhor esses conceitos, vejamos alguns exemplos de código Python.
# Contagem de alunos
alunos = 30
print(’Número de alunos na sala:’, alunos)
Nesse exemplo, definimos uma variável ‘alunos‘ que armazena um número inteiro re-
presentando a quantidade de alunos em uma sala. O uso de print exibe o valor na tela,
mostrando a contagem. É um modo simples, mas eficaz, de garantir que ninguém fique de
fora da festa!
# Cálculo da média de notas
nota1 = 7.5
nota2 = 8.0
media = (nota1 + nota2) / 2
print(’Média das notas:’, media)
Aqui, temos duas variáveis ‘nota1‘ e ‘nota2‘ que armazenam números de ponto flutuante.
A média é calculada somando as notas e dividindo por 2. O resultado é impresso, mostrando
a média das notas. Assim, conseguimos verificar se as notas estão à altura da festa!
# Verificação de aprovação
media = 6.0
aprovado = media
>= 7
CAPÍTULO 2. COMEÇANDO DO BÁSICO MESMO
33
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 35

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
print(’O aluno foi
aprovado?’, aprovado)
Nesse exemplo, a variável ‘aprovado‘ é um booleano que verifica se a média do aluno é
maior ou igual a 7. O resultado é um valor verdadeiro ou falso, que é então impresso, indicando
se o aluno foi aprovado. Sem essa verificação, a confusão poderia ser maior que o número de
convidados!
Com esse plano, garantimos que a seção sobre tipos de dados primitivos, especificamente
inteiros, floats e booleanos, seja estruturada de forma clara e envolvente, permitindo que
os leitores compreendam esses conceitos fundamentais sem se desviar para tópicos mais
avançados. Afinal, em uma festa, o que importa são as boas companhias e a certeza de que
todos estão se divertindo!
2.5
OPERADORES ARITMÉTICOS, COMPARATIVOS E LÓGICOS
Para iniciar nossa jornada na programação, vamos imaginar que você é um chef em
uma cozinha. Assim como um chef precisa de ingredientes e ferramentas para criar pratos
saborosos, um programador precisa de operadores para manipular dados e criar programas
eficazes. Os operadores aritméticos, comparativos e lógicos são como os utensílios de cozinha:
cada um tem uma função específica e é essencial para a receita do seu código. Nesta seção,
vamos explorar como esses operadores funcionam e como você pode utilizá-los para resolver
problemas do dia a dia.
Imagine que você está gerenciando uma loja online e precisa calcular o total de vendas
de um produto. Você tem uma lista de preços e a quantidade vendida de cada item. Como
você pode usar operadores para calcular a receita total e fazer comparações para ver quais
produtos estão vendendo mais? Este desafio prático irá incentivá-lo a aplicar operadores
aritméticos para somar valores e operadores comparativos para analisar os resultados.
Os operadores aritméticos são utilizados para realizar cálculos matemáticos essenciais.
Os principais incluem adição (‘+‘), subtração (‘-‘), multiplicação (‘*‘), divisão (‘/‘) e módulo
(‘%‘), que retorna o resto da divisão entre dois números. Por exemplo, para calcular o total de
vendas, você pode usar a adição dos preços multiplicados pela quantidade. Se você tem um
produto que custa R$50,00 e foram vendidos 20 itens, o total das vendas seria o resultado
de R$50,00 multiplicado por 20. Isso nos leva ao exemplo prático de código, onde a mágica
acontece.
preco = 50.0
# Preço de um produto
quantidade = 20
# Quantidade
vendida
CAPÍTULO 2. COMEÇANDO DO BÁSICO MESMO
34
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 36

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
total_vendas = preco * quantidade
# Calcula o total de vendas
print(’Total de Vendas: R$’, total_vendas )
Nesse exemplo, estamos multiplicando o preço do produto pela quantidade vendida para
calcular o total de vendas. O resultado é impresso, mostrando quanto dinheiro foi gerado pelas
vendas.
Além dos operadores aritméticos, temos também os operadores comparativos, que per-
mitem comparar valores. Os principais incluem igual a (‘==‘), diferente (‘!=‘), maior que (‘>‘),
menor que (‘<‘), maior ou igual (‘>=‘) e menor ou igual (‘<=‘). Esses operadores são extrema-
mente úteis, especialmente quando você precisa fazer decisões com base em valores, como
ao comparar preços de produtos. Considere um cenário onde você precisa verificar se um
produto é mais caro que outro. Com o operador ‘>‘, você pode facilmente determinar isso.
Aqui está um exemplo de como isso pode ser feito.
preco_produto1 = 30.0
preco_produto2 = 20.0
if preco_produto1 > preco_produto2 :
print(’Produto 1 é mais caro que
Produto 2.’)
else:
print(’Produto 1 não é mais caro que
Produto 2.’)
Nesse código, estamos comparando os preços de dois produtos usando o operador ‘>‘.
Se o preço do primeiro produto for maior, uma mensagem correspondente é exibida. E quem
não gosta de um bom comparativo, não é mesmo? É como comparar maçãs com laranjas,
mas aqui, o que importa é o preço!
Por último, mas não menos importante, temos os operadores lógicos, que são usados
para combinar expressões booleanas. Os principais incluem E (‘and‘), Ou (‘or‘) e Não (‘not‘).
Esses operadores permitem que você combine várias condições em uma única expressão. Por
exemplo, você pode querer verificar se um produto está em promoção e se há estoque dispo-
nível. Se ambas as condições forem verdadeiras, você pode notificá-lo sobre a disponibilidade
do produto. Vamos dar uma olhada em como isso funciona na prática.
estoque = 0
promocao = True
if promocao
and
estoque > 0:
print(’Produto
disponível em promoção!’)
else:
print(’Produto não está disponível em promoção.’)
CAPÍTULO 2. COMEÇANDO DO BÁSICO MESMO
35
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 37

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
Nesse código, usamos operadores lógicos para verificar se um produto está em promoção
e se há estoque disponível. A mensagem exibida depende do resultado dessas condições. Se
não houver estoque, mesmo que o produto esteja em promoção, é como ter um bolo delicioso,
mas não ter ninguém para comer - uma verdadeira tragédia!
Nesta seção, cobrimos os operadores aritméticos, comparativos e lógicos, fundamentais
para qualquer iniciante em programação. Com os exemplos práticos e os conceitos teóricos
apresentados, você agora está mais bem preparado para aplicar esses operadores em seus
próprios projetos de programação. Então, mãos à obra e que a programação esteja com você!
2.6
COMENTÁRIOS EM PYTHON
Você está em uma grande biblioteca, cercado por livros com anotações e comentários
nas margens. Essas anotações ajudam os leitores a entender melhor o conteúdo, a lembrar
de detalhes importantes e a evitar confusões. Da mesma forma, os comentários em código
Python servem para tornar o código mais legível e compreensível. Eles são como pequenos
guias que ajudam outros programadores (ou você mesmo, em uma data futura) a navegar por
seu código. Nesta seção, exploraremos a importância dos comentários em Python e como
utilizá-los de forma eficaz.
Considerando que você está trabalhando em um projeto de software com uma equipe,
o código pode ter sido escrito por diferentes programadores, e agora você precisa entender
rapidamente o que cada parte faz. Sem comentários, isso pode se tornar uma tarefa difícil e
demorada, como tentar resolver um quebra-cabeça sem a imagem na caixa. Portanto, como
você pode usar comentários para facilitar a colaboração e a manutenção do código? Vamos
abordar esta questão, fornecendo exemplos simples que mostram como os comentários
podem ajudar a esclarecer a lógica do código e a intencionalidade dos desenvolvedores.
Os comentários são essenciais na prática de programação. Eles cumprem uma função
crucial, que é a de documentar o que o código faz. Existem dois tipos principais de comentários:
os de linha única, que são rápidos e diretos, e os de múltiplas linhas, que permitem explicações
mais detalhadas. As boas práticas sugerem que você escreva comentários claros e úteis,
evitando excessos e ambiguidades, como se estivesse escrevendo um bilhete para um amigo
que não entende nada de programação. Além disso, os comentários melhoram a legibilidade
e a manutenção do código, sendo fundamentais para a colaboração em equipe.
CAPÍTULO 2. COMEÇANDO DO BÁSICO MESMO
36
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 38

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
No primeiro exemplo, temos um comentário de linha única que fornece contexto sobre a
função soma. Comentários como este são importantes porque esclarecem a intenção do código
de forma rápida e direta, permitindo que outros desenvolvedores entendam a funcionalidade
sem precisar analisar cada linha.
# Este é um comentário de linha única que
explica a função abaixo
def soma(a, b):
return a + b
No segundo exemplo, utilizamos um comentário de múltiplas linhas (também conhecido
como docstring) para explicar a função media. Esse tipo de comentário é útil para fornecer
uma descrição mais detalhada sobre o que a função faz, quais são os parâmetros esperados
e o que a função retorna. Isso ajuda a documentar o código de maneira mais completa,
facilitando o entendimento e o uso da função por outros desenvolvedores.
’’’
Esta função calcula a média de uma lista de números.
Ela recebe uma lista
como
entrada e retorna a média.
Se a lista
estiver vazia , retorna 0.
’’’
def media(lista):
if not lista:
return 0
return sum(lista) / len(lista)
Finalmente, no terceiro exemplo, os comentários são usados para explicar partes es-
pecíficas da lógica da função fatorial. Cada comentário fornece uma visão do que está
CAPÍTULO 2. COMEÇANDO DO BÁSICO MESMO
37
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 39

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
acontecendo em cada etapa do código, o que é particularmente útil em trechos mais comple-
xos. Isso não apenas ajuda outros desenvolvedores a entenderem rapidamente o que está
acontecendo, mas também serve como um lembrete para o próprio programador, caso ele
retorne ao código após um tempo.
def
fatorial(n):
# Verifica se n é menor que 0
if n < 0:
return ’Número deve ser
positivo ’
# O fatorial de 0 é 1
if n == 0:
return 1
resultado = 1
# Calcula o fatorial de n
for i in range(1, n + 1):
resultado *= i
return
resultado
Os comentários são uma parte vital da programação em Python, ajudando a tornar o
código mais acessível e compreensível. Usá-los de forma eficaz é uma prática que todos os
programadores devem adotar para facilitar a colaboração e a manutenção do código. Com os
exemplos apresentados, esperamos que você se sinta mais confiante em usar comentários
em seus próprios projetos. Afinal, quem não gostaria que seu código fosse tão fácil de ler
quanto uma receita de bolo?
2.7
POR QUE O BÁSICO É TÃO IMPORTANTE PARA IA?
Aposto que você não imaginava que aprender sobre variáveis, strings e operadores
pudesse ter tanta relação com o futuro, não é mesmo? Pois bem, vamos falar sério: o básico
da programação que vimos até agora é como o alicerce de uma casa — sem ele, até a mansão
mais luxuosa de IA (Inteligência Artificial) cairia no primeiro vendaval.
Vamos começar pelas variáveis, essas caixinhas mágicas que guardam dados preciosos.
Em IA, variáveis são como aqueles amigos que sempre têm a informação certa na hora certa.
Imagine que você está treinando um modelo de aprendizado de máquina para prever se vai
chover amanhã. Cada variável é uma peça desse quebra-cabeça: uma pode armazenar a
temperatura, outra a umidade, e outra a pressão atmosférica. Sem variáveis, onde guarda-
ríamos tudo isso? O modelo ficaria tão perdido quanto você sem seu celular numa cidade
desconhecida!
CAPÍTULO 2. COMEÇANDO DO BÁSICO MESMO
38
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 40

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
E as funções de entrada e saída, hein? Ah, essas são como o bate-papo com seu barista
preferido. A função input() é o momento em que você pergunta para o mundo: ’E aí, qual é
a boa?’ e o mundo responde! Por exemplo, em um assistente virtual como o famoso ’Alexa’, o
input() é a voz do usuário, enquanto o print() é a resposta que o sistema devolve para
você. Um ’Como posso te ajudar hoje?’ nunca teria graça se o assistente não pudesse
entender que você quer pedir uma pizza de calabresa, né?
Agora, se estamos falando de IA, precisamos dar uma atenção às strings. Essas be-
lezinhas são vitais, especialmente no Processamento de Linguagem Natural (NLP, para os
íntimos). Imagine que você está treinando um modelo para detectar emoções em mensagens
de texto. Sem strings, o que teríamos? Nada! Ou pior, apenas bytes sem sentido. Strings
permitem que nossos modelos leiam, entendam, e até escrevam textos. Elas são como o
pão na chapa para o café da manhã da IA: simples, versáteis e insubstituíveis! Quer usar
fatiamento de strings para extrair informações específicas de um documento, como o nome do
autor? Fatie à vontade! Quer concatenar diferentes partes de um texto para criar respostas?
As strings estarão lá para ajudar. Tudo que é texto, conversa ou mensagem, strings fazem
acontecer.
E por falar em tipos de dados primitivos, como números inteiros, floats e booleanos, esses
são os guerreiros silenciosos do mundo da IA. Os números são usados para tudo, desde
calcular a distância entre estrelas até determinar a quantidade ideal de molho na sua pizza
(o que, convenhamos, é uma tarefa bem nobre). Números inteiros e floats são como as
engrenagens de um motor; eles permitem que a IA faça cálculos precisos, como ajustar os
pesos de uma rede neural durante o aprendizado. Já os booleanos — o famoso ’Verdadeiro
ou Falso’ — são como os guardiões das decisões. Eles ajudam a IA a decidir, por exemplo, se
um e-mail é spam ou não, se o seu pedido de música deve ser atendido, ou se você está se
movendo em direção a um obstáculo no seu carro autônomo.
E agora, meus amigos, entramos no maravilhoso mundo dos operadores aritméticos,
comparativos e lógicos. Esses operadores são como os superpoderes dos programadores.
Operadores aritméticos são usados para tudo, desde calcular médias de notas de alunos
(porque quem não gosta de uma boa média?) até otimizar algoritmos de aprendizado de
máquina. Os operadores comparativos, por outro lado, são os juízes do nosso código, sempre
verificando quem é maior, quem é menor, quem é igual, como se estivessem na fila de uma
balada VIP. ’Quem tem mais de 18 anos entra, quem não tem fica fora!’ E por fim, temos
os operadores lógicos, os mestres do ’se isso e aquilo, então faça isso’. Eles ajudam a IA a
combinar múltiplas condições e tomar decisões complexas, como ’Se o carro à frente frear E
houver um pedestre na calçada, então reduza a velocidade.’
No fim das contas, todos esses conceitos simples, básicos, e aparentemente banais são
o que tornam as aplicações de IA possíveis. Eles permitem que o código execute tarefas
complexas, como aprender com dados, adaptar-se a novas situações, e até mesmo tomar
CAPÍTULO 2. COMEÇANDO DO BÁSICO MESMO
39
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 41

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
decisões que antes só humanos poderiam tomar. Então, não subestime o poder do básico:
é ele que sustenta os grandes feitos da inteligência artificial. Quando você domina essas
fundações, o céu não é mais o limite — ele é só o começo!
CAPÍTULO 2. COMEÇANDO DO BÁSICO MESMO
40
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 42

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
2.8
SE NÃO PRATICAR NÃO VAI FIXAR
Exercícios de fixação
1. Explique o conceito de variável em Python. Por que as variáveis são fundamentais
em programação e como elas se relacionam com o armazenamento de dados em
inteligência artificial?
2. Qual é a diferença entre os operadores aritméticos, comparativos e lógicos em
Python? Dê exemplos de situações práticas em que cada tipo de operador seria
utilizado em uma aplicação de inteligência artificial.
3. Descreva como as strings são manipuladas em Python. Por que a manipulação de
strings é importante em aplicações de Processamento de Linguagem Natural (NLP)?
4. Como o conceito de escopo de variáveis afeta a execução de um programa?
Explique com exemplos como variáveis globais e locais podem ser utilizadas de forma
eficaz.
5. Qual é o papel dos tipos de dados primitivos (inteiros, floats e booleanos) em
um programa Python? Discuta como cada tipo de dado é utilizado em algoritmos de
inteligência artificial e dê exemplos práticos.
6. Manipulação de Strings Escreva um programa que peça ao usuário para digitar seu
nome completo e, em seguida, exiba o nome em maiúsculas, minúsculas, e apenas com
as iniciais de cada nome em maiúsculas.
7. Cálculo de Área e Perímetro Crie um programa que solicite ao usuário a largura e
altura de um retângulo e calcule tanto a área quanto o perímetro. Exiba os resultados
para o usuário.
8. Comparação de Idades Escreva um programa que peça ao usuário para inserir duas
idades e compare qual delas é maior, menor ou se são iguais, mostrando mensagens
adequadas para cada situação.
9. Conversão de Temperatura Crie um programa que solicite ao usuário uma temperatura
em graus Celsius e a converta para Fahrenheit e Kelvin. Exiba os resultados para o
usuário.
10. Contagem de Caracteres Escreva um programa que peça ao usuário para digitar uma
frase e conte quantos caracteres, palavras e letras maiúsculas há na frase.
11. Verificação de Número Par ou Ímpar Crie um programa que solicite ao usuário um nú-
mero inteiro e verifique se ele é par ou ímpar, exibindo uma mensagem correspondente.
CAPÍTULO 2. COMEÇANDO DO BÁSICO MESMO
41
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 43

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
12. Calculadora Simples Escreva um programa que funcione como uma calculadora sim-
ples, permitindo ao usuário escolher entre adição, subtração, multiplicação e divisão.
Solicite dois números e exiba o resultado da operação escolhida.
13. Conversão de Moeda Crie um programa que pergunte ao usuário a quantia em reais
(BRL) e a taxa de câmbio atual para dólares (USD). Calcule e exiba o valor convertido
em dólares.
14. Reverso de String Escreva um programa que solicite ao usuário uma string e exiba o
reverso dessa string.
15. Calculadora de Média Ponderada Desenvolva um programa que calcule a média
ponderada de três notas, onde o usuário deve informar as notas e seus respectivos
pesos. Exiba o resultado para o usuário.
CAPÍTULO 2. COMEÇANDO DO BÁSICO MESMO
42
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 44

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
CAPÍTULO 3
Deixando Você no Controle
Bem-vindo ao capítulo onde você assume o controle total! Sabe aquela sensação incrível
de dirigir um carro em uma estrada aberta, escolher exatamente onde virar, acelerar ou frear?
É isso que as estruturas de controle de fluxo fazem pelo seu código: elas colocam você no
banco do motorista, dando o poder de decidir o caminho que ele vai seguir.
Imagine seu programa como um robô dançarino em um show. Sem as instruções corretas,
ele ficaria parado, sem saber se deve fazer um moonwalk ou um breakdance. Com as
estruturas de controle, você diz a ele quando rodopiar, pular ou dar aquele passinho esperto!
Elas são os semáforos e sinais de trânsito da programação, ajudam a decidir quem vai, quem
fica, e quem desvia a tempo de não dar de cara com um erro fatal. E não é só isso: com elas,
seu código pode até aprender novos passos — e errar menos vezes na pista!
Ao longo deste capítulo, você vai descobrir como usar essas maravilhas chamadas if,
elif e else para transformar o seu código em um verdadeiro Sherlock Holmes, investigando e
tomando decisões de forma inteligente e certeira. Vai entender como os loops for e while são
como DJs incansáveis, repetem a batida certa até a festa acabar ou até você decidir que é
hora de tocar outra música. E, claro, você aprenderá como usar o break e continue para dar
aquela improvisada esperta, sem perder o ritmo.
Então, prepare-se para assumir o controle e dar as cartas no jogo da programação!
Chegou a hora de deixar o seu código esperto, dinâmico e pronto para qualquer situação.
Afinal, quem não quer um programa que se adapte mais rápido que um camaleão em um
arco-íris? Vamos lá, porque a estrada do controle de fluxo está aberta e só esperando por
você!
CAPÍTULO 3. DEIXANDO VOCÊ NO CONTROLE
43
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 45

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
3.1
ESTRUTURAS DE CONTROLE DE FLUXO
Para entender a importância das estruturas de controle de fluxo em programação, imagine
que você está dirigindo um carro em uma estrada. A cada cruzamento, você precisa decidir se
deve continuar em frente, virar à esquerda ou à direita, dependendo das circunstâncias. Da
mesma forma, em programação, as estruturas de controle de fluxo permitem que o programa
’decida’ qual caminho seguir com base em condições específicas. Elas são essenciais para
criar programas que respondem a diferentes entradas e situações, tornando-se um dos
fundamentos da lógica de programação.
Considere um cenário em que você está desenvolvendo um sistema de gerenciamento de
tarefas. Seu objetivo é permitir que os usuários adicionem tarefas e que o sistema classifique
essas tarefas como ’alta prioridade’, ’média prioridade’ ou ’baixa prioridade’ com base em
critérios que o usuário define. O desafio é implementar a lógica que determina a prioridade
de cada tarefa, utilizando estruturas de controle de fluxo para tomar decisões com base nas
entradas do usuário. Sem essas estruturas, o sistema seria tão útil quanto um GPS que só
sabe dizer ’continue em frente’, mesmo quando você está na beira de um penhasco.
As estruturas de controle de fluxo são, em essência, as regras do jogo que definem como o
código se comporta em diferentes situações. Elas orientam a execução do programa com base
em condições, permitindo que ele reaja de maneira dinâmica. Entre as principais categorias
dessas estruturas, encontramos as estruturas de seleção e as estruturas de repetição. As
estruturas de seleção, como if, else if e else, são como um semáforo que indica se você
deve parar ou seguir em frente, permitindo que o programa escolha diferentes caminhos com
base em condições. Por outro lado, as estruturas de repetição, como for e while, funcionam
como um loop interminável da sua música favorita. Elas permitem que o código execute uma
sequência de instruções repetidamente enquanto uma condição for verdadeira, garantindo
que nada fique sem ser revisitado.
A importância dessas estruturas é inegável. Elas são fundamentais para a lógica de
programação, permitindo que os programas se comportem de maneira dinâmica e interativa.
Sem elas, os programas seriam estáticos e incapazes de responder a diferentes situações.
Assim como um bom chef precisa de uma receita flexível para adaptar os pratos ao gosto
dos clientes, um programador precisa de estruturas de controle de fluxo para adaptar o
comportamento do software às necessidades dos usuários. E quem não quer um software
que saiba quando é hora de agir, como um garçom que traz a sobremesa na hora certa?
Portanto, ao entender e aplicar esses conceitos, os desenvolvedores estarão melhor
equipados para enfrentar os desafios da programação e desenvolver soluções eficazes. As
estruturas de controle de fluxo são, sem dúvida, a espinha dorsal da programação, permitindo
CAPÍTULO 3. DEIXANDO VOCÊ NO CONTROLE
44
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 46

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
que o software reaja e se adapte a diferentes situações. Afinal, no final do dia, todos nós
queremos que nossos programas sejam mais do que apenas uma sequência de comandos;
queremos que eles sejam inteligentes, responsivos e prontos para a ação!
3.2
’E SE...’, PROGRAMA QUE TOMA DECISÕES
Para introduzir o conceito de tomadas de decisão em programação, vamos utilizar a
analogia de um semáforo. Imagine que você está dirigindo e se depara com um semáforo.
Dependendo da cor do sinal, você tomará uma decisão diferente: se estiver verde, você
continua; se estiver amarelo, você deve decidir se acelera ou freia; e se estiver vermelho, você
para. Assim como o semáforo, as estruturas condicionais em Python (if, elif e else) permitem
que o programa tome decisões com base em diferentes condições. Essa analogia ajudará
o leitor a entender que, assim como na vida real, a programação também envolve decisões
baseadas em condições que precisam ser avaliadas.
Para aplicar o conceito de decisões condicionais, propomos o seguinte problema prático:
crie um programa que determine se um usuário pode acessar um site com base em sua idade.
As regras são simples: se a idade do usuário for menor de 18 anos, o acesso deve ser negado;
se a idade for entre 18 e 60 anos, o acesso é permitido; e se a idade for superior a 60 anos,
o acesso é permitido, mas com uma mensagem de advertência sobre o conteúdo do site.
Este desafio incentivará o leitor a aplicar as estruturas if, elif e else em um cenário prático e
relevante.
Os pontos-chave a serem explicados nesta seção incluem a estrutura do if, o uso do elif
e do else, a sintaxe e a importância da indentação em Python, além das comparações. A
estrutura do if é a primeira linha de defesa nas decisões condicionais e funciona da seguinte
forma: quando uma condição é verdadeira, o código dentro do bloco if é executado. Por
exemplo, se quisermos verificar se a idade de um usuário é menor de 18 anos, escreveríamos
if idade < 18:. Assim, se a condição for atendida, o programa segue em frente com as
instruções contidas naquele bloco.
O elif, por sua vez, é como ter um plano B e C. Ele permite que você adicione condições
adicionais após o if. Por exemplo, elif idade > 60: pode ser usado para lidar com uma
situação onde a idade do usuário é maior que 60 anos. Finalmente, o else serve como um
segurança, capturando todos os casos que não foram tratados anteriormente. Se nada mais
se aplicar, o else garante que algo ainda será executado, mantendo o programa funcionando
sem interrupções.
É importante mencionar que a indentação em Python não é apenas uma questão de
estética, mas sim uma regra fundamental da linguagem. Se você não indentar corretamente, o
CAPÍTULO 3. DEIXANDO VOCÊ NO CONTROLE
45
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 47

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
Python pode ficar confuso e você não quer que seu código se transforme em um enigma para
o interpretador, certo? Além disso, os operadores de comparação, como >, <, == e !=, são
essenciais para avaliar condições e tomar decisões.
Vamos agora aos exemplos de código. Primeiro, vejamos a estrutura básica do if. Neste
exemplo, o código solicita que o usuário insira sua idade. Se a idade for menor que 18, o
programa imprime ’Acesso negado.’ Isso introduz a estrutura básica de um bloco condicional.
# Aqui você adiciona o código
Python
relacionado ao tema
idade = int(input(’Digite sua idade: ’))
if idade < 18:
print(’Acesso
negado.’)
Aqui, o código foi expandido para incluir a cláusula elif. Se a idade estiver entre 18 e 60, o
acesso será permitido, enquanto que se a idade for superior a 60, o programa ainda permitirá
o acesso, mas com um aviso. Isso demonstra como adicionar condições adicionais.
idade = int(input(’Digite sua idade: ’))
if idade < 18:
print(’Acesso
negado.’)
elif
idade
<= 60:
print(’Acesso
permitido.’)
else:
print(’Acesso
permitido , mas tenha
cuidado
com o conteúdo.’)
Nesse exemplo, incluímos uma condição específica para quando o usuário tem exatamente
18 anos. Isso ajuda a mostrar como as comparações podem ser utilizadas de forma mais
detalhada.
idade = int(input(’Digite sua idade: ’))
if idade < 18:
print(’Acesso
negado.’)
elif
idade == 18:
print(’Você acabou de completar 18 anos! Acesso
permitido.’)
else:
print(’Acesso
permitido.’)
Esses exemplos ilustram como cada parte do código funciona e como cada estrutura
condicional é aplicada, permitindo que o leitor compreenda não apenas a lógica, mas também
a sintaxe do Python. Este plano de conteúdo proporciona uma abordagem prática e teórica do
CAPÍTULO 3. DEIXANDO VOCÊ NO CONTROLE
46
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 48

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
uso de estruturas condicionais em Python, permitindo que os leitores se sintam confiantes em
aplicar o que aprenderam em situações do mundo real.
3.3
REPETINDO ATÉ ACERTAR: DOMINANDO OS LOOPS
Imagine que você está organizando uma grande festa e precisa enviar convites para todos
os seus amigos. Você poderia fazer isso um a um, mas isso tomaria muito tempo. Em vez
disso, você decide usar uma lista e um método que permite enviar os convites de forma rápida
e eficiente. Essa analogia reflete como as estruturas de repetição, como os loops for e while
em Python, facilitam a execução de tarefas repetitivas de maneira simples e organizada. Nesta
seção, exploraremos como essas ferramentas podem ser aplicadas em diversos cenários
práticos, tornando sua programação mais eficiente.
Considere o seguinte desafio prático: você precisa calcular a soma de todos os números
em uma lista e exibir o resultado. Esse é um ótimo exemplo para aplicar loops, pois demonstra
como podemos iterar sobre uma coleção de dados sem precisar escrever código redundante
para cada elemento. Ao final desta seção, o leitor será capaz de utilizar tanto o loop for quanto
o while para resolver esse e outros problemas similares.
Existem dois tipos principais de loops em Python: o loop for e o loop while. O loop for
é utilizado para iterar sobre uma sequência (como uma lista ou uma string) e executar um
bloco de código para cada item dessa sequência. Ele é especialmente útil quando sabemos o
número de iterações que precisamos realizar. Por outro lado, o loop while continua executando
um bloco de código enquanto uma condição específica for verdadeira, sendo útil para situações
onde o número de iterações não é previamente conhecido. É importante entender a sintaxe
básica e as situações apropriadas para usar cada um desses loops.
Vamos começar com os exemplos do loop for. O primeiro exemplo trata da soma de
números em uma lista. Aqui, temos uma lista de números e queremos calcular a soma deles.
Usamos um loop for para iterar sobre cada número na lista. A variável soma é inicializada
em 0 e, a cada iteração, o número atual é adicionado a soma. Finalmente, imprimimos o
resultado. Esse é um exemplo claro de como o loop for pode ser usado para processar todos
os elementos de uma coleção.
numeros = [1, 2, 3, 4, 5]
soma = 0
for numero in numeros:
soma += numero
print(soma)
CAPÍTULO 3. DEIXANDO VOCÊ NO CONTROLE
47
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 49

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
O segundo exemplo envolve a contagem de caracteres em uma string. Aqui, estamos
contando quantos caracteres existem na string ’programação’. O loop for percorre cada
caractere da string e incrementa um contador. Ao final, imprimimos o total de caracteres. Este
exemplo ilustra como o loop pode ser utilizado para percorrer strings de forma eficiente, e é
uma técnica comum em manipulação de texto.
texto = ’programação’
contador = 0
for
caractere in texto:
contador += 1
print(contador)
O terceiro exemplo mostra como imprimir nomes em uma lista. Temos uma lista de nomes
e usamos um loop for para imprimir cada um deles. Isso demonstra a simplicidade de iteração
em listas, tornando o código claro e fácil de entender. É como fazer uma chamada rápida para
cada convidado da festa; você simplesmente os chama e eles aparecem!
nomes = [’Alice ’, ’Bob’, ’Charlie ’]
for nome in nomes:
print(nome)
No quarto exemplo, utilizamos a função range() para gerar uma sequência de números
de 0 a 4. O loop for itera sobre essa sequência e imprime cada número. Este é um uso típico
do for, especialmente quando precisamos de um contador. É como contar até cinco, mas de
uma maneira mais automatizada!
for i in range (5):
print(i)
O quinto exemplo envolve a multiplicação de elementos em uma lista.
Neste caso,
estamos multiplicando cada número da lista por 2 e imprimindo o resultado. O loop for permite
que realizemos essa operação de forma concisa e eficiente. É como um chef multiplicando
ingredientes para uma receita: se você precisa de mais porções, é só dobrar a receita!
numeros = [2, 4, 6]
for numero in numeros:
print(numero * 2)
CAPÍTULO 3. DEIXANDO VOCÊ NO CONTROLE
48
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 50

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
Agora, vamos explorar os exemplos do loop while. O primeiro exemplo demonstra o uso
do loop while para somar números de 1 a 5. A condição ‘contador <= 5‘ controla a execução
do loop, e a variável ‘contador‘ é incrementada a cada iteração. Ao final, a soma é impressa.
Esse tipo de loop é útil quando não sabemos de antemão quantas iterações serão necessárias,
como quando contamos os convidados que chegam à festa.
soma = 0
contador = 1
while
contador
<= 5:
soma += contador
contador += 1
print(soma)
O segundo exemplo apresenta uma contagem regressiva. Nesse código, implementamos
uma contagem regressiva de 5 a 1. O loop while continua a executar enquanto a condição
‘contador > 0‘ for verdadeira. A variável ‘contador‘ é decrementada a cada iteração, demons-
trando como um loop pode ser usado para executar ações até que uma condição mude. É
como o ’3, 2, 1, já!’ antes de uma grande surpresa!
contador = 5
while
contador > 0:
print(contador)
contador
-= 1
O terceiro exemplo mostra um loop while que solicita ao usuário para digitar algo até
que ele digite ’sair’. Essa abordagem é comum em programas que precisam de interação
constante com o usuário. É como um jogo de perguntas e respostas, onde o jogador continua
até que decida parar.
entrada = ""
while
entrada != "sair":
entrada = input(’Digite
algo (ou "sair" para
parar): ’)
O quarto exemplo usa o loop while para contar e imprimir apenas os números pares até
10. A condição dentro do loop verifica se o número atual é par usando o operador módulo.
Este é um exemplo prático de como controlar o fluxo de execução com condições, mostrando
como podemos ser seletivos em nossas iterações.
CAPÍTULO 3. DEIXANDO VOCÊ NO CONTROLE
49
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 51

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
numero = 10
contador = 0
while
contador
<= numero:
if contador % 2 == 0:
print(contador)
contador += 1
Por fim, no quinto exemplo, calculamos o fatorial de um número usando um loop while. A
variável ‘fatorial‘ começa em 1 e é multiplicada pelo ‘contador‘ a cada iteração. O loop continua
até que o contador atinja o número desejado. Esse exemplo mostra como loops podem ser
aplicados para realizar operações matemáticas iterativas e como eles podem se tornar uma
ferramenta poderosa em nossa caixa de ferramentas de programação.
numero = 5
fatorial = 1
contador = 1
while
contador
<= numero:
fatorial *= contador
contador += 1
print(fatorial)
Com essas explicações e exemplos, o leitor terá uma compreensão sólida sobre como
e quando usar loops for e while em Python, além de estar preparado para aplicar esses
conceitos em problemas práticos. Portanto, agora você pode programar como um verdadeiro
maestro, orquestrando suas ideias e tarefas com loops!
3.4
PARECE MÚSICA: BREAK E CONTINUE
Imagine que você está jogando um jogo de tabuleiro. Durante a partida, você pode
encontrar situações em que precisa parar e voltar, ou talvez decida ignorar uma rodada e
seguir em frente. Da mesma forma, em programação, podemos encontrar cenários onde, com
os comandos de controle de loop ’break’ e ’continue’, precisamos interromper completamente
um loop ou apenas pular para a próxima iteração. Esses comandos permitem que você
controle o fluxo de execução de forma mais eficiente, tornando seu código mais dinâmico e
adaptável.
Vamos explorar como os comandos ’break’ e ’continue’ funcionam em Python por meio
CAPÍTULO 3. DEIXANDO VOCÊ NO CONTROLE
50
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 52

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
de exemplos práticos. Ao final, você terá uma compreensão clara de como implementar esses
comandos em suas aplicações, tornando-se um programador mais habilidoso e eficaz.
Vamos imaginar que você está desenvolvendo um sistema de controle de cadastro de
usuários. O sistema deve permitir que os usuários insiram seus dados, mas você quer
garantir que não haja entradas duplicadas. Para isso, você pode usar o comando ’break’ para
interromper o loop de entrada assim que um usuário tentar adicionar um nome que já está no
sistema. Por outro lado, você pode usar o comando ’continue’ para pular entradas inválidas,
como nomes vazios ou com caracteres especiais, permitindo que o usuário continue inserindo
dados até que todos estejam corretos.
O comando ’break’ é usado para sair de um loop antes que ele termine normalmente. É
particularmente útil quando uma condição específica é atendida, como encontrar um valor
ou atingir um limite. Imagine que você está procurando por um tesouro escondido em uma
ilha. Assim que você encontra o mapa do tesouro, não precisa mais explorar a ilha, certo? O
comando ’break’ faz exatamente isso, interrompendo o loop quando a condição desejada é
satisfeita.
Por outro lado, o comando ’continue’ permite que você pule para a próxima iteração de
um loop, ignorando o restante do código dentro do loop para essa iteração específica. É útil
quando você deseja evitar a execução de certas partes do código sob condições específicas.
Pense nisso como um jogo de perguntas e respostas: se a pergunta não faz sentido, você
simplesmente passa para a próxima sem perder tempo. Assim, o comando ’continue’ ajuda a
manter o fluxo do seu programa sem interrupções desnecessárias.
Vamos agora aos exemplos práticos, começando com o comando ’break’.
# Exemplo 1: Parar a busca ao encontrar um item
itens = [’maca ’, ’banana ’, ’laranja ’, ’morango ’]
for item in itens:
if item == ’laranja ’:
print(’Item
encontrado:’, item)
break
Nesse exemplo, iteramos sobre uma lista de frutas. O loop continua até que o item ’laranja’
seja encontrado. Quando isso acontece, o comando ’break’ interrompe o loop, e a mensagem
é exibida. Isso demonstra como podemos usar ’break’ para sair de um loop assim que
encontramos o que estamos procurando. Pense na frustração de procurar uma fruta específica
e, ao encontrá-la, não precisar continuar a busca. É como encontrar a última fatia de pizza em
uma festa!
Com a compreensão e a prática dos comandos ’break’ e ’continue’, você agora possui
as ferramentas necessárias para controlar melhor o fluxo do seu código em Python. Ao aplicar
CAPÍTULO 3. DEIXANDO VOCÊ NO CONTROLE
51
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 53

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
esses conceitos em situações práticas, como a validação de entradas de usuários ou a filtragem
de dados, você poderá escrever programas mais robustos e eficientes. Experimente esses
exemplos e desafie-se a criar seus próprios casos de uso para solidificar seu entendimento!
3.5
CONTROLES PYTHON E A INTELIGÊNCIA ARTIFICIAL
Você deve estar se perguntando: ’Ok, estruturas de controle de fluxo, tomadas de decisão
e loops são legais e tal, mas o que isso tem a ver com inteligência artificial?’ A resposta é:
tudo! Cada um desses conceitos é como uma peça de um quebra-cabeça que, quando junta
com as outras, transforma o seu código numa verdadeira obra-prima digna de um Picasso...
ou, pelo menos, algo que funciona! kkkk
Vamos começar com as estruturas de controle de fluxo.
Imagine que você está
desenvolvendo um assistente virtual — daqueles que ficam esperando o momento certo
para aparecer e perguntar: ’Como posso ajudar?’. Ele não pode simplesmente responder
a qualquer coisa de forma aleatória, certo? Precisamos de um ’cérebro’ que saiba tomar
decisões. É aí que entram as estruturas de controle de fluxo. Elas permitem que o programa
escolha o caminho certo com base nas condições que encontra, como um GPS que sabe
quando te mandar virar à direita (ou, no caso do assistente virtual, sugerir uma receita de
bolo de cenoura quando você perguntar como fazer um café). Em IA, essas estruturas são
fundamentais para criar programas que não sejam um completo desastre em tomar decisões.
E falando em decisões, vamos entender como o famoso ’E se...’ (o if) pode ser usado
em códigos para treinar IA. No mundo da inteligência artificial, o if não está diretamente
envolvido na parte de aprendizado de um modelo, mas ele desempenha um papel importante
em várias etapas ao redor do treinamento. Por exemplo, durante o pré-processamento de
dados, podemos usar if para filtrar dados indesejados ou tratar valores ausentes: ’Se o valor
estiver faltando, substitua por zero’. Além disso, quando definimos critérios de parada para o
treinamento de um modelo, usamos um if para verificar se a taxa de erro caiu abaixo de um
certo limite ou se o modelo atingiu o número máximo de iterações. Também podemos usar if
para verificar a performance do modelo em cada época: ’Se a precisão aumentar, guarde o
modelo; se não, tente ajustar os parâmetros’. Em resumo, o if está em todo lugar no código
que prepara, monitora e ajusta o processo de treinamento da IA.
Agora, se falamos de IA, não podemos esquecer dos loops! Ah, os loops são como
DJs de uma festa interminável. Eles repetem a batida (ou o código) até que alguém decida
mudar o ritmo. Por exemplo, em IA, imagine que você precisa treinar um modelo com milhares
(ou milhões!) de dados. Não dá para fazer isso manualmente, né? Você usa um loop para
percorrer todos esses dados de forma rápida e eficiente, ajustando os pesos e parâmetros do
modelo até ele aprender. Além disso, loops como o for e o while são essenciais para tarefas
CAPÍTULO 3. DEIXANDO VOCÊ NO CONTROLE
52
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 54

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
de aprendizado contínuo, onde o modelo vai melhorando a cada nova iteração. Sem eles, a IA
seria tão ágil quanto uma tartaruga tentando correr uma maratona.
E por último, temos nossos amigos break e continue. Eles são como aqueles momentos
na vida em que você precisa dar uma pausa estratégica ou, simplesmente, pular para o
próximo desafio. Em IA, por exemplo, o break pode ser usado para interromper o treinamento
de um modelo assim que ele atinge uma precisão satisfatória (porque ninguém quer ficar
treinando para sempre, né?). Já o continue é útil para ignorar dados que são claramente fora
da curva (tipo aquele amigo que insiste que pizza com abacaxi é uma boa ideia — melhor
pular essa parte e continuar com a vida).
Em resumo, todas essas estruturas e comandos são como as engrenagens de uma IA
superinteligente: cada uma tem seu papel, e juntas, fazem a mágica acontecer. Sem elas,
estaríamos criando IAs tão inteligentes quanto um forno de micro-ondas (e nem sempre
dos modernos!). Então, não subestime o poder dessas ferramentas: elas são a chave para
fazer sua inteligência artificial pensar, reagir e aprender de verdade. Bora colocar essas
engrenagens para funcionar e deixar a IA tão afiada quanto um gênio da lâmpada — mas sem
as três limitações dos desejos! Agora é hora de praticar.
CAPÍTULO 3. DEIXANDO VOCÊ NO CONTROLE
53
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 55

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
3.6
A PRÁTICA LEVA À EXCELÊNCIA
1. Crie um programa que solicite ao usuário um número inteiro e verifique se ele é positivo,
negativo ou zero. Exiba a mensagem correspondente para cada caso.
2. Implemente um programa que solicite ao usuário uma palavra e conte quantas letras ’a’
(maiúscula ou minúscula) estão presentes na palavra. Utilize um loop para iterar sobre
os caracteres da palavra.
3. Desenvolva um programa que peça ao usuário para inserir sua idade e determine se ele
é menor de idade, adulto ou idoso. Considere as faixas etárias: menor de idade (menos
de 18 anos), adulto (18 a 64 anos) e idoso (65 anos ou mais).
4. Escreva um programa que gere e exiba todos os números pares entre 1 e 20. Utilize um
loop for para iterar sobre os números e uma estrutura condicional para verificar se o
número é par.
5. Crie um programa que solicite ao usuário para inserir uma lista de nomes separados por
vírgulas e exiba cada nome em uma nova linha. Utilize um loop para percorrer a lista de
nomes.
6. Implemente um programa que calcule o fatorial de um número inteiro positivo fornecido
pelo usuário. Utilize um loop while para realizar o cálculo e exibir o resultado.
7. Crie um programa que leia a nota de 5 alunos e armazene essas notas em uma lista. O
programa deve calcular e exibir a média das notas e também a quantidade de alunos
que ficaram acima e abaixo da média.
8. Desenvolva um programa que simule um caixa eletrônico. O programa deve permitir que
o usuário insira o valor de saque desejado (em múltiplos de 10) e exiba quantas cédulas
de cada denominação (R$100, R$50, R$20, R$10) serão necessárias para totalizar o
valor do saque, utilizando o menor número possível de cédulas.
9. Implemente um jogo de adivinhação onde o programa escolhe um número aleatório
entre 1 e 100, e o usuário tenta adivinhar o número. O programa deve fornecer dicas
como ’Maior’ ou ’Menor’ após cada tentativa, limitar o número de tentativas a 7 e exibir
uma mensagem de sucesso ou falha ao final do jogo.
10. Crie um programa que receba um texto e conte a frequência de cada palavra, ignorando
maiúsculas e minúsculas. O programa deve exibir uma lista de palavras únicas e o
número de vezes que cada uma aparece no texto. Utilize estruturas de dicionário e loops
para realizar o processamento.
CAPÍTULO 3. DEIXANDO VOCÊ NO CONTROLE
54
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 56

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
CAPÍTULO 4
Funções: Escreva uma vez, use
para sempre
Seja bem-vindo ao mundo das funções! Imagine só: você está sentado na frente do
computador, cansado de fazer as mesmas contas manualmente, copiando e colando aquele
trecho de código mil vezes. Um verdadeiro “Ctrl+C, Ctrl+V” eterno! Pois é, todo programador já
passou por isso. Mas, e se eu te dissesse que existe uma maneira de fazer o computador repetir
essas tarefas para você, sem que você tenha que escrever o mesmo código repetidamente?
É aí que as funções entram em cena! Pense nelas como as playlists do seu serviço
de música favorito. Em vez de buscar música por música, você cria uma lista com as suas
favoritas e, sempre que quiser ouvir, basta dar o play. Da mesma forma, você cria uma função
com um conjunto de instruções e, sempre que precisar, é só chamar a função, "dar o play"e
deixar o Python fazer o trabalho por você.
O legal das funções é que elas tornam o seu código muito mais organizado e legível.
Sabe aquele colega que escreve tudo de qualquer jeito e deixa a bagunça para você arrumar?
Então, com funções, você consegue dividir o trabalho em blocos bem definidos, cada um
responsável por uma tarefa específica. Seu código fica mais fácil de entender, como uma
mesa de trabalho arrumada onde cada coisa tem seu lugar.
Além disso, funções são verdadeiros coringas: podem ser usadas e reutilizadas em várias
partes do seu programa. É como se você tivesse uma ferramenta multiuso no bolso, pronta
para qualquer desafio que apareça. Quer calcular a área de um círculo? Ou talvez o desconto
de um produto? Não importa o problema, criar uma função pode simplificar a sua vida!
Outra coisa interessante é que funções podem trabalhar juntas. Uma função pode chamar
outra função e assim por diante, criando uma verdadeira equipe de operações dentro do seu
código. Imagine um time de futebol onde cada jogador sabe exatamente o que fazer e quando
passar a bola. O resultado? Um código mais limpo, eficiente e fácil de manter.
CAPÍTULO 4. FUNÇÕES: ESCREVA UMA VEZ, USE PARA SEMPRE
55
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 57

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
Mas não para por aí! Você ainda vai conhecer a recursão, uma técnica onde uma função
chama a si mesma para resolver problemas maiores, como quem desce uma escada passo
a passo até chegar ao final. É uma ferramenta poderosa, mas que precisa ser usada com
cuidado para não perder o controle e acabar em um loop infinito.
Nesse capítulo, você vai aprender a criar suas próprias funções em Python, desde as mais
simples até as mais sofisticadas, entender quando utilizá-las e como combiná-las para resolver
problemas de forma mais inteligente. Vamos transformar a maneira como você programa,
tornando o processo mais divertido e produtivo!
4.1
INTRODUÇÃO ÀS FUNÇÕES: O QUE SÃO E POR QUE USAR?
Você é um professor, cheio de cadernos nas mãos, tentando calcular a média das notas
dos seus alunos. Você começa a fazer as contas para a turma A. Depois, repete o mesmo
processo para a turma B, depois para a turma C... No final do dia, além de cansado, percebe
que perdeu um tempo danado repetindo os mesmos cálculos. E, pior, talvez tenha cometido
algum erro ao fazer tudo manualmente.
Agora, imagine que você pudesse ensinar um pequeno ajudante a fazer esse trabalho
por você. Esse ajudante saberia exatamente como calcular a média das notas para qualquer
turma, bastando você lhe passar a lista de notas. Sempre que precisasse, você só chamaria o
ajudante, e ele faria o cálculo rapidamente e de forma confiável.
Pois é, esse ajudante é a nossa função! Em vez de repetir o mesmo bloco de código
várias vezes, você cria uma ’fórmula mágica’ chamada calcular_media, que aceita uma lista
de notas e retorna a média. Vamos explorar como criar essa mágica e ver como ela pode
tornar nossas vidas muito mais fáceis!
Funções são blocos de construção fundamentais da programação. Elas encapsulam
CAPÍTULO 4. FUNÇÕES: ESCREVA UMA VEZ, USE PARA SEMPRE
56
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 58

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
um conjunto de instruções que podem ser executadas quando necessário, permitindo que
você escreva código mais limpo e organizado. Os pontos-chave a serem abordados incluem:
definição de funções, como declarar uma função em Python, a importância dos parâmetros e
argumentos, além do conceito de retorno de valores. Por exemplo, ao definir uma função para
calcular a área de um retângulo, você pode passar a largura e a altura como parâmetros e
retornar o resultado da multiplicação. Essa abordagem evita a duplicação de código e melhora
a legibilidade. Afinal, quem gosta de escrever a mesma coisa várias vezes? Isso só aumenta
a chance de você se perder no meio do caminho!
4.2
CRIANDO SUA PRIMEIRA FUNÇÃO - SINTAXE E EXEMPLOS
Vamos considerar um cenário simples: você precisa fazer cálculos repetidos, como somar
números, sem ter que escrever o mesmo código várias vezes. A criação de uma função pode
ser a solução ideal para este problema. Ao final desta seção, você estará apto a criar sua
própria função para realizar somas. Isso não só economiza tempo, mas também torna seu
código mais limpo e fácil de manter.
Aqui estão os pontos-chave que precisamos abordar sobre a criação de funções em
Python. Primeiro, temos a definição da função, que começa com a palavra-chave def. Em
seguida, o nome da função deve ser um verbo que descreva a ação que ela realizará, como
somar ou multiplicar. Os parâmetros são valores que podem ser passados para a função,
permitindo que ela processe informações diferentes a cada chamada. A identação é crucial,
pois ela organiza o código; tudo que está indentado abaixo de def pertence ao corpo da
função. Por último, o retorno da função é o que ela devolve após a execução, podendo ser um
valor calculado ou uma mensagem.
Vamos começar com um exemplo bem simples de uma função de soma.
def somar(a, b):
return a + b
c = somar (1,2)
print(c)
Vamos detalhar cada parte da definição de uma função em Python para entender seu
funcionamento. Começamos com a palavra-chave def, que é usada para definir uma função.
Esta palavra indica ao Python que estamos criando uma nova função e que o que vem a seguir
será o nome dela. No exemplo, o nome da função é somar, que descreve de forma clara a
ação que a função realiza: somar dois valores. Bons nomes ajudam a tornar o código mais
CAPÍTULO 4. FUNÇÕES: ESCREVA UMA VEZ, USE PARA SEMPRE
57
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 59

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
compreensível.
Depois do nome da função, vêm os parâmetros, colocados entre parênteses. No caso,
a e b são os parâmetros que a função somar receberá. Eles atuam como ’caixinhas’ que
armazenam os valores que serão passados para a função quando ela for chamada. Isso torna
a função reutilizável com diferentes valores, pois ela pode receber entradas variadas e produzir
saídas correspondentes.
Logo após os parênteses, usamos o caractere : (dois pontos). Esses dois pontos indicam
o início do corpo da função. Tudo o que estiver abaixo dessa linha, com um pequeno recuo ou
indentação, faz parte do bloco de código da função. A indentação é aquele espaço extra que
colocamos no início de uma linha de código.
A indentação é muito importante em Python! Em outras linguagens, como C ou Java, a
gente usa chaves {} para delimitar blocos de código, como o corpo de uma função. Já em
Python, usamos a indentação para essa finalidade. Esse espacinho (geralmente 4 espaços ou
um TAB) indica para o Python quais linhas pertencem à função. Assim, toda linha que está
indentada faz parte da função, e o Python sabe onde ela começa e termina. Se não houvesse
essa indentação, o Python não conseguiria entender quais instruções fazem parte do corpo
da função, resultando em erros.
A indentação, além de ser obrigatória, ajuda a manter o código organizado e mais fácil de
ler. Imagine um texto sem parágrafos; seria muito difícil entender, não é? A indentação faz
algo parecido com o código: organiza os blocos de forma clara e visual.
O corpo da função contém as instruções que queremos que a função execute. No nosso
exemplo, o corpo da função tem apenas uma linha: return a + b. A palavra-chave return
serve para especificar o valor que a função devolverá quando for chamada. Aqui, ele retorna a
soma de a e b.
O escopo da função refere-se ao contexto no qual as variáveis e o código dentro da função
são válidos. Variáveis definidas dentro de uma função, como a e b, só podem ser usadas
CAPÍTULO 4. FUNÇÕES: ESCREVA UMA VEZ, USE PARA SEMPRE
58
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 60

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
dentro dessa função. Isso protege essas variáveis de interferências externas e mantém o
código modular e seguro.
Por fim, a função pode retornar um ou mais valores. Em Python, podemos retornar
múltiplos valores separados por vírgulas, como em return x, y. Esses valores são retorna-
dos como uma tupla, que pode ser desempacotada em várias variáveis. Isso permite maior
flexibilidade na manipulação e reutilização de dados.
Assim, quando chamamos somar(2, 3), obtemos 5, pois a função soma os valores e
retorna o resultado. A função é como uma pequena ’máquina de somar’ que, dada a entrada
correta, sempre traz de volta o resultado esperado!
Agora, vamos ver mais exemplos práticos que mostram diferentes maneiras de criar
funções.
O segundo exemplo é uma função de multiplicação.
def
multiplicar(x, y):
return x * y
resultado = multiplicar (3, 4)
print(resultado)
Aqui, temos uma função chamada multiplicar, que aceita dois parâmetros, x e y, e
retorna o produto deles. Assim como na função de soma, a estrutura é a mesma. A função
é uma maneira eficiente de realizar a multiplicação sempre que necessário, sem precisar
reescrever o código. Imagine que você está multiplicando ingredientes em uma receita; essa
função faz isso por você, e ainda tem tempo para dançar enquanto cozinha!
No terceiro exemplo, vamos usar um parâmetro padrão.
def
saudacao(nome=’Mundo ’):
return f’Olá, {nome }!’
mensagem = saudacao(’Ana’)
print(mensagem)
Nesse exemplo, a função saudacao possui um parâmetro padrão. Se nenhum nome for
fornecido ao chamar a função, ela usará ’Mundo’ como valor padrão. Assim, saudacao()
retornará ’Olá, Mundo!’. É como se você estivesse organizando uma festa e, se ninguém
aparecer, pelo menos você ainda tem o ’Mundo’ para cumprimentar!
CAPÍTULO 4. FUNÇÕES: ESCREVA UMA VEZ, USE PARA SEMPRE
59
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 61

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
O quarto exemplo é uma função para calcular a média.
def media(n1 , n2):
return (n1 + n2) / 2
resultado_media = media(7, 8)
print( resultado_media )
A função media calcula a média de dois números. Ela soma n1 e n2, e então divide o
resultado por 2. Usar funções assim ajuda a manter o código limpo e organizado, como uma
mesa de trabalho bem arrumada. Afinal, quem consegue pensar em grande quando está
cercado de bagunça?
O quinto exemplo é uma função para verificar se um número é par ou ímpar.
def
verificar_par(numero):
return
numero % 2 == 0
par = verificar_par (5)
print(par)
Esta função, verificar_par, recebe um número e retorna True se o número for par, e
False caso contrário. O uso do operador módulo (%) permite que verifiquemos a paridade do
número. É como fazer um teste de moda: ’Você é par ou ímpar?’ E se for ímpar, bem, não se
preocupe, ainda há espaço na festa!
Agora, vamos contar letras com a próxima função.
def
contar_letras(palavra):
return len(palavra)
numero_letras = contar_letras (’Python ’)
print(numero_letras)
A função contar_letras recebe uma palavra e retorna o número de letras que ela
contém. Usar a função len() é um exemplo de como podemos utilizar funções embutidas
dentro de nossas próprias funções. É como contar quantos amigos você tem na festa; sempre
há espaço para mais um!
CAPÍTULO 4. FUNÇÕES: ESCREVA UMA VEZ, USE PARA SEMPRE
60
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 62

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
No próximo exemplo, vamos converter Celsius em Fahrenheit.
def
celsius_para_fahrenheit (celsius):
return (celsius * 9/5) + 32
temperatura_f = celsius_para_fahrenheit (30)
print(temperatura_f)
Aqui, a função celsius_para_fahrenheit converte uma temperatura em Celsius para
Fahrenheit. É um exemplo prático de como funções podem ser usadas para realizar cálculos
em diferentes contextos, como quando você precisa decidir se aquele suéter é realmente
necessário no inverno!
Vamos reverter uma string no próximo exemplo.
def
reverter_string (s):
return s[:: -1]
string_revertida = reverter_string (’Python ’)
print( string_revertida )
Esta função reverter_string pega uma string e a reverte. O uso de slicing ([::-1])
demonstra como podemos utilizar técnicas de Python dentro de nossas funções para manipu-
lação de strings. É como olhar no espelho, mas em vez de ver seu reflexo, você vê o que você
não queria que aparecesse!
Agora, vamos calcular um fatorial.
def
fatorial(n):
if n == 0:
return 1
else:
return n * fatorial(n-1)
resultado_fatorial = fatorial (5)
print( resultado_fatorial )
A função fatorial calcula o fatorial de um número usando recursão. Se n for 0, ela
retorna 1 (base da recursão). Caso contrário, retorna n multiplicado pelo fatorial de n-1. Este
é um exemplo mais avançado de como as funções podem se chamar. É como se você tivesse
um assistente que se chama para pedir ajuda; bem engenhoso!
CAPÍTULO 4. FUNÇÕES: ESCREVA UMA VEZ, USE PARA SEMPRE
61
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 63

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
Por último, vamos filtrar números pares de uma lista.
def
filtrar_pares(lista):
return [num for num in lista if num % 2 == 0]
lista_pares = filtrar_pares ([1, 2, 3, 4, 5, 6])
print(lista_pares)
A função filtrar_pares recebe uma lista de números e retorna uma nova lista contendo
apenas os números pares. Esse exemplo mostra como podemos combinar funções e com-
preensão de listas em Python para realizar tarefas complexas de maneira concisa. É como
organizar os convidados da festa em categorias, e quem não é par, bem, talvez da próxima
vez!
4.3
FUNÇÕES QUE CHAMAM FUNÇÕES
Uma das características mais poderosas da programação em Python é a capacidade de
uma função chamar outra função. Isso permite que você componha funcionalidades complexas
a partir de funções menores e mais simples, promovendo a reutilização de código e melhor
organização. Vamos explorar alguns exemplos práticos para entender como isso funciona.
Imagine que você tem várias funções que realizam operações matemáticas básicas, como
soma, subtração, multiplicação e divisão. Em vez de usá-las isoladamente, você pode criar
uma nova função que combine essas operações para calcular, por exemplo, uma média
ponderada.
def somar(a, b):
return a + b
def
multiplicar(x, y):
return x * y
def
calcular_media_ponderada (n1 , n2 , peso1 , peso2):
soma_pesos = somar(peso1 , peso2)
total = somar(multiplicar(n1 , peso1), multiplicar(n2 , peso2))
return
total / soma_pesos
media = calcular_media_ponderada (7, 8, 3, 2)
print(media)
CAPÍTULO 4. FUNÇÕES: ESCREVA UMA VEZ, USE PARA SEMPRE
62
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 64

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
Nesse exemplo, a função calcular_media_ponderada utiliza duas funções menores,
somar e multiplicar, para calcular a média ponderada de dois números. Primeiro, ela
chama a função somar para calcular a soma dos pesos. Depois, utiliza a função multiplicar
para calcular o produto de cada número com seu respectivo peso e chama novamente somar
para obter o total. Por fim, divide o total pela soma dos pesos para encontrar a média
ponderada.
Ao dividir o problema em partes menores e reutilizar funções existentes, o código se torna
mais legível e fácil de manter.
Outro Exemplo: Formatação de Texto
As funções que chamam outras funções não se limitam apenas a operações matemáticas.
Vamos ver como isso pode ser aplicado em um cenário de formatação de texto. Suponha que
você queira criar um título para um relatório formatado de maneira padronizada, com o texto
em maiúsculas e cercado por asteriscos.
def
adicionar_asteriscos (texto):
return f"*** {texto} ***"
def
converter_maiusculas (texto):
return
texto.upper ()
def
formatar_titulo (texto):
texto_maiusculas = converter_maiusculas (texto)
return
adicionar_asteriscos ( texto_maiusculas )
titulo_formatado = formatar_titulo (’relatório de vendas ’)
print( titulo_formatado )
Aqui, a função formatar_titulo utiliza duas outras funções: converter_maiusculas
e adicionar_asteriscos. Primeiro, ela chama converter_maiusculas para transformar
o texto em letras maiúsculas, e depois chama adicionar_asteriscos para adicionar os
asteriscos ao redor do texto formatado. O resultado é um título que segue uma formatação
consistente em todo o relatório.
Construindo Funções Modulares
A capacidade de uma função chamar outra função promove a modularidade, um conceito
fundamental na programação. Ao dividir um problema complexo em funções menores, você
CAPÍTULO 4. FUNÇÕES: ESCREVA UMA VEZ, USE PARA SEMPRE
63
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 65

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
cria blocos reutilizáveis que podem ser combinados de maneiras diferentes para resolver
múltiplos problemas. Essa abordagem não só melhora a legibilidade e manutenção do código,
mas também facilita o teste de cada parte individualmente, ajudando a identificar erros e bugs
com mais eficiência.
Por exemplo, imagine um sistema que precisa calcular impostos sobre produtos, aplicar
descontos e calcular o valor total de uma compra. Cada uma dessas tarefas pode ser uma
função separada:
def
calcular_imposto (preco , taxa):
return
preco * taxa
def
aplicar_desconto (preco , desconto):
return
preco - (preco * desconto)
def
calcular_valor_total (preco , taxa_imposto , desconto):
preco_com_imposto = somar(preco , calcular_imposto (preco ,
taxa_imposto))
preco_final = aplicar_desconto (preco_com_imposto , desconto)
return
preco_final
valor_total = calcular_valor_total (100 , 0.1, 0.05)
print(valor_total)
Nesse caso, a função calcular_valor_total chama as funções calcular_imposto e
aplicar_desconto para determinar o valor final de um produto após a aplicação de impostos
e descontos. Essa organização modular permite fácil adaptação e manutenção do código,
pois cada função faz uma única tarefa específica e pode ser testada de forma independente.
4.4
RECURSÃO: FUNÇÃO QUE CHAMA ELA MESMA
Recursão é uma técnica de programação em que uma função chama a si mesma para
resolver um problema. Esse conceito é especialmente útil quando um problema pode ser
decomposto em subproblemas menores de natureza similar. Em outras palavras, a recursão é
uma forma de dividir e conquistar, simplificando um problema grande em versões menores e
mais manejáveis do mesmo problema.
Uma função recursiva possui duas partes principais: a condição de parada e a chamada
recursiva. A condição de parada é fundamental para evitar que a função chame a si mesma
indefinidamente, o que resultaria em um erro de estouro de pilha (stack overflow). A chamada
CAPÍTULO 4. FUNÇÕES: ESCREVA UMA VEZ, USE PARA SEMPRE
64
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 66

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
recursiva é o ponto em que a função se chama com um argumento modificado, geralmente
uma versão reduzida ou simplificada do problema original.
Vamos explorar alguns exemplos para entender como a recursão funciona na prática.
Exemplo Clássico: Fatorial de um Número
O cálculo do fatorial de um número é um exemplo clássico de recursão. O fatorial de um
número n (representado por n!) é o produto de todos os números inteiros de 1 até n. Por
exemplo, 5! é igual a 5 x 4 x 3 x 2 x 1 = 120.
Podemos definir o fatorial recursivamente:
def
fatorial(n):
if n == 0 or n == 1:
# Condição de parada
return 1
else:
return n * fatorial(n - 1)
# Chamada
recursiva
resultado = fatorial (5)
print(resultado)
Nesse exemplo, a função fatorial chama a si mesma com um valor de n decrementado
em 1 até atingir a condição de parada, onde n é igual a 0 ou 1. Quando a condição de
parada é atendida, a função começa a retornar os valores multiplicados de forma acumulativa,
resolvendo o problema original.
Exemplo de Recursão: Sequência de Fibonacci
A sequência de Fibonacci é outra aplicação comum da recursão. Nessa sequência, cada
número é a soma dos dois números anteriores. A sequência começa com 0 e 1, e o próximo
número será 0 + 1 = 1, o seguinte será 1 + 1 = 2, depois 1 + 2 = 3, e assim por diante.
A fórmula para o n-ésimo termo da sequência de Fibonacci é:
  F( n ) =  F( n -1)  + F(n-2) 
com os valores iniciais de F(0) = 0 e F(1) = 1.
CAPÍTULO 4. FUNÇÕES: ESCREVA UMA VEZ, USE PARA SEMPRE
65
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 67

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
Vamos implementar essa fórmula usando uma função recursiva:
def
fibonacci(n):
if n == 0:
# Condição de parada
return 0
elif n == 1:
# Condição de parada
return 1
else:
return
fibonacci(n - 1) + fibonacci(n - 2)
# Chamadas
recursivas
resultado = fibonacci (6)
print(resultado)
Nesta função, fibonacci chama a si mesma duas vezes, com os argumentos n-1 e n-2,
até que a condição de parada seja atendida (n igual a 0 ou 1). Quando isso ocorre, os valores
são retornados e somados conforme necessário para calcular o n-ésimo termo da sequência.
Vantagens e Cuidados com a Recursão
A recursão pode tornar o código mais elegante e fácil de entender, especialmente quando
o problema tem uma natureza inerentemente recursiva, como no caso de árvores, grafos, ou
algoritmos de pesquisa e ordenação. No entanto, o uso excessivo ou inadequado de recursão
pode levar a alguns problemas, como:
• Estouro de Pilha (Stack Overflow): Cada chamada recursiva adiciona um novo quadro
à pilha de chamadas. Se não houver uma condição de parada adequada ou se o
problema for muito grande, isso pode esgotar a memória disponível.
• Desempenho Subótimo: Em alguns casos, como na implementação ingênua da
sequência de Fibonacci, a recursão pode ser ineficiente devido à repetição de cálculos.
O uso de técnicas como memoização ou algoritmos iterativos pode ser necessário para
otimizar o desempenho.
Alternativas à Recursão
Embora a recursão seja uma ferramenta poderosa, nem sempre é a melhor escolha.
Em muitos casos, uma abordagem iterativa, usando for ou while, pode ser mais eficiente e
fácil de entender, especialmente para problemas simples ou quando o desempenho é uma
preocupação crítica.
CAPÍTULO 4. FUNÇÕES: ESCREVA UMA VEZ, USE PARA SEMPRE
66
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 68

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
Por exemplo, o cálculo do fatorial pode ser feito de maneira iterativa:
def
fatorial_iterativo (n):
resultado = 1
for i in range(2, n + 1):
resultado *= i
return
resultado
resultado = fatorial_iterativo (5)
print(resultado)
Aqui, o mesmo cálculo é realizado sem recursão, usando um laço for. Dependendo do
contexto e do problema, essa abordagem pode ser mais eficiente.
A recursão é uma técnica poderosa que permite simplificar problemas complexos ao
dividi-los em subproblemas menores e mais manejáveis. Quando usada corretamente, pode
resultar em soluções elegantes e fáceis de entender. No entanto, é importante estar atento
a possíveis armadilhas, como o estouro de pilha e o desempenho subótimo, e considerar
alternativas iterativas quando apropriado. Com o entendimento das vantagens e limitações da
recursão, você estará mais preparado para decidir quando e como usá-la efetivamente em
seus programas.
4.5
POR QUE FUNÇÕES SÃO IMPORTANTES PARA IA
Funções são componentes essenciais para a criação de sistemas de Inteligência Artificial
(IA). Elas permitem organizar processos complexos em partes menores e mais gerenciáveis,
facilitando a reutilização de código em diferentes etapas de um projeto de IA. No contexto
da IA, as funções são empregadas em praticamente todas as fases do ciclo de construção,
desde a preparação dos dados até o treinamento e a aplicação do modelo treinado. Essa
abordagem modular permite que cientistas de dados e especialistas em IA criem fluxos de
trabalho eficientes, onde cada função desempenha um papel específico no tratamento de
dados ou na execução de algoritmos de aprendizado.
No início de um projeto de IA, as funções são frequentemente utilizadas para o pré-
processamento de dados. Nesta fase, é comum lidar com grandes volumes de dados que
precisam ser limpos, normalizados ou transformados para que possam ser utilizados por
modelos de aprendizado de máquina. Funções específicas são criadas para automatizar
tarefas como remoção de valores ausentes, normalização de variáveis numéricas e codificação
de variáveis categóricas. Por exemplo, uma função pode ser projetada para eliminar outliers
CAPÍTULO 4. FUNÇÕES: ESCREVA UMA VEZ, USE PARA SEMPRE
67
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 69

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
de um conjunto de dados, garantindo que os dados estejam em um formato adequado para a
etapa seguinte.
Durante o treinamento do modelo, funções desempenham um papel crucial na definição de
algoritmos de aprendizado. Elas são utilizadas para implementar funções de custo, otimização
e ajuste de parâmetros, além de métricas de avaliação, como acurácia, precisão e recall.
Essas funções garantem que o modelo aprenda corretamente a partir dos dados, ajustando-se
iterativamente para minimizar o erro. Funções de ativação, como ReLU ou Sigmoid, são
usadas dentro das camadas de redes neurais para introduzir não-linearidades, possibilitando
que o modelo identifique padrões complexos.
Funções também são fundamentais no ajuste de hiperparâmetros durante a construção de
modelos de IA. Hiperparâmetros são variáveis que controlam o comportamento dos algoritmos
de aprendizado, como a taxa de aprendizado e o número de camadas em uma rede neural.
Para otimizar esses hiperparâmetros, funções de busca automatizada, como busca em grade
(grid search) ou busca aleatória (random search), são implementadas para testar diferentes
combinações e encontrar a configuração que produz o melhor desempenho do modelo.
Após o treinamento, funções desempenham um papel importante na avaliação e validação
do modelo. Elas são usadas para calcular métricas de desempenho em conjuntos de dados
de validação ou teste, permitindo que os especialistas determinem se o modelo se generaliza
bem para novos dados. Por exemplo, funções específicas são criadas para gerar matrizes de
confusão, curvas ROC, ou cálculos de F1-score, ajudando a entender o comportamento do
modelo em diferentes situações.
Durante a fase de implementação da IA, funções são essenciais para integrar o modelo
treinado em aplicações reais. Elas são utilizadas para carregar o modelo, receber entradas
de usuários, processá-las de maneira adequada e gerar saídas interpretáveis. Por exemplo,
em um sistema de recomendação, funções são responsáveis por gerar sugestões com base
nos dados de comportamento do usuário, enquanto em um sistema de detecção de fraude,
funções analisam transações em tempo real para identificar atividades suspeitas.
Por fim, as funções também são utilizadas para monitorar e melhorar o desempenho do
modelo após a implementação. Funções específicas podem ser criadas para registrar métricas
de desempenho ao longo do tempo, identificar possíveis degradações e ajustar o modelo
conforme necessário. Em ambientes de produção, funções são usadas para aplicar técnicas
de aprendizado contínuo, onde o modelo é ajustado periodicamente com novos dados. Assim,
funções são indispensáveis em todas as etapas do ciclo de vida de uma solução de IA, desde
a preparação dos dados até a sua aplicação e manutenção no mundo real.
CAPÍTULO 4. FUNÇÕES: ESCREVA UMA VEZ, USE PARA SEMPRE
68
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 70

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
4.6
VAMOS PRATICAR
1. Crie uma função chamada quadrado() que receba um número como parâmetro e
retorne o quadrado desse número. Em seguida, escreva um programa que utilize essa
função para calcular e exibir o quadrado de um número fornecido pelo usuário.
2. Implemente uma função chamada maior_numero() que receba três números como
parâmetros e retorne o maior deles. Teste a função com diferentes entradas e exiba o
maior número.
3. Desenvolva uma função chamada contar_vogais() que receba uma string como
parâmetro e retorne o número de vogais presentes nessa string. Utilize essa função
para contar o número de vogais em uma frase fornecida pelo usuário.
4. Escreva uma função chamada calcular_potencia() que receba dois parâmetros,
base e expoente, e retorne o resultado da base elevada ao expoente. Utilize a função
para calcular a potência de números fornecidos pelo usuário.
5. Crie uma função chamada converter_segundos() que receba um valor em segundos
e o converta para o formato horas, minutos e segundos. A função deve retornar uma
string formatada como "X horas, Y minutos e Z segundos". Teste a função com diferentes
entradas.
6. Implemente uma função chamada calcular_hipotenusa() que receba os comprimen-
tos dos dois catetos de um triângulo retângulo e retorne o comprimento da hipotenusa,
usando o teorema de Pitágoras. Utilize a função para calcular a hipotenusa com valores
fornecidos pelo usuário.
7. Desenvolva uma função chamada eh_primo() que receba um número inteiro e retorne
True se o número for primo e False caso contrário. Utilize a função para verificar se um
número fornecido pelo usuário é primo.
8. Escreva uma função chamada inverter_lista() que receba uma lista de números
como parâmetro e retorne uma nova lista com os elementos na ordem inversa. Teste a
função com diferentes listas fornecidas pelo usuário.
9. Crie uma função chamada fibonacci_ate() que receba um número inteiro n e retorne
uma lista contendo todos os números da sequência de Fibonacci até n. Utilize a função
para gerar a sequência de Fibonacci até um valor fornecido pelo usuário.
10. Implemente uma função chamada gerar_senha() que receba um comprimento n e
retorne uma senha aleatória contendo letras maiúsculas, minúsculas, dígitos e caracteres
especiais. Utilize a função para gerar senhas de diferentes comprimentos fornecidos
pelo usuário.
CAPÍTULO 4. FUNÇÕES: ESCREVA UMA VEZ, USE PARA SEMPRE
69
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 71

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
CAPÍTULO 5
Estruturas de Dados Compostas
Estruturas de dados compostas são como caixas de ferramentas que ajudam a organizar,
armazenar e manipular dados de forma eficiente, como um mestre artesão organizando
seus materiais preciosos. Imagine um mágico que, com um estalar de dedos, transforma
números em padrões significativos, cria relações complexas entre elementos ou manipula
dados como se fossem peças de um quebra-cabeça. Essas estruturas — vetores, matrizes,
listas compreendidas, dicionários, tuplas e conjuntos — são os truques secretos por trás dessa
mágica.
Compreender listas é como aprender a coreografia perfeita: permite que você manipule
dados com a graça e a agilidade de um dançarino experiente. Dicionários, por outro lado,
são como mapas do tesouro — mostram exatamente onde estão as riquezas escondidas,
ligando chaves aos seus respectivos valores. Matrizes e vetores? Eles são os blocos de
montar para a matemática avançada, usados em tudo, desde o processamento de imagens
até o aprendizado de máquina. Já os conjuntos são os guardiões da exclusividade, garantindo
que cada item da sua coleção seja verdadeiramente único, como um convite VIP para uma
festa exclusiva. E as tuplas? Elas são como cofres de aço, protegendo dados valiosos que
não podem ser alterados, mantendo tudo em segurança.
Ao longo deste capítulo, você vai aprender a dominar essas estruturas de dados como
um verdadeiro mestre, aplicando-as em contextos diversos, desde a análise de dados até a
construção de aplicações complexas de inteligência artificial. Prepare-se para transformar sua
maneira de ver e manipular dados, como um mago que descobre novos feitiços para simplificar
o caos e encontrar a ordem no mundo digital!
CAPÍTULO 5. ESTRUTURAS DE DADOS COMPOSTAS
70
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 72

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
5.1
VETORES: A ARTE DE COLOCAR TUDO NO LUGAR!
Imagine que você está organizando uma coleção de livros em sua prateleira. Cada livro
representa um dado que você precisa armazenar e acessar rapidamente. Os vetores em
Python funcionam de maneira semelhante a essa prateleira, permitindo que você armazene e
manipule uma coleção de dados de forma eficiente. Assim como você pode pegar um livro
específico rapidamente, os vetores permitem que você acesse elementos individuais de forma
simples e intuitiva. Nessa seção, exploraremos a importância dos vetores e como utilizá-los
em Python para resolver problemas práticos.
Vamos considerar um cenário em que você deseja analisar as notas de uma turma em
uma disciplina. Você precisa armazenar as notas dos alunos e calcular a média da turma,
além de identificar quais alunos tiveram desempenho acima da média. Esse problema permite
aplicar conceitos fundamentais de vetores, como armazenar, percorrer e manipular dados. Ao
final dessa seção, você terá as habilidades necessárias para trabalhar com vetores em Python
e resolver problemas semelhantes.
Os vetores, ou listas em Python, são uma estrutura de dados fundamental que permite
armazenar sequências de elementos. Algumas características importantes dos vetores incluem
o armazenamento de múltiplos valores, permitindo que um vetor contenha diferentes tipos de
dados, como números, strings e até mesmo outros vetores. Além disso, você pode acessar
cada elemento do vetor utilizando seu índice, que começa do zero. Isso torna os vetores uma
ferramenta poderosa para manipulação de dados.
Para começar nossa jornada com vetores, vamos ver como criar um vetor. Suponha que
queremos armazenar as notas de cinco alunos. Assim, podemos criar um vetor chamado
‘notas‘ contendo as notas. O código para isso é o seguinte:
notas = [7.5, 8.0, 6.5, 9.0, 5.5]
print(notas)
Nesse exemplo, os elementos são armazenados em uma lista, permitindo que realizemos
operações e manipulações com esses dados posteriormente. É uma estrutura de dados
simples que proporciona fácil acesso e modificação. Agora que temos nosso vetor, é hora de
explorá-lo mais a fundo. Para isso, percorreremos o vetor e imprimiremos cada nota. Isso é
útil para realizar ações em cada elemento, como imprimir ou calcular a média. O código que
usamos para percorrer o vetor é:
CAPÍTULO 5. ESTRUTURAS DE DADOS COMPOSTAS
71
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 73

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
for nota in notas:
print(nota)
Percorrer um vetor é uma habilidade essencial, pois muitos problemas envolvem a iteração
sobre listas de dados. É como recorrer à sua prateleira de livros para encontrar aquele que
você gostaria de ler. Agora, se você quiser adicionar uma nova nota ao nosso vetor, podemos
usar o método ‘append()‘. Veja como fazer isso:
notas.append (10.0)
print(notas)
Esse código demonstra a flexibilidade dos vetores, permitindo que você expanda sua lista
de dados conforme necessário. Após a operação, imprimimos o vetor para verificar a nova
nota adicionada. Mas, claro, nem todas as notas precisam ficar eternamente em nossa lista,
certo? Se quisermos remover uma nota, podemos usar o método ‘remove()‘, assim:
notas.remove (5.5)
print(notas)
Aqui, eliminamos a nota 5.5 do vetor. Essa capacidade de remover elementos é impor-
tante na manipulação de dados, pois nos permite manter apenas informações relevantes e
atualizadas. Agora, vamos ver como ordenar nosso vetor. Ordenar dados é uma tarefa comum
e é útil para análises estatísticas. O código para ordenar as notas em ordem crescente é:
notas.sort ()
print(notas)
Ao usar o método ‘sort()‘, conseguimos visualizar as notas de maneira organizada,
facilitando a análise. Agora que temos as notas organizadas, que tal calcular a média dessas
notas? Isso pode ser feito utilizando a função ‘sum()‘ para somar todos os elementos do vetor
e ‘len()‘ para contar quantos elementos existem. O código fica assim:
media = sum(notas) / len(notas)
print("Media:", media)
CAPÍTULO 5. ESTRUTURAS DE DADOS COMPOSTAS
72
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 74

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
Nesse exemplo, calculamos a média das notas armazenadas no vetor. Isso demonstra
como os vetores podem ser usados para realizar cálculos em conjuntos de dados. Agora, se
quisermos encontrar quais notas estão acima da média, podemos usar uma list comprehension.
Veja como fazer isso:
notas_acima_media = [nota for nota in notas if nota > media]
print("Notas
acima da media:", notas_acima_media )
Esse código cria um novo vetor que contém apenas as notas acima da média calculada.
Isso mostra como os vetores podem ser filtrados para extrair informações específicas. Mas e
se quisermos inverter a ordem dos elementos? O método ‘reverse()‘ pode ser útil. O código é
o seguinte:
notas.reverse ()
print(notas)
Essa operação pode ser útil quando queremos visualizar dados em ordem inversa. Por
outro lado, se quisermos contar quantas vezes uma nota específica aparece em nosso vetor,
podemos usar o método ‘count()‘. Veja como:
contagem = notas.count (8.0)
print("Quantidade de notas
8.0:", contagem)
Aqui, contamos quantas vezes a nota 8.0 aparece no vetor. Essa funcionalidade é útil
para análises de dados, ajudando a identificar a frequência de certos valores. Por fim, se
decidirmos que não precisamos mais de nossas notas, podemos limpar o vetor completamente
com o método ‘clear()‘, assim:
notas.clear ()
print(notas)
Esse código remove todos os elementos do vetor, deixando-o vazio. Isso pode ser útil
quando precisamos reiniciar nossas operações ou quando os dados não são mais necessários.
CAPÍTULO 5. ESTRUTURAS DE DADOS COMPOSTAS
73
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 75

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
5.2
MATRIZES: TABELAS NERDS E SEUS SUPERPODERES!
Para entender o conceito de matrizes em Python, imagine uma sala de aula cheia de
alunos organizados em filas e colunas. Cada aluno representa um elemento de uma matriz, e
a disposição dos alunos em filas e colunas representa a estrutura da matriz. Assim como você
pode facilmente encontrar um aluno específico observando sua posição, em programação, as
matrizes permitem que você armazene e acesse dados de forma organizada e eficiente. Esse
conceito é fundamental em diversas áreas, como matemática, ciência de dados e aprendizado
de máquina, onde a estrutura dos dados desempenha um papel crítico. As matrizes são
estruturas de dados bidimensionais que facilitam a manipulação de conjuntos de dados. Elas
são particularmente úteis quando você precisa representar tabelas, gráficos ou qualquer outro
tipo de dados que se organize em linhas e colunas. Nesse guia, exploraremos a importância
das matrizes e como utilizá-las em Python por meio de exemplos práticos.
Imagine que você é um professor que precisa calcular as notas de seus alunos em
diferentes disciplinas. Para facilitar a visualização das notas, você decide usar uma matriz,
onde cada linha representa um aluno e cada coluna representa uma disciplina. O objetivo é
calcular a média das notas de cada aluno e identificar aqueles que estão com desempenho
abaixo da média. Utilizando matrizes, você pode organizar e acessar essas informações de
forma eficiente, tornando o processo de análise de dados mais simples e intuitivo.
Uma matriz é uma estrutura de dados que pode ser representada como uma lista de
listas em Python. Cada elemento da matriz pode ser acessado utilizando índices, sendo o
primeiro índice a linha e o segundo a coluna. É fundamental entender como percorrer uma
matriz utilizando loops aninhados para manipular ou acessar os dados. Adicionar ou modificar
elementos, calcular médias e somas são operações comuns que podem ser realizadas com
matrizes.
Vamos começar com o primeiro exemplo: criaremos uma matriz simples.
# Criando
uma matriz 2x3
matriz = [[1, 2, 3],
[4, 5, 6]]
print(matriz)
Nesse exemplo, criamos uma matriz 2x3, onde temos 2 linhas e 3 colunas. A matriz é
representada como uma lista de listas, onde cada sublista é uma linha da matriz. O uso de
matrizes permite organizar dados de forma tabular, facilitando a manipulação e a leitura dos
mesmos. É como ter uma tabela de Excel, mas em forma de código. E quem não ama um
CAPÍTULO 5. ESTRUTURAS DE DADOS COMPOSTAS
74
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 76

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
bom Excel, não é mesmo?
Agora, vamos acessar elementos da matriz.
# Acessando o elemento da primeira
linha e segunda
coluna
elemento = matriz [0][1]
print(elemento)
Aqui, acessamos o elemento na primeira linha e segunda coluna da matriz, que é o número 2.
O acesso a elementos específicos é feito por meio da notação de índices, onde ‘matriz[i][j]‘
refere-se ao elemento localizado na linha ‘i‘ e coluna ‘j‘. Esse conceito é crucial para manipu-
lações mais avançadas. Pense nisso como procurar por um livro na estante: se você sabe
exatamente onde ele está, fica muito mais fácil encontrá-lo!
Agora, percorreremos uma matriz com loops.
for linha in matriz:
for
elemento in linha:
print(elemento , end=’ ’)
print ()
Nesse exemplo, utilizamos loops aninhados para percorrer todos os elementos da matriz. O
loop externo percorre cada linha, enquanto o loop interno percorre cada elemento dentro da
linha. Essa estrutura é fundamental para operações que exigem a leitura ou a modificação de
todos os dados contidos na matriz. É como um diário em que você precisa ler cada entrada
para entender a história toda.
Agora, modificaremos elementos da matriz.
# Modificando o elemento na segunda
linha e terceira
coluna
matriz [1][2] = 10
print(matriz)
Aqui, alteramos o elemento na segunda linha e terceira coluna da matriz para o valor
10. A capacidade de modificar elementos é uma das razões pelas quais as matrizes são tão
úteis, permitindo que você atualize dados de forma dinâmica conforme necessário. É como
trocar um ingrediente em uma receita, às vezes um pouco de criatividade pode fazer toda a
diferença!
Agora, calcularemos a soma de todos os elementos.
CAPÍTULO 5. ESTRUTURAS DE DADOS COMPOSTAS
75
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 77

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
soma = 0
for linha in matriz:
for
elemento in linha:
soma += elemento
print(soma)
Nesse exemplo, calculamos a soma de todos os elementos da matriz. Usamos loops aninhados
para somar cada elemento e armazenar o resultado na variável ‘soma‘. Essa operação
demonstra como as matrizes podem ser utilizadas para realizar cálculos em conjuntos de
dados. Se você já se perdeu nas contas ao dividir a conta do jantar, sabe como é importante
manter o controle!
Agora, calcularemos a média das notas de cada aluno.
notas = [[7, 8, 9],
[6, 5, 7],
[9, 10, 10]]
for linha in notas:
media = sum(linha) / len(linha)
print("Media:", media)
Nesse exemplo, temos uma matriz de notas e calculamos a média de cada aluno. Usamos a
função ‘sum()‘ e o comprimento da linha para obter a média e exibi-la. Esse exemplo é prático
para entender como as matrizes podem ser aplicadas em situações do dia a dia, como no
cálculo de notas escolares. E quem não quer uma média boa, não é mesmo?
Agora, encontraremos o maior elemento de uma matriz.
maior = matriz [0][0]
for linha in matriz:
for
elemento in linha:
if elemento > maior:
maior = elemento
print("Maior
elemento:", maior)
Aqui, buscamos o maior elemento em uma matriz. Inicializamos uma variável ‘maior‘ com o
primeiro elemento e, em seguida, percorremos toda a matriz, atualizando ‘maior‘ sempre que
encontramos um elemento maior. Esse é um exemplo comum de como as matrizes podem ser
utilizadas para análise de dados. E quem não gosta de ser o melhor em alguma coisa?
CAPÍTULO 5. ESTRUTURAS DE DADOS COMPOSTAS
76
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 78

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
Agora, transpor uma matriz.
transposta = [[ matriz[j][i] for j in range(len(matriz))] for i in
range(len(matriz [0]))]
print(transposta)
Nesse exemplo, criamos a matriz transposta, onde linhas se tornam colunas e vice-versa.
Utilizamos uma lista por compreensão para gerar a nova matriz, mostrando como as matrizes
podem ser manipuladas de diferentes maneiras. A transposição é uma operação comum em
matemática e ciência de dados. Pense nisso como mudar a disposição dos móveis na sala, às
vezes uma nova configuração pode trazer uma nova perspectiva!
Agora, concatenaremos duas matrizes.
matriz1 = [[1, 2], [3, 4]]
matriz2 = [[5, 6], [7, 8]]
concatenada = matriz1 + matriz2
print(concatenada)
Aqui, concatenamos duas matrizes utilizando o operador ‘+‘. Isso resulta em uma nova matriz
que contém todas as linhas de ambas as matrizes originais. A concatenação é uma operação
útil quando se trabalha com conjuntos de dados separados que precisam ser combinados. É
como juntar duas turmas para fazer um grande projeto, a união faz a força!
Por fim, verificaremos se uma matriz é quadrada.
matriz = [[1, 2, 3],
[4, 5, 6]]
if len(matriz) == len(matriz [0]):
print("A matriz e quadrada.")
else:
print("A matriz nao e quadrada.")
Nesse exemplo, verificamos se a matriz é quadrada, ou seja, se o número de linhas é igual
ao número de colunas. Essa verificação é importante em muitas operações matemáticas
e algoritmos que requerem matrizes quadradas, como determinantes e inversas. É como
verificar se você tem o número certo de lados para uma pizza: quem quer uma pizza triangular?
As matrizes são uma ferramenta poderosa e versátil em Python, que permite a organização
e manipulação de dados de maneira eficiente. Com os exemplos apresentados, você agora
CAPÍTULO 5. ESTRUTURAS DE DADOS COMPOSTAS
77
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 79

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
tem uma base sólida para entender como trabalhar com matrizes e aplicar esses conceitos em
diversas situações práticas. Com o domínio desse conhecimento, você estará mais preparado
para avançar em temas mais complexos na programação e na análise de dados.
5.3
LISTAS: O SUPERPODER DA SIMPLIFICAÇÃO
Imagine que você tem uma caixa de lápis de cor. Cada lápis é de uma cor diferente, e
você quer criar uma nova caixa que contenha apenas os lápis que você realmente usa. Em
vez de pegar cada lápis individualmente e decidir se vai mantê-lo ou não, você poderia ter
uma maneira mais eficiente de fazer isso, certo? É aqui que entra a compreensão de listas em
Python. Assim como você pode selecionar rapidamente os lápis que deseja, a compreensão
de listas permite que você crie novas listas a partir de listas existentes de uma maneira rápida
e concisa. Nesse capítulo, exploraremos como a compreensão de listas pode simplificar seu
código e torná-lo mais legível.
Vamos imaginar que você desenvolve uma aplicação para gerenciar uma lista de produtos
em uma loja. Você tem uma lista de preços de produtos, mas precisa filtrar aqueles que estão
acima de um determinado valor para exibir apenas os produtos caros. Em vez de usar um
loop tradicional que pode ser mais extenso e difícil de ler, a compreensão de listas oferece
uma solução elegante e eficiente. Nesse exercício, usaremos a compreensão de listas para
criar uma nova lista que contenha apenas os produtos que atendem a esse critério.
A compreensão de listas é uma maneira compacta de criar listas em Python. Os principais
pontos a serem abordados incluem a sintaxe básica, que consiste em um loop for, opcional-
mente seguido de uma condição if, e a filtragem, que permite selecionar elementos de uma
lista existente com base em uma condição específica. Além disso, a compreensão de listas
pode ser aplicada em funções para transformar dados de maneira eficiente. Agora que já
temos um contexto, que tal explorarmos alguns exemplos práticos?
No primeiro exemplo, criaremos uma lista de quadrados. O código Python que utilizamos
é o seguinte:
quadrados = [x**2 for x in range (10)]
print(quadrados)
Nesse exemplo, usamos a compreensão de listas para criar uma lista de quadrados dos
números de 0 a 9. A sintaxe [x**2 for x in range(10)] itera sobre cada número gerado
pela função range(10), elevando-o ao quadrado e armazenando o resultado na nova lista
quadrados. O resultado impresso será uma lista contendo os números [0, 1, 4, 9, 16, 25, 36,
CAPÍTULO 5. ESTRUTURAS DE DADOS COMPOSTAS
78
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 80

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
49, 64, 81], que são os quadrados de 0 a 9. É como se você transformasse cada lápis em um
lápis de cor quadrado — que não é muito prático, mas definitivamente interessante!
No segundo exemplo, filtraremos números pares. O código é o seguinte:
pares = [x for x in range (20) if x % 2 == 0]
print(pares)
Nesse código, criamos uma lista de números pares de 0 a 19. A expressão if x % 2 ==
0 filtra os números, garantindo que apenas aqueles que são divisíveis por 2 sejam incluídos na
nova lista pares. O resultado impresso será [0, 2, 4, 6, 8, 10, 12, 14, 16, 18], demonstrando
como a compreensão de listas pode ser usada para obter rapidamente um subconjunto de
elementos com base em uma condição. Imagine que você separa os lápis só pelas cores que
realmente gosta — os pares!
Agora, veremos a conversão de temperaturas. O código é o seguinte:
temperaturas_celsius = [0, 20, 37.5 , 100]
temperaturas_fahrenheit = [(c * 9/5) + 32 for c in
temperaturas_celsius ]
print( temperaturas_fahrenheit )
Aqui, temos uma lista de temperaturas em Celsius e convertemos cada uma delas para
Fahrenheit usando a compreensão de listas. A fórmula (c * 9/5) + 32 é aplicada a cada ele-
mento da lista temperaturas_celsius, resultando em uma nova lista temperaturas_fahrenheit
que contém [32.0, 68.0, 99.5, 212.0]. Esse exemplo ilustra como a compreensão de listas
pode ser utilizada para aplicar uma transformação em todos os elementos de uma lista. É
como se você convertesse a temperatura de cada lápis em uma versão mais quente dele!
Nesse exemplo, extrairemos letras de uma string:
frase = "Python é incrível!"
letras = [letra for letra in frase if letra.isalpha ()]
print(letras)
Nesse exemplo, extraímos apenas as letras da string frase. A condição if letra.isalpha()
garante que apenas os caracteres alfabéticos sejam incluídos na nova lista letras. O re-
sultado será [’P’, ’y’, ’t’, ’h’, ’o’, ’n’, ’e’, ’i’, ’n’, ’c’, ’r’, ’i’, ’v’, ’e’, ’l’], mostrando como podemos
filtrar caracteres em uma string. Pense nisso como se você tentasse descobrir quais lápis são
realmente úteis, deixando de lado aqueles que não têm cor!
CAPÍTULO 5. ESTRUTURAS DE DADOS COMPOSTAS
79
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 81

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
Agora listaremos os comprimentos de palavras:
palavras = ["Python", "é", "poderoso"]
comprimentos = [len(palavra) for
palavra in palavras]
print(comprimentos)
Nesse exemplo, criamos uma lista que contém o comprimento de cada palavra na
lista palavras. A função len(palavra) é aplicada a cada elemento, resultando na lista
comprimentos que contém [6, 1, 8]. Esse exemplo ilustra como a compreensão de listas pode
ser usada para realizar operações agregadas em elementos da lista. É como contar quantos
lápis você tem de cada tipo — só que aqui, contamos letras!
mais um exemplo, multiplicaremos elementos por um fator:
numeros = [1, 2, 3, 4, 5]
dobros = [n * 2 for n in numeros]
print(dobros)
Nesse caso, multiplicamos cada elemento da lista numeros por 2. A nova lista dobros
conterá [2, 4, 6, 8, 10]. Esse exemplo demonstra como a compreensão de listas pode ser
utilizada para aplicar uma operação matemática simples em todos os elementos de uma lista.
É como pegar cada lápis e duplicá-lo — agora você tem o dobro de cor!
Agora criaremos uma lista de tuplas:
nombres = ["Alice", "Bob", "Charlie"]
tuplas = [(nome , len(nome)) for nome in nombres]
print(tuplas)
Nesse exemplo, criamos uma lista de tuplas, onde cada tupla contém um nome e seu
respectivo comprimento. O resultado será [(’Alice’, 5), (’Bob’, 3), (’Charlie’, 7)], ilustrando
como podemos usar a compreensão de listas para criar estruturas de dados mais complexas.
Imagine que cada lápis tem um nome e você quer saber quantas letras tem cada um — e aqui
está a resposta!
CAPÍTULO 5. ESTRUTURAS DE DADOS COMPOSTAS
80
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 82

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
Neste exemplo, filtraremos palavras com mais de três letras:
frase = "Python é incrível e divertido"
palavras_longas = [palavra
for
palavra in frase.split () if len(
palavra) > 3]
print( palavras_longas )
Aqui, filtramos palavras na string frase que têm mais de três letras. A função frase.split()
divide a string em palavras, e a condição if len(palavra) > 3 garante que apenas as pala-
vras que atendem a esse critério sejam incluídas na nova lista palavras_longas. O resultado
será [’Python’, ’incrível’, ’divertido’], mostrando a potência da compreensão de listas na mani-
pulação de strings. Pense nisso como se você separasse lápis que têm mais de três cores
diferentes!
Vamos agora criar uma lista de números ímpares:
numeros = range (20)
impares = [n for n in numeros if n % 2 != 0]
print(impares)
Nesse exemplo, utilizamos a compreensão de listas para criar uma lista de números
ímpares a partir de um intervalo de 0 a 19. A condição if n % 2 != 0 filtra os números,
resultando na lista impares que contém [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]. Esse exemplo reforça
a ideia de que a compreensão de listas pode ser uma solução elegante para filtrar elementos.
É como escolher lápis que têm cores únicas e não se repetem!
Para concluir, vamos gerar uma lista de cubos:
cubos = [x**3 for x in range (5)]
print(cubos)
Aqui, criamos uma lista de cubos dos números de 0 a 4. A expressão x**3 é aplicada
a cada número gerado pela função range(5), resultando na lista cubos que contém [0, 1,
8, 27, 64]. Esse exemplo mostra como a compreensão de listas pode ser utilizada para
calcular potências de forma concisa. É como se você transformasse cada lápis em uma versão
tridimensional dele!
A compreensão de listas é uma ferramenta poderosa em Python que permite criar e
manipular listas de maneira eficiente e legível. Com os exemplos apresentados, você agora
CAPÍTULO 5. ESTRUTURAS DE DADOS COMPOSTAS
81
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 83

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
tem uma base sólida para aplicar esse conceito em seus próprios projetos. A prática levará
à familiaridade, e logo você se sentirá confortável em utilizar a compreensão de listas para
simplificar seu código.
5.4
DICIONÁRIOS EM PYTHON: O PAI DOS INTELIGENTES
Imagine que você organiza uma festa e precisa criar uma lista de convidados. Em vez
de anotar cada nome em uma folha de papel, você decide usar um sistema mais inteligente:
um dicionário. Em Python, dicionários são como caixas de armazenamento que permitem
associar uma chave a um valor. Isso significa que você pode usar nomes como chaves e
detalhes do convidado, como RSVP ou preferências alimentares, como valores. Essa metáfora
simples ajuda a visualizar como os dicionários funcionam, tornando o conceito mais acessível
e fácil de entender. Os dicionários são uma das estruturas de dados mais úteis em Python,
permitindo que você armazene e acesse dados de forma eficiente. Nessa seção, exploraremos
como os dicionários funcionam, como podem ser usados em diferentes situações e como você
pode manipulá-los para resolver problemas do mundo real. Vamos começar!
Vamos supor que você é um desenvolvedor encarregado de criar um sistema simples
para gerenciar informações sobre livros em uma biblioteca. Cada livro tem um título, um autor
e um número de cópias disponíveis. Como você organizaria essas informações de maneira
eficaz? Aqui, os dicionários se tornam essenciais, pois permitem que você armazene cada
livro como uma entrada que associa títulos a seus respectivos autores e cópias disponíveis. O
desafio é criar um dicionário que armazene essas informações e permita que você as acesse
e manipule facilmente.
Os dicionários em Python são coleções não ordenadas de pares chave-valor. Cada chave
deve ser única e imutável, enquanto os valores podem ser de qualquer tipo de dado. A sintaxe
para criar um dicionário é simples: você utiliza chaves {} e separa as chaves dos valores com
dois pontos :. Por exemplo, um dicionário que armazena informações sobre um livro pode ser
criado assim: livro = {"titulo":
"1984", "autor":
"George Orwell", "copias":
3}. É importante entender como adicionar, acessar e remover itens de um dicionário, pois isso
será fundamental em nossos exemplos práticos. Vamos explorar cinco exemplos práticos que
mostram como usar dicionários em diferentes cenários.
No primeiro exemplo, criaremos um dicionário que armazena informações sobre um livro
específico. Aqui, criamos um dicionário chamado livro que armazena o título, o autor e o
número de cópias disponíveis. O uso de um dicionário aqui permite que você armazene e
acesse facilmente as informações relacionadas ao livro em uma única estrutura de dados. O
código para isso é:
CAPÍTULO 5. ESTRUTURAS DE DADOS COMPOSTAS
82
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 84

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
livro = {
"titulo": "O Senhor dos Aneis",
"autor": "J.R.R. Tolkien",
"copias": 5
}
print(livro)
No segundo exemplo, mostramos como acessar os valores do dicionário livro usando as
chaves. Você pode ver como é fácil obter informações específicas, como o título e o autor do
livro, apenas referenciando as chaves do dicionário. Essa capacidade de acessar dados com
base em chaves torna os dicionários uma ferramenta poderosa para armazenar e recuperar
informações. O código para esse exemplo é:
print("Titulo:", livro["titulo"])
print("Autor:", livro["autor"])
No terceiro exemplo, adicionaremos uma nova chave chamada "ano_publicacao"ao dicio-
nário livro. Os dicionários permitem que você adicione novos pares chave-valor de maneira
dinâmica, o que é extremamente útil para expandir as informações que você armazena sem
precisar criar uma nova estrutura de dados. Agora, o dicionário contém informações adicionais
sobre o ano de publicação do livro. O código para isso é:
livro["ano_publicacao"] = 1954
print(livro)
Agora, no quarto exemplo, atualizaremos o valor da chave "copias"no dicionário livro.
Essa operação ilustra como os dicionários permitem a modificação de valores existentes de
forma simples e direta. Com essa funcionalidade, você pode facilmente manter as informações
atualizadas, o que é crucial em um cenário onde os dados podem mudar, como no caso de
empréstimos de livros. O código é o seguinte:
livro["copias"] = 3
print(livro)
Por fim, no quinto exemplo, removeremos a chave "copias"do dicionário livro. A ca-
pacidade de excluir pares chave-valor é uma das características que torna os dicionários
tão flexíveis. Isso é útil quando você não precisa mais de certas informações ou quando
CAPÍTULO 5. ESTRUTURAS DE DADOS COMPOSTAS
83
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 85

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
deseja manter seu dicionário organizado e livre de dados desnecessários. O código para essa
operação é:
del livro["copias"]
print(livro)
Os dicionários são uma parte fundamental da programação em Python, oferecendo uma
maneira eficiente de armazenar e manipular dados. Ao longo dessa seção, exploramos o con-
ceito de dicionários, discutimos um problema prático e fornecemos exemplos que demonstram
como usá-los em cenários do mundo real. Com esses conhecimentos, você estará mais bem
preparado para aplicar dicionários em suas próprias programações e resolver problemas de
forma eficaz.
5.5
TUPLAS: A LISTA CASCA-GROSSA DO PYTHON!
Imagine que você organiza uma festa e precisa criar uma lista de convidados. Em vez de
escrever cada nome em um papel separado, você decide agrupar todos os nomes em uma
única lista. Essa lista representa um grupo fixo de convidados que não mudará, o que se
assemelha ao conceito de tuplas em Python. Assim como os convidados da sua festa, uma
tupla é um conjunto de itens que permanecem inalterados após sua criação. Nesse contexto,
vamos explorar o que são tuplas, como elas funcionam e quando usá-las.
As tuplas são estruturas de dados que permitem armazenar múltiplos itens em uma única
variável. Diferente das listas, as tuplas são imutáveis, o que significa que, uma vez criadas,
seus elementos não podem ser alterados. Essa característica torna as tuplas ideais para
armazenar dados que não devem ser modificados, garantindo a integridade das informações.
Vamos nos aprofundar nesse conceito e ver como podemos utilizá-lo em Python.
Suponha que você desenvolve um aplicativo de gerenciamento de contatos. Você precisa
armazenar informações sobre cada contato, como nome, telefone e e-mail. Usar uma lista
poderia levar a alterações acidentais nas informações, como a remoção de um contato.
Portanto, uma tupla pode ser uma solução mais adequada, pois você garante que os dados
permaneçam constantes durante a execução do programa. Nesse exemplo, o desafio será
implementar uma maneira de armazenar e acessar informações de contatos usando tuplas,
garantindo que os dados sejam tratados de forma segura e eficiente. O leitor será incentivado
a aplicar o conceito de tuplas em um cenário realista e prático.
Uma tupla é uma coleção de elementos que podem ser de tipos diversos, como números,
strings ou outras tuplas. Elas são definidas usando parênteses e permitem a armazenagem
CAPÍTULO 5. ESTRUTURAS DE DADOS COMPOSTAS
84
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 86

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
de múltiplos itens em uma única variável. Uma vez que uma tupla é criada, seus elementos
não podem ser alterados, o que a diferencia das listas. Essa imutabilidade torna as tuplas
seguras para armazenar dados que não devem ser alterados. Os elementos de uma tupla
podem ser acessados utilizando índices, assim como em listas. Isso permite que os usuá-
rios recuperem informações específicas de maneira eficiente. Algumas operações básicas
podem ser realizadas em tuplas, como concatenação e repetição. Essas operações são úteis
para manipular conjuntos de dados sem alterar sua estrutura original. As tuplas são ideais
para armazenar dados que são constantes e não devem ser alterados; exemplos incluem
coordenadas geográficas, dados de configuração e registros de eventos.
Vamos agora explorar alguns exemplos práticos. No primeiro exemplo, criaremos uma
tupla simples que armazena informações de contato. Nesse exemplo, criamos uma tupla
chamada ‘contatos‘ que armazena o nome, telefone e e-mail de um contato. Ao imprimir a
tupla, podemos ver todos os dados de uma só vez. Esse exemplo mostra como é fácil agrupar
informações relacionadas em uma única estrutura.
contatos = (’Joao ’, ’1234 -5678 ’, ’joao@email.com’)
print(contatos)
Aqui, acessamos cada elemento da tupla ‘contatos‘ usando índices. O primeiro elemento
(nome) pode ser acessado com ‘contatos[0]‘, o segundo (telefone) com ‘contatos[1]‘, e assim
por diante. Essa abordagem permite que o usuário obtenha informações específicas de
maneira organizada. Imagine que você tenta encontrar rapidamente o número de telefone de
um amigo; isso se torna muito mais fácil com tuplas!
print(’Nome:’, contatos [0])
print(’Telefone:’, contatos [1])
print(’E-mail:’, contatos [2])
Nesse exemplo, trabalharemos com tuplas aninhadas. Aqui, criamos uma tupla que
contém outras tuplas. Cada tupla interna representa um contato, permitindo organizar grupos
de dados de maneira hierárquica. Isso é útil para armazenar múltiplos contatos sem confundir
as informações. Pense na tupla como uma gaveta de contatos: cada contato é como uma
pastinha dentro dessa gaveta.
contatos = ((’Joao ’, ’1234 -5678 ’), (’Maria ’, ’8765 -4321 ’))
print(contatos)
CAPÍTULO 5. ESTRUTURAS DE DADOS COMPOSTAS
85
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 87

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
Agora, vamos ilustrar a imutabilidade das tuplas em ação. Aqui, tentamos alterar o primeiro
elemento da tupla ‘contatos‘. Como as tuplas são imutáveis, essa operação resulta em um
erro. Isso ilustra a importância da imutabilidade e como ela ajuda a proteger dados críticos.
Imagine que você tenta mudar o nome de um convidado da sua festa sem querer; seria um
desastre, certo? É isso que a imutabilidade evita!
# contatos [0] = ’Carlos ’
# Isso
causará um erro , pois a tupla é imutá
vel
Por fim, vamos ver como contar elementos em uma tupla. Nesse exemplo, usamos o
método ‘count()‘ para contar quantas vezes o número 1 aparece na tupla ‘numeros‘. Essa
funcionalidade demonstra como podemos realizar operações úteis em tuplas sem a neces-
sidade de modificá-las. É como contar quantas vezes seu amigo menciona pizza na festa –
você pode fazer isso sem precisar mudar a quantidade de pizzas que você trouxe!
numeros = (1, 2, 3, 1, 2, 1)
print(’O numero 1 aparece:’, numeros.count (1), ’vezes.’)
5.6
CONJUNTOS: QUEM É QUEM NO BAILE DOS DADOS!
Mais uma vez, você organiza uma festa e precisa fazer uma lista de convidados. Você
não quer que ninguém seja convidado mais de uma vez e deseja garantir que todos os
convidados sejam únicos e especiais. Aqui, os conjuntos em Python se tornam extremamente
úteis. Assim como na lista de convidados, onde cada nome deve ser único, os conjuntos em
Python garantem que não haja duplicatas. Eles são uma estrutura de dados essencial que
permite armazenar valores únicos e realizar operações matemáticas, como união, interseção
e diferença. Os conjuntos são particularmente importantes ao lidar com grandes volumes de
dados onde a exclusividade é fundamental. Eles oferecem uma maneira eficiente de verificar a
presença de um item, além de permitir operações que seriam mais complexas em listas. Essa
seção explora a importância dos conjuntos em Python e apresenta cinco exemplos práticos
para demonstrar como utilizá-los em situações do dia a dia.
Suponha que você desenvolve uma aplicação que precisa gerenciar um conjunto de
usuários em um sistema. Cada usuário deve ser único, e você precisa de uma forma de
verificar rapidamente se um usuário já existe no sistema. Utilizando conjuntos em Python, você
CAPÍTULO 5. ESTRUTURAS DE DADOS COMPOSTAS
86
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 88

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
pode implementar essa funcionalidade de forma eficiente. O desafio é criar uma aplicação
simples que permita adicionar novos usuários, verificar se um usuário já está cadastrado
e listar todos os usuários sem duplicatas. Com isso em mente, o leitor será incentivado a
aplicar o conceito de conjuntos para gerenciar dados de maneira eficaz, explorando o uso
de operações de conjunto para manipulação e verificação de dados únicos. O objetivo é
transformar uma necessidade prática em uma aplicação simples, onde os conjuntos se tornam
a chave para resolver o problema de gestão de usuários.
Um conjunto em Python é uma coleção não ordenada de itens únicos. Diferente das listas,
onde a ordem dos elementos e as duplicatas são permitidas, os conjuntos garantem que
cada elemento seja único e não tenha uma posição específica. Os conjuntos suportam várias
operações úteis, como união, interseção e diferença. Essas operações são fundamentais em
muitos problemas de programação e análise de dados, tornando os conjuntos uma ferramenta
poderosa. A verificação da existência de um item em um conjunto é, em média, muito mais
rápida do que em uma lista. Isso se deve à maneira como os conjuntos são implementados,
utilizando tabelas hash. Os conjuntos podem ser criados usando chaves {} ou a função set().
É importante entender como adicionar, remover e realizar operações entre conjuntos para
aproveitar todo o seu potencial.
No primeiro exemplo, criaremos um conjunto de frutas. Aqui, formamos um grupo de
delícias que não deve ter repetidos.
# Criando um conjunto de frutas
frutas = {’maca ’, ’banana ’, ’laranja ’}
print(frutas)
Nesse exemplo, criamos um conjunto chamado frutas que contém três tipos de frutas.
Ao imprimir o conjunto, notamos que não há duplicatas, e a ordem dos elementos não é
garantida. Isso demonstra como os conjuntos são úteis para armazenar dados exclusivos de
forma simples e direta. Pense neles como a lista de convidados perfeita, onde cada pessoa
tem seu lugar garantido, mas a ordem dos assentos é um mistério.
No segundo exemplo, adicionamos uma nova fruta ao nosso conjunto. Vamos ver como é
fácil fazer novos amigos na festa das frutas!
CAPÍTULO 5. ESTRUTURAS DE DADOS COMPOSTAS
87
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 89

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
# Adicionando
uma nova
fruta ao conjunto
frutas.add(’uva’)
print(frutas)
Aqui, utilizamos o método add() para incluir ’uva’ no conjunto frutas. Esse exemplo
ilustra como podemos expandir um conjunto facilmente, mantendo a propriedade de unicidade.
Se tentássemos adicionar ’maca’ novamente, o conjunto permaneceria inalterado, evidenci-
ando a natureza única dos conjuntos. É como se a uva tivesse chegado à festa e todos os
outros convidados dissessem: ’Seja bem-vinda, mas não traga duplicatas!’.
O próximo passo é remover uma fruta do conjunto, algo que pode ser necessário quando
a banana decide ir embora da festa.
# Removendo
uma fruta do conjunto
frutas.remove(’banana ’)
print(frutas)
Nesse exemplo, removemos ’banana’ do conjunto utilizando o método remove(). Isso
mostra como os conjuntos permitem a manipulação de seus elementos, proporcionando
flexibilidade na gestão de dados. É importante notar que, se tentarmos remover um elemento
que não está presente, um erro será gerado, o que deve ser considerado ao implementar a
lógica do programa. A banana pode ter ido, mas não se preocupe, ainda temos muitas frutas
para alegrar a festa.
Agora, vamos verificar a existência de um elemento no conjunto. Essa operação é como
perguntar a um segurança se alguém está na lista de convidados.
# Verificando se uma fruta está no conjunto
if ’maca ’ in frutas:
print(’A maca esta no conjunto!’)
else:
print(’A maca nao esta no conjunto.’)
Nesse código, utilizamos a palavra-chave in para verificar se ’maca’ está presente no
conjunto frutas. Essa operação é realizada de forma muito eficiente devido à implementação
interna dos conjuntos, permitindo que os desenvolvedores verifiquem a presença de elementos
rapidamente. Isso é extremamente útil em situações onde a performance é crítica. É como ter
um assistente que diz imediatamente se seu amigo especial está na festa.
CAPÍTULO 5. ESTRUTURAS DE DADOS COMPOSTAS
88
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 90

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
Por fim, vejamos como realizar operações com conjuntos, como a união, que é como
juntar duas festas em uma!
# Criando
outro
conjunto de frutas
frutas_tropicais = {’abacaxi ’, ’coco ’, ’banana ’}
# União de conjuntos
todas_frutas = frutas.union( frutas_tropicais )
print(todas_frutas)
Nesse exemplo, demonstramos a operação de união entre dois conjuntos. Criamos um
conjunto frutas_tropicais e, em seguida, utilizamos o método union() para combinar os
dois conjuntos em um novo conjunto todas_frutas. Isso ilustra como os conjuntos podem ser
usados em operações matemáticas, facilitando a manipulação e análise de dados de forma
eficaz. É como se decidíssemos convidar todas as frutas tropicais para a festa, formando um
grande banquete de sabores!
5.7
POR QUE IA AMA ESTRUTURAS COMPOSTAS?
As estruturas de dados compostas, como vetores, matrizes, listas compreendidas, dicio-
nários, tuplas e conjuntos, desempenham um papel fundamental na inteligência artificial (IA)
por permitirem o gerenciamento eficiente de grandes volumes de dados complexos. Elas são
cruciais em várias etapas do desenvolvimento de soluções de IA, como o pré-processamento
de dados, o treinamento de modelos e a aplicação prática da IA. Por exemplo, vetores e
matrizes são utilizados para representar dados numéricos e textuais, enquanto dicionários e
conjuntos ajudam a estruturar informações mais complexas, como as relações entre palavras
em um texto ou as conexões em redes de conhecimento.
No pré-processamento de dados, vetores e listas compreendidas são amplamente em-
pregados para transformar dados em formatos que possam ser utilizados pelos algoritmos
de aprendizado de máquina. Vetores permitem a representação de dados de entrada, como
imagens ou sequências de texto, de forma que operações de normalização, tokenização ou
remoção de stopwords possam ser facilmente realizadas. A compreensão de listas permite
realizar filtragens e transformações de dados de maneira concisa, facilitando o trabalho de
preparar grandes volumes de informações para treinamento. Além disso, vetores são frequen-
temente usados para converter palavras em representações numéricas, como embeddings,
que capturam relações semânticas entre as palavras.
Durante o treinamento de modelos, como redes Transformers — a base de modelos
CAPÍTULO 5. ESTRUTURAS DE DADOS COMPOSTAS
89
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 91

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
avançados como o ChatGPT — as matrizes são fundamentais. Os Transformers utilizam uma
arquitetura que depende fortemente de operações matriciais para calcular a atenção entre
palavras ou tokens em uma sequência de texto. Essas operações envolvem a multiplicação de
matrizes que representam embeddings de palavras por matrizes de pesos que são aprendidos
durante o treinamento. As estruturas de dados compostas tornam possíveis essas manipula-
ções eficientes, permitindo que o modelo aprenda padrões complexos em dados sequenciais,
como dependências de longo alcance entre palavras em uma frase.
Dicionários desempenham um papel importante em IA, especialmente em aplicações de
processamento de linguagem natural (NLP). Nos modelos baseados em Transformers, os
dicionários são usados para mapear tokens, ou seja, palavras ou partes de palavras, para
seus respectivos embeddings, que são vetores de alta dimensão que representam suas carac-
terísticas semânticas. Essa representação é essencial para que os modelos, como o ChatGPT,
compreendam o contexto e o significado das frases. Além disso, dicionários permitem o
armazenamento eficiente de informações auxiliares, como mapeamentos entre palavras e
suas traduções em diferentes idiomas ou relações entre conceitos em uma ontologia.
No uso prático da IA, as tuplas e conjuntos ajudam a garantir a integridade e eficiência dos
dados. As tuplas, por serem imutáveis, são usadas para armazenar dados que não devem ser
alterados, como pares de entradas e saídas esperadas em testes de modelos. Já os conjuntos
são úteis para operações que exigem a exclusividade de elementos, como a remoção de
duplicatas em grandes coleções de dados. Isso é particularmente relevante em aplicações
de IA que processam fluxos contínuos de dados ou grandes conjuntos de dados textuais,
garantindo que o processamento permaneça eficiente.
Modelos avançados como o ChatGPT e outras arquiteturas de Transformers dependem
fortemente de operações com estruturas de dados compostas para lidar com a complexidade
dos dados de linguagem natural. Vetores e matrizes são usados para calcular a atenção
auto-regressiva que permite ao modelo focar em diferentes partes de uma sequência de texto
ao gerar respostas, enquanto dicionários armazenam informações cruciais sobre tokens e
suas posições. Esses modelos utilizam essas estruturas de dados para aprender represen-
tações contextuais profundas, permitindo que respondam a consultas com um alto grau de
compreensão e precisão.
Em resumo, as estruturas de dados compostas são essenciais para o funcionamento
eficaz dos modelos de IA. Elas permitem o armazenamento, acesso e manipulação efici-
entes de dados complexos durante todas as etapas do desenvolvimento de IA, desde o
pré-processamento até a aplicação prática. Nos modelos de ponta como Transformers e
ChatGPT, essas estruturas possibilitam a realização de cálculos de atenção sofisticados
e a representação rica de dados linguísticos, tornando-as fundamentais para a criação de
soluções de IA inteligentes e responsivas.
CAPÍTULO 5. ESTRUTURAS DE DADOS COMPOSTAS
90
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 92

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
5.8
VAMOS EXERCITAR
1. Manipulação de Vetores: Crie um vetor em Python com 10 números aleatórios entre
1 e 100. Imprima o vetor, a soma de seus elementos e os elementos ordenados em
ordem crescente.
2. Operações com Matrizes: Crie uma matriz 3x3 em Python com números inteiros de
1 a 9. Escreva um código para calcular a soma de todos os elementos da matriz e a
matriz transposta.
3. Filtragem usando Listas Compreendidas: Dada uma lista de números de 1 a 20, crie
uma nova lista que contenha apenas os números pares usando list comprehension. Em
seguida, filtre também os números que são múltiplos de 3.
4. Manipulação de Dicionários: Crie um dicionário que armazene o nome de 5 produtos
como chave e seu preço como valor. Escreva um código para aumentar o preço de
todos os produtos em 10% e imprima o dicionário atualizado.
5. Uso de Tuplas: Crie uma tupla que contenha os dias da semana. Escreva um código
que percorra a tupla e imprima cada dia, garantindo que a tupla permaneça inalterada.
6. Trabalhando com Conjuntos: Crie dois conjuntos de números inteiros: um contendo
múltiplos de 2 até 20 e outro contendo múltiplos de 3 até 30. Escreva um código que
imprima a união, a interseção e a diferença entre os dois conjuntos.
7. Construção de Matrizes a partir de Dados: Dado um arquivo CSV contendo notas de
alunos em diferentes disciplinas, leia os dados e armazene-os em uma matriz. Escreva
um código para calcular a média das notas de cada aluno.
8. Aplicando Dicionários em IA: Suponha que você está criando um chatbot simples. Use
um dicionário para armazenar pares de perguntas e respostas. Escreva um código que,
ao receber uma pergunta do usuário, retorna a resposta correspondente, ou informa que
a pergunta não está cadastrada.
9. Manipulação Avançada com Tuplas: Dada uma lista de tuplas, onde cada tupla contém
o nome de uma cidade e sua temperatura atual, escreva um código que encontre a
cidade com a temperatura mais alta e a mais baixa.
10. Análise de Dados com Conjuntos: Dada uma lista de nomes de pessoas que parti-
ciparam de dois eventos diferentes, use conjuntos para encontrar quem participou de
ambos, apenas do primeiro, e apenas do segundo evento.
CAPÍTULO 5. ESTRUTURAS DE DADOS COMPOSTAS
91
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 93

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
CAPÍTULO 6
Python com Baterias Inclusas
Imagine-se em um grande workshop de tecnologia, onde diferentes ferramentas e técnicas
são exibidas para resolver uma ampla gama de problemas, desde análise de dados até criação
de modelos avançados de aprendizado de máquina. Nesse cenário, o Python é como aquele
canivete suíço essencial, repleto de funcionalidades e sempre pronto para ser utilizado. Com
sua sintaxe clara e uma enorme comunidade de desenvolvedores, Python se estabeleceu
como a linguagem preferida para quem deseja se aventurar pelo vasto universo da Inteligência
Artificial (IA) e da ciência de dados.
Este capítulo explora como diversas bibliotecas em Python tornam o desenvolvimento
de soluções de IA não apenas possível, mas também eficiente e prazeroso. Vamos passear
pelo uso do NumPy, que, com sua velocidade supersônica, realiza operações matemáticas
em grandes volumes de dados, e do Pandas, que transforma dados brutos em informações
valiosas como um mestre do Kung Fu que transforma movimentos desajeitados em uma dança
perfeita. Falaremos também sobre como manipular PDFs e imagens com pypdf e Pillow,
ferramentas que facilitam o dia a dia de qualquer cientista de dados.
Em seguida, nos aprofundaremos na manipulação de vídeos com OpenCV, uma biblioteca
poderosa que abre possibilidades para cineastas amadores e desenvolvedores de sistemas
de vigilância. Se seu objetivo é criar bots que automatizam tarefas repetitivas, o PyAutoGUI
será seu aliado, permitindo que você programe seu próprio assistente digital. E para aqueles
momentos em que é necessário extrair texto de imagens, o Pytesseract entra em cena,
transformando imagens de textos manuscritos em dados utilizáveis.
Mas não é só sobre ferramentas e bibliotecas que vamos falar. Este capítulo aborda o
papel fundamental dessas bibliotecas nas diferentes fases de criação de modelos de machine
learning e deep learning. Você verá como cada uma delas contribui para que cientistas de
dados e desenvolvedores possam construir, treinar, otimizar e implementar modelos de IA,
enfrentando desafios reais com eficiência e precisão. A escolha certa de bibliotecas pode
CAPÍTULO 6. PYTHON COM BATERIAS INCLUSAS
92
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 94

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
acelerar o desenvolvimento e abrir caminho para soluções inovadoras.
Além disso, exploraremos outras bibliotecas que fazem do Python a linguagem ideal para
IA. Desde o suporte para visão computacional até o processamento de linguagem natural,
o ecossistema Python oferece um conjunto completo de ferramentas para abordar os mais
diversos problemas. Esse “batteries included” da linguagem permite que projetos sejam
executados de ponta a ponta, sem a necessidade de alternar entre diferentes ambientes de
desenvolvimento.
Seja você um iniciante na área ou um profissional experiente, este capítulo tem algo para
oferecer. Vamos juntos explorar como essas bibliotecas podem ser aplicadas de forma prática
e descobrir como elas se encaixam nas diferentes fases de um projeto de IA. Ao final, você
estará mais preparado para tirar proveito dessas poderosas ferramentas e colocar suas ideias
em prática de maneira mais rápida, eficiente e, por que não, divertida.
6.1
ABASTECENDO SEU KIT DE FERRAMENTAS!
O pip é o gerenciador de pacotes padrão do Python, responsável por instalar, atualizar
e gerenciar bibliotecas e pacotes adicionais de terceiros que você possa precisar em seus
projetos. O nome pip é um acrônimo recursivo que significa ’Pip Installs Packages’. O termo é
uma brincadeira comum na comunidade de software livre, onde o nome se refere a si mesmo
(outro exemplo famoso é o GNU, que significa ’GNU’s Not Unix’). Portanto, o pip não é um
acrônimo tradicional, mas sim um exemplo de acrônimo recursivo.
Para instalar pacotes usando o pip por meio do terminal do Windows, primeiro é necessá-
rio garantir que o Python esteja corretamente instalado em seu sistema e que o pip esteja
disponível no PATH. Abra o Prompt de Comando (pressione ‘Win + R‘, digite ‘cmd‘ e pressione
Enter), e execute o comando pip –version para verificar a instalação. Caso o pip esteja
disponível, você pode instalar pacotes com o comando pip install nome_do_pacote. Caso
não esteja, pode ser necessário adicionar o caminho do Python manualmente ao PATH do
sistema ou reinstalar o Python com a opção de adicionar o pip ao PATH marcada.
CAPÍTULO 6. PYTHON COM BATERIAS INCLUSAS
93
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 95

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
Para instalar pacotes com o pip por meio do terminal do Visual Studio Code (VSCode), o
processo é bastante semelhante. No VSCode, abra o terminal integrado usando o atalho Ctrl
+ ` (acento grave) ou vá até o menu superior, clique em Terminal e selecione New Terminal.
Certifique-se de que o terminal esteja utilizando o interpretador Python correto (verifique o
ambiente virtual, se estiver usando um). Em seguida, digite pip install nome_do_pacote
e pressione Enter para instalar o pacote desejado. O VSCode fornece a conveniência de
gerenciar pacotes diretamente no terminal integrado, sem a necessidade de sair do editor, o
que torna o desenvolvimento mais eficiente e produtivo.
Exemplo simples de instalação
Vamos instalar a biblioteca numpy, que discutiremos mais na próxima seção. Para instalar,
execute no terminal do Windows ou do VSCode o seguinte comando:
pip
install
numpy
CAPÍTULO 6. PYTHON COM BATERIAS INCLUSAS
94
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 96

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
Ao executar o comando pip install numpy, você verá mensagens indicando que o pip
está baixando e instalando os pacotes necessários. Essa etapa é fundamental para garantir
que a biblioteca esteja disponível para seu código.
Após a instalação, o código para importá-la é simples. Nesse momento, você pode
começar a usar funções da biblioteca, embora não abordemos isso em detalhes ainda.
O importante aqui é entender que a importação é o primeiro passo para fazer uso das
funcionalidades que a biblioteca oferece:
import
numpy as np
# Cria um array
NumPy com
elementos de 1 a 5
array = np.array ([1, 2, 3, 4, 5])
# Multiplica
cada
elemento do array por 2
array_dobrado = array * 2
print(array_dobrado)
Nesse exemplo, importamos a biblioteca NumPy e atribuímos a ela o apelido ’np’, que é
uma convenção comum para simplificar a chamada da biblioteca. Este código cria um array
NumPy contendo os números de 1 a 5, multiplica cada elemento por 2 e, em seguida, imprime
o resultado:
  [ 2,  4 , 6, 8, 10] 
Lembre-se de que as bibliotecas são como superpoderes para os programadores; elas
tornam suas vidas mais fáceis e seus códigos mais poderosos. Portanto, não hesite em
usá-las e prepare-se para explorar o fascinante mundo do NumPy na próxima seção!
6.2
NUMPY: VELOCIDADE SUPERSÔNICA
Você está em um avião a jato, cruzando os céus em velocidades supersônicas. O que
faz com que esse voo seja tão rápido e eficiente? Assim como os aviões utilizam tecnologia
avançada para otimizar seu desempenho, o Python, uma das linguagens de programação mais
populares, também possui suas ferramentas poderosas. Uma dessas ferramentas é o NumPy,
uma biblioteca que permite realizar operações numéricas de forma extremamente eficiente,
especialmente quando lidamos com grandes conjuntos de dados e arrays multidimensionais.
O NumPy se destaca por sua velocidade, pois suas operações são realizadas na linguagem
CAPÍTULO 6. PYTHON COM BATERIAS INCLUSAS
95
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 97

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
C em baixo nível, o que permite que sejam processadas muito mais rapidamente do que
se fossem feitas em Python puro. Essa eficiência torna o NumPy a escolha preferida na
comunidade Python para ciência de dados, aprendizado de máquina e outras áreas que
exigem cálculos complexos.
Vamos imaginar que você é um cientista de dados que precisa analisar dados de veloci-
dade de diferentes aviões a jato. Você possui um conjunto de dados que inclui informações
sobre a velocidade de vários modelos de aeronaves em diferentes condições. O desafio é
calcular a média, a mediana e a variância das velocidades, além de comparar as velocidades
entre os diferentes modelos. Para isso, utilizaremos o NumPy para realizar essas operações
de forma eficiente e rápida.
Os principais pontos a serem abordados incluem o que é o NumPy, uma introdução à
biblioteca e suas funcionalidades básicas. Os arrays NumPy se diferenciam das listas do
Python por permitir operações matemáticas de forma mais eficiente. Além disso, o NumPy
fornece uma ampla gama de operações que podemos realizar com arrays, e é importante
entender como manipular e acessar dados em arrays multidimensionais. Por que o NumPy é
mais rápido e eficiente do que outras abordagens? A resposta reside em sua implementação
em C e na maneira como ele gerencia a memória.
Não esqueça de instalar o NumPy com pip.
pip
install
numpy
Para ilustrar essas funcionalidades, apresentaremos cinco exemplos de códigos utilizando
vetores e cinco com matrizes.
Primeiro, vamos à criação de um vetor simples:
import
numpy as np
# Criando um vetor de 5 elementos
vetor = np.array ([1, 2, 3, 4, 5])
print(vetor)
Nesse exemplo, criamos um vetor usando a função np.array(), que converte uma lista
Python em um array NumPy, permitindo operações vetoriais eficientes.
CAPÍTULO 6. PYTHON COM BATERIAS INCLUSAS
96
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 98

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
Agora, vamos ver operações básicas com vetores:
vetor1 = np.array ([1, 2, 3])
vetor2 = np.array ([4, 5, 6])
soma = vetor1 + vetor2
print(soma)
Aqui, somamos dois vetores, demonstrando como o NumPy permite operações elementares
de forma simples e direta.
Vamos agora multiplicar um vetor por um escalar:
vetor = np.array ([1, 2, 3])
resultado = vetor * 2
print(resultado)
Este exemplo mostra a multiplicação de todos os elementos de um vetor por um escalar,
resultando em um novo vetor.
Agora, vamos calcular a média de um vetor:
vetor = np.array ([10, 20, 30, 40, 50])
media = np.mean(vetor)
print(media)
Aqui, utilizamos a função np.mean() para calcular a média dos elementos do vetor, uma
operação comum em análise de dados.
Por fim, vamos fazer indexação e fatiamento:
vetor = np.array ([10, 20, 30, 40, 50])
sub_vetor = vetor [1:4]
print(sub_vetor)
Este exemplo ilustra como acessar uma parte específica de um vetor, mostrando a flexibilidade
do NumPy em manipular dados.
CAPÍTULO 6. PYTHON COM BATERIAS INCLUSAS
97
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 99

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
Agora, vamos explorar matrizes. Primeiro, a criação de uma matriz:
matriz = np.array ([[1, 2, 3], [4, 5, 6]])
print(matriz)
Nesse exemplo, criamos uma matriz 2x3, uma estrutura essencial para cálculos em várias
dimensões.
Em seguida, vamos transpor uma matriz:
matriz = np.array ([[1, 2, 3], [4, 5, 6]])
matriz_transposta = matriz.T
print( matriz_transposta )
A transposição de uma matriz é uma operação importante em álgebra linear, e o NumPy
facilita isso com a propriedade .T.
Agora, vamos ver a multiplicação de matrizes:
matriz1 = np.array ([[1, 2], [3, 4]])
matriz2 = np.array ([[5, 6], [7, 8]])
produto = np.dot(matriz1 , matriz2)
print(produto)
Aqui, utilizamos a função np.dot() para multiplicar duas matrizes, um procedimento comum
em ciência de dados e machine learning.
Vamos também calcular a determinante de uma matriz:
matriz = np.array ([[1, 2], [3, 4]])
determinante = np.linalg.det(matriz)
print(determinante)
O cálculo da determinante é crucial em várias áreas da matemática, e o NumPy fornece
funções para facilitar esses cálculos.
CAPÍTULO 6. PYTHON COM BATERIAS INCLUSAS
98
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 100

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
Por último, vamos fazer um reshape de uma matriz:
matriz = np.array ([1, 2, 3, 4, 5, 6])
matriz_reshape = matriz.reshape (2, 3)
print(matriz_reshape)
Nesse exemplo, transformamos um vetor unidimensional em uma matriz 2x3, permitindo uma
nova forma de visualização e manipulação dos dados.
Esses exemplos ilustram como o NumPy permite realizar operações numéricas de forma
eficiente e direta, capacitando os usuários a manipular dados de maneira eficaz e rápida. Com
essas ferramentas, você estará pronto para enfrentar desafios práticos em análise de dados e
muito mais.
6.3
PANDAS, O KUNG FU EM DATA SCIENCE
Tá bom, esse trocadilho foi infame (kkk)! Na verdade, o Pandas é o Shifu (mestre do Kung
Fu) da análise de dados. Assim como um praticante de Kung Fu utiliza técnicas refinadas
para transformar movimentos brutos em uma dança harmoniosa e eficaz, a biblioteca Pandas
transforma dados brutos em insights valiosos. Pandas é uma biblioteca de código aberto para
a linguagem de programação Python, que oferece estruturas de dados flexíveis e ferramentas
de análise de dados. Com Pandas, os cientistas de dados podem manipular, analisar e
visualizar dados de maneira eficiente. A biblioteca se tornou um pilar fundamental na caixa de
ferramentas de qualquer profissional que trabalha com dados.
Considere um cenário em que você é um analista de dados em uma empresa de vendas
online. Você recebe um conjunto de dados que contém informações sobre as vendas de
produtos ao longo do ano. Seu desafio é analisar essas informações para identificar tendências,
como quais produtos vendem melhor e em quais meses as vendas são mais altas. Usando
Pandas, você poderá limpar, transformar e analisar esses dados de maneira rápida e eficiente,
permitindo que a empresa tome decisões informadas sobre estoque e marketing. Instale o
Pandas com o pip.
pip
install
pandas
Pandas introduz duas principais estruturas de dados: Series e DataFrame. A Series é
uma estrutura unidimensional semelhante a um array, enquanto o DataFrame é uma estrutura
CAPÍTULO 6. PYTHON COM BATERIAS INCLUSAS
99
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 101

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
bidimensional, que pode ser vista como uma tabela. É crucial entender como manipular essas
estruturas para realizar operações de análise de dados. Além disso, a biblioteca permite
realizar operações como filtragem, agregação e transformação de dados com facilidade.
Funções como groupby, merge e pivot_table são essenciais para sumarizar e reorganizar
dados. E não podemos esquecer da capacidade de ler dados a partir de diversas fontes, como
arquivos CSV, Excel e bancos de dados SQL, além de gravar resultados, o que torna o Pandas
uma ferramenta poderosa e versátil.
Para começar a trabalhar com dados, você pode usar a função read_csv para carregar
um arquivo CSV contendo informações sobre vendas. O código abaixo ilustra como fazer isso:
import
pandas as pd
# Carregar
dados de um arquivo
CSV
df = pd.read_csv(’vendas.csv’)
print(df.head ())
Nesse exemplo, o arquivo vendas.csv é carregado em um DataFrame chamado df. A
função head() exibe as primeiras cinco linhas do DataFrame, permitindo uma visão inicial dos
dados. Essa operação é fundamental para entender a estrutura dos dados antes de realizar
qualquer análise. Imagine que você está olhando para o sumário de um livro antes de decidir
lê-lo por completo; isso lhe dá uma ideia geral do conteúdo sem precisar ir página por página.
Após carregar os dados, você pode querer analisar apenas as vendas de um determinado
produto. O seguinte código mostra como filtrar o DataFrame:
# Filtrar
vendas do produto ’A’
vendas_produto_a = df[df[’produto ’] == ’A’]
print( vendas_produto_a )
Aqui, filtramos o DataFrame df para incluir apenas as linhas onde a coluna ’produto’ é
igual a ’A’. Essa filtragem é útil para focar em um subconjunto específico dos dados e realizar
análises mais direcionadas. Imagine que você está tentando descobrir qual é o seu prato
favorito em um cardápio imenso; filtrar os dados é como dar uma olhadinha nas opções que
realmente importam para você.
CAPÍTULO 6. PYTHON COM BATERIAS INCLUSAS
100
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 102

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
Para entender melhor as vendas ao longo do tempo, você pode agregar os dados por
mês. O código abaixo utiliza a função groupby para somar as vendas mensais:
# Agregar
vendas por mês
vendas_mensais = df.groupby(’mes’)[’vendas ’].sum()
print(vendas_mensais)
Nesse exemplo, o DataFrame é agrupado pela coluna ’mes’, e a soma das vendas é
calculada para cada mês. Essa operação permite identificar quais meses tiveram o maior
volume de vendas, ajudando na tomada de decisões estratégicas. Pense nisso como um diário
onde você anota seus gastos mensais e, ao final do ano, consegue ver em quais meses você
gastou mais. Assim, fica mais fácil saber quando economizar um pouco!
Às vezes, você pode precisar combinar informações de diferentes fontes. O código abaixo
ilustra como mesclar dois DataFrames:
# Mesclar
dois
DataFrames
df_produtos = pd.read_csv(’produtos.csv’)
df_completo = pd.merge(df , df_produtos , on=’produto_id ’)
print(df_completo)
Ao mesclar os DataFrames df e df_produtos com base na coluna ’produto_id’, você
combina informações sobre vendas e características dos produtos. Essa operação é essencial
para enriquecer a análise com dados de diferentes fontes. Visualize na sua mente um quebra-
cabeça onde cada peça representa um conjunto de dados. Juntá-las é como completar a
imagem final: quanto mais informações você tiver, mais claro será o quadro geral.
Após realizar a análise, você pode querer salvar os resultados em um novo arquivo CSV.
O código abaixo mostra como exportar um DataFrame:
# Exportar
DataFrame
para CSV
vendas_mensais .to_csv(’vendas_mensais .csv’)
Nesse exemplo, o DataFrame vendas_mensais, que contém a soma das vendas por
mês, é exportado para um arquivo CSV. Essa funcionalidade é importante para compartilhar
resultados ou para uso futuro em outras análises. É como guardar suas melhores receitas em
um caderno, para que você possa impressionar seus amigos na próxima festa!
CAPÍTULO 6. PYTHON COM BATERIAS INCLUSAS
101
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 103

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
6.4
PILLOW, TRAVESSEIROS? NÃO, IMAGENS EM PYTHON
A biblioteca Pillow em Python recebeu esse nome como uma espécie de trocadilho ou
brincadeira. Originalmente, ela é um fork da Python Imaging Library (PIL), uma biblioteca
mais antiga para manipulação de imagens em Python.
Quando o desenvolvimento do PIL foi descontinuado, um grupo de desenvolvedores
decidiu continuar o trabalho em uma nova versão da biblioteca. Para manter uma conexão
com o nome original "PIL"(que é a abreviação de Python Imaging Library), eles escolheram o
nome Pillow, que é foneticamente semelhante e cria uma associação humorística com algo
confortável e amigável, como um travesseiro.
Imagine-se em uma galeria de arte, observando uma bela pintura. Agora, imagine que
você possa criar e manipular suas próprias obras de arte digitais usando apenas algumas
linhas de código. A biblioteca Pillow em Python torna isso possível, permitindo que você
trabalhe com imagens de maneira intuitiva e eficiente. Pillow é uma poderosa biblioteca de
manipulação de imagens que oferece uma variedade de funcionalidades, desde a simples
abertura e exibição de imagens até operações complexas como filtragem e transformação.
Por meio de Pillow, você pode se tornar um verdadeiro artista digital, criando aplicações que
envolvem imagens com facilidade.
Considere a necessidade de um projeto onde você deve desenvolver um aplicativo de
edição de imagens simples. O aplicativo deve permitir que os usuários carreguem, editem
e salvem imagens. Para que isso aconteça, você precisará de uma biblioteca que facilite
a manipulação de imagens. Este projeto não apenas o ajudará a entender como a Pillow
funciona, mas também lhe dará uma experiência prática em um cenário que é relevante e
comum no desenvolvimento de software.
A biblioteca Pillow é uma continuação da Python Imaging Library (PIL) e fornece uma
interface simples e amigável para trabalhar com imagens. É fundamental que o leitor com-
preenda os seguintes pontos-chave: como instalar a biblioteca utilizando o pip, como abrir
e exibir imagens, como realizar manipulações básicas como redimensionar, recortar e girar,
como aplicar filtros visuais, e como salvar as imagens editadas em diferentes formatos.
Para começar a usar a biblioteca Pillow, primeiro você precisa instalá-la em seu ambiente
Python.
pip
install
Pillow
Após a instalação, você pode verificar se tudo está funcionando corretamente ao tentar
CAPÍTULO 6. PYTHON COM BATERIAS INCLUSAS
102
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 104

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
importar a biblioteca em um script Python com o seguinte código:
from PIL import
Image
Uma das funcionalidades mais básicas da Pillow é abrir e exibir imagens. Para isso, você
pode usar o seguinte código:
imagem = Image.open(’caminho/para/sua/imagem.jpg’)
imagem.show ()
Nesse exemplo, a função open é utilizada para carregar a imagem do caminho especifi-
cado. Em seguida, a função show exibe a imagem em uma nova janela. Essa é uma ótima
maneira de verificar se a imagem foi carregada corretamente. Visualize na sua mente como
seria abrir uma porta e entrar em uma galeria cheia de imagens, todas esperando para serem
admiradas.
Redimensionar imagens é uma tarefa comum em muitos aplicativos de edição de imagens.
Você pode fazer isso com a Pillow da seguinte maneira:
imagem_redimensionada = imagem.resize ((400 , 300))
imagem_redimensionada .show ()
Nesse exemplo, a função resize é utilizada para alterar as dimensões da imagem para
400 pixels de largura e 300 pixels de altura. Essa funcionalidade é útil quando você precisa
ajustar suas imagens para se adequarem a um layout específico ou para otimizar o tamanho
do arquivo. Pense nos momentos em que você precisa ajustar a largura da sua tela para que
a apresentação não fique cortada.
Cortar uma imagem é outra operação útil que pode ser realizada com Pillow:
corte = imagem.crop ((100 , 100, 400, 400))
corte.show ()
Aqui, a função crop é utilizada para extrair uma parte da imagem, especificando um
retângulo definido pelas coordenadas (esquerda, superior, direita, inferior). Isso é útil para
focar em uma área específica de uma imagem, como um retrato em uma fotografia maior.
CAPÍTULO 6. PYTHON COM BATERIAS INCLUSAS
103
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 105

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
Imagine que você está recortando uma foto para mostrar apenas os amigos que estavam na
festa; isso é exatamente o que estamos fazendo aqui.
Você também pode girar uma imagem em graus usando Pillow:
imagem_girada = imagem.rotate (90)
imagem_girada.show ()
Nesse exemplo, a função rotate é utilizada para girar a imagem 90 graus no sentido
anti-horário. A rotação de imagens pode ser útil, por exemplo, quando você precisa corrigir a
orientação de uma foto tirada de lado. Visualize na sua mente como seria girar um quadro
para que todo mundo possa admirar seu lado mais bonito.
A Pillow permite aplicar filtros às imagens com facilidade:
from PIL import
ImageFilter
imagem_filtro = imagem.filter(ImageFilter.BLUR)
imagem_filtro.show ()
Nesse exemplo, a função filter é utilizada para aplicar um efeito de desfoque à imagem.
Esta função pode ser utilizada para criar efeitos visuais interessantes ou para suavizar uma
imagem antes de aplicar outras edições. Considere que você deseja dar uma aparência de
sonho a uma fotografia, um pouco de desfoque pode fazer maravilhas.
Após editar uma imagem, você pode salvá-la em um novo arquivo:
imagem_filtro.save(’imagem_desfocada .jpg’)
Aqui, a função save é utilizada para salvar a imagem com um novo nome. É importante
escolher o formato correto ao salvar, dependendo de suas necessidades (JPEG, PNG, etc.).
Pense em como você guardaria sua arte favorita em uma moldura; você quer que ela esteja
em um formato que seja durável e bonito.
A Pillow permite que você converta imagens entre diferentes modos de cor:
imagem_gray = imagem.convert(’L’)
imagem_gray.show ()
CAPÍTULO 6. PYTHON COM BATERIAS INCLUSAS
104
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 106

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
Nesse exemplo, a função convert é usada para transformar a imagem original em uma
versão em escala de cinza. Essa funcionalidade é útil para preparar imagens para análise ou
para criar efeitos artísticos. Imagine um filme clássico em preto e branco, que traz um toque
nostálgico e elegante.
Você também pode criar uma nova imagem a partir do zero:
nova_imagem = Image.new(’RGB’, (200 , 200) , color = ’blue ’)
nova_imagem.show ()
Aqui, a função new cria uma nova imagem de 200x200 pixels preenchida com a cor azul.
Essa funcionalidade é útil para gerar gráficos ou para criar imagens de fundo. Visualize na
sua mente como seria ter uma tela em branco, pronta para receber toda a sua criatividade.
A Pillow permite que você desenhe formas ou texto em uma imagem:
from PIL import
ImageDraw
desenhador = ImageDraw.Draw(imagem)
desenhador.rectangle ([50, 50, 150, 150] , fill=’red’)
imagem.show ()
Nesse exemplo, a classe ImageDraw é utilizada para desenhar um retângulo vermelho na
imagem. Essa funcionalidade é útil para adicionar anotações ou destacar áreas importantes
em uma imagem. Suponha que você está criando um mapa e precisa marcar um local especial;
isso é exatamente o que a Pillow permite que você faça.
6.5
PYPDF: VIRANDO NINJA NA MANIPULAÇÃO DE PDFS!
Imagine-se em uma biblioteca repleta de livros, cada um com uma história única, mas
todos eles guardados em um formato que só pode ser lido por máquinas. Os arquivos PDF são
como esses livros: ricos em informações e formatos, mas muitas vezes difíceis de manipular.
No mundo digital, a capacidade de trabalhar com PDFs se tornou essencial, seja para extrair
informações, combinar documentos ou gerar novas versões de arquivos. Nessa seção, vamos
explorar como você pode usar a biblioteca pypdf para manipular PDFs com Python, tornando
a tarefa de trabalhar com documentos muito mais acessível e eficiente.
Considere que você recebeu uma série de relatórios em PDF que precisam ser com-
binados em um único documento para uma apresentação importante. Com o pypdf, você
CAPÍTULO 6. PYTHON COM BATERIAS INCLUSAS
105
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 107

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
poderá unir esses arquivos, garantindo que toda a informação relevante esteja em um só
lugar, facilitando a visualização e apresentação. Este é um cenário comum na vida de muitos
profissionais, onde a manipulação de arquivos PDF pode economizar tempo e esforço. Ao
final dessa seção, você se sentirá confiante para realizar tarefas práticas envolvendo PDFs,
usando o pypdf.
Para entender como manipular PDFs com pypdf, é importante abordar alguns conceitos
fundamentais. O primeiro passo é instalar a biblioteca pypdf. Você pode fazer isso facilmente
por meio do gerenciador de pacotes pip.
pip
install
pypdf
Assim que a instalação estiver concluída, você estará pronto para explorar as muitas
funcionalidades que essa biblioteca oferece. Aprender a abrir arquivos PDF e como acessá-los
programaticamente é crucial, pois isso inclui a compreensão de objetos de leitura e escrita.
Uma das funcionalidades mais úteis do pypdf é a capacidade de extrair texto de um PDF, o
que pode ser necessário para análise de dados. Além disso, combinar múltiplos arquivos PDF
em um só é uma tarefa comum e pode ser realizada com algumas linhas de código. Por fim,
você pode precisar dividir um arquivo PDF em várias partes, o que também é possível com
esta biblioteca.
# Exemplo 1: Extraindo
texto de um PDF
from
pypdf
import
PdfReader
# Abre o arquivo
PDF
reader = PdfReader(’documento.pdf’)
# Itera
sobre
cada página e extrai o texto
for page in reader.pages:
texto = page.extract_text ()
print(texto)
No primeiro exemplo, utilizamos o módulo PdfReader do pypdf para abrir e ler um arquivo
PDF chamado documento.pdf. O código percorre cada página do documento e utiliza o
método extract_text() para capturar o texto presente em cada página. Esse processo é
especialmente útil em situações onde é necessário extrair informações de documentos PDF
para análise ou processamento automatizado.
Ao executar o script, o texto contido em todas as páginas do arquivo PDF será exibido na
tela. Isso economiza um tempo significativo em comparação com a leitura manual, especial-
CAPÍTULO 6. PYTHON COM BATERIAS INCLUSAS
106
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 108

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
mente para arquivos longos, permitindo que grandes volumes de texto sejam processados
rapidamente.
# Exemplo 2: Mesclando vários PDFs em um único
documento
from
pypdf
import
PdfMerger
merger = PdfMerger ()
# Adiciona múltiplos
arquivos
PDF
merger.append(’documento1.pdf’)
merger.append(’documento2.pdf’)
# Escreve o resultado em um novo PDF
with open(’documento_combinado .pdf’, ’wb’) as f:
merger.write(f)
Nesse segundo exemplo, usamos a classe PdfMerger do pypdf para combinar dois arqui-
vos PDF, documento1.pdf e documento2.pdf, em um único arquivo chamado documento_combinado.pdf.
A função append() adiciona cada documento ao objeto merger, e o método write() cria o
novo arquivo combinado.
Esse método é ideal em situações onde é necessário juntar relatórios ou documentos de
forma eficiente. Em vez de utilizar softwares de edição de PDF, essa técnica permite que você
realize a mesclagem programaticamente com poucas linhas de código.
# Exemplo 3: Dividindo um PDF em páginas
individuais
from
pypdf
import
PdfReader , PdfWriter
reader = PdfReader(’documento.pdf’)
# Itera
sobre
cada página para
criar
arquivos
individuais
for i, page in enumerate(reader.pages):
writer = PdfWriter ()
writer.add_page(page)
with open(f’pagina_{i+1}. pdf’, ’wb’) as f:
writer.write(f)
No terceiro exemplo, utilizamos o PdfReader para ler o arquivo PDF original, documento.pdf,
e o PdfWriter para criar novos arquivos PDF para cada página. O código percorre cada
página, adiciona ao objeto writer, e cria um novo arquivo para cada uma, nomeando-o de
acordo com o número da página. Essa abordagem é útil quando é necessário dividir um
CAPÍTULO 6. PYTHON COM BATERIAS INCLUSAS
107
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 109

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
documento extenso em seções menores para análise ou distribuição.
# Exemplo 4: Rotacionando páginas de um PDF
from
pypdf
import
PdfReader , PdfWriter
reader = PdfReader(’documento.pdf’)
writer = PdfWriter ()
# Rotaciona
cada página em 90 graus
for page in reader.pages:
page.rotate (90)
writer.add_page(page)
with open(’documento_rotacionado .pdf’, ’wb’) as f:
writer.write(f)
Nesse quarto exemplo, utilizamos os módulos PdfReader e PdfWriter para rotacionar
todas as páginas de um documento PDF em 90 graus. Essa funcionalidade é especialmente
útil para ajustar a orientação de documentos que não estão na direção desejada. Ao usar o
método rotate() e adicionar a página rotacionada ao writer, o novo arquivo é salvo como
documento_rotacionado.pdf.
Observação: Na biblioteca pypdf, o método rotate() rotaciona a página em graus no
sentido horário. Você também pode usar rotate_counter_clockwise() para rotacionar no
sentido anti-horário.
# Exemplo 5: Adicionando
uma senha a um PDF
from
pypdf
import
PdfReader , PdfWriter
reader = PdfReader(’documento.pdf’)
writer = PdfWriter ()
# Copia
todas as páginas
para o writer
for page in reader.pages:
writer.add_page(page)
# Define uma senha
para o PDF
writer.encrypt(user_password =’minha_senha ’)
with open(’documento_protegido .pdf’, ’wb’) as f:
writer.write(f)
No quinto exemplo, mostramos como adicionar uma senha a um arquivo PDF usando
CAPÍTULO 6. PYTHON COM BATERIAS INCLUSAS
108
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 110

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
pypdf. O código lê todas as páginas do PDF original com o PdfReader, adiciona-as ao
PdfWriter e, em seguida, aplica uma senha utilizando o método encrypt(). O arquivo
resultante, documento_protegido.pdf, estará protegido por senha, garantindo a segurança
dos dados.
6.6
OPENCV: TRANSFORME PYTHON EM DIRETOR DE VÍDEO!
Imagine que você é um cineasta amador, ansioso para capturar e editar seus vídeos com
facilidade. A tecnologia tornou essa tarefa mais acessível, mas você pode se surpreender
com o poder da programação para transformar suas filmagens. Aqui entra o OpenCV, uma
biblioteca poderosa que permite manipular vídeos de forma rápida e eficiente com Python.
Ao longo dessa seção, exploraremos como você pode usar essa ferramenta para elevar suas
habilidades de edição de vídeo a um novo patamar, tornando cada projeto audiovisual mais
dinâmico e envolvente.
Considere a seguinte situação: você gravou um evento especial, mas as filmagens estão
longas e repletas de trechos desnecessários. Você gostaria de cortar partes específicas do
vídeo, adicionar efeitos e até mesmo detectar movimentos interessantes. Por meio do uso
do OpenCV, você será desafiado a criar um script que faça esses ajustes automaticamente,
permitindo que você se concentre em capturar mais momentos especiais, em vez de se perder
no processo de edição.
Para entender como manipular vídeos com Python usando OpenCV, é essencial abordar
alguns pontos-chave. Primeiramente, a instalação e configuração do OpenCV é o primeiro
passo. Você pode fazer isso facilmente por meio do gerenciador de pacotes pip.
pip
install
opencv -python
Após a instalação, você deve importar a biblioteca em seu script Python. Em seguida, a
leitura e exibição de vídeos com o OpenCV é fundamental para qualquer manipulação, pois
permite que você analise e modifique o conteúdo do vídeo. Cada quadro do vídeo pode ser
tratado como uma imagem, possibilitando a aplicação de filtros, a detecção de bordas e até
mesmo o reconhecimento de rostos. A manipulação de quadros é, sem dúvida, o coração da
edição de vídeo, e o OpenCV fornece várias funções para facilitar isso.
CAPÍTULO 6. PYTHON COM BATERIAS INCLUSAS
109
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 111

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
import cv2
# Carregar o vídeo
cap = cv2.VideoCapture(’video.mp4’)
while
True:
ret , frame = cap.read ()
if not ret:
break
cv2.imshow(’Video ’, frame)
if cv2.waitKey (1) & 0xFF == ord(’q’):
break
cap.release ()
cv2. destroyAllWindows ()
Nesse primeiro exemplo, utilizamos o OpenCV para abrir um vídeo e exibi-lo em uma
janela. A função cv2.VideoCapture é utilizada para carregar o vídeo, e um loop permite que
o vídeo seja exibido quadro a quadro. A condição para sair do loop é pressionar a tecla ’q’,
mostrando como o OpenCV pode ser usado para manipular vídeos em tempo real. Imagine
que você está assistindo a um filme e, de repente, decide interromper a exibição. É exatamente
isso que acontece com este código, mas em vez de um filme, você é o diretor!
import cv2
# Captura de vídeo da webcam
cap = cv2.VideoCapture (0)
while
True:
ret , frame = cap.read ()
if not ret:
break
cv2.imshow(’Webcam ’, frame)
if cv2.waitKey (1) & 0xFF == ord(’q’):
break
cap.release ()
cv2. destroyAllWindows ()
No segundo exemplo, mostramos como capturar vídeo diretamente da webcam.
A
abordagem é similar à do primeiro exemplo, mas em vez de um arquivo de vídeo, utilizamos a
CAPÍTULO 6. PYTHON COM BATERIAS INCLUSAS
110
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 112

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
webcam como fonte. Isso é útil para aplicações como videoconferências ou monitoramento.
Pense em como, em vez de assistir a um filme, você pode ser o protagonista de sua própria
produção, capturando momentos em tempo real e transmitindo-os para o mundo!
import cv2
# Captura de vídeo da webcam
cap = cv2.VideoCapture (0)
fourcc = cv2. VideoWriter_fourcc (*’XVID ’)
out = cv2.VideoWriter(’output.avi’, fourcc , 20.0, (640 , 480))
while
True:
ret , frame = cap.read ()
if not ret:
break
out.write(frame)
cv2.imshow(’Webcam ’, frame)
if cv2.waitKey (1) & 0xFF == ord(’q’):
break
cap.release ()
out.release ()
cv2. destroyAllWindows ()
No terceiro exemplo, ampliamos o anterior para incluir a gravação do vídeo capturado pela
webcam. Utilizamos a classe VideoWriter para gravar os quadros em um arquivo, permitindo
que você salve suas sessões de vídeo. Essa funcionalidade é especialmente útil para criar
vídeos tutoriais ou sessões de gravação de eventos. Você já imaginou ser capaz de gravar
suas próprias aventuras cinematográficas como se fosse um Spielberg em ascensão? Com
este exemplo, você pode transformar essa visão em realidade!
CAPÍTULO 6. PYTHON COM BATERIAS INCLUSAS
111
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 113

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
import cv2
cap = cv2.VideoCapture(’video.mp4’)
while
True:
ret , frame = cap.read ()
if not ret:
break
# Aplicar um filtro
cinza
gray_frame = cv2.cvtColor(frame , cv2. COLOR_BGR2GRAY )
cv2.imshow(’Gray
Video ’, gray_frame)
if cv2.waitKey (1) & 0xFF == ord(’q’):
break
cap.release ()
cv2. destroyAllWindows ()
Agora, introduzimos a aplicação de filtros em vídeos. No quarto exemplo, convertemos
cada quadro do vídeo para uma imagem em escala de cinza. A função cv2.cvtColor é
utilizada para alterar a representação de cores, demonstrando como os efeitos visuais podem
ser aplicados em tempo real. Visualize na sua mente como, ao transformar um vídeo colorido
em preto e branco, você pode criar uma atmosfera nostálgica e emocional, como se estivesse
assistindo a um clássico do cinema!
CAPÍTULO 6. PYTHON COM BATERIAS INCLUSAS
112
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 114

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
import cv2
cap = cv2.VideoCapture (0)
ret , frame1 = cap.read ()
ret , frame2 = cap.read ()
while cap.isOpened ():
diff = cv2.absdiff(frame1 , frame2)
gray = cv2.cvtColor(diff , cv2. COLOR_BGR2GRAY )
blur = cv2.GaussianBlur(gray , (5, 5), 0)
_, thresh = cv2.threshold(blur , 20, 255, cv2. THRESH_BINARY )
dilated = cv2.dilate(thresh , None , iterations =3)
contours , _ = cv2.findContours (dilated , cv2.RETR_TREE , cv2.
CHAIN_APPROX_SIMPLE )
for
contour in contours:
if cv2.contourArea(contour) < 1000:
continue
x, y, w, h = cv2.boundingRect (contour)
cv2.rectangle(frame1 , (x, y), (x + w, y + h), (0, 255, 0), 2)
cv2.imshow(’Motion
Detection ’, frame1)
frame1 = frame2
ret , frame2 = cap.read ()
if cv2.waitKey (1) & 0xFF == ord(’q’):
break
cap.release ()
cv2. destroyAllWindows ()
Finalmente, no quinto exemplo, implementamos um sistema básico de detecção de
movimento. Ao calcular a diferença entre dois quadros consecutivos, identificamos movimentos
dentro da cena. Os contornos são detectados e retângulos são desenhados ao redor de áreas
em movimento, mostrando como o OpenCV pode ser usado para segurança e monitoramento.
Reflita sobre a utilidade dessa funcionalidade: você pode transformar sua casa em um estúdio
de filmagem que não apenas captura, mas também reage a tudo que acontece ao seu redor!
Com esses exemplos e conceitos, você está agora equipado para começar a explorar
o mundo da manipulação de vídeos com Python e OpenCV. A prática com esses códigos
ajudará a solidificar sua compreensão e abrir novas possibilidades criativas em seus projetos
CAPÍTULO 6. PYTHON COM BATERIAS INCLUSAS
113
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 115

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
de vídeo.
6.7
PYAUTOGUI: AUTOMAÇÃO DIVERTIDA COM BOTS!
Imagine ter um assistente que pode clicar, digitar e interagir com seu computador exa-
tamente como você faria, mas sem a necessidade de estar presente. Essa é a mágica do
PyAutoGUI, uma biblioteca poderosa em Python que permite automatizar tarefas repetitivas em
sua máquina. Assim como um maestro que coordena uma orquestra, o PyAutoGUI permite que
você controle cada aspecto da interface gráfica do seu computador, transformando comandos
em ações, facilitando a vida de quem precisa realizar tarefas rotineiras ou simplesmente deseja
explorar a automação. Nessa seção, exploraremos o mundo da automação com o PyAutoGUI,
descobrindo como criar bots que realizam uma variedade de tarefas automaticamente.
Considere a seguinte situação: você é um profissional que precisa preencher formulários
online repetidamente, como relatórios de vendas ou cadastros de clientes. Esse trabalho, além
de tedioso, é propenso a erros quando feito manualmente. Como podemos usar o PyAutoGUI
para automatizar esse processo? O desafio proposto é criar um bot que possa preencher
um formulário online, clicar em botões e salvar as informações, reduzindo o tempo e os erros
associados a esse trabalho. Ao longo dessa seção, exploraremos como o PyAutoGUI pode
ser a solução para esse problema prático.
pip
install
PyAutoGUI
Para utilizar o PyAutoGUI de forma eficaz, é importante entender alguns conceitos-chave
da biblioteca. Primeiramente, a movimentação do mouse permite controlar a posição do cursor
na tela, essencial para que o bot saiba onde clicar. Em seguida, temos a simulação de cliques
e teclas, que permite ao bot interagir com elementos da interface gráfica, como botões e
campos de texto. Outro conceito interessante é a captura de tela, que permite que o bot
veja o que ocorre na tela, e a detecção de imagem, que ajuda o bot a encontrar elementos
visuais, como botões ou ícones. Por fim, a sincronização e os delays são fundamentais para
garantir que as ações sejam realizadas na ordem correta e com o tempo necessário para que
cada passo seja executado com precisão. Esses conceitos são essenciais para criar um bot
eficiente com o PyAutoGUI. Vamos explorar exemplos práticos que mostram como cada um
desses pontos pode ser aplicado na criação de automações.
Começamos com um exemplo de como mover o mouse. Imagine que, em vez de ter que
arrastar o mouse manualmente para um ponto específico da tela, você pode programar isso. O
código a seguir, após uma pausa de 2 segundos para dar tempo ao usuário de mudar para a
CAPÍTULO 6. PYTHON COM BATERIAS INCLUSAS
114
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 116

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
tela desejada, move o cursor do mouse para a posição (100, 100) na tela, utilizando a função
moveTo, que permite um movimento suave ao longo de um segundo.
import
pyautogui
import
time
# Espera 2 segundos
antes de mover o mouse
time.sleep (2)
# Move o cursor do mouse
para a posição (100, 100)
pyautogui.moveTo (100, 100, duration =1)
Outro exemplo é o clique do mouse. Após aguardar 2 segundos, o script executa um
clique na posição atual do mouse. Esse exemplo é particularmente útil em automações onde
você precisa interagir com botões ou links em uma interface gráfica. O PyAutoGUI simula o
clique do botão esquerdo do mouse, permitindo que você automatize ações que normalmente
exigiriam interação manual.
import
pyautogui
import
time
time.sleep (2)
# Clica na posição atual do mouse
pyautogui.click ()
Para simular a digitação de texto, imagine que você precisa preencher um formulário.
Neste caso, o bot aguarda 2 segundos e, em seguida, digita a frase ’Olá, este é um teste!’
no campo ativo, com um intervalo de 0,1 segundos entre cada letra. Isso é útil para simular
a digitação humana e evitar que o texto apareça muito rapidamente, o que pode causar
problemas em algumas aplicações que não reconhecem entradas instantâneas.
import
pyautogui
import
time
time.sleep (2)
# Digita um texto no campo
ativo
pyautogui.typewrite(’Olá, este é um teste!’, interval =0.1)
Outro recurso útil é pressionar uma tecla. Após 2 segundos, este código simula a pressão
da tecla ’Enter’. Esse tipo de automação é útil em situações onde você precisa enviar um
CAPÍTULO 6. PYTHON COM BATERIAS INCLUSAS
115
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 117

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
formulário ou confirmar uma ação, eliminando a necessidade de interação manual. É como ter
um assistente que aperta o botão por você enquanto você relaxa!
import
pyautogui
import
time
time.sleep (2)
# Pressiona a tecla ’Enter ’
pyautogui.press(’enter ’)
A captura de tela é outra funcionalidade útil. O script abaixo captura a tela inteira e salva
a imagem como um arquivo. Capturas de tela podem ser úteis para validar que uma ação foi
concluída corretamente ou para criar logs visuais de processos automatizados, funcionando
como um álbum de fotos do que seu bot está fazendo.
import
pyautogui
# Captura a tela e salva
como ’screenshot.png’
screenshot = pyautogui.screenshot ()
screenshot.save(’screenshot.png’)
Para localizar uma imagem na tela, o script tenta localizar uma imagem chamada ’bo-
tao.png’. Se a imagem for encontrada, a posição é impressa. Esse recurso é crucial para
ações que dependem da presença de elementos gráficos específicos, permitindo ao bot reagir
dinamicamente ao que está na tela. É como encontrar um amigo em uma festa lotada — você
precisa saber onde ele está!
import
pyautogui
# Localiza a imagem ’botao.png’ na tela
button_location = pyautogui. locateOnScreen (’botao.png’)
if button_location :
print(’Botão encontrado na posição:’, button_location )
Para arrastar o mouse, o exemplo abaixo move o mouse da posição atual para (300, 300)
ao longo de um segundo. Esta ação pode ser utilizada em situações onde você precisa mover
objetos em um programa de design ou na interface do usuário de um aplicativo. Pense nisso
como mover um móvel em sua casa — é preciso um pouco de cuidado e precisão!
CAPÍTULO 6. PYTHON COM BATERIAS INCLUSAS
116
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 118

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
import
pyautogui
import
time
time.sleep (2)
# Arrasta o mouse da posição atual
para (300 , 300)
pyautogui.dragTo (300, 300, duration =1)
Uma sequência de ações pode ser criada para realizar tarefas complexas. O script a
seguir realiza um clique em uma posição específica, digita um texto e pressiona ’Enter’. Essa
estrutura de sequência é fundamental para criar automações que imitam interações humanas
com a interface do usuário. É como ensaiar uma dança — cada passo precisa estar em
sincronia!
import
pyautogui
import
time
time.sleep (2)
pyautogui.click (100, 100)
pyautogui.typewrite(’Primeiro
passo ’, interval =0.1)
pyautogui.press(’enter ’)
Para fechar uma janela, você pode usar a combinação de teclas ‘Alt + F4‘. Esse exemplo
mostra como utilizar teclas de atalho para realizar ações rapidamente, como fechar aplicativos
ou menus, sem a necessidade de clicar manualmente. Pense nisso como um atalho para a
liberdade!
import
pyautogui
import
time
time.sleep (2)
# Pressiona
Alt + F4 para
fechar a janela
ativa
pyautogui.hotkey(’alt’, ’f4’)
Por fim, para executar ações repetidas, o exemplo abaixo realiza 5 cliques na posição
(100, 100), com uma pausa de um segundo entre cada clique. Essa abordagem é útil para
ações repetitivas, onde você precisa realizar a mesma tarefa várias vezes sem intervenção
manual. É como fazer uma série de exercícios — a repetição é a chave para o sucesso!
CAPÍTULO 6. PYTHON COM BATERIAS INCLUSAS
117
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 119

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
import
pyautogui
import
time
for i in range (5):
pyautogui.click (100, 100)
time.sleep (1)
# Aguarda 1 segundo
entre
cada
clique
Com esses exemplos, os leitores poderão explorar as capacidades do PyAutoGUI e
começar a criar suas próprias automações com confiança. A automação não é apenas uma
questão de facilitar a vida, mas também de liberar tempo para que você possa se concentrar
em tarefas mais importantes ou até mesmo em relaxar um pouco. Então, que tal começar a
criar seu próprio assistente automatizado?
6.8
PYTESSERACT: PYTHON DECIFRANDO MEU GARRANCHO!
Já pensou se você estivesse em uma situação em que precisa digitalizar notas manuscri-
tas, mas não tem tempo para digitá-las uma a uma? A tecnologia atual permite que façamos
isso de maneira eficiente por meio da automação. Assim como uma criança aprende a re-
conhecer letras e palavras ao ver os outros escrever, o Python pode "ler"textos manuscritos
usando a biblioteca Pytesseract. Essa ferramenta poderosa transforma imagens de texto
em dados editáveis, permitindo que aproveitemos o que foi escrito à mão, como anotações,
receitas ou até mesmo rascunhos de ideias.
Considere o desafio de digitalizar uma coleção de receitas manuscritas de um avô ou avó,
que você deseja preservar e compartilhar com amigos e familiares. Em vez de passar horas
digitando cada receita, você pode utilizar o Pytesseract para extrair o texto das imagens das
receitas. Isso não só economiza tempo, mas também mantém a essência da receita original,
incluindo anotações e dicas pessoais que foram escritas à mão.
pip
install
pytesseract
Para entender como o Pytesseract funciona, é importante abordar alguns conceitos-chave.
Primeiro, a biblioteca Pytesseract é uma interface para o Tesseract OCR, um mecanismo
de reconhecimento óptico de caracteres que converte imagens de texto em texto editável.
Em segundo lugar, o pré-processamento da imagem é crucial; isso pode incluir ajustes de
contraste, binarização e remoção de ruídos para melhorar a precisão da leitura. Por fim, o
CAPÍTULO 6. PYTHON COM BATERIAS INCLUSAS
118
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 120

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
processo de extração do texto é simples, mas é essencial garantir que a imagem esteja em
um formato compatível e com qualidade suficiente para que o OCR funcione corretamente.
from PIL import
Image
import
pytesseract
# Carregar a imagem da receita
imagem = Image.open(’receita_manuscrito .jpg’)
# Usar
Pytesseract
para
extrair o texto
texto = pytesseract. image_to_string (imagem)
print(texto)
Nesse exemplo, carregamos uma imagem de uma receita manuscrita usando a biblioteca
Pillow. Em seguida, aplicamos a função image_to_string do Pytesseract para converter a
imagem em texto. O resultado é impresso no console, permitindo que você veja rapidamente o
que foi extraído. Este é um excelente ponto de partida para qualquer projeto de digitalização.
from PIL import Image , ImageFilter
import
pytesseract
# Carregar a imagem
imagem = Image.open(’receita_manuscrito .jpg’)
# Aplicar
filtro
para
melhorar a qualidade
imagem = imagem.filter(ImageFilter.MedianFilter(size =3))
# Usar
Pytesseract
para
extrair o texto
texto = pytesseract. image_to_string (imagem)
print(texto)
Aplicamos um filtro de mediana à imagem para suavizar e reduzir o ruído, o que pode
ajudar o Pytesseract a reconhecer melhor os caracteres. A qualidade da imagem é um
fator crítico na precisão da extração de texto, e essa técnica simples pode fazer uma grande
diferença nos resultados.
CAPÍTULO 6. PYTHON COM BATERIAS INCLUSAS
119
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 121

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
from PIL import
Image
import
pytesseract
# Carregar a imagem
imagem = Image.open(’receita_manuscrito .jpg’)
# Configurar o Pytesseract
configuracao = ’--psm 6’
# Assume uma única
coluna de texto
# Usar
Pytesseract
para
extrair o texto
texto = pytesseract. image_to_string (imagem , config= configuracao )
print(texto)
Utilizamos um parâmetro de configuração específico (–psm 6) que informa ao Pytesseract
que a imagem contém uma única coluna de texto. Isso pode melhorar a precisão da leitura em
certas situações. A escolha do modo de segmentação é uma parte importante do processo
de OCR, e entender como ajustar essas configurações pode levar a melhores resultados em
suas extrações de texto.
6.9
AMOR PERFEITO: PYTHON, IA E SUAS BIBLIOTECAS FABULOSAS!
O ecossistema Python se destaca como uma ferramenta robusta e flexível para o desen-
volvimento de soluções de Inteligência Artificial (IA) graças à vasta gama de bibliotecas e
frameworks disponíveis. Para cada fase do ciclo de criação de modelos de Machine Learning
(ML) e Deep Learning, existem ferramentas específicas que facilitam desde a manipula-
ção inicial dos dados até o treinamento e a implementação do modelo. Bibliotecas como
NumPy, Pandas e SciPy são fundamentais nas fases iniciais de um projeto, auxiliando no
pré-processamento e na manipulação de dados, o que é essencial para garantir que o modelo
receba entradas de alta qualidade. NumPy, por exemplo, permite operações matemáticas
eficientes com arrays e matrizes, o que é crucial para cálculos algébricos e manipulação
de dados em grande escala, enquanto o Pandas fornece estruturas de dados flexíveis para
análise e limpeza de dados.
À medida que avançamos para a fase de visualização e exploração de dados, bibliotecas
como Matplotlib e Seaborn se tornam essenciais. Elas permitem a criação de gráficos e
visualizações interativas que facilitam a identificação de padrões, correlações e anomalias nos
dados, o que é fundamental para o entendimento inicial do comportamento dos dados e a
CAPÍTULO 6. PYTHON COM BATERIAS INCLUSAS
120
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 122

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
seleção de características relevantes para o modelo. Essas bibliotecas ajudam os cientistas
de dados a transformar conjuntos de dados complexos em insights visuais, permitindo uma
tomada de decisão mais informada sobre como construir e otimizar os modelos.
Para a construção de modelos de Machine Learning, bibliotecas como Scikit-Learn
oferecem uma série de algoritmos e ferramentas prontas para uso, que vão desde métodos
de classificação e regressão até técnicas de clusterização e redução de dimensionalidade.
O Scikit-Learn facilita a implementação de pipelines de machine learning, permitindo que
cientistas de dados experimentem rapidamente diferentes abordagens e ajustem hiperpa-
râmetros para otimizar o desempenho do modelo. Este framework é especialmente útil
para o desenvolvimento de protótipos rápidos, graças à sua simplicidade de uso e vasta
documentação.
Quando se trata de Deep Learning, bibliotecas como TensorFlow, Keras e PyTorch
entram em cena, proporcionando ferramentas avançadas para a criação, treinamento e otimi-
zação de redes neurais profundas. O TensorFlow, desenvolvido pelo Google, é amplamente
utilizado para aplicações de produção e oferece suporte extensivo para a execução de modelos
em hardware de alto desempenho, como GPUs e TPUs. Keras, que é uma API de alto nível
para o TensorFlow, simplifica a construção de redes neurais com uma interface mais amigável.
Já o PyTorch, desenvolvido pelo Facebook, é conhecido por sua flexibilidade e capacidade de
debug, sendo amplamente utilizado para pesquisa em IA e prototipagem de novos modelos.
Além dessas bibliotecas, há uma série de outras ferramentas no ecossistema Python
que tornam a linguagem ideal para IA. Bibliotecas como OpenCV permitem a manipulação
avançada de imagens e vídeos, enquanto ferramentas como NLTK e SpaCy são usadas para
processamento de linguagem natural (NLP). O Pytesseract pode ser usado para OCR
(reconhecimento óptico de caracteres), transformando imagens em dados textuais utilizáveis
em projetos de NLP. Juntas, essas bibliotecas cobrem uma ampla gama de aplicações, desde a
visão computacional até a tradução automática, solidificando Python como a escolha preferida
para desenvolvedores de IA.
A popularidade de Python na IA não se dá apenas pela variedade de bibliotecas, mas
também por sua comunidade ativa e colaborativa, que constantemente desenvolve novos
pacotes e melhorias. Essa comunidade vibrante e os “batteries included” (baterias inclusas)
fazem de Python uma plataforma abrangente, capaz de suportar todo o ciclo de vida do
desenvolvimento de IA, desde a aquisição e manipulação de dados até o deployment de
modelos em ambientes de produção. O fácil acesso a tutoriais, documentação, fóruns e
cursos permite que novos desenvolvedores aprendam e implementem rapidamente projetos
de IA, enquanto as bibliotecas avançadas oferecem suporte para aplicações em larga escala,
pesquisas de ponta e desenvolvimentos industriais.
CAPÍTULO 6. PYTHON COM BATERIAS INCLUSAS
121
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 123

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
6.10
CAI PRA DENTRO
Agora é hora de praticar
1. Operações Básicas com NumPy:
• Crie um vetor NumPy com 10 elementos inteiros de sua escolha. Em seguida,
calcule a média, a variância e o desvio padrão dos elementos desse vetor.
2. Manipulação de Matrizes em NumPy:
• Crie duas matrizes 3x3 utilizando o NumPy. Realize a soma, subtração e multipli-
cação de matrizes. Transponha uma delas e calcule o determinante.
3. Análise de Dados com Pandas:
• Importe um conjunto de dados CSV de sua escolha utilizando o Pandas. Realize a
limpeza dos dados removendo valores nulos, crie uma nova coluna calculando a
média de duas colunas existentes, e exiba as primeiras cinco linhas do DataFrame
resultante.
4. Agrupamento e Visualização com Pandas:
• Utilize o mesmo conjunto de dados do exercício anterior e agrupe os dados por
uma coluna categórica. Calcule a soma de outra coluna para cada grupo e crie um
gráfico de barras utilizando o Matplotlib para visualizar o resultado.
5. Manipulação de PDFs com PyPDF:
• Crie um script que leia um arquivo PDF, extraia o texto de todas as suas páginas e
salve o conteúdo extraído em um arquivo de texto separado.
6. Mesclagem de Arquivos PDF:
• Utilize o PyPDF para combinar três arquivos PDF em um único documento. Salve
o resultado com um novo nome e abra-o para verificar se a mesclagem foi bem-
sucedida.
7. Rotação de Páginas em PDF:
• Crie um script que carregue um arquivo PDF existente e rotacione todas as páginas
90 graus no sentido horário. Salve o novo arquivo PDF com um nome diferente.
8. Manipulação de Imagens com Pillow:
• Carregue uma imagem de sua escolha utilizando o Pillow, redimensione-a para
metade de suas dimensões originais e aplique um filtro de desfoque. Salve a nova
imagem em um arquivo diferente.
CAPÍTULO 6. PYTHON COM BATERIAS INCLUSAS
122
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 124

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
9. Conversão de Imagem para Escala de Cinza:
• Utilize a biblioteca Pillow para carregar uma imagem, converter para escala de
cinza e salvá-la com um novo nome. Compare a imagem original com a imagem
convertida.
10. Automação de Tarefas com PyAutoGUI:
• Crie um script que utilize o PyAutoGUI para abrir o navegador de internet, acessar
um site específico e capturar uma captura de tela da página inicial.
11. Preenchimento Automático de Formulários:
• Utilize o PyAutoGUI para simular o preenchimento automático de um formulário
online. O script deve localizar os campos do formulário, digitar informações e clicar
no botão de envio.
12. Extração de Texto de Imagens com Pytesseract:
• Crie um script que carregue uma imagem de texto manuscrito e utilize o Pytesseract
para extrair o texto da imagem. Exiba o texto extraído no console.
13. Detecção de Movimento com OpenCV:
• Utilize a biblioteca OpenCV para criar um script que capture o vídeo da webcam
e detecte movimentos na cena, desenhando um retângulo ao redor das áreas de
movimento detectadas.
14. Aplicação de Filtros de Vídeo com OpenCV:
• Crie um script que capture um vídeo de um arquivo, aplique um filtro de detecção
de bordas em tempo real e exiba o vídeo com o filtro aplicado.
15. Criação de Bot para Tarefas Repetitivas:
• Desenvolva um bot utilizando o PyAutoGUI que abra um aplicativo do computador
(como uma calculadora), realize uma série de operações matemáticas (como
somar, subtrair, multiplicar e dividir) e depois feche o aplicativo automaticamente.
CAPÍTULO 6. PYTHON COM BATERIAS INCLUSAS
123
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 125

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
CAPÍTULO 7
A Arte de Errar com Elegância!
Olha essa situação crítica. Você está pilotando um avião em um dia ensolarado. A
viagem está tranquila, até que, de repente, uma tempestade se forma à sua frente. O que
você faz? Você precisa ter um plano de ação para lidar com essa situação inesperada.
Assim como um piloto deve estar preparado para enfrentar imprevistos, um programador deve
antecipar a possibilidade de erros em seu código. No mundo da programação em Python,
esses imprevistos são chamados de exceções. Esta seção se propõe a explorar o que são
exceções, por que elas ocorrem e como o tratamento adequado delas é crucial para a robustez
e resiliência do seu código.
Vamos considerar um cenário prático: você desenvolve uma aplicação que realiza cálculos
financeiros. Durante a execução, podem ocorrer entradas inválidas, como divisões por zero
ou tentativas de acessar arquivos que não existem.
Esses são exemplos de situações
que podem gerar exceções. O desafio aqui é como garantir que sua aplicação não falhe
completamente quando uma dessas situações ocorre. Em vez de permitir que a aplicação
encerre abruptamente, você deve implementar um mecanismo que lide com essas situações
de maneira controlada e informativa. Afinal, ninguém gosta de ver seu programa, no qual você
trabalhou arduamente, se comportar como um adolescente rebelde que simplesmente desliga
quando a vida fica difícil.
As exceções em Python são eventos que ocorrem durante a execução de um programa e
interrompem seu fluxo normal. Elas podem ser causadas por diversos motivos, como erros de
sintaxe, operações inválidas ou falhas de entrada/saída. A teoria por trás do tratamento de
exceções envolve entender como funcionam os blocos try, except, finally e else. O bloco
try permite que você execute um código que pode gerar uma exceção, enquanto o bloco
except define o que deve ser feito se uma exceção ocorrer. O bloco finally é executado
independentemente de uma exceção ter sido levantada ou não, e o bloco else é executado se
o código no try não gerar nenhuma exceção. Esses conceitos são fundamentais para garantir
que os programas lidem de maneira eficiente com erros, como um mágico que sempre tem
CAPÍTULO 7. A ARTE DE ERRAR COM ELEGÂNCIA!
124
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 126

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
um truque na manga.
É importante destacar que o tratamento de exceções não é apenas uma questão de manter
o código funcional. Ele também serve para melhorar a interação com o usuário. Imagine um
cenário em que um usuário tenta acessar um arquivo que não existe. Se o seu programa
simplesmente falhar sem explicação, o usuário pode ficar tão confuso quanto um gato que
tenta entender por que o laser desapareceu. Em vez disso, um tratamento de exceções bem
implementado pode informar ao usuário que o arquivo não foi encontrado, permitindo que ele
tome ações corretivas, como verificar o caminho do arquivo. Essa comunicação clara pode
evitar frustrações e melhorar a experiência do usuário.
Por tudo isso, o tratamento de exceções é uma habilidade essencial para qualquer
programador Python. Ele não apenas ajuda a prevenir falhas inesperadas, mas também
melhora a experiência do usuário ao fornecer informações claras sobre o que deu errado. À
medida que você avança em sua jornada de programação, lembre-se de que a robustez e
a resiliência do seu código dependem em grande parte de como você lida com exceções.
Desenvolver a prática de tratar exceções de forma eficaz pode transformar um código suscetível
a falhas em uma aplicação robusta e confiável, como um super-herói que sempre consegue
salvar o dia, mesmo nas situações mais complicadas.
7.1
TENTE (TRY), MAS SE ERRAR NÃO PARE
Agora vou te ensinar como executar um código que tem risco de travamento de forma
segura. Vamos aprender dois blocos fundamentais, que são o bloco try, que é um bloco de có-
digo onde você tenta realizar uma operação que pode causar uma exceção, e o bloco except,
que captura e trata exceções. Você pode especificar exceções específicas ou usar uma exce-
ção genérica para capturar qualquer erro que não tenha sido tratado. Além disso, é importante
entender os diferentes tipos de exceções, como ZeroDivisionError, FileNotFoundError e
ValueError, para que você possa tratá-las adequadamente.
Vamos explorar cinco exemplos práticos que ilustram o uso de try e except. No pri-
meiro exemplo, consideremos um cenário em que o programa solicita ao usuário que in-
sira um número e tenta dividir 10 por esse número. Se o usuário digitar 0, uma exceção
ZeroDivisionError será gerada, pois na matemática não podemos dividir nada por zero.
O bloco except captura essa exceção e imprime uma mensagem amigável, evitando que o
programa trave. Assim, o usuário recebe uma orientação clara, como se um amigo dissesse
"Ei, não faça isso, está errado!", e você pode pedir que o usuário insira novamente um valor.
Um exercício prático seria tentar executar o código que está dentro do try isoladamente; você
verá que o programa trava, mas com o try/except, ele não trava.
CAPÍTULO 7. A ARTE DE ERRAR COM ELEGÂNCIA!
125
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 127

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
try:
num = int(input("Digite um numero: "))
result = 10 / num
print(f"O resultado e: {result}")
except:
print("Erro: Voce nao pode
dividir
por zero.")
No segundo exemplo, o código tenta abrir e ler um arquivo chamado arquivo.txt. Se
o arquivo não existir, uma exceção FileNotFoundError será gerada. O bloco except trata
essa exceção, informando ao usuário que o arquivo não foi encontrado, permitindo que o
programa continue rodando sem interrupções. É como procurar um livro na estante e perceber
que ele não está lá. O que você faz? Simples, você procura outra coisa! Aqui está o código:
try:
with open("arquivo.txt", "r") as file:
conteudo = file.read ()
print(conteudo)
except:
print("Erro: O arquivo ’arquivo.txt’ nao foi
encontrado.")
No terceiro exemplo, o usuário insere um número inteiro. Se o usuário digitar um valor
que não pode ser convertido para um inteiro (como texto), o programa gerará uma exceção
ValueError. O bloco except captura essa exceção e informa ao usuário que a entrada não é
válida. Considere que é como tentar colocar uma peça de quebra-cabeça que claramente não
se encaixa. Ninguém quer isso, certo? Vamos ao código:
CAPÍTULO 7. A ARTE DE ERRAR COM ELEGÂNCIA!
126
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 128

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
try:
numero = int(input("Digite um numero
inteiro: "))
print(f"O numero
digitado
foi: {numero}")
except:
print("Erro: Voce deve
digitar um numero
inteiro
valido.")
No quarto exemplo, o código tenta somar uma string e um número, o que não é permitido
em Python e gera uma exceção TypeError. O bloco except informa ao usuário sobre o erro,
permitindo que a execução do programa continue. Pense nisso como tentar misturar água e
óleo. Eles simplesmente não se misturam! E aqui está o código:
try:
resultado = "5" + 5
print(f"O resultado e: {resultado}")
except
TypeError:
print("Erro: Voce nao pode
somar uma string a um numero.")
Por último, no quinto exemplo, o programa tenta acessar um índice que não existe em uma
lista, o que gera uma exceção IndexError. O bloco except trata o erro, informando ao usuário
que tentou acessar um índice inválido, garantindo que o programa não falhe abruptamente. É
como tentar pegar uma fruta de uma árvore que não tem mais frutos! Aqui está o código:
lista = [1, 2, 3]
try:
print(lista [5])
except
IndexError:
print("Erro: Voce
tentou
acessar um indice que nao existe na lista
.")
Tá vendo que maravilha é o Python? A vida é cheia de imprevistos, e estar preparado
para eles é fundamental, não é?
7.2
BLOCO ELSE
Olha essa situação: Você está jogando um jogo de tabuleiro, onde você lança um dado
para decidir o número de casas que avança. Se você tirar um número específico, pode realizar
uma ação especial; caso contrário, avança normalmente. No mundo da programação, o bloco
CAPÍTULO 7. A ARTE DE ERRAR COM ELEGÂNCIA!
127
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 129

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
else funciona de maneira semelhante: ele permite que você execute um código particular
quando NÃO ocorre uma exceção em uma tentativa específica. Essa estrutura é essencial
para garantir que seu programa funcione sem problemas, permitindo que você trate situações
normais e excepcionais de maneira organizada. Nessa seção, vamos desvendar o que é o
bloco else em Python e como ele pode ser usado para tornar seu código mais robusto e fácil
de entender.
O bloco else em Python é usado em conjunto com try e except. O código dentro do bloco
else será executado somente se nenhuma exceção for levantada no bloco try. Isso permite
que você separe a lógica de tratamento de erros da lógica de execução normal, tornando seu
código mais limpo e compreensível. É importante destacar que o bloco else é uma ótima
maneira de garantir que certas operações sejam realizadas apenas quando tudo está certo,
sem a necessidade de aninhar múltiplos if dentro do try.
Em uma situação de divisão, por exemplo, você pode querer dividir dois números. A
operação de divisão é crítica, pois se você tentar dividir por zero, uma exceção será levantada.
O bloco else pode garantir que o resultado da divisão só seja impresso se a operação for
bem-sucedida. Aqui está o código:
try:
num1 = 10
num2 = 2
result = num1 / num2
except:
print("Erro: Divisao
por zero.")
else:
print(f"O resultado da divisao e {result }.")
Nesse caso, tentamos dividir dois números. O código dentro do bloco try realiza a
operação. Se num2 for zero, uma exceção será levantada e a mensagem de erro será exibida.
Caso contrário, o bloco else é executado, mostrando o resultado da divisão. O uso do else
garante que a mensagem de resultado seja exibida apenas se a divisão foi realizada sem
erros, como um juiz que só apita após a partida terminar sem faltas.
Outra aplicação útil do bloco else é na verificação de notas. Imagine que você está
desenvolvendo um sistema educacional que precisa garantir que as notas inseridas pelos
usuários sejam válidas. O código abaixo solicita ao usuário que insira uma nota. Se a nota
estiver fora do intervalo permitido, uma exceção é levantada. Aqui está o código:
try:
nota = float(input("Digite a nota do aluno: "))
CAPÍTULO 7. A ARTE DE ERRAR COM ELEGÂNCIA!
128
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 130

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
if nota < 0 or nota > 10:
raise
ValueError("Nota deve
estar
entre 0 e 10.")
except
ValueError as e:
print(f"Erro: {e}")
else:
print(f"A nota
digitada e {nota }.")
Nesse exemplo, o programa solicita uma nota ao usuário. Se a nota estiver fora do
intervalo permitido, uma exceção é levantada. O bloco else é usado para informar ao usuário
que a nota foi registrada com sucesso, assim, a mensagem só aparece quando a entrada é
válida. Isso mostra como o else pode ser útil em validações de dados, funcionando como um
segurança que só deixa passar quem tem um crachá válido.
Outra utilidade importante do bloco else ocorre na abertura de arquivos. Imagine que
você deseja ler os dados de um arquivo, mas precisa ter certeza de que o arquivo existe antes
de tentar acessá-lo. Aqui está o código:
try:
with open("dados.txt", "r") as file:
conteudo = file.read ()
except
FileNotFoundError :
print("Erro: O arquivo
nao foi
encontrado.")
else:
print("Conteudo do arquivo:")
print(conteudo)
Nesse caso, tentamos abrir e ler um arquivo. Se o arquivo não existir, uma exceção é
levantada e uma mensagem de erro é exibida. Se a abertura do arquivo for bem-sucedida, o
bloco else imprime o conteúdo do arquivo. O uso do else aqui é eficaz para garantir que o
conteúdo só seja acessado se não houver erros durante a abertura, como um carteiro que só
entrega a carta se ela estiver realmente na caixa de correio.
Em outro cenário, você pode ter uma string que representa um número e deseja convertê-
la para um inteiro. O bloco else pode ser útil aqui para garantir que a conversão ocorra sem
problemas. Veja o código:
try:
numero_str = "123"
numero = int(numero_str)
except
ValueError:
print("Erro: Nao foi
possivel
converter a string
para um numero.")
else:
CAPÍTULO 7. A ARTE DE ERRAR COM ELEGÂNCIA!
129
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 131

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
print(f"O numero
convertido e {numero }.")
Nesse caso, tentamos converter uma string em um número inteiro. Se a conversão
falhar, uma exceção é levantada. O bloco else é acionado se a conversão for bem-sucedida,
permitindo que o número convertido seja exibido. Isso ilustra como o else pode ser usado
para confirmar que a operação foi realizada com sucesso antes de prosseguir, como um chef
que só serve o prato se ele estiver perfeitamente cozido.
Por fim, considere uma situação em que você deseja calcular a raiz quadrada de um
número, mas precisa garantir que o número não seja negativo. Veja o código:
import
math
try:
numero = float(input("Digite um numero
para
calcular a raiz
quadrada: "))
if numero < 0:
raise
ValueError("Numero nao pode ser
negativo.")
except
ValueError as e:
print(f"Erro: {e}")
else:
raiz = math.sqrt(numero)
print(f"A raiz
quadrada de {numero} e {raiz }.")
Nesse exemplo, o usuário é solicitado a inserir um número para calcular a raiz quadrada.
Se o número for negativo, uma exceção é levantada. O bloco else calcula e exibe a raiz
quadrada apenas se a entrada for válida. Isso demonstra como o bloco else é eficaz para
garantir que o cálculo seja realizado apenas em condições apropriadas, como um matemático
que só apresenta uma solução se todos os dados estiverem corretos.
O bloco else é uma ferramenta poderosa em Python que permite que os desenvolvedores
organizem seu código de maneira mais eficaz. Ao garantir que certas operações sejam
realizadas apenas quando não há exceções, você pode criar programas mais robustos e fáceis
de entender. Nos exemplos apresentados, vimos como o bloco else pode ser empregado em
diversas situações, desde cálculos simples até manipulação de arquivos, demonstrando sua
versatilidade e importância na programação em Python.
CAPÍTULO 7. A ARTE DE ERRAR COM ELEGÂNCIA!
130
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 132

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
7.3
BLOCO FINALLY
Olha essa analogia. Você está em uma estrada, dirigindo em direção a um destino
importante. Ao longo do caminho, encontra uma série de obstáculos: um buraco na pista,
uma ponte em reparo e um engarrafamento. Em cada situação, é fundamental saber como
lidar com os imprevistos. Assim como na direção, no mundo da programação, especialmente
em Python, enfrentamos erros e exceções. O bloco finally é como aquela última parte da
estrada que garante que você chegue ao seu destino, independentemente dos obstáculos que
encontrar. Ele assegura que certas ações sejam sempre executadas, independentemente de
um erro ter ocorrido ou não.
Considere o seguinte cenário: você desenvolve um sistema que registra dados sensíveis
em um banco de dados. Durante essa operação, pode ocorrer um erro, como uma falha de
conexão. Como garantir que a conexão ao banco de dados seja sempre fechada, indepen-
dentemente de um erro? Aqui entra o bloco finally, que é essencial para lidar com recursos e
garantir que a limpeza necessária seja sempre realizada.
O bloco finally faz parte da estrutura de tratamento de exceções em Python e é usado
em conjunto com os blocos try e except. Os principais pontos incluem o funcionamento do
bloco try, que captura as exceções; o uso do bloco except para tratar exceções específicas; e
a execução do bloco finally, que ocorre após as tentativas de execução do try e do tratamento
no except, garantindo que ações críticas sejam realizadas, como liberar recursos.
No exemplo abaixo, tentamos abrir um arquivo e ler seu conteúdo. Se o arquivo não
existir, uma exceção FileNotFoundError é lançada e capturada, exibindo uma mensagem
para o usuário. Independentemente de ter havido ou não um erro, o bloco finally garante que
o arquivo seja fechado. Isso é crucial para liberar recursos do sistema e evitar vazamentos de
memória, mostrando como o finally pode ser um aliado no gerenciamento de recursos. Veja o
código:
CAPÍTULO 7. A ARTE DE ERRAR COM ELEGÂNCIA!
131
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 133

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
# Aqui você adiciona o código
Python
relacionado ao tema
try:
arquivo = open(’dados.txt’, ’r’)
conteudo = arquivo.read ()
except
FileNotFoundError :
print("O arquivo
nao foi
encontrado.")
finally:
arquivo.close ()
print("Arquivo
fechado.")
Nesse exemplo, tentamos abrir e ler um arquivo. Se o arquivo não existir, a exceção
FileNotFoundError será capturada, e o código exibirá uma mensagem de erro. O bloco
finally garantirá que o arquivo seja fechado, seja qual for o resultado da tentativa.
Outro exemplo prático envolve a conexão a um banco de dados SQLite. O bloco try tenta
estabelecer a conexão e executar uma consulta. Se ocorrer um erro, como a falta de uma
tabela, ele é capturado e uma mensagem é exibida. O bloco finally garante que a conexão ao
banco de dados seja fechada, independentemente do sucesso ou falha da operação. Esse
uso do finally é fundamental em aplicações que interagem com bancos de dados, pois previne
conexões abertas que podem levar a problemas de desempenho. Veja o código:
import
sqlite3
try:
conexao = sqlite3.connect(’minha_base_de_dados .db’)
cursor = conexao.cursor ()
cursor.execute(’SELECT * FROM
tabela_exemplo ’)
except
sqlite3.Error as e:
print(f"Um erro
ocorreu: {e}")
finally:
if conexao:
conexao.close ()
print("Conexao
com o banco de dados
fechada.")
Nesse código, estabelecemos uma conexão com um banco de dados SQLite. Caso ocorra
um erro, como a ausência de uma tabela, ele é tratado no bloco except. O bloco finally garante
que a conexão seja sempre fechada, mesmo em caso de erro, prevenindo problemas futuros.
Outro uso comum do bloco finally está em operações de rede, como requisições HTTP.
No código abaixo, utilizamos a biblioteca requests para fazer uma requisição HTTP. O bloco
try tenta fazer a requisição e levanta um erro se a resposta não for bem-sucedida. Se houver
CAPÍTULO 7. A ARTE DE ERRAR COM ELEGÂNCIA!
132
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 134

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
uma exceção, ela é capturada e uma mensagem de erro é exibida. O bloco finally indica que a
operação de requisição foi finalizada, independentemente do resultado. Esse exemplo ilustra
como o finally pode ser útil em operações de rede, onde é importante garantir que a operação
foi concluída. Veja o código:
import
requests
try:
resposta = requests.get(’https :// api.exemplo.com/dados ’)
resposta. raise_for_status ()
# Levanta um erro para
codigos de
status
HTTP
ruins
except
requests.exceptions. RequestException as e:
print(f"Erro na requisicao: {e}")
finally:
print("Requisicao
finalizada.")
Nesse código, realizamos uma requisição HTTP. Se ocorrer um erro, ele será tratado pelo
bloco except, e o bloco finally garantirá que a operação seja concluída.
O bloco finally é uma ferramenta poderosa em Python que garante que determinadas
ações sejam sempre executadas, independentemente de erros que possam ocorrer. Seja para
fechar arquivos, desconectar de bancos de dados ou finalizar requisições de rede, o uso do
finally ajuda a manter a integridade do código e a evitar vazamentos de recursos. Ao dominar
esse conceito, os programadores podem criar aplicações mais robustas e confiáveis.
7.4
EXCEÇÕES PERSONALIZADAS
Imagine que você está dirigindo um carro em uma estrada desconhecida. De repente,
encontra um desvio inesperado que não estava no seu mapa. Como você reagiria? Se tivesse
um sistema que pudesse alertá-lo sobre essa mudança e guiá-lo de volta ao caminho certo, a
jornada se tornaria muito mais tranquila. No mundo da programação, as exceções funcionam
de maneira semelhante, sinalizando problemas que podem interromper o fluxo de execução do
seu programa. No entanto, nem sempre as exceções padrão são suficientes para descrever
o que está ocorrendo. Nesse contexto, a criação de exceções personalizadas se torna uma
ferramenta poderosa que permite ao programador definir erros específicos que podem ocorrer
em sua aplicação, facilitando a depuração e o tratamento de erros.
Considere um cenário em que você desenvolve um aplicativo de gerenciamento de contas
bancárias. Este aplicativo deve lidar não apenas com transações comuns, mas também
com casos especiais, como tentativas de saque que excedem o saldo disponível. Para lidar
CAPÍTULO 7. A ARTE DE ERRAR COM ELEGÂNCIA!
133
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 135

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
com esses casos de forma eficaz, você pode criar uma exceção personalizada chamada
’SaldoInsuficiente’. Essa exceção permitirá que seu código identifique rapidamente quando
um usuário tenta realizar uma operação inválida e reaja de forma apropriada, como mostrando
uma mensagem de erro clara e amigável.
Para criar exceções personalizadas em Python, você deve herdar da classe base Excep-
tion. Isso permite que sua exceção personalizada se comporte como uma exceção padrão,
mas com a adição de informações específicas sobre o erro ocorrido. Os pontos-chave a serem
explicados incluem a definição de uma nova classe que herda de Exception, o uso de atributos
personalizados para adicionar informações adicionais à exceção, como uma mensagem de
erro específica ou códigos de erro, e o tratamento dessas exceções personalizadas em blocos
try-except.
Vamos começar com um exemplo de ’Saldo Insuficiente’:
class
SaldoInsuficiente (Exception):
def
__init__(self , saldo_atual , valor_saque):
super ().__init__(f’Saldo
atual: {saldo_atual}, valor do saque:
{valor_saque}’)
self.saldo_atual = saldo_atual
self.valor_saque = valor_saque
def sacar(saldo , valor):
if valor > saldo:
raise
SaldoInsuficiente (saldo , valor)
return
saldo - valor
try:
print(sacar (100, 150))
except
SaldoInsuficiente as e:
print(e)
Nesse código, a classe SaldoInsuficiente representa a situação em que o usuário
tenta sacar mais do que o saldo disponível. O método sacar verifica o saldo e, se o valor
for maior, lança a exceção personalizada. O bloco try-except captura a exceção e imprime
uma mensagem de erro clara, como se alguém dissesse: "Ei, você não pode fazer isso!". Isso
melhora a experiência do usuário ao fornecer um feedback imediato e compreensível.
Vamos agora falar sobre ’Idade Inválida’:
class
IdadeInvalida(Exception):
def
__init__(self , idade):
CAPÍTULO 7. A ARTE DE ERRAR COM ELEGÂNCIA!
134
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 136

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
super ().__init__(f’A idade
deve ser um numero
positivo. Idade
fornecida: {idade}’)
self.idade = idade
def
registrar_usuario (idade):
if idade < 0:
raise
IdadeInvalida (idade)
return f’Usuario
registrado
com {idade} anos.’
try:
print( registrar_usuario (-5))
except
IdadeInvalida as e:
print(e)
Aqui, a exceção IdadeInvalida valida se a idade fornecida é um valor positivo. Se a
idade for negativa, a exceção é lançada, como se o sistema dissesse: "Ei, você não pode ter
uma idade negativa!". Isso previne situações absurdas e garante a integridade dos dados.
No próximo exemplo, vamos validar o ’Nome de Usuário’:
class
NomeInvalido(Exception):
def
__init__(self , nome):
super ().__init__(f’O nome de usuario "{ nome }" e invalido.’)
self.nome = nome
def
criar_usuario(nome):
if not nome.isalnum ():
raise
NomeInvalido(nome)
return f’Usuario "{ nome }" criado com
sucesso.’
try:
print(criar_usuario("usuario@123"))
except
NomeInvalido as e:
print(e)
Esse exemplo utiliza a exceção NomeInvalido para validar o nome do usuário, garantindo
que contenha apenas caracteres alfanuméricos. Se o nome for inválido, a exceção é lançada,
ajudando a manter a integridade dos dados da plataforma.
Por último, falaremos sobre a ’Conexão com o Banco de Dados’:
class
ConexaoErro(Exception):
def
__init__(self , mensagem):
super ().__init__(mensagem)
CAPÍTULO 7. A ARTE DE ERRAR COM ELEGÂNCIA!
135
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 137

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
def
conectar_banco ():
# Simulacao de falha na conexao
raise
ConexaoErro("Nao foi
possivel
conectar ao banco de dados.")
try:
conectar_banco ()
except
ConexaoErro as e:
print(e)
Aqui, a exceção ConexaoErro indica falhas ao tentar se conectar a um banco de dados.
Quando ocorre uma falha, a exceção é capturada, e o sistema avisa: "Oh não! Não consegui
me conectar ao banco de dados!". Isso permite que o erro seja tratado de forma adequada e
os desenvolvedores sejam notificados.
Por fim, vamos ao exemplo de ’Erro de Validação de Dados’.
class
ValidacaoErro(Exception):
def
__init__(self , dados):
super ().__init__(f’Dados
invalidos: {dados}’)
self.dados = dados
def
validar_dados(dados):
if not
isinstance(dados , dict):
raise
ValidacaoErro (dados)
return "Dados
validados
com
sucesso."
try:
print(validar_dados("string"))
except
ValidacaoErro as e:
print(e)
Nesse código, a exceção ValidacaoErro valida se os dados fornecidos são do tipo dict.
Se não forem, a exceção é lançada e uma mensagem de erro é apresentada ao usuário.
Considere um sistema que alerta: "Parece que você não forneceu os dados corretos, tente
novamente!". Isso garante que a aplicação funcione corretamente e que os dados sejam
processados de forma eficaz.
Ao criar exceções personalizadas, programadores podem tratar erros de maneira mais
eficaz e específica, melhorando a legibilidade e a manutenção do código. A capacidade de
descrever erros de forma clara e compreensível é um passo importante na construção de
aplicações robustas e confiáveis.
CAPÍTULO 7. A ARTE DE ERRAR COM ELEGÂNCIA!
136
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 138

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
7.5
BOAS PRÁTICAS NO TRATAMENTO DE EXCEÇÕES
Considere um cenário onde você desenvolve um aplicativo de e-commerce que processa
pagamentos. Durante o processo de checkout, várias exceções podem ocorrer, como falhas na
conexão com o servidor de pagamento ou dados de cartão inválidos. O desafio é implementar
um tratamento de exceções que capture esses erros e forneça feedback útil ao usuário,
mantendo o sistema funcionando de maneira fluida. Como garantir que seu código seja claro
e preserve a integridade do fluxo de operações?
É essencial evitar capturas excessivamente amplas de exceções, como except Exception.
Isso pode ocultar erros para os quais você não está preparado. Imagine que você tenta pescar
um peixe com uma rede gigante – pode acabar pegando até o sapato do seu vizinho! Em vez
disso, capture exceções específicas que você espera, como ValueError ou ConnectionError.
Isso assegura que você lide com problemas relevantes, sem se perder em um mar de erros
inesperados.
Ao tratar exceções, mantenha o código claro e compreensível. Use comentários expli-
cativos e crie funções auxiliares, se necessário, para encapsular a lógica de tratamento. O
código deve ser fácil de ler e manter, mesmo por outros desenvolvedores. A leitura do código
deve ser como um passeio em um parque: se o caminho for bem sinalizado, todos podem
desfrutar da caminhada. Um código claro facilita a manutenção e torna o trabalho em equipe
mais agradável.
Em algumas situações, após capturar uma exceção, pode ser apropriado re-lançá-la
usando raise. Isso é útil quando você deseja registrar o erro ou realizar alguma ação antes
de permitir que ele continue a propagar. Saber quando e por que fazer isso é essencial para
manter a integridade do fluxo de erro. Não tenha medo de re-lançar uma exceção, assim como
um diretor de cinema que decide cortar uma cena – às vezes, é necessário permitir que o erro
seja tratado em outro nível.
Vamos dar uma olhada em exemplos que ilustram essas práticas. Primeiro, veja como
capturar exceções específicas:
# Captura de excecoes
especificas
try:
valor = int(input("Digite um numero: "))
except
ValueError as e:
print("Erro: Entrada
invalida. Por favor , insira um numero
inteiro
.")
CAPÍTULO 7. A ARTE DE ERRAR COM ELEGÂNCIA!
137
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 139

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
Nesse exemplo, capturamos especificamente a exceção ValueError, que ocorre quando
a conversão para inteiro falha. Isso fornece ao usuário uma mensagem clara sobre o erro,
sem silenciar outros erros mais críticos.
Agora, veja como manter a clareza e manutenibilidade no tratamento de exceções:
# Tratamento
claro e manutenivel
def
processar_pagamento (dados_cartao ):
try:
realizar_pagamento ( dados_cartao )
except
ConnectionError :
print("Erro: Nao foi
possivel
conectar ao
servidor de pagamento. Tente
novamente
mais
tarde.")
except
ValueError:
print("Erro: Dados do cartao
invalidos.
Verifique e tente
novamente.")
Aqui, a função processar_pagamento trata exceções específicas de maneira clara. Cada
exceção é tratada de forma individual, permitindo que o desenvolvedor adicione lógica adicional,
como registro de erros, sem complicar o código.
Agora, vejamos um exemplo de re-lançamento de exceções:
# Re -lancamento de excecoes
def
ler_arquivo(nome_arquivo):
try:
with open(nome_arquivo , ’r’) as f:
return f.read ()
except
FileNotFoundError as e:
print(f"Erro: O arquivo
’{ nome_arquivo }’ nao foi
encontrado.")
raise
# Re -lanca a excecao
para ser
tratada em um nivel
superior
Nesse exemplo, a exceção FileNotFoundError é capturada e uma mensagem é im-
pressa. Em seguida, a exceção é re-lançada para que um nível superior no código decida
como proceder com o erro.
Boas práticas no tratamento de exceções em Python ajudam os desenvolvedores a
escrever código mais confiável e fácil de manter. Portanto, da próxima vez que se deparar
com uma exceção, lembre-se: trate-a com cuidado, como você trataria um passageiro nervoso
em um voo, e sua jornada de codificação será muito mais tranquila!
CAPÍTULO 7. A ARTE DE ERRAR COM ELEGÂNCIA!
138
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 140

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
7.6
INTRODUÇÃO À MANIPULAÇÃO DE ARQUIVOS
Imagine que você é um bibliotecário em uma vasta biblioteca digital, onde milhões de
livros estão armazenados em arquivos. Cada vez que um leitor solicita um livro, você precisa
saber como localizá-lo, entregá-lo e, às vezes, até mesmo atualizá-lo. Essa metáfora ilustra a
essência da manipulação de arquivos em Python. A manipulação de arquivos é o processo de
ler, escrever e modificar dados armazenados em arquivos, uma habilidade crucial para qualquer
programador. Assim como um bibliotecário precisa entender o sistema de catalogação, um
programador deve dominar as técnicas de manipulação de arquivos para gerenciar dados de
maneira eficaz. Afinal, ninguém quer ser aquele bibliotecário que confunde “O Senhor dos
Anéis” com um manual de instruções de um micro-ondas, não é mesmo?
Considere um cenário em que você desenvolve um aplicativo de gerenciamento de tarefas.
Os usuários precisam salvar suas listas de tarefas, e você deve garantir que essas informações
sejam mantidas mesmo após o fechamento do aplicativo. Se não houver um método para
armazenar esses dados em um arquivo, todas as tarefas criadas serão perdidas, frustrando
os usuários. Portanto, entender como manipular arquivos é essencial para criar aplicativos
que sejam não apenas funcionais, mas também úteis e práticos. Pense na frustração de um
usuário que perdeu todas as suas tarefas por falta de um simples arquivo. É como perder o
controle da sua geladeira: você abre e tudo que encontra é um mistério.
A manipulação de arquivos em Python envolve três operações principais: leitura, escrita
e atualização. A leitura permite que você acesse e extraia dados de um arquivo, enquanto
a escrita permite que você crie novos arquivos ou sobrescreva os existentes com dados
atualizados. A atualização é crucial para modificar informações em arquivos já existentes,
garantindo que as alterações sejam salvas. Esses conceitos são fundamentais para a gestão
de dados em qualquer aplicação, pois permitem que os desenvolvedores mantenham a
persistência de dados, uma característica primordial para a construção de software robusto.
Visualize na sua mente um aplicativo de receitas que não salva suas criações culinárias. Seria
como tentar fazer um soufflé sem saber a receita.
7.7
ABERTURA DE ARQUIVOS COM OPEN
Imagine que você está em uma biblioteca gigantesca, cheia de livros. Cada livro representa
um arquivo que contém informações valiosas. Para acessar essas informações, você precisa
de uma chave especial. Em Python, essa chave é a função open(), que permite abrir arquivos
para leitura, escrita ou modificação. Assim como na biblioteca, onde diferentes seções têm
CAPÍTULO 7. A ARTE DE ERRAR COM ELEGÂNCIA!
139
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 141

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
regras diferentes para acesso, a função open() também possui modos de abertura que
determinam como você pode interagir com o arquivo. Nesse guia, vamos explorar a função
open() e seus modos, equipando você com as habilidades necessárias para manipular
arquivos como um verdadeiro bibliotecário da programação.
Suponha que você desenvolve um programa que precisa armazenar as notas de alunos
em um arquivo. Como você abriria esse arquivo de forma adequada para garantir que as notas
sejam gravadas corretamente? Ou, se precisar ler um arquivo de texto que contém informações
sobre produtos em estoque, como fazer isso de maneira eficiente? A função open() é o que
você precisa, e compreendê-la pode ser a chave para resolver esses problemas práticos de
manipulação de arquivos.
A função open() é fundamental para a manipulação de arquivos em Python. Ela permite
abrir arquivos em diferentes modos, que são: ’r’: Modo de leitura, usado para ler o conteúdo
de um arquivo; ’w’: Modo de escrita, que cria um novo arquivo ou sobrescreve um existente;
’a’: Modo de anexação, que permite adicionar conteúdo ao final de um arquivo existente;
e ’r+’: Modo de leitura e escrita, que permite ler e escrever no mesmo arquivo. Esses
diferentes modos possibilitam que você adapte sua abordagem conforme a necessidade do
seu aplicativo. Com esses conceitos em mente, vamos explorar alguns exemplos práticos de
como utilizar a função open().
No exemplo abaixo, utilizamos o modo de abertura ’r’ para ler o conteúdo de um arquivo
chamado notas.txt. A palavra-chave with é empregada para garantir que o arquivo seja
fechado automaticamente após a leitura. O conteúdo do arquivo é lido e armazenado na
variável conteudo, que é então impressa na tela. Esse exemplo demonstra a simplicidade de
abrir um arquivo para leitura e o uso prático do contexto gerenciado pelo with, que previne
vazamentos de recursos. Imagine que você está abrindo um livro e, ao fechá-lo, ele já se
coloca de volta na estante. Muito conveniente, não?
with open(’notas.txt’, ’r’) as arquivo:
conteudo = arquivo.read ()
print(conteudo)
Agora, abrimos um arquivo chamado relatorio.txt no modo ’w’. Se esse arquivo já
existir, seu conteúdo será sobrescrito. Utilizamos o método write() para adicionar dados ao
arquivo, começando com um título e o total de vendas. Essa abordagem é útil para criar novos
arquivos e registrar informações importantes. É fundamental notar que, ao usar o modo ’w’,
você deve ter cuidado, pois qualquer informação anterior no arquivo será perdida. Pense nisso
como uma folha em branco: quando você escreve, tudo o que estava lá antes desaparece.
CAPÍTULO 7. A ARTE DE ERRAR COM ELEGÂNCIA!
140
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 142

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
with open(’relatorio.txt’, ’w’) as arquivo:
arquivo.write(’Relatorio de Vendas\n’)
arquivo.write(’Total: R$ 5000 ,00\n’)
Nesse exemplo, abrimos o mesmo arquivo relatorio.txt no modo ’a’, que permite
adicionar novas informações sem apagar o que já estava lá. Ao usar write(), adicionamos
uma nova linha ao relatório. Essa funcionalidade é especialmente útil quando você precisa
atualizar logs ou registros sem perder informações anteriores. O modo de anexação é uma
ferramenta poderosa para manter um histórico contínuo de dados. Imagine que você está
adicionando mais e mais folhas a um caderno, sem precisar arrancar as páginas que já estão
escritas.
with open(’relatorio.txt’, ’a’) as arquivo:
arquivo.write(’Novas
Vendas: R$ 1500 ,00\n’)
Por fim, utilizamos o modo ’r+’ para abrir dados.txt, permitindo tanto a leitura quanto
a escrita. Primeiro, lemos o conteúdo do arquivo e o imprimimos. Em seguida, adicionamos
uma nova linha. O modo ’r+’ é extremamente útil quando você precisa acessar e modificar
dados em um único arquivo. É importante lembrar que, ao escrever após a leitura, a posição
do cursor é crucial: novas informações serão adicionadas a partir do ponto atual. Pense nisso
como um lápis que você usa para anotar algo importante no meio de um texto já existente.
with open(’dados.txt’, ’r+’) as arquivo:
conteudo = arquivo.read ()
print(conteudo)
arquivo.write(’Adicao de Dados\n’)
Esses exemplos ilustram o uso prático e progressivo da função open() em Python,
preparando você para lidar com arquivos de forma eficaz e segura. Com essas habilidades,
você poderá desenvolver soluções que envolvem armazenamento e manipulação de dados
em seus projetos.
7.8
LEITURA DE ARQUIVOS
Você está em uma biblioteca enorme e, de repente, se depara com um livro que contém
todas as respostas para suas perguntas. Essa sensação de descoberta é similar ao que
CAPÍTULO 7. A ARTE DE ERRAR COM ELEGÂNCIA!
141
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 143

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
acontece quando você abre um arquivo em Python.
A leitura de arquivos permite que
você acesse dados armazenados em seu computador, trazendo informações valiosas para
seus programas. Nessa seção, vamos explorar os métodos fundamentais para leitura de
arquivos em Python: read(), readline() e readlines(). Cada um desses métodos possui
características únicas que se adaptam a diferentes cenários de leitura de dados. Considere
que, assim como escolher um livro pode determinar o quão interessante será sua leitura,
escolher o método certo para ler um arquivo pode transformar a eficiência do seu código.
Suponha que você tenha um arquivo de texto que contém uma lista de nomes de clientes
e seus pedidos. Seu objetivo é processar esses dados para gerar um relatório que resuma o
número de pedidos por cliente. Para atingir esse objetivo, é essencial saber como ler os dados
do arquivo de maneira eficiente. A escolha do método de leitura adequado pode fazer toda
a diferença na forma como você manipula e analisa as informações. Vamos nos aprofundar
em cada um dos métodos de leitura de arquivos e entender quando usar cada um deles.
Imagine que você está tentando encontrar uma receita em um caderno cheio de anotações.
Se você tiver um método eficiente para acessar as informações, vai economizar tempo e evitar
a frustração de não encontrar o que precisa!
O método read() lê todo o conteúdo do arquivo de uma só vez e retorna uma string. É
ideal quando você sabe que o arquivo não é muito grande e deseja processar todos os dados
simultaneamente. Por exemplo, quando você usa read() para abrir um arquivo chamado
clientes.txt, você está, na verdade, pegando o livro todo de uma vez e pronto para fazer
uma leitura rápida. Veja só este código:
with open(’clientes.txt’, ’r’) as arquivo:
conteudo = arquivo.read ()
print(conteudo)
Nesse código, usamos o método read() para ler todo o conteúdo do arquivo clientes.txt.
A instrução with garante que o arquivo seja fechado automaticamente após a leitura. Aqui, o
conteúdo completo é carregado na variável conteudo, que pode ser utilizado para análises
posteriores. É como ter um livro aberto na sua frente, permitindo que você navegue por todas
as páginas de uma vez!
O método readline() lê uma única linha do arquivo por vez. É útil quando você está
lidando com arquivos grandes e deseja processá-los linha por linha, economizando memória.
Pense nisso como se você estivesse lendo um romance, mas em vez de folhear todas as
páginas, você decide ler uma página de cada vez, saboreando cada linha. Aqui está um
exemplo:
CAPÍTULO 7. A ARTE DE ERRAR COM ELEGÂNCIA!
142
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 144

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
with open(’clientes.txt’, ’r’) as arquivo:
while
True:
linha = arquivo.readline ()
if not linha:
break
print(linha.strip ())
Nesse exemplo, o método readline() é utilizado dentro de um loop while para ler o
arquivo linha por linha. A leitura continua até que não haja mais linhas para ler, permitindo que
você processe arquivos grandes sem carregá-los completamente na memória. É uma ótima
maneira de manter o controle e não se perder em um mar de informações!
O método readlines() lê todas as linhas do arquivo e as armazena em uma lista. É uma
boa opção se você precisa acessar várias linhas de forma rápida, mas não se preocupa com a
memória, pois ele carrega tudo de uma vez. Visualize isso como se você estivesse pegando
várias páginas de uma vez e colocando-as em uma mesa, prontas para serem examinadas.
Veja o código a seguir:
CAPÍTULO 7. A ARTE DE ERRAR COM ELEGÂNCIA!
143
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 145

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
with open(’clientes.txt’, ’r’) as arquivo:
linhas = arquivo.readlines ()
for linha in linhas:
print(linha.strip ())
Aqui, utilizamos o método readlines() para ler todas as linhas do arquivo de uma vez e
armazená-las em uma lista. Em seguida, iteramos sobre essa lista para imprimir cada linha.
Esse método é prático quando você precisa de acesso rápido a todas as linhas, mas lembre-se
de que ele carrega o conteúdo inteiro na memória. É a sua chance de se jogar na leitura e ver
tudo de uma vez, como um binge-watching de séries, mas em vez de episódios, são linhas de
texto!
Esses exemplos demonstram como cada método possui suas vantagens e desvantagens,
dependendo do contexto e do tamanho do arquivo com o qual você está trabalhando. Com-
preender essas nuances ajudará você a tomar decisões informadas ao manipular arquivos
em Python. Afinal, a leitura de arquivos pode ser tão empolgante quanto desbravar um novo
mundo de informações – e agora você tem as ferramentas necessárias para isso!
7.9
ESCRITA EM ARQUIVOS
Imagine que você está escrevendo um diário. Cada dia, você registra suas experiências,
reflexões e sentimentos. Agora, considere a possibilidade de transformar essa prática em um
programa de computador que armazena suas anotações em arquivos. A escrita em arquivos é
uma habilidade fundamental em Python que permite que os desenvolvedores salvem dados
de forma persistente. Ao aprender sobre os métodos de escrita, você não apenas entenderá
como manipular textos, mas também como gerenciar informações de forma eficaz, assim
como faria em um diário. Pense em como seria divertido poder abrir um arquivo e ver todas as
suas vendas registradas, como se estivesse folheando as páginas de um caderno, mas sem o
risco de derrubar café e manchar tudo!
Vamos considerar um cenário onde você precisa registrar as vendas diárias de uma loja.
Em vez de anotar cada venda em um caderno, você pode usar um script Python que escreve
essas informações em um arquivo. Isso não só economiza tempo, mas também facilita a
análise posterior dos dados. Compreender como usar os métodos write() e writelines(),
bem como os diferentes modos de abertura de arquivos, permitirá que você crie um sistema
eficiente para armazenar e acessar suas vendas, tornando sua rotina muito mais organizada.
Visualize na sua mente como seria se cada vez que você fizesse uma venda, ao invés de
CAPÍTULO 7. A ARTE DE ERRAR COM ELEGÂNCIA!
144
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 146

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
pegar um caderno, você simplesmente digitasse e salvasse tudo em um arquivo. Assim, você
estaria sempre pronto para uma análise rápida, como um super-herói das vendas!
A escrita em arquivos em Python é feita principalmente através dos métodos write()
e writelines(). O método write() é utilizado para escrever uma única string em um
arquivo, enquanto writelines() permite escrever uma lista de strings de uma só vez. A
manipulação do modo de abertura de arquivos também é crucial: o modo ’w’ sobrescreve
qualquer conteúdo existente, o modo ’a’ adiciona novas informações ao final do arquivo, e o
modo ’r+’ permite tanto a leitura quanto a escrita no arquivo. Esses conceitos são essenciais
para garantir que seus dados sejam gerenciados corretamente. Considere que você está
preparando uma receita: se não souber se o forno está pré-aquecido ou se precisa adicionar
mais açúcar, o resultado pode não ser tão doce quanto gostaria. Da mesma forma, saber
como abrir e escrever em arquivos é fundamental para que seus dados não se transformem
em um desastre.
No código abaixo, usamos o método write() para criar um arquivo e escrever uma única
linha nele. Esse método é ideal quando você deseja gravar informações específicas:
# Criando um arquivo e escrevendo
uma linha
with open(’vendas.txt’, ’w’) as arquivo:
arquivo.write(’Venda do dia: R$ 100 ,00\n’)
Nesse exemplo, criamos um arquivo chamado vendas.txt e escrevemos uma linha que
registra uma venda. O uso do ’w’ garante que, se o arquivo já existir, ele será sobrescrito.
Agora, imagine que você está jogando um jogo de tabuleiro e, cada vez que faz uma jogada,
precisa reescrever o tabuleiro. O método write() faz exatamente isso, sempre começando
do zero!
Agora, utilizamos o método writelines() para gravar várias vendas em uma única
operação. Isso é útil quando você tem uma lista de informações que deseja adicionar ao
arquivo:
# Criando um arquivo e escrevendo
varias
linhas
vendas = [’Venda 1: R$ 50 ,00\n’, ’Venda 2: R$ 75 ,00\n’, ’Venda 3: R$
120 ,00\n’]
with open(’vendas.txt’, ’w’) as arquivo:
arquivo.writelines(vendas)
Nesse exemplo, criamos uma lista de vendas e usamos writelines() para gravá-las no
arquivo de uma só vez. Isso é mais eficiente do que chamar write() repetidamente. É como
CAPÍTULO 7. A ARTE DE ERRAR COM ELEGÂNCIA!
145
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 147

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
se você estivesse fazendo um grande pedido em uma pizzaria: ao invés de pedir uma fatia por
vez, você diz "me traga todas as fatias de uma vez, por favor!"e fica feliz da vida!
Agora, vamos adicionar novas vendas ao arquivo existente sem sobrescrever os dados já
registrados, utilizando o modo ’a’.
# Adicionando
novas
vendas ao arquivo
existente
with open(’vendas.txt’, ’a’) as arquivo:
arquivo.write(’Venda 4: R$ 200 ,00\n’)
Nesse código, abrimos o arquivo vendas.txt com o modo ’a’ para adicionar uma nova
linha com uma nova venda. Isso preserva todas as informações anteriores. Pense em um
álbum de fotos: você não quer perder as fotos que já tirou, apenas adicionar mais algumas
lindas memórias!
Agora, vamos explorar como ler e escrever no mesmo arquivo usando o modo ’r+’. Isso
permite que você faça alterações no conteúdo existente.
# Lendo e modificando o arquivo
with open(’vendas.txt’, ’r+’) as arquivo:
conteudo = arquivo.readlines ()
# Le todas as linhas
conteudo.append(’Venda 5: R$ 250 ,00\n’)
# Adiciona
uma nova
venda
arquivo.seek (0)
# Volta ao inicio do arquivo
arquivo.writelines(conteudo)
# Regrava
todas as linhas
Nesse exemplo, lemos o conteúdo do arquivo, adicionamos uma nova venda à lista e
reescrevemos todo o conteúdo no arquivo. O uso de seek(0) é crucial para garantir que
começamos a escrita desde o início do arquivo. Reflita sobre como seria se você estivesse
revisando um livro e pudesse adicionar novas páginas ao final dele. Assim, você não só
preserva o que já estava escrito, mas também contribui com novas ideias!
Esses exemplos demonstram como a escrita em arquivos é uma ferramenta poderosa
para o armazenamento de dados em Python, permitindo que você gerencie informações de
maneira eficiente e organizada. Portanto, da próxima vez que você abrir um arquivo, lembre-se
de que está dando um grande passo rumo à organização e à eficiência, como um verdadeiro
mestre da programação!
CAPÍTULO 7. A ARTE DE ERRAR COM ELEGÂNCIA!
146
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 148

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
7.10
USO DE GERENCIADORES DE CONTEXTO WITH
Imagine que você está em uma cafeteria, tomando seu café da manhã enquanto lê um
livro. Para aproveitar a leitura e o café, você deve garantir que não derrame nada sobre as
páginas do seu livro. Assim como você cuida do seu livro enquanto está comendo, o Python
oferece uma maneira de gerenciar recursos de forma segura e eficaz com o gerenciador de
contexto with. Esse recurso permite que você trabalhe com arquivos e outros recursos que
precisam ser abertos e fechados, sem se preocupar em fazer isso manualmente, evitando
assim ’desastres’ no seu código, como arquivos abertos desnecessariamente. É como ter
um garçom que se certifica de que sua xícara de café não transborde enquanto você está
mergulhado na leitura!
Um problema comum que muitos programadores enfrentam é o gerenciamento adequado
de arquivos. Quando um arquivo é aberto em um programa, é crucial que ele seja fechado
após o uso para evitar problemas como vazamentos de memória ou corrupção de dados.
Imagine que você está desenvolvendo um aplicativo que registra eventos de um sistema. Se
você não fechar os arquivos corretamente, poderá acabar criando um grande número de
arquivos abertos, consumindo recursos do sistema e tornando o seu aplicativo instável. A
solução é utilizar o gerenciador de contexto with, que garante que os arquivos sejam fechados
automaticamente ao final do bloco de código, independentemente de ocorrerem erros. Pense
nisso como mágica: você abre o arquivo, faz suas operações e, ao final, o arquivo se fecha
como um mágico que faz desaparecer um coelho.
O gerenciador de contexto with em Python é uma construção que simplifica o gerencia-
mento de recursos, como arquivos, conexões de rede e outros objetos que possuem métodos
de entrada e saída. Ao usar with, você evita a necessidade de chamar manualmente o método
close(), pois o with cuida disso para você. O ponto-chave é que, ao entrar no bloco with,
o recurso é adquirido, e ao sair do bloco, seja por término natural ou por exceção, o recurso
é liberado automaticamente. Esta abordagem não só torna o código mais limpo e legível,
mas também reduz a probabilidade de erros ao lidar com recursos. É como ter um assistente
pessoal que não só organiza sua mesa, mas também garante que você não esqueça de fechar
a porta enquanto sai!
Aqui está um exemplo prático do uso do gerenciador de contexto with para manipulação
de arquivos:
# Usando
with para
gerenciar
arquivos
with open(’exemplo.txt’, ’w’) as arquivo:
arquivo.write(’Ola , mundo!’)
CAPÍTULO 7. A ARTE DE ERRAR COM ELEGÂNCIA!
147
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 149

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
Nesse exemplo, ao abrir o arquivo exemplo.txt no modo de escrita (’w’), o gerenciador
de contexto garante que o arquivo será fechado automaticamente após a execução do bloco
de código, mesmo que ocorra uma exceção durante a escrita. Isso significa que você não
precisa se preocupar em chamar arquivo.close(), pois o Python se encarrega disso ao final
do bloco. Essa abordagem não apenas torna seu código mais seguro, mas também melhora
a legibilidade, permitindo que você se concentre na lógica do programa sem se distrair com
o gerenciamento de recursos. Afinal, quem precisa de preocupações extras quando pode
simplesmente deixar que o Python cuide disso, não é mesmo?
7.11
FECHAMENTO DE ARQUIVOS COM CLOSE
Imagine que você está em uma biblioteca, onde cada livro representa um arquivo que você
pode ler e editar. Enquanto você está na biblioteca, é fácil pegar um livro, folheá-lo e deixá-lo
aberto na mesa. No entanto, se você não devolver os livros após a leitura, a biblioteca ficará
rapidamente sobrecarregada, dificultando a localização de outros livros. Da mesma forma, em
programação, quando você abre um arquivo, é vital fechá-lo após o uso. O fechamento de
arquivos é uma prática essencial para garantir que os recursos do sistema sejam liberados
e que não haja vazamentos de memória. Nesse segmento, exploraremos a importância de
fechar arquivos em Python, as diferenças entre o fechamento manual e automático e como
essas práticas podem impactar a eficiência de seus programas.
Imagine que você está desenvolvendo um aplicativo que processa dados de usuários
armazenados em arquivos. Se você abrir vários arquivos para leitura e não os fechar, seu
programa poderá eventualmente consumir toda a memória disponível do sistema, resultando
em uma falha ou desempenho extremamente lento. Isso pode ser frustrante para os usuários
e prejudicial para a reputação do seu aplicativo. Portanto, entender como e quando fechar
arquivos é crucial para manter o desempenho e a integridade do seu software. Ao longo
dessa seção, você aprenderá não apenas como fechar arquivos corretamente, mas também
as melhores práticas para evitar problemas relacionados à gestão de recursos.
O fechamento de arquivos em Python pode ser realizado de duas maneiras: manualmente,
por meio do uso do método close(), ou automaticamente, utilizando a declaração with. O
método close() é uma abordagem tradicional, onde o programador é responsável por fechar
o arquivo após a operação. Essa abordagem demanda atenção, pois se você esquecer
de chamar close(), o arquivo permanecerá aberto, potencialmente causando vazamentos
de recursos. Por outro lado, a declaração with oferece um gerenciamento automático de
recursos, garantindo que o arquivo seja fechado assim que o bloco de código for finalizado,
independentemente de erros que possam ocorrer durante a execução. Sempre que você
utilizar close(), deve-se garantir que ele seja chamado, o que pode ser feito com um bloco
CAPÍTULO 7. A ARTE DE ERRAR COM ELEGÂNCIA!
148
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 150

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
try...finally, para assegurar que o fechamento ocorra mesmo em caso de erro.
Aqui está um exemplo prático que ilustra o uso de close() e with para abrir e fechar um
arquivo:
# Uso do close ()
file = open(’dados.txt’, ’w’)
file.write(’Exemplo de uso do close ().\n’)
file.close ()
# É fundamental
fechar o arquivo
# Uso do with
with open(’dados_automatico .txt’, ’w’) as file_auto:
file_auto.write(’Exemplo de uso do with .\n’)
# O arquivo é fechado
automaticamente ao sair do bloco
with
Nesse código, você abre o arquivo dados.txt para escrita e, em seguida, escreve uma
linha de texto. Após a operação, você chama close() para assegurar que o arquivo seja
fechado. No segundo exemplo, ao usar with, você não precisa se preocupar com o fechamento
do arquivo, pois isso será feito automaticamente, garantindo que os recursos sejam liberados
adequadamente. Essa abordagem não só melhora a legibilidade do código, mas também
previne erros comuns relacionados ao gerenciamento de arquivos.
7.12
MANIPULAÇÃO AVANÇADA DE ARQUIVOS
Imagine que você é um bibliotecário em uma gigantesca biblioteca digital. Cada livro é um
arquivo, e os leitores estão constantemente requisitando trechos específicos ou desejando
adicionar novas informações. Nesse cenário, a manipulação de arquivos binários é como ter
um conjunto de ferramentas especializadas que permitem não apenas acessar esses livros
de maneira eficiente, mas também garantir que eles permaneçam organizados e seguros. A
leitura e escrita em arquivos binários não é apenas uma habilidade técnica, mas uma arte que
permite lidar com grandes volumes de dados de forma eficaz, semelhante a um maestro que
conduz uma orquestra, onde cada instrumento representa uma parte do arquivo.
Considere uma situação em que sua aplicação precisa processar grandes arquivos de
imagens em formato binário, como aqueles usados nas indústrias de mídia e entretenimento.
Esses arquivos podem conter milhões de bytes de informações que, se não forem geridos
adequadamente, podem causar lentidão ou até falhas no sistema. O desafio é garantir que
a leitura e a escrita sejam feitas de maneira eficiente, mantendo a integridade dos dados
e evitando erros que podem ocorrer com arquivos muito grandes. Aqui, a manipulação de
CAPÍTULO 7. A ARTE DE ERRAR COM ELEGÂNCIA!
149
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 151

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
arquivos binários se torna essencial, pois permite que você trabalhe com esses dados de
forma otimizada, além de garantir que seu programa possa lidar com exceções que possam
surgir durante o processo. Afinal, ninguém quer que sua aplicação se comporte como um gato
que derruba um copo d’água: inesperado e bagunçado!
A manipulação de arquivos binários em Python é realizada por meio da utilização do
módulo open, que permite abrir arquivos em diferentes modos, como ’rb’ para leitura e
’wb’ para escrita. Os arquivos binários armazenam dados em formato bruto, o que significa
que eles não são legíveis como texto, mas permitem uma representação mais compacta e
eficiente de informações. Ao trabalhar com arquivos grandes, é crucial implementar técnicas
de leitura e escrita em blocos, o que não apenas melhora a performance, mas também
ajuda a evitar problemas de memória. Além disso, o tratamento de exceções é uma parte
vital da manipulação de arquivos, pois garante que seu programa possa lidar com situações
inesperadas, como arquivos não encontrados ou erros de leitura e escrita. Utilizando o bloco
try-except, é possível capturar e tratar essas exceções de forma elegante, mantendo a
experiência do usuário fluida e sem interrupções, como um mágico que faz truques sem deixar
o público perceber!
Aqui está um exemplo de um código que demonstra a leitura e escrita em arquivos binários,
incluindo o tratamento de exceções. Nesse exemplo, o programa tenta abrir um arquivo binário
para leitura, lê os dados em blocos e os escreve em um novo arquivo binário. Caso o arquivo
não seja encontrado, uma exceção é capturada e uma mensagem de erro é exibida.
try:
# Abrindo um arquivo
binario
para
leitura
with open(’imagem_original .bin’, ’rb’) as arquivo_origem :
# Lendo
dados em blocos de 1024
bytes
bloco = arquivo_origem .read (1024)
with open(’imagem_copiada .bin’, ’wb’) as arquivo_destino :
while
bloco:
arquivo_destino .write(bloco)
# Escrevendo
dados no
novo
arquivo
bloco = arquivo_origem .read (1024)
# Lendo o proximo
bloco
except
FileNotFoundError :
print("Erro: O arquivo ’imagem_original .bin’ nao foi
encontrado.")
except
Exception as e:
print(f"Ocorreu um erro
inesperado: {e}")
Nesse código, utilizamos o comando with para garantir que os arquivos sejam fechados
adequadamente, mesmo se ocorrer um erro durante a manipulação. A leitura em blocos ajuda
a manter a utilização de memória sob controle, permitindo que o programa funcione de forma
CAPÍTULO 7. A ARTE DE ERRAR COM ELEGÂNCIA!
150
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 152

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
eficaz, mesmo com arquivos grandes. O tratamento de exceções assegura que o usuário
receba feedback útil caso algo não saia como planejado, como um amigo que te avisa que
você tem espinafre entre os dentes antes de uma apresentação!
7.13
BOAS PRÁTICAS NA MANIPULAÇÃO DE ARQUIVOS
Imagine que você está em uma biblioteca imensa, repleta de livros que contêm informa-
ções valiosas. Cada livro representa um arquivo em seu sistema. Agora, pense na dificuldade
que você teria se não soubesse onde estão esses livros ou se eles estivessem em péssimas
condições. Assim como um bibliotecário precisa organizar e manter os livros em bom estado,
você também deve seguir boas práticas na manipulação de arquivos em Python. Isso não
apenas garante que seus dados sejam seguros e acessíveis, mas também melhora a eficiência
do seu trabalho, tornando a leitura e a escrita de arquivos uma tarefa tranquila e sem estresse.
Afinal, ninguém quer ser aquele que, ao abrir um livro, descobre que ele está mais bagunçado
que a mesa de um estudante antes da prova, não é mesmo?
Considere uma situação em que você precisa processar dados de um arquivo, mas não
tem certeza se ele existe ou se o caminho está correto. Imagine que você está desenvolvendo
um aplicativo que gera relatórios por meio de dados armazenados em arquivos. Se o aplicativo
tentar acessar um arquivo que não existe ou estiver em um caminho incorreto, isso pode
resultar em erros que interrompem o funcionamento do seu programa. Portanto, é crucial
implementar verificações de existência de arquivos e usar caminhos adequados antes de
realizar qualquer operação de leitura ou escrita. É como tentar encontrar um tesouro sem um
mapa; as chances de sucesso não são muito altas, e a frustração pode ser imensa!
As boas práticas na manipulação de arquivos envolvem várias etapas essenciais. Pri-
meiramente, sempre verifique se o arquivo existe antes de tentar acessá-lo. Isso pode ser
feito utilizando funções específicas que confirmam a presença do arquivo no sistema. Em
seguida, utilize caminhos relativos e absolutos de forma adequada, garantindo que o seu
programa sempre saiba onde procurar os arquivos. Imagine que você está tentando enviar
uma carta, mas não tem o endereço correto; pode acabar entregando na casa errada, e o
destinatário pode ficar confuso! Além disso, é importante usar gerenciadores de contexto
quando abrir arquivos, pois eles garantem que o arquivo será fechado corretamente após a
operação, evitando a perda de dados e liberando recursos do sistema. Por fim, considere
usar tratamento de exceções para capturar e lidar com erros que possam ocorrer durante a
manipulação de arquivos, proporcionando uma experiência mais robusta e confiável para o
usuário.
Essas práticas não apenas ajudam a manter a integridade e a segurança dos dados,
mas também melhoram a experiência do usuário ao utilizar seu programa. Pense nelas
CAPÍTULO 7. A ARTE DE ERRAR COM ELEGÂNCIA!
151
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 153

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
como as regras de etiqueta em um jantar: seguir essas diretrizes pode evitar uma série de
constrangimentos e garantir que todos se divirtam! Portanto, da próxima vez que você for
manipular arquivos, lembre-se dessas dicas valiosas e transforme sua experiência em algo
tão agradável quanto um banquete bem servido.
7.14
ARQUIVOS E EXCEÇÕES NA IA
A manipulação eficiente de arquivos e o tratamento adequado de exceções são fundamen-
tais no desenvolvimento de soluções de Inteligência Artificial (IA). Durante as fases de criação
e treinamento de modelos de IA, a leitura, escrita e atualização de dados em arquivos desem-
penham um papel crucial. Os dados, que são a base de qualquer sistema de IA, geralmente
precisam ser manipulados em grandes volumes, seja em formato de texto, binário ou mesmo
como imagens e vídeos. A habilidade de lidar com esses arquivos de forma organizada e
eficiente permite que o pipeline de dados funcione sem interrupções, assegurando que o
treinamento do modelo ocorra de maneira fluida e sem gargalos.
Ao longo do treinamento de modelos de Machine Learning (ML) e Deep Learning, grandes
conjuntos de dados precisam ser lidos e processados em múltiplos ciclos. Cada leitura
precisa ser precisa e eficiente para que o modelo aprenda adequadamente. Nesse contexto,
o uso correto de métodos de leitura de arquivos, como read(), readline() e readlines(),
além da manipulação de arquivos binários para processar imagens e vídeos, é vital para a
construção de um modelo robusto. Sem esses métodos, a manipulação de dados se torna
ineficaz, prejudicando tanto a performance do modelo quanto o tempo de treinamento.
Além disso, o tratamento de exceções e o uso de estruturas como try, except, finally
e else são essenciais para garantir que erros inesperados durante o processamento de
dados sejam gerenciados adequadamente. Durante o treinamento de uma IA, podem ocorrer
problemas como arquivos corrompidos, dados inconsistentes ou falhas de conexão com bancos
de dados. A implementação correta do tratamento de exceções permite que o processo de
treinamento continue ou seja interrompido de forma controlada, evitando falhas catastróficas
que poderiam comprometer dias ou até semanas de processamento.
Outro ponto crucial é a organização do pipeline de dados. O armazenamento de dados de
entrada e saída, bem como a manutenção de logs detalhados sobre o treinamento, requerem
a criação, escrita e atualização de arquivos de maneira eficiente. Utilizar o gerenciador
de contexto with é uma prática recomendada para garantir que arquivos sejam fechados
corretamente após seu uso, preservando recursos do sistema. Isso é especialmente relevante
em ambientes de grande escala, onde o treinamento de um modelo pode envolver múltiplas
leituras e gravações simultâneas, exigindo que o uso de recursos seja gerenciado com precisão
para evitar gargalos de memória e desempenho.
CAPÍTULO 7. A ARTE DE ERRAR COM ELEGÂNCIA!
152
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 154

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
Além disso, a habilidade de trabalhar com grandes volumes de dados binários, como
imagens e vídeos, é essencial em aplicações de IA que envolvem Computer Vision ou análise
de grandes datasets multimídia. O processamento de arquivos binários em blocos, como
mostrado nos exemplos, é uma técnica eficaz para otimizar o uso de memória e garantir que o
sistema possa lidar com grandes quantidades de dados sem travar ou reduzir significativamente
sua performance. Isso é fundamental para treinamentos que demandam semanas ou meses
de processamento, como o treinamento de redes neurais profundas.
Por fim, compreender como abrir, ler, escrever e fechar arquivos, além de saber como lidar
com exceções durante essas operações, permite que o desenvolvedor de IA crie sistemas
mais resilientes e escaláveis. A manipulação adequada de dados e o gerenciamento eficiente
de recursos durante o treinamento e a criação de modelos de IA não apenas aumentam a
eficiência do processo, mas também reduzem a probabilidade de erros que poderiam custar
tempo e recursos valiosos. Essa base sólida na manipulação de arquivos e tratamento de
exceções é o alicerce para qualquer projeto de IA bem-sucedido.
CAPÍTULO 7. A ARTE DE ERRAR COM ELEGÂNCIA!
153
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 155

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
7.15
PRATICANDO E PRATICANDO
1. Escreva um programa que solicite ao usuário um número inteiro. Caso o usuário digite
algo que não seja um número inteiro, exiba uma mensagem de erro informando que a
entrada é inválida. Use um bloco try/except para capturar a exceção.
2. Crie um programa que peça ao usuário dois números e realize a divisão do primeiro pelo
segundo. Caso o segundo número seja zero, o programa deve informar que a divisão
por zero não é permitida e solicitar um novo valor.
3. Desenvolva um programa que tente abrir um arquivo chamado "dados.txt" para leitura.
Se o arquivo não existir, capture a exceção e exiba uma mensagem informando que o
arquivo não foi encontrado.
4. Crie um programa que solicite ao usuário uma lista de compras e grave os itens em um
arquivo chamado "lista_de_compras.txt", um item por linha.
5. Escreva um programa que leia o conteúdo de um arquivo chamado "notas.txt" e
exiba o texto na tela. Use o gerenciador de contexto with para garantir o fechamento do
arquivo após a leitura.
6. Modifique o exercício anterior para adicionar uma nova nota ao final do arquivo "notas.txt"
sem sobrescrever o conteúdo existente. Utilize o modo de abertura apropriado para
anexar o texto.
7. Crie um programa que leia um arquivo chamado "clientes.csv" linha por linha e exiba
o conteúdo na tela. O programa deve ignorar qualquer linha em branco que possa existir
no arquivo.
8. Escreva um programa que solicite ao usuário um número de CPF. Se o CPF não tiver
exatamente 11 dígitos, o programa deve lançar uma exceção personalizada chamada
CPFInvalido. Capture a exceção e exiba uma mensagem informando o erro.
9. Desenvolva um programa que leia um arquivo binário (como uma imagem) e o copie
para outro arquivo. Implemente o código de forma que a leitura e escrita sejam feitas em
blocos de 1024 bytes, garantindo que grandes arquivos possam ser processados sem
consumir muita memória.
10. Implemente um programa que simule um sistema de log de eventos. Cada vez que um
evento ocorrer, o programa deve registrá-lo em um arquivo chamado "log.txt" com
um carimbo de data e hora. O programa deve capturar e tratar exceções que possam
ocorrer durante a escrita no arquivo, como erros de permissão. Além disso, ele deve
periodicamente (a cada 10 eventos, por exemplo) arquivar o log atual e criar um novo
arquivo de log, renomeando o antigo com a data de arquivamento.
CAPÍTULO 7. A ARTE DE ERRAR COM ELEGÂNCIA!
154
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 156

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
CAPÍTULO 8
Python e o Mundo em Objetos
Como sempre, uma analogia para ilustrar uma ideia. Imagine que você está em uma loja
de brinquedos, cercado por bonecos, carrinhos e jogos. Cada um desses brinquedos tem suas
próprias características e funcionalidades. Agora, pense na forma como organizamos esses
brinquedos: podemos agrupá-los por tipo, cor ou tamanho. A Orientação a Objetos (OO) em
Python funciona de maneira semelhante, permitindo que os programadores criem estruturas
que refletem o mundo real, agrupando dados e comportamentos em entidades chamadas
classes. Por meio dessa abordagem, a programação se torna mais intuitiva e próxima da
forma como percebemos e interagimos com o mundo ao nosso redor, facilitando a manutenção
e a escalabilidade do código.
Considere um cenário em que você precisa desenvolver um sistema para gerenciar uma
biblioteca. Nesse sistema, cada livro possui atributos como título, autor e ano de publica-
ção, e métodos que permitem que os usuários realizem ações como emprestar ou devolver
livros. Sem a orientação a objetos, seria difícil organizar e gerenciar essas informações de
maneira eficaz. A OO permite que você crie uma classe Livro que contenha todos esses
atributos e métodos, simplificando a construção do sistema e melhorando a clareza do código.
Essa estrutura não só ajuda na organização dos dados, mas também na implementação de
funcionalidades complexas, como busca e filtragem de livros.
A Orientação a Objetos é baseada em conceitos fundamentais que incluem classes,
objetos, atributos e métodos. Uma classe pode ser vista como um molde ou uma planta que
define as características (atributos) e comportamentos (métodos) que os objetos daquela
classe terão. Um objeto, por sua vez, é uma instância de uma classe, representando um
elemento específico do mundo real. Atributos são as propriedades que descrevem o estado
do objeto, enquanto métodos são as ações que o objeto pode realizar. Compreender esses
conceitos é essencial para tirar o máximo proveito da programação orientada a objetos em
Python, pois possibilita a criação de sistemas mais organizados e eficientes.
CAPÍTULO 8. PYTHON E O MUNDO EM OBJETOS
155
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 157

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
Ao aprofundar-se na Orientação a Objetos, você perceberá que essa abordagem não
apenas estrutura o código de maneira lógica, mas também promove um ambiente de progra-
mação que se alinha com o raciocínio humano. Visualize na sua mente como a definição de
classes e a criação de objetos permitem que você manipule e interaja com dados complexos
de forma mais intuitiva. Isso é especialmente valioso em projetos maiores, onde a clareza
e a organização são cruciais para o sucesso. Assim, a OO em Python não é apenas uma
técnica de programação, mas uma filosofia que transforma a maneira como pensamos sobre o
desenvolvimento de software.
8.1
DEFININDO CLASSES E CRIANDO OBJETOS
Imagine que você é o arquiteto de uma cidade, e cada edifício que você projeta é como
uma classe em Python. Assim como um arquiteto define as características e funções de um
prédio (como o número de andares, janelas e portas), em Python, usamos classes para definir
os atributos e comportamentos dos objetos. Classes fornecem uma estrutura para organizar
e manipular dados de maneira eficiente, permitindo que você crie objetos que representem
entidades do mundo real, como carros, pessoas ou até mesmo conceitos abstratos. Nesse
contexto, a capacidade de criar classes e instanciar objetos é fundamental. Vamos explorar
como você pode usar o comando class em Python para definir suas próprias classes e como
o método especial __init__ permite inicializar seus objetos com características específi-
cas. Nessa seção, você aprenderá a criar classes que representam entidades do cotidiano,
instanciando objetos que podem interagir com seu programa de maneira significativa.
Considere um cenário em que você está desenvolvendo um sistema de gerenciamento
para uma biblioteca. Você precisa modelar livros e autores, onde cada livro possui atributos
como título, autor e ano de publicação. Usando classes, você pode criar uma representação
clara e organizada desses elementos, facilitando a manipulação e consulta aos dados. Esse
exemplo não apenas destaca a utilidade das classes, mas também fornece uma base sólida
para entender a programação orientada a objetos em Python. Ao empregar a definição de
classes e a instanciação de objetos, você se torna capaz de construir estruturas de dados
complexas que refletem a realidade de forma precisa e intuitiva.
nesse primeiro exemplo, definimos uma classe chamada Livro, que possui três atributos:
titulo, autor e ano_publicacao. O método __init__ é utilizado para inicializar esses
atributos quando um novo objeto é criado. Ao instanciar livro1, passamos os valores
correspondentes para cada atributo. Essa estrutura clara nos permite representar um livro
de maneira eficaz, encapsulando todas as informações relevantes em um único objeto. A
simplicidade desse exemplo ilustra como as classes podem ser usadas para organizar dados
relacionados.
CAPÍTULO 8. PYTHON E O MUNDO EM OBJETOS
156
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 158

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
class
Livro:
def
__init__(self , titulo , autor , ano_publicacao ):
self.titulo = titulo
self.autor = autor
self. ano_publicacao = ano_publicacao
# Criando um objeto da classe
Livro
livro1 = Livro("1984", "George
Orwell", 1949)
Ao criar um novo livro, você pode facilmente acessar suas propriedades, como livro1.titulo,
e manipular essas informações conforme necessário. Essa abordagem modular facilita a
construção de programas mais complexos, onde múltiplas instâncias da classe podem ser
criadas e gerenciadas. Por exemplo, imagine que você está criando uma biblioteca digital:
cada livro representa um objeto distinto, e você pode armazená-los em uma lista, permitindo
que os usuários façam buscas, leiam descrições e acessem informações detalhadas de forma
rápida e organizada.
Avançando para o próximo exemplo, além de definir os atributos da classe Livro, adicio-
namos um método chamado descricao. Esse método fornece uma descrição formatada do
livro. Quando chamamos livro2.descricao(), obtemos uma string informativa que combina
os atributos do objeto. Isso demonstra como métodos podem ser utilizados para adicionar
comportamentos às classes, permitindo que objetos realizem ações ou forneçam informações
sobre si mesmos. A adição de métodos a uma classe é uma prática essencial em programação
orientada a objetos.
class
Livro:
def
__init__(self , titulo , autor , ano_publicacao ):
self.titulo = titulo
self.autor = autor
self. ano_publicacao = ano_publicacao
def
descricao(self):
return f"{self.titulo} foi
escrito
por {self.autor} em {self.
ano_publicacao }."
# Criando um objeto da classe
Livro
livro2 = Livro("O Senhor dos Anéis", "J.R.R. Tolkien", 1954)
print(livro2.descricao ())
A adição de métodos a uma classe melhora a organização do código e permite que os
CAPÍTULO 8. PYTHON E O MUNDO EM OBJETOS
157
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 159

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
objetos interajam de forma mais rica e dinâmica. Além disso, encapsular comportamentos
relacionados dentro da própria classe promove a reutilização de código e a legibilidade,
facilitando a manutenção do software. Assim, você pode expandir a funcionalidade de um
objeto sem comprometer sua estrutura básica, tornando seu código mais flexível e receptivo a
alterações futuras.
Por fim, nesse exemplo final, introduzimos o conceito de herança, onde a classe LivroInfantil
herda as propriedades da classe Livro. O método super().__init__() é utilizado para
chamar o construtor da classe pai, garantindo que os atributos comuns sejam inicializados
corretamente. Além disso, LivroInfantil adiciona um novo atributo, faixa_etaria, e rede-
fine o método descricao para incluir informações específicas para livros infantis. A herança
permite criar novas classes baseadas em classes existentes, promovendo a reutilização de
código e facilitando a criação de hierarquias de classes.
class
Livro:
def
__init__(self , titulo , autor , ano_publicacao ):
self.titulo = titulo
self.autor = autor
self. ano_publicacao = ano_publicacao
class
LivroInfantil(Livro):
def
__init__(self , titulo , autor , ano_publicacao , faixa_etaria):
super ().__init__(titulo , autor , ano_publicacao )
self.faixa_etaria = faixa_etaria
def
descricao(self):
return f"{self.titulo} é um livro
infantil , escrito
por {self.
autor}, destinado a crianças de {self.faixa_etaria} anos."
# Criando um objeto da classe
LivroInfantil
livro_infantil = LivroInfantil ("O Pequeno Príncipe", "Antoine de Saint
-Exupéry", 1943, "6 a 12")
print(livro_infantil.descricao ())
A herança é uma poderosa característica da programação orientada a objetos que permite
criar novas classes baseadas em classes existentes. Isso não só promove a reutilização de
código, mas também facilita a criação de hierarquias de classes, onde subclasses podem
especializar ou estender o comportamento de suas classes pai. Assim, você pode construir
sistemas mais complexos e inter-relacionados de forma organizada e eficiente, tornando seu
trabalho de programação mais intuitivo e alinhado com a estrutura do mundo real.
CAPÍTULO 8. PYTHON E O MUNDO EM OBJETOS
158
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 160

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
8.2
ATRIBUTOS DE INSTÂNCIA E CLASSE
Imagine uma escola onde cada aluno tem suas próprias características, como nome,
idade e notas, mas também existe uma regra geral que se aplica a todos os estudantes, como
o número total de alunos matriculados. Na programação orientada a objetos em Python,
essa analogia se transforma em atributos de instância e atributos de classe. Os atributos de
instância são específicos para cada objeto (ou seja, cada aluno), enquanto os atributos de
classe são compartilhados entre todas as instâncias da classe (ou seja, a escola como um
todo). Esta seção explorará as diferenças entre esses dois tipos de atributos, como e quando
utilizá-los, garantindo que você compreenda suas aplicações práticas.
Considere que você está desenvolvendo um sistema de gerenciamento escolar. Você
precisa rastrear informações sobre cada aluno, como seu nome e notas, e também precisa
saber quantos alunos estão matriculados na escola. Como você organizaria essas informações
usando atributos de instância e atributos de classe? Essa questão é essencial para garantir
que seu código seja eficiente e mantenha a integridade dos dados. Os atributos de instância
são aqueles que pertencem a uma instância específica de uma classe. Cada objeto pode ter
valores diferentes para esses atributos, permitindo que você armazene informações únicas.
Por exemplo, em uma classe Aluno, você poderia ter atributos como nome e idade. Por outro
lado, atributos de classe são compartilhados por todas as instâncias da classe. Eles são
definidos diretamente na classe e geralmente representam dados que são comuns a todos
os objetos, como o número total de alunos na escola. Para diferenciá-los, basta lembrar
que atributos de instância são acessados usando self, enquanto atributos de classe são
acessados usando o nome da classe.
CAPÍTULO 8. PYTHON E O MUNDO EM OBJETOS
159
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 161

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
No exemplo a seguir, criamos uma classe Aluno que possui atributos de instância para
nome e idade, e um atributo de classe para total_alunos.
class
Aluno:
total_alunos = 0
# atributo de classe
def
__init__(self , nome , idade):
self.nome = nome
# atributo de instância
self.idade = idade
# atributo de instância
Aluno.total_alunos += 1
# incrementa o total de alunos ao
criar uma nova instância
# Criando
instâncias da classe
Aluno
aluno1 = Aluno("João", 20)
aluno2 = Aluno("Maria", 22)
print(aluno1.nome)
# Output: João
print(Aluno.total_alunos)
# Output: 2
Nesse exemplo, ao criar novos alunos, o atributo de classe total_alunos é incrementado,
mostrando que é compartilhado entre todas as instâncias. No exemplo a seguir, vamos
adicionar um método à classe Aluno que imprime as informações do aluno e o total de alunos.
class
Aluno:
total_alunos = 0
# atributo de classe
def
__init__(self , nome , idade):
self.nome = nome
# atributo de instância
self.idade = idade
# atributo de instância
Aluno.total_alunos += 1
# atualiza
total de alunos
def info(self):
print(f"Nome: {self.nome}, Idade: {self.idade}, Total de
Alunos: {Aluno.total_alunos}")
# Criando
instâncias da classe
Aluno
aluno1 = Aluno("João", 20)
aluno2 = Aluno("Maria", 22)
aluno1.info ()
# Output: Nome: João, Idade: 20, Total de Alunos: 2
aluno2.info ()
# Output: Nome: Maria , Idade: 22, Total de Alunos: 2
Nesse exemplo, o método info utiliza tanto os atributos de instância (nome e idade)
quanto o atributo de classe (total_alunos) para fornecer uma visão geral dos alunos. Isso
ilustra como os dois tipos de atributos podem trabalhar juntos para proporcionar uma funciona-
CAPÍTULO 8. PYTHON E O MUNDO EM OBJETOS
160
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 162

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
lidade mais robusta.
8.3
MÉTODOS DE INSTÂNCIA, CLASSE E ESTÁTICOS
Imagine que você está construindo uma biblioteca. Cada livro tem suas próprias caracte-
rísticas, como título, autor e ano de publicação. Para gerenciar esses livros, você precisa de
uma estrutura que permita que cada livro tenha suas próprias informações, mas, ao mesmo
tempo, você deseja ter funcionalidades que se apliquem a todos os livros, como contar quantos
livros foram adicionados à biblioteca. É aqui que os métodos de instância, classe e estáticos
entram em cena. nesse capítulo, vamos explorar como cada um desses métodos funciona em
Python, como utilizá-los e entender suas diferenças por meio de exemplos práticos.
Vamos imaginar um cenário onde você está desenvolvendo um sistema de gerenciamento
de uma biblioteca. Você precisa de uma classe Livro que não apenas armazene informações
sobre cada livro individualmente, mas também forneça métodos para calcular o total de
livros na biblioteca e permitir que os usuários acessem algumas informações gerais, como o
gênero dos livros disponíveis. Para resolver este problema, utilizaremos métodos de instância
para gerenciar dados específicos de cada livro, métodos de classe para manipular dados
que afetam a classe como um todo e métodos estáticos para realizar operações que não
dependem diretamente de nenhuma instância ou da classe em si.
Os métodos de instância operam em instâncias individuais de uma classe, permitindo
o acesso e a modificação dos atributos daquela instância. Por outro lado, os métodos de
classe, decorados com @classmethod, operam na classe como um todo e podem acessar e
modificar atributos de classe que são compartilhados por todas as instâncias. Por último, os
métodos estáticos, decorados com @staticmethod, são utilizados para definir funções que
não precisam acessar nem a instância nem a classe, tornando-os ideais para funcionalida-
des auxiliares. Esses conceitos são fundamentais para a estruturação do código de forma
organizada e eficiente.
class
Livro:
def
__init__(self , titulo , autor):
self.titulo = titulo
self.autor = autor
def
descricao(self):
return f"{self.titulo} por {self.autor}"
livro1 = Livro("1984", "George
Orwell")
print(livro1.descricao ())
# Saída: 1984 por George
Orwell
CAPÍTULO 8. PYTHON E O MUNDO EM OBJETOS
161
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 163

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
Nesse código, o método descricao é um método de instância que retorna uma descrição do
livro, utilizando os atributos específicos do objeto livro1. Isso demonstra como os métodos
de instância podem manipular e retornar informações individuais.
class
Biblioteca:
total_livros = 0
def
__init__(self):
Biblioteca.total_livros += 1
@classmethod
def
total_de_livros (cls):
return cls.total_livros
livro1 = Biblioteca ()
livro2 = Biblioteca ()
print(Biblioteca. total_de_livros ())
# Saída: 2
Aqui, o método total_de_livros é um método de classe que retorna o total de livros na
biblioteca. Ele acessa o atributo de classe total_livros, que é compartilhado entre todas
as instâncias da classe Biblioteca, mostrando como métodos de classe podem manipular
dados comuns a todas as instâncias.
class
Biblioteca:
@staticmethod
def
genero_comum ():
return "Ficção"
print(Biblioteca.genero_comum ())
# Saída: Ficção
Nesse exemplo, o método genero_comum é um método estático que retorna uma string
sem depender de atributos de instância ou de classe. Isso ilustra como métodos estáticos
podem ser utilizados para operações que não requerem acesso a dados da classe ou de
suas instâncias, oferecendo uma maneira de encapsular funcionalidades auxiliares dentro da
classe.
Com esses exemplos, os conceitos de métodos de instância, classe e estáticos se tornam
mais claros, permitindo que o leitor compreenda suas aplicações práticas e como utilizá-los
efetivamente em seus projetos de programação.
CAPÍTULO 8. PYTHON E O MUNDO EM OBJETOS
162
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 164

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
8.4
ENCAPSULAMENTO
Imagine que você é o gerente de uma fábrica de chocolates. Para proteger suas receitas
secretas de concorrentes e garantir a qualidade dos produtos, você decide que apenas os
chefs da cozinha podem acessar e modificar esses ingredientes. Essa abordagem de proteção
e controle sobre o acesso às informações é o que chamamos de encapsulamento, um conceito
fundamental na programação orientada a objetos. Em Python, o encapsulamento permite que
os desenvolvedores escondam os detalhes internos de suas classes, expondo apenas o que é
necessário para o funcionamento externo, assim como você controla o acesso às receitas na
sua fábrica.
Considere um cenário em que desenvolvemos um sistema de gerenciamento de uma
conta bancária. Os dados financeiros de um cliente, como saldo, devem ser protegidos contra
acessos indevidos. Se esses dados forem expostos diretamente, um usuário mal-intencionado
poderia alterá-los facilmente. Portanto, para garantir a integridade dos dados, é fundamental
utilizar o encapsulamento para esconder atributos sensíveis e fornecer métodos controlados
para acessá-los ou modificá-los. Com isso, garantimos que apenas operações válidas sejam
realizadas, mantendo a segurança e a confiabilidade do sistema.
O encapsulamento em Python é implementado por meio de atributos privados e protegi-
dos, além de métodos getters e setters. Atributos privados, que são definidos com um prefixo
de dois sublinhas (__), não podem ser acessados diretamente fora da classe. Já os atributos
protegidos, que têm um único sublinhado (_), indicam que não devem ser acessados direta-
mente fora da classe, mas ainda são acessíveis. Para manipular esses atributos, utilizamos
métodos getters e setters, que fornecem uma interface controlada para leitura e modificação
dos dados. Ao usar esses métodos, garantimos que qualquer lógica de validação necessária
seja aplicada antes que os dados sejam alterados.
CAPÍTULO 8. PYTHON E O MUNDO EM OBJETOS
163
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 165

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
class
ContaBancaria:
def
__init__(self , saldo_inicial ):
self.__saldo = saldo_inicial
# Atributo
privado
def
depositar(self , valor):
if valor > 0:
self.__saldo += valor
print(f’Deposito de {valor} realizado
com
sucesso.’)
else:
print(’Valor de deposito
invalido.’)
def
obter_saldo(self):
return
self.__saldo
# Método
getter
# Uso da classe
conta = ContaBancaria (1000)
conta.depositar (500)
print(f’Saldo
atual: {conta.obter_saldo ()}’)
Nesse exemplo, a classe ‘ContaBancaria‘ encapsula o atributo ‘__saldo‘, que não pode
ser acessado diretamente fora da classe. O método ‘depositar‘ garante que apenas valores
válidos possam ser adicionados ao saldo, enquanto o método ‘obter_saldo‘ fornece acesso
controlado ao saldo atual.
class
Produto:
def
__init__(self , preco):
self._preco = preco
# Atributo
protegido
@property
def preco(self):
return
self._preco
# Método
getter
@preco.setter
def preco(self , novo_preco):
if novo_preco
>= 0:
self._preco = novo_preco
# Método
setter
else:
print(’Preco nao pode ser
negativo.’)
# Uso da classe
produto = Produto (50)
print(f’Preco
atual: {produto.preco}’)
produto.preco = 75
CAPÍTULO 8. PYTHON E O MUNDO EM OBJETOS
164
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 166

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
print(f’Novo
preco: {produto.preco}’)
produto.preco =
-10
# Tentativa de definir
preco
negativo
Nesse exemplo, a classe ‘Produto‘ utiliza um atributo protegido ‘_preco‘ e métodos getters
e setters para controlar o acesso a esse atributo. O método setter verifica se o novo preço é
válido antes de fazer a alteração, garantindo que o preço nunca seja negativo. Isso demonstra
como o encapsulamento não apenas oculta os detalhes da implementação, mas também
protege os dados de manipulações indesejadas.
8.5
HERANÇA
Imagine que você é um arquiteto responsável por projetar diferentes tipos de edifícios.
Em vez de começar do zero para cada novo projeto, você cria um modelo base que pode ser
reutilizado e adaptado para atender a diferentes necessidades. Da mesma forma, a herança
em Python permite que você crie uma classe base com funcionalidades comuns, que podem
ser estendidas e especializadas em classes derivadas. Essa abordagem não apenas reduz a
duplicação de código, mas também facilita a manutenção e a evolução do software, tornando-o
mais robusto e flexível. Considere um cenário em que você desenvolve um sistema para
gerenciar diferentes tipos de veículos. Cada veículo possui características comuns, como
velocidade e capacidade de combustível, mas também apresenta características específicas,
como o número de portas para um carro ou a capacidade de carga para um caminhão. A
herança permite que você crie uma classe base chamada Veiculo que contém os atributos
e métodos comuns e, em seguida, derive classes específicas como Carro e Caminhao, que
herdam as propriedades da classe base, ao mesmo tempo que adicionam suas funcionalidades
exclusivas.
A classe base é a classe que fornece atributos e métodos comuns, enquanto a classe
derivada é a classe que herda essas propriedades e pode ter suas próprias características. A
função super() é utilizada para chamar métodos da classe base a partir da classe derivada,
permitindo que você reutilize o código da classe base de forma eficiente. Nesse exemplo,
criamos uma classe base chamada Veiculo e uma classe derivada chamada Carro. A classe
Veiculo contém atributos comuns, enquanto Carro adiciona seu próprio comportamento.
CAPÍTULO 8. PYTHON E O MUNDO EM OBJETOS
165
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 167

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
class
Veiculo:
def
__init__(self , tipo , velocidade):
self.tipo = tipo
self.velocidade = velocidade
def
acelerar(self):
return f"O {self.tipo} esta
acelerando a {self.velocidade} km/
h."
class
Carro(Veiculo):
def
__init__(self , modelo , velocidade):
super ().__init__("Carro", velocidade)
self.modelo = modelo
def info(self):
return f"{self.modelo} e um {self.tipo} que vai a {self.
velocidade} km/h."
carro = Carro("Fusca", 100)
print(carro.acelerar ())
print(carro.info ())
Nesse exemplo, a classe Carro herda de Veiculo, utilizando o método super() para
inicializar propriedades comuns, e adiciona seu próprio método info() que exibe informações
específicas do carro. Agora, após esse exemplo, vamos expandir a herança para incluir outra
classe derivada chamada Caminhao, que também herda de Veiculo, mas adiciona um novo
atributo e método.
class
Caminhao(Veiculo):
def
__init__(self , carga_maxima , velocidade):
super ().__init__("Caminhao", velocidade)
self.carga_maxima = carga_maxima
def
carregar(self , carga):
if carga
<= self.carga_maxima :
return f"Carga de {carga} toneladas
carregada."
else:
return f"Excesso de carga! Capacidade
maxima e {self.
carga_maxima} toneladas."
caminhao = Caminhao (10, 80)
print(caminhao.acelerar ())
print(caminhao.carregar (8))
CAPÍTULO 8. PYTHON E O MUNDO EM OBJETOS
166
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 168

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
print(caminhao.carregar (12))
Aqui, a classe Caminhao herda de Veiculo e utiliza super() para inicializar seus atributos.
Além disso, implementa um método carregar() que verifica se a carga está dentro da capa-
cidade máxima, mostrando como a herança pode ser usada para estender funcionalidades de
maneira prática. A herança em Python é uma ferramenta poderosa que permite a reutilização
de código e a criação de hierarquias de classes. Por meio dos exemplos apresentados, é
possível ver como a criação de classes base e derivadas, juntamente com o uso do super(),
proporciona uma estrutura clara e eficiente para o desenvolvimento de software. O enten-
dimento desses conceitos é fundamental para qualquer programador que deseja escrever
código limpo e reutilizável.
8.6
POLIMORFISMO
Imagine que você está em um parque, onde diferentes animais estão reunidos. Cada um
deles pode emitir sons, mas o som que fazem varia de acordo com a espécie. O cachorro
late, o gato mia e a vaca muge. Apesar de estarem todos fazendo barulho, a forma como se
expressam é distinta. Esse é o conceito de polimorfismo: a capacidade de diferentes objetos
responderem a uma mesma mensagem de maneiras diferentes. Em Python, isso se traduz
na habilidade de classes diferentes responderem a métodos com o mesmo nome, mas que
podem ter implementações distintas. O polimorfismo não apenas promove a flexibilidade no
código, mas também o torna mais fácil de entender e manter. Pense no polimorfismo como
uma orquestra, onde cada músico toca seu instrumento de forma única, mas todos estão
alinhados para tocar a mesma melodia.
Considere um sistema de gerenciamento de pagamentos em uma loja online. Você pode
ter diferentes métodos de pagamento, como cartão de crédito, PayPal e transferência bancária,
cada um com sua própria lógica de processamento. Utilizando polimorfismo, você pode
definir uma interface comum para todos os métodos de pagamento, permitindo que cada um
implemente seu próprio comportamento. Com isso, ao chamar o método de processamento
de pagamento, não importa qual método você use, o sistema saberá como lidar com ele de
forma adequada, simplificando a implementação e a manutenção do código. Visualize na sua
mente um caixa de supermercado, onde o atendente pode processar pagamentos de diversas
formas, mas o cliente apenas entrega o cartão ou o dinheiro, sem se preocupar com o que
acontece em seguida.
CAPÍTULO 8. PYTHON E O MUNDO EM OBJETOS
167
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 169

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
class
Forma:
def area(self):
pass
class
Circulo(Forma):
def
__init__(self , raio):
self.raio = raio
def area(self):
return
3.14 * (self.raio ** 2)
class
Quadrado(Forma):
def
__init__(self , lado):
self.lado = lado
def area(self):
return
self.lado ** 2
# Uso do polimorfismo
formas = [Circulo (5), Quadrado (4)]
for forma in formas:
print(f’A area e: {forma.area ()}’)
Nesse código, temos uma classe base chamada ‘Forma‘, que define um método ‘area()‘,
mas não implementa nada.
As subclasses ‘Circulo‘ e ‘Quadrado‘ herdam de ‘Forma‘ e
implementam seu próprio método ‘area()‘. Ao iterar sobre uma lista de formas, chamamos
‘forma.area()‘ e, dependendo do tipo de forma, o método correto é invocado. Assim, ambos os
objetos ‘Circulo‘ e ‘Quadrado‘ são tratados como instâncias da classe ‘Forma‘, mas cada um
possui uma implementação única de como calcular sua área, demonstrando a essência do
polimorfismo.
CAPÍTULO 8. PYTHON E O MUNDO EM OBJETOS
168
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 170

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
class
Pagamento:
def
processar(self):
pass
class
CartaoCredito(Pagamento):
def
processar(self):
return "Pagamento
processado
via Cartao de Credito."
class
PayPal(Pagamento):
def
processar(self):
return "Pagamento
processado
via PayPal."
# Uso do polimorfismo
pagamentos = [CartaoCredito (), PayPal ()]
for
pagamento in pagamentos:
print(pagamento.processar ())
Nesse exemplo, temos uma classe base ‘Pagamento‘ que define um método ‘proces-
sar()‘. As classes ‘CartaoCredito‘ e ‘PayPal‘ herdam de ‘Pagamento‘ e implementam suas
próprias versões do método ‘processar()‘. Quando iteramos sobre uma lista de pagamentos
e chamamos ‘pagamento.processar()‘, obtemos a resposta apropriada para cada tipo de
pagamento, mostrando mais uma vez como o polimorfismo permite que diferentes classes res-
pondam a métodos comuns de maneiras específicas. Isso é fundamental para a flexibilidade e
manutenção do código em projetos mais complexos.
8.7
COMPOSIÇÃO
Imagine que você está construindo uma casa. A estrutura da casa é feita de paredes,
janelas e portas, mas também precisa de móveis para torná-la habitável. Nesse contexto, os
móveis representam objetos que são incorporados a uma estrutura maior, que é a casa. Da
mesma forma, na programação orientada a objetos, a composição permite que um objeto
seja construído a partir de outros objetos, formando uma estrutura mais complexa e rica
em funcionalidades. A composição é frequentemente preferida em relação à herança, pois
promove um design mais flexível e modular, permitindo que os desenvolvedores criem sistemas
que podem ser facilmente adaptados e reutilizados.
Considere um cenário em que você está desenvolvendo um sistema para gerenciar um
zoológico. Você precisa representar diferentes tipos de animais, e cada animal possui ca-
racterísticas específicas, como nome, idade e comportamento. Além disso, muitos animais
CAPÍTULO 8. PYTHON E O MUNDO EM OBJETOS
169
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 171

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
compartilham características comuns, como a alimentação e o habitat, que podem ser re-
presentados por objetos separados. A composição permite que você crie um objeto ‘Animal‘
que contém outros objetos como ‘Alimentacao‘ e ‘Habitat‘. Isso não apenas facilita a manu-
tenção do código, mas também torna mais simples a adição de novos tipos de animais com
características diferentes, sem a necessidade de modificar toda a estrutura existente.
Abaixo um exemplo prático que ilustra a composição em Python:
class
Alimentacao:
def
__init__(self , tipo):
self.tipo = tipo
def
mostrar_alimentacao (self):
return f"Alimentacao: {self.tipo}"
class
Habitat:
def
__init__(self , tipo):
self.tipo = tipo
def
mostrar_habitat (self):
return f"Habitat: {self.tipo}"
class
Animal:
def
__init__(self , nome , idade , alimentacao , habitat):
self.nome = nome
self.idade = idade
self.alimentacao = alimentacao
self.habitat = habitat
def
mostrar_detalhes (self):
return (f"Nome: {self.nome}, Idade: {self.idade}, "
f"{self.alimentacao. mostrar_alimentacao ()}, "
f"{self.habitat. mostrar_habitat ()}")
# Criando
objetos de Alimentacao e Habitat
alimentacao_leao = Alimentacao("Carnivoro")
habitat_leao = Habitat("Savana")
# Criando um objeto de Animal
usando
composicao
leao = Animal("Leao", 5, alimentacao_leao , habitat_leao)
# Exibindo os detalhes do leao
print(leao. mostrar_detalhes ())
Nesse código, temos três classes: ‘Alimentacao‘, ‘Habitat‘, e ‘Animal‘. A classe ‘Animal‘
CAPÍTULO 8. PYTHON E O MUNDO EM OBJETOS
170
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 172

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
usa composição para incluir objetos de ‘Alimentacao‘ e ‘Habitat‘, permitindo que um animal
tenha uma alimentação e um habitat específicos. O método ‘mostrar_detalhes‘ combina as
informações de cada objeto, demonstrando como a composição pode criar uma representação
rica e coesa de uma entidade complexa. Isso ilustra a flexibilidade da composição, pois
podemos facilmente adicionar novos tipos de alimentação ou habitat sem alterar a estrutura
da classe ‘Animal‘.
8.8
INTERFACES E CLASSES ABSTRATAS
Imagine que você está em uma fábrica de automóveis, onde diferentes tipos de veículos
são produzidos. Cada carro, caminhão e motocicleta possui características específicas, mas
todos seguem um padrão básico: cada um deve ter um motor, rodas e um volante. Assim
como na fabricação de veículos, em programação, precisamos de um padrão que defina
contratos que as classes devem seguir. Esse é o papel das interfaces e classes abstratas em
Python. Elas fornecem uma estrutura que permite que diferentes classes compartilhem um
comportamento comum, enquanto ainda mantêm a flexibilidade para suas implementações
específicas. Este conceito não apenas organiza o código, mas também facilita a manutenção
e a escalabilidade do software.
Considere um sistema de gerenciamento de pagamentos que deve lidar com diferentes
métodos de pagamento, como cartões de crédito, PayPal e criptomoedas. Cada método
de pagamento possui sua própria lógica e requisitos, mas todos devem seguir um padrão
que garanta que o sistema possa processar pagamentos de forma consistente. Aqui, as
classes abstratas e interfaces podem ser utilizadas para definir um contrato que todos os
métodos de pagamento devem seguir, permitindo que novas opções de pagamento sejam
adicionadas facilmente no futuro, sem a necessidade de alterar a lógica existente. Classes
abstratas são uma forma de definir um modelo base para outras classes. Elas não podem ser
instanciadas diretamente e podem conter métodos abstratos que devem ser implementados
nas subclasses. Interfaces, embora não sejam um conceito nativo em Python como em
outras linguagens, podem ser simuladas por meio de classes abstratas, onde métodos não
implementados servem como uma interface. A biblioteca abc de Python permite a criação
de classes abstratas e métodos abstratos de forma simples e eficiente. Ao utilizar esses
recursos, os desenvolvedores podem garantir que suas subclasses implementem os métodos
necessários, promovendo um design de software mais robusto e coeso.
CAPÍTULO 8. PYTHON E O MUNDO EM OBJETOS
171
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 173

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
from abc import ABC , abstractmethod
class
Pagamento(ABC):
@abstractmethod
def
processar_pagamento (self , valor):
pass
class
CartaoCredito(Pagamento):
def
processar_pagamento (self , valor):
print(f’Processando
pagamento de R${valor} por meio de Cartao
de Credito.’)
class
PayPal(Pagamento):
def
processar_pagamento (self , valor):
print(f’Processando
pagamento de R${valor} por meio do PayPal.
’)
# Exemplo de uso
pagamento_cartao = CartaoCredito ()
pagamento_cartao . processar_pagamento (100)
pagamento_paypal = PayPal ()
pagamento_paypal . processar_pagamento (150)
Nesse exemplo, a classe Pagamento é uma classe abstrata que define um método abstrato
chamado processar_pagamento. As classes CartaoCredito e PayPal implementam esse
método, cada uma de forma adequada ao seu tipo de pagamento. Isso garante que qualquer
nova forma de pagamento que seja adicionada siga o mesmo contrato.
CAPÍTULO 8. PYTHON E O MUNDO EM OBJETOS
172
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 174

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
from abc import ABC , abstractmethod
class
Animal(ABC):
@abstractmethod
def
fazer_som(self):
pass
class
Cachorro(Animal):
def
fazer_som(self):
return ’Woof!’
class
Gato(Animal):
def
fazer_som(self):
return ’Meow!’
# Exemplo de uso
def
emitir_som(animal: Animal):
print(animal.fazer_som ())
cachorro = Cachorro ()
gato = Gato ()
emitir_som(cachorro)
emitir_som(gato)
Nesse segundo exemplo, a classe Animal atua como uma interface que define o método
fazer_som. As classes Cachorro e Gato implementam esse método com suas respectivas
vocalizações. A função emitir_som aceita qualquer objeto que implemente a interface Animal,
permitindo que o código seja facilmente extensível para novos tipos de animais sem alterar
a lógica existente. Com esses exemplos, fica claro como as classes abstratas e interfaces
podem ser utilizadas para definir contratos e estruturas em Python, promovendo um design de
código mais limpo e eficiente.
8.9
BOAS PRÁTICAS NA ORIENTAÇÃO A OBJETOS
Imagine que você está construindo uma casa. Cada cômodo deve ser projetado com
uma função específica e deve se integrar harmoniosamente ao restante da estrutura. Da
mesma forma, a programação orientada a objetos (POO) permite que os desenvolvedores
criem software modular e organizado, onde cada classe e objeto desempenha um papel bem
CAPÍTULO 8. PYTHON E O MUNDO EM OBJETOS
173
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 175

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
definido. As boas práticas na POO são como as regras de arquitetura que garantem que
sua "casa"de código seja não apenas funcional, mas também fácil de entender e manter.
Assim como um arquiteto utiliza princípios fundamentais para criar uma construção durável,
programadores devem adotar boas práticas para garantir que seu código seja limpo e eficiente.
Um problema comum enfrentado por desenvolvedores é a dificuldade de manter e escalar
sistemas à medida que eles crescem. À medida que novos recursos são adicionados, o
código pode se tornar emaranhado, dificultando a leitura e a modificação. Isso pode resultar
em bugs, aumento de tempo de desenvolvimento e frustração para a equipe. Para evitar
esses problemas, é essencial aplicar princípios de POO, como encapsulamento, herança e
polimorfismo, juntamente com os princípios SOLID, que orientam a criação de código que
é tanto flexível quanto robusto. Ao adotar essas práticas, você poderá não apenas resolver
problemas atuais, mas também se preparar para futuras expansões e manutenções.
Entre os pontos-chave das boas práticas na POO, destacam-se os princípios SOLID. O
princípio da Responsabilidade Única ensina que uma classe deve ter apenas uma razão para
mudar, promovendo a coesão. O Princípio do Aberto/Fechado sugere que as classes devem
ser abertas para extensão, mas fechadas para modificação, o que facilita a adição de novos
comportamentos sem interferir nas funcionalidades existentes. Além disso, a utilização de
classes abstratas e interfaces permite definir contratos claros para as classes que implementam
essas abstrações, garantindo que o código seja interoperável e menos propenso a erros. Esses
fundamentos são essenciais para criar um código que não apenas funcione, mas que também
seja de fácil manutenção e evolução.
8.10
ORIENTAÇÃO A OBJETOS NA INTELIGÊNCIA ARTIFICIAL
A Programação Orientada a Objetos (POO) desempenha um papel essencial no desenvol-
vimento de soluções escaláveis e organizadas em Inteligência Artificial (IA). A POO estrutura
o código em torno de objetos que encapsulam dados e comportamentos, facilitando a criação
de sistemas complexos, modulares e reutilizáveis, o que é fundamental para o desenvolvi-
mento de modelos de machine learning e deep learning. Esse paradigma permite organizar o
código em classes e objetos que representam diferentes componentes de um sistema de IA,
como modelos, camadas de redes neurais, funções de custo e otimização, entre outros. Ao
encapsular dados e operações dentro de objetos, o desenvolvimento se torna mais flexível e
modular.
Um dos grandes benefícios da POO no contexto da IA é a modularidade e a reutilização
de código. Bibliotecas amplamente usadas, como TensorFlow e PyTorch, são desenvolvidas
com base em princípios da POO. No PyTorch, por exemplo, as redes neurais são criadas
como classes que herdam de torch.nn.Module, permitindo que cada camada da rede seja
CAPÍTULO 8. PYTHON E O MUNDO EM OBJETOS
174
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 176

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
representada como um objeto separado. Essa abordagem torna possível reutilizar essas
classes em diferentes partes de um projeto, facilitando a manutenção e a extensão de modelos,
sem a necessidade de reescrever código.
A herança, um dos pilares da POO, também é amplamente aplicada nas bibliotecas de
machine learning. Modelos genéricos, como algoritmos de regressão ou redes neurais básicas,
podem ser representados como classes base, enquanto modelos mais específicos podem
herdar suas funcionalidades. Por exemplo, uma classe genérica para redes neurais pode
ser estendida para criar variações como redes convolucionais ou recorrentes, utilizando a
mesma estrutura de código. Isso simplifica o desenvolvimento de novos modelos e favorece a
padronização de projetos de IA.
Além disso, o polimorfismo permite que diferentes classes de modelos implementem
métodos com o mesmo nome, mas com comportamentos distintos. Isso é particularmente
útil quando se trabalha com diferentes tipos de algoritmos de aprendizado, onde métodos
como fit ou predict podem ser implementados de maneira diferente em cada classe. O
polimorfismo facilita a integração de múltiplos modelos em um único projeto, mantendo a
interface consistente e garantindo que o código permaneça flexível e extensível.
Outro conceito importante da POO aplicado à IA é o encapsulamento. Ele protege os
dados e a lógica interna das classes, permitindo que interações externas ocorram apenas por
meio de métodos definidos. Isso garante que a complexidade do código, como a manipulação
de pesos de redes neurais ou o cálculo de gradientes, seja escondida do usuário, tornando a
implementação mais robusta e segura. O encapsulamento é fundamental na construção de
modelos de deep learning, onde a complexidade aumenta rapidamente e é necessário isolar
cada componente para facilitar testes e depurações.
A escalabilidade também é um benefício direto da POO em IA. Projetos de machine
learning e deep learning tendem a crescer em complexidade e volume de dados à medida
que os sistemas evoluem. Com a POO, é possível estruturar o código de maneira a facilitar o
crescimento do projeto, seja pela adição de novos modelos, camadas ou métodos de otimi-
zação. Essa organização permite que grandes sistemas de IA sejam mantidos e atualizados
com mais facilidade, garantindo que o desenvolvimento continue de maneira eficiente, mesmo
à medida que os desafios se tornam mais complexos.
CAPÍTULO 8. PYTHON E O MUNDO EM OBJETOS
175
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


## Page 177

PYTHON - A LÍNGUA DA INTELIGÊNCIA ARTIFICIAL
8.11
EXERCÍCIOS
1. Crie uma classe Pessoa que tenha os atributos nome e idade. Implemente um método
exibir_informacoes() que exiba o nome e a idade da pessoa.
2. Implemente uma classe Retangulo com atributos largura e altura. Crie um método
calcular_area() que retorna a área do retângulo.
3. Crie uma classe Carro com os atributos marca, modelo e ano. Implemente um método
exibir_descricao() que exibe uma frase descrevendo o carro.
4. Escreva uma classe ContaBancaria com os atributos titular e saldo. Adicione um
método depositar(valor) para adicionar dinheiro à conta e outro método sacar(valor)
para retirar dinheiro, garantindo que o saldo não fique negativo.
5. Crie uma classe Livro que tenha os atributos titulo, autor e numero_de_paginas.
Adicione um método resumo() que exiba uma breve descrição do livro.
6. Implemente uma classe Aluno com os atributos nome e nota. Crie um método aprovado()
que retorne True se a nota for maior ou igual a 7, e False caso contrário.
7. Crie uma classe Funcionario com os atributos nome, salario e cargo. Adicione um
método promover(novo_cargo) que atualiza o cargo do funcionário e aumenta o salário
em 20%.
8. Implemente uma classe Loja com o atributo estoque, que é um dicionário com os
nomes dos produtos como chaves e as quantidades como valores. Adicione um método
adicionar_produto(produto, quantidade) que atualiza o estoque e outro método
vender(produto, quantidade) que reduz o estoque, garantindo que não fique nega-
tivo.
9. Crie uma classe Agenda que armazena compromissos. Cada compromisso tem uma
data e uma descrição. Implemente métodos para adicionar compromissos, remover
compromissos e exibir os compromissos de uma data específica.
10. Implemente uma classe Matriz que receba uma matriz como um atributo. Adicione
métodos para transpor a matriz, calcular seu determinante e multiplicá-la por outra
matriz. Garanta que a multiplicação seja possível verificando as dimensões.
CAPÍTULO 8. PYTHON E O MUNDO EM OBJETOS
176
Licenciado para - Rodrigo Cesar Winhaski - 03955685950 - Protegido por Eduzz.com


