import Link from "next/link";
import { Phone } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function CTA() {
  return (
    <section className="bg-background py-24">
      <AnimatedSection
        className="mx-auto max-w-4xl overflow-hidden rounded-3xl px-8 py-16 text-center transition-shadow duration-500 hover:shadow-[var(--shadow-gold)]"
        style={{ background: "var(--gradient-navy)" }}
      >
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
            className="rounded-lg bg-primary px-8 py-4 font-bold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
          >
            Request a Quote
          </Link>
          <a
            href="tel:+639171104556"
            className="group flex items-center gap-2 rounded-lg border border-border px-8 py-4 font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary"
          >
            <Phone size={18} className="transition-transform duration-300 group-hover:rotate-12" />
            Call +63 917 110 4556
          </a>
        </div>
      </AnimatedSection>
    </section>
  );
}
