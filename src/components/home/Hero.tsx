import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Camera, Users, Clock } from "lucide-react";

const badges = [
  { label: "Licensed Private Security Agency", icon: ShieldCheck },
  { label: "Professional Security Personnel", icon: Users },
  { label: "24/7 Security Operations", icon: Clock },
  { label: "Highly Trained Guards", icon: ShieldCheck },
  { label: "Government Compliant", icon: Camera },
];

// TODO: replace placeholder figures with FortifyWatch's real deployment numbers before launch.
const stats = [
  { value: "50+", label: "Guards Deployed" },
  { value: "10+", label: "Clients Served" },
  { value: "97%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support" },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center pt-32">
      <Image
        src="/images/hero/hero-office.jpg"
        alt="FortifyWatch Security Agency office and personnel"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/50" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        <p className="font-display text-sm font-bold uppercase tracking-[0.3em] text-primary">
          Protecting What Matters Most
        </p>

        <h1 className="mt-6 max-w-3xl font-display text-5xl font-extrabold leading-tight text-foreground sm:text-6xl">
          Professional Security Services You Can Trust
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
          Licensed, Reliable, and Dedicated to Protecting Your Business,
          People, and Assets.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="rounded-lg bg-primary px-8 py-4 font-bold text-primary-foreground transition hover:opacity-90"
          >
            Request a Quote
          </Link>
          <Link
            href="/contact"
            className="rounded-lg border border-border px-8 py-4 font-semibold text-foreground transition hover:bg-secondary"
          >
            Contact Us
          </Link>
        </div>

        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3">
          {badges.map((b) => (
            <span
              key={b.label}
              className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground"
            >
              <b.icon size={14} className="text-primary" />
              {b.label}
            </span>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 border-t border-border/60 pt-10 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-4xl font-extrabold text-primary">
                {s.value}
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
