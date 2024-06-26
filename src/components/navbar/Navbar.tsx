import React from 'react'
import Menu from '@/components/menu/Menu'
import Link from 'next/link' 
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className='max-container relative z-30 py-5'>
      <div className='h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative'>
        <div className='h-full flex items-center justify-between'>
          <Link href='/'>
            <Image src='https://res.cloudinary.com/dlehxkdtn/image/upload/logo_oy2wnc.png' alt='logo' width={150} height={100} />
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
            <Link
              href="/contact"
              className="btn-primary"
            >
              Get a quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
 


