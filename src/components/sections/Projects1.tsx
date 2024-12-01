'use client';

import { motion, useSpring } from 'framer-motion';
import React, { useState, MouseEvent, useRef } from 'react';

interface ImageItem {
  img: string;
  label: string;
  date: number;
}

function Projects1() {
  const [img, setImg] = useState<{ src: string; alt: string; opacity: number }>(
    {
      src: '',
      alt: '',
      opacity: 0,
    }
  );

  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const list: ImageItem[] = [
    {
      img: 'https://images.unsplash.com/photo-1682806816936-c3ac11f65112?q=80&w=1274&auto=format&fit=crop',
      label: 'Six Cap',
      date: 2024

    },
    {
      img: 'https://images.unsplash.com/photo-1681063762354-d542c03bbfc5?q=80&w=1274&auto=format&fit=crop',
      label: 'Room Decor',
      date: 2024
    },
    {
      img: 'https://images.unsplash.com/photo-1679640034489-a6db1f096b70?q=80&w=1274&auto=format&fit=crop',
      label: 'Porter',
      date: 2024
    },
    {
      img: 'https://images.unsplash.com/photo-1679482451632-b2e126da7142?q=80&w=1274&auto=format&fit=crop',
      label: 'LifeStyle',
      date: 2024
    },
  ];

  const spring = {
    stiffness: 150,
    damping: 15,
    mass: 0.1,
  };

  const imagePos = {
    x: useSpring(0, spring),
    y: useSpring(0, spring),
  };

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const { clientX, clientY } = e;
    const relativeX = clientX - containerRect.left;
    const relativeY = clientY - containerRect.top;

    imagePos.x.set(relativeX - imageRef.current.offsetWidth / 2);
    imagePos.y.set(relativeY - imageRef.current.offsetHeight / 2);
  };

  const handleImageInteraction = (item: ImageItem, opacity: number) => {
    setImg({ src: item.img, alt: item.label, opacity });
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMove}
      className=' bg-black  relative w-4/5 mx-auto p-4 my-36'
    >
        <div className="flex flex-col justify-center items-center mb-16">
        <h2 className='text-3xl font-semibold md:text-4xl lg:text-5xl text-center'>Our Portfolio</h2>
        <p className='text-gray-400 mt-4 md:text-xl text-balance text-center'>Crafting solutions that leave a mark.</p>
      </div>
      {list.map((item) => (
        <a
          href="/projects"
          key={item.label}
          onMouseEnter={() => handleImageInteraction(item, 1)}
          onMouseMove={() => handleImageInteraction(item, 1)}
          onMouseLeave={() => handleImageInteraction(item, 0)}
          className='w-full py-8 cursor-pointer text-center flex justify-between text-white border-b border-gray-400 border-opacity-35 last:border-none'
        >
          <p className='text-3xl md:text-5xl'>{item.label}</p>
          <span className='flex justify-center items-end md:text-xl'>{item.date}</span>
        </a>
      ))}

      <motion.img
        ref={imageRef}
        src={img.src}
        alt={img.alt}
        className='w-[300px] h-[220px] rounded-lg object-cover absolute top-0 left-0 transition-opacity duration-200 ease-in-out pointer-events-none'
        style={{
          x: imagePos.x,
          y: imagePos.y,
          opacity: img.opacity,
        }}
      />
    </section>
  );
}

export default Projects1;