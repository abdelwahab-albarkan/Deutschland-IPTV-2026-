"use client";

import React, { useState } from "react";
import {
  Check,
  Zap,
  ShieldCheck,
  Tag,
  ArrowRight,
  Lock,
  Clock,
} from "lucide-react";
import { createWhatsAppLink, stripLeadingSymbols } from "@/lib/utils";
import { siteConfig } from "@/lib/site";
import { getUiText } from "@/lib/ui-text";
import type { Dictionary } from "@/data/i18n/types";
import { ButtonLink } from "@/components/ui/Button";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import PlanTypeSwitch from "@/components/pricing/PlanTypeSwitch";

export interface BuyHubDict {
  whatsappGreeting: string;
  pricing: Dictionary["pricing"];
  nav: Pick<Dictionary["nav"], "popularBadge" | "testCta" | "instantActivation" | "moneyBackBadge" | "serverStatus">;
  footer: Pick<Dictionary["footer"], "trust1" | "trust3" | "paymentNote">;
}

export default function CommercialBuyHubClient({ locale, dict }: { locale: string; dict: BuyHubDict }) {
  const ui = getUiText(locale);
  const plans = dict.pricing.plans;

  const [selectedPlanId, setSelectedPlanId] = useState(
    plans.find((p) => p.popular)?.id || plans[plans.length - 1]?.id
  );

  const activePlan = plans.find((p) => p.id === selectedPlanId) || plans[plans.length - 1];

  const whatsappCheckoutUrl = createWhatsAppLink(
    siteConfig.support.whatsapp,
    [
      dict.whatsappGreeting,
      "",
      `${ui.orderMessage}:`,
      `• ${activePlan.periodLabel} (${activePlan.duration})`,
      `• €${activePlan.price} ${ui.oneTimePayment} (€${activePlan.monthlyEquivalent} ${ui.perMonth})`,
      `• ${activePlan.connections}x`,
    ].join("\n")
  );

  return (
    <section id="kaufen-hub" className="py-16 sm:py-24 bg-[#06070a] relative overflow-hidden border-t border-purple-500/15">
      <div className="absolute -top-32 end-1/4 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-purple-600/15 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="badge mb-4">
            <Tag className="w-3.5 h-3.5 text-primary-400 shrink-0" aria-hidden="true" />
            {stripLeadingSymbols(dict.pricing.badge)}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white tracking-tight leading-tight">
            {dict.pricing.title}
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-300">{dict.pricing.subtitle}</p>
        </div>

        {/* Client vs. reseller plans */}
        <PlanTypeSwitch locale={locale} active="clients" />

        {/* Duration selector */}
        <div
          role="radiogroup"
          aria-label={dict.pricing.title}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto mb-8 sm:mb-10 pt-3"
        >
          {plans.map((plan) => {
            const isSelected = plan.id === selectedPlanId;
            return (
              <button
                key={plan.id}
                type="button"
                role="radio"
                aria-checked={isSelected}
                onClick={() => setSelectedPlanId(plan.id)}
                className={`relative p-3.5 sm:p-4 rounded-2xl border text-center transition-all duration-200 flex flex-col items-center justify-center min-h-[92px] ${
                  isSelected
                    ? "bg-[#171a2e] border-primary-500 text-white shadow-xl shadow-purple-500/25 ring-2 ring-primary-500/40"
                    : "bg-[#0e101a]/80 border-purple-500/15 text-slate-300 hover:text-white hover:border-purple-500/40"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-primary-500 to-indigo-500 text-white text-[11px] font-black uppercase tracking-wider shadow-sm whitespace-nowrap">
                    {stripLeadingSymbols(plan.badge || dict.nav.popularBadge)}
                  </span>
                )}
                <span className="text-xs sm:text-sm font-bold text-slate-100">{plan.duration}</span>
                <span className="text-lg sm:text-xl font-black text-white mt-0.5">€{plan.price}</span>
                <span className="text-xs text-primary-300 font-semibold">
                  €{plan.monthlyEquivalent} {ui.perMonth}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active plan */}
        <div className="max-w-4xl mx-auto card bg-gradient-to-b from-[#121424] to-[#0c0d18] p-5 sm:p-10 shadow-2xl" aria-live="polite">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 pb-6 sm:pb-8 border-b border-purple-500/15">
            <div className="text-center lg:text-start">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mb-3">
                <span className="px-3 py-1 text-xs font-black rounded-lg bg-primary-500/20 text-primary-300 border border-primary-500/30">
                  {activePlan.duration}
                </span>
                {activePlan.discountBadge && (
                  <span className="px-2.5 py-1 text-xs font-bold rounded-lg bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                    {activePlan.discountBadge}
                  </span>
                )}
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">{activePlan.periodLabel}</h3>
              <p className="mt-1.5 text-sm text-slate-300">{dict.pricing.guaranteeText}</p>
            </div>

            <div className="text-center lg:text-end shrink-0 card-inner p-4 sm:p-5">
              <div className="text-xs text-slate-300 uppercase tracking-wider font-semibold">
                {ui.oneTimePayment}
              </div>
              <div className="flex items-baseline justify-center lg:justify-end gap-2 mt-1">
                {activePlan.originalPrice > activePlan.price && (
                  <span className="text-sm text-slate-400 line-through">€{activePlan.originalPrice}</span>
                )}
                <span className="text-4xl font-black text-white">€{activePlan.price}</span>
              </div>
              <div className="text-sm text-primary-300 font-bold mt-1">
                €{activePlan.monthlyEquivalent} {ui.perMonth}
              </div>
            </div>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6 sm:my-8">
            {activePlan.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3 p-3 card-inner">
                <Check className="w-4 h-4 text-primary-400 shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-sm font-medium text-slate-200">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-5 pt-6 border-t border-purple-500/15">
            <ul className="flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-1.5 font-semibold">
                <Clock className="w-4 h-4 text-primary-400 shrink-0" aria-hidden="true" />
                <span>{dict.nav.instantActivation}</span>
              </li>
              <li className="flex items-center gap-1.5 font-semibold">
                <ShieldCheck className="w-4 h-4 text-primary-400 shrink-0" aria-hidden="true" />
                <span>{dict.nav.moneyBackBadge}</span>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row items-stretch gap-3 lg:shrink-0">
              <ButtonLink href={`/${locale}/iptv-test`} variant="secondary">
                {dict.nav.testCta}
              </ButtonLink>
              <ButtonLink href={whatsappCheckoutUrl} variant="primary" size="lg">
                <span>{activePlan.ctaText}</span>
                <ArrowRight className="w-4 h-4 rtl:-scale-x-100" aria-hidden="true" />
              </ButtonLink>
            </div>
          </div>
        </div>

        {/* WhatsApp order: opens chat with the selected plan prefilled */}
        <div className="max-w-4xl mx-auto mt-5 sm:mt-6">
          <a
            href={whatsappCheckoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-lg w-full !bg-[#25D366] !text-black hover:!bg-[#1ebe5b] shadow-lg shadow-[#25D366]/25"
          >
            <WhatsAppIcon className="w-6 h-6" />
            <span>
              {ui.orderWhatsapp} · {activePlan.duration} · €{activePlan.price}
            </span>
          </a>
        </div>

        {/* Trust strip */}
        <ul className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
          {[
            { icon: ShieldCheck, title: dict.footer.trust1, text: dict.pricing.guaranteeText },
            { icon: Lock, title: dict.footer.trust3, text: dict.footer.paymentNote },
            { icon: Zap, title: dict.nav.instantActivation, text: dict.nav.serverStatus },
          ].map(({ icon: Icon, title, text }) => (
            <li key={title} className="card p-5 sm:p-6 !rounded-2xl">
              <Icon className="w-7 h-7 text-primary-400 mx-auto mb-2" aria-hidden="true" />
              <h3 className="font-bold text-white text-sm">{title}</h3>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
