"use client";
import { CERTIFICATIONS } from "@/data/constants";
import { SectionHeader } from "./section-header";
import { cn } from "@/lib/utils";
import SectionWrapper from "../ui/section-wrapper";
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import Link from "next/link";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const CertificationsSection = () => {
  if (!CERTIFICATIONS || CERTIFICATIONS.length === 0) return null;
  return (
    <SectionWrapper className="relative py-24 z-10">
      <div className="w-full max-w-6xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="certifications"
          title="Certifications"
          desc="Professional certifications and continuous learning achievements."
          className="mb-16 md:mb-24"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {CERTIFICATIONS.map((cert) => (
            <motion.div
              key={cert.id}
              variants={cardVariants}
              whileHover={{
                y: -4,
                transition: { duration: 0.2 },
              }}
              className={cn(
                "glass-card shine-effect rounded-xl p-6",
                "border border-[#494455]/15 hover:border-neon-purple/20",
                "transition-all duration-300",
                "group flex flex-col"
              )}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-2 mb-4">
                <div className="w-9 h-9 rounded-lg bg-neon-purple/15 flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4 text-neon-purple-light" />
                </div>
                <span className="text-xs font-mono text-[#948ea1]">
                  {cert.date}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base font-semibold text-[#ebdeee] mb-1 group-hover:text-neon-purple-light transition-colors">
                {cert.title}
              </h3>

              {/* Issuer */}
              <p className="text-sm text-neon-blue-light/60 mb-3">
                {cert.issuer}
              </p>

              {/* Description */}
              <p className="text-xs text-[#948ea1] leading-relaxed flex-1">
                {cert.description[0]}
              </p>

              {/* Link */}
              {cert.link && (
                <Link
                  href={cert.link}
                  target="_blank"
                  className="mt-4 flex items-center gap-1.5 text-xs text-neon-purple-light/70 hover:text-neon-purple-light transition-colors"
                >
                  View Certificate
                  <ExternalLink className="w-3 h-3" />
                </Link>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default CertificationsSection;
