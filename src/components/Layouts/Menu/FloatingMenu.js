'use client';

import { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { FunnelIcon } from '@heroicons/react/24/outline';

const FloatingMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Gestione dello scroll per trasformare il pulsante quando si scrolla
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='fixed bottom-6 right-6 z-50'>
      {/* Overlay quando il menu è aperto */}
      <Transition
        show={isMenuOpen}
        enter='transition-opacity duration-300'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='transition-opacity duration-300'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
      >
        <div
          onClick={() => setIsMenuOpen(false)} // Cliccare sull'overlay chiude il menu
          className='fixed inset-0 bg-black bg-opacity-60 z-40'
        ></div>
      </Transition>

      <Transition
        show={isMenuOpen}
        enter='transition ease-out duration-300'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-200'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <div className='absolute bottom-16 right-0 flex flex-col space-y-2 z-50'>
          <button className='w-32 p-2 rounded-xl bg-background-800/80 text-white'>Eventi</button>
          <button className='w-32 p-2 rounded-xl bg-background-800/80 text-white'>Format</button>
          <button className='w-32 p-2 rounded-xl bg-background-800/80 text-white'>Locali</button>
          <button className='w-32 p-2 rounded-xl bg-background-800/80 text-white'>Artisti</button>
        </div>
      </Transition>

      {/* Bottone principale, rimane fisso in basso a destra */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={`w-12 h-12 flex items-center justify-center rounded-full bg-purple-600 text-white transition-transform duration-300 ease-in-out z-50 ${
          isScrolled ? 'translate-y-0 scale-100' : 'translate-y-20 scale-0'
        }`}
      >
        <FunnelIcon className='w-6 h-6' />
      </button>
    </div>
  );
};

export default FloatingMenu;
