import React from 'react';
import Image from 'next/image';

const EventListCard = ({ event }) => {
  return (
    <div className='flex flex-row items-stretch bg-background-500/60 border border-background-500 rounded-lg shadow-sm hover:bg-background-700 transition-all duration-300 overflow-hidden'>
      <div className='flex-shrink-0'>
        <Image
          src={event.image}
          width={170}
          height={200}
          alt={event.title}
          className='object-cover h-full rounded-l-lg'
        />
      </div>

      <div className='flex flex-col justify-between px-4 py-2 flex-grow gap-2'>
        <div>
          <span className='text-lg text-white block'>{event.title}</span>
          <span className='text-accent-500 font-medium'>{event.venue}</span>
        </div>

        <div className='flex flex-col'>
          <span className='text-xs text-white mb-1'>{event.date}</span>
          <span className='text-xs text-background-200'>{event.location}</span>
        </div>
      </div>
    </div>
  );
};

export default EventListCard;
