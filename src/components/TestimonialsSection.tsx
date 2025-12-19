import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
    {
        name: "Sarah Johnson",
        location: "New York, USA",
        rating: 5,
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
        text: "My stay at Elite was absolutely incredible! The atmosphere was vibrant, the staff were incredibly friendly, and I made friends from all over the world. The facilities were spotless and modern. Highly recommend!",
        date: "December 2024"
    },
    {
        name: "Marco Rodriguez",
        location: "Barcelona, Spain",
        rating: 5,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
        text: "Best experience ever! The common areas are perfect for meeting people, and the organized events made it so easy to explore the city with new friends. The beds were comfortable and the location was perfect.",
        date: "November 2024"
    },
    {
        name: "Yuki Tanaka",
        location: "Tokyo, Japan",
        rating: 5,
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
        text: "As a solo traveler, I felt safe and welcomed from day one. Elite has a great community vibe, excellent security, and the staff went above and beyond to help me plan my adventures. Will definitely return!",
        date: "October 2024"
    },
    {
        name: "Alex Thompson",
        location: "London, UK",
        rating: 5,
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
        text: "The perfect blend of comfort and social atmosphere! Clean rooms, amazing breakfast, and the rooftop terrace is the best spot to watch sunsets. Made lifelong friends here. Can't wait to come back!",
        date: "September 2024"
    },
    {
        name: "Emma Wilson",
        location: "Sydney, Australia",
        rating: 5,
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
        text: "Exceeded all my expectations! Elite is beautifully designed, super clean, and has everything you need. The staff are like family and always ready to help. Best value for money I've found anywhere!",
        date: "August 2024"
    },
    {
        name: "David Chen",
        location: "Singapore",
        rating: 5,
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
        text: "Elite sets the standard! From the moment I checked in, I knew I was in good hands. Great location, fantastic facilities, and an amazing community. The organized tours and events were highlights of my trip!",
        date: "July 2024"
    }
];

const TestimonialsSection = () => {
    return (
        <section id="testimonials" className="py-24 bg-secondary relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-terracotta/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block text-terracotta font-medium tracking-widest uppercase text-sm mb-4">
                        Guest Stories
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
                        What Our Travelers
                        <span className="block text-gradient-gold">
                            Are Saying
                        </span>
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        Join thousands of happy travelers who've made unforgettable memories at Elite
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Card
                            key={index}
                            className="group hover:shadow-strong transition-all duration-500 border-0 bg-card backdrop-blur-sm hover:-translate-y-2"
                        >
                            <CardContent className="p-8">
                                {/* Quote Icon */}
                                <div className="mb-6">
                                    <Quote className="w-10 h-10 text-terracotta/20" />
                                </div>

                                {/* Rating */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                                    ))}
                                </div>

                                {/* Testimonial Text */}
                                <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-6">
                                    "{testimonial.text}"
                                </p>

                                {/* User Info */}
                                <div className="flex items-center gap-4 pt-6 border-t border-border">
                                    <div className="relative">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-14 h-14 rounded-full object-cover ring-4 ring-terracotta/20"
                                        />
                                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-terracotta rounded-full border-2 border-card" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-foreground">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-sm text-muted-foreground">
                                            {testimonial.location}
                                        </p>
                                        <p className="text-xs text-muted-foreground/70 mt-1">
                                            {testimonial.date}
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Trust Badge */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-terracotta to-gold rounded-full shadow-lg">
                        <Star className="w-6 h-6 fill-cream text-cream" />
                        <span className="text-cream font-semibold text-lg">
                            4.9/5 Average Rating from 2,500+ Reviews
                        </span>
                        <Star className="w-6 h-6 fill-cream text-cream" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
