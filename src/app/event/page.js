'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import ToggleDescription from '@/components/Helpers/ToggleDescription';

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
  GoogleLogo,
} from '@phosphor-icons/react/dist/ssr';

const event = {
  title: 'Diss Gacha Show',
  date: 'Sabato 22 Maggio',
  image: '/stock/locandina.jpg',
  venue: {
    name: 'Villa Bonin',
    address: 'Via del commercio, 49, Vicenza, VI',
  },
  musicGenres: ['Trap', 'Rap'],
  artists: ['Diss Gacha'],
  price: 'Freentry',
  ageRestriction: '+18',
  booking: {
    platform: 'Getfy',
    contact: 'Prenotazione disponibile su Getfy',
  },
  description:
    "Partecipa al Diss Gacha Show con musica Trap, Rap. L'evento si terrà presso Villa Bonin, un club esclusivo a Vicenza. Partecipa al Diss Gacha Show con musica Trap, Rap. L'evento si terrà presso Villa Bonin, un club esclusivo a Vicenza. Partecipa al Diss Gacha Show con musica Trap, Rap. L'evento si terrà presso Villa Bonin, un club esclusivo a Vicenza",
};

import { motion, useMotionValue, useTransform } from 'framer-motion';

const ParallaxImage = ({ imageSrc }) => {
  const scrollY = useMotionValue(0);
  const scale = useTransform(scrollY, [0, 500], [1, 1.3]);
  const y = useTransform(scrollY, [0, 200], [0, 100]);

  useEffect(() => {
    const updateScrollY = () => {
      scrollY.set(window.scrollY);
    };

    window.addEventListener('scroll', updateScrollY);
    return () => {
      window.removeEventListener('scroll', updateScrollY);
    };
  }, [scrollY]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        y,
        scale,
      }}
      className='relative h-[60vh]'
    />
  );
};

export default function EventPage() {
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

        {/* Social icons */}
        <div className='flex items-center my-4 gap-x-2'>
          <div className='flex items-center justify-center rounded-full w-12 h-12 border-2 border-white/10'>
            <Globe className='w-8 h-8 text-white' weight='duotone' />
          </div>
          <div className='flex items-center justify-center rounded-full w-12 h-12 border-2 border-white/10'>
            <Phone className='w-8 h-8 text-white' weight='duotone' />
          </div>
          <div className='flex items-center justify-center rounded-full w-12 h-12 border-2 border-white/10'>
            <FacebookLogo className='w-8 h-8 text-white' weight='duotone' />
          </div>
          <div className='flex items-center justify-center rounded-full w-12 h-12 border-2 border-white/10'>
            <InstagramLogo className='w-8 h-8 text-white' weight='duotone' />
          </div>
          <div className='flex items-center justify-center rounded-full w-12 h-12 border-2 border-white/10'>
            <XLogo className='w-8 h-8 text-white' weight='duotone' />
          </div>
        </div>

        {/* Venue and event details */}
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
            </div>
          </div>
        </div>

        {/* More event details */}
        <div className='flex flex-col gap-y-4'>
          <div className='flex items-center space-x-4'>
            <MusicNote className='w-12 h-12 text-accent' />
            <div className='flex flex-col'>
              <span className='text-xs text-white/80 -mb-1'>Generi Musicali</span>
              <span className='text-xl'>Trap, Rap</span>
            </div>
          </div>
          <div className='flex items-center space-x-4'>
            <DiscoBall className='w-12 h-12 text-accent' />
            <div className='flex flex-col'>
              <span className='text-xs text-white/80 -mb-1'>Artisti</span>
              <span className='text-xl'>Diss Gacha</span>
            </div>
          </div>
          <div className='flex items-center space-x-4'>
            <CurrencyEur className='w-12 h-12 text-accent' />
            <div className='flex flex-col'>
              <span className='text-xs text-white/80 -mb-1'>Prezzi</span>
              <span className='text-xl'>FreeEntry</span>
            </div>
          </div>
          <div className='flex items-center space-x-4'>
            <IdentificationCard className='w-12 h-12 text-accent' />
            <div className='flex flex-col'>
              <span className='text-xs text-white/80 -mb-1'>Età minima</span>
              <span className='text-xl'>+18</span>
            </div>
          </div>
        </div>

        {/* Booking button */}
        <div className='w-full my-4'>
          <button
            type='button'
            className='w-full text-white bg-transparent border border-white/10 focus:ring-0 focus:outline-none rounded-lg inline-flex items-center overflow-hidden my-2'
          >
            <div className='flex items-center'>
              <div className='p-2 h-full bg-yellow-500 mr-4'>
                <GoogleLogo className='w-12 h-12 text-violet-700' />
              </div>
              <div className='flex flex-col'>
                <span className='font-thin text-left -mb-1'>Prenotazione disponibile su</span>
                <span className='text-lg text-left'>Getfy</span>
              </div>
            </div>
          </button>
        </div>

        {/* Event description */}
        <div className='w-full'>
          <h2 className='text-xl font-bold mb-2'>Descrizione Evento</h2>
          <ToggleDescription text={event.description} maxChars={120} />
        </div>
      </div>
    </div>
  );
}
