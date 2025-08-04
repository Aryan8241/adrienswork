import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ExternalLink, 
  Github, 
  Zap, 
  Car,
  BarChart,
  Filter
} from "lucide-react";
import { useState } from "react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: "Amplifier Design Optimization",
      category: "Hardware",
      description: "Advanced analog amplifier design with focus on gain optimization, stability analysis, and distortion reduction using MATLAB simulations and frequency response modeling.",
      image: "/lovable-uploads/a73c3b56-a42a-40b3-8596-086c25754e17.png",
      technologies: ["MATLAB", "Analog Circuits", "Signal Processing", "Frequency Analysis"],
      features: [
        "99% Gain Stability Achieved",
        "THD Reduced by 40%",
        "Wide Frequency Response",
        "Low Noise Design"
      ],
      links: {
        github: "#",
        demo: "#"
      },
      status: "Completed",
      color: "border-primary/30"
    },
    {
      title: "Human-Following Robotic Car",
      category: "Robotics",
      description: "Autonomous robotic vehicle with advanced PID control system for human tracking and following. Simulated in Proteus and designed for real-world automation applications.",
      image: "/lovable-uploads/a73c3b56-a42a-40b3-8596-086c25754e17.png",
      technologies: ["Arduino", "PID Control", "Proteus", "Sensors", "C++"],
      features: [
        "Real-time Human Detection",
        "Adaptive Speed Control",
        "Obstacle Avoidance",
        "Stable Tracking Algorithm"
      ],
      links: {
        github: "#",
        demo: "#"
      },
      status: "Completed",
      color: "border-accent/30"
    },
    {
      title: "IoT Security Framework",
      category: "Cybersecurity",
      description: "Comprehensive security framework for IoT devices with encryption, authentication protocols, and real-time threat monitoring capabilities.",
      image: "/lovable-uploads/a73c3b56-a42a-40b3-8596-086c25754e17.png",
      technologies: ["Python", "IoT Protocols", "Encryption", "Network Security"],
      features: [
        "End-to-End Encryption",
        "Device Authentication",
        "Threat Detection",
        "Secure Communication"
      ],
      links: {
        github: "#",
        demo: "#"
      },
      status: "In Progress",
      color: "border-primary/30"
    },
    {
      title: "Predictive Maintenance System",
      category: "AI",
      description: "Machine learning-based predictive maintenance system for industrial equipment using sensor data analysis and anomaly detection algorithms.",
      image: "/lovable-uploads/a73c3b56-a42a-40b3-8596-086c25754e17.png",
      technologies: ["Python", "TensorFlow", "Data Analytics", "AWS"],
      features: [
        "95% Accuracy Rate",
        "Real-time Monitoring",
        "Cost Reduction",
        "Automated Alerts"
      ],
      links: {
        github: "#",
        demo: "#"
      },
      status: "Completed",
      color: "border-accent/30"
    }
  ];

  const categories = ['All', 'Hardware', 'Robotics', 'Cybersecurity', 'AI'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getStatusColor = (status: string) => {
    return status === 'Completed' ? 'bg-success/20 text-success' : 'bg-warning/20 text-warning';
  };

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions spanning electronics, robotics, cybersecurity, and AI
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "glass"}
              onClick={() => setActiveFilter(category)}
              className="group"
            >
              <Filter className="w-4 h-4 mr-2" />
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.title} 
              className={`card-gradient overflow-hidden hover-scale border-2 ${project.color}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
                <div className="absolute top-4 right-4 flex gap-2">
                  <Badge className={getStatusColor(project.status)}>
                    {project.status}
                  </Badge>
                  <Badge variant="secondary" className="bg-background/80">
                    {project.category}
                  </Badge>
                </div>
                
                {/* Project Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {project.category === 'Hardware' && <Zap className="h-16 w-16 text-primary/60" />}
                  {project.category === 'Robotics' && <Car className="h-16 w-16 text-accent/60" />}
                  {project.category === 'Cybersecurity' && <Zap className="h-16 w-16 text-primary/60" />}
                  {project.category === 'AI' && <BarChart className="h-16 w-16 text-accent/60" />}
                </div>
              </div>

              <div className="p-6">
                {/* Project Title */}
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="font-semibold text-foreground mb-2">Key Achievements:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary/60 rounded-full"></div>
                        <span className="text-xs text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-muted/50 text-muted-foreground text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1 group">
                    <Github className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    Code
                  </Button>
                  <Button variant="neon" size="sm" className="flex-1 group">
                    <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    Demo
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="card-gradient p-8 max-w-2xl mx-auto hover-scale">
            <h3 className="text-2xl font-heading font-bold mb-4">
              Interested in <span className="gradient-text">Collaboration</span>?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how we can work together on innovative projects that push the boundaries of technology.
            </p>
            <Button variant="hero" size="lg" className="group">
              Start a Project
              <ExternalLink className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;