import React from 'react'
import Image from 'next/image'
import Button from '../button/Button'

const Home = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20">
      <div className='flex flex-1 flex-col md:flex-col lg:flex-row z-20 xl:w-full 2xl:w-full h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
        <div className='flex-1'>
          <h1 className='text-22 lg:text-48 text-gray-30'>We Bring Your Business Ideas to Life</h1>
          <h1 className='bold-52 lg:bold-68 md:bold-62'>
            Powering Your <span className='text-green-50'>Digital Success</span>
          </h1>
          <p className='regular-16 mt-6 text-gray-30 '>
            Elevate your brand with our captivating websites and 
            unforgettable branding. Turn your vision into reality 
            and set your brand apart. Unlock creative excellence today.
          </p>
          <div className='flex flex-col w-full gap-3 sm:flex-row mt-10 mb-10'>
            <Button 
              type='button' 
              title='Learn more'
              variant='btn_white' 
              shape='rectangle' 
              href='/about'
            />
          </div>
        </div>
        <div className=''>
          <Image
            src='/untitled2.png'
            alt='hero'
            width={500}
            height={500}
            className=''
          />
        </div>
      </div>
    </section>
    
  )
}

export default Home