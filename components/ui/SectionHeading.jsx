import { cn } from "@/lib/utils";

export default function SectionHeading({
  number,
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className = "",
}) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "mb-12 md:mb-16 font-sans",
        isCenter ? "text-center max-w-3xl mx-auto" : "max-w-3xl",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center gap-2.5 mb-3.5",
          isCenter && "justify-center"
        )}
      >
        {number && (
          <span
            className={cn(
              "text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full tracking-wider border",
              light
                ? "text-[#005C96] border-[#005C96]/20 bg-[#005C96]/05"
                : "text-[#C2E8FF] border-[#C2E8FF]/30 bg-[#C2E8FF]/10"
            )}
          >
            {number}
          </span>
        )}

        {eyebrow && (
          <span
            className={cn(
              "text-xs uppercase font-semibold tracking-[0.2em]",
              light ? "text-[#005C96]" : "text-[#C2E8FF]"
            )}
          >
            {eyebrow}
          </span>
        )}
      </div>

      <h2
        className={cn(
          "text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.18] tracking-tight",
          light ? "text-[#0A3A56]" : "text-white"
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg leading-relaxed font-normal",
            light ? "text-[#4E7A96]" : "text-[#7298AF]"
          )}
        >
          {description}
        </p>
      )}

      {/* Modern Accent Bar */}
      <div
        className={cn(
          "mt-6 w-16 h-[3px] rounded-full",
          light
            ? "bg-gradient-to-r from-[#005C96] to-[#C2E8FF]"
            : "bg-gradient-to-r from-[#C2E8FF] to-[#005C96]",
          isCenter && "mx-auto"
        )}
      />
    </div>
  );
}

