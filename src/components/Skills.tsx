import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Cpu, 
  Shield, 
  Cloud, 
  BarChart3, 
  Zap, 
  Lightbulb,
  Wrench,
  Brain
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Cpu,
      title: "Electronics & Hardware",
      color: "text-primary",
      skills: [
        { name: "VLSI Design", level: 95 },
        { name: "Analog Circuits", level: 90 },
        { name: "Embedded Systems", level: 88 },
        { name: "Signal Processing", level: 85 }
      ]
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      color: "text-accent",
      skills: [
        { name: "Network Security", level: 92 },
        { name: "IAM Implementation", level: 88 },
        { name: "Risk Assessment", level: 85 },
        { name: "CCNA Protocols", level: 90 }
      ]
    },
    {
      icon: Cloud,
      title: "Cloud & Infrastructure",
      color: "text-primary",
      skills: [
        { name: "AWS Services", level: 88 },
        { name: "Infrastructure Design", level: 85 },
        { name: "DevOps Practices", level: 80 },
        { name: "Cloud Security", level: 87 }
      ]
    },
    {
      icon: BarChart3,
      title: "Data & AI",
      color: "text-accent",
      skills: [
        { name: "Predictive Modeling", level: 90 },
        { name: "Data Visualization", level: 88 },
        { name: "Machine Learning", level: 82 },
        { name: "Python/MATLAB", level: 92 }
      ]
    }
  ];

  const programmingLanguages = [
    "Python", "C++", "C", "MATLAB", "Verilog", "VHDL", "JavaScript", "SQL"
  ];

  const certifications = [
    "Microsoft Azure Fundamentals",
    "Cisco CCNA",
    "Google Cloud Platform",
    "IBM Data Science",
    "AWS Solutions Architect"
  ];

  const softSkills = [
    "Problem Solving", "Research Thinking", "Adaptability", 
    "Team Leadership", "Technical Communication", "Project Management"
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skill set spanning electronics, cybersecurity, and emerging technologies
          </p>
        </div>

        {/* Core Technical Skills */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={category.title} 
                className="card-gradient p-8 hover-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg bg-${category.color.includes('primary') ? 'primary' : 'accent'}/10 mr-4`}>
                    <Icon className={`h-6 w-6 ${category.color}`} />
                  </div>
                  <h3 className="text-xl font-heading font-semibold">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-foreground font-medium">{skill.name}</span>
                        <span className="text-muted-foreground text-sm">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Additional Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Programming Languages */}
          <Card className="card-gradient p-6 hover-scale">
            <div className="flex items-center mb-4">
              <Zap className="h-5 w-5 text-primary mr-2" />
              <h4 className="font-heading font-semibold">Programming Languages</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {programmingLanguages.map((lang) => (
                <Badge key={lang} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                  {lang}
                </Badge>
              ))}
            </div>
          </Card>

          {/* Certifications */}
          <Card className="card-gradient p-6 hover-scale">
            <div className="flex items-center mb-4">
              <Lightbulb className="h-5 w-5 text-accent mr-2" />
              <h4 className="font-heading font-semibold">Certifications</h4>
            </div>
            <div className="space-y-2">
              {certifications.map((cert) => (
                <div key={cert} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent/60 rounded-full"></div>
                  <span className="text-sm text-muted-foreground">{cert}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Soft Skills */}
          <Card className="card-gradient p-6 hover-scale">
            <div className="flex items-center mb-4">
              <Brain className="h-5 w-5 text-primary mr-2" />
              <h4 className="font-heading font-semibold">Core Competencies</h4>
            </div>
            <div className="space-y-2">
              {softSkills.map((skill) => (
                <div key={skill} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary/60 rounded-full"></div>
                  <span className="text-sm text-muted-foreground">{skill}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Emerging Technologies Focus */}
        <div className="mt-16 text-center">
          <Card className="card-gradient p-8 max-w-4xl mx-auto hover-scale">
            <Wrench className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="text-2xl font-heading font-bold mb-4">
              Emerging Technology <span className="gradient-text">Focus Areas</span>
            </h3>
            <div className="grid md:grid-cols-4 gap-4 mt-6">
              {['IoT Integration', 'Quantum Computing', 'AI Hardware', 'Chip Design'].map((tech) => (
                <div key={tech} className="text-center p-4 rounded-lg bg-muted/30 hover:bg-primary/10 transition-colors">
                  <p className="font-medium text-foreground">{tech}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;