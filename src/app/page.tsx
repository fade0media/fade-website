import Hero from "@/components/sections/Hero";
import HeaderWithNav from "@/components/ui/Header";
import { StarsBackground } from "@/components/ui/StarsBackground";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center mx-6">
      
      <StarsBackground />
      <Hero />
      
    </div>
  );
}
