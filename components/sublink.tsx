import { EachRoute } from "@/lib/routes-config";
import Anchor from "./anchor";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { SheetClose } from "@/components/ui/sheet";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useEffect, useState, useMemo } from "react";
import { usePathname } from "next/navigation";
import * as LucideIcons from "lucide-react";
import * as ReactIcons from "react-icons/fa";

export default function SubLink({
  title,
  href,
  items,
  noLink,
  level,
  isSheet,
  tag,
  icon,
}: EachRoute & { level: number; isSheet: boolean }) {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(level == 0);

  useEffect(() => {
    if (path == href || path.includes(href)) setIsOpen(true);
  }, [href, path]);

  const LucideIcon = icon ? ((LucideIcons as unknown) as Record<string, React.ComponentType<{ className?: string }>>)[icon] : null;
  const ReactIcon = icon ? ((ReactIcons as unknown) as Record<string, React.ComponentType<{ className?: string }>>)[icon] : null;
  const Icon = LucideIcon || ReactIcon;

  const targetHref = useMemo(() => {
    if (!noLink || !items || items.length === 0) return href;
    let current: EachRoute[] | undefined = items;
    let path = href;
    while (current && current.length > 0) {
      path += current[0].href;
      current = current[0].items;
    }
    return path;
  }, [href, items, noLink]);

  const Comp = (
    <Anchor
      activeClassName="text-primary dark:font-medium font-semibold"
      href={targetHref}
    >
      {Icon && <Icon className="w-4 h-4 mr-2 inline-block text-muted-foreground" />}
      {title}
      {tag && (
        <span className="dark:bg-blue-700 bg-blue-500 rounded-md px-1.5 py-0.5 mx-2 text-xs text-white !font-normal">
          {tag}
        </span>
      )}
    </Anchor>
  );

  const titleOrLink = isSheet ? (
    <SheetClose asChild>{Comp}</SheetClose>
  ) : (
    Comp
  );

  if (!items) {
    return (
      <div className={cn(
        "flex flex-col",
        level === 1 && "ml-3",
        level >= 2 && "ml-2"
      )}>
        {titleOrLink}
      </div>
    );
  }

  return (
    <div className={cn(
      "flex flex-col gap-1 w-full",
      level === 1 && "ml-3",
      level >= 2 && "ml-2"
    )}>
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger className="w-full pr-5">
          <div className="flex items-center justify-between cursor-pointer w-full">
            <span className="w-[95%] overflow-hidden text-ellipsis text-start">
              {titleOrLink}
            </span>
            <span className="sm:ml-0 -mr-1.5">
              {!isOpen ? (
                <ChevronRight className="h-[0.9rem] w-[0.9rem]" />
              ) : (
                <ChevronDown className="h-[0.9rem] w-[0.9rem]" />
              )}
            </span>
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div
            className={cn(
              "flex flex-col items-start sm:text-sm dark:text-stone-300/85 text-stone-800 ml-0.5 mt-2.5 gap-3",
              level > 0 && "pl-6 border-l ml-2 border-muted"
            )}
          >
            {items?.map((innerLink) => {
              const modifiedItems = {
                ...innerLink,
                href: `${href + innerLink.href}`,
                level: level + 1,
                isSheet,
              };
              return <SubLink key={modifiedItems.href} {...modifiedItems} />;
            })}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
