"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe } from "lucide-react";
import { SUPPORTED_LOCALES, LOCALES_INFO } from "@/data/i18n/types";
import { getLocalizedUrl } from "@/data/i18n/locales";
import FlagIcon from "@/components/ui/FlagIcon";

/**
 * Real <a href> links to the same page in every language.
 * Crawlers follow links, not buttons/JS: this lets Google discover and
 * connect all language versions (in addition to hreflang + sitemap).
 */
export default function FooterLanguageLinks({ currentLocale, label }: { currentLocale: string; label: string }) {
  const pathname = usePathname() || `/${currentLocale}`;

  return (
    <nav aria-label={label} className="flex flex-wrap items-center gap-2">
      <Globe className="w-4 h-4 text-slate-400 shrink-0" aria-hidden="true" />
      <ul className="flex flex-wrap items-center gap-1.5">
        {SUPPORTED_LOCALES.map((code) => {
          const info = LOCALES_INFO[code];
          const active = code === currentLocale;
          return (
            <li key={code}>
              <Link
                href={getLocalizedUrl(pathname, code)}
                hrefLang={code}
                lang={code}
                aria-current={active ? "true" : undefined}
                className={`inline-flex items-center gap-1.5 px-2.5 min-h-[36px] rounded-lg text-xs border transition-colors ${
                  active
                    ? "bg-primary-500/20 text-white border-primary-500/50 font-bold"
                    : "bg-[#080910] text-slate-300 border-purple-500/15 hover:text-white hover:border-purple-500/40"
                }`}
              >
                <FlagIcon code={code} className="w-5 h-3.5" />
                <span>{info.nativeName}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
