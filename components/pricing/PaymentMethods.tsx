import React from "react";
import Image from "next/image";
import { ShieldCheck, Lock, CheckCircle2, Zap } from "lucide-react";

export default function PaymentMethods() {
  const paymentMethods = [
    {
      name: "PayPal",
      desc: "Käuferschutz & Sofortige Aktivierung",
      logo: "/images/Paypal_2014_logo.png",
      instant: true,
    },
    {
      name: "Visa",
      desc: "Kredit- & Debitkarte mit 3D-Secure",
      logo: "/images/Visa_Inc._logo_(2005–2014).svg.webp",
      instant: true,
    },
    {
      name: "Mastercard",
      desc: "Sichere Kartenzahlung in Echtzeit",
      logo: "/images/Mastercard-logo.svg.webp",
      instant: true,
    },
    {
      name: "Apple Pay",
      desc: "Bequem & sicher mit Touch/Face ID",
      logo: "/images/Apple_Pay_logo.svg.webp",
      instant: true,
    },
    {
      name: "Google Pay",
      desc: "1-Klick Zahlung per Smartphone",
      logo: "/images/6124998.png",
      instant: true,
    },
    {
      name: "Bitcoin & Krypto",
      desc: "BTC, USDT, ETH (100% Anonym)",
      logo: "/images/360_F_242832348_HvNHaiEu6tAlklMGTSYgjS20RV2jjeKq.jpg",
      instant: true,
    },
  ];

  return (
    <div className="rounded-3xl bg-[#0e101a]/90 border border-purple-500/20 p-6 sm:p-10 my-12">
      <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 text-primary-300 text-xs font-bold uppercase tracking-wider border border-primary-500/20">
          <Lock className="w-3.5 h-3.5 text-primary-400" />
          <span>Sichere Zahlungsabwicklung</span>
        </div>
        <h3 className="text-2xl font-bold text-white">
          Akzeptierte Zahlungsmethoden
        </h3>
        <p className="text-slate-400 text-xs sm:text-sm">
          Wählen Sie Ihre bevorzugte, sichere und anonyme Bezahlmethode. Die Freischaltung erfolgt vollautomatisch in unter 5 Minuten.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        {paymentMethods.map((method, idx) => (
          <div
            key={idx}
            className="p-4 rounded-2xl bg-[#080910] border border-purple-500/10 hover:border-purple-500/35 transition-colors flex flex-col items-center text-center justify-between"
          >
            <div className="h-10 w-full flex items-center justify-center mb-3">
              <Image src={method.logo} alt={method.name} width={80} height={32} className="max-h-8 w-auto max-w-[80px] object-contain" />
            </div>
            <div className="font-bold text-white text-xs sm:text-sm mb-1">{method.name}</div>
            <div className="text-[11px] sm:text-[11px] text-slate-400 leading-tight">
              {method.desc}
            </div>
            <span className="mt-3 inline-flex items-center gap-1 text-[11px] text-primary-300 font-semibold bg-primary-500/15 px-2 py-0.5 rounded-full border border-primary-500/25">
              <Zap className="w-2.5 h-2.5" />
              Sofort aktiv
            </span>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-purple-500/15 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-400">
        <span className="flex items-center gap-1.5 text-slate-300">
          <ShieldCheck className="w-4 h-4 text-primary-400" />
          <span>256-Bit SSL-Bankenstandard</span>
        </span>
        <span className="hidden sm:inline text-slate-700">•</span>
        <span className="flex items-center gap-1.5 text-slate-300">
          <CheckCircle2 className="w-4 h-4 text-mauve-400" />
          <span>Keine versteckten Gebühren</span>
        </span>
        <span className="hidden sm:inline text-slate-700">•</span>
        <span className="flex items-center gap-1.5 text-slate-300">
          <Lock className="w-4 h-4 text-indigo-400" />
          <span>Keine Speicherung sensibler Bankdaten</span>
        </span>
      </div>
    </div>
  );
}
