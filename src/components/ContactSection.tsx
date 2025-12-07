import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["123 Luxury Avenue", "Manhattan, NY 10001"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["hello@maisonelite.com", "reservations@maisonelite.com"],
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["Hotel: 24/7", "Café: 7AM - 10PM"],
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-espresso">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <span className="text-gold font-medium tracking-widest uppercase text-sm">
              Get in Touch
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mt-4 mb-6">
              We'd Love to
              <span className="text-gradient-gold"> Hear From You</span>
            </h2>
            <p className="text-cream/70 text-lg mb-10">
              Whether you're planning a special getaway or simply want to enjoy 
              our café, our team is here to make your experience exceptional.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 bg-espresso-light/30 rounded-lg border border-cream/10"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                      <info.icon className="w-5 h-5 text-gold" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cream mb-1">{info.title}</h4>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-cream/60 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-xl p-8 shadow-strong">
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">
              Send a Message
            </h3>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    First Name
                  </label>
                  <Input placeholder="John" className="bg-background" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Last Name
                  </label>
                  <Input placeholder="Doe" className="bg-background" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Email
                </label>
                <Input type="email" placeholder="john@example.com" className="bg-background" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Subject
                </label>
                <Input placeholder="How can we help?" className="bg-background" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Message
                </label>
                <Textarea
                  placeholder="Tell us about your inquiry..."
                  className="bg-background min-h-32"
                />
              </div>
              <Button variant="warm" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
