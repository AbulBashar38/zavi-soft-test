export type FooterLinkItem = {
  id: number;
  name: string;
  url: string;
};

export type FooterSocialItem = FooterLinkItem & {
  icon: string;
};

export const categories: FooterLinkItem[] = [
  { id: 1, name: "Runners", url: "/categories/runners" },
  { id: 2, name: "Sneakers", url: "/categories/sneakers" },
  { id: 3, name: "Basketball", url: "/categories/basketball" },
  { id: 4, name: "Outdoor", url: "/categories/outdoor" },
  { id: 5, name: "Golf", url: "/categories/golf" },
  { id: 6, name: "Hiking", url: "/categories/hiking" },
];

export const company: FooterLinkItem[] = [
  { id: 1, name: "About", url: "/about" },
  { id: 2, name: "Contact", url: "/contact" },
  { id: 3, name: "Blogs", url: "/blogs" },
];

export const socials: FooterSocialItem[] = [
  { id: 1, name: "Facebook", icon: "/images/facebook.svg", url: "#" },
  { id: 2, name: "Instagram", icon: "/images/instagram.svg", url: "#" },
  { id: 3, name: "Twitter", icon: "/images/twitter.svg", url: "#" },
  { id: 4, name: "TikTok", icon: "/images/tiktok.svg", url: "#" },
];
