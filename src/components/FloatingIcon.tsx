
import React, { useEffect, useState } from 'react';
import { Code, Laptop, Smartphone, Database, Cloud, Zap, Globe, Cpu, Terminal, Wifi } from 'lucide-react';

interface FloatingIcon {
  id: number;
  Icon: React.ComponentType<any>;
  x: number;
  y: number;
  speed: number;
  direction: number;
  opacity: number;
  size: number;
}

interface FloatingIconsProps {
  isEnabled: boolean;
}

const FloatingIcons: React.FC<FloatingIconsProps> = ({ isEnabled }) => {
  const [icons, setIcons] = useState<FloatingIcon[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const iconComponents = [Code, Laptop, Smartphone, Database, Cloud, Zap, Globe, Cpu, Terminal, Wifi];

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    if (!isEnabled || dimensions.width === 0) return;

    // Generate initial icons
    const iconCount = Math.min(15, Math.floor(dimensions.width / 100)); // Responsive icon count
    const initialIcons: FloatingIcon[] = Array.from({ length: iconCount }, (_, i) => ({
      id: i,
      Icon: iconComponents[Math.floor(Math.random() * iconComponents.length)],
      x: Math.random() * dimensions.width,
      y: Math.random() * dimensions.height,
      speed: 0.2 + Math.random() * 0.8, // 0.2 to 1.0
      direction: Math.random() * Math.PI * 2,
      opacity: 0.03 + Math.random() * 0.07, // 0.03 to 0.1
      size: 20 + Math.random() * 40 // 20 to 60px
    }));

    setIcons(initialIcons);
  }, [isEnabled, dimensions, iconComponents]);

  useEffect(() => {
    if (!isEnabled || icons.length === 0) return;

    const animateIcons = () => {
      setIcons(prevIcons =>
        prevIcons.map(icon => {
          let newX = icon.x + Math.cos(icon.direction) * icon.speed;
          let newY = icon.y + Math.sin(icon.direction) * icon.speed;
          let newDirection = icon.direction;

          // Bounce off edges
          if (newX <= 0 || newX >= dimensions.width - icon.size) {
            newDirection = Math.PI - icon.direction;
            newX = Math.max(0, Math.min(dimensions.width - icon.size, newX));
          }
          if (newY <= 0 || newY >= dimensions.height - icon.size) {
            newDirection = -icon.direction;
            newY = Math.max(0, Math.min(dimensions.height - icon.size, newY));
          }

          return {
            ...icon,
            x: newX,
            y: newY,
            direction: newDirection
          };
        })
      );
    };

    const intervalId = setInterval(animateIcons, 50); // 20 FPS for smooth animation
    return () => clearInterval(intervalId);
  }, [isEnabled, icons.length, dimensions]);

  if (!isEnabled) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {icons.map(icon => {
        const { Icon, x, y, opacity, size, id } = icon;
        return (
          <div
            key={id}
            className="absolute transition-opacity duration-1000"
            style={{
              left: `${x}px`,
              top: `${y}px`,
              opacity,
              transform: `translate3d(0, 0, 0)` // Hardware acceleration
            }}
          >
            <Icon
              size={size}
              className="text-primary"
              style={{ filter: 'blur(0.5px)' }} // Subtle blur for softer appearance
            />
          </div>
        );
      })}
    </div>
  );
};

export default FloatingIcon;
