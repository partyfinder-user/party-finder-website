import React from 'react';

const RootContext = React.createContext({
  position: '',
  setPositionCity: (value) => {},
});

export default RootContext;
