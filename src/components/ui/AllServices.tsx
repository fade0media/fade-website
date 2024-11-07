// import Image from "next/image";
import React, { useRef } from "react";
import { Timeline } from "@/components/ui/timeline";
import { motion, 
  // useScroll, useTransform 
} from "framer-motion";

export function AllServices() {
  const data = [
    {
      title: "Web Development",
      content: (
        <p className=''>Web development involves custom website development where businesses build tailor-made websites that meet specific needs, focusing on speed, security, and scalability.
          <br /> <br />
          eCommerce development helps create platforms for B2B transactions, including features like wholesale pricing, custom orders, and integration with supply chain systems.
          </p>
      ),
    },
    {
      title: "Mobile App Development",
      content: (
        <p className=''>Web development involves custom website development where businesses build tailor-made websites that meet specific needs, focusing on speed, security, and scalability.
          <br /> <br />
          eCommerce development helps create platforms for B2B transactions, including features like wholesale pricing, custom orders, and integration with supply chain systems.
          </p>
      ),
    },
    {
      title: "Web Development",
      content: (
        <p className=''>Web development involves custom website development where businesses build tailor-made websites that meet specific needs, focusing on speed, security, and scalability.
          <br /> <br />
          eCommerce development helps create platforms for B2B transactions, including features like wholesale pricing, custom orders, and integration with supply chain systems.
          </p>
      ),
    },
    {
      title: "Web Development",
      content: (
        <p className=''>Web development involves custom website development where businesses build tailor-made websites that meet specific needs, focusing on speed, security, and scalability.
          <br /> <br />
          eCommerce development helps create platforms for B2B transactions, including features like wholesale pricing, custom orders, and integration with supply chain systems.
          </p>
      ),
    },
    {
      title: "Web Development",
      content: (
        <p className=''>Web development involves custom website development where businesses build tailor-made websites that meet specific needs, focusing on speed, security, and scalability.
          <br /> <br />
          eCommerce development helps create platforms for B2B transactions, including features like wholesale pricing, custom orders, and integration with supply chain systems.
          </p>
      ),
    },
    {
      title: "Web Development",
      content: (
        <p className=''>Web development involves custom website development where businesses build tailor-made websites that meet specific needs, focusing on speed, security, and scalability.
          <br /> <br />
          eCommerce development helps create platforms for B2B transactions, including features like wholesale pricing, custom orders, and integration with supply chain systems.
          </p>
      ),
    },
    
    
  ];

  //const { scrollYProgress } = useScroll();
  const container = useRef(null);

  // const { scrollYProgress } = useScroll({

  //   target: container,

  //   offset: ['start end', 'start start']

  // })

  //const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])

  return (
    <>
    <div className="hidden md:flex ">
      <Timeline data={data}/>
    </div>
    <div ref={container} className="mb-16 w-full md:hidden min-h-screen relative flex flex-col justify-center items-center gap-24"
    // style={{ top:`calc(-5vh + ${i * 25}px)`}}
    >
      {data.map((item, index) => {
        // Calculate a unique fade-out effect for each card
        // const startFade = 0.2 * index;
        // //const endFade = startFade + 0.2;
        // const targetScale = 1 - ( (data.length - index + 1) * 0.05);
        //const scale = useTransform(scrollYProgress, [index * .25, 1], [1, targetScale]);
        // const opacity = useTransform(scrollYProgress, [startFade, endFade], [1, 0]);
        // const y = useTransform(scrollYProgress, [startFade, endFade], [0, -100]);

        return (
          <div className="w-full sticky top-[20px]">
          <motion.div
            key={index}
            className="card rounded-xl"
            // style={{
            style={{
              // top: `${((index +1 ) * 50)}px`
              top: 80,
              // border: `2px solid transparent`,
              // background: `linear-gradient(71deg, #080509, #1a171c, #080509)`
            }}
            //   scale,
            //   top:`calc(-5vh + ${index * 25}px)`
            //   // opacity,
            //   // y,
            // }}
            
            
          >
            <div className='p-6 py-8 flex relative flex-col gap-6 md:flex-row justify-between items-start  border-gray-400 border-opacity-35'>
              <h2 className='text-3xl font-bold text-gray-400'>{item.title}</h2>
              <div className='md:w-1/2 text-lg md:text-xl'>
                {item.content}
              </div>
            </div>
          </motion.div>
          </div>
        );
      })}
    </div>
    </>
  );
}
