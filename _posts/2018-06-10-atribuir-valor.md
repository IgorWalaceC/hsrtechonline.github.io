---
layout: post
title:  "Atribuir Valor"
projeto: "fastQuestAdmin"
permalink: /fastQuestAdmin/funcoes/atribuir-valor
pasta: "funcoes"
---
# $FUNCAO_ATRIBUI_VALOR (NRQUESTAO;VALOR)
	
*Permite preencher um determinado controle de questionário, por exemplo, um campo de verbalização com um valor expecífico*

- Parâmetros: 
    - NRQUESTAO: código da questão
    - VALOR: valor que se deseja atribuir ao controle de questionário
- Exemplo:
    - **$FUNCAO_ATRIBUI_VALOR(Q40;Fulano de Tal)**
- Resultado:
    - Ao ser renderizado o controle o texto "Fulano de Tal" já aparece dentro do controle