---
title: Perspectives
layout: base.njk
permalink: /advocacy/perspectives/
---

# Perspectives

RRCoP is committed to amplifying voices and advocating for the importance of regulated research. We've all encountered situations or challenges that discover our unique perspectives (often representing a broader use case within research institutions).

By sharing your use cases, you're not only contributing to a broader conversation but also empowering others who may be facing similar challenges. Together, we can foster understanding, drive change, and advocate for a future where regulated research thrives. [[Add your Perspective](https://forms.gle/ZxnReJjznoV6c4cU9)]

This content is designed to provide blog-style guidance to the community about important issues that have not yet been fully and formally addressed. But with the maturity reached on the "biggest risks", we can now pay attention to the next size rocks.

* [Organizational Fit: Regulated Research is Best Suited Within Research Compliance Office](#organizational-fit-regulated-research-is-best-suited-within-research-compliance-office)
* [Shared Responsibility Categories](#shared-responsibility-categories)
* [Scoping](#scoping)
* [The difference between enterprise approach and research](#the-difference-between-enterprise-approach-and-research)
* [Managing distributed labs and centralized enclaves](#managing-distributed-labs-and-centralized-enclaves)
* [Provide compliance support for faculty](#provide-compliance-support-for-faculty)
* [Legacy and Costly Equipment](#legacy-and-costly-equipment)
* [Shared Labs and Resources](#shared-labs-and-resources)

## Organizational Fit: Regulated Research is Best Suited Within Research Compliance Office

image by: Carolyn Ellis, [carolynEllis@asu.edu](mailto:carolynEllis@asu.edu)

## Shared Responsibility Categories

composed by: Carolyn Ellis, September, 2024

* Research Administration & Contracts
  * Research Administration ensures that research contracts meet their compliance terms. They communicate compliance obligations to researchers, assist with contract reviews, and support audit documentation and reporting for projects involving security terms in contracts.
* Centralized IT
  * Central IT manages large-scale infrastructure, such as authentication systems, centralized logging, network security tools, and institution-wide incident response and risk assessment frameworks. They also provide shared resources like training and centralized security tools to support compliance.
* Local IT
  * Local IT provides direct support to research teams by handling system-specific requests, such as installing software, managing last-mile networking, and assisting with patch management and vulnerability mitigation for systems under their control. Local IT may play additional roles in incident response.
* Researcher / PI
  * The Researcher / PI is responsible for ensuring that their research team complies with all contract-related security protocols, including participation in risk assessments and incident reporting. They must also ensure that their team is trained and acting in accordance with all institutional and federal requirements.

## Scoping

As higher education our primary objective is teaching and research. Defining the boundary of our secured enclaves can change in size, other things, such as the security boundary, are harder to change once the regulated research program is running. Once the scope is set, the audience for policies, the activities of enforcing the controls, and the impact of compliance on the research activities becomes clear.

## The difference between enterprise approach and research

composed by: Erik Deumens January, 2024

Architecture, design, processes, and compliance controls are different. They have been developed in enterprise computing to meet the enterprise computing mission and needs. But research and research computing needs differ in some ways and that needs to be addressed. This is where the struggle academia has with auditors about compliance frameworks comes from.

In academia, there are also enterprise processes, such as those for managing HR, wireless networks, teaching and learning support services, are relevant and existing compliance frameworks and auditor approaches are workable. These systems tend to evolve slowly after initial deployment, as enterprise systems often do.

However, it is the research world where compliance frameworks impose some, by no means all, controls that are at odds with the very nature of research processes. Then implementing these controls puts the research mission at risk.

An example process may be useful here to illustrate the issue: Compliance frameworks include controls on the software that is available and can be run on a system. The control requires that software is only installed after review and risk assessment so that it is "allow lists"; all other software is "blocked lists" and processes and technical controls are in place to prevent blacklisted software from running on the system. The very purpose of a research system is to allow the researchers to develop and test new things, which involves writing software, which can be very complex. Often much more complex than any enterprise piece of software. Clearly it is impractical, and jeopardizes the mission of the research system, to require that every change in every piece of research software, being developed and debugged on the system, is reviewed before it can be run. It must be understood and acceptable by auditors that compensating controls are admissible to manage the risk of the system and still meet compliance.

This is where communication of the academic community, through organizations like RRCoP and NIST, with the agencies that impose the compliance requirements, like DoD, are extremely valuable.

## Managing distributed labs and centralized enclaves

composed by: Erik Deumens January, 2024

Custom building of compliance support for each and every lab in a university or research institute is not sustainable. That is where the focus on centrally managed and operated enclaves add value and scalability while keeping the cost manageable and still meet the goals of securing research data and activities. However, the labs are an integral part of the academic research computing environment and they need to be covered in some way. Here we will discuss some approaches.

With the central enclave in operation, the university is in a good place: There is knowledgeable staff whose activities and talents make sure the enclave works, is operated in a compliant way. The system security plan (SSP) exists and is up-to-date. Required monitoring activities are carried out. Policies and procedures have been written, are updated as needed, and are implemented and carried out as described. Regular internal and/or external audits are carried out to assure the university administration that indeed the institution is operating in a compliant way.

The enclave can be used as a foundation of a distributed system that includes labs and the instruments and systems located in them. The part of the workflows of research projects that take place inside the lab are often relatively small and highly specialized activities when measured against the full list of controls in a compliance framework. This does not mean to imply in any way that the work in the lab is a small part of the scientific impact of the research workflow or even that the activities in the lab take up a small part of the total time the workflow takes. We are talking only about the compliance activities. Typically, these are relatively small in number, with the most important one being only grant access to authorized persons. Another one is to make sure data only leaves the lab through authorized and compliant pathways.

Because of this, it becomes feasible, manageable, and sustainable, to record the details of managing compliance of the activities in the lab as a relatively small customized appendix to the SSP of the university-wide enclave. It only has to document the additional access controls, the data management controls for data flow outside of the enclave, and additional risk assessment controls, and possibly a few more. All other controls are already handled.

An example may illustrate the workflow. An engineering project is designing a circuit board that is subject to export control and International Trade in Arms Regulations (ITAR). The developers work in the enclave to do the computations and the design, maybe with a CAD program. Then the design is sent, by secure and approved means to a company that makes the board. The board is sent, again by approved means, to the lab where the board is installed in an approved computer to test the board. The test data is collected and sent to the enclave, for example over a secure campus network. There the developers use the test data to make the next version of the design for the board.

## Provide compliance support for faculty

composed by: Erik Deumens January, 2024

Faculty are hired to do research and teach, not to make sure their labs are compliant with some regulation or law. They do play an important role and they need to take the training and then do their part. But there is a lot of work involved in compliance that should never be their job. Here we will pick apart roles and responsibilities to show how institutions can help accomplish that.

The faculty and their research associates and students are the ones most knowledgeable about the research workflows, the data, and the software that will be used and created in the projects that have compliance requirements associated with them. The research and contracts and grants office(s) are knowledgeable and negotiate the details of the compliance requirements as specified in the contracts. It is natural for the compliance officers to reach out to the faculty for answers to detailed questions regarding compliance, but this is not a sustainable and scalable practice. It is often staff in information technology who can apply details about how computers and networks are configured and what measures are being taken at the institutional level to safeguard data and systems. Facilities staff if the one with expertise on how labs and buildings are secured.

A sustainable and scalable compliance program at a university will assign compliance tasks to various roles, who, — and this is crucial, — need to communicate easily and often with each other.

* Grant administrators take care of contractual formulation of the compliance requirements
* University governance ensures that relevant policies are published
* Information technology (IT) and facilities staff build and operate the network, computing, and storage infrastructure that are used on the campus, possibly with special dedicated "enclaves" for regulated research
* Information technology, information security, and internal auditor staff will review and check on whether the policies, processes, and controls are operating as documented and report their findings to the office of research and contracts and grants to assure them that the university is operating as specified in the contracts they sign
* Faculty and their research associates and students need to provide the details about the research workflows and specialized lab equipment. With that information the staff in the other roles can define the details of how compliance requirements will be met. Then the researchers will take the necessary training that tells them how to carry out their research in a way that meets the requirements.

The faculty should not be the ones who deal with the minutiae of compliance beyond what they have to do to carry out their research in a compliant way as taught in the training.

## Legacy and Costly Equipment

composed by: Carolyn Ellis February, 2024

Research equipment is an incredibly large capital expense. Due to the lifespan of this investment, it is unrealistic that all equipment will remain in compliance with changing regulations. Legacy systems may still be in use, and are isolated with compensating controls.

## Shared Labs and Resources

composed by: Carolyn Ellis February, 2024

Shared Labs and Resources Research is at all advanced education institutions is primarily meant to be published and broadly disseminated. The facilities are built with this type of research in mind. This results in both open fundamental research and CUI operating in either close physical proximity or time internals on multiuse, shared equipment.
