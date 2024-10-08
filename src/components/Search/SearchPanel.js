'use client';

import React, { useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import {
  MagnifyingGlass,
  CaretLeft,
  MapPin,
  CalendarDots,
  CurrencyEur,
  MapPinSimple,
  MusicNotes,
  Person,
} from '@phosphor-icons/react';
import Logo from '../Helpers/Logo';
import SearchInput from './SearchInput';

import { Calendar } from '@nextui-org/react';
import { parseDate } from '@internationalized/date';

const filters = [
  { name: 'Bassano del Grappa', icon: MapPin },
  { name: 'Data', icon: CalendarDots },
  { name: 'Freeentry', icon: CurrencyEur },
  { name: 'Distanza', icon: MapPinSimple },
  { name: 'Genere', icon: MusicNotes },
  { name: 'Età', icon: Person },
];

const SearchPanel = () => {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className='relative flex items-center w-full border border-background-400/50 px-4 py-2 pr-11 rounded-full focus:outline-none'
      >
        <MagnifyingGlass className='text-white w-6 h-6' />
        <div className='ml-3 flex-1 text-left overflow-hidden'>
          <span className='block font-medium text-sm'>Dove vuoi andare?</span>
          <div className='block mt-0.5 text-xs font-light text-white/60'>
            <span className='line-clamp-1'>Ovunque • Tutti gli eventi • Qualsiasi genere</span>
          </div>
        </div>
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
            <DialogTitle as='h3' className='w-full px-4 pt-4 pb-1 mb-4 border-b border-background-400/50'>
              <div className='flex items-center'>
                <div className='mb-3'>
                  <CaretLeft className='w-6 h-6 text-accent-500' onClick={() => setIsOpen(!isOpen)} />
                </div>
                <div className='w-full flex-1 mb-2'>
                  <SearchInput />
                </div>
                <div className='mb-3'>
                  <Logo />
                </div>
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
                            <filter.icon className='w-4 h-4 text-accent-400 mr-1' weight='duotone' />
                            {filter.name}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className='flex gap-x-4'>
                      <Calendar aria-label='Date (Uncontrolled)' defaultValue={parseDate('2020-02-03')} />
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
