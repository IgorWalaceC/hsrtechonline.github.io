---
layout: post
title:  "Retorna Questões Grid"
projeto: "fastQuestAdmin"
permalink: /fastQuestAdmin/funcoes/retorna-questoes-grid
pasta: "funcoes"
---	
# RETORNA QUESTÕES GRID

## $FUNCAO_RETORNA_QUESTOES_GRID (NRQUESTAO;QTDQUESTOES; ORDEM;POSICAO)

*Retorna as questões do grid em ordem decrescente ou ascendente de acordo com o valor da resposta.*

- Parametros: 
    - NRQUESTAO: Número da questão que o GRID está localizado.
    - QTDQUESTOES: Quantidade de questões que será devolvida pela função. Informe um valor numérico inteiro maior que 0.
    - ORDEM: Indica se o retorno das questões será do menor para o maior valor ou do maior para o menor valor. Informe DESC  para ordem descendente ou ASC para ordem ascendente.
    - POSICAO: Posição que você deseja do retorno, podendo ser nulo/vazio, se for nulo/vazio irá retornar todas as questões do grid de acordo com os parâmetros anteriores.
- Exemplo1:
    - **$FUNCAO_RETORNA_QUESTOES_GRID(Q1;2;DESC)**
- Resultado:
    - *Retornará duas NRQUESTÕES (linhas do grid) em ordem descendente.*
- Exemplo2:
    - **$FUNCAO_RETORNA_QUESTOES_GRID(Q1;2;ASC)**
- Resultado:
    - *Retornará duas questões(linhas) em ordem ascendente.*
- Exemplo3:
    - **$FUNCAO_RETORNA_QUESTOES_GRID(Q1;2;DESC;1)**
- Resultado:
    - *Retornará somente a posição 1 das duas questões(linha) em ordem descendente.*
- Exemplo4:
    - **$FUNCAO_RETORNA_QUESTOES_GRID(Q1;2;ASC;1)**
- Resultado:
    - *Retornará somente a posição 1 das duas questões(linha) em ordem ascendente.*