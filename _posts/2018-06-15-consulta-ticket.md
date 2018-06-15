---
layout: post
title:  "Consulta Ticked"
projeto: "fastQuestAdmin"
permalink: /fastQuestAdmin/ticket/consulta-ticket
pasta: "Ticket"
---
# Consulta Ticket
<div class="row" markdown="1">
<div class="6u" markdown="1">
1. Selecione "Consulta de Ticket" na página principal;
</div>
<div class="6u" markdown="1">
![Imagem de apoio 1]({{ "/assets/img/consulta-ticket-01.png" | prepend: site.baseurl }})
</div>                               
</div>
Então teremos os campos Ticket, Data Ocorrência, codJob, Exceção Original e Informações Adicionais.

Ticket: Código do Ticket.

Data Ocorrência: Dia, mês e ano que gerou o ticket.

codJob: Código do projeto.

Exceção Original: Erro não tratado.

Informações Adicionais: Erro tratado.

![Imagem de apoio 2]({{ "/assets/img/consulta-ticket-02.png" | prepend: site.baseurl }})

{:start="2"}
2. Clique em "Procurar Registros";

Então teremos os campos por padrão Ticket, igual e um campo vazio.

Ticket: É o campo em que define em qual coluna do Grid será feito a consulta. Pode ser alterado para Data Ocorrência, codJob, Exceção 
Original e Informações Adicionais.

Igual: É o campo em que define a condição para achar o que será procurado. Pode ser Alterado para diferente, inicia com, não inicia com, termina com, não termina com, contém, não contém, nulo, não nulo, está em e não está em.

Campo vazio: É o campo em que se coloca o que será procurado. Por exemplo se está definido como codJob você irá colocar o ID do projeto.

![Imagem de apoio 3]({{ "/assets/img/consulta-ticket-03.png" | prepend: site.baseurl }})
<div class="row" markdown="1">
<div class="6u 12u$(small)" markdown="1">
{:start="3"}
3. Defina o tipo do que será procurado no campo "Ticket";
4. Defina a condição para achar o que será procurado no campo "igual";
5. Coloque o que será procurado;
6. Para pesquisar clique em "Procurar", se quiser voltar para padrão os campos dados de pesquisa clique em "Resetar".
</div>
<div class="6u 12u$(small)" markdown="1">
![Imagem de apoio 4]({{ "/assets/img/consulta-ticket-04.png" | prepend: site.baseurl }})
</div>                               
</div>