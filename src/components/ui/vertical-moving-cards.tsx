import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const VerticalMovingCards = ({
  items,
  direction = "up",
  pauseOnHover = true,
  speed = 20, // Speed in seconds
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "up" | "down";
  pauseOnHover?: boolean;
  speed?: number; // Animation duration in seconds
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    setStart(true);
    setAnimationProperties();
  }, [direction, speed]);

  // Dynamically set CSS variables for animation direction and duration
  const setAnimationProperties = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "up" ? "normal" : "reverse"
      );
      containerRef.current.style.setProperty(
        "--animation-duration",
        `${speed}s`
      );
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden",
        className,
        "scroller"
      )}
    >
      <ul
        className={cn(
          "flex flex-col py-4 animate-scroll-vertical",
          start && "animate-scroll-vertical",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {/* Duplicate items directly in JSX */}
        {items.concat(items).map((item, index) => (
          <li key={index} className="hover:text-blue-400 my-8">
            <div className="h-full rounded-2xl border border-gray-400 border-opacity-35 p-8">
              <p className="text-xl text-gray-300 mb-6">{item.quote}</p>
              <a className="inline-flex items-center">
                <img
                  alt={item.name}
                  src="https://dummyimage.com/106x106"
                  className="w-12 h-12 rounded-full object-cover"
                />
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
