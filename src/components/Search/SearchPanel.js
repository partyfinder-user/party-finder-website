'use client';

import React, { useState, useContext } from 'react';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { MapPin, CalendarDots, CurrencyEur, MapPinSimple, MusicNotes, Student, X } from '@phosphor-icons/react';
import { Card, CardFooter } from '@nextui-org/card';

import Logo from '../Helpers/Logo';
import SearchInput from './SearchInput';
import DateRange from './Filter/DateRange';
import DistanceRange from './Filter/DistanceRange';
import Genre from './Filter/Genre';
import SerachPosition from './SearchPosition';
import RootContext from '@/stores/root-context';
import Image from 'next/image';

const djs = [
  { name: 'D. Guetta', image: '/stock/bob-sinclar.jpg' },
  { name: 'C. Harris', image: '/stock/franchino.jpg' },
  { name: 'M. Garrix', image: '/stock/dj-mixa.webp' },
  { name: 'V. Buuren', image: '/stock/un-uomo.webp' },
  { name: 'Tiësto', image: '/stock/bob-sinclar.jpg' },
  { name: 'Marshmello', image: '/stock/franchino.jpg' },
  { name: 'S. Aoki', image: '/stock/dj-mixa.webp' },
  { name: 'D. Vegas', image: '/stock/dj-mixa.webp' },
  { name: 'Diplo', image: '/stock/un-uomo.webp' },
  { name: 'Skrillex', image: '/stock/dj-mixa.webp' },
];

