---
layout: post
title:  "Retorna Tempo Questões"
projeto: "fastQuestAdmin"
permalink: /fastQuestAdmin/funcoes/retorna-tempo-questoes
pasta: "funcoes"
---	
# Retorna Tempo Questões

## $FUNCAO_RETORNA_TEMPO_QUESTOES (P1;P2;P3;P4...)

*Retorna a soma do tempo de uma questão/página ou mais.*

- Parametros: 
    - P1: Indica se a busca será feita pelo NrQuestão ou pela página. Deverá ser preenchido com "P" para página ou "NR" para NrQuestão.
    - P2,P3,P4...: Todos os tempos  das páginas/NrQuestão que serão somados.
- Exemplo1:
    - **$FUNCAO_RETORNA_TEMPO_QUESTOES(P;1;2;3;4)**
- Resultado:
    - *Retornará a soma dos tempos das páginas 1, 2, 3 e 4.**
- Exemplo2:
    - **$FUNCAO_RETORNA_TEMPO_QUESTOES(NR;Q1;Q2;Q3)**
- Resultado:
    - *Retornará a soma dos tempos das páginas das questões Q1, Q2 e Q3.*