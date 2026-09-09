---
title: Lab Equipment and Specialized Equipment
layout: base.njk
permalink: /resources/ask-the-assessor/lab-equipment/
---

# Lab Equipment and Specialized Equipment

## October 2025

[Resources](/resources/) >> [Ask The Assessor](/resources/ask-the-assessor/) >> Lab Equipment and Specialized Equipment

**RRCoP Community Question to the Assessors**

### What is considered best practice for scenarios with lab equipment or specialized equipment where the equipment cannot be configured to meet CMMC requirements? What kind of documentation is expected for these assets beyond mention in the System Security Plan (SSP)?

*published: October 2025*

[[RRCoP Question and Use Cases]](https://drive.google.com/file/d/1N3heR0-4L26Ser5wiSK7XZqdwgxiXHhV/view?usp=sharing) [[View & Download Full Frazier & Deeter Responses]](https://drive.google.com/file/d/1PcUC9CuqNLIUOVbnOZkKt9uMnFEggDAR/view?usp=drive_link)

## Additional Context Provided by RRCoP Community

Universities use many commercially available and locally created laboratory equipment to conduct research. Examples include wind tunnels, oscilloscopes, gene sequencers, and measuring devices.

Many of these devices may run a general computing environment but must run specific versions of operating systems or drivers, where the University may not be able to configure the device according to CMMC or even change the configuration of the device.

**Shared Equipment** — Some of this equipment is expensive and shared with other projects that may not have or support CUI. What steps should a project take to protect CUI on shared equipment?

**Example 1: Gene Sequencer** — A gene sequencer is being used on a CUI project to sequence a part of a genomic structure. The researcher must share the equipment with other sequencing projects that don't have CUI. Are there best practices for how to safely share that equipment that meets CMMC requirements?

**Example 2: CNC Machine** — A Computer Numerical Control (CNC) machine is being used to produce parts from information considered CUI (ex: blueprint), but it's managed by an ancient computer running Windows XP. The manufacturer will not support the system if it's upgraded or changed in any way. What are the best practices for this situation?

## Assessor Response

When it comes to CMMC, the Department of Defense (DoD) and CMMC Accreditation Body recognize that not every system or device within an organization — especially research institutions or labs — can be fully hardened or configured to meet every technical requirement.

The key is proper classification, risk management, and documentation.

Certain organizational systems qualify as Specialized Assets under the CMMC Level 2 Scoping Guidance. These are devices that, due to design, function, or vendor restrictions, cannot be fully configured to meet all CMMC or NIST SP 800-171 security requirements. Examples include laboratory instruments, manufacturing equipment, test benches, or other operational technology (OT) systems that are essential to business operations but not traditional IT assets.

Where able, contractors should apply compensating and risk-based controls to protect these assets. Regardless, in these cases, the contractors should perform the following:

* Document in the asset inventory
* Document in the network and data flow diagrams
* Document asset treatment in the SSP
  * Show these assets are managed using the contractor's risk-based security policies, procedures, and practices
  * Document in the network diagram of the CMMC assessment scope.
* Risk or exception register
  * Record deviations from standard controls.
  * Include risk rating, mitigation measures, approval, and review cadence.
  * Reference specific CMMC controls (e.g., AC.L2-3.1.20 for remote access restrictions).
* Compensating Control Worksheet (CCW)
  * Describe how alternate or procedural controls meet the intent of the requirement.
  * Tie the rationale to risk reduction, not convenience.

While these assets might not meet every control directly, best practice is to apply compensating or alternative protections, including but not limited to:

* Isolate or segment the system (network segmentation, VLANs, firewalls)
* Restrict logical and physical access (least privilege, badges, dedicated workstations)
* Limit data exposure (no direct CUI processing or storage, or move CUI off-device promptly)
* Monitor activity (logging and alerting for anomalous connections)
* Establish procedural controls (manual review, documented change procedures, or supervision)

When the contractor goes through CMMC Level 2 readiness and/or assessment, some considerations include:

* The assessor will verify that specialized assets are properly identified and managed,
* Review your risk documentation and compensating controls,
* Ensure the SSP, POA&M, and risk register are consistent, and
* Confirm there's no uncontrolled CUI exposure through these devices.

On a periodic basis, the contractor should review and revalidate whether the limitation still applies. While doing so, the compensating measures should be assessed to ensure those measures remain effective and document these reviews in continuous monitoring documentation. Additionally, all users should be trained on identifying and properly handling CUI on a periodic basis.

Ultimately, the contractor is to treat specialized systems as known exceptions, not ignored risks, and maintain clear traceability between identified risks and documented mitigations.

## Some of this equipment is expensive and shared with other projects that may not have or support CUI. What steps should a project take to protect CUI on shared equipment?

### Assessor Response

When lab or specialized equipment is shared across projects, and only some of those projects involve CUI, the goal is to prevent CUI contamination of systems and data while maintaining operational flexibility.

It's important to define and document the data boundaries for each of these assets within the System Security Plan (SSP). Clearly establish whether the equipment itself handles CUI, or if it only supports research that uses CUI elsewhere; and if possible, ensure CUI processing happens outside the shared system (e.g., in a secure enclave or analysis workstation).

Next, it's important to implement logical and procedural segmentation, where possible. Access control is a strong and key component to the protection of CUI and disclosure to the appropriate personnel. Some best practices include:

* Use separate user accounts or project profiles for CUI and non-CUI projects
* Utilize role-based access controls to restrict who can access systems containing CUI, including the use of authentication mechanisms
* Establish procedures to guide users on how to treat and handle CUI (i.e. CUI data exports are to only go to approved, encrypted storage locations)

Additionally, segregation of storage and processing of CUI vs non-CUI can aid with the protection of CUI. All CUI data should be stored within a secure, compliant repository (such as a protected file share or CUI enclave), not directly on shared equipment, when possible. If available, use equipment for data collection or generation, then transfer to secure storage for analysis.

Lastly, training is equally as important as technical measures. Be able to provide researcher-specific training on handling CUI in shared environments that can include:

* Don't mix CUI and non-CUI results on the same media.
* Don't leave CUI files on shared drives.
* Don't connect the equipment to non-secure cloud storage.

---

*For more information, Contact: Bob Woosley | Frazier & Deeter National Practice Leader | [bob.woosley@frazierdeeter.com](mailto:bob.woosley@frazierdeeter.com)*

*This material is based upon activities supported by the National Science Foundation and Interagency Agreement #A2407-049-089-064206.0. Any opinions, recommendations, findings, or conclusions expressed are those of the author(s) and do not necessarily reflect the views of the National Science Foundation. [NSF Award 2409859](https://nsf.gov/awardsearch/showAward?AWD_ID=2409859)*
