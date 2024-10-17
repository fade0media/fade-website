import Button from '@/components/ui/Button'
import React from 'react'

const CTA = () => {
  return (
    <div className="h-[20rem] w-full bg-black bg-grid-white/[0.2]  px-4 my-8 relative flex flex-col items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute z-0 pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-4xl text-center sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-br from-pink-500 via-orange-300 to-violet-600 py-8">
        Got Ideas? We&apos;ve got the skills.
      </p>
      <Button link="#" name="Get a Quote"/>
    </div>
  )
}

export default CTA