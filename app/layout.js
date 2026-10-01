import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import ScrollProgress from "@/components/layout/ScrollProgress";
import CustomCursor from "@/components/layout/CustomCursor";
import Preloader from "@/components/layout/Preloader";
import SmoothScroll from "@/components/layout/SmoothScroll";
import { siteConfig } from "@/data/site";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: siteConfig.title,
    template: "%s | Dheeraj Aggarwal",
  },
  description: siteConfig.positioningLine,
  keywords: [
    "Dheeraj Aggarwal",
    "Business Consultant",
    "Digital Growth Specialist",
    "CRM Implementation",
    "SOP Architecture",
    "Franchise Strategy",
    "Web Tycoons",
    "Karma Ayurveda Advisory",
    "Happy Hospitality Club",
    "BNI Speaker",
  ],
  authors: [{ name: "Dheeraj Aggarwal", url: siteConfig.domain }],
  creator: "Dheeraj Aggarwal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.domain,
    title: siteConfig.title,
    description: siteConfig.positioningLine,
    siteName: "Dheeraj Aggarwal",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.positioningLine,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  // Structured JSON-LD for Executive Person & Web Tycoons
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteConfig.domain}/#person`,
        name: "Dheeraj Aggarwal",
        jobTitle: "Business Consultant & Growth Specialist",
        description: siteConfig.positioningLine,
        url: siteConfig.domain,
        sameAs: [
          siteConfig.socials.linkedin,
          siteConfig.socials.youtube,
          siteConfig.socials.twitter,
        ],
        worksFor: [
          {
            "@type": "Organization",
            name: "Web Tycoons",
          },
          {
            "@type": "Organization",
            name: "Karma Ayurveda",
          },
          {
            "@type": "Organization",
            name: "Happy Hospitality Club",
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.domain}/#website`,
        url: siteConfig.domain,
        name: "Dheeraj Aggarwal",
        publisher: {
          "@id": `${siteConfig.domain}/#person`,
        },
      },
    ],
  };

  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#0F172A] text-[#F8FAFC] font-sans min-h-screen selection:bg-[#2563EB] selection:text-white antialiased w-full">
        {/* Skip to Main Content Accessibility Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[200] bg-[#2563EB] text-white px-4 py-2 font-semibold rounded-full text-sm shadow-xl"
        >
          Skip to main content
        </a>

        {/* Global UX Layers */}
        <Preloader />
        <ScrollProgress />
        <CustomCursor />

        <SmoothScroll>
          <div className="flex flex-col min-h-screen w-full">
            <Header />
            <main id="main-content" className="flex-grow w-full">
              {children}
            </main>
            <Footer />
          </div>
          <FloatingWhatsApp />
        </SmoothScroll>
      </body>
    </html>
  );
}
