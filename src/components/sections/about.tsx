"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";

const ABOUT_TIMELINE = [
  {
    date: "2023 – PRESENT",
    dotColor: "bg-[#e29af5]", // pinkish purple
    title: "B.Tech in Computer Science",
    subtitle: "Lovely Professional University",
    description: "Pursuing engineering with a strong focus on Full Stack Development, distributed systems, and modern AI/ML architectures.",
  },
  {
    date: "2024",
    dotColor: "bg-[#91d1af]", // greenish
    title: "Full Stack Engineer & AI Enthusiast",
    subtitle: "Project Architectures",
    description: "Architected modern functional platforms (like digital classrooms) and predictive ML models, bridging the gap between interfaces and intelligent data.",
  },
  {
    date: "2023 – 2024",
    dotColor: "bg-[#8bb4f7]", // blueish
    title: "Competitive Programmer",
    subtitle: "Algorithmic Problem Solving",
    description: "Forged a heavily analytical mindset by continuously cracking over 400+ algorithmic and data structure challenges across platforms.",
  },
  {
    date: "ONGOING",
    dotColor: "bg-[#f5c28c]", // orangish
    title: "Continuous Learner",
    subtitle: "Cloud & Databases",
    description: "Amassed deep technical certifications spanning across overarching Oracle Cloud infrastructure, DevOps pipelines, and MongoDB.",
  }
];

const AboutSection = () => {
  return (
    <SectionWrapper id="about" className="relative py-24 z-10">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <SectionHeader
          id="about"
          title="About Me"
          desc="My journey of building impactful solutions at the intersection of full-stack development and artificial intelligence."
          className="mb-16 md:mb-24"
        />

        <div className="relative flex flex-col gap-12 md:gap-16 mt-8">
          {/* The vertical timeline line hidden on small screens, explicitly visible on md+ */}
          <div className="absolute left-[20%] md:left-[25%] top-2 bottom-2 w-[1px] bg-outline-variant/30 hidden md:block" />

          {ABOUT_TIMELINE.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative flex flex-col md:flex-row items-start group"
            >
              {/* DATE COLUMN (Left) */}
              <div className="md:w-[25%] shrink-0 text-left md:text-right md:pr-12 mb-4 md:mb-0 pt-1">
                <span className="text-xs md:text-sm font-bold tracking-widest text-on-surface uppercase">
                  {item.date}
                </span>
              </div>

              {/* TIMELINE DOT (Middle/Absolute) */}
              <div className="hidden md:flex absolute left-[25%] w-4 h-4 -ml-[8px] mt-1 items-center justify-center">
                <div className={cn("w-4 h-4 rounded-full border border-outline-variant/50 z-10", item.dotColor)} />
              </div>

              {/* CONTENT COLUMN (Right) */}
              <div className="md:w-[75%] md:pl-12 flex flex-col">
                <h3 className="text-xl md:text-2xl font-bold text-on-surface mb-1">
                  {item.title}
                </h3>
                {item.subtitle && (
                  <h4 className="text-sm md:text-base font-medium text-primary mb-3">
                    {item.subtitle}
                  </h4>
                )}
                <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
