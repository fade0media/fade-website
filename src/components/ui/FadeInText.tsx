'use client'

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface Props {
  text: string;
}

export default function FadeInText({ text }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const splitText = text.split(" ");

  return (
    <div ref={ref}>
      <p className=''>
        {splitText.map((el, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{
              duration: 0.25,
              delay: i / 20,
            }}
            className=''
          >
            {el}{" "}
          </motion.span>
        ))}
      </p>
    </div>
  );
}
