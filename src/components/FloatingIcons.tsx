import React, { useEffect, useState } from 'react';
import { Code, Laptop, Smartphone, Database, Cloud, Zap, Globe, Cpu, Terminal, Wifi } from 'lucide-react';

type IconSource =
    | { type: 'lucide', component: React.ComponentType<any> }
    | { type: 'emoji', symbol: string }
    | { type: 'image', src: string, alt?: string };

interface FloatingIconData {
    id: number;
    icon: IconSource;
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

const iconSources: IconSource[] = [
    { type: 'lucide', component: Code },
    { type: 'lucide', component: Laptop },
    { type: 'emoji', symbol: '🐍' },
    { type: 'emoji', symbol: '☕' },
    { type: 'emoji', symbol: '📊' },
    { type: 'emoji', symbol: '⚛️' },
    { type: 'emoji', symbol: '📱' },
    { type: 'emoji', symbol: '🔧' },
    { type: 'emoji', symbol: '🐳' }
    //{ type: 'image', src: '/icons/matlab.png', alt: 'MATLAB' }, // example local image
    //{ type: 'image', src: '/icons/sim.png', alt: 'Simulink' }
];

const FloatingIcons: React.FC<FloatingIconsProps> = ({ isEnabled }) => {
    const [icons, setIcons] = useState<FloatingIconData[]>([]);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

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
        const initialIcons: FloatingIconData[] = Array.from({ length: iconCount }, (_, i) => {
            const icon = iconSources[Math.floor(Math.random() * iconSources.length)];
            return {
                id: i,
                icon,
                x: Math.random() * dimensions.width,
                y: Math.random() * dimensions.height,
                speed: 0.2 + Math.random() * 0.8,
                direction: Math.random() * Math.PI * 2,
                opacity: 0.03 + Math.random() * 0.07,
                size: 20 + Math.random() * 40
            };
        });
        setIcons(initialIcons);
    }, [isEnabled, dimensions, iconSources]);

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
            {
                icons.map(({ id, icon, x, y, opacity, size }) => (
                    <div
                        key={id}
                        className="absolute transition-opacity duration-1000"
                        style={{
                            left: `${x}px`,
                            top: `${y}px`,
                            opacity,
                            width: `${size}px`,
                            height: `${size}px`,
                            transform: `translate3d(0, 0, 0)`
                        }}
                    >
                        {icon.type === 'lucide' && (
                            <icon.component size={size} className="text-primary" style={{ filter: 'blur(0.5px)' }} />
                        )}
                        {icon.type === 'emoji' && (
                            <span style={{ fontSize: size, filter: 'blur(0.5px)' }}>{icon.symbol}</span>
                        )}
                        {icon.type === 'image' && (
                            <img
                                src={icon.src}
                                alt={icon.alt || ''}
                                style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'blur(0.5px)' }}
                            />
                        )}
                    </div>
                ))
            }
        </div>
    );
};

export default FloatingIcons;
