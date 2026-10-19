import SectionHeading from "@/components/ui/SectionHeading";
import BreadcrumbHero from "@/components/ui/BreadcrumbHero";

export const metadata = {
  title: "Terms of Engagement | Dheeraj Aggarwal",
  description: "Terms of engagement and advisory conditions for Dheeraj Aggarwal.",
};

export default function TermsPage() {
  return (
    <>
      {/* 1. Sleek Breadcrumb Header (DARK - matching About page) */}
      <BreadcrumbHero
        eyebrow="LEGAL GUIDELINES"
        title="Terms of Strategic Engagement"
        description="Standard advisory guidelines, intellectual property terms, and consultation conditions governing bilateral corporate engagements."
        breadcrumbs={[{ label: "Terms of Engagement" }]}
        imageSrc="/images/hero/hero-corporate-skyline.jpg"
      />

      {/* 2. Advisory Terms (LIGHT - 80px padding) */}
      <section className="min-h-screen flex flex-col justify-center py-[80px] bg-[#FFFFFF] border-b border-slate-200 relative overflow-hidden">
        {/* Homepage style ambient glow */}
        <div className="absolute top-1/4 -left-28 sm:-left-40 w-[380px] sm:w-[460px] h-[380px] sm:h-[460px] bg-[#CFFF04]/12 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-28 sm:-right-40 w-[380px] sm:w-[460px] h-[380px] sm:h-[460px] bg-[#CFFF04]/12 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-[860px] w-full mx-auto px-6 sm:px-8 my-auto relative z-10">
          <SectionHeading
            number="01"
            eyebrow="ADVISORY TERMS"
            title="Terms of Engagement"
            description="Standard advisory guidelines, intellectual property terms, and consultation conditions."
            light={true}
          />

          <div className="space-y-6 text-sm text-slate-700 leading-relaxed">
            <section className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">1. Scope of Strategic Advisory</h2>
              <p className="font-normal text-slate-600">
                Consulting services, strategic diagnostic audits, workshops, and keynote addresses
                provided by Dheeraj Aggarwal represent professional business recommendations based on
                over 15 years of industry experience. Commercial outcomes depend on client execution,
                market conditions, team competence, and capital adequacy.
              </p>
            </section>

            <section className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">2. Intellectual Property</h2>
              <p className="font-normal text-slate-600">
                Frameworks, diagnostic methodologies, workshop slides, and published thought leadership
                remain the intellectual property of Dheeraj Aggarwal unless explicitly assigned under
                custom corporate consulting contracts. Clients receive irrevocable operational rights to
                utilize customized SOPs, CRM configurations, and manuals delivered during active mandates.
              </p>
            </section>

            <section className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">3. Professional Retainers & Schedules</h2>
              <p className="font-normal text-slate-600">
                Advisory engagements operate on predefined milestone retainers, quarterly sprints, or
                board advisory contracts. Specific deliverables, scheduling rhythms, and governance
                obligations are detailed in individualized Master Service Agreements (MSAs).
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
