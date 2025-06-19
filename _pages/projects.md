---
layout: collection
title: ""
permalink: /project/
---

<h2>Current Projects</h2>
<div class="projects">
  {% assign all_projects = site.posts | where:"categories","Projects" %}
  {% assign current_projects = all_projects | where: "status", "current" %}
  {% for post in current_projects %}
    <div class="project-item">
      <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
      <p>{{ post.excerpt }}</p>
    </div>
    {% unless forloop.last %}<hr>{% endunless %}
  {% endfor %}
</div>

<h2>Past Projects</h2>
<div class="projects">
  {% assign past_projects = all_projects | where: "status", "past" %}
  {% for post in past_projects %}
    <div class="project-item">
      <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
      <p>{{ post.excerpt }}</p>
    </div>
    {% unless forloop.last %}<hr>{% endunless %}
  {% endfor %}
</div>
