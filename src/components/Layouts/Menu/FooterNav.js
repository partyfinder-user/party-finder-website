/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import React, { useContext, useState, useEffect, useRef } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { HeartIcon, UserCircleIcon, HomeIcon } from '@heroicons/react/24/outline';
import { MapPin } from '@phosphor-icons/react';

import FloatingMenu from './ActionMenu';
import SearchPosition from '@/components/Search/SearchPosition';
import RootContext from '@/stores/root-context';

const FooterNav = () => {
  const rootCtx = useContext(RootContext);
  const [isOpenPosition, setIsOpenPosition] = useState(false);
  // const prevScrollPosRef = useRef(0);
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

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollPos = window.pageYOffset;
  //     if (!containerRef.current) {
  //       rootCtx.setFooterNavIsVisible(false);
  //       return;
  //     }

  //     if (currentScrollPos > prevScrollPosRef.current) {
  //       containerRef.current.classList.add('FooterNav--hide');
  //       rootCtx.setFooterNavIsVisible(false);
  //     } else {
  //       containerRef.current.classList.remove('FooterNav--hide');
  //       rootCtx.setFooterNavIsVisible(true);
  //     }
  //     prevScrollPosRef.current = currentScrollPos;
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  const active = pathname === '';

  return (
    <>
      <div
        ref={containerRef}
        className='w-full mx-auto py-1 bg-background-900/60 backdrop-blur-sm fixed top-auto bottom-0 inset-x-0 z-30 transition-transform duration-300 ease-in-out'
      >
        <div className='flex items-center justify-around mx-auto text-center'>
          <Link href='/' className='mt-1'>
            <div
              className={`flex flex-col items-center justify-between text-neutral-300/90 ${
                active ? 'text-neutral-100' : ''
              }`}
            >
              <HomeIcon className={`w-6 h-6 ${active ? 'text-accent-500' : ''}`} />
              <span className='text-xs leading-none mt-1'>Home</span>
            </div>
          </Link>
          <button onClick={() => setIsOpenPosition(true)}>
            <div
              className={`focus:outline-none focus:ring-0 flex flex-col items-center justify-between text-neutral-300/90 ${
                active ? 'text-neutral-100' : ''
              }`}
            >
              <MapPin className={`w-6 h-6 ${active ? 'text-accent-500' : ''}`} />
              <span className='text-xs leading-none mt-1'>Luogo</span>
            </div>
          </button>
          <FloatingMenu />
          <Link href='#'>
            <div
              className={`flex flex-col items-center justify-between text-neutral-300/90 ${
                active ? 'text-neutral-100' : ''
              }`}
            >
              <HeartIcon className={`w-6 h-6 ${active ? 'text-accent-500' : ''}`} />
              <span className='text-xs leading-none mt-1'>Preferiti</span>
            </div>
          </Link>
          <Link href='#'>
            <div
              className={`flex flex-col items-center justify-between text-neutral-300/90 ${
                active ? 'text-neutral-100' : ''
              }`}
            >
              <UserCircleIcon className={`w-6 h-6 ${active ? 'text-accent-500' : ''}`} />
              <span className='text-xs leading-none mt-1'>Accedi</span>
            </div>
          </Link>
        </div>
      </div>
      <SearchPosition isOpen={isOpenPosition} setIsOpen={setIsOpenPosition} onSelect={handlePositionSelect} />
    </>
  );
};

export default FooterNav;
