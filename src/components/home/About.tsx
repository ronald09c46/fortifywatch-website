import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2">
        <div>
          <p className="font-display text-sm font-bold uppercase tracking-widest text-primary">
            About FortifyWatch
          </p>

          <h2 className="mt-4 font-display text-4xl font-bold text-foreground">
            Discipline and vigilance, applied to your operations
          </h2>

          <p className="mt-8 leading-8 text-muted-foreground">
            FortifyWatch Security Agency is a licensed Philippine private
            security agency built on a simple principle: security is only as
            strong as the people who deliver it. We screen, train, and
            supervise every officer we deploy.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-6">
              <p className="font-display text-xs font-bold uppercase tracking-widest text-primary">
                Mission
              </p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                To provide highly trained, disciplined, and professional
                security personnel committed to protecting people,
                businesses, and assets through integrity, vigilance, and
                excellence.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <p className="font-display text-xs font-bold uppercase tracking-widest text-primary">
                Vision
              </p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                To become one of the most trusted and respected private
                security agencies in the Philippines by delivering
                world-class security solutions.
              </p>
            </div>
          </div>

          <Link
            href="/about"
            className="mt-10 inline-block rounded-lg bg-secondary px-8 py-4 font-semibold text-foreground transition hover:bg-secondary/70"
          >
            More About Us
          </Link>
        </div>

        <div className="relative h-[450px] overflow-hidden rounded-2xl border border-border">
          <Image
            src="/images/office/about-office.jpg"
            alt="FortifyWatch Security Agency office"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
