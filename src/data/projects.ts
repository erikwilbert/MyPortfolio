import { assets } from "@/data/assets";

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  technologies: string[];
  githubUrl: string;
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
    slug: "my-portfolio",
    title: "My Portfolio Website",
    description:
      "A modern personal portfolio website built to showcase projects, technical skills, and professional experience. Designed with a strong focus on performance, responsiveness, maintainability, and clean user experience.",
    shortDescription:
      "Personal portfolio website built with Next.js and TypeScript.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS"
    ],
    githubUrl: "https://github.com/erikwilbert/MyPortfolio",
    image: assets.projects.myPortfolio,
    featured: true,
    overview:
      "I built this portfolio to create a central place for showcasing my software engineering projects, technical skills, and career journey. The website serves as both a professional portfolio and a playground for experimenting with modern frontend development practices.",
    features: [
      "Responsive design for desktop and mobile devices",
      "Project showcase with detailed case studies",
      "Skills and technology overview",
      "Professional experience section",
      "Contact and social links integration",
      "Optimized performance and SEO"
    ],
    architecture:
      "The application is built using Next.js with TypeScript for type safety and maintainability. Components are organized using a modular structure, enabling easy expansion and future customization. Static content is managed through structured configuration files to simplify updates.",
    challenges:
      "One challenge was designing a portfolio that balances visual appeal with professional presentation. Another challenge was creating reusable components that allow content updates without modifying core UI logic.",
    lessonsLearned:
      "This project strengthened my understanding of modern React development, component architecture, responsive design, TypeScript, and frontend performance optimization."
  },
  {
    id: "project-2",
    slug: "json-jastip-platform",
    title: "JSON - Jastip Online Nasional Platform",
    description:
      "A full-stack marketplace platform built with Spring Boot and Next.js that enables secure order processing and digital wallet transactions. My contributions included designing the financial subsystem, automating deployments with GitHub Actions, containerizing services with Docker, deploying to AWS EC2, and implementing observability using Prometheus and Grafana.",
    shortDescription:
      "Cloud-native marketplace platform with integrated wallet, payment processing, CI/CD automation, and AWS deployment.",

    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Docker",
      "AWS",
      "Prometheus",
      "Grafana",
      "JUnit"
    ],

    githubUrl: "https://github.com/advprog-2026-B16-project/B16-JSON-backend",
    image: assets.projects.jsonPlatform,
    featured: true,

    overview:
      "JSON (Jastip Online Nasional) is a cloud-based marketplace platform that connects travelers with buyers through integrated order processing and digital wallet services. As the primary contributor for the financial subsystem and deployment infrastructure, I developed the Wallet, Transaction, and Payment modules while also managing containerization, cloud deployment, CI/CD automation, and application monitoring.",

    features: [
      "Digital wallet management",
      "Top-up and withdrawal workflows",
      "Payment processing and balance deduction",
      "Automatic refund handling",
      "Transaction history tracking",
      "Payment state management",
      "Dockerized application deployment",
      "Automated CI/CD pipeline with GitHub Actions",
      "Cloud deployment on AWS EC2",
      "Monitoring and observability with Prometheus and Grafana"
    ],

    architecture:
      "The platform consists of a Spring Boot backend and a Next.js frontend deployed in a containerized environment. I developed the Wallet, Transaction, and Payment modules using a layered architecture and state-based payment workflows. The entire application stack was containerized using Docker and deployed to AWS EC2. I also implemented CI/CD pipelines using GitHub Actions to automate build and deployment processes. Application and infrastructure metrics were collected through Prometheus and visualized using Grafana to improve observability and operational monitoring.",

    challenges:
      "Beyond implementing financial workflows, I was responsible for establishing the deployment infrastructure. This involved configuring Docker environments, provisioning AWS resources, automating deployments through GitHub Actions, and setting up monitoring systems. Maintaining consistency between wallet balances, payment transactions, and order states while ensuring reliable deployments was one of the most challenging aspects of the project.",

    lessonsLearned:
      "Through this project, I learned how to design and implement production-ready backend systems, maintain transactional consistency in financial workflows, and apply software engineering principles such as SOLID, and Design Patterns (State Pattern and Factory Pattern). I also gained practical experience in Docker containerization, AWS deployment, CI/CD automation, and observability using Prometheus and Grafana. Beyond technical implementation, the project strengthened my ability to collaborate within a team, integrate multiple modules into a cohesive system, and manage the full software delivery lifecycle from development to deployment."
  },
  {
    id: "project-3",
    slug: "organization-workflow-discord-bot",
    title: "Organization Workflow Discord Bot",
    description:
      "A custom Discord bot developed to streamline task coordination and status tracking within a student organization. The bot automatically adds predefined reaction options to messages, enabling members to quickly indicate task acceptance, completion status, and progress updates without creating additional communication overhead.",
    shortDescription:
      "Discord bot for task coordination and workflow tracking within an organization.",
    technologies: [
      "Node.js",
      "Discord.js",
      "JavaScript"
    ],
    githubUrl: "https://github.com/erikwilbert/discord-bot-logiskem-reaction",
    image: assets.projects.discordBot,
    featured: true,
    overview:
      "The organization relied heavily on Discord for internal communication, but task assignments and status updates were often difficult to track. To improve visibility and reduce manual follow-ups, I developed a Discord bot that automatically adds workflow reactions to messages, allowing members to quickly communicate whether a task was accepted, completed, or still in progress.",
    features: [
      "Automatic reaction assignment on new messages",
      "Task acceptance tracking through reactions",
      "Task completion and progress indicators",
      "Reduced communication overhead for team coordination",
      "Easy integration into existing Discord channels"
    ],
    architecture:
      "The bot was built using Node.js and Discord.js. It listens for message creation events and automatically attaches predefined workflow reactions. Discord's event-driven architecture enables real-time interaction and status updates without requiring additional user commands.",
    challenges:
      "One challenge was designing a workflow that was simple enough for organization members to adopt while still providing meaningful task tracking. Another challenge was ensuring the bot behaved consistently across different channels and message types.",
    lessonsLearned:
      "This project taught me practical event-driven programming, bot development using Discord APIs, and how to build software that solves real communication problems for end users."
  }
];
