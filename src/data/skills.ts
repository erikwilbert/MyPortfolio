export interface Skill {
  id: string;
  name: string;
  category: string;
  proficiency: "beginner" | "intermediate" | "advanced" | "expert";
}

export const skills: Skill[] = [
  // Languages
  {
    id: "skill-1",
    name: "Java",
    category: "Languages",
    proficiency: "expert",
  },
  {
    id: "skill-2",
    name: "Python",
    category: "Languages",
    proficiency: "advanced",
  },
  {
    id: "skill-3",
    name: "JavaScript",
    category: "Languages",
    proficiency: "advanced",
  },
  {
    id: "skill-3b",
    name: "TypeScript",
    category: "Languages",
    proficiency: "advanced",
  },
  {
    id: "skill-3c",
    name: "SQL",
    category: "Languages",
    proficiency: "expert",
  },

  // Backend
  {
    id: "skill-4",
    name: "Spring Boot",
    category: "Backend",
    proficiency: "advanced",
  },
  {
    id: "skill-5",
    name: "REST API",
    category: "Backend",
    proficiency: "advanced",
  },
  {
    id: "skill-6",
    name: "JPA/Hibernate",
    category: "Backend",
    proficiency: "advanced",
  },

  // Frontend
  {
    id: "skill-7",
    name: "React",
    category: "Frontend",
    proficiency: "advanced",
  },
  {
    id: "skill-8",
    name: "Next.js",
    category: "Frontend",
    proficiency: "advanced",
  },
  {
    id: "skill-9",
    name: "Tailwind CSS",
    category: "Frontend",
    proficiency: "advanced",
  },

  // Databases
  {
    id: "skill-10",
    name: "PostgreSQL",
    category: "Databases",
    proficiency: "advanced",
  },
  {
    id: "skill-11",
    name: "MySQL",
    category: "Databases",
    proficiency: "advanced",
  },
  {
    id: "skill-12",
    name: "MongoDB",
    category: "Databases",
    proficiency: "intermediate",
  },

  // DevOps & Cloud
  {
    id: "skill-13",
    name: "Docker",
    category: "DevOps & Cloud",
    proficiency: "advanced",
  },
  {
    id: "skill-14",
    name: "AWS EC2",
    category: "DevOps & Cloud",
    proficiency: "advanced",
  },
  {
    id: "skill-15",
    name: "GitHub Actions",
    category: "DevOps & Cloud",
    proficiency: "advanced",
  },

  // Monitoring
  {
    id: "skill-16",
    name: "Grafana",
    category: "Monitoring",
    proficiency: "intermediate",
  },
  {
    id: "skill-17",
    name: "Prometheus",
    category: "Monitoring",
    proficiency: "intermediate",
  },
];

export const skillCategories = [
  "Languages",
  "Backend",
  "Frontend",
  "Databases",
  "DevOps & Cloud",
  "Monitoring",
];
