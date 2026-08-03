import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTA from "@/components/home/CTA";
import { faqItems } from "@/data/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Questions clients ask FortifyWatch Security Agency before deployment.",
};

export default function FAQPage() {
  return (
    <>
      <PageHeader
        kicker="FAQ"
        title="Questions clients ask before deployment"
        description="If your question isn't covered here, our account officers respond to inquiries within one business day."
      />

      <section className="bg-background py-24">
        <div className="mx-auto max-w-3xl px-6">
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      <CTA />
    </>
  );
}