const SearchPanel = ({ isOpen, setIsOpen }) => {
  const rootCtx = useContext(RootContext);

  const [isOpenPosition, setIsOpenPosition] = useState(false);
  const [isOpenDateRange, setIsOpenDateRange] = useState(false);
  const [isOpenDistance, setIsOpenDistance] = useState(false);
  const [isOpenGenre, setIsOpenGenre] = useState(false);

  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  const [dateRangeUI, setDateRangeUI] = useState();
  const [distance, setDistance] = useState(50);
  const [freeEntry, setFreeEntry] = useState(false);
  const [forStudent, setForStudent] = useState(false);
  const [genres, setGenres] = useState();

  const [resetGenres, setResetGenres] = useState(false);
  const [resetPostion, setResetPosition] = useState(false);

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

  const handlerResetForStudent = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setForStudent(false);
  };

  const handleGenreSelect = (value) => {
    if (value?.length <= 0) {
      setGenres();
      return;
    }

    setResetGenres(false);
    setGenres(value);
  };

  const handlerResetGenre = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setResetGenres(true);
    setGenres();
  };

  const handlePositionSelect = (value) => {
    if (!value) {
      rootCtx.setPositionCity('');
      return;
    }

    setResetPosition(false);
    rootCtx.setPositionCity(value);
  };

  const handlerResetPosition = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setResetPosition(true);
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
                    <div
                      className='flex flex-col items-center justify-center gap-3'
                      onClick={() => setIsOpenPosition(true)}
                    >
                      {!rootCtx.position ? (
                        <div className='flex items-center text-sm px-4 py-2 bg-background-500/70 border border-background-400 rounded-full text-white whitespace-nowrap'>
                          <MapPin className='w-4 h-4 text-accent-400 mr-2' weight='duotone' />
                          Ovunque
                        </div>
                      ) : (
                        <div className='flex items-center text-sm px-4 py-2 bg-accent-500/70 border border-accent-400 rounded-full text-white whitespace-nowrap'>
                          <span className='capitalize'>{rootCtx?.position}</span>{' '}
                          <X className='w-4 h-4 text-white ml-2' onClick={handlerResetPosition} />
                        </div>
                      )}
                    </div>
                    <div
                      className='flex flex-col items-center justify-center gap-3'
                      onClick={() => setIsOpenDateRange(true)}
                    >
                      {!dateRangeUI ? (
                        <div className='flex items-center text-sm px-4 py-2 bg-background-500/70 border border-background-400 rounded-full text-white whitespace-nowrap'>
                          <CalendarDots className='w-4 h-4 text-accent-400 mr-2' weight='duotone' /> Data
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
                          <CurrencyEur className='w-4 h-4 text-accent-400 mr-2' weight='duotone' />
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
                          <MapPinSimple className='w-4 h-4 text-accent-400 mr-2' weight='duotone' />
                          Distanza
                        </div>
                      ) : (
                        <div className='flex items-center text-sm px-4 py-2 bg-accent-500/70 border border-accent-400 rounded-full text-white whitespace-nowrap'>
                          <span className='capitalize'>Entro {distance} km</span>{' '}
                          <X className='w-4 h-4 text-white ml-2' onClick={handlerResetDistance} />
                        </div>
                      )}
                    </div>
                    <div
                      className='flex flex-col items-center justify-center gap-3'
                      onClick={() => setIsOpenGenre(true)}
                    >
                      {!genres ? (
                        <div className='flex items-center text-sm px-4 py-2 bg-background-500/70 border border-background-400 rounded-full text-white whitespace-nowrap'>
                          <MusicNotes className='w-4 h-4 text-accent-400 mr-2' weight='duotone' />
                          Genere
                        </div>
                      ) : (
                        <div className='flex items-center text-sm px-4 py-2 bg-accent-500/70 border border-accent-400 rounded-full text-white whitespace-nowrap'>
                          {genres?.length} Generi
                          <X className='w-4 h-4 text-white ml-2' onClick={handlerResetGenre} />
                        </div>
                      )}
                    </div>
                    <div
                      className='flex flex-col items-center justify-center gap-3'
                      onClick={() => setForStudent(true)}
                    >
                      {!forStudent ? (
                        <div className='flex items-center text-sm px-4 py-2 bg-background-500/70 border border-background-400 rounded-full text-white whitespace-nowrap'>
                          <Student className='w-4 h-4 text-accent-400 mr-2' weight='duotone' />
                          Studentesche
                        </div>
                      ) : (
                        <div className='flex items-center text-sm px-4 py-2 bg-accent-500/70 border border-accent-400 rounded-full text-white whitespace-nowrap'>
                          <span className='capitalize'>Studentesche</span>{' '}
                          <X className='w-4 h-4 text-white ml-2' onClick={handlerResetForStudent} />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className='w-0'>&nbsp;</div>
                </div>
              </section>
            </div>

            <div className='relative overflow-hidden px-4'>
              <h2 className='font-semibold mb-2 text-white'>Artisti</h2>
              <section className='relative overflow-hidden'>
                <div className='snap-x mx-auto snap-mandatory overflow-x-scroll overflow-y-hidden scrollbar-hide'>
                  <div className='w-full flex flex-row justify-between gap-2'>
                    {djs.map((dj, idx) => (
                      <div key={idx + 'ab'}>
                        <Card key={idx + '-b'} isFooterBlurred radius='lg' className='h-32 w-32 border-none'>
                          <Image
                            alt='Woman listing to music'
                            className='h-32 w-32 object-cover'
                            height={300}
                            width={300}
                            src={dj.image}
                          />
                          <CardFooter className='justify-between before:bg-white/10 border-white/10 border-1 overflow-hidden py-1 absolute before:rounded-lg rounded-lg bottom-1 w-[calc(100%_-_8px)] ml-1 z-10'>
                            <p className='text-sm text-white/80'>{dj.name}</p>
                          </CardFooter>
                        </Card>
                      </div>
                    ))}
                  </div>
                  <div className='w-0'>&nbsp;</div>
                </div>
              </section>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
      <DistanceRange
        isOpen={isOpenDistance}
        setIsOpen={setIsOpenDistance}
        onSelect={handleDistanceSelect}
        onReset={handlerResetDistance}
        initialDistance={distance}
      />
      <SerachPosition
        isOpen={isOpenPosition}
        setIsOpen={setIsOpenPosition}
        onSelect={handlePositionSelect}
        reset={resetPostion}
      />
      <DateRange isOpen={isOpenDateRange} setIsOpen={setIsOpenDateRange} onSelect={handleDateSelect} />
      <Genre isOpen={isOpenGenre} setIsOpen={setIsOpenGenre} reset={resetGenres} onSelect={handleGenreSelect} />
    </>
  );
};

export default SearchPanel;
