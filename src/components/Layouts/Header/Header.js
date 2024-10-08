import React from 'react';

import Logo from '@/components/Helpers/Logo';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import SearchPanel from '@/components/Search/SearchPanel';

const Header = () => {
  return (
    <header className='sticky top-0 w-full left-0 right-0 z-40 header-bg border-b border-b-gray-800'>
      <div className='container mx-auto p-4'>
        <div className='flex'>
          <div className='flex-1'>
            <h1 className='text-accent-200 text-xs -mb-1'>Cerca nei pressi di:</h1>
            <div className='flex items-center'>
              <h1 className='text-white text-lg'>Bassano del Grappa</h1>
              <ChevronDownIcon className='mt-1 size-5 text-gray-300' />
            </div>
          </div>
          <div className="mb-3">
            <Logo />
          </div>
        </div>

        <SearchPanel />
      </div>
    </header>
  );
};

export default Header;
