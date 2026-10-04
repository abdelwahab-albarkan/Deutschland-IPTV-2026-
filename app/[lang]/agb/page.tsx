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
    slug: "agb",
    title: dict.footer.terms,
    description: `Allgemeine Geschäftsbedingungen & Terms of Service für ${siteConfig.name}`,
    canonicalUrl: `/${lang}/agb`,
  });
}

export default async function LocalizedAgbPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = (SUPPORTED_LOCALES.includes(lang as Locale) ? lang : DEFAULT_LOCALE) as Locale;
  const dict = getDictionary(locale);

  return (
    <div className="space-y-8 pb-16">
      <Breadcrumbs items={[{ name: dict.footer.terms, url: `/${locale}/agb` }]} />

      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-[#0e101a] border border-purple-500/20 rounded-3xl p-6 sm:p-10 md:p-12 space-y-8 shadow-2xl">
          <h1 className="text-3xl sm:text-4xl font-display font-black text-white">
            {dict.footer.terms}
          </h1>

          <div className="space-y-6 text-sm sm:text-base text-slate-300 leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-xl font-bold text-white">1. Scope & Service Terms</h2>
              <p>
                These terms and conditions apply to all digital services and subscriptions provided by {siteConfig.name}. By purchasing or requesting a free trial, you agree to these service terms.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-bold text-white">2. Delivery & Activation</h2>
              <p>
                Digital IPTV credentials (M3U & Xtream Codes) are delivered instantly via Email and WhatsApp within 5 to 15 minutes of payment confirmation.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-bold text-white">3. 7-Day Money-Back Policy</h2>
              <p>
                We offer a full 7-day money-back guarantee on all subscriptions. If you encounter unresolved technical difficulties or are not satisfied, you can request a complete refund.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
