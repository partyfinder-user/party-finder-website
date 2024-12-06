import React, { Suspense } from 'react';

import PaginationList from '@/components/Shared/Pagination';
import LocalCard from '@/components/UI/LocalCard';
import BgGlassmorphism from '@/components/Helpers/BgGlassmorphism';
import SkeletonListCard from '@/components/UI/SkeletonListCard';

const filters = [
  { label: 'Posizione', value: 'Posizione' },
  { label: 'Genere', value: 'Genere' },
];

const List = async ({ places }) => {
  return (
    <div>
      {places?.map((data, idx) => (
        <LocalCard key={idx} data={data} />
      ))}
    </div>
  );
};

const Filters = async () => {
  return (
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
  );
};

const LocalListPage = ({ places, totalItems, currentPage }) => {
  return (
    <div>
      <BgGlassmorphism />
      <div className='text-white px-4 py-6'>
        <h1 className='text-3xl'>Locali</h1>
      </div>

      <div className='relative'>
        <div className='absolute inset-0 h-16' />
        <div className='relative bg-background-700 rounded-tl-[40px] z-10 p-4'>
          <Suspense fallback={<SkeletonListCard />}>
            <Filters />
            <List places={places} />
          </Suspense>

          <PaginationList
            totalItems={totalItems}
            itemsPerPage={10}
            currentPage={currentPage}
            renderPageLink={(page) => (page === 0 ? `/locals` : `/locals/${page}`)}
          />
        </div>
      </div>
    </div>
  );
};

export default LocalListPage;
