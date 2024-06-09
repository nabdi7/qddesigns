import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20">
      <div className='flex flex-1 flex-col md:flex-row z-20 xl:w-full h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
        <div className=' justify-center items-center'>
          <Image
            src='/untitled2.png'
            alt='hero'
            width={500}
            height={500}
            className='w-full'
          />
        </div>
        <div className='flex-1'>
          <h1 className="text-4xl lg:text35xl font-bold">
            We solve the hardest parts of your business
          </h1>
          <p className='regular-16 mt-6 text-gray-30 '>
            We explore your specifications to provide tailored website solutions that align with your requirements and budget.
          </p>
          <ul className="mt-6 space-y-2 text-gray-600 text-lg">
            <li>✔️ Thorough understanding of your prerequisites</li>
            <li>✔️ Research and analysis of your business</li>
            <li>✔️ Effective Solutions</li>
            <li>✔️ Budget-friendly</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About