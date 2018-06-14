---
layout: post
title:  "Exibir uma mídia"
projeto: "fastQuestAdmin"
permalink: /fastQuestAdmin/funcoes/exibir-midia
pasta: "funcoes"
---
# $FUNCAO_MIDIA (NOME;ALTURA;LARGURA;AUTOPLAY)
As mídias devem estar previamente importadas no job
os parâmetros de ALTURA e LARGURA são opcionais (e só valem para imagens), sendo que quando não são informados a imagem assume seu tamanho original
- Parâmetros:
    - NOME: nome utilizado na tela de importação de mídia
    - ALTURA: número inteiro que representa a altura da imagem
    - LARGURA: número inteiro que representa a largura da imagem
    - AUTOPLAY: número inteiro que pode ser 0 ou 1, onde 1 indica que o vídeo será executado automáticamente
- Exemplo:
    - **$FUNCAO_MIDIA(img1;50;100)**
- Resultado:
    - A imagem previamente importada com o nome de img1 será exibida em uma descrição ou opção de uma questão