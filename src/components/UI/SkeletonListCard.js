import React from 'react';

import { Card, Skeleton } from '@nextui-org/react';

function SkeletonButton({ width = 100, height = 40 }) {
  return (
    <Skeleton
      className='rounded-full'
      style={{
        width: `${width}px`,
        height: `${height}px`,
        display: 'inline-block',
      }}
    />
  );
}

function PlaceholderFilters() {
  const buttonWidths = [200, 120, 180];
  return (
    <div className='flex flex-row gap-2'>
      {buttonWidths.map((width, index) => (
        <SkeletonButton key={index} width={width} />
      ))}
    </div>
  );
}

function SkeletonListCard() {
  return (
    <div className='space-y-4 mb-4'>
      <PlaceholderFilters />

      {Array.from({ length: 6 }).map((_, index) => (
        <Card
          key={index}
          className='w-full bg-background-500/60 rounded-lg shadow-lg min-w-[300px] overflow-hidden mb-4'
          radius='lg'
        >
          <Skeleton className='rounded-lg'>
            <div className='h-36 rounded-lg bg-default-300'></div>
          </Skeleton>
          <div className='space-y-3 p-4'>
            <Skeleton className='w-3/5 rounded-lg'>
              <div className='h-3 w-3/5 rounded-lg bg-default-300'></div>
            </Skeleton>
            <Skeleton className='w-4/5 rounded-lg'>
              <div className='h-3 w-4/5 rounded-lg bg-default-300'></div>
            </Skeleton>
            <Skeleton className='w-2/5 rounded-lg'>
              <div className='h-3 w-2/5 rounded-lg bg-default-300'></div>
            </Skeleton>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default SkeletonListCard;
