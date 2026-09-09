---
title: Secure Software in Research
layout: base.njk
permalink: /resources/ask-the-assessor/secure-software/
---

# Secure Software in Research

## August 2025

[Resources](/resources/) >> [Ask The Assessor](/resources/ask-the-assessor/) >> Secure Software in Research

**RRCoP Community Question to the Assessors**

## Many researchers develop and use various software and repositories as part of their research. How do assessors look at the overall software usage and development requirements?

*published: August 2025*

[[RRCoP Question and Use Cases]](https://drive.google.com/file/d/1NRmovt0b8mQ-FWHmtl5SRMpIn6v5vlBT/view?usp=sharing) [[View & Download Full Frazier & Deeter Responses]](https://drive.google.com/file/d/1LY6WhLFZlRI7VsL7d_8mriJC9dwUDaEB/view?usp=sharing)

### Assessor Response

Assessors are tasked with evaluating an entity's use and implementation of technology against objective standards. Software usage and development is a critical component of many compliance frameworks and security standards. While researchers are primarily focused on advancing their work, they may unintentionally overlook important security considerations related to software lifecycle management.

All software—whether dynamic or largely static—requires some level of maintenance or evaluation to ensure it remains secure or protected from unauthorized use. Assessors will therefore seek to understand how software is used, who has access to it, what types of data or systems it interfaces with, who is responsible for its development or maintenance, and what safeguards are in place to prevent misuse or exploitation.

In addition, software repositories must also be reviewed to ensure unauthorized changes cannot be introduced into production systems, which could open pathways for automated or code-based attacks.

## How is researcher developed software/code treated with regards to application allowlisting/denylisting? Must each environment approve (if allowlisting) every compilation of the software, or can they approve certain directories as allowed for development?

### Assessor Response

Application allowlisting and denylisting are sound security practices, provided those implementing them understand the risks associated with executing unverified code. For instance, a development or sandbox environment that is isolated from sensitive systems or the internet may allow broader access than a production environment interacting with critical infrastructure or regulated data.

Allowlisting implementation varies by system, but often, a single rule can be applied to a directory or set of executables, covering future compilations or iterations without requiring reapproval for each version. Assessors typically conduct interviews with developers and subject matter experts to understand the application's purpose and risk profile, then evaluate whether the allowlisting strategy is appropriate based on that context. Generally, if a specific version of the software is approved, future versions built in the same environment and for the same use case may be considered acceptable—assuming no substantial change in risk profile.

## Are researchers expected to follow a secure software development framework?

### Assessor Response

Yes. Like any activity involving change or creation, software development should adhere to a defined and approved process within the institution. Adopting a secure development framework ensures that changes are implemented consistently and with due regard for security, reducing the likelihood of vulnerabilities due to human error or malicious intent.

Researchers should balance the focus on innovation with the responsibilities associated with operating in a shared or regulated computing environment. Following a secure development lifecycle (SDLC) helps ensure that research is conducted in a manner that protects both the integrity of the research and the security of institutional data and systems.

## Many research projects use older versions of software/libraries in order to reproduce the results of other researchers. Is that out-of-date software allowed if reviewed and approved by enclave owners/managers? What should enclave owners/managers consider in their review and approval?

### Assessor Response

Using older software versions can introduce security risks, as vulnerabilities in outdated libraries or applications may be well known and actively exploited. However, in controlled environments such as sandboxes or isolated enclaves, it may be permissible—especially if required for reproducibility in scientific research.

Enclave owners or managers must assess the associated risks, including potential exposure to sensitive data or critical systems. If approved, such use should be restricted to low-risk environments, with compensating controls to minimize potential impact. A formal review should consider the necessity of the older version, the feasibility of isolating it, and the availability of mitigations (e.g., network segmentation, restricted user access, logging).

## Much of the software used by universities and researchers is open source software with no particular vendor or maintainer. Do enclave owners/managers need to reach out to a vendor/owner for review and approval, or is an internal (to the university) review sufficient?

### Assessor Response

For open-source software, external vendor review is typically not required. Internal review by qualified personnel—such as IT security staff or software governance teams—is generally sufficient, provided it aligns with institutional policies.

Researchers should regularly review the open-source repositories they depend on for updates or patches, as the community often actively maintains these projects. Whenever feasible, using the most recent stable version helps mitigate known vulnerabilities while ensuring compatibility with security best practices.

## How do assessors view software and library repositories, including open source (e.g. cpan, pypi), Commercial (e.g. Microsoft Store, Apple Store), and internal (e.g. RedHat mirror or Microsoft WSUS server)? What kind of review must enclave owners/managers conduct for what amounts to an unlimited number of potential software? Can enclave owners/managers approve the entire repository?

### Assessor Response

Assessors evaluate repositories based on the potential risk of the software they contain, particularly in terms of access to sensitive data, systems, or networks. A blanket approval of an entire repository may be acceptable under certain circumstances, especially when access is limited to well-controlled environments and if the repository itself is trusted (e.g., digitally signed, monitored for changes).

However, enclave owners/managers should exercise discretion when approving repositories. The nature of the research, sensitivity of associated data, and security posture of the repository should inform the approval process. Implementation of a formal review process for software acquisition—whether from open source, commercial, or internal sources—demonstrates adherence to security best practices and will generally satisfy assessor expectations.

## Additional Context Provided by RRCoP Community

### General Approach Described

Researchers develop and use multiple pieces of software during the course of their research. Sometimes, this software is commercial, many times it is open source, and very often, it is developed by the researchers themselves using open source tools and libraries. We're specifically thinking of controls in the Configuration Management (CM) and System and Information Integrity (SI) families.

**DEVELOPED/DEVELOPING SOFTWARE** — How is researcher developed software/code treated with regards to application allowlisting/denylisting? Must each environment approve (if allowlisting) every compilation of the software or can they approve certain directories as allowed for development? Are researchers expected to follow a secure software development framework?

**OUT OF DATE SOFTWARE/LIBRARIES** — Many research projects use older versions of software/libraries in order to reproduce the results of other researchers. Is that out-of-date software allowed if reviewed and approved by enclave owners/managers? What should enclave owners/managers consider in their review and approval?

**OPEN SOURCE SOFTWARE** — Much of the software used by universities and researchers is open source software with no particular vendor or maintainer. Do enclave owners/managers need to reach out to a vendor/owner for review and approval, or is an internal (to the university) review sufficient?

**SOFTWARE REPOSITORIES** — How do assessors view software and library repositories, including open source (e.g. cpan, pypi), Commercial (e.g. Microsoft Store, Apple Store), and internal (e.g. RedHat mirror or Microsoft WSUS server). What kind of review must enclave owners/managers conduct for what amounts to an unlimited number of potential software? Can enclave owners/managers approve the entire repository?

---

*For more information, Contact: Bob Woosley | Frazier & Deeter National Practice Leader | [bob.woosley@frazierdeeter.com](mailto:bob.woosley@frazierdeeter.com)*

*This material is based upon activities supported by the National Science Foundation and Interagency Agreement #A2407-049-089-064206.0. Any opinions, recommendations, findings, or conclusions expressed are those of the author(s) and do not necessarily reflect the views of the National Science Foundation. [NSF Award 2409859](https://nsf.gov/awardsearch/showAward?AWD_ID=2409859)*
