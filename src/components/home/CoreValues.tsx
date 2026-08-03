import { ShieldCheck, Award, Eye, ListChecks, Handshake, Sparkles } from "lucide-react";
import Card from "@/components/ui/Card";

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description: "We do what is right, especially when unobserved.",
  },
  {
    icon: Award,
    title: "Professionalism",
    description: "Bearing, grooming, and conduct held to one standard.",
  },
  {
    icon: Eye,
    title: "Vigilance",
    description: "Alert posture and proactive observation on every post.",
  },
  {
    icon: ListChecks,
    title: "Discipline",
    description: "Post orders followed precisely, shift after shift.",
  },
  {
    icon: Handshake,
    title: "Commitment",
    description: "Long-term partnership, not transactional manpower.",
  },
  {
    icon: Sparkles,
    title: "Service Excellence",
    description: "Courteous, client-facing security that reflects your brand.",
  },
];

export default function CoreValues() {
  return (
    <section className="bg-navy-deep py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-display text-sm font-bold uppercase tracking-widest text-primary">
            Core Values
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold text-foreground">
            The standard behind every deployment
          </h2>
          <p className="mt-5 text-muted-foreground">
            Six commitments that shape how our officers carry themselves on
            your premises.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <Card key={v.title} icon={v.icon} title={v.title} description={v.description} />
          ))}
        </div>
      </div>
    </section>
  );
}
