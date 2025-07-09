import React from "react";

export default function ImageWithGridBg({
  className = "",
  style = {},
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <div
      className={`relative mx-auto my-12 max-w-3xl w-full rounded-3xl overflow-hidden shadow-xl border border-neutral-200 dark:border-neutral-700 bg-white/80 dark:bg-neutral-900/80 p-8 flex items-center justify-center ${className}`}
      style={{ ...style }}
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
      {/* Image */}
      <img
        {...props}
        className="relative z-10 rounded-2xl max-w-full h-auto object-contain"
        style={{ display: "block", margin: "auto", maxHeight: "600px" }}
      />
    </div>
  );
} 