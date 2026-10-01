import Link from "next/link";
import { siteConfig } from "@/data/site";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B1120] border-t border-slate-800 pt-12 sm:pt-16 md:pt-24 pb-8 sm:pb-12 text-[#38BDF8] font-sans">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12 pb-12 sm:pb-16 border-b border-slate-800">
          {/* Col 1 & 2: Brand Profile */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="text-2xl sm:text-3xl font-bold tracking-tight text-white hover:text-[#38BDF8] transition-colors"
            >
              Dheeraj Aggarwal
            </Link>
            <p className="text-xs uppercase tracking-[0.22em] text-[#38BDF8] font-mono font-semibold mt-1 mb-4">
              {siteConfig.designation}
            </p>
            <p className="text-sm leading-relaxed text-[#38BDF8] max-w-sm">
              {siteConfig.positioningLine}
            </p>

            <div className="mt-6 p-4 rounded-2xl bg-[#1E293B] border border-slate-800 max-w-sm">
              <span className="text-[11px] uppercase tracking-wider text-[#38BDF8] font-mono font-bold block mb-1">
                Executive Creed
              </span>
              <p className="text-base text-white font-medium">
                &ldquo;{siteConfig.closingLine}&rdquo;
              </p>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-white mb-4">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link href="/about" className="hover:text-[#38BDF8] transition-colors">
                  About Dheeraj
                </Link>
              </li>
              <li>
                <Link href="/consulting" className="hover:text-[#38BDF8] transition-colors">
                  Consulting Services
                </Link>
              </li>
              <li>
                <Link href="/digital-growth" className="hover:text-[#38BDF8] transition-colors">
                  Digital Growth & Agency
                </Link>
              </li>
              <li>
                <Link href="/speaking" className="hover:text-[#38BDF8] transition-colors">
                  Speaking & Workshops
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-[#38BDF8] transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-[#38BDF8] transition-colors">
                  Executive Insights
                </Link>
              </li>
              <li>
                <Link href="/media" className="hover:text-[#38BDF8] transition-colors">
                  Media & Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Ventures & Ecosystems */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-white mb-4">
              Ventures
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link href="/digital-growth" className="hover:text-[#38BDF8] transition-colors">
                  Web Tycoons
                </Link>
              </li>
              <li>
                <Link href="/karma-ayurveda" className="hover:text-[#38BDF8] transition-colors">
                  Karma Ayurveda Advisory
                </Link>
              </li>
              <li>
                <Link href="/hhc" className="hover:text-[#38BDF8] transition-colors">
                  Happy Hospitality Club
                </Link>
              </li>
              <li>
                <Link href="/leadership-ventures" className="hover:text-[#38BDF8] transition-colors">
                  BNI Chapter Leadership
                </Link>
              </li>
              <li>
                <Link href="/leadership-ventures#future" className="hover:text-[#38BDF8] transition-colors">
                  Future Ventures
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Connect & Engage */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-white mb-4">
              Direct Inquiries
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link href="/contact" className="hover:text-[#38BDF8] transition-colors font-medium text-white">
                  Book a Strategy Call
                </Link>
              </li>
              <li>
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#38BDF8] transition-colors flex items-center gap-1"
                >
                  <span>WhatsApp Direct</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#25D366]" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="hover:text-[#38BDF8] transition-colors truncate block"
                >
                  {siteConfig.contactEmail}
                </a>
              </li>
              <li className="pt-2">
                <span className="text-xs uppercase tracking-wider text-[#38BDF8] font-mono font-semibold block mb-2">
                  Social Channels
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={siteConfig.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-2.5 py-1 rounded-md bg-[#1E293B] hover:bg-[#334155] hover:text-white border border-slate-700 transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={siteConfig.socials.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-2.5 py-1 rounded-md bg-[#1E293B] hover:bg-[#334155] hover:text-white border border-slate-700 transition-colors"
                  >
                    YouTube
                  </a>
                  <a
                    href={siteConfig.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-2.5 py-1 rounded-md bg-[#1E293B] hover:bg-[#334155] hover:text-white border border-slate-700 transition-colors"
                  >
                    X
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#475569]">
          <p>
            Â© {currentYear} Dheeraj Aggarwal. All rights reserved.
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

