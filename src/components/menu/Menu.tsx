'use client';

import { useState } from 'react';
import Link from 'next/link' 
import Image from 'next/image'
import Button from '../button/Button'

const Menu = () => {
  const [open, setOpen] = useState(false);
  const handleToggleMenu = () => {
    setOpen((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setOpen(false);
  };

  return (
    <div className=''>
      {open && (
        <Image
          src='/close.svg'
          alt='close'
          width={28}
          height={28}
          className='cursor-pointer'
          onClick={handleCloseMenu}
        />
      )}
      {!open && (
        <Image
          src='/menu.svg'
          alt='menu'
          width={28}
          height={28}
          className='cursor-pointer'
          onClick={handleToggleMenu}
        />
      )}
      {open && (
        <div className='absolute p-5 bg-white shadow-lg left-0 top-20 w-full flex flex-col gap-8'>
          <Link href='/about' className='cursor-pointer transition-all hover:font-bold'> About </Link>
          <Link href='/packages' className='cursor-pointer transition-all hover:font-bold'> Packages </Link>
          <Link href='/services' className='cursor-pointer transition-all hover:font-bold'> Services </Link>
          <Link href='/projects' className='cursor-pointer transition-all hover:font-bold'> Projects </Link>
          <Link href='/contact' className='cursor-pointer transition-all hover:font-bold'> Contact </Link>
          <Button 
            type='button'
            title='Get A Quote' 
            variant='button-color'
            shape='rectangle' 
            href='/getquote' 
          />
        </div>
      )}
      
    </div>
  );
};

export default Menu;
