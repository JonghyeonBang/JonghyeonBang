---
layout: profile
title: Blog
permalink: /blog/
---
<p class="section-label">Editorial Space</p><h1>Blog</h1>
{% assign issues = site.blog_issues | sort: 'date' | reverse %}
{% if issues.size > 0 %}{% include research-list.html items=issues %}{% else %}<p>No issues published yet.</p>{% endif %}
