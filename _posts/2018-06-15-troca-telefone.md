---
layout: post
title:  "Trocar Telefone"
projeto: "fastQuestAdmin"
permalink: /fastQuestAdmin/funcoes/troca-telefone
pasta: "funcoes"
---	
# $FUNCAO_EXECUTA_ACAO (TROCATELEFONE;VALOR)

*Atualiza um numero de telefone na listagem. Valor: TELEFONE>POSICAO. onde TELEFONE é o nr. de telefone novo e posição é qual posição do telefone será atualizada, a posição varia de 1 a 5*

- Parametros: 
    - ACAO: **TROCATELEFONE**
    - VALOR: TELEFONE>POSICAO. Onde:
        - TELEFONE é o novo nr. de telefone
        - ">" é simbolo que separa o nr. de delefone da posição de telefone que será atualizada
        - POSICAO é um número de 1 a 5 que indica qual telefone do cliente será atualizado
- Exemplo:
    - **$FUNCAO_EXECUTA_ACAO(TROCATELEFONE;1198997481\>2)**
- Resultado:
    - Atuliza na tabela de cliente o telefone2, gerando inclusive log de troca de telefone

OU

## $FUNCAO_TROCA_TELEFONE

- Exemplo:
    - **$FUNCAO_TROCA_TELEFONE(1130897122;1)**