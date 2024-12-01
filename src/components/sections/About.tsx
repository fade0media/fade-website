// import AboutText from '@/components/ui/AboutText'
import FadeInText from '@/components/ui/FadeInText'
import React from 'react'

const About = () => {
  return (
    <section className="text-gray-600 md:mt-24 body-font relative z-40 px-8 md:px-24">
  <div className="container flex pb-24 lg:flex-row justify-between flex-col items-start lg:items-center lg:gap-36 gap-8 md:gap-12">
    
    {/* <AboutText /> */}
    <div className='md:text-4xl text-white text-xl'>
    <FadeInText text="We offer customized digital solutions to help brands and individuals create and grow their online business."/>
    </div>

    <div className="container mx-auto">
    <div className="flex justify-start items-center -m-4 text-center gap-8">
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