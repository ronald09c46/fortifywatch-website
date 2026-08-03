import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import CoreValues from "@/components/home/CoreValues";
import Services from "@/components/home/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Process from "@/components/home/Process";
import Licensing from "@/components/home/Licensing";
import Clients from "@/components/home/Clients";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <CoreValues />
      <Services />
      <WhyChooseUs />
      <Process />
      <Licensing />
      <Clients />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
