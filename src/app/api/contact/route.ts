import { NextResponse } from "next/server";
import { Resend } from "resend";
import { allServices } from "@/data/services";

export const runtime = "nodejs";

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "fortifywatch@gmail.com";
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL || "FortifyWatch Website <onboarding@resend.dev>";

interface ContactPayload {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
  turnstileToken?: string;
  honeypot?: string;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string) {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  };
  return value.replace(/[&<>"']/g, (c) => map[c]);
}

function resolveServiceLabel(service: string) {
  if (service === "other") return "Other / Multiple Services";
  return allServices.find((s) => s.slug === service)?.title ?? service;
}

async function verifyTurnstile(token: string, ip: string | null) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return false;

  const body = new URLSearchParams();
  body.append("secret", secret);
  body.append("response", token);
  if (ip) body.append("remoteip", ip);

  const res = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    { method: "POST", body }
  );
  const data = await res.json();
  return data.success === true;
}

export async function POST(request: Request) {
  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, company, email, phone, service, message, turnstileToken, honeypot } =
    payload;

  // Honeypot field — real users never fill it. Report success without sending anything.
  if (honeypot) {
    return NextResponse.json({ success: true });
  }

  if (
    !name?.trim() ||
    !email?.trim() ||
    !phone?.trim() ||
    !service?.trim() ||
    !message?.trim()
  ) {
    return NextResponse.json(
      { error: "Please fill in all required fields." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  if (!turnstileToken) {
    return NextResponse.json(
      { error: "Please complete the CAPTCHA verification." },
      { status: 400 }
    );
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? null;
  const captchaOk = await verifyTurnstile(turnstileToken, ip);
  if (!captchaOk) {
    return NextResponse.json(
      { error: "CAPTCHA verification failed. Please try again." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured.");
    return NextResponse.json(
      { error: "Email service is not configured. Please contact us directly." },
      { status: 500 }
    );
  }
  const resend = new Resend(apiKey);

  const serviceLabel = resolveServiceLabel(service);

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New Inquiry from ${name}${company ? ` (${company})` : ""}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color:#0f172a;">New Website Inquiry</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Company:</strong> ${escapeHtml(company || "—")}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
          <p><strong>Security Requirement:</strong> ${escapeHtml(serviceLabel)}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
        </div>
      `,
    });

    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: "Thank You for Contacting FortifyWatch Security Agency",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color:#1e293b;">
          <h2 style="color:#0f172a;">Thank You for Contacting FortifyWatch</h2>
          <p>Dear ${escapeHtml(name)},</p>
          <p>
            Thank you for reaching out to FortifyWatch Security Agency regarding
            <strong>${escapeHtml(serviceLabel)}</strong>. We have received your inquiry
            and one of our account officers will respond within one business day.
          </p>
          <p>For urgent concerns, you may reach us directly:</p>
          <ul>
            <li>Phone: (046) 402-5152 / +63 917 110 4556</li>
            <li>Email: fortifywatch@gmail.com</li>
          </ul>
          <p>We appreciate your interest in our security services.</p>
          <p style="margin-top:24px;">
            Best regards,<br />
            <strong>FortifyWatch Security Agency</strong>
          </p>
        </div>
      `,
    });
  } catch (error) {
    console.error("Failed to send contact emails:", error);
    return NextResponse.json(
      { error: "Failed to send your inquiry. Please try again later." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
