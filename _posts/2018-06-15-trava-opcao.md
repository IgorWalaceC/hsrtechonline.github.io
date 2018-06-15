---
layout: post
title:  "Trava Opção"
projeto: "fastQuestAdmin"
permalink: /fastQuestAdmin/funcoes/trava-opcao
pasta: "funcoes"
---	
# $FUNCAO_EXECUTA_ACAO (TRAVA;VALOR)
*Bloqueia uma determinada opção de uma questão. Valor: NRQUESTAO>OPCAO. lembrando que o sinal "\>" server para separar o código da questão do valor da opção*

- Parametros: 
    - ACAO: **TRAVA**
    - VALOR: NRQUESTAO>OPCAO. Onde: 
        - NRQUESTAO é o código da questão
        - \> é simbolo que separa o código da questão do valor da opção
        - OPCAO é o valor da opção que se deseja ocultar
- Exemplo1 (RU):
    - **$FUNCAO_EXECUTA_ACAO(TRAVA;Q1>4)**
- Resultado:
    - *Exibe a questão Q1 com a opção de valor 4 travada, sem a possibiliade de alterar a seleção*
- Exemplo2 (RM):
    - **$FUNCAO_EXECUTA_ACAO(TRAVA;Q_RM12>4\|9\|12)**
- Resultado:
    - *Exibe a questão Q_RM12 com as opções de valor 4,9 e 12 travadas sem a possibiliade de alterar a seleção*
- *Obs. Caso a questão seja um GRID RU ou RM o funcionamento desta função é semelhante porém para travar uma coluna inteira deve ser passado o codigo da questão cabeçalho do grid e caso queira trava apenas uma opção do grid, deve ser neste caso, informado no código da questão da opção desejada*

OU

## $FUNCAO_TRAVA_OPCAO(NRQUESTAO;OPCAO)

- Exemplo:
    - **FUNCAO_TRAVA_OPCAO(Q10;5)**