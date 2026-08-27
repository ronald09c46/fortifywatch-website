import AnimatedSection from "@/components/ui/AnimatedSection";
import { StaggerGrid, StaggerItem } from "@/components/ui/StaggerGrid";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description: "We meet your team to understand operations, risk appetite, and coverage needs.",
  },
  {
    number: "02",
    title: "Security Assessment",
    description: "An on-site survey documents vulnerabilities, access points, and manpower requirements.",
  },
  {
    number: "03",
    title: "Proposal",
    description: "You receive a written deployment plan, post orders, and transparent costing.",
  },
  {
    number: "04",
    title: "Deployment",
    description: "Screened and trained personnel are posted with complete equipment and briefing.",
  },
  {
    number: "05",
    title: "Monitoring",
    description: "Supervisors conduct inspections and submit incident and tour reports.",
  },
  {
    number: "06",
    title: "Continuous Improvement",
    description: "Periodic reviews refine coverage as your operations evolve.",
  },
];

export default function Process({
  kicker = "Our Security Process",
  title = "Six steps from first call to continuous improvement",
}: {
  kicker?: string;
  title?: string;
}) {
  return (
    <section className="bg-navy-deep py-24">
      <div className="mx-auto max-w-7xl px-6">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <p className="font-display text-sm font-bold uppercase tracking-widest text-primary">
            {kicker}
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold text-foreground">
            {title}
          </h2>
        </AnimatedSection>

        <StaggerGrid className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <StaggerItem key={step.number}>
              <div className="group h-full rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[var(--shadow-card)]">
                <span className="font-display text-3xl font-extrabold text-primary/50 transition-colors duration-300 group-hover:text-primary">
                  {step.number}
                </span>
                <h3 className="mt-3 font-display text-lg font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
