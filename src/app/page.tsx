"use client";

import { useReveal } from "./components/landing/SectionUI";
import Navbar       from "./components/landing/Navbar";
import Hero         from "./components/landing/Hero";
import HowItWorks   from "./components/landing/HowItWorks";
import Features     from "./components/landing/Features";
import Testimonials from "./components/landing/Testimonials";
import CTA          from "./components/landing/CTA";
import Footer       from "./components/landing/Footer";

export default function SupidoLanding() {
  useReveal();

  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}