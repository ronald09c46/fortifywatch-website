import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Contact from "@/components/layout/Contact";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Tell us about your site and coverage requirements. FortifyWatch account officers respond within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        kicker="Contact Us"
        title="Request a quote or free security survey"
        description="Tell us about your site and coverage requirements. Our account officers respond within one business day."
      />
      <Contact />
    </>
  );
}
