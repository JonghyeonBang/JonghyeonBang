---
layout: profile
title: Publications
permalink: /publication/
---
<h1>Publications</h1>
{% assign items = site.publications | sort: 'date' | reverse %}
{% include research-list.html items=items kind="publication" %}
