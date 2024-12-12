// import React from 'react'
// import videoTestimonials from '@/lib/static-data/video-testimonials'
// import Carousel from '@/components/ui/Carousel';


// interface TestimonialSlideProps {
//     item: {
//         testimonial: string;
//         client: string;
//         designation: string;
//         video: string;
//     }
// }
// const TestimonialSlide = ({
//     item
// }: TestimonialSlideProps) => {
//     return (
//         <div className='flex flex-col justify-center items-center w-full md:flex-row-reverse md:gap-8 lg:gap-16'>
//             <img src={item.video} alt="testimonial video" className='my-8 rounded-2xl w-3/4 md:w-1/2 lg:w-[500px]'/>
//             <div className='flex flex-col items-center justify-center md:items-start'>
//                 <h2 className='text-xl text-center md:text-left md:text-3xl lg:text-5xl'>&quot;{item.testimonial}&quot;</h2>
//                 <p className='text-lg text-center md:text-left lg:text-2xl text-gray-400 mt-4'>{item.designation}, {item.client}</p>
//                 {/* <p className='text-lg text-center text-gray-400'>{item.client}</p> */}
//             </div>
//         </div>
//     );
// };
// const VideoTestimonials = () => {
//     return (
//         <div className='relative z-40 w-full px-8 md:px-24 my-24'>
//         <h2 className='text-3xl font-semibold md:text-4xl lg:text-5xl text-center'>Don&apos;t just take our word for it.</h2>
//         <p className='text-gray-400 mt-4 md:text-xl text-balance text-center mb-8'>Here&apos;s what people who we&apos;ve worked with have to say about us.</p>
//         <Carousel
            
//             slides={videoTestimonials.map((item) => (
//                 <TestimonialSlide
//                     item={item}
//                     key={item.testimonial}
//                 />
//         ))}
//         />
//         </div>
//     )
// }

// export default VideoTestimonials