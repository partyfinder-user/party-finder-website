import React from 'react';
import Link from 'next/link';

import LazyImage from '@/components/Helpers/LazyImage';
import { isValidImage } from '@/tools/tools';

const LocalSlideCard = ({ local }) => {
  const imageSrc = isValidImage(local.image) ? process.env.NEXT_PUBLIC_IMAGE_BASE_URL + local.image : '';

  return (
    <Link href={'/local/' + local.slug}>
      <div className='flex flex-col items-center justify-center gap-3'>
        <div className='relative w-20 h-20 rounded-full p-[2px] bg-gradient-to-tr from-yellow-500 via-accent-500 to-primary-500'>
          <div className='w-full h-full rounded-full'>
            <LazyImage
              src={imageSrc}
              width={80}
              height={80}
              alt={local.name}
              className='w-full h-full rounded-full object-cover border-gray-800 border'
            />
          </div>
        </div>
        <span className='text-xs text-white text-center max-w-[100px] whitespace-nowrap overflow-hidden text-ellipsis'>
          {local.name}
        </span>
      </div>
    </Link>
  );
};

export default LocalSlideCard;
