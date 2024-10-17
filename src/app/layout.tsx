import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";

import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";




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
