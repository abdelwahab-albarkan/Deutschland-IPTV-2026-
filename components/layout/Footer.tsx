import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Tv,
  ShieldCheck,
  Zap,
  Phone,
  Mail,
  CreditCard,
  Lock,
  Sparkles,
  Search,
  CheckCircle,
} from "lucide-react";
import { siteConfig } from "@/lib/site";
import { createWhatsAppLink } from "@/lib/utils";
import { getUiText } from "@/lib/ui-text";
import { getDictionary, SUPPORTED_LOCALES, DEFAULT_LOCALE, Locale } from "@/data/i18n";
import { getLocalizedFooterLinks } from "@/lib/navigation";
import FooterLanguageLinks from "./FooterLanguageLinks";

type FooterLink = { title: string; href: string };

/** Sends each keyword chip to the most relevant page instead of linking everything to /iptv-kaufen. */
const KEYWORD_ROUTES: [RegExp, string][] = [
  [/test|trial|probe|essai|prueba|prova|teste|proef|deneme|provë|تجربة/i, "iptv-test"],
  [/bundesliga|fu(ß|ss)ball|football|sport|dazn|sky|calcio|fútbol|futebol|voetbal|futbol|رياض|كرة/i, "iptv-bundesliga"],
  [/fire ?tv|firestick|amazon/i, "iptv-fire-tv"],
  [/samsung|tizen/i, "iptv-samsung"],
  [/m3u|xtream|playlist/i, "iptv-m3u"],
  [/kodi|vlc/i, "iptv-kodi"],
  [/reseller|panel|revend|rivendit/i, "iptv-reseller"],
  [/install|einricht|setup|anleitung|guide|configur/i, "iptv-installieren"],
  [/app|player|smarters|tivimate/i, "iptv-apps"],
  [/preis|price|prix|precio|prezzo|preço|prijs|cena|fiyat|çmim|günstig|cheap|abo|سعر/i, "preise"],
  [/anbieter|provider|fournisseur|proveedor|fornitore|fornecedor|aanbieder|dostawc|sağlayıcı|ofrues|مزود|vergleich|comparison/i, "iptv-anbieter"],
  [/sender|channel|chaîne|canales|canali|canais|zenders|kana|kanal|قنوات|liste/i, "iptv-deutschland"],
  [/funktioniert nicht|not working|ruckel|buffer|freeze|problem/i, "iptv-funktioniert-nicht"],
];

function keywordHref(tag: string, locale: string) {
  const hit = KEYWORD_ROUTES.find(([re]) => re.test(tag));
  return `/${locale}/${hit ? hit[1] : "iptv-kaufen"}`;
}

