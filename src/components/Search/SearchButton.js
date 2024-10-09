'use client';

import React from 'react';
import { MagnifyingGlass, MapPin } from '@phosphor-icons/react';

const SearchButton = ({ setIsOpen }) => {
  return (
    <button
      onClick={() => setIsOpen(true)}
      className='relative flex items-center w-full border border-white/20 bg-white/10 px-4 py-2 pr-11 rounded-full focus:outline-none'
    >
      <MagnifyingGlass className='text-white w-6 h-6' />
      <div className='ml-3 flex-1 text-left overflow-hidden'>
        <span className='block font-medium text-sm test-white/60'>Cerca eventi, artisti e tanto altro</span>
        <div className='block text-xs font-light text-white/60'>
          <span className='line-clamp-1 flex items-center'>
            <MapPin className='text-white w-4 h-4 mr-0.5' />
            Bassano del Grappa
          </span>
        </div>
      </div>
    </button>
  );
};

export default SearchButton;
