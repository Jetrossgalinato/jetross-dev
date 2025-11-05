export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
}

export type TabType = "work" | "studies";

export const workExperience: ExperienceItem[] = [
  {
    id: "work-1",
    title: "Full Stack Developer",
    organization: "Tech Company",
    period: "2023 - Present",
    description:
      "Building scalable web applications using Next.js, React, and TypeScript.",
  },
  {
    id: "work-2",
    title: "Frontend Developer",
    organization: "Startup Inc",
    period: "2021 - 2023",
    description:
      "Developed responsive UI components with React and Tailwind CSS.",
  },
];

export const studiesExperience: ExperienceItem[] = [
  {
    id: "study-1",
    title: "Bachelor of Science in Computer Science",
    organization: "University Name",
    period: "2017 - 2021",
    description:
      "Focused on software engineering, algorithms, and data structures.",
  },
  {
    id: "study-2",
    title: "Online Courses & Certifications",
    organization: "Various Platforms",
    period: "2020 - Present",
    description:
      "Completed courses in web development, machine learning, and cloud computing.",
  },
];
