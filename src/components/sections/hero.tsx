"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { File, ArrowDown } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import { cn } from "@/lib/utils";
import { config } from "@/data/config";
import SectionWrapper from "../ui/section-wrapper";
import { usePreloader } from "../preloader";

// Performance-optimized animation variants
const fadeUpProps = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
};

const HeroSection = () => {
  const { isLoading } = usePreloader();

  if (isLoading) return <SectionWrapper id="hero" className="min-h-screen"><div /></SectionWrapper>;

  return (
    <SectionWrapper id="hero" className={cn("relative w-full min-h-screen")}>
      {/* Optimized Background gradient orbs (lighter blur to save GPU) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none transform-gpu">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[80px] animate-float will-change-transform" />
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-neon-blue/10 rounded-full blur-[60px] animate-float will-change-transform"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="vignette-overlay" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-screen px-6 md:px-12 lg:px-24 max-w-7xl mx-auto gap-12 lg:gap-24">

        {/* Left Column: Text & CTAs */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1 mt-20 md:mt-0">
          <motion.p
            {...fadeUpProps}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-sm md:text-base font-mono tracking-[0.2em] uppercase text-neon-purple-light/70 mb-4 transform-gpu"
          >
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            {...fadeUpProps}
            transition={{ delay: 0.2, duration: 0.6 }}
            className={cn(
              "text-5xl sm:text-6xl md:text-7xl lg:text-8xl",
              "font-bold tracking-tight leading-none",
              "gradient-text-animated mb-4 transform-gpu"
            )}
          >
            {config.author}
          </motion.h1>

          <motion.p
            {...fadeUpProps}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg md:text-xl lg:text-2xl text-[#cac3d8] font-light mb-10 transform-gpu"
          >
            Full Stack Developer{" "}
            <span className="text-neon-purple-light mx-2">|</span> AI & ML Enthusiast
          </motion.p>

          <motion.div
            {...fadeUpProps}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center gap-4 mb-12 transform-gpu"
          >
            <Link href="#projects">
              <button className="btn-gradient px-8 py-3 rounded-lg font-medium text-base flex items-center gap-2 min-w-[180px] justify-center shadow-lg shadow-neon-purple/20">
                <ArrowDown size={18} />
                View Projects
              </button>
            </Link>
            <Link
              href="https://drive.google.com/file/d/1Eq4iSprCqWT5OJTj_hEg1IOjZ7xG7SnJ/view?usp=sharing"
              target="_blank"
            >
              <button
                className="px-8 py-3 rounded-lg font-medium text-base glass-card glass-card-hover flex items-center gap-2 min-w-[180px] justify-center text-[#ebdeee] hover:text-white"
              >
                <File size={18} />
                Download Resume
              </button>
            </Link>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            {...fadeUpProps}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex items-center gap-4 transform-gpu"
          >
            {[
              { icon: <SiGithub size={22} />, href: config.social.github, label: "GitHub" },
              { icon: <SiLinkedin size={22} />, href: config.social.linkedin, label: "LinkedIn" },
              { icon: <HiOutlineMail size={24} />, href: `mailto:${config.email}`, label: "Email" },
            ].map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target={social.label !== "Email" ? "_blank" : undefined}
                className="group transform-gpu will-change-transform hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-[#cac3d8] group-hover:bg-surface-container-high group-hover:text-neon-purple-light group-hover:border-neon-purple/30 transition-colors duration-300">
                  {social.icon}
                </div>
              </Link>
            ))}
          </motion.div>
        </div>

        {/* Right Column: Circular Profile Image */}
        <motion.div
          {...fadeUpProps}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex-shrink-0 relative flex items-center justify-center transform-gpu w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]"
        >
          {/* Glowing orbital ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-neon-purple via-neon-violet to-neon-blue p-[3px] animate-float opacity-80 shadow-[0_0_50px_rgba(146,68,244,0.3)]">
            <div className="absolute inset-0 bg-surface-lowest rounded-full m-[2px] backdrop-blur-md" />
          </div>

          {/* Actual Image Container */}
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-transparent p-2 z-10 animate-float" style={{ animationDelay: "0.2s" }}>
            <div className="relative w-full h-full rounded-full overflow-hidden bg-surface-container-high">
              <Image
                src="/assets/MyPhoto.jpeg" // User can swap this out
                alt="Paritosh Pradhan"
                fill
                priority
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 280px, (max-width: 1024px) 350px, 400px"
              />
              {/* Fallback if image is missing - renders an initial */}
              <div className="absolute inset-0 flex items-center justify-center -z-10 bg-gradient-to-br from-[#2a2133] to-[#17111b]">
                <span className="text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-purple to-neon-blue opacity-50">
                  P
                </span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </SectionWrapper>
  );
};

export default HeroSection;
