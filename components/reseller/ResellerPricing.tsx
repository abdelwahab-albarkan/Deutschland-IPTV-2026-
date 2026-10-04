import React from "react";
import { Store } from "lucide-react";
import { resellerPlans } from "@/data/reseller-plans";
import { getUiText } from "@/lib/ui-text";
import ResellerPricingCard from "@/components/pricing/ResellerPricingCard";
import PlanTypeSwitch from "@/components/pricing/PlanTypeSwitch";

export default function ResellerPricing({ locale = "de" }: { locale?: string }) {
  const ui = getUiText(locale);

  return (
    <section className="py-16 sm:py-24 relative scroll-mt-24 bg-[#06070a] border-t border-purple-500/15" id="reseller-plans">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <div className="badge">
            <Store className="w-3.5 h-3.5 text-primary-400 shrink-0" aria-hidden="true" />
            <span>{ui.resellerPlansBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white tracking-tight">
            {ui.resellerPlansTitle}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">{ui.resellerPlansSubtitle}</p>
        </div>

        <PlanTypeSwitch locale={locale} active="resellers" />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 pt-3">
          {resellerPlans.map((plan) => (
            <ResellerPricingCard key={plan.id} plan={plan} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  );
}
