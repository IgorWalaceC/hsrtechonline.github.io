---
layout: post
title:  "Lista de Cotas por Volume"
projeto: "fastQuestAdmin"
permalink: /fastQuestAdmin/funcoes/lista-cotas-por-volume
pasta: "funcoes"
---
# $FUNCAO_RETORNA_COTAS_VOLUME (QTDCOTAS)
Retorna uma lista com cotas que tem metas a serem cumpridas ordenadas pela cota menos realizada até a cotá mais realizada
- Parametros: 
    - QTDCOTAS: número inteiro que indica a quantidade de cotas que se deseja trabalhar ordenadas da cota menos realizada até a cota mais realizada
- Exemplo:
    - **$FUNCAO_RETORNA_COTAS_VOLUME(5)**
- Resultado:
    - C2\|C31\|C1\|C3\|C12
        - Esta função pode ser associada com a $FUNCAO_LOOP por exemplo, de modo a ocultar ou direcionar o questionário para um determinado bloco.