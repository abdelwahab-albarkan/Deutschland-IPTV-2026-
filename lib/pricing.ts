import { ClientPlan, ResellerPlan } from "@/types/pricing";
import { clientPlans, resellerPlans } from "@/data/client-plans";
import { siteConfig } from "./site";
import { createWhatsAppLink } from "./utils";

export function getClientPlanById(id: string): ClientPlan | undefined {
  return clientPlans.find((p) => p.id === id);
}

export function getResellerPlanById(id: string): ResellerPlan | undefined {
  return resellerPlans.find((p) => p.id === id);
}

export function generatePlanCheckoutUrl(plan: ClientPlan): string {
  const message = `Hallo! Ich möchte das ${plan.title} (${plan.duration}) für ${plan.price.toFixed(2)}€ bestellen. Bitte senden Sie mir die Zahlungsdetails.`;
  return createWhatsAppLink(siteConfig.support.whatsapp, message);
}

export function generateResellerCheckoutUrl(plan: ResellerPlan): string {
  const message = `Hallo! Ich interessiere mich für das Reseller Paket: ${plan.title} (${plan.credits} Credits für ${plan.price}€). Bitte senden Sie mir die Panel-Zugangsdaten und Zahlungsoptionen.`;
  return createWhatsAppLink(siteConfig.support.whatsapp, message);
}
