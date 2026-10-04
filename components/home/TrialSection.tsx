import React from "react";
import TrialForm from "@/components/trial/TrialForm";
import { Sparkles, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import { trialData } from "@/data/trial";
import { getDictionary, DEFAULT_LOCALE } from "@/data/i18n";

export default function TrialSection({ locale = DEFAULT_LOCALE }: { locale?: string }) {
  const dict = getDictionary(locale);
  const isDe = locale === "de";

  // German keeps its existing long-form copy; other languages use the localized dictionary.
  const badge = isDe ? trialData.badge : dict.trial.badge;
  const subtitle = isDe ? trialData.subtitle : dict.trial.subtitle;
  const features = isDe
    ? trialData.features
    : [dict.hero.stat1Label, dict.hero.stat2Label, dict.trial.noCardRequired, dict.trial.instantDelivery];

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden bg-[#06070a] border-t border-purple-500/15" id="trial-section">
      <div className="absolute top-1/3 start-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          {/* Left: what you get */}
          <div className="lg:col-span-6 space-y-6">
            <div className="badge">
              <Sparkles className="w-3.5 h-3.5 text-primary-400 shrink-0" aria-hidden="true" />
              <span>{badge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white tracking-tight leading-tight">
              {isDe ? (
                <>
                  Testen Sie 24.000+ Sender für 24 Stunden{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-mauve-400 to-indigo-300">
                    völlig kostenlos
                  </span>
                </>
              ) : (
                dict.trial.title
              )}
            </h2>

            <p className="text-slate-300 text-base md:text-lg leading-relaxed">{subtitle}</p>

            <ul className="space-y-3.5 pt-2">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-200">
                  <span className="w-6 h-6 rounded-full bg-primary-500/20 text-primary-300 flex items-center justify-center shrink-0 border border-primary-500/30">
                    <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <ul className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary-400 shrink-0" aria-hidden="true" />
                <span>{isDe ? "Keine automatische Verlängerung" : dict.trial.noCardRequired}</span>
              </li>
              <li className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary-400 shrink-0" aria-hidden="true" />
                <span>{isDe ? "Freischaltung in 5 Minuten" : dict.trial.instantDelivery}</span>
              </li>
            </ul>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-6">
            <TrialForm
              locale={locale}
              text={{ ...dict.trial, support247: dict.nav.support247, whatsappGreeting: dict.whatsappGreeting }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
