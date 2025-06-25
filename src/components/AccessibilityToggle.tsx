
import React from 'react';
import { Settings, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useSettings } from '@/contexts/SettingsContext';

const AccessibilityToggle = () => {
  const { animationsEnabled, toggleAnimations } = useSettings();

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full shadow-lg bg-background/80 backdrop-blur-sm hover:bg-background/90 transition-all duration-300"
            aria-label="Accessibility settings"
          >
            <Settings size={20} />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-64 p-4" side="top" align="end">
          <div className="space-y-4">
            <h3 className="font-semibold text-sm">Accessibility Settings</h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                {animationsEnabled ? <Eye size={16} /> : <EyeOff size={16} />}
                <span className="text-sm">Background Animations</span>
              </div>
              <Switch
                checked={animationsEnabled}
                onCheckedChange={toggleAnimations}
                aria-label="Toggle background animations"
              />
            </div>
            <p className="text-xs text-muted-foreground">
              Toggle floating background animations for better focus and reduced motion.
            </p>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default AccessibilityToggle;
