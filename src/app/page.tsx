'use client'


import About from "@/components/sections/About";
import CTA from "@/components/sections/CTA";
import FAQ from "@/components/sections/FAQ";
import Clients from "@/components/sections/Clients"
import Hero from "@/components/sections/Hero";
import Services1 from "@/components/sections/Services1";
import { StarsBackground } from "@/components/ui/StarsBackground";
import Animation from "@/components/ui/ParticleSystem";
import { useRef, useEffect } from "react";
import Spline from "@splinetool/react-spline/next";
//import { StarsBackground } from "@/components/ui/StarsBackground";

export default function Home() {
  
  
  return (
    <>
      {/* {isLoading ? (
        <div className="text-2xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Fade.
        </div>
      ) : ( */}
        <div className={`flex flex-col bg-red-400 justify-center items-start background-gradient hero-bg transition-opacity  w-full`}>
          
          {/* <StarsBackground /> */}
          <div className="absolute right-0 top-0 w-[250px] h-[250px] md:w-[500px] md:h-[500px] z-40 gradient-quadrant rounded-bl-full">
          {/* <Spline
        scene="https://prod.spline.design/srz2hiTvYWCwQHYf/scene.splinecode" 
      /> */}

            
          </div>
          <Animation />
          <Hero />
         
          
          
          
        </div>
        <About />
        <Services1 />
        <Clients />
        <FAQ />
        <CTA />
        {/* <Services /> */}
      {/* )} */}
    </>
  );
}
