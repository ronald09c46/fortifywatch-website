import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import CTA from "@/components/home/CTA";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { StaggerGrid, StaggerItem } from "@/components/ui/StaggerGrid";
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
          <AnimatedSection className="mx-auto max-w-2xl text-center">
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
          </AnimatedSection>

          <StaggerGrid className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {allServices.map((service) => (
              <StaggerItem key={service.slug}>
                <div
                  id={service.slug}
                  className="group h-full scroll-mt-32 rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[var(--shadow-gold)]"
                >
                  <div className="grid size-12 place-items-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-primary/20">
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
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                  >
                    Learn More
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      <CTA />
    </>
  );
}
