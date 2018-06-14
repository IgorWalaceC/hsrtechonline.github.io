---
layout: post
title:  "Gravar e selecionar resposta multipla"
projeto: "fastQuestAdmin"
permalink: /fastQuestAdmin/funcoes/gravar-e-selecionar-resposta-multipla
pasta: "funcoes"
---
# $FUNCAO_GRAVA_OPCAO(NRQUESTAO;OPCOES)
*Grava no banco e seleciona uma ou mais opções em uma questão multipla.*
- Parâmetros: 
    - NRQUESTAO: código da questão
    - **OPCOES**: informar o valor das opções que deseja gravar para a questão em caso de RM informar os valores separados por "\|" (pipe)
- Exemplo1 (RU):
    - **$FUNCAO_GRAVA_OPCAO(Q10;4)**
- Resultado:
    - *Grava a resposta 4 na base de dados e apresenta esta opção selecionada na tela para a pergunta* Q10
- Exemplo2 (RM):
    - $FUNCAO_GRAVA_OPCAO(Q_RM12>4\|9\|12)
- Resultado:
    - *Grava as respostas 4, 9 e 12 e apresenta estas opções selecionada na tela para a pergunta Q_RM12*