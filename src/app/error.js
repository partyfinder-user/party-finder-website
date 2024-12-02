'use client';

import React from 'react';
import Link from 'next/link';

import AnimationSpin from '@/components/Helpers/AnimationSpin';

export default function Error500() {
  return (
    <div>
      <main className='mx-auto w-full max-w-8xl px-6 pb-16 sm:pb-24 lg:px-8'>
        <div className='mx-auto mt-10 max-w-2xl text-center sm:mt-12'>
          <p className='flex items-center justify-center text-4xl font-semibold leading-8 text-accent-500'>
            <AnimationSpin />
            <span className='ml-2'>Error 500</span>
          </p>
          <h1 className='mt-4 text-3xl font-bold tracking-tight text-accent sm:text-5xl'>
            Oh no! Houston, gavemo un problema!
          </h1>
          <p className='max-w-2xl mt-4 text-base text-gray-200 sm:mt-6 sm:text-lg'>
            Gavemo capìo, te stai pensando che semo sempre a far festa e quindi semo ciucchi e gavemo combinà qualche
            casin!
            <br /> <br /> Può esser, no semo perfetti e lo savemo, ma no xe necessario farne pesarlo così tanto!
            Intanto, mentre mi provo a sistemar el problema, che te par de tornar in home?
          </p>
        </div>
        <div className='mx-auto mt-4 flow-root max-w-lg sm:mt-4'>
          <div className='mt-4 flex justify-center'>
            <Link href='/' className='text-sm font-semibold leading-6 text-accent-500'>
              <span aria-hidden='true' className='mr-0.5'>
                &larr;
              </span>
              Torna alla home page
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
