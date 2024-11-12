/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import React, { useState, useEffect, useContext } from 'react';
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { MagnifyingGlass, ArrowBendUpLeft, X } from '@phosphor-icons/react';
import { Card, CardBody } from '@nextui-org/card';
import { Spinner } from '@nextui-org/spinner';

import RootContext from '@/stores/root-context';
import { searchCity } from '@/libs/locality-service';

const SearchPosition = ({ isOpen, setIsOpen, onSelect, reset }) => {
  const rootCtx = useContext(RootContext);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [cities, setCities] = useState([]);
  const [typingTimeout, setTypingTimeout] = useState(null);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  const handleSearch = async () => {
    if (query.length === 0) {
      setCities([]);
      return;
    }
    setLoading(true);
    const results = await searchCity(query);
    setCities(results);
    setLoading(false);
  };

  const handleClear = () => {
    setQuery('');
    setCities([]);
  };

  const handleConfirm = (city) => {
    rootCtx.setPositionCity(city.nome);
    onSelect(city.nome);
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
      rootCtx.setPositionCity('');
    }
  }, [reset]);

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className='relative z-50 transition duration-100 ease-out data-[closed]:opacity-0'
    >
      <DialogBackdrop className='fixed inset-0 bg-black/90' />
      <div className='fixed inset-0 z-10 w-screen overflow-hidden'>
        <div className='flex min-h-full px-2 py-4'>
          <DialogPanel className='relative w-full safe-height flex flex-col'>
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
                  className='w-full pl-10 pr-10 py-3 border rounded-xl bg-default-100 border-background-500 focus:border-accent-500 focus:outline-none focus:ring-0'
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

              {loading && <Spinner className='absolute top-0 right-2' />}

              <div className='overflow-y-auto max-h-[calc(100vh-150px)]'>
                {cities.length > 0 && (
                  <div className='w-full my-1'>
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
              </div>

              {!loading && cities.length === 0 && query && (
                <p className='text-gray-500 my-2'>Nessun risultato trovato</p>
              )}
            </div>

            {cities.length <= 0 && (
              <button
                onClick={() => setIsOpen(false)}
                className='fixed bottom-4 right-4 p-2 bg-white/40 text-white rounded-full'
              >
                <ArrowBendUpLeft className='text-white w-6 h-6 mx-3 my-1' />
              </button>
            )}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default SearchPosition;
