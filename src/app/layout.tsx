import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";

import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import AnimatedCursor from "react-animated-cursor"




const satoshi = localFont({
  src: [
    {
      path: './fonts/Satoshi-Regular.woff',
      style: 'normal',
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
      
      <body  
      >
        <AnimatedCursor 
        innerSize={8}
        outerSize={35}
       
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={2}
        outerStyle={{
          backgroundColor: 'rgba(95, 207, 200, 0.2)',
          
        }}
        innerStyle={{
          backgroundColor: '#5fbccf'
        }}/>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
