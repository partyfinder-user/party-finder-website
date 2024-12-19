import React from 'react';

const RootContext = React.createContext({
  position: {},
  footerNavVisible: false,
  isSearchPanelOpen: false,
  selectedGenres: [],
  setPositionCity: (value) => {},
  setFooterNavIsVisible: (value) => {},
  setSearchPanelOpen: (value) => {},
  handleTypeSelect: (type) => {},
});

export default RootContext;
