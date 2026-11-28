import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import FooterFloatingBackground from "@/components/ui/FooterFloatingBackground";

const FOOTER_COLUMNS = [
  {
    heading: "Explore",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Speaking", href: "/speaking" },
      { label: "Insights", href: "/insights" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Business Consulting", href: "/consulting" },
      { label: "Digital Growth", href: "/digital-growth" },
      { label: "Leadership & Ventures", href: "/leadership-ventures" },
      { label: "Case Studies", href: "/case-studies" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "Media", href: "/media" },
      { label: "Contact Us", href: "/contact" },
      { label: "WhatsApp Direct", href: siteConfig.whatsappUrl, external: true },
    ],
  },
];

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: siteConfig.socials.linkedin,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-4 h-4">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: siteConfig.socials.youtube,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-4 h-4">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: siteConfig.socials.twitter,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-3.5 h-3.5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#04040A] pt-12 pb-8 sm:pt-14 sm:pb-10 text-white font-sans overflow-hidden">
      {/* Soft Subtle Ambient Wave Near Bottom */}
      <FooterFloatingBackground />

      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Main Editorial Grid: Minimal Left Brand Block + 4 Crisp Sparse Link Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 pb-10">
          {/* Left Identity & Compact Contact Details */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <Link
              href="/"
              className="inline-block focus:outline-none group"
              aria-label="Dheeraj Aggarwal"
            >
              <Image
                src="/cl-logo/dheeraj-gold-logo.png"
                alt="Dheeraj Aggarwal"
                width={200}
                height={68}
                unoptimized
                className="h-9 sm:h-10 md:h-11 w-auto object-contain opacity-95 group-hover:opacity-100 transition-opacity"
              />
            </Link>

            <div className="mt-4 space-y-1 text-xs text-slate-400 leading-relaxed">
              <p className="text-slate-400">Business Consultant &amp; Growth Strategist</p>
              <p>
                <a
                  href={`tel:+${siteConfig.phoneRaw}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="hover:text-[#93C5FD] transition-colors"
                >
                  {siteConfig.contactEmail}
                </a>
              </p>
            </div>

            {/* Rounded Social Media Icon Buttons */}
            <div className="mt-5 flex flex-wrap items-center gap-2.5">
              {SOCIAL_LINKS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  title={item.label}
                  className="w-9 h-9 rounded-full bg-white/[0.04] hover:bg-[#1D4ED8]/25 border border-white/15 hover:border-[#60A5FA]/60 text-slate-300 hover:text-[#93C5FD] flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_18px_rgba(59,130,246,0.3)]"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right 3 Clean Navigation Columns */}
          <nav
            aria-label="Footer Navigation"
            className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8"
          >
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.heading}>
                <h3 className="text-[13px] font-medium text-white mb-3.5 tracking-normal">
                  {col.heading}
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-[13px] text-slate-400">
                  {col.links.map((item) => (
                    <li key={item.label}>
                      {item.external ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-[#93C5FD] transition-colors"
                        >
                          {item.label}
                        </a>
                      ) : (
                        <Link
                          href={item.href}
                          className="hover:text-[#93C5FD] transition-colors"
                        >
                          {item.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Minimal Bottom Legal Strip */}
        <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] sm:text-xs text-slate-500">
          <p>&copy; {currentYear} Dheeraj Aggarwal. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-5">
            <Link
              href="/privacy-policy"
              className="hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-slate-700">&bull;</span>
            <Link
              href="/terms"
              className="hover:text-slate-300 transition-colors"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
