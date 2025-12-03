import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { SafetyPanel } from "@/components/SafetyPanel";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Mentorship } from "@/components/landing/Mentorship";
import { Analytics } from "@/components/landing/Analytics";
import { Testimonials } from "@/components/landing/Testimonials";
import { CTA } from "@/components/landing/CTA";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Mentorship />
      <Analytics />
      <Testimonials />
      <CTA />
      <SafetyPanel />
      <Footer />
    </div>
  );
}