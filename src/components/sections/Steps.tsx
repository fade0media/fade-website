import StepCard from "@/components/ui/StepCard";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const Steps = () => {
  const steps = [
    {
      number: "01",
      step: "Ideation",
      description: "We talk with you and assess your needs.",
    },
    {
      number: "02",
      step: "Planning",
      description: "We create a detailed plan of action.",
    },
    {
      number: "03",
      step: "Execution",
      description: "We implement the strategy with precision.",
    },
    {
      number: "04",
      step: "Delivery",
      description: "We deliver the final product and ensure satisfaction.",
    },
  ];

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640); // `640px` is the breakpoint for `sm` in Tailwind
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.3, // Stagger each card's animation
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -50 }, // Always start with fade-down
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="flex flex-col justify-center items-center relative z-30 my-24 px-8 md:px-24 ">
      <h2 className='text-3xl font-semibold md:text-4xl lg:text-5xl text-center'>How we get things done</h2>
      <p className='text-gray-400 mt-4 md:text-xl text-balance text-center'>Efficient, innovative, and tailored to you — discover our process.</p>
    <motion.section
    
      className={`my-16 gap-16 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ${
        isSmallScreen ? "gap-10" : "" // Uniform spacing on smaller screens
      }`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {steps.map((item, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          style={{
            marginTop: isSmallScreen ? 0 : index * 40, // Uniform spacing for smaller screens
          }}
        >
          <StepCard item={item} />
        </motion.div>
      ))}
    </motion.section>
    </div>
  );
};

export default Steps;
