---
layout: post
title:  "Trava Opção"
projeto: "fastQuestAdmin"
permalink: /fastQuestAdmin/funcoes/trocar-contato
pasta: "funcoes"
---	
# $FUNCAO_EXECUTA_ACAO (TROCACONTATO;VALOR)
*Atualiza o nome do contato na listagem. Valor: novo nome*
- Parametros: 
    - ACAO: **TROCACONTATO**
    - VALOR: novo nome do contato
- Exemplo:
    - **$FUNCAO_EXECUTA_ACAO(TROCACONTATO;Fulano de Tal)**
- Resultado:
    - Atuliza na tabela de cliente o nome do contato, gerando inclusive log de troca de nome

OU

## $FUNCAO_TROCA_CONTATO

- Exemplo:
    - $FUNCAO_TROCA_CONTATO(Fulano de Tal)