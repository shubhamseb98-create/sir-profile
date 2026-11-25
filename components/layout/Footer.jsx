import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { ArrowUpRight } from "lucide-react";
import FooterFloatingBackground from "@/components/ui/FooterFloatingBackground";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#000000] border-t border-white/10 pt-14 sm:pt-18 md:pt-20 pb-8 sm:pb-12 text-white font-sans overflow-hidden">
      {/* ── Floating Luminous Glass Rings, Circles & Ambient Glow ── */}
      <FooterFloatingBackground />

      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12 pb-12 sm:pb-16 border-b border-white/10">
          {/* Col 1 & 2: Brand Profile */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="inline-block focus:outline-none group mb-2"
              aria-label="Dheeraj Aggarwal"
            >
              <Image
                src="/cl-logo/dheeraj-gold-logo.png"
                alt="Dheeraj Aggarwal"
                width={240}
                height={82}
                unoptimized
                className="h-12 sm:h-14 md:h-16 w-auto object-contain drop-shadow-[0_4px_14px_rgba(212,175,55,0.22)] group-hover:opacity-90 transition-opacity"
              />
            </Link>
            <p className="text-xs uppercase tracking-[0.22em] text-gold-metallic font-mono font-semibold mt-1 mb-4">
              {siteConfig.designation}
            </p>
            <p className="text-sm leading-relaxed text-slate-200 max-w-sm">
              {siteConfig.positioningLine}
            </p>
          </div>

          {/* Col 3: Navigation (Single-Page Anchors) */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-mono font-bold text-gold-metallic mb-4">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link href="/#about-us" className="text-white hover:text-[#D4AF37] hover:translate-x-0.5 transition-all inline-block">
                  About Dheeraj
                </Link>
              </li>
              <li>
                <Link href="/#achieve-section" className="text-white hover:text-[#D4AF37] hover:translate-x-0.5 transition-all inline-block">
                  What I Achieve
                </Link>
              </li>
              <li>
                <Link href="/#core-expertise" className="text-white hover:text-[#D4AF37] hover:translate-x-0.5 transition-all inline-block">
                  Core Expertise
                </Link>
              </li>
              <li>
                <Link href="/#roles-ecosystems" className="text-white hover:text-[#D4AF37] hover:translate-x-0.5 transition-all inline-block">
                  Leadership Showcase
                </Link>
              </li>
              <li>
                <Link href="/#transformations" className="text-white hover:text-[#D4AF37] hover:translate-x-0.5 transition-all inline-block">
                  Transformation Stories
                </Link>
              </li>
              <li>
                <Link href="/#why-work-with-me" className="text-white hover:text-[#D4AF37] hover:translate-x-0.5 transition-all inline-block">
                  Engagement Philosophy
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="text-white hover:text-[#D4AF37] hover:translate-x-0.5 transition-all inline-block">
                  Client Endorsements
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Ventures & Ecosystems */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-mono font-bold text-gold-metallic mb-4">
              Ventures
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link href="/#roles-ecosystems" className="text-white hover:text-[#D4AF37] hover:translate-x-0.5 transition-all inline-block">
                  Web Tycoons
                </Link>
              </li>
              <li>
                <Link href="/#brand-ticker" className="text-white hover:text-[#D4AF37] hover:translate-x-0.5 transition-all inline-block">
                  Karma Ayurveda Advisory
                </Link>
              </li>
              <li>
                <Link href="/#brand-ticker" className="text-white hover:text-[#D4AF37] hover:translate-x-0.5 transition-all inline-block">
                  Happy Hospitality Club
                </Link>
              </li>
              <li>
                <Link href="/#roles-ecosystems" className="text-white hover:text-[#D4AF37] hover:translate-x-0.5 transition-all inline-block">
                  BNI Chapter Leadership
                </Link>
              </li>
              <li>
                <Link href="/#founder-conversations" className="text-white hover:text-[#D4AF37] hover:translate-x-0.5 transition-all inline-block">
                  Keynotes &amp; Summits
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Connect & Engage */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-mono font-bold text-gold-metallic mb-4">
              Direct Inquiries
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link
                  href="/contact?type=strategy-call"
                  className="hover:text-[#D4AF37] hover:translate-x-0.5 transition-all inline-block font-semibold text-white"
                >
                  Book a Strategy Call
                </Link>
              </li>
              <li>
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#D4AF37] hover:translate-x-0.5 transition-all inline-flex items-center gap-1.5"
                >
                  <span>WhatsApp Direct</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#25D366]" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="text-white hover:text-[#D4AF37] hover:translate-x-0.5 transition-all truncate block"
                >
                  {siteConfig.contactEmail}
                </a>
              </li>
              <li className="pt-2">
                <span className="text-[11px] uppercase tracking-wider text-gold-metallic font-mono font-bold block mb-2">
                  Social Channels
                </span>
                <div className="flex items-center gap-2.5">
                  <a
                    href={siteConfig.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-3 py-1.5 rounded-lg bg-black hover:bg-neutral-900 hover:text-[#D4AF37] text-white border border-neutral-800 transition-colors shadow-sm"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={siteConfig.socials.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-3 py-1.5 rounded-lg bg-black hover:bg-neutral-900 hover:text-[#D4AF37] text-white border border-neutral-800 transition-colors shadow-sm"
                  >
                    YouTube
                  </a>
                  <a
                    href={siteConfig.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-3 py-1.5 rounded-lg bg-black hover:bg-neutral-900 hover:text-[#D4AF37] text-white border border-neutral-800 transition-colors shadow-sm"
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
            <Link href="/#top" className="hover:text-white transition-colors">
              Back to Top
            </Link>
            <span className="text-slate-600">&bull;</span>
            <span>Executive Consulting &amp; Growth Advisory</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
