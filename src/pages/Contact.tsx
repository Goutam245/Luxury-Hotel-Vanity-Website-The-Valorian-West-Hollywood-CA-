import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const faqs = [
  {
    question: "What are the check-in and check-out times?",
    answer:
      "Check-in begins at 4:00 PM and check-out is at 12:00 PM. Early check-in and late check-out may be available upon request, subject to availability.",
  },
  {
    question: "Is parking available?",
    answer:
      "Yes, we offer valet parking for $55 per night. Self-parking is available nearby for $35 per night. Electric vehicle charging stations are available.",
  },
  {
    question: "Are pets allowed?",
    answer:
      "We welcome dogs under 30 lbs with a $150 pet fee per stay. Please notify us in advance so we can prepare pet amenities for your furry companion.",
  },
  {
    question: "Is there a cancellation policy?",
    answer:
      "Reservations may be cancelled up to 48 hours before arrival for a full refund. Cancellations within 48 hours will be charged for one night.",
  },
  {
    question: "Do you offer airport transfers?",
    answer:
      "Yes, our concierge can arrange luxury sedan or SUV transfers from LAX. Please contact us at least 24 hours in advance to book.",
  },
  {
    question: "What is the dress code for the rooftop bar?",
    answer:
      "Veil Rooftop Bar maintains a smart casual dress code. We kindly ask guests to refrain from athletic wear, flip-flops, and overly casual attire.",
  },
];

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll respond within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="container-wide">
          <AnimatedSection className="text-center">
            <p className="text-small text-valorian-champagne tracking-widest mb-4">
              Get in Touch
            </p>
            <h1 className="text-display-lg">Contact</h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding pt-8 bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Form */}
            <AnimatedSection>
              <div className="bg-secondary/30 rounded p-8 md:p-10">
                <h2 className="font-display text-2xl mb-6">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
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
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">
                      Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full bg-background border border-border rounded px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-valorian-champagne transition-colors"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full bg-background border border-border rounded px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-valorian-champagne transition-colors resize-none"
                      placeholder="How can we help?"
                    />
                  </div>
                  <Button variant="luxury" size="lg" type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-8">
                <div>
                  <h2 className="font-display text-2xl mb-6">Contact Information</h2>
                  <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-4 h-4 text-valorian-champagne" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Address</h3>
                        <p className="text-muted-foreground">
                          8440 Sunset Blvd<br />
                          West Hollywood, CA 90069
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                        <Phone className="w-4 h-4 text-valorian-champagne" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Phone</h3>
                        <a
                          href="tel:+13105551234"
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          +1 (310) 555-1234
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                        <Mail className="w-4 h-4 text-valorian-champagne" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Email</h3>
                        <a
                          href="mailto:hello@thevalorianhotel.com"
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          hello@thevalorianhotel.com
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                        <Clock className="w-4 h-4 text-valorian-champagne" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Hours</h3>
                        <p className="text-muted-foreground">
                          Front Desk: 24/7<br />
                          Concierge: 7am – 11pm
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="font-display text-xl mb-4">Follow Us</h3>
                  <div className="flex gap-3">
                    {["Instagram", "Facebook", "Twitter"].map((social) => (
                      <a
                        key={social}
                        href="#"
                        className="px-4 py-2 bg-secondary rounded text-sm text-muted-foreground hover:bg-secondary/80 hover:text-foreground transition-colors"
                      >
                        {social}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-[400px] md:h-[500px]">
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
      </section>

      {/* FAQ */}
      <section className="section-padding bg-secondary/30">
        <div className="container-narrow">
          <AnimatedSection className="text-center mb-12">
            <p className="text-small text-valorian-champagne tracking-widest mb-4">
              Questions
            </p>
            <h2 className="text-display-md">Frequently Asked</h2>
          </AnimatedSection>

          <AnimatedSection>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-background rounded px-6 border-none shadow-soft"
                >
                  <AccordionTrigger className="text-left font-display text-lg py-5 hover:no-underline hover:text-valorian-champagne">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
