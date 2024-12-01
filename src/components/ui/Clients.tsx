"use client";

import React from "react";
// import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import AnimatedShinyText from "@/components/ui/AnimatedShinyText";
import { cn } from "@/lib/utils";
import { InfiniteMovingCards1 } from "@/components/ui/infinite-1";


export default function InfiniteMovingCardsDemo() {
  return (
    <div className=" flex flex-col justify-center items-center md:mt-16 md:mb-36 mb-24 relative z-40 gap-6">
      <div
        className={cn(
          "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
        )}
      >
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <span>Built on pillars of trust</span>
          {/* <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" /> */}
        </AnimatedShinyText>
      </div>

      <div className="md:mt-8 rounded-md antialiased w-1/3 sm:w-1/2 lg:w-[1200px] relative overflow-hidden flex justify-center items-center">

        <InfiniteMovingCards1
          items={clients}
          direction="right"
          speed="fast"
        />
      </div>
    </div>

  );
}

const clients = [
  
  "asca",
  "dietnprotein",
  "shoolin",
  "sierra",
  "sparkkuwait",
  "stellar",
  "township",
  "trinity"

];

