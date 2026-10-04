"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Home, Sparkles, SearchX } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { getUiText } from "@/lib/ui-text";
import { SUPPORTED_LOCALES, DEFAULT_LOCALE, Locale } from "@/data/i18n/types";

// Same labels as dictionary `nav.testCta` (kept local so the 404 does not ship every dictionary)
const TEST_CTA: Record<Locale, string> = {
  de: "24h Test", en: "24h Trial", fr: "Essai 24h", es: "Prueba 24h", it: "Prova 24h", pt: "Teste 24h",
  nl: "24u proef", pl: "Test 24h", tr: "24s Deneme", sq: "Provë 24h", ar: "تجربة 24 ساعة",
};

export default function LocalizedNotFound() {
  const pathname = usePathname() || "";
  const first = pathname.split("/").filter(Boolean)[0];
  const locale = (SUPPORTED_LOCALES.includes(first as Locale) ? first : DEFAULT_LOCALE) as Locale;
  const ui = getUiText(locale);

  return (
    <div className="min-h-[60vh] flex items-center justify-center py-20 px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-primary-500/15 text-primary-400 flex items-center justify-center mx-auto border border-purple-500/30 shadow-glow-sm">
          <SearchX className="w-10 h-10" aria-hidden="true" />
        </div>

        <div className="space-y-2">
          <p className="text-6xl font-black font-display text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-mauve-400 to-indigo-400">
            404
          </p>
          <h1 className="text-2xl font-bold text-white">{ui.notFoundTitle}</h1>
          <p className="text-sm text-slate-300">{ui.notFoundText}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <ButtonLink href={`/${locale}`} variant="primary" size="lg">
            <Home className="w-4 h-4" aria-hidden="true" />
            <span>{ui.goHome}</span>
          </ButtonLink>
          <ButtonLink href={`/${locale}/iptv-test`} variant="secondary" size="lg">
            <Sparkles className="w-4 h-4 text-primary-400" aria-hidden="true" />
            <span>{TEST_CTA[locale]}</span>
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
