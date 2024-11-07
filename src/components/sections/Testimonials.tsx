// import Clients from '@/components/ui/Clients'
//import TestimonialCards from '@/components/ui/TestimonialCards'
import React from 'react'
// import { motion, useInView } from 'framer-motion';
// import { useRef } from 'react';
import FadeInText from '@/components/ui/FadeInText';
import { VerticalMovingCards } from '@/components/ui/vertical-moving-cards';

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
  const text = "Our clients consistently find working with us a seamless and rewarding experience. We're committed to understanding their unique goals and delivering impactful results."
  return (
    <div className="flex flex-col items-center justify-center relative z-40 mb-36 px-8 md:px-24 w-full ">


      <div className='flex flex-col justify-center items-center md:flex-row gap-16'>
        <div className='flex flex-col md:w-3/4 justify-center items-start gap-8 text-2xl md:text-4xl text-balance w-full text-left text-gray-300'>
          <FadeInText text={text} />



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