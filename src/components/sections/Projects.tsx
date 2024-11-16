import ProjectCard from "@/components/ui/ProjectCard";
import { useRef } from "react";
import {
  useScroll,
  motion,
  useTransform,
} from "framer-motion";

export function Projects() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll({ container: containerRef });
  
  // Updated ranges for a more noticeable effect
  const y1 = useTransform(scrollY, [0, 500], [0, 300]);
  const y2 = useTransform(scrollY, [0, 500], [0, -900]);

  return (
    <div  className="md:mb-36 my-24 relative z-40 gap-16 flex flex-col items-center w-full px-8 md:px-24 min-h-screen overflow-y-scroll">
      <div className="flex flex-col justify-center items-center gap-4">
        <h2 className="text-3xl font-semibold md:text-4xl lg:text-5xl">Our Work</h2>
        <p className="text-xl text-gray-400 text-center">Explore some of our most creative endeavours.</p>
      </div>
      
      <div ref={containerRef} className="gap-16 flex flex-col md:flex-row justify-between items-center w-full">
        <motion.div style={{ y: y1 }}>
          <ProjectCard />
        </motion.div>

        <motion.div style={{ y: y2 }}>
          <ProjectCard />
        </motion.div>
      </div>

      <div ref={containerRef} className="gap-16 flex flex-col md:flex-row justify-between items-center w-full">
        <motion.div style={{ y: y1 }}>
          <ProjectCard />
        </motion.div>

        <motion.div style={{ y: y2 }}>
          <ProjectCard />
        </motion.div>
      </div>
    </div>
  );
}
