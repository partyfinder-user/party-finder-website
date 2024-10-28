'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import Logo from '@/components/Helpers/Logo';
import SearchPanel from '@/components/Search/SearchPanel';
import SearchButton from '@/components/Search/SearchButton';

const links = [
  { label: 'Eventi', href: '/events' },
  { label: 'Format', href: '/formats' },
  { label: 'Locali', href: '/locals' },
  { label: 'Artisti', href: '/artists' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='sticky top-0 w-full left-0 right-0 z-40 header-bg border-b border-b-white/10'>
      <div className='px-2 pt-2 pb-2'>
        <div className='flex items-center'>
          <div className='flex-1 w-full'>
            <SearchButton setIsOpen={setIsOpen} />
          </div>
          <div className='ml-3'>
            <Logo />
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <div className='mt-2 relative snap-x mx-auto snap-mandatory overflow-x-scroll overflow-y-hidden scrollbar-hide'>
            <div className='w-full flex flex-row gap-2'>
              {links.map((item, idx) => (
                <Link href={item.href} key={idx} className='flex flex-col items-center justify-center gap-3'>
                  <div className='text-sm font-normal px-5 py-1.5 border border-background-400 rounded-full text-white text-opacity-90 whitespace-nowrap'>
                    {item.label}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <SearchPanel isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </header>
  );
};

export default Header;
