// import localFont from 'next/font/local';
import React from 'react';
import { cn } from "@/lib/utils"; 
import Link from 'next/link';

// const ibrand = localFont({
//   src: [
//     {
//       path: '../../app/fonts/ibrand.woff',
//       style: 'normal',
//     },
//   ],
// });

const Logo = () => {
  return (
    <Link href="/" className={("text-white text-2xl font-semibold")}>
      fade.
    </Link>
  );
};

export default Logo;
