'use client';

import React, { useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { CalendarDots, CurrencyEur, MapPinSimple, MusicNotes, Person } from '@phosphor-icons/react';
import Logo from '../Helpers/Logo';
import SearchInput from './SearchInput';
import DateRange from './Filter/DateRange';

const SearchPanel = ({ isOpen, setIsOpen }) => {
  const [isOpenDateRange, setIsOpenDateRange] = useState(false);

  return (
    <>
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
                <div className='w-full flex-1 mb-2'>
                  <SearchInput setIsOpen={setIsOpen} />
                </div>
                <div className='mb-2'>
                  <Logo />
                </div>
              </div>
            </DialogTitle>

            <div className='relative overflow-hidden flex px-4'>
              <section className='overflow-y-scroll h-[10000px]'>
                <div className='relative snap-x mx-auto snap-mandatory overflow-x-scroll overflow-y-hidden scrollbar-hide'>
                  <div className='w-full flex flex-row gap-2'>
                    <div className='flex flex-col items-center justify-center gap-3'>
                      <div className='flex items-center text-sm px-4 py-2 bg-accent-500/70 border border-accent-400 rounded-full text-white whitespace-nowrap'>
                        {/* <MapPin className='w-4 h-4 text-accent-400 mr-1' weight='duotone' /> */}
                        Bassano del Grappa
                      </div>
                    </div>
                    <div
                      className='flex flex-col items-center justify-center gap-3'
                      onClick={() => setIsOpenDateRange(true)}
                    >
                      <div className='flex items-center text-sm px-4 py-2 bg-background-500/70 border border-background-400 rounded-full text-white whitespace-nowrap'>
                        <CalendarDots className='w-4 h-4 text-accent-400 mr-1' weight='duotone' />
                        Data
                      </div>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-3'>
                      <div className='flex items-center text-sm px-4 py-2 bg-background-500/70 border border-background-400 rounded-full text-white whitespace-nowrap'>
                        <CurrencyEur className='w-4 h-4 text-accent-400 mr-1' weight='duotone' />
                        Freeentry
                      </div>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-3'>
                      <div className='flex items-center text-sm px-4 py-2 bg-background-500/70 border border-background-400 rounded-full text-white whitespace-nowrap'>
                        <MapPinSimple className='w-4 h-4 text-accent-400 mr-1' weight='duotone' />
                        Distanza
                      </div>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-3'>
                      <div className='flex items-center text-sm px-4 py-2 bg-background-500/70 border border-background-400 rounded-full text-white whitespace-nowrap'>
                        <MusicNotes className='w-4 h-4 text-accent-400 mr-1' weight='duotone' />
                        Genere
                      </div>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-3'>
                      <div className='flex items-center text-sm px-4 py-2 bg-background-500/70 border border-background-400 rounded-full text-white whitespace-nowrap'>
                        <Person className='w-4 h-4 text-accent-400 mr-1' weight='duotone' />
                        Età
                      </div>
                    </div>
                  </div>
                  <div className='w-0'>&nbsp;</div>
                </div>
              </section>
            </div>
          </DialogPanel>
        </div>
        <DateRange isOpen={isOpenDateRange} setIsOpen={setIsOpenDateRange} />
      </Dialog>
    </>
  );
};

export default SearchPanel;
