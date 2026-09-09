---
title: FIPS-Validated Cryptography
layout: base.njk
permalink: /resources/ask-the-assessor/fips/
---

# FIPS-Validated Cryptography

## September 2026

[Resources](/resources/) >> [Ask The Assessor](/resources/ask-the-assessor/) >> FIPS-Validated Cryptography

**RRCoP Community Question to the Assessors**

Under what circumstances is FIPS-validated cryptography required and under what circumstances is it not required? Are there any circumstances where implementing FIPS-validated cryptography is higher priority than updating a system to address a vulnerability?

*published: September 2026*

[[RRCoP Question and Use Cases]](https://drive.google.com/file/d/1N3heR0-4L26Ser5wiSK7XZqdwgxiXHhV/view?usp=sharing) [[View & Download Full Frazier & Deeter Responses]](https://drive.google.com/file/d/1PcUC9CuqNLIUOVbnOZkKt9uMnFEggDAR/view?usp=drive_link)

## GENERAL APPROACH DESCRIBED

**PATCHING** — An organization discovers a new vulnerability and applies a critical patch to its network firewall. The patch, however, upgrades the firewall's cryptographic module to a version that is not FIPS-validated. This creates a compliance conflict with control 3.13.11, which requires the use of FIPS-validated encryption modules to protect the confidentiality of CUI. How should this be resolved?

**ALTERNATE PHYSICAL SAFEGUARDS** — An organization has a system within a physically protected (per 3.10.x) data center that is encrypted, but not with FIPS-validated encryption. Both physical safeguards and encryption are used to protect CUI, is FIPS-validated cryptography required?

**LAYERED ENCRYPTION** — When multiple layers of encryption are in use (ex. encrypted VPN traffic traveling over wireless networks)? When and where is FIPS-validated cryptography required?

**LAPTOPS (MOBILE COMPUTING DEVICES)** — Is there any scenario where a laptop does not require FIPS-validated cryptography?

## Assessor Response

### Key Rule

FIPS-validated cryptography is required when cryptography is used to protect the confidentiality of CUI. It is not a blanket requirement for every use of encryption or cryptography in the environment.

**Lead CCA Comment:** Using AES or another approved algorithm by itself is not enough. The cryptographic module must be FIPS-validated. Verify the exact module, version, and applicable configuration against the NIST CMVP listing.

**Lead CCA Comment:** NIST states FIPS 140-2 active validations remain active through September 21, 2026. Beginning September 22, 2026, only FIPS 140-3 validations remain on the active list. Check the current CMVP status when validating a module.

## Q1 - PATCHING

An organization discovers a new vulnerability and applies a critical patch to its network firewall. The patch, however, upgrades the firewall's cryptographic module to a version that is not FIPS-validated. This creates a compliance conflict with control 3.13.11, which requires the use of FIPS-validated encryption modules to protect the confidentiality of CUI. How should this be resolved?

### Assessor Response

CMMC does not establish a blanket rule that FIPS always takes priority over patching, or that patching always takes priority over FIPS. If the organization determines that a critical patch must be applied and the patched cryptographic module is no longer FIPS-validated, the CMMC rule specifically recognizes that condition as a possible temporary deficiency.

* Document the temporary deficiency in the organization's operational plan of action. This operational plan of action is not the same as a CMMC assessment POA&M.
* Correct the temporary deficiency when the validated vendor release or other supported solution becomes available, consistent with the organization's documented remediation process.
* If the system is assessed while non-FIPS encryption is protecting CUI, SC.L2-3.13.11 is still NOT MET. The CMMC rule allows this requirement on a Level 2 assessment POA&M when encryption is being used but is not FIPS-validated, subject to the Conditional Level 2 rules.

**Lead CCA comment:** I have found no CMMC rule or NIST SP 800-171 Rev. 2 requirement that creates a universal priority between FIPS compliance and vulnerability remediation. SI.L2-3.14.1 requires system flaws to be corrected in a timely manner, while SC.L2-3.13.11 requires FIPS-validated cryptography when cryptography protects CUI confidentiality.

**Authority:** 32 CFR § 170.4 (temporary deficiency), § 170.21, § 170.24; CMMC Level 2 Assessment Guide v2.13, p. 6 and SI.L2-3.14.1 pp. 246-248.

## Q2 - ALTERNATE PHYSICAL SAFEGUARDS

An organization has a system within a physically protected (per 3.10.x) data center that is encrypted, but not with FIPS-validated encryption. Both physical safeguards and encryption are used to protect CUI, is FIPS-validated cryptography required?

### Assessor Response

Not automatically. For CUI at rest, encryption is one way to provide confidentiality, but it is not the only way. The CMMC Assessment Guide allows physical and other technical protections to provide confidentiality for CUI at rest.

* If the organization relies on the encryption to protect CUI confidentiality, the encryption must be FIPS-validated.
* If physical and technical safeguards provide the required confidentiality and the non-FIPS encryption is only an additional feature inside the protected environment, SC.L2-3.13.11 does not make that extra encryption FIPS-required.
* Being in a data center by itself is not enough. The assessor must verify that the physical and technical safeguards actually protect the CUI.

**Authority:** CMMC Level 2 Assessment Guide v2.13, SC.L2-3.13.11 pp. 234-235 and SC.L2-3.13.16 pp. 244-245.

## Q3 - LAYERED ENCRYPTION

When multiple layers of encryption are in use (ex. encrypted VPN traffic traveling over wireless networks)? When and where is FIPS-validated cryptography required?

### Assessor Response

Look at each layer and the CMMC requirement it is satisfying. If that layer is required or relied upon to protect CUI confidentiality, it must meet the FIPS requirement.

* Example: If CUI is transmitted over organizational Wi-Fi, AC.L2-3.1.17 requires wireless access to use encryption, and the CMMC Assessment Guide ties that encryption to SC.L2-3.13.11. The Wi-Fi encryption therefore needs to be FIPS-validated.
* If a VPN is used to satisfy a CUI transmission or remote-access encryption requirement, the VPN cryptography must also meet the applicable FIPS requirement.
* An extra encryption layer that is not being used to satisfy a CUI confidentiality requirement does not automatically have to be FIPS-validated.

**Lead CCA comment:** Do not assume that one FIPS layer makes every other required encryption layer irrelevant. Assess each applicable requirement separately.

**Authority:** CMMC Level 2 Assessment Guide v2.13, AC.L2-3.1.13 pp. 43-44; AC.L2-3.1.17 pp. 52-53; SC.L2-3.13.8 pp. 227-228; SC.L2-3.13.11 pp. 234-235.

## Q4 - LAPTOPS AND MOBILE COMPUTING DEVICES

Is there any scenario where a laptop does not require FIPS-validated cryptography?

### Assessor Response

Yes, but it depends on whether the laptop actually processes, stores, or transmits CUI.

* If the laptop processes, stores, or transmits CUI, AC.L2-3.1.19 requires CUI to be encrypted on the mobile computing platform. Because that encryption protects CUI confidentiality, it must meet SC.L2-3.13.11.
* A properly configured VDI endpoint can be different. If the endpoint cannot process, store, or transmit CUI beyond Keyboard/Video/Mouse interaction with the VDI, the CMMC scoping rule allows the endpoint to be treated as an Out-of-Scope Asset.
* If CUI can be downloaded, cached, copied, printed, redirected to local drives or USB, or otherwise reaches the laptop, the VDI out-of-scope treatment no longer applies.

**Authority:** CMMC Level 2 Assessment Guide v2.13, AC.L2-3.1.19 pp. 56-57; 32 CFR § 170.19(c); CMMC Level 2 Scoping Guide v2.13, p. 4.

---

*For more information, Contact: Bob Woosley | Frazier & Deeter National Practice Leader | [bob.woosley@frazierdeeter.com](mailto:bob.woosley@frazierdeeter.com)*

*This material is based upon activities supported by the National Science Foundation and Interagency Agreement #A2407-049-089-064206.0. Any opinions, recommendations, findings, or conclusions expressed are those of the author(s) and do not necessarily reflect the views of the National Science Foundation. [NSF Award 2409859](https://nsf.gov/awardsearch/showAward?AWD_ID=2409859)*
