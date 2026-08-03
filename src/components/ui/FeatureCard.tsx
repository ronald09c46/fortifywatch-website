import type { LucideIcon } from "lucide-react";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export default function FeatureCard({ title, description, icon: Icon }: FeatureCardProps) {
  return (
    <div className="flex gap-4 rounded-xl border border-border bg-card p-6">
      <div className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary/10">
        <Icon size={20} className="text-primary" />
      </div>
      <div>
        <h3 className="font-display text-base font-bold text-foreground">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}
