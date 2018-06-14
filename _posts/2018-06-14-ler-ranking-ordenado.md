---
layout: post
title:  "Ler Ranking Ordenado"
projeto: "fastQuestAdmin"
permalink: /fastQuestAdmin/funcoes/ler-ranking-ordenado
pasta: "funcoes"
---
# $FUNCAO_RETORNA_RANKING (NRQUESTAO;QTD OPCOES;  [ORDEM];[POSICAO])

Retorna a resposta de uma questão de RANKING ordenada do primeiro ao último clique ou ao contrário dependendo do parâmetro [DESC]

- Parâmetros: 
    - NRQUESTAO: código da questão
    - QTD OPÇÕES: número inteiro que representa a quantidade máxima de opções que esta função retornará 
    - ORDEM: texto que representa se a ordem das opções será do primeiro até o último clique ou ao contrário:
        - DESC: a lista virá do último clique até o primeiro
        - (vazio) ou qualquer outro texto diferente de "DESC": a lista virá do primeiro ao último clique
    - POSIÇÃO: número inteiro que quando informado, retorna apenas uma opção de acordo com a ordem solicitada
        - (vazio) quando este parâmetro for vazio retorna a lista de opções respeitando a quantidade máxima informada no 2o. parâmetro
        - 3: retornará a opção que foi clicada em 3o. lugar
- Exemplo1:
    - **$FUNCAO_RETORNA_RANKING(RNK1;5;;)**
- Resultado:
    - 7\|10\|2\|4\|5
    - Acima pode-se ver a lista retornada pela função do exemplo os números separdos por "pipe" são as opçoes declaradas na questão RNK1 na ordem em que foram clicadas, ou seja, a opção 7 foi a primeira a receber um clique e a opção 5 foi a quinta
- Exemplo2:
    - **$FUNCAO_RETORNA_RANKING(RNK1;5;DESC;)**
- Resultado:
    - 5\|4\|2\|10\|7
    - Acima pode-se ver a lista retornada pela função do exemplo2, onde: a opção 5 foi a última a receber um clique e a 7 a primeira
- Exemplo3:
    - **$FUNCAO_RETORNA_RANKING(RNK1;5;;3)**
- Resultado:
    - 2
    - Acima pode-se ver que a opção 2 foi a 3a. a ser clicada