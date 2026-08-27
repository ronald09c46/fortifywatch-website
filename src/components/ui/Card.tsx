import type { LucideIcon } from "lucide-react";

type CardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export default function Card({ title, description, icon: Icon }: CardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[var(--shadow-gold)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: "var(--gradient-navy)" }}
      />

      <div className="relative">
        <div className="grid size-12 place-items-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-primary/20">
          <Icon size={24} className="text-primary transition-transform duration-300" />
        </div>

        <h3 className="mt-5 font-display text-xl font-bold text-foreground">
          {title}
        </h3>

        <p className="mt-3 leading-7 text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
