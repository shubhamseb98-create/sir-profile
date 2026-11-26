import SectionHeading from "@/components/ui/SectionHeading";
import BreadcrumbHero from "@/components/ui/BreadcrumbHero";

export const metadata = {
  title: "Privacy Policy | Dheeraj Aggarwal",
  description: "Privacy policy and client data confidentiality terms for Dheeraj Aggarwal.",
};

export default function PrivacyPolicyPage() {
  const articles = [
    {
      num: "01",
      title: "Executive Overview",
      body: "Dheeraj Aggarwal and affiliated entities respect the confidentiality of all business consulting clients, website visitors, and corporate stakeholders. We treat proprietary commercial metrics, marketing data, CRM credentials, and diagnostic assessments with the highest standards of professional discretion.",
    },
    {
      num: "02",
      title: "Information Collection",
      body: "We collect information voluntarily submitted via strategic consultation inquiry forms, direct email communications, WhatsApp discussions, and profile download requests. This may include names, corporate affiliations, professional designations, email addresses, phone numbers, and high-level descriptions of business objectives.",
    },
    {
      num: "03",
      title: "Non-Disclosure & Data Protection",
      body: "We do not sell, rent, or trade client information to any third parties. All proprietary diagnostics and commercial analyses are conducted under strict non-disclosure understandings. Where formal advisory engagements proceed, bilateral Non-Disclosure Agreements (NDAs) govern all financial and operational disclosures.",
    },
  ];

  return (
    <>
      <BreadcrumbHero
        eyebrow="LEGAL STANDARDS"
        title="Privacy Policy & Client Data Confidentiality"
        description="Clearly outlined data integrity, client non-disclosure standards, and commercial discretion guidelines governing every advisory mandate."
        breadcrumbs={[{ label: "Privacy Policy" }]}
      />

      <section className="py-[60px] bg-[#FFFFFF] border-b border-slate-200 font-sans">
        <div className="max-w-[820px] w-full mx-auto px-4 sm:px-6 md:px-8">
          <SectionHeading
            eyebrow="CLIENT CONFIDENTIALITY"
            title="Privacy Standards & Protocols"
            description="Our commitment to safeguarding commercial metrics, diagnostic assessments, and executive communication."
            light={true}
            compact={true}
            animate={false}
            className="!mb-8"
          />

          <div className="border-t border-b border-slate-200 divide-y divide-slate-200">
            {articles.map((art) => (
              <article key={art.num} className="py-7 grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 items-start">
                <span className="sm:col-span-2 text-sm font-bold text-[#9A6B0C] tabular-nums pt-0.5">
                  Clause {art.num}
                </span>
                <div className="sm:col-span-10">
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                    {art.title}
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {art.body}
                  </p>
                </div>
              </article>
            ))}

            <article className="py-7 grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 items-start">
              <span className="sm:col-span-2 text-sm font-bold text-[#9A6B0C] tabular-nums pt-0.5">
                Clause 04
              </span>
              <div className="sm:col-span-10">
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                  Direct Contact
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  For inquiries regarding data privacy or to request the deletion of your consultation
                  records, contact Dheeraj Aggarwal&apos;s executive desk at{" "}
                  <a
                    href="mailto:contact@dheerajaggarwal.com"
                    className="text-slate-900 font-semibold underline underline-offset-4 hover:text-[#9A6B0C] transition-colors"
                  >
                    contact@dheerajaggarwal.com
                  </a>
                  .
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
