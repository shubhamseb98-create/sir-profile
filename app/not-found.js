import Link from "next/link";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Page Not Found | Dheeraj Aggarwal",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center pt-28 pb-20 px-6 sm:px-8 text-center bg-[#000000] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_40%,rgba(207,255,4,0.08),rgba(0,0,0,0))] pointer-events-none" />
      <div className="max-w-xl mx-auto relative z-10">
        <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#CFFF04] block mb-3 font-semibold">
          Error 404 • Resource Relocated
        </span>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-4 tracking-tight">
          Page Not Found
        </h1>

        <p className="text-base text-slate-300 leading-relaxed mb-8">
          The requested strategic resource or document could not be located. It may have been
          archived or restructured.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href="/" variant="primary" size="md">
            Return to Homepage
          </Button>
          <Button href="/contact" variant="secondary" size="md">
            Contact Executive Desk
          </Button>
        </div>
      </div>
    </div>
  );
}
