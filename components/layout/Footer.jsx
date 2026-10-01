import Link from "next/link";
import { siteConfig } from "@/data/site";
import { ArrowUpRight } from "lucide-react";
import FooterFloatingBackground from "@/components/ui/FooterFloatingBackground";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0A0F1A] border-t border-slate-800/90 pt-14 sm:pt-18 md:pt-20 pb-8 sm:pb-12 text-white font-sans overflow-hidden">
      {/* ── Floating Luminous Glass Rings, Circles & Ambient Glow ── */}
      <FooterFloatingBackground />

      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12 pb-12 sm:pb-16 border-b border-slate-800/80">
          {/* Col 1 & 2: Brand Profile */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="text-2xl sm:text-3xl font-bold tracking-tight text-white hover:text-[#38BDF8] transition-colors inline-block"
            >
              Dheeraj Aggarwal
            </Link>
            <p className="text-xs uppercase tracking-[0.22em] text-[#38BDF8] font-mono font-semibold mt-1 mb-4">
              {siteConfig.designation}
            </p>
            <p className="text-sm leading-relaxed text-slate-200 max-w-sm">
              {siteConfig.positioningLine}
            </p>

            <div className="mt-6 p-4 rounded-2xl bg-[#0F172A]/90 border border-slate-800 hover:border-[#38BDF8]/40 max-w-sm backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(56,189,248,0.06)] transition-all">
              <span className="text-[11px] uppercase tracking-wider text-[#38BDF8] font-mono font-bold block mb-1">
                Executive Creed
              </span>
              <p className="text-sm sm:text-base text-white font-medium">
                &ldquo;{siteConfig.closingLine}&rdquo;
              </p>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-mono font-bold text-[#38BDF8] mb-4">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link href="/about" className="text-white hover:text-[#38BDF8] hover:translate-x-0.5 transition-all inline-block">
                  About Dheeraj
                </Link>
              </li>
              <li>
                <Link href="/consulting" className="text-white hover:text-[#38BDF8] hover:translate-x-0.5 transition-all inline-block">
                  Consulting Services
                </Link>
              </li>
              <li>
                <Link href="/digital-growth" className="text-white hover:text-[#38BDF8] hover:translate-x-0.5 transition-all inline-block">
                  Digital Growth & Agency
                </Link>
              </li>
              <li>
                <Link href="/speaking" className="text-white hover:text-[#38BDF8] hover:translate-x-0.5 transition-all inline-block">
                  Speaking & Workshops
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-white hover:text-[#38BDF8] hover:translate-x-0.5 transition-all inline-block">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-white hover:text-[#38BDF8] hover:translate-x-0.5 transition-all inline-block">
                  Executive Insights
                </Link>
              </li>
              <li>
                <Link href="/media" className="text-white hover:text-[#38BDF8] hover:translate-x-0.5 transition-all inline-block">
                  Media & Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Ventures & Ecosystems */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-mono font-bold text-[#38BDF8] mb-4">
              Ventures
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link href="/digital-growth" className="text-white hover:text-[#38BDF8] hover:translate-x-0.5 transition-all inline-block">
                  Web Tycoons
                </Link>
              </li>
              <li>
                <Link href="/karma-ayurveda" className="text-white hover:text-[#38BDF8] hover:translate-x-0.5 transition-all inline-block">
                  Karma Ayurveda Advisory
                </Link>
              </li>
              <li>
                <Link href="/hhc" className="text-white hover:text-[#38BDF8] hover:translate-x-0.5 transition-all inline-block">
                  Happy Hospitality Club
                </Link>
              </li>
              <li>
                <Link href="/leadership-ventures" className="text-white hover:text-[#38BDF8] hover:translate-x-0.5 transition-all inline-block">
                  BNI Chapter Leadership
                </Link>
              </li>
              <li>
                <Link href="/leadership-ventures#future" className="text-white hover:text-[#38BDF8] hover:translate-x-0.5 transition-all inline-block">
                  Future Ventures
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Connect & Engage */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-mono font-bold text-[#38BDF8] mb-4">
              Direct Inquiries
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link href="/contact" className="hover:text-[#38BDF8] hover:translate-x-0.5 transition-all inline-block font-semibold text-white">
                  Book a Strategy Call
                </Link>
              </li>
              <li>
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#38BDF8] hover:translate-x-0.5 transition-all inline-flex items-center gap-1.5"
                >
                  <span>WhatsApp Direct</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#25D366]" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="text-white hover:text-[#38BDF8] hover:translate-x-0.5 transition-all truncate block"
                >
                  {siteConfig.contactEmail}
                </a>
              </li>
              <li className="pt-2">
                <span className="text-[11px] uppercase tracking-wider text-[#38BDF8] font-mono font-bold block mb-2">
                  Social Channels
                </span>
                <div className="flex items-center gap-2.5">
                  <a
                    href={siteConfig.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-3 py-1.5 rounded-lg bg-[#0F172A] hover:bg-[#1E293B] hover:text-[#38BDF8] text-white border border-slate-800 transition-colors shadow-sm"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={siteConfig.socials.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-3 py-1.5 rounded-lg bg-[#0F172A] hover:bg-[#1E293B] hover:text-[#38BDF8] text-white border border-slate-800 transition-colors shadow-sm"
                  >
                    YouTube
                  </a>
                  <a
                    href={siteConfig.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-3 py-1.5 rounded-lg bg-[#0F172A] hover:bg-[#1E293B] hover:text-[#38BDF8] text-white border border-slate-800 transition-colors shadow-sm"
                  >
                    X
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {currentYear} Dheeraj Aggarwal. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Engagement
            </Link>
            <Link href="/sitemap.xml" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
