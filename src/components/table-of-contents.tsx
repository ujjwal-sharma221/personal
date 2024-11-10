"use client";

import { useContext, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

import { ContentContext } from "@/context/table-of-content-context";
import { cn, HIDDEN_OFFSET } from "@/lib/utils";

export function ContentTable() {
  const { scrollYProgress } = useScroll();
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const { sections, activeSection } = useContext(ContentContext);

  const [showTOC, setShowTOC] = useState(activeSection >= 0);
  scrollYProgress.on("change", (val) => {
    setShowTOC(
      activeSection >= 0 && val >= HIDDEN_OFFSET && val <= 1 - HIDDEN_OFFSET,
    );
  });

  return (
    <div className="h-full px-4">
      <motion.div
        initial={{ opacity: 0, display: "none" }}
        animate={{
          opacity: showTOC ? 1 : 0,
          display: showTOC ? "flex" : "none",
        }}
        className="sticky top-20 h-[80vh] flex gap-4"
      >
        <div className="h-full w-0.5 bg-neutral-300 mt-4 rounded-full overflow-hidden">
          <motion.div
            className="bg-red-400 w-full origin-top"
            style={{ height: progressHeight }}
          ></motion.div>
        </div>
        <div className="hidden lg:flex flex-col gap-6 text-sm xl:text-base mt-4">
          {sections.map(({ id, title }) => (
            <span
              onClick={() =>
                document
                  .getElementById(`section-${id}`)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              key={id}
              className={cn(
                "cursor-pointer transition-colors duration-200",
                activeSection === id ? "text-zinc-800 " : "text-zinc-300",
              )}
            >
              {title}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
