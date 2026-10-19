import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import PageCTA from "@/components/sections/PageCTA";
import SafeImage from "@/components/ui/SafeImage";
import BreadcrumbHero from "@/components/ui/BreadcrumbHero";
import {
  Activity,
  Layers,
  FileText,
  Building2,
  Handshake,
  TrendingUp,
  Check,
  Calendar,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Karma Ayurveda Advisory | Dheeraj Aggarwal",
  description:
    "Executive advisory case study: How Dheeraj Aggarwal supports Karma Ayurveda's leadership in growth strategy, digital performance, CRM systems, clinical SOPs, and franchise expansion.",
};

export default function KarmaAyurvedaPage() {
  const capabilityPillars = [
    {
      id: "digital-leadership",
      title: "Digital Leadership & Performance",
      icon: Activity,
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
      title: "Enterprise CRM Strategy & Implementation",
      icon: Layers,
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
      title: "Clinical & Sales SOPs",
      icon: FileText,
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
      title: "Franchise & Regional Expansion",
      icon: Building2,
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
      title: "Hospital Partnerships & Panchakarma Centers",
      icon: Handshake,
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
      title: "Revenue & Growth Consulting",
      icon: TrendingUp,
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
      phase: "Phase 1",
      title: "Operational Diagnostic & Systems Blueprint",
      desc: "Audited existing inquiry workflows, digital ad spend allocations, and counselor follow-up habits across branches.",
    },
    {
      phase: "Phase 2",
      title: "Enterprise CRM & WhatsApp Automation Rollout",
      desc: "Configured centralized lead capture, automated allocation trees, and executive management dashboards.",
    },
    {
      phase: "Phase 3",
      title: "Counseling & Clinical SOP Implementation",
      desc: "Trained branch teams on consultative communication scripts, patient intake protocols, and escalation guidelines.",
    },
    {
      phase: "Phase 4",
      title: "Franchise Modeling & Hospital Strategic Alliances",
      desc: "Designed investor disclosure decks, territory unit economics, and integrative hospital partnership models.",
    },
  ];

  return (
    <>
      {/* 1. Sleek Breadcrumb Header (DARK - matching About page) */}
      <BreadcrumbHero
        eyebrow="EXECUTIVE CONSULTING MANDATE"
        title="Karma Ayurveda Strategic Advisory"
        description="As Executive Consultant, Dheeraj supports Karma Ayurveda's leadership in growth strategy, digital performance, CRM and systems, sales processes, franchise planning, strategic partnerships and business expansion."
        breadcrumbs={[
          { label: "Ventures", href: "/leadership-ventures" },
          { label: "Karma Ayurveda" },
        ]}
        imageSrc="/images/hero/hero-corporate-skyline.jpg"
      />

      {/* 2. Six Visual Capability Pillars (LIGHT - 80px padding) */}
      <section id="pillars" className="min-h-screen flex flex-col justify-center py-[80px] bg-[#FFFFFF] border-b border-slate-200 relative overflow-hidden">
        {/* Homepage style balanced ambient glow */}
        <div className="absolute top-1/4 -left-28 sm:-left-40 w-[380px] sm:w-[460px] h-[380px] sm:h-[460px] bg-[#CFFF04]/12 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-28 sm:-right-40 w-[380px] sm:w-[460px] h-[380px] sm:h-[460px] bg-[#CFFF04]/12 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-[1240px] w-full mx-auto px-6 sm:px-8 my-auto relative z-10">
          <SectionHeading
            number="01"
            eyebrow="SIX STRATEGIC PILLARS"
            title="Advisory Capability Pillars"
            description="A comprehensive, multi-disciplinary advisory engagement touching every aspect of commercial growth, technology, and operational rigor."
            light={true}
            className="mb-10 sm:mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilityPillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.id}
                  className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-black transition-all duration-300 flex flex-col justify-between group shadow-md hover:shadow-xl hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 group-hover:border-black group-hover:bg-black group-hover:text-white flex items-center justify-center text-slate-900 group-hover:scale-110 transition-all font-bold">
                        <Icon className="w-6 h-6" strokeWidth={1.75} />
                      </div>
                      <span className="font-mono text-xs text-slate-500 font-bold">
                        0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 leading-snug group-hover:text-black transition-colors">
                      {p.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                      {p.summary}
                    </p>

                    <div className="space-y-2 pt-4 border-t border-slate-100">
                      {p.deliverables.slice(0, 4).map((d) => (
                        <div key={d} className="flex items-start gap-2 text-xs text-slate-700">
                          <Check className="w-3.5 h-3.5 text-black font-bold shrink-0 mt-0.5" />
                          <span className="leading-snug">{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-100">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-900 font-bold">
                      Active Advisory Pillar
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Two Short Transformation Stories (DARK - 80px padding) */}
      <section className="min-h-screen flex flex-col justify-center py-[80px] bg-[#000000] border-b border-white/10 relative overflow-hidden">
        {/* Subtle balanced neon lime glow aura */}
        <div className="absolute top-1/3 -left-32 w-[440px] h-[440px] bg-[#CFFF04]/12 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-32 w-[440px] h-[440px] bg-[#CFFF04]/12 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-[1240px] w-full mx-auto px-6 sm:px-8 my-auto relative z-10">
          <SectionHeading
            number="02"
            eyebrow="FIELD IMPACT"
            title="Transformation Snapshots"
            description="Real-world case perspectives detailing how systematic interventions solved operational barriers."
            light={false}
            className="mb-10 sm:mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {transformationStories.map((story) => (
              <div
                key={story.title}
                className="p-8 sm:p-10 rounded-2xl bg-[#0A0D14] border border-white/10 shadow-xl flex flex-col justify-between hover:border-white/20 transition-colors"
              >
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 leading-snug">
                    {story.title}
                  </h3>

                  <div className="space-y-4 text-xs leading-relaxed">
                    <div className="p-4 rounded-xl bg-black/60 border border-white/06">
                      <span className="text-[#CFFF04] font-mono uppercase tracking-widest block mb-1 font-bold">
                        Operational Challenge
                      </span>
                      <p className="text-slate-300 font-light">{story.challenge}</p>
                    </div>

                    <div className="p-4 rounded-xl bg-black/60 border border-white/06">
                      <span className="text-[#CFFF04] font-mono uppercase tracking-widest block mb-1 font-bold">
                        Strategic Intervention
                      </span>
                      <p className="text-slate-300 font-light">{story.intervention}</p>
                    </div>

                    <div className="p-4 rounded-xl bg-black/80 border border-[#CFFF04]/30">
                      <span className="text-[#CFFF04] font-mono uppercase tracking-widest block mb-1 font-bold">
                        Business Impact
                      </span>
                      <p className="text-white font-medium">{story.impact}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Timeline of Major Initiatives (LIGHT - 80px padding) */}
      <section className="min-h-screen flex flex-col justify-center py-[80px] bg-[#FFFFFF] border-b border-slate-200 relative overflow-hidden">
        {/* Homepage style balanced ambient glow */}
        <div className="absolute top-1/4 -left-28 sm:-left-40 w-[380px] sm:w-[460px] h-[380px] sm:h-[460px] bg-[#CFFF04]/12 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-28 sm:-right-40 w-[380px] sm:w-[460px] h-[380px] sm:h-[460px] bg-[#CFFF04]/12 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-[1240px] w-full mx-auto px-6 sm:px-8 my-auto relative z-10">
          <SectionHeading
            number="03"
            eyebrow="EXECUTION ROADMAP"
            title="Key Advisory Initiatives"
            description="A disciplined execution cadence aligning technology, people, and commercial expansion."
            align="center"
            light={true}
            className="mb-10 sm:mb-14"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {initiativesTimeline.map((item) => (
              <div
                key={item.phase}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-black relative transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-white px-3 py-1 rounded-full bg-black border border-black shadow-sm">
                    {item.phase}
                  </span>
                  <Calendar className="w-4 h-4 text-slate-400" />
                </div>

                <h4 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                  {item.title}
                </h4>

                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Page Closing CTA (DARK - 100vh) */}
      <PageCTA
        title="Need Specialized Healthcare or Multi-Unit Advisory?"
        description="Let us diagnose your patient acquisition funnels, CRM disposition architecture, and branch operating procedures."
        primaryAction={{
          label: "Book Strategy Call",
          href: "/contact?type=healthcare-advisory",
        }}
        secondaryAction={{
          label: "View All Case Studies",
          href: "/case-studies",
        }}
        light={true}
      />
    </>
  );
}

