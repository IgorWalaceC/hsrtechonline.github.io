---
layout: post
title:  "Manipular Lista"
projeto: "fastQuestAdmin"
permalink: /fastQuestAdmin/funcoes/manipular-lista
pasta: "funcoes"
---	
	
# MANIPULAR LISTA

## $FUNCAO_MANIPULAR_LISTA (LISTA;QTD;TIPO)

*Randomiza ou ordena uma lista de valores separados por pipe* "\|".

- Parametros: 
    - LISTA: Uma lista de valores separados por pipe "\|". Exemplo: "1\|2\|3\|4".
    - QTD: Quantidade de opções que serão retornadas.
    - TIPO:  Pode ser definido como:
        - RND: Randômico.
        - DESC: Decrescente.
        - ASC: Ascendente.
    - Exemplo1:
        - **$FUNCAO_MANIPULAR_LISTA(1\|2\|3\|4;2;RND)**
- Resultado:
    - *Retornará duas opções de forma randômica.*
- Exemplo2:
    - **$FUNCAO_MANIPULAR_LISTA(1\|2\|3\|4;2;DESC)**
- Resultado:
    - *Retornará duas opções de forma decrescente.*
- Exemplo3:
    - **$FUNCAO_MANIPULAR_LISTA(1\|2\|3\|4;2;ASC)**
- Resultado:
    - *Retornará duas opções de forma ascendente.*