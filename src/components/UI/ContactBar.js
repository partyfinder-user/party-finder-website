'use client';

import React, { useContext } from 'react';

import { Heart, WhatsappLogo, ShareNetwork } from '@phosphor-icons/react/dist/ssr';
import RootContext from '@/stores/root-context';
import { cx } from '@/tools/tools';

const ContactBar = (params) => {
  const rootCtx = useContext(RootContext);
  return (
    <div
      className={cx(
        'w-full flex items-center fixed left-0 p-4 gap-2',
        !rootCtx?.footerNavVisible ? 'bottom-0' : 'bottom-16 opacity-30',
      )}
    >
      <div>
        <button className='rounded-full bg-background p-4 mr-2'>
          <Heart className='w-8 h-8 text-accent-500' />
        </button>
        <button className='rounded-full bg-background p-4'>
          <ShareNetwork className='w-8 h-8 text-accent-500' />
        </button>
      </div>
      <div className='flex-1 w-full'>
        <button className='w-full flex items-center justify-center rounded-3xl bg-background p-4'>
          <WhatsappLogo className='w-8 h-8 text-accent-500 mr-2' />
          <span className='flex-1 text-center text-large'>Prenota un tavolo</span>
        </button>
      </div>
    </div>
  );
};

export default ContactBar;
