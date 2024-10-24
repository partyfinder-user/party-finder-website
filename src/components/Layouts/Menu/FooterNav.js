'use client';

import React, { useContext, useState, useRef } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { MapPin, Heart, UserCircle, HouseLine } from '@phosphor-icons/react';

import FloatingMenu from './ActionMenu';
import SearchPosition from '@/components/Search/SearchPosition';
import RootContext from '@/stores/root-context';

const FooterNav = () => {
  const rootCtx = useContext(RootContext);
  const [isOpenPosition, setIsOpenPosition] = useState(false);
  const containerRef = useRef(null);
  const pathname = usePathname();

  const handlePositionSelect = (value) => {
    if (!value) {
      rootCtx.setPositionCity('');
      return;
    }

    rootCtx.setPositionCity(value);
    setIsOpenPosition(false);
  };

  const active = pathname === '';

  return (
    <>
      <div
        ref={containerRef}
        className='w-full mx-auto py-1.5 bg-background-900/60 backdrop-blur-sm fixed top-auto bottom-0 inset-x-0 z-30 transition-transform duration-300 ease-in-out'
      >
        <div className='flex items-center justify-around mx-auto text-center'>
          <Link href='/' className='mt-1'>
            <div className={`flex flex-col items-center justify-between text-white ${active ? 'text-accent-100' : ''}`}>
              <HouseLine className={`w-6 h-6 ${active ? 'text-accent-500' : ''}`} />
              <span className='text-sm leading-none mt-1'>Home</span>
            </div>
          </Link>
          <button onClick={() => setIsOpenPosition(true)}>
            <div className={`flex flex-col items-center justify-between text-white ${active ? 'text-accent-100' : ''}`}>
              <MapPin className={`w-6 h-6 ${active ? 'text-accent-500' : ''}`} />
              <span className='text-sm leading-none mt-1'>Luogo</span>
            </div>
          </button>
          <FloatingMenu />
          <Link href='#'>
            <div className={`flex flex-col items-center justify-between text-white ${active ? 'text-accent-100' : ''}`}>
              <Heart className={`w-6 h-6 ${active ? 'text-accent-500' : ''}`} />
              <span className='text-sm leading-none mt-1'>Preferiti</span>
            </div>
          </Link>
          <Link href='#'>
            <div className={`flex flex-col items-center justify-between text-white ${active ? 'text-accent-100' : ''}`}>
              <UserCircle className={`w-6 h-6 ${active ? 'text-accent-500' : ''}`} />
              <span className='text-sm leading-none mt-1'>Accedi</span>
            </div>
          </Link>
        </div>
      </div>
      <SearchPosition isOpen={isOpenPosition} setIsOpen={setIsOpenPosition} onSelect={handlePositionSelect} />
    </>
  );
};

export default FooterNav;
