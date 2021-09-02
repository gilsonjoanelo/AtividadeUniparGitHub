# Atividade de Projeto Estruturado [APE]

Acadêmico: Gilson Joanelo
R.A.: 09014593

Este projeto foi criado apenas para atender os requisitos da atividade de estudo 11 da faculdade de Sistemas de Informação da Unipar modalidade EAD.
Nestes projeto será abordado o gerenciamento de versões utilizando tags, além de responder as questões citadas abaixo.

 1. O que é o Git?
 2. O que é versionamento de software?
 3. Por que utilizar o Git para controle de versionamento?
 4. Quais as vantagens do Git?
 5. Qual a importância da utilização do controle de versionamento no desenvolvimento de um software? 
 6. Cite pelo menos 3 ferramentas de controle de versão e faça um breve detalhamento sobre cada uma delas.
 
**1. O que é o Git?**

Git é uma plataforma que facilita o desenvolvimento de projetos em equipe desenvolvida em 2005 por Linus Torvalds inicialmente para criação do Kernel Linux. Cada repositório Git é um nó em uma rede descentralizada e diferentes nós que podem se comunicar na rede e também pode ser armazenado em um repositório local ou de forma remota utilizando algumas das plataformas online, como é o caso do Github. O Github por sua vez, pode ser considerado como uma rede social para desenvolvedores de software, porém, nada impede que seja utilizado por outras áreas, pois, podemos utilizar o Git para diversos fins e não somente par armazenar código fonte ou projetos, podemos utilizar para qualquer tipo de mídia. 

**2. O que é versionamento de software?**

O versionamento de software consiste basicamente em cópias das alterações do código armazenado por meio de numerações e que permite de forma fácil e prática ver estas alterações ou até mesmo, voltar alguma versão em caso de falhas. Muitas desenvolvedores ainda utilizam várias pastas ou cópias do mesmo código na máquina para versionar as alterações feitas antes de publicar ou entregar para o cliente, porém, isso é muito crítico, principalmente por ser um controle extremamente delicado e suscetível a perda e corrupção de arquivos, sem contar que é um controle centralizado, em uma empresa onde temos mais de um desenvolvedor alterando o mesmo código, isso é um caos pois se teria que comparar o fonte manualmente, mergear as alterações e torcer para que não de nenhum problema. Com o Git isso fica muito mais flexível, pois o Git possui um controle descentralizado o que permite um controle eficaz, mantendo apenas a cópia do último Pull executado pelo desenvolvedor, e quando for submeter, ainda somos notificados que temos versões do arquivo mais recentes, isso, nos dá um controle muito maior, principalmente na parte de merges. Quando for entregar as alterações, é extremamente recomendado que se crie Tags, estas também podem ser chamadas de Versões, para que se tenha um controle do que, quando e como foi entregue essas alterações.

**3. Por que utilizar o Git para controle de versionamento?**

Inicialmente é praticamente impossível falar sobre utilização do Git sem ao menos falar um pouco sobre outros softwares de versionamento do mercado, como Subversion, CVS, Team Foudation Server Control (TFSC). Utilizar o Git para controle de versionamento é uma excelente alternativa, uma por ser compatível com diversos Sistemas Operacionais e outra por ser um sistema de versionamento distribuído, onde, evita que alterações feitas em um projeto modifiquem o código fonte. O Git também permite edições simultâneas nos arquivos versionados, além de possuir arquiterura descentralizada ao contrário do Subversion e CVS que possuem arquiterura centralizada. O Subversion, também conhecido como SVN, se utiliza de pastas para controlar as versões de um arquivo ou alterações em projetos, o seu processo de “push” e “add”, pode ser utilizado diretamente em um único comando chamado de “commit”, nele será apresentado todos os arquivos envolvidos naquela pasta que está sofrendo o commit, porém, caso esqueça de dar um “update” antes de um commit, ele irá solicitar para que seja dado o update antes do commit. O Team Foudation Server Control é uma tecnologia da Microsoft que originou após o encerramento de outro software também da Microsoft denominado Visual Source Safe ou VSS. Ambas as tecnologias possuem integração nativa no Visual Studio, IDE muito utilizada para desenvolvimento utilizando .Net Framework ou dotNet Core. O TFSC ou TFS, assim como o SVN também se utiliza de um controle de versão centralizado, ao contrário do Git que possui um sistema de controle de versão descentralizado. Por isso, é uma excelente escolha se optarmos pelo Git, além do mais, atualmente o Visual Studio também possui integração nativa com o Git, inclusive o Visual Studio instala por padrão o client do Git para controle de seus próprios plugins e pacotes utilizados pela própria IDE, bem como algumas extensões da Framework.
