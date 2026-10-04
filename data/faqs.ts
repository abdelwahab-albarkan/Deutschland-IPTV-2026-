import { FAQCategory, FAQItemType } from "@/types/faq";

export const defaultFaqs: FAQItemType[] = [
  // --- KATEGORIE 1: Allgemein & Legalität ---
  {
    id: "faq-1",
    question: "Was ist IPTV und wie funktioniert es in Deutschland?",
    answer:
      "IPTV steht für Internet Protocol Television und überträgt Fernsehsender, Live-Sport und Video-on-Demand (VOD) digital über Ihre Breitband-Internetverbindung. Anstelle von Kabelanschluss oder Satellitenschüssel empfangen Sie das Signal direkt über moderne Streaming-Apps (wie TiviMate, IPTV Smarters Pro oder IBO Player) auf Ihrem Smart TV, Fire TV Stick, Smartphone oder PC.",
    category: "general",
    isPopular: true,
  },
  {
    id: "faq-2",
    question: "Ist IPTV in Deutschland legal?",
    answer:
      "Die IPTV-Technologie an sich ist in Deutschland vollkommen legal und wird standardmäßig von großen Telekommunikationsanbietern wie Telekom (MagentaTV) oder Vodafone eingesetzt. Als Nutzer empfangen Sie digitale Streams über standardisierte Protokolle (M3U / Xtream Codes API). Unser Service bietet Ihnen stabilen Zugriff auf internationale und frei empfangbare Sender sowie leistungsstarke europäische High-End Server.",
    category: "general",
    isPopular: true,
  },
  {
    id: "faq-3",
    question: "Wie unterscheidet sich Deutschland IPTV von günstigen Standardanbietern?",
    answer:
      "Viele Billiganbieter überbuchen ihre Server mit tausenden Nutzern, was bei Top-Spielen der Bundesliga oder Champions League zu ständigen Ladekreisen führt. Deutschland IPTV setzt auf dedizierte 10-Gbit/s-Server in Frankfurt am Main und Amsterdam mit unserer Anti-Freeze™ 9.3 Technologie, garantierter Bandbreite, 60 FPS Streams, täglichen VOD-Updates und deutschem 24/7 WhatsApp Support.",
    category: "general",
    isPopular: true,
  },
  {
    id: "faq-4",
    question: "Benötige ich einen Kabelanschluss, Receiver oder eine Satellitenschüssel?",
    answer:
      "Nein, Sie benötigen keinerlei zusätzliche Hardware wie Satellitenschüsseln oder Kabelverträge. Ein herkömmlicher Internetanschluss und ein beliebiges streamingfähiges Endgerät (z.B. Fire TV Stick, Smart TV, Tablet oder Smartphone) reichen vollkommen aus.",
    category: "general",
    isPopular: false,
  },
  {
    id: "faq-5",
    question: "Funktioniert der IPTV Dienst auch im Ausland (z.B. Urlaub in Österreich, Schweiz, Spanien)?",
    answer:
      "Ja! Unser IPTV Service funktioniert weltweit ohne Geoblocking. Sie können Ihr Abonnement problemlos auf Reisen in Österreich, der Schweiz, Spanien, der Türkei oder jedem anderen Land über WLAN oder mobile Daten (4G/5G) nutzen.",
    category: "general",
    isPopular: false,
  },

  // --- KATEGORIE 2: Live-Sport & Bundesliga ---
  {
    id: "faq-6",
    question: "Sind alle Bundesliga-, Champions League- und Formel 1-Übertragungen enthalten?",
    answer:
      "Ja! Unsere Senderlisten enthalten alle relevanten Live-Sport-Kanäle: Sky Sport Bundesliga 1–10 UHD/FHD (in flüssigen 60 FPS), Sky Sport Premier League, DAZN 1 & DAZN 2 HD, MagentaSport (3. Liga & DEL Eishockey), Sky Sport F1 UHD (alle Formel 1 Sessions live), Eurosport 1 & 2 sowie internationale Pay-TV Sportsender ohne Aufpreis.",
    category: "content",
    isPopular: true,
  },
  {
    id: "faq-7",
    question: "In welcher Bildqualität und Bildwiederholrate (FPS) werden die Sender gestreamt?",
    answer:
      "Wir übertragen unsere Premium-Sender in echtem 4K Ultra HD (3840x2160) sowie Full HD (1080p) mit konstanten 60 Bildern pro Sekunde (60 FPS) und modernster HEVC/H.265 Kompression. Dadurch erleben Sie schnelle Sportübertragungen absolut ruckelfrei und gestochen scharf.",
    category: "content",
    isPopular: true,
  },
  {
    id: "faq-8",
    question: "Gibt es Verzögerungen (Delay) bei Live-Fussballspielen?",
    answer:
      "Dank unserer optimierten Direct-Routing-Infrastruktur und Low-Latency-Streams beträgt die Signalverzögerung meist nur 3 bis 5 Sekunden gegenüber dem linearen Kabelsignal. Sie erfahren Tore also nicht erst durch Benachrichtigungen auf Ihrem Smartphone.",
    category: "content",
    isPopular: false,
  },
  {
    id: "faq-9",
    question: "Welche internationalen Sender (Türkei, UK, USA, Arabisch, Ex-Yu, Polen) sind verfügbar?",
    answer:
      "Neben dem kompletten deutschen, österreichischen (ORF, ServusTV) und Schweizer (SRF, Blue Sport) TV-Angebot umfasst unser Paket über 24.000 Sender aus mehr als 50 Ländern, darunter Türkei (beIN Sports, Exxen), UK (Sky UK, TNT Sports), USA, Frankreich, Italien, Polen, Albanien, Arabische Länder und Balkan.",
    category: "content",
    isPopular: false,
  },
  {
    id: "faq-10",
    question: "Wie oft wird die VOD Mediathek (Filme & Serien) aktualisiert?",
    answer:
      "Unsere VOD-Mediathek mit über 120.000 Titeln wird täglich mit den neuesten Kinofilmen, Netflix-, Amazon Prime-, Disney+ und HBO-Serien in 4K/FHD mit deutscher Tonspur und mehrsprachigen Untertiteln aktualisiert.",
    category: "content",
    isPopular: true,
  },

  // --- KATEGORIE 3: Geräte, Apps & Installation ---
  {
    id: "faq-11",
    question: "Welche IPTV App ist die beste für den Amazon Fire TV Stick?",
    answer:
      "Für den Amazon Fire TV Stick (4K, 4K Max & Cube) empfehlen wir 'TiviMate IPTV Player' (beste Benutzeroberfläche und EPG-Darstellung), gefolgt von 'IPTV Smarters Pro' und 'XCIPTV'. Die Installation dauert über die App 'Downloader' weniger als 3 Minuten.",
    category: "technical",
    isPopular: true,
  },
  {
    id: "faq-12",
    question: "Wie installiere ich IPTV auf einem Samsung oder LG Smart TV?",
    answer:
      "Auf Samsung Smart TVs (Tizen OS) und LG Smart TVs (webOS) können Sie Apps wie 'IBO Player Pro', 'IPTV Smarters Player', 'Flix IPTV' oder 'Nanomid Player' direkt aus dem offiziellen TV-App-Store installieren. Nach dem Start tragen Sie einfach Ihre Mac-Adresse oder Xtream Codes Zugangsdaten ein.",
    category: "technical",
    isPopular: true,
  },
  {
    id: "faq-13",
    question: "Funktioniert IPTV auf Android Boxen, Apple TV, PC und Smartphones?",
    answer:
      "Ja! Kompatibel sind: Android TV / Boxen (Nvidia Shield, Formuler, Xiaomi Mi Box), Apple TV & iOS (IPTVX, GSE Smart IPTV, Smarters Player Lite), Windows PC & Mac (VLC Media Player, IPTV Smarters Pro Windows App) sowie Android Smartphones und Tablets.",
    category: "technical",
    isPopular: false,
  },
  {
    id: "faq-14",
    question: "Was ist der Unterschied zwischen M3U Playlist-URL und Xtream Codes API?",
    answer:
      "Eine M3U Playlist ist ein langer Link, der alle Sender in einer Datei lädt. Der Xtream Codes API Login (Server-URL, Benutzername & Passwort) ist moderner, lädt Senderlisten und den elektronischen Programmführer (EPG) viel schneller und unterteilt Live TV, Filme und Serien übersichtlich in Kategorien.",
    category: "technical",
    isPopular: false,
  },
  {
    id: "faq-15",
    question: "Wie funktioniert der elektronische Programmführer (EPG TV-Guide)?",
    answer:
      "Der EPG synchronisiert sich bei Nutzung des Xtream Codes Logins in Apps wie TiviMate oder Smarters Pro vollautomatisch. Sie sehen 7 Tage im Voraus das aktuelle Programm mit Sendungsbeschreibungen, Startzeiten und Vorschaubildern.",
    category: "technical",
    isPopular: false,
  },

  // --- KATEGORIE 4: Internet, Pufferung, Speed & VPN ---
  {
    id: "faq-16",
    question: "Welche Internetgeschwindigkeit benötige ich für flüssiges 4K Streaming?",
    answer:
      "Für stabiles SD/HD Streaming reichen bereits 15 Mbit/s. Für Full HD (1080p 60 FPS) und 4K Ultra HD Streaming empfehlen wir eine stabile Verbindung von mindestens 25 bis 50 Mbit/s. Für beste Ergebnisse verbinden Sie Ihr TV-Gerät nach Möglichkeit per LAN-Kabel oder 5 GHz WLAN.",
    category: "speed",
    isPopular: true,
  },
  {
    id: "faq-17",
    question: "Was kann ich tun, wenn mein IPTV Stream ruckelt oder puffert?",
    answer:
      "1. Schließen Sie Ihr Gerät per LAN-Kabel an den Router an. 2. Stellen Sie in Ihrer IPTV App den Hardware-Decoder (HW+) und einen Stream-Puffer von 3000 ms ein. 3. Starten Sie Ihren Router neu (um DNS-Cache zu leeren). 4. Ändern Sie bei Bedarf den DNS-Server im Router auf Cloudflare (1.1.1.1) oder Google (8.8.8.8). Unser Anti-Freeze 9.3 System schaltet bei Netzwerkengpässen automatisch auf Ersatz-Server um.",
    category: "speed",
    isPopular: true,
  },
  {
    id: "faq-18",
    question: "Benötige ich in Deutschland zwingend ein VPN für IPTV?",
    answer:
      "Nein, ein VPN ist nicht zwingend notwendig, da unsere Rechenzentren für deutsche Internetanbieter (Telekom, Vodafone, 1&1, O2) optimiert sind. Wenn Sie jedoch zusätzliche Privatsphäre wünschen oder Ihr Provider Ports drosselt, können Sie problemlos jedes VPN (z.B. NordVPN, Surfshark, ExpressVPN) nutzen.",
    category: "speed",
    isPopular: true,
  },
  {
    id: "faq-19",
    question: "Wie verhindert die Anti-Freeze™ 9.3 Technologie Serverausfälle?",
    answer:
      "Anti-Freeze™ 9.3 ist unser intelligentes Load-Balancing-Protokoll. Es verteilt den Datenverkehr dynamisch auf mehrere Rechenzentren in Frankfurt, Amsterdam und Zürich. Sollte ein Server eine hohe Auslastung verzeichnen, schaltet der Stream ohne sichtbare Unterbrechung für den Zuschauer auf einen Backup-Stream um.",
    category: "speed",
    isPopular: false,
  },
  {
    id: "faq-20",
    question: "Drosseln deutsche Internetprovider wie Telekom oder Vodafone IPTV Verbindungen?",
    answer:
      "Einige Internetprovider drosseln während populärer Live-Sport-Events bestimmte Peering-Knotenpunkte. Unser CDN nutzt direkte Tier-1 Uplinks und umgeht solche Engpässe zuverlässig, sodass Sie auch samstags um 15:30 Uhr unterbrechungsfrei streamen.",
    category: "speed",
    isPopular: false,
  },

  // --- KATEGORIE 5: Preise, Test, Zahlung & Garantie ---
  {
    id: "faq-21",
    question: "Wie schnell erhalte ich meine Zugangsdaten nach Bestellung oder Testanforderung?",
    answer:
      "Die Bereitstellung erfolgt vollautomatisch: Nach Ihrer Bestellung oder Testanfrage erhalten Sie Ihre Xtream Codes Zugangsdaten, M3U Playlist-URL und Einrichtungsanleitung innerhalb von 2 bis maximal 5 Minuten per E-Mail und auf Wunsch direkt via WhatsApp.",
    category: "billing",
    isPopular: true,
  },
  {
    id: "faq-22",
    question: "Kann ich den IPTV Dienst vorab 24 Stunden kostenlos testen?",
    answer:
      "Ja! Wir bieten einen 100% kostenlosen und unverbindlichen 24-Stunden-Test an. Sie benötigen keine Kreditkarte und der Testzugang läuft nach 24 Stunden automatisch aus, ohne dass ein kostenpflichtiges Abonnement entsteht.",
    category: "billing",
    isPopular: true,
  },
  {
    id: "faq-23",
    question: "Welche Zahlungsmethoden werden akzeptiert?",
    answer:
      "Wir unterstützen alle sicheren und gängigen Zahlungsmethoden: PayPal (auf Anfrage via Support), Kreditkarte (Visa, Mastercard, Maestro), Giropay, Sofortüberweisung, Revolut, Paysafecard sowie Kryptowährungen (Bitcoin, USDT, Ethereum) für maximale Anonymität.",
    category: "billing",
    isPopular: true,
  },
  {
    id: "faq-24",
    question: "Wie funktioniert die 7 Tage Geld-zurück-Garantie?",
    answer:
      "Sollten Sie nach dem Kauf aus irgendeinem Grund nicht vollständig mit Bildqualität, Senderangebot oder Serverstabilität zufrieden sein, schreiben Sie einfach unserem 24/7 WhatsApp oder E-Mail Support. Wir erstatten Ihnen 100% des gezahlten Betrags innerhalb weniger Stunden – ohne Wenn und Aber.",
    category: "billing",
    isPopular: true,
  },
  {
    id: "faq-25",
    question: "Kann ich das Abonnement auf mehreren Geräten gleichzeitig nutzen (Multiroom)?",
    answer:
      "Unsere Standard-Pakete beinhalten 1 Verbindung. Wenn Sie in verschiedenen Räumen gleichzeitig streamen möchten, können Sie im Bestellprozess die 2-Geräte-Option (Multiroom) auswählen oder unser 24-Monats-Paket wählen, bei dem 2 gleichzeitige Verbindungen bereits inklusive sind.",
    category: "billing",
    isPopular: false,
  },
  {
    id: "faq-26",
    question: "Gibt es automatische Vertragsverlängerungen oder Abo-Fallen?",
    answer:
      "Nein! Bei uns gibt es keine automatischen Abo-Verlängerungen und keine Kündigungsfristen. Sie zahlen einmalig für den gewählten Zeitraum (1, 3, 6, 12 oder 24 Monate). Wenn die Laufzeit endet, entscheiden Sie selbst, ob Sie verlängern möchten.",
    category: "billing",
    isPopular: false,
  },
  {
    id: "faq-27",
    question: "Bieten Sie auch IPTV Reseller Pakete mit eigenem Panel an?",
    answer:
      "Ja! Für Wiederverkäufer bieten wir professionelle Xtream UI Reseller Panels mit Credit-System (100 bis 1000 Credits) an. Sie können eigene Testaccounts erstellen, Sub-Reseller anlegen, eigene DNS nutzen und von Margen bis zu 300% profitieren.",
    category: "billing",
    isPopular: false,
  },
];

