---
layout: post
title:  "Checa Cota Obsoleto"
projeto: "fastQuestAdmin"
permalink: /fastQuestAdmin/funcoes/checa-cota-obsoleto
pasta: "funcoes"
---
# $FUNCAO_CHECA_COTA (Cota)

*Retorna 1 quando a cota está atingida, ou seja, não pode prosseguir com o questionário*
*Retorna 0 quando a cota ainda não foi atingida, ou seja o questionário deve prosseguir*

- Parametros: 
    - CdCota: código de cota préviamente criada
- Exemplo:
![Imagem de apoio 1]({{ "/assets/img/checa-cota.jpg" | prepend: site.baseurl }})
- Resultado:
    - Se a função "checa cota" retornar zero significa que há cota disponível para cota C1, portanto, cola a cota C1 em andamento e prossegue com o questionário.
    - Se retornar 1 o questionário segue para o encerramento "E1"