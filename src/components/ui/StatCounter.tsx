"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

export default function StatCounter({
  value,
  className = "",
}: {
  value: string;
  className?: string;
}) {
  const match = value.match(/^(\d+)(.*)$/);
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(match ? `0${match[2]}` : value);

  useEffect(() => {
    const m = value.match(/^(\d+)(.*)$/);
    if (!isInView || !m) return;

    const target = parseInt(m[1], 10);
    const suffix = m[2];

    const controls = animate(0, target, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate(v) {
        setDisplay(`${Math.round(v)}${suffix}`);
      },
    });

    return () => controls.stop();
  }, [isInView, value]);

  return (
    <p ref={ref} className={className}>
      {display}
    </p>
  );
}
