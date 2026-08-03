import type { LucideIcon } from "lucide-react";

type CardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export default function Card({ title, description, icon: Icon }: CardProps) {
  return (
    <div className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
      <div className="grid size-12 place-items-center rounded-xl bg-primary/10">
        <Icon size={24} className="text-primary" />
      </div>

      <h3 className="mt-5 font-display text-xl font-bold text-foreground">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-muted-foreground">{description}</p>
    </div>
  );
}
