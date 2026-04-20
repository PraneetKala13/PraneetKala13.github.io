import { Heart, ArrowUp, PersonStanding, Zap, Users, Workflow } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { interests } from '@/data/profileData';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  PersonStanding, Zap, Users, Workflow,
};

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">

          <h3 className="text-2xl font-bold text-gradient mb-2">Praneet Jayant Kala</h3>
          <p className="text-background/70 max-w-md mx-auto text-sm mb-8">
            Thanks for visiting. Let's create something meaningful together.
          </p>

          {/* Interests strip */}
          <div className="mb-8">
            <p className="text-background/40 text-[11px] uppercase tracking-widest mb-3">Beyond Work</p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {interests.map((interest) => {
                const Icon = iconMap[interest.icon] || Zap;
                return (
                  <span
                    key={interest.title}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-background/10 rounded-full text-background/60 text-xs border border-background/20"
                  >
                    <Icon size={11} />
                    {interest.title}
                  </span>
                );
              })}
            </div>
          </div>

          <div className="border-t border-background/20 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-background/50 text-xs flex items-center">
              Made with <Heart size={11} className="mx-1 text-red-400" fill="currentColor" /> using React & Tailwind CSS
            </p>
            <p className="text-background/50 text-xs">
              © {currentYear} Praneet Jayant Kala. All rights reserved.
            </p>
          </div>

        </div>
      </div>

      <Button
        onClick={scrollToTop}
        size="icon"
        className="fixed bottom-8 right-8 bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 z-40"
      >
        <ArrowUp size={20} />
      </Button>
    </footer>
  );
};

export default Footer;
