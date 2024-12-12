'use client';

import React, { useContext, useState, useRef } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { MapPin, Heart, UserCircle, HouseLine, MagnifyingGlass } from '@phosphor-icons/react';

import SearchPosition from '@/components/Search/SearchPosition';
import RootContext from '@/stores/root-context';
import SearchPanel from '@/components/Search/SearchPanel';
import AuthContext from '@/stores/auth-context';
import { staticUrl } from '@/libs/static-url';
import FavoritesContext from '@/stores/favorite-context';

const FooterNav = () => {
  const authCtx = useContext(AuthContext);
  const rootCtx = useContext(RootContext);
  const favoriteCtx = useContext(FavoritesContext);

  const [isOpenPosition, setIsOpenPosition] = useState(false);
  const [isOpenSerach, setIsOpenSearch] = useState(false);
  const containerRef = useRef(null);
  const pathname = usePathname();

  const handlePositionSelect = (value) => {
    if (!value) {
      rootCtx.setPositionCity({});
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
          <button onClick={() => setIsOpenSearch(true)}>
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-full bg-accent-400 text-white transition-transform duration-300 ease-in-out z-50 ${
                active ? 'text-accent-100' : ''
              }`}
            >
              <MagnifyingGlass className={`w-6 h-6 ${active ? 'text-accent-500' : ''}`} />
            </div>
          </button>
          <Link href={staticUrl.favorites}>
            <div className={`relative flex flex-col items-center justify-between text-white ${active ? 'text-accent-100' : ''}`}>
              <Heart className={`w-6 h-6 ${active ? 'text-accent-500' : ''}`} />
              <span className='text-sm leading-none mt-1'>Preferiti</span>
              <span className='absolute top-0 left-1.5 text-xs rounded-full bg-accent w-4 h-4'>{favoriteCtx.count}</span>
            </div>
          </Link>
          <Link href={staticUrl.account}>
            <div className={`flex flex-col items-center justify-between text-white ${active ? 'text-accent-100' : ''}`}>
              <UserCircle className={`w-6 h-6 ${active ? 'text-accent-500' : ''}`} />
              <span className='text-sm leading-none mt-1'>{authCtx?.isLoggedIn ? 'Profilo' : 'Accedi'}</span>
            </div>
          </Link>
        </div>
      </div>

      <SearchPosition isOpen={isOpenPosition} setIsOpen={setIsOpenPosition} onSelect={handlePositionSelect} />
      <SearchPanel isOpen={isOpenSerach} setIsOpen={setIsOpenSearch} />
    </>
  );
};

export default FooterNav;
