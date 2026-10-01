import SectionHeading from "@/components/ui/SectionHeading";

export const metadata = {
  title: "Terms of Engagement | Dheeraj Aggarwal",
  description: "Terms of engagement and advisory conditions for Dheeraj Aggarwal.",
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32 bg-[#0A0F1A] border-b border-white/08">
      <div className="max-w-[860px] mx-auto px-6 sm:px-8">
        <SectionHeading
          number="LEGAL"
          eyebrow="ADVISORY TERMS"
          title="Terms of Engagement"
          description="Standard advisory guidelines, intellectual property terms, and consultation conditions."
        />

        <div className="space-y-8 text-sm text-[#A9B0BE] leading-relaxed pt-4">
          <section className="p-6 rounded-2xl bg-[#0F1626] border border-white/08">
            <h2 className="font-editorial text-2xl text-[#F5F3EE] mb-3">1. Scope of Strategic Advisory</h2>
            <p>
              Consulting services, strategic diagnostic audits, workshops, and keynote addresses
              provided by Dheeraj Aggarwal represent professional business recommendations based on
              over 15 years of industry experience. Commercial outcomes depend on client execution,
              market conditions, team competence, and capital adequacy.
            </p>
          </section>

          <section className="p-6 rounded-2xl bg-[#0F1626] border border-white/08">
            <h2 className="font-editorial text-2xl text-[#F5F3EE] mb-3">2. Intellectual Property</h2>
            <p>
              Frameworks, diagnostic methodologies, workshop slides, and published thought leadership
              remain the intellectual property of Dheeraj Aggarwal unless explicitly assigned under
              custom corporate consulting contracts. Clients receive irrevocable operational rights to
              utilize customized SOPs, CRM configurations, and manuals delivered during active mandates.
            </p>
          </section>

          <section className="p-6 rounded-2xl bg-[#0F1626] border border-white/08">
            <h2 className="font-editorial text-2xl text-[#F5F3EE] mb-3">3. Professional Retainers & Schedules</h2>
            <p>
              Advisory engagements operate on predefined milestone retainers, quarterly sprints, or
              board advisory contracts. Specific deliverables, scheduling rhythms, and governance
              obligations are detailed in individualized Master Service Agreements (MSAs).
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
