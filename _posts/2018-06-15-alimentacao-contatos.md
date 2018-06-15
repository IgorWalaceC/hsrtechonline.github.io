---
layout: post
title:  "Alimentação Contatos"
projeto: "fastQuestAdmin"
permalink: /fastQuestAdmin/discador/alimentacao-contatos
pasta: "Discador"
---
# Alimentação Contatos
	
A alimentação de contatos no FastQuest é definida através das configurações do projeto na aba "Discador" conforme imagem abaixo:
![Imagem de apoio 1]({{ "/assets/img/alimentacao-de-contatos-01.png" | prepend: site.baseurl }})
- Intervalo de envio para a discadora;
    - Tempo em minutos que a re-alimentação de contatos será realizada
- Intervalo para recuperação status discadora (Será deprecado em breve);
    - Tempo em minutos que o serviço de recuperação consulta no PABX a situação de cada contato alimentado posteriormente, apesar de se poder alterar este tempo não é recomendado que ele seja alterado, pois, aumentando este tempo pode gerar atraso na realimentação e também na atualização da situação dos contatos discados.
- Quantidade de contatos na fila.
    - Indica quantos contatos serão inseridos na fila do PABX a cada tentativa de re-alimentação, este número é sempre respeitado como número máximo de contatos que podem ficar armazenados na fila, ou seja, A cada tentativa de re-alimentação serão adicionados contatos no PABX até que a fila fique com o número que é apresentado nesta configuração.
        - Exemplo: Se minha fila tem 80 contatos e esta configuração indica que na fila deve haver 100 contatos, na próxima tentativa de re-alimentação serão adicionados 20 novos contatos para que seja considerado que a fila esta com o seu número máximo de contatos.