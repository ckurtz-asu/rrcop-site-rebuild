---
title: System Security Plan
layout: base.njk
permalink: /resources/ask-the-assessor/ssp/
---

# System Security Plan

## April 2026

[Resources](/resources/) >> [Ask The Assessor](/resources/ask-the-assessor/) >> System Security Plan | Published April 2026

## Q1. What is the ideal content, organization, and maintenance of a System Security Plan?

### Frazier & Deeter Response to Q1

From an assessor's perspective, the minimum acceptable system security plan (SSP) clearly describes the system boundary, operating environment, how requirements are implemented, connections to other systems, and how the document is reviewed and updated. The ideal SSP goes further. It gives a current, easy-to-follow picture of the system so the assessor does not have to reconstruct the environment from scattered artifacts. It should clearly address the 5Ws: Who, What, When, Where, and hoW.

* **Who** owns, approves, maintains, and implements the documented safeguards and supporting services.
* **What** defines the system, boundary, assets, controls, dependencies, and evidence that show how the system is protected.
* **When** the SSP and supporting artifacts are reviewed, updated, assessed, and refreshed, including the events that trigger change.
* **Where** the system operates, where data is stored, processed, and transmitted, and where network boundaries, shared services, and external connections sit.
* **HoW** each requirement is implemented in practice, including whether implementation is direct, inherited, shared, or supported by other authoritative documentation.

**Recommended Organization**

A strong SSP is usually organized as a central narrative document with sections covering scope, system description, boundary, environment, assets, connections, shared services, external service providers, control implementation summaries, inherited or shared responsibilities, permitted non-applicable requirements, and document maintenance. Detailed technical artifacts are usually better handled as referenced attachments than repeated throughout the SSP.

**Maintenance Expectation**

The SSP should identify a responsible system owner, follow a defined review and update process, be reviewed on a stated schedule, and be revised when significant changes affect the system or its risk posture. A stale SSP does not automatically mean the controls are ineffective, but it does reduce confidence that the document still reflects the current environment and can create assessment reliability concerns.

**Illustrative Examples**

*SME example:* For a university research administration environment, a strong SSP would identify the accountable system owner, define the assessment scope and boundary, and describe the in-scope servers, endpoints, cloud services, and network segments in a way that aligns to current diagrams and inventories. It would state the review cadence, define update triggers, identify where CUI is stored, processed, and transmitted, and explain how each safeguard is implemented either directly by the university or through shared or inherited services. That gives the assessor a defensible system narrative backed by evidence, not just a high-level summary.

*KISS example:* The SSP should read like a guided map. A reviewer should be able to see who owns the system, what is in scope, where it operates, when it is reviewed, and how the safeguards work without piecing the story together from disconnected files.

*5W : Assessment Tie-In*

* **Who:** System owner, information security, compliance, IT operations, shared service owners, and executive approvers should each have clear roles for authorship, review, approval, and implementation support.
* **What:** The SSP should describe the system, boundary, controls, dependencies, inherited/shared responsibilities, and references to evidence and authoritative source documents.
* **When:** The SSP should state how often it is reviewed, what events trigger an out-of-cycle update, and how version history is maintained.
* **Where:** The SSP should identify where the system operates, where data resides or transits, and where supporting and connected services sit relative to the boundary.
* **hoW:** The SSP should explain, in plain but precise terms, how each requirement is met - whether implemented directly, inherited, or supported by referenced documentation - so the assessor can follow the control story without guessing.

## Q2. What should never be in an SSP?

### Frazier & Deeter Response to Q2

An SSP should not become a data dump or a substitute for every technical standard, procedure, or evidence artifact. It should stay at the level of a controlled implementation description and avoid sensitive operational detail that belongs in restricted supporting documents.

**Content to Avoid**

Do not include passwords, sensitive business information, exploit details, full firewall rule sets, full vulnerability scan output, excessive procedure text, or uncontrolled copies of artifacts that are maintained elsewhere. Also avoid contradictory statements, outdated pasted content, and framework noise that makes it unclear what the organization is actually claiming for the assessment in scope.

**Illustrative Examples**

*SME example:* It is appropriate for the SSP to state that remote administrative access is limited to authorized administrators, protected by multifactor authentication, and subject to logging and review. It is not appropriate for the SSP to include administrator passwords, full firewall rule sets, exploit paths, raw scanner output, or other sensitive operational detail that should remain in controlled source records. The SSP should describe the implementation and point to authoritative evidence, not serve as the evidence repository.

*KISS example:* The SSP can say remote admin access is limited and monitored, but detailed firewall rules, scan results, passwords, and other sensitive technical details should stay in controlled supporting documents rather than in the SSP.

