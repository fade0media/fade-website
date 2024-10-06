import Hero from "@/components/sections/Hero";
import { StarsBackground } from "@/components/ui/StarsBackground";


export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center mx-6">
      
      <StarsBackground />
      <Hero />
      
    </div>
  );
}
