---
layout: post
title:  "Entrevista"
projeto: "fastQuestAdmin"
permalink: /fastQuestAdmin/entrevista
nomePasta: "Entrevista"
---
# Entrevista

Entrevista é o questionário que o cliente, no caso do CATI, responde para o entrevistador ou por meio de um CAWI onde responde um formulário recebido via e-mail.
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