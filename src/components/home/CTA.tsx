import Link from "next/link";
import { Phone } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-4xl rounded-3xl px-8 py-16 text-center" style={{ background: "var(--gradient-navy)" }}>
        <p className="font-display text-sm font-bold uppercase tracking-widest text-primary">
          Ready When You Are
        </p>
        <h2 className="mt-4 font-display text-4xl font-bold text-foreground">
          Let&apos;s build a security plan around your site
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
          Request a free security survey and receive a written deployment
          proposal with transparent costing.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="rounded-lg bg-primary px-8 py-4 font-bold text-primary-foreground transition hover:opacity-90"
          >
            Request a Quote
          </Link>
          <a
            href="tel:+639171104556"
            className="flex items-center gap-2 rounded-lg border border-border px-8 py-4 font-semibold text-foreground transition hover:bg-secondary"
          >
            <Phone size={18} /> Call +63 917 110 4556
          </a>
        </div>
      </div>
    </section>
  );
}
