import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/common/PageHero";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Star } from "lucide-react";
import neighborhoodSunset from "@/assets/neighborhood-sunset.jpg";
import barInterior from "@/assets/bar-interior.jpg";
import gallerySpa from "@/assets/gallery-spa.jpg";

const highlights = [
  {
    category: "Nightlife",
    title: "Legendary Venues",
    description: "The Sunset Strip has hosted rock legends for decades. From the Viper Room to Whisky a Go Go, world-class entertainment is steps away.",
    image: barInterior,
  },
  {
    category: "Shopping",
    title: "Boutique Destinations",
    description: "Discover the finest fashion, art galleries, and unique boutiques along Melrose Avenue and Robertson Boulevard.",
    image: neighborhoodSunset,
  },
  {
    category: "Wellness",
    title: "Mind & Body",
    description: "West Hollywood is home to premier wellness destinations. From yoga studios to holistic spas, find your balance.",
    image: gallerySpa,
  },
];

const recommendations = [
  {
    name: "Catch LA",
    type: "Restaurant",
    description: "Rooftop seafood with stunning views",
    distance: "0.3 miles",
  },
  {
    name: "Melrose Avenue",
    type: "Shopping",
    description: "Iconic boutiques and street art",
    distance: "0.5 miles",
  },
  {
    name: "The Comedy Store",
    type: "Entertainment",
    description: "Legendary stand-up venue",
    distance: "0.2 miles",
  },
  {
    name: "Runyon Canyon",
    type: "Nature",
    description: "Scenic hikes with city views",
    distance: "1.5 miles",
  },
  {
    name: "Craig's",
    type: "Restaurant",
    description: "Celebrity hotspot, American cuisine",
    distance: "0.4 miles",
  },
  {
    name: "Chateau Marmont",
    type: "Historic",
    description: "Legendary Hollywood hotel & bar",
    distance: "0.3 miles",
  },
];

export default function Experiences() {
  return (
    <Layout>
      <PageHero
        title="West Hollywood Awaits"
        subtitle="Experiences"
        image={neighborhoodSunset}
      />

      {/* Overview Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <AnimatedSection>
              <p className="text-body-lg text-muted-foreground">
                Positioned at the heart of the legendary Sunset Strip, The Valorian
                places you in the epicenter of West Hollywood's vibrant culture. From
                world-famous nightlife to boutique shopping and culinary adventures,
                discover a neighborhood that never stops inspiring.
              </p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.15}>
                <div className="group">
                  <div className="reveal-image rounded overflow-hidden mb-6">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-[300px] object-cover"
                    />
                  </div>
                  <p className="text-small text-valorian-champagne tracking-widest mb-2">
                    {item.category}
                  </p>
                  <h3 className="font-display text-2xl mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Curated Recommendations */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-16">
            <p className="text-small text-valorian-champagne tracking-widest mb-4">
              Curated by Our Concierge
            </p>
            <h2 className="text-display-md">Local Favorites</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendations.map((place, index) => (
              <AnimatedSection key={place.name} delay={index * 0.1}>
                <div className="bg-background rounded p-6 shadow-soft hover:shadow-medium transition-shadow duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-display text-xl">{place.name}</h3>
                      <p className="text-sm text-valorian-champagne">{place.type}</p>
                    </div>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {place.distance}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{place.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="space-y-6">
                <p className="text-small text-valorian-champagne tracking-widest">
                  Location
                </p>
                <h2 className="text-display-md">8440 Sunset Boulevard</h2>
                <p className="text-body-lg text-muted-foreground">
                  Situated on the iconic Sunset Strip in West Hollywood, The Valorian
                  offers unparalleled access to Los Angeles' most celebrated
                  destinations.
                </p>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-valorian-champagne" />
                    <span>LAX Airport: 45 minutes</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Star className="w-4 h-4 text-valorian-champagne" />
                    <span>Beverly Hills: 10 minutes</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Star className="w-4 h-4 text-valorian-champagne" />
                    <span>Hollywood Sign: 15 minutes</span>
                  </li>
                </ul>
                <Button variant="outline" asChild>
                  <a
                    href="https://maps.google.com/?q=8440+Sunset+Blvd+West+Hollywood+CA"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Directions
                  </a>
                </Button>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="rounded overflow-hidden shadow-elegant h-[400px] lg:h-[500px] bg-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.8!2d-118.38!3d34.09!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDA1JzI0LjAiTiAxMTjCsDIyJzQ4LjAiVw!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="The Valorian Location"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="text-display-md mb-4">Plan Your Visit</h2>
            <p className="text-body-lg text-primary-foreground/80 mb-8">
              Our concierge team is ready to curate your perfect West Hollywood
              experience.
            </p>
            <Button variant="luxury" size="xl" asChild>
              <a href="#book-now">Book Your Stay</a>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
