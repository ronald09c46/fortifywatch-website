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
      "Their guards are warm with our diners but sharp at the door. Peak hours and late closings run smoothly, and our staff feel safer locking up at night.",
    name: "Restaurant Manager",
    role: "Restaurant, Bacoor City",
  },
  {
    quote:
      "Handling a busy gaming floor and cash areas takes discipline. FortifyWatch guards keep crowd control calm, follow our cash escort procedures, and report incidents on time.",
    name: "Branch Manager",
    role: "E-Bingo Gaming Site, Metro Manila",
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
