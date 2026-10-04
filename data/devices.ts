import { DeviceGuide } from "@/types/product";

export const deviceGuides: DeviceGuide[] = [
  {
    id: "firetv",
    title: "Amazon Fire TV Stick & Cube",
    slug: "firetv",
    shortDesc: "Die beliebteste und schnellste Methode für IPTV Streaming in 4K.",
    icon: "Tv",
    recommendedApps: ["IPTV Smarters Pro", "TiviMate", "XCIPTV", "IBO Player"],
    steps: [
      {
        stepNumber: 1,
        title: "Downloader App installieren",
        description:
          "Gehen Sie im Amazon Appstore auf Suche, tippen Sie 'Downloader' ein und installieren Sie die orangefarbene App.",
      },
      {
        stepNumber: 2,
        title: "Entwickleroptionen aktivieren",
        description:
          "Navigieren Sie zu Einstellungen -> Mein Fire TV -> Entwickleroptionen und erlauben Sie 'Apps aus unbekannten Quellen' für den Downloader.",
      },
      {
        stepNumber: 3,
        title: "IPTV App herunterladen",
        description:
          "Öffnen Sie Downloader und geben Sie den Download-Code ein, um IPTV Smarters oder TiviMate direkt zu installieren.",
        codeOrUrl: "Downloader Code: 78522 (Smarters Pro)",
      },
      {
        stepNumber: 4,
        title: "Zugangsdaten eingeben & Streamen",
        description:
          "Wählen Sie 'Login with Xtream Codes API' und tragen Sie Name, Benutzername, Passwort und Server-URL aus Ihrer Aktivierungsnachricht ein.",
      },
    ],
  },
  {
    id: "smarttv",
    title: "Smart TV (Samsung Tizen & LG webOS)",
    slug: "smarttv",
    shortDesc: "Direkt über den integrierten Samsung App Store oder LG Content Store.",
    icon: "Monitor",
    recommendedApps: ["IBO Player Pro", "IPTV Smarters Player", "Smart IPTV (SIPTV)", "Nanomid Player"],
    steps: [
      {
        stepNumber: 1,
        title: "App Store öffnen",
        description:
          "Öffnen Sie den Samsung App Store oder LG Content Store auf Ihrem Smart TV.",
      },
      {
        stepNumber: 2,
        title: "IBO Player oder Smarters suchen",
        description:
          "Suchen Sie nach 'IBO Player' oder 'IPTV Smarters' und laden Sie die Anwendung herunter.",
      },
      {
        stepNumber: 3,
        title: "Device MAC & Device Key notieren",
        description:
          "Beim ersten Start der App werden Ihre MAC-Adresse und Ihr Device Key auf dem Bildschirm angezeigt.",
      },
      {
        stepNumber: 4,
        title: "Playlist aktivieren",
        description:
          "Senden Sie uns Ihre MAC-Adresse per WhatsApp oder laden Sie Ihre M3U Playlist direkt im Webportal der App hoch.",
      },
    ],
  },
  {
    id: "android",
    title: "Android TV, Boxen & Smartphones",
    slug: "android",
    shortDesc: "Maximale Flexibilität mit Google Play Store Apps wie TiviMate & Smarters.",
    icon: "Smartphone",
    recommendedApps: ["TiviMate IPTV Player", "IPTV Smarters Pro", "OTT Navigator", "Televizo"],
    steps: [
      {
        stepNumber: 1,
        title: "Google Play Store öffnen",
        description:
          "Öffnen Sie den Google Play Store auf Ihrer Android Box, Shield TV oder Smartphone.",
      },
      {
        stepNumber: 2,
        title: "TiviMate oder Smarters Pro installieren",
        description:
          "Installieren Sie den herausragenden TiviMate Player oder IPTV Smarters Pro.",
      },
      {
        stepNumber: 3,
        title: "Playlist hinzufügen",
        description:
          "Klicken Sie auf 'Playlist hinzufügen' -> 'Xtream Codes' und geben Sie Ihre Zugangsdaten ein.",
      },
      {
        stepNumber: 4,
        title: "EPG & Senderliste laden",
        description:
          "Die Kanäle und der elektronische TV-Guide synchronisieren sich automatisch innerhalb von Sekunden.",
      },
    ],
  },
  {
    id: "appletv",
    title: "Apple TV, iPhone & iPad (iOS/tvOS)",
    slug: "appletv",
    shortDesc: "Flüssiges und elegantes Streaming im gesamten Apple-Ökosystem.",
    icon: "Apple",
    recommendedApps: ["IPTVX", "Smarters Player Lite", "GSE Smart IPTV", "Snappier IPTV"],
    steps: [
      {
        stepNumber: 1,
        title: "Apple App Store aufrufen",
        description:
          "Öffnen Sie den App Store auf Ihrem Apple TV 4K, iPhone oder iPad.",
      },
      {
        stepNumber: 2,
        title: "Smarters Player Lite oder IPTVX laden",
        description:
          "Laden Sie die kostenlose App 'Smarters Player Lite' oder 'IPTVX' herunter.",
      },
      {
        stepNumber: 3,
        title: "Mit Xtream Codes einloggen",
        description:
          "Tragen Sie die von uns übermittelten Zugangsdaten ein (Server URL, Benutzername, Passwort).",
      },
      {
        stepNumber: 4,
        title: "4K HDR Streaming genießen",
        description:
          "Nutzen Sie Features wie Multi-Screen, Picture-in-Picture und flüssiges AirPlay.",
      },
    ],
  },
  {
    id: "receiver",
    title: "Enigma2 Receiver, MAG Box & Formuler",
    slug: "receiver",
    shortDesc: "Für klassische Set-Top-Boxen und Dreambox / VU+ / Formuler Z-Geräte.",
    icon: "Radio",
    recommendedApps: ["MyTVOnline 2/3 (Formuler)", "Stalker Middleware (MAG)", "AutobouquetsMaker (Enigma2)"],
    steps: [
      {
        stepNumber: 1,
        title: "MAC-Adresse übermitteln",
        description:
          "Für MAG Boxen oder Formuler Stalker Portal senden Sie uns einfach Ihre 00:1A:79:... MAC-Adresse.",
      },
      {
        stepNumber: 2,
        title: "Portal URL eintragen",
        description:
          "Geben Sie in den Systemeinstellungen Ihrer Box die von uns bereitgestellte Portal-URL ein.",
      },
      {
        stepNumber: 3,
        title: "Für Enigma2: Telnet Befehl ausführen",
        description:
          "Für Dreambox/VU+ senden wir Ihnen ein fertiges Auto-Script für PuTTY/Terminal zur Installation aller Bouquets.",
      },
    ],
  },
];
