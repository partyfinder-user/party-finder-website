import React from 'react';

const RootContext = React.createContext({
  position: {},
  footerNavVisible: false,
  setPositionCity: (value) => {},
  setFooterNavIsVisible: (value) => {},
});

export default RootContext;
