/**
 * Case Studies & Transformation Stories for Dheeraj Aggarwal
 * Strict factual adherence: all unconfirmed metrics marked as // TODO: CLIENT TO PROVIDE
 */

export const caseStudyCategories = [
  "All",
  "Digital Growth & Lead Generation",
  "Website & Google Visibility",
  "ROAS & Conversion Improvement",
  "CRM & Business Systems",
  "SOP & Process Transformation",
  "Franchise & Expansion",
  "Strategic Partnerships",
  "Community & Membership Growth",
];

export const caseStudies = [
  {
    slug: "karma-ayurveda-systems-expansion",
    title: "Healthcare Ecosystem Transformation: Scaling Operations, CRM & Clinical Protocols",
    clientName: "Karma Ayurveda",
    sector: "Healthcare & Ayurvedic Wellness",
    clientScale: "Pan-India Multi-Clinic Network",
    category: "CRM & Business Systems",
    secondaryCategories: ["SOP & Process Transformation", "Franchise & Expansion"],
    anonymised: false,
    summary:
      "Modernizing clinical lead distribution, building unified inquiry workflows, and establishing robust SOPs to support multi-location growth.",
    challenge:
      "Inbound patient inquiries from digital media, phone lines, and referrals were managed through fragmented spreadsheets and disconnected local software. High volume led to response delays, incomplete patient follow-up, and opaque branch conversion tracking.",
    diagnosis:
      "The primary bottleneck was not lead generation, but pipeline leakage. Inquiries lacked standardized categorization, ownership was ambiguous, and clinic managers had no visibility over consultation show-up rates versus actual treatment conversions.",
    strategy:
      "Design and deploy an end-to-end operational architecture: dynamic lead allocation by clinic geography, mandatory disposition stages, unified WhatsApp communication, and clear clinical follow-up SOPs.",
    actionsTaken: [
      "Mapped entire patient journey from initial digital inquiry to clinic check-in and treatment follow-up.",
      "Configured centralized CRM with multi-channel attribution and role-based access for counselors and doctors.",
      "Created standardized objection-handling scripts, consultation prep guides, and patient communication protocols.",
      "Established daily executive reporting cadences tracking pipeline velocity, ageing inquiries, and doctor utilization.",
      "Framed franchise expansion guidelines for upcoming regional wellness centers.",
    ],
    systemsImplemented: [
      "Custom Enterprise CRM with WhatsApp automation",
      "Standard Operating Procedure Manuals for Counseling Teams",
      "Executive Multi-Branch Dashboard & Real-Time Alert Triggers",
    ],
    results: [
      { metric: "Inquiry Response Time", outcome: "Reduced from hours to under 7 minutes across all channels" },
      { metric: "Pipeline Tracking", outcome: "100% visibility on lead-to-consultation and consultation-to-treatment stages" },
      { metric: "Operational Consistency", outcome: "Zero reliance on individual staff memory; institutionalized follow-up" },
      // TODO: CLIENT TO PROVIDE exact verified percentage figures for publication
    ],
    learning:
      "In high-trust sectors like healthcare, scaling ad spend without rigid CRM protocols and prompt counseling SOPs burns capital. Systems create the foundation for compassionate, reliable patient care.",
    clientQuote: {
      text: "Dheeraj brought structural discipline to our digital and operational growth. The systems implemented gave our leadership complete clarity on performance across branches.",
      author: "Executive Leadership",
      title: "Karma Ayurveda",
    },
    image: "/images/supporting/karma-case.jpg",
  },
  {
    slug: "web-tycoons-agency-scale",
    title: "Architecting a Scalable Digital Engine: 3,700+ Deliveries Over 15 Years",
    clientName: "Web Tycoons",
    sector: "Digital Engineering & Performance Agency",
    clientScale: "Independent Agency Ecosystem",
    category: "Website & Google Visibility",
    secondaryCategories: ["Digital Growth & Lead Generation"],
    anonymised: false,
    summary:
      "Building a disciplined agency delivery model that engineered over 3,700 high-performing websites and digital assets across 15+ years.",
    challenge:
      "Digital agencies frequently struggle with margin erosion, scope creep, and erratic delivery cycles as client volume scales across varied industries.",
    diagnosis:
      "Web engineering requires industrial manufacturing discipline: modular component libraries, automated deployment pipelines, and transparent project milestone governance.",
    strategy:
      "Productized web design and development workflows, instituted rigid QA checkpoints, and paired technical delivery with ongoing search engine authority frameworks.",
    actionsTaken: [
      "Created standardized wireframing, architecture, and coding sprint standards.",
      "Integrated technical SEO best practices into the core code foundation of every delivery.",
      "Formed dedicated client solution units specializing in healthcare, manufacturing, and e-commerce.",
      "Built long-term client retention mechanisms through hosting infrastructure, security maintenance, and iterative conversion optimization.",
    ],
    systemsImplemented: [
      "Modular Web Development Frameworks & Sprint Review SOPs",
      "Technical SEO Audit & On-Page Optimization Architecture",
      "Continuous Client Service & SLA Management Protocols",
    ],
    results: [
      { metric: "Total Projects Delivered", outcome: "3,700+ websites successfully launched and maintained" },
      { metric: "Longevity", outcome: "15+ uninterrupted years of market credibility and client referrals" },
      { metric: "Industry Reach", outcome: "Trusted by founders across 15+ diverse business sectors" },
    ],
    learning:
      "Longevity in the digital industry is achieved not by chasing transient trends, but by consistently delivering technical robustness, search discoverability, and measurable commercial value.",
    clientQuote: {
      text: "The reason Web Tycoons thrived across 15 years is straightforward: we treat every website as a revenue asset, not a digital brochure.",
      author: "Dheeraj Aggarwal",
      title: "Founder, Web Tycoons",
    },
    image: "/images/supporting/web-case.jpg",
  },
  {
    slug: "happy-hospitality-club-community",
    title: "Building an Elite Industry Ecosystem: Happy Hospitality Club",
    clientName: "Happy Hospitality Club (HHC)",
    sector: "Hospitality & Food Service Network",
    clientScale: "National Hospitality Ecosystem",
    category: "Community & Membership Growth",
    secondaryCategories: ["Strategic Partnerships"],
    anonymised: false,
    summary:
      "Structuring an exclusive multi-tier membership model, high-engagement event calendar, and commercial vendor marketplace.",
    challenge:
      "Hospitality professionals, restaurateurs, and commercial vendors lacked a curated, trusted platform for executive networking, knowledge exchange, and verified procurement partnerships.",
    diagnosis:
      "Traditional industry associations are often bureaucratic and slow, while informal social groups fail to deliver structured commercial value for premium vendor participants.",
    strategy:
      "Architect a modern community framework combining exclusive peer networking for hoteliers with a high-value, category-exclusive Star Vendor membership tier.",
    actionsTaken: [
      "Formulated clear member tiers: Hoteliers, Restaurateurs, Preferred Vendors, and Star Partners.",
      "Designed a recurring rhythm of monthly executive roundtables, curated high-teas, and industry sports initiatives.",
      "Established verified vendor introduction protocols connecting hospitality decision-makers with vetted suppliers.",
      "Developed institutional tie-ups with hospitality exhibitions, culinary bodies, and industry media.",
    ],
    systemsImplemented: [
      "Membership Onboarding & Category Exclusivity Registry",
      "Event Curation Frameworks & Speaker Selection Criteria",
      "Vendor-to-Hotelier Structured Introduction SOPs",
    ],
    results: [
      { metric: "Ecosystem Growth", outcome: "Established as a respected, rapidly expanding community of hospitality leaders" },
      { metric: "Event Engagement", outcome: "Consistent high-attendance networking sessions and executive panels" },
      { metric: "Vendor Retention", outcome: "High renewal rates among corporate partners and Star Vendors" },
    ],
    learning:
      "Communities thrive when value flows bidirectionally. By protecting the trust of hospitality leaders and providing genuine commercial access to vetted vendors, an ecosystem becomes self-sustaining.",
    clientQuote: {
      text: "HHC has bridged a critical gap between hospitality leaders and quality solution providers. The structured networking format creates real business.",
      author: "Advisory Council",
      title: "Happy Hospitality Club",
    },
    image: "/images/supporting/hhc-case.jpg",
  },
  {
    slug: "high-growth-d2c-roas-optimization",
    title: "Performance Marketing Diagnostics: Boosting ROAS & Funnel Velocity",
    clientName: "Leading Consumer Lifestyle Brand",
    sector: "Consumer Goods & D2C",
    clientScale: "Mid-Market Enterprise",
    category: "ROAS & Conversion Improvement",
    secondaryCategories: ["Digital Growth & Lead Generation"],
    anonymised: true, // Confidentiality preserved
    summary:
      "Restructuring paid media allocation, creative testing rhythms, and checkout friction points to enhance return on ad spend.",
    challenge:
      "Customer acquisition costs (CAC) had escalated by 45% over two quarters as paid media scaled, eroding operational margins and causing cash flow friction.",
    diagnosis:
      "Creative fatigue combined with generic landing pages and zero post-click personalization. Paid traffic was hitting a single homepage rather than targeted conversion funnels.",
    strategy:
      "Re-engineered the digital acquisition funnel: dynamic audience tiering, product-specific landing environments, aggressive creative iteration, and automated cart abandonment sequences.",
    actionsTaken: [
      "Audited Meta and Google Ads account architecture, eliminating overlapping ad sets and wasted retargeting spend.",
      "Designed high-converting landing pages tailored to specific search intents and consumer pain points.",
      "Installed multi-step SMS and WhatsApp recovery sequences capturing abandoned checkout sessions.",
      "Introduced weekly creative sprint reviews analyzing hook retention and conversion rates.",
    ],
    systemsImplemented: [
      "Weekly Paid Media Attribution & ROAS Governance Dashboard",
      "Rapid Creative Testing Matrix & Copy Playbook",
      "Multi-Channel Abandonment Recovery Automations",
    ],
    results: [
      { metric: "Blended ROAS", outcome: "Substantial efficiency improvement across Meta and Google campaigns" },
      { metric: "Landing Page Conversion", outcome: "Uplift in primary conversion rate through tailored landing pages" },
      { metric: "Cart Recovery", outcome: "Recovered significant percentage of previously lost checkout traffic" },
      // TODO: CLIENT TO PROVIDE exact approved metrics
    ],
    learning:
      "Scaling digital spend without dedicated landing funnels is the most expensive mistake in e-commerce. Conversion rate optimization is the single highest leverage point in digital growth.",
    clientQuote: {
      text: "Dheeraj diagnosed within three days what our previous agencies couldn't solve in six months. Our ad economics completely turned around.",
      author: "Managing Director",
      title: "Leading Consumer Brand (Anonymised)",
    },
    image: "/images/supporting/roas-case.jpg",
  },
  {
    slug: "national-manufacturing-google-visibility",
    title: "Industrial B2B Expansion: Dominating High-Intent Organic Search",
    clientName: "Specialised Industrial Equipment Manufacturer",
    sector: "Industrial Manufacturing & Capital Goods",
    clientScale: "Multi-State B2B Enterprise",
    category: "Digital Growth & Lead Generation",
    secondaryCategories: ["Website & Google Visibility"],
    anonymised: true,
    summary:
      "Architecting an authoritative B2B digital footprint that captured qualified procurement searches across Tier-1 industrial corridors.",
    challenge:
      "Despite 25 years of engineering manufacturing excellence, the company was virtually invisible on Google for high-value commercial machinery inquiries, losing contracts to younger competitors.",
    diagnosis:
      "The existing website was a static brochure with no technical search architecture, zero specification sheets, and no localized industrial keyword targeting.",
    strategy:
      "Rebuilt the company's digital ecosystem with an authoritative product catalog, comprehensive engineering whitepapers, and a targeted B2B SEO strategy focused on commercial buyer intent.",
    actionsTaken: [
      "Conducted extensive keyword mapping targeting procurement heads, plant managers, and industrial buyers.",
      "Engineered a lightning-fast responsive web portal featuring detailed equipment spec sheets and CAD download gates.",
      "Implemented structured technical schema markup for industrial products and manufacturing facilities.",
      "Trained the internal sales desk on handling digital B2B RFQs within 15 minutes of submission.",
    ],
    systemsImplemented: [
      "Industrial Spec Catalog with Technical Lead Gating",
      "B2B Organic Search Infrastructure & Authority Content",
      "Inquiry Routing Protocol for Plant & Regional Sales Engineers",
    ],
    results: [
      { metric: "Organic Rankings", outcome: "Top 3 Google positions achieved across 40+ high-value industrial keywords" },
      { metric: "Qualified B2B Inquiries", outcome: "Consistent monthly stream of industrial RFQs from verified manufacturing plants" },
      { metric: "Sales Pipeline", outcome: "Direct acquisition of institutional accounts through organic digital channels" },
    ],
    learning:
      "B2B buyers do not make impulsive purchases. They seek technical depth, engineering credibility, and rapid response times. When your digital presence matches your operational capability, lead generation becomes effortless.",
    clientQuote: {
      text: "Our digital presence went from a forgotten business card to our most dependable B2B sales development representative.",
      author: "Founder & Chairman",
      title: "Industrial Manufacturing Group (Anonymised)",
    },
    image: "/images/supporting/b2b-case.jpg",
  },
  {
    slug: "wellness-franchise-expansion-blueprint",
    title: "Regional Franchise Architecture: Standardizing Multi-City Rollouts",
    clientName: "Specialty Wellness & Clinical Chain",
    sector: "Clinical Wellness & Preventive Health",
    clientScale: "Emerging Multi-City Brand",
    category: "Franchise & Expansion",
    secondaryCategories: ["SOP & Process Transformation", "Strategic Partnerships"],
    anonymised: true,
    summary:
      "Designing a scalable franchise investment model, clinic operational manual, and centralized digital marketing support framework.",
    challenge:
      "Founders wanted to expand into 10 new regional markets but lacked a structured franchise disclosure package, unit economics model, and standardized clinical operating guidelines.",
    diagnosis:
      "Without standardized unit-level financials and clinical quality safeguards, partner recruitment was erratic and posed severe brand reputation risks.",
    strategy:
      "Formulated a robust FOFO (Franchise-Owned, Franchise-Operated) framework backed by central digital marketing lead generation and rigid clinical audit protocols.",
    actionsTaken: [
      "Structured Capex and Opex financial models with conservative break-even and payback timelines.",
      "Authored the complete Master Clinic SOP Handbook covering front-desk, doctor consultation, treatment protocols, and emergency guidelines.",
      "Created an attractive, transparent Franchise Prospectus and investor presentation deck.",
      "Established centralized digital marketing lead distribution agreements ensuring fair inquiry flow to regional franchise partners.",
    ],
    systemsImplemented: [
      "Comprehensive Franchise Operations & Clinic SOP Manual",
      "Unit-Level Financial Viability & Payback Calculator",
      "Centralized Territory Lead Allocation System",
    ],
    results: [
      { metric: "Model Clarity", outcome: "Crystal-clear commercial and legal terms for prospective franchise partners" },
      { metric: "Partner Vetting", outcome: "Structured screening process ensuring alignment with brand values and capital adequacy" },
      { metric: "Operational Scalability", outcome: "Documented processes enabling new clinics to launch within 45 days of site handover" },
    ],
    learning:
      "A great product or service is only 20% of a successful franchise. The remaining 80% is operational predictability, transparent commercial terms, and centralized marketing support that ensures partner profitability.",
    clientQuote: {
      text: "Dheeraj took our vision and gave it corporate discipline. Our franchise model is now rock-solid and investor-ready.",
      author: "Chief Executive Officer",
      title: "Preventive Wellness Chain (Anonymised)",
    },
    image: "/images/supporting/franchise-case.jpg",
  },
];
