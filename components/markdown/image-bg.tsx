import React from "react";
import Image from "./image";

interface ImageWithGridBgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  size?: number;
  maxWidth?: string;
}

export default function ImageWithGridBg({
  className = "",
  style = {},
  size = 8, // Padding (closer to edges if smaller)
  maxWidth = "max-w-3xl",
  alt = "Documentation image",
  ...props
}: ImageWithGridBgProps) {
  return (
    <div
      className={`relative mx-auto my-6 ${maxWidth} w-full rounded-3xl overflow-hidden shadow-xl border border-neutral-200 dark:border-neutral-700 bg-white/80 dark:bg-neutral-900/80 flex items-center justify-center ${className}`}
      style={{ ...style, padding: `${size}px` }}
    >
      {/* Fond grille SVG */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="grid-pattern-light"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#e5e7eb" strokeWidth="1" />
          </pattern>
          <pattern
            id="grid-pattern-dark"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#374151" strokeWidth="1" />
          </pattern>
        </defs>
        {/* Light mode */}
        <rect className="block dark:hidden" width="100%" height="100%" fill="url(#grid-pattern-light)" />
        {/* Dark mode */}
        <rect className="hidden dark:block" width="100%" height="100%" fill="url(#grid-pattern-dark)" />
      </svg>
      {/* Image optimisée avec le composant local */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <Image
          {...props}
          alt={alt}
          className="rounded-2xl max-w-full h-auto object-contain"
          style={{ display: "block", margin: "auto", maxHeight: "600px" }}
        />
      </div>
    </div>
  );
}

 