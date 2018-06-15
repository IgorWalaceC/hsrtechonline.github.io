---
layout: post
title:  "Troca Status do Cliente"
projeto: "fastQuestAdmin"
permalink: /fastQuestAdmin/funcoes/troca-status-do-cliente
pasta: "funcoes"
---	
<div class="row" markdown="1">
<div class="6u 12u(small)" markdown="1">
## $FUNCAO_EXECUTA_ACAO (ENCERRAMENTO;VALOR)

Obs: Função válida somente para os status compartilhados entre todos os Jobs. 

Atualiza o status do cliente em memória, o seja, o status não é efetivado.

- Parametros: 
    - ACAO: ENCERRAMENTO
    - VALOR: número do status desejado
- Exemplo:
    - **$FUNCAO_EXECUTA_ACAO(ENCERRAMENTO;102)**
- Resultado:
    - Troca o status em memória do cliente para 102
</div>
<div class="6u 12u(small)" markdown="1">
![Imagem de apoio 1]({{ "/assets/img/troca-status-cliente-01.png" | prepend: site.baseurl }})
</div>
</div>
<div class="row" markdown="1">
<div class="6u 12u(small)" markdown="1">
### $FUNCAO_EXECUTA_ACAO (FORCASTATUS;<DESCRICAO DO STATUS>)

Obs: Função válida somente para os status que são específicos do Job selecionado.

Atualiza o status do cliente em memória, o seja, o status não é efetivado.

- Parametros: 
    - FORCASTATUS: **FORCASTATUS**
    - VALOR: descrição do status desejado
- Exemplo:
    - **$FUNCAO_EXECUTA_ACAO(FORCASTATUS;Recusou prosseguir com a entrevista)**
- Resultado:
     -Troca o status em memória do cliente para 
</div>
<div class="6u 12u(small)" markdown="1">
![Imagem de apoio 2]({{ "/assets/img/troca-status-cliente-02.png" | prepend: site.baseurl }})
</div>
</div>