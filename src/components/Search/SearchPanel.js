'use client';

import React, { useState, useContext } from 'react';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { MapPin, CalendarDots, CurrencyEur, MapPinSimple, MusicNotes, Student, X } from '@phosphor-icons/react';

import Logo from '../Helpers/Logo';
import SearchInput from './SearchInput';
import DateRange from './Filter/DateRange';
import DistanceRange from './Filter/DistanceRange';
import SerachPosition from './SearchPosition';
import RootContext from '@/stores/root-context';
import Genre from './Filter/Genre';
import Artist from './Result/Artist';
import Local from './Result/Local';
import Event from './Result/Event';

const results = [
  { id: 4, name: 'V. Buuren', image: '/stock/un-uomo.webp', type: 'artist' },
  { id: 10, name: 'Skrillex', image: '/stock/dj-mixa.webp', type: 'artist' },
  { id: 1, name: 'D. Guetta', image: '/stock/bob-sinclar.jpg', type: 'artist' },
  { id: 18, name: 'Fabrique', image: '/stock/local-8.jpg', type: 'local' },
  { id: 11, name: 'Villa Bonin', image: '/stock/local-2.jpg', type: 'local' },
  {
    id: 26,
    title: 'Vida Loca',
    venue: 'Club Papaya',
    date: 'Sabato 29 Ottobre',
    location: 'Via Roma, 12, Milano',
    image: '/stock/image-3.png',
    type: 'event',
  },
  {
    id: 27,
    title: 'Mamacita',
    venue: 'Villa Bonin',
    date: 'Sabato 22 Ottobre',
    location: 'Via del commercio, 49, Vicenza',
    image: '/stock/image-1.png',
    type: 'event',
  },
  {
    id: 28,
    title: 'Techno Night',
    venue: 'Fabrique',
    date: 'Venerdì 28 Ottobre',
    location: 'Via Fantasia, 89, Firenze',
    image: '/stock/image-5.png',
    type: 'event',
  },
  {
    id: 25,
    title: 'Mr. Charlie Lignano',
    venue: 'Mr. Charlie',
    date: 'Venerdì 21 Ottobre',
    location: 'Via Napoli, 27, Lignano Sabbiadoro',
    image: '/stock/image-2.png',
    type: 'event',
  },
  {
    id: 23,
    title: 'Afrobeat Vibes',
    venue: 'Hollywood Club',
    date: 'Sabato 5 Novembre',
    location: 'Corso Como, 15, Milano',
    image: '/stock/image-6.png',
    type: 'event',
  },
  {
    id: 29,
    title: 'Afrobeat Vibes',
    venue: 'Hollywood Club',
    date: 'Sabato 5 Novembre',
    location: 'Corso Como, 15, Milano',
    image: '/stock/image-7.png',
    type: 'event',
  },
  {
    id: 24,
    title: 'Ibiza Party',
    venue: 'Amnesia',
    date: 'Domenica 23 Ottobre',
    location: 'Via Ibiza, 34, Roma',
    image: '/stock/image-4.png',
    type: 'event',
  },
];

const getComponentByType = (item) => {
  switch (item.type) {
    case 'event':
      return <Event key={item.id} item={item} className='py-2 border-b border-b-background-500' />;
    case 'artist':
      return <Artist key={item.id} item={item} className='py-2 border-b border-b-background-500' />;
    case 'local':
      return <Local key={item.id} item={item} className='py-2 border-b border-b-background-500' />;
    default:
      return null;
  }
};

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
        <DialogBackdrop className='fixed inset-0 bg-black/70' />
        <div className='fixed inset-0 flex w-screen h-screen items-center justify-center'>
          <DialogPanel className='w-full h-screen bg-background-900/60 backdrop-blur-lg flex flex-col'>
            <DialogTitle as='h3' className='w-full px-2 pt-4 pb-1 mb-4 border-b border-background-400/50'>
              <div className='flex items-center'>
                <div className='w-full flex-1 mb-2'>
                  <SearchInput setIsOpen={setIsOpen} />
                </div>
                <div className='mb-2'>
                  <Logo />
                </div>
              </div>
            </DialogTitle>

            <div className='overflow-hidden px-2 max-h-[calc(100vh-100px)] scrollbar-hide'>
              <div className='w-full max-h-full overflow-auto'>
                <div className='relative overflow-hidden flex mb-2'>
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
                        <div
                          className='flex flex-col items-center justify-center gap-3'
                          onClick={() => setFreeEntry(true)}
                        >
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
                    </div>
                  </section>
                </div>
                <div>{results.map((item) => getComponentByType(item))}</div>
              </div>
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
