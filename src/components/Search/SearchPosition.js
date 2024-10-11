/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import React, { useState, useEffect, useContext } from 'react';
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { MagnifyingGlass, X } from '@phosphor-icons/react';
import { Card, CardBody } from '@nextui-org/card';
import { ScrollShadow } from '@nextui-org/scroll-shadow';
import { Spinner } from '@nextui-org/spinner';
import { Input } from '@nextui-org/input';

import RootContext from '@/stores/root-context';
import { searchCity } from '@/libs/locality-service';

const SerachPosition = ({ isOpen, setIsOpen, onSelect, reset }) => {
  const rootCtx = useContext(RootContext);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [cities, setCities] = useState([]);
  const [typingTimeout, setTypingTimeout] = useState(null);

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
      setCities('');
      rootCtx.setPositionCity('');
    }
  }, [reset]);

  return (
    <Dialog
      open={isOpen}
      transition
      onClose={() => setIsOpen(false)}
      className='relative z-50 transition duration-100 ease-out data-[closed]:opacity-0'
    >
      <DialogBackdrop className='fixed inset-0 bg-black/80' />
      <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
        <div className='flex min-h-full px-4 py-8'>
          <DialogPanel className='w-full'>
            <div className='flex flex-col px-4'>
              <div className='flex items-center mb-4'>
                <span className='text-lg font-semibold flex-1 '>Trova la tua città</span>
                <button onClick={() => setIsOpen(false)} className='p-2 bg-white/40 text-white rounded-lg'>
                  <X className='text-white w-5 h-5' />
                </button>
              </div>

              <Input
                bordered
                isClearable
                onClear={handleClear}
                labelPlacement='outside'
                placeholder='Cerca una città'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                startContent={
                  <MagnifyingGlass className='text-xl mr-0.5 text-default-400 pointer-events-none flex-shrink-0' />
                }
                endContent={<X className='text-white/60 pointer-events-none flex-shrink-0' />}
                fullWidth
              />

              {loading && <Spinner className='absolute top-4 right-4' />}

              <div className='overflow-hidden' style={{ height: 'calc(100vh - 150px)' }}>
                <ScrollShadow size={150} hideScrollBar className='w-full max-h-full'>
                  {cities.length > 0 && (
                    <div className='w-full my-1'>
                      {cities.map((city) => (
                        <Card
                          key={city._id}
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

              {!loading && cities.length === 0 && query && <p className='text-gray-500'>Nessun risultato trovato</p>}
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default SerachPosition;
