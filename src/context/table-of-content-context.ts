import { createContext, useState } from "react";

export type Section = {
  id: number;
  title: string;
};

type ContextType = {
  sections: Section[];
  registerSection: (_: Section) => void;
  activeSection: number;
  setActiveSection: (_: number) => void;
};

export const ContentContext = createContext<ContextType>({
  sections: [],
  registerSection: () => {},
  activeSection: 0,
  setActiveSection: () => {},
});

export const useContentContext = () => {
  const [activeSection, setActiveSection] = useState(-1);
  const [sections, setSections] = useState<Section[]>([]);

  function registerSection(section: Section) {
    setSections((prev) => prev.concat([section]));
  }

  function processSection(sections: Section[]) {
    const ids = sections.map(({ id }) => id);
    const uniqueSections = sections
      .filter(({ id }, index) => !ids.includes(id, index + 1))
      .sort((a, b) => a.id - b.id);

    return uniqueSections;
  }

  return {
    values: {
      sections: processSection(sections),
      registerSection,
      activeSection,
      setActiveSection,
    },
  };
};
