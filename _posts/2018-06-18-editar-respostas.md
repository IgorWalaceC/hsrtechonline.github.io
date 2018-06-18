---
layout: post
title:  "Editar Resposta"
projeto: "fastQuestAdmin"
permalink: /fastQuestAdmin/respostas/editar-resposta
pasta: "Respostas"
---
# Editar Respostas

Acesse o módoulo de coleta através do link: [http://hsrtechonline.com.br/hsrtech/coleta/frmlogin.aspx](http://hsrtechonline.com.br/hsrtech/coleta/frmlogin.aspx)

Após realizar o login com perfil de "gerência ou superior" selecione o projeto conforme imagem abaixo

![Imagem de apoio 1]({{ "/assets/img/editar-respostas-01.png" | prepend: site.baseurl }})

A mensagem abaixo deverá aparecer indicado que o usuário não pertence a um grupo de coleta, não se preocupe com esta mensagem basta clicar no botão OK, conforme imagem abaixo:

![Imagem de apoio 2]({{ "/assets/img/editar-respostas-02.png" | prepend: site.baseurl }})

	
Clique na aba buscar conforme imagem abaixo e localize o id que deseja editar as respostas.

Para localizar o id é possível utilizar o "Botão Localizar" , que permite localizar o id, por código, por status, por nr. de telefone entre outros

Após localizar o id clique no botão "Editar Respostas"  (Botão azul em forma de lápis)

![Imagem de apoio 3]({{ "/assets/img/editar-respostas-03.png" | prepend: site.baseurl }})

Você será direcionado para dentro do questionário conforme imagem abaixo:

![Imagem de apoio 4]({{ "/assets/img/editar-respostas-04.png" | prepend: site.baseurl }})![Imagem de apoio 1]({{ "/assets/img/editar-respostas-01.png" | prepend: site.baseurl }})

Dentro do questionário, no cabeçalho, é possível selecionar qualquer questão e navegar diretamente para ela através da "seleção de questão"

![Imagem de apoio 5]({{ "/assets/img/editar-respostas-05.png" | prepend: site.baseurl }})![Imagem de apoio 1]({{ "/assets/img/editar-respostas-01.png" | prepend: site.baseurl }})

A questão será exibida com a resposta coletada originalmente e pode ser trocada, a troca só será efetivada após clicar no botão "Prosseguir" conforme imagem abaixo:

![Imagem de apoio 6]({{ "/assets/img/editar-respostas-06.png" | prepend: site.baseurl }})![Imagem de apoio 1]({{ "/assets/img/editar-respostas-01.png" | prepend: site.baseurl }})

Importante:
- A resposta alterada será substituída no banco de dados, gerando um log de alteração em nome do usuário que editou o questionário.
- Caso a troca de resposta caia em uma condição de pulo do questionário as respostas entre a pagina editada e as paginas puladas serão descartadas, gerando assim o log de exclusão de respostas em nome de quem editou o questionário
- As alterações de respostas podem também ocasionar em alteração da cota a qual o questionário foi originalmente alocado podendo assim causar estouro de cota e liberação da cota antiga.

As seguintes funcionalidades estão disponíveis na edição de questionário, através dos botões abaixo da seleção de questão:

![Imagem de apoio 7]({{ "/assets/img/editar-respostas-07.png" | prepend: site.baseurl }})

Troca de entrevistador: Permite atribuir uma entrevista já realizada a outro entrevistador. 

![Imagem de apoio 8]({{ "/assets/img/editar-respostas-08.png" | prepend: site.baseurl }})

	
Cotas: Permite visualizar e forçar alteração da cota em que a entrevista foi alocada

![Imagem de apoio 9]({{ "/assets/img/editar-respostas-09.png" | prepend: site.baseurl }})

Ocorrências: Permite visualizar as ocorrências do ID

Campos de Listagem: Permite visualizar os dados do ID

Fechar: Após editar as questões desejadas, clique no botão fechar para retornar a busca de IDs
