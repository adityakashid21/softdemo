import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    explore: [
      { label: "Locations", href: "#hotels" },
      { label: "Rooms & Cafes", href: "#cafes" },
      { label: "About Us", href: "#about" },
      { label: "Events", href: "#" },
    ],
    services: [
      { label: "Free WiFi", href: "#" },
      { label: "Common Areas", href: "#" },
      { label: "Kitchen Access", href: "#" },
      { label: "Tours & Activities", href: "#" },
    ],
    support: [
      { label: "FAQs", href: "#" },
      { label: "Book Now", href: "/booking" },
      { label: "Group Bookings", href: "#" },
      { label: "Gift Cards", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Youtube, href: "#" },
  ];

  return (
    <footer className="bg-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <span className="font-display text-2xl font-bold text-background">
              Elite<span className="text-gold"> Cafes & Hotels</span>
            </span>
            <p className="text-muted mt-4 max-w-sm">
              Your gateway to adventure and friendship. Join our global community
              of travelers and experience the world like never before.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-muted/20 rounded-full flex items-center justify-center text-muted hover:bg-gold hover:text-espresso transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Developer Credit */}
            <div className="mt-6 pt-6 border-t border-muted/20">
              <p className="text-muted text-sm">
                Developed with ❤️ by{" "}
                <span className="text-gold font-semibold">Aditya Kashid</span>
              </p>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-background mb-4">Explore</h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-4">Amenities</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-muted/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted text-sm">
            © {currentYear} Elite Cafes & Hotels. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted hover:text-gold text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted hover:text-gold text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
