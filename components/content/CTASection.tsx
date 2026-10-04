import React from "react";
import { Sparkles, ShieldCheck, ArrowRight, MessageCircle, Zap } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { createWhatsAppLink, stripLeadingSymbols } from "@/lib/utils";
import { getDictionary, DEFAULT_LOCALE } from "@/data/i18n";
import { ButtonLink } from "@/components/ui/Button";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryBtnText?: string;
  primaryBtnHref?: string;
  secondaryBtnText?: string;
  secondaryBtnHref?: string;
  locale?: string;
}

export default function CTASection({
  title = "Bereit für das beste IPTV-Erlebnis Ihres Lebens?",
  subtitle = "Starten Sie jetzt Ihren 24h Gratis-Test oder wählen Sie Ihr Wunsch-Abo. Aktivierung in nur 5 Minuten!",
  primaryBtnText = "Kostenlosen 24h Test starten",
  primaryBtnHref,
  secondaryBtnText = "Alle Preise ansehen",
  secondaryBtnHref,
  locale = DEFAULT_LOCALE,
}: CTASectionProps) {
  const dict = getDictionary(locale);
  const isDe = locale === "de";

  const primaryHref = primaryBtnHref ?? `/${locale}/iptv-test`;
  const secondaryHref = secondaryBtnHref ?? `/${locale}/preise`;

  const whatsappUrl = createWhatsAppLink(siteConfig.support.whatsapp, dict.whatsappGreeting);

  const trust = [
    { icon: ShieldCheck, text: dict.footer.trust1 },
    { icon: Sparkles, text: isDe ? "Keine automatische Verlängerung" : dict.trial.noCardRequired },
    { icon: Zap, text: isDe ? "Sofortige Aktivierung in 5 Min." : dict.trial.instantDelivery },
  ];

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden bg-[#06070a] border-t border-purple-500/15">
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className="card relative bg-gradient-to-br from-[#121424] via-purple-950/40 to-[#0e101a] p-6 sm:p-12 md:p-16 text-center shadow-2xl overflow-hidden">
          <div className="absolute -top-24 -start-24 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -end-24 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative">
            <div className="badge mb-6">
              <Sparkles className="w-3.5 h-3.5 text-primary-400 shrink-0" aria-hidden="true" />
              <span>{isDe ? "Jetzt 100% risikofrei einsteigen" : stripLeadingSymbols(dict.pricing.badge)}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white tracking-tight max-w-3xl mx-auto leading-tight">
              {title}
            </h2>

            <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto mt-4 mb-8 leading-relaxed">
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
              <ButtonLink href={primaryHref} variant="primary" size="lg">
                <span>{primaryBtnText}</span>
                <ArrowRight className="w-4 h-4 rtl:-scale-x-100" aria-hidden="true" />
              </ButtonLink>

              <ButtonLink href={secondaryHref} variant="secondary" size="lg">
                {secondaryBtnText}
              </ButtonLink>

              <ButtonLink href={whatsappUrl} variant="whatsapp" size="lg">
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                <span>WhatsApp</span>
              </ButtonLink>
            </div>

            <ul className="mt-8 pt-6 border-t border-purple-500/15 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-300">
              {trust.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-1.5">
                  <Icon className="w-4 h-4 text-primary-400 shrink-0" aria-hidden="true" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
