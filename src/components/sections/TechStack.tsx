"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import AnimatedShinyText from "@/components/ui/AnimatedShinyText";
import { cn } from "@/lib/utils";


export default function InfiniteMovingCardsDemo() {
  return (
    <div className="my-16 flex flex-col justify-center items-center md:mt-16 mb-24 md:mb-8 relative z-40 gap-6">
      <div
        className={cn(
          "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
        )}
      >
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <span>Tools That Power Our Vision</span>
          {/* <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" /> */}
        </AnimatedShinyText>
      </div>

      <div className="mt-8 rounded-md antialiased w-1/3 sm:w-3/4 max-w-7xl relative overflow-hidden flex justify-center items-center">

        <InfiniteMovingCards
          items={techStack}
          pauseOnHover={false}
        />
      </div>
    </div>

  );
}

const techStack = [
  {
    name: "Next.js",
    description: "A React framework for building fast, scalable web applications.",
    iconName: "nextjs"
  },
  {
    name: "Flutter",
    description: "An open-source framework for building natively compiled applications for mobile, web, and desktop from a single codebase.",
    iconName: "flutter"
  },
  {
    name: "TailwindCSS",
    description: "A utility-first CSS framework for creating custom designs quickly.",
    iconName: "tailwindcss"
  },
  {
    name: "Python",
    description: "A versatile programming language used for web development, automation, data science, and more.",
    iconName: "python"
  },
  
  {
    name: "MongoDB",
    description: "A NoSQL database known for its scalability and flexibility in storing data.",
    iconName: "mongodb"
  },
  {
    name: "Cloud SQL",
    description: "A fully-managed relational database service by Google Cloud, supporting MySQL, PostgreSQL, and SQL Server.",
    iconName: "cloudsql"
  },
  {
    name: "Google Cloud Platform",
    iconName: "gcp",
    description: "Google Cloud Platform provides cloud computing services for scalable and secure applications."
  },
  {
    name: "Go",
    description: "A statically typed, compiled programming language designed for simplicity and performance.",
    iconName: "go"
  },
  {
    name: "Figma",
    description: "A collaborative design tool for creating stunning interfaces, wireframes, and prototypes effortlessly.",
    iconName: "figma"
  },
  {
    name: "Framer",
    description: "A design and prototyping tool that bridges creativity and interactivity with production-ready code.",
    iconName: "framer"
  },
  {
    name: "Webflow",
    description: "A no-code platform for designing, building, and launching responsive websites visually.",
    iconName: "webflow"
  },
  
  
];
