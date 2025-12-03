import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/common/PageHero";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Wifi, Tv, Coffee, Wind, Bath, Mountain, UtensilsCrossed, Shirt } from "lucide-react";
import roomSuite from "@/assets/room-suite.jpg";
import roomPremium from "@/assets/room-premium.jpg";
import roomPenthouse from "@/assets/room-penthouse.jpg";

const rooms = [
  {
    id: "premium",
    name: "Premium King Room",
    description:
      "A sanctuary of refined comfort with floor-to-ceiling windows offering stunning city views. The Premium King features a plush king bed, marble bathroom with rainfall shower, and thoughtfully curated amenities for the discerning traveler.",
    size: "450 sq ft",
    bedType: "King Bed",
    maxGuests: "2 Guests",
    price: "From $450/night",
    image: roomPremium,
    amenities: ["City Views", "Rainfall Shower", "Premium Toiletries", "Mini Bar", "Smart TV", "High-Speed WiFi"],
  },
  {
    id: "suite",
    name: "Deluxe Suite",
    description:
      "Expansive and elegant, the Deluxe Suite offers a separate living area perfect for entertaining or unwinding. Floor-to-ceiling windows frame panoramic views, while the marble bathroom features both a soaking tub and walk-in shower.",
    size: "750 sq ft",
    bedType: "King Bed",
    maxGuests: "3 Guests",
    price: "From $750/night",
    image: roomSuite,
    amenities: ["Panoramic Views", "Living Area", "Soaking Tub", "Walk-in Shower", "Nespresso Machine", "Premium Mini Bar"],
  },
  {
    id: "penthouse",
    name: "Signature Penthouse",
    description:
      "The pinnacle of luxury at The Valorian. This stunning penthouse offers wraparound terraces with 360-degree views, a private dining area, and butler service. The master suite features a spa-like bathroom with dual vanities and freestanding tub.",
    size: "1,500 sq ft",
    bedType: "King Bed + Sofa Bed",
    maxGuests: "4 Guests",
    price: "From $1,500/night",
    image: roomPenthouse,
    amenities: ["Private Terrace", "360° Views", "Butler Service", "Dining Area", "Spa Bathroom", "Premium Wine Selection"],
  },
];

const amenityIcons = [
  { name: "High-Speed WiFi", icon: Wifi },
  { name: "Smart TV", icon: Tv },
  { name: "In-Room Coffee", icon: Coffee },
  { name: "Climate Control", icon: Wind },
  { name: "Luxury Bath", icon: Bath },
  { name: "City Views", icon: Mountain },
  { name: "Room Service", icon: UtensilsCrossed },
  { name: "Laundry Service", icon: Shirt },
];

export default function Rooms() {
  return (
    <Layout>
      <PageHero
        title="Rooms & Suites"
        subtitle="Accommodations"
        image={roomSuite}
      />

      {/* Rooms Section */}
      <section className="section-padding bg-background">
        <div className="container-wide space-luxury">
          {rooms.map((room, index) => (
            <AnimatedSection key={room.id} id={room.id}>
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="reveal-image rounded overflow-hidden shadow-elegant">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-[400px] lg:h-[500px] object-cover"
                    />
                  </div>
                </div>
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div>
                    <p className="text-small text-valorian-champagne tracking-widest mb-2">
                      {room.size} • {room.bedType}
                    </p>
                    <h2 className="text-display-md">{room.name}</h2>
                  </div>
                  <p className="text-body-lg text-muted-foreground">{room.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {room.amenities.map((amenity) => (
                      <span
                        key={amenity}
                        className="px-3 py-1 bg-secondary rounded text-sm text-muted-foreground"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                    <span className="font-display text-2xl">{room.price}</span>
                    <Button variant="luxury" asChild>
                      <a href="#book-now">Check Availability</a>
                    </Button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-16">
            <p className="text-small text-valorian-champagne tracking-widest mb-4">
              In Every Room
            </p>
            <h2 className="text-display-md">Amenities</h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {amenityIcons.map((amenity, index) => (
              <AnimatedSection
                key={amenity.name}
                delay={index * 0.05}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-background flex items-center justify-center shadow-soft">
                  <amenity.icon className="w-6 h-6 text-valorian-champagne" />
                </div>
                <p className="text-sm text-muted-foreground">{amenity.name}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="text-display-md mb-4">Ready to Experience The Valorian?</h2>
            <p className="text-body-lg text-primary-foreground/80 mb-8">
              Reserve your sanctuary above the Sunset Strip.
            </p>
            <Button variant="luxury" size="xl" asChild>
              <a href="#book-now">Book Now</a>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
