"use client";

import Counter from "@/components/ui/Counter";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function TrustBar() {
  const metrics = [
    {
      value: 15,
      suffix: "+",
      label: "Years of Entrepreneurial & Digital Experience",
    },
    {
      value: 3700,
      suffix: "+",
      label: "Websites & Digital Ecosystems Delivered",
    },
    {
      value: 100,
      suffix: "+",
      label: "Brands & Corporate Clients Consulted",
    },
    {
      value: 50,
      suffix: "+",
      label: "Keynotes & Business Workshops Delivered",
    },
  ];

  return (
    <section id="credibility-bar" className="py-10 sm:py-14 bg-[#FFFFFF] border-b border-slate-200 relative font-sans overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((m, idx) => (
            <ScrollReveal
              key={m.label}
              delay={idx * 0.06}
              distance={20}
              className="h-full"
            >
              <div className="h-full p-6 sm:p-7 md:p-8 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-slate-300 hover:shadow-md transition-all duration-200 flex flex-col justify-center">
                <div className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0F172A] tracking-tight mb-2 leading-none">
                  <Counter value={m.value} suffix={m.suffix} duration={1600 + idx * 150} />
                </div>
                <p className="text-xs sm:text-sm font-medium text-slate-600 leading-snug">
                  {m.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}


