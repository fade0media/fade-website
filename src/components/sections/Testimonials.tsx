// import Clients from '@/components/ui/Clients'
//import TestimonialCards from '@/components/ui/TestimonialCards'
import React from 'react'
// import { motion, useInView } from 'framer-motion';
// import { useRef } from 'react';
import FadeInText from '@/components/ui/FadeInText';
import { VerticalMovingCards } from '@/components/ui/vertical-moving-cards';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const Testimonials = () => {

  const testimonials = [
    {
      quote:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
    },
    {
      quote:
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      name: "William Shakespeare",
      title: "Hamlet",
    },
    {
      quote: "All that we see or seem is but a dream within a dream.",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
    },
    {
      quote:
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      name: "Jane Austen",
      title: "Pride and Prejudice",
    },
    {
      quote:
        "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      name: "Herman Melville",
      title: "Moby-Dick",
    },
  ];
  //const ref1 = useRef(null);
  //const ref2 = useRef(null);

  // Check if each testimonial is in view
  //const isInView1 = useInView(ref1, { once: true });
  //const isInView2 = useInView(ref2, { once: true });
  const text = "Your success stories are our greatest pride."
  return (
    <div className="flex flex-col items-center justify-center relative z-40 mb-36 px-8 md:px-24 w-full ">


      <div className='flex flex-col justify-center items-center md:flex-row gap-56'>
        <div className='flex flex-col md:w-1/2 justify-center items-start gap-4'>
          <div className='gap-8 text-3xl font-semibold md:text-4xl lg:text-5xl w-full text-left text-white'>
            <FadeInText text={text} />
          </div>
          {/*<div className="text-xl text-gray-400 w-3/4">
          <FadeInText text="Here's what people who we've worked with have to say about us." />
          
          </div> */}
          <div className="text-2xl text-gray-400 w-3/4">
            <FadeInText text="Ready to start your journey?" />
          </div>

          <Link
            href="#"
            className='bg-white relative group text-black whitespace-nowrap px-3 py-2 flex justify-center items-center text-sm gap-2 md:text-sm rounded-full font-semibold cursor-pointer'
          >
            Give us a call
            <div className="relative text-black">
              <ArrowUpRight
                className="w-4 h-4 transform transition-all duration-200 ease-out opacity-100 group-hover:opacity-0 group-hover:translate-x-5 group-hover:-translate-y-5"
              />


              <ArrowUpRight
                className="absolute top-4 right-4 w-4 h-4 opacity-0 transform transition-all duration-200 ease-out group-hover:opacity-100 group-hover:translate-x-4 group-hover:-translate-y-4"
              />
            </div>
          </Link>
        </div>


        <div className="fade-to-black-1 rounded-md h-96 antialiased md:w-1/2 max-w-2xl relative overflow-hidden flex justify-center items-center [mask-image:linear-gradient(to_bottom, black, transparent_20%, transparent_80%, black)]">
          <VerticalMovingCards
            items={testimonials}
            direction="up"
            speed="slow"
          />
        </div>




      </div>
      {/* <Clients /> */}
    </div>
  )
}

export default Testimonials;