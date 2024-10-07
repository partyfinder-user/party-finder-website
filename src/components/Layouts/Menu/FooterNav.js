/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import React, { useEffect, useRef } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { HeartIcon, MagnifyingGlassIcon, UserCircleIcon, HomeIcon, BoltIcon } from '@heroicons/react/24/outline';

const NAV = [
  {
    name: 'Home',
    link: '/',
    icon: HomeIcon,
  },
  {
    name: 'Cerca',
    link: '/search',
    icon: MagnifyingGlassIcon,
  },
  {
    name: 'Preferiti',
    link: '/events',
    icon: HeartIcon,
  },
  {
    name: 'Accedi',
    link: '/account',
    icon: UserCircleIcon,
  },
];

const FooterNav = () => {
  const prevScrollPosRef = useRef(0);
  const containerRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (!containerRef.current) return;
      if (currentScrollPos > prevScrollPosRef.current) {
        containerRef.current.classList.add('FooterNav--hide');
      } else {
        containerRef.current.classList.remove('FooterNav--hide');
      }
      prevScrollPosRef.current = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const active = pathname === '';

  return (
    <div
      ref={containerRef}
      className='w-full mx-auto py-2 bg-neutral-800/30 backdrop-blur-lg fixed top-auto bottom-0 inset-x-0 z-30 transition-transform duration-300 ease-in-out'
    >
      <div className='flex justify-around mx-auto text-center'>
        <Link href='#'>
          <div
            className={`flex flex-col items-center justify-between text-neutral-300/90 ${
              active ? 'text-neutral-100' : ''
            }`}
          >
            <HomeIcon className={`w-6 h-6 ${active ? 'text-accent-500' : ''}`} />
            <span className='text-sm leading-none mt-1'>Home</span>
          </div>
        </Link>
        <Link href='#'>
          <div
            className={`flex flex-col items-center justify-between text-neutral-300/90 ${
              active ? 'text-neutral-100' : ''
            }`}
          >
            <MagnifyingGlassIcon className={`w-6 h-6 ${active ? 'text-accent-500' : ''}`} />
            <span className='text-sm leading-none mt-1'>Cerca</span>
          </div>
        </Link>
        <button className='w-12 h-12 flex items-center justify-center rounded-full bg-accent-400 text-white transition-transform'>
          <BoltIcon className='w-6 h-6' />
        </button>
        <Link href='#'>
          <div
            className={`flex flex-col items-center justify-between text-neutral-300/90 ${
              active ? 'text-neutral-100' : ''
            }`}
          >
            <HeartIcon className={`w-6 h-6 ${active ? 'text-accent-500' : ''}`} />
            <span className='text-sm leading-none mt-1'>Preferiti</span>
          </div>
        </Link>
        <Link href='#'>
          <div
            className={`flex flex-col items-center justify-between text-neutral-300/90 ${
              active ? 'text-neutral-100' : ''
            }`}
          >
            <UserCircleIcon className={`w-6 h-6 ${active ? 'text-accent-500' : ''}`} />
            <span className='text-sm leading-none mt-1'>Accedi</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FooterNav;
