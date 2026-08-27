import Link from "next/link";
import { Target, Telescope } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { StaggerGrid, StaggerItem } from "@/components/ui/StaggerGrid";

export default function About() {
  return (
    <section className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        {/* Header & Description */}
        <AnimatedSection className="mx-auto max-w-4xl text-center">
          <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary sm:text-sm">
            About FortifyWatch
          </p>

          <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-foreground sm:mt-4 sm:text-4xl lg:text-5xl">
            Discipline And Vigilance, Applied To Your Operations
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-muted-foreground sm:mt-8 sm:text-base sm:leading-8 lg:text-lg">
            FortifyWatch Security Agency is a licensed Philippine private
            security agency built on a simple principle: security is only as
            strong as the people who deliver it. We screen, train, and
            supervise every officer we deploy.
          </p>
        </AnimatedSection>

        {/* Mission & Vision */}
        <StaggerGrid className="mx-auto mt-10 grid w-full max-w-5xl gap-5 sm:mt-12 sm:gap-6 md:grid-cols-2">
          <StaggerItem>
            <div className="group flex h-full flex-col items-center rounded-xl border border-border bg-card p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-card)] sm:p-6 lg:p-8">
              <div className="grid size-12 place-items-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-primary/20">
                <Target size={22} className="text-primary" />
              </div>

              <p className="mt-4 font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Mission
              </p>

              <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                FortifyWatch Security Agency is committed to:
              </p>

              <ul className="mt-3 w-full space-y-2 text-left text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                <li className="flex gap-2">
                  <span className="text-primary">&bull;</span>
                  Providing reliable and professional security services
                  tailored to our clients&apos; needs.
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">&bull;</span>
                  Protecting lives, properties, and business operations
                  through effective security management.
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">&bull;</span>
                  Upholding the highest standards of discipline, integrity,
                  and accountability.
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">&bull;</span>
                  Building lasting partnerships through quality service and
                  continuous improvement.
                </li>
              </ul>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="group flex h-full flex-col items-center justify-center rounded-xl border border-border bg-card p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-card)] sm:p-6 lg:p-8">
              <div className="grid size-12 place-items-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-primary/20">
                <Telescope size={22} className="text-primary" />
              </div>

              <p className="mt-4 font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Vision
              </p>

              <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                To be one of the most trusted and respected private security
                agencies in the Philippines by delivering professional,
                dependable, and client-focused security services.
              </p>
            </div>
          </StaggerItem>
        </StaggerGrid>

        {/* Button */}
        <AnimatedSection className="mt-8 text-center sm:mt-10">
          <Link
            href="/about"
            className="inline-flex w-full items-center justify-center rounded-lg bg-secondary px-6 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary/70 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
          >
            More About Us
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
