import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FloatingIcons from '../components/FloatingIcons';
import { personalInfo } from '@/data/profileData';

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

            {/* Profile Picture and Name */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-6">
              <div className="w-40 md:w-52 overflow-hidden rounded-2xl border-4 border-emerald-200 shadow-2xl flex-shrink-0">
                <img
                  src="/Me.png"
                  alt="Praneet Jayant Kala"
                  className="w-full h-auto object-cover object-top"
                />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-gradient">
                {personalInfo.name}
              </h1>
            </div>

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

          {/* Currently Building — SoiQet */}
          <div className="animate-slide-up flex justify-center mb-10" style={{ animationDelay: '0.6s' }}>
            <a
              href="https://soiqet.lovable.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 px-7 py-4 bg-white/70 backdrop-blur-sm rounded-2xl border border-violet-200/60 shadow-md hover:shadow-lg hover:border-violet-300/80 hover:-translate-y-0.5 transition-all duration-200"
            >
              <span className="text-2xl">🚀</span>
              <div className="h-8 w-px bg-violet-200" />
              <img src="/SoiQet.png" alt="SoiQet" className="h-9 w-auto object-contain" />
              <div className="text-left">
                <p className="text-[11px] font-semibold text-violet-500 uppercase tracking-widest leading-none mb-1">Currently Building</p>
                <p className="text-base font-semibold text-foreground leading-tight group-hover:text-violet-700 transition-colors duration-200">AI-enabled SaaS platform</p>
              </div>
              <svg className="w-4 h-4 text-violet-400 group-hover:text-violet-600 transition-colors duration-200 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
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
