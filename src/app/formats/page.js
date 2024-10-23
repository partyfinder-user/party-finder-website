import React from 'react';

import PaginationList from '@/components/Shared/Pagination';
import FormatCard from '@/components/UI/FormatCard';

const filters = [{ label: 'Ordinamento: A-z', value: 'date' }];

async function getData() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/mocks/formats.json`);
  if (!response.ok) {
    throw new Error('Error to handler get data');
  }
  const data = await response.json();
  return data;
}

export default async function FormatListPage() {
  const formats = await getData();

  return (
    <div>
      <div className='text-white p-6'>
        <h1 className='text-3xl'>Format</h1>
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

          {formats.map((format) => (
            <FormatCard key={format.id} data={format} />
          ))}

          <PaginationList />
        </div>
      </div>
    </div>
  );
}
