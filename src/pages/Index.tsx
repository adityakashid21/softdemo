import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import HotelsSection from "@/components/HotelsSection";
import CafesSection from "@/components/CafesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <HotelsSection />
      <CafesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
