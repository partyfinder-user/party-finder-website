import { useState } from 'react';
import { CaretLeft, X } from '@phosphor-icons/react';

const SearchInput = ({ setIsOpen }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const clearSearch = () => {
    setSearchTerm('');
  };

  return (
    <div className='relative w-full max-w-md mx-auto'>
      <div className='mr-3 flex items-center border-white/20 bg-white/10 rounded-full px-4 py-3.5 border'>
        <CaretLeft className='text-white w-6 h-6' onClick={() => setIsOpen(false)} />
        <input
          type='text'
          className='bg-transparent text-white ml-2 w-full focus:outline-none placeholder-white/60'
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
