---
layout: post
title:  "Contar Opções"
projeto: "fastQuestAdmin"
permalink: /fastQuestAdmin/funcoes/contar-opcoes
pasta: "funcoes"
---
# $FUNCAO_CONTAR_OPCOES (NRQUESTAO;[tipo])

*Conta o total de opções de uma determinada questão, a contagem de opções pode ser: total, total selecionado ou total não selecionado de acordo com o parâmetro tipo que é opcional*

- Parametros: 
    - NrQuestao: identificador da questão
    - tipo: parâmetro opcional. são aceitos os seguintes valores:
        -  nulo: conta todas as opções da questão
        - S: conta apenas as opções selecionadas
        - NS: conta apenas as opções não selecionadas
- Exemplo 1:
    - **$FUNCAO_CONTAR_OPCOES(Q1)**
- Resultado:
    - conta todas as opções cadastradas para pergunta Q1
- Exemplo 2:
    - **$FUNCAO_CONTAR_OPCOES(Q1;S)**
- Resultado:
    - conta apenas as opções que foram selecionadas na pergunta Q1
- Exemplo 3:
    - **$FUNCAO_CONTAR_OPCOES(Q1;NS)**
- Resultado:
    - conta apenas as opções que NÃO foram selecionadas na pergunta Q1

