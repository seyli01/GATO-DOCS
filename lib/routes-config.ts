// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true; // noLink will create a route segment (section) but cannot be navigated
  items?: EachRoute[];
  tag?: string;
  icon?: string;
};

export const ROUTES: EachRoute[] = [
  {
    title: "Getting Started",
    href: "/getting-started",
    noLink: true,
    icon: "RocketIcon",
    items: [
      { title: "Introduction", href: "/introduction", icon: "BookOpenIcon" },
    ],
  },
  {
    title: "Security",
    href: "/security",
    noLink: true,
    icon: "ShieldIcon",
    items: [
      { title: "Moderation", href: "/moderation", icon: "ShieldCheckIcon" },
      { title: "Fakepermissions", href: "/fpermissons", icon: "FingerprintIcon" }
    ],
  },
  {
    title: "Server",
    href: "/server",
    noLink: true,
    icon: "Settings",
    items: [
      { title: "Roles", href: "/roles", icon: "UserCheck", 
        noLink: true, 
        items: [
          { title: "Vanity Roles", href: "/vanity"}, 
          { title: "Booster Roles", href: "/booster"},
          { title: "Reactions Roles", href: "/reactions"}
        ],
      },
      { title: "Messages", href: "/messages", icon: "MessagesSquare",
        noLink:true, 
        items: [
          { title: "System", href: "/system"}, 
          //{ title: "Autoresponder", href: "/autoresponder"},
        ],
      }
    ],
  },
  {
    title: "Integration",
    href: "/integrations",
    noLink: true,
    icon: "BoxIcon",
    items: [
      { title: "Lastfm", href: "/lastfm", icon: "FaLastfm" },
    ],
  },
  {
    title: "Ressources",
    href: "/ressources",
    noLink: true,
    icon: "Lightbulb",
    items: [
      { title: "Embeds", href: "/embeds", icon: "Code", tag: "new" },
    ],
  },
];

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();
