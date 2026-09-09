---
title: Navigating Policy Hierarchies in Support of Compliance
layout: base.njk
permalink: /resources/ask-the-assessor/policy-hierarchy-april-2025/
---

# Navigating Policy Hierarchies in Support of Compliance

## April 2025

[Resources](/resources/) >> [Ask The Assessor](/resources/ask-the-assessor/) >> Navigating Policy Hierarchies in Support of Compliance

**RRCoP Community Question to the Assessors**

## Academic institutions are subject to existing state, local or institutional policies, procedures and standards to support their operations, including any CUI environments. Is it acceptable to refer to these and inherit them when a control is satisfied by a higher-level of policy?

*published: April 2025*

[[View & Download Full Frazier & Deeter Responses]](https://drive.google.com/file/d/1KNFtB8a8A5lz8FDbexR6J112L1ra6PB5/view?usp=sharing)

### Assessor Response

It is acceptable and recommended to reference and inherit existing state, local or institutional policies, procedures and standards from higher level policy—provided that:

1. The totality of all institutional policies, procedures and standards adequately address all regulatory requirements applicable to the institution (e.g., NIST 800-171 for CUI environments).
2. Underlying standards and procedures are accurately linked to their overarching policies.
3. Policies and procedures are easily accessible and navigable for the intended audience.
4. Policies and procedures are properly maintained (owned, reviewed, updated, approved, communicated) to promote adherence, while also eliminating duplicate and conflicting content.
5. Exceptions to policies and procedures are documented and approved.

### Why This Is Acceptable

* A layered approach provides greater flexibility in the organization of policies and procedures while also ensuring complete control definition and authority at each department, business unit, individual and system.
* Policy inheritance is a recognized approach in maintaining a combination of security and compliance where "common controls" or "inherited controls" are shared across systems, business units or organizations.
* When properly layered and referenced, policies and procedures eliminate duplication and conflicting organizational requirements, making them easier to enforce.
* It promotes standardization and consistency across departments and systems.

### Recommendations

* **Organization and referencing:** Tagging policy and procedure content with the regulation (where applicable) they uphold, increases the awareness and level of compliance with regulatory obligations (e.g., HIPAA).
* **Leverage GRC tools:** Many of the GRC tools today have functionality to logically link policies and procedures to others. Additionally, they can provide a single pane of glass for examining institutional controls by a single regulation.
* **Reference clearly:** In documentation (e.g., SSP, POA&M), state the specific policy/procedure being inherited, including version/date.
* **Demonstrate applicability:** Provide a mapping or explanation of how the inherited control meets the specific requirement.
* **Ensure enforcement:** Confirm that the inherited policy is implemented and enforced within the applicable environment (e.g., CUI).

## Additional context and university-specific use cases

### RRCoP Context

For example, some academic institutions are subject to both state and local policies in addition to the policies specific to an institution, there may also be documentation specific to a CUI enclave. These policies build on each other and sometimes need refinement by an addendum to cover the specific scope and mission of the assessment against 800-171 or CMMCv2 level 2 or other set of controls as appropriate for the system being assessed.

### System of Campuses or University-Level Policies

These are broad, high-level policies that apply across the entire organization. These policies provide the foundation and overarching rules that lower levels must follow.

*Made-Up System-Level Policy Example:*

* **3.5.7 Password Complexity:** All university accounts must use passwords of at least 12 characters, including uppercase, lowercase, numbers, and special characters.
* **3.5.3 MFA:** Multi-factor authentication (MFA) is required for all administrative accounts.
* **3.2.1:** All University employees (including student employees) with access to University Information Resources must complete security awareness training within the first 30 days from date of hire. Information Security Refresher Training must be completed annually, within 30 days of the anniversary of the previous instance of such training.
* **3.2.2:** Additional role-based security awareness training must be required for employees and DCCs whose responsibilities require Elevated Access, including access to Restricted Information, as defined in the University Information Resource Classification Standard, and related Information Systems. Role-based training must be completed on an annual or periodic basis, as required by the relevant regulatory or contractual compliance programs.
* **3.3.3:** The procedure for the collection, monitoring, management, and review of system, application, network, and User activity must meet the minimum standards specified in the University Logging and Monitoring Standard.

### Campus / Department such as Research IT Policies

Typically inherits system-level policies but can add stricter enforcement for certain user groups (e.g., IT admins, faculty handling research data).

*Made-Up Campus-Level Policy Example:*

* **3.5.7 Password Complexity + 3.5.8 Password Reuse:** All research systems must enforce a password history of 6 previous passwords and lock out users after 6 failed attempts.
* **3.5.3 MFA:** MFA is enforced for VPN and remote access to research computing resources.

### CUI Private Enclave policies or standards

This level is highly restrictive, ensuring full compliance with CMMC Level 2 / 800-171 for handling Controlled Unclassified Information (CUI).

*Made-Up CUI Enclave-Level Policy Example:*

* **Passwords – 3.5.7 Password Complexity + 3.5.6 Inactive Accounts:** All users accessing CUI environments must use passwords of at least 15 characters, expiring after 60 days. Accounts are disabled after 30 days of inactivity.
* **3.5.3 MFA:** MFA is enforced at every authentication event for CUI systems. Privileged account access requires separate MFA authentication from normal campus user accounts.
* **3.2.2:** Role based training for personnel working with restricted data includes
  * Export Control Training
  * Additional for IT Professionals
    * Information Security Policy Training for IT Professionals
    * Information Security Incident Response Training
    * Secure System Administration and Developer Certification
* **3.3.3:** Logged events must be reviewed under the following circumstances:
  * Weekly
  * After substantial system changes
  * To support security investigations
  * To ensure the information system is capable of auditing events

### Made-Up SSP Example

3.5.3 – Use multifactor authentication for local and network access to privileged accounts and for network access to non-privileged accounts [LINK to CUI Enclave-Level MFA Policy]

3.5.6 – Disable identifiers after a defined period of inactivity-privileged accounts [LINK to CUI Enclave-Level Passwords Policy]

3.5.7 – Enforce a minimum password complexity and change of characters when new passwords are created [LINK to CUI Enclave-Level Passwords Policy]

3.5.8 – Prohibit password reuse for a specified number of generations [LINK to Research IT-Level Passwords Policy]

---

*This material is based upon activities supported by the National Science Foundation and Interagency Agreement #A2407-049-089-064206.0. Any opinions, recommendations, findings, or conclusions expressed are those of the author(s) and do not necessarily reflect the views of the National Science Foundation. [NSF Award 2409859](https://nsf.gov/awardsearch/showAward?AWD_ID=2409859)*
