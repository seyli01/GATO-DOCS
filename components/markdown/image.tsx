import { ComponentProps } from "react";
import NextImage from "next/image";

type Height = ComponentProps<typeof NextImage>["height"];
type Width = ComponentProps<typeof NextImage>["width"];

export default function Image({
  src,
  alt = "alt",
  width = 1200,
  height = 800,
  ...props
}: ComponentProps<"img">) {
  if (!src) return null;
  
  // Si c'est un GIF, utiliser une balise img normale pour éviter l'optimisation
  if (src.toLowerCase().endsWith('.gif')) {
    return (
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        style={{ 
          maxWidth: '100%', 
          height: 'auto',
          imageRendering: 'pixelated',
          objectFit: 'contain'
        }}
        {...props}
      />
    );
  }
  
  return (
    <NextImage
      src={src}
      alt={alt}
      width={width as Width}
      height={height as Height}
      quality={100}
      priority={true}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
      style={{
        objectFit: 'contain',
        imageRendering: 'auto'
      }}
      {...props}
    />
  );
}
