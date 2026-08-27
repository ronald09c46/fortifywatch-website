import Link from "next/link";
import FAQAccordion from "@/components/ui/FAQAccordion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { faqItems } from "@/data/faq";

export default function FAQ() {
  return (
    <section className="bg-navy-deep py-24">
      <div className="mx-auto max-w-3xl px-6">
        <AnimatedSection className="text-center">
          <p className="font-display text-sm font-bold uppercase tracking-widest text-primary">
            FAQ
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
        </AnimatedSection>

        <AnimatedSection className="mt-12">
          <FAQAccordion items={faqItems.slice(0, 4)} />
        </AnimatedSection>

        <div className="mt-8 text-center">
          <Link
            href="/faq"
            className="group inline-flex items-center gap-1.5 font-semibold text-primary"
          >
            See all questions
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
