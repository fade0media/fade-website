import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const VerticalMovingCards = ({
  items,
  direction = "up",  // Direction defaults to "up"
//   speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "up" | "down";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);

  useEffect(() => {
    // Add duplicated items to create the loop effect
    if (scrollerRef.current && scrollerRef.current.childElementCount === items.length) {
      items.forEach((item) => {
        const duplicatedItem = document.createElement("li");
        duplicatedItem.innerHTML = scrollerRef.current!.innerHTML;
        scrollerRef.current!.appendChild(duplicatedItem);
      });
    }
    setStart(true);
    setDirection();
    setSpeed();
  }, []);

  // Sets animation direction based on the "direction" prop
  const setDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "up" ? "normal" : "reverse"
      );
    }
  };

  // Sets animation speed based on the "speed" prop
  const setSpeed = () => {
    if (containerRef.current) {
    //   const duration = speed === "fast" ? "100s" : speed === "normal" ? "100s" : "100s";
      containerRef.current.style.setProperty("--animation-duration", "1000s");
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative overflow-hidden",
        className
      )}
    >
        <div className="absolute top-1/2 left-1/2 [mask-image:linear-gradient(to_bottom, black, transparent_20%, transparent_80%, black)]"></div>
      <ul
        ref={scrollerRef}
        className={cn(
          "flex flex-col py-4",
          start && "animate-scroll-vertical",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, index) => (
          <li key={index} className="hover:text-blue-400 my-16">
            <div className="h-full rounded-2xl border border-gray-400 border-opacity-35 p-8">
              {/* Card content */}
              <p className="text-xl text-gray-300 mb-6">{item.quote}</p>
              <a className="inline-flex items-center">
                <img alt={item.name} src="https://dummyimage.com/106x106" className="w-12 h-12 rounded-full object-cover" />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="text-white font-medium">{item.name}</span>
                  <span className="text-gray-400 text-sm">{item.title}</span>
                </span>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
