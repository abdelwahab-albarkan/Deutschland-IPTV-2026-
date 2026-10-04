import React from "react";
import FAQ from "@/components/content/FAQ";
import { getDictionary, DEFAULT_LOCALE } from "@/data/i18n";
import { defaultFaqs, faqCategories } from "@/data/faqs";
import { FAQItemType, FAQCategory } from "@/types/faq";

export default function HomeFAQ({ locale = DEFAULT_LOCALE }: { locale?: string }) {
  const dict = getDictionary(locale);

  let items: FAQItemType[];
  let categories: FAQCategory[] | undefined;

  if (locale === "de") {
    items = defaultFaqs;
    categories = faqCategories;
  } else {
    // Map dictionary items with default/fallback categories
    items = dict.faq.items.map((item, idx) => ({
      id: `faq-${idx}`,
      question: item.question,
      answer: item.answer,
      category: idx < 5 ? "general" : idx < 10 ? "content" : idx < 15 ? "technical" : idx < 20 ? "speed" : "billing",
    }));

    if (items.length > 8) {
      categories = [
        {
          id: "general",
          title: locale === "ar" ? "عام وقانوني" : locale === "fr" ? "Général & Légal" : "General & Legal",
          items: items.filter((f) => f.category === "general"),
        },
        {
          id: "content",
          title: locale === "ar" ? "الرياضة والقنوات" : locale === "fr" ? "Sports & Chaînes" : "Sports & Channels",
          items: items.filter((f) => f.category === "content"),
        },
        {
          id: "technical",
          title: locale === "ar" ? "الأجهزة والتطبيقات" : locale === "fr" ? "Appareils & Apps" : "Devices & Apps",
          items: items.filter((f) => f.category === "technical"),
        },
        {
          id: "speed",
          title: locale === "ar" ? "السرعة والجودة" : locale === "fr" ? "Vitesse & Stabilité" : "Speed & Stability",
          items: items.filter((f) => f.category === "speed"),
        },
        {
          id: "billing",
          title: locale === "ar" ? "الأسعار والدفع" : locale === "fr" ? "Paiement & Tarifs" : "Pricing & Guarantee",
          items: items.filter((f) => f.category === "billing"),
        },
      ];
    }
  }

  return (
    <FAQ
      title={dict.faq.title}
      subtitle={dict.faq.subtitle}
      badge={dict.faq.badge}
      items={items}
      categories={categories}
      showSearch={true}
    />
  );
}
