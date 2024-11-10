"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

import { AnimatedWords } from "./animated-words";
import { cn } from "@/lib/utils";
import { wordAnimation } from "@/lib/animation";

export const Navbar = () => {
  const pathname = usePathname();
  const aboutPage = pathname === "/about";

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-screen-2xl mx-auto flex items-center">
        <motion.div
          className={cn(aboutPage ? "" : "text-8xl font-semibold mb-2")}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Link href="/">
            {!aboutPage ? (
              <AnimatedWords title="Works" />
            ) : (
              <motion.span
                variants={wordAnimation}
                className="inline-block overflow-hidden"
              >
                Works
              </motion.span>
            )}
          </Link>
        </motion.div>

        <motion.div
          className={cn(aboutPage ? "text-8xl font-semibold" : "")}
          initial="initial"
          animate="animate"
          exit="exit" // Add exit animation for smooth moving out
        >
          <Link href="/about">
            {aboutPage ? (
              <AnimatedWords title="About" />
            ) : (
              <motion.span
                variants={wordAnimation}
                className="inline-block overflow-hidden"
              >
                About
              </motion.span>
            )}
          </Link>
        </motion.div>
      </div>
    </nav>
  );
};
