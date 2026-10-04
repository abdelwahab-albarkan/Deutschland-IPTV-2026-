export type Locale =
  | "de"
  | "en"
  | "fr"
  | "es"
  | "it"
  | "pt"
  | "nl"
  | "pl"
  | "tr"
  | "sq"
  | "ar";

export const SUPPORTED_LOCALES: readonly Locale[] = [
  "de",
  "en",
  "fr",
  "es",
  "it",
  "pt",
  "nl",
  "pl",
  "tr",
  "sq",
  "ar",
] as const;

export const DEFAULT_LOCALE: Locale = "de";

export interface LocaleInfo {
  code: Locale;
  name: string;
  nativeName: string;
  flag: string;
  dir: "ltr" | "rtl";
  ogLocale: string;
  country: string;
}

export const LOCALES_INFO: Record<Locale, LocaleInfo> = {
  de: {
    code: "de",
    name: "Deutsch",
    nativeName: "Deutsch",
    flag: "🇩🇪",
    dir: "ltr",
    ogLocale: "de_DE",
    country: "Deutschland",
  },
  en: {
    code: "en",
    name: "Englisch",
    nativeName: "English",
    flag: "🇬🇧",
    dir: "ltr",
    ogLocale: "en_GB",
    country: "International",
  },
  fr: {
    code: "fr",
    name: "Französisch",
    nativeName: "Français",
    flag: "🇫🇷",
    dir: "ltr",
    ogLocale: "fr_FR",
    country: "France",
  },
  es: {
    code: "es",
    name: "Spanisch",
    nativeName: "Español",
    flag: "🇪🇸",
    dir: "ltr",
    ogLocale: "es_ES",
    country: "España",
  },
  it: {
    code: "it",
    name: "Italienisch",
    nativeName: "Italiano",
    flag: "🇮🇹",
    dir: "ltr",
    ogLocale: "it_IT",
    country: "Italia",
  },
  pt: {
    code: "pt",
    name: "Portugiesisch",
    nativeName: "Português",
    flag: "🇵🇹",
    dir: "ltr",
    ogLocale: "pt_PT",
    country: "Portugal",
  },
  nl: {
    code: "nl",
    name: "Niederländisch",
    nativeName: "Nederlands",
    flag: "🇳🇱",
    dir: "ltr",
    ogLocale: "nl_NL",
    country: "Nederland",
  },
  pl: {
    code: "pl",
    name: "Polnisch",
    nativeName: "Polski",
    flag: "🇵🇱",
    dir: "ltr",
    ogLocale: "pl_PL",
    country: "Polska",
  },
  tr: {
    code: "tr",
    name: "Türkisch",
    nativeName: "Türkçe",
    flag: "🇹🇷",
    dir: "ltr",
    ogLocale: "tr_TR",
    country: "Türkiye",
  },
  sq: {
    code: "sq",
    name: "Albanisch",
    nativeName: "Shqip",
    flag: "🇦🇱",
    dir: "ltr",
    ogLocale: "sq_AL",
    country: "Shqipëri",
  },
  ar: {
    code: "ar",
    name: "Arabisch",
    nativeName: "العربية",
    flag: "🇸🇦",
    dir: "rtl",
    ogLocale: "ar_SA",
    country: "العالم العربي",
  },
};

export interface LocalizedSeoPage {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  badge: string;
  keyBenefits: string[];
  sections: {
    heading: string;
    content: string[];
  }[];
  keywords: string[];
}

export interface LocalizedPricingPlan {
  id: string;
  duration: string;
  periodLabel: string;
  price: number;
  originalPrice: number;
  monthlyEquivalent: number;
  popular?: boolean;
  bestValue?: boolean;
  badge?: string;
  discountBadge?: string;
  connections: number;
  features: string[];
  ctaText: string;
}

export interface LocalizedReview {
  name: string;
  city: string;
  rating: number;
  review: string;
  device: string;
  date: string;
  verified: string;
  avatar: string;
}

export interface LocalizedFaqItem {
  question: string;
  answer: string;
}

export interface Dictionary {
  locale: Locale;
  siteName: string;
  siteTitle: string;
  siteDescription: string;
  whatsappGreeting: string;

  nav: {
    home: string;
    buy: string;
    test: string;
    pricing: string;
    channels: string;
    apps: string;
    sports: string;
    reseller: string;
    devices: string;
    help: string;
    freeTestBadge: string;
    liveBadge: string;
    popularBadge: string;
    buyCta: string;
    testCta: string;
    support247: string;
    serverStatus: string;
    moneyBackBadge: string;
    instantActivation: string;
  };

  hero: {
    badge: string;
    titleLine1: string;
    titleHighlight: string;
    titleLine2: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stat1Value: string;
    stat1Label: string;
    stat2Value: string;
    stat2Label: string;
    stat3Value: string;
    stat3Label: string;
    stat4Value: string;
    stat4Label: string;
  };

  features: {
    badge: string;
    title: string;
    subtitle: string;
    items: {
      title: string;
      description: string;
      badge: string;
    }[];
  };

  vod: {
    badge: string;
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    allTab: string;
    moviesTab: string;
    seriesTab: string;
    rating: string;
    watchTrailer: string;
    playNow: string;
    instantAccessCta: string;
  };

  channels: {
    badge: string;
    title: string;
    subtitle: string;
    categories: {
      name: string;
      count: string;
      channels: string[];
      highlight: string;
    }[];
  };

  pricing: {
    badge: string;
    title: string;
    subtitle: string;
    toggle1Device: string;
    toggle2Device: string;
    toggleDiscount: string;
    guaranteeText: string;
    plans: LocalizedPricingPlan[];
  };

  comparison: {
    badge: string;
    title: string;
    subtitle: string;
    featureCol: string;
    ourBrandCol: string;
    othersCol: string;
    rows: {
      feature: string;
      us: string;
      others: string;
      isPositive: boolean;
    }[];
  };

  reviews: {
    badge: string;
    title: string;
    subtitle: string;
    score: string;
    totalReviews: string;
    items: LocalizedReview[];
  };

  faq: {
    badge: string;
    title: string;
    subtitle: string;
    items: LocalizedFaqItem[];
  };

  trial: {
    badge: string;
    title: string;
    subtitle: string;
    formName: string;
    formEmail: string;
    formWhatsapp: string;
    formDevice: string;
    formApp: string;
    formSubmit: string;
    formSubmitting: string;
    formSuccessTitle: string;
    formSuccessDesc: string;
    noCardRequired: string;
    instantDelivery: string;
  };

  reseller: {
    badge: string;
    title: string;
    subtitle: string;
    cta: string;
  };

  footer: {
    aboutTitle: string;
    aboutText: string;
    col1Title: string;
    col2Title: string;
    col3Title: string;
    col4Title: string;
    seoKeywordsTitle: string;
    rightsReserved: string;
    paymentNote: string;
    trust1: string;
    trust2: string;
    trust3: string;
    imprint: string;
    privacy: string;
    terms: string;
    withdrawal: string;
  };

  seoPages: Record<string, LocalizedSeoPage>;
  seoKeywords: string[];
}
