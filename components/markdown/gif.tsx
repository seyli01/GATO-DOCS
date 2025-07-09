"use client";

import { useTheme } from "next-themes";

interface GifWithGridBgProps {
  src: string;
  alt: string;
  size?: number;
  className?: string;
}

export default function GifWithGridBg({ 
  src, 
  alt, 
  size = 20, 
  className = "" 
}: GifWithGridBgProps) {
  const { theme } = useTheme();
  
  const gridColor = theme === "dark" ? "#374151" : "#d1d5db";
  const gridSize = size;

  return (
    <div className={`relative inline-block p-6 bg-background rounded-xl border border-border ${className}`}>
      {/* Grille en arrière-plan */}
      <div 
        className="absolute inset-0 pointer-events-none rounded-xl"
        style={{
          backgroundImage: `
            linear-gradient(${gridColor} 1px, transparent 1px),
            linear-gradient(90deg, ${gridColor} 1px, transparent 1px)
          `,
          backgroundSize: `${gridSize}px ${gridSize}px`,
          opacity: theme === "dark" ? 0.4 : 0.6
        }}
      />
      
      {/* GIF - Pas d'optimisation Next.js */}
      <img
        src={src}
        alt={alt}
        className="relative z-10 rounded-lg max-w-full h-auto"
        style={{ 
          maxWidth: '100%', 
          height: 'auto',
          imageRendering: 'pixelated',
          objectFit: 'contain'
        }}
      />
    </div>
  );
} 