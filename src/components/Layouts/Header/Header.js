'use client';

import React, { Suspense, useContext } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';

import Logo from '@/components/Helpers/Logo';
import SearchButton from '@/components/Search/SearchButton';
import RootContext from '@/stores/root-context';
const SearchPanel = dynamic(() => import('@/components/Search/SearchPanel'), { ssr: false });

const links = [
  { label: 'Eventi', href: '/events' },
  { label: 'Format', href: '/formats' },
  { label: 'Locali', href: '/locals' },
  { label: 'Artisti', href: '/artists' },
];

const Header = () => {
  const rootCtx = useContext(RootContext);
  const pathname = usePathname();

  return (
    <header className='sticky top-0 w-full left-0 right-0 z-40 header-bg border-b border-b-white/10'>
      <div className='px-2 pt-2 pb-2'>
        <div className='flex items-center'>
          <div className='flex-1 w-full'>
            <SearchButton setIsOpen={rootCtx.setSearchPanelOpen} />
          </div>
          <div className='ml-3'>
            <Logo />
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <div className='mt-2 relative xs:w-full snap-x mx-auto snap-mandatory overflow-x-scroll overflow-y-hidden scrollbar-hide'>
            <div className='w-full flex flex-row xs:justify-between gap-2'>
              {links.map((item, idx) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    href={item.href}
                    key={idx}
                    className='flex flex-col items-center justify-center gap-3 xs:flex-1 xs:w-full'
                  >
                    <div
                      className={`xs:w-full text-sm font-normal px-5 py-1.5 rounded-full text-center ${
                        isActive
                          ? 'bg-gradient-to-r from-sky-300 via-accent-500 to-yellow-400 text-white'
                          : 'text-white text-opacity-90 border border-background-400'
                      }`}
                    >
                      {item.label}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <Suspense>
          <SearchPanel isOpen={rootCtx.isSearchPanelOpen} setIsOpen={rootCtx.setSearchPanelOpen} />
        </Suspense>
      </div>
    </header>
  );
};

export default Header;
