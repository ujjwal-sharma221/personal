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
          <TrackedSection sectionId={1} sectionTitle="Dimensions">
            <DialogElement
              title="Dimensions"
              subtitle="A Developer's Social Network for People Who Prefer Code Over Small Talk"
              alt="Dimensions project Image"
              imageUrl="/images/img2.png"
              repoUrl="https://github.com/ujjwal-sharma221/dimensions"
              desc1="Dimensions is a social media platform designed to bring together developers in a space that fosters collaboration, networking, and sharing knowledge. The project aims to provide a familiar yet unique environment for users to engage with each other through posts, comments, and interactions centered around the developer community."
              desc2="The platform is tailored to developers of all skill levels, offering a space for both beginners and experienced professionals to exchange ideas and seek advice. By focusing on community-driven content, Dimensions strives to create an inclusive atmosphere where developers can build their personal network, showcase their projects, and stay updated on the latest trends in technology.."
            />
            <div className="ml-1 mt-2 flex flex-col items-center gap-y-2">
              <TechnologyTabs
                TABS={[
                  "Next.js 14",
                  "React Server Components",
                  "Tailwind CSS",
                  "React Query",
                  "Zod",
                  "Radix UI",
                  "React-Hook-Form",
                  "date-fns",
                  "Lucia",
                  "Neon DB",
                ]}
              />
              <div className=" max-w-[700px]  text-start">
                Dimensions is built with Next.js and TypeScript for a fast,
                scalable frontend, styled using Tailwind CSS. The backend uses
                Prisma ORM with a PostgreSQL database for efficient data
                management. The app supports real-time updates via WebSockets
                and is deployed on Vercel for scalability. It provides a smooth
                user experience with server-side rendering and static site
                generation.
              </div>
              <div className="flex">
                <Button asChild variant="linkHover1">
                  <Link
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://github.com/ujjwal-sharma221/dimensions"
                  >
                    Github Repo <ArrowUpRightIcon className="size-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </TrackedSection>
          <Separator className="my-6" />
          <TrackedSection sectionId={2} sectionTitle="Banks">
            <DialogElement
              title="Banks"
              subtitle="Because Who Needs a Physical Bank When You Can Manage Everything Online… Without the Awkwardness?"
              alt="Banking project Image"
              imageUrl="/images/img3.png"
              repoUrl="https://github.com/ujjwal-sharma221/banking-app"
              desc1="The Banking App is designed to offer users an easy-to-use platform for managing their bank accounts and performing transactions. It focuses on providing core banking features, such as account management and transaction history, in a simple, accessible manner. The application ensures a smooth user experience with a clean interface and clear navigation."
              desc2="The project emphasizes a modular approach, allowing for easy scalability and flexibility. It supports user authentication and offers a secure environment for financial operations, making it a reliable tool for managing personal finances.
"
            />
            <div className="ml-1 mt-2 flex flex-col items-center gap-y-2">
              <TechnologyTabs
                TABS={[
                  "Next.js 14",
                  "React Server Components",
                  "Tailwind CSS",
                  "TypeScript",
                  "PostgreSQL",
                  "Prisma",
                  "Docker",
                  "TurboRepo",
                ]}
              />
              <div className=" max-w-[700px]  text-start">
                The Banking App is structured as a TurboRepo, optimizing the
                monorepo management for multiple packages. It uses TypeScript
                for type safety across the codebase, with Prisma interacting
                with a PostgreSQL database for managing user accounts and
                transactions. Docker is employed for containerizing the
                application, ensuring consistent environments for development
                and deployment. The app focuses on secure authentication and
                modular architecture for scalability and ease of maintenance.
              </div>
              <div className="flex">
                <Button asChild variant="linkHover1">
                  <Link
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://github.com/ujjwal-sharma221/banking-app"
                  >
                    Github Repo <ArrowUpRightIcon className="size-4" />
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
