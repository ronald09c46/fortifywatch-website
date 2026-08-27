"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, Camera, Users, Clock } from "lucide-react";
import StatCounter from "@/components/ui/StatCounter";

const badges = [
  { label: "Licensed Private Security Agency", icon: ShieldCheck },
  { label: "Professional Security Personnel", icon: Users },
  { label: "24/7 Security Operations", icon: Clock },
  { label: "Highly Trained Guards", icon: ShieldCheck },
  { label: "Government Compliant", icon: Camera },
];

// TODO: Replace with actual FortifyWatch statistics before launch.
const stats = [
  { value: "50+", label: "Guards Deployed" },
  { value: "10+", label: "Clients Served" },
  { value: "97%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.12 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 12, ease: "easeOut" }}
      >
        <Image
          src="/images/hero/hero2.jpg"
          alt="FortifyWatch Security Agency office and personnel"
          fill
          priority
          className="object-cover blur-[3px]"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/50" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-16 text-center">
        <motion.p
          className="font-display text-sm font-bold uppercase tracking-[0.3em] text-primary"
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          Protecting What Matters Most
        </motion.p>

        <motion.h1
          className="mt-6 font-display text-5xl font-extrabold leading-tight text-foreground sm:text-6xl"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.1}
        >
          Providing You The Best In Private Security!
        </motion.h1>

        <motion.p
          className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.2}
        >
          Licensed, Reliable, and Dedicated to Protecting Your Business,
          People, and Assets.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-4"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.3}
        >
          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-primary px-8 py-4 font-bold text-primary-foreground shadow-[var(--shadow-gold)] transition-shadow hover:shadow-lg"
            >
              Request a Consultation
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/contact"
              className="inline-block rounded-lg border border-border px-8 py-4 font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.4}
        >
          {badges.map((badge) => (
            <span
              key={badge.label}
              className="group flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
            >
              <badge.icon
                size={14}
                className="text-primary transition-transform duration-300 group-hover:scale-125"
              />
              {badge.label}
            </span>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-2 gap-8 border-t border-border/60 pt-10 text-center sm:grid-cols-4"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.5}
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
              <StatCounter
                value={stat.value}
                className="font-display text-4xl font-extrabold text-primary"
              />

              <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
