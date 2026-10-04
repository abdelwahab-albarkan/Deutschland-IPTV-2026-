import React from "react";
import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { siteConfig } from "@/lib/site";
import {
  SUPPORTED_LOCALES,
  getDictionary,
  DEFAULT_LOCALE,
  Locale,
} from "@/data/i18n";

export async function generateStaticParams() {
  return SUPPORTED_LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = getDictionary(lang);

  return constructMetadata({
    locale: lang,
    slug: "widerruf",
    title: dict.footer.withdrawal,
    description: `Widerrufsbelehrung & Refund Policy für ${siteConfig.name}`,
    canonicalUrl: `/${lang}/widerruf`,
  });
}

export default async function LocalizedWiderrufPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = (SUPPORTED_LOCALES.includes(lang as Locale) ? lang : DEFAULT_LOCALE) as Locale;
  const dict = getDictionary(locale);

  return (
    <div className="space-y-8 pb-16">
      <Breadcrumbs items={[{ name: dict.footer.withdrawal, url: `/${locale}/widerruf` }]} />

      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-[#0e101a] border border-purple-500/20 rounded-3xl p-6 sm:p-10 md:p-12 space-y-8 shadow-2xl">
          <h1 className="text-3xl sm:text-4xl font-display font-black text-white">
            {dict.footer.withdrawal}
          </h1>

          <div className="space-y-6 text-sm sm:text-base text-slate-300 leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-xl font-bold text-white">Right of Withdrawal & 7-Day Guarantee</h2>
              <p>
                You have the right to withdraw from your purchase within 7 days without giving any reason. To exercise your right of withdrawal, simply notify our support team via WhatsApp ({siteConfig.support.whatsapp}) or Email ({siteConfig.support.email}).
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-bold text-white">Refund Processing</h2>
              <p>
                Refunds are processed within 24 to 48 hours using the original payment method used during checkout (PayPal, Card, Revolut, Crypto).
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
