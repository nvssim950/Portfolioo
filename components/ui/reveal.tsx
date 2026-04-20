"use client";

import { motion, type HTMLMotionProps } from "motion/react";

type Props = HTMLMotionProps<"div"> & { delay?: number };

export function Reveal({ children, delay = 0, ...rest }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay, ease: [0.2, 0.7, 0.2, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
