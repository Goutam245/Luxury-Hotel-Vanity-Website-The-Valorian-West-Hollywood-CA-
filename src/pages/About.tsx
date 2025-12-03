import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { Button } from "@/components/ui/button";
import hotelLobby from "@/assets/hotel-lobby.jpg";
import roomPenthouse from "@/assets/room-penthouse.jpg";
import gallerySpa from "@/assets/gallery-spa.jpg";

const values = [
  {
    title: "Dream",
    description:
      "We create spaces where imagination takes flight. Every corner of The Valorian invites you to drift beyond reality into a world of possibility.",
  },
  {
    title: "Danger",
    description:
      "We embrace the thrill of the unexpected. Life's most memorable moments live on the edge between comfort and the unknown.",
  },
  {
    title: "Desire",
    description:
      "We celebrate the pursuit of beauty and pleasure. At The Valorian, every detail is designed to captivate and inspire.",
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero Quote Section */}
      <section className="min-h-[60vh] flex items-center justify-center pt-32 pb-16 px-6">
        <AnimatedSection className="text-center max-w-4xl">
          <p className="text-small text-valorian-champagne tracking-widest mb-8">
            Our Story
          </p>
          <blockquote className="font-display text-3xl md:text-5xl lg:text-6xl font-light italic leading-tight mb-8">
            "Where elegance flirts with temptation"
          </blockquote>
          <div className="w-16 h-px bg-valorian-champagne mx-auto" />
        </AnimatedSection>
      </section>

      {/* Brand Story */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection>
              <div className="reveal-image rounded overflow-hidden shadow-elegant">
                <img
                  src={hotelLobby}
                  alt="The Valorian lobby"
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="space-y-6">
                <h2 className="text-display-md">A Fever Dream in White</h2>
                <p className="text-body-lg text-muted-foreground">
                  Rising above the Sunset Strip, The Valorian is a seductive collision
                  of fantasy and fame. Within its translucent walls, glamour hides
                  danger and pleasure flirts with consequence. It's a place where
                  creativity, confidence, and desire intertwine — a modern temple for
                  those who live between light and shadow.
                </p>
                <p className="text-body text-muted-foreground">
                  Cross the threshold and time seems to slow, as if you've followed a
                  White Rabbit into a world where rules dissolve and beauty bends.
                  Refined yet untamed, The Valorian invites guests to drift beyond
                  reality, where every reflection hints at another world.
                </p>
                <p className="text-body text-muted-foreground font-display italic">
                  Here, allure is the rule, and transcendence is always one drink — or
                  one glance — away.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-16">
            <p className="text-small text-valorian-champagne tracking-widest mb-4">
              Our Philosophy
            </p>
            <h2 className="text-display-md">Three Pillars</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.15}>
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full border border-valorian-champagne flex items-center justify-center">
                    <span className="font-display text-3xl text-valorian-champagne">
                      {value.title[0]}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Design Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection className="lg:order-2">
              <div className="space-y-6">
                <p className="text-small text-valorian-champagne tracking-widest">
                  Design Philosophy
                </p>
                <h2 className="text-display-md">Ethereal Luxury</h2>
                <p className="text-body-lg text-muted-foreground">
                  Our design language speaks in whispers, not shouts. Every space at
                  The Valorian balances minimalism with emotional depth — clean lines
                  charged with mystery, luminous whites contrasted with soft shadows.
                </p>
                <p className="text-body text-muted-foreground">
                  If our aesthetic were a fragrance, it would be Tom Ford Black
                  Orchid. If it were an artist, René Magritte meets Wes Anderson. If
                  it were a film, Eyes Wide Shut meets La La Land.
                </p>
                <p className="text-body text-muted-foreground">
                  We believe luxury should feel intimate and otherworldly, confident
                  but never loud. The Valorian is for those who already know they
                  belong — not those seeking validation.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="reveal-image rounded overflow-hidden">
                  <img
                    src={roomPenthouse}
                    alt="Design detail"
                    className="w-full h-[250px] object-cover"
                  />
                </div>
                <div className="reveal-image rounded overflow-hidden mt-8">
                  <img
                    src={gallerySpa}
                    alt="Design detail"
                    className="w-full h-[250px] object-cover"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Location Story */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <p className="text-small text-valorian-champagne tracking-widest mb-4">
              West Hollywood Heritage
            </p>
            <h2 className="text-display-md mb-6">On the Sunset Strip</h2>
            <p className="text-body-lg text-primary-foreground/80 mb-8">
              The Sunset Strip has been the stage for rock legends, film stars, and
              cultural icons for nearly a century. The Valorian honors this legacy
              while writing a new chapter — a sanctuary where modern luxury meets
              Hollywood's eternal spirit of reinvention.
            </p>
            <Button variant="luxury" asChild>
              <a href="/experiences">Explore Our Neighborhood</a>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
