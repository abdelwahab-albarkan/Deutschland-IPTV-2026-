import React from "react";
import Image from "next/image";
import { Radio, Terminal } from "lucide-react";

export default function Receiver() {
  return (
    <div id="receiver" className="rounded-3xl bg-[#0e101a]/95 border border-purple-500/20 p-6 sm:p-8 scroll-mt-24 shadow-2xl">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-cyan-500/15 text-cyan-400 flex items-center justify-center border border-cyan-500/20 shrink-0">
            <Image src="/images/Formuler.png" alt="Formuler Box" width={40} height={40} className="w-10 h-10 object-contain" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Enigma2 (Dreambox, VU+), MAG Box & Formuler
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Klassische Linux Receiver, Stalker Middleware und Formuler MyTVOnline.
            </p>
          </div>
        </div>
      </div>

      {/* Receiver Devices Strip */}
      <div className="mb-6 p-4 rounded-2xl bg-[#080910] border border-purple-500/20 flex items-center justify-around gap-4">
        <div className="flex items-center gap-2">
          <Image src="/images/Formuler.png" alt="Formuler" width={120} height={40} className="h-10 object-contain w-auto" />
          <span className="text-xs font-bold text-white">Formuler Z11 Pro</span>
        </div>
        <div className="h-8 w-px bg-white/10" />
        <div className="flex items-center gap-2">
          <Image src="/images/mag.png" alt="MAG Box" width={120} height={40} className="h-10 object-contain w-auto" />
          <span className="text-xs font-bold text-white">MAG 524 / 540</span>
        </div>
      </div>

      <div className="space-y-4 text-xs sm:text-sm text-slate-300">
        <div className="p-4 rounded-2xl bg-[#080910] border border-purple-500/15 space-y-2">
          <h4 className="font-bold text-white flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-gradient-to-r from-primary-600 to-indigo-600 text-white text-xs font-black flex items-center justify-center">1</span>
            Für MAG & Formuler (Stalker Portal)
          </h4>
          <p className="text-xs text-slate-400">
            Senden Sie uns Ihre MAC-Adresse (beginnend mit <code className="text-primary-300 bg-[#121424] px-2 py-0.5 rounded font-mono border border-purple-500/30">00:1A:79:...</code>). Tragen Sie in den Systemeinstellungen des Geräts unsere Portal-URL ein und starten Sie die Box neu.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-[#080910] border border-purple-500/15 space-y-2">
          <h4 className="font-bold text-white flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-gradient-to-r from-primary-600 to-indigo-600 text-white text-xs font-black flex items-center justify-center">2</span>
            Für Enigma2 Receiver (Dreambox / VU+ / Gigablue)
          </h4>
          <p className="text-xs text-slate-400">
            Verbinden Sie sich via PuTTY / Telnet mit Ihrer Box und führen Sie das von uns bereitgestellte Auto-Installationsskript (wget Befehl) aus. Die Sender werden automatisch in Ihre Bouquet-Favoritenliste eingefügt.
          </p>
        </div>
      </div>
    </div>
  );
}
