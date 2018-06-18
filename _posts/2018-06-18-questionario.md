---
layout: post
title:  "Questionário"
projeto: "fastQuestAdmin"
permalink: /fastQuestAdmin/questionario
nomePasta: "Questionario"
---
# Questionário

Questionário é o local onde será adicionado as páginas, questões e condições sobre o projeto.

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