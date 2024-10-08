import { useState } from 'react';
import { MagnifyingGlass, X } from '@phosphor-icons/react';

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const clearSearch = () => {
    setSearchTerm('');
  };

  return (
    <div className='relative w-full max-w-md mx-auto'>
      <div className='ml-1 mr-3 flex items-center bg-background-900/50 backdrop-blur-lg rounded-full px-4 py-2 border border-background-400/50'>
        <MagnifyingGlass className='text-white/60 w-6 h-6' />
        <input
          type='text'
          className='bg-transparent text-white ml-2 w-full focus:outline-none placeholder-white/60 '
          placeholder='Cerca eventi, artisti, locali, e tanto altro..'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {searchTerm && <X className='w-6 h-6 text-white/60 cursor-pointer ml-2' onClick={clearSearch} />}
      </div>
    </div>
  );
};

export default SearchInput;
