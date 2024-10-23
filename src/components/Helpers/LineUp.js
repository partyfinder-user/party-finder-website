'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { UserCircleCheck } from '@phosphor-icons/react';

const LineUp = ({ artists }) => {
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
            {artists.map((artist, index) => (
              <div key={index} className='flex items-center justify-between'>
                <div className='flex items-center space-x-4'>
                  {artist.image ? (
                    <div className='relative w-12 h-12 rounded-full p-[2px] bg-gradient-to-tr from-yellow-500 via-accent-500 to-primary-500'>
                      <div className='w-full h-full rounded-full'>
                        <Image
                          src={artist.image}
                          alt={artist.name}
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
                  <span>{artist.name}</span>
                </div>
                <button className='bg-white text-black py-1 px-3 rounded-full text-sm'>Eventi</button>
              </div>
            ))}
            <div className='w-full flex justify-end'>
              <button onClick={() => setIsExpanded(false)} className='text-white py-1 px-4 rounded-full border border-white/60'>
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
          {artists.slice(0, 3).map((artist, index) =>
            artist.image ? (
              <Image
                key={index}
                src={artist.image}
                alt={artist.name}
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
          <div className='flex items-center justify-center w-12 h-12 rounded-full p-[2px] bg-gradient-to-tr from-yellow-500 via-accent-500 to-primary-500 text-white text-sm'>
            +{artists.length - 3}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default LineUp;
