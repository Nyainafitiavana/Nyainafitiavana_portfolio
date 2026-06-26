import { NextRequest, NextResponse } from "next/server";

const to = process.env.CONTACT_EMAIL ?? "ainafitiavana.project@gmail.com";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);

  if (!body?.name || !body?.email || !body?.subject || !body?.message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const subject = `[Portfolio] ${body.subject}`;
  const text = `Nom: ${body.name}\nEmail: ${body.email}\n\n${body.message}`;

  if (process.env.RESEND_API_KEY) {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM ?? "Portfolio <onboarding@resend.dev>",
        to,
        subject,
        text,
        reply_to: body.email
      })
    });

    if (response.ok) {
      return NextResponse.json({ ok: true });
    }
  }

  const mailto = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
  return NextResponse.json({ ok: true, mailto });
}
