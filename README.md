
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

É recomendado a utilização do Git para controle de versionamento por ser um sistema de versionamento distribuido, onde, evita que alterações feitas em um projeto modifiquem o código fonte. O Git também permite edições simultâneas nos arquivos versionados, além de possuir arquiterura descentralizada ao contrário do Subversion e CVS que possuem arquiterura centralizada.
