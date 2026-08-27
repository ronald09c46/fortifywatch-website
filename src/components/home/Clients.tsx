import AnimatedSection from "@/components/ui/AnimatedSection";
import { StaggerGrid, StaggerItem } from "@/components/ui/StaggerGrid";

const industries = [
  "Corporate Offices",
  "Government Agencies",
  "Schools & Universities",
  "Hospitals & Clinics",
  "Logistics & Warehousing",
  "Industrial Facilities",
  "Residential Communities",
  "Retail & Malls",
];

export default function Clients() {
  return (
    <section className="bg-navy-deep py-24">
      <div className="mx-auto max-w-7xl px-6">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <p className="font-display text-sm font-bold uppercase tracking-widest text-primary">
            Clients We Protect
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold text-foreground">
            Trusted across industries and communities
          </h2>
        </AnimatedSection>

        <StaggerGrid className="mt-12 flex flex-wrap justify-center gap-4">
          {industries.map((industry) => (
            <StaggerItem key={industry}>
              <span className="inline-block cursor-default rounded-full border border-border bg-card px-6 py-3 text-xs font-bold uppercase tracking-widest text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/10 hover:text-primary">
                {industry}
              </span>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
