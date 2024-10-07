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

    // const render = () => {
    //     // Clear the canvas
    //     ctx.clearRect(0, 0, canvas.width, canvas.height);
      
    //     // Create a radial gradient with the center lower
    //     const gradient = ctx.createRadialGradient(
    //       canvas.width / 2,  // x-coordinate of the gradient's center
    //       canvas.height * 1.3,  // y-coordinate of the gradient's center (lower vertically)
    //       100,             // Start radius (for a small blue center)
    //       canvas.width / 2,  // x-coordinate of the gradient's outer circle
    //       canvas.height / 2, // y-coordinate of the gradient's outer circle
    //       canvas.width      // Outer radius (for full coverage)
    //     );
      
    //     // Add color stops for a smooth blue-to-black transition
    //     gradient.addColorStop(0.5, "#000000");  
    //     gradient.addColorStop(0.0001, "#093c42"); 
    //     gradient.addColorStop(0, "#13abbf");  
      
    //     // Fill the background with the radial gradient
    //     ctx.fillStyle = gradient;
    //     ctx.fillRect(0, 0, canvas.width, canvas.height);
      
    //     // Render stars on top of the gradient background
    //     stars.forEach((star) => {
    //       const time = Date.now() * 0.002;
    //       star.x = star.baseX + Math.sin(time * star.hoverSpeedX) * star.hoverAmplitudeX;
    //       star.y = star.baseY + Math.cos(time * star.hoverSpeedY) * star.hoverAmplitudeY;
      
    //       ctx.beginPath();
    //       ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    //       ctx.fillStyle = `rgba(255, 255, 255, 1)`; // White color for stars
    //       ctx.fill();
    //     });
      
    //     // Continue the animation
    //     animationFrameId = requestAnimationFrame(render);
    //   };
      
      const render = () => {
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height); // This clears the canvas to be fully transparent
      
        // Render stars on top of the transparent background
        stars.forEach((star) => {
          const time = Date.now() * 0.002;
          star.x = star.baseX + Math.sin(time * star.hoverSpeedX) * star.hoverAmplitudeX;
          star.y = star.baseY + Math.cos(time * star.hoverSpeedY) * star.hoverAmplitudeY;
      
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, 1)`; // White color for stars
          ctx.fill();
        });
      
        // Continue the animation
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
      className={cn("h-full w-full absolute inset-0 -z-0", className)}
    />
  );
};
