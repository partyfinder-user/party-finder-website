import React from 'react';
import Link from 'next/link';

import LazyImage from '@/components/Helpers/LazyImage';
import { isValidImage } from '@/tools/tools';
import Favorite from '../Helpers/Favorite';

const FormatCard = ({ idx, data }) => {
  const imageSrc = isValidImage(data.image) ? process.env.NEXT_PUBLIC_IMAGE_BASE_URL + data.image : '';

  return (
    <div
      key={idx}
      className='flex flex-col justify-between gap-2 bg-background-500/60 border border-background-500 rounded-lg shadow-lg min-w-[300px] overflow-hidden mb-4'
    >
      <div className='relative'>
        <Link href={'/format/' + data.slug}>
          <LazyImage
            src={imageSrc}
            width={360}
            height={150}
            alt={data.name}
            className='max-h-60 w-full object-cover rounded-t-lg'
          />

          <div className='p-4 flex flex-col justify-between flex-grow gap-2'>
            <div className='flex'>
              <div className='flex-1'>
                <span className='text-xl text-white leading-tight'>{data.name}</span>
              </div>
              <div className='pl-2 mt-auto'>
                <Favorite itemId={data._id} type='formats' />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FormatCard;
