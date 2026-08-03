import Link from "next/link";
import { allServices } from "@/data/services";

const featuredSlugs = [
  "commercial-security",
  "industrial-security",
  "residential-security",
  "vip-executive-protection",
  "security-guard-services",
  "cctv-supply-installation",
  "emergency-response",
  "patrol-services",
];

const featuredServices = allServices.filter((s) => featuredSlugs.includes(s.slug));

export default function Services() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-display text-sm font-bold uppercase tracking-widest text-primary">
            Our Services
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold text-foreground">
            Complete security coverage, one accountable partner
          </h2>
          <p className="mt-5 text-muted-foreground">
            From manned guarding to CCTV and consultancy — designed around
            your site and risk profile.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {featuredServices.map((service) => (
            <div
              key={service.slug}
              className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="grid size-12 place-items-center rounded-xl bg-primary/10">
                <service.icon size={22} className="text-primary" />
              </div>

              <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {service.description}
              </p>

              <Link
                href={`/services#${service.slug}`}
                className="mt-5 inline-block text-sm font-semibold text-primary hover:underline"
              >
                Learn More &rarr;
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-block rounded-lg bg-primary px-8 py-4 font-bold text-primary-foreground transition hover:opacity-90"
          >
            View All 12 Services
          </Link>
        </div>
      </div>
    </section>
  );
}
