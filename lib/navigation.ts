import { Locale, DEFAULT_LOCALE, getDictionary, isValidLocale } from "@/data/i18n";

export type NavBadgeTone = "free" | "live" | "default";

export interface NavLink {
  title: string;
  href: string;
  badge?: string;
  badgeTone?: NavBadgeTone;
  isExternal?: boolean;
}

export function getLocalizedHeaderNavLinks(locale: string = DEFAULT_LOCALE): NavLink[] {
  const dict = getDictionary(locale);
  const prefix = `/${locale}`;

  return [
    { title: dict.nav.home, href: `${prefix}` },
    { title: dict.vod.badge, href: `${prefix}#vod-mediathek`, badge: "4K", badgeTone: "default" },
    { title: dict.nav.buy, href: `${prefix}/iptv-kaufen` },
    { title: dict.nav.test, href: `${prefix}/iptv-test`, badge: dict.nav.freeTestBadge, badgeTone: "free" },
    { title: dict.nav.sports, href: `${prefix}/iptv-bundesliga`, badge: dict.nav.liveBadge, badgeTone: "live" },
    { title: dict.nav.pricing, href: `${prefix}/preise` },
    { title: dict.nav.apps, href: `${prefix}/iptv-apps` },
    { title: dict.nav.devices, href: `${prefix}/iptv-installieren` },
    { title: dict.nav.reseller, href: `${prefix}/iptv-reseller`, badge: "B2B", badgeTone: "default" },
  ];
}

export const headerNavLinks: NavLink[] = [
  { title: "Startseite", href: "/de" },
  { title: "VOD Mediathek", href: "/de#vod-mediathek", badge: "4K", badgeTone: "default" },
  { title: "IPTV Kaufen", href: "/de/iptv-kaufen" },
  { title: "24h Test", href: "/de/iptv-test", badge: "Kostenlos", badgeTone: "free" },
  { title: "Bundesliga & Sport", href: "/de/iptv-bundesliga", badge: "Live", badgeTone: "live" },
  { title: "Preise", href: "/de/preise" },
  { title: "Sender & Apps", href: "/de/iptv-apps" },
  { title: "Installation", href: "/de/iptv-installieren" },
  { title: "Anbieter Vergleich", href: "/de/iptv-anbieter" },
  { title: "Reseller", href: "/de/iptv-reseller", badge: "B2B", badgeTone: "default" },
];

/** Footer link labels that have no equivalent key in the page dictionaries. */
const footerLabels: Record<Locale, { providers: string; liveSport: string; notWorking: string }> = {
  de: { providers: "Anbieter Vergleich", liveSport: "Live-Sport & Fußball 4K", notWorking: "IPTV Funktioniert Nicht" },
  en: { providers: "Provider comparison", liveSport: "Live sports & football 4K", notWorking: "IPTV not working" },
  fr: { providers: "Comparatif des fournisseurs", liveSport: "Sport en direct & football 4K", notWorking: "IPTV ne fonctionne pas" },
  es: { providers: "Comparativa de proveedores", liveSport: "Deporte en vivo y fútbol 4K", notWorking: "IPTV no funciona" },
  it: { providers: "Confronto fornitori", liveSport: "Sport live e calcio 4K", notWorking: "IPTV non funziona" },
  pt: { providers: "Comparação de fornecedores", liveSport: "Desporto ao vivo e futebol 4K", notWorking: "IPTV não funciona" },
  nl: { providers: "Aanbiedersvergelijking", liveSport: "Live sport & voetbal 4K", notWorking: "IPTV werkt niet" },
  pl: { providers: "Porównanie dostawców", liveSport: "Sport na żywo i piłka nożna 4K", notWorking: "IPTV nie działa" },
  tr: { providers: "Sağlayıcı karşılaştırması", liveSport: "Canlı spor ve futbol 4K", notWorking: "IPTV çalışmıyor" },
  sq: { providers: "Krahasimi i ofruesve", liveSport: "Sport live dhe futboll 4K", notWorking: "IPTV nuk punon" },
  ar: { providers: "مقارنة المزودين", liveSport: "رياضة مباشرة وكرة قدم 4K", notWorking: "IPTV لا يعمل" },
};

export function getLocalizedFooterLinks(locale: string = DEFAULT_LOCALE) {
  const prefix = `/${locale}`;
  const dict = getDictionary(locale);
  const labels = footerLabels[isValidLocale(locale) ? locale : DEFAULT_LOCALE];
  const isDe = !isValidLocale(locale) || locale === "de";

  return {
    col1: [
      { title: dict.nav.buy, href: `${prefix}/iptv-kaufen` },
      { title: dict.nav.test, href: `${prefix}/iptv-test` },
      { title: isDe ? "Preise & Abos" : dict.nav.pricing, href: `${prefix}/preise` },
      { title: labels.providers, href: `${prefix}/iptv-anbieter` },
      { title: dict.nav.reseller, href: `${prefix}/iptv-reseller` },
    ],
    col2: [
      { title: labels.liveSport, href: `${prefix}/iptv-bundesliga` },
      { title: "Sky Sport & DAZN", href: `${prefix}/iptv-sport` },
      { title: dict.nav.channels, href: `${prefix}/iptv-deutschland` },
    ],
    col3: [
      { title: "Amazon Fire TV Stick", href: `${prefix}/iptv-fire-tv` },
      { title: "Samsung Smart TV", href: `${prefix}/iptv-samsung` },
      { title: "Android & Apple TV", href: `${prefix}/iptv-installieren` },
      { title: "Kodi PVR Simple Client", href: `${prefix}/iptv-kodi` },
      { title: "M3U Playlist & Xtream Codes", href: `${prefix}/iptv-m3u` },
    ],
    col4: [
      { title: "TiviMate IPTV Player", href: `${prefix}/iptv-apps` },
      { title: "IPTV Smarters Pro", href: `${prefix}/iptv-apps` },
      { title: labels.notWorking, href: `${prefix}/iptv-funktioniert-nicht` },
      { title: dict.footer.privacy, href: `${prefix}/datenschutz` },
      { title: dict.footer.imprint, href: `${prefix}/impressum` },
    ],
  };
}
