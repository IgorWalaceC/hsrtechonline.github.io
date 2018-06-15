---
layout: post
title:  "Redirecionar para url"
projeto: "fastQuestAdmin"
permalink: /fastQuestAdmin/funcoes/redirecionar-para-url
pasta: "funcoes"
---	
# $FUNCAO_EXECUTA_ACAO (REDIRECIONA;VALOR)

Sai do questionário e acessa uma outra url. 

*Obs.: é importante antes de redirecionar o questionário utilizar o comando GRAVASTATUS, para que o cliente receba o status desejado. Valor: url desejada*
- Parametros: 
    - ACAO: **REDIRECIONA**
    - VALOR: url completa do site para onde deseja redirecionar
- Exemplo:
    - **$FUNCAO_EXECUTA_ACAO(REDIRECIONA;http:\\\www.uol.com.br)**
- Resultado:
    - O questionário será finalizado o cliente direcionado para a url fornecida

OU

## $FUNCAO_FINALIZA_CAWI(URL)

Sai do questionário e acessa uma outra url. 

- Parametros: 
    - **URL:** url completa do site para onde deseja redirecionar
- Exemplo:
    - **$FUNCAO_FINALIZA_CAWI(http:\\\www.uol.com.br)**
- Resultado:
    - O questionário será finalizado o cliente direcionado para a url fornecida