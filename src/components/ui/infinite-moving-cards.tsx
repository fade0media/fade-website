"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"


export const InfiniteMovingCards = ({
  items,
  pauseOnHover = true,
}: {
  items: {
    name: string;
    description: string;
    iconName: string;
  }[];
  pauseOnHover?: boolean;
}) => {
  return (
    <div
      className="w-full inline-flex group flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"


    >
      {Array(3)
        .fill(null)
        .map((_, i) => (
          <ul
            key={i}
            className={cn(
              "flex flex-nowrap [&_img]:max-w-none animate-infinite-scroll",
              pauseOnHover && "group-hover:[animation-play-state:paused]"
            )}

          >
            {items.map((item, index) => (
              <li
                key={index}
                className="relative h-full mx-8 md:mx-16 py-6"
              >
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                    <Image
                  src={`/tech-icons/color/${item.iconName}.svg`}
                  width={100}
                  height={100}
                  alt={`${item.name} logo`}
                  className="text-white w-8 md:w-16"
                />
                    </TooltipTrigger>
                    <TooltipContent>
                      <div className="mb-8 gap-3 flex flex-col items-start justify-center w-[400px] border border-gray-400 border-opacity-35 rounded-2xl p-4 bg-black/10 backdrop-blur-md">
                      <p className="text-white font-semibold text-xl">{item.name}</p>
                      <p className="">{item.description}</p>

                      </div>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                
              </li>
            ))}
          </ul>
        ))}
    </div>
  );
};
