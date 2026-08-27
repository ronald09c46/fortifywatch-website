import { Quote } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { StaggerGrid, StaggerItem } from "@/components/ui/StaggerGrid";

const testimonials = [
  {
    quote:
      "FortifyWatch reorganised our gate procedures within the first month. Truck inspection is finally consistent and our shrinkage dropped noticeably.",
    name: "Operations Manager",
    role: "Logistics & Warehousing Group, Cavite",
  },
  {
    quote:
      "Their guards are courteous with residents but firm at the gate. Reports arrive on time and the detachment commander is genuinely reachable.",
    name: "HOA President",
    role: "Residential Community, Bacoor City",
  },
  {
    quote:
      "The security survey they prepared before deployment was more thorough than proposals from far larger agencies.",
    name: "Administrative Officer",
    role: "Private Medical Facility, Metro Manila",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <AnimatedSection>
          <StaggerGrid className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((t) => (
              <StaggerItem key={t.name + t.role}>
                <figure className="group flex h-full flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[var(--shadow-card)]">
                  <Quote
                    className="text-primary transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110"
                    size={28}
                  />
                  <blockquote className="mt-5 flex-1 text-sm leading-7 text-muted-foreground">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 border-t border-border pt-5">
                    <p className="font-display text-sm font-bold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </figcaption>
                </figure>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </AnimatedSection>
      </div>
    </section>
  );
}
