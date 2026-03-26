"use client";
import { ACADEMIC_JOURNEY } from "@/data/constants";
import { SectionHeader } from "./section-header";
import { cn } from "@/lib/utils";
import SectionWrapper from "../ui/section-wrapper";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const AcademicJourneySection = () => {
  if (!ACADEMIC_JOURNEY || ACADEMIC_JOURNEY.length === 0) return null;
  return (
    <SectionWrapper className="relative py-24 z-10">
      <div className="w-full max-w-4xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="academic-journey"
          title="Education"
          desc="My academic foundation in Computer Science & Engineering."
          className="mb-16 md:mb-24"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-neon-purple/50 via-neon-blue/30 to-transparent" />

          <div className="flex flex-col gap-8">
            {ACADEMIC_JOURNEY.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative pl-16 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-6 top-5 w-4 h-4 rounded-full bg-neon-purple border-2 border-surface-container-lowest" />

                <div
                  className={cn(
                    "glass-card glass-card-hover shine-effect rounded-xl p-6",
                    "group"
                  )}
                >
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <GraduationCap className="w-5 h-5 text-neon-purple-light mt-0.5 shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-[#ebdeee]">
                          {edu.title}
                        </h3>
                        <p className="text-sm text-[#948ea1] mt-1">
                          {edu.issuer}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-xs font-mono px-3 py-1 rounded-full bg-neon-purple/15 text-neon-purple-light">
                        {edu.grade}
                      </span>
                      <span className="text-xs font-mono text-[#948ea1]">
                        {edu.date}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AcademicJourneySection;
