import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";

const quickLinks = [
  { name: "Rooms & Suites", href: "/rooms" },
  { name: "Dining & Bars", href: "/dining" },
  { name: "Experiences", href: "/experiences" },
  { name: "Gallery", href: "/gallery" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-wide py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <h3 className="font-display text-2xl tracking-wider">
                <span className="font-light">THE</span>{" "}
                <span className="font-medium">VALORIAN</span>
              </h3>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              A fever dream in white — where elegance flirts with temptation on the Sunset Strip.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10 hover:border-primary-foreground/40 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg mb-6 tracking-wide">Explore</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg mb-6 tracking-wide">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-1 text-valorian-champagne" />
                <span className="text-sm text-primary-foreground/70">
                  8440 Sunset Blvd<br />
                  West Hollywood, CA 90069
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-valorian-champagne" />
                <a
                  href="tel:+13105551234"
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  +1 (310) 555-1234
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-valorian-champagne" />
                <a
                  href="mailto:hello@thevalorianhotel.com"
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  hello@thevalorianhotel.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display text-lg mb-6 tracking-wide">Newsletter</h4>
            <p className="text-sm text-primary-foreground/70 mb-4">
              Subscribe for exclusive offers and updates.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-primary-foreground/10 border border-primary-foreground/20 rounded px-4 py-3 text-sm placeholder:text-primary-foreground/50 focus:outline-none focus:border-valorian-champagne transition-colors"
              />
              <button
                type="submit"
                className="w-full bg-valorian-champagne text-primary font-medium py-3 rounded text-sm tracking-wide hover:bg-valorian-gold transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-wide py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} The Valorian. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-xs text-primary-foreground/50 hover:text-primary-foreground transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-primary-foreground/50 hover:text-primary-foreground transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
