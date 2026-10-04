export interface ChannelCategory {
  id: string;
  name: string;
  icon: string;
  badge: string;
  count: string;
  channels: string[];
  description: string;
}

export interface AppInfo {
  name: string;
  devices: string;
  rating: number;
  highlight: string;
  features: string[];
  recommendedFor: string;
}

export const germanChannelCategories: ChannelCategory[] = [
  {
    id: "sport-bundesliga",
    name: "Live-Sport & Bundesliga (4K/60FPS)",
    icon: "Trophy",
    badge: "🔥 Top Suchvolumen",
    count: "150+ Kanäle",
    description:
      "Alle Spiele der 1. und 2. Bundesliga, DFB-Pokal, UEFA Champions League, Premier League, La Liga, Formel 1, UFC und DAZN ohne Verzögerung.",
    channels: [
      "Sky Sport Bundesliga 1–10 UHD/FHD (60 FPS)",
      "Sky Sport 1–10 UHD/FHD & Sky Sport Premier League",
      "DAZN 1 & DAZN 2 HD/FHD 60FPS",
      "MagentaSport 1–6 (3. Liga, DEL Eishockey, BBL)",
      "Sky Sport F1 UHD (Alle Formel 1 Rennen live)",
      "Sky Sport Tennis, Golf & Sky Sport News HD",
      "Eurosport 1 & 2 HD / 4K",
      "Sportdigital Fußball & Sport1+ HD",
      "Sky Sport Austria 1–7 (Österreichische Bundesliga)",
      "Blue Sport 1–6 (Schweizer Super League)",
    ],
  },
  {
    id: "deutschland-vollpaket",
    name: "Deutsche Hauptsender & Pay-TV (FHD / 4K UHD)",
    icon: "Tv",
    badge: "🇩🇪 Alle Sender",
    count: "450+ Kanäle",
    description:
      "Vollständiges deutsches Free-TV und Pay-TV inklusive aller öffentlich-rechtlichen und privaten Sender in brillanter 4K/FHD Qualität mit EPG.",
    channels: [
      "ARD HD, ZDF HD, ZDFinfo, ZDFneo, Arte HD, 3sat HD, Phoenix HD",
      "RTL HD, RTL 2 HD, VOX HD, Nitro HD, Super RTL HD, ntv HD",
      "Sat.1 HD, ProSieben HD, Kabel Eins HD, Sixx HD, ProSieben Maxx HD",
      "Alle dritten Programme (WDR, NDR, BR, SWR, MDR, HR, RBB) in HD",
      "Sky Cinema Premiere, Sky Cinema Action, Sky Cinema Family, Sky Atlantic HD",
      "Warner TV Film, Warner TV Serie, Warner TV Comedy HD",
      "13th Street HD, SYFY HD, Universal TV HD, AXN White/Black HD",
      "GEO Television HD, RTL Crime HD, RTL Living HD, RTL Passion HD",
      "Discovery Channel HD, National Geographic HD, Nat Geo Wild HD, History HD",
      "Disney Channel, Super RTL, KiKA HD, Nick Jr. HD, Cartoon Network",
    ],
  },
  {
    id: "austria-switzerland",
    name: "Österreich & Schweiz (DACH)",
    icon: "Compass",
    badge: "🏔️ DACH Komplett",
    count: "180+ Kanäle",
    description:
      "Umfassende Senderlisten für Österreich und die Schweiz inklusive aller regionalen und privaten Rundfunkanstalten ohne Geoblocking.",
    channels: [
      "ORF 1 HD, ORF 2 HD (inkl. aller 9 Bundesland-Heute Regionalprogramme)",
      "ORF III HD, ORF Sport+ HD, ServusTV Österreich HD, Puls 4 HD, ATV HD, ATV II",
      "SRF 1 HD, SRF zwei HD, SRF info HD, 3+ HD, 4+ HD, 5+ HD, TV24 HD",
      "Blue Sport Schweiz 1–6 HD (Champions League & Super League)",
      "Sky Sport Austria 1–7 HD & Canal+ First Austria",
    ],
  },
  {
    id: "international-vip",
    name: "Internationale Pakete & Ex-Yu / Türkei / UK",
    icon: "Globe",
    badge: "🌍 60+ Länder",
    count: "23.000+ Kanäle",
    description:
      "Weltweiter Fernsehempfang in Originalsprache für die ganze Familie mit täglicher EPG-Aktualisierung.",
    channels: [
      "Türkei: beIN Sports 1–5, Exxen, TRT, ATV, Show TV, Star TV, Kanal D (FHD/4K)",
      "Balkan / Ex-Yu: Arena Sport 1–10, Sport Klub 1–10, RTS, HRT, Pink, BN, Nova",
      "UK & USA: Sky Sports UK, TNT Sports 1–4, BBC 1–4, ITV 1–4, CNN, HBO, NBC, Fox",
      "Frankreich: Canal+, beIN Sports France, RMC Sport, TF1, M6, France 2–5",
      "Italien: Sky Sport Italia, DAZN Italia, Rai 1–3, Mediaset Premium, Canale 5",
      "Spanien: Movistar+ LaLiga, DAZN LaLiga, Telecinco, Antena 3, RTVE 1–2",
      "Polen: Canal+ Sport Polska, Eleven Sports 1–4, Polsat, TVP 1–2, HBO Polska",
      "Arabische Welt: beIN Sports MENA 1–16, OSN Cinema, MBC 1–5, Rotana, Al Jazeera",
    ],
  },
];

