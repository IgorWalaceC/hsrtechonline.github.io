---
layout: post
title:  "Configuração da Comunicação com o PABX"
projeto: "fastQuestAdmin"
permalink: /fastQuestAdmin/discador/configuracao-da-comunicacao-com-o-pabx
pasta: "Discador"
---
# CONFIGURAÇÃO DA COMUNICAÇÃO COM O PABX

Hoje a comunicação com o PABX é feita através do arquivo Web.config localizado no servidor do site WebAdmin.

São utilizadas as seguintes chaves de configuração:

- \<add key="UrlVonix" value="ip do serviço de integração" />
    - Determina onde a api de integração do PABX se comunica com o FastQuest
- \<add key="LoginDiscadora" value="login" />
    - Credencial que identifica o cliente "FastQuest" para acesso a api rest da Vonix
- \<add key="SenhaDiscadora" value="senha" />
    - Senha da credencial para acesso a api rest da vonix
- \<add key="IntervaloRecuperacaoDiscador" value="tempo"/>
    - Tempo em minutos que a consulta dos contatos discados no PABX é realizada

Desta forma o FastQuest consegue estabelecer comunicação com o PABX e manter a alimentação dos contatos nos projetos.

Observação: Esta previsto mudar a forma como esta configuração é feita, no futuro cada Fornecedor poderá ter configurações distintas para diferentes tecnologias de PABX