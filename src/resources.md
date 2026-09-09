---
title: Resources
layout: base.njk
permalink: /resources/
---

# Resources

Curated resources from the RRCoP community and partner communities.

<ul class="resource-list">
{%- for item in collections.resources %}
  <li>
    <a href="{{ item.data.link or item.url }}">{{ item.data.title }}</a>
    {%- if item.data.summary %} — {{ item.data.summary }}{% endif %}
  </li>
{%- endfor %}
</ul>