export const topIptvApps: AppInfo[] = [
  {
    name: "TiviMate IPTV Player",
    devices: "Fire TV Stick, Android TV, Google TV, Shield TV",
    rating: 4.9,
    highlight: "Bester IPTV Player 2026 für TV-Geräte",
    recommendedFor: "Amazon Fire TV & Android TV",
    features: [
      "Moderne, aufgeräumte TV-Benutzeroberfläche wie bei Premium-Receivern",
      "Multi-Screen / Multiview (bis zu 9 Sender gleichzeitig ansehen)",
      "Ultraschnelle Umschaltzeiten (< 0.5 Sekunden) ohne Verzögerung",
      "Volle Xtream Codes API & M3U Playlist Unterstützung mit EPG Guide",
      "Catch-Up / Replay TV & integrierte Aufnahme-Funktion",
    ],
  },
  {
    name: "IPTV Smarters Pro",
    devices: "Samsung Smart TV, LG webOS, Android, iOS, Windows, Mac",
    rating: 4.8,
    highlight: "Universell auf allen Plattformen einsetzbar",
    recommendedFor: "Smart TVs, iPhones, iPads & PC/Mac",
    features: [
      "Getrennte Bereiche für Live TV, VOD Filme und Serien",
      "Integrierter Video-Player mit Multi-Audio & deutschen Untertiteln",
      "Kindersicherung mit PIN-Code & Master-Suchfunktion",
      "Automatischer Login via Xtream Codes API (URL, User, Passwort)",
      "Gratis Download im Samsung Smart Hub & LG Content Store",
    ],
  },
  {
    name: "IBO Player Pro / Flix IPTV",
    devices: "Samsung Tizen OS, LG webOS, Firestick, Android",
    rating: 4.7,
    highlight: "Perfekt für neuere Samsung & LG Smart TVs",
    recommendedFor: "Samsung & LG Fernseher ohne externen Stick",
    features: [
      "Direkte Installation aus dem offiziellen TV App Store",
      "Aktivierung via MAC-Adresse & Device Key im Web-Browser",
      "Hardware-beschleunigte 4K HDR & Dolby Digital 5.1 Wiedergabe",
      "Dynamische EPG-Aktualisierung und Sender-Favoritenlisten",
    ],
  },
  {
    name: "Kodi Media Center (PVR Simple Client)",
    devices: "Windows PC, Mac, Linux, Android, Raspberry Pi",
    rating: 4.6,
    highlight: "Open-Source Powerhouse für Bastler",
    recommendedFor: "PC, Heimkino-PCs & Enigma-Fans",
    features: [
      "100% kostenlos und quelloffen ohne In-App-Käufe",
      "Unterstützung von XMLTV EPG-Daten und M3U Plus Playlists",
      "Unbegrenzte Anpassbarkeit durch Addons und Custom Skins",
    ],
  },
  {
    name: "VLC Media Player",
    devices: "Windows, Mac OS, Linux, Android, iOS",
    rating: 4.5,
    highlight: "Klassiker für schnelle M3U-Tests auf dem PC",
    recommendedFor: "Desktop-Streaming & Playlist-Verifikation",
    features: [
      "Direktes Öffnen von Netzwerk-Streams per M3U-Link",
      "Robuste Codec-Unterstützung für alle H.264 / H.265 / HEVC Streams",
      "Einfache Playlist-Navigation mit STRG + L",
    ],
  },
];

