"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect } from "react";

export const InfiniteMovingCards1 = ({
  items,
//   direction = "left",
//   speed = "fast",
  pauseOnHover = true,
//   className,
}: {
  items: string[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
//   const containerRef = React.useRef<HTMLDivElement>(null);
//   const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    //addAnimation();
  }, []);

//   const [start, setStart] = useState(false);

//   function addAnimation() {
//     if (containerRef.current && scrollerRef.current) {
//       const scrollerContent = Array.from(scrollerRef.current.children);

//       scrollerContent.forEach((item) => {
//         const duplicatedItem = item.cloneNode(true);
//         if (scrollerRef.current) {
//           scrollerRef.current.appendChild(duplicatedItem);
//         }
//       });

//       getDirection();
//       getSpeed();
//       setStart(true);
//     }
//   }

//   const getDirection = () => {
//     if (containerRef.current) {
//       if (direction === "left") {
//         containerRef.current.style.setProperty("--animation-direction", "forwards");
//       } else {
//         containerRef.current.style.setProperty("--animation-direction", "reverse");
//       }
//     }
//   };

//   const getSpeed = () => {
//     if (containerRef.current) {
//       if (speed === "fast") {
//         containerRef.current.style.setProperty("--animation-duration", "20s");
//       } else if (speed === "normal") {
//         containerRef.current.style.setProperty("--animation-duration", "40s");
//       } else {
//         containerRef.current.style.setProperty("--animation-duration", "80s");
//       }
//     }
//   };

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
        //   start && "",
          //pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, index) => (
          <li
            className="relative hover:text-blue-400 h-full mx-8 md:mx-16"
            key={index}
          >
            <Image
              src={`/client-logos/pngs/size2/${index + 1}.png`}
              width={300}
              height={300}
              alt={`${item} logo`}
              className="text-white w-36 lg:w-48 grayscale"
            />
          </li>
        ))}
      </ul>

      <ul

        x-ref="logos"
        className={cn(
          "flex flex-nowrap  [&_img]:max-w-none animate-infinite-scroll",
        //   start && "",
          //pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, index) => (
          <li
            className="relative hover:text-blue-400 h-full mx-8 md:mx-16"
            key={index}
          >
            <Image
              src={`/client-logos/pngs/size2/${index + 1}.png`}
              width={300}
              height={300}
              alt={`${item} logo`}
              className="text-white w-36 lg:w-48 grayscale"
            />
          </li>
        ))}
      </ul>

      <ul

        x-ref="logos"
        className={cn(
          "flex flex-nowrap  [&_img]:max-w-none animate-infinite-scroll",
        //   start && "",
          //pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, index) => (
          <li
            className="relative hover:text-blue-400 h-full mx-8 md:mx-8"
            key={index}
          >
            <Image
              src={`/client-logos/pngs/size2/${index + 1}.png`}
              width={300}
              height={300}
              alt={`${item} logo`}
              className="text-white w-36 lg:w-42 grayscale"
            />
          </li>
        ))}
      </ul>

      

    </div>
  );
};
