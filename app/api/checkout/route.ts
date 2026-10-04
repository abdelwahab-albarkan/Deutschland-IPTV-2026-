import { NextResponse } from "next/server";
import { getClientPlanById } from "@/lib/pricing";
import { siteConfig } from "@/lib/site";
import { createWhatsAppLink } from "@/lib/utils";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { planId, paymentMethod, customerEmail, customerWhatsApp } = body;

    const plan = getClientPlanById(planId);
    if (!plan) {
      return NextResponse.json(
        { success: false, error: "Ungültiges Paket ausgewählt." },
        { status: 400 }
      );
    }

    const message = `Hallo! Ich möchte das ${plan.title} (${plan.duration}) für ${plan.price.toFixed(
      2
    )}€ per ${paymentMethod || "WhatsApp"} bestellen. E-Mail: ${customerEmail || "nicht angegeben"}`;

    const redirectUrl = createWhatsAppLink(siteConfig.support.whatsapp, message);

    return NextResponse.json({
      success: true,
      redirectUrl,
      order: {
        planId: plan.id,
        title: plan.title,
        price: plan.price,
        currency: "EUR",
      },
    });
  } catch (error) {
    console.error("Checkout API error:", error);
    return NextResponse.json(
      { success: false, error: "Fehler beim Erstellen der Bestellung." },
      { status: 500 }
    );
  }
}
