import React, { useState, useEffect } from 'react';
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { CheckboxGroup } from '@nextui-org/checkbox';
import { CustomCheckbox } from '@/components/Helpers/CustomeCheckbox';
import { X } from '@phosphor-icons/react';

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

const Genre = ({ isOpen, setIsOpen, onSelect, onReset, initialGenre }) => {
  const [selectedGenre, setSelectedGerne] = useState(initialGenre);
  const [groupSelected, setGroupSelected] = useState([]);

  const handleConfirm = () => {
    onSelect(groupSelected);
    setIsOpen(false);
  };

  useEffect(() => {
    if (onReset) {
      setSelectedGerne(initialGenre || 50);
    }
  }, [initialGenre, onReset]);

  const handleReset = () => {
    onReset();
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
              <span className='text-white flex-1 ml-3'>Generi Musicali</span>
              <button onClick={handleReset} className='p-2 bg-accent-500/40 text-white rounded-lg'>
                <X className='text-white w-5 h-5' />
              </button>
            </div>
            <div className='flex flex-col items-center justify-center px-4'>
              <div className='w-full mb-8'>
                <div className='flex flex-col gap-1 w-full'>
                  <CheckboxGroup value={groupSelected} onChange={setGroupSelected}>
                    <div className='flex flex-wrap items-center justify-start w-full max-h-[65vh] overflow-y-auto'>
                      {musicGenres.map((g, idx) => (
                        <CustomCheckbox key={idx} value={g.text.toLowerCase().replace(' ', '-')}>
                          {g.text}
                        </CustomCheckbox>
                      ))}
                    </div>
                  </CheckboxGroup>
                </div>
              </div>

              <button onClick={handleConfirm} className='px-4 py-2 bg-accent-500 text-white rounded-lg'>
                {groupSelected.length} generi selezionati
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default Genre;
