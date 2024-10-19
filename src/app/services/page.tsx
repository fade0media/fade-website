'use client'

import React, { useEffect} from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const slidesData = [
  { name: 'Branding', backgroundImage: 'https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'Website Development', backgroundImage: 'https://images.unsplash.com/photo-1678690832871-8b9993c76aa8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'Mobile App Development', backgroundImage: 'https://placedog.net/1920?id=3' },
  { name: 'User Experience Design', backgroundImage: 'https://placedog.net/1920?id=4' },
  { name: 'AI Models', backgroundImage: 'https://placedog.net/1920?id=5' },
  
];

const ImageSlider: React.FC = () => {
    useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
  
      const slides = gsap.utils.toArray('.slide');
      const getRatio = (el: HTMLElement) => window.innerHeight / (window.innerHeight + el.offsetHeight);
  
      slides.forEach((slide: any, i: number) => {
        const bg = slide.querySelector('.background');
        const content = slide.querySelector('.content');
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: slide,
            start: () => (i ? 'top bottom' : 'top top'),
            end: 'bottom top',
            scrub: true,
            invalidateOnRefresh: true
          }
        });
  
        tl.fromTo(
          bg,
          { y: () => (i ? -window.innerHeight * getRatio(slide) : 0) },
          { y: () => window.innerHeight * (1 - getRatio(slide)), ease: 'none' }
        );
        tl.fromTo(
          content,
          { y: () => (i ? window.innerHeight * -getRatio(slide) * 2 : 0) },
          { y: () => window.innerHeight * getRatio(slide) * 2, ease: 'none' },
          0
        );
      });
    }, []);
  
    return (
      <>
        <section className="min-h-[50vh] flex flex-col items-start justify-center mx-8 md:mx-16 md:flex-row md:items-center md:justify-between">
        {/* <p className=' text-xs tracking-widest mb-4 text-teal-200'>WEB DESIGN AGENCY</p> */}
          <h1 className='text-5xl font-bold mb-4 md:text-7xl'>Our Services</h1>
          <p className='text-gray-400  max-w-md md:text-lg text-left'>Explore our wide range of digital services! We promise you won&apos;t be disappointed.</p>
        </section>
  
        <section className="flex flex-col w-full relative z-10">
          <ul className="flex flex-col w-full">
            {slidesData.map((slide, index) => (
              <li key={index} className="slide flex w-screen h-screen relative overflow-hidden">
                <div
                  className="background absolute top-0 left-0 w-full h-full bg-cover bg-center will-change-transform"
                  style={{ backgroundImage: `url(${slide.backgroundImage})` }}
                ></div>
                <div className="content flex flex-col items-center justify-center text-center w-[95%] max-w-xl p-12 mx-auto box-border text-white text-5xl font-medium leading-tight">
                  {slide.name}
                </div>
              </li>
            ))}
          </ul>
        </section>
  
        <section className="min-h-[50vh] flex flex-col gap-8 items-center justify-center text-center text-4xl md:text-7xl font-bold">
         Excited?
         <a href="/contact" className='bg-white text-black whitespace-nowrap px-3 py-2 flex justify-center items-center gap-2 text-lg rounded-2xl font-semibold cursor-pointer'>
                Hire Us!
              <ArrowUpRight className='w-4 h-4'/>
        </a>
        </section>
      </>
    );
  };
  
  export default ImageSlider;

