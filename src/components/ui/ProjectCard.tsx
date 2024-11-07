import React from 'react'
// import Image from 'next/image'
const ProjectCard = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-6'>
        <div className='w-full'>
        {/* <Image
        alt="Product"
        src="https://resourceboy.com/wp-content/uploads/2024/04/iphone-15-mockup-with-shadow-overlays-in-4-sights-thumbnail.jpg"
        width={600}
        height={75}
        className='w-full h-full rounded-3xl'
    //     layout="fill"
    // objectFit="contain"
        
        /> */}
        <img className='w-full h-full rounded-3xl' src="https://resourceboy.com/wp-content/uploads/2024/04/iphone-15-mockup-with-shadow-overlays-in-4-sights-thumbnail.jpg" alt="" />
        </div>

        <div className="flex text-xl justify-between items-center w-full">
            <h3 className=''>INSERT PROJECT NAME HERE</h3>
            <p>2024</p>
        </div>

        <div className="flex justify-start gap-3 items-center w-full">
            <p className='whitespace-nowrap text-sm md:text-md border border-gray-400 text-gray-400 rounded-full py-1 px-2'>Web Design</p>
            <p className='whitespace-nowrap text-sm md:text-md border border-gray-400 text-gray-400 rounded-full py-1 px-2'>Web Design</p>
            <p className='whitespace-nowrap text-sm md:text-md border border-gray-400 text-gray-400 rounded-full py-1 px-2'>Web Design</p>
        </div>

    </div>
  )
}

export default ProjectCard