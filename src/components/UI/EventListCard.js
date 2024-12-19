import React from 'react';
import Link from 'next/link';

import LazyImage from '@/components/Helpers/LazyImage';
import { MapPin } from '@phosphor-icons/react/dist/ssr';

import { isValidImage, parseTime } from '@/tools/tools';

const EventListCard = ({ event }) => {
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
    <Link href={'/event/' + event.slug}>
      <div className='flex flex-row items-stretch bg-background-500/60 border border-background-500 rounded-lg shadow-sm hover:bg-background-700 transition-all duration-300 overflow-hidden'>
        <div className='flex-shrink-0'>
          <LazyImage
            src={imageSrc}
            width={170}
            height={200}
            alt={event.title}
            className='object-cover h-full rounded-l-lg'
          />
        </div>

        <div className='flex flex-col justify-between px-4 py-2 flex-grow'>
          <div className='mb-0.5'>
            <span className='text-lg text-white block'>{event.name}</span>
            <span className='text-accent-500 font-medium capitalize'>{readableDate}</span>
          </div>

          <div className='flex flex-col'>
            <span className='text-white mb-1'>{event.place.name}</span>
            <div className='text-xs flex items-center text-white/90'>
              <MapPin className='h-4 w-4 mr-0.5' /> <span>{event.place.city}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventListCard;
