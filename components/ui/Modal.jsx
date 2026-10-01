"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Modal({ isOpen, onClose, title, children, maxWidth = "max-w-4xl" }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title || "Dialog Window"}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#004671]/85 backdrop-blur-md transition-opacity animate-in fade-in duration-300"
      />

      {/* Dialog Content */}
      <div
        ref={modalRef}
        className={cn(
          "relative w-full z-10 bg-[#151D30] border border-white/12 rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300",
          maxWidth
        )}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/08 bg-[#0F1626]/60">
          {title ? (
            <h3 className="font-editorial text-xl font-medium text-[#F5F3EE]">{title}</h3>
          ) : (
            <span />
          )}
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-1.5 rounded-full text-[#A9B0BE] hover:text-[#F5F3EE] hover:bg-white/08 transition-colors"
          >
            <X className="w-5 h-5" strokeWidth={1.75} />
          </button>
        </div>

        <div className="p-6 md:p-8 max-h-[85vh] overflow-y-auto no-scrollbar">{children}</div>
      </div>
    </div>
  );
}

