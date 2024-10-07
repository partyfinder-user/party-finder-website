/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import React, { useEffect, useRef } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { HeartIcon, MagnifyingGlassIcon, UserCircleIcon, HomeIcon } from '@heroicons/react/24/outline';

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

  return (
    <div
      ref={containerRef}
      className='w-2/3 mx-auto py-2 rounded-xl bg-neutral-800/30 backdrop-blur-lg fixed top-auto bottom-2 inset-x-0 z-30 transition-transform duration-300 ease-in-out'
    >
      <div className='flex justify-around mx-auto text-sm text-center'>
        {NAV.map((item, index) => {
          const active = pathname === item.link;
          return item.link ? (
            <Link key={index} href={item.link}>
              <div
                className={`flex flex-col items-center justify-between text-neutral-300/90 ${
                  active ? 'text-neutral-100' : ''
                }`}
              >
                <item.icon className={`w-6 h-6 ${active ? 'text-accent-500' : ''}`} />
                <span className='text-[11px] leading-none mt-1'>{item.name}</span>
              </div>
            </Link>
          ) : (
            <div
              key={index}
              className={`flex flex-col items-center justify-between  text-neutral-300/90 ${
                active ? 'text-neutral-100' : ''
              }`}
            >
              <item.icon className='w-6 h-6' />
              <span className='text-[11px] leading-none mt-1'>{item.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FooterNav;
