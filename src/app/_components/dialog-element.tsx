import { PlusIcon } from "lucide-react";
import Link from "next/link";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogImage,
  DialogSubtitle,
  DialogClose,
  DialogDescription,
  DialogContainer,
} from "@/components/dialog";
import { Button } from "@/components/ui/button";

interface DialogElementProps {
  imageUrl: string;
  alt: string;
  title: string;
  subtitle: string;
  repoUrl: string;
  liveUrl?: string;
  desc1: string;
  desc2: string;
}

export function DialogElement({
  imageUrl,
  alt,
  title,
  subtitle,
  repoUrl,
  liveUrl,
  desc1,
  desc2,
}: DialogElementProps) {
  return (
    <Dialog
      transition={{
        type: "spring",
        bounce: 0.05,
        duration: 0.25,
      }}
    >
      <DialogTrigger
        style={{
          borderRadius: "12px",
        }}
        className="flex w-full flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900"
      >
        <DialogImage
          src={imageUrl}
          alt={alt}
          className="h-48 w-full object-cover"
        />
        <div className="flex flex-grow flex-row items-end justify-between p-2">
          <div>
            <DialogTitle className="text-zinc-950 font-bold dark:text-zinc-50">
              {title}
            </DialogTitle>
            <DialogSubtitle className="text-zinc-700  dark:text-zinc-400">
              {subtitle}
            </DialogSubtitle>
          </div>
          <button
            type="button"
            className="relative ml-1 flex h-6 w-6 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-950/10 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] dark:border-zinc-50/10 dark:bg-zinc-900 dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-500"
            aria-label="Open dialog"
          >
            <PlusIcon size={12} />
          </button>
        </div>
      </DialogTrigger>
      <DialogContainer>
        <DialogContent
          style={{
            borderRadius: "24px",
          }}
          className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 sm:w-[500px]"
        >
          <DialogImage src={imageUrl} alt={alt} className="h-full w-full" />
          <div className="p-6">
            <DialogTitle className="text-2xl text-black font-bold dark:text-zinc-50">
              {title}
            </DialogTitle>
            <DialogSubtitle className="text-muted-foreground  dark:text-zinc-400">
              {subtitle}
            </DialogSubtitle>
            <DialogDescription
              disableLayoutAnimation
              variants={{
                initial: { opacity: 0, scale: 0.8, y: 100 },
                animate: { opacity: 1, scale: 1, y: 0 },
                exit: { opacity: 0, scale: 0.8, y: 100 },
              }}
            >
              <p className="mt-2 text-[#1A1A1D]  dark:text-zinc-500">{desc1}</p>
              <p className="mt-2 text-[#1A1A1D]  dark:text-zinc-500">{desc2}</p>
              <Button variant="linkHover1" asChild>
                <Link href={repoUrl}>Github Repo</Link>
              </Button>
              {liveUrl ? (
                <Button variant="linkHover1" asChild>
                  <Link href={liveUrl}>Live Link</Link>
                </Button>
              ) : null}
            </DialogDescription>
          </div>
          <DialogClose className="text-zinc-50" />
        </DialogContent>
      </DialogContainer>
    </Dialog>
  );
}
