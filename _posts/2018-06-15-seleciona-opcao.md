---
layout: post
title:  "Seleciona Opção"
projeto: "fastQuestAdmin"
permalink: /fastQuestAdmin/funcoes/seleciona-opcao
pasta: "funcoes"
---	
# $FUNCAO_EXECUTA_ACAO (SELECIONAOPCAO;VALOR)

*Seleciona uma determinada opção em uma questão. Valor: NRQUESTAO>OPCAO. lembrando que o sinal ">" serve para separar o código da questão do valor da opção*

- Parametros: 
    - ACAO: SELECIONAOPCAO
    - VALOR: NRQUESTAO>OPCAO. Onde: 
        - NRQUESTAO é o código da questão
        - \> é simbolo que separa o código da questão do valor da opção
        - OPCAO é o valor da opção que se deseja ocultar
- Exemplo1 (RU):
    - **$FUNCAO_EXECUTA_ACAO(SELECIONAOPCAO;Q1>4)**
- Resultado:
    - *Exibe a questão Q1 com a opção de valor 4 préviamente selecionada*
- Exemplo2 (RM):
    - **$FUNCAO_EXECUTA_ACAO(SELECIONAOPCAO;Q_RM12>4\|9\|12)**
- Resultado:
    - *Exibe a questão Q_RM12 com as opções de valor 4,9 e 12 préviamente selecionada*
- *Obs. Caso a questão seja um GRID RU ou RM o funcionamento desta função é semelhante porém para travar uma coluna inteira deve ser passado o codigo da questão cabeçalho do grid e caso queira trava apenas uma opção do grid, deve ser neste caso, informado no código da questão da opção desejada*