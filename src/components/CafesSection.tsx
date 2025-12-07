import { Button } from "@/components/ui/button";
import menuCoffee from "@/assets/menu-coffee.jpg";
import menuBreakfast from "@/assets/menu-breakfast.jpg";
import menuDesserts from "@/assets/menu-desserts.jpg";
import heroCafe from "@/assets/hero-cafe.jpg";

const menuCategories = [
  {
    id: 1,
    name: "Artisan Coffee",
    description: "Hand-crafted espresso drinks and specialty pour-overs from around the world.",
    image: menuCoffee,
    items: ["Signature Latte", "Ethiopian Pour-Over", "Honey Oat Cappuccino"],
    priceRange: "$4 - $8",
  },
  {
    id: 2,
    name: "Gourmet Breakfast",
    description: "Fresh, locally-sourced ingredients prepared to perfection every morning.",
    image: menuBreakfast,
    items: ["Eggs Benedict", "Avocado Toast", "French Croissant"],
    priceRange: "$12 - $24",
  },
  {
    id: 3,
    name: "Patisserie",
    description: "Exquisite desserts crafted by our award-winning pastry chefs.",
    image: menuDesserts,
    items: ["Chocolate Opera", "Fruit Tart", "Macarons"],
    priceRange: "$6 - $16",
  },
];

const CafesSection = () => {
  return (
    <section id="cafes" className="py-24 bg-background">
      {/* Hero Banner */}
      <div className="relative h-96 mb-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroCafe})` }}
        >
          <div className="absolute inset-0 bg-espresso/60" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <div>
            <span className="text-gold font-medium tracking-widest uppercase text-sm">
              Culinary Excellence
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-cream mt-4 mb-4">
              Our <span className="text-gradient-gold">Cafés</span>
            </h2>
            <p className="text-cream/80 max-w-xl mx-auto text-lg">
              Where every cup tells a story and every bite is a celebration of flavor.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6">
        {/* Menu Categories */}
        <div className="grid md:grid-cols-3 gap-8">
          {menuCategories.map((category, index) => (
            <div
              key={category.id}
              className="group relative bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-strong transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-gold text-sm font-medium">{category.priceRange}</span>
                  <h3 className="font-display text-2xl font-bold text-cream">
                    {category.name}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-muted-foreground mb-4">{category.description}</p>
                
                {/* Featured Items */}
                <ul className="space-y-2 mb-6">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm text-foreground">
                      <span className="w-2 h-2 bg-terracotta rounded-full mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Button variant="elegant" className="w-full">
                  View Full Menu
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CafesSection;
