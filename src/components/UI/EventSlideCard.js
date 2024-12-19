import React from 'react';
import Link from 'next/link';

import LazyImage from '@/components/Helpers/LazyImage';
import { MapPin } from '@phosphor-icons/react/dist/ssr';

import Favorite from '../Helpers/Favorite';
import { isValidImage, parseTime } from '@/tools/tools';

const EventSlideCard = ({ event }) => {
  const imageSrc = isValidImage(event.image) ? process.env.NEXT_PUBLIC_IMAGE_BASE_URL + event.image : '';

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
    <Link href='/event'>
      <div className='flex flex-col justify-between gap-2 bg-background-500/60 border border-background-500 rounded-lg shadow-lg min-w-[300px] overflow-hidden'>
        <div className='relative'>
          <LazyImage src={imageSrc} width={300} height={150} alt={event.name} className='object-fill rounded-t-lg' />

          <div className='absolute bottom-3 right-3'>
            <Favorite itemId={event._id} type='events' />
          </div>

          <div className='absolute top-0 right-0 bg-background-500/60 border border-background-500/30 backdrop-blur-sm text-neon-low font-medium text-md px-3.5 py-1.5 rounded-bl-lg'>
            {event.place.name}
          </div>

          <div className='p-4 flex flex-col justify-between flex-grow'>
            <span className='text-xl text-white leading-tight line-clamp-1'>{event.name}</span>

            <div className='mt-auto flex flex-col'>
              <span className='text-accent-400 capitalize my-1.5'>{readableDate}</span>
              <div className='text-xs flex items-center text-white/90'>
                <MapPin className='h-4 w-4 mr-0.5' /> <span>{event.place.city}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventSlideCard;
