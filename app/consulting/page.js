import BreadcrumbHero from "@/components/ui/BreadcrumbHero";
import ConsultingDomainsCarousel from "@/components/sections/ConsultingDomainsCarousel";
import EngagementModelsCarousel from "@/components/sections/EngagementModelsCarousel";
import PageCTA from "@/components/sections/PageCTA";
import { consultingServices, engagementModels } from "@/data/services";

export const metadata = {
  title: "Executive Consulting & Business Systems | Dheeraj Aggarwal",
  description:
    "Strategic growth consulting, brand positioning, CRM & business systems, SOP development, and franchise expansion frameworks led by Dheeraj Aggarwal.",
};

export default function ConsultingPage() {
  return (
    <main className="font-sans">
      <BreadcrumbHero
        eyebrow="EXECUTIVE ADVISORY & SYSTEMS"
        title="Strategic Clarity. Scalable Systems. Predictable Growth."
        description="I work with founders and leadership teams to identify growth barriers, design practical strategies, improve execution, and establish systems that produce sustainable results."
        breadcrumbs={[{ label: "Consulting Services" }]}
        imageSrc="/images/transformations/karma-clinic-ops.jpg"
        className="!pt-24 !pb-8 md:!pt-28 md:!pb-10"
      />

      <ConsultingDomainsCarousel services={consultingServices} />

      <EngagementModelsCarousel models={engagementModels} />

      <PageCTA
        eyebrow="03 · DIAGNOSTIC CONSULTATION"
        title="Ready to Diagnose Growth Bottlenecks?"
        description="Book a confidential, one-on-one strategic diagnostic call to review your current commercial numbers, systems, and execution priorities."
        primaryAction={{
          label: "Book Diagnostic Call",
          href: "/contact?type=strategy-call",
        }}
        secondaryAction={{
          label: "Explore Case Studies",
          href: "/case-studies",
        }}
        light={true}
      />
    </main>
  );
}
