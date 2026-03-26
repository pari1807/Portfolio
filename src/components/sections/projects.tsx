"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";
import projects from "@/data/projects";
import { ArrowUpRight } from "lucide-react";
import { SiGithub } from "react-icons/si";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

const ProjectsSection = () => {
  return (
    <SectionWrapper id="projects" className="relative py-24 z-10">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <SectionHeader
          id="projects"
          title="Projects"
          desc="Real-world applications built with modern technologies."
          className="mb-16 md:mb-24"
        />

        <div className="flex flex-col gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              whileHover={{
                y: -4,
                transition: { duration: 0.3 },
              }}
              className={cn(
                "bg-surface-container-low p-6 rounded-xl",
                "border border-outline-variant/15 shadow-sm",
                "transition-all duration-300",
                "hover:bg-surface-container-high group"
              )}
            >
              <div className="flex flex-col gap-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div>
                    <span className="inline-block text-xs font-mono uppercase tracking-[0.1rem] text-neon-blue-light/70 mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#ebdeee] group-hover:text-neon-purple-light transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      className="shrink-0"
                    >
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-gradient px-5 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2"
                      >
                        <SiGithub size={16} />
                        View on GitHub
                        <ArrowUpRight size={14} />
                      </motion.div>
                    </Link>
                  )}
                </div>

                {/* Summary */}
                <p className="text-[#cac3d8] text-base leading-relaxed mb-8">
                  {project.summary}
                </p>

                {/* Problem → Solution → Impact */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 mt-2">
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono uppercase tracking-[0.1rem] text-primary/80">
                      The Problem
                    </h4>
                    <p className="text-sm text-outline leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono uppercase tracking-[0.1rem] text-secondary-container/80">
                      The Solution
                    </h4>
                    <p className="text-sm text-outline leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono uppercase tracking-[0.1rem] text-tertiary-container/80">
                      Impact
                    </h4>
                    <ul className="space-y-1.5">
                      {project.impact.map((item, i) => (
                        <li
                          key={i}
                          className="text-sm text-outline flex items-start gap-2"
                        >
                          <span className="text-tertiary-container mt-1.5 shrink-0">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <div
                      key={skill.title}
                      className={cn(
                        "flex items-center gap-2 px-3 py-1.5 rounded-full",
                        "bg-surface-container-highest/60 text-on-surface-variant",
                        "text-xs font-mono border border-outline-variant/20"
                      )}
                    >
                      <span className="text-sm text-primary">
                        {skill.icon}
                      </span>
                      {skill.title}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ProjectsSection;
