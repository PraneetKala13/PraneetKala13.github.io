import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import CapabilitiesSection from '@/components/CapabilitiesSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ResumeSection from '@/components/ResumeSection';
import InterestsSection from '@/components/InterestsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace('#', '');
    // Small delay to let the page render before scrolling
    const timer = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
    return () => clearTimeout(timer);
  }, [hash]);

  return (
    <div className="min-h-screen relative">
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <CapabilitiesSection />
        <AboutSection />
        <ProjectsSection />
        <ResumeSection />
        <InterestsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
