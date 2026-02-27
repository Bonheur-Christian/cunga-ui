"use client";

import { useEffect } from "react";
import BenefitsSection from "@/components/custom/landingpage/Benefits";
import FeaturesSection from "@/components/custom/landingpage/FeaturesSection";
import { FAQSection } from "@/components/custom/landingpage/FAQSection";
import { Footer } from "@/components/custom/landingpage/Footer";
import { Hero } from "@/components/custom/landingpage/hero";
import { Navbar } from "@/components/custom/landingpage/NavBar";

export default function LandingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-slate-100 min-h-screen">
      <Navbar />
      <Hero />
      <FeaturesSection />
      <BenefitsSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
