'use client';

import React, { useState } from 'react';
import { Transition, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { Horse } from '@phosphor-icons/react';
import {
  MapPinIcon,
  CalendarDaysIcon,
  BanknotesIcon,
  RocketLaunchIcon,
  MusicalNoteIcon,
  ChevronLeftIcon,
} from '@heroicons/react/24/solid';
import Logo from '../Helpers/Logo';

const filters = [
  { name: 'Bassano del Grappa', icon: MapPinIcon },
  { name: 'Data', icon: CalendarDaysIcon },
  { name: 'Freeentry', icon: BanknotesIcon },
  { name: 'Distanza', icon: RocketLaunchIcon },
  { name: 'Genere', icon: MusicalNoteIcon },
  { name: 'Età', icon: Horse },
];

const SearchPanel = () => {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className='relative flex items-center w-full border border-gray-700 px-4 py-2 pr-11 rounded-full active:shadow-lg'
      >
        <svg className='w-8 h-8' fill='none' viewBox='0 0 24 24'>
          <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='1.5'
            d='M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z'
          ></path>
        </svg>

        <div className='ml-3 flex-1 text-left overflow-hidden'>
          <span className='block font-medium text-sm'>Dove vuoi andare?</span>
          <div className='block mt-0.5 text-xs font-light text-neutral-500 dark:text-neutral-400 '>
            <span className='line-clamp-1'>Ovunque • Tutti gli eventi • Qualsiasi genere</span>
          </div>
        </div>

        <span className='absolute right-2 top-1/2 transform -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full border border-gray-800 text-accent-200'>
          <svg
            viewBox='0 0 16 16'
            aria-hidden='true'
            role='presentation'
            focusable='false'
            className='block w-4 h-4'
            fill='currentColor'
          >
            <path d='M5 8c1.306 0 2.418.835 2.83 2H14v2H7.829A3.001 3.001 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.829 4H2V4h6.17A3.001 3.001 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z'></path>
          </svg>
        </span>
      </button>

      <Dialog
        open={isOpen}
        transition
        onClose={() => setIsOpen(false)}
        className='relative z-50 transition duration-100 ease-out data-[closed]:opacity-0'
      >
        <DialogBackdrop className='fixed inset-0 bg-black/30' />
        <div className='fixed inset-0 flex w-screen h-screen items-center justify-center'>
          <DialogPanel className='w-full h-screen bg-background-900/60 backdrop-blur-lg'>
            <DialogTitle as='h3' className='w-full p-4'>
              <div className='flex items-center'>
                <div className='w-full flex-1'>
                  <ChevronLeftIcon className='w-8 h-8 text-accent-500' onClick={() => setIsOpen(!isOpen)} />
                </div>
                <Logo />
              </div>
            </DialogTitle>
            <div className='flex px-4'>
              <main className='relative overflow-hidden'>
                <section>
                  <div className='relative snap-x mx-auto snap-mandatory overflow-x-scroll overflow-y-hidden scrollbar-hide'>
                    <div className='w-full flex flex-row gap-2'>
                      {filters.map((filter, idx) => (
                        <div key={idx} className='flex flex-col items-center justify-center gap-3'>
                          <div className='flex items-center text-sm px-4 py-2 bg-background-500/70 border border-background-400 rounded-full text-white whitespace-nowrap'>
                            <filter.icon className='w-4 h-4 text-accent-400 mr-1' />
                            {filter.name}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className='w-0'>&nbsp;</div>
                  </div>
                </section>
              </main>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default SearchPanel;
