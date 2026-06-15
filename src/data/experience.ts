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
    company: "KMBUI",
    position: "Head of Creative Events Department",
    startDate: "2025-02",
    endDate: "2026-01",
    description:
      "Led the Creative Events Department of KMBUI, overseeing event planning, team coordination, and execution of organizational programs while ensuring effective collaboration across multiple programs.",
    highlights: [
      "Created the initial structure and framework for the Creative Events Department, defining roles, responsibilities, and processes to ensure efficient event planning and execution.",
      "Managed and coordinated department members to deliver organizational events and initiatives.",
      "Planned events division structure, delegated responsibilities, and monitored project execution to ensure timely completion.",
      "Collaborated with other departments to ensure seamless integration and support for organizational events."
    ],
    technologies: [
      "Leadership",
      "Project Management",
      "Team Coordination",
      "Event Planning",
      "Communication",
      "Collaboration"
    ],
    featured: true,
  },

  {
    id: "exp-2",
    company: "FIND IT! 2026",
    position: "AI & Computer Vision Track Hackathon Participant",
    startDate: "2026-03",
    endDate: "2026-05",
    description:
      "Developed an AI-based computer vision solution as part of a hackathon team, focusing on data preparation, model training, and performance optimization using object detection techniques.",
    highlights: [
      "Passed the preliminary selection stage in a national-level AI hackathon organized by UGM.",
      "Prepared and processed datasets for computer vision tasks.",
      "Fine-tuned YOLO-based object detection models to address a real-world problem and improve model performance.",
      "Performed hyperparameter tuning and model optimization to enhance accuracy and efficiency."
    ],
    technologies: [
      "Python",
      "YOLO",
      "Computer Vision",
      "Machine Learning",
      "Data Processing",
      "Model Optimization"
    ],
    featured: true,
  },

  {
    id: "exp-3",
    company: "University of Indonesia Faculty of Computer Science Teaching Assistant Program",
    position: "Teaching Assistant - Operating Systems",
    startDate: "2026-01",
    endDate: "2026-06",
    description:
      "Assisted in the delivery of Operating Systems courses by supporting instruction, assessment, and student learning activities.",
    highlights: [
      "Conducted tutorial and assistance sessions to help students understand operating systems concepts.",
      "Designed mini quizzes to reinforce course topics.",
      "Evaluated assignments and provided feedback to support student learning outcomes."
    ],
    technologies: [
      "Operating Systems",
      "C",
      "Linux",
      "Teaching",
      "Assessment"
    ],
    featured: true,
  },

  {
    id: "exp-4",
    company: "Sanghadana Kathina KMBUI 2025",
    position: "Head of Logistics & Security Division",
    startDate: "2025-06",
    endDate: "2025-11",
    description:
      "Led the Logistics and Security Division for one of KMBUI's major events, ensuring operational and resource readiness, team coordination, and smooth event execution.",
    highlights: [
      "Managed logistics planning, resource allocation, and operational coordination for the event.",
      "Led division members and coordinated with other committees to support event execution.",
      "Developed a Discord reaction-role bot to streamline communication and coordination during event preparation and execution."
    ],
    technologies: [
      "Node.js",
      "Discord.js",
      "JavaScript",
      "Automation",
      "Leadership",
      "Project Management"
    ],
    featured: true,
  },
];

const getExperienceDateValue = (date: string) => {
  const [year, month] = date.split("-").map(Number);
  return year * 12 + month;
};

export const sortExperiencesByLatest = (
  experiencesToSort: Experience[]
): Experience[] =>
  [...experiencesToSort].sort((a, b) => {
    if (a.endDate === null && b.endDate !== null) return -1;
    if (a.endDate !== null && b.endDate === null) return 1;

    const endDateDifference =
      getExperienceDateValue(b.endDate ?? b.startDate) -
      getExperienceDateValue(a.endDate ?? a.startDate);

    if (endDateDifference !== 0) return endDateDifference;

    return (
      getExperienceDateValue(b.startDate) -
      getExperienceDateValue(a.startDate)
    );
  });
