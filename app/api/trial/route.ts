import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, whatsapp, device, app, adultChannels } = body;

    // Validate required fields
    if (!name || !email || !device) {
      return NextResponse.json(
        { success: false, error: "Bitte füllen Sie Name, E-Mail und Gerät aus." },
        { status: 400 }
      );
    }

    // Basic email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Bitte geben Sie eine gültige E-Mail-Adresse ein." },
        { status: 400 }
      );
    }

    // Log the trial request (can be connected to database, webhook, Telegram Bot or CRM)
    console.log("New IPTV Trial Request received:", {
      name,
      email,
      whatsapp,
      device,
      app,
      adultChannels,
      timestamp: new Date().toISOString(),
    });

    // Optionally trigger Discord / Telegram Webhook if configured
    if (process.env.DISCORD_WEBHOOK_URL) {
      try {
        await fetch(process.env.DISCORD_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            content: `🔥 **Neue IPTV 24h Test-Anforderung!**\n**Name:** ${name}\n**E-Mail:** ${email}\n**WhatsApp:** ${whatsapp || "Keine"}\n**Gerät:** ${device}\n**App:** ${app}\n**18+:** ${adultChannels ? "Ja" : "Nein"}`,
          }),
        });
      } catch (webhookErr) {
        console.error("Webhook notification error:", webhookErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Testanforderung erfolgreich empfangen. Ihre Zugangsdaten werden in Kürze versandt.",
    });
  } catch (error) {
    console.error("Trial API error:", error);
    return NextResponse.json(
      { success: false, error: "Interner Serverfehler bei der Verarbeitung." },
      { status: 500 }
    );
  }
}
