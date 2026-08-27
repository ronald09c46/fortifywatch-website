"use client";

import { motion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export default function AnimatedSection({
  children,
  className = "",
  style,
}: AnimatedSectionProps) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{
        opacity: 0,
        y: 35,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}