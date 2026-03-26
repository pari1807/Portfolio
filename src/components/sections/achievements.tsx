"use client";
import { ACHIEVEMENTS } from "@/data/constants";
import { SectionHeader } from "./section-header";
import { cn } from "@/lib/utils";
import SectionWrapper from "../ui/section-wrapper";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const AchievementsSection = () => {
  if (!ACHIEVEMENTS || ACHIEVEMENTS.length === 0) return null;
  return (
    <SectionWrapper className="relative py-24 z-10">
      <div className="w-full max-w-5xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="achievements"
          title="Achievements"
          desc="Milestones and accomplishments in competitive programming."
          className="mb-16 md:mb-24"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {ACHIEVEMENTS.map((achievement) => (
            <motion.div
              key={achievement.id}
              variants={cardVariants}
              whileHover={{
                y: -6,
                boxShadow: "0 0 40px rgba(146, 68, 244, 0.12)",
              }}
              className={cn(
                "glass-card rounded-xl p-6 text-center",
                "border border-[#494455]/15 hover:border-neon-purple/25",
                "transition-colors duration-300",
                "group cursor-default"
              )}
            >
              {/* Emoji icon */}
              <div className="text-4xl mb-4">{achievement.icon}</div>

              {/* Stat number */}
              <div className="text-3xl font-bold gradient-text mb-2">
                {achievement.stat}
              </div>

              {/* Title */}
              <h3 className="text-sm font-semibold text-[#ebdeee] mb-3">
                {achievement.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-[#948ea1] leading-relaxed">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default AchievementsSection;
