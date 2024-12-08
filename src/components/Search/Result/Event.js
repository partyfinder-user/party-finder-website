import React from 'react';
import Link from 'next/link';

import { MapPin } from '@phosphor-icons/react';
import LazyImage from '@/components/Helpers/LazyImage';
import { isValidImage } from '@/tools/tools';

const Event = ({ item, className = '', onClick }) => {
  const imageSrc = isValidImage(item.image) ? process.env.NEXT_PUBLIC_IMAGE_BASE_URL + item.image : '';

  return (
    <div className={`${className} flex flex-row items-stretch overflow-hidden`}>
      <Link href={'/event/' + item.slug} onClick={onClick} className='flex items-center'>
        <div className='flex-shrink-0'>
          <LazyImage
            src={imageSrc}
            width={80}
            height={100}
            alt={item.title}
            className='object-cover h-16 w-24 rounded-lg'
          />
        </div>
        <div className='flex flex-col justify-between px-2 flex-grow'>
          <div className='flex flex-col'>
            <span className='text-lg text-white block'>{item.title}</span>
            <span className='text-accent-500 block text-sm capitalize'>{item.date}</span>
            <span className='flex items-center text-white/90 font-medium text-sm'>
              <MapPin className='w-4 h-4 mr-0.5' />
              {item.location}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Event;
