import React from "react";
import Image from "next/image";
import { troubleshootingGuideData } from "@/data/homepage-seo";
import { AlertTriangle, CheckCircle, Wrench, ArrowRight, ShieldAlert } from "lucide-react";
import Link from "next/link";

export default function TroubleshootingSection({ locale = "de" }: { locale?: string }) {
  return (
    <section className="py-16 sm:py-20 bg-[#06070a] relative overflow-hidden border-t border-purple-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Wrench className="w-3.5 h-3.5 text-amber-400" />
            Problemlöser & Stabilität
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {troubleshootingGuideData.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-300">
            {troubleshootingGuideData.subtitle}
          </p>
        </div>

        {/* Troubleshooting Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {troubleshootingGuideData.items.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-3xl bg-[#0e101a]/90 border border-purple-500/15 hover:border-purple-500/40 transition-all shadow-xl"
            >
              <h3 className="text-base sm:text-lg font-bold text-white mb-3 flex items-start gap-2.5">
                <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span>{item.issue}</span>
              </h3>

              <div className="mb-4 p-3 rounded-2xl bg-[#080910] border border-purple-500/10 text-xs text-slate-400">
                <strong className="text-slate-300">Häufige Ursache: </strong>
                {item.cause}
              </div>

              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                <CheckCircle className="w-4 h-4 text-primary-400 shrink-0 mt-1" />
                <div>
                  <strong className="text-primary-300">Lösung: </strong>
                  {item.solution}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Support Callout with Real Team Image */}
        <div className="mt-8 sm:mt-10 rounded-3xl bg-gradient-to-r from-purple-950/40 via-[#0e101a] to-[#0e101a] border border-purple-500/20 overflow-hidden flex flex-col md:flex-row items-center justify-between shadow-2xl">
          <div className="w-full md:w-1/3 aspect-[16/9] md:aspect-auto md:h-full relative overflow-hidden">
            <Image src="/images/iptv-support-team.jpg" alt="Deutscher IPTV Support Team" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover min-h-[160px]" />
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-transparent to-[#0e101a]" />
          </div>

          <div className="p-6 sm:p-7 flex-1 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-start space-y-1">
              <span className="text-[11px] px-2.5 py-0.5 rounded-md bg-primary-500/20 text-primary-300 font-bold border border-primary-500/30 uppercase">
                24/7 Deutscher Technik-Support
              </span>
              <h4 className="text-sm sm:text-base font-bold text-white">
                Sie haben weiterhin Fragen oder benötigen Hilfe bei der Einrichtung?
              </h4>
              <p className="text-xs text-slate-300">
                Unser Technik-Team richtet Ihren Zugang gerne gemeinsam mit Ihnen live per WhatsApp ein.
              </p>
            </div>
            <Link
              href={`/${locale}/iptv-funktioniert-nicht`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary-600 to-indigo-600 hover:from-primary-500 hover:to-indigo-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-md shrink-0"
            >
              Ratgeber & Hilfe
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
