---
layout: profile
title: Projects
permalink: /projects/
---
<h1>Projects</h1>
{% assign items = site.posts | where_exp: 'post', 'post.categories contains "Projects"' %}
{% include research-list.html items=items kind="project" %}
