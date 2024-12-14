import React from 'react'

const page = () => {
    return (
        <section className='px-8 md:px-24 relative z-40 my-24'>
            <h1 className='text-3xl md:text-5xl'>Terms and Conditions
            </h1>

            <ol className='text-xl list-decimal pl-6 mt-12 flex flex-col items-start justify-center gap-16'>
                <li>
                    <h2 className='text-2xl font-bold'> Scope of Services </h2>
                    <div className='text-xl mt-2'>Fade, accessible at fademedia.in, provides the following services:
                        

                        <ul className='list-disc pl-8'>
                            <li>Web design</li>
                            <li>AI services</li>
                            <li>App development</li>
                            <li>Branding</li>
                            <li>Production</li>
                            <li>Marketing</li>
                        </ul>
                    </div>
                    <p className='text-xl mt-2'>No guarantees or specific disclaimers apply beyond what is stated in project agreements.

                    </p>
                </li>

                <li>
                    <h2 className='text-2xl font-bold'> User Responsibilities </h2>
                    <div className='text-xl mt-2'>Users must provide accurate and complete information when booking a meeting through the website to ensure effective communication and service delivery. Users are not required to register or create an account to access the website or its features.

                    </div>
                    
                </li>

                <li>
                    <h2 className='text-2xl font-bold'> Prohibited Activities</h2>

                    <div className='text-xl mt-2'>Users are prohibited from:


                        <ul className='list-disc pl-8'>
                            <li>Misusing the website for illegal or unauthorized activities.
                            </li>
                            <li>Attempting to breach website security or disrupt its operations.
                            </li>
                            <li>Using any content from the website for purposes beyond sharing without explicit permission.
                            </li>
                            
                        </ul>
                    </div>
                    <p className='text-xl mt-2'>No guarantees or specific disclaimers apply beyond what is stated in project agreements.

                    </p>
                </li>

                <li>
                    <h2 className='text-2xl font-bold'> Intellectual Property </h2>

        
                    <p className='text-xl mt-2'>All content on the website, including logos, trademarks, designs, and materials, is protected under intellectual property laws. Users are permitted to share content but are strictly prohibited from altering, adapting, or using it for unauthorized purposes.


                    </p>
                </li>

                <li>
                    <h2 className='text-2xl font-bold'>Liability </h2>

                    <div className='text-xl mt-2'>Fade Media is not liable for any errors, omissions, or interruptions on the website. Users acknowledge that services are provided as-is and without guarantees, except those outlined in specific agreements.


                       
                    </div>
                    
                </li>

                <li>
                    <h2 className='text-2xl font-bold'>Jurisdiction
                    </h2>



                    <p className='text-xl mt-2'>These Terms and Conditions are governed by the laws of India. Any disputes or claims will be subject to the exclusive jurisdiction of the courts in India.

                    </p>

                </li>

                
            </ol>
        </section>
    )
}

export default page