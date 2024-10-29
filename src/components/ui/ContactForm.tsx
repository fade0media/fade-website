'use client';

import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm: FC = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  async function sendEmail(data: FormData) {
    const apiEndpoint = '/api/email';

    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      //const result = await response.json();
      setIsLoading(false);
      setIsSent(true);
    } catch (error) {
      console.error(error);
      alert('Something went wrong. Please try again.');
    }
  }

  async function onSubmit(data: FormData) {
    setIsLoading(true);
    setIsSent(false);
    try {
      await sendEmail(data);
      setIsSent(true);
      reset(); // Reset form fields after successful submission
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='max-w-lg mx-auto'>
      <div className='mb-5'>
        <label htmlFor='name' className='mb-3 block text-base font-medium text-black'>
          Full Name
        </label>
        <input
          type='text'
          placeholder='Full Name'
          className='w-full rounded-md border border-gray-400 border-opacity-35 bg-black py-3 px-6 text-base font-medium text-white outline-none focus:border-sky-200 focus:shadow-md'
          {...register('name', { required: true })}
        />
      </div>
      <div className='mb-5'>
        <label htmlFor='email' className='mb-3 block text-base font-medium text-black'>
          Email Address
        </label>
        <input
          type='email'
          placeholder='example@domain.com'
          className='w-full rounded-md border border-gray-400 border-opacity-35 bg-black py-3 px-6 text-base font-medium text-white outline-none focus:border-sky-200 focus:shadow-md'
          {...register('email', { required: true })}
        />
      </div>
      <div className='mb-5'>
        <label htmlFor='message' className='mb-3 block text-base font-medium text-black'>
          Message
        </label>
        <textarea
          rows={4}
          placeholder='Type your message'
          className='w-full resize-none rounded-md border border-gray-400 border-opacity-35 bg-black py-3 px-6 text-base font-medium text-white outline-none focus:border-sky-200 focus:shadow-md'
          {...register('message', { required: true })}
        ></textarea>
      </div>
      <div>
        <button
          type='submit'
          className={`hover:shadow-form w-full mt-4 rounded-md py-3 px-8 text-base font-semibold text-black outline-none ${
            isLoading ? 'bg-gray-400' : isSent ? 'bg-green-500 text-white' : 'bg-white'
          }`}
          disabled={isLoading}
        >
          {isLoading ? 'Sending...' : isSent ? 'Sent!' : 'Submit'}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
