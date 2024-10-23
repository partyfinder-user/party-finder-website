import React from 'react';

import PaginationList from '@/components/Shared/Pagination';
import EventCard from '@/components/UI/EventCard';
import BgGlassmorphism from '@/components/Helpers/BgGlassmorphism';

const filters = [
  { label: 'Ordinamento: A-z', value: 'date' },
  { label: 'Locali', value: 'Locali' },
  { label: 'Data', value: 'date' },
  { label: 'Genere', value: 'Genere' },
  { label: 'Atmosfera', value: 'Atmosfera' },
];

async function getData() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/mocks/events.json`);
  if (!response.ok) {
    throw new Error('Error to handler get data');
  }
  const data = await response.json();
  return data;
}

export default async function EventListPage() {
  const events = await getData();

  return (
    <div>
      <BgGlassmorphism />
      <div className='text-white px-4 py-6'>
        <h1 className='text-3xl'>Eventi</h1>
      </div>

      <div className='relative'>
        <div className='absolute inset-0 h-16' />
        <div className='relative bg-background-700 rounded-tl-[40px] z-10 p-4'>
          <div className='relative snap-x mx-auto snap-mandatory overflow-x-scroll overflow-y-hidden scrollbar-hide mb-4'>
            <div className='w-full flex flex-row gap-2'>
              {filters.map((filter, idx) => (
                <div key={idx} className='flex flex-col items-center justify-center gap-3'>
                  <div className='text-sm px-5 py-2 bg-background-500/70 border border-background-400 rounded-full text-white whitespace-nowrap'>
                    {filter.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}

          <PaginationList />
        </div>
      </div>
    </div>
  );
}
