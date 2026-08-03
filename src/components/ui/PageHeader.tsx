export default function PageHeader({
  kicker,
  title,
  description,
}: {
  kicker: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="border-b border-border/60 bg-navy-deep pb-16 pt-40">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="font-display text-sm font-bold uppercase tracking-widest text-primary">
          {kicker}
        </p>
        <h1 className="mt-4 font-display text-4xl font-extrabold text-foreground sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">{description}</p>
        )}
      </div>
    </section>
  );
}
