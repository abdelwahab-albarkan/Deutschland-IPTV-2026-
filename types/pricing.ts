export type BillingPeriod = "1-month" | "3-months" | "6-months" | "12-months" | "24-months";

export interface FeatureItem {
  text: string;
  included: boolean;
  highlight?: boolean;
}

export interface ClientPlan {
  id: string;
  title: string;
  duration: string;
  period: BillingPeriod;
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
  pricePerMonth: string;
  isPopular?: boolean;
  isBestValue?: boolean;
  features: string[];
  connections: number;
  badge?: string;
  checkoutUrl?: string;
  whatsappMessage: string;
}

export interface ResellerPlan {
  id: string;
  title: string;
  credits: number;
  price: number;
  pricePerCredit: string;
  isPopular?: boolean;
  badge?: string;
  features: string[];
  estimatedProfit: string;
  panelAccess: string;
  whatsappMessage: string;
}

export interface PaymentMethod {
  id: string;
  name: string;
  iconName: string;
  badge?: string;
  isInstant: boolean;
  description: string;
}
