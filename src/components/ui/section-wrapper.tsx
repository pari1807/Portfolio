"use client";

import { useRef } from "react";

import { cn } from "@/lib/utils";

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

const SectionWrapper = ({ id, className, children, ...props }: SectionWrapperProps) => {
  return (
    <section
      id={id}
      className={cn("relative z-10", className)}
      {...props}
    >
      <div className="w-full h-full">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
