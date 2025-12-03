import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import heroImage from "@/assets/hero-rooftop.jpg";
import roomSuite from "@/assets/room-suite.jpg";
import roomPremium from "@/assets/room-premium.jpg";
import roomPenthouse from "@/assets/room-penthouse.jpg";
import diningRestaurant from "@/assets/dining-restaurant.jpg";
import barInterior from "@/assets/bar-interior.jpg";
import neighborhoodSunset from "@/assets/neighborhood-sunset.jpg";
import hotelLobby from "@/assets/hotel-lobby.jpg";

const rooms = [
  {
    name: "Premium King",
    image: roomPremium,
    price: "From $450",
    href: "/rooms#premium",
  },
  {
    name: "Deluxe Suite",
    image: roomSuite,
    price: "From $750",
    href: "/rooms#suite",
  },
  {
    name: "Signature Penthouse",
    image: roomPenthouse,
    price: "From $1,500",
    href: "/rooms#penthouse",
  },
];

const experiences = [
  {
    name: "Rooftop Bar",
    image: heroImage,
    description: "Sunset cocktails above the city",
    href: "/dining#rooftop",
  },
  {
    name: "Fine Dining",
    image: diningRestaurant,
    description: "Culinary artistry awaits",
    href: "/dining#restaurant",
  },
  {
    name: "The Neighborhood",
    image: neighborhoodSunset,
    description: "Discover West Hollywood",
    href: "/experiences",
  },
  {
    name: "The Lounge",
    image: barInterior,
    description: "Intimate evening escapes",
    href: "/dining#lounge",
  },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src={heroImage}
            alt="The Valorian rooftop at sunset"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative text-center px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-6"
          >
            <p className="text-small text-muted-foreground tracking-widest">
              West Hollywood, California
            </p>
            <h1 className="text-display-xl">
              <span className="font-light">THE</span>{" "}
              <span className="font-medium">VALORIAN</span>
            </h1>
            <p className="font-display text-xl md:text-2xl text-muted-foreground font-light italic">
              A fever dream in white • Sunset Strip
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="pt-8 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button variant="hero" size="lg" asChild>
                <a href="#book-now">Book Your Stay</a>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/rooms">Explore Rooms</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ChevronDown className="w-5 h-5 animate-scroll-indicator" />
          </div>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection>
              <div className="space-y-6">
                <p className="text-small text-valorian-champagne tracking-widest">
                  Welcome
                </p>
                <h2 className="text-display-md">
                  Where Elegance Flirts with Temptation
                </h2>
                <p className="text-body-lg text-muted-foreground">
                  Rising above the Sunset Strip, The Valorian is a seductive collision
                  of fantasy and fame. Within its translucent walls, glamour hides
                  danger and pleasure flirts with consequence.
                </p>
                <p className="text-body text-muted-foreground">
                  Cross the threshold and time seems to slow, as if you've followed a
                  White Rabbit into a world where rules dissolve and beauty bends.
                  Here, allure is the rule, and transcendence is always one drink — or
                  one glance — away.
                </p>
                <Button variant="luxury-outline" asChild>
                  <Link to="/about" className="inline-flex items-center gap-2">
                    Our Story <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="reveal-image rounded overflow-hidden shadow-elegant">
                <img
                  src={hotelLobby}
                  alt="The Valorian lobby"
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Rooms Preview */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-16">
            <p className="text-small text-valorian-champagne tracking-widest mb-4">
              Accommodations
            </p>
            <h2 className="text-display-md">Rooms & Suites</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <AnimatedSection key={room.name} delay={index * 0.15}>
                <Link to={room.href} className="group block">
                  <div className="reveal-image rounded overflow-hidden mb-6">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-[400px] object-cover"
                    />
                  </div>
                  <div className="flex items-end justify-between">
                    <div>
                      <h3 className="font-display text-2xl mb-1">{room.name}</h3>
                      <p className="text-sm text-muted-foreground">{room.price}</p>
                    </div>
                    <span className="text-valorian-champagne opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Button variant="default" size="lg" asChild>
              <Link to="/rooms">View All Rooms</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Experiences Carousel */}
      <section className="section-padding bg-background overflow-hidden">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-16">
            <p className="text-small text-valorian-champagne tracking-widest mb-4">
              Discover
            </p>
            <h2 className="text-display-md">Experiences</h2>
          </AnimatedSection>

          <div className="flex gap-6 overflow-x-auto pb-8 -mx-6 px-6 snap-x snap-mandatory scrollbar-hide">
            {experiences.map((exp, index) => (
              <AnimatedSection
                key={exp.name}
                delay={index * 0.1}
                className="flex-shrink-0 w-[300px] md:w-[400px] snap-start"
              >
                <Link to={exp.href} className="group block">
                  <div className="reveal-image rounded overflow-hidden mb-4">
                    <img
                      src={exp.image}
                      alt={exp.name}
                      className="w-full h-[280px] md:h-[350px] object-cover"
                    />
                  </div>
                  <h3 className="font-display text-xl mb-1 group-hover:text-valorian-champagne transition-colors">
                    {exp.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{exp.description}</p>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Location Highlight */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection>
              <div className="reveal-image rounded overflow-hidden">
                <img
                  src={neighborhoodSunset}
                  alt="Sunset Strip, West Hollywood"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="space-y-6">
                <p className="text-small text-valorian-champagne tracking-widest">
                  Location
                </p>
                <h2 className="text-display-md">Sunset Strip, West Hollywood</h2>
                <p className="text-body-lg text-primary-foreground/80">
                  Positioned at the heart of the legendary Sunset Strip, The Valorian
                  offers immediate access to world-renowned nightlife, dining, and
                  entertainment.
                </p>
                <ul className="space-y-3 text-primary-foreground/70">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-valorian-champagne" />
                    Steps from the Sunset Strip's iconic venues
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-valorian-champagne" />
                    Minutes to Beverly Hills and Hollywood
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-valorian-champagne" />
                    Curated neighborhood experiences
                  </li>
                </ul>
                <Button
                  variant="luxury"
                  asChild
                >
                  <Link to="/experiences">Explore the Area</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={roomPenthouse}
            alt="The Valorian penthouse"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/60" />
        </div>
        <AnimatedSection className="relative text-center px-6">
          <h2 className="text-display-lg mb-4">Step Through the Looking Glass</h2>
          <p className="text-body-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Reserve your escape to a world where dreams become reality.
          </p>
          <Button variant="hero" size="xl" asChild>
            <a href="#book-now">Book Your Stay</a>
          </Button>
        </AnimatedSection>
      </section>
    </Layout>
  );
}
