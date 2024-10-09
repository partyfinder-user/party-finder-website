'use client';

import React, { useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { CalendarDots, CurrencyEur, MapPinSimple, MusicNotes, Person, X } from '@phosphor-icons/react';

import Logo from '../Helpers/Logo';
import SearchInput from './SearchInput';
import DateRange from './Filter/DateRange';
import DistanceRange from './Filter/DistanceRange';

const SearchPanel = ({ isOpen, setIsOpen }) => {
  const [isOpenDateRange, setIsOpenDateRange] = useState(false);
  const [isOpenDistance, setIsOpenDistance] = useState(false);
  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  const [dateRangeUI, setDateRangeUI] = useState();
  const [distance, setDistance] = useState(50);
  const [freeEntry, setFreeEntry] = useState(false);

  const formatDateRange = (range) => {
    const formatDate = (date) => {
      return date?.toLocaleDateString('it-IT', {
        day: 'numeric',
        month: 'short',
      });
    };

    if (range.start && range.end && range.start.getTime() === range.end.getTime()) {
      return formatDate(range.start);
    } else {
      return `${formatDate(range.start)} ➔ ${formatDate(range.end)}`;
    }
  };

  const handleDateSelect = (range) => {
    setDateRange(range);
    setDateRangeUI(formatDateRange(range));
  };

  const handlerResetDateRange = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setDateRange({ start: '', end: '' });
    setDateRangeUI('');
  };

  const handleDistanceSelect = (value) => {
    setDistance(value);
  };

  const handlerResetDistance = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setDistance('');
  };

  const handlerResetFreeEntry = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setFreeEntry(false);
  };

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
              <section className='relative overflow-hidden'>
                <div className='relative snap-x mx-auto snap-mandatory overflow-x-scroll overflow-y-hidden scrollbar-hide'>
                  <div className='w-full flex flex-row gap-2'>
                    <div className='flex flex-col items-center justify-center gap-3'>
                      <div className='flex items-center text-sm px-4 py-2 bg-accent-500/70 border border-accent-400 rounded-full text-white whitespace-nowrap'>
                        {/* <MapPin className='w-4 h-4 text-accent-400 mr-1' weight='duotone' /> */}
                        Bassano del Grappa <X className='w-4 h-4 text-white ml-2' onClick={handlerResetDateRange} />
                      </div>
                    </div>
                    <div
                      className='flex flex-col items-center justify-center gap-3'
                      onClick={() => setIsOpenDateRange(true)}
                    >
                      {!dateRangeUI ? (
                        <div className='flex items-center text-sm px-4 py-2 bg-background-500/70 border border-background-400 rounded-full text-white whitespace-nowrap'>
                          <CalendarDots className='w-4 h-4 text-accent-400 mr-1' weight='duotone' /> Data
                        </div>
                      ) : (
                        <div className='flex items-center text-sm px-4 py-2 bg-accent-500/70 border border-accent-400 rounded-full text-white whitespace-nowrap'>
                          <span className='capitalize'>{dateRangeUI}</span>{' '}
                          <X className='w-4 h-4 text-white ml-2' onClick={handlerResetDateRange} />
                        </div>
                      )}
                    </div>
                    <div className='flex flex-col items-center justify-center gap-3' onClick={() => setFreeEntry(true)}>
                      {!freeEntry ? (
                        <div className='flex items-center text-sm px-4 py-2 bg-background-500/70 border border-background-400 rounded-full text-white whitespace-nowrap'>
                          <CurrencyEur className='w-4 h-4 text-accent-400 mr-1' weight='duotone' />
                          FreeEntry
                        </div>
                      ) : (
                        <div className='flex items-center text-sm px-4 py-2 bg-accent-500/70 border border-accent-400 rounded-full text-white whitespace-nowrap'>
                          <span className='capitalize'>FreeEntry</span>{' '}
                          <X className='w-4 h-4 text-white ml-2' onClick={handlerResetFreeEntry} />
                        </div>
                      )}
                    </div>
                    <div
                      className='flex flex-col items-center justify-center gap-3'
                      onClick={() => setIsOpenDistance(true)}
                    >
                      {!distance ? (
                        <div className='flex items-center text-sm px-4 py-2 bg-background-500/70 border border-background-400 rounded-full text-white whitespace-nowrap'>
                          <MapPinSimple className='w-4 h-4 text-accent-400 mr-1' weight='duotone' />
                          Distanza
                        </div>
                      ) : (
                        <div className='flex items-center text-sm px-4 py-2 bg-accent-500/70 border border-accent-400 rounded-full text-white whitespace-nowrap'>
                          <span className='capitalize'>Entro {distance} km</span>{' '}
                          <X className='w-4 h-4 text-white ml-2' onClick={handlerResetDistance} />
                        </div>
                      )}
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
        <DistanceRange
          isOpen={isOpenDistance}
          setIsOpen={setIsOpenDistance}
          onDistanceSelect={handleDistanceSelect}
          onReset={handlerResetDistance}
          initialDistance={distance}
        />
        <DateRange isOpen={isOpenDateRange} setIsOpen={setIsOpenDateRange} onDateSelect={handleDateSelect} />
      </Dialog>
    </>
  );
};

export default SearchPanel;
