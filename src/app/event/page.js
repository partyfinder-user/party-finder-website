import React from 'react';
import Image from 'next/image';

import {
  MapPin,
  Globe,
  FacebookLogo,
  Phone,
  XLogo,
  InstagramLogo,
  IdentificationCard,
  CurrencyEur,
  DiscoBall,
  MusicNote,
  Heart,
  DoorOpen,
} from '@phosphor-icons/react/dist/ssr';

import ToggleDescription from '@/components/Helpers/ToggleDescription';
import ParallaxImage from '@/components/Helpers/ParallaxImage';
import ContactBar from '@/components/UI/ContactBar';
import ReserveButton from '@/components/UI/ReserveButton';
import LineUp from '@/components/Helpers/LineUp';

async function getData() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/mocks/event.json`);
  if (!response.ok) {
    throw new Error('Error to handler get data');
  }
  const data = await response.json();
  return data;
}

export default async function EventPage() {
  const event = await getData();

  return (
    <div className='overflow-hidden bg-gradient-to-b from-[#13003388] via-[#130033] to-transparent'>
      <div className='relative h-[45vh] overflow-hidden'>
        <ParallaxImage imageSrc={event.image} />
        <div className='absolute inset-0 bg-gradient-to-b from-transparent via-[#13003388] to-[#130033]'></div>
      </div>

      <div className='px-4 mt-4'>
        <span className='text-xl text-white/80'>{event.date}</span>
        <h2 className='text-4xl mb-1'>{event.title}</h2>
        <div className='flex items-center text-xl text-accent'>
          <MapPin className='w-6 h-6' />
          {event.venue.address}
        </div>

        <div className='flex items-center my-4 gap-x-2'>
          <div className='flex items-center justify-center rounded-full w-12 h-12 border-2 border-white/10'>
            <Globe className='w-6 h-6 text-white' />
          </div>
          <div className='flex items-center justify-center rounded-full w-12 h-12 border-2 border-white/10'>
            <Phone className='w-6 h-6 text-white' />
          </div>
          <div className='flex items-center justify-center rounded-full w-12 h-12 border-2 border-white/10'>
            <FacebookLogo className='w-6 h-6 text-white' />
          </div>
          <div className='flex items-center justify-center rounded-full w-12 h-12 border-2 border-white/10'>
            <InstagramLogo className='w-6 h-6 text-white' />
          </div>
          <div className='flex items-center justify-center rounded-full w-12 h-12 border-2 border-white/10'>
            <XLogo className='w-6 h-6 text-white' />
          </div>
        </div>

        <div className='py-4 my-4 border-t border-b border-white/10'>
          <div className='flex items-center'>
            <Image
              src={event.image}
              alt={event.title}
              width={80}
              height={80}
              className='object-cover h-[60px] w-[60px] rounded-lg'
            />
            <div className='ml-2'>
              <span className='text-sm text-white/80'>Locale</span>
              <h3 className='text-2xl'> {event.venue.name}</h3>
              <div className='flex items-center text-xs text-white/80'>
                <DoorOpen className='w-4 h-4 mr-1' /> Apertura porte ore
                <span className='font-semibold text-white ml-1'>22.00</span>
              </div>
              <div className='text-sm text-white/80 mt-4 flex items-center'>
                <button className='text-white py-1 px-4 rounded-full border border-white/60 mr-2 flex items-center'>
                  <MapPin className='w-4 h-4 mr-1' /> Apri su MAPS
                </button>
                <button className='text-white py-1 px-4 rounded-full border border-white/60'>Altri eventi</button>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-y-4'>
          <div className='flex items-center space-x-4'>
            <MusicNote className='w-14 h-14 text-accent' />
            <div className='flex flex-col'>
              <span className='text-xs text-white/80 -mb-1'>Generi musicali</span>
              <span className='text-xl'>{event.musicGenres.join(', ')}</span>
            </div>
          </div>
          <div className='flex items-center space-x-4'>
            <DiscoBall className='w-14 h-14 text-accent' />
            <div className='flex flex-col'>
              <span className='text-xs text-white/80 -mb-1'>Artisti</span>
              <span className='text-xl'>{event.artists.join(', ')}</span>
            </div>
          </div>
          <div className='flex items-center space-x-4'>
            <CurrencyEur className='w-14 h-14 text-accent' />
            <div className='flex flex-col'>
              <span className='text-xs text-white/80 -mb-1'>Prezzi</span>
              <span className='text-xl'>{event.price}</span>
            </div>
          </div>
          <div className='flex items-center space-x-4'>
            <IdentificationCard className='w-14 h-14 text-accent' />
            <div className='flex flex-col'>
              <span className='text-xs text-white/80 -mb-1'>Età minima</span>
              <span className='text-xl'>{event.ageRestriction}</span>
            </div>
          </div>
        </div>

        <div className='w-full my-4'>
          <ReserveButton platform={event.booking.platform} />
        </div>

        <div className='w-full my-4'>
          <h2 className='text-xl font-bold mb-2'>Descrizione</h2>
          <ToggleDescription text={event.description} maxChars={120} />
        </div>

        <div className='w-full my-4'>
          <h2 className='text-xl font-bold mb-2'>Line Up</h2>
          <LineUp artists={event.lineUp} />
        </div>

        <section className='my-4'>
          <h2 className='text-xl font-bold mb-2'>Eventi correlati</h2>
          <div className='relative snap-x mx-auto snap-mandatory overflow-x-scroll overflow-y-hidden scrollbar-hide'>
            <div className='w-full flex flex-row gap-4'>
              {event.relatedEvents.map((event, idx) => (
                <div
                  key={idx}
                  className='flex flex-col justify-between gap-2 bg-background-500/60 border border-background-500 rounded-lg shadow-lg min-w-[300px] overflow-hidden'
                >
                  <div className='relative'>
                    <Image
                      src={event.image}
                      width={300}
                      height={150}
                      alt={event.title}
                      className='object-fill rounded-t-lg'
                    />

                    <div className='absolute bottom-3 right-3'>
                      <Heart className='w-6 h-6 text-white' />
                    </div>

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
          </div>
        </section>

        <ContactBar />
      </div>
    </div>
  );
}
