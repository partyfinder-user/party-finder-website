'use client';

import React, { useState } from 'react';

import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { RangeCalendar } from '@nextui-org/calendar';
import { I18nProvider } from '@react-aria/i18n';
import { today, getLocalTimeZone } from '@internationalized/date';
import { X, ArrowRight } from '@phosphor-icons/react';

const DateRangeButton = ({ start, end, formatDate, onConfirm }) => {
  const handleConfirm = () => {
    const startDate = start.toDate(getLocalTimeZone());
    const endDate = end.toDate(getLocalTimeZone());
    onConfirm({ start: startDate, end: endDate });
  };

  return (
    <button onClick={handleConfirm} className='mt-4 px-4 py-2 bg-accent-500 text-white rounded'>
      {start && (
        <>
          {start.compare(end) === 0 ? (
            formatDate(start)
          ) : (
            <>
              {formatDate(start)} <ArrowRight className='inline-block' /> {formatDate(end)}
            </>
          )}
        </>
      )}
    </button>
  );
};

const DateRange = ({ isOpen, setIsOpen, dateSelect }) => {
  const [selectedRange, setSelectedRange] = useState({
    start: today(getLocalTimeZone()),
    end: today(getLocalTimeZone()),
  });

  const handleDateChange = (range) => {
    if (!range.end) {
      setSelectedRange({ start: range.start, end: range.start });
    } else {
      setSelectedRange(range);
    }
  };

  const formatDate = (date) => {
    return date?.toDate(getLocalTimeZone()).toLocaleDateString('it-IT', {
      day: 'numeric',
      month: 'short',
    });
  };

  const selectToday = () => {
    const todayDate = today(getLocalTimeZone());
    setSelectedRange({ start: todayDate, end: todayDate });
  };

  const selectTomorrow = () => {
    const tomorrow = today(getLocalTimeZone()).add({ days: 1 });
    setSelectedRange({ start: tomorrow, end: tomorrow });
  };

  const selectWeek = () => {
    const todayDate = today(getLocalTimeZone());
    const dayOfWeek = todayDate.toDate(getLocalTimeZone()).getDay();
    const daysUntilSunday = 7 - dayOfWeek;
    const endOfWeek = todayDate.add({ days: daysUntilSunday });
    setSelectedRange({ start: todayDate, end: endOfWeek });
  };

  const selectWeekend = () => {
    const todayDate = today(getLocalTimeZone());
    const dayOfWeek = todayDate.toDate(getLocalTimeZone()).getDay();
    const daysUntilFriday = dayOfWeek <= 5 ? 5 - dayOfWeek : 0;
    const startOfWeekend = todayDate.add({ days: daysUntilFriday });
    const endOfWeekend = startOfWeekend.add({ days: 2 });
    setSelectedRange({ start: startOfWeekend, end: endOfWeekend });
  };

  const handleDateSelect = (currentRange) => {
    dateSelect(currentRange);
    setIsOpen(false);
  };

  return (
    <>
      <Dialog
        open={isOpen}
        transition
        onClose={() => setIsOpen(false)}
        className='relative z-50 transition duration-100 ease-out data-[closed]:opacity-0'
      >
        <DialogBackdrop className='fixed inset-0 bg-black/60' />
        <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
          <div className='relative flex min-h-full items-center justify-center p-4'>
            <X
              className='absolute w-8 h-8 text-white cursor-pointer m-8 right-0 top-0'
              onClick={() => setIsOpen(false)}
            />
            <DialogPanel>
              <div className='flex flex-col items-center justify-center px-4'>
                <div className='relative overflow-hidden mb-2'>
                  <div className='grid grid-cols-2 grid-rows-2 gap-2'>
                    <button onClick={selectToday} className='px-2 py-2 bg-background-500 text-white rounded-lg text-xs'>
                      Oggi
                    </button>
                    <button
                      onClick={selectTomorrow}
                      className='px-2 py-2 bg-background-500 text-white rounded-lg text-xs'
                    >
                      Domani
                    </button>
                    <button
                      onClick={selectWeekend}
                      className='px-2 py-2 bg-background-500 text-white rounded-lg text-xs'
                    >
                      Fine settimana
                    </button>
                    <button onClick={selectWeek} className='px-2 py-2 bg-background-500 text-white rounded-lg text-xs'>
                      Questa settimana
                    </button>
                  </div>
                </div>

                <I18nProvider locale='it-IT-i-it-italian'>
                  <RangeCalendar
                    aria-label='Seleziona le date'
                    locale='it-IT'
                    value={selectedRange}
                    onChange={handleDateChange}
                    minValue={today()}
                  />
                </I18nProvider>

                <DateRangeButton
                  start={selectedRange.start}
                  end={selectedRange.end}
                  formatDate={formatDate}
                  onConfirm={handleDateSelect}
                />
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default DateRange;
