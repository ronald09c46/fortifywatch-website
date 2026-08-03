import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "FortifyWatch Security Agency | Professional Security Services PH",
    template: "%s | FortifyWatch Security Agency",
  },
  description:
    "FortifyWatch Security Agency is a licensed Philippine private security agency providing manned guarding, CCTV, and risk assessment services. Protecting people, property, and assets through integrity, vigilance, and excellence.",
  icons: {
    icon: "/images/logo/logo.ico",
    shortcut: "/images/logo/logo.ico",
    apple: "/images/logo/logo.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
