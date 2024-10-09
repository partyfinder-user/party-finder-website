'use client';

import React from 'react';

import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { Calendar } from '@nextui-org/calendar';
import { parseDate } from '@internationalized/date';
import { X } from '@phosphor-icons/react';

const DateRange = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <Dialog
        open={isOpen}
        transition
        onClose={() => setIsOpen(false)}
        className='relative z-50 transition duration-100 ease-out data-[closed]:opacity-0'
      >
        <DialogBackdrop className='fixed inset-0 bg-black/80' />
        <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
          <div className='relative flex min-h-full items-center justify-center p-4'>
            <X className='absolute w-8 h-8 text-white cursor-pointer m-8 right-0 top-0' />
            <DialogPanel>
              <div className='relative overflow-hidden flex px-4'>
                <Calendar aria-label='Date (Uncontrolled)' defaultValue={parseDate('2020-02-03')} />
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default DateRange;
