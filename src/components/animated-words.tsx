import { motion } from "framer-motion";

import { staggerChildren, wordAnimation } from "@/lib/animation";

export function AnimatedWords({ title }: { title: string }) {
  return (
    <motion.span variants={staggerChildren}>
      {title.split(" ").map((word, idx) => (
        <div className="inline-block overflow-hidden" key={idx}>
          <motion.span
            variants={wordAnimation}
            className="inline-block overflow-hidden"
          >
            {word}
          </motion.span>
        </div>
      ))}
    </motion.span>
  );
}
