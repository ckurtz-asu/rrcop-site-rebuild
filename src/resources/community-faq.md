---
title: Community FAQ
layout: base.njk
permalink: /resources/community-faq/
---

# Community Q&A of Slack Archives

This page is long term preservation of some of the conversations from HigherEdCUI Slack Site [[Join from this page](/join)] beyond 90 days deletion policy.

* [A Primer: Setting up a CUI environment with Azure / GCC high](#primer-cui-azure)
* [Is ITAR information automatically CUI?](#itar-cui)
* [Dual-Booting Workstations for CUI](#dual-booting)
* [FCI vs Fundamental Research (FR) - Legal](#fci-vs-fr)
* [NIH will require 800-171 starting January 25, 2025](#nih-800-171)

<a id="primer-cui-azure"></a>
### A Primer: Setting up a CUI environment with Azure / GCC high

Shared by an established institution for broad community value

1. There's a difference between a subscription and a tenant.
2. Suggest getting a separate subscription than the standard one for the campus, as well as a separate tenant
3. Suggest getting a secondary sandbox subscription to run tests on (cheaper, and used as a dev environment)
4. Suggest using separate emails for the GCC high cui portion (eg myFirstName@enclave.our_university.edu instead of myFirstName@our_university.edu)
5. Figure out what default mechanism will be used for exchanging encrypted emails with people inside of Our_University (purview?) and outside of Our_University (Identrust? Etc.)
6. Suggest setting up a separate Azure space for the VDI environment – this is tricky because you need a landing zone, bastion hosts and all kinds of fun back-end stuff before you even get to your first VDI pools
7. Set up separate authentication methods (avoid bringing your main campus auth mechanism into scope, but make sure your IAM office controls the actual identity
8. Figure out how this environment will interact with your secure HPC environment (if any)
9. Set up a general pool of VDIs for all things common to all programs (office, browsers, adobe?)
   a. Figure out profiles, profile Data and storage
   b. FIGURE OUT LICENSING!
   c. Will your licenses work if the usernames don't match? Eg: myFirstName@our_university.edu instead of myFirstandLastName@our_university.edu (Our_University's won't)
   d. Our_University, for instance, has to have named licenses for all Adobe usage inside this space.
   e. Will usage in this environment still be considered educational? Terms & Conditions vary
   f. Figure out project-specific pools (eg, GPU needs, or special software needs)
10. Figure out endpoints, in 3 stages
    a. Endpoints allowed to interact with the enclave with no ability to ingress or egress data (RDP dumb terminals)
    b. Endpoints allowed to interact with the enclave that can ingress and egress data using approved mechanisms, but cannot actually contain CUI (this is where "Our_University" is right now, moving towards 9c)
    c. Endpoints that can contain CUI data
11. Figure out approved storage mechanisms (Apricorn FIPS-compliant drives?)
12. Figure out how data is ingressed and egressed from the enclave – eg, large data sets that cannot be securely emailed, etc
13. Figure out costing and recharging for the general pools and project-specific pools
14. Suggest using a SOC-as-a-service with experience in CUI space to help with changing settings, running SCAP scans, etc.

This set of resources should last you the first 2-3 years, after which you will need to start figuring out data acquisition machines and other super-specialized equipment collecting CUI, and then maybe another year before you'll have to figure out how to get endpoints in scope that will be authorized to contain CUI. "Our_University" resources for subscription and tenant setup assistance include:
* Security (owners of the environment, sign contract with SOCaaS etc, audits, etc)
* IAM Office (account processing)
* Messaging (GCC email)
* Collaboration (Teams, etc, in GCC High)
* Networking
* Storage and servers
* Hosting & Virtualization

While this may be possible as College / Dept IT, my recommendation is that this be done with close collaboration with Central IT, so that documentation and audits are made much simpler – and it's easier to apply changes as the environment gets more complex.

<a id="itar-cui"></a>
### Is ITAR information automatically CUI?

Q: Is ITAR information automatically considered CUI?
1. Community Answer 1: ITAR is NOT automatically CUI. Nor is EAR automatically CUI. Both are likely marked as CUI//SP-EXPT. Export controls gets very tricky depending on what it is, what the classification is, the jurisdiction, the parties, the use, the users, and so forth.
2. Community Answer 2: Note - It's also critical to remember that if a component is ITAR and it goes on a non-ITAR component, then the entire 'thing' becomes ITAR.
3. External Answer: [Is ITAR Data CUI?](https://cmmccompliance.us/is-itar-data-cui/) & [Video from Summit7](https://www.youtube.com/watch?v=xhFX1eCHHSI)

<a id="dual-booting"></a>
### Dual-Booting Workstations for CUI

Q: Someone came up with the idea of using dual-booting workstations for CUI, let one boot image meet 800-171 compliance and store, process, transmit CUI...while the other boot image is our general purpose image for everyday tasks. From a C3PAO perspective, how would this fair in a 800-171 assessment?
* Community Answer: Dual-boot will likely fail a NIST 800-171 assessment by failing to meet NIST 800-171R2 3.4.6 "Employ the principle of least functionality by configuring organizational systems to provide only essential capabilities." Analysis: The dual-use hardware and boot violates the principle of least functionality and providing only essential capabilities. The "general use" image and dual-boot functionality is not an essential capability for the system to perform CUI operations and greatly increases the risk of CUI data spillage and/or leakage.

<a id="fci-vs-fr"></a>
### FCI vs Fundamental Research (FR) - Legal

Community Member: How are folks interpreting fundamental research designations within DoD contracts and CMMC Level1?

FCI is defined as: "Information, not intended for public release, that is provided by or generated for the Government under a contract to develop or deliver a product or service to the Government, but not including information provided by the Government to the public (such as on public Web sites) or simple transactional information, such as necessary to process payments."

Fundamental Research (FR) "'Fundamental research' means basic and applied research in science and engineering, the results of which ordinarily are published and shared broadly within the scientific community, as distinguished from proprietary research and from industrial development, design, production, and product utilization, the results of which ordinarily are restricted for proprietary or national security reasons."

Community Member Responses citing official documentation:

Defense Acquisition Regulations System 48 CFR Parts 204, 212, 217, and 252 | [Docket DARS–2020–0034] | RIN 0750–AK81 | [https://www.govinfo.gov/content/pkg/FR-2024-08-15/pdf/2024-18110.pdf](https://www.govinfo.gov/content/pkg/FR-2024-08-15/pdf/2024-18110.pdf#)

Fundamental Research Comment: Many respondents commented that clarification is needed regarding whether CMMC applies to fundamental research.

Response: Fundamental research, as defined in National Security Decision Directive (NSDD) 189, is published and broadly shared within the scientific community and, as such, cannot be safeguarded as either FCI or CUI; however, if fundamental research has the potential to become CUI, it would be subject to the requirements of CMMC.

Cybersecurity Maturity Model Certification (CMMC) Program | 32 CFR Part 170 | [Docket ID: DoD-2023-OS-0063] | RIN 0790-AL49 | [https://www.federalregister.gov/d/2024-22905/p-327](https://www.federalregister.gov/d/2024-22905/p-327)

Fundamental Research Response: One of the main purposes of the CMMC Program is to ensure that DoD contracts that require contractors to safeguard CUI will be awarded to contractors with the ability to protect that information. All contractor-owned information systems that process, store, or transmit CUI are subject to the requirements of NIST SP 800-171 when DFARS clause 252.204-7012 is included in the contract. This is the case whether or not the contractor is engaged in fundamental research.

To the extent that universities are solely engaged in fundamental research that only includes information intended for public release and does not include FCI or CUI, no CMMC requirement is likely to apply. When a research institution does process, store, or transmit FCI, the information should be adequately safeguarded in accordance with the FAR clause 52.204-21, if applied. When a research institution does process, store, or transmit CUI, the information should be adequately safeguarded in accordance with the DFARS clause 252.204-7012, if applied. That clause makes the contractor owned information system subject to NIST SP 800-171, which includes requirements for Awareness and Training (AT) and Physical Protection (PE). The CMMC Program provides a means to verify compliance.

Defense Acquisition Regulations System 48 CFR Parts 204, 212, 217, and 252 | [Docket DARS-2020-0034] | RIN 0750-AK81 | [https://www.federalregister.gov/d/2024-18110/p-79](https://www.federalregister.gov/d/2024-18110/p-79)

Comment: Many respondents commented that clarification is needed regarding whether CMMC applies to fundamental research.

Response: Fundamental research, as defined in National Security Decision Directive (NSDD) 189, is published and broadly shared within the scientific community and, as such, cannot be safeguarded as either FCI or CUI; however, if fundamental research has the potential to become CUI, it would be subject to the requirements of CMMC.

<a id="nih-800-171"></a>
### NIH will require 800-171 starting January 25, 2025

Implementation Update for Data Management and Access Practices Under the Genomic Data Sharing Policy | Notice Number: NOT-OD-24-157 | [https://grants.nih.gov/grants/guide/notice-files/NOT-OD-24-157.html](https://grants.nih.gov/grants/guide/notice-files/NOT-OD-24-157.html)

The "NIH Security Best Practices for Users of Controlled-Access Data" update will be effective on January 25, 2025, at which point adherence to this standard will be included in new or renewed Data Use Certifications or similar agreements stipulating terms of access to controlled-access human genomic data regardless of whether the Approved User is supported by NIH or not.

RRCoP Community Response:

See: [https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-171r3.pdf](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-171r3.pdf)

800-171 allows for POA&Ms and even "enduring exceptions" "Some systems, including specialized systems (e.g., industrial/process control systems, medical devices, computer numerical control machines), may have limitations on the application of certain security requirements. To accommodate such issues, the system security plan — as reflected in requirement 03.15.02 — is used to describe any enduring exceptions to the security requirements. Individual, isolated, or temporary deficiencies are managed though plans of action and milestones, as reflected in requirement 03.12.02.
