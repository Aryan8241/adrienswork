import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  BarChart3, 
  Cloud, 
  Cpu,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "Cybersecurity Strategy & IAM",
      description: "Comprehensive security audits, implementation of Identity and Access Management systems, and development of robust cybersecurity frameworks for enterprise environments.",
      features: [
        "Network Security Assessment",
        "IAM Implementation",
        "Risk Mitigation Strategies",
        "Compliance Frameworks"
      ],
      technologies: ["CCNA", "Azure AD", "Multi-factor Auth", "SIEM"],
      pricing: "Starting at $150/hour",
      color: "border-primary/30 hover:border-primary/60"
    },
    {
      icon: BarChart3,
      title: "Predictive Modeling & Analytics",
      description: "Advanced data analysis and machine learning solutions to extract actionable insights from complex datasets, enabling data-driven decision making.",
      features: [
        "Statistical Analysis",
        "Machine Learning Models",
        "Data Visualization",
        "Performance Optimization"
      ],
      technologies: ["Python", "MATLAB", "TensorFlow", "Tableau"],
      pricing: "Project-based from $2,000",
      color: "border-accent/30 hover:border-accent/60"
    },
    {
      icon: Cloud,
      title: "AWS Infrastructure & Optimization",
      description: "Design and deployment of scalable, secure cloud infrastructure using AWS services, with focus on cost optimization and performance enhancement.",
      features: [
        "Architecture Design",
        "Cost Optimization",
        "Security Implementation",
        "Performance Monitoring"
      ],
      technologies: ["AWS EC2", "Lambda", "RDS", "CloudFormation"],
      pricing: "Starting at $2,500/project",
      color: "border-primary/30 hover:border-primary/60"
    },
    {
      icon: Cpu,
      title: "Electronics System Design",
      description: "Custom electronic circuit design, amplifier optimization, and embedded system development for specialized hardware applications.",
      features: [
        "Circuit Design & Analysis",
        "Amplifier Optimization",
        "Frequency Response Modeling",
        "Prototyping & Testing"
      ],
      technologies: ["VLSI", "MATLAB", "Proteus", "Altium Designer"],
      pricing: "Consultation from $100/hour",
      color: "border-accent/30 hover:border-accent/60"
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Professional <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Specialized consulting and technical services to drive innovation and security in your organization
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.title} 
                className={`card-gradient p-8 hover-scale border-2 transition-all duration-300 ${service.color}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className="p-3 rounded-lg bg-primary/10 mr-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-bold text-foreground mb-2">{service.title}</h3>
                      <p className="text-accent font-medium text-sm">{service.pricing}</p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                  <div className="space-y-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-muted/50 text-muted-foreground">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Button variant="neon" className="w-full group">
                  Inquire About This Service
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Card>
            );
          })}
        </div>

        {/* Additional Information */}
        <div className="text-center">
          <Card className="card-gradient p-8 max-w-4xl mx-auto hover-scale">
            <h3 className="text-2xl font-heading font-bold mb-4">
              Why Choose <span className="gradient-text">Aryan Dasgupta</span>?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Proven Expertise</h4>
                <p className="text-sm text-muted-foreground">Multiple certifications and hands-on experience across diverse technology domains</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-accent" />
                </div>
                <h4 className="font-semibold mb-2">Data-Driven Results</h4>
                <p className="text-sm text-muted-foreground">Focus on measurable outcomes and continuous optimization for maximum ROI</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cpu className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Cutting-Edge Innovation</h4>
                <p className="text-sm text-muted-foreground">Integration of latest technologies including AI, IoT, and quantum computing principles</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;