// import AboutText from '@/components/ui/AboutText'

import Counter from '@/components/ui/Counter'
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
      <Counter />
    
  </div>
  </div>
</section>
  )
}

export default About