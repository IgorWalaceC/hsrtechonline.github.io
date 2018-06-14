---
layout: post
title:  "Opção Selecionada"
projeto: "fastQuestAdmin"
permalink: /fastQuestAdmin/funcoes/opcao-selecionada
pasta: "funcoes"
---
# $FUNCAO_OPCAO_SELECIONADA (NRQUESTAO;OPCAO)
*Indica se uma determinada opção foi selecionada ou não*
- Parametros: 
    - NRQUESTAO: código que identifica a questão
    - OPCAO: valor da opção desejada
- Exemplo:
    - **$FUNCAO_LIMPA_COTA(C1)**
{% highlight bash %}   
if($FUNCAO_OPCAO_SELECIONADA(Q1;2))
begin
    $FUNCAO_EXECUTA_ACAO(OCULTARQUESTAO;GRID)
end
{% endhighlight %}

- Resultado:
    - Se a opção 2 da questão Q1 foi selecionada a questão GRID1 será ocultada
    - Obs.: caso o desejado fosse ocultar questão se a opção não estivesse selecionada utilize a função: **$FUNCAO_OPCAO_N_SELECIONADA(NRQUESTAO;OPCAO)**