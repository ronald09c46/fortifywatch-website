import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import CTA from "@/components/home/CTA";
import { allServices } from "@/data/services";

export const metadata: Metadata = {
  title: "Security Services",
  description:
    "Manned guarding, security technology, and advisory services designed around your site, your risk profile, and your compliance requirements.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        kicker="Our Services"
        title="Twelve security capabilities, one accountable partner"
        description="Manned guarding, security technology, and advisory services designed around your site, your risk profile, and your compliance requirements."
      />

      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-display text-sm font-bold uppercase tracking-widest text-primary">
              Complete Coverage
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-foreground">
              Choose a single service or a fully integrated program
            </h2>
            <p className="mt-4 text-muted-foreground">
              Each engagement includes a written security survey, documented
              post orders, and supervised deployment.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {allServices.map((service) => (
              <div
                key={service.slug}
                id={service.slug}
                className="scroll-mt-32 rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]"
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
                <a
                  href="/contact"
                  className="mt-5 inline-block text-sm font-semibold text-primary hover:underline"
                >
                  Learn More &rarr;
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
