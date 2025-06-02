
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-warm-gradient-soft"></div>
      
      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float"></div>
      <div className="absolute bottom-32 right-20 w-16 h-16 bg-accent/30 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-primary/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
              Hello, I'm Your Name
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              A passionate developer creating beautiful and functional digital experiences
            </p>
          </div>

          <div className="animate-slide-up flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-4 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="animate-slide-up flex items-center justify-center space-x-6 mb-12" style={{animationDelay: '0.4s'}}>
            <Button variant="ghost" size="icon" className="hover:bg-primary/10 transition-colors duration-300">
              <Github size={24} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-primary/10 transition-colors duration-300">
              <Linkedin size={24} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-primary/10 transition-colors duration-300">
              <Mail size={24} />
            </Button>
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
