"use client";

import { HTMLProps, useContext, useEffect, useRef } from "react";
import { useScroll } from "framer-motion";

import { ContentContext } from "@/context/table-of-content-context";

type TrackedSectionProps = {
  isFirst?: boolean;
  isLast?: boolean;
  sectionId: number;
  sectionTitle: string;
} & HTMLProps<HTMLElement>;

export function TrackedSection({
  sectionId,
  isLast,
  isFirst,
  sectionTitle,
  ...props
}: TrackedSectionProps) {
  const { registerSection, setActiveSection } = useContext(ContentContext);

  useEffect(() => {
    registerSection({ id: sectionId, title: sectionTitle });
  }, []);

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  scrollYProgress.on("change", (value) => {
    if (value > 0 && value < 1) setActiveSection(sectionId);
    if ((value <= 0 && isFirst) || (value >= 1 && isLast)) setActiveSection(-1);
  });

  return (
    <section
      ref={containerRef}
      id={`section-${sectionId}`}
      style={{ scrollMargin: "40vh" }}
      {...props}
    />
  );
}
