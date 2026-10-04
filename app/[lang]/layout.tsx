import React from "react";
import type { Metadata } from "next";
import "../globals.css";
import { Inter, Outfit } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import OrganizationSchema from "@/components/seo/OrganizationSchema";
import ProductSchema from "@/components/seo/ProductSchema";
import WebSiteSchema from "@/components/seo/WebSiteSchema";
import { siteConfig } from "@/lib/site";
import { constructMetadata } from "@/lib/seo";
import { MessageCircle } from "lucide-react";
import { createWhatsAppLink } from "@/lib/utils";
import { getUiText } from "@/lib/ui-text";
import {
  SUPPORTED_LOCALES,
  DEFAULT_LOCALE,
  getDictionary,
  getLocaleInfo,
  Locale,
} from "@/data/i18n";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-inter",
});
const outfit = Outfit({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-outfit",
});

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
    title: dict.siteTitle,
    description: dict.siteDescription,
    keywords: dict.seoKeywords,
    canonicalUrl: `/${lang}`,
  });
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = (SUPPORTED_LOCALES.includes(lang as Locale) ? lang : DEFAULT_LOCALE) as Locale;
  const locInfo = getLocaleInfo(locale);
  const dict = getDictionary(locale);
  const ui = getUiText(locale);

  const whatsappUrl = createWhatsAppLink(
    siteConfig.support.whatsapp,
    dict.whatsappGreeting
  );

  return (
    <html lang={locInfo.code} dir={locInfo.dir} className={`dark ${inter.variable} ${outfit.variable}`}>
      <head>
        <OrganizationSchema />
        <WebSiteSchema />
        <ProductSchema />
      </head>
      <body className="bg-background text-slate-100 min-h-screen flex flex-col font-sans selection:bg-primary-500 selection:text-black">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:start-3 focus:z-[100] focus:px-4 focus:py-2.5 focus:rounded-xl focus:bg-primary-600 focus:text-white focus:font-bold focus:text-sm"
        >
          {ui.skip}
        </a>

        {/* Sticky Header Navbar */}
        <Navbar locale={locale} />

        {/* Main Content Area */}
        <main id="main-content" className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <Footer locale={locale} />

        {/* Floating WhatsApp Support Button */}
        <aside aria-label="WhatsApp">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-4 sm:bottom-6 end-4 sm:end-6 z-40 h-12 sm:h-14 min-w-[48px] sm:min-w-[56px] px-3.5 sm:px-4 rounded-full bg-[#25D366] text-black shadow-lg shadow-[#25D366]/30 hover:shadow-glow-md transition-all duration-300 flex items-center justify-center group"
            aria-label={`WhatsApp – ${dict.nav.support247}`}
          >
            <MessageCircle className="w-6 h-6 text-black shrink-0" aria-hidden="true" />
            <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-focus-visible:max-w-xs transition-all duration-300 ease-in-out font-bold text-xs ps-0 group-hover:ps-2 group-focus-visible:ps-2 text-black">
              WhatsApp 24/7
            </span>
          </a>
        </aside>
      </body>
    </html>
  );
}
