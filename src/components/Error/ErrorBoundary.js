'use client';

import Link from 'next/link';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.log({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className='bg-white'>
          <main className='mx-auto w-full max-w-8xl px-6 pb-16 sm:pb-24 lg:px-8'>
            <div className='mx-auto mt-10 max-w-2xl text-center sm:mt-12'>
              <p className='text-4xl font-semibold leading-8 text-accent-500'>Ops! Errore Interno</p>
              <h1 className='mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
                Qui c&apos;è qualquadra che non cosa!
              </h1>
              <p className='max-w-2xl mt-4 text-base text-gray-500 sm:mt-6 sm:text-lg'>
                Abbiamo commesso qualche errore, non siamo perfetti e lo sappiamo, però non c&apos;è bisogno di farcelo
                pesare così tanto! Nel frattempo che io cerco di risolvere il problema che ne dici di tornare alla home?
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

    return this.props.children;
  }
}

export default ErrorBoundary;
