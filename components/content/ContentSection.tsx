import React from "react";
import { CheckCircle2, Sparkles } from "lucide-react";

interface ContentSectionProps {
  badge?: string;
  title: string;
  description?: string;
  keyBenefits?: string[];
  sections?: {
    heading: string;
    content: string[];
  }[];
  children?: React.ReactNode;
}

export default function ContentSection({
  badge,
  title,
  description,
  keyBenefits,
  sections,
  children,
}: ContentSectionProps) {
  return (
    <section className="py-12 sm:py-16 relative bg-[#06070a]">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="bg-[#0e101a]/95 border border-purple-500/20 rounded-3xl p-6 sm:p-10 md:p-12 relative overflow-hidden shadow-2xl">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 end-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

          {/* Header */}
          <div className="space-y-4 max-w-3xl mb-8">
            {badge && (
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-300 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-primary-400" />
                <span>{badge}</span>
              </div>
            )}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-white tracking-tight">
              {title}
            </h1>
            {description && (
              <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed">
                {description}
              </p>
            )}
          </div>

          {/* Key Benefits Grid */}
          {keyBenefits && keyBenefits.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-8 p-5 sm:p-6 rounded-2xl bg-[#080910] border border-purple-500/15">
              {keyBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-200 font-medium">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Subsections */}
          {sections && sections.length > 0 && (
            <div className="space-y-8 my-8 divide-y divide-purple-500/15">
              {sections.map((sec, idx) => (
                <div key={idx} className={idx > 0 ? "pt-8" : ""}>
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                    {sec.heading}
                  </h2>
                  <div className="space-y-3 text-slate-300 leading-relaxed text-xs sm:text-sm md:text-base">
                    {sec.content.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Custom Injected Content */}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  );
}
