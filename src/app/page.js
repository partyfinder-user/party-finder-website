import Image from 'next/image';

import Main from '@/components/Layouts/Main';
import BgGlassmorphism from '@/components/Helpers/BgGlassmorphism';
import { HeartIcon } from '@heroicons/react/24/outline';

const locals = [
  {
    id: 2,
    name: 'Villa Bonin',
    image: '/stock/local-2.jpg',
  },
  {
    id: 3,
    name: 'Hollywood',
    image: '/stock/local-3.jpg',
  },
  {
    id: 4,
    name: 'Amnesia',
    image: '/stock/local-4.jpg',
  },
  {
    id: 5,
    name: 'Mr. Charlie',
    image: '/stock/local-5.png',
  },
  {
    id: 6,
    name: 'Pacha Ibiza',
    image: '/stock/local-6.jpg',
  },
  {
    id: 1,
    name: 'Club Papaya',
    image: '/stock/local-1.jpg',
  },
  {
    id: 7,
    name: 'Baia Imperiale',
    image: '/stock/local-7.jpg',
  },
  {
    id: 8,
    name: 'Fabrique',
    image: '/stock/local-8.jpg',
  },
  {
    id: 9,
    name: 'Samsara Beach',
    image: '/stock/local-1.jpg',
  },
  {
    id: 10,
    name: 'Il Muretto',
    image: '/stock/local-2.jpg',
  },
  {
    id: 11,
    name: 'Mamacita Club',
    image: '/stock/local-3.jpg',
  },
  {
    id: 12,
    name: 'Cocoricò',
    image: '/stock/local-4.jpg',
  },
];

const musicGenres = ['House', 'Techno', 'EDM', 'Hip-Hop', 'Trap', 'Reggaeton', 'Dubstep', 'Trance', 'Disco', 'Funk'];

const events = [
  {
    id: 3,
    title: 'Vida Loca',
    venue: 'Club Papaya',
    date: 'Sabato 29 Ottobre',
    location: 'Via Roma, 12, Milano',
    image: '/stock/image-3.png',
  },
  {
    id: 1,
    title: 'Mamacita',
    venue: 'Villa Bonin',
    date: 'Sabato 22 Ottobre',
    location: 'Via del commercio, 49, Vicenza',
    image: '/stock/image-1.png',
  },
  {
    id: 2,
    title: 'Mr. Charlie Lignano',
    venue: 'Mr. Charlie',
    date: 'Venerdì 21 Ottobre',
    location: 'Via Napoli, 27, Lignano Sabbiadoro',
    image: '/stock/image-2.png',
  },
  {
    id: 4,
    title: 'Ibiza Party',
    venue: 'Amnesia',
    date: 'Domenica 23 Ottobre',
    location: 'Via Ibiza, 34, Roma',
    image: '/stock/image-4.png',
  },
  {
    id: 5,
    title: 'Techno Night',
    venue: 'Fabrique',
    date: 'Venerdì 28 Ottobre',
    location: 'Via Fantasia, 89, Firenze',
    image: '/stock/image-5.png',
  },
  {
    id: 6,
    title: 'Afrobeat Vibes',
    venue: 'Hollywood Club',
    date: 'Sabato 5 Novembre',
    location: 'Corso Como, 15, Milano',
    image: '/stock/image-6.png',
  },
  {
    id: 7,
    title: 'Afrobeat Vibes',
    venue: 'Hollywood Club',
    date: 'Sabato 5 Novembre',
    location: 'Corso Como, 15, Milano',
    image: '/stock/image-7.png',
  },
];

const topEvents = [
  {
    id: 3,
    title: 'Vida Loca',
    venue: 'Club Papaya',
    date: 'Sabato 29 Ottobre',
    location: 'Via Roma, 12, Milano',
    image: '/stock/image-3.png',
  },
  {
    id: 1,
    title: 'Mamacita',
    venue: 'Villa Bonin',
    date: 'Sabato 22 Ottobre',
    location: 'Via del commercio, 49, Vicenza',
    image: '/stock/image-1.png',
  },
  {
    id: 2,
    title: 'Mr. Charlie Lignano',
    venue: 'Mr. Charlie',
    date: 'Venerdì 21 Ottobre',
    location: 'Via Napoli, 27, Lignano Sabbiadoro',
    image: '/stock/image-2.png',
  },
  {
    id: 4,
    title: 'Ibiza Party',
    venue: 'Amnesia',
    date: 'Domenica 23 Ottobre',
    location: 'Via Ibiza, 34, Roma',
    image: '/stock/image-4.png',
  },
  {
    id: 5,
    title: 'Techno Night',
    venue: 'Fabrique',
    date: 'Venerdì 28 Ottobre',
    location: 'Via Fantasia, 89, Firenze',
    image: '/stock/image-5.png',
  },
  {
    id: 6,
    title: 'Afrobeat Vibes',
    venue: 'Hollywood Club',
    date: 'Sabato 5 Novembre',
    location: 'Corso Como, 15, Milano',
    image: '/stock/image-6.png',
  },
  {
    id: 7,
    title: 'Afrobeat Vibes',
    venue: 'Hollywood Club',
    date: 'Sabato 5 Novembre',
    location: 'Corso Como, 15, Milano',
    image: '/stock/image-7.png',
  },
];

