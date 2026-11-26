import SectionHeading from "@/components/ui/SectionHeading";
import BreadcrumbHero from "@/components/ui/BreadcrumbHero";

export const metadata = {
  title: "Terms of Engagement | Dheeraj Aggarwal",
  description: "Terms of engagement and advisory conditions for Dheeraj Aggarwal.",
};

export default function TermsPage() {
  const clauses = [
    {
      num: "01",
      title: "Scope of Strategic Advisory",
      body: "Consulting services, strategic diagnostic audits, workshops, and keynote addresses provided by Dheeraj Aggarwal represent professional business recommendations based on over 15 years of industry experience. Commercial outcomes depend on client execution, market conditions, team competence, and capital adequacy.",
    },
    {
      num: "02",
      title: "Intellectual Property",
      body: "Frameworks, diagnostic methodologies, workshop slides, and published thought leadership remain the intellectual property of Dheeraj Aggarwal unless explicitly assigned under custom corporate consulting contracts. Clients receive irrevocable operational rights to utilize customized SOPs, CRM configurations, and manuals delivered during active mandates.",
    },
    {
      num: "03",
      title: "Professional Retainers & Schedules",
      body: "Advisory engagements operate on predefined milestone retainers, quarterly sprints, or board advisory contracts. Specific deliverables, scheduling rhythms, and governance obligations are detailed in individualized Master Service Agreements (MSAs).",
    },
  ];

  return (
    <>
      <BreadcrumbHero
        eyebrow="LEGAL GUIDELINES"
        title="Terms of Strategic Engagement"
        description="Standard advisory guidelines, intellectual property terms, and consultation conditions governing bilateral corporate engagements."
        breadcrumbs={[{ label: "Terms of Engagement" }]}
      />

      <section className="py-[60px] bg-[#FFFFFF] border-b border-slate-200 font-sans">
        <div className="max-w-[820px] w-full mx-auto px-4 sm:px-6 md:px-8">
          <SectionHeading
            eyebrow="ADVISORY TERMS"
            title="Terms of Engagement"
            description="Standard advisory guidelines, intellectual property terms, and consultation conditions."
            light={true}
            compact={true}
            animate={false}
            className="!mb-8"
          />

          <div className="border-t border-b border-slate-200 divide-y divide-slate-200">
            {clauses.map((clause) => (
              <article key={clause.num} className="py-7 grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 items-start">
                <span className="sm:col-span-2 text-sm font-bold text-[#9A6B0C] tabular-nums pt-0.5">
                  Clause {clause.num}
                </span>
                <div className="sm:col-span-10">
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                    {clause.title}
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {clause.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
