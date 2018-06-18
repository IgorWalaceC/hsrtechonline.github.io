---
layout: post
title:  "Respostas"
projeto: "fastQuestAdmin"
permalink: /fastQuestAdmin/respostas
nomePasta: "Respostas"
---
# Respostas

São as respostas concedidas pelo entrevistado para o entrevistador que serão gravadas no questionário.

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