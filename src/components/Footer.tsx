import { Heart, ArrowUp, PersonStanding, Zap, Users, Workflow } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { interests, personalInfo } from '@/data/profileData';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  PersonStanding, Zap, Users, Workflow,
};

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-foreground text-background py-14 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">

          {/* CTA */}
          <h3 className="text-2xl font-bold text-gradient mb-2">Praneet Jayant Kala</h3>
          <p className="text-background/60 text-sm mb-6">
            Open to new opportunities, collaborations and conversations.
          </p>
          <div className="flex items-center justify-center gap-3 mb-10">
            <Button
              asChild
              className="bg-gradient-to-r from-emerald-500 to-sky-500 hover:from-emerald-600 hover:to-sky-600 text-white shadow-lg px-6"
            >
              <a href={`mailto:${personalInfo.email}`}>Get In Touch</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="icon"
              className="border-background/30 text-background hover:bg-background/10 hover:border-background/50"
            >
              <a href={personalInfo.linkedIn} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="icon"
              className="border-background/30 text-background hover:bg-background/10 hover:border-background/50"
            >
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>
            </Button>
          </div>

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