*5W : Assessment Tie-In*

* **Who:** Only personnel with a need to know should have access to the sensitive technical detail that belongs outside the SSP in controlled artifacts.
* **What:** Keep out sensitive secrets, raw technical dumps, and unnecessary or irrelevant material that reduces clarity.
* **When:** Content becomes problematic when it cannot be maintained accurately over time or quickly becomes stale after changes.
* **Where:** Sensitive implementation specifics should live in properly controlled supporting documents, repositories, or operational records rather than in the main SSP narrative.
* **hoW:** The SSP should explain implementation at the right level of detail: enough for the reader to understand how the requirement is met, but not so much that it exposes sensitive details or buries the assessment narrative in operational clutter.

## Q3. What critical diagrams, inventories, or artifacts help an assessor make their assessment?

### Frazier & Deeter Response to Q3

The most useful materials are the SSP itself, followed by the diagrams, inventories, matrices, and other artifacts that let the assessor confirm scope, understand the environment, trace dependencies, and validate that the implementation is credible. Some of that information may be summarized in the SSP, while other items may be maintained as separate controlled artifacts that the SSP references clearly.

**Most Helpful Artifacts**

Typical high-value artifacts include the SSP, a network architecture diagram, system diagram, boundary diagram, asset inventory, software or platform inventory where relevant, a data flow or information exchange diagram, connection inventory, external service provider listing, shared services matrix, responsibility matrix for inherited or shared controls, and any other authoritative records needed to explain the assessed environment.

**Illustrative Examples**

*SME example:* For planning and execution, a university research enclave would typically be supported by a boundary diagram, a network diagram showing security devices and trusted connections, an asset inventory of in-scope systems, a data flow or information exchange diagram, and a shared responsibility matrix covering central IT, departmental administrators, and relevant cloud or managed service providers. Together, these artifacts help the assessor validate scope, understand dependencies, and test whether the SSP narrative matches the actual operating environment.

*KISS example:* Think of these artifacts as the visuals and lists that support the written story. A reviewer should be able to look at the diagrams and inventories and quickly understand what systems exist, how they connect, and where the system boundary starts and stops.

*5W : Assessment Tie-In*

* **Who:** The SSP and related artifacts should identify owners for systems, services, connection approvals, and shared/inherited control responsibilities.
* **What:** Together, the SSP and related artifacts should show the actual components, assets, interfaces, trust boundaries, and supporting services that define the assessed environment.
* **When:** The SSP, inventories, and diagrams should reflect the current environment and be updated on a repeatable cadence or upon significant change.
* **Where:** The SSP and related artifacts should show where the in-scope environment begins and ends, where systems are hosted, and where data moves internally and externally.
* **hoW:** They help the assessor see how the environment works in practice and how the documented controls, responsibilities, and dependencies align to the real architecture.

## Q4. What should be documented about External Service Providers, internal shared service providers, and external connections?

### Frazier & Deeter Response to Q4

Assessors generally want clear SSP documentation, supported by contracts, diagrams, matrices, and other authoritative records, showing what service is being provided, what data or security functions the provider touches, whether the provider is in scope as an external service provider, which requirements are handled by the provider versus the institution, what responsibilities are shared, and what interfaces exist between the provider and the assessed system.

A completed SRM or CRM is also highly useful because it shows who is responsible for each control, what that responsibility covers, when it applies, where it applies, and how it is carried out.

**Key Documentation Points**

Document the provider's name, service description, relationship to the system, types of data affected, connection path, authentication or trust model, inherited or shared responsibilities, contractual or assurance basis, monitoring or governance approach, and the authoritative artifacts that support those statements. This information may sit partly in the SSP and partly in supporting artifacts, so long as it is clear, current, and easy for the assessor to trace.

**Illustrative Examples**

*SME example:* Assume a university relies on Microsoft 365 for identity and email, a managed security service provider for log monitoring, and a campus network team for perimeter firewall administration. The SSP should identify each service relationship, describe the security or operational function performed, explain whether the provider stores, processes, transmits, or protects in-scope data or systems, identify the interface to the assessed environment, and clearly assign responsibility for each relevant requirement. That allows the assessor to evaluate whether shared and inherited control claims are complete, supportable, and accurately reflected in scope.

*KISS example:* If another team or company helps run part of the environment, the SSP should clearly say what they do, what systems or data they touch, where the connection exists, and how responsibilities are divided so the assessor does not have to guess.

*5W : Assessment Tie-In*

