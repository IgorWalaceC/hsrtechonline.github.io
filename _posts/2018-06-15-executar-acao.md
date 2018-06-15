---
layout: post
title:  "Executar ação"
projeto: "fastQuestAdmin"
permalink: /fastQuestAdmin/funcoes/executar-acao
pasta: "funcoes"
---	
# $FUNCAO_EXECUTA_ACAO (ACAO;VALOR)

*Permite realizar diferente ações na renderização da página em que esta função for utilizada.*

- Parametros: 
    - ACAO e VALOR: Ação é uma constante que define a ação que será realizada quando a página do questionário renderizar e Valor é a . As ações podem ser:
        - **ANTERIOR**: foça o questionário a retornar a página anterior , Valor: passar vazio
        - **ENCERRAMENTO**: altera o status do cliente, Valor: passar o status desejado
        - **GRAVASTATUS**: atualiza no banco de dados o status do cliente, Valor: pasar o status desejado
        - **MENSAGEM**: Abre uma mensagem de validação na página do questionário, a mensagem aparece depois de clicar no botão prosseguir e não permitirá que o questionário avance para a próxima página. Valor: Texto que irá aparecer na tela para orientação do respondente
        - **OCULTARQUESTAO**: fará com que a questão não seja renderizada na página. Valor: NRQUESTAO
        - **OCULTAROPCAO**: Fará com que uma determinada opção fique oculta. valor: NRQUESTAO>OPCAO, lembrando que o sinal ">" server para separar o código da questão do valor da opção
        - **PAGINA**: indica que para qual página o questionário será redirecionado, valor: número da página
        - **PROXIMA**: executa um pulo para a próxima página do questionário, Valor: passar vazio
        - **REDIRECIONA**: sai do questionário e acessa uma outra url. Obs.: é importante antes de redirecionar o questionário utilizar o comando GRAVASTATUS, para que o cliente receba o status desejado. Valor: url desejada
        - **RESPOSTA**: Atribui um valor de resposta para uma determinada questão. Valor: NRQUESTAO>VALOR. lembrando que o sinal ">" server para separar o código da questão do valor da opção
        - **SELECIONAOPCAO**: Seleciona uma determinada opção em uma questão. Valor: NRQUESTAO>OPCAO. lembrando que o sinal ">" server para separar o código da questão do valor da opção
        - **TRAVA**: Bloqueia uma determinada opção de uma questão. Valor: NRQUESTAO>OPCAO. lembrando que o sinal ">" server para separar o código da questão do valor da opção
        - **TROCACONTATO**: Atualiza o nome do contato na listagem. Valor: novo nome
        - **TROCATELEFONE**: Atualiza um numero de telefone na listagem. Valor: TELEFONE>POSICAO. onde TELEFONE é o nr. de telefone novo é posição é qual posição do telefone será atualizada, a posição varia de 1 a 5
- Exemplo 1:
    - **$FUNCAO_CONTAR_OPCOES(Q1)**
- Resultado:
    - Conta todas as opções cadastradas para pergunta Q1
- Exemplo 2:
    - **$FUNCAO_CONTAR_OPCOES(Q1;S)**
- Resultado:
    - Conta apenas as opções que foram selecionadas na pergunta Q1
- Exemplo 3:
    - **$FUNCAO_CONTAR_OPCOES(Q1;NS)**
- Resultado:
    - conta apenas as opções que NÃO foram selecionadas na pergunta Q1