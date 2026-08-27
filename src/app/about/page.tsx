import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import AnimatedCard from "@/components/ui/AnimatedCard";
import CoreValues from "@/components/home/CoreValues";
import Process from "@/components/home/Process";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "FortifyWatch Security Agency protects people, businesses, and assets across the Philippines with screened, trained, and closely supervised security personnel.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <PageHeader
        kicker="About Us"
        title="A licensed agency built on discipline"
        description="FortifyWatch Security Agency protects people, businesses, and assets across the Philippines with screened, trained, and closely supervised security personnel."
      />

      {/* Company Overview */}
      <section className="bg-background py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-4xl text-center">
            <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary sm:text-sm">
              Company Overview
            </p>

            <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-foreground sm:mt-4 sm:text-4xl">
              Security delivered by people you can rely on
            </h2>

            <div className="mt-6 space-y-4">
              <p className="text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
                Headquartered in Bacoor City, Cavite, FortifyWatch serves
                corporate offices, government agencies, schools, hospitals,
                logistics facilities, warehouses, industrial sites, and
                residential communities.
              </p>

              <p className="text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
                Every account begins with a written security survey. From that
                survey we build post orders, patrol routes, and escalation
                protocols specific to your facility — never a generic template.
              </p>

              <p className="text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
                Our supervisors conduct scheduled and unannounced inspections,
                and management remains directly reachable so issues are
                resolved at the source rather than escalated through layers of
                administration.
              </p>
            </div>
          </AnimatedSection>

          {/* Mission & Vision */}
          <div className="mx-auto mt-10 grid max-w-5xl gap-5 sm:mt-12 sm:gap-6 md:grid-cols-2">
            <AnimatedCard direction="left">
              <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Our Mission
              </p>

              <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                To provide highly trained, disciplined, and professional
                security personnel committed to protecting people, businesses,
                and assets through integrity, vigilance, and excellence.
              </p>
            </AnimatedCard>

            <AnimatedCard direction="right">
              <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Our Vision
              </p>

              <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                To become one of the most trusted and respected private
                security agencies in the Philippines by delivering
                world-class security solutions.
              </p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <AnimatedSection>
        <CoreValues />
      </AnimatedSection>

      {/* Process */}
      <AnimatedSection>
        <Process
          kicker="How We Work"
          title="Our engagement timeline"
        />
      </AnimatedSection>

      {/* Why Choose Us */}
      <AnimatedSection>
        <WhyChooseUs title="Eight reasons clients stay with us" />
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection>
        <CTA />
      </AnimatedSection>
    </>
  );
}