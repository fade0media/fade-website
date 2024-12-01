import Logo from '@/components/ui/Logo'
import React from 'react'

const Footer2 = () => {
  return (
    <div className="relative z-40 px-8 pt-24 md:pt-0 mx-auto md:px-24">
  <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-3">
    <div className="sm:col-span-1">
      <Logo />
      <p className='w-3/4 text-xl text-gray-400 mt-2'>Our doors (and minds) are always open. Here&apos;s where to find us.</p>
      <div className='flex flex-col justify-start items-start w-full'>
      <div className="mt-6 lg:max-w-sm flex justify-start items-start gap-3 w-full">
      {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-map-pin mt-1"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg> */}
        <div className="flex flex-col">
          <p className='text-white text-xl font-semibold'>India</p>
        <p className="text-lg text-gray-400 w-5/6">
          Kankanady Road, Colaco Court, Mangaluru, Karnataka, India
        </p>
        {/* <p className="text-lg text-gray-400">
        Mangaluru, Karnataka, India
        </p> */}
        </div>

        
        
      </div>

      <div className="mt-6 lg:max-w-sm flex justify-start items-start gap-3 w-full">
      
        <div className="flex flex-col">
          <p className='text-white text-xl font-semibold'>UAE</p>
        <p className="text-lg text-gray-400 w-5/6">
        Al Tharawat Street, Shabiya 12, Mussafah, Abu Dhabi, United Arab Emirates.
        </p>
        
        </div>

        
        
      </div>
      </div>
    </div>
    <div className="space-y-3 lg:mx-auto">
      <p className="text-xl font-bold tracking-wide text-white">Say Hello</p>
      
      <div className="flex flex-col items-start justify-center">
        <p className="mr-1 text-white text-lg">General Inquiries:</p>
        <a href="mailto:contact@fademedia.in" aria-label="General inquiries email" title="General inquiries email" className="text-lg transition-colors duration-300 text-gray-400 hover:text-sky-200">contact@fademedia.in</a>
      </div>
      <div className="flex flex-col items-start justify-center">
        <p className="mr-1 text-white text-lg">Collaboration Opportunities:</p>
        <a href="mailto:dm@fademedia.in" aria-label="Collab email" title="Collab email" className="text-lg transition-colors duration-300 text-gray-400 hover:text-sky-200">dm@fademedia.in</a>
      </div>
      {/* <div className="flex flex-col items-start justify-center">
        <p className="mr-1 text-white text-lg">Phone:</p>
        <a href="mailto:info@lorem.mail" aria-label="Our email" title="Our email" className="text-lg transition-colors duration-300 text-gray-400 hover:text-sky-200">+91 82173 72961</a>
      </div> */}
    </div>
    <div className='lg:mx-auto'>
    <p className="text-xl font-bold tracking-wide text-white">Socials</p>
    <p className="mt-4 text-lg md:text-xl text-gray-400">
    Stay in the loop — follow us today!
    </p>
    <span className="inline-flex sm:ml-auto mt-4 justify-center sm:justify-start">
      {/* <a className="text-white">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </a>
      <a className="ml-3 text-white">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
      </a> */}
      <a className=" text-white" href="https://www.instagram.com/fade.dev">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
      <a className="ml-3 text-white" href="https://www.linkedin.com/company/fadegroup/posts/?feedView=all">
        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </a>
    </span>
    </div>
  </div>
  <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t border-gray-600 border-opacity-40 lg:flex-row">
    <p className="text-sm text-gray-500">
      © Copyright 2024 fade. All rights reserved.
    </p>
    <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
      
      <li>
        <a href="/" className="text-sm text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">Privacy Policy</a>
      </li>
      <li>
        <a href="/" className="text-sm text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">Terms &amp; Conditions</a>
      </li>
    </ul>
  </div>
</div>
  )
}

export default Footer2