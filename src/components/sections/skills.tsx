"use client";
import React, { memo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { SKILL_CATEGORIES, SkillCategory } from "@/data/constants";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const skillItemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.25, ease: "easeOut" },
  },
};

// Memoized Skill Card to prevent re-renders on scroll
const SkillCard = memo(({ category }: { category: SkillCategory }) => {
  return (
    <motion.div
      variants={cardVariants}
      className={cn(
        "bg-surface-container-low p-6 md:p-8 rounded-xl",
        "border border-outline-variant/15 shadow-sm transform-gpu will-change-transform",
        "transition-all duration-300 hover:bg-surface-container-high group"
      )}
    >
      <div className="flex items-center gap-3 mb-6">
        <span className="text-2xl text-primary drop-shadow-[0_0_8px_rgba(146,68,244,0.4)]">{category.icon}</span>
        <h3 className="text-xl font-bold text-on-surface">
          {category.category}
        </h3>
      </div>

      <motion.div
        variants={containerVariants}
        className="flex flex-wrap gap-3"
      >
        {category.skills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={skillItemVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: `0 0 20px ${skill.color}15`,
            }}
            className={cn(
              "flex items-center gap-3 p-3 rounded-lg transform-gpu will-change-transform",
              "bg-surface-container-highest/60 hover:bg-surface-bright/80",
              "border border-outline-variant/10 hover:border-outline-variant/30",
              "transition-colors duration-300 cursor-default"
            )}
          >
            {skill.icon ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-5 h-5 object-contain"
                loading="lazy"
                decoding="async"
              />
            ) : (
              <div
                className="w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-bold"
                style={{ backgroundColor: `${skill.color}15`, color: skill.color }}
              >
                {skill.name.charAt(0)}
              </div>
            )}
            <span className="text-xs sm:text-[13px] text-on-surface-variant font-medium whitespace-nowrap group-hover:text-on-surface transition-colors">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
});

SkillCard.displayName = "SkillCard";

const SkillsSection = () => {
  return (
    <SectionWrapper id="skills" className="relative py-24 z-10">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <SectionHeader
          id="skills"
          title="Tech Stack"
          desc="Technologies, frameworks, and tools I use to build scalable web applications."
          className="mb-16 md:mb-24"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SKILL_CATEGORIES.map((category) => (
            <SkillCard key={category.id} category={category} />
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default SkillsSection;
