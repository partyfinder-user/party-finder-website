import React from 'react';

import ToggleDescription from '@/components/Helpers/ToggleDescription';
import ParallaxImage from '@/components/Helpers/ParallaxImage';
import LargeEventListCard from '@/components/UI/LargeEventListCard';
import SocialIcons from '@/components/Helpers/SocialIcons';

async function getData(slug) {
  const response = await fetch(`${process.env.API_SERVICE_BASE_URL}builder/artist/${slug}`);

  if (!response.ok) {
    throw new Error('Error to handler get data');
  }
  const data = await response.json();
  return data;
}

export default async function ArtistPage({ params }) {
  const { slug } = params;
  const artist = await getData(slug);

  return (
    <div className='overflow-hidden bg-gradient-to-b from-[#13003388] via-[#130033] to-transparent'>
      <div className='relative h-[45vh] overflow-hidden'>
        <ParallaxImage imageSrc={artist.image} />
        <div className='absolute inset-0 bg-gradient-to-b from-transparent via-[#13003388] to-[#130033]'></div>
      </div>

      <div className='px-4 my-4'>
        <h2 className='text-4xl mb-1'>{artist.name}</h2>

        {artist?.social?.length && <SocialIcons socials={artist.social} />}

        {artist?.description && (
          <div className='w-full my-2'>
            <h2 className='text-xl mb-2'>Descrizione</h2>
            <ToggleDescription text={artist.description} maxChars={120} />
          </div>
        )}

        {artist?.events?.length > 0 && (
          <div className='w-full my-4'>
            <h2 className='text-xl mb-2'>Prossimi eventi</h2>
            {artist.events.map((event, idx) => (
              <LargeEventListCard key={idx} event={event} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
