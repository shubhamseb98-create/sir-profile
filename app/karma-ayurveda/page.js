import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import PageCTA from "@/components/sections/PageCTA";
import BreadcrumbHero from "@/components/ui/BreadcrumbHero";
import DarkSectionLining from "@/components/ui/DarkSectionLining";
import { Check } from "lucide-react";

export const metadata = {
  title: "Karma Ayurveda Advisory | Dheeraj Aggarwal",
  description:
    "Executive advisory case study: How Dheeraj Aggarwal supports Karma Ayurveda's leadership in growth strategy, digital performance, CRM systems, clinical SOPs, and franchise expansion.",
};

export default function KarmaAyurvedaPage() {
  const capabilityPillars = [
    {
      id: "digital-leadership",
      image: "/images/cards/digital-growth-real.jpg",
      title: "Digital Leadership & Performance",
      summary:
        "Providing strategic direction to digital teams, structuring organic patient education content, optimizing performance ad spend, and monitoring full-funnel ROAS.",
      deliverables: [
        "Strategic leadership of internal digital marketing and design teams",
        "Brand positioning and clinical target-audience communication frameworks",
        "High-intent Google search optimization and content architecture",
        "Inquiry volume scaling while elevating patient qualification quality",
      ],
    },
    {
      id: "crm-architecture",
      image: "/images/cards/crm-operations-real.jpg",
      title: "Enterprise CRM Strategy & Implementation",
      summary:
        "Architecting unified patient relationship management infrastructure to ensure zero lead leakage, automated follow-up cadences, and multi-branch tracking.",
      deliverables: [
        "Lead capture standardization across phone lines, web funnels, and social ads",
        "Dynamic source tracking with automated UTM parameter capture",
        "Intelligent routing by clinic location, counselor availability, and patient language",
        "Official WhatsApp Business API integration for instant patient confirmation",
      ],
    },
    {
      id: "sops-processes",
      image: "/images/inner/about-sop-systems.jpg",
      title: "Clinical & Sales SOPs",
      summary:
        "Codifying front-desk, counseling desk, and clinic operations into standard operating procedures to eliminate founder dependency and ensure clinical consistency.",
      deliverables: [
        "Patient inquiry intake and consultative counseling playbooks",
        "Multi-touch follow-up protocols for chronic patient consultations",
        "Clinic check-in, doctor handoff, and patient onboarding SOPs",
        "Franchise operational documentation and quality audit checklists",
      ],
    },
    {
      id: "franchise-expansion",
      image: "/images/transformations/karma-clinic-ops.jpg",
      title: "Franchise & Regional Expansion",
      summary:
        "Structuring commercial franchise frameworks, operational playbooks, and localized marketing support to scale clinic presence into Tier-1 and Tier-2 Indian cities.",
      deliverables: [
        "Franchise model evaluation (FOFO, FOCO, Joint Venture formats)",
        "Unit economics, setup Capex modeling, and investor payback projections",
        "Investor-facing Franchise Information Memorandum and proposal decks",
        "Brand governance guidelines, periodic audit systems, and partner SLAs",
      ],
    },
    {
      id: "hospital-tieups",
      image: "/images/inner/karma-panchakarma-center.jpg",
      title: "Hospital Partnerships & Panchakarma Centers",
      summary:
        "Developing institutional partnerships with established hospitals to embed specialized Panchakarma and Ayurvedic wellness therapy wings.",
      deliverables: [
        "Hospital collaboration frameworks for integrative healthcare delivery",
        "Space utilization, clinical infrastructure, and therapy room guidelines",
        "In-house patient privileges, cross-referral pathways, and benefit schemes",
        "Senior relationship management with hospital boards and medical directors",
      ],
    },
    {
      id: "revenue-consulting",
      image: "/images/cards/leadership-governance-real.jpg",
      title: "Revenue & Growth Consulting",
      summary:
        "Analyzing clinic-level economics, treatment package profitability, and conversion bottlenecks to unlock immediate margin improvements.",
      deliverables: [
        "Branch-by-branch financial productivity and conversion bench-marking",
        "Ayurvedic treatment package restructuring and duration modeling",
        "Diagnostic identification of drop-off points between consultation and treatment",
        "Executive leadership action memos and commercial priority roadmaps",
      ],
    },
  ];

  const transformationStories = [
    {
      title: "Patient Pipeline Transformation: 7-Minute Response Time & CRM Modernization",
      challenge:
        "Inbound patient inquiries from pan-India digital campaigns were tracked on fragmented spreadsheets, causing response delays of 4+ hours, frequent counselor misallocation, and near-zero visibility into whether inquiries converted into clinic visits.",
      intervention:
        "Architected an enterprise-wide CRM deployment with dynamic routing by clinic geography, integrated WhatsApp instant confirmations, and enforced mandatory disposition trees for all counseling teams.",
      impact:
        "Inquiry turnaround reduced to under 7 minutes. Management gained 100% real-time transparency over lead-to-consultation velocity across all clinic branches.",
    },
    {
      title: "Multi-Location SOP Standardisation for National Expansion",
      challenge:
        "As new clinics opened across major metropolitan corridors, operational quality varied heavily depending on local staff tenure. Inquiries lacked standardized counseling protocols, creating uneven patient satisfaction.",
      intervention:
        "Authored the comprehensive Master Clinical & Counseling SOP Handbook, established weekly supervisor review rhythms, and instituted standardized quality assurance checklists.",
      impact:
        "Established operational uniformity across all corporate clinics, creating a predictable foundation for franchise partner licensing and institutional hospital tie-ups.",
    },
  ];

  const initiativesTimeline = [
    {
      phase: "Phase 01",
      image: "/images/cards/leadership-governance-real.jpg",
      title: "Operational Diagnostic & Systems Blueprint",
      desc: "Audited existing inquiry workflows, digital ad spend allocations, and counselor follow-up habits across branches.",
    },
    {
      phase: "Phase 02",
      image: "/images/cards/crm-operations-real.jpg",
      title: "Enterprise CRM & WhatsApp Automation Rollout",
      desc: "Configured centralized lead capture, automated allocation trees, and executive management dashboards.",
    },
    {
      phase: "Phase 03",
      image: "/images/inner/about-sop-systems.jpg",
      title: "Counseling & Clinical SOP Implementation",
      desc: "Trained branch teams on consultative communication scripts, patient intake protocols, and escalation guidelines.",
    },
    {
      phase: "Phase 04",
      image: "/images/inner/karma-panchakarma-center.jpg",
      title: "Franchise Modeling & Hospital Strategic Alliances",
      desc: "Designed investor disclosure decks, territory unit economics, and integrative hospital partnership models.",
    },
  ];

  return (
    <>
      {/* 1. Architectural Midnight Navy Masthead */}
      <BreadcrumbHero
        eyebrow="EXECUTIVE CONSULTING MANDATE"
        title="Karma Ayurveda Strategic Advisory"
        description="Modernizing digital acquisition, enterprise CRM protocols, multi-city clinic SOPs, and national franchise expansion across India."
        breadcrumbs={[
          { label: "Ventures", href: "/leadership-ventures" },
          { label: "Karma Ayurveda" },
        ]}
        imageSrc="/images/transformations/karma-clinic-ops.jpg"
      />

      {/* 2. Advisory Mandate Overview + Structured Capability Pillars (LIGHT - 60px padding) */}
      <section id="pillars" className="py-[60px] bg-[#FFFFFF] border-b border-slate-200 font-sans">
        <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-6 md:px-8">
          {/* Editorial Clinical Mandate Visual Strip */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pb-10 mb-10 border-b border-slate-200">
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="HEALTHCARE TRANSFORMATION"
                title="Institutionalizing Clinical Scale & Patient Trust"
                description="Six core strategic pillars powering pan-India patient inquiries, CRM governance, and standardized branch replication."
                light={true}
                compact={true}
                animate={false}
                className="!mb-0 max-w-none"
              />
            </div>
            <div className="lg:col-span-5">
              <div className="relative h-56 sm:h-64 w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
                <Image
                  src="/images/transformations/karma-clinic-ops.jpg"
                  alt="Karma Ayurveda Clinic Operations Hub"
                  fill
                  sizes="(max-width: 768px) 100vw, 480px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* 3x2 Structured Architectural Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilityPillars.map((pillar, idx) => (
              <article
                key={pillar.id}
                id={pillar.id}
                className="group rounded-2xl overflow-hidden bg-[#F8FAFC] border border-slate-200/90 hover:border-[#3B82F6]/65 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 border-b border-slate-200">
                    <Image
                      src={pillar.image}
                      alt={pillar.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="p-6 sm:p-7">
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200">
                      <span className="text-[11px] uppercase tracking-[0.16em] font-bold text-[#1D4ED8]">
                        Pillar 0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-lg font-normal text-slate-900 mb-2 leading-snug">
                      {pillar.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                      {pillar.summary}
                    </p>

                    <ul className="space-y-2 pt-4 border-t border-slate-200/80">
                      {pillar.deliverables.map((del) => (
                        <li key={del} className="flex items-start gap-2 text-xs text-slate-700">
                          <Check className="w-3.5 h-3.5 text-[#2563EB] shrink-0 mt-0.5" strokeWidth={2.2} />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Transformation Case Snapshots (OBSIDIAN & ROYAL BLUE - 60px padding) */}
      <section className="py-[60px] bg-[#04040A] border-b border-white/10 relative overflow-hidden font-sans">
        <DarkSectionLining variant="blue" />

        <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <SectionHeading
            eyebrow="OPERATIONAL INTERVENTIONS"
            title="Verified Pipeline & Process Transformations"
            description="Detailed breakdown of systemic bottlenecks diagnosed and resolved during advisory execution."
            light={false}
            compact={true}
            animate={false}
            className="!mb-8 sm:!mb-10"
          />

          <div className="space-y-6">
            {transformationStories.map((story, idx) => (
              <article
                key={story.title}
                className="p-6 sm:p-8 rounded-2xl bg-[#090F1E] border border-white/12 hover:border-[#60A5FA]/50 transition-colors"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2 pb-4 mb-5 border-b border-white/10">
                  <h3 className="text-lg sm:text-xl font-normal text-white">
                    {story.title}
                  </h3>
                  <span className="text-xs font-bold text-[#60A5FA] tabular-nums">
                    Case Snapshot 0{idx + 1}
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:pr-4 lg:border-r lg:border-white/10">
                    <span className="text-[11px] uppercase tracking-[0.14em] font-bold text-slate-400 block mb-1.5">
                      System Bottleneck
                    </span>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {story.challenge}
                    </p>
                  </div>

                  <div className="lg:px-2 lg:border-r lg:border-white/10">
                    <span className="text-[11px] uppercase tracking-[0.14em] font-bold text-[#93C5FD] block mb-1.5">
                      Strategic Intervention
                    </span>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                      {story.intervention}
                    </p>
                  </div>

                  <div>
                    <span className="text-[11px] uppercase tracking-[0.14em] font-bold text-[#60A5FA] block mb-1.5">
                      Measured Impact
                    </span>
                    <p className="text-xs sm:text-sm text-white font-medium leading-relaxed">
                      {story.impact}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Engagement Rollout Phases (LIGHT - 60px padding) */}
      <section className="py-[60px] bg-[#FFFFFF] border-b border-slate-200 font-sans">
        <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-6 md:px-8">
          <SectionHeading
            eyebrow="EXECUTION SEQUENCE"
            title="Phased Systems Deployment"
            description="Structured rollout ensuring zero disruption to daily clinic consultations while institutionalizing new SOPs."
            light={true}
            compact={true}
            animate={false}
            className="!mb-8 sm:!mb-10"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {initiativesTimeline.map((item) => (
              <div
                key={item.phase}
                className="group rounded-2xl overflow-hidden border border-slate-200 bg-white flex flex-col justify-between shadow-[0_2px_10px_rgba(15,23,42,0.03)]"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 border-b border-slate-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#1D4ED8] block mb-2">
                      {item.phase}
                    </span>
                    <h3 className="text-base font-normal text-slate-900 mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Page Closing CTA (LIGHT - 60px padding) */}
      <PageCTA
        title="Scaling a Multi-Location Healthcare or Service Network?"
        description="Connect directly to discuss enterprise CRM routing, standardized branch SOPs, and national franchise readiness."
        primaryAction={{
          label: "Schedule Healthcare Consultation",
          href: "/contact?type=healthcare-advisory",
        }}
        secondaryAction={{
          label: "Explore Case Studies",
          href: "/case-studies",
        }}
        light={true}
      />
    </>
  );
}
