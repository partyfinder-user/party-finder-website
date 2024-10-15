import React from 'react';
import Image from 'next/image';

const Artist = ({ item, className = '' }) => (
  <div className={`${className} flex flex-row items-stretch overflow-hidden`}>
    <div className='flex items-center'>
      <div className='flex-shrink-0 w-20 h-20 flex items-center justify-center rounded-full p-1 bg-gradient-to-tr from-background-500 via-primary-500 to-accent-500'>
        <Image
          src={item.image}
          width={150}
          height={150}
          alt={item.name}
          className='object-cover h-[74px] w-[74px] rounded-full'
        />
      </div>
      <div className='flex flex-col justify-between px-4 flex-grow'>
        <span className='text-xl text-white block'>{item.name}</span>
        <span className='text-white/70 block'>Artista</span>
      </div>
    </div>
  </div>
);

export default Artist;
