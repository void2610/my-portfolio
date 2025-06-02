export interface NavigationItem {
  href: string;
  label: string;
}

export interface SocialLink {
  href: string;
  label: string;
  iconType: 'github' | 'x';
  ariaLabel: string;
}

export const mainNavigation: NavigationItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export const socialLinks: SocialLink[] = [
  {
    href: "https://twitter.com/void2610",
    label: "X",
    iconType: 'x',
    ariaLabel: "Twitter",
  },
  {
    href: "https://github.com/void2610",
    label: "GitHub",
    iconType: 'github',
    ariaLabel: "GitHub",
  },
];