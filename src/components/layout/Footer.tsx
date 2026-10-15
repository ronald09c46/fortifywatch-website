import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  // Hidden while not hiring — uncomment to show the Careers link again.
  // { label: "Careers", href: "/careers" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const services = [
  { label: "Security Guard Services", href: "/services#security-guard-services" },
  { label: "Commercial Security", href: "/services#commercial-security" },
  { label: "Industrial Security", href: "/services#industrial-security" },
  { label: "Residential Security", href: "/services#residential-security" },
  { label: "VIP & Executive Protection", href: "/services#vip-executive-protection" },
  { label: "Event Security", href: "/services#event-security" },
  { label: "Security Survey & Risk Assessment", href: "/services#security-survey-risk-assessment" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/60 bg-navy-deep text-muted-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo/logo.png"
                alt="FortifyWatch Security Agency"
                width={40}
                height={40}
                className="size-10 object-contain"
              />
              <span className="font-display text-lg font-bold text-foreground">
                FORTIFYWATCH
                <span className="block text-[10px] font-semibold tracking-[0.25em] text-primary">
                  SECURITY AGENCY
                </span>
              </span>
            </div>
            <p className="mt-5 text-sm leading-6">
              Protecting What Matters Most. A licensed private security agency
              delivering disciplined, professional manpower and security
              technology across the Philippines.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-foreground">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="group inline-flex items-center gap-1 transition-colors hover:text-primary"
                  >
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      {l.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-foreground">
              Services
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {services.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="group inline-flex items-center gap-1 transition-colors hover:text-primary"
                  >
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      {l.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-foreground">
              Contact
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-primary" />
                <span>
                  B18 L3 PH2 Sapphire Street
                  <br />
                  Maryhomes Subdivision, Molino IV
                  <br />
                  Bacoor City, Cavite, Philippines
                </span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="mt-0.5 shrink-0 text-primary" />
                <span>
                  (046) 402-5152
                  <br />
                  +63 917 110 4556
                  <br />
                  +63 930 682 2003
                </span>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="mt-0.5 shrink-0 text-primary" />
                <a
                  href="mailto:fortifywatch@gmail.com"
                  className="group inline-flex items-center gap-1 transition-colors hover:text-primary"
                >
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    fortifywatch@gmail.com
                  </span>
                  <ArrowUpRight
                    size={13}
                    className="opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                  />
                </a>
              </li>
              <li>
                {/* TODO: link to the confirmed Company Profile PDF once a version is finalized (several drafts exist, all marked "PENDING CONFIRMATION") */}
                <span className="font-semibold text-primary/60">
                  Download Company Profile (coming soon)
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-6 text-xs leading-relaxed">
          <p>&copy; 2026 FortifyWatch Security Agency. All rights reserved.</p>
          <p className="mt-2 text-muted-foreground/70">
            Disclaimer: FortifyWatch Security Agency operates as a licensed
            private security agency in the Republic of the Philippines.
            Service availability, manpower deployment, and equipment
            provisioning are subject to a signed service agreement and
            completed security survey. Figures, client categories, and
            testimonials shown on this website are representative of our
            engagements and may be verified upon request.
          </p>
        </div>
      </div>
    </footer>
  );
}
