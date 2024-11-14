'use client'
/* First make sure that you have installed the package */

  /* If you are using yarn */
  // yarn add @calcom/embed-react

  /* If you are using npm */
  // npm install @calcom/embed-react
  
  import { getCalApi } from "@calcom/embed-react";
import { ArrowUpRight } from "lucide-react";
  import { useEffect } from "react";
  export default function Calendar() {
	useEffect(()=>{
	  (async function () {
		const cal = await getCalApi({"namespace":"testing"});
		cal("ui", {"theme":"light","styles":{"branding":{"brandColor":"#bae6fd"}},"hideEventTypeDetails":false,"layout":"month_view"});
	  })();
	}, [])
	return <button data-cal-namespace="testing"
    className="bg-white text-black relative z-40 flex gap-2 hover:text-sky-400 justify-center whitespace-nowrap  items-center py-3 px-4 text-sm lg:text-md rounded-full font-semibold cursor-pointer"
	  data-cal-link="sanjana-bhat02/testing"
    
	  data-cal-config='{"layout":"month_view","theme":"light"}'
	  >Book a call instead
      <ArrowUpRight className='w-4 h-4'/>
      </button>;
  };
  