export const faqCategories: FAQCategory[] = [
  {
    id: "general",
    title: "Allgemein & Legalität",
    description: "Grundlagen, Funktionsweise, rechtliche Aspekte und globale Nutzung.",
    items: defaultFaqs.filter((f) => f.category === "general"),
  },
  {
    id: "content",
    title: "Sport, Bundesliga & Sender",
    description: "Sky Sport Bundesliga, DAZN, 4K/60FPS Qualität und VOD Mediathek.",
    items: defaultFaqs.filter((f) => f.category === "content"),
  },
  {
    id: "technical",
    title: "Geräte, Apps & Installation",
    description: "Einrichtung auf Fire TV Stick, Samsung/LG Smart TV, TiviMate & Smarters.",
    items: defaultFaqs.filter((f) => f.category === "technical"),
  },
  {
    id: "speed",
    title: "Speed, Pufferung & Anti-Freeze™",
    description: "Ruckelfreies Streaming, DNS-Optimierung, VPN-Nutzung & Server-Stabilität.",
    items: defaultFaqs.filter((f) => f.category === "speed"),
  },
  {
    id: "billing",
    title: "Preise, 24h Test & Garantie",
    description: "Zahlungsarten, Sofort-Freischaltung, 7 Tage Garantie & Multiroom.",
    items: defaultFaqs.filter((f) => f.category === "billing"),
  },
];
