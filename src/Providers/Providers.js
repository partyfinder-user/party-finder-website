'use client';

import { NextUIProvider } from '@nextui-org/react';
import RootProvider from '@/stores/RootProvider';

export function Providers({ children }) {
  return (
    <NextUIProvider>
      <RootProvider>{children}</RootProvider>
    </NextUIProvider>
  );
}
