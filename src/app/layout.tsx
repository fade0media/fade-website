import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";

import Header from "@/components/ui/Header";

import { Instrument_Sans } from 'next/font/google'
import Footer from "@/components/ui/Footer";


const openSans = Instrument_Sans({
  subsets: ['latin'],
  display: 'swap',
})

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
        
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
