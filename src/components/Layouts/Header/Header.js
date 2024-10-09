'use client';

import React, { useState } from 'react';

import Logo from '@/components/Helpers/Logo';
import SearchPanel from '@/components/Search/SearchPanel';
import SearchButton from '@/components/Search/SearchButton';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='sticky top-0 w-full left-0 right-0 z-40 header-bg border-b border-b-gray-800'>
      <div className='container mx-auto p-4'>
        <div className='flex items-center'>
          <div className='flex-1'>
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
