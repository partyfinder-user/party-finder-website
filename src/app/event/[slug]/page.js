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
  ShareNetwork,
} from '@phosphor-icons/react/dist/ssr';

import ToggleDescription from '@/components/Helpers/ToggleDescription';
import ParallaxImage from '@/components/Helpers/ParallaxImage';
import ContactBar from '@/components/Shared/ContactBar';
import ReserveButton from '@/components/Shared/ReserveButton';
import LineUp from '@/components/Helpers/LineUp';
import EventSlideCard from '@/components/UI/EventSlideCard';
import CopyTextButton from '@/components/Helpers/CopyTextButton';
import Link from 'next/link';

async function getData(slug) {
  const response = await fetch(`${process.env.NEXT_API_SERVICE_BASE_URL}builder/event/${slug}`);

  if (!response.ok) {
    throw new Error('Error to handler get data');
  }
  const data = await response.json();
  return data;
}

export default async function EventPage({ params }) {
  const { slug } = params;
  const event = await getData(slug);

  const options = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  const date = new Date(event.dateStart);
  const readableDate = date.toLocaleString('it-IT', options);

  return (
    <div className='overflow-hidden bg-gradient-to-b from-[#13003388] via-[#130033] to-transparent'>
      <div className='relative h-[45vh] overflow-hidden'>
        <ParallaxImage imageSrc={event.images[0].key} />
        <div className='absolute inset-0 bg-gradient-to-b from-transparent via-[#13003388] to-[#130033]'></div>
        <div className='absolute bottom-6 right-5'>
          <button>
            <Heart className='w-6 h-6 text-white' />
          </button>
          <button className='ml-4'>
            <ShareNetwork className='w-6 h-6 text-white' />
          </button>
        </div>
      </div>

      <div className='px-4 mt-4'>
        <span className='text-xl text-white/80 capitalize'>
          {readableDate}, {event.hourStart}
        </span>
        <h2 className='text-4xl mb-1'>{event.name}</h2>
        <div className='flex items-center text-xl text-accent'>
          <MapPin className='w-6 h-6' />
          {event.city}
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
              src={process.env.NEXT_PUBLIC_IMAGE_BASE_URL + event.place.logo.key}
              alt={event.name}
              width={80}
              height={80}
              className='object-cover h-[60px] w-[60px] rounded-full'
            />
            <div className='ml-2'>
              <span className='text-sm text-white'>Locale</span>
              <h3 className='text-2xl'> {event.place.name}</h3>
              <div className='flex items-center my-2 text-sm'>
                {event.address} <CopyTextButton textToCopy={event.position} />
              </div>
              <div className='flex items-center text-xs text-white/80'>
                <DoorOpen className='w-4 h-4 mr-1' /> Apertura porte
                <span className='font-semibold text-white ml-1'>{event.hourStart}</span>
              </div>
              <div className='text-sm text-white/80 mt-4 flex items-center'>
                <Link
                  href={event.mapsUri}
                  target='_blank'
                  className='text-white py-1 px-4 rounded-full border border-white/60 mr-2 flex items-center'
                >
                  <MapPin className='w-4 h-4 mr-1' /> Apri su MAPS
                </Link>
                <Link href={'/local'} className='text-white py-1 px-4 rounded-full border border-white/60'>
                  Altri eventi
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-y-4'>
          <div className='flex items-center space-x-4'>
            <MusicNote className='w-12 h-12 text-accent' />
            <div className='flex flex-col'>
              <span className='text-xs text-white/80 -mb-1'>Generi musicali</span>
              <span className='text-xl'>{event.types.map((t) => t.name).join(', ')}</span>
            </div>
          </div>
          {event?.artists?.length > 0 && (
            <div className='flex items-center space-x-4'>
              <DiscoBall className='w-12 h-12 text-accent' />
              <div className='flex flex-col'>
                <span className='text-xs text-white/80 -mb-1'>Artisti</span>
                <span className='text-xl'>{event.artists.map((a) => a.name).join(', ')}</span>
              </div>
            </div>
          )}
          <div className='flex items-center space-x-4'>
            <CurrencyEur className='w-12 h-12 text-accent' />
            <div className='flex flex-col'>
              <span className='text-xs text-white/80 -mb-1'>Prezzi</span>
              <span className='text-xl'>{event.price === 'to-pay' ? 'A pagamento' : 'Freentry'}</span>
            </div>
          </div>
          <div className='flex items-center space-x-4'>
            <IdentificationCard className='w-12 h-12 text-accent' />
            <div className='flex flex-col'>
              <span className='text-xs text-white/80 -mb-1'>Età minima</span>
              <span className='text-xl'>{event.age}</span>
            </div>
          </div>
        </div>

        {(event?.tickets?.length > 0 || event?.affiliation) && (
          <div className='w-full my-4'>
            <ReserveButton affiliation={event?.affiliation} tickets={event?.tickets} />
          </div>
        )}

        <div className='w-full my-4'>
          <h2 className='text-xl font-bold mb-2'>A propsito di</h2>
          <ToggleDescription text={event.description} maxChars={120} />
        </div>

        {(event?.lineup || event?.lineup?.length > 0) && (
          <div className='w-full my-4'>
            <h2 className='text-xl font-bold mb-2'>Line Up</h2>
            <LineUp lineup={event.lineup} />
          </div>
        )}

        {/* <section className='my-4'>
          <h2 className='text-xl font-bold mb-2'>Eventi correlati</h2>
          <div className='relative snap-x mx-auto snap-mandatory overflow-x-scroll overflow-y-hidden scrollbar-hide'>
            <div className='w-full flex flex-row gap-4'>
              {event.relatedEvents.map((event) => (
                <EventSlideCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </section> */}

        <ContactBar />
      </div>
    </div>
  );
}