* **Who:** Name the provider, the internal service owner, the contract or governance owner, and the party responsible for each shared or inherited requirement.
* **What:** Describe the service, the connection, the data touched, the controls provided, and the exact responsibility split.
* **When:** State review frequency for the relationship, connection approval timing, reassessment cadence, and change/termination triggers.
* **Where:** Show where the provider sits relative to the boundary, where the connection terminates, and where data is processed, stored, or transmitted.
* **hoW:** Explain how the provider affects scope and how the organization documents, validates, governs, and relies on the service to meet applicable requirements.

## Q5. Given the following scenarios, which approach(es) would you recommend institutions adopt and WHY?

### University 1 - Bare Minimum

University 1's System Security Plan contains the bare minimum template from NIST, and references a significant amount of other documentation, but the contents of that documentation are not copied into the System Security Plan to avoid duplication. Assume that the assessment objectives are fully met.

#### Frazier & Deeter Response to Q5 University 1

**Explanation**

Yes, this can be acceptable and, in some organizations, efficient. Referencing authoritative source documentation is not a problem by itself. The issue is whether the references are complete, current, controlled, and easy for the assessor to follow. A reference-heavy SSP breaks down when it turns the assessment into a scavenger hunt.

**Assessor View**

This approach works best when the SSP provides a strong core narrative, a clear document map, precise citations to supporting artifacts, and no gaps in traceability. If those elements are present and the objectives are fully met, the model is generally sound.

**Illustrative Examples**

*SME example:* A concise SSP may summarize the system boundary, major assets, key connections, and control approach in the primary document, while citing a controlled asset inventory, network diagram, and incident response procedure maintained in authoritative repositories. That model is generally acceptable when citations are specific, version-controlled or otherwise managed, current, and easy for the assessor to trace to the statement being supported. Brevity is not the risk; weak traceability is.

*KISS example:* A shorter SSP can work well if it still tells the basic system story and points clearly to the right supporting documents. The assessor should not have to hunt through unrelated files to understand the environment.

*5W : Assessment Tie-In*

* **Who:** There should be clear owners for both the SSP and the referenced source documents so the assessor knows who is accountable for accuracy.
* **What:** The SSP should still contain enough content to tell the system story, even if deeper technical detail is housed in referenced artifacts.
* **When:** Referenced artifacts must be maintained on a current schedule and not left older than the SSP itself without explanation.
* **Where:** The SSP should tell the assessor exactly where each referenced item lives and how it supports the related section or requirement.
* **hoW:** This approach works best when the SSP serves as the central assessment narrative and roadmap, while detailed technical material is maintained in one authoritative source for each topic.

### University 2 - Everything Internal

University 2's System Security Plan contains everything an assessor is looking for with regards to assessment objectives but does not reference any external documentation. Example: All organizational defined parameters are defined in the System Security Plan.

#### Frazier & Deeter Response to Q5 University 2

**Explanation**

Yes, this can also be acceptable and can make the assessment more efficient because the assessor can evaluate the full story in one place. The main risk is maintenance. Large all-in-one SSPs often become difficult to keep aligned with the live environment, especially where services, inventories, and organizationally defined parameters change often.

**Assessor View**

From an assessor's perspective, additional information is manageable when it is clearly labeled, intentionally organized, and does not create ambiguity. Concern increases when the SSP mixes NIST SP 800-171 Rev. 2, NIST SP 800-171 Rev. 3, HIPAA, or other requirements in a way that could cause confusion about what is required for the current assessment versus what is included for another obligation. The key test is whether the assessor can quickly identify the exact requirements, parameters, and implementation statements that apply to the framework and revision being assessed.

**Illustrative Examples**

*SME example:* A self-contained SSP is often easy to read, but it still has to be current, internally consistent, and maintained through disciplined updates. A complete SSP that is out of date is less useful than a well-maintained hybrid model.

*KISS example:* An all-in-one SSP can be convenient because the reviewer sees nearly everything in one place, but it only works if the document stays current. If one section is updated and another is not, the SSP quickly becomes harder to trust.

*5W : Assessment Tie-In*

* **Who:** There should be a clearly assigned owner or editorial governance structure because one large SSP can quickly become unmanageable without accountability.
* **What:** All required scope, boundary, implementation, service, and parameter information may be contained directly in the SSP if accuracy is maintained.
* **When:** The larger the SSP, the more important formal review intervals and change-triggered updates become.
* **Where:** The SSP should still clearly describe environments, hosting, boundaries, and connections rather than assuming completeness alone makes it understandable.
* **hoW:** This approach can be very readable and efficient, but it only remains credible if the organization can keep all sections current, consistent, and aligned to the live environment.

### University 3 - Multiple Compliance Requirements

