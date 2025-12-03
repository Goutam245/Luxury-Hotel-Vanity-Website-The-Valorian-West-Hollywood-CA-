import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { cn } from "@/lib/utils";

import heroRooftop from "@/assets/hero-rooftop.jpg";
import roomSuite from "@/assets/room-suite.jpg";
import roomPremium from "@/assets/room-premium.jpg";
import roomPenthouse from "@/assets/room-penthouse.jpg";
import diningRestaurant from "@/assets/dining-restaurant.jpg";
import barInterior from "@/assets/bar-interior.jpg";
import neighborhoodSunset from "@/assets/neighborhood-sunset.jpg";
import hotelLobby from "@/assets/hotel-lobby.jpg";
import gallerySpa from "@/assets/gallery-spa.jpg";
import eventsSpace from "@/assets/events-space.jpg";

const categories = ["All", "Rooms", "Dining", "Views", "Spaces"];

const images = [
  { src: heroRooftop, category: "Views", alt: "Rooftop sunset view" },
  { src: roomPremium, category: "Rooms", alt: "Premium King Room" },
  { src: diningRestaurant, category: "Dining", alt: "Ciel Restaurant" },
  { src: hotelLobby, category: "Spaces", alt: "Hotel Lobby" },
  { src: roomSuite, category: "Rooms", alt: "Deluxe Suite" },
  { src: barInterior, category: "Dining", alt: "Mirror Lounge" },
  { src: neighborhoodSunset, category: "Views", alt: "Sunset Strip" },
  { src: roomPenthouse, category: "Rooms", alt: "Signature Penthouse" },
  { src: gallerySpa, category: "Spaces", alt: "Wellness Spa" },
  { src: eventsSpace, category: "Spaces", alt: "Event Space" },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="container-wide">
          <AnimatedSection className="text-center">
            <p className="text-small text-valorian-champagne tracking-widest mb-4">
              Visual Journey
            </p>
            <h1 className="text-display-lg">Gallery</h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="pb-8">
        <div className="container-wide">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-6 py-2 text-sm tracking-wide transition-all duration-300 rounded",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="section-padding pt-8 bg-background">
        <div className="container-wide">
          <motion.div
            layout
            className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="break-inside-avoid"
                >
                  <button
                    onClick={() => setLightboxImage(image.src)}
                    className="w-full reveal-image rounded overflow-hidden shadow-soft hover:shadow-medium transition-shadow duration-300"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className={cn(
                        "w-full object-cover",
                        index % 3 === 0 ? "h-[400px]" : index % 3 === 1 ? "h-[300px]" : "h-[350px]"
                      )}
                      loading="lazy"
                    />
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-primary/95 flex items-center justify-center p-6"
            onClick={() => setLightboxImage(null)}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={lightboxImage}
              alt="Gallery image"
              className="max-w-full max-h-[85vh] object-contain rounded"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}
