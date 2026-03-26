"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export const SectionHeader = ({
  id,
  title,
  desc,
  className,
}: {
  id: string;
  title: string | ReactNode;
  desc?: string;
  className?: string;
}) => {
  return (
    <div className={cn("relative mb-16", className)}>
      <Link href={`#${id}`}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
          className={cn(
            "text-4xl md:text-5xl lg:text-6xl font-bold text-center",
            "gradient-text tracking-tight"
          )}
        >
          {title}
        </motion.h2>
      </Link>
      {desc && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl font-normal text-base text-center text-[#948ea1] mt-4"
        >
          {desc}
        </motion.p>
      )}
    </div>
  );
};
