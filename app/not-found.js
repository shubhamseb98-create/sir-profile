import Button from "@/components/ui/Button";
import DarkSectionLining from "@/components/ui/DarkSectionLining";

export const metadata = {
  title: "Page Not Found | Dheeraj Aggarwal",
};

export default function NotFound() {
  return (
    <section className="min-h-[75vh] flex flex-col justify-center items-center py-[60px] px-4 sm:px-6 text-center bg-[#060D1A] relative overflow-hidden font-sans">
      <DarkSectionLining />

      <div className="max-w-xl mx-auto relative z-10">
        <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] block mb-3 font-semibold">
          Error 404 • Resource Unavailable
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
          Page Not Found
        </h1>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
          The requested strategic resource or page could not be located. Please return to the overview or contact our executive desk directly.
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
    </section>
  );
}
