import React from 'react';

import { Skeleton } from '@nextui-org/react';

const SkeletonSearchResult = () => {
  return (
    <div className='w-full space-y-4 mt-4'>
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className='w-full min-w-[300px] overflow-hidden mb-4'>
          <div className='w-full flex items-center gap-3'>
            <div>
              <Skeleton className='flex rounded-full w-12 h-12' />
            </div>
            <div className='w-full flex flex-col gap-2'>
              <Skeleton className='h-3 w-1/5 rounded-lg' />
              <Skeleton className='h-3 w-3/5 rounded-lg' />
              <Skeleton className='h-3 w-full rounded-lg' />
              <Skeleton className='h-3 w-4/5 rounded-lg' />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonSearchResult;