export const providerComparisonData = {
  title: "IPTV Deutschland Vergleich 2026: Warum wir die #1 sind",
  subtitle:
    "Erfahren Sie, warum über 48.500 Kunden in Deutschland, Österreich und der Schweiz von herkömmlichem Kabel-TV und unzuverlässigen Billig-Anbietern zu uns wechseln.",
  rows: [
    {
      feature: "Monatlicher Effektivpreis",
      ourService: "ab 4,58 € / Monat",
      cableTv: "45,00 € – 85,00 € / Monat",
      cheapIptv: "2,00 € – 4,00 € / Monat",
      isAdvantage: true,
    },
    {
      feature: "Senderanzahl & VOD",
      ourService: "24.000+ Sender & 120.000+ Filme/Serien",
      cableTv: "ca. 80–120 Sender (ohne VOD)",
      cheapIptv: "Viele tote Links, unvollständig",
      isAdvantage: true,
    },
    {
      feature: "Server-Stabilität bei Top-Spielen",
      ourService: "99.9% Uptime (Anti-Freeze 9.3)",
      cableTv: "Stabil, aber teuer & unflexibel",
      cheapIptv: "Ständige Ausfälle & Ruckler bei Top-Events",
      isAdvantage: true,
    },
    {
      feature: "Live-Sport (Bundesliga, CL, F1, DAZN)",
      ourService: "Alle Spiele in 4K / FHD 60FPS inklusive",
      cableTv: "Teure Zusatz-Abos (Sky, DAZN extra)",
      cheapIptv: "Oft nur 25 FPS oder Ausfälle",
      isAdvantage: true,
    },
    {
      feature: "Kostenloser 24h Testzugang",
      ourService: "Ja, sofort ohne Kreditkarte",
      cableTv: "Nein, 24 Monate Mindestvertrag",
      cheapIptv: "Oft kein Test oder kostenpflichtig",
      isAdvantage: true,
    },
    {
      feature: "Deutscher WhatsApp Support",
      ourService: "24/7 Live Support auf Deutsch",
      cableTv: "Lange Warteschleifen & Callcenter",
      cheapIptv: "Kein Support oder nur Bot-Antworten",
      isAdvantage: true,
    },
    {
      feature: "Geld-zurück-Garantie",
      ourService: "7 Tage 100% Geld-zurück",
      cableTv: "Keine Garantie, feste Vertragsbindung",
      cheapIptv: "Keine Erstattung bei Nichtgefallen",
      isAdvantage: true,
    },
  ],
};

export const troubleshootingGuideData = {
  title: "IPTV Funktioniert Nicht oder Ruckelt? Sofort-Lösungen 2026",
  subtitle:
    "Die häufigsten Ursachen für IPTV Pufferung, Ladekreise und Verbindungsabbrüche – und wie Sie diese in unter 2 Minuten beheben.",
  items: [
    {
      issue: "1. IPTV ruckelt oder puffert bei Live-Events (Bundesliga / Champions League)",
      cause:
        "Ihr Internetanbieter (z.B. Telekom, Vodafone) drosselt Streaming-Ports zur Spitzenzeit oder Ihr WLAN ist überlastet.",
      solution:
        "Verbinden Sie Ihr Gerät per LAN-Kabel statt WLAN. Aktivieren Sie in Ihrer App den 'Hardware-Decoder (HW+)' und schalten Sie das Pufferlimit auf 3000 ms. Unser Anti-Freeze 9.3 System routet Ihren Stream automatisch über redundante Hochleistungs-Server in Frankfurt.",
    },
    {
      issue: "2. M3U Playlist lädt nicht oder 'Fehler beim Laden der Kanäle'",
      cause:
        "Tippfehler in der M3U-URL, Sonderzeichen oder veralteter App-Cache.",
      solution:
        "Nutzen Sie bevorzugt den Xtream Codes API Login (Server-URL, Benutzername, Passwort) anstelle langer M3U-Links. Löschen Sie in den Android-Einstellungen den Cache der App und starten Sie den Router kurz neu.",
    },
    {
      issue: "3. Schwarzes Bild bei bestimmten 4K / UHD Sendern",
      cause:
        "Die gewählte Player-App unterstützt den HEVC / H.265 Codec nicht über den Standard-Software-Decoder.",
      solution:
        "Stellen Sie in den Einstellungen von TiviMate oder IPTV Smarters Pro den Player-Typ von 'Native' auf 'ExoPlayer' oder 'VLC'. Damit wird die 4K/60FPS Hardware-Beschleunigung Ihres Smart TVs oder Firesticks aktiviert.",
    },
    {
      issue: "4. EPG (Elektronischer Programmführer) zeigt keine Sendungen an",
      cause:
        "Die EPG-URL wurde noch nicht synchronisiert oder die Zeitzone weicht ab.",
      solution:
        "Klicken Sie in Ihrer App auf 'EPG aktualisieren'. Stellen Sie die Zeitzone auf 'GMT+1 (Berlin)' ein. Unsere EPG-Daten werden alle 12 Stunden automatisch für alle deutschen Sender aktualisiert.",
    },
  ],
};

