'use client'


import About from "@/components/sections/About";
import CTA from "@/components/sections/CTA";
import FAQ from "@/components/sections/FAQ";
import Clients from "@/components/sections/Clients"
import Hero from "@/components/sections/Hero";
import Services1 from "@/components/sections/Services1";
import { StarsBackground } from "@/components/ui/StarsBackground";
//import { StarsBackground } from "@/components/ui/StarsBackground";

export default function Home() {
  

  return (
    <>
      {/* {isLoading ? (
        <div className="text-2xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Fade.
        </div>
      ) : ( */}
        <div className={`flex flex-col justify-center items-center background-gradient hero-bg transition-opacity  w-full`}>
          
          <StarsBackground />
          
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
