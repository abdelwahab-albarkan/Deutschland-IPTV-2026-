import React from "react";
import Image from "next/image";
import {
  Zap,
  Tv,
  Film,
  ShieldCheck,
  Layers,
  Sparkles,
} from "lucide-react";
import { getDictionary, DEFAULT_LOCALE } from "@/data/i18n";

export default function Features({ locale = DEFAULT_LOCALE }: { locale?: string }) {
  const dict = getDictionary(locale);

  const icons = [
    <Zap key="1" className="w-6 h-6 text-primary-400" />,
    <Tv key="2" className="w-6 h-6 text-mauve-400" />,
    <Film key="3" className="w-6 h-6 text-indigo-400" />,
    <Layers key="4" className="w-6 h-6 text-purple-400" />,
    <Sparkles key="5" className="w-6 h-6 text-amber-400" />,
    <ShieldCheck key="6" className="w-6 h-6 text-emerald-400" />,
  ];

  const featureImages = [
    "/images/iptv-ohne-buffering-illustration.jpg",
    "/images/iptv-4k-qualitaet.jpg",
    "/images/iptv-entertainment-dashboard.jpg",
    "/images/iptv-vpn-schutz.jpg",
    "/images/iptv-multi-geraete.jpg",
    "/images/iptv-support-team.jpg",
  ];

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden bg-[#06070a]">
      {/* Background soft ambient glow */}
      <div className="absolute top-1/2 start-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-primary-400" />
            <span>{dict.features.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white tracking-tight">
            {dict.features.title}
          </h2>
          <p className="text-slate-400 text-sm sm:text-lg">
            {dict.features.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dict.features.items.map((item, idx) => {
            return (
              <div
                key={idx}
                className="rounded-3xl bg-[#0e101a]/90 border border-purple-500/15 hover:border-purple-500/45 transition-all duration-300 group hover:-translate-y-1 hover:shadow-glow-sm overflow-hidden flex flex-col justify-between"
              >
                {/* Feature Header Image */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
                  <Image src={featureImages[idx] || "/images/iptv-server-infrastruktur.jpg"} alt={item.title} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-90" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e101a] via-transparent to-black/20" />
                  <div className="absolute bottom-3 start-4 w-12 h-12 rounded-2xl bg-[#171a2e]/90 flex items-center justify-center border border-purple-500/30 shadow-lg">
                    {icons[idx] || <Zap className="w-6 h-6 text-primary-400" />}
                  </div>
                </div>

                <div className="p-6 pt-4 space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-primary-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
