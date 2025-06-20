export interface ContactMethod {
  href: string;
  iconType: 'x' | 'github' | 'email';
  gradientFrom: string;
  gradientTo: string;
  platform: string;
  handle: string;
  target?: string;
  rel?: string;
}

export const contactMethods: ContactMethod[] = [
  {
    href: "https://twitter.com/void2610",
    iconType: 'x',
    gradientFrom: "from-gray-900",
    gradientTo: "to-black",
    platform: "X (Twitter)",
    handle: "@void2610",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    href: "https://github.com/void2610",
    iconType: 'github',
    gradientFrom: "from-gray-700",
    gradientTo: "to-gray-800",
    platform: "GitHub",
    handle: "@void2610",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    href: "mailto:contact@void2610.dev",
    iconType: 'email',
    gradientFrom: "from-blue-500",
    gradientTo: "to-blue-600",
    platform: "Email",
    handle: "contact@void2610.dev",
  },
];