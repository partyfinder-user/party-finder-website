'use client';

import React, { useState } from 'react';

import { motion } from 'framer-motion';
import { UserCircleCheck, CaretDown } from '@phosphor-icons/react';
import LazyImage from './LazyImage';

const LineUp = ({ lineup }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <motion.div
        className='overflow-hidden'
        initial={{ height: 0 }}
        animate={{ height: isExpanded ? 'auto' : 0 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        {isExpanded && (
          <div className='w-full space-y-4'>
            {lineup.map((data, index) => (
              <div key={index} className='flex items-center justify-between'>
                <div className='flex items-center space-x-4'>
                  {data.artist.image ? (
                    <div className='relative w-12 h-12 rounded-full p-[2px] bg-gradient-to-tr from-yellow-500 via-accent-500 to-primary-500'>
                      <div className='w-full h-full rounded-full'>
                        <LazyImage
                          src={process.env.NEXT_PUBLIC_IMAGE_BASE_URL + data.artist.image.key}
                          alt={data.artist.name}
                          width={60}
                          height={60}
                          className='w-full h-full rounded-full object-cover border-gray-800 border'
                        />
                      </div>
                    </div>
                  ) : (
                    <div className='w-12 h-12 rounded-full p-[2px] bg-gradient-to-tr from-yellow-500 via-accent-500 to-primary-500 text-white flex items-center justify-center'>
                      <UserCircleCheck className='w-8 h-8 text-white' />
                    </div>
                  )}
                  <div className='flex flex-col'>
                    <span>{data.artist.name}</span>
                    <span className='text-xs text-white/60'>live ore {data?.hour}</span>
                  </div>
                </div>
                <button className='bg-white text-black py-1 px-3 rounded-full text-sm'>Eventi</button>
              </div>
            ))}
            <div className='w-full flex justify-end'>
              <button
                onClick={() => setIsExpanded(false)}
                className='text-white py-1 px-4 rounded-full border border-white/60'
              >
                Mostra meno
              </button>
            </div>
          </div>
        )}
      </motion.div>

      {!isExpanded && (
        <motion.div
          className='flex items-center space-x-[-10px]'
          onClick={() => setIsExpanded(true)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          {lineup.slice(0, 3).map((data, index) =>
            data.artist.image ? (
              <LazyImage
                key={index}
                src={process.env.NEXT_PUBLIC_IMAGE_BASE_URL + data.artist.image.key}
                alt={data.artist.name}
                width={60}
                height={60}
                className='object-cover w-12 h-12 rounded-full border-2 border-gray-800'
              />
            ) : (
              <div
                key={index}
                className='w-12 h-12 rounded-full p-[2px] bg-gradient-to-tr from-yellow-500 via-accent-500 to-primary-500 text-white flex items-center justify-center'
              >
                <UserCircleCheck className='w-8 h-8 text-white' />
              </div>
            ),
          )}
          {lineup.length > 3 && (
            <div className='flex items-center justify-center w-12 h-12 rounded-full p-[2px] bg-gradient-to-tr from-yellow-500 via-accent-500 to-primary-500 text-white text-sm'>
              +{lineup.length - 3}
            </div>
          )}
          {lineup.length <= 3 && (
            <div className='flex items-center justify-center w-12 h-12 rounded-full p-[2px] bg-gradient-to-tr from-yellow-500 via-accent-500 to-primary-500 text-white text-sm'>
              <CaretDown className='w-6 h-6 text-white' />
            </div>
          )}
        </motion.div>
      )}
    </>
  );
};

export default LineUp;
