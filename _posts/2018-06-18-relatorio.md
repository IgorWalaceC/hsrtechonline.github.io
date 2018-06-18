---
layout: post
title:  "Relatórios"
projeto: "fastQuestAdmin"
permalink: /fastQuestAdmin/relatorios
nomePasta: "Relatorio"
---
# Relatórios

Gerar relatórios para análise.
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