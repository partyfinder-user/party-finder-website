import React, { useState, useEffect } from 'react';
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { CheckboxGroup, Checkbox } from '@nextui-org/checkbox';

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

  const handleDistanceChange = (value) => {
    setSelectedGerne(value);
  };

  const handleConfirm = () => {
    onSelect(selectedGenre);
    setIsOpen(false);
  };

  useEffect(() => {
    if (onReset) {
      setSelectedGerne(initialGenre || 50);
    }
  }, [initialGenre, onReset]);

  return (
    <Dialog
      open={isOpen}
      transition
      onClose={() => setIsOpen(false)}
      className='relative z-50 transition duration-100 ease-out data-[closed]:opacity-0'
    >
      <DialogBackdrop className='fixed inset-0 bg-black/60' />
      <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
        <div className='flex min-h-full items-center justify-center p-4'>
          <DialogPanel className='w-full'>
            <div className='flex flex-col items-center justify-center px-4'>
              <div className='w-full mb-8'>
                <div className='flex flex-col gap-1 w-full'>
                  <CheckboxGroup
                    label='Generi Musicali'
                    color='secondary'
                    defaultValue={['buenos-aires', 'san-francisco']}
                  >
                    <div className='flex items-center justify-between w-full'>
                      {/* Prima colonna */}
                      <div className='flex flex-col gap-2 w-1/2'>
                        {musicGenres.slice(0, Math.ceil(musicGenres.length / 2)).map((g, idx) => (
                          <Checkbox key={idx} value={g.text.toLowerCase().replace(' ', '-')}>
                            {g.text}
                          </Checkbox>
                        ))}
                      </div>

                      {/* Seconda colonna */}
                      <div className='flex flex-col gap-2 w-1/2'>
                        {musicGenres.slice(Math.ceil(musicGenres.length / 2)).map((g, idx) => (
                          <Checkbox
                            key={idx + Math.ceil(musicGenres.length / 2)}
                            value={g.text.toLowerCase().replace(' ', '-')}
                          >
                            {g.text}
                          </Checkbox>
                        ))}
                      </div>
                    </div>
                  </CheckboxGroup>
                  <p className='mt-4 ml-1 text-default-500'>Selected: {selectedGenre?.join(', ')}</p>
                </div>
              </div>
              <button onClick={handleConfirm} className='px-4 py-2 bg-accent-500 text-white rounded-lg'>
                Nel raggio di {selectedGenre} km
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default Genre;
