import React from 'react';

const FavoritesContext = React.createContext({
  count: 0,
  favorites: [],
  onFetch: false,
  onFetchItem: '',
  checkExsitFavorie: (itemId) => {},
  addToFavorites: (params) => {},
  removeFromFavorites: (params) => {},
  refreshFavorites: () => {},
});

export default FavoritesContext;
