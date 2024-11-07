import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { FormData } from '@/components/ui/ContactForm';
import Lenis from '@studio-freight/lenis'
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



export function sendEmail(data: FormData) {
  const apiEndpoint = '/api/email';

  fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      alert(response.message);
    })
    .catch((err) => {
      alert(err);
    });
}

export function initializeLenis () {
  const lenis = new Lenis()



    function raf(time: number) {

      lenis.raf(time)

      requestAnimationFrame(raf)

    }



    requestAnimationFrame(raf)
}