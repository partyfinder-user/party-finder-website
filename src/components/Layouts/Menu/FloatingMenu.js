'use client';

import { useState } from 'react';
import { Transition, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { BoltIcon } from '@heroicons/react/24/solid';

const FloatingMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='z-40'>
      <Transition
        show={isMenuOpen}
        enter='transition-opacity duration-300'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='transition-opacity duration-300'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
      >
        <div onClick={() => setIsMenuOpen(false)} className='fixed inset-0 bg-black bg-opacity-60 z-20'></div>
      </Transition>

      <Dialog
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        className='fixed inset-0 z-30 flex items-end justify-center'
      >
        <Transition
          show={isMenuOpen}
          enter='transition ease-out duration-300'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-200'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <DialogPanel className='absolute bottom-0 w-full transform overflow-hidden bg-background-900/60 backdrop-blur-lg px-6 pt-4 pb-4 text-left align-middle shadow-xl transition-all'>
            <DialogTitle as='h3' className='w-full text-xl font-medium leading-6 text-white/80 flex justify-end'>
              <div className="flex items-center">
                <BoltIcon className='w-6 h-6 text-accent-500' />
              </div>
            </DialogTitle>
            <div className='w-full'>
              <div className='mx-auto w-full divide-y divide-accent-700/30'>
                <div className='py-3 text-white'>
                  <div className='flex flex-col items-center space-y-4 border-spacing-1'>
                    <div className='w-full text-md'>Eventi</div>
                  </div>
                </div>
                <div className='py-3 text-white'>
                  <div className='flex flex-col items-center space-y-4 border-spacing-1'>
                    <div className='w-full text-md'>Format</div>
                  </div>
                </div>
                <div className='py-3 text-white'>
                  <div className='flex flex-col items-center space-y-4 border-spacing-1'>
                    <div className='w-full text-md'>Locali</div>
                  </div>
                </div>
                <div className='py-3 text-white'>
                  <div className='flex flex-col items-center space-y-4 border-spacing-1'>
                    <div className='w-full text-md'>Artisti</div>
                  </div>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Transition>
      </Dialog>

      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className='w-12 h-12 flex items-center justify-center rounded-full bg-accent-400 text-white transition-transform duration-300 ease-in-out z-50'
      >
        <BoltIcon className='w-6 h-6' />
      </button>
    </div>
  );
};

export default FloatingMenu;
