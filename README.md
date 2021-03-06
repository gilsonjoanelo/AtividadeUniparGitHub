# Atividade de Projeto Estruturado [APE]

Acad?mico: Gilson Joanelo

R.A.: 09014593

Este projeto foi criado apenas para atender os requisitos da atividade de estudo 11 da faculdade de Sistemas de Informa??o da Unipar modalidade EAD.
Nestes projeto ser? abordado o gerenciamento de vers?es utilizando tags, al?m de responder as quest?es citadas abaixo.

 1. O que ? o Git?
 2. O que ? versionamento de software?
 3. Por que utilizar o Git para controle de versionamento?
 4. Quais as vantagens do Git?
 5. Qual a import?ncia da utiliza??o do controle de versionamento no desenvolvimento de um software? 
 6. Cite pelo menos 3 ferramentas de controle de vers?o e fa?a um breve detalhamento sobre cada uma delas.
 
**1. O que ? o Git?**

Git ? uma plataforma que facilita o desenvolvimento de projetos em equipe desenvolvida em 2005 por Linus Torvalds inicialmente para cria??o do Kernel Linux. Cada reposit?rio Git ? um n? em uma rede descentralizada e diferentes n?s que podem se comunicar na rede e tamb?m pode ser armazenado em um reposit?rio local ou de forma remota utilizando algumas das plataformas online, como ? o caso do Github. O Github por sua vez, pode ser considerado como uma rede social para desenvolvedores de software, por?m, nada impede que seja utilizado por outras ?reas, pois, podemos utilizar o Git para diversos fins e n?o somente par armazenar c?digo fonte ou projetos, podemos utilizar para qualquer tipo de m?dia. 

**2. O que ? versionamento de software?**

O versionamento de software consiste basicamente em c?pias das altera??es do c?digo armazenado por meio de numera??es e que permite de forma f?cil e pr?tica ver estas altera??es ou at? mesmo, voltar alguma vers?o em caso de falhas. Muitas desenvolvedores ainda utilizam v?rias pastas ou c?pias do mesmo c?digo na m?quina para versionar as altera??es feitas antes de publicar ou entregar para o cliente, por?m, isso ? muito cr?tico, principalmente por ser um controle extremamente delicado e suscet?vel a perda e corrup??o de arquivos, sem contar que ? um controle centralizado, em uma empresa onde temos mais de um desenvolvedor alterando o mesmo c?digo, isso ? um caos pois se teria que comparar o fonte manualmente, mergear as altera??es e torcer para que n?o de nenhum problema. Com o Git isso fica muito mais flex?vel, pois o Git possui um controle descentralizado o que permite um controle eficaz, mantendo apenas a c?pia do ?ltimo Pull executado pelo desenvolvedor, e quando for submeter, ainda somos notificados que temos vers?es do arquivo mais recentes, isso, nos d? um controle muito maior, principalmente na parte de merges. Quando for entregar as altera??es, ? extremamente recomendado que se crie Tags, estas tamb?m podem ser chamadas de Vers?es, para que se tenha um controle do que, quando e como foi entregue essas altera??es.

**3. Por que utilizar o Git para controle de versionamento?**

Inicialmente ? praticamente imposs?vel falar sobre utiliza??o do Git sem ao menos falar um pouco sobre outros softwares de versionamento do mercado, como Subversion, CVS, Team Foudation Server Control (TFSC). Utilizar o Git para controle de versionamento ? uma excelente alternativa, uma por ser compat?vel com diversos Sistemas Operacionais e outra por ser um sistema de versionamento distribu?do, onde, evita que altera??es feitas em um projeto modifiquem o c?digo fonte. O Git tamb?m permite edi??es simult?neas nos arquivos versionados, al?m de possuir arquiterura descentralizada ao contr?rio do Subversion e CVS que possuem arquiterura centralizada. O Subversion, tamb?m conhecido como SVN, se utiliza de pastas para controlar as vers?es de um arquivo ou altera??es em projetos, o seu processo de ?push? e ?add?, pode ser utilizado diretamente em um ?nico comando chamado de ?commit?, nele ser? apresentado todos os arquivos envolvidos naquela pasta que est? sofrendo o commit, por?m, caso esque?a de dar um ?update? antes de um commit, ele ir? solicitar para que seja dado o update antes do commit. O Team Foudation Server Control ? uma tecnologia da Microsoft que originou ap?s o encerramento de outro software tamb?m da Microsoft denominado Visual Source Safe ou VSS. Ambas as tecnologias possuem integra??o nativa no Visual Studio, IDE muito utilizada para desenvolvimento utilizando .Net Framework ou dotNet Core. O TFSC ou TFS, assim como o SVN tamb?m se utiliza de um controle de vers?o centralizado, ao contr?rio do Git que possui um sistema de controle de vers?o descentralizado. Por isso, ? uma excelente escolha se optarmos pelo Git, al?m do mais, atualmente o Visual Studio tamb?m possui integra??o nativa com o Git, inclusive o Visual Studio instala por padr?o o client do Git para controle de seus pr?prios plugins e pacotes utilizados pela pr?pria IDE, bem como algumas extens?es da Framework.

