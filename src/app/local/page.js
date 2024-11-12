import React from 'react';
import Image from 'next/image';

import { Globe, FacebookLogo, InstagramLogo, MapPin } from '@phosphor-icons/react/dist/ssr';
import ToggleDescription from '@/components/Helpers/ToggleDescription';
import ParallaxImage from '@/components/Helpers/ParallaxImage';
import ContactBar from '@/components/Shared/ContactBar';
import LargeEventListCard from '@/components/UI/LargeEventListCard';

async function getData() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/mocks/local.json`);
  if (!response.ok) {
    throw new Error('Error to handler get data');
  }
  const data = await response.json();
  return data;
}

export default async function FormatPage() {
  const local = await getData();

  return (
    <div className='overflow-hidden bg-gradient-to-b from-[#13003388] via-[#130033] to-transparent'>
      <div className='relative h-[45vh] overflow-hidden'>
        <ParallaxImage imageSrc={local.image} />
        <div className='absolute inset-0 bg-gradient-to-b from-transparent via-[#13003388] to-[#130033]'></div>
      </div>

      <div className='relative px-4 my-4'>
        <div className='absolute rounded-2xl overflow-hidden w-24 h-24 -top-28'>
          <Image alt={local.name} src={local.logo} width={150} height={150} className='object-cover' />
        </div>
        <h2 className='text-4xl mb-1'>{local.title}</h2>
        <div className='flex items-center text-xl text-accent'>
          <MapPin className='w-6 h-6' />
          {local.address}
        </div>

        <div className='flex items-center my-4 gap-x-2'>
          <div className='flex items-center justify-center rounded-full w-12 h-12 border-2 border-white/10'>
            <Globe className='w-6 h-6 text-white' />
          </div>
          <div className='flex items-center justify-center rounded-full w-12 h-12 border-2 border-white/10'>
            <FacebookLogo className='w-6 h-6 text-white' />
          </div>
          <div className='flex items-center justify-center rounded-full w-12 h-12 border-2 border-white/10'>
            <InstagramLogo className='w-6 h-6 text-white' />
          </div>
          <div className='flex items-center justify-center rounded-full w-12 h-12 border-2 border-white/10'>
            <MapPin className='w-6 h-6 text-white' />
          </div>
        </div>

        <div className='w-full my-2'>
          <h2 className='text-xl mb-2'>Descrizione</h2>
          <ToggleDescription text={local.description} maxChars={120} />
        </div>

        <div className='w-full my-4'>
          <h2 className='text-xl mb-2'>Prossimi eventi</h2>
          {local.events.map((event, idx) => (
            <LargeEventListCard key={idx} event={event} />
          ))}
        </div>

        <ContactBar />
      </div>
    </div>
  );
}
