import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { Heart } from '@phosphor-icons/react/dist/ssr';

const LocalCard = ({ idx, data }) => {
  return (
    <div
      key={idx}
      className='flex flex-col justify-between gap-2 bg-background-500/60 border border-background-500 rounded-lg shadow-lg min-w-[300px] overflow-hidden mb-4'
    >
      <div className='relative'>
        <Link href='/local'>
          <Image
            src={data.image}
            width={360}
            height={150}
            alt={data.title}
            className='max-h-60 w-full object-cover rounded-t-lg'
          />

          <div className='p-4 flex flex-col justify-between flex-grow gap-2'>
            <div className='flex'>
              <div className='flex-1'>
                <span className='text-xl text-white leading-tight'>{data.title}</span>
                <span className='text-white leading-tight'>{data.address}</span>

                <div className='mt-auto flex flex-col gap-1'>
                  <span className='text-xs text-accent-400'>{data.genres.join(', ')}</span>
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

export default LocalCard;
