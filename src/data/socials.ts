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
    url: "https://github.com/erikwilbert",
    icon: "github",
  },
  {
    id: "social-2",
    name: "LinkedIn",
    url: "https://linkedin.com/in/erik-wilbert-4711ab330/",
    icon: "linkedin",
  },
  {
    id: "social-3",
    name: "Gmail",
    url: "mailto:erikwilbert.work@gmail.com",
    icon: "gmail",
  }
];
