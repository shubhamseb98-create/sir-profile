import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import PageCTA from "@/components/sections/PageCTA";
import SafeImage from "@/components/ui/SafeImage";
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
        "Ad budget allocation across Google, Meta, and regional channels",
        "Lead-to-consultation and consultation-to-conversion analytics",
        "Healthcare influencer outreach, expert podcasts, and video collaborations",
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
        "Standardized disposition taxonomy preventing ambiguous statuses",
        "Conversion ratios, counselor productivity, and pipeline velocity reporting",
        "Advance payment, pending collections, and treatment invoicing modules",
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
        "Escalation matrices and emergency patient communication protocols",
        "Standardized daily counselor reporting and weekly manager review cadences",
        "Franchise operational documentation and quality audit checklists",
        "Team role clarity definitions and performance accountability rubrics",
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
        "Centralized lead generation support frameworks for franchise territories",
        "Clinical staffing guidelines and Ayurvedic doctor deployment protocols",
        "Brand governance guidelines, periodic audit systems, and partner SLAs",
        "Coordination with healthcare franchise partners and commercial negotiators",
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
        "Mutual marketing, community awareness programs, and physician roundtables",
        "Commercial revenue-sharing structures and joint billing reconciliations",
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
        "Ad spend efficiency vs patient lifetime value (LTV) correlation",
        "Diagnostic identification of drop-off points between consultation and treatment",
        "Branch revenue target planning and weekly governance tracking",
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
      {/* 1. Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-[#0A0F1A] border-b border-white/08 relative">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="text-xs uppercase tracking-[0.24em] text-[#C6A15B] font-mono font-medium">
                  EXECUTIVE CONSULTING MANDATE
                </span>
                <span className="text-white/20">•</span>
                <span className="text-xs text-[#A9B0BE] font-mono">Healthcare Enterprise</span>
              </div>

              <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-medium text-[#F5F3EE] leading-[1.1] mb-6">
                Karma Ayurveda Strategic Advisory
              </h1>

              <p className="text-base sm:text-lg text-[#A9B0BE] leading-relaxed mb-8">
                As Executive Consultant, Dheeraj supports Karma Ayurveda&apos;s leadership in growth
                strategy, digital performance, CRM and systems, sales processes, franchise planning,
                strategic partnerships and business expansion.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Button href="/contact?type=crm-systems" variant="primary" size="lg">
                  Explore Healthcare Advisory
                </Button>
                <Button href="#pillars" variant="secondary" size="lg" icon="right">
                  View Capability Pillars
                </Button>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="w-full max-w-[340px] p-6 rounded-2xl bg-[#0F1626] border border-white/12 shadow-2xl">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#C6A15B] block mb-2">
                  Mandate Scope
                </span>
                <h3 className="font-editorial text-2xl text-[#F5F3EE] mb-4">
                  Karma Ayurveda
                </h3>
                <div className="space-y-3 text-xs text-[#A9B0BE] border-t border-white/06 pt-4">
                  <div className="flex justify-between">
                    <span>Role:</span>
                    <strong className="text-[#F5F3EE]">Executive Consultant</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Focus:</span>
                    <strong className="text-[#F5F3EE]">Growth, CRM & Systems</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Sector:</span>
                    <strong className="text-[#F5F3EE]">Ayurvedic Healthcare</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Scale:</span>
                    <strong className="text-[#F5F3EE]">Pan-India Clinics</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Six Visual Capability Pillars */}
      <section id="pillars" className="py-24 md:py-32 bg-[#0F1626] border-b border-white/08 relative">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
          <SectionHeading
            number="01"
            eyebrow="SIX STRATEGIC PILLARS"
            title="Advisory Capability Pillars"
            description="A comprehensive, multi-disciplinary advisory engagement touching every aspect of commercial growth, technology, and operational rigor."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilityPillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.id}
                  className="p-8 rounded-2xl bg-[#151D30]/60 border border-white/08 hover:border-[#C6A15B]/40 transition-all duration-300 flex flex-col justify-between group shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-[#C6A15B]/10 border border-[#C6A15B]/25 flex items-center justify-center text-[#C6A15B] group-hover:scale-105 transition-transform">
                        <Icon className="w-6 h-6" strokeWidth={1.5} />
                      </div>
                      <span className="font-mono text-xs text-[#A9B0BE]/50">
                        0{idx + 1}
                      </span>
                    </div>

                    <h3 className="font-editorial text-2xl font-medium text-[#F5F3EE] mb-3 leading-snug group-hover:text-[#E2C98F] transition-colors">
                      {p.title}
                    </h3>

                    <p className="text-xs text-[#A9B0BE] leading-relaxed mb-6">
                      {p.summary}
                    </p>

                    <div className="space-y-2 pt-4 border-t border-white/06">
                      {p.deliverables.slice(0, 4).map((d) => (
                        <div key={d} className="flex items-start gap-2 text-[11px] text-[#A9B0BE]">
                          <Check className="w-3.5 h-3.5 text-[#C6A15B] shrink-0 mt-0.5" />
                          <span className="leading-snug">{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/06">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#C6A15B]">
                      Active Advisory Pillar
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Two Short Transformation Stories */}
      <section className="py-24 md:py-32 bg-[#0A0F1A] border-b border-white/08 relative">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
          <SectionHeading
            number="02"
            eyebrow="FIELD IMPACT"
            title="Transformation Snapshots"
            description="Real-world case perspectives detailing how systematic interventions solved operational barriers."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {transformationStories.map((story) => (
              <div
                key={story.title}
                className="p-8 sm:p-10 rounded-2xl bg-[#0F1626] border border-white/08 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-editorial text-2xl sm:text-3xl font-medium text-[#F5F3EE] mb-6 leading-snug">
                    {story.title}
                  </h3>

                  <div className="space-y-4 text-xs leading-relaxed">
                    <div className="p-4 rounded-xl bg-[#0A0F1A]/70 border border-white/04">
                      <span className="text-[#C6A15B] font-mono uppercase tracking-widest block mb-1">
                        Operational Challenge
                      </span>
                      <p className="text-[#A9B0BE]">{story.challenge}</p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#0A0F1A]/70 border border-white/04">
                      <span className="text-[#C6A15B] font-mono uppercase tracking-widest block mb-1">
                        Strategic Intervention
                      </span>
                      <p className="text-[#A9B0BE]">{story.intervention}</p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#151D30] border border-[#C6A15B]/30">
                      <span className="text-[#E2C98F] font-mono uppercase tracking-widest block mb-1">
                        Business Impact
                      </span>
                      <p className="text-[#F5F3EE] font-medium">{story.impact}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Timeline of Major Initiatives */}
      <section className="py-24 md:py-32 bg-[#0F1626] border-b border-white/08 relative">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
          <SectionHeading
            number="03"
            eyebrow="EXECUTION ROADMAP"
            title="Key Advisory Initiatives"
            description="A disciplined execution cadence aligning technology, people, and commercial expansion."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {initiativesTimeline.map((item) => (
              <div
                key={item.phase}
                className="p-6 rounded-2xl bg-[#151D30]/50 border border-white/06 relative"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-[#C6A15B] px-2.5 py-0.5 rounded bg-[#C6A15B]/10">
                    {item.phase}
                  </span>
                  <Calendar className="w-4 h-4 text-[#A9B0BE]/40" />
                </div>

                <h4 className="font-editorial text-xl font-medium text-[#F5F3EE] mb-2 leading-snug">
                  {item.title}
                </h4>

                <p className="text-xs text-[#A9B0BE] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Closing Statement on Business Impact */}
      <section className="py-20 bg-[#0A0F1A] border-b border-white/08 relative">
        <div className="max-w-[980px] mx-auto px-6 sm:px-8 text-center">
          <span className="text-xs uppercase tracking-[0.24em] text-[#C6A15B] font-mono block mb-4">
            BUSINESS IMPACT SUMMARY
          </span>
          <p className="font-editorial text-2xl sm:text-3xl md:text-4xl text-[#F5F3EE] leading-snug italic">
            &ldquo;Healthcare organizations scale sustainably when clinical excellence is matched with
            uncompromising CRM discipline, rapid patient response times, and predictable operating
            procedures.&rdquo;
          </p>
          <div className="mt-6">
            <span className="font-semibold text-sm text-[#F5F3EE] block">
              Dheeraj Aggarwal
            </span>
            <span className="text-xs text-[#C6A15B] font-mono">
              Executive Consultant, Karma Ayurveda
            </span>
          </div>
        </div>
      </section>

      {/* Page Closing CTA */}
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
      />
    </>
  );
}
