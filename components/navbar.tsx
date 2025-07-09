import { ModeToggle } from "@/components/theme-toggle";
import AlgoliaSearch from "./algolia-search";
import { page_routes } from "@/lib/routes-config";

const algolia_props = {
  appId: process.env.ALGOLIA_APP_ID!,
  indexName: process.env.ALGOLIA_INDEX!,
  apiKey: process.env.ALGOLIA_SEARCH_API_KEY!,
};

export function Logo() {
  return (
    <span className="font-bold text-xl text-primary">NebulaBot</span>
  );
}

export function NavMenu() {
  return (
    <div className="flex items-center gap-3">
      {/* Ajoute ici des liens ou des boutons de navigation si besoin */}
    </div>
  );
}

export function Navbar() {
  return (
    <nav className="w-full border-b h-16 sticky top-0 z-50 bg-background">
      <div className="sm:container mx-auto w-[95vw] h-full flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a
            href={`/docs${page_routes[0].href}`}
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Documentation
          </a>
        </div>
        <div className="flex items-center gap-3">
          <AlgoliaSearch {...algolia_props} />
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
