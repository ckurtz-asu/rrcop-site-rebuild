---
title: Security Protection Assets
layout: base.njk
permalink: /resources/ask-the-assessor/security-protection-assets-june-2025/
---

# Security Protection Assets

## June 2025

[Resources](/resources/) >> [Ask The Assessor](/resources/ask-the-assessor/) >> Security Protection Assets

**RRCoP Community Question to the Assessors**

## Academic institutions have several centralized and decentralized services. How are security protection assets assessed when they are shared services serving a CUI enclave as well as other departments/users on campus? Assume that the service is providing the correct requirements as needed by the enclave.

*published: June 2025*

[[View & Download Full Frazier & Deeter Responses]](https://drive.google.com/file/d/1HZEqMs0ksBwlbzsWuigLVhalLOVq2H9v/view?usp=drive_link)

### Assessor Response

Academic institutions often use a mix of centralized and decentralized IT services. These shared services—such as identity management, firewalls, logging platforms or infrastructure components—may serve both the general university population and specialized environments like a Controlled Unclassified Information (CUI) enclave. When these shared services intersect with systems that handle CUI, they must be assessed to ensure they meet the strict security requirements outlined in standards like NIST SP 800-171 and CMMC.

### Why This Matters

Even if a shared service meets the enclave's technical requirements, its broader exposure (serving non-CUI departments) introduces potential risk. The goal is to ensure that shared services do not weaken the security posture of the CUI enclave, regardless of who else uses them.

### Scoping and Boundary Definition

First, a clear understanding of the CUI enclave is essential. This involves identifying and documenting all systems, users, applications and data flows that handle CUI. Visual tools such as data flow diagrams and network boundary drawings can help illustrate how CUI moves through the environment. The enclave should be defined as the logically and physically isolated area where CUI is processed, stored or transmitted, forming the foundation for all subsequent security assessments and control implementation.

Once the CUI enclave is clearly defined, the next step is to evaluate shared services to determine whether they fall within the enclave boundary. Shared services—such as identity management, logging or infrastructure—must be assessed for their role and potential impact on CUI. Key questions to guide this evaluation include: Does the service process, transmit or store CUI? Can the service or its administrators alter security settings within the enclave? Could users outside the enclave influence the service in a way that compromises CUI? If the answer to any of these is yes, the service must be considered in scope and subject to the same security assessments and controls as the enclave itself.

### Shared Service Categorization

Shared services fall into specific categories that determine how security controls apply. *(See the "2025_06 - F&D Grid" in the full Frazier & Deeter response for the categorization matrix.)*

### Risk-Based Assessment of Shared Services

Even when a shared service meets technical requirements, additional risk may be introduced by its use in a broader environment.

Key risk areas to assess:

* **Multitenancy Risks:** Is there proper logical or physical separation between enclave users and other users on the service? Can one tenant (e.g., a non-CUI department) affect another?
* **Access Control:** Are accounts, roles and sessions used by enclave users clearly separated from those used by non-enclave users?
* **Audit and Logging:** Can the system generate enclave-specific audit trails? Are logs segregated and regularly reviewed for signs of compromise?
* **Configuration Management:** Can general administrators change settings that affect the enclave? If so, are there access restrictions and change controls in place?

### A Starting Place on Demonstrating Compliance

To effectively manage and communicate the security posture of shared services that support a CUI enclave, institutions must go beyond documentation; they must actively demonstrate compliance. This includes evidence that controls are implemented, monitored and maintained over time. Here are practical steps to get started with demonstrating compliance:

* **Identify Shared Services:** List any centralized or departmental services that interact with or support the CUI enclave.
* **Define Their Role:** Describe what each service does for the enclave and which CUI controls it helps satisfy.
* **Document Security Measures:** Capture basic evidence like configurations, access controls, and enclave-specific logging in use.
* **Assess Shared Risk:** Consider how non-enclave usage might introduce risk and what compensating controls are in place.
* **Track Gaps and Progress:** Maintain a tracking mechanism to monitor missing controls, responsible parties, and remediation timelines.
* **Visualize System Boundaries:** Create diagram(s) showing enclave connections to shared services and applied protections.
* **Coordinate with Stakeholders:** Communicate requirements to shared service owners to ensure alignment with CUI protection needs.

### Illustrative Example: Centralized Active Directory (AD)

Let's say a university-wide AD service is used to authenticate users across campus, including those accessing the CUI enclave.

Since the AD system:

* Authenticates enclave users
* Is managed by central IT
* Does not exclusively serve the enclave

…it is considered a Security Protection Asset and is in-scope for assessment.

Security measures should include:

* Role-based access control (RBAC) for enclave users
* MFA specifically enforced for enclave access
* Dedicated logging for enclave-related authentication events
* Change management to ensure enclave-related configurations can't be altered by general campus administrators

## Additional Context Provided by RRCoP Community

### General Approach Described

For example, Security Information and Event Management systems (SIEMs), firewalls, VPNs, Configuration Management Databases (CMDBs), and authentication and authorization services may be provided to all of campus, and not just a CUI enclave. One primary reason for using campus-wide services is non-duplication of services and effort, which reduces costs, allows for larger licensing discounts, and reduced support efforts of staff. However, the concern of many is that by increasing the scope of an enclave to include shared services, the assessment costs and complexity increase.

### Passive Security Protection Assets

These security assets assist in security, but do not directly impact the function of the enclave; they may monitor data flows and activity and may block activity in and out of an enclave. Examples of this category are SIEMs, campus-wide Intrusion Detection/Prevention Systems (IDS/IPS) - in addition to enclave specific systems, and the people that review such logs for anomalies or suspected incidents. Generally, compromise of these systems would not allow access to CUI data within the enclave.

### Active Security Protection Assets

These security assets play an active role in the operation of the enclave; they may provide authentication, authorization, group policies, or malware definitions. Examples of this category are Active Directory/LDAP, Firewalls, Anti-Malware control systems. Generally, compromise of these systems could lead to unauthorized access to the enclave.

### Security Protection Data and Central Services as an External Service Provider

As defined in the 32 CFR 170 rule, Security Protection Data (SPD) is: "data stored or processed by Security Protection Assets that are used to protect an OSA's assessed environment, and (not necessarily at the same time) security-relevant information which, if disclosed, could aid an attacker in the compromise of the system. It includes, but is not limited to: configuration data required to operate a security protection asset, log files generated by or ingested by a security protection asset, data related to the configuration or vulnerability status of in-scope assets, and passwords that grant access to the in-scope environment."

"External Service Provider (ESP) means external people, technology, or facilities that an organization utilizes for provision and management of IT and/or cybersecurity services on behalf of the organization. In the CMMC Program, CUI or Security Protection Data (e.g., log data, configuration data), must be processed, stored, or transmitted on the ESP assets to be considered an ESP."

Does storing SPD on central services systems make central services an ESP? If not, under what conditions does it not?

### RRCoP Example 1

University of Anywhereville maintains servers for an on-premises enclave designated for handling CUI and other restricted research. Network traffic to and from the enclave is managed using both the campus NG firewall solution and host-based firewalls. The campus endpoint protection and vulnerability services are installed on all systems in the enclave. The enclave and associated technologies are all maintained and operated by the central IT organization. Researchers access the enclave sign-in page by first authenticating into the campus VPN solution using their campus credentials and campus multi-factor solution (separate local credentials are used to authenticate into the enclave). All logs from the enclave are sent to the campus-managed SIEM.

### RRCoP Example 2

Private University leverages the same environment as University of Anywhereville, but also leverages the campus-wide Identity and Access Management System for authentication. Researchers use their university-wide credentials to authenticate to the enclave.

### RRCoP Example 3

State University chooses to store their baseline configuration data in a system outside the enclave managed by central services (e.g. Sharepoint, Confluence). This information is critical to maintaining the business continuity/disaster recovery of both systems within the enclave and any Security Protection Assets supporting the enclave.

---

*This material is based upon activities supported by the National Science Foundation and Interagency Agreement #A2407-049-089-064206.0. Any opinions, recommendations, findings, or conclusions expressed are those of the author(s) and do not necessarily reflect the views of the National Science Foundation. [NSF Award 2409859](https://nsf.gov/awardsearch/showAward?AWD_ID=2409859)*
