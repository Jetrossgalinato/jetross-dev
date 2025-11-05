"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  workExperience,
  studiesExperience,
  TabType,
} from "../helpers/ExperienceHelper";

export default function Experience() {
  const [activeTab, setActiveTab] = useState<TabType>("work");

  const tabs: { id: TabType; label: string }[] = [
    { id: "work", label: "Work" },
    { id: "studies", label: "Studies" },
  ];

  const currentExperience =
    activeTab === "work" ? workExperience : studiesExperience;

  return (
    <div className="flex flex-row flex-wrap items-center gap-12 p-4 transition-colors duration-300">
      <Card className="w-full md:w-[750px] transition-colors duration-300">
        <CardHeader>
          <CardTitle className="text-base sm:text-lg mb-4">
            Experience
          </CardTitle>

          {/* Animated Tabs */}
          <div className="flex gap-2 bg-muted/50 p-1 rounded-lg w-fit">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`${
                  activeTab === tab.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground/80"
                } relative px-6 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring`}
                style={{
                  WebkitTapHighlightColor: "transparent",
                }}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-background rounded-md shadow-sm"
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </CardHeader>

        <CardContent>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {currentExperience.map((item, index) => (
              <div
                key={item.id}
                className={`${
                  index !== currentExperience.length - 1
                    ? "border-b border-border pb-6"
                    : ""
                }`}
              >
                <h3 className="font-semibold text-base">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.organization}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {item.period}
                </p>
                <p className="text-sm mt-2 text-justify">{item.description}</p>
              </div>
            ))}
          </motion.div>
        </CardContent>
      </Card>
    </div>
  );
}
