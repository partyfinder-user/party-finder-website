import React from 'react';
import Image from 'next/image';

import {
  TiktokLogo,
  SoundcloudLogo,
  FacebookLogo,
  YoutubeLogo,
  InstagramLogo,
  SpotifyLogo,
} from '@phosphor-icons/react/dist/ssr';
import ToggleDescription from '@/components/Helpers/ToggleDescription';
import ParallaxImage from '@/components/Helpers/ParallaxImage';
import ContactBar from '@/components/Shared/ContactBar';

async function getData() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/mocks/artist.json`);
  if (!response.ok) {
    throw new Error('Error to handler get data');
  }
  const data = await response.json();
  return data;
}

export default async function ArtistPage() {
  const artist = await getData();

  return (
    <div className='overflow-hidden bg-gradient-to-b from-[#13003388] via-[#130033] to-transparent'>
      <div className='relative h-[45vh] overflow-hidden'>
        <ParallaxImage imageSrc={artist.image} />
        <div className='absolute inset-0 bg-gradient-to-b from-transparent via-[#13003388] to-[#130033]'></div>
      </div>

      <div className='px-4 my-4'>
        <h2 className='text-4xl mb-1'>{artist.title}</h2>

        <div className='flex items-center my-4 gap-x-2'>
          <div className='flex items-center justify-center rounded-full w-12 h-12 border-2 border-white/10'>
            <TiktokLogo className='w-6 h-6 text-white' />
          </div>
          <div className='flex items-center justify-center rounded-full w-12 h-12 border-2 border-white/10'>
            <InstagramLogo className='w-6 h-6 text-white' />
          </div>
          <div className='flex items-center justify-center rounded-full w-12 h-12 border-2 border-white/10'>
            <FacebookLogo className='w-6 h-6 text-white' />
          </div>
          <div className='flex items-center justify-center rounded-full w-12 h-12 border-2 border-white/10'>
            <YoutubeLogo className='w-6 h-6 text-white' />
          </div>
          <div className='flex items-center justify-center rounded-full w-12 h-12 border-2 border-white/10'>
            <SpotifyLogo className='w-6 h-6 text-white' />
          </div>
          <div className='flex items-center justify-center rounded-full w-12 h-12 border-2 border-white/10'>
            <SoundcloudLogo className='w-6 h-6 text-white' />
          </div>
        </div>

        <div className='w-full my-2'>
          <h2 className='text-xl mb-2'>Descrizione</h2>
          <ToggleDescription text={artist.description} maxChars={120} />
        </div>

        <div className='w-full my-4'>
          <h2 className='text-xl mb-2'>Prossimi eventi</h2>
          {artist.events.map((event, idx) => (
            <div
              key={idx}
              className='flex flex-col justify-between gap-2 bg-background-500/60 border border-background-500 rounded-lg shadow-lg min-w-[300px] overflow-hidden mb-4'
            >
              <div className='relative'>
                <Image
                  src={event.image}
                  width={360}
                  height={150}
                  alt={event.title}
                  className='w-full object-fill rounded-t-lg'
                />

                <div className='absolute top-0 right-0 bg-background-500/60 border border-background-500/30 backdrop-blur-sm text-neon-low font-medium text-md px-3.5 py-1.5 rounded-bl-lg'>
                  {event.venue}
                </div>

                <div className='p-4 flex flex-col justify-between flex-grow gap-2'>
                  <span className='text-xl text-white leading-tight'>{event.title}</span>

                  <div className='mt-auto flex flex-col gap-1'>
                    <span className='text-xs text-accent-400'>{event.date}</span>
                    <span className='text-xs text-background-200'>{event.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <ContactBar />
      </div>
    </div>
  );
}
