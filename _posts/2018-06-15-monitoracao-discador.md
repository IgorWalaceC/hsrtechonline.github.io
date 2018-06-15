---
layout: post
title:  "Monitoração Discador"
projeto: "fastQuestAdmin"
permalink: /fastQuestAdmin/discador/monitoracao-discador
pasta: "Discador"
---
<div class="row" markdown="1">
<div class="6u 12u$(small)" markdown="1">
1. Na página inicial clique em "Monitoração";

2. Irá abrir um SubMenu, ache a opção "Discador" e clique;
</div>
<div class="6u 12u$(small)" markdown="1">
![Imagem de apoio 2]({{ "/assets/img/monitoracao-discador-01.png" | prepend: site.baseurl }})
</div>                               
</div>
Como visto no item "Alimentação de contatos" existem dois serviços responsáveis para manter a integração com o PABX: o Alimentador e o Recuperador.

Tanto o alimentador quanto o recuperador são executados de tempos em tempos para manter as filas do PABX alimentadas, a configuração destes serviços podem ser feitas na tela de configurações conforme descrito no item "Alimentação de contatos"

Na tela de Monitoração é possível acompanhar a alimentação individualmente de cada projeto e a recuperação de contatos no PABX. Obs.: A recuperação é unica para todos os projetos.

Abaixo temos a tela do serviço de recuperação e o significado de cada uma das informações fornecidas por ele.

![Imagem de apoio 2]({{ "/assets/img/monitoracao-discador-02.png" | prepend: site.baseurl }})

Situação: O serviço pode estar nas seguintes situações:

- *AguardandoProximaExecução*:  significa que o serviço esta adormecido aguardando o horário da próxima execução
- *Parado*: significa que a recuperação não esta sendo executada e portando a alimentação está comprometida (Este serviço deve estar sempre sendo executado e não deve estar parado)
- *Executando*: significa que o serviço está sendo executado neste exato momento
- *Falha*: significa que o serviço falhou e portanto está parado esta situação deve ser informada imediatamente ao suporte técnico através do email: atendimento@hsrtech.com.br

Tanto o serviço de Alimentação quanto o de Recuperação podem ser reiniciados a qualquer momento através do botão "Reiniciar" que fica situado no canto superior direito  da barra de título de cada serviço (botão azul).

Observação: Toda vez que alguma alteração for feita nas configurações dos serviços a reinicialização é necessária para que as alterações sejam aplicadas na próxima vez que o serviço for executado.

Abaixo temos a lista dos projetos que tem fila automática ativa, cada linha com o "botão expandir (+)" representa um projeto.

![Imagem de apoio 3]({{ "/assets/img/monitoracao-discador-03.png" | prepend: site.baseurl }})

"Expandir detalhes" - Mostra as filas automáticas dentro de cada projeto

"Situação" - indica a situação atual da alimentação do projeto uma lista das possíveis situações está descrita acima.

"Data e hora da última execução" - indica a data e a hora em que a alimentação foi executada pela última vez.

"Data e hora da próxima execução" - indica a data e hora em que a alimentação será executada novamente.

"Período de alimentação" - indica o em que período do dia a alimentação é realizada

"Botão iniciar" - Caso a alimentação do projeto esteja parada este botão inicia a alimentação que será executada de tempos em tempos de acordo com a configuração conforme explicado em "Alimentação de contatos"

"Botão parar" - Caso a alimentação esteja ativada este botão desativa a alimentação manualmente, sendo assim, a alimentação só será novamente ativada se o botão Iniciar for clicado manualmente.

![Imagem de apoio 4]({{ "/assets/img/monitoracao-discador-04.png" | prepend: site.baseurl }})

"Expandir detalhes do grupo" - Exibe a lista de segmentações que está ativa no grupo 

"Nome da fila" - É o nome da fila no Tristerix e deve ser cadastrado no "Criando grupo"

"Id da fila" - É o número identificador na fila do Tristerix

![Imagem de apoio 5]({{ "/assets/img/monitoracao-discador-05.png" | prepend: site.baseurl }})


Nesta página temos duas grandes opções:

- Serviço de recuperação;
- Alimentador.

Dentro de serviço de recuperação, no topo da página, temos 2 opções:

- "Iniciar alimentação", situada no canto superior direito dentro do serviço;

- "Reinicializar recuperação", situada no canto superior direito dentro do serviço.

Dentro de alimentador, no meio da página, temos 3 opções:

- "Reiniciar" que serve para reiniciar as alimentações. Obs: não tem problema reiniciar quando já estiver rodando, ele continua com os contatos já alimentados.
- "Iniciar alimentação";
- "Parar alimentação".