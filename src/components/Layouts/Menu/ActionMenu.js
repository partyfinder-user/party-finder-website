'use client';

import { useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { BoltIcon, XMarkIcon } from '@heroicons/react/24/solid';

function FloatingMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Dialog
        open={isMenuOpen}
        transition
        onClose={() => setIsMenuOpen(false)}
        className='relative z-50 transition duration-100 ease-out data-[closed]:opacity-0'
      >
        <DialogBackdrop className='fixed inset-0 bg-black/30' />
        <div className='fixed inset-0 flex w-screen items-center justify-center p-4'>
          <DialogPanel className='absolute bottom-0 w-full transform overflow-hidden bg-background-900/60 backdrop-blur-lg px-6 pt-4 pb-4 text-left align-middle shadow-xl transition-all'>
            <DialogTitle as='h3' className='w-full text-xl font-medium leading-6 text-white/80 flex justify-end'>
              <div className='flex items-center'>
                <XMarkIcon className='w-6 h-6 text-accent-500' onClick={() => setIsMenuOpen(!isMenuOpen)} />
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
        </div>
      </Dialog>

      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className='w-12 h-12 flex items-center justify-center rounded-full bg-accent-400 text-white transition-transform duration-300 ease-in-out z-50'
      >
        <BoltIcon className='w-6 h-6' />
      </button>
    </>
  );
}

export default FloatingMenu;
