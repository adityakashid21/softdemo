import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar, Users, Bed, MapPin, CreditCard, Check } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const BookingPage = () => {
    const [step, setStep] = useState(1);

    const locations = [
        "New York, USA",
        "London, UK",
        "Paris, France",
        "Tokyo, Japan",
        "Barcelona, Spain",
        "Amsterdam, Netherlands",
    ];

    const roomTypes = [
        { id: "dorm-4", name: "4-Bed Dorm", price: 25, icon: "🛏️" },
        { id: "dorm-6", name: "6-Bed Dorm", price: 20, icon: "🛏️" },
        { id: "dorm-8", name: "8-Bed Dorm", price: 15, icon: "🛏️" },
        { id: "private-single", name: "Private Single", price: 50, icon: "🚪" },
        { id: "private-double", name: "Private Double", price: 75, icon: "🚪" },
    ];

    return (
        <div className="min-h-screen bg-gradient-warm">
            <Navigation />

            <div className="pt-32 pb-24">
                <div className="container mx-auto px-6">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                            Book Your <span className="text-gradient-gold">Adventure</span>
                        </h1>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Reserve your bed in just a few simple steps. Join our global community of travelers!
                        </p>
                    </div>

                    {/* Progress Steps */}
                    <div className="max-w-4xl mx-auto mb-12">
                        {/* Step Circles and Lines */}
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center justify-center">
                                <div className={`flex items-center justify-center w-14 h-14 rounded-full font-bold text-lg transition-all ${step >= 1
                                        ? "bg-gradient-to-r from-terracotta to-gold text-cream shadow-lg"
                                        : "bg-card text-muted-foreground border-2 border-border"
                                    }`}>
                                    {step > 1 ? <Check className="w-6 h-6" /> : <span className="text-lg font-bold">1</span>}
                                </div>
                            </div>

                            <div className={`flex-1 h-1 mx-4 transition-all ${step > 1 ? "bg-gradient-to-r from-terracotta to-gold" : "bg-border"
                                }`} />

                            <div className="flex items-center justify-center">
                                <div className={`flex items-center justify-center w-14 h-14 rounded-full font-bold text-lg transition-all ${step >= 2
                                        ? "bg-gradient-to-r from-terracotta to-gold text-cream shadow-lg"
                                        : "bg-card text-muted-foreground border-2 border-border"
                                    }`}>
                                    {step > 2 ? <Check className="w-6 h-6" /> : <span className="text-lg font-bold">2</span>}
                                </div>
                            </div>

                            <div className={`flex-1 h-1 mx-4 transition-all ${step > 2 ? "bg-gradient-to-r from-terracotta to-gold" : "bg-border"
                                }`} />

                            <div className="flex items-center justify-center">
                                <div className={`flex items-center justify-center w-14 h-14 rounded-full font-bold text-lg transition-all ${step >= 3
                                        ? "bg-gradient-to-r from-terracotta to-gold text-cream shadow-lg"
                                        : "bg-card text-muted-foreground border-2 border-border"
                                    }`}>
                                    {step > 3 ? <Check className="w-6 h-6" /> : <span className="text-lg font-bold">3</span>}
                                </div>
                            </div>
                        </div>

                        {/* Step Labels */}
                        <div className="flex items-center justify-between">
                            <div className="w-14 text-center">
                                <span className="text-sm font-medium text-foreground">Location & Dates</span>
                            </div>
                            <div className="flex-1" />
                            <div className="w-14 text-center">
                                <span className="text-sm font-medium text-foreground">Room Selection</span>
                            </div>
                            <div className="flex-1" />
                            <div className="w-14 text-center">
                                <span className="text-sm font-medium text-foreground">Guest Details</span>
                            </div>
                        </div>
                    </div>

                    {/* Booking Form */}
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-card rounded-2xl shadow-strong p-8 md:p-12">

                            {/* Step 1: Location & Dates */}
                            {step === 1 && (
                                <div className="space-y-6">
                                    <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                                        Where and When?
                                    </h2>

                                    <div>
                                        <Label className="flex items-center gap-2 mb-2">
                                            <MapPin className="w-4 h-4 text-terracotta" />
                                            Select Location
                                        </Label>
                                        <select className="w-full p-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-terracotta outline-none">
                                            <option value="">Choose a city...</option>
                                            {locations.map((loc) => (
                                                <option key={loc} value={loc}>{loc}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <Label className="flex items-center gap-2 mb-2">
                                                <Calendar className="w-4 h-4 text-terracotta" />
                                                Check-in Date
                                            </Label>
                                            <Input type="date" className="bg-background" />
                                        </div>
                                        <div>
                                            <Label className="flex items-center gap-2 mb-2">
                                                <Calendar className="w-4 h-4 text-terracotta" />
                                                Check-out Date
                                            </Label>
                                            <Input type="date" className="bg-background" />
                                        </div>
                                    </div>

                                    <div>
                                        <Label className="flex items-center gap-2 mb-2">
                                            <Users className="w-4 h-4 text-terracotta" />
                                            Number of Guests
                                        </Label>
                                        <Input type="number" min="1" max="10" defaultValue="1" className="bg-background" />
                                    </div>

                                    <Button
                                        onClick={() => setStep(2)}
                                        variant="warm"
                                        size="lg"
                                        className="w-full mt-6"
                                    >
                                        Continue to Room Selection
                                    </Button>
                                </div>
                            )}

                            {/* Step 2: Room Selection */}
                            {step === 2 && (
                                <div className="space-y-6">
                                    <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                                        Choose Your Room
                                    </h2>

                                    <div className="grid gap-4">
                                        {roomTypes.map((room) => (
                                            <div
                                                key={room.id}
                                                className="border-2 border-border rounded-xl p-6 hover:border-terracotta transition-all cursor-pointer group"
                                            >
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-4">
                                                        <span className="text-4xl">{room.icon}</span>
                                                        <div>
                                                            <h3 className="font-semibold text-lg text-foreground group-hover:text-terracotta transition-colors">
                                                                {room.name}
                                                            </h3>
                                                            <p className="text-sm text-muted-foreground">
                                                                <Bed className="w-4 h-4 inline mr-1" />
                                                                Shared bathroom • Free WiFi • Lockers
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="text-right">
                                                        <div className="font-display text-2xl font-bold text-gradient-gold">
                                                            ${room.price}
                                                        </div>
                                                        <div className="text-sm text-muted-foreground">per night</div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex gap-4">
                                        <Button
                                            onClick={() => setStep(1)}
                                            variant="outline"
                                            size="lg"
                                            className="flex-1"
                                        >
                                            Back
                                        </Button>
                                        <Button
                                            onClick={() => setStep(3)}
                                            variant="warm"
                                            size="lg"
                                            className="flex-1"
                                        >
                                            Continue to Guest Details
                                        </Button>
                                    </div>
                                </div>
                            )}

                            {/* Step 3: Guest Details */}
                            {step === 3 && (
                                <div className="space-y-6">
                                    <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                                        Your Information
                                    </h2>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <Label className="mb-2">First Name</Label>
                                            <Input placeholder="John" className="bg-background" />
                                        </div>
                                        <div>
                                            <Label className="mb-2">Last Name</Label>
                                            <Input placeholder="Doe" className="bg-background" />
                                        </div>
                                    </div>

                                    <div>
                                        <Label className="mb-2">Email Address</Label>
                                        <Input type="email" placeholder="john@example.com" className="bg-background" />
                                    </div>

                                    <div>
                                        <Label className="mb-2">Phone Number</Label>
                                        <Input type="tel" placeholder="+1 (555) 123-4567" className="bg-background" />
                                    </div>

                                    <div>
                                        <Label className="mb-2">Country</Label>
                                        <Input placeholder="United States" className="bg-background" />
                                    </div>

                                    <div className="border-t border-border pt-6 mt-6">
                                        <h3 className="font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                                            <CreditCard className="w-5 h-5 text-terracotta" />
                                            Payment Information
                                        </h3>

                                        <div className="space-y-4">
                                            <div>
                                                <Label className="mb-2">Card Number</Label>
                                                <Input placeholder="1234 5678 9012 3456" className="bg-background" />
                                            </div>

                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <Label className="mb-2">Expiry Date</Label>
                                                    <Input placeholder="MM/YY" className="bg-background" />
                                                </div>
                                                <div>
                                                    <Label className="mb-2">CVV</Label>
                                                    <Input placeholder="123" className="bg-background" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Booking Summary */}
                                    <div className="bg-gradient-warm rounded-xl p-6 mt-6">
                                        <h3 className="font-semibold text-lg text-foreground mb-4">Booking Summary</h3>
                                        <div className="space-y-2 text-sm">
                                            <div className="flex justify-between">
                                                <span className="text-muted-foreground">Room Type:</span>
                                                <span className="font-medium text-foreground">4-Bed Dorm</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-muted-foreground">Nights:</span>
                                                <span className="font-medium text-foreground">3</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-muted-foreground">Price per night:</span>
                                                <span className="font-medium text-foreground">$25</span>
                                            </div>
                                            <div className="border-t border-border pt-2 mt-2 flex justify-between">
                                                <span className="font-semibold text-foreground">Total:</span>
                                                <span className="font-display text-xl font-bold text-gradient-gold">$75</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <Button
                                            onClick={() => setStep(2)}
                                            variant="outline"
                                            size="lg"
                                            className="flex-1"
                                        >
                                            Back
                                        </Button>
                                        <Button
                                            variant="warm"
                                            size="lg"
                                            className="flex-1"
                                        >
                                            Complete Booking
                                        </Button>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>

                    {/* Trust Badges */}
                    <div className="max-w-4xl mx-auto mt-12">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                            <div className="p-4">
                                <div className="text-3xl mb-2">🔒</div>
                                <div className="font-semibold text-sm text-foreground">Secure Payment</div>
                            </div>
                            <div className="p-4">
                                <div className="text-3xl mb-2">✅</div>
                                <div className="font-semibold text-sm text-foreground">Instant Confirmation</div>
                            </div>
                            <div className="p-4">
                                <div className="text-3xl mb-2">🎫</div>
                                <div className="font-semibold text-sm text-foreground">Free Cancellation</div>
                            </div>
                            <div className="p-4">
                                <div className="text-3xl mb-2">⭐</div>
                                <div className="font-semibold text-sm text-foreground">Best Price Guarantee</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    );
};

export default BookingPage;
