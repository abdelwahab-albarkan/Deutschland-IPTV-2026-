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
    slug: "impressum",
    title: dict.footer.imprint,
    description: `Rechtliche Angaben & Impressum für ${siteConfig.name}`,
    canonicalUrl: `/${lang}/impressum`,
  });
}

export default async function LocalizedImpressumPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = (SUPPORTED_LOCALES.includes(lang as Locale) ? lang : DEFAULT_LOCALE) as Locale;
  const dict = getDictionary(locale);

  return (
    <div className="space-y-8 pb-16">
      <Breadcrumbs items={[{ name: dict.footer.imprint, url: `/${locale}/impressum` }]} />

      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-[#0e101a] border border-purple-500/20 rounded-3xl p-6 sm:p-10 md:p-12 space-y-8 shadow-2xl">
          <h1 className="text-3xl sm:text-4xl font-display font-black text-white">
            {dict.footer.imprint}
          </h1>

          <div className="space-y-6 text-sm sm:text-base text-slate-300 leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-xl font-bold text-white">
                Legal Information & Contact:
              </h2>
              <p>
                <strong>{siteConfig.legalName}</strong>
                <br />
                Internet & Streaming Services Europe
                {siteConfig.legal.representative && (
                  <>
                    <br />
                    Represented by: {siteConfig.legal.representative}
                  </>
                )}
                {siteConfig.legal.address && (
                  <>
                    <br />
                    {siteConfig.legal.address}
                  </>
                )}
                {siteConfig.legal.vatId && (
                  <>
                    <br />
                    VAT ID: {siteConfig.legal.vatId}
                  </>
                )}
                <br />
                E-Mail: {siteConfig.support.email}
                <br />
                WhatsApp Support: {siteConfig.support.whatsapp}
                <br />
                Website: {siteConfig.url}
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-bold text-white">
                EU Online Dispute Resolution:
              </h2>
              <p>
                The European Commission provides a platform for online dispute resolution (ODR):{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-400 hover:underline"
                >
                  https://ec.europa.eu/consumers/odr
                </a>
                .
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-bold text-white">Disclaimer:</h2>
              <p>
                All brand names, trademarks and registered trademarks mentioned on this website are the property of their respective legal owners.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
