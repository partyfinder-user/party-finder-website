import React from 'react';
import { cookies } from 'next/headers';

import Main from '@/components/Layouts/Main';
import BgGlassmorphism from '@/components/Helpers/BgGlassmorphism';
import LocalSlideCard from '@/components/UI/LocalSlideCard';
import EventSlideCard from '@/components/UI/EventSlideCard';
import EventListCard from '@/components/UI/EventListCard';

function generateTopEvents(events) {
  const totalEvents = events.length;

  if (totalEvents < 5) {
    const topEvents = totalEvents > 1 ? events.slice(0, 1) : [];
    const normalEvents = totalEvents > 1 ? events.slice(1) : events;
    return { topEvents, events: normalEvents };
  }

  const topEventsCount = Math.ceil(totalEvents / 2);
  const topEvents = events.slice(0, topEventsCount);
  const otherEvents = events.slice(topEventsCount);

  console.log('topEvents', topEvents);
  console.log('otherEvents', otherEvents);

  return { topEvents, otherEvents };
}

async function getData({ geo }) {
  const body = {
    ...(geo && { coordinates: [geo.long, geo.lat] }),
  };

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };

  const response = await fetch(`${process.env.API_SERVICE_BASE_URL}builder/home`, requestOptions);

  if (!response.ok) {
    throw new Error('Error handling data fetch');
  }

  const data = await response.json();
  return data;
}

export default async function Home() {
  const cookieStore = cookies();
  const __geo_lat_prtfn_ = cookieStore.get('__geo_lat_prtfn_');
  const __geo_long_prtfn_ = cookieStore.get('__geo_long_prtfn_');

  let geo;
  if (
    __geo_lat_prtfn_ &&
    __geo_lat_prtfn_?.value !== 'null' &&
    __geo_long_prtfn_ &&
    __geo_long_prtfn_?.value !== 'null'
  ) {
    geo = { lat: parseFloat(__geo_lat_prtfn_.value), long: parseFloat(__geo_long_prtfn_.value) };
  }

  const { events, places, types } = await getData({ geo });
  const { topEvents, otherEvents } = generateTopEvents(events);

  return (
    <Main>
      <BgGlassmorphism />
      <div className='relative overflow-hidden'>
        <div>
          {places?.length && (
            <section className='mb-6'>
              <h2 className='text-lg font-medium mb-2'>Locali in evidenza</h2>
              <div className='relative snap-x mx-auto snap-mandatory overflow-x-scroll overflow-y-hidden scrollbar-hide'>
                <div className='w-full flex flex-row justify-between gap-2'>
                  {places?.map((place) => (
                    <LocalSlideCard key={place._id} local={place} />
                  ))}
                </div>
              </div>
            </section>
          )}

          {types?.length && (
            <section className='mb-6'>
              <h2 className='text-lg font-medium  mb-2 text-white'>Generi più seguiti</h2>
              <div className='relative snap-x mx-auto snap-mandatory overflow-x-scroll overflow-y-hidden scrollbar-hide'>
                <div className='w-full flex flex-row gap-2'>
                  {types?.map((type) => (
                    <div key={type._id} className='flex flex-col items-center justify-center gap-3'>
                      <div className='text-sm px-5 py-2 bg-background-500/70 border border-background-400 rounded-full text-white whitespace-nowrap'>
                        {type.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {topEvents.length && (
            <section className='mb-6'>
              <h2 className='text-lg font-medium mb-2 text-white'>Eventi piu attesi</h2>
              <div className='relative snap-x mx-auto snap-mandatory overflow-x-scroll overflow-y-hidden scrollbar-hide'>
                <div className='w-full flex flex-row gap-4'>
                  {topEvents?.map((event) => (
                    <EventSlideCard key={event._id} event={event} />
                  ))}
                </div>
              </div>
            </section>
          )}

          {otherEvents?.length && (
            <section>
              <h2 className='text-lg font-medium mb-2 text-white'>Eventi in programma</h2>
              <div className='w-full flex flex-col gap-4'>
                {otherEvents?.map((event) => (
                  <EventListCard key={event._id} event={event} />
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </Main>
  );
}
