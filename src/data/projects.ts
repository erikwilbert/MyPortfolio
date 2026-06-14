export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  image: string;
  featured: boolean;
  overview: string;
  features: string[];
  architecture: string;
  challenges: string;
  lessonsLearned: string;
}

export const projects: Project[] = [
  {
    id: "project-1",
    slug: "project-1",
    title: "Add your project title here",
    description: "Add a comprehensive project description here.",
    shortDescription: "Add a short description of your project.",
    technologies: ["Technology 1", "Technology 2", "Technology 3"],
    githubUrl: "https://github.com",
    liveUrl: "#",
    image: "/placeholder-project-1.png",
    featured: true,
    overview:
      "Add an overview of what this project is about and why you built it.",
    features: [
      "Add feature 1",
      "Add feature 2",
      "Add feature 3",
      "Add feature 4",
    ],
    architecture:
      "Describe the technical architecture of your project. What are the main components? How do they interact?",
    challenges:
      "Describe the challenges you faced while building this project and how you overcame them.",
    lessonsLearned:
      "Share the key lessons you learned from building this project.",
  },
  {
    id: "project-2",
    slug: "project-2",
    title: "Add another project title",
    description: "Add a comprehensive project description here.",
    shortDescription: "Add a short description of your project.",
    technologies: ["Technology 1", "Technology 2"],
    githubUrl: "https://github.com",
    liveUrl: "#",
    image: "/placeholder-project-2.png",
    featured: true,
    overview: "Add an overview of what this project is about.",
    features: ["Add feature 1", "Add feature 2", "Add feature 3"],
    architecture: "Describe the technical architecture here.",
    challenges: "Describe the challenges here.",
    lessonsLearned: "Share key lessons learned here.",
  },
  {
    id: "project-3",
    slug: "project-3",
    title: "Third project placeholder",
    description: "Add a comprehensive project description here.",
    shortDescription: "Add a short description of your project.",
    technologies: ["Technology 1", "Technology 2", "Technology 3"],
    githubUrl: "https://github.com",
    liveUrl: "#",
    image: "/placeholder-project-3.png",
    featured: false,
    overview: "Add an overview of what this project is about.",
    features: ["Add feature 1", "Add feature 2"],
    architecture: "Describe the technical architecture here.",
    challenges: "Describe the challenges here.",
    lessonsLearned: "Share key lessons learned here.",
  },
];
