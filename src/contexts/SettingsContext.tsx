
import React, { createContext, useContext, useState, useEffect } from 'react';

interface SettingsContextType {
  animationsEnabled: boolean;
  toggleAnimations: () => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};

interface SettingsProviderProps {
  children: React.ReactNode;
}

export const SettingsProvider: React.FC<SettingsProviderProps> = ({ children }) => {
  const [animationsEnabled, setAnimationsEnabled] = useState(() => {
    // Check for user preference or reduced motion preference
    const saved = localStorage.getItem('animations-enabled');
    if (saved !== null) return JSON.parse(saved);
    
    // Respect user's reduced motion preference
    return !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    localStorage.setItem('animations-enabled', JSON.stringify(animationsEnabled));
  }, [animationsEnabled]);

  const toggleAnimations = () => {
    setAnimationsEnabled(prev => !prev);
  };

  return (
    <SettingsContext.Provider value={{ animationsEnabled, toggleAnimations }}>
      {children}
    </SettingsContext.Provider>
  );
};
