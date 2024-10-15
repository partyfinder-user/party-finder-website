import React, { useState, useEffect } from 'react';
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { CheckboxGroup } from '@nextui-org/checkbox';
import { Trash } from '@phosphor-icons/react';

import { CustomCheckbox } from '@/components/Helpers/CustomeCheckbox';

const musicGenres = [
  { text: 'Rock', id: 1 },
  { text: 'Pop', id: 2 },
  { text: 'Hip-Hop', id: 3 },
  { text: 'Jazz', id: 4 },
  { text: 'Classical', id: 5 },
  { text: 'Electronic', id: 6 },
  { text: 'Blues', id: 7 },
  { text: 'Reggae', id: 8 },
  { text: 'Country', id: 9 },
  { text: 'R&B', id: 10 },
  { text: 'Folk', id: 11 },
  { text: 'Metal', id: 12 },
  { text: 'Punk', id: 13 },
  { text: 'Disco', id: 14 },
  { text: 'Soul', id: 15 },
  { text: 'Funk', id: 16 },
  { text: 'Ska', id: 17 },
  { text: 'Latin', id: 18 },
  { text: 'Gospel', id: 19 },
  { text: 'Indie', id: 20 },
];

const Genre = ({ isOpen, setIsOpen, onSelect, reset }) => {
  const [groupSelected, setGroupSelected] = useState([]);

  const handleConfirm = () => {
    onSelect(groupSelected);
    setIsOpen(false);
  };

  useEffect(() => {
    if (reset) {
      setGroupSelected([]);
    }
  }, [reset]);

  const handleReset = () => {
    setGroupSelected([]);
  };

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
              <span className='text-white flex-1 mt-3'>Generi Musicali</span>
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
                        {musicGenres.map((g, idx) => (
                          <CustomCheckbox key={idx} value={g.id}>
                            {g.text}
                          </CustomCheckbox>
                        ))}
                      </div>
                    </div>
                  </CheckboxGroup>
                </div>
              </div>

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
