"use client";

import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";

import { ContentTable } from "@/components/table-of-contents";
import {
  ContentContext,
  useContentContext,
} from "@/context/table-of-content-context";
import { TrackedSection } from "./tracked-section";
import { DialogElement } from "./dialog-element";
import { TechnologyTabs } from "./tabs";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function Content() {
  const { values } = useContentContext();
  return (
    <div className="grid  grid-cols-[10%_1fr_10%] lg:grid-cols-[15%_1fr_15%]">
      <ContentContext.Provider value={values}>
        <ContentTable />
        <article className="min-h-screen mx-auto max-w-[80ch] w-[80vw]">
          <TrackedSection sectionId={0} isFirst sectionTitle="Kira">
            <DialogElement
              title="Kira"
              subtitle="Project management: now with 50% less chaos and 100% more sanity (I think)."
              alt="Kira project Image"
              imageUrl="/images/img1.png"
              repoUrl="https://github.com/ujjwal-sharma221/kira"
              liveUrl="https://kira-delta.vercel.app"
              desc1="Kira is a modern project management platform that empowers teams to organize, track, and manage tasks with ease and efficiency. It provides a streamlined experience that enhances productivity by allowing users to customize their workflow with flexible board views, intuitive task filtering, and a responsive, easy-to-navigate interface. Designed for seamless collaboration, Kira ensures that team members stay connected and up-to-date on projects in real time, facilitating smoother project execution and minimizing downtime."
              desc2="With Kira, users can quickly adapt their project views to match their unique needs, making it easier to prioritize and complete tasks. The platform's advanced task management capabilities improve focus by letting users filter and sort tasks effectively, making it an ideal solution for businesses looking to improve team productivity and enhance project visibility."
            />
            <div className="ml-1 mt-2 flex flex-col items-center gap-y-2">
              <TechnologyTabs
                TABS={[
                  "Next.js 14",
                  "React Server Components",
                  "Tailwind CSS",
                  "Hono.js (Edge Functions)",
                  "Appwrite",
                  "React Query",
                  "Zod",
                  "CI/CD pipeline",
                  "Radix UI",
                  "React-Hook-Form",
                  "date-fns",
                ]}
              />
              <div className=" max-w-[700px]  text-start">
                Kira is an advanced project management platform built for speed,
                efficiency, and an exceptional user experience. Leveraging
                Next.js 14, Hono.js edge functions, and Appwrite, it uses
                real-time state management and type-safe API routes through Zod
                validation to achieve rapid page loads and reliable error
                handling. Designed with an API-first approach and an automated
                CI/CD pipeline, Kira supports easy third-party integration,
                ensures 99.9% uptime, and significantly reduces setup time. The
                platform includes an enterprise-grade filtering system with
                type-safe forms, a responsive UI with Tailwind CSS, and advanced
                calendar and board views. With dynamic data fetching powered by
                React Query and interactive components from Radix UI, Kira
                enhances task management efficiency by 40%, making it an ideal
                tool for streamlined workflows and customized project
                management.
              </div>
              <div className="flex">
                <Button asChild variant="linkHover1">
                  <Link
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://github.com/ujjwal-sharma221/kira"
                  >
                    Github Repo <ArrowUpRightIcon className="size-4" />
                  </Link>
                </Button>
                <Button asChild variant="linkHover1">
                  <Link
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://kira-delta.vercel.app"
                  >
                    Live Link
                    <ArrowUpRightIcon className="size-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </TrackedSection>
          <Separator className="my-6" />
        </article>
      </ContentContext.Provider>
    </div>
  );
}
