'use client';

import { NextUIProvider } from '@nextui-org/react';
import RootProvider from '@/stores/RootProvider';
import FavoriteProvider from '@/stores/FavoriteProvider';
import AuthProvider from '@/stores/AuthProvider';

export function Providers({ children }) {
  return (
    <NextUIProvider>
      <RootProvider>
        <AuthProvider>
          <FavoriteProvider>{children}</FavoriteProvider>
        </AuthProvider>
      </RootProvider>
    </NextUIProvider>
  );
}
