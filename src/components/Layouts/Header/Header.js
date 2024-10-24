'use client';

import React, { useState } from 'react';

import Logo from '@/components/Helpers/Logo';
import SearchPanel from '@/components/Search/SearchPanel';
import SearchButton from '@/components/Search/SearchButton';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='sticky top-0 w-full left-0 right-0 z-40 header-bg border-b border-b-white/10'>
      <div className='px-2 py-3'>
        <div className='flex items-center'>
          <div className='flex-1 w-full'>
            <SearchButton setIsOpen={setIsOpen} />
          </div>
          <div className='ml-3'>
            <Logo />
          </div>
        </div>
        <SearchPanel isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </header>
  );
};

export default Header;
