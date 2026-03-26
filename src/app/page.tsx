"use client";

import React from "react";
import SmoothScroll from "@/components/smooth-scroll";
import { cn } from "@/lib/utils";
import AnimatedBackground from "@/components/animated-background";
import SkillsSection from "@/components/sections/skills";
import CertificationsSection from "@/components/sections/certifications";
import ProjectsSection from "@/components/sections/projects";
import ContactSection from "@/components/sections/contact";
import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import AcademicJourneySection from "@/components/sections/academic-journey";
import AchievementsSection from "@/components/sections/achievements";

function MainPage() {
  return (
    <SmoothScroll>
      <AnimatedBackground />
      <main className={cn("bg-transparent canvas-overlay-mode")}>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <AcademicJourneySection />
        <AchievementsSection />
        <CertificationsSection />
        <ContactSection />
      </main>
    </SmoothScroll>
  );
}

export default MainPage;
