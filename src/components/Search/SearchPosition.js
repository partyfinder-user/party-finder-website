/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import React, { useState, useEffect, useContext } from 'react';
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { MagnifyingGlass, ArrowBendUpLeft, X } from '@phosphor-icons/react';
import { Card, CardBody } from '@nextui-org/card';
import { Spinner } from '@nextui-org/spinner';
import { ScrollShadow } from '@nextui-org/scroll-shadow';

import RootContext from '@/stores/root-context';
import { searchCity } from '@/libs/locality-service';
import RequestLocation from './RequestLocation';

const SearchPosition = ({ isOpen, setIsOpen, onSelect, reset }) => {
  const rootCtx = useContext(RootContext);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [cities, setCities] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [typingTimeout, setTypingTimeout] = useState(null);

  const handleSearch = async () => {
    if (query.length === 0) {
      setCities([]);
      setHasSearched(false);
      return;
    }

    setLoading(true);
    setHasSearched(true);
    const results = await searchCity(query);
    setCities(results);
    setLoading(false);
  };

  const handleClear = () => {
    setQuery('');
    setCities([]);
    setHasSearched(false);
  };

  const handleConfirm = (position) => {
    const selectedPosition = { city: position.nome, geo: position.geo };
    rootCtx.setPositionCity(selectedPosition);
    onSelect(selectedPosition);
    setIsOpen(false);
    setQuery('');
  };

  useEffect(() => {
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }
    const timeoutId = setTimeout(() => {
      handleSearch();
    }, 500);

    setTypingTimeout(timeoutId);
    return () => clearTimeout(timeoutId);
  }, [query]);

  useEffect(() => {
    if (reset) {
      setCities([]);
      rootCtx.setPositionCity({});
    }
  }, [reset]);

  return (
    <Dialog
      open={isOpen}
      transition
      onClose={() => setIsOpen(false)}
      className='relative z-50 transition duration-100 ease-out data-[closed]:opacity-0'
    >
      <DialogBackdrop className='fixed inset-0 bg-black/70' />
      <div className='fixed inset-0 z-10 w-screen'>
        <div className='relative flex min-h-full'>
          <DialogPanel className='px-2 py-4 w-full flex flex-col bg-background-900/60 backdrop-blur-lg'>
            <div className='flex flex-col px-2'>
              <div className='flex items-center mb-4'>
                <span className='text-lg font-semibold flex-1'>Trova la tua città</span>
              </div>

              <div className='relative w-full group'>
                <input
                  type='text'
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder='Cerca una città o la tua provincia'
                  className='w-full pl-10 pr-10 py-3 border border-white/20 bg-white/10 rounded-full focus:border-accent-500 focus:outline-none focus:ring-0'
                />
                <span className='absolute inset-y-0 left-3 flex items-center pointer-events-none'>
                  <MagnifyingGlass className='text-xl text-gray-400 transition-colors duration-200 group-focus-within:text-accent-500' />
                </span>

                {query && (
                  <button type='button' className='absolute inset-y-0 right-3 flex items-center' onClick={handleClear}>
                    <X className='text-xl text-gray-400 hover:text-gray-600' />
                  </button>
                )}
              </div>

              {!loading && hasSearched && cities?.length <= 0 && query && (
                <p className='text-gray-400 ml-2 my-4'>Nessun risultato trovato</p>
              )}

              {!loading && cities.length <= 0 && <RequestLocation onSelect={handleConfirm} />}

              {loading && <Spinner className='absolute top-3 right-3' />}

              <ScrollShadow hideScrollBar className='w-full' style={{ maxHeight: 'calc(100vh - 100px)' }}>
                {cities.length > 0 && (
                  <div className='w-full my-1 pb-20'>
                    {cities.map((city, idx) => (
                      <Card
                        key={city._id + '-' + idx}
                        isPressable
                        isHoverable
                        onPress={() => handleConfirm(city)}
                        className='w-full my-4'
                      >
                        <CardBody>
                          <p>{city.nome}</p>
                          <p className='text-sm text-gray-500'>
                            {city?.provincia?.nome}, {city?.regione?.nome}
                          </p>
                        </CardBody>
                      </Card>
                    ))}
                  </div>
                )}
              </ScrollShadow>
            </div>
          </DialogPanel>
          {cities?.length <= 0 && (
            <button
              onClick={() => setIsOpen(false)}
              className='absolute z-50 bottom-4 right-4 p-2 bg-white/40 text-white rounded-full'
            >
              <ArrowBendUpLeft className='text-white w-6 h-6 mx-3 my-1' />
            </button>
          )}
        </div>
      </div>
    </Dialog>
  );
};

export default SearchPosition;
