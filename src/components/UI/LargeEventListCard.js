import React from 'react';
import Image from 'next/image';

import LazyImage from '@/components/Helpers/LazyImage';
import { parseTime } from '@/tools/tools';
import defaultImage from '/public/images/default-image.png';

const LargeEventListCard = ({ event }) => {
  const date = new Date(event.dateStart);

  const { hours, minutes } = parseTime(event.hourStart);
  date.setHours(hours);
  date.setMinutes(minutes);

  const options = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  };
  const readableDate = date.toLocaleString('it-IT', options);

  return (
    <div className='flex flex-col justify-between gap-2 bg-background-500/60 border border-background-500 rounded-lg shadow-lg min-w-[300px] overflow-hidden mb-4'>
      <div className='relative'>
        <LazyImage
          src={event?.image}
          width={360}
          height={150}
          alt={event.name}
          className='w-full object-fill rounded-t-lg'
        />

        <div className='absolute top-0 right-0 bg-background-500/60 border border-background-500/30 backdrop-blur-sm text-neon-low font-medium text-md px-3.5 py-1.5 rounded-bl-lg'>
          {event.place.name}
        </div>

        <div className='p-4 flex flex-col justify-between flex-grow gap-2'>
          <span className='text-xl text-white leading-tight'>{event.name}</span>

          <div className='mt-auto flex flex-col gap-1'>
            <span className='text-accent-400'>{readableDate}</span>
            <span className='text-xs text-background-200'>{event.place.city}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LargeEventListCard;
