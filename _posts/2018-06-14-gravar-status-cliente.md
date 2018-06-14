---
layout: post
title:  "Gravar Status Cliente"
projeto: "fastQuestAdmin"
permalink: /fastQuestAdmin/funcoes/gravar-status-cliente
pasta: "funcoes"
---
# $FUNCAO_EXECUTA_ACAO (GRAVASTATUS;VALOR)
Grava na tabela o status do cliente, o seuja, o status é efetivo e não necessita passar pelo encerramento
- Parametros: 
    - ACAO: GRAVASTATUS
    - VALOR: número do status desejado
- Exemplo:
    - **$FUNCAO_EXECUTA_ACAO(GRAVASTATUS;102)**
- Resultado:
    - Efetiva o status do cliente para 102