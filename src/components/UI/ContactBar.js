'use client';

import React from 'react';
import { motion, useScroll } from 'framer-motion';
import { Heart, WhatsappLogo, ShareNetwork } from '@phosphor-icons/react/dist/ssr';

const ContactBar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <div className='fixed bottom-[52px] left-0 w-full'>
        <div className='w-full flex items-center px-2 py-2 gap-2 bg-accent/80 backdrop-blur-sm'>
          <div className='w-full flex-1'>
            <div className='text-sm text-white'>Informazioni</div>
            <div className='text-xs text-white/80'>Prenota un tavolo, un privè o l&apos;ingresso.</div>
          </div>
          <div className='flex items-center justify-end'>
            <button className='flex items-center px-4 py-2 rounded-full bg-white border border-accent text-background'>
              <WhatsappLogo className='w-5 h-5 mr-2' />
              <span className='flex-1 text-center'>Prenota</span>
            </button>
          </div>
        </div>
        <div className='-mt-1 w-full bg-accent/80 backdrop-blur-sm'>
          <motion.div className='h-1 bg-accent-900 origin-left' style={{ scaleX: scrollYProgress }} />
        </div>
      </div>
    </>
  );
};

export default ContactBar;
