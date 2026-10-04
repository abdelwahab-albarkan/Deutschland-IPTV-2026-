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
    slug: "datenschutz",
    title: dict.footer.privacy,
    description: `Datenschutzerklärung & Privacy Policy für ${siteConfig.name}`,
    canonicalUrl: `/${lang}/datenschutz`,
  });
}

export default async function LocalizedDatenschutzPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = (SUPPORTED_LOCALES.includes(lang as Locale) ? lang : DEFAULT_LOCALE) as Locale;
  const dict = getDictionary(locale);

  return (
    <div className="space-y-8 pb-16">
      <Breadcrumbs items={[{ name: dict.footer.privacy, url: `/${locale}/datenschutz` }]} />

      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-[#0e101a] border border-purple-500/20 rounded-3xl p-6 sm:p-10 md:p-12 space-y-8 shadow-2xl">
          <h1 className="text-3xl sm:text-4xl font-display font-black text-white">
            {dict.footer.privacy}
          </h1>

          <div className="space-y-6 text-sm sm:text-base text-slate-300 leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-xl font-bold text-white">
                1. Privacy & Data Protection (DSGVO / GDPR)
              </h2>
              <p>
                We value your privacy and apply the highest security and encryption standards (256-Bit SSL). We do not log or store any user streaming activities or IP browsing histories.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-bold text-white">
                2. Data Collection & Processing
              </h2>
              <p>
                Personal information provided during checkout (e.g. Email, WhatsApp number) is strictly processed for service provisioning, credentials delivery, and technical support inquiries.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-bold text-white">
                3. Your Rights
              </h2>
              <p>
                Under EU General Data Protection Regulation (GDPR), you have the right to request deletion, correction, or export of your personal contact data at any time by contacting our support team.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
