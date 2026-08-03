import Link from "next/link";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { faqItems } from "@/data/faq";

export default function FAQ() {
  return (
    <section className="bg-navy-deep py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <p className="font-display text-sm font-bold uppercase tracking-widest text-primary">
            FAQ
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold text-foreground">
            Frequently asked questions
          </h2>
        </div>

        <div className="mt-12">
          <FAQAccordion items={faqItems.slice(0, 4)} />
        </div>

        <div className="mt-8 text-center">
          <Link href="/faq" className="font-semibold text-primary hover:underline">
            See all questions &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
