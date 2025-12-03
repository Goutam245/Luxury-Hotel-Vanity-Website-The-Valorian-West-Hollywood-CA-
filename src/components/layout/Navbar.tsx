import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Rooms", href: "/rooms" },
  { name: "Dining", href: "/dining" },
  { name: "Experiences", href: "/experiences" },
  { name: "About", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-soft py-4"
            : "bg-transparent py-6"
        )}
      >
        <nav className="container-wide flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="font-display text-2xl md:text-3xl tracking-wider text-foreground hover:text-valorian-champagne transition-colors duration-300"
          >
            <span className="font-light">THE</span>{" "}
            <span className="font-medium">VALORIAN</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "link-underline font-body text-sm tracking-wide uppercase transition-colors duration-300",
                  location.pathname === link.href
                    ? "text-valorian-champagne"
                    : "text-foreground hover:text-valorian-champagne"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Book Now Button (Desktop) */}
          <div className="hidden lg:block">
            <Button variant="luxury" size="default" asChild>
              <a href="#book-now">Book Now</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col h-full"
            >
              {/* Mobile Header */}
              <div className="flex items-center justify-between p-6">
                <Link
                  to="/"
                  className="font-display text-2xl tracking-wider text-foreground"
                >
                  <span className="font-light">THE</span>{" "}
                  <span className="font-medium">VALORIAN</span>
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-foreground"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Mobile Links */}
              <nav className="flex-1 flex flex-col items-center justify-center gap-8">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <Link
                      to={link.href}
                      className={cn(
                        "font-display text-3xl tracking-wide transition-colors duration-300",
                        location.pathname === link.href
                          ? "text-valorian-champagne"
                          : "text-foreground hover:text-valorian-champagne"
                      )}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Mobile CTA */}
              <div className="p-6">
                <Button variant="luxury" size="lg" className="w-full" asChild>
                  <a href="#book-now">Book Now</a>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
