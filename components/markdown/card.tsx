import Link from "next/link";
import * as LucideIcons from "lucide-react";
import { cn } from "@/lib/utils";
import { page_routes } from "@/lib/routes-config";

export default function Card({
  title,
  description,
  href,
  icon,
  className,
}: {
  title: string;
  description?: string;
  href: string;
  icon?: string;
  className?: string;
}) {
  const LucideIcon = icon ? ((LucideIcons as unknown) as Record<string, React.ComponentType<{ className?: string }>>)[icon] : null;

  let targetHref = href;
  if (href.startsWith("/")) {
    const isExactPage = page_routes.some((r) => r.href === href);
    if (!isExactPage) {
      const cleanHref = href.endsWith("/") ? href.slice(0, -1) : href;
      const firstChild = page_routes.find((r) =>
        r.href.startsWith(`${cleanHref}/`)
      );
      if (firstChild) {
        targetHref = firstChild.href;
      }
    }
  }

  return (
    <Link
      href={targetHref}
      className={cn(
        "group relative flex flex-col gap-2 rounded-xl border p-5 transition-all hover:bg-stone-100 dark:hover:bg-stone-900 hover:border-primary/30 no-underline",
        className
      )}
    >
      <div className="flex items-center gap-3">
        {LucideIcon && (
          <LucideIcon className="h-5 w-5 text-primary" />
        )}
        <h3 className="font-semibold text-base !my-0 text-foreground">{title}</h3>
      </div>
      {description && (
        <p className="text-sm text-muted-foreground !my-0 leading-relaxed">
          {description}
        </p>
      )}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
         <LucideIcons.ArrowUpRight className="h-4 w-4 text-muted-foreground" />
      </div>
    </Link>
  );
}
