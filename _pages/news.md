---
layout: profile
title: News
permalink: /news/
---
<h1>News</h1>
{% assign items = site.posts | where_exp: 'post', 'post.categories contains "News"' %}
{% assign years = items | group_by_exp: 'post', 'post.date | date: "%Y"' %}
{% for year in years %}<section><h2>{{ year.name }}</h2><ul class="update-list">{% for item in year.items %}<li><time datetime="{{ item.display_date | default: item.date | date_to_xmlschema }}">{{ item.display_date | default: item.date | date: '%b %-d' }}</time><a href="{{ item.url | relative_url }}">{{ item.title }}</a></li>{% endfor %}</ul></section>{% endfor %}
