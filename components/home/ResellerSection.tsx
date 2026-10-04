import React from "react";
import { TrendingUp, ShieldCheck, ArrowRight, Zap, Layers, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { createWhatsAppLink } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/Button";

export default function ResellerSection({ locale = "de" }: { locale?: string }) {
  const whatsappUrl = createWhatsAppLink(
    siteConfig.support.whatsapp,
    "Hallo! Ich interessiere mich für das IPTV Reseller Panel und möchte Preise und Credits anfragen."
  );

  return (
    <section className="py-12 sm:py-16 relative overflow-hidden bg-[#06070a]">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="card bg-gradient-to-r from-[#121424] via-purple-950/40 to-[#0e101a] p-6 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 end-0 w-80 sm:w-96 h-80 sm:h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
            <div className="lg:col-span-8 space-y-4">
              <div className="badge">
                <TrendingUp className="w-3.5 h-3.5 text-primary-400 shrink-0" aria-hidden="true" />
                <span>B2B Partnerschaft & Reseller Panel</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white tracking-tight leading-tight">
                Möchten Sie als{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-mauve-400 to-indigo-300">
                  IPTV Reseller
                </span>{" "}
                durchstarten?
              </h2>

              <p className="text-slate-300 text-base md:text-lg max-w-2xl leading-relaxed">
                Starten Sie Ihr eigenes Streaming-Unternehmen mit unserem Xtream UI Reseller-Panel. Kaufen Sie Credits ab 1,50 € ein, verwalten Sie Kunden per Klick und erzielen Sie Margen von über 400%.
              </p>

              <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-slate-200">
                <li className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-primary-400 shrink-0" aria-hidden="true" />
                  <span>Credits verfallen nie</span>
                </li>
                <li className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-primary-400 shrink-0" aria-hidden="true" />
                  <span>Unbegrenzte Testlines</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-primary-400 shrink-0" aria-hidden="true" />
                  <span>Eigene DNS & Sub-Reseller</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <ButtonLink href={`/${locale}/iptv-reseller#reseller-plans`} variant="primary" size="lg" className="flex-1">
                <span>Credit-Preise vergleichen</span>
                <ArrowRight className="w-4 h-4 rtl:-scale-x-100" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink href={whatsappUrl} variant="whatsapp" size="lg" className="flex-1">
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                <span>Beratung per WhatsApp</span>
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
