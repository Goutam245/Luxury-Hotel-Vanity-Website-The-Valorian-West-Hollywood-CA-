import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/common/PageHero";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Clock, MapPin } from "lucide-react";
import heroRooftop from "@/assets/hero-rooftop.jpg";
import diningRestaurant from "@/assets/dining-restaurant.jpg";
import barInterior from "@/assets/bar-interior.jpg";

const cocktails = [
  { name: "The White Rabbit", description: "Gin, elderflower, cucumber, champagne foam" },
  { name: "Sunset Boulevard", description: "Mezcal, passion fruit, agave, chili salt" },
  { name: "Midnight Orchid", description: "Vodka, violet, vanilla, lemon, prosecco" },
  { name: "The Valorian", description: "Cognac, champagne, gold flakes, mystery bitters" },
];

export default function Dining() {
  return (
    <Layout>
      <PageHero
        title="Dining & Bars"
        subtitle="Culinary Experiences"
        image={diningRestaurant}
      />

      {/* Restaurant Section */}
      <section id="restaurant" className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection>
              <div className="space-y-6">
                <p className="text-small text-valorian-champagne tracking-widest">
                  The Restaurant
                </p>
                <h2 className="text-display-md">Ciel</h2>
                <p className="text-body-lg text-muted-foreground">
                  Named for the endless California sky, Ciel offers a refined dining
                  experience where French technique meets West Coast ingredients. Our
                  menu celebrates seasonal produce from local farms, paired with an
                  exceptional wine selection.
                </p>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-valorian-champagne" />
                    <span>Breakfast 7am–11am • Dinner 6pm–11pm</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-valorian-champagne" />
                    <span>Lobby Level</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground italic">
                  "A symphony of flavors that captures the essence of California's
                  bounty." — LA Times
                </p>
                <div className="flex gap-4">
                  <Button variant="luxury" asChild>
                    <a href="#">Reserve a Table</a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="#">View Menu</a>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="reveal-image rounded overflow-hidden shadow-elegant">
                <img
                  src={diningRestaurant}
                  alt="Ciel Restaurant"
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Rooftop Bar Section */}
      <section
        id="rooftop"
        className="relative py-32 md:py-48"
      >
        <div className="absolute inset-0">
          <img
            src={heroRooftop}
            alt="Rooftop Bar"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/70" />
        </div>
        <div className="relative container-wide">
          <div className="max-w-2xl mx-auto text-center">
            <AnimatedSection>
              <p className="text-small text-valorian-champagne tracking-widest mb-4">
                The Rooftop
              </p>
              <h2 className="text-display-md mb-6">Veil</h2>
              <p className="text-body-lg text-muted-foreground mb-8">
                Perched above the city lights, Veil offers an intoxicating blend of
                craft cocktails and panoramic views. As the sun sets over the Pacific,
                the rooftop transforms into an ethereal escape where conversations flow
                and connections spark.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8 max-w-md mx-auto">
                {cocktails.map((cocktail) => (
                  <div key={cocktail.name} className="text-left">
                    <h4 className="font-display text-lg">{cocktail.name}</h4>
                    <p className="text-xs text-muted-foreground">{cocktail.description}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="luxury" asChild>
                  <a href="#">Reserve</a>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Open daily 4pm – 2am • Smart casual dress code
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Lounge Section */}
      <section id="lounge" className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection className="lg:order-2">
              <div className="space-y-6">
                <p className="text-small text-valorian-champagne tracking-widest">
                  The Lounge
                </p>
                <h2 className="text-display-md">Mirror</h2>
                <p className="text-body-lg text-muted-foreground">
                  An intimate sanctuary where time stands still. Mirror offers a
                  curated selection of rare spirits, vintage wines, and bespoke
                  cocktails in an atmosphere of hushed sophistication. The perfect
                  prelude or nightcap.
                </p>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-valorian-champagne" />
                    <span>Open daily 5pm – 1am</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-valorian-champagne" />
                    <span>Mezzanine Level</span>
                  </div>
                </div>
                <Button variant="outline" asChild>
                  <a href="#">Explore the Collection</a>
                </Button>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="lg:order-1">
              <div className="reveal-image rounded overflow-hidden shadow-elegant">
                <img
                  src={barInterior}
                  alt="Mirror Lounge"
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Room Service */}
      <section className="section-padding bg-secondary/30">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <p className="text-small text-valorian-champagne tracking-widest mb-4">
              In-Room Dining
            </p>
            <h2 className="text-display-md mb-6">24-Hour Room Service</h2>
            <p className="text-body-lg text-muted-foreground mb-8">
              Enjoy our full menu from the comfort of your suite. Our culinary team is
              available around the clock to deliver exceptional dining experiences to
              your door.
            </p>
            <Button variant="default" asChild>
              <a href="#">View Menu</a>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
