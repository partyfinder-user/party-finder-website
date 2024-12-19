import React, { useState, useEffect } from 'react';

import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { Spinner } from '@nextui-org/react';
import { CheckboxGroup } from '@nextui-org/checkbox';
import { Trash } from '@phosphor-icons/react';
import useSWR from 'swr';

import { CustomCheckbox } from '@/components/Helpers/CustomeCheckbox';

const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch genres');
  }
  const data = await response.json();
  return data;
};

const Genre = ({ defaultSelectedGenres = [], isOpen, setIsOpen, onSelect, reset }) => {
  const [groupSelected, setGroupSelected] = useState([]);
  console.log(groupSelected);

  const { data, isLoading } = useSWR(
    isOpen ? `${process.env.NEXT_PUBLIC_SERVICE_BASE_URL}types/listTypes` : null,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateIfStale: false,
      dedupingInterval: 60000,
      cacheTime: 3600000,
    },
  );
  const genres = data || [];

  const handleReset = () => {
    setGroupSelected([]);
  };

  const handleConfirm = () => {
    onSelect(groupSelected);
    setIsOpen(false);
  };

  useEffect(() => {
    if (reset) {
      setGroupSelected([]);
    }
  }, [reset]);

  useEffect(() => {
    if (isOpen && defaultSelectedGenres.length > 0) {
      setGroupSelected(defaultSelectedGenres.map((genre) => genre));
    }
  }, [isOpen, defaultSelectedGenres]);

  return (
    <Dialog
      open={isOpen}
      transition
      onClose={() => setIsOpen(false)}
      className='relative z-50 transition duration-100 ease-out data-[closed]:opacity-0'
    >
      <DialogBackdrop className='fixed inset-0 bg-black/80' />
      <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
        <div className='flex min-h-full items-center justify-center p-4'>
          <DialogPanel className='w-full'>
            <div className='p-4 flex items-center'>
              <span className='text-white flex-1 mt-3'>Generi</span>
              <button onClick={handleReset} className='p-2 bg-white/30 text-white rounded-lg'>
                <Trash className='text-white w-5 h-5' />
              </button>
            </div>
            <div className='flex flex-col items-center justify-center px-4'>
              <div className='w-full mb-8'>
                <div className='flex flex-col gap-1 w-full'>
                  <CheckboxGroup value={groupSelected} onChange={setGroupSelected}>
                    <div className='w-full'>
                      <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 items-center justify-start w-full'>
                        {genres?.map((genre) => (
                          <CustomCheckbox key={genre._id} value={genre._id}>
                            {genre.name}
                          </CustomCheckbox>
                        ))}
                      </div>
                    </div>
                  </CheckboxGroup>
                </div>
              </div>

              {isLoading && <Spinner className='absolute top-3 right-3' />}

              {groupSelected?.length && groupSelected?.length > 0 ? (
                <button onClick={handleConfirm} className='px-4 py-2 bg-accent-500 text-white rounded-lg'>
                  {groupSelected.length} gener{groupSelected.length > 1 ? 'i' : 'e'} selezionat
                  {groupSelected.length > 1 ? 'i' : 'o'}
                </button>
              ) : (
                <button onClick={handleConfirm} className='px-4 py-2 bg-accent-500 text-white rounded-lg'>
                  Nessun genere
                </button>
              )}
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default Genre;
