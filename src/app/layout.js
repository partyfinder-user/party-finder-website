import { Montserrat } from 'next/font/google';

import './globals.css';

import Header from '@/components/Layouts/Header/Header';
import Footer from '@/components/Layouts/Footer/Footer';
import FooterNav from '@/components/Layouts/Menu/FooterNav';
import { Providers } from '@/Providers/Providers';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
});

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#281F44' },
    { media: '(prefers-color-scheme: dark)', color: '#281F44' },
  ],
};

export const metadata = {
  title: {
    template: '%s — PartyFinder.it',
    default: 'PartyFinder.it — cerca eventi nella tua zona',
  },
  description: 'Cerca eventi nella tua zona',
};

export default function RootLayout({ children }) {
  return (
    <html lang='it'>
      <body className={`${montserrat.className} bg-gradient-to-bl from-[#130033] to-[#161616] text-white`}>
        <Providers>
          <Header />
          <div className='w-full'>{children}</div>
          <FooterNav />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
