import React from "react";
import { Check, ShieldCheck, TrendingUp } from "lucide-react";
import { ResellerPlan } from "@/types/pricing";
import { formatPrice, createWhatsAppLink, stripLeadingSymbols } from "@/lib/utils";
import { getUiText } from "@/lib/ui-text";
import { siteConfig } from "@/lib/site";
import { ButtonLink } from "@/components/ui/Button";

interface ResellerPricingCardProps {
  plan: ResellerPlan;
  locale?: string;
}

export default function ResellerPricingCard({ plan, locale = "de" }: ResellerPricingCardProps) {
  const ui = getUiText(locale);
  const isHighlight = plan.isPopular;
  const whatsappUrl = createWhatsAppLink(siteConfig.support.whatsapp, plan.whatsappMessage);

  return (
    <article
      className={`relative card p-6 flex flex-col justify-between transition-all duration-300 ${
        isHighlight
          ? "!border-primary-500 shadow-glow-md bg-gradient-to-b from-surface-elevated to-surface-card lg:-translate-y-2"
          : "hover:!border-purple-500/50"
      }`}
    >
      {plan.badge && (
        <span className="absolute -top-3.5 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 px-3.5 py-1 rounded-full text-[11px] font-black bg-gradient-to-r from-primary-500 to-indigo-500 text-white shadow-md uppercase tracking-wider whitespace-nowrap">
          {stripLeadingSymbols(plan.badge)}
        </span>
      )}

      <div>
        <div className="flex items-start justify-between gap-2 mb-4">
          <h3 className="text-xl font-bold text-white">{plan.title}</h3>
          <span className="shrink-0 text-xs px-2.5 py-1 rounded-lg bg-primary-500/15 text-primary-300 font-bold border border-primary-500/30">
            {plan.credits} {ui.credits}
          </span>
        </div>

        <div className="mb-6 pb-6 border-b border-purple-500/15">
          <div className="text-4xl font-display font-black text-white tracking-tight">
            {formatPrice(plan.price)}
          </div>
          <div className="mt-2 text-sm text-primary-300 font-bold">{plan.pricePerCredit}</div>
          <div className="mt-2 flex items-start gap-1.5 text-xs text-emerald-300 font-semibold">
            <TrendingUp className="w-3.5 h-3.5 shrink-0 mt-0.5" aria-hidden="true" />
            <span>{plan.estimatedProfit}</span>
          </div>
        </div>

        <ul className="space-y-3 mb-8 text-sm">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3 text-slate-200">
              <Check className="w-4 h-4 text-primary-400 shrink-0 mt-0.5" aria-hidden="true" />
              <span className="leading-snug">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-3 pt-4 border-t border-purple-500/15">
        <ButtonLink
          href={whatsappUrl}
          variant={isHighlight ? "primary" : "secondary"}
          className="w-full"
        >
          {ui.orderReseller}
        </ButtonLink>
        <p className="flex items-center justify-center gap-1.5 text-xs text-slate-300 text-center">
          <ShieldCheck className="w-3.5 h-3.5 text-primary-400 shrink-0" aria-hidden="true" />
          <span>{plan.panelAccess}</span>
        </p>
      </div>
    </article>
  );
}
