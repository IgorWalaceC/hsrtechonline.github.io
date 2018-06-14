---
layout: post
title:  "Gravar Resposta"
projeto: "fastQuestAdmin"
permalink: /fastQuestAdmin/funcoes/gravar-resposta
pasta: "funcoes"
---
# $FUNCAO_GRAVA_RESPOSTA (NRQUESTAO;VALOR)
Grava no banco de dados o valor para uma determinada questão
- Parametros: 
    - NRQUESTAO: código da questão
    - VALOR: pode ser texto ou numero, é o valor que será gravado como resposta da questão informada
- Exemplo:
    - **$FUNCAO_GRAVA_RESPOSTA(Q10;TESTE)**
- Resultado:
    - Grava no banco de dados o valor "Teste" para a questão Q10