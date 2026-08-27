"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface AnimatedCardProps {
  children: ReactNode;
  direction?: "left" | "right";
  className?: string;
}

export default function AnimatedCard({
  children,
  direction = "left",
  className = "",
}: AnimatedCardProps) {
  const x = direction === "left" ? -50 : 50;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      className={`h-full rounded-xl border border-border bg-card p-5 text-center shadow-sm transition-shadow duration-300 hover:shadow-xl sm:p-6 lg:p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
}