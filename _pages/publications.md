---
layout: collection
title: "Publications"
permalink: /publication/
---

<div class="publications">
  {% for post in site.posts %}
    {% if post.categories contains "Publication" %}
      <h3>
        <a href="{{ post.link | default: post.url }}" target="_blank" rel="noopener">
          {{ post.title }}
        </a>
      </h3>
      <p>{{ post.excerpt }}</p>
    {% endif %}
  {% endfor %}
</div>
