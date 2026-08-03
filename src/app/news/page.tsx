import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "News & Updates",
  description:
    "Operational milestones, training programs, and service expansions across FortifyWatch's detachments.",
};

const posts = [
  {
    date: "June 2026",
    title: "FortifyWatch expands industrial detachment coverage in Cavite",
    body: "Additional supervisors and patrol units have been assigned to support growing warehouse and logistics accounts across the province.",
  },
  {
    date: "April 2026",
    title: "In-service refresher training completed by 200+ personnel",
    body: "Modules covered emergency response, customer service, incident documentation, and access control discipline.",
  },
  {
    date: "February 2026",
    title: "CCTV solutions division strengthened",
    body: "Expanded technical capability now allows integrated camera design and installation alongside manned guarding.",
  },
];

export default function NewsPage() {
  return (
    <>
      <PageHeader
        kicker="News & Updates"
        title="What's happening at FortifyWatch"
        description="Operational milestones, training programs, and service expansions across our detachments."
      />

      <section className="bg-background py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="space-y-6">
            {posts.map((post) => (
              <article key={post.title} className="rounded-2xl border border-border bg-card p-8">
                <p className="font-display text-xs font-bold uppercase tracking-widest text-primary">
                  {post.date}
                </p>
                <h2 className="mt-3 font-display text-xl font-bold text-foreground">
                  {post.title}
                </h2>
                <p className="mt-3 leading-7 text-muted-foreground">{post.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
