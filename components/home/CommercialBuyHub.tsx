import React from "react";
import { getDictionary, DEFAULT_LOCALE } from "@/data/i18n";
import CommercialBuyHubClient from "./CommercialBuyHubClient";

export default function CommercialBuyHub({ locale = DEFAULT_LOCALE }: { locale?: string }) {
  const d = getDictionary(locale);
  return (
    <CommercialBuyHubClient
      locale={locale}
      dict={{
        whatsappGreeting: d.whatsappGreeting,
        pricing: d.pricing,
        nav: {
          popularBadge: d.nav.popularBadge,
          testCta: d.nav.testCta,
          instantActivation: d.nav.instantActivation,
          moneyBackBadge: d.nav.moneyBackBadge,
          serverStatus: d.nav.serverStatus,
        },
        footer: { trust1: d.footer.trust1, trust3: d.footer.trust3, paymentNote: d.footer.paymentNote },
      }}
    />
  );
}