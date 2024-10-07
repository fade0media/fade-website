'use client'


import Hero from "@/components/sections/Hero";
import { StarsBackground } from "@/components/ui/StarsBackground";

export default function Home() {
  

  return (
    <>
      {/* {isLoading ? (
        <div className="text-2xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Fade.
        </div>
      ) : ( */}
        <div className={`flex flex-col justify-center items-center background-gradient transition-opacity  w-full`}>
          
          <StarsBackground />
          <div className="">
          <Hero />
          </div>
          
          
        </div>
      {/* )} */}
    </>
  );
}
