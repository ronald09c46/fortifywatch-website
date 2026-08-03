import {
  ShieldCheck,
  Building2,
  Factory,
  Home,
  UserCheck,
  PartyPopper,
  ClipboardCheck,
  Camera,
  Briefcase,
  Siren,
  KeyRound,
  Footprints,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const allServices: Service[] = [
  {
    slug: "security-guard-services",
    title: "Security Guard Services",
    description:
      "Licensed, uniformed guards deployed with strict post orders, daily inspections, and supervised shift turnovers.",
    icon: ShieldCheck,
  },
  {
    slug: "commercial-security",
    title: "Commercial Security",
    description:
      "Front-of-house protection for offices, malls, and mixed-use developments — visitor screening to lobby control.",
    icon: Building2,
  },
  {
    slug: "industrial-security",
    title: "Industrial Security",
    description:
      "Warehouse, plant, and logistics coverage with gate control, truck inspection, and inventory loss prevention.",
    icon: Factory,
  },
  {
    slug: "residential-security",
    title: "Residential Security",
    description:
      "Subdivision and condominium security with roving patrols, visitor logging, and vehicle verification.",
    icon: Home,
  },
  {
    slug: "vip-executive-protection",
    title: "VIP & Executive Protection",
    description:
      "Discreet close-protection details, secure transport, and advance route planning for principals and families.",
    icon: UserCheck,
  },
  {
    slug: "event-security",
    title: "Event Security",
    description:
      "Crowd management, accreditation, bag inspection, and emergency egress planning for events of any scale.",
    icon: PartyPopper,
  },
  {
    slug: "security-survey-risk-assessment",
    title: "Security Survey & Risk Assessment",
    description:
      "On-site vulnerability surveys with a written threat profile, gap analysis, and prioritised countermeasures.",
    icon: ClipboardCheck,
  },
  {
    slug: "cctv-supply-installation",
    title: "CCTV Supply & Installation",
    description:
      "Camera design, supply, installation, and maintenance — with recording retention aligned to your policy.",
    icon: Camera,
  },
  {
    slug: "security-consultancy",
    title: "Security Consultancy",
    description:
      "Policy drafting, manpower planning, and security manual development for management and compliance teams.",
    icon: Briefcase,
  },
  {
    slug: "emergency-response",
    title: "Emergency Response",
    description:
      "Documented escalation protocols, incident reporting, and coordination with police, fire, and medical units.",
    icon: Siren,
  },
  {
    slug: "access-control",
    title: "Access Control",
    description:
      "Credentialing, visitor management, and entry-point discipline supported by digital logs and audits.",
    icon: KeyRound,
  },
  {
    slug: "patrol-services",
    title: "Patrol Services",
    description:
      "Randomised roving patrols with checkpoint verification and timestamped tour reports for every shift.",
    icon: Footprints,
  },
];
