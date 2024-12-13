'use client';

import React, { useContext } from 'react';
import { useRouter } from 'next/navigation';

import { staticUrl } from '@/libs/static-url';
import { Heart } from '@phosphor-icons/react';
import { Spinner } from '@nextui-org/spinner';
import AuthContext from '@/stores/auth-context';
import FavoritesContext from '@/stores/favorite-context';

const Favorite = ({ itemId, type }) => {
  const router = useRouter();
  const authCtx = useContext(AuthContext);
  const favoriteCtx = useContext(FavoritesContext);

  const addToFavorites = (e, id) => {
    e.nativeEvent.stopImmediatePropagation();
    e.stopPropagation();
    e.preventDefault();

    if (!authCtx?.isLoggedIn) {
      router.push(staticUrl.signin);
    }

    favoriteCtx.addToFavorites({ id, type });
  };

  const removeFromFavorites = (e, id) => {
    e.nativeEvent.stopImmediatePropagation();
    e.stopPropagation();
    e.preventDefault();

    if (!authCtx?.isLoggedIn) {
      router.push(staticUrl.signin);
    }

    favoriteCtx.removeFromFavorites({ id, type });
  };

  if (favoriteCtx.onFetch && favoriteCtx.onFetchItem === itemId) {
    return <Spinner size='sm' />;
  }

  return (
    <>
      {favoriteCtx.checkExsitFavorie(itemId) ? (
        <Heart
          weight='fill'
          className='w-7 h-7 text-white cursor-pointer'
          aria-hidden='true'
          onClick={(e) => removeFromFavorites(e, itemId)}
        />
      ) : (
        <Heart
          className='w-7 h-7 text-white cursor-pointer'
          aria-hidden='true'
          onClick={(e) => addToFavorites(e, itemId)}
        />
      )}
    </>
  );
};

export default Favorite;
