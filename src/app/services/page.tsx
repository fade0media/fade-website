'use client'

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Service1 from '@/components/ui/Service1';
// //import { ArrowUpRight } from 'lucide-react';
// import Image from "next/image";

// import { Timeline } from "@/components/ui/timeline";
import { AllServices } from '@/components/ui/AllServices';
// import { initializeLenis } from '@/lib/utils';
// import { useScroll } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);



const page: React.FC = () => {
  // useEffect( () => {

  //   initializeLenis();

  // })
  const container = useRef(null);

  
    return (
      <>
        <section ref={container} className="relative z-40 flex flex-col items-start justify-center px-8 md:px-24 mt-24 w-full">
        {/* <p className=' text-xs tracking-widest mb-4 text-teal-200'>WEB DESIGN AGENCY</p> */}
          <div className="flex flex-col items-start justify-center w-full   border-gray-400 border-opacity-35">
            <h1 className='text-5xl font-bold mb-4 md:text-7xl'>Our Services</h1>
            <p className='text-gray-400  max-w-md md:text-lg text-left '>Explore our wide range of digital services! We promise you won&apos;t be disappointed.</p>
          </div>

          
          <AllServices />
          
        </section>
  
        
      </>
    );
  };
  
  export default page;

