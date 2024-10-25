import React from 'react'
import Image from 'next/image'
import logo from "../../public/logo-white.png";
const Footer = () => {

    const footerData = [
        {
            title: "Reach Out",
            links: [
                "abc@example.com",
                "+91 8983838493",
                "Terms and Conditions",
                "Privacy Policy"
            ]
        },
        {
            title: "Socials",
            links: [
                "Instagram",
                "LinkedIn",
                "Facebook",
                
            ]
        },
        {
            title: "Content",
            links: [
                "Home",
                "About",
                "Services",
                "Projects",
                "Contact"
            ]
        },
        
    ]
    return (
        <footer className="text-gray-600 body-font px-12 w-full py-8 relative z-50 backdrop-blur-md bg-black/70 border rounded-t-2xl">
            <div className="flex justify-between items-start flex-wrap gap-4 px-5">
                <div className="flex flex-col justify-center items-start">
                    <a className="flex title-font font-medium items-start justify-center text-gray-900">
                        <Image src={logo}
                            alt="Picture of the author"
                            width={90}
                        //   height={150}
                        />
                        {/* <img src="../../public/logo-white.jpg" alt="" /> */}
                    </a>
                    <p className="mt-2 text-md text-gray-400 w-3/4">We are based in Mangaluru, Karnataka. </p>
                    <p className="mt-2 text-md text-gray-400">Brand success runs in our veins!</p>
                    {/* <p className="mt-2 text-md text-white">+91 9843827389</p> */}
                </div>
                <div className="flex-grow flex md:pl-20 md:justify-end text-left justify-start gap-8 lg:gap-16 flex-wrap">
                    
                        {
                            footerData.map((item, index) => (
                                <div key={index} className="flex flex-col justify-start items-start w-1/2 md:w-1/4">
                                <h2 className="title-font font-medium text-violet-400 tracking-wide text-lg">{item.title}</h2>
                        <nav className="list-none mb-4">
                            {
                                item.links.map((link, index) => (
                                    <li key={index} className=' mt-3'>
                                <a className="text-gray-400 hover:text-gray-800">{link}</a>
                            </li>
                                ))
                            }
                            
                        </nav>
                        </div>
                            ))
                        }
                    
                    
                </div>
            </div>
            <div className="">
                <div className="container py-4 px-5 flex flex-wrap flex-col sm:flex-row justify-between">
                    <p className="text-white text-sm text-center sm:text-left">© 2024 Fade Media —
                        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-400 ml-1" target="_blank">All Rights Reserved.</a>
                    </p>
                    {/* <div className='text-white flex justify-center items-center text-left gap-8 text-sm mr-24'>
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                    </div> */}
                </div>
            </div>
        </footer>
    )
}

export default Footer