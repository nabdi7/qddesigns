'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link' 
import Image from 'next/image'
import Button from '../button/Button'

const Menu: React.FC = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleToggleMenu = () => {
    setOpen((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  return (
    <div className=''>
      {open && (
        <Image
          src='/close.svg'
          alt='close'
          width={38}
          height={38}
          className='cursor-pointer'
          onClick={handleToggleMenu}
        />
      )}
      {!open && (
        <Image
          src='/menu-right.svg'
          alt='menu'
          width={46}
          height={46}
          className='cursor-pointer'
          onClick={handleToggleMenu}
        />
      )}
      {open && (
        <div ref={menuRef} className='absolute p-5 bg-white shadow-lg left-0 top-20 w-full flex flex-col gap-8'>
          <Link href='/about' className='cursor-pointer transition-all hover:font-bold' onClick={handleCloseMenu}> About </Link>
          <Link href='/pricing' className='cursor-pointer transition-all hover:font-bold' onClick={handleCloseMenu}> Pricing </Link>
          <Link href='/services' className='cursor-pointer transition-all hover:font-bold' onClick={handleCloseMenu}> Services </Link>
          <Link href='/projects' className='cursor-pointer transition-all hover:font-bold' onClick={handleCloseMenu}> Projects </Link>
          <Link href='/contact' className='cursor-pointer transition-all hover:font-bold' onClick={handleCloseMenu}> Contact </Link>
          <Button 
            type='button'
            title='Get A Quote' 
            variant='btn_white'
            shape='rectangle' 
            href='/getquote'
            onClick={handleCloseMenu} 
          />
        </div>
      )}
      
    </div>
  );
};

export default Menu;
