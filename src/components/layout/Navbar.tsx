"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone, Mail } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Careers", href: "/careers" },
  { label: "News", href: "/news" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="hidden border-b border-border/60 bg-navy-deep py-2 text-xs text-muted-foreground lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6">
          <p className="tracking-[0.18em] uppercase">
            Licensed Private Security Agency &middot; Bacoor City, Cavite
          </p>
          <div className="flex items-center gap-5">
            <a href="tel:0464025152" className="flex items-center gap-1.5 hover:text-primary">
              <Phone size={12} /> (046) 402-5152
            </a>
            <a href="mailto:fortifywatch@gmail.com" className="flex items-center gap-1.5 hover:text-primary">
              <Mail size={12} /> fortifywatch@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="border-b border-border/60 bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-6">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <Image
              src="/images/logo/logo.png"
              alt="FortifyWatch Security Agency"
              width={40}
              height={40}
              className="size-10 shrink-0"
            />
            <span className="truncate font-display text-lg font-bold tracking-tight text-foreground">
              FORTIFYWATCH
              <span className="block text-[10px] font-semibold tracking-[0.25em] text-primary">
                SECURITY AGENCY
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition hover:opacity-90"
            >
              Request a Quote
            </Link>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="text-foreground lg:hidden"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {open && (
          <nav className="border-t border-border/60 bg-background px-5 py-4 lg:hidden">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-sm font-medium text-muted-foreground hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="inline-block rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground"
                >
                  Request a Quote
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
