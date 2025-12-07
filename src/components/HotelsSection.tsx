import { Button } from "@/components/ui/button";
import { Bed, Wifi, Bath, Star } from "lucide-react";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomSuite from "@/assets/room-suite.jpg";
import roomPenthouse from "@/assets/room-penthouse.jpg";

const rooms = [
  {
    id: 1,
    name: "Deluxe Room",
    description: "Elegant comfort with panoramic city views and modern amenities.",
    price: 299,
    image: roomDeluxe,
    features: ["King Bed", "Free WiFi", "Luxury Bath"],
    rating: 4.8,
  },
  {
    id: 2,
    name: "Executive Suite",
    description: "Spacious living with separate lounge area and premium services.",
    price: 499,
    image: roomSuite,
    features: ["King Bed", "Free WiFi", "Jacuzzi"],
    rating: 4.9,
  },
  {
    id: 3,
    name: "Penthouse",
    description: "The pinnacle of luxury with rooftop terrace and private jacuzzi.",
    price: 899,
    image: roomPenthouse,
    features: ["King Bed", "Free WiFi", "Rooftop"],
    rating: 5.0,
  },
];

const HotelsSection = () => {
  return (
    <section id="hotels" className="py-24 bg-gradient-warm">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-terracotta font-medium tracking-widest uppercase text-sm">
            Accommodations
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Exceptional <span className="text-gradient-gold">Stays</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Each room is thoughtfully designed to provide the perfect blend of 
            comfort, elegance, and world-class service.
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div
              key={room.id}
              className="group bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-strong transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                  <Star className="w-4 h-4 text-gold fill-gold" />
                  <span className="text-sm font-medium">{room.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                  {room.name}
                </h3>
                <p className="text-muted-foreground mb-4">{room.description}</p>

                {/* Features */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {room.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <span className="text-2xl font-bold text-foreground">${room.price}</span>
                    <span className="text-muted-foreground text-sm">/night</span>
                  </div>
                  <Button variant="warm" size="default">
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotelsSection;
