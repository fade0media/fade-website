import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
  
function FAQ() {
    return (
        <section className='md:px-24 px-8 relative z-40 flex py-16 flex-col justify-center items-center w-full lg:flex-row lg:items-start lg:gap-48'>
        <div className='flex flex-col justify-center items-center mb-8 w-full lg:flex-col lg:items-start gap-4 lg:w-1/2 lg:mr-8'>
            <div className='flex flex-col justify-between w-full items-center lg:items-start gap-2'>
                <h2 className='text-3xl lg:text-left text-center w-full font-semibold md:text-4xl lg:text-5xl'>Everything You Need to Know</h2>
        
                <p className='text-gray-400 text-lg'>Have more questions?</p>
            </div>

            <Link href="#" className='bg-white text-black whitespace-nowrap px-3 py-2 flex justify-center items-center gap-2 text-sm rounded-2xl font-semibold cursor-pointer'>
                Schedule a call
                <ArrowUpRight className='w-4 h-4'/>
            </Link>
            {/* <Button name="View All" link="#"/>  */}
        
        
        </div>

        {/* <div className="flex flex-col justify-center items-center">
            <h2 className='text-3xl font-semibold md:text-4xl lg:text-5xl text-center'>Frequently Asked Questions</h2>
        </div> */}
        
        
        <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
        

    </section>
     
        
    
    )
  }

  export default FAQ;
  