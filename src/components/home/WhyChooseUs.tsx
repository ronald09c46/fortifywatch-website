import {
  ShieldCheck,
  GraduationCap,
  Zap,
  Clock,
  FileCheck,
  Headset,
  Landmark,
  Users,
} from "lucide-react";
import FeatureCard from "@/components/ui/FeatureCard";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { StaggerGrid, StaggerItem } from "@/components/ui/StaggerGrid";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Licensed Security Agency",
    description: "Operating under Philippine private security regulations.",
  },
  {
    icon: GraduationCap,
    title: "Professionally Trained Guards",
    description: "Pre-deployment and refresher training on every account.",
  },
  {
    icon: Zap,
    title: "Rapid Response",
    description: "Escalation within minutes through supervised chain of command.",
  },
  {
    icon: Clock,
    title: "24/7 Operations",
    description: "Round-the-clock coordination and shift monitoring.",
  },
  {
    icon: FileCheck,
    title: "Customized Security Plans",
    description: "Post orders written for your site, not a template.",
  },
  {
    icon: Headset,
    title: "Excellent Customer Service",
    description: "A named account officer you can reach directly.",
  },
  {
    icon: Landmark,
    title: "Government Compliant",
    description: "Statutory benefits, licensing, and documentation in order.",
  },
  {
    icon: Users,
    title: "Reliable Management Team",
    description: "Experienced supervisors and detachment commanders.",
  },
];

export default function WhyChooseUs({
  title = "Corporate-Grade Security, Without The Bureaucracy",
}: {
  title?: string;
}) {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <p className="font-display text-sm font-bold uppercase tracking-widest text-primary">
            Why Choose FortifyWatch
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold text-foreground">
            {title}
          </h2>
        </AnimatedSection>

        <StaggerGrid className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r) => (
            <StaggerItem key={r.title}>
              <FeatureCard icon={r.icon} title={r.title} description={r.description} />
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
