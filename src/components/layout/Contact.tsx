"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { allServices } from "@/data/services";

// TODO: this form is not yet wired to a backend. Submissions currently only
// show a local confirmation message and are not emailed or stored anywhere.
// Wire it to an API route (e.g. send to fortifywatch@gmail.com) before launch.
export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="bg-background py-24">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl font-bold text-foreground">Inquiry Form</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            All fields marked with an asterisk are required.
          </p>

          {submitted ? (
            <div className="mt-8 rounded-xl border border-primary/40 bg-card p-6 text-sm text-foreground">
              Thank you — your inquiry has been noted. Our account officers
              respond within one business day.
            </div>
          ) : (
            <form
              className="mt-8 space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  Name *
                </label>
                <input
                  required
                  type="text"
                  className="mt-2 w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  Company
                </label>
                <input
                  type="text"
                  className="mt-2 w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
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
                    className="mt-2 w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Phone *
                  </label>
                  <input
                    required
                    type="tel"
                    className="mt-2 w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  Security Requirement *
                </label>
                <select
                  required
                  defaultValue=""
                  className="mt-2 w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
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
                  className="mt-2 w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-primary px-8 py-4 font-bold text-primary-foreground transition hover:opacity-90 sm:w-auto"
              >
                Send Inquiry
              </button>
            </form>
          )}
        </div>

        <div>
          <h2 className="font-display text-2xl font-bold text-foreground">Business Information</h2>
          <div className="mt-8 space-y-5 rounded-2xl border border-border bg-card p-8">
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
              <a href="mailto:fortifywatch@gmail.com" className="hover:text-primary">
                fortifywatch@gmail.com
              </a>
            </div>
            <div className="flex gap-3 text-sm text-muted-foreground">
              <Clock size={18} className="mt-0.5 shrink-0 text-primary" />
              <span>Office hours 8:00 AM – 5:00 PM &middot; Operations 24/7</span>
            </div>
          </div>

          {/* TODO: replace with a real embedded Google Map for the Molino IV, Bacoor City office once available */}
          <div className="mt-6 grid h-56 place-items-center rounded-2xl border border-dashed border-border text-center text-sm text-muted-foreground">
            Google Map Placeholder
            <br />
            Molino IV, Bacoor City, Cavite — embed your Google Maps location here.
          </div>
        </div>
      </div>
    </section>
  );
}