function FooterColumn({
  title,
  icon,
  links,
}: {
  title: string;
  icon: React.ReactNode;
  links: FooterLink[];
}) {
  return (
    <div className="space-y-4">
      <h3 className="text-white font-bold text-xs tracking-wider uppercase flex items-center gap-2">
        {icon}
        {title}
      </h3>
      <ul className="space-y-1">
        {links.map((link) => (
          <li key={`${link.href}-${link.title}`}>
            <Link
              href={link.href}
              className="inline-block py-1.5 text-sm text-slate-400 hover:text-primary-300 transition-colors"
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer({ locale = DEFAULT_LOCALE }: { locale?: string }) {
  const detectedLocale = (SUPPORTED_LOCALES.includes(locale as Locale) ? locale : DEFAULT_LOCALE) as Locale;

  const dict = getDictionary(detectedLocale);
  const ui = getUiText(detectedLocale);
  const footerLinks = getLocalizedFooterLinks(detectedLocale);

  const whatsappUrl = createWhatsAppLink(siteConfig.support.whatsapp, dict.whatsappGreeting);

  const legalLinks: FooterLink[] = [
    { title: dict.footer.imprint, href: `/${detectedLocale}/impressum` },
    { title: dict.footer.privacy, href: `/${detectedLocale}/datenschutz` },
    { title: dict.footer.terms, href: `/${detectedLocale}/agb` },
    { title: dict.footer.withdrawal, href: `/${detectedLocale}/widerruf` },
  ];

  return (
    <footer className="bg-[#050608] border-t border-purple-500/20 pt-14 sm:pt-16 pb-24 sm:pb-12 text-slate-400">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Main navigation grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-10 pb-12 border-b border-purple-500/15">
          {/* Brand & contact */}
          <div className="col-span-2 lg:col-span-1 space-y-4">
            <Link
              href={`/${detectedLocale}`}
              className="inline-flex items-center gap-2.5 rounded-xl"
              aria-label={siteConfig.name}
            >
              <Image
              src="/images/logo-iptvanbieter4k.png"
              alt="4KAnbieterIPTV.de"
              width={2172}
              height={724}
              sizes="(min-width: 640px) 180px, 150px"
              
              className="h-12 w-auto object-contain"
            />
              <span className="sr-only">#1 Premium 4K Provider</span>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed">{dict.footer.aboutText}</p>

            <ul className="space-y-1 text-sm">
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 py-1.5 text-primary-300 hover:text-primary-200 transition-colors font-semibold"
                >
                  <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span dir="ltr">WhatsApp: {siteConfig.support.whatsapp}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.support.email}`}
                  className="inline-flex items-center gap-2 py-1.5 text-slate-300 hover:text-white transition-colors break-all"
                >
                  <Mail className="w-4 h-4 text-mauve-400 shrink-0" aria-hidden="true" />
                  <span>{siteConfig.support.email}</span>
                </a>
              </li>
            </ul>
          </div>

          <FooterColumn
            title={dict.footer.col1Title}
            icon={<Sparkles className="w-3.5 h-3.5 text-primary-400 shrink-0" aria-hidden="true" />}
            links={footerLinks.col1}
          />
          <FooterColumn
            title={dict.footer.col2Title}
            icon={<Tv className="w-3.5 h-3.5 text-primary-400 shrink-0" aria-hidden="true" />}
            links={footerLinks.col2}
          />
          <FooterColumn
            title={dict.footer.col3Title}
            icon={<Zap className="w-3.5 h-3.5 text-primary-400 shrink-0" aria-hidden="true" />}
            links={footerLinks.col3}
          />
          <FooterColumn
            title={dict.footer.col4Title}
            icon={<ShieldCheck className="w-3.5 h-3.5 text-primary-400 shrink-0" aria-hidden="true" />}
            links={footerLinks.col4}
          />
        </div>

        {/* Localized SEO keyword cloud (content preserved) */}
        <div className="py-8 border-b border-purple-500/15">
          <h3 className="flex items-center gap-2 text-xs font-bold text-white mb-4 uppercase tracking-wider">
            <Search className="w-3.5 h-3.5 text-primary-400 shrink-0" aria-hidden="true" />
            {dict.footer.seoKeywordsTitle}
          </h3>
          <ul className="flex flex-wrap gap-2">
            {dict.seoKeywords.map((tag, idx) => (
              <li key={idx}>
                <Link
                  href={keywordHref(tag, detectedLocale)}
                  className="inline-block px-3 py-1.5 rounded-xl bg-[#080910] border border-purple-500/15 hover:border-primary-500/50 text-xs text-slate-300 hover:text-primary-300 transition-colors"
                >
                  {tag}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Trust badges & payment note */}
        <div className="py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-purple-500/15 text-xs">
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-slate-300 font-semibold">
            <li className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-primary-400 shrink-0" aria-hidden="true" />
              <span>{dict.footer.trust1}</span>
            </li>
            <li className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-primary-400 shrink-0" aria-hidden="true" />
              <span>{dict.footer.trust2}</span>
            </li>
            <li className="flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-primary-400 shrink-0" aria-hidden="true" />
              <span>{dict.footer.trust3}</span>
            </li>
          </ul>
          <p className="flex items-start gap-2 text-slate-400 md:max-w-md">
            <CreditCard className="w-4 h-4 text-primary-400 shrink-0 mt-0.5" aria-hidden="true" />
            <span>{dict.footer.paymentNote}</span>
          </p>
        </div>

        {/* Bottom: legal, copyright, language */}
        <div className="pt-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 text-sm text-slate-400">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
            <p className="text-xs sm:text-sm">
              © {new Date().getFullYear()} {siteConfig.legalName}. {dict.footer.rightsReserved}
            </p>
            <FooterLanguageLinks currentLocale={detectedLocale} label={ui.selectLanguage} />
          </div>
          <nav aria-label={`${dict.footer.imprint} · ${dict.footer.privacy}`} className="flex flex-wrap items-center gap-x-5 gap-y-1">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-1.5 text-slate-300 hover:text-white transition-colors"
              >
                {link.title}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
