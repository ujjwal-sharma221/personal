"use client";

import { ContentTable } from "@/components/table-of-contents";
import {
  ContentContext,
  useContentContext,
} from "@/context/table-of-content-context";
import { TrackedSection } from "./tracked-section";

export function Content() {
  const { values } = useContentContext();
  return (
    <div className="grid  grid-cols-[10%_1fr_10%] lg:grid-cols-[15%_1fr_15%]">
      <ContentContext.Provider value={values}>
        <ContentTable />
        <article className="min-h-screen mx-auto max-w-[80ch] w-[80vw]">
          <TrackedSection sectionId={0} isFirst sectionTitle="Kira">
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              nesciunt, quis vero asperiores recusandae dolores assumenda qui
              odio quo ipsam rem, quibusdam modi hic consectetur cum ea nam
              fugiat amet?
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              nesciunt, quis vero asperiores recusandae dolores assumenda qui
              odio quo ipsam rem, quibusdam modi hic consectetur cum ea nam
              fugiat amet?
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              nesciunt, quis vero asperiores recusandae dolores assumenda qui
              odio quo ipsam rem, quibusdam modi hic consectetur cum ea nam
              fugiat amet?
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              nesciunt, quis vero asperiores recusandae dolores assumenda qui
              odio quo ipsam rem, quibusdam modi hic consectetur cum ea nam
              fugiat amet?
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              nesciunt, quis vero asperiores recusandae dolores assumenda qui
              odio quo ipsam rem, quibusdam modi hic consectetur cum ea nam
              fugiat amet?
            </div>
            First Project - Kira
          </TrackedSection>
          <TrackedSection sectionId={1} sectionTitle="Dimensions">
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              nesciunt, quis vero asperiores recusandae dolores assumenda qui
              odio quo ipsam rem, quibusdam modi hic consectetur cum ea nam
              fugiat amet?
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              nesciunt, quis vero asperiores recusandae dolores assumenda qui
              odio quo ipsam rem, quibusdam modi hic consectetur cum ea nam
              fugiat amet?
            </div>

            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              nesciunt, quis vero asperiores recusandae dolores assumenda qui
              odio quo ipsam rem, quibusdam modi hic consectetur cum ea nam
              fugiat amet?
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              nesciunt, quis vero asperiores recusandae dolores assumenda qui
              odio quo ipsam rem, quibusdam modi hic consectetur cum ea nam
              fugiat amet?
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              nesciunt, quis vero asperiores recusandae dolores assumenda qui
              odio quo ipsam rem, quibusdam modi hic consectetur cum ea nam
              fugiat amet?
            </div>
          </TrackedSection>
          <TrackedSection isLast sectionId={2} sectionTitle="portfolio">
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              nesciunt, quis vero asperiores recusandae dolores assumenda qui
              odio quo ipsam rem, quibusdam modi hic consectetur cum ea nam
              fugiat amet?
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              nesciunt, quis vero asperiores recusandae dolores assumenda qui
              odio quo ipsam rem, quibusdam modi hic consectetur cum ea nam
              fugiat amet?
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              nesciunt, quis vero asperiores recusandae dolores assumenda qui
              odio quo ipsam rem, quibusdam modi hic consectetur cum ea nam
              fugiat amet?
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              nesciunt, quis vero asperiores recusandae dolores assumenda qui
              odio quo ipsam rem, quibusdam modi hic consectetur cum ea nam
              fugiat amet?
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              nesciunt, quis vero asperiores recusandae dolores assumenda qui
              odio quo ipsam rem, quibusdam modi hic consectetur cum ea nam
              fugiat amet?
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              nesciunt, quis vero asperiores recusandae dolores assumenda qui
              odio quo ipsam rem, quibusdam modi hic consectetur cum ea nam
              fugiat amet?
            </div>
          </TrackedSection>
        </article>
      </ContentContext.Provider>
    </div>
  );
}
