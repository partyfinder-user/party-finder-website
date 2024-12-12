'use client';

import React, { useState, useContext, useEffect, useCallback } from 'react';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { MapPin, CalendarDots, CurrencyEur, MapPinSimple, MusicNotes, Student, X } from '@phosphor-icons/react';
import { ScrollShadow } from '@nextui-org/scroll-shadow';

import Logo from '../Helpers/Logo';
import Genre from './Filter/Genre';
import SearchInput from './SearchInput';
import DateRange from './Filter/DateRange';
import SearchResults from './SearchResult';
import SerachPosition from './SearchPosition';
import DistanceRange from './Filter/DistanceRange';
import RootContext from '@/stores/root-context';
import { isNullOrEmpty } from '@/tools/tools';

const SearchPanel = ({ isOpen, setIsOpen }) => {
  const rootCtx = useContext(RootContext);

  const [isLoading, setIsLoading] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [isEmptyFilter, setEmptyFilter] = useState(true);
  const [isOpenPosition, setIsOpenPosition] = useState(false);
  const [isOpenDateRange, setIsOpenDateRange] = useState(false);
  const [isOpenDistance, setIsOpenDistance] = useState(false);
  const [isOpenGenre, setIsOpenGenre] = useState(false);

  const [searchTerm, setSearchTerm] = useState('');
  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  const [dateRangeUI, setDateRangeUI] = useState();
  const [distance, setDistance] = useState();
  const [freeEntry, setFreeEntry] = useState(false);
  const [forStudent, setForStudent] = useState(false);
  const [genres, setGenres] = useState();

  const [resetGenres, setResetGenres] = useState(false);
  const [resetPostion, setResetPosition] = useState(false);

  const [searchResults, setSearchResults] = useState([]);

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
      rootCtx.setPositionCity({});
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

  const prepareFilters = useCallback(() => {
    const position = rootCtx?.position || {};
    const filterUnder18 = forStudent ? forStudent : undefined;
    const filterFreeEntry = freeEntry ? freeEntry : undefined;

    const setStartOfDay = (date) => {
      const newDate = new Date(date);
      newDate.setHours(0, 0, 0, 0);
      return newDate;
    };

    const setEndOfDay = (date) => {
      const newDate = new Date(date);
      newDate.setHours(23, 59, 59, 999);
      return newDate;
    };

    const setGeo = (geo) => {
      return { coordinates: [geo.long, geo.lat] };
    };

    const filters = {
      term: searchTerm || undefined,
      radius: distance || undefined,
      types: genres?.length ? genres : undefined,
      free: filterFreeEntry,
      under18: filterUnder18,
      dateStart: dateRange.start ? setStartOfDay(dateRange.start) : undefined,
      dateEnd: dateRange.end ? setEndOfDay(dateRange.end) : undefined,
      coordinates: position?.city ? setGeo(position.geo) : undefined,
    };

    const filteredFilters = Object.fromEntries(Object.entries(filters).filter(([_, value]) => value !== undefined));

    if (isNullOrEmpty(filteredFilters)) {
      setEmptyFilter(true);
    } else {
      setEmptyFilter(false);
    }

    return filteredFilters;
  }, [searchTerm, rootCtx.position, distance, genres, freeEntry, forStudent, dateRange]);

  const fetchSearchResults = useCallback(async (filters) => {
    try {
      setIsFirstLoad(false);
      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVICE_BASE_URL}builder/search`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(filters),
      });

      if (!response.ok) {
        throw new Error(`Errore nella ricerca: ${response.statusText}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Errore durante la ricerca:', error);
      return [];
    }
  }, []);

  const handleSearch = useCallback(async () => {
    setIsLoading(true);
    const filters = prepareFilters();

    if (!filters.term && isNullOrEmpty(filters)) {
      setIsLoading(false);
      setIsFirstLoad(true);
      setSearchResults([]);
      return;
    }

    const results = await fetchSearchResults(filters);
    setSearchResults(results);
    setIsLoading(false);
  }, [prepareFilters, fetchSearchResults]);

  const handlerResetTerm = useCallback(() => {
    setSearchTerm((prev) => '');
    handleSearch();
  }, [handleSearch]);

  useEffect(() => {
    handleSearch();
  }, [handleSearch]);

  return (
    <Dialog
      open={isOpen}
      transition
      onClose={() => setIsOpen(false)}
      className='relative z-50 transition duration-100 ease-out data-[closed]:opacity-0'
    >
      <DialogBackdrop className='fixed inset-0 bg-black/70' />
      <div className='fixed inset-0 z-10 w-screen'>
        <div className='flex min-h-full'>
          <DialogPanel className='relative w-full safe-height flex flex-col bg-background-900/60 backdrop-blur-lg'>
            <DialogTitle className='w-full px-2 pt-3 pb-1 mb-3 border-b border-background-400/50'>
              <div className='flex items-center'>
                <div className='w-full flex-1 mb-2'>
                  <SearchInput setIsOpen={setIsOpen} onSearch={setSearchTerm} onTermReset={handlerResetTerm} />
                </div>
                <div className='mb-2'>
                  <Logo />
                </div>
              </div>
            </DialogTitle>

            <div className='px-2 w-full'>
              <div className='flex mb-2'>
                <section className='relative overflow-hidden'>
                  <div className='snap-x mx-auto snap-mandatory overflow-x-scroll overflow-y-hidden scrollbar-hide'>
                    <div className='w-full flex flex-row gap-2'>
                      <div
                        className='flex flex-col items-center justify-center gap-3'
                        onClick={() => setIsOpenPosition(true)}
                      >
                        {!rootCtx?.position?.city ? (
                          <div className='flex items-center text-sm px-4 py-2 bg-background-500/70 border border-background-400 rounded-full text-white whitespace-nowrap'>
                            <MapPin className='w-4 h-4 text-accent-400 mr-2' weight='duotone' />
                            Ovunque
                          </div>
                        ) : (
                          <div className='flex items-center text-sm px-4 py-2 bg-accent-500/70 border border-accent-400 rounded-full text-white whitespace-nowrap'>
                            <span className='capitalize'>{rootCtx?.position?.city}</span>{' '}
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

              <ScrollShadow hideScrollBar className='w-full' style={{ maxHeight: 'calc(100vh - 200px)' }}>
                <SearchResults
                  term={searchTerm}
                  results={searchResults}
                  isLoading={!isFirstLoad && isLoading}
                  isEmptyFilter={isEmptyFilter}
                  isFirstLoad={isFirstLoad}
                  onClick={() => setIsOpen(false)}
                />
              </ScrollShadow>
            </div>
          </DialogPanel>
        </div>
      </div>

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
      
    </Dialog>
  );
};

export default SearchPanel;