**4. Quais as vantagens do Git?**

As vantagens est?o relacionadas ? distribui??o do processamento, redund?ncia/replica??o de reposit?rios e ?s novas possibilidades de colabora??o entre desenvolvedores. Do ponto de vista dos desenvolvedores, um sistema de versionamento distribuidor traz benef?cios como rapidez e autonomia, j? do ponto de vista gerencial, traz confiabilidade e redu??o de custos com servidores.

**5. Qual a import?ncia da utiliza??o do controle de versionamento no desenvolvimento de um software?**

Termos um controle de vers?o no desenvolvimento de software, ? de extrema import?ncia, pois se ficarmos controlando manualmente as vers?es de um arquivo, m?dulo ou at? mesmo projeto, logo virar? um caos completo, onde ningu?m mais saber? direito o que foi alterado de uma vers?o para outra. Um controle de versionamento traz v?rios benef?cios, como por exemplo. compara??o de altera??es entre arquivos ou at? mesmo tags, controle eficaz de vers?es, pois cada libera??o efetuada ? criado uma tag para termos o isolamento do que est? sendo liberado, controle de updates da estrutura local, resolu??o de merges de forma mais f?cil, entre outros. Atualmente utilizo controle de vers?o para desenvolver os sites e aplicativos da empresa onde trabalho, no in?cio utilizava porque era regra da empresa e n?o entendia muito bem a finalidade, hoje, vejo o quanto ? importante, visto a complexidade dos projetos, quantidades de arquivos de c?digo fonte, at? mesmo quantidade de features liberadas em cada vers?o, pois enquanto a qualidade se envolve com a libera??o da vers?o/tag, o desenvolvimento, continua trabalhando nas novas features do projeto, e quando a qualidade solicita alguma corre??o na vers?o a ser liberada, de forma f?cil conseguimos dar o merge e gerar uma nova tag com a corre??o que est? sendo solicitada. Se esse controle fosse manual, iria ser um caos, pois como somos v?rios desenvolvedores, uma hora ou outra, algu?m iria substituir algum arquivo de forma errada ou com a vers?o errada e certo que iriamos ter um retrabalho enorme para resolver o problema causado por um controle manual e por isso ter um controle de versionamento no desenvolvimento de softwares ? t?o importante pois as features n?o param.

**Modelo em HTML**

Para executar o modelo da documenta??o em formato em html, basta executar o arquivo index.html localizado na pasta ./src/html.

**Modelo em utilizando Angular**

Para executar o modelo da documenta??o em formato em Angular, siga passos abaixo:

 1. Abra o Console ou Prompt de comandos do seu sistema operacional
 2. Posicione na pasta **src/help** onde os fontes foram baixados.
 3. Execute o comando `npm install` para instalar os pacotes do projeto
 4. Execute o comando `npm start` para iniciar o servidor local para possibilitar o teste da aplica??o pelo navegador.
 5. Abra o navegador e digite a url [http://localhost:4200](http://localhost:4200/) para inciar o projeto

> **Importante:**
> 
Para executar o modelo Angular, ? imprescind?vel antes ter o **angular-cli** instalado bem como o **NodeJS**, caso n?o tenha, para instalar o **node** acesse a p?gina [https://nodejs.org](https://nodejs.org) para baixar o instalador de acordo com seu sistema operacional, depois instale o **angular-cli** acessando o site [https://angular.io/guide/setup-local](https://angular.io/guide/setup-local) e siga os passos indicados pela documenta??o do **Angular**
