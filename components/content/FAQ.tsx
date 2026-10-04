"use client";

import React, { useState } from "react";
import { HelpCircle, Search } from "lucide-react";
import { FAQItemType, FAQCategory } from "@/types/faq";
import { siteConfig } from "@/lib/site";
import { createWhatsAppLink, stripLeadingSymbols } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/Button";
import FAQItem from "./FAQItem";
import FAQSchema from "@/components/seo/FAQSchema";

interface FAQProps {
  title?: string;
  subtitle?: string;
  badge?: string;
  items: FAQItemType[];
  categories?: FAQCategory[];
  showSearch?: boolean;
}

export default function FAQ({
  title = "Häufig gestellte Fragen (FAQ)",
  subtitle = "Finden Sie schnelle Antworten auf die wichtigsten Fragen rund um unseren IPTV Service.",
  badge = "Support & Hilfe",
  items,
  categories,
  showSearch = true,
}: FAQProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredItems = items.filter((faq) => {
    const q = searchQuery.toLowerCase();
    const matchesSearch = faq.question.toLowerCase().includes(q) || faq.answer.toLowerCase().includes(q);
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const whatsappUrl = createWhatsAppLink(siteConfig.support.whatsapp, "");

  const tabClass = (active: boolean) =>
    `px-4 min-h-[44px] rounded-xl text-sm font-semibold whitespace-nowrap transition-colors border ${
      active
        ? "bg-gradient-to-r from-primary-600 to-indigo-600 text-white border-transparent shadow-glow-sm"
        : "bg-[#0e101a] text-slate-300 hover:text-white border-purple-500/15"
    }`;

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden bg-[#06070a] border-t border-purple-500/15" id="faq">
      <FAQSchema faqs={items} />

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-center space-y-4 mb-10 sm:mb-12">
          <div className="badge">
            <HelpCircle className="w-3.5 h-3.5 text-primary-400 shrink-0" aria-hidden="true" />
            <span>{stripLeadingSymbols(badge)}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white tracking-tight">
            {title}
          </h2>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto">{subtitle}</p>
        </div>

        {showSearch && (
          <div className="mb-8 space-y-4">
            <div className="relative">
              <Search className="w-5 h-5 absolute start-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" aria-hidden="true" />
              <input
                type="search"
                aria-label="Search"
                placeholder="Firestick, PayPal, 4K, VPN…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="field-input ps-12 rounded-2xl"
              />
            </div>

            {categories && categories.length > 0 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                <button type="button" onClick={() => setActiveCategory("all")} aria-pressed={activeCategory === "all"} className={tabClass(activeCategory === "all")}>
                  Alle Fragen ({items.length})
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCategory(cat.id)}
                    aria-pressed={activeCategory === cat.id}
                    className={tabClass(activeCategory === cat.id)}
                  >
                    {cat.title} ({cat.items.length})
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {filteredItems.length > 0 ? (
          <div className="space-y-3">
            {filteredItems.map((faq, index) => (
              <FAQItem key={faq.id} faq={faq} defaultOpen={index === 0} />
            ))}
          </div>
        ) : (
          <div className="text-center card-inner p-8 space-y-4" role="status">
            <p className="text-slate-300 text-sm">{`“${searchQuery}” – 0 results`}</p>
            <ButtonLink href={whatsappUrl} variant="whatsapp" size="sm">
              WhatsApp
            </ButtonLink>
          </div>
        )}
      </div>
    </section>
  );
}
