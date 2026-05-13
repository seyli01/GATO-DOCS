import NextLink from "next/link";
import { ComponentProps } from "react";

export default function Link({ href, ...props }: ComponentProps<"a">) {
  if (!href) return null;
  const isExternal = href.startsWith("http") || href.startsWith("//");
  
  return (
    <NextLink
      href={href}
      {...props}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    />
  );
}

