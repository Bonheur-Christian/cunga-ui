import FeaturesSection from "@/components/custom/landingpage/FeaturesSection";
import { Hero } from "@/components/custom/landingpage/hero";
import { Navbar } from "@/components/custom/landingpage/NavBar";

export default function LandingPage() {
  return (
    <div className="bg-slate-100 min-h-screen">
      <Navbar />
      <Hero />
      <FeaturesSection />
    </div>
  );
}
