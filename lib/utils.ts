import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(amount: number, currency: string = "EUR"): string {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 2,
  }).format(amount);
}

/** Drops leading emoji/symbols from data strings so UI text stays icon-free. */
export function stripLeadingSymbols(text: string): string {
  return text
    .replace(/^(?:[←-⯿️‍\s]|[\uD83C-\uD83E][\uDC00-\uDFFF])+/, "")
    .trim();
}

export function createWhatsAppLink(phone: string, text: string): string {
  const cleanPhone = phone.replace(/[^0-9]/g, "");
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
}

export function createTelegramLink(username: string, text?: string): string {
  const cleanUsername = username.replace("@", "");
  return text
    ? `https://t.me/${cleanUsername}?text=${encodeURIComponent(text)}`
    : `https://t.me/${cleanUsername}`;
}
