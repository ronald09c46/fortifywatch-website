import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/ui/PageHeader";
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
      <PageHeader
        kicker="About Us"
        title="A licensed agency built on discipline"
        description="FortifyWatch Security Agency protects people, businesses, and assets across the Philippines with screened, trained, and closely supervised security personnel."
      />

      <section className="bg-background py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2">
          <div className="relative h-[420px] overflow-hidden rounded-2xl border border-border md:order-2">
            <Image
              src="/images/office/office-interior.jpg"
              alt="FortifyWatch Security Agency staff"
              fill
              className="object-cover"
            />
          </div>

          <div className="md:order-1">
            <p className="font-display text-sm font-bold uppercase tracking-widest text-primary">
              Company Overview
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-foreground">
              Security delivered by people you can rely on
            </h2>

            <p className="mt-6 leading-7 text-muted-foreground">
              Headquartered in Bacoor City, Cavite, FortifyWatch serves
              corporate offices, government agencies, schools, hospitals,
              logistics facilities, warehouses, industrial sites, and
              residential communities.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              Every account begins with a written security survey. From that
              survey we build post orders, patrol routes, and escalation
              protocols specific to your facility — never a generic template.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              Our supervisors conduct scheduled and unannounced inspections,
              and management remains directly reachable so issues are
              resolved at the source rather than escalated through layers of
              administration.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-6">
                <p className="font-display text-xs font-bold uppercase tracking-widest text-primary">
                  Our Mission
                </p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  To provide highly trained, disciplined, and professional
                  security personnel committed to protecting people,
                  businesses, and assets through integrity, vigilance, and
                  excellence.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <p className="font-display text-xs font-bold uppercase tracking-widest text-primary">
                  Our Vision
                </p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  To become one of the most trusted and respected private
                  security agencies in the Philippines by delivering
                  world-class security solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CoreValues />
      <Process kicker="How We Work" title="Our engagement timeline" />
      <WhyChooseUs title="Eight reasons clients stay with us" />
      <CTA />
    </>
  );
}
