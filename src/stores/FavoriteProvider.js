import React, { useContext, useEffect, useCallback, useState } from 'react';

import CartContext from './favorite-context';
import AuthContext from './auth-context';

const FavoriteProvider = (props) => {
  const authCtx = useContext(AuthContext);
  const [onFetch, setOnFetch] = useState(false);
  const [onFetchItem, setOnFetchItem] = useState('');
  const [userUUID, setUserUUID] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const [favoriteCount, setFavoriteCount] = useState({});
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [lastFavoriteUpdate, setLastFavoriteUpdate] = useState('');

  const checkExsitFavorie = (itemId) => {
    return favoriteIds?.find((id) => id === itemId);
  };

  const getFavoriteCount = useCallback(async (userUUID, token) => {
    if (!userUUID || !token) {
      return;
    }

    const options = {
      headers: {
        usruuid: userUUID,
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const uri = `${process.env.NEXT_PUBLIC_SERVICE_BASE_URL}favorite/get`;
      const response = await fetch(uri, options);
      if (!response.ok) {
        return;
      }

      const value = await response.json();

      const counts = {
        events: value?.events?.length,
        artists: value?.artists?.length,
        places: value?.places?.length,
        formats: value?.formats?.length,
      };
      const totalCount = Object.values(counts).reduce((acc, count) => acc + count, 0);
      const ids = [
        ...(value?.events ?? []),
        ...(value?.artists ?? []),
        ...(value?.places ?? []),
        ...(value?.formats ?? []),
      ];

      setFavoriteCount(totalCount);
      setFavoriteIds(ids);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const addToFavorites = async ({ id, type }) => {
    if (!userUUID || !authCtx?.token) {
      return;
    }

    const item = { type, value: id };

    try {
      setOnFetch(true);
      setOnFetchItem(id);
      const options = {
        headers: {
          usruuid: userUUID,
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authCtx.token}`,
        },
        method: 'POST',
        body: JSON.stringify(item),
      };

      const uri = `${process.env.NEXT_PUBLIC_SERVICE_BASE_URL}favorite/add`;
      const response = await fetch(uri, options);
      if (!response.ok) {
        setOnFetch(false);
        setOnFetchItem('');
        return;
      }

      getFavoriteCount(userUUID, authCtx?.token);
      setOnFetch(false);
      setOnFetchItem('');
    } catch (error) {
      setOnFetch(false);
      setOnFetchItem('');
      console.error(error);
    }
  };

  const removeFromFavorites = async ({ id, type }) => {
    if (!userUUID || !authCtx?.token) {
      return;
    }

    const item = { type, value: id };

    try {
      setOnFetch(true);
      setOnFetchItem(id);
      const options = {
        headers: {
          usruuid: userUUID,
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authCtx.token}`,
        },
        method: 'POST',
        body: JSON.stringify(item),
      };

      const uri = `${process.env.NEXT_PUBLIC_SERVICE_BASE_URL}favorite/remove`;
      const response = await fetch(uri, options);
      if (!response.ok) {
        setOnFetch(false);
        setOnFetchItem('');
        return;
      }

      getFavoriteCount(userUUID, authCtx?.token);
      setOnFetch(false);
      setOnFetchItem('');
    } catch (error) {
      setOnFetch(false);
      setOnFetchItem('');
      console.error(error);
    }
  };

  const refreshFavorites = useCallback(() => {
    getFavoriteCount(userUUID, authCtx?.token);
  }, [userUUID, authCtx?.token, getFavoriteCount]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const storedUpdate = localStorage.getItem('favorite-updated');
      if (storedUpdate !== lastFavoriteUpdate) {
        setLastFavoriteUpdate(storedUpdate);
        refreshFavorites();
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [lastFavoriteUpdate, refreshFavorites]);

  useEffect(() => {
    if (!authCtx.user) {
      return;
    }

    setUserUUID(authCtx.user.uuid);
    setAccessToken(authCtx.token);
  }, [authCtx.user, authCtx.token]);

  useEffect(() => {
    getFavoriteCount(userUUID, accessToken).catch((error) => console.error(error));
  }, [getFavoriteCount, userUUID, accessToken]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const storedUpdate = localStorage.getItem('favorite-updated');
      if (storedUpdate !== lastFavoriteUpdate) {
        setLastFavoriteUpdate(storedUpdate);
        refreshFavorites();
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [lastFavoriteUpdate, refreshFavorites]);

  const favoriteContext = {
    onFetch: onFetch,
    onFetchItem: onFetchItem,
    favorites: favoriteIds,
    count: !isNaN(Number(favoriteCount)) ? favoriteCount.toString() : '0',
    addToFavorites,
    checkExsitFavorie,
    removeFromFavorites,
    refreshFavorites,
  };

  return <CartContext.Provider value={favoriteContext}>{props.children}</CartContext.Provider>;
};

export default FavoriteProvider;
