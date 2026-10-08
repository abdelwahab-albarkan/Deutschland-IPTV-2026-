export const siteConfig = {
  name: "Deutschland IPTV",
  legalName: "IPTV Deutschland Premium Services",
  shortName: "IPTV DE",
  domain: "4kanbieteriptv.de",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://4kanbieteriptv.de",
  description:
    "Deutschlands führender IPTV Anbieter mit über 24.000 Live-Sendern, 120.000+ VOD Filmen & Serien in echtem 4K/FHD mit 99.9% Uptime & Anti-Freeze 9.3 Technologie.",
  support: {
    whatsapp: process.env.NEXT_PUBLIC_SUPPORT_WHATSAPP || "+212625218443",
    email: process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "support@streamb4.com",
    telegram: process.env.NEXT_PUBLIC_SUPPORT_TELEGRAM || "deutschland_iptv_support",
    hours: "24/7 Live Support via WhatsApp & E-Mail",
  },
  // Required for a German Impressum (§5 DDG). Fill via env; shown on /impressum only when set.
  legal: {
    address: process.env.NEXT_PUBLIC_LEGAL_ADDRESS || "",
    representative: process.env.NEXT_PUBLIC_LEGAL_REPRESENTATIVE || "",
    vatId: process.env.NEXT_PUBLIC_LEGAL_VAT_ID || "",
  },
  stats: {
    channelsCount: "24.000+",
    vodCount: "120.000+",
    uptime: "99.9%",
    activeCustomers: "48.500+",
    rating: "4.9/5",
    reviewCount: "3.420+",
  },
  badges: {
    moneyBack: "7 Tage Geld-zurück-Garantie",
    instantDelivery: "Sofortige Freischaltung in 5 Minuten",
    antiFreeze: "Anti-Freeze Server v9.3",
    noVpnNeeded: "Kein VPN erforderlich (100% kompatibel)",
  },
};
