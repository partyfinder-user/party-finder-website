import React, { useState, useEffect } from 'react';
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { Slider } from '@nextui-org/slider';

const DistanceRange = ({ isOpen, setIsOpen, onDistanceSelect, onReset }) => {
  const [selectedDistance, setSelectedDistance] = useState(50);

  const handleDistanceChange = (value) => {
    setSelectedDistance(value);
  };

  const handleConfirm = () => {
    onDistanceSelect(selectedDistance);
    setIsOpen(false);
  };

  useEffect(() => {
    if (onReset) {
      setSelectedDistance(50);
    }
  }, [onReset]);

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
                <Slider
                  label='Distanza dalla tua città'
                  step={10}
                  maxValue={300}
                  minValue={10}
                  showSteps={true}
                  showTooltip={true}
                  showOutline={true}
                  disableThumbScale={true}
                  value={selectedDistance}
                  onChange={handleDistanceChange}
                  onChangeEnd={handleDistanceChange}
                  getValue={(d) => `${d} km`}
                  classNames={{
                    base: 'max-w-md',
                    filler: 'bg-gradient-to-r from-primary-500 to-secondary-400',
                    labelWrapper: 'mb-2',
                    label: 'font-medium text-default-700 text-medium',
                    value: 'font-medium text-default-700/80 text-small',
                    thumb: [
                      'transition-size',
                      'bg-gradient-to-r from-secondary-400 to-primary-500',
                      'data-[dragging=true]:shadow-lg data-[dragging=true]:shadow-black/20',
                      'data-[dragging=true]:w-7 data-[dragging=true]:h-7 data-[dragging=true]:after:h-6 data-[dragging=true]:after:w-6',
                    ],
                    step: 'data-[in-range=true]:bg-black/30 dark:data-[in-range=true]:bg-white/50',
                  }}
                  tooltipProps={{
                    offset: 10,
                    placement: 'bottom',
                    classNames: {
                      base: ['before:bg-gradient-to-r before:from-secondary-400 before:to-primary-500'],
                      content: ['py-2 shadow-xl', 'text-white bg-gradient-to-r from-secondary-400 to-primary-500'],
                    },
                  }}
                />
              </div>
              <button onClick={handleConfirm} className='px-4 py-2 bg-accent-500 text-white rounded-lg'>
                Nel raggio di {selectedDistance} km
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default DistanceRange;
