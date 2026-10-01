import Hero from "@/components/sections/Hero";
import AboutSection from "@/components/sections/AboutSection";
import Outcomes from "@/components/sections/Outcomes";
import ExpertiseCards from "@/components/sections/ExpertiseCards";
import RolesScroller from "@/components/sections/RolesScroller";
import TrustBar from "@/components/sections/TrustBar";
import TransformationsStack from "@/components/sections/TransformationsStack";
import WhyWorkWithMe from "@/components/sections/WhyWorkWithMe";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import PageCTA from "@/components/sections/PageCTA";

export const metadata = {
  title: "Dheeraj Aggarwal | Business Consultant, Digital Expert & Growth Specialist",
  description:
    "Building Brands. Creating Impact. Helping businesses grow through strategy, digital transformation, scalable systems and focused execution.",
};

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Banner (100vh height with executive corporate skyline) */}
      <Hero />

      {/* 2. About Us Section (Placed right below banner) */}
      <AboutSection />

      {/* 3. What I Help Businesses Achieve (GSAP 3D Infinite Card Slider) */}
      <Outcomes />

      {/* 4. Core Expertise (GSAP-style Scroll-Driven Stacking Cards) */}
      <ExpertiseCards />

      {/* 5. Active Roles & Ecosystems (GSAP Showcase Style Slider) */}
      <RolesScroller />

      {/* 6. Quick Credibility Bar & Ecosystem Marquee */}
      <TrustBar />

      {/* 7. Featured Transformation Stories (One-by-One Stacking Cards) */}
      <TransformationsStack />

      {/* 8. Why Work With Me (Ivory Rhythmic Section) */}
      <WhyWorkWithMe />

      {/* 9. Testimonials Section (Video + Quotes) */}
      <TestimonialsSection />

      {/* 10. Final Conversion PageCTA */}
      <PageCTA
        title="Let's Build Something Meaningful."
        eyebrow="READY FOR STRATEGIC CLARITY?"
        description="Whether you are navigating commercial bottlenecks, expanding multi-location operations, or scaling digital customer acquisition, let us structure a practical roadmap."
        primaryAction={{
          label: "Book a Strategy Call",
          href: "/contact?type=strategy-call",
        }}
        secondaryAction={{
          label: "Explore Advisory Mandates",
          href: "/consulting",
        }}
      />
    </>
  );
}

