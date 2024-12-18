import React from 'react'

const page = () => {
  return (
    <section className='px-8 md:px-24 relative z-40 my-24'>
        <h1 className='text-3xl md:text-5xl'>Privacy Policy</h1>
        <p className='text-lg md:text-xl mt-4'>Effective Date: December 1, 2024</p>
        <p className='mt-2'>This Privacy Policy is applicable to Fade, accessible via fademedia.in.
        </p>

        <ol className='text-xl list-decimal pl-6 mt-12 flex flex-col items-start justify-center gap-16'>
            <li>
              <h2 className='text-2xl font-bold'> Information We Collect </h2>
                <div className='text-xl mt-2'>We collect the following information from users who interact with our website:
                    <ul className='list-disc pl-8'>
                        <li>Names</li>
                        <li>Email addresses</li>
                        <li>Phone numbers</li>
                    </ul>
                </div>
                <p className='text-xl mt-2'>We do not collect sensitive information such as location data, financial details, or other personally identifiable information beyond what is listed above.
                </p>
            </li>

            <li>
            <h2 className='text-2xl font-bold'> How We Use Your Information </h2>
                <div className='text-xl mt-2'>The information you provide is used for the following purposes:

                    <ul className='list-disc pl-8'>
                        <li>To communicate with you directly through cold calling or emails.</li>
                        <li>To respond to inquiries or requests submitted via the website.</li>
                        
                    </ul>
                </div>
                <p className='text-xl mt-2'>We do not use your information for marketing purposes or any other purpose not explicitly outlined in this policy.

                </p>
            </li>

            <li>
            <h2 className='text-2xl font-bold'> Sharing of Information </h2>

                <p className='text-xl mt-2'>We do not share, sell, rent, or disclose your information to third parties under any circumstances unless required by law.

            
                </p>
                
            </li>

            <li>
            <h2 className='text-2xl font-bold'> Data Security </h2>

                <div className='text-xl mt-2'>We implement reasonable administrative, technical, and physical safeguards to protect your personal information. These measures include:


                    <ul className='list-disc pl-8'>
                        <li>Secure storage of personal data with restricted access.</li>
                        <li>Regular monitoring of our website to prevent unauthorized access or breaches.
                        </li>
                        <li>Encryption and secure transmission protocols for submitted data.</li>
                        
                    </ul>
                </div>
                <p className='text-xl mt-2'>Despite our efforts, no security measures are entirely foolproof, and we cannot guarantee the absolute security of your data.


                </p>
            </li>

            <li>
            <h2 className='text-2xl font-bold'>User Rights </h2>

                <div className='text-xl mt-2'>As our audience is global, users may have rights under data protection laws, such as the General Data Protection Regulation (GDPR), including:



                    <ul className='list-disc pl-8'>
                        <li>The right to access the personal data we hold about you.
                        </li>
                        <li>The right to object to certain types of data usage.

                        </li>
                        <li>The right to withdraw consent at any time.
                        </li>
                        
                    </ul>
                </div>
                <p className='text-xl mt-2'>Please Note: We do not provide an option for users to delete their data directly. 
                    By submitting your information, you acknowledge and agree that the data was provided willingly, 
                    and any requests to modify or delete data must be directed to us via email at support@fademedia.in.
                </p>
            </li>

            <li>
            <h2 className='text-2xl font-bold'>Changes to This Privacy Policy </h2>



                <p className='text-xl mt-2'>We reserve the right to update this Privacy Policy at any time. 
                    Any changes will be effective immediately upon posting to our website

            
                </p>
                
            </li>

            <li>
            <h2 className='text-2xl font-bold'>Contact Us</h2>

                <p className='text-xl mt-2'>If you have any questions about this Privacy Policy or our practices, please contact us at&nbsp;
                <a href="mailto:support@fadeai.in" aria-label="Support email" title="Support email" className="text-xl transition-colors duration-300 hover:text-white font-bold text-sky-200">support@fadeai.in</a>


            
                </p>
                
            </li>
        </ol>
    </section>
  )
}

export default page