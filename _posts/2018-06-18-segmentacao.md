---
layout: post
title:  "Segmentação"
projeto: "fastQuestAdmin"
permalink: /fastQuestAdmin/segmentacao
nomePasta: "Segmentacao"
---
# Segmentação

Segmentação é uma divisão da listagem por meio de critérios definidos para o controle da ordem dos contatos a serem alimentados para o PABX.
<div class="row">    
    {% for post in site.posts %}
        {%if post.projeto == "fastQuestAdmin" %}
            {%if post.pasta == page.nomePasta %}  
            <ul  class="4u 6u$(small)">
                <li>
                    <a href="{{ site.baseurl}}{{ post.url}}">{{ post.title }}</a>  
                </li>
            </ul>
            {% endif %}
        {% endif %}
    {% endfor %}    
</div>