import { Hero } from "@/components/custom/hero";
import { Navbar } from "@/components/custom/NavBar";

export default function LandingPage() {
  return (
    <div className="bg-slate-100 min-h-screen">
      <Navbar />
      <Hero/>
    </div>
  );
}
