"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

interface TechStackItem {
  id: string;
  name: string;
  iconName: string;
}

const techStackItems: TechStackItem[] = [
  { id: "html", name: "HTML", iconName: "html5" },
  { id: "css", name: "CSS", iconName: "css3" },
  { id: "typescript", name: "TypeScript", iconName: "typescript" },
  { id: "nextjs", name: "Next.js", iconName: "nextjs" },
  { id: "tailwind", name: "Tailwind CSS", iconName: "tailwindcss" },
  { id: "supabase", name: "Supabase", iconName: "supabase" },
  { id: "react", name: "React.js", iconName: "react" },
  { id: "python", name: "Python", iconName: "python" },
  { id: "javascript", name: "JavaScript", iconName: "js" },
  { id: "nodejs", name: "Node.js", iconName: "nodejs" },
  { id: "git", name: "Git", iconName: "git" },
  { id: "postgresql", name: "PostgreSQL", iconName: "postgresql" },
  { id: "mongodb", name: "MongoDB", iconName: "mongodb" },
  { id: "docker", name: "Docker", iconName: "docker" },
  { id: "firebase", name: "Firebase", iconName: "firebase" },
  { id: "vercel", name: "Vercel", iconName: "vercel" },
];

export default function TechStack() {
  return (
    <div className="flex flex-row flex-wrap items-center gap-12 p-4 transition-colors duration-300">
      <Card className="w-full md:w-[750px] transition-colors duration-300">
        <CardHeader>
          <CardTitle className="text-base sm:text-lg">Tech Stack</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-3">
            {techStackItems.map((tech) => (
              <div
                key={tech.id}
                className="flex flex-col items-center justify-center p-3 rounded-lg border border-border bg-card hover:bg-accent hover:border-accent-foreground transition-all duration-200 cursor-pointer group"
              >
                <div className="relative w-8 h-8 sm:w-10 sm:h-10 mb-2 group-hover:scale-110 transition-transform duration-200">
                  <Image
                    src={`https://api.tech-stack-icons.com/api/icon/${tech.iconName}/original`}
                    alt={tech.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-xs text-center text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
