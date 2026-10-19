import SectionHeading from "@/components/ui/SectionHeading";
import BreadcrumbHero from "@/components/ui/BreadcrumbHero";

export const metadata = {
  title: "Privacy Policy | Dheeraj Aggarwal",
  description: "Privacy policy and client data confidentiality terms for Dheeraj Aggarwal.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* 1. Sleek Breadcrumb Header (DARK - matching About page) */}
      <BreadcrumbHero
        eyebrow="LEGAL STANDARDS"
        title="Privacy Policy & Client Data Confidentiality"
        description="Clearly outlined data integrity, client non-disclosure standards, and commercial discretion guidelines governing every advisory mandate."
        breadcrumbs={[{ label: "Privacy Policy" }]}
        imageSrc="/images/hero/hero-corporate-skyline.jpg"
      />

      {/* 2. Policy Articles (LIGHT - 80px padding) */}
      <section className="min-h-screen flex flex-col justify-center py-[80px] bg-[#FFFFFF] border-b border-slate-200 relative overflow-hidden">
        {/* Homepage style ambient glow */}
        <div className="absolute top-1/4 -left-28 sm:-left-40 w-[380px] sm:w-[460px] h-[380px] sm:h-[460px] bg-[#CFFF04]/12 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-28 sm:-right-40 w-[380px] sm:w-[460px] h-[380px] sm:h-[460px] bg-[#CFFF04]/12 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-[860px] w-full mx-auto px-6 sm:px-8 my-auto relative z-10">
          <SectionHeading
            number="01"
            eyebrow="CLIENT CONFIDENTIALITY"
            title="Privacy Standards & Protocols"
            description="Our commitment to safeguarding commercial metrics, diagnostic assessments, and executive communication."
            light={true}
          />

          <div className="space-y-6 text-sm text-slate-700 leading-relaxed">
            <section className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">1. Executive Overview</h2>
              <p className="font-normal text-slate-600">
                Dheeraj Aggarwal and affiliated entities respect the confidentiality of all business
                consulting clients, website visitors, and corporate stakeholders. We treat proprietary
                commercial metrics, marketing data, CRM credentials, and diagnostic assessments with the
                highest standards of professional discretion.
              </p>
            </section>

            <section className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">2. Information Collection</h2>
              <p className="font-normal text-slate-600">
                We collect information voluntarily submitted via strategic consultation inquiry forms,
                direct email communications, WhatsApp discussions, and profile download requests. This
                may include names, corporate affiliations, professional designations, email addresses,
                phone numbers, and high-level descriptions of business objectives.
              </p>
            </section>

            <section className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">3. Non-Disclosure & Data Protection</h2>
              <p className="font-normal text-slate-600">
                We do not sell, rent, or trade client information to any third parties. All proprietary
                diagnostics and commercial analyses are conducted under strict non-disclosure
                understandings. Where formal advisory engagements proceed, bilateral Non-Disclosure
                Agreements (NDAs) govern all financial and operational disclosures.
              </p>
            </section>

            <section className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">4. Direct Contact</h2>
              <p className="font-normal text-slate-600">
                For inquiries regarding data privacy or to request the deletion of your consultation
                records, contact Dheeraj Aggarwal&apos;s executive desk at{" "}
                <a href="mailto:contact@dheerajaggarwal.com" className="text-black font-bold underline hover:text-[#84CC16]">
                  contact@dheerajaggarwal.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
