import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";
import aryanProfile from "@/assets/aryan-hero-photo.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-primary/10" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="container relative z-10 text-center animate-fade-in">
        {/* Profile Image */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <img 
              src={aryanProfile} 
              alt="Aryan Dasgupta - Electronics Engineer"
              className="w-32 h-32 rounded-full border-4 border-primary/30 shadow-2xl animate-pulse-glow"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 animate-pulse" />
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
          <span className="gradient-text">Electronics Engineer</span>
          <br />
          <span className="text-foreground">Cybersecurity Consultant</span>
          <br />
          <span className="gradient-text">AI Hardware Innovator</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Building secure, intelligent systems with precision and purpose.
          <br />
          <span className="text-accent font-medium">Specializing in VLSI • Embedded Systems • Quantum Computing</span>
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            variant="hero" 
            size="xl"
            onClick={scrollToAbout}
            className="group"
          >
            Explore My Work
            <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
          </Button>
          <Button 
            variant="glass" 
            size="xl"
            className="group"
          >
            <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Download Resume
          </Button>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap justify-center gap-3 text-sm">
          {['VLSI Design', 'Python', 'AWS', 'Cybersecurity', 'Machine Learning', 'IoT'].map((tech) => (
            <span 
              key={tech}
              className="px-4 py-2 bg-muted/50 backdrop-blur-sm border border-border rounded-full text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;