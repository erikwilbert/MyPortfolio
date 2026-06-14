export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string | null;
  description: string;
  highlights: string[];
  technologies: string[];
  featured: boolean;
}

export const experiences: Experience[] = [
  {
    id: "exp-1",
    company: "Add company name here",
    position: "Add job title here",
    startDate: "2024-01",
    endDate: null,
    description: "Add a brief description of your role and responsibilities.",
    highlights: [
      "Add achievement or responsibility 1",
      "Add achievement or responsibility 2",
      "Add achievement or responsibility 3",
    ],
    technologies: ["Technology 1", "Technology 2", "Technology 3"],
    featured: true,
  },
  {
    id: "exp-2",
    company: "Add previous company name",
    position: "Add previous job title",
    startDate: "2023-06",
    endDate: "2024-01",
    description:
      "Add a brief description of your role and what you accomplished.",
    highlights: [
      "Add achievement or responsibility 1",
      "Add achievement or responsibility 2",
    ],
    technologies: ["Technology 1", "Technology 2"],
    featured: true,
  },
  {
    id: "exp-3",
    company: "Add another company name",
    position: "Add intern or junior role title",
    startDate: "2023-01",
    endDate: "2023-06",
    description: "Add a brief description of your internship or role.",
    highlights: ["Add achievement 1", "Add achievement 2"],
    technologies: ["Technology 1"],
    featured: true,
  },
];
