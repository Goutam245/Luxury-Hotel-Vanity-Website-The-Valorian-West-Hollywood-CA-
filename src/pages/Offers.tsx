import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Calendar, Gift, Heart, Sparkles } from "lucide-react";
import roomPenthouse from "@/assets/room-penthouse.jpg";
import heroRooftop from "@/assets/hero-rooftop.jpg";
import gallerySpa from "@/assets/gallery-spa.jpg";

const offers = [
  {
    title: "Romance Package",
    description:
      "Celebrate love with a bottle of champagne on arrival, rose petals, late checkout, and breakfast in bed for two.",
    image: roomPenthouse,
    price: "From $899/night",
    icon: Heart,
    details: [
      "Deluxe Suite accommodation",
      "Champagne & roses on arrival",
      "Breakfast in bed for two",
      "Late checkout until 2pm",
    ],
  },
  {
    title: "Extended Stay",
    description:
      "Stay longer and save. Enjoy 20% off stays of 4 nights or more, plus complimentary parking and daily breakfast.",
    image: heroRooftop,
    price: "20% off",
    icon: Calendar,
    details: [
      "20% off best available rate",
      "Complimentary valet parking",
      "Daily breakfast for two",
      "Room upgrade when available",
    ],
  },
  {
    title: "Rooftop Experience",
    description:
      "Elevate your stay with VIP access to Veil Rooftop, a curated cocktail experience, and sunset canapes.",
    image: heroRooftop,
    price: "From $650/night",
    icon: Sparkles,
    details: [
      "Premium King accommodation",
      "VIP rooftop access",
      "Signature cocktails for two",
      "Sunset canapes",
    ],
  },
  {
    title: "Wellness Retreat",
    description:
      "Restore and rejuvenate with a 60-minute spa treatment, wellness amenities, and healthy dining options.",
    image: gallerySpa,
    price: "From $750/night",
    icon: Gift,
    details: [
      "Deluxe Suite accommodation",
      "60-minute spa treatment",
      "Wellness amenity kit",
      "Healthy breakfast",
    ],
  },
];

export default function Offers() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="container-wide">
          <AnimatedSection className="text-center">
            <p className="text-small text-valorian-champagne tracking-widest mb-4">
              Exclusive
            </p>
            <h1 className="text-display-lg">Special Offers</h1>
            <p className="text-body-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              Curated experiences and exceptional value for those seeking the
              extraordinary.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Offers Grid */}
      <section className="section-padding pt-8 bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {offers.map((offer, index) => (
              <AnimatedSection key={offer.title} delay={index * 0.1}>
                <div className="bg-secondary/30 rounded overflow-hidden group">
                  <div className="reveal-image h-[280px]">
                    <img
                      src={offer.image}
                      alt={offer.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center">
                        <offer.icon className="w-5 h-5 text-valorian-champagne" />
                      </div>
                      <span className="font-display text-xl">{offer.price}</span>
                    </div>
                    <h3 className="font-display text-2xl mb-3">{offer.title}</h3>
                    <p className="text-muted-foreground mb-6">{offer.description}</p>
                    <ul className="space-y-2 mb-6">
                      {offer.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <span className="w-1 h-1 rounded-full bg-valorian-champagne" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                    <Button variant="luxury" asChild>
                      <a href="#book-now">Book Now</a>
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Terms */}
      <section className="section-padding bg-secondary/30">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <p className="text-sm text-muted-foreground">
              All offers are subject to availability and may require advance booking.
              Additional terms and conditions may apply. Please contact our
              reservations team for full details.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="text-display-md mb-4">Questions About Our Offers?</h2>
            <p className="text-body-lg text-primary-foreground/80 mb-8">
              Our reservations team is here to help you find the perfect package.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="luxury" size="lg" asChild>
                <a href="#book-now">Book Now</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <a href="/contact">Contact Us</a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
