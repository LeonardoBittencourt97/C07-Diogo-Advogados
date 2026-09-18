import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { InstitutionalPillars } from "@/components/InstitutionalPillars";
import { About } from "@/components/About";
import { Team } from "@/components/Team";
import { PracticeAreas } from "@/components/PracticeAreas";
import { EducationalArticles } from "@/components/EducationalArticles";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { HowWeWork } from "@/components/HowWeWork";
import { DynamicFaq } from "@/components/DynamicFaq";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <InstitutionalPillars />
        <About />
        <Team />
        <PracticeAreas />
        <EducationalArticles />
        <TestimonialsCarousel />
        <HowWeWork />
        <DynamicFaq />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