const otherEvents = [
  {
    id: 6,
    title: 'Afrobeat Vibes',
    venue: 'Hollywood Club',
    date: 'Sabato 5 Novembre',
    location: 'Corso Como, 15, Milano',
    image: '/stock/image-6.png',
  },
  {
    id: 4,
    title: 'Ibiza Party',
    venue: 'Amnesia',
    date: 'Domenica 23 Ottobre',
    location: 'Via Ibiza, 34, Roma',
    image: '/stock/image-4.png',
  },
  {
    id: 2,
    title: 'Mr. Charlie Lignano',
    venue: 'Mr. Charlie',
    date: 'Venerdì 21 Ottobre',
    location: 'Via Napoli, 27, Lignano Sabbiadoro',
    image: '/stock/image-2.png',
  },
  {
    id: 3,
    title: 'Vida Loca',
    venue: 'Club Papaya',
    date: 'Sabato 29 Ottobre',
    location: 'Via Roma, 12, Milano',
    image: '/stock/image-3.png',
  },
  {
    id: 1,
    title: 'Mamacita',
    venue: 'Villa Bonin',
    date: 'Sabato 22 Ottobre',
    location: 'Via del commercio, 49, Vicenza',
    image: '/stock/image-1.png',
  },
  {
    id: 5,
    title: 'Techno Night',
    venue: 'Fabrique',
    date: 'Venerdì 28 Ottobre',
    location: 'Via Fantasia, 89, Firenze',
    image: '/stock/image-5.png',
  },

  {
    id: 7,
    title: 'Afrobeat Vibes',
    venue: 'Hollywood Club',
    date: 'Sabato 5 Novembre',
    location: 'Corso Como, 15, Milano',
    image: '/stock/image-7.png',
  },
];

export default function Home() {
  return (
    <Main>
      <BgGlassmorphism />
      <div className='relative overflow-hidden'>
        <div>
          <section className='mb-6'>
            <h2 className='text-lg font-medium mb-2'>Locali in evidenza</h2>
            <div className='relative snap-x mx-auto snap-mandatory overflow-x-scroll overflow-y-hidden scrollbar-hide'>
              <div className='w-full flex flex-row justify-between gap-2'>
                {locals.map((locale) => (
                  <div key={locale.id} className='flex flex-col items-center justify-center gap-3'>
                    <div className='relative w-20 h-20 rounded-full p-[2px] bg-gradient-to-tr from-yellow-500 via-accent-500 to-primary-500'>
                      <div className='w-full h-full rounded-full'>
                        <Image
                          src={locale.image}
                          width={80}
                          height={80}
                          alt={locale.name}
                          className='w-full h-full rounded-full object-cover border-gray-800 border'
                        />
                      </div>
                    </div>
                    <span className='text-xs text-white text-center max-w-[100px] whitespace-nowrap overflow-hidden text-ellipsis'>
                      {locale.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className='mb-6'>
            <h2 className='text-lg font-medium  mb-2 text-white'>Generi più seguiti</h2>
            <div className='relative snap-x mx-auto snap-mandatory overflow-x-scroll overflow-y-hidden scrollbar-hide'>
              <div className='w-full flex flex-row gap-2'>
                {musicGenres.map((genere, idx) => (
                  <div key={idx} className='flex flex-col items-center justify-center gap-3'>
                    <div className='text-sm px-5 py-2 bg-background-500/70 border border-background-400 rounded-full text-white whitespace-nowrap'>
                      {genere}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className='mb-6'>
            <h2 className='text-lg font-medium mb-2 text-white'>Notte da Leoni</h2>
            <div className='relative snap-x mx-auto snap-mandatory overflow-x-scroll overflow-y-hidden scrollbar-hide'>
              <div className='w-full flex flex-row gap-4'>
                {topEvents.map((event, idx) => (
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
                        <HeartIcon className='w-6 h-6 text-white' />
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

          <section className='mb-6'>
            <h2 className='text-lg font-medium mb-2 text-white'>Party di fine estate</h2>
            <div className='relative snap-x mx-auto snap-mandatory overflow-x-scroll overflow-y-hidden scrollbar-hide'>
              <div className='w-full flex flex-row gap-4'>
                {otherEvents.map((event, idx) => (
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
                        <HeartIcon className='w-6 h-6 text-white' />
                      </div>

                      <div className='absolute top-0 right-0 bg-background-800/80 backdrop-blur-sm text-neon-low font-medium text-md px-3.5 py-1.5 rounded-bl-lg'>
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

          <section>
            <h2 className='text-lg font-medium mb-2 text-white'>Altri eventi in programma</h2>
            <div className='w-full flex flex-col gap-4'>
              {events.map((event, idx) => (
                <div
                  key={idx}
                  className='flex flex-row items-stretch bg-background-500/60 border border-background-500 rounded-lg shadow-sm hover:bg-background-700 transition-all duration-300 overflow-hidden'
                >
                  <div className='flex-shrink-0'>
                    <Image
                      src={event.image}
                      width={170}
                      height={200}
                      alt={event.title}
                      className='object-cover h-full rounded-l-lg'
                    />
                  </div>

                  <div className='flex flex-col justify-between px-4 py-2 flex-grow gap-2'>
                    <div>
                      <span className='text-lg text-white block'>{event.title}</span>
                      <span className='text-accent-500 font-medium'>{event.venue}</span>
                    </div>

                    <div className='flex flex-col'>
                      <span className='text-xs text-white mb-1'>{event.date}</span>
                      <span className='text-xs text-background-200'>{event.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </Main>
  );
}
