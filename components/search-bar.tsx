"use client";
import { useState } from "react";
import { page_routes, ROUTES } from "@/lib/routes-config";
import Link from "next/link";

// Fonction pour retrouver le chemin complet d'une page à partir de ROUTES
function findBreadcrumb(href: string, routes = ROUTES, parents: string[] = []): string[] | null {
  for (const route of routes) {
    const currentPath = [...parents, route.title];
    if (route.href === href) return currentPath;
    if (route.items) {
      // On construit le href complet pour les sous-pages
      for (const sub of route.items) {
        const fullHref = route.href + sub.href;
        if (fullHref === href) return [...currentPath, sub.title];
        if (sub.items) {
          const found = findBreadcrumb(href, [sub], currentPath);
          if (found) return found;
        }
      }
    }
  }
  return null;
}

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);

  const results =
    query.length > 1
      ? page_routes.filter((route) =>
          route.title.toLowerCase().includes(query.toLowerCase())
        )
      : [];

  return (
    <div className="relative w-56">
      <input
        type="text"
        className="w-full px-3 py-1.5 rounded-md border border-neutral-300 dark:border-neutral-700 bg-background text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setShowResults(true)}
        onBlur={() => setTimeout(() => setShowResults(false), 150)}
      />
      {showResults && results.length > 0 && (
        <div className="absolute z-20 mt-1 w-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-md shadow-lg max-h-60 overflow-y-auto">
          {results.map((route) => {
            const breadcrumbArr = findBreadcrumb(route.href) || [route.title];
            const breadcrumb = breadcrumbArr.length <= 2
              ? route.title
              : breadcrumbArr.join(" / ");
            return (
              <Link
                key={route.href}
                href={route.href.startsWith("/docs") ? route.href : `/docs${route.href}`}
                className="block px-3 py-2 text-sm hover:bg-blue-100 dark:hover:bg-neutral-800 transition-colors"
                onClick={() => setShowResults(false)}
              >
                {breadcrumb}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
} 