'use client';

import React, { useContext } from 'react';
import { useRouter } from 'next/navigation';

import { cx } from '@/tools/tools';
import { staticUrl } from '@/libs/static-url';
import { Heart } from '@phosphor-icons/react/dist/ssr';
import AuthContext from '@/stores/auth-context';
import FavoritesContext from '@/stores/favorite-context';

const Favorite = ({ itemSlug, type }) => {
  const router = useRouter();
  const authCtx = useContext(AuthContext);
  const favoriteCtx = useContext(FavoritesContext);

  const addToFavorites = (e, slug) => {
    e.nativeEvent.stopImmediatePropagation();
    e.stopPropagation();
    e.preventDefault();

    if (!authCtx?.isLoggedIn) {
      router.push(staticUrl.signin);
    }

    favoriteCtx.addToFavorites({ slug, type });
  };

  const removeFromFavorites = (e, slug) => {
    e.nativeEvent.stopImmediatePropagation();
    e.stopPropagation();
    e.preventDefault();

    if (!authCtx?.isLoggedIn) {
      router.push(staticUrl.signin);
    }

    favoriteCtx.removeFromFavorites({ slug, type });
  };

  return (
    <>
      {favoriteCtx.checkExsitFavorie(itemSlug) ? (
        <Heart
          weight='fill'
          className={cx(
            favoriteCtx.onFetch && favoriteCtx.onFetchItem === itemSlug ? 'animate-ping' : '',
            'w-7 h-7 text-white',
          )}
          aria-hidden='true'
          onClick={(e) => removeFromFavorites(e, itemSlug)}
        />
      ) : (
        <Heart
          className={cx(
            favoriteCtx.onFetch && favoriteCtx.onFetchItem === itemSlug ? 'animate-ping' : '',
            'w-7 h-7 text-white',
          )}
          aria-hidden='true'
          onClick={(e) => addToFavorites(e, itemSlug)}
        />
      )}
    </>
  );
};

export default Favorite;
