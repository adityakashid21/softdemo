import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroHotelImage from "@/assets/hero-hotel.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroHotelImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <span className="inline-block text-gold font-medium tracking-widest uppercase text-sm mb-6 animate-fade-up opacity-0 stagger-1">
          Luxury Hotels & Premium Cafés
        </span>
        
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-cream mb-6 leading-tight animate-fade-up opacity-0 stagger-2">
          Experience
          <br />
          <span className="text-gradient-gold">Timeless Elegance</span>
        </h1>
        
        <p className="text-cream/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-up opacity-0 stagger-3">
          Discover a world where refined hospitality meets culinary excellence. 
          Your journey to unforgettable experiences begins here.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up opacity-0 stagger-4">
          <Button variant="hero" size="xl">
            Explore Hotels
          </Button>
          <Button variant="heroOutline" size="xl">
            Visit Our Cafés
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <a href="#hotels" className="flex flex-col items-center text-cream/60 hover:text-cream transition-colors">
          <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
