import React from 'react';
import { GoogleLogo, CaretRight } from '@phosphor-icons/react/dist/ssr';

const ReserveButton = ({ platform }) => {
  return (
    <button
      type='button'
      className='w-full text-white bg-transparent border border-white/10 focus:ring-0 focus:outline-none rounded-lg inline-flex items-center overflow-hidden my-2'
    >
      <div className='w-full flex items-center'>
        <div className='p-2 h-full bg-yellow-500 mr-4'>
          <GoogleLogo className='w-14 h-14 text-violet-700' />
        </div>
        <div className='w-full flex items-center justify-between'>
          <div className='flex flex-col flex-1'>
            <div className='font-thin text-left -mb-1'>Prenotazione disponibile su</div>
            <div className='text-lg text-left'>{platform}</div>
          </div>
          <CaretRight className='w-8 h-8 text-white/60 mr-4' />
        </div>
      </div>
    </button>
  );
};

export default ReserveButton;
