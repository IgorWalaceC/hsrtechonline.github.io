---
layout: post
title:  "Execução em Loop"
projeto: "fastQuestAdmin"
permalink: /fastQuestAdmin/funcoes/execucao-em-loop
pasta: "funcoes"
---
# $FUNCAO_LOOP (ACAO;VALOR)

*Executa uma instrução ou grupo de instruçoes N vezes onde N é a quantidade de opcoes separadas por pipe.*

Parametros: 
- OPCOES: valores de opções separadas por pipe exemplo: "1/2/5/7"
- INSTRUCAO: pode ser qualer função ou conjunto de funções apresentadas neste documento bem como instruções condicionais e outras derivadas da linguagem SQL 
- Exemplo:
![Imagem de apoio 1]({{ "/assets/img/execucao-loop-01.jpg" | prepend: site.baseurl }})
- Resultado:
    - Supondo que no primeiro parametro da opção o retorno seja "1/2/3" será executado 3 vezes o segundo parametro, ou seja, para cada opção retornada no primeiro parâmetro será verificado se resposta da qestão R.5a_Op1 é numerica e caso não seja será exibida uma mensagem informando que há um erro.
    - Portanto a constante #OPCAO# apresentada no exemplo acima é substituída pelo valor de cada opção.
    - Desta forma fica convencionado que a palavra #OPCAO# comporta-se como uma varíavel que contém o valor da opção e muda a cada iteração do loop.