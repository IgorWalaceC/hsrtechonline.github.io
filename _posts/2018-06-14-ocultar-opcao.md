---
layout: post
title:  "Ocultar Opção"
projeto: "fastQuestAdmin"
permalink: /fastQuestAdmin/funcoes/ocultar-opcao
pasta: "funcoes"
---
# $FUNCAO_EXECUTA_ACAO (OCULTAROPCAO;VALOR)

Fará com que uma determinada opção fique oculta. valor: NRQUESTAO>OPCAO
- Parametros: 
    - ACAO: OCULTAROPCAO
    - VALOR: NRQUESTAO>OPCOES. Onde: 
        - NRQUESTAO é o código da questão
        - > é simbolo que separa o código da questão do valor da opção
        - OPCOES é o valor da opção que se deseja ocultar ou uma lista de opções separadas por pipe
- Exemplo:
    - **$FUNCAO_EXECUTA_ACAO(OCULTAROPCAO;Q11>3)**
- Resultado:
    - Oculta o opção de valor 3 de uma questão denominada Q11
- Exemplo:
    - **$FUNCAO_EXECUTA_ACAO(OCULTAROPCAO;Q11>3\|5\|7)**
- Resultado:
    - Oculta as opções de valor 3, 5 e 7 de uma questão denominada Q11
- *Obs. Caso a questão seja um GRID RU ou RM o funcionamento desta função é semelhante porém para ocutar uma coluna inteira deve ser passado o codigo da questão cabeçalho do grid e caso queira trava apenas uma opção do grid, deve ser neste caso, informado no código da questão da opção desejada*

OU

## $FUNCAO_OCULTAR_OPCAO (NRQUESTAO;OPCOES)

- Parâmetros:
    - NRQUESTAO: código da questao
    - OPCOES: lista de uma ou mais opções separadas por "\|" pipe
- Exemplo:
    - **$FUNCAO_OCULTAR_OPCAO(Q11;3\5\|7)**