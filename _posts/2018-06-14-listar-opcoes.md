---
layout: post
title:  "Listar Opções"
projeto: "fastQuestAdmin"
permalink: /fastQuestAdmin/funcoes/listar-opcoes
pasta: "funcoes"
---
# $FUNCAO_RETORNA_OPCOES (NRQUESTAO)
Independente de ser uma RU ou RM devolve a lista de opções separadas por pipe
- Parâmetros: 
    - NRQUESTAO: código da questão
- Exemplo:
    - **$FUNCAO_RETORNA_OPCOES(Q10)**
- Resultado:
    - Supondo que a questão Q10 possuí as seguintes opções: 
        1. Sim
        2. Talvez
        3. Não tenho certeza
        4. Não mesmo
        5. Recusa responder
    - o resultado será: 1\|2\|3\|4\|5