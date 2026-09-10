// Primary site nav, structured to mirror production's real Google Sites page
// hierarchy (confirmed live against https://www.regulatedresearch.org/ --
// every href below matches a real page's `permalink` in src/**/*.md).
//
// Production's own nav has a real usability bug: its collapsed-branch arrows
// only expand the branch matching the CURRENT page, so a sibling section's
// children are invisible until you click blind into that section. This data
// structure intentionally supports rendering ALL branches expandable from
// any page (see base.njk), which is what production's nav was missing.
module.exports = [
  { label: "Home", href: "/" },
  {
    label: "Monthly Webinars",
    href: "/monthly-webinars/",
    children: [
      { label: "RRCoP Recordings and Presentations", href: "/monthly-webinars/rrcop-recordings-and-presentations/" },
      { label: "Training Topics", href: "/monthly-webinars/training-topics/" },
      { label: "Advocating and Understanding Policy", href: "/monthly-webinars/advocating-policy/" },
      { label: "Researcher Focus & All Hands", href: "/monthly-webinars/general-and-researcher/" },
      { label: "Community Experience Spotlight", href: "/monthly-webinars/community-spotlight/" },
    ],
  },
  {
    label: "Resources",
    href: "/resources/",
    children: [
      {
        label: "Peer Practices",
        href: "/resources/peer-practices/",
        children: [
          {
            label: "Workshops",
            href: "/resources/peer-practices/workshops/",
            children: [
              { label: "2020 Community Workshops", href: "/resources/peer-practices/workshops/2020-community-workshops/" },
              { label: "A Day with the CMMC Assessors", href: "/resources/peer-practices/workshops/cmmcassessor24/" },
              { label: "Sustainable Compliance Documentation", href: "/resources/peer-practices/workshops/sustainable-compliance-documentation/" },
              { label: "Aligning Institutional Culture", href: "/resources/peer-practices/workshops/cultural/" },
            ],
          },
          { label: "System Security Plan (SSP)", href: "/resources/peer-practices/ssp/" },
          { label: "Purdue End-to-End CUI Workflows", href: "/resources/peer-practices/purdues-end-to-end-cui-workflows/" },
          { label: "NSPM-33", href: "/resources/peer-practices/nspm-33/" },
          { label: "UCF's Campus Level CMMC L1", href: "/resources/peer-practices/ucfs-campus-level-cmmc-l1/" },
        ],
      },
      {
        label: "Ask the Assessor",
        href: "/resources/ask-the-assessor/",
        children: [
          { label: "HIPAA Implications in Research Environments", href: "/resources/ask-the-assessor/hipaa/" },
          { label: "Determining Readiness for an Assessment", href: "/resources/ask-the-assessor/readiness-for-assessment/" },
          { label: "Managing Lab and Specialized Equipment", href: "/resources/ask-the-assessor/lab-equipment/" },
          { label: "Secure Software in Research", href: "/resources/ask-the-assessor/secure-software/" },
          { label: "Security Protection Assets", href: "/resources/ask-the-assessor/security-protection-assets-june-2025/" },
          { label: "Navigating Policy Hierarchies", href: "/resources/ask-the-assessor/policy-hierarchy-april-2025/" },
          { label: "Managing Multiple Data Types in a Single Enclave", href: "/resources/ask-the-assessor/multiple-data-types-feb2025/" },
          { label: "NIST 800-171 R2 3.2.2 — Adequately Trained", href: "/resources/ask-the-assessor/trained/" },
          { label: "FIPS-Validated Cryptography", href: "/resources/ask-the-assessor/fips/" },
          { label: "System Security Plan", href: "/resources/ask-the-assessor/ssp/" },
        ],
      },
      { label: "Community Presentations & News", href: "/resources/higher-ed-presentations/" },
      { label: "Federal Sponsored Resources", href: "/resources/federally-sponsored-resources/" },
      { label: "Tools & Templates", href: "/resources/tools-templates/" },
      { label: "Future Resources", href: "/resources/future-resources/" },
      { label: "Free Community Curated Resources", href: "/resources/community-curated/" },
      { label: "Poll Results & Community Data", href: "/resources/polls/" },
      { label: "Industry", href: "/resources/industry/" },
      { label: "Policy", href: "/resources/policy/" },
      { label: "Community FAQ", href: "/resources/community-faq/" },
      { label: "Start Here - RRCoP Resource Sheet", href: "/resources/start-here-resources-list/" },
    ],
  },
  { label: "Compliance", href: "/compliance/" },
  { label: "Federal Updates", href: "/federal-updates/" },
  {
    label: "Advocacy",
    href: "/advocacy/",
    children: [
      { label: "Advocating & Influencing", href: "/advocacy/advocating-influencing/" },
      { label: "Perspectives", href: "/advocacy/perspectives/" },
      { label: "Learn", href: "/advocacy/learn/" },
    ],
  },
  {
    label: "About",
    href: "/about/",
    children: [
      { label: "Get Involved", href: "/about/get-involved/" },
      { label: "Who's Participating?", href: "/about/whos-participating/" },
      { label: "Code of Conduct", href: "/about/code-of-conduct/" },
      { label: "Partnerships", href: "/about/partnerships/" },
    ],
  },
  { label: "Join", href: "/join/", cta: true },
];
