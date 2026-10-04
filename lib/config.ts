export const appConfig = {
  isProduction: process.env.NODE_ENV === "production",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://deutschland-iptv.de",
  apiEndpoints: {
    trial: "/api/trial",
    checkout: "/api/checkout",
    contact: "/api/contact",
  },
  defaultCurrency: "EUR",
  supportedCurrencies: ["EUR", "CHF", "USD"],
  defaultLocale: "de-DE",
  trialDurationHours: 24,
  maxTrialPerEmail: 1,
};
