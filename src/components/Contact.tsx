import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  MapPin, 
  Clock, 
  Linkedin, 
  Github, 
  Send,
  CheckCircle
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "contact@aryandasgupta.com",
      description: "Primary contact for all inquiries"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "India",
      description: "Available for remote work globally"
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "Mon - Fri, 9 AM - 6 PM IST",
      description: "Response within 24 hours"
    }
  ];

  const socialLinks = [
    { icon: Linkedin, name: "LinkedIn", url: "#", color: "hover:text-blue-400" },
    { icon: Github, name: "GitHub", url: "#", color: "hover:text-gray-300" },
    { icon: Mail, name: "Email", url: "mailto:contact@aryandasgupta.com", color: "hover:text-primary" }
  ];

  const services = [
    "Cybersecurity Consulting",
    "AWS Infrastructure Design", 
    "Predictive Modeling",
    "Electronics System Design",
    "Technical Training",
    "Research Collaboration"
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to innovate together? Reach out for consultations, collaborations, or technical discussions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card 
                    key={info.title} 
                    className="card-gradient p-6 hover-scale"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                        <p className="text-foreground font-medium mb-1">{info.value}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Available Services */}
            <Card className="card-gradient p-6 hover-scale">
              <h4 className="font-heading font-semibold text-foreground mb-4">Available for:</h4>
              <div className="grid grid-cols-2 gap-2">
                {services.map((service) => (
                  <div key={service} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Social Links */}
            <Card className="card-gradient p-6 hover-scale">
              <h4 className="font-heading font-semibold text-foreground mb-4">Connect Online:</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      className={`p-3 rounded-lg bg-muted/30 hover:bg-primary/10 transition-all duration-300 ${social.color} group`}
                      aria-label={social.name}
                    >
                      <Icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    </a>
                  );
                })}
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="card-gradient p-8 hover-scale">
            <form className="space-y-6">
              <div>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-2">Send a Message</h3>
                <p className="text-muted-foreground">Let's discuss your project requirements</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input 
                    id="name" 
                    placeholder="Your full name"
                    className="bg-background/50 border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your.email@domain.com"
                    className="bg-background/50 border-border focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject *
                </label>
                <Input 
                  id="subject" 
                  placeholder="Project consultation, collaboration, etc."
                  className="bg-background/50 border-border focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Tell me about your project, requirements, timeline, and how I can help..."
                  rows={6}
                  className="bg-background/50 border-border focus:border-primary resize-none"
                />
              </div>

              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>All communications are confidential and secure</span>
              </div>

              <Button variant="hero" size="lg" className="w-full group">
                <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <Card className="card-gradient p-8 max-w-4xl mx-auto hover-scale">
            <h3 className="text-2xl font-heading font-bold mb-4">
              Ready to <span className="gradient-text">Innovate</span>?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Whether you need cybersecurity consulting, AWS infrastructure design, or cutting-edge electronics solutions, 
              I'm here to help bring your vision to life with precision and expertise.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Quick Response', 'Flexible Engagement', 'Proven Results', 'Competitive Rates'].map((benefit) => (
                <Badge key={benefit} variant="secondary" className="bg-primary/10 text-primary">
                  {benefit}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;