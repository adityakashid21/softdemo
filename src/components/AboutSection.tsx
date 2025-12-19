import { Award, Heart, Users, Globe, Bed, Coffee } from "lucide-react";

const stats = [
  { icon: Globe, value: "25+", label: "Cities Worldwide" },
  { icon: Heart, value: "100K+", label: "Happy Travelers" },
  { icon: Users, value: "500+", label: "Daily Guests" },
  { icon: Bed, value: "24/7", label: "Check-in Available" },
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
              Where Travelers Become
              <span className="text-gradient-gold"> Family</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              We're more than just a place to sleep – we're a global community of adventurers,
              dreamers, and explorers. Since our founding, we've welcomed travelers from every
              corner of the world, creating a vibrant space where cultures meet and friendships bloom.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Our hostels are designed with you in mind: comfortable beds, modern facilities,
              exciting social events, and a team that treats you like family. Whether you're
              backpacking solo or traveling with friends, you'll find your home away from home here.
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

            {/* Developer Credit */}
            <div className="mt-8 p-6 bg-gradient-to-r from-terracotta to-gold rounded-xl shadow-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-cream/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Coffee className="w-6 h-6 text-cream" />
                </div>
                <div>
                  <p className="text-cream/80 text-sm">Developed with ❤️ by</p>
                  <p className="text-cream font-bold text-lg">Aditya Kashid</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-terracotta/20 rounded-xl h-48 flex items-center justify-center">
                  <div className="text-center">
                    <Globe className="w-12 h-12 mx-auto mb-2 text-terracotta" />
                    <span className="font-display text-2xl font-bold text-terracotta">25+</span>
                    <p className="text-sm text-muted-foreground">Countries</p>
                  </div>
                </div>
                <div className="bg-espresso rounded-xl h-64 flex items-center justify-center p-6">
                  <p className="text-cream text-center font-display text-xl italic">
                    "Travel far, make friends, create memories that last forever."
                  </p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-gold/20 rounded-xl h-64 flex items-center justify-center">
                  <div className="text-center">
                    <Award className="w-16 h-16 mx-auto mb-3 text-gold" />
                    <span className="font-display text-5xl font-bold text-gradient-gold">★★★★★</span>
                    <p className="text-muted-foreground mt-2">Top Rated</p>
                  </div>
                </div>
                <div className="bg-secondary rounded-xl h-48 flex items-center justify-center p-6">
                  <div className="text-center">
                    <Users className="w-12 h-12 mx-auto mb-2 text-terracotta" />
                    <p className="font-display text-xl font-bold text-foreground">Community First</p>
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
