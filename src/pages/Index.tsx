import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import HotelsSection from "@/components/HotelsSection";
import CafesSection from "@/components/CafesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <HotelsSection />
      <CafesSection />
      <TestimonialsSection />
      <AboutSection />
      <Footer />
    </main>
  );
};

export default Index;


