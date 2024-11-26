
import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import { CursorProvider } from '@/app/contexts/CursorContext';
import Header from "@/components/ui/Header";
//import Footer from "@/components/ui/Footer";
// import AnimatedCursor from "react-animated-cursor"
import Animation from "@/components/ui/ParticleSystem";
// import Footer1 from "@/components/ui/Footer1";
import Footer2 from "@/components/ui/Footer2";
import Cursor from "@/components/ui/Cursor";
// import { initializeLenis } from "@/lib/utils";
// import { useEffect } from "react";
// import { Inter } from "next/font/google"
// const inter = Inter({ subsets: ['latin'] })
const satoshi = localFont({
  src: [
    {
      path: './fonts/Satoshi-Regular.woff',
      style: 'normal',
      weight: '400'
    },
   
  ],
})



export const metadata: Metadata = {
  title: "Fade Media",
  description: "Fade Media",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    
    <html lang="en" className={satoshi.className}>
      {/* <head>
      <link rel="icon" href="/favicon.svg" sizes="any" />
      </head> */}
      <body  
      className="tracking-[-0.025em]"
      >
        <CursorProvider>
        <Cursor />
        <Animation />
        <Header />
        {children}
        <Footer2 />
        </CursorProvider>
      </body>
    </html>
    
  );
}
