"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect } from "react";

export const InfiniteMovingCards = ({
  items,
  // direction = "left",
  // speed = "fast",
  pauseOnHover = true,
  // className,
}: {
  items: {
    name: string;
    description: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  // const containerRef = React.useRef<HTMLDivElement>(null);
  // const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    //addAnimation();
  }, []);

  // const [start, setStart] = useState(false);

  // function addAnimation() {
  //   if (containerRef.current && scrollerRef.current) {
  //     const scrollerContent = Array.from(scrollerRef.current.children);

  //     scrollerContent.forEach((item) => {
  //       const duplicatedItem = item.cloneNode(true);
  //       if (scrollerRef.current) {
  //         scrollerRef.current.appendChild(duplicatedItem);
  //       }
  //     });

  //     getDirection();
  //     getSpeed();
  //     setStart(true);
  //   }
  // }

  // const getDirection = () => {
  //   if (containerRef.current) {
  //     if (direction === "left") {
  //       containerRef.current.style.setProperty("--animation-direction", "forwards");
  //     } else {
  //       containerRef.current.style.setProperty("--animation-direction", "reverse");
  //     }
  //   }
  // };

  // const getSpeed = () => {
  //   if (containerRef.current) {
  //     if (speed === "fast") {
  //       containerRef.current.style.setProperty("--animation-duration", "20s");
  //     } else if (speed === "normal") {
  //       containerRef.current.style.setProperty("--animation-duration", "40s");
  //     } else {
  //       containerRef.current.style.setProperty("--animation-duration", "80s");
  //     }
  //   }
  // };

  return (
    <div
      x-data="{}"
      x-init="$nextTick(() => {
                        let ul = $refs.logos;
                        ul.insertAdjacentHTML('afterend', ul.outerHTML);
                        ul.nextSibling.setAttribute('aria-hidden', 'true');
                    })"
      className={cn(
        "w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]",
        pauseOnHover && "hover:[animation-play-state:paused]"
      )}
    >

      <ul

        x-ref="logos"
        className={cn(
          "flex flex-nowrap  [&_img]:max-w-none animate-infinite-scroll",
          // start && "",
          //pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, index) => (
          <li
            className="relative hover:text-blue-400 h-full mx-8 md:mx-16"
            key={index}
          >
            <Image
              src={`http://localhost:3000/tech-icons/${item.name}.svg`}
              width={100}
              height={100}
              alt={`${item.name} logo`}
              className="text-white w-8 md:w-16"
            />
            {/* Tooltip */}
            <div
              className="tooltip absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 transition-opacity duration-300"
              style={{
                visibility: "hidden",
              }}
            >
              <div className="bg-black text-white text-sm rounded px-2 py-1 max-w-xs">
                {item.description}
              </div>
            </div>

            {/* Hover Effect to Show Tooltip */}
            {/* <div
              className="absolute top-0 left-0 right-0 bottom-0 z-50"
              onMouseEnter={(e) => {
                const tooltip = e.currentTarget.querySelector('.tooltip') as HTMLElement;
                tooltip && (tooltip.style.visibility = 'visible');
                tooltip && (tooltip.style.opacity = '1');
              }}
              onMouseLeave={(e) => {
                const tooltip = e.currentTarget.querySelector('.tooltip') as HTMLElement;
                tooltip && (tooltip.style.visibility = 'hidden');
                tooltip && (tooltip.style.opacity = '0');
              }}
            ></div> */}
          </li>
        ))}
      </ul>

      <ul

        x-ref="logos"
        className={cn(
          "flex flex-nowrap  [&_img]:max-w-none animate-infinite-scroll",
          // start && "",
          //pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, index) => (
          <li
            className="relative hover:text-blue-400 h-full mx-8 md:mx-16"
            key={index}
          >
            <Image
              src={`http://localhost:3000/tech-icons/${item.name}.svg`}
              width={100}
              height={100}
              alt={`${item.name} logo`}
              className="text-white w-8 md:w-16"
            />
            {/* Tooltip */}
            <div
              className="tooltip absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 transition-opacity duration-300"
              style={{
                visibility: "hidden",
              }}
            >
              <div className="bg-black text-white text-sm rounded px-2 py-1 max-w-xs">
                {item.description}
              </div>
            </div>

            {/* Hover Effect to Show Tooltip */}
            {/* <div
              className="absolute top-0 left-0 right-0 bottom-0 z-50"
              onMouseEnter={(e) => {
                const tooltip = e.currentTarget.querySelector('.tooltip') as HTMLElement;
                tooltip && (tooltip.style.visibility = 'visible');
                tooltip && (tooltip.style.opacity = '1');
              }}
              onMouseLeave={(e) => {
                const tooltip = e.currentTarget.querySelector('.tooltip') as HTMLElement;
                tooltip && (tooltip.style.visibility = 'hidden');
                tooltip && (tooltip.style.opacity = '0');
              }}
            ></div> */}
          </li>
        ))}
      </ul>

      <ul
        aria-hidden="true"
        x-ref="logos"
        className={cn(
          "flex flex-nowrap [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll",
          // start && "",
          
        )}
      >
        {items.map((item, index) => (
          <li
            className="relative hover:text-blue-400 h-full"
            key={index}
          >
            <Image
              src={`http://localhost:3000/tech-icons/${item.name}.svg`}
              width={100}
              height={100}
              alt={`${item.name} logo`}
              className="text-white w-8"
            />
            {/* Tooltip */}
            <div
              className="tooltip absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 transition-opacity duration-300"
              style={{
                visibility: "hidden",
              }}
            >
              <div className="bg-black text-white text-sm rounded px-2 py-1 max-w-xs">
                {item.description}
              </div>
            </div>

            {/* Hover Effect to Show Tooltip */}
            {/* <div
              className="absolute top-0 left-0 right-0 bottom-0 z-50"
              onMouseEnter={(e) => {
                const tooltip = e.currentTarget.querySelector('.tooltip') as HTMLElement;
                tooltip && (tooltip.style.visibility = 'visible');
                tooltip && (tooltip.style.opacity = '1');
              }}
              onMouseLeave={(e) => {
                const tooltip = e.currentTarget.querySelector('.tooltip') as HTMLElement;
                tooltip && (tooltip.style.visibility = 'hidden');
                tooltip && (tooltip.style.opacity = '0');
              }}
            ></div> */}
          </li>
        ))}
      </ul>
    </div>
  );
};
