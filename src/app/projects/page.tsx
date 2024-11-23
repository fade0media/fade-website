import ProjectCard from '@/components/ui/ProjectCard'
// import { motion } from 'framer-motion'
import React from 'react'

const page = () => {
  return (
    <div  className="md:mb-36 my-24 relative z-40 gap-16 flex flex-col items-center w-full px-8 md:px-24 min-h-screen overflow-y-scroll">
      <div className="flex flex-col justify-center items-center gap-4">
        <h2 className="text-3xl font-semibold md:text-4xl lg:text-5xl">Our Work</h2>
        <p className="text-xl text-gray-400 text-center">Explore some of our most creative endeavours.</p>
      </div>
      
      <div className="gap-16 flex flex-col md:flex-row justify-between items-center w-full">
        <div>
          <ProjectCard />
        </div>

        <div>
          <ProjectCard />
        </div>
      </div>

      <div className="gap-16 flex flex-col md:flex-row justify-between items-center w-full">
        <div>
          <ProjectCard />
        </div>

        <div>
          <ProjectCard />
        </div>
      </div>

      <div className="gap-16 flex flex-col md:flex-row justify-between items-center w-full">
        <div>
          <ProjectCard />
        </div>

        <div>
          <ProjectCard />
        </div>
      </div>
    </div>
  )
}

export default page