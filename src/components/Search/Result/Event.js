import React from 'react';
import Image from 'next/image';

const Event = ({ item, className = '' }) => (
  <div className={`${className} flex flex-row items-stretch overflow-hidden`}>
    <div className='flex items-center'>
      <div className='flex-shrink-0'>
        <Image
          src={item.image}
          width={80}
          height={100}
          alt={item.title}
          className='object-cover h-16 w-24 rounded-lg'
        />
      </div>
      <div className='flex flex-col justify-between px-2 flex-grow'>
        <div className='flex flex-col'>
          <span className='text-lg text-white block'>{item.title}</span>
          <span className='text-accent-500 block text-sm'>{item.date}</span>
          <span className='text-white/70 font-medium block text-sm'>{item.venue}</span>
        </div>
      </div>
    </div>
  </div>
);

export default Event;
