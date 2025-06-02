
import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gradient mb-4">Praneet Jayant Kala</h3>
              <p className="text-background/80 max-w-md mx-auto">
                Thanks for visiting my portfolio. Let's create something amazing together!
              </p>
            </div>

            <div className="border-t border-background/20 pt-8">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <p className="text-background/60 text-sm mb-4 md:mb-0 flex items-center">
                  Made with <Heart size={16} className="mx-1 text-red-400" fill="currentColor" /> using React & Tailwind CSS
                </p>
                <p className="text-background/60 text-sm">
                  © {currentYear} Praneet Jayant Kala. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to top button */}
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
