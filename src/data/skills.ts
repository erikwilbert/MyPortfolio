export interface Skill {
  id: string;
  name: string;
  category: string;
  proficiency: "beginner" | "intermediate" | "advanced" | "expert";
}

export const skills: Skill[] = [
  // Languages
  {
    id: "skill-1a",
    name: "Java",
    category: "Languages",
    proficiency: "expert",
  },
  {
    id: "skill-1b",
    name: "Python",
    category: "Languages",
    proficiency: "expert",
  },
  {
    id: "skill-1c",
    name: "JavaScript",
    category: "Languages",
    proficiency: "intermediate",
  },
  {
    id: "skill-1d",
    name: "TypeScript",
    category: "Languages",
    proficiency: "intermediate",
  },
  {
    id: "skill-1e",
    name: "SQL",
    category: "Languages",
    proficiency: "advanced",
  },
  {
    id: "skill-1f",
    name: "Dart",
    category: "Languages",
    proficiency: "intermediate",
  },
  {
    id: "skill-1g",
    name: "Rust",
    category: "Languages",
    proficiency: "intermediate",
  },

  // Backend
  {
    id: "skill-2a",
    name: "Spring Boot",
    category: "Backend",
    proficiency: "advanced",
  },
  {
    id: "skill-2b",
    name: "Django",
    category: "Backend",
    proficiency: "advanced",
  },
  {
    id: "skill-2c",
    name: "Express.js",
    category: "Backend",
    proficiency: "intermediate",
  },
  {
    id: "skill-2d",
    name: "REST API",
    category: "Backend",
    proficiency: "advanced",
  },
  {
    id: "skill-2e",
    name: "JPA/Hibernate",
    category: "Backend",
    proficiency: "intermediate",
  },

  // Frontend
  {
    id: "skill-3a",
    name: "React",
    category: "Frontend",
    proficiency: "advanced",
  },
  {
    id: "skill-3b",
    name: "Next.js",
    category: "Frontend",
    proficiency: "advanced",
  },
  {
    id: "skill-3c",
    name: "Tailwind CSS",
    category: "Frontend",
    proficiency: "advanced",
  },
  {
    id: "skill-3d",
    name: "Flutter",
    category: "Frontend",
    proficiency: "intermediate",
  },

  // Databases
  {
    id: "skill-4a",
    name: "PostgreSQL",
    category: "Databases",
    proficiency: "advanced",
  },
  {
    id: "skill-4b",
    name: "MySQL",
    category: "Databases",
    proficiency: "intermediate",
  },

  // DevOps & Cloud
  {
    id: "skill-5a",
    name: "Docker",
    category: "DevOps & Cloud",
    proficiency: "intermediate",
  },
  {
    id: "skill-5b",
    name: "AWS EC2",
    category: "DevOps & Cloud",
    proficiency: "intermediate",
  },
  {
    id: "skill-5c",
    name: "GitHub Actions",
    category: "DevOps & Cloud",
    proficiency: "advanced",
  },

  // Monitoring
  {
    id: "skill-6a",
    name: "Grafana",
    category: "Monitoring",
    proficiency: "intermediate",
  },
  {
    id: "skill-6b",
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
