---
layout: post
title:  "Descrição de Opção"
projeto: "fastQuestAdmin"
permalink: /fastQuestAdmin/funcoes/descricao-opcao
pasta: "funcoes"
---
# $FUNCAO_RETORNA_DESC_OPCAO (NRQUESTAO;OPCAO)

Retorna a descrição de uma determinada opção geralmente utilizado nos campos de texto dos questionários para ajudar a formular uma pergunta baseado na descrição de uma opção selecionada anteriormente
- Parâmetros: 
    - NRQUESTAO: código da questão
    - OPCAO: valor da opção
- Exemplo:
    - **$FUNCAO_RETORNA_DESC_OPCAO(Q10;4)**
- Resultado:
    - Retorna o texto da opção 4 da questão Q10