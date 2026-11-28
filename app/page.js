import Hero from "@/components/sections/Hero";
import AboutSection from "@/components/sections/AboutSection";
import Outcomes from "@/components/sections/Outcomes";
import ExpertiseCards from "@/components/sections/ExpertiseCards";
import RolesScroller from "@/components/sections/RolesScroller";
import TrustBar from "@/components/sections/TrustBar";
import TransformationsStack from "@/components/sections/TransformationsStack";
import BrandTicker from "@/components/sections/BrandTicker";
import VideoSection from "@/components/sections/VideoSection";
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

      {/* 3. Core Expertise (Full-Bleed Expanding Card Deck Showcase) */}
      <ExpertiseCards />

      {/* 4. What I Help Businesses Achieve (White Bento Grid) */}
      <Outcomes />

      {/* 5. Active Roles & Ecosystems (GSAP Showcase Style Slider) */}
      <RolesScroller />

      {/* 6. Quick Credibility Bar & Ecosystem Marquee */}
      <TrustBar />

      {/* 7. Featured Transformation Stories (One-by-One Stacking Cards) */}
      <TransformationsStack />

      {/* 8. Strategic Ventures & Brand Logos Ribbon (Light Contrast Break) */}
      <BrandTicker />

      {/* 9. Direct Founder Video Conversations (Dedicated Cinema Showcase) */}
      <VideoSection number="07" />

      {/* 10. Written Executive Endorsements & Quotes */}
      <TestimonialsSection />

      {/* 11. Final Conversion PageCTA */}
      <PageCTA
        light={false}
        title="Let's Build Something Meaningful."
        eyebrow="READY FOR STRATEGIC CLARITY?"
        description="Whether you are navigating commercial bottlenecks, expanding multi-location operations, or scaling digital customer acquisition, let us structure a practical roadmap."
        primaryAction={{
          label: "Book a Strategy Call",
          href: "/contact?type=strategy-call",
        }}
        secondaryAction={{
          label: "Explore Consulting Services",
          href: "/consulting",
        }}
      />
    </>
  );
}

