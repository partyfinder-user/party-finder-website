import React from 'react';
import { GoogleLogo, CaretRight, Ticket } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';
import Image from 'next/image';

const ReserveButton = ({ affiliation, tickets }) => {
  console.log(affiliation);
  console.log(tickets);
  
  const isTicketsAvailable = tickets && tickets.length > 0;
  const link = isTicketsAvailable ? tickets[0].link : affiliation;
  const providerName = isTicketsAvailable ? tickets[0].provider?.name : 'PartyFinder';
  const logo = isTicketsAvailable ? tickets[0].provider?.logo?.key : null;

  return (
    <Link
      href={link}
      target='_blank'
      rel='noopener noreferrer'
      className='w-full text-white bg-transparent border border-white/10 focus:ring-0 focus:outline-none rounded-lg inline-flex items-center overflow-hidden my-2'
    >
      <div className='w-full flex items-center'>
        <div className='p-2 h-full bg-yellow-500 mr-4'>
          {isTicketsAvailable && logo ? (
            <Image
              src={process.env.NEXT_PUBLIC_IMAGE_BASE_URL + logo}
              alt={tickets[0].provider?.logo?.alt || 'party finder'}
              width={60}
              height={60}
              className='w-14 h-14 object-contain'
            />
          ) : (
            <Ticket className='w-14 h-14 text-violet-700' />
          )}
        </div>
        <div className='w-full flex items-center justify-between'>
          <div className='flex flex-col flex-1'>
            <div className='font-thin text-left -mb-1'>Acquista il tuo biglietto su</div>
            <div className='text-lg text-left'>{providerName}</div>
          </div>
          <CaretRight className='w-8 h-8 text-white/60 mr-4' />
        </div>
      </div>
    </Link>
  );
};

export default ReserveButton;
