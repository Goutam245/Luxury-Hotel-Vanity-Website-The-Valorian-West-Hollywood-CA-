import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
  className?: string;
}

export function PageHero({ title, subtitle, image, className }: PageHeroProps) {
  return (
    <section className={cn("relative h-[60vh] md:h-[70vh] flex items-end", className)}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container-wide pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {subtitle && (
            <p className="text-small text-muted-foreground mb-4">{subtitle}</p>
          )}
          <h1 className="text-display-lg md:text-display-xl">{title}</h1>
        </motion.div>
      </div>
    </section>
  );
}
