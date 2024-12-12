import { useCallback, useEffect, useRef, useState } from 'react';

// Ease-out exponential function for smooth counting animation
const easeOutExpo = (t: number): number => {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
};

/**
 * Custom hook to create a scroll-triggered count-up effect.
 *
 * @param ref - Ref to the target element to observe.
 * @param end - The final count value.
 * @param duration - Duration of the count animation in milliseconds (default: 2000ms).
 * @returns The current count value.
 */
const useScrollTriggeredCountUp = (
  ref: React.RefObject<HTMLElement>,
  start: number,
  end: number,
  duration: number = 1000
): number => {
  const [count, setCount] = useState<number>(start); // State to hold the current count
  const isCounting = useRef<boolean>(false); // Prevent multiple triggers
  const frameRate = 1000 / 60; // Frame rate for 60fps
  const totalFrames = Math.round(duration / frameRate); // Total frames for the animation

  // Scroll observer callback
  const handleScroll: IntersectionObserverCallback = useCallback(
    ([entry]) => {
      if (entry.isIntersecting && !isCounting.current) {
        isCounting.current = true;
        let frame = 0;

        const counter = setInterval(() => {
          frame++;
          const progress = easeOutExpo(frame / totalFrames); // Calculate eased progress
          setCount(Math.round(end * progress)); // Update count based on progress

          if (frame === totalFrames) {
            clearInterval(counter);
            isCounting.current = false;
          }
        }, frameRate);
      } else {
        isCounting.current = false;
        setCount(0);
      }
    },
    [end, frameRate, totalFrames]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleScroll, { threshold: 0.7 });
    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef); // Start observing the element
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // Clean up observer
      }
    };
  }, [handleScroll, ref]);

  return count; // Return the current count value
};

export default useScrollTriggeredCountUp;
