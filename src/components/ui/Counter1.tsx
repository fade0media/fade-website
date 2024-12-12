'use client';
import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';
import NumberFlow from '@number-flow/react';



export function Counter1({
  value,
  diff,
}: {
  value: number;
  diff: string;
}) {
  

  return (
    <span className='flex flex-col items-center justify-center gap-2'>
      {/* Main Number */}
      <span className='text-5xl font-semibold text-white'>
        <NumberFlow value={value} format={{ maximumFractionDigits: 0 }} />
        +
      </span>

      {/* Difference with background */}
      <div className='text-2xl text-gray-400 font-semibold pr-4'>{diff}</div>
    </span>
  );
}

export default function Index() {
  const numbers = [20, 7, 1000000];
  const diffs = ["Clients", "Countries", "Impressions Generated"];

  const [currentIndex, setCurrentIndex] = useState(0);

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % numbers.length);
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [isInView]);

  return (
    <div ref={ref}>
      <Counter1 value={numbers[currentIndex]} diff={diffs[currentIndex]} />
    </div>
  );
}
