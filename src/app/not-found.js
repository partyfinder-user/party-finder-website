import Link from 'next/link';

export default async function NotFound() {
  return (
    <div>
      <main className='mx-auto w-full max-w-8xl px-6 pb-16 sm:pb-24 lg:px-8'>
        <div className='mx-auto mt-10 max-w-2xl text-center sm:mt-12'>
          <p className='text-4xl font-semibold leading-8 text-accent-500'>404</p>
          <h1 className='mt-4 text-3xl font-bold tracking-tight sm:text-5xl'>
            Oops! Contenuto non trovato!
          </h1>
          <p className='max-w-2xl mt-4 text-base text-gray-200 sm:mt-6 sm:text-md'>
            Stai cercando qualcosa che non abbiamo mai visto, oppure che potremmo aver smarrito, anche se ricordo di
            averlo visto da qualche parte. Sì, ma non ricordo dove! 🫣
          </p>
        </div>
        <div className='mx-auto mt-4 flow-root max-w-lg sm:mt-4'>
          <div className='mt-4 flex justify-center'>
            <Link href='/' className='text-sm font-semibold leading-6 text-accent-500'>
              <span aria-hidden='true' className='mr-0.5'>
                &larr;
              </span>
              Torna alla home page
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
