import React from 'react';
import Link from 'next/link';

import { MapPin } from '@phosphor-icons/react/dist/ssr';

import ToggleDescription from '@/components/Helpers/ToggleDescription';
import ParallaxImage from '@/components/Helpers/ParallaxImage';
import LargeEventListCard from '@/components/UI/LargeEventListCard';
import LazyImage from '@/components/Helpers/LazyImage';
import SocialIcons from '@/components/Helpers/SocialIcons';
import CopyTextButton from '@/components/Helpers/CopyTextButton';

async function getData(slug) {
  const response = await fetch(`${process.env.API_SERVICE_BASE_URL}builder/place/${slug}`);

  if (!response.ok) {
    throw new Error('Error to handler get data');
  }
  const data = await response.json();
  return data;
}

export default async function FormatPage({ params }) {
  const { slug } = params;
  const local = await getData(slug);

  return (
    <div className='overflow-hidden bg-gradient-to-b from-[#13003388] via-[#130033] to-transparent'>
      <div className='relative h-[45vh] overflow-hidden'>
        <ParallaxImage imageSrc={local.banner} />
        <div className='absolute inset-0 bg-gradient-to-b from-transparent via-[#13003388] to-[#130033]'></div>
      </div>

      <div className='relative px-4 my-4'>
        <div className='absolute rounded-2xl overflow-hidden w-24 h-24 -top-28'>
          <LazyImage
            alt={local.name}
            src={process.env.NEXT_PUBLIC_IMAGE_BASE_URL + local.logo}
            width={150}
            height={150}
            className='object-cover'
          />
        </div>

        <h2 className='text-4xl mb-1'>{local.title}</h2>
        <div className='flex items-center text-xl text-accent'>
          <MapPin className='w-6 h-6 mr-1' />
          {local.city}
        </div>

        {local?.social?.length && <SocialIcons socials={local.social} />}

        {local?.description && (
          <div className='w-full my-4'>
            <h2 className='text-xl mb-2'>Indirizzo</h2>
            <div className='flex items-center my-2 text-sm'>
              {local.address} <CopyTextButton textToCopy={local.position} />
            </div>
            <div className='text-sm text-white/80 mt-4 flex items-center'>
              <Link
                href={local.mapsUri}
                target='_blank'
                className='text-white py-1 px-4 rounded-full border border-white/60 mr-2 flex items-center'
              >
                <MapPin className='w-4 h-4 mr-1' /> Apri su MAPS
              </Link>
            </div>
          </div>
        )}

        {local?.description && (
          <div className='w-full my-2'>
            <h2 className='text-xl mb-2'>Descrizione</h2>
            <ToggleDescription text={local.description} maxChars={120} />
          </div>
        )}

        {local?.events?.length > 0 && (
          <div className='w-full my-4'>
            <h2 className='text-xl mb-2'>Prossimi eventi</h2>
            {local.events.map((event, idx) => (
              <LargeEventListCard key={idx} event={event} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
