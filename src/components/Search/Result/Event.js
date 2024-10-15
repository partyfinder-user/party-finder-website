import React from 'react';
import Image from 'next/image';

const Event = ({ item, className = '' }) => (
  <div className={`${className} flex flex-row items-stretch overflow-hidden`}>
    <div className='flex items-center'>
      <div className='flex-shrink-0'>
        <Image
          src={item.image}
          width={150}
          height={150}
          alt={item.name}
          className='object-cover h-20 w-20 rounded-lg'
        />
      </div>
      <div className='flex flex-col justify-between px-4 flex-grow'>
        <div className='flex flex-col'>
          <span className='text-lg text-white block'>{item.title}</span>
          <span className='text-accent-500 block'>{item.date}</span>
          <span className='text-white/70 font-medium block'>{item.venue}</span>
        </div>
      </div>
    </div>
  </div>
);

export default Event;
