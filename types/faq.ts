export interface FAQItemType {
  id: string;
  question: string;
  answer: string;
  category?: string;
  isPopular?: boolean;
}

export interface FAQCategory {
  id: string;
  title: string;
  description?: string;
  items: FAQItemType[];
}
