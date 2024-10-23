import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { Heart } from '@phosphor-icons/react/dist/ssr';

const ArtistCard = ({ idx, data }) => {
  return (
    <div
      key={idx}
      className='flex flex-col justify-between gap-2 bg-background-500/60 border border-background-500 rounded-lg shadow-lg min-w-[300px] overflow-hidden mb-4'
    >
      <div className='relative'>
        <Link href='/artist'>
          <Image
            src={data.image}
            width={360}
            height={150}
            alt={data.title}
            className='max-h-60 w-full object-cover rounded-t-lg'
          />

          <div className='absolute bottom-3 right-3'>
            <Heart className='w-6 h-6 text-white' />
          </div>

          <div className='p-4 flex flex-col justify-between flex-grow gap-2'>
            <span className='text-xl text-white leading-tight'>{data.title}</span>

            <div className='mt-auto flex flex-col gap-1'>
              <span className='text-xs text-accent-400'>{data.genres.join(', ')}</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ArtistCard;
