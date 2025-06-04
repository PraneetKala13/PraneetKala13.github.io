
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
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
      
      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-500/20 rounded-full animate-float"></div>
      <div className="absolute bottom-32 right-20 w-16 h-16 bg-sky-400/30 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-lime-600/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>

      <div className="container mx-auto px-2 py-20 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
              Hello, I'm Praneet Jayant Kala
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-3xl mx-auto">
              Recently graduated from KTH 🎓, I'm a tech enthusiast with an energetic drive to build innovative digital solutions that merge creativity with functionality. 
              I thrive in collaborative environments and bring a positive, forward-thinking mindset to every project I undertake—always balancing 
              optimism with realism and determination. As J.R.R. Tolkien once said, "Not all those who wander are lost"—a line that reflects 
              my belief in curiosity, adaptability, and purposeful exploration in the ever-evolving tech landscape.
            </p>
            <p className="text-lg text-muted-foreground/80 mb-8 max-w-2xl mx-auto">
              Specializing in Project Management, Digital Systems, Systems Engineering and Design Thinking, transforming complex ideas into elegant, user-centric applications that make a meaningful impact.
            </p>
          </div>

          <div className="animate-slide-up flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={scrollToProjects}
            >
              Explore My Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-4 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105"
              onClick={() => scrollToSection('contact')}
            >
              Let's Connect
            </Button>
          </div>

          {/* Social Links */}
          <div className="animate-slide-up flex items-center justify-center space-x-6 mb-12" style={{ animationDelay: '0.4s' }}>
            <a href="https://github.com/PraneetKala13?tab=repositories" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 transition-colors duration-300 hover:scale-110">
                <Github size={28} />
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/praneet-kala-0b165678/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 transition-colors duration-300 hover:scale-110">
                <Linkedin size={28} />
              </Button>
            </a>
            <a href="mailto:pj.kala333@gmail.com">
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 transition-colors duration-300 hover:scale-110">
                <Mail size={28} />
              </Button>
            </a>
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
