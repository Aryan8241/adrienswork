import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Linkedin, 
  Github, 
  ArrowUp,
  Heart
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    "Cybersecurity Consulting",
    "AWS Infrastructure",
    "Predictive Modeling",
    "Electronics Design"
  ];

  return (
    <footer className="relative bg-background/50 backdrop-blur-sm border-t border-border">
      <div className="container py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-heading font-bold gradient-text mb-4">
              Aryan Dasgupta
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              Electronics Engineer specializing in cybersecurity, AI hardware integration, 
              and innovative system design. Building the future of secure, intelligent technology.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:contact@aryandasgupta.com"
                className="p-2 rounded-lg bg-muted/30 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 group"
              >
                <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-muted/30 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 group"
              >
                <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-muted/30 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 group"
              >
                <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Services</h4>
            <div className="space-y-3">
              {services.map((service) => (
                <div key={service} className="text-muted-foreground">
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-muted-foreground mb-4 md:mb-0">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>by Aryan Dasgupta</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm">
              Privacy Policy
            </a>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground text-sm">
              © 2024 All rights reserved
            </span>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <Button
        onClick={scrollToTop}
        variant="glass"
        size="icon"
        className="fixed bottom-8 right-8 rounded-full group hover:scale-110 transition-all duration-300"
      >
        <ArrowUp className="h-5 w-5 group-hover:-translate-y-1 transition-transform" />
      </Button>
    </footer>
  );
};

export default Footer;