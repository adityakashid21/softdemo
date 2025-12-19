import { Button } from "@/components/ui/button";
import { ChevronDown, MapPin, Users, Wifi } from "lucide-react";
import { Link } from "react-router-dom";
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
          🌍 Your Adventure Starts Here
        </span>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-cream mb-6 leading-tight animate-fade-up opacity-0 stagger-2">
          Meet, Stay,
          <br />
          <span className="text-gradient-gold">Explore Together</span>
        </h1>

        <p className="text-cream/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-up opacity-0 stagger-3 leading-relaxed">
          Join a vibrant community of travelers from around the world.
          Experience affordable comfort, make lifelong friends, and create unforgettable memories.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up opacity-0 stagger-4 mb-12">
          <Link to="/booking">
            <Button variant="hero" size="xl">
              Book Your Stay Now
            </Button>
          </Link>
          <a href="#hotels">
            <Button variant="heroOutline" size="xl">
              Explore Locations
            </Button>
          </a>
        </div>

        {/* Quick Stats */}
        <div className="flex flex-wrap justify-center gap-8 animate-fade-up opacity-0 stagger-5">
          <div className="flex items-center gap-2 text-cream/90">
            <MapPin className="w-5 h-5 text-gold" />
            <span className="text-sm font-medium">Prime Locations</span>
          </div>
          <div className="flex items-center gap-2 text-cream/90">
            <Users className="w-5 h-5 text-gold" />
            <span className="text-sm font-medium">Social Community</span>
          </div>
          <div className="flex items-center gap-2 text-cream/90">
            <Wifi className="w-5 h-5 text-gold" />
            <span className="text-sm font-medium">Free High-Speed WiFi</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <a href="#hotels" className="flex flex-col items-center text-cream/60 hover:text-cream transition-colors group">
          <span className="text-xs uppercase tracking-widest mb-2">Discover More</span>
          <ChevronDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
