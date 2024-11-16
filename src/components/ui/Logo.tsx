import localFont from 'next/font/local';
import React from 'react';
import { cn } from "@/lib/utils"; // Ensure cn is imported if it's available
import Link from 'next/link';

const ibrand = localFont({
  src: [
    {
      path: '../../app/fonts/ibrand.woff',
      style: 'normal',
    },
  ],
});

const Logo = () => {
  return (
    <Link href="/" className={cn(ibrand.className, "text-white text-3xl")}>
      fade.
    </Link>
  );
};

export default Logo;
