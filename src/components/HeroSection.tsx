import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FloatingIcons from '../components/FloatingIcons';
import { personalInfo } from '@/data/profileData';

const ExternalLinkIcon = () => (
  <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-nature-gradient-soft" />

      {/* Floating icons — behind everything */}
      <FloatingIcons isEnabled={true} />

      {/* ── Left: text content ── */}
      <div className="relative z-10 flex flex-1 items-center justify-center px-8 py-24">
        <div className="w-full max-w-lg text-center">

          {/* Positioning badge */}
          <div className="animate-fade-in inline-flex items-center px-4 py-2 bg-emerald-100/80 backdrop-blur-sm rounded-full text-emerald-800 text-sm font-medium mb-6 border border-emerald-200/50">
            <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse" />
            {personalInfo.positioning} · {personalInfo.subPositioning}
          </div>

          {/* Name */}
          <h1 className="animate-fade-in text-5xl md:text-6xl lg:text-7xl font-bold text-gradient pb-2 mb-6 leading-tight">
            {personalInfo.name}
          </h1>

          {/* CTA buttons */}
          <div className="animate-slide-up flex flex-wrap justify-center gap-4 mb-6">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={scrollToProjects}
            >
              Explore My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>

          {/* Location */}
          <div className="animate-slide-up text-sm text-muted-foreground mb-7" style={{ animationDelay: '0.2s' }}>
            <span className="inline-flex items-center justify-center gap-1.5">
              <span>📍</span>
              {personalInfo.location} · {personalInfo.locationNote}
            </span>
          </div>

          {/* Currently Building — SoiQet + Peachscore (two separate links, one card) */}
          <div className="animate-slide-up flex justify-center" style={{ animationDelay: '0.3s' }}>
            <div className="inline-flex flex-col w-full bg-white/70 backdrop-blur-sm rounded-2xl border border-violet-200/60 shadow-md overflow-hidden">

              {/* SoiQet link */}
              <a
                href="https://soiqet.lovable.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 px-6 py-5 hover:bg-violet-50/60 transition-colors duration-200"
              >
                <img src="/SoiQet.png" alt="SoiQet" className="h-12 w-auto object-contain flex-shrink-0" />
                <div className="h-10 w-px bg-violet-200" />
                <div className="text-left flex-1">
                  <p className="text-[10px] font-semibold text-violet-500 uppercase tracking-widest leading-none mb-1.5">Currently Building</p>
                  <p className="text-base font-semibold text-foreground leading-tight group-hover:text-violet-700 transition-colors duration-200">SoiQet — AI-enabled SaaS platform</p>
                </div>
                <span className="text-violet-400 group-hover:text-violet-600 transition-colors duration-200">
                  <ExternalLinkIcon />
                </span>
              </a>

              {/* Peachscore link */}
              <a
                href="https://www.peachscore.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 px-6 py-3 bg-orange-50/80 border-t border-orange-100/80 hover:bg-orange-100/60 transition-colors duration-200"
              >
                <img src="/peachscore_logo.jfif" alt="Peachscore" className="h-5 w-5 rounded object-cover flex-shrink-0" />
                <p className="text-xs text-orange-600 font-medium flex-1 text-left group-hover:text-orange-700 transition-colors duration-200">Peachscore Startup Programme · Cohort 30</p>
                <span className="text-orange-400 group-hover:text-orange-600 transition-colors duration-200">
                  <ExternalLinkIcon />
                </span>
              </a>

            </div>
          </div>

        </div>
      </div>

      {/* ── Right: full-height photo panel ── */}
      <div className="hidden md:block relative w-[42%] lg:w-[45%] flex-shrink-0">
        <img
          src="/Me.jpg"
          alt="Praneet Jayant Kala"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: 'center 5%' }}
        />
        {/* Soft left-side fade so photo blends into background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--background))] via-transparent to-transparent w-24" />
      </div>

      {/* Scroll indicator */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce cursor-pointer hover:bg-primary/10 transition-colors duration-300"
        onClick={scrollToAbout}
      >
        <ArrowDown size={24} />
      </Button>
    </section>
  );
};

const scrollToSection = (sectionId: string) => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
};

export default HeroSection;
