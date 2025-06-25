
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ResumeSection from '@/components/ResumeSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ResumeSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
