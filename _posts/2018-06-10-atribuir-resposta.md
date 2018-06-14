---
layout: post
title:  "Atribuir Resposta"
projeto: "fastQuestAdmin"
permalink: /fastQuestAdmin/funcoes/atribuir-resposta
pasta: "funcoes"
---
# $FUNCAO_EXECUTA_ACAO (RESPOSTA;VALOR)

Atribui um valor de resposta para uma determinada questão. Valor: NRQUESTAO>VALOR. lembrando que o sinal ">" *serve para separar o código da questão do valor da opção*

- Parâmetros: 
    - ACAO: RESPOSTA
    - VALOR: NRQUESTAO>OPCAO. Onde: 
        - NRQUESTAO é o código da questão
        - > é simbolo que separa o código da questão do valor da opção
        - OPCAO é o valor da opção que se deseja ocultar
- Exemplo:
    - **$FUNCAO_EXECUTA_ACAO(RESPOSTA;Q1>TESTE)**
- Resultado:
    - O VALOR Teste será atribuído a questão Q1 e será renderizado como resposta na página
 - *Obs.: o valor teste ainda não esta gravado, para ser gravado do entrevistador deve clicar no botão prosseguir*