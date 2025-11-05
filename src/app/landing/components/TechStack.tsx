"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import StackIcon from "tech-stack-icons";
import { useTheme } from "next-themes";
import { techStackItems } from "../helpers/TechstackHelper";

export default function TechStack() {
  const { theme } = useTheme();

  return (
    <div className="flex flex-row flex-wrap items-center gap-12 p-4 transition-colors duration-300">
      <Card className="w-full md:w-[750px] transition-colors duration-300">
        <CardHeader>
          <CardTitle className="text-base sm:text-lg">Tech Stack</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {techStackItems.map((tech) => (
              <div
                key={tech.id}
                className="flex flex-col items-center justify-center p-4 rounded-lg border border-border bg-card hover:bg-accent hover:border-accent-foreground transition-all duration-200 cursor-pointer group"
              >
                <div className="w-12 h-12 sm:w-10 sm:h-10 mb-3 group-hover:scale-110 transition-transform duration-200">
                  <StackIcon
                    name={tech.iconName}
                    variant={theme === "dark" ? "dark" : "light"}
                  />
                </div>
                <span className="text-xs sm:text-xs text-center text-muted-foreground group-hover:text-foreground transition-colors duration-200">
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
