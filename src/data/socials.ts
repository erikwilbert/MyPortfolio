export interface Social {
  id: string;
  name: string;
  url: string;
  icon: string;
}

export const socials: Social[] = [
  {
    id: "social-1",
    name: "GitHub",
    url: "https://github.com",
    icon: "github",
  },
  {
    id: "social-2",
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: "linkedin",
  },
  {
    id: "social-3",
    name: "Twitter",
    url: "https://twitter.com",
    icon: "twitter",
  },
  {
    id: "social-4",
    name: "Email",
    url: "mailto:your.email@example.com",
    icon: "mail",
  },
];
