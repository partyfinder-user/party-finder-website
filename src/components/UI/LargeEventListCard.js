import React from 'react';
import Image from 'next/image';

const LargeEventListCard = ({ event }) => {
  return (
    <div className='flex flex-col justify-between gap-2 bg-background-500/60 border border-background-500 rounded-lg shadow-lg min-w-[300px] overflow-hidden mb-4'>
      <div className='relative'>
        <Image
          src={event.image}
          width={360}
          height={150}
          alt={event.title}
          className='w-full object-fill rounded-t-lg'
        />

        <div className='absolute top-0 right-0 bg-background-500/60 border border-background-500/30 backdrop-blur-sm text-neon-low font-medium text-md px-3.5 py-1.5 rounded-bl-lg'>
          {event.venue}
        </div>

        <div className='p-4 flex flex-col justify-between flex-grow gap-2'>
          <span className='text-xl text-white leading-tight'>{event.title}</span>

          <div className='mt-auto flex flex-col gap-1'>
            <span className='text-accent-400'>{event.date}</span>
            <span className='text-xs text-background-200'>{event.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LargeEventListCard;
