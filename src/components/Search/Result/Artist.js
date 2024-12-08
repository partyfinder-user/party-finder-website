import React from 'react';

import LazyImage from '@/components/Helpers/LazyImage';
import { isValidImage } from '@/tools/tools';
import Link from 'next/link';

const Artist = ({ item, className = '' }) => {
  const imageSrc = isValidImage(item.image) ? process.env.NEXT_PUBLIC_IMAGE_BASE_URL + item.image : '';

  return (
    <div className={`${className} flex flex-row items-stretch overflow-hidden`}>
      <Link href={'/artist/' + item.slug} className='flex items-center'>
        <div className='flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-tr from-background-500 via-primary-500 to-accent-500'>
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
          <span className='text-white/70 block text-sm'>Artista</span>
        </div>
      </Link>
    </div>
  );
};

export default Artist;
