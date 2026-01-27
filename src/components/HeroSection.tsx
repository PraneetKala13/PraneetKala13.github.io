import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FloatingIcons from '../components/FloatingIcons';
import { personalInfo, professionalSummary, socialLinks } from '@/data/profileData';

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('capabilities');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-nature-gradient-soft"></div>

      {/* Floating tech icons */}
      <FloatingIcons isEnabled={true} />

      <div className="container mx-auto px-6 py-16 relative z-10 max-w-7xl">
        <div className="text-center mx-auto">
          <div className="animate-fade-in">
            {/* Professional Positioning Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-emerald-100/80 backdrop-blur-sm rounded-full text-emerald-800 text-sm font-medium mb-6 border border-emerald-200/50">
              <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></span>
              {personalInfo.positioning} · {personalInfo.subPositioning}
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
              {personalInfo.name}
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-4xl mx-auto leading-relaxed">
              {professionalSummary.short} Skilled in workflow automation, process orchestration and data-informed decision-making, with a strong focus on turning strategy into execution systems.
            </p>

            <p className="text-lg text-muted-foreground/80 mb-8 max-w-3xl mx-auto">
              Background in engineering and innovation management. Over the past year, deepened expertise through hackathons, AI events, major tech conferences and formal training in AI and project management.
            </p>
          </div>

          <div className="animate-slide-up flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={scrollToProjects}
            >
              Explore My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="animate-slide-up flex items-center justify-center space-x-6 mb-12" style={{ animationDelay: '0.4s' }}>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 transition-colors duration-300 hover:scale-110">
                <Github size={28} />
              </Button>
            </a>
            <a href={personalInfo.linkedIn} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 transition-colors duration-300 hover:scale-110">
                <Linkedin size={28} />
              </Button>
            </a>
            <a href={`mailto:${personalInfo.email}`}>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 transition-colors duration-300 hover:scale-110">
                <Mail size={28} />
              </Button>
            </a>
          </div>

          {/* Location Badge */}
          <div className="animate-slide-up text-sm text-muted-foreground mb-8" style={{ animationDelay: '0.5s' }}>
            <span className="inline-flex items-center">
              <span className="mr-2">📍</span>
              {personalInfo.location} · {personalInfo.locationNote}
            </span>
          </div>

          {/* Scroll indicator */}
          <Button
            variant="ghost"
            size="icon"
            className="animate-bounce cursor-pointer hover:bg-primary/10 transition-colors duration-300"
            onClick={scrollToAbout}
          >
            <ArrowDown size={24} />
          </Button>
        </div>
      </div>
    </section>
  );
};

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default HeroSection;
