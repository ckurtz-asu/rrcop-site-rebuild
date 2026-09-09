---
title: Managing Multiple Data Types in Single Enclave
layout: base.njk
permalink: /resources/ask-the-assessor/multiple-data-types-feb2025/
---

# Managing Multiple Data Types in Single Enclave

## February 2025

[Resources](/resources/) >> [Ask The Assessor](/resources/ask-the-assessor/) >> Managing Multiple Data Types in Single Enclave

**RRCoP Community Question to the Assessors**

## Can a single enclave infrastructure securely handle multiple data classification types (e.g., HIPAA, ITAR, DFARS, FERPA) provided the required security controls (NIST 800-171) are followed?

*published: February 2025*

[[View & Download Full Frazier & Deeter Responses including the three additional sub-questions]](https://drive.google.com/file/d/1IylNBpTjQTvXvO7xQNW0RZwiT8xqrVHY/view?usp=drive_link)

### Assessor Response

A single enclave can securely handle multiple data classifications; however, the entity must consider all in-scope regulatory and contractual requirements per each type of data classification.

When handling multiple data types, it is important to understand how controls must be implemented to ensure compliance with each relevant regulation or framework, independently of the others. Similar control requirements across each framework or regulation should be implemented and maintained at the most stringent level. This can be performed by consolidating all relevant regulations and frameworks into a custom control set fit for the type of data being stored within the enclave environment. There are numerous mappings available that can help with this.

While controls need to be implemented at the strictest level, there are a number of baseline security controls that are fairly universal in principle that should be implemented when deploying this environment.

* **Network Segmentation:** Secure enclaves are able to support multiple network segments, allowing an entity to keep one type of sensitive data separate from other sensitive data while leveraging shared infrastructure.
  * Entities can leverage segmentation strategies such as: Virtual Private Clouds (VPCs) or Virtual Networks (VNet), subnets, private VLANs, virtual machines (VMs) and/or containerization to separate environments securely.
* **Access Management:** Logically segmenting data via access permissions will ensure only those individuals who need access to such data have that access. Essentially, the entity should follow the least privilege or "need to know" principle. Additionally, the entity needs to consider the use of strong authentication controls, including MFA.
* **Data Classification and Mapping:** Data must be classified based on sensitivity, regulatory requirements and access restrictions. Once data is classified, it can be mapped to the appropriate security zones within a secure enclave which ensures proper handling, storage and access.
* **Encryption and Data Protection:** Data protection should be enforced both at rest and in transit by utilizing strong encryption. Keep in mind, when implementing encryption within the environment, encryption and key management requirements could be unique to each framework and regulation.
* **Logging and Monitoring:** Utilize a SIEM tool for real-time logging, monitoring and alerting.
* **Vulnerability Management:** Even a well-isolated enclave can be compromised by misconfigurations, insider threats, unpatched systems and more. Vulnerability management is critical to maintain the enclave's security and usually is a requirement across most regulatory standards.

## Additional context and university-specific use cases

### RRCoP Context

Universities are increasingly required to host and manage multiple regulated data types (e.g., HIPAA, ITAR, DFARS, FERPA) on a single system to balance operational cost and efficiency with regulatory compliance. The central challenge is whether appropriate data separation mechanisms in the controls (e.g., authentication, encryption, and permission management) meet compliance requirements.

**Questions**

1. When handling multiple data classifications (HIPAA, ITAR, DFARS, FERPA) together within a single enclave, is data separation sufficient through file system and security groups?
2. What amount of separation is needed between projects handling regulated data types subject to different compliance requirements called out in contracts such as HIPAA (law), ITAR (regulation), CUI and PHI (data classification), and NIST 800-171, CMMCv2 L2 (control framework)?
3. Can one system be used to host multiple projects, each with their own requirement?

**General Approach Described**

Various academic institutions have implemented enclaves using the following principles.

*Separation Methods:*

* Data is segregated at varying levels of granularity, such as through folder permissions, namespaces, or tenant-specific virtual machines.
* Advanced mechanisms like encryption and PKI-based access control may add an additional layer of security.
* The enclave has a separate internal network with a clearly defined access path through gateway, login portal, firewall and other technical access controls.

*Compliance Frameworks:*

* Institutions ensure systems meet the highest standard of controls required by the strictest data type on the system (e.g., NIST 800-53 Moderate, HITRUST, NIST CSF, or NIST SP 800-171).
* Individual projects are separated and meet the compliance requirements applicable to each respective project.

*Access Control and Monitoring:*

* Explicit access is granted based on need, with detailed monitoring and auditing to ensure no unauthorized data access or sharing.

### Example Use Cases

#### University One

We operate two compliant systems that hold various data types in a single system. ENCLAVE-ONE satisfies HITRUST CSF 9.3 for HIPAA to be allowed to hold and process PHI. Data is separated by folders in the file system and controlled by Unix group permissions. This system holds open data as well as PHI and FERPA data, and intellectual property data. It also holds EAR controlled software.

ENCLAVE-TWO satisfies 800-53 Moderate and 800-171 and can satisfy HIPAA, FERPA, DFARS, ITAR, EAR, etc. Data is separated by encryption and PKI. There are controls to explicitly share data and access and grant permissions to download.

#### University Two

The ENCLAVE-THREE provides researchers with high-performance, secure, and flexible computing environments enabling the analysis of sensitive data sets restricted by federal privacy laws, proprietary access agreements, or confidentiality requirements.

The ENCLAVE-THREE is a virtual server environment designed for the secure hosting and analysis of restricted research data. The environment is designed to create one or more walled off areas, called researcher-enclaves, where researchers' data are segregated from other researchers' projects in a flexible manner (that is, to say, as coarse or fine-grained a manner as necessary).

*Datatypes on the same system*

* Attorney-Client Privileged Information
* Controlled Unclassified Information (CUI)
* Export Controlled Research (regulated by ITAR, EAR)
* IT Security Information
* Other Sensitive Institutional Data
* Personally Identifiable Information (PII)
* Protected Health Information (PHI, regulated by HIPAA)
* Sensitive Identifiable Human Subject Research
* Student Education Records (regulated by FERPA)
* Student Loan Application Information (regulated by GLBA)

*Separation*

* HIPAA virtual machines are hosted in an enclave dedicated to HIPAA/PHI data type.
* CUI virtual machines are hosted in bespoke tenants, project-by-project (tenant per project).
* Other DUA-specific data types are hosted on a case-by-case basis.

#### University Three

ENCLAVE-FOUR is configured (within VMWare) so that each tenant is on its own VLAN and isolated from other tenants within the system. The only cross-VLAN traffic is to central services, including managed file transfer in and out of the enclave, and controlled access to specific external resources.

External resources include items such as reports uploaded to agency SFTP servers, specimen label printers in the lab, etc.

Cross-VLAN traffic is managed by the enclave firewall, Internet traffic by forward and reverse proxies as well as the firewall.

#### University Four

University Four has an authentication and authorization service, separate from the service supporting the campus, for access control to several secure research services. Enclave five utilizes virtual machines hosted in a Cloud service that supports government data. Each research project contains computing and storage resources segregated from other research projects using security groups. Security groups define what ports are available and IP address space can access the resources within the security group. All data is encrypted at rest. The services processing, storing, or transmitting controlled data run in private IP space. Access to the Cloud virtual machines is only authorized through a full-tunnel VPN and multi-factor authentication services separate from similar services that support the campus. While enclave five is designed to support both CUI and PHI, projects working with PHI data are subject to all the requirements for CUI data.

---

*This material is based upon activities supported by the National Science Foundation and Interagency Agreement #A2407-049-089-064206.0. Any opinions, recommendations, findings, or conclusions expressed are those of the author(s) and do not necessarily reflect the views of the National Science Foundation. [NSF Award 2409859](https://nsf.gov/awardsearch/showAward?AWD_ID=2409859)*
