import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/common/PageHero";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Users, Briefcase, Heart, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import eventsSpace from "@/assets/events-space.jpg";
import diningRestaurant from "@/assets/dining-restaurant.jpg";
import heroRooftop from "@/assets/hero-rooftop.jpg";

const eventTypes = [
  {
    icon: Briefcase,
    name: "Corporate Events",
    description: "Board meetings, presentations, and executive retreats",
  },
  {
    icon: Heart,
    name: "Social Celebrations",
    description: "Weddings, anniversaries, and milestone moments",
  },
  {
    icon: Users,
    name: "Private Parties",
    description: "Intimate gatherings and exclusive events",
  },
  {
    icon: Sparkles,
    name: "Product Launches",
    description: "Brand activations and press events",
  },
];

const spaces = [
  {
    name: "The Grand Salon",
    capacity: "Up to 120 guests",
    features: "Crystal chandeliers, natural light, garden access",
    image: eventsSpace,
  },
  {
    name: "The Terrace",
    capacity: "Up to 80 guests",
    features: "Outdoor setting, city views, sunset backdrop",
    image: heroRooftop,
  },
  {
    name: "The Private Dining Room",
    capacity: "Up to 24 guests",
    features: "Intimate setting, custom menus, dedicated service",
    image: diningRestaurant,
  },
];

export default function Events() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    eventType: "",
    date: "",
    guests: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inquiry Sent",
      description: "Our events team will contact you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      eventType: "",
      date: "",
      guests: "",
      message: "",
    });
  };

  return (
    <Layout>
      <PageHero
        title="Events & Gatherings"
        subtitle="Private Events"
        image={eventsSpace}
      />

      {/* Event Types */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-16">
            <p className="text-small text-valorian-champagne tracking-widest mb-4">
              Celebrate With Us
            </p>
            <h2 className="text-display-md">Every Occasion Deserves Excellence</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {eventTypes.map((type, index) => (
              <AnimatedSection key={type.name} delay={index * 0.1}>
                <div className="text-center p-6 bg-secondary/30 rounded hover:shadow-medium transition-shadow duration-300">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-background flex items-center justify-center">
                    <type.icon className="w-6 h-6 text-valorian-champagne" />
                  </div>
                  <h3 className="font-display text-xl mb-2">{type.name}</h3>
                  <p className="text-sm text-muted-foreground">{type.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Event Spaces */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-16">
            <p className="text-small text-valorian-champagne tracking-widest mb-4">
              Our Venues
            </p>
            <h2 className="text-display-md">Event Spaces</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {spaces.map((space, index) => (
              <AnimatedSection key={space.name} delay={index * 0.15}>
                <div className="bg-background rounded overflow-hidden shadow-soft">
                  <div className="reveal-image h-[220px]">
                    <img
                      src={space.image}
                      alt={space.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl mb-2">{space.name}</h3>
                    <p className="text-sm text-valorian-champagne mb-2">
                      {space.capacity}
                    </p>
                    <p className="text-sm text-muted-foreground">{space.features}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection>
              <div className="space-y-6">
                <p className="text-small text-valorian-champagne tracking-widest">
                  Plan Your Event
                </p>
                <h2 className="text-display-md">Request a Proposal</h2>
                <p className="text-body-lg text-muted-foreground">
                  Our dedicated events team is here to bring your vision to life.
                  From intimate gatherings to grand celebrations, we craft
                  unforgettable experiences.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-valorian-champagne" />
                    Customized event planning
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-valorian-champagne" />
                    Bespoke catering menus
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-valorian-champagne" />
                    A/V equipment & technical support
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-valorian-champagne" />
                    Dedicated event coordinator
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-secondary/30 rounded p-8 md:p-10">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm text-muted-foreground mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full bg-background border border-border rounded px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-valorian-champagne transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-muted-foreground mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full bg-background border border-border rounded px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-valorian-champagne transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm text-muted-foreground mb-2">
                        Event Type
                      </label>
                      <select
                        required
                        value={formData.eventType}
                        onChange={(e) =>
                          setFormData({ ...formData, eventType: e.target.value })
                        }
                        className="w-full bg-background border border-border rounded px-4 py-3 text-foreground focus:outline-none focus:border-valorian-champagne transition-colors"
                      >
                        <option value="">Select type</option>
                        <option value="corporate">Corporate Event</option>
                        <option value="wedding">Wedding/Social</option>
                        <option value="private">Private Party</option>
                        <option value="launch">Product Launch</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm text-muted-foreground mb-2">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) =>
                          setFormData({ ...formData, date: e.target.value })
                        }
                        className="w-full bg-background border border-border rounded px-4 py-3 text-foreground focus:outline-none focus:border-valorian-champagne transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">
                      Estimated Guests
                    </label>
                    <input
                      type="number"
                      value={formData.guests}
                      onChange={(e) =>
                        setFormData({ ...formData, guests: e.target.value })
                      }
                      className="w-full bg-background border border-border rounded px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-valorian-champagne transition-colors"
                      placeholder="Number of guests"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">
                      Tell Us More
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full bg-background border border-border rounded px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-valorian-champagne transition-colors resize-none"
                      placeholder="Describe your event vision..."
                    />
                  </div>
                  <Button variant="luxury" size="lg" type="submit" className="w-full">
                    Submit Inquiry
                  </Button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
}
