import { Quote } from "lucide-react";

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
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name + t.role}
              className="flex flex-col rounded-2xl border border-border bg-card p-8"
            >
              <Quote className="text-primary" size={28} />
              <blockquote className="mt-5 flex-1 text-sm leading-7 text-muted-foreground">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-5">
                <p className="font-display text-sm font-bold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
