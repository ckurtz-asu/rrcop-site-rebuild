---
title: Resources
layout: base.njk
permalink: /resources/
---

# Resources

We are interested in suggestions of additional content for this section. Please share additional suggestions to [info@regulatedresearch.org](mailto:info@regulatedresearch.org). It will be added if it's valuable, accurate and a solid alignment of this project's mission.

There is a wealth of great resources out there — these have been vetted:

**[Higher Education specific Resources](/resources/higher-ed-presentations/)**
* [Assorted presentations given by Higher Education professionals](/resources/higher-ed-presentations/)
* [Purdue's End-to-End CUI Workflow and Deliverables #NSF 1840043](/resources/peer-practices/purdues-end-to-end-cui-workflows)
* [Regulated Workshop Series](/resources/peer-practices/workshops/2020-community-workshops)
* [Effective Cybersecurity for Researchers](https://library.educause.edu/-/media/files/library/2022/6/researchcybersecurity.pdf)
* [Regulated Research Benchmark Study](https://drive.google.com/file/d/1n6J55eSNvjXmXh5ZiGBuvlRQHPCiRX-x/view?usp=sharing)
* [Workshops](/resources/peer-practices/workshops)
* Community developed implementation guide
* [Poll Results](/resources/polls/)

**[Federal Sponsored Resources](/resources/federally-sponsored-resources/)**

**[Compliance Frameworks](/resources/industry/)**

**[Compliance Updates](/compliance)** (updated regularly)

**[Tools and Templates](/resources/tools-templates/)**
* [Policy](/resources/policy/)

**[Advocating and Influencing](/advocacy/advocating-influencing)**

**[Ask the Assessor](/resources/ask-the-assessor)**
* [March 2026 - HIPAA in Research Environments](/resources/ask-the-assessor/hipaa)
* [December 2025 - Determining Readiness for an Assessment](/resources/ask-the-assessor/readiness-for-assessment)
* [October 2025 - Managing Lab and Specialized Equipment](/resources/ask-the-assessor/lab-equipment)
* [August 2025 - Navigating Software Security in Research](/resources/ask-the-assessor/secure-software)
* [June 2025 - Security Protection Assets](/resources/ask-the-assessor/security-protection-assets-june-2025)
* [April 2025 - Navigating Policy Hierarchies in Support of Compliance](/resources/ask-the-assessor/policy-hierarchy-april-2025)
* [February 2025 - Managing Multiple Data Types in Single Enclave](/resources/ask-the-assessor/multiple-data-types-feb2025)

<ul class="resource-list">
{%- for item in collections.resources %}
  <li>
    <a href="{{ item.data.link or item.url }}">{{ item.data.title }}</a>
    {%- if item.data.summary %} — {{ item.data.summary }}{% endif %}
  </li>
{%- endfor %}
</ul>
