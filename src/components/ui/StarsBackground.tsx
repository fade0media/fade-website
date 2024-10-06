"use client";
import { cn } from "@/lib/utils";
import React, {
  useState,
  useEffect,
  useRef,
  RefObject,
  useCallback,
} from "react";

interface StarProps {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  radius: number;
  opacity: number;
  hoverSpeedX: number;
  hoverSpeedY: number;
  hoverAmplitudeX: number;
  hoverAmplitudeY: number;
}

interface StarBackgroundProps {
  starDensity?: number;
  className?: string;
}

export const StarsBackground: React.FC<StarBackgroundProps> = ({
  starDensity = 0.00015,
  className,
}) => {
  const [stars, setStars] = useState<StarProps[]>([]);
  const canvasRef: RefObject<HTMLCanvasElement> = useRef<HTMLCanvasElement>(null);

  const generateStars = useCallback(
    (width: number, height: number): StarProps[] => {
      const area = width * height;
      const numStars = Math.floor(area * starDensity);
      return Array.from({ length: numStars }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        baseX: Math.random() * width,  // Store the base position for hovering
        baseY: Math.random() * height,
        radius: Math.random() * 0.05 + 0.5,
        opacity: Math.random() * 0.5 + 0.5,
        hoverSpeedX: Math.random() * 0.5 + 0.1, // Random horizontal hover speed
        hoverSpeedY: Math.random() * 0.5 + 0.1, // Random vertical hover speed
        hoverAmplitudeX: Math.random() * 3 + 1, // Larger random horizontal amplitude
        hoverAmplitudeY: Math.random() * 3 + 1, // Larger random vertical amplitude
      }));
    },
    [starDensity]
  );

  useEffect(() => {
    const updateStars = () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const { width, height } = canvas.getBoundingClientRect();
        canvas.width = width;
        canvas.height = height;
        setStars(generateStars(width, height));
      }
    };

    updateStars();

    const resizeObserver = new ResizeObserver(updateStars);
    if (canvasRef.current) {
      resizeObserver.observe(canvasRef.current);
    }

    return () => {
      if (canvasRef.current) {
        resizeObserver.unobserve(canvasRef.current);
      }
    };
  }, [generateStars]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        
        const time = Date.now() * 0.002;
        star.x = star.baseX + Math.sin(time * star.hoverSpeedX) * star.hoverAmplitudeX;
        star.y = star.baseY + Math.cos(time * star.hoverSpeedY) * star.hoverAmplitudeY;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, 1)`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [stars]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("h-full w-full absolute inset-0 -z-10", className)}
    />
  );
};
