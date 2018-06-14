---
layout: post
title:  "Exibir Saudação"
projeto: "fastQuestAdmin"
permalink: /fastQuestAdmin/funcoes/exibir-saudacao
pasta: "funcoes"
---
# $FUNCAO_EXIBIR_SAUDACAO() ou $FUNCAO_EXIBIR_SAUDACAO(LINGUA)

Exibe uma saudação de acordo com á hora do servidor podendo ser: "Bom dia" ou "Boa tarde" ou "Boa noite". 

*Obs.: é possível passar como parâmetro a lingua em que se deseja a saudação, porém atualmente há suporte apenas para  o espanhol do Peru*
- Parâmetros: 
    - LINGUA: es-PE
- Exemplo:
    - **$FUNCAO_EXIBIR_SAUDACAO(es-PE)**
- Resultado:
    - Se for antes do meio dia exibirá "Buenos días"
