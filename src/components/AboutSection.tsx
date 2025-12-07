import { Award, Heart, Users, Clock } from "lucide-react";

const stats = [
  { icon: Award, value: "15+", label: "Years of Excellence" },
  { icon: Heart, value: "50K+", label: "Happy Guests" },
  { icon: Users, value: "200+", label: "Team Members" },
  { icon: Clock, value: "24/7", label: "Guest Services" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-gradient-warm">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-terracotta font-medium tracking-widest uppercase text-sm">
              Our Story
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Crafting Moments of
              <span className="text-gradient-gold"> Pure Luxury</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              For over fifteen years, Maison Élite has been redefining hospitality. 
              What began as a single boutique hotel has blossomed into a collection 
              of world-class properties and cafés, each embodying our commitment to 
              excellence.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Our philosophy is simple: every guest deserves an extraordinary experience. 
              From the moment you arrive, our dedicated team ensures that every detail 
              is perfect, creating memories that last a lifetime.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-card rounded-lg shadow-soft">
                  <stat.icon className="w-8 h-8 text-terracotta mx-auto mb-2" />
                  <div className="font-display text-2xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-terracotta/20 rounded-xl h-48 flex items-center justify-center">
                  <span className="font-display text-3xl text-terracotta">Est. 2009</span>
                </div>
                <div className="bg-espresso rounded-xl h-64 flex items-center justify-center p-6">
                  <p className="text-cream text-center font-display text-xl italic">
                    "Where luxury meets warmth, and every moment becomes a cherished memory."
                  </p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-gold/20 rounded-xl h-64 flex items-center justify-center">
                  <div className="text-center">
                    <span className="font-display text-6xl font-bold text-gradient-gold">5★</span>
                    <p className="text-muted-foreground mt-2">Rating</p>
                  </div>
                </div>
                <div className="bg-secondary rounded-xl h-48 flex items-center justify-center p-6">
                  <div className="text-center">
                    <p className="font-display text-2xl font-bold text-foreground">10</p>
                    <p className="text-muted-foreground">Locations Worldwide</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-terracotta rounded-full opacity-20 blur-2xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gold rounded-full opacity-20 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
