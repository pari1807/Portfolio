"use client";
import React from "react";

import { useMediaQuery } from "@/hooks/use-media-query";
import { SKILLS } from "@/data/constants";
import { Orbit, Zap, Code2, Palette, Database, RefreshCcw, FileJson, Server, HardDrive, LayoutGrid, Box, GitBranch, Github, CodeSquare, Keyboard } from "lucide-react";

const getIconForSkill = (name: string) => {
  const n = name.toLowerCase();
  if (n.includes("react")) return <Orbit size={28} className="text-primary group-hover:drop-shadow-[0_0_8px_rgba(146,68,244,0.8)]" />;
  if (n.includes("next")) return <Zap size={28} className="text-secondary-container group-hover:drop-shadow-[0_0_8px_rgba(30,149,242,0.8)]" />;
  if (n.includes("type")) return <CodeSquare size={28} className="text-primary group-hover:drop-shadow-[0_0_8px_rgba(146,68,244,0.8)]" />;
  if (n.includes("tail")) return <Palette size={28} className="text-secondary-container group-hover:drop-shadow-[0_0_8px_rgba(30,149,242,0.8)]" />;
  if (n.includes("zustand")) return <Database size={28} className="text-primary group-hover:drop-shadow-[0_0_8px_rgba(146,68,244,0.8)]" />;
  if (n.includes("query")) return <RefreshCcw size={28} className="text-secondary-container group-hover:drop-shadow-[0_0_8px_rgba(30,149,242,0.8)]" />;
  if (n.includes("node")) return <FileJson size={28} className="text-primary group-hover:drop-shadow-[0_0_8px_rgba(146,68,244,0.8)]" />;
  if (n.includes("express")) return <Server size={28} className="text-secondary-container group-hover:drop-shadow-[0_0_8px_rgba(30,149,242,0.8)]" />;
  if (n.includes("mongo")) return <HardDrive size={28} className="text-primary group-hover:drop-shadow-[0_0_8px_rgba(146,68,244,0.8)]" />;
  if (n.includes("postgre")) return <LayoutGrid size={28} className="text-secondary-container group-hover:drop-shadow-[0_0_8px_rgba(30,149,242,0.8)]" />;
  if (n.includes("docker")) return <Box size={28} className="text-primary group-hover:drop-shadow-[0_0_8px_rgba(146,68,244,0.8)]" />;
  if (n.includes("git")) return <GitBranch size={28} className="text-secondary-container group-hover:drop-shadow-[0_0_8px_rgba(30,149,242,0.8)]" />;
  if (n.includes("hub")) return <Github size={28} className="text-primary group-hover:drop-shadow-[0_0_8px_rgba(146,68,244,0.8)]" />;
  return <Code2 size={28} className="text-secondary-container group-hover:drop-shadow-[0_0_8px_rgba(30,149,242,0.8)]" />;
};

const AnimatedBackground = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");

  // Subset of skills for the visual grid
  const displaySkills = [
    { name: "React", label: "React" },
    { name: "Next", label: "Next.js" },
    { name: "TypeScript", label: "TypeScript" },
    { name: "Tailwind", label: "Tailwind" },
    { name: "Zustand", label: "Zustand" },
    { name: "Query", label: "React Query" },
    { name: "Node", label: "Node.js" },
    { name: "Express", label: "Express" },
    { name: "Mongo", label: "MongoDB" },
    { name: "PostgreSQL", label: "PostgreSQL" },
    { name: "Docker", label: "Docker" },
    { name: "Git", label: "Git" },
    { name: "GitHub", label: "GitHub" },
    { name: "Postman", label: "Postman" },
  ];

  return (
    <div className="fixed inset-0 top-0 h-[100vh] z-0 pointer-events-none flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#17111b_100%)] z-10" />

      <div 
        className="relative w-full max-w-5xl px-4 md:px-12 flex flex-col items-center justify-center gap-12 mt-20 md:mt-0 opacity-60 md:opacity-40"
      >
        <div className="text-center opacity-60">
          <p className="text-[10px] font-medium tracking-[0.4rem] uppercase text-primary mb-2">System Architecture</p>
          <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-primary-container to-transparent"></div>
        </div>

        {/* The Keyboard Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 select-none perspective-[1000px] transform-gpu">
          {displaySkills.map((skill, idx) => (
            <div
              key={skill.name}
              className="keycap-bevel bg-surface-container-high rounded-xl p-3 md:p-5 h-24 md:h-28 aspect-auto flex flex-col items-center justify-center gap-2 md:gap-3 border border-outline-variant/10 transition-all duration-300 pointer-events-auto cursor-default hover:-translate-y-2 hover:bg-surface-bright group shadow-lg"
            >
              {getIconForSkill(skill.name)}
              <span className="text-[11px] md:text-xs font-bold tracking-widest text-center uppercase text-on-surface-variant group-hover:text-on-surface transition-colors">
                {skill.label}
              </span>
            </div>
          ))}

          {/* Decorative Shift Key */}
          <div className="keycap-bevel bg-gradient-to-br from-primary-container/20 to-secondary-container/20 rounded-xl p-3 md:p-5 h-24 md:h-28 flex flex-col items-center justify-center gap-2 md:gap-3 border border-primary/20 transition-all duration-300 hover:-translate-y-2 pointer-events-auto col-span-2 md:col-span-1 shadow-lg">
            <Keyboard size={24} className="text-primary" />
            <span className="text-[11px] md:text-xs font-bold tracking-widest uppercase text-on-surface transition-colors">
              EXECUTE
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedBackground;
