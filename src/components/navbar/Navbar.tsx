import React from 'react'
import Menu from '@/components/menu/Menu'
import Link from 'next/link' 
import Image from 'next/image'
import Button from '../button/Button'

const Navbar = () => {
  return (
    <nav className='max-container padding-container relative z-30 py-5 bg-gray-100'>
      <div className='h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative'>
        <div className='h-full flex items-center justify-between'>
          <Link href='/'>
            <Image src='/logo.png' alt='logo' width={150} height={150} />
          </Link>
          <div className='lg:hidden'>
            <Menu />
          </div>
          <div className='hidden lg:flex items-center gap-8 '>
            
            <Link href='/about' className='flex-center cursor-pointer transition-all hover:font-bold'> About </Link>
            <Link href='/pricing' className='flex-center cursor-pointer transition-all hover:font-bold'> Pricing </Link>
            <Link href='/services' className='flex-center cursor-pointer transition-all hover:font-bold'> Services </Link>
            <Link href='/projects' className='flex-center cursor-pointer transition-all hover:font-bold'> Projects </Link>
            <Link href='/contact' className='flex-center cursor-pointer transition-all hover:font-bold'> Contact </Link>
          </div>
          {/* button */}
          <div className='hidden lg:flex items-center gap-8 '>
            <Button 
              type='button' 
              title='Get A Quote'
              variant='btn_white' 
              shape='rectangle' 
              href='/getquote'
            />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
 


