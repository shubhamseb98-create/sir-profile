import SectionHeading from "@/components/ui/SectionHeading";

export const metadata = {
  title: "Privacy Policy | Dheeraj Aggarwal",
  description: "Privacy policy and client data confidentiality terms for Dheeraj Aggarwal.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32 bg-[#004671] border-b border-white/08">
      <div className="max-w-[860px] mx-auto px-6 sm:px-8">
        <SectionHeading
          number="LEGAL"
          eyebrow="CLIENT CONFIDENTIALITY"
          title="Privacy Policy"
          description="Last updated: September 2026. Clearly outlined data integrity and executive confidentiality standards."
        />

        <div className="space-y-8 text-sm text-[#A9B0BE] leading-relaxed pt-4">
          <section className="p-6 rounded-2xl bg-[#0F1626] border border-white/08">
            <h2 className="font-editorial text-2xl text-[#F5F3EE] mb-3">1. Executive Overview</h2>
            <p>
              Dheeraj Aggarwal and affiliated entities respect the confidentiality of all business
              consulting clients, website visitors, and corporate stakeholders. We treat proprietary
              commercial metrics, marketing data, CRM credentials, and diagnostic assessments with the
              highest standards of professional discretion.
            </p>
          </section>

          <section className="p-6 rounded-2xl bg-[#0F1626] border border-white/08">
            <h2 className="font-editorial text-2xl text-[#F5F3EE] mb-3">2. Information Collection</h2>
            <p>
              We collect information voluntarily submitted via strategic consultation inquiry forms,
              direct email communications, WhatsApp discussions, and profile download requests. This
              may include names, corporate affiliations, professional designations, email addresses,
              phone numbers, and high-level descriptions of business objectives.
            </p>
          </section>

          <section className="p-6 rounded-2xl bg-[#0F1626] border border-white/08">
            <h2 className="font-editorial text-2xl text-[#F5F3EE] mb-3">3. Non-Disclosure & Data Protection</h2>
            <p>
              We do not sell, rent, or trade client information to any third parties. All proprietary
              diagnostics and commercial analyses are conducted under strict non-disclosure
              understandings. Where formal advisory engagements proceed, bilateral Non-Disclosure
              Agreements (NDAs) govern all financial and operational disclosures.
            </p>
          </section>

          <section className="p-6 rounded-2xl bg-[#0F1626] border border-white/08">
            <h2 className="font-editorial text-2xl text-[#F5F3EE] mb-3">4. Direct Contact</h2>
            <p>
              For inquiries regarding data privacy or to request the deletion of your consultation
              records, contact Dheeraj Aggarwal&apos;s executive desk at{" "}
              <a href="mailto:contact@dheerajaggarwal.com" className="text-[#C6A15B] hover:underline">
                contact@dheerajaggarwal.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

