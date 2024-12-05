import React from 'react';

import {
  Globe,
  FacebookLogo,
  InstagramLogo,
  MapPin,
  TiktokLogo,
  YoutubeLogo,
  SpotifyLogo,
  AppleLogo,
  SoundcloudLogo,
} from '@phosphor-icons/react/dist/ssr';

const SocialIcons = ({ socials }) => {
  const iconMap = {
    instagram: InstagramLogo,
    facebook: FacebookLogo,
    location: MapPin,
    tiktok: TiktokLogo,
    youtube: YoutubeLogo,
    spotify: SpotifyLogo,
    applemusic: AppleLogo,
    soudcloud: SoundcloudLogo,
    site: Globe,
  };

  return (
    <div className='flex items-center my-4 gap-x-2'>
      {socials.map((item) => {
        const IconComponent = iconMap[item.type];
        if (!IconComponent) return null;

        return (
          <a
            key={item._id}
            href={item.link}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center justify-center rounded-full w-12 h-12 border-2 border-white/10'
          >
            <IconComponent className='w-7 h-7 text-white' />
          </a>
        );
      })}
    </div>
  );
};

export default SocialIcons;
