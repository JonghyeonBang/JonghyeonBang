---
layout: collection
title: ""
permalink: /project/
---

<div style="max-width: 800px; margin: 0 auto;">

  <h2 style="text-align: center;">Current Projects</h2>
  <div class="projects">
    {% assign all_projects = site.posts | where:"categories","Projects" %}
    {% assign current_projects = all_projects | where: "status", "current" %}
    {% for post in current_projects %}
      <div class="project-item">
        <h3>{{ post.title }}</h3>
        <p>{{ post.excerpt }}</p>
      </div>
      {% unless forloop.last %}<hr>{% endunless %}
    {% endfor %}
  </div>

  <hr style="border: none; border-top: 1px solid #333; margin: 40px 0;">

  <h2 style="text-align: center;">Past Projects</h2>
  <div class="projects">
    {% assign past_projects = all_projects | where: "status", "past" %}
    {% for post in past_projects %}
      <div class="project-item">
        <h3>{{ post.title }}</h3>
        <p>{{ post.excerpt }}</p>
      </div>
      {% unless forloop.last %}<hr>{% endunless %}
    {% endfor %}
  </div>

</div>
