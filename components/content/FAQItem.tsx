"use client";

import React, { useState, useId } from "react";
import { ChevronDown } from "lucide-react";
import { FAQItemType } from "@/types/faq";

interface FAQItemProps {
  faq: FAQItemType;
  defaultOpen?: boolean;
}

export default function FAQItem({ faq, defaultOpen = false }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const uid = useId();
  const panelId = `${uid}-panel`;
  const buttonId = `${uid}-button`;

  return (
    <div
      className={`rounded-2xl border transition-colors duration-200 overflow-hidden ${
        isOpen
          ? "bg-[#0e101a] border-purple-500/40 shadow-glow-sm"
          : "bg-[#0c0e18]/80 border-purple-500/10 hover:border-purple-500/25"
      }`}
    >
      <h3>
        <button
          id={buttonId}
          type="button"
          onClick={() => setIsOpen((o) => !o)}
          className="w-full min-h-[56px] py-4 sm:py-5 px-5 sm:px-6 text-start flex items-center justify-between gap-4 rounded-2xl"
          aria-expanded={isOpen}
          aria-controls={panelId}
        >
          <span className="font-semibold text-base md:text-lg text-white">{faq.question}</span>
          <span
            aria-hidden="true"
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 shrink-0 ${
              isOpen
                ? "bg-primary-500/20 text-primary-300 rotate-180 border border-primary-500/30"
                : "bg-white/5 text-slate-300"
            }`}
          >
            <ChevronDown className="w-4 h-4" />
          </span>
        </button>
      </h3>

      {/* Answer stays in the DOM (hidden) so the text is always crawlable. */}
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!isOpen}
        className="px-5 sm:px-6 pb-5 sm:pb-6 pt-3 text-slate-300 text-sm md:text-base leading-relaxed border-t border-purple-500/10 animate-fadeIn"
      >
        <p>{faq.answer}</p>
      </div>
    </div>
  );
}
