import Link from "next/link";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Page Not Found | Dheeraj Aggarwal",
};

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-28 pb-20 px-6 sm:px-8 text-center bg-[#004671]">
      <div className="max-w-xl mx-auto">
        <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#C6A15B] block mb-3 font-semibold">
          Error 404 â€¢ Resource Relocated
        </span>

        <h1 className="font-editorial text-5xl sm:text-6xl md:text-7xl font-medium text-[#F5F3EE] mb-4">
          Page Not Found
        </h1>

        <p className="text-base text-[#A9B0BE] leading-relaxed mb-8">
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

