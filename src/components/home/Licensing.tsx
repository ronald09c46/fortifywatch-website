import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Landmark, GraduationCap, ClipboardCheck, Camera, FileCheck2, Mail } from "lucide-react";
import FeatureCard from "@/components/ui/FeatureCard";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { StaggerGrid, StaggerItem } from "@/components/ui/StaggerGrid";

// Certificate images are hidden from public view for now — set to true to
// show the grid again. Data stays intact either way.
const SHOW_CERTIFICATES = false;

const points = [
  {
    icon: ShieldCheck,
    title: "Licensed Private Security Agency",
    description: "Agency license and permits maintained and available on request.",
  },
  {
    icon: Landmark,
    title: "Government Compliant",
    description: "SSS, PhilHealth, Pag-IBIG, and DOLE requirements observed.",
  },
  {
    icon: GraduationCap,
    title: "Professionally Trained Personnel",
    description: "Basic security training plus in-service refreshers.",
  },
  {
    icon: ClipboardCheck,
    title: "Security Survey & Risk Assessment",
    description: "Formal written surveys signed by our assessment officer.",
  },
  {
    icon: Camera,
    title: "CCTV Solutions",
    description: "Supply, installation, and preventive maintenance capability.",
  },
  {
    icon: FileCheck2,
    title: "Documented Compliance",
    description: "Certificates and accreditation records on file for client audits.",
  },
];

const certificates = [
  { label: "DTI Certificate of Registration", href: "/images/certificates/dti-certificate.png", image: "/images/certificates/dti-certificate.png"},
  { label: "SSS Certificate", href: "/images/certificates/sss.jpg", image: "/images/certificates/sss.jpg" },
  { label: "PhilHealth Certificate", href: "/images/certificates/philhealth.jpg", image: "/images/certificates/philhealth.jpg" },
  { label: "Pag-IBIG Certificate", href: "/images/certificates/pagibig.png", image: "/images/certificates/pagibig.png" },
];

export default function Licensing() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <p className="font-display text-sm font-bold uppercase tracking-widest text-primary">
            Licensing & Certifications
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold text-foreground">
            Credentials Available For Client Verification
          </h2>
        </AnimatedSection>

        <StaggerGrid className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((p) => (
            <StaggerItem key={p.title}>
              <FeatureCard icon={p.icon} title={p.title} description={p.description} />
            </StaggerItem>
          ))}
        </StaggerGrid>

        {SHOW_CERTIFICATES ? (
          <StaggerGrid className="mt-14 grid grid-cols-2 gap-5 lg:grid-cols-4">
            {certificates.map((cert) => (
              <StaggerItem key={cert.label}>
                <a
                  href={cert.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-card)]"
                >
                  {cert.image ? (
                    <div className="relative h-32 w-full overflow-hidden rounded-lg">
                      <Image
                        src={cert.image}
                        alt={cert.label}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  ) : (
                    <div className="grid h-32 w-full place-items-center rounded-lg bg-secondary">
                      <FileCheck2 size={32} className="text-primary" />
                    </div>
                  )}
                  <span className="text-xs font-semibold text-muted-foreground transition-colors duration-300 group-hover:text-primary">
                    {cert.label}
                  </span>
                </a>
              </StaggerItem>
            ))}
          </StaggerGrid>
        ) : (
          <AnimatedSection className="mx-auto mt-14 max-w-2xl rounded-2xl border border-border bg-card p-8 text-center transition-shadow duration-300 hover:shadow-[var(--shadow-card)] sm:p-10">
            <div className="mx-auto grid size-12 place-items-center rounded-xl bg-primary/10">
              <Mail size={22} className="text-primary" />
            </div>

            <p className="mt-4 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
              Want to verify our licenses and certificates? Contact us and
              we&apos;ll send you our complete company profile together with
              our DTI, SSS, PhilHealth, and Pag-IBIG certificates.
            </p>

            <Link
              href="/contact"
              className="mt-6 inline-block rounded-lg bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90 hover:shadow-[var(--shadow-gold)]"
            >
              Contact Us
            </Link>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
}
