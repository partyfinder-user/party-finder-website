import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Heart } from '@phosphor-icons/react/dist/ssr';

const EventCard = ({ idx, event }) => {
  const date = new Date(event.dateStart);
  date.setHours(event.hourStart);
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  };
  const readableDate = date.toLocaleString('it-IT', options);

  return (
    <div
      key={idx}
      className='flex flex-col justify-between gap-2 bg-background-500/60 border border-background-500 rounded-lg shadow-lg min-w-[300px] overflow-hidden mb-4'
    >
      <div className='relative'>
        <Link href={'/event/' + event.slug}>
          <Image
            src={process.env.NEXT_PUBLIC_IMAGE_BASE_URL + event.image}
            width={360}
            height={150}
            alt={event.name}
            className='w-full object-fill rounded-t-lg'
          />

          <div className='absolute top-0 right-0 bg-background-500/60 border border-background-500/30 backdrop-blur-sm text-neon-low font-medium text-md px-3.5 py-1.5 rounded-bl-lg'>
            {event.place.name}
          </div>

          <div className='p-4 flex flex-col justify-between flex-grow gap-2'>
            <div className='flex'>
              <div className='flex-1'>
                <span className='text-xl text-white leading-tight'>{event.name}</span>

                <div className='mt-auto flex flex-col gap-1'>
                  <span className='text-accent-400'>{readableDate}</span>
                  <span className='text-xs text-background-200'>{event.place.address}</span>
                </div>
              </div>
              <div className='pl-2 mt-auto'>
                <Heart className='w-7 h-7 text-white' />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
