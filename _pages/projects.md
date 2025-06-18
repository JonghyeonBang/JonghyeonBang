---
layout: collection
title: "Projects"
permalink: /project/
---

<div class="projects">
  {% for post in site.posts %}
    {% if post.categories contains "Projects" %}
      <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
      <p>{{ post.excerpt }}</p>
    {% endif %}
  {% endfor %}
</div>
