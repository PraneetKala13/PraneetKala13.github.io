
import { Code, Palette, Zap, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const skills = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Creating responsive and interactive user interfaces with modern frameworks',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js']
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Designing intuitive and beautiful user experiences that delight users',
      technologies: ['Figma', 'Adobe XD', 'Prototyping', 'User Research']
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed, accessibility, and best practices',
      technologies: ['Web Vitals', 'SEO', 'A11y', 'PWA']
    },
    {
      icon: Heart,
      title: 'Problem Solving',
      description: 'Turning complex challenges into elegant solutions with creative thinking',
      technologies: ['Algorithm Design', 'System Architecture', 'Code Review']
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I'm a passionate developer with a love for creating digital experiences that make a difference. 
              With a background in both design and development, I bring a unique perspective to every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Code size={48} className="text-primary" />
                  </div>
                  <p className="text-muted-foreground">Your photo would go here</p>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2 space-y-6">
              <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                I started my journey in web development 5 years ago, driven by curiosity and a desire to build 
                things that matter. Since then, I've worked on numerous projects ranging from small business 
                websites to large-scale applications.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open source 
                projects, or enjoying the outdoors. I believe in continuous learning and staying up-to-date 
                with the latest industry trends.
              </p>
              <div className="flex flex-wrap gap-2 pt-4">
                {['JavaScript', 'React', 'TypeScript', 'Node.js', 'Python', 'AWS'].map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card 
                key={skill.title} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-primary/10 hover:border-primary/30"
              >
                <CardContent className="p-6">
                  <div className="mb-4">
                    <skill.icon size={40} className="text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{skill.title}</h4>
                  <p className="text-muted-foreground text-sm mb-4">{skill.description}</p>
                  <div className="space-y-1">
                    {skill.technologies.map((tech) => (
                      <div 
                        key={tech}
                        className="text-xs text-primary bg-primary/5 px-2 py-1 rounded inline-block mr-1 mb-1"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
