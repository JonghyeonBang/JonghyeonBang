---
layout: profile
title: News
permalink: /news/
---
<h1>News</h1>
{% assign items = site.posts | where_exp: 'post', 'post.categories contains "News"' %}
{% assign years = items | group_by_exp: 'post', 'post.date | date: "%Y"' %}
{% for year in years %}
<section><h2>{{ year.name }}</h2><ul class="update-list news-list">
{% for item in year.items %}
<li>{% include news-date.html item=item %}<div class="news-content"><div class="news-title">{{ item.title }}</div>{% assign description = item.content | strip_html | strip %}{% if description != '' %}<div class="news-description">{{ item.content }}</div>{% endif %}</div></li>
{% endfor %}
</ul></section>
{% endfor %}
