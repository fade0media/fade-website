'use client'


import About from "@/components/sections/About";
import CTA from "@/components/sections/CTA";
import FAQ from "@/components/sections/FAQ";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import { StarsBackground } from "@/components/ui/StarsBackground";

export default function Home() {
  

  return (
    <>
      {/* {isLoading ? (
        <div className="text-2xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Fade.
        </div>
      ) : ( */}
        <div className={`flex flex-col justify-center items-center background-gradient hero-bg transition-opacity  w-full`}>
          
          {/* <StarsBackground /> */}
          
          <Hero />
         
          
          
          
        </div>
        <About />
        <Services />
        <FAQ />
        <CTA />
        {/* <Services /> */}
      {/* )} */}
    </>
  );
}
