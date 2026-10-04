import { FAQCategory, FAQItemType } from "@/types/faq";
import { defaultFaqs, faqCategories } from "@/data/faqs";

export function getAllFaqs(): FAQItemType[] {
  return defaultFaqs;
}

export function getPopularFaqs(): FAQItemType[] {
  return defaultFaqs.filter((f) => f.isPopular);
}

export function getFaqsByCategory(category: string): FAQItemType[] {
  return defaultFaqs.filter((f) => f.category === category);
}

export function getFaqCategories(): FAQCategory[] {
  return faqCategories;
}
