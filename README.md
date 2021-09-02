
# Atividade de Projeto Estruturado [APE]

Acad�mico: Gilson Joanelo
R.A.: 09014593

Este projeto foi criado apenas para atender os requisitos da atividade de estudo 11 da faculdade de Sistemas de Informa��o da Unipar modalidade EAD.
Nestes projeto ser� abordado o gerenciamento de vers�es utilizando tags, al�m de responder as quest�es citadas abaixo.

 1. O que � o Git?
 2. O que � versionamento de software?
 3. Por que utilizar o Git para controle de versionamento?
 4. Quais as vantagens do Git?
 5. Qual a import�ncia da utiliza��o do controle de versionamento no desenvolvimento de um software? 
 6. Cite pelo menos 3 ferramentas de controle de vers�o e fa�a um breve detalhamento sobre cada uma delas.
 
**1. O que � o Git?**

Git � uma plataforma que facilita o desenvolvimento de projetos em equipe desenvolvida em 2005 por Linus Torvalds inicialmente para cria��o do Kernel Linux. Cada reposit�rio Git � um n� em uma rede descentralizada e diferentes n�s que podem se comunicar na rede e tamb�m pode ser armazenado em um reposit�rio local ou de forma remota utilizando algumas das plataformas online, como � o caso do Github. O Github por sua vez, pode ser considerado como uma rede social para desenvolvedores de software, por�m, nada impede que seja utilizado por outras �reas, pois, podemos utilizar o Git para diversos fins e n�o somente par armazenar c�digo fonte ou projetos, podemos utilizar para qualquer tipo de m�dia. 

**2. O que � versionamento de software?**

O versionamento de software consiste basicamente em c�pias das altera��es do c�digo armazenado por meio de numera��es e que permite de forma f�cil e pr�tica ver estas altera��es ou at� mesmo, voltar alguma vers�o em caso de falhas. Muitas desenvolvedores ainda utilizam v�rias pastas ou c�pias do mesmo c�digo na m�quina para versionar as altera��es feitas antes de publicar ou entregar para o cliente, por�m, isso � muito cr�tico, principalmente por ser um controle extremamente delicado e suscet�vel a perda e corrup��o de arquivos, sem contar que � um controle centralizado, em uma empresa onde temos mais de um desenvolvedor alterando o mesmo c�digo, isso � um caos pois se teria que comparar o fonte manualmente, mergear as altera��es e torcer para que n�o de nenhum problema. Com o Git isso fica muito mais flex�vel, pois o Git possui um controle descentralizado o que permite um controle eficaz, mantendo apenas a c�pia do �ltimo Pull executado pelo desenvolvedor, e quando for submeter, ainda somos notificados que temos vers�es do arquivo mais recentes, isso, nos d� um controle muito maior, principalmente na parte de merges. Quando for entregar as altera��es, � extremamente recomendado que se crie Tags, estas tamb�m podem ser chamadas de Vers�es, para que se tenha um controle do que, quando e como foi entregue essas altera��es.

**3. Por que utilizar o Git para controle de versionamento?**

� recomendado a utiliza��o do Git para controle de versionamento por ser um sistema de versionamento distribuido, onde, evita que altera��es feitas em um projeto modifiquem o c�digo fonte. O Git tamb�m permite edi��es simult�neas nos arquivos versionados, al�m de possuir arquiterura descentralizada ao contr�rio do Subversion e CVS que possuem arquiterura centralizada.
