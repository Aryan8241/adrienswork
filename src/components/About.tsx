import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, MapPin, Calendar } from "lucide-react";

const About = () => {
  const achievements = [
    { icon: GraduationCap, title: "B.Tech ECE", desc: "GL Bajaj Institute of Technology" },
    { icon: Award, title: "3 Research Patents", desc: "Innovation in Electronics" },
    { icon: MapPin, title: "VLSI Specialization", desc: "Chip Design Focus" },
    { icon: Calendar, title: "Multiple Certifications", desc: "Microsoft, Cisco, Google" }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            About <span className="gradient-text">Aryan Dasgupta</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about pushing the boundaries of electronics and AI integration
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="space-y-6 animate-slide-up">
            <Card className="card-gradient p-8 hover-scale">
              <h3 className="text-2xl font-heading font-semibold mb-4 text-primary">Professional Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A passionate and detail-oriented Electronics and Communication Engineering student with a strong foundation in 
                <span className="text-foreground font-medium"> circuit design, embedded systems, and signal processing</span>. 
                My expertise spans across cutting-edge technologies including IoT, Chip Designing, Quantum Computing, and 
                Generative AI–hardware integration.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I offer specialized freelance and consulting services in 
                <span className="text-accent font-medium"> cybersecurity, predictive modeling, and AWS infrastructure design</span>, 
                helping organizations build secure, intelligent systems that drive innovation and efficiency.
              </p>
            </Card>

            {/* Specializations */}
            <Card className="card-gradient p-6 hover-scale">
              <h4 className="text-lg font-semibold mb-4 text-primary">Core Specializations</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'Circuit Design', 'Embedded Systems', 'Signal Processing', 'VLSI Design',
                  'IoT Integration', 'Quantum Computing', 'Cybersecurity', 'AWS Infrastructure',
                  'Predictive Modeling', 'AI Hardware', 'Data Visualization'
                ].map((spec) => (
                  <Badge key={spec} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                    {spec}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card 
                  key={achievement.title} 
                  className="card-gradient p-6 hover-scale group transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{achievement.title}</h4>
                      <p className="text-sm text-muted-foreground">{achievement.desc}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Education Timeline */}
        <div className="mt-16">
          <h3 className="text-3xl font-heading font-bold text-center mb-12">
            Education & <span className="gradient-text">Certifications</span>
          </h3>
          
          <div className="max-w-4xl mx-auto">
            <Card className="card-gradient p-8 hover-scale">
              <div className="space-y-8">
                <div className="border-l-2 border-primary/30 pl-8 relative">
                  <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 top-0"></div>
                  <h4 className="text-xl font-semibold text-primary mb-2">B.Tech in Electronics and Communication Engineering</h4>
                  <p className="text-foreground font-medium">GL Bajaj Institute of Technology and Management</p>
                  <p className="text-muted-foreground">Specialization: VLSI & Chip Design Focus</p>
                </div>

                <div className="border-l-2 border-accent/30 pl-8 relative">
                  <div className="absolute w-4 h-4 bg-accent rounded-full -left-2 top-0"></div>
                  <h4 className="text-xl font-semibold text-accent mb-2">Professional Certifications</h4>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    {[
                      'Microsoft Azure Fundamentals',
                      'Cisco CCNA Networking',
                      'Google Cloud Platform',
                      'Accenture Technology',
                      'Electronic Arts Game Dev',
                      'IBM Data Fundamentals'
                    ].map((cert) => (
                      <div key={cert} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-accent/60 rounded-full"></div>
                        <span className="text-muted-foreground">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;