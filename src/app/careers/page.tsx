import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "We are continuously hiring licensed security personnel for commercial, industrial, and residential posts in Cavite and Metro Manila.",
};

const positions = [
  {
    title: "Security Guard",
    tag: "Full-time · Various Posts",
    requirements: [
      "At least high school graduate",
      "Valid security license (LESP/SOSIA) or willing to process",
      "NBI and police clearance",
      "Physically and mentally fit",
    ],
  },
  {
    title: "Lady Guard",
    tag: "Full-time · Commercial & Retail Posts",
    requirements: [
      "At least high school graduate",
      "Valid security license or willing to process",
      "Customer-service oriented",
      "NBI and police clearance",
    ],
  },
  {
    title: "Security Supervisor",
    tag: "Full-time · Detachment Based",
    requirements: [
      "Minimum 2 years supervisory experience",
      "Strong report-writing skills",
      "Valid security license",
      "Willing to conduct night inspections",
    ],
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHeader
        kicker="Careers"
        title="Build A Disciplined Career In Security"
        description="We are continuously hiring licensed security personnel for commercial, industrial, and residential posts in Cavite and Metro Manila."
      />

      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="font-display text-sm font-bold uppercase tracking-widest text-primary">
              Open Positions
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-foreground">
              Current Hiring Requirements
            </h2>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {positions.map((p) => (
              <div key={p.title} className="rounded-2xl border border-border bg-card p-8">
                <h3 className="font-display text-xl font-bold text-foreground">{p.title}</h3>
                <p className="mt-1 text-xs font-bold uppercase tracking-widest text-primary">
                  {p.tag}
                </p>
                <ul className="mt-6 space-y-3">
                  {p.requirements.map((r) => (
                    <li key={r} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-primary" />
                      {r}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className="mt-8 inline-block rounded-lg bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition hover:opacity-90"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-2xl border border-border bg-card p-10 text-center">
            <h3 className="font-display text-xl font-bold text-foreground">How To Apply</h3>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Walk in at our office or send your r&eacute;sum&eacute; and
              clearances to{" "}
              <a href="mailto:fortifywatch@gmail.com" className="text-primary hover:underline">
                fortifywatch@gmail.com
              </a>
              . You may also call (046) 402-5152 or +63 917 110 4556 to
              schedule an interview.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <span className="rounded-lg border border-border px-6 py-3 text-sm font-semibold text-muted-foreground">
                Company Profile (PDF) — coming soon
              </span>
              <a
                href="/contact"
                className="rounded-lg bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition hover:opacity-90"
              >
                Submit an Inquiry
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
