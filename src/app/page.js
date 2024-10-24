import Main from '@/components/Layouts/Main';
import BgGlassmorphism from '@/components/Helpers/BgGlassmorphism';
import LocalSlideCard from '@/components/UI/LocalSlideCard';
import EventSlideCard from '@/components/UI/EventSlideCard';
import EventListCard from '@/components/UI/EventListCard';

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
                  <LocalSlideCard key={locale.id} local={locale} />
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
                {topEvents.map((event) => (
                  <EventSlideCard key={event.id} event={event} />
                ))}
              </div>
            </div>
          </section>

          <section className='mb-6'>
            <h2 className='text-lg font-medium mb-2 text-white'>Party di fine estate</h2>
            <div className='relative snap-x mx-auto snap-mandatory overflow-x-scroll overflow-y-hidden scrollbar-hide'>
              <div className='w-full flex flex-row gap-4'>
                {otherEvents.map((event) => (
                  <EventSlideCard key={event.id} event={event} />
                ))}
              </div>
            </div>
          </section>

          <section>
            <h2 className='text-lg font-medium mb-2 text-white'>Altri eventi in programma</h2>
            <div className='w-full flex flex-col gap-4'>
              {events.map((event) => (
                <EventListCard key={event.id} event={event} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </Main>
  );
}
