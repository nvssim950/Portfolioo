import { NextResponse } from "next/server";
import { Resend } from "resend";
import { PROFILE } from "@/lib/data";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM = process.env.CONTACT_FROM || "Portfolio <onboarding@resend.dev>";
const TO = process.env.CONTACT_TO || PROFILE.email;

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Email service not configured." },
      { status: 500 },
    );
  }

  let body: { name?: string; contact?: string; message?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = (body.name ?? "").toString().trim().slice(0, 200);
  const contact = (body.contact ?? "").toString().trim().slice(0, 200);
  const message = (body.message ?? "").toString().trim().slice(0, 5000);

  if (!name || !contact || !message) {
    return NextResponse.json(
      { error: "Name, contact, and message are required." },
      { status: 400 },
    );
  }

  const subject = `New inquiry from ${name}`;
  const text =
    `Name: ${name}\n` +
    `Contact: ${contact}\n\n` +
    `${message}\n`;
  const html = `
    <div style="font-family:ui-sans-serif,system-ui,sans-serif;line-height:1.55">
      <h2 style="margin:0 0 12px">New inquiry</h2>
      <p style="margin:0"><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p style="margin:0 0 16px"><strong>Contact:</strong> ${escapeHtml(contact)}</p>
      <div style="white-space:pre-wrap">${escapeHtml(message)}</div>
    </div>
  `;

  const replyTo = /.+@.+\..+/.test(contact) ? contact : undefined;

  const { error } = await resend.emails.send({
    from: FROM,
    to: TO,
    subject,
    text,
    html,
    replyTo,
  });

  if (error) {
    return NextResponse.json({ error: "Failed to send." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