University 3 is subject to multiple compliance requirements - such as NIST SP 800-171 rev3, HIPAA, NIST SP 800-171 rev2 - uses one system to meet all of them and has combined all those requirements into one System Security Plan. Are there any concerns from an assessor about including additional (possibly irrelevant) information for a particular compliance framework or set of controls.

#### Frazier & Deeter Response to Q5 University 3

**Explanation**

Yes, there can be assessor concerns, but the issue is usually not the presence of additional information by itself. The real concern is whether extra framework content, older revision language, or unrelated control statements make it harder to determine what is actually being claimed for the specific assessment in scope. A combined SSP can work if it is clear, well-governed, and easy for the assessor to separate shared content from framework-specific content.

**Assessor View**

From an assessor's perspective, additional information is manageable when it is clearly labeled, intentionally organized, and does not create ambiguity. Concern increases when the SSP mixes NIST SP 800-171 Rev. 2, NIST SP 800-171 Rev. 3, HIPAA, or other requirements in a way that could cause confusion about what is required for the current assessment versus what is included for another obligation. The key test is whether the assessor can quickly identify the exact requirements, parameters, and implementation statements that apply to the framework and revision being assessed.

**Illustrative Examples**

*SME example:* A university may use one enterprise collaboration environment and one SSP to support HIPAA, NIST SP 800-171 Rev. 2, and NIST SP 800-171 Rev. 3 obligations. That can be workable if the SSP clearly labels which control narratives support each framework, identifies where requirements overlap, and separates content that is informative from content that is authoritative for the assessment in scope. An assessor concern arises when revision-specific or framework-specific language is mixed together without clear boundaries, because that can obscure the actual implementation claim being tested.

*KISS example:* One SSP can cover several rule sets, but the reader should never have to guess what applies to the review happening now. If a document mixes HIPAA, Rev. 2, and Rev. 3 language together without clear labels, the assessor may not know which requirements the university is claiming it currently meets for the specific assessment.

*5W : Assessment Tie-In*

* **Who:** Cross-framework SSPs require strong governance, because multiple compliance owners, authors, and reviewers may otherwise introduce conflicting or unnecessary content.
* **What:** The SSP should clearly distinguish which requirements, parameters, and implementation statements apply to each framework, revision, or assessment scope.
* **When:** As frameworks and revisions change over time, the SSP should be reviewed and updated carefully so outdated or superseded language does not remain and create confusion.
* **Where:** Framework-specific sections, appendices, crosswalks, or markers should be placed where the assessor can easily separate common system content from framework-specific content.
* **hoW:** A combined SSP can work well when the organization uses one system to satisfy multiple obligations, but only if the document makes the applicable framework content easy to identify and prevents irrelevant material from obscuring the assessment narrative.

### Recommended Assessor Position

**Preferred Model**

The strongest approach is usually a hybrid SSP: one primary, readable SSP that tells the full system story, paired with controlled supporting artifacts for detail-heavy items such as inventories, diagrams, service matrices, and technical standards.

**Bottom Line**

An ideal SSP is current, accurate to the boundary, readable to an assessor, and supported by authoritative references. It should answer the 5Ws clearly enough that technical reviewers can assess it efficiently and non-technical readers can still understand who is responsible, what is in scope, when the documentation is reviewed and updated, where the system and dependencies operate, and how the implementation works in practice.

**References**

* DoD, Cybersecurity Maturity Model Certification (CMMC) Level 2 Assessment Guide — [view document](https://dodcio.defense.gov/Portals/0/Documents/CMMC/AssessmentGuideL2v2.pdf)
* NIST Special Publication 800-18 Revision 1, Guide for Developing Security Plans for Federal Information Systems — [view document](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-18r1.pdf)
* NIST Special Publication 800-18 Revision 2 (Initial Public Draft), Guide for Developing Security Plans for Information Systems and Organizations — [view document](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-18r2.ipd.pdf)

[[View & Download Full Frazier & Deeter Responses]](https://drive.google.com/file/d/1IylNBpTjQTvXvO7xQNW0RZwiT8xqrVHY/view?usp=drive_link)

---

*For more information, Contact: Bob Woosley | Frazier & Deeter National Practice Leader | [bob.woosley@frazierdeeter.com](mailto:bob.woosley@frazierdeeter.com)*

*This material is based upon activities supported by the National Science Foundation and Interagency Agreement #A2407-049-089-064206.0. Any opinions, recommendations, findings, or conclusions expressed are those of the author(s) and do not necessarily reflect the views of the National Science Foundation. [NSF Award 2409859](https://nsf.gov/awardsearch/showAward?AWD_ID=2409859)*
