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
    title: "Overview",
    href: "/overview",
    noLink: true,
    items: [
      { title: "Introduction", href: "/introduction", icon: "BookOpen" },
      { title: "Perks", href: "/perks", icon: "Gift" },
    ],
  },
  {
    title: "Security",
    href: "/security",
    noLink: true,
    items: [
      { title: "Antinuke", href: "/antinuke", icon: "ShieldX" },
      { title: "Moderation", href: "/moderation", icon: "ShieldCheck" },
      { title: "Fakepermissions", href: "/fakepermissions", icon: "Fingerprint" }
    ],
  },

  {
    title: "Server",
    href: "/server",
    noLink: true,
    items: [
      /*{ title: "Roles", href: "/roles", icon: "UserCheck", 
        noLink: true, 
        items: [
          { title: "Vanity Roles", href: "/vanity"}, 
          { title: "Booster Roles", href: "/booster"},
          { title: "Reactions Roles", href: "/reactions"}
        ],
      },*/
      { title: "Messages", href: "/messages", icon: "MessagesSquare",
        noLink:true, 
        items: [
          { title: "System", href: "/system"}, 
          //{ title: "Autoresponder", href: "/autoresponder"},
        ],
      },
      { title: "Roles", href: "/roles", icon: "User",
        noLink:true, 
        items: [
          { title: "Booster", href: "/booster"},
        ],
      },
      { title: "Alias", href: "/alias", icon: "Command"},
      { title: "VoiceMaster", href: "/voicemaster", icon: "Radio"},
      { title: "Leveling", href: "/levels", icon: "Trophy"},
      { title: "Bump Reminders", href: "/bump", icon: "Bell"},
      { title: "Logging", href: "/logging", icon: "FileText"},
    ],
  },

  {
    title: "Miscellanous",
    href: "/miscellanous",
    noLink: true,
    items: [
      { title: "Music", href: "/music", icon: "Music" },
      { title: "Webhooks", href: "/webhooks", icon: "Webhook" },
      { title: "Giveaways", href: "/giveaways", icon: "PartyPopper" },
    ],
  },

/*
  {
    title: "Integration",
    href: "/integrations",
    noLink: true,
    items: [
      { title: "Lastfm", href: "/lastfm", icon: "FaLastfm" },
    ],
  },
*/
  {
    title: "Ressources",
    href: "/ressources",
    noLink: true,
    items: [
      { title: "Syntax", href: "/syntax", icon: "Terminal" },
      { title: "Script", href: "/script", icon: "FileCode", noLink: true,
        items :[
          { title: "Embeds", href: "/embeds", icon: "Code"},
          { title: "Placeholders", href: "/placeholders", icon: "Braces"},
        ], 
      },
      { title: "Permissions", href: "/permissions", icon: "ScrollText" },
      { title: "Translate", href: "/translate", icon: "Languages"},

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