export interface ReviewItem {
  name: string;
  location: string;
  avatar: string;
  rating: number;
  date: string;
  title: string;
  text: string;
  planUsed: string;
  verifiedBadge?: string;
}

export const verifiedReviews: ReviewItem[] = [
  {
    name: "Markus W.",
    location: "München, Bayern",
    avatar: "/images/revriw/avatars/avatar-1.webp",
    rating: 5,
    date: "Vor 2 Tagen",
    title: "Endlich Bundesliga in 60FPS ohne einen einzigen Ruckler!",
    text: "Ich habe jahrelang verschiedene Anbieter ausprobiert und war an Samstagnachmittagen immer frustriert wegen Ausfällen. Hier läuft die Bundesliga über TiviMate auf dem Firestick absolut butterweich in echter 60FPS UHD-Qualität. Der WhatsApp Support hat mir beim Einrichten innerhalb von 3 Minuten geantwortet!",
    planUsed: "12 Monate Premium Flat",
    verifiedBadge: "Verifizierter Käufer",
  },
  {
    name: "Stefan K.",
    location: "Köln, NRW",
    avatar: "/images/revriw/avatars/avatar-2.webp",
    rating: 5,
    date: "Vor 4 Tagen",
    title: "Kabelvertrag gekündigt – spart mir 600€ im Jahr",
    text: "Die Bildqualität auf meinem 65 Zoll Samsung OLED ist gestochen scharf. VOD-Filme und Serien sind immer auf dem neuesten Stand mit deutschem Ton. Die Aktivierung nach der WhatsApp-Nachricht dauerte keine 5 Minuten. Absolut seriös und uneingeschränkt empfehlenswert!",
    planUsed: "12 Monate Multi-Device",
    verifiedBadge: "Verifizierter Käufer",
  },
  {
    name: "Christian B.",
    location: "Hamburg",
    avatar: "/images/revriw/avatars/avatar-3.webp",
    rating: 5,
    date: "Vor 1 Woche",
    title: "Kostenloser Test hat mich sofort überzeugt",
    text: "Habe erst den kostenlosen 24h Test gemacht, um die Stabilität bei der Champions League zu testen. Null Pufferung, EPG funktioniert perfekt. Danach direkt das Jahresabo geholt. Danke für den tollen Service!",
    planUsed: "12 Monate Premium",
    verifiedBadge: "Verifizierter Käufer",
  },
  {
    name: "Alexander M.",
    location: "Frankfurt am Main, Hessen",
    avatar: "/images/revriw/avatars/avatar-4.webp",
    rating: 5,
    date: "Vor 1 Woche",
    title: "Perfekt auf Apple TV 4K und Fire TV",
    text: "Die Umschaltzeiten sind unter 1 Sekunde. Die Sendersortierung nach Kategorien (Sport, DACH, Pay-TV) ist sehr übersichtlich gestaltet. Einer der besten IPTV Anbieter im deutschen Raum.",
    planUsed: "6 Monate Abo",
    verifiedBadge: "Verifizierter Käufer",
  },
  {
    name: "Daniela S.",
    location: "Stuttgart, Baden-Württemberg",
    avatar: "/images/revriw/avatars/avatar-5.webp",
    rating: 5,
    date: "Vor 2 Wochen",
    title: "Sehr freundlicher und hilfsbereiter Support",
    text: "Da ich technisch nicht sehr versiert bin, hatte ich Bedenken bei der Installation auf unserem LG Smart TV. Der Kundenservice hat mich Schritt für Schritt per WhatsApp begleitet. Läuft alles perfekt!",
    planUsed: "12 Monate Premium",
    verifiedBadge: "Verifizierter Käufer",
  },
  {
    name: "Timo R.",
    location: "Berlin",
    avatar: "/images/revriw/avatars/avatar-6.webp",
    rating: 5,
    date: "Vor 3 Wochen",
    title: "Top für Formel 1 & Motorsport",
    text: "Alle Rennen in 4K ohne nervige Werbeunterbrechungen. Auch die internationalen Sender (UK & USA) laufen ohne Verzögerung. Preis-Leistungs-Verhältnis ist unschlagbar.",
    planUsed: "12 Monate Multi-Device",
    verifiedBadge: "Verifizierter Käufer",
  },
];
