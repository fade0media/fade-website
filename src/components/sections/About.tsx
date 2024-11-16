// import AboutText from '@/components/ui/AboutText'
import FadeInText from '@/components/ui/FadeInText'
import React from 'react'

const About = () => {
  return (
    <section className="text-gray-600 md:mt-24 body-font relative z-40 px-8 md:px-24">
  <div className="container flex pb-24 sm:flex-row justify-between flex-col items-start sm:items-center lg:gap-36 gap-8 md:gap-12">
    
    {/* <AboutText /> */}
    <div className='md:text-3xl text-white text-xl'>
    <FadeInText text="We are a branding & digital studio based in Mangaluru, India,
     tackling complex visual and technological challenges for bold brands."/>
    </div>

    <div className="container mx-auto">
    <div className="flex justify-start md:justify-center items-center -m-4 text-center gap-8">
      <div className="p-4 text-left">
        <h2 className="title-font md:text-3xl text-xl font-bold text-white">20+</h2>
        <p className="leading-relaxed text-md font-semibold text-gray-400">Clients</p>
      </div>

      <div className="p-4 text-left">
        <h2 className="title-font md:text-3xl text-xl font-bold text-white">20+</h2>
        <p className="leading-relaxed text-md font-semibold text-gray-400">Clients</p>
      </div>

      <div className="p-4 text-left">
        <h2 className="title-font md:text-3xl text-xl font-bold text-white">20+</h2>
        <p className="leading-relaxed text-md font-semibold text-gray-400">Clients</p>
      </div>

      
      
      
    </div>
  </div>
  </div>
</section>
  )
}

export default About