'use client';

import React, { useContext } from 'react';
import { MagnifyingGlass, MapPin } from '@phosphor-icons/react';
import RootContext from '@/stores/root-context';

const SearchButton = ({ setIsOpen }) => {
  const rootCtx = useContext(RootContext);

  return (
    <button
      onClick={() => setIsOpen(true)}
      className='relative flex items-center w-full border border-white/20 bg-white/10 px-4 py-2 pr-11 sm:pr-6 rounded-full focus:outline-none'
    >
      <MagnifyingGlass className='text-white w-6 h-6' />
      <div className='ml-3 flex-1 text-left overflow-hidden'>
        <div className='line-clamp-1 font-medium text-sm text-white/90'>Cerca eventi, artisti e tanto altro</div>
        <div className='block text-xs font-light text-white/60'>
          <div className='line-clamp-1 flex items-center'>
            <MapPin className='text-white w-4 h-4 mr-0.5' />
            <div className='text-white line-clamp-1 mt-0.5'>{rootCtx?.position?.city ? rootCtx.position.city : 'Ovunque'}</div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default SearchButton;
