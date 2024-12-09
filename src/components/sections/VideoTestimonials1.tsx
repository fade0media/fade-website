import { ArrowUpRight } from 'lucide-react'
import React from 'react'

const VideoTestimonials1 = () => {
    return (
        <div className='relative z-40 w-full px-8 md:px-24 my-24'>
        <h2 className='text-3xl font-semibold md:text-4xl lg:text-5xl text-center'>Don&apos;t just take our word for it.</h2>
        <p className='text-gray-400 mt-4 md:text-xl text-balance text-center mb-8'>Here&apos;s what people who we&apos;ve worked with have to say about us.</p>
        
        <div className="md:flex-row lg:gap-12 flex flex-col justify-center items-center sm:-m-4 -mx-4 -mb-10 mt-6">
      <div className="p-4 md:w-1/3 sm:mb-0 sm:w-3/4 mb-6">
        <div className="rounded-lg w-full h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1203x503"/>
        </div>
        <h2 className="text-2xl font-medium title-font text-white mt-5">&quot;Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed.&quot;</h2>
        <p className="text-gray-400 leading-relaxed mt-2">Senior Manager, ABC Company</p>
        <a className="text-white font-semibold inline-flex items-center mt-3 link relative">Check out website
          <ArrowUpRight className='ml-2 '/>
        </a>
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 sm:w-3/4 mb-6">
        <div className="rounded-lg w-full h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1203x503"/>
        </div>
        <h2 className="text-2xl font-medium title-font text-white mt-5">&quot;Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed.&quot;</h2>
        <p className="text-gray-400 leading-relaxed mt-2">Senior Manager, ABC Company</p>
        <a className="text-white font-semibold inline-flex items-center mt-3">Check out website
          <ArrowUpRight className='ml-2 '/>
        </a>
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 sm:w-3/4 mb-6">
        <div className="rounded-lg w-full h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1203x503"/>
        </div>
        <h2 className="text-2xl font-medium title-font text-white mt-5">&quot;Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed.&quot;</h2>
        <p className="text-gray-400 leading-relaxed mt-2">Senior Manager, ABC Company</p>
        <a className="text-white font-semibold inline-flex items-center mt-3">Check out website
          <ArrowUpRight className='ml-2 '/>
        </a>
      </div>
    </div>

        </div>
    )
}

export default VideoTestimonials1