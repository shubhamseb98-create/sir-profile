/**
 * Global Site Configuration & Metadata for Dheeraj Aggarwal
 * Business Consultant | Digital Expert | Growth Specialist | Speaker | Community Builder
 */

export const siteConfig = {
  name: "Dheeraj Aggarwal",
  title: "Dheeraj Aggarwal | Business Consultant, Digital Expert & Growth Specialist",
  tagline: "Building Brands. Creating Impact.",
  designation: "Business Consultant | Digital Expert | Growth Specialist",
  positioningLine:
    "I help businesses build stronger brands, create scalable systems, improve digital performance and convert strategy into measurable growth.",
  closingLine: "Let's Build Something Meaningful.",
  domain: "https://dheerajaggarwal.com",
  contactEmail: "contact@dheerajaggarwal.com", // TODO: CLIENT TO PROVIDE official direct inbox
  phoneDisplay: "+91 98110 00000", // TODO: CLIENT TO PROVIDE official direct number
  phoneRaw: "919811000000",
  whatsappUrl: "https://wa.me/919811000000?text=Hello%20Dheeraj%2C%20I%20would%20like%20to%20discuss%20a%20business%20consulting%20engagement.",
  calendlyUrl: "https://calendly.com/dheeraj-aggarwal/strategy-call", // TODO: CLIENT TO PROVIDE actual booking link
  socials: {
    linkedin: "https://www.linkedin.com/in/dheerajaggarwal", // TODO: CLIENT TO PROVIDE
    twitter: "https://twitter.com/dheerajaggarwal", // TODO: CLIENT TO PROVIDE
    instagram: "https://instagram.com/dheerajaggarwal", // TODO: CLIENT TO PROVIDE
    youtube: "https://youtube.com/@dheerajaggarwal", // TODO: CLIENT TO PROVIDE
  },
  metrics: [
    { value: 15, suffix: "+", label: "Years of Entrepreneurial & Digital Experience" },
    { value: 3700, suffix: "+", label: "Websites & Digital Ecosystems Delivered" },
    { value: 100, suffix: "+", label: "Brands & Corporate Clients Consulted" },
    { value: 50, suffix: "+", label: "Keynotes & Business Workshops Delivered" },
  ],
  navLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Consulting", href: "/consulting" },
    { label: "Digital Growth", href: "/digital-growth" },
    {
      label: "Leadership & Ventures",
      href: "/leadership-ventures",
      children: [
        { label: "All Ventures & Roles", href: "/leadership-ventures", desc: "Overview of ventures, ecosystem roles, and future initiatives" },
        { label: "Karma Ayurveda Advisory", href: "/karma-ayurveda", desc: "Growth strategy, CRM, franchise models, and digital transformation" },
        { label: "Happy Hospitality Club (HHC)", href: "/hhc", desc: "Hospitality community, vendor ecosystem, and leadership events" },
        { label: "Web Tycoons", href: "/digital-growth", desc: "15+ year digital agency delivering performance marketing and web ecosystems" },
      ],
    },
    { label: "Speaking", href: "/speaking" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Insights", href: "/insights" },
    { label: "Media", href: "/media" },
  ],
  whatIHelpAchieve: [
    {
      title: "Build a Clear Brand & Market Position",
      description: "Define a commanding value proposition, sharp messaging hierarchy, and differentiated market standing that cuts through industry noise.",
      image: "/images/cards/brand-positioning.jpg",
      href: "/consulting#brand-strategy",
      buttonText: "Learn More",
    },
    {
      title: "Create Stronger Digital Visibility & Lead Flow",
      description: "Architect high-converting digital ecosystems, multi-channel acquisition funnels, and organic search dominance across high-intent queries.",
      image: "/images/cards/digital-visibility.jpg",
      href: "/digital-growth",
      buttonText: "Learn More",
    },
    {
      title: "Improve ROAS, Conversions & Sales Follow-Up",
      description: "Audit ad spend efficiency, plug pipeline leakage, improve sales scripts, and drive higher unit conversion ratios at lower acquisition costs.",
      image: "/images/cards/roas-conversion.jpg",
      href: "/consulting#digital-growth",
      buttonText: "Learn More",
    },
    {
      title: "Develop CRM, SOPs & Operational Systems",
      description: "Implement structured lead management, automated follow-up workflows, branch KPIs, and institutionalised SOPs that eliminate founder dependency.",
      image: "/images/cards/crm-systems.jpg",
      href: "/consulting#crm-systems",
      buttonText: "Learn More",
    },
    {
      title: "Design Franchise & Expansion Models",
      description: "Formulate unit economics, operational playbooks, commercial royalty structures, and partner support frameworks for multi-city expansion.",
      image: "/images/cards/franchise-expansion.jpg",
      href: "/consulting#franchise-expansion",
      buttonText: "Learn More",
    },
    {
      title: "Create Strategic Alliances & Partnerships",
      description: "Facilitate high-value tie-ups between healthcare networks, hospitality stakeholders, enterprise vendors, and industry trade associations.",
      image: "/images/cards/strategic-alliances.svg",
      href: "/leadership-ventures",
      buttonText: "Learn More",
    },
    {
      title: "Build Leadership Teams & Execution Discipline",
      description: "Establish monthly governance rhythms, performance dashboards, clear accountability matrices, and execution speed across key departments.",
      image: "/images/cards/leadership-teams.svg",
      href: "/consulting#business-growth",
      buttonText: "Learn More",
    },
  ],
  coreExpertise: [
    { id: "consulting", title: "Business Consulting", category: "Strategy", summary: "Growth roadmap, diagnostics, business model restructuring, and leadership alignment.", image: "/images/cards/leadership-teams.svg" },
    { id: "digital-growth", title: "Digital Growth & Performance", category: "Digital", summary: "Full-funnel digital strategy, paid media management, search optimization, and attribution.", image: "/images/cards/digital-visibility.jpg" },
    { id: "brand-strategy", title: "Brand Strategy & Positioning", category: "Brand", summary: "Market positioning, competitive differentiation, offer architecture, and messaging frameworks.", image: "/images/cards/brand-positioning.jpg" },
    { id: "ecosystems", title: "Website & Digital Ecosystems", category: "Technology", summary: "Enterprise website architecture, e-commerce, UX engineering, and digital asset integration.", image: "/images/cards/web-tycoons.svg" },
    { id: "crm-systems", title: "CRM Planning & Implementation", category: "Systems", summary: "Lead routing, conversion stage tracking, WhatsApp automations, and management dashboards.", image: "/images/cards/crm-systems.jpg" },
    { id: "sop-creation", title: "SOP & Process Creation", category: "Operations", summary: "Documented operational protocols, sales playbooks, quality controls, and approval matrices.", image: "/images/cards/karma-ayurveda.svg" },
    { id: "roas-conversion", title: "ROAS & Lead Conversion Optimisation", category: "Performance", summary: "Ad account diagnostics, conversion rate optimisation (CRO), and sales pipeline velocity.", image: "/images/cards/roas-conversion.jpg" },
    { id: "franchise", title: "Franchise & Expansion Strategy", category: "Expansion", summary: "Commercial modeling, territory frameworks, partner vetting, and rollout execution.", image: "/images/cards/franchise-expansion.jpg" },
    { id: "community", title: "Community Building & Networks", category: "Ecosystems", summary: "Ecosystem growth, vendor community monetization, high-engagement industry networking.", image: "/images/cards/hhc-hospitality.svg" },
    { id: "speaking", title: "Speaking, Mentoring & Workshops", category: "Knowledge", summary: "Keynotes, executive roundtables, entrepreneur training, and actionable MSME masterclasses.", image: "/images/cards/speaking-mentor.svg" },
  ],
  whyWorkWithMe: [
    {
      number: "01",
      title: "Strategy Before Activity",
      desc: "Tactics without diagnosis waste capital. We establish unit economics, target audiences, and competitive advantages before spending a rupee on campaigns or tech.",
    },
    {
      number: "02",
      title: "Execution With Accountability",
      desc: "Advisory cannot stop at slide decks. We install operational rhythms, clear ownership, weekly tracking, and direct accountability across your internal teams.",
    },
    {
      number: "03",
      title: "Systems That Can Scale",
      desc: "Processes engineered to operate seamlessly without depending on the founder's daily intervention—enabling clean branch rollouts and sustainable volume.",
    },
    {
      number: "04",
      title: "Commercial & ROI-Focused Thinking",
      desc: "Every initiative is evaluated against business outcomes: customer acquisition cost, gross margins, lifetime value, and operational profitability.",
    },
    {
      number: "05",
      title: "Hands-On Leadership Involvement",
      desc: "Direct engagement from a 15+ year practitioner who has run agencies, built networks, and advised large-scale healthcare and hospitality organizations.",
    },
    {
      number: "06",
      title: "Clarity, Speed & Practical Decisions",
      desc: "No theoretical jargon or bureaucratic delays. Just clear, decisive actions designed for immediate momentum and durable enterprise value.",
    },
  ],
};
