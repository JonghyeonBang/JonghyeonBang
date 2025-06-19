---
layout: collection
title: "News"
permalink: /news/
---

<div class="News">
  {% assign all_news = site.posts | where: "categories", "News" %}
  {% for post in all_news %}
    <div class="news-item">
      <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
      <p>{{ post.excerpt }}</p>
    </div>
    {% unless forloop.last %}
      <hr>
    {% endunless %}
  {% endfor %}
</div>
