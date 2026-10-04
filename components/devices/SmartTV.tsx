import React from "react";
import Image from "next/image";
import { Monitor } from "lucide-react";

export default function SmartTV() {
  return (
    <div id="smarttv" className="rounded-3xl bg-[#0e101a]/95 border border-purple-500/20 p-6 sm:p-8 scroll-mt-24 shadow-2xl">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-primary-500/15 text-primary-400 flex items-center justify-center border border-primary-500/20 shrink-0">
            <Image src="/images/samsungsmarttv.png" alt="Samsung Smart TV" width={40} height={40} className="w-10 h-10 object-contain" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Samsung (Tizen) & LG (webOS) Smart TVs
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Direkte Installation ohne zusätzliche Streaming-Box über den integrierten App Store.
            </p>
          </div>
        </div>
      </div>

      {/* Tutorial Banner Image */}
      <div className="mb-6 relative rounded-2xl overflow-hidden border border-purple-500/20 aspect-[21/9] max-h-48 w-full">
        <Image src="/images/iptv-samsung-tv-setup.jpg" alt="Samsung Smart TV IPTV Setup" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
      </div>

      <div className="space-y-4 text-xs sm:text-sm text-slate-300">
        <div className="p-4 rounded-2xl bg-[#080910] border border-purple-500/15 space-y-2">
          <h4 className="font-bold text-white flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-gradient-to-r from-primary-600 to-indigo-600 text-white text-xs font-black flex items-center justify-center">1</span>
            IBO Player oder Smarters Player installieren
          </h4>
          <p className="text-xs text-slate-400">
            Suchen Sie im Samsung Store oder LG Content Store nach <strong>IBO Player</strong> oder <strong>IPTV Smarters</strong> und installieren Sie die Anwendung.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-[#080910] border border-purple-500/15 space-y-2">
          <h4 className="font-bold text-white flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-gradient-to-r from-primary-600 to-indigo-600 text-white text-xs font-black flex items-center justify-center">2</span>
            MAC-Adresse & Device Key notieren
          </h4>
          <p className="text-xs text-slate-400">
            Beim Öffnen des IBO Players sehen Sie Ihre Geräte-MAC-Adresse und den Device Key auf dem Fernsehbildschirm.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-[#080910] border border-purple-500/15 space-y-2">
          <h4 className="font-bold text-white flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-gradient-to-r from-primary-600 to-indigo-600 text-white text-xs font-black flex items-center justify-center">3</span>
            Aktivierung durch Support oder Webportal
          </h4>
          <p className="text-xs text-slate-400">
            Senden Sie uns die MAC-Adresse per WhatsApp. Unser Support verknüpft Ihre 24.000+ Sender in unter 2 Minuten mit Ihrem Fernseher.
          </p>
        </div>
      </div>
    </div>
  );
}
