"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, CheckCircle2, AlertCircle } from "lucide-react";
import { allServices } from "@/data/services";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Turnstile from "@/components/ui/Turnstile";

const inputClass =
  "mt-2 w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/25";

const initialForm = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [honeypot, setHoneypot] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  function updateField<K extends keyof typeof initialForm>(
    field: K,
    value: (typeof initialForm)[K]
  ) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!turnstileToken) {
      setStatus("error");
      setErrorMessage("Please complete the CAPTCHA verification before submitting.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, turnstileToken, honeypot }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <section className="bg-background py-24">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
        <AnimatedSection>
          <h2 className="font-display text-2xl font-bold text-foreground">Inquiry Form</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            All fields marked with an asterisk are required.
          </p>

          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex items-start gap-3 rounded-xl border border-primary/40 bg-card p-6 text-sm text-foreground"
            >
              <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-primary" />
              <span>
                Thank you — your inquiry has been noted. Our account officers
                respond within one business day. A confirmation email is on its
                way to your inbox.
              </span>
            </motion.div>
          ) : (
            <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
              {/* Honeypot field — hidden from real users, catches basic bots */}
              <input
                type="text"
                name="company_website"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  Name *
                </label>
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  Company
                </label>
                <input
                  type="text"
                  value={form.company}
                  onChange={(e) => updateField("company", e.target.value)}
                  className={inputClass}
                />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Email *
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Phone *
                  </label>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    className={inputClass}
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  Security Requirement *
                </label>
                <select
                  required
                  value={form.service}
                  onChange={(e) => updateField("service", e.target.value)}
                  className={inputClass}
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {allServices.map((s) => (
                    <option key={s.slug} value={s.slug}>
                      {s.title}
                    </option>
                  ))}
                  <option value="other">Other / Multiple Services</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => updateField("message", e.target.value)}
                  className={inputClass}
                />
              </div>

              <Turnstile
                onVerify={setTurnstileToken}
                onExpire={() => setTurnstileToken("")}
              />

              {status === "error" && (
                <div className="flex items-start gap-2 rounded-lg border border-red-500/40 bg-red-500/10 p-3 text-sm text-red-500">
                  <AlertCircle size={16} className="mt-0.5 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full rounded-lg bg-primary px-8 py-4 font-bold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90 hover:shadow-[var(--shadow-gold)] active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 sm:w-auto"
              >
                {status === "submitting" ? "Sending..." : "Send Inquiry"}
              </button>
            </form>
          )}
        </AnimatedSection>

        <AnimatedSection>
          <h2 className="font-display text-2xl font-bold text-foreground">Business Information</h2>
          <div className="mt-8 space-y-5 rounded-2xl border border-border bg-card p-8 transition-shadow duration-300 hover:shadow-[var(--shadow-card)]">
            <p className="font-display font-bold text-foreground">FortifyWatch Security Agency</p>
            <div className="flex gap-3 text-sm text-muted-foreground">
              <MapPin size={18} className="mt-0.5 shrink-0 text-primary" />
              <span>
                B18 L3 PH2 Sapphire Street
                <br />
                Maryhomes Subdivision, Molino IV
                <br />
                Bacoor City, Cavite, Philippines
              </span>
            </div>
            <div className="flex gap-3 text-sm text-muted-foreground">
              <Phone size={18} className="mt-0.5 shrink-0 text-primary" />
              <span>
                (046) 402-5152
                <br />
                +63 917 110 4556
                <br />
                +63 930 682 2003
              </span>
            </div>
            <div className="flex gap-3 text-sm text-muted-foreground">
              <Mail size={18} className="mt-0.5 shrink-0 text-primary" />
              <a href="mailto:fortifywatch@gmail.com" className="transition-colors hover:text-primary">
                fortifywatch@gmail.com
              </a>
            </div>
            <div className="flex gap-3 text-sm text-muted-foreground">
              <Clock size={18} className="mt-0.5 shrink-0 text-primary" />
              <span>Office hours 8:00 AM – 5:00 PM &middot; Operations 24/7</span>
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-border">
            <iframe
              title="FortifyWatch Security Agency on Google Maps"
              src="https://maps.google.com/maps?q=14.3724312,120.9756305&z=16&hl=en&output=embed"
              className="block h-72 w-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <a
            href="https://www.google.com/maps/place/FORTIFYWATCH+SECURITY+AGENCY/@14.3724364,120.9730556,766m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3397d3ed4413e267:0x4dbc2d3bd7f6601c!8m2!3d14.3724312!4d120.9756305!16s%2Fg%2F11zcsjp5pf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
          >
            <MapPin size={16} />
            Open in Google Maps
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
