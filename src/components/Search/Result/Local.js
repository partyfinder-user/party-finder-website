import React from 'react';
import Link from 'next/link';

import { MapPin } from '@phosphor-icons/react';
import LazyImage from '@/components/Helpers/LazyImage';
import { isValidImage } from '@/tools/tools';

const Local = ({ item, className = '', onClick }) => {
  const imageSrc = isValidImage(item.image) ? process.env.NEXT_PUBLIC_IMAGE_BASE_URL + item.image : '';

  return (
    <div className={`${className} flex flex-row items-stretch overflow-hidden`}>
      <Link href={'/local/' + item.slug} onClick={onClick} className='flex items-center'>
        <div className='flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-tr from-yellow-500 via-accent-500 to-primary-500'>
          <LazyImage
            src={imageSrc}
            width={80}
            height={80}
            alt={item.name}
            className='object-cover h-[60px] w-[60px] rounded-full'
          />
        </div>
        <div className='flex flex-col justify-between px-2 flex-grow'>
          <span className='text-lg text-white block'>{item.name}</span>
          <span className='flex items-center text-white/80 font-medium text-sm my-1'>
            <MapPin className='w-4 h-4 mr-0.5' />
            {item.location}
          </span>
          <span className='text-white/70 block text-sm'>Locale</span>
        </div>
      </Link>
    </div>
  );
};

export default Local;
